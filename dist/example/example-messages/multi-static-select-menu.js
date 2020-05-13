"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiStaticSelectMenuExample = exports.MultiStaticSelectMenuModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function MultiStaticSelectMenuModal() {
    return (react_1.default.createElement(core_1.Modal, { title: "Static multi select menu", submit: "Submit" },
        react_1.default.createElement(core_1.Input, { label: "Select menu" },
            react_1.default.createElement(core_1.MultiSelectMenu, { action: "selection", placeholder: "A placeholder" },
                react_1.default.createElement(core_1.OptionGroup, { label: "an option group" },
                    react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                    react_1.default.createElement(core_1.Option, { value: "option-b" }, "option b"),
                    react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c")),
                react_1.default.createElement(core_1.OptionGroup, { label: "another option group" },
                    react_1.default.createElement(core_1.Option, { value: "option-d" }, "option d"),
                    react_1.default.createElement(core_1.Option, { value: "option-e", selected: true }, "option e"),
                    react_1.default.createElement(core_1.Option, { value: "option-f" }, "option f"))))));
}
exports.MultiStaticSelectMenuModal = MultiStaticSelectMenuModal;
function MultiStaticSelectMenuExample({ useModal, useState }) {
    const [form, setForm] = useState("form");
    const [selected, setSelected] = useState("selected");
    const openModal = useModal("modal", MultiStaticSelectMenuModal, form => {
        setForm(JSON.stringify(form, null, 2));
    });
    return (react_1.default.createElement(core_1.Message, { text: "A multi static select menu example" },
        selected && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Selected:* ",
                selected))),
        !selected && (react_1.default.createElement(core_1.Section, { text: "A Multi-Select Menu in a Section component", accessory: react_1.default.createElement(core_1.MultiSelectMenu, { action: "select", placeholder: "A placeholder", onSelect: event => setSelected(event.selected.join(", ")) },
                react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                react_1.default.createElement(core_1.Option, { value: "option-b", selected: true }, "option b"),
                react_1.default.createElement(core_1.Option, { value: "option-c", selected: true }, "option c")) })),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.Section, { text: "You can also have a multi static select menu in a modal", accessory: react_1.default.createElement(core_1.Button, { action: "open-modal", onClick: () => openModal() }, "Open modal") }),
        form && (react_1.default.createElement(core_1.Section, { text: "Modal submission:" },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.MultiStaticSelectMenuExample = MultiStaticSelectMenuExample;
//# sourceMappingURL=multi-static-select-menu.js.map