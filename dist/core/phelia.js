"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phelia = void 0;
const interactive_messages_1 = require("@slack/interactive-messages");
const web_api_1 = require("@slack/web-api");
const react_1 = __importStar(require("react"));
const reconciler_1 = require("./reconciler");
const utils_1 = require("./utils");
const components_1 = require("./components");
/** The main phelia client. Handles sending messages with phelia components */
let Phelia = /** @class */ (() => {
    class Phelia {
        constructor(token, slackOptions) {
            this.messageCache = new Map();
            this.homeComponent = undefined;
            this.client = new web_api_1.WebClient(token, slackOptions);
        }
        setStorage(storage) {
            Phelia.Storage = storage;
        }
        postMessage(message, channel, props = null) {
            return __awaiter(this, void 0, void 0, function* () {
                const initializedState = {};
                /** A hook to create some state for a component */
                function useState(key, initialValue) {
                    initializedState[key] = initialValue;
                    return [initialValue, (_) => null];
                }
                /** A hook to create a modal for a component */
                function useModal() {
                    return () => __awaiter(this, void 0, void 0, function* () { return null; });
                }
                const messageData = yield reconciler_1.render(react_1.default.createElement(message, { useState, props, useModal }));
                // only can return a user id here, need to enhance it using methods.user
                const { channel: channelID, ts, message: sentMessageData, } = yield this.client.chat.postMessage(Object.assign(Object.assign({}, messageData), { channel }));
                const messageKey = `${channelID}:${ts}`;
                yield Phelia.Storage.set(messageKey, JSON.stringify({
                    message: JSON.stringify(messageData),
                    type: "message",
                    name: message.name,
                    state: initializedState,
                    user: { id: sentMessageData.user },
                    props,
                    channelID,
                    ts,
                }));
                return messageKey;
            });
        }
        postEphemeral(message, channel, user, props = null) {
            return __awaiter(this, void 0, void 0, function* () {
                const initializedState = {};
                /** A hook to create some state for a component */
                function useState(key, initialValue) {
                    initializedState[key] = initialValue;
                    return [initialValue, (_) => null];
                }
                /** A hook to create a modal for a component */
                function useModal() {
                    return () => __awaiter(this, void 0, void 0, function* () { return null; });
                }
                const messageData = yield reconciler_1.render(react_1.default.createElement(message, { useState, props, useModal }));
                // only can return a user id here, need to enhance it using methods.user
                const { channel: channelID, ts, message: sentMessageData, } = yield this.client.chat.postEphemeral(Object.assign(Object.assign({}, messageData), { user,
                    channel }));
                const messageKey = `${channelID}:${ts}`;
                yield Phelia.Storage.set(messageKey, JSON.stringify({
                    message: JSON.stringify(messageData),
                    type: "message",
                    isEphemeral: true,
                    name: message.name,
                    state: initializedState,
                    user: { id: sentMessageData.user },
                    props,
                    channelID,
                    ts,
                }));
                return messageKey;
            });
        }
        updateMessage(key, props) {
            return __awaiter(this, void 0, void 0, function* () {
                const rawMessageContainer = yield Phelia.Storage.get(key);
                if (!rawMessageContainer) {
                    throw TypeError(`Could not find a message with key ${key}.`);
                }
                const container = JSON.parse(rawMessageContainer);
                if (container.isEphemeral === true) {
                    throw TypeError("Ephemeral messages cannot be updated.");
                }
                /** A hook to create some state for a component */
                function useState(key) {
                    return [
                        container.state[key],
                        (newState) => (container.state[key] = newState),
                    ];
                }
                /** A hook to create a modal for a component */
                function useModal() {
                    return () => __awaiter(this, void 0, void 0, function* () { return null; });
                }
                const message = yield reconciler_1.render(react_1.default.createElement(this.messageCache.get(container.name), {
                    useState,
                    useModal,
                    props,
                }));
                yield this.client.chat.update(Object.assign(Object.assign({}, message), { channel: container.channelID, ts: container.ts }));
                yield Phelia.Storage.set(container.viewID, JSON.stringify({
                    message: JSON.stringify(message),
                    name: this.homeComponent.name,
                    state: container.state,
                    type: "home",
                    viewID: container.viewID,
                    user: container.user,
                }));
            });
        }
        registerComponents(components) {
            const pheliaComponents = utils_1.loadMessagesFromArray(components);
            this.messageCache = pheliaComponents.reduce((cache, { message, name }) => cache.set(name, message), this.messageCache);
        }
        registerHome(home) {
            this.homeComponent = home;
            this.registerComponents([home]);
        }
        updateHome(key) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("phelia: updateHome", key);
                const rawMessageContainer = yield Phelia.Storage.get(key);
                if (!rawMessageContainer) {
                    throw TypeError(`Could not find a home app with key ${key}.`);
                }
                const container = JSON.parse(rawMessageContainer);
                /** A hook to create some state for a component */
                function useState(key) {
                    return [
                        container.state[key],
                        (newState) => (container.state[key] = newState),
                    ];
                }
                /** A hook to create a modal for a component */
                function useModal() {
                    return () => __awaiter(this, void 0, void 0, function* () { return null; });
                }
                /** Run the onload callback */
                yield reconciler_1.render(react_1.default.createElement(this.homeComponent, {
                    useState,
                    useModal,
                    user: container.user,
                }), {
                    value: undefined,
                    event: { user: container.user },
                    type: "onupdate",
                });
                const home = yield reconciler_1.render(react_1.default.createElement(this.homeComponent, {
                    useState,
                    useModal,
                    user: container.user,
                }));
                yield this.client.views.publish({
                    view: home,
                    user_id: container.user.id,
                });
                yield Phelia.Storage.set(container.viewID, JSON.stringify({
                    message: JSON.stringify(home),
                    name: this.homeComponent.name,
                    state: container.state,
                    type: "home",
                    viewID: container.viewID,
                    user: container.user,
                }));
            });
        }
        appHomeHandler(home, onHomeOpened) {
            this.registerHome(home);
            return (payload) => __awaiter(this, void 0, void 0, function* () {
                if (payload.tab !== "home") {
                    return;
                }
                let finalMessageKey;
                const messageKey = utils_1.parseMessageKey(payload);
                let user = { id: payload.user };
                try {
                    const userResponse = (yield this.client.users.info({
                        user: payload.user,
                    }));
                    user.username = userResponse.user.profile.display_name;
                    user.name = userResponse.user.name;
                    user.team_id = userResponse.user.team_id;
                }
                catch (error) {
                    console.warn("Could not retrieve User's information, only 'user.id' is available for Home App. Oauth scope 'users:read' is required.");
                }
                console.log("phelia: appHomeHandler", messageKey, payload);
                const rawMessageContainer = yield Phelia.Storage.get(messageKey);
                if (!rawMessageContainer) {
                    const initializedState = {};
                    /** A hook to create some state for a component */
                    function useState(key, initialValue) {
                        if (!initializedState[key]) {
                            initializedState[key] = initialValue;
                        }
                        return [
                            initializedState[key],
                            (newValue) => (initializedState[key] = newValue),
                        ];
                    }
                    /** A hook to create a modal for a component */
                    function useModal() {
                        return () => __awaiter(this, void 0, void 0, function* () { return null; });
                    }
                    /** Run the onload callback */
                    yield reconciler_1.render(react_1.default.createElement(this.homeComponent, {
                        useState,
                        useModal,
                        user,
                    }), {
                        value: undefined,
                        event: { user },
                        type: "onload",
                    });
                    const home = yield reconciler_1.render(react_1.default.createElement(this.homeComponent, {
                        useState,
                        useModal,
                        user,
                    }));
                    const response = yield this.client.views.publish({
                        view: home,
                        user_id: payload.user,
                    });
                    const viewID = response.view.id;
                    yield Phelia.Storage.set(viewID, JSON.stringify({
                        message: JSON.stringify(home),
                        name: this.homeComponent.name,
                        state: initializedState,
                        type: "home",
                        viewID,
                        user,
                    }));
                    finalMessageKey = viewID;
                }
                else {
                    const container = JSON.parse(rawMessageContainer);
                    /** A hook to create some state for a component */
                    function useState(key) {
                        return [
                            container.state[key],
                            (newState) => (container.state[key] = newState),
                        ];
                    }
                    /** A hook to create a modal for a component */
                    function useModal() {
                        return () => __awaiter(this, void 0, void 0, function* () { return null; });
                    }
                    /** Run the onload callback */
                    yield reconciler_1.render(react_1.default.createElement(this.homeComponent, {
                        useState,
                        useModal,
                        user,
                    }), {
                        value: undefined,
                        event: { user },
                        type: "onload",
                    });
                    const home = yield reconciler_1.render(react_1.default.createElement(this.homeComponent, {
                        useState,
                        useModal,
                        user,
                    }));
                    yield this.client.views.publish({
                        view: home,
                        user_id: payload.user,
                    });
                    yield Phelia.Storage.set(container.viewID, JSON.stringify({
                        message: JSON.stringify(home),
                        name: this.homeComponent.name,
                        state: container.state,
                        type: "home",
                        viewID: container.viewID,
                        user,
                    }));
                    finalMessageKey = container.viewID;
                }
                if (typeof onHomeOpened === "function") {
                    yield onHomeOpened(finalMessageKey, user);
                }
            });
        }
        processAction(payload) {
            return __awaiter(this, void 0, void 0, function* () {
                const messageKey = utils_1.parseMessageKey(payload);
                console.log("phelia: processAction key", messageKey);
                const rawMessageContainer = yield Phelia.Storage.get(messageKey);
                if (!rawMessageContainer) {
                    throw new Error(`Could not find Message Container with key ${messageKey} in storage.`);
                }
                const container = JSON.parse(rawMessageContainer);
                const user = payload.user;
                /** A hook to create some state for a component */
                function useState(key, initialValue) {
                    const [_, setState] = react_1.useState(initialValue);
                    return [
                        container.state[key],
                        (newValue) => {
                            container.state[key] = newValue;
                            setState(newValue);
                        },
                    ];
                }
                /** A hook to create a modal for a component */
                const useModal = (key, modal) => {
                    return (props) => __awaiter(this, void 0, void 0, function* () {
                        const initializedState = {};
                        /** A hook to create some state for the modal */
                        function useState(key, initialValue) {
                            initializedState[key] = initialValue;
                            return [initialValue, (_) => null];
                        }
                        const message = yield reconciler_1.render(react_1.default.createElement(modal, { props, useState }));
                        const response = yield this.client.views.open({
                            trigger_id: payload.trigger_id,
                            view: Object.assign(Object.assign({}, message), { notify_on_close: true }),
                        });
                        const viewID = response.view.id;
                        yield Phelia.Storage.set(viewID, JSON.stringify({
                            message: JSON.stringify(message),
                            modalKey: key,
                            invokerKey: messageKey,
                            name: modal.name,
                            props,
                            state: initializedState,
                            type: "modal",
                            viewID,
                            user,
                        }));
                    });
                };
                for (const action of payload.actions) {
                    yield reconciler_1.render(react_1.default.createElement(this.messageCache.get(container.name), {
                        useState,
                        props: container.props,
                        useModal,
                        user: container.type === "home" ? user : undefined,
                    }), {
                        value: action.action_id,
                        event: utils_1.generateEvent(action, user),
                        type: "interaction",
                    });
                }
                const message = yield reconciler_1.render(react_1.default.createElement(this.messageCache.get(container.name), {
                    useState,
                    props: container.props,
                    useModal,
                    user: container.type === "home" ? payload.user : undefined,
                }));
                if (JSON.stringify(message) !== container.message) {
                    if (container.type === "message") {
                        yield this.client.chat.update(Object.assign(Object.assign({}, message), { channel: container.channelID, ts: container.ts }));
                    }
                    else if (container.type === "modal") {
                        yield this.client.views.update({
                            view_id: messageKey,
                            view: Object.assign(Object.assign({}, message), { notify_on_close: true }),
                        });
                    }
                    else {
                        yield this.client.views.update({
                            view_id: messageKey,
                            view: message,
                        });
                    }
                }
                yield Phelia.Storage.set(messageKey, JSON.stringify(Object.assign(Object.assign({}, container), { message: JSON.stringify(message), user })));
            });
        }
        processSubmission(payload) {
            return __awaiter(this, void 0, void 0, function* () {
                const messageKey = payload.view.id;
                const rawViewContainer = yield Phelia.Storage.get(messageKey);
                if (!rawViewContainer) {
                    throw new Error(`Could not find Message Container with key ${messageKey} in storage.`);
                }
                const viewContainer = JSON.parse(rawViewContainer);
                const rawInvokerContainer = yield Phelia.Storage.get(viewContainer.invokerKey);
                if (!rawInvokerContainer) {
                    throw new Error(`Could not find Message Container with key ${viewContainer.invokerKey} in storage.`);
                }
                const invokerContainer = JSON.parse(rawInvokerContainer);
                /** A hook to create some state for a component */
                function useState(key, initialValue) {
                    const [_, setState] = react_1.useState(initialValue);
                    return [
                        invokerContainer.state[key],
                        (newValue) => {
                            invokerContainer.state[key] = newValue;
                            setState(newValue);
                        },
                    ];
                }
                const executedCallbacks = new Map();
                const executionPromises = new Array();
                /** A hook to create a modal for a component */
                function useModal(key, _modal, onSubmit, onCancel) {
                    if (key === viewContainer.modalKey && !executedCallbacks.get(key)) {
                        executedCallbacks.set(key, true);
                        if (payload.type === "view_submission") {
                            const form = Object.keys(payload.view.state.values)
                                .map((key) => [key, Object.keys(payload.view.state.values[key])[0]])
                                .map(([key, action]) => {
                                const data = payload.view.state.values[key][action];
                                if (data.type === "datepicker") {
                                    return [action, data.selected_date];
                                }
                                if (data.type === "checkboxes" ||
                                    data.type === "multi_static_select" ||
                                    data.type === "multi_external_select") {
                                    const selected = data.selected_options.map((option) => option.value);
                                    return [action, selected];
                                }
                                if (data.type === "multi_users_select") {
                                    return [action, data.selected_users];
                                }
                                if (data.type === "multi_channels_select") {
                                    return [action, data.selected_channels];
                                }
                                if (data.type === "multi_conversations_select") {
                                    return [action, data.selected_conversations];
                                }
                                if (data.type === "radio_buttons" ||
                                    data.type === "static_select" ||
                                    data.type === "external_select") {
                                    return [action, data.selected_option.value];
                                }
                                if (data.type === "users_select") {
                                    return [action, data.selected_user];
                                }
                                if (data.type === "conversations_select") {
                                    return [action, data.selected_conversation];
                                }
                                if (data.type === "channels_select") {
                                    return [action, data.selected_channel];
                                }
                                return [action, data.value];
                            })
                                .reduce((form, [action, value]) => {
                                form[action] = value;
                                return form;
                            }, {});
                            onSubmit &&
                                executionPromises.push(onSubmit({ form, user: payload.user }));
                        }
                        else {
                            onCancel && executionPromises.push(onCancel({ user: payload.user }));
                        }
                    }
                    return () => __awaiter(this, void 0, void 0, function* () { return null; });
                }
                yield reconciler_1.render(react_1.default.createElement(this.messageCache.get(invokerContainer.name), {
                    useState,
                    props: invokerContainer.props,
                    useModal,
                    user: invokerContainer.type === "home" ? payload.user : undefined,
                }));
                yield Promise.all(executionPromises);
                const message = yield reconciler_1.render(react_1.default.createElement(this.messageCache.get(invokerContainer.name), {
                    useState,
                    props: invokerContainer.props,
                    useModal,
                    user: invokerContainer.type === "home" ? payload.user : undefined,
                }));
                if (JSON.stringify(message) !== invokerContainer.message) {
                    if (invokerContainer.type === "message") {
                        yield this.client.chat.update(Object.assign(Object.assign({}, message), { channel: invokerContainer.channelID, ts: invokerContainer.ts }));
                    }
                    else if (invokerContainer.type === "modal") {
                        yield this.client.views.update({
                            view_id: messageKey,
                            view: message,
                        });
                    }
                    else {
                        yield this.client.views.publish({
                            view_id: messageKey,
                            view: message,
                            user_id: payload.user.id,
                        });
                    }
                }
                yield Phelia.Storage.set(viewContainer.invokerKey, JSON.stringify(Object.assign(Object.assign({}, invokerContainer), { user: payload.user, message: JSON.stringify(message) })));
            });
        }
        processOption(payload) {
            return __awaiter(this, void 0, void 0, function* () {
                const messageKey = utils_1.parseMessageKey(payload);
                const rawMessageContainer = yield Phelia.Storage.get(messageKey);
                if (!rawMessageContainer) {
                    throw new Error(`Could not find Message Container with key ${messageKey} in storage.`);
                }
                const container = JSON.parse(rawMessageContainer);
                /** A hook to create some state for a component */
                function useState(key) {
                    return [container.state[key], (_) => null];
                }
                /** A hook to create a modal for a component */
                function useModal() {
                    return () => __awaiter(this, void 0, void 0, function* () { return null; });
                }
                const onSearchOptions = yield reconciler_1.getOnSearchOptions(react_1.default.createElement(this.messageCache.get(container.name), {
                    useState,
                    props: container.props,
                    useModal,
                }), {
                    value: payload.action_id,
                    event: { user: payload.user },
                    type: "interaction",
                });
                const optionsComponent = yield onSearchOptions({
                    user: payload.user,
                    query: payload.value,
                });
                const { options, option_groups } = yield reconciler_1.render(react_1.default.createElement(components_1.SelectMenu, {
                    placeholder: "",
                    action: "",
                    type: "static",
                    children: optionsComponent,
                }));
                if (options) {
                    return { options };
                }
                return { option_groups };
            });
        }
        messageHandler(signingSecret, messages, home, slackOptions) {
            if (messages) {
                const pheliaMessages = typeof messages === "string"
                    ? utils_1.loadMessagesFromDirectory(messages)
                    : typeof messages === "function"
                        ? utils_1.loadMessagesFromArray(messages())
                        : utils_1.loadMessagesFromArray(messages);
                this.messageCache = pheliaMessages.reduce((cache, { message, name }) => cache.set(name, message), this.messageCache);
            }
            if (home) {
                this.homeComponent = home;
                this.registerComponents([home]);
            }
            const adapter = interactive_messages_1.createMessageAdapter(signingSecret, Object.assign(Object.assign({}, slackOptions), { syncResponseTimeout: 3000 }));
            adapter.viewSubmission(new RegExp(/.*/), (payload) => __awaiter(this, void 0, void 0, function* () {
                this.processSubmission(payload);
            }));
            adapter.viewClosed(new RegExp(/.*/), (payload) => __awaiter(this, void 0, void 0, function* () {
                this.processSubmission(payload);
            }));
            adapter.action({ type: "block_suggestion" }, this.processOption.bind(this));
            adapter.action(new RegExp(/.*/), (payload) => __awaiter(this, void 0, void 0, function* () {
                this.processAction(payload);
            }));
            adapter.options(new RegExp(/.*/), this.processOption.bind(this));
            return adapter.requestListener();
        }
    }
    Phelia.Storage = new Map();
    return Phelia;
})();
exports.Phelia = Phelia;
