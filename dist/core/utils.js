"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMessagesFromDirectory = exports.loadMessagesFromArray = exports.parseMessageKey = exports.generateEvent = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/** Convert an action to an event. */
function generateEvent(action, user) {
    if (action.type === "datepicker") {
        return { date: action.selected_date, user };
    }
    if (action.type === "checkboxes" ||
        action.type === "multi_static_select" ||
        action.type === "multi_external_select") {
        return {
            selected: action.selected_options.map((option) => option.value),
            user,
        };
    }
    if (action.type === "multi_users_select") {
        return { user, selected: action.selected_users };
    }
    if (action.type === "multi_channels_select") {
        return { user, selected: action.selected_channels };
    }
    if (action.type === "multi_conversations_select") {
        return { user, selected: action.selected_conversations };
    }
    if (action.type === "users_select") {
        return { user, selected: action.selected_user };
    }
    if (action.type === "conversations_select") {
        return { user, selected: action.selected_conversation };
    }
    if (action.type === "channels_select") {
        return { user, selected: action.selected_channel };
    }
    if (action.type === "overflow" ||
        action.type === "radio_buttons" ||
        action.type === "static_select" ||
        action.type === "external_select") {
        return { user, selected: action.selected_option.value };
    }
    return { user };
}
exports.generateEvent = generateEvent;
/** Get a unique key from a message payload */
function parseMessageKey(payload) {
    var _a;
    if ((_a = payload === null || payload === void 0 ? void 0 : payload.view) === null || _a === void 0 ? void 0 : _a.id) {
        return payload.view.id;
    }
    if (payload.container) {
        const { channel_id, message_ts, view_id, type } = payload.container;
        return type === "view" ? view_id : `${channel_id}:${message_ts}`;
    }
    if (payload.type === "app_home_opened" && payload.tab === "home") {
        return payload.user;
    }
}
exports.parseMessageKey = parseMessageKey;
/** Transform a message into message metadata */
function loadMessagesFromArray(messages) {
    return messages.map((message) => ({ message, name: message.name }));
}
exports.loadMessagesFromArray = loadMessagesFromArray;
/** Read messages from a directory */
function loadMessagesFromDirectory(dir) {
    const modules = new Array();
    fs_1.default.readdirSync(dir).forEach((file) => {
        try {
            const module = require(path_1.default.join(dir, file));
            modules.push(module);
        }
        catch (error) { }
    });
    return modules.map((m) => ({
        message: m.default,
        name: m.default.name,
    }));
}
exports.loadMessagesFromDirectory = loadMessagesFromDirectory;
