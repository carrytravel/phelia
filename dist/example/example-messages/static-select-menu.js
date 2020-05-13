"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticSelectMenuExample = exports.StaticSelectMenuModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function StaticSelectMenuModal() {
    return (react_1.default.createElement(core_1.Modal, { title: "Static select menu example", submit: "Submit" },
        react_1.default.createElement(core_1.Input, { label: "Select menu" },
            react_1.default.createElement(core_1.SelectMenu, { action: "select-groups", placeholder: "A placeholder" },
                react_1.default.createElement(core_1.OptionGroup, { label: "an option group" },
                    react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                    react_1.default.createElement(core_1.Option, { value: "option-b" }, "option b"),
                    react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c")),
                react_1.default.createElement(core_1.OptionGroup, { label: "another option group" },
                    react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c"),
                    react_1.default.createElement(core_1.Option, { value: "option-d", selected: true }, "option d"),
                    react_1.default.createElement(core_1.Option, { value: "option-e" }, "option e"))))));
}
exports.StaticSelectMenuModal = StaticSelectMenuModal;
function StaticSelectMenuExample({ useModal, useState }) {
    const [form, setForm] = useState("form");
    const [selected, setSelected] = useState("selected");
    const openModal = useModal("modal", StaticSelectMenuModal, form => {
        setForm(JSON.stringify(form, null, 2));
    });
    return (react_1.default.createElement(core_1.Message, { text: "A static select menu example" },
        selected && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Selected:* ",
                selected))),
        !selected && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Actions, null,
                react_1.default.createElement(core_1.SelectMenu, { action: "select", placeholder: "A placeholder", onSelect: event => setSelected(event.selected) },
                    react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                    react_1.default.createElement(core_1.Option, { value: "option-b", selected: true }, "option b"),
                    react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c"))),
            react_1.default.createElement(core_1.Actions, null,
                react_1.default.createElement(core_1.SelectMenu, { action: "select-groups", placeholder: "A placeholder", onSelect: event => setSelected(event.selected) },
                    react_1.default.createElement(core_1.OptionGroup, { label: "an option group" },
                        react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                        react_1.default.createElement(core_1.Option, { value: "option-b" }, "option b"),
                        react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c")),
                    react_1.default.createElement(core_1.OptionGroup, { label: "another option group" },
                        react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c"),
                        react_1.default.createElement(core_1.Option, { value: "option-d", selected: true }, "option d"),
                        react_1.default.createElement(core_1.Option, { value: "option-e" }, "option e")))))),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.Section, { text: "You can also have a static select menu in a modal", accessory: react_1.default.createElement(core_1.Button, { action: "open-modal", onClick: () => openModal() }, "Open modal") }),
        form && (react_1.default.createElement(core_1.Section, { text: "Modal submission:" },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.StaticSelectMenuExample = StaticSelectMenuExample;
//# sourceMappingURL=static-select-menu.js.map