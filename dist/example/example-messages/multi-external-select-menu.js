"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiExternalSelectMenuExample = exports.MultiExternalSelectMenuModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function MultiExternalSelectMenuModal() {
    return (react_1.default.createElement(core_1.Modal, { title: "External menu", submit: "Submit" },
        react_1.default.createElement(core_1.Input, { label: "All external" },
            react_1.default.createElement(core_1.MultiSelectMenu, { minQueryLength: 0, onSearchOptions: () => [
                    react_1.default.createElement(core_1.OptionGroup, { key: "1", label: "A group" },
                        react_1.default.createElement(core_1.Option, { value: "option-1" }, "This was loaded asynchronously"))
                ], type: "external", action: "select-menu", placeholder: "A placeholder" }))));
}
exports.MultiExternalSelectMenuModal = MultiExternalSelectMenuModal;
function MultiExternalSelectMenuExample({ useModal, useState }) {
    const [form, setForm] = useState("form");
    const [selected, setSelected] = useState("selected");
    const openModal = useModal("modal", MultiExternalSelectMenuModal, form => {
        setForm(JSON.stringify(form, null, 2));
    });
    return (react_1.default.createElement(core_1.Message, { text: "A external multi select menu example" },
        selected && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Selected:* ",
                selected))),
        !selected && (react_1.default.createElement(core_1.Section, { text: "A Multi-Select Menu in a Section component", accessory: react_1.default.createElement(core_1.MultiSelectMenu, { initialOptions: [
                    react_1.default.createElement(core_1.Option, { key: "1", value: "option-1" }, "This was loaded asynchronously")
                ], onSearchOptions: () => [
                    react_1.default.createElement(core_1.Option, { key: "1", value: "option-1" }, "This was loaded asynchronously")
                ], type: "external", action: "external", placeholder: "A placeholder", onSelect: event => setSelected(event.selected.join(", ")) }) })),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.Section, { text: "You can also have a multi external select menu in a modal", accessory: react_1.default.createElement(core_1.Button, { action: "open-modal", onClick: () => openModal() }, "Open modal") }),
        form && (react_1.default.createElement(core_1.Section, { text: "Modal submission:" },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.MultiExternalSelectMenuExample = MultiExternalSelectMenuExample;
//# sourceMappingURL=multi-external-select-menu.js.map