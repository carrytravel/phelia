"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = exports.MultiSelectMenu = exports.SelectMenu = exports.OptionGroup = exports.RadioButtons = exports.OverflowMenu = exports.Checkboxes = exports.TextField = exports.Input = exports.Modal = exports.Message = exports.DatePicker = exports.Option = exports.Confirm = exports.Context = exports.Divider = exports.ImageBlock = exports.Image = exports.Actions = exports.Section = exports.Button = exports.Text = void 0;
const react_1 = __importDefault(require("react"));
/**
 * An component containing some text, formatted either as plain_text or using mrkdwn,
 * our proprietary textual markup that's just different enough from Markdown to frustrate you.
 */
exports.Text = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "text", toSlackElement: (props) => {
        const instance = { type: props.type, text: "" };
        if (props.type === "mrkdwn") {
            instance.verbatim = props.verbatim;
        }
        else if (props.type === "plain_text") {
            instance.emoji = props.emoji;
        }
        return instance;
    } })));
exports.Text.defaultProps = {
    type: "plain_text",
};
/**
 * An interactive component that inserts a button. The button can be a trigger for
 * anything from opening a simple link to starting a complex workflow.
 *
 * Works with block types: Section, Actions
 */
exports.Button = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "button", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "button",
            action_id: props.action,
            style: props.style,
            url: props.url,
            text: { type: "plain_text", text: "", emoji: props.emoji },
        };
        const [confirm, confirmPromises] = reconcile(props.confirm);
        instance.confirm = confirm;
        promises.push(...confirmPromises);
        return instance;
    } })));
/**
 * A section is one of the most flexible components available - it can be used as a
 * simple text block, in combination with text fields, or side-by-side with any
 * of the available block elements.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
exports.Section = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "section", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "section",
        };
        const [accessory, accessoryPromises] = reconcile(props.accessory);
        const [text, textPromises] = reconcile(props.text);
        instance.text = text;
        instance.accessory = accessory;
        if (instance.text && text.type === "text") {
            instance.text.type = "plain_text";
        }
        promises.push(...accessoryPromises, ...textPromises);
        return instance;
    } })));
/**
 * A block that is used to hold interactive elements.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
exports.Actions = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "actions", toSlackElement: () => ({
        type: "actions",
        elements: [],
    }) })));
/**
 * A simple image block, designed to make those cat photos really pop.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
exports.Image = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "image", toSlackElement: (props) => ({
        type: "image",
        image_url: props.imageUrl,
        alt_text: props.alt,
    }) })));
/**
 * An component to insert an image as part of a larger block of content. If you
 * want a block with only an image in it, you're looking for the Image component.
 *
 * Works with block types: Section, Context
 */
exports.ImageBlock = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "image-block", toSlackElement: (props) => {
        const instance = {
            type: "image",
            image_url: props.imageUrl,
            alt_text: props.alt,
        };
        if (props.title) {
            instance.title = {
                type: "plain_text",
                text: props.title,
                emoji: props.emoji,
            };
        }
        return instance;
    } })));
/**
 * A content divider, like an <hr>, to split up different blocks inside of a
 * message. The divider block is nice and neat.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
exports.Divider = () => (react_1.default.createElement("component", { componentType: "divider", toSlackElement: () => ({ type: "divider" }) }));
/**
 * Displays message context, which can include both images and text.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
exports.Context = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "context", toSlackElement: () => ({ type: "context", elements: [] }) })));
/**
 * A component that defines a dialog that provides a confirmation step to any interactive
 * component. This dialog will ask the user to confirm their action by offering a confirm
 * and deny buttons.
 */
exports.Confirm = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "confirm", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            // using a function so the appendInitialChild can determine the type of the component
            // whereas slack forbids a confirm object to have a 'type' property
            isConfirm: () => true,
            style: props.style,
        };
        const [title, titlePromises] = reconcile(props.title);
        const [confirm, confirmPromises] = reconcile(props.confirm);
        const [deny, denyPromises] = reconcile(props.deny);
        instance.title = title;
        instance.confirm = confirm;
        instance.deny = deny;
        instance.title.type = "plain_text";
        instance.confirm.type = "plain_text";
        instance.deny.type = "plain_text";
        promises.push(...titlePromises, ...confirmPromises, ...denyPromises);
        return instance;
    } })));
/**
 * A component that represents a single selectable item in a select menu, multi-select menu,
 * checkbox group, radio button group, or overflow menu.
 */
exports.Option = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "option", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            isSelected: () => props.selected,
            isOption: () => true,
            value: props.value,
            url: props.url,
        };
        const [description, descriptionPromises] = reconcile(props.description);
        instance.description = description;
        if (instance.description) {
            instance.description.type = "plain_text";
        }
        promises.push(...descriptionPromises);
        return instance;
    } })));
/**
 * An element which lets users easily select a date from a calendar style UI.
 *
 * Works with block types: Section, Actions, Input
 */
exports.DatePicker = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "confirm", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "datepicker",
            initial_date: props.initialDate,
            action_id: props.action,
        };
        const [placeholder, placeholderPromises] = reconcile(props.placeholder);
        const [confirm, confirmPromises] = reconcile(props.confirm);
        instance.placeholder = placeholder;
        instance.confirm = confirm;
        if (instance.placeholder) {
            instance.placeholder.type = "plain_text";
        }
        promises.push(...placeholderPromises, ...confirmPromises);
        return instance;
    } })));
/**
 * App-published messages are dynamic yet transient spaces. They allow users to
 * complete workflows among their Slack conversations.
 */
exports.Message = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "message", toSlackElement: ({ text }) => ({ blocks: [], text }) })));
/**
 * Modals provide focused spaces ideal for requesting and collecting data from users,
 * or temporarily displaying dynamic and interactive information.
 */
exports.Modal = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "modal", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "modal",
            blocks: [],
        };
        const [title, titlePromises] = reconcile(props.title);
        const [submit, submitPromises] = reconcile(props.submit);
        const [close, closePromises] = reconcile(props.close);
        instance.title = title;
        instance.submit = submit;
        instance.close = close;
        if (instance.title) {
            instance.title.type = "plain_text";
        }
        if (instance.submit) {
            instance.submit.type = "plain_text";
        }
        if (instance.close) {
            instance.close.type = "plain_text";
        }
        promises.push(...titlePromises, ...submitPromises, ...closePromises);
        return instance;
    } })));
/**
 * A block that collects information from users - it can hold a plain-text input element, a
 * select menu element, a multi-select menu element, or a datepicker.
 *
 * Read our guide to using modals to learn how input blocks pass information to your app.
 *
 * Available in surfaces: Modals
 */
exports.Input = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "input", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "input",
            optional: props.optional,
        };
        const [hint, hintPromises] = reconcile(props.hint);
        const [label, labelPromises] = reconcile(props.label);
        instance.hint = hint;
        instance.label = label;
        if (instance.label) {
            instance.label.type = "plain_text";
        }
        if (instance.hint) {
            instance.hint.type = "plain_text";
        }
        promises.push(...hintPromises, ...labelPromises);
        return instance;
    } })));
/**
 * A plain-text input, similar to the HTML <input> tag, creates a field where a user can
 * enter freeform data. It can appear as a single-line field or a larger textarea using
 * the multiline flag.
 *
 * Plain-text input elements are currently only available in modals. To use them, you will
 * need to make some changes to prepare your app. Read about preparing your app for modals.
 *
 * Works with block types: Section, Actions, Input
 */
exports.TextField = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "text-field", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "plain_text_input",
            initial_value: props.initialValue,
            action_id: props.action,
            max_length: props.maxLength,
            min_length: props.minLength,
            multiline: props.multiline,
        };
        const [placeholder, placeholderPromises] = reconcile(props.placeholder);
        instance.placeholder = placeholder;
        if (instance.placeholder) {
            instance.placeholder.type = "plain_text";
        }
        promises.push(...placeholderPromises);
        return instance;
    } })));
/**
 * A checkbox group that allows a user to choose multiple items from a list of possible options.
 *
 * Checkboxes are only supported in the following app surfaces: Home tabs Modals
 *
 * Works with block types: Section, Actions, Input
 */
exports.Checkboxes = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "checkboxes", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "checkboxes",
            action_id: props.action,
            options: [],
        };
        const [{ fields: options }, optionPromises] = reconcile(react_1.default.createElement(exports.Section, { children: props.children }));
        const [confirm, confirmPromises] = reconcile(props.confirm);
        if (Array.isArray(options)) {
            const selectedOptions = options
                .filter((option) => option === null || option === void 0 ? void 0 : option.isSelected())
                .map((option) => (Object.assign(Object.assign({}, option), { url: undefined })));
            instance.initial_options = selectedOptions.length
                ? selectedOptions
                : undefined;
        }
        instance.confirm = confirm;
        promises.push(...optionPromises, ...confirmPromises);
        return instance;
    } })));
/**
 * This is like a cross between a button and a select menu - when a user clicks on
 * this overflow button, they will be presented with a list of options to choose from.
 * Unlike the select menu, there is no typeahead field, and the button always appears
 * with an ellipsis ("…") rather than customisable text.
 *
 * As such, it is usually used if you want a more compact layout than a select menu,
 * or to supply a list of less visually important actions after a row of buttons. You
 * can also specify simple URL links as overflow menu options, instead of actions.
 *
 * Works with block types: Section, Actions
 */
exports.OverflowMenu = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "overflow", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "overflow",
            action_id: props.action,
            options: [],
        };
        const [confirm, confirmPromises] = reconcile(props.confirm);
        instance.confirm = confirm;
        promises.push(...confirmPromises);
        return instance;
    } })));
/**
 * Radio buttons are only supported in the following app surfaces: Home tabs Modals
 *
 * A radio button group that allows a user to choose one item from a list of possible options.
 *
 * Works with block types: Section, Actions, Input
 */
exports.RadioButtons = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "radio-buttons", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "radio_buttons",
            action_id: props.action,
            options: [],
        };
        const [{ fields: options }, optionPromises] = reconcile(react_1.default.createElement(exports.Section, { children: props.children }));
        const [confirm, confirmPromises] = reconcile(props.confirm);
        if (Array.isArray(options)) {
            const selectedOption = options
                .map((option) => (Object.assign(Object.assign({}, option), { url: undefined })))
                .find((option) => option === null || option === void 0 ? void 0 : option.isSelected());
            instance.initial_option = selectedOption;
        }
        instance.confirm = confirm;
        promises.push(...optionPromises, ...confirmPromises);
        return instance;
    } })));
/** Provides a way to group options in a select menu or multi-select menu. */
exports.OptionGroup = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "option-group", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            isOptionGroup: () => true,
            options: [],
        };
        const [label, labelPromises] = reconcile(props.label);
        instance.label = label;
        if (instance.label) {
            instance.label.type = "plain_text";
        }
        promises.push(...labelPromises);
        return instance;
    } })));
/**
 * A select menu, just as with a standard HTML <select> tag, creates a drop down menu
 * with a list of options for a user to choose. The select menu also includes type-ahead
 * functionality, where a user can type a part or all of an option string to filter the list.
 *
 * There are different types of select menu that depend on different data sources for their lists of options:
 *
 * - Menu with static options
 * - Menu with external data source
 * - Menu with user list
 * - Menu with conversations list
 * - Menu with channels list
 *
 * Works with block types: Section, Actions, Input
 */
exports.SelectMenu = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "select-menu", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: props.type + "_select",
            action_id: props.action,
            onSearchOptions: props.onSearchOptions,
        };
        const [confirm, confirmPromises] = reconcile(props.confirm);
        const [placeholder, placeholderPromises] = reconcile(props.placeholder);
        const [{ fields: optionsOrGroups }, optionPromises] = reconcile(react_1.default.createElement(exports.Section, { children: props.children }));
        const [initialOption, initialOptionPromises] = reconcile(props.initialOption);
        if (props.type === "static" &&
            Array.isArray(optionsOrGroups) &&
            optionsOrGroups.length) {
            const isGroup = Boolean(optionsOrGroups[0].isOptionGroup);
            let options = optionsOrGroups;
            if (isGroup) {
                options = optionsOrGroups.reduce((options, group) => {
                    options.push(...group.options);
                    return options;
                }, []);
            }
            const selectedOption = options
                .map((option) => (Object.assign(Object.assign({}, option), { url: undefined })))
                .find((option) => option === null || option === void 0 ? void 0 : option.isSelected());
            if (selectedOption) {
                instance.initial_option = selectedOption;
            }
            else if (initialOption) {
                instance.initial_option = Object.assign(Object.assign({}, initialOption), { url: undefined });
            }
            else {
                instance.initial_option = undefined;
            }
        }
        if (props.type === "external") {
            if (initialOption) {
                instance.initial_option = Object.assign(Object.assign({}, initialOption), { url: undefined });
            }
            instance.min_query_length = props.minQueryLength;
        }
        if (props.type === "users") {
            instance.initial_user = props.initialUser;
        }
        if (props.type === "channels") {
            instance.initial_channel = props.initialChannel;
        }
        if (props.type === "conversations") {
            instance.initial_conversation = props.initialConversation;
            if (props.filter) {
                instance.filter = {};
                instance.filter.include = props.filter.include;
                instance.filter.exclude_external_shared_channels =
                    props.filter.excludeExternalSharedChannels;
                instance.filter.exclude_bot_users = props.filter.excludeBotUsers;
            }
        }
        instance.confirm = confirm;
        instance.placeholder = placeholder;
        if (instance.placeholder) {
            instance.placeholder.type = "plain_text";
        }
        promises.push(...confirmPromises, ...placeholderPromises, ...optionPromises, ...initialOptionPromises);
        return instance;
    } })));
exports.SelectMenu.defaultProps = {
    type: "static",
};
/**
 * A multi-select menu allows a user to select multiple items from a list of options.
 * Just like regular select menus, multi-select menus also include type-ahead
 * functionality, where a user can type a part or all of an option string to filter the list.
 *
 * There are different types of multi-select menu that depend on different data sources for their lists of options:
 *
 * - Menu with static options
 * - Menu with external data source
 * - Menu with user list
 * - Menu with conversations list
 * - Menu with channels list
 *
 * Works with block types: Section, Input
 */
exports.MultiSelectMenu = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "multi-select-menu", toSlackElement: (props, reconcile, promises) => {
        const instance = {
            type: "multi_" + props.type + "_select",
            action_id: props.action,
            max_selected_items: props.maxSelectedItems,
            onSearchOptions: props.onSearchOptions,
        };
        const [confirm, confirmPromises] = reconcile(props.confirm);
        const [placeholder, placeholderPromises] = reconcile(props.placeholder);
        const [{ fields: optionsOrGroups }, optionPromises] = reconcile(react_1.default.createElement(exports.Section, { children: props.children }));
        const [{ fields: initialOptions }, initialOptionsPromises] = reconcile(react_1.default.createElement(exports.Section, { children: props.children }));
        if (props.type === "static" &&
            Array.isArray(optionsOrGroups) &&
            optionsOrGroups.length) {
            const isGroup = Boolean(optionsOrGroups[0].isOptionGroup);
            let options = optionsOrGroups;
            if (isGroup) {
                options = optionsOrGroups.reduce((options, group) => {
                    options.push(...group.options);
                    return options;
                }, []);
            }
            const selectedOptions = options
                .map((option) => (Object.assign(Object.assign({}, option), { url: undefined })))
                .filter((option) => option === null || option === void 0 ? void 0 : option.isSelected());
            if (selectedOptions.length) {
                instance.initial_options = selectedOptions;
            }
        }
        if (props.type === "external") {
            instance.initial_options = initialOptions;
            instance.min_query_length = props.minQueryLength;
        }
        if (props.type === "users") {
            instance.initial_users = props.initialUsers;
        }
        if (props.type === "channels") {
            instance.initial_channels = props.initialChannels;
        }
        if (props.type === "conversations") {
            instance.initial_conversations = props.initialConversations;
            if (props.filter) {
                instance.filter = {};
                instance.filter.include = props.filter.include;
                instance.filter.exclude_external_shared_channels =
                    props.filter.excludeExternalSharedChannels;
                instance.filter.exclude_bot_users = props.filter.excludeBotUsers;
            }
        }
        instance.confirm = confirm;
        instance.placeholder = placeholder;
        if (instance.placeholder) {
            instance.placeholder.type = "plain_text";
        }
        promises.push(...confirmPromises, ...placeholderPromises, ...optionPromises, ...initialOptionsPromises);
        return instance;
    } })));
exports.MultiSelectMenu.defaultProps = {
    type: "static",
};
/**
 * The Home tab is a persistent, yet dynamic interface for apps that lives within the App Home.
 */
exports.Home = (props) => (react_1.default.createElement("component", Object.assign({}, props, { componentType: "home", toSlackElement: () => {
        const instance = {
            type: "home",
            blocks: [],
        };
        return instance;
    } })));
//# sourceMappingURL=components.js.map