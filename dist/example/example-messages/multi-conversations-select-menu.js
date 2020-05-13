"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiConversationsSelectMenuExample = exports.MultiConversationsSelectMenuModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function MultiConversationsSelectMenuModal() {
    return (react_1.default.createElement(core_1.Modal, { title: "Select a conversation", submit: "Submit" },
        react_1.default.createElement(core_1.Input, { label: "Select menu" },
            react_1.default.createElement(core_1.MultiSelectMenu, { type: "conversations", action: "selection", placeholder: "A placeholder" }))));
}
exports.MultiConversationsSelectMenuModal = MultiConversationsSelectMenuModal;
function MultiConversationsSelectMenuExample({ useModal, useState }) {
    const [form, setForm] = useState("form");
    const [selected, setSelected] = useState("selected");
    const openModal = useModal("modal", MultiConversationsSelectMenuModal, form => {
        setForm(JSON.stringify(form, null, 2));
    });
    return (react_1.default.createElement(core_1.Message, { text: "multi conversations menu" },
        selected && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Selected:* ",
                selected))),
        !selected && (react_1.default.createElement(core_1.Section, { text: "A Multi-Select Menu in a Section component", accessory: react_1.default.createElement(core_1.MultiSelectMenu, { type: "conversations", action: "select", placeholder: "A placeholder", onSelect: event => setSelected(event.selected.join(", ")) }) })),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.Section, { text: "You can also have a multi static select menu in a modal", accessory: react_1.default.createElement(core_1.Button, { action: "open-modal", onClick: () => openModal() }, "Open modal") }),
        form && (react_1.default.createElement(core_1.Section, { text: "Modal submission:" },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.MultiConversationsSelectMenuExample = MultiConversationsSelectMenuExample;
//# sourceMappingURL=multi-conversations-select-menu.js.map