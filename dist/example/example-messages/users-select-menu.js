"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSelectMenuExample = exports.UsersSelectMenuModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function UsersSelectMenuModal() {
    return (react_1.default.createElement(core_1.Modal, { title: "Users select menu", submit: "Submit" },
        react_1.default.createElement(core_1.Input, { label: "Select menu" },
            react_1.default.createElement(core_1.SelectMenu, { type: "users", action: "user", placeholder: "A placeholder" }))));
}
exports.UsersSelectMenuModal = UsersSelectMenuModal;
function UsersSelectMenuExample({ useModal, useState }) {
    const [form, setForm] = useState("form");
    const [selected, setSelected] = useState("selected");
    const openModal = useModal("modal", UsersSelectMenuModal, form => {
        setForm(JSON.stringify(form, null, 2));
    });
    return (react_1.default.createElement(core_1.Message, { text: "A users select menu example" },
        selected && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Selected:* ",
                selected))),
        !selected && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Actions, null,
                react_1.default.createElement(core_1.SelectMenu, { type: "users", action: "select-groups", placeholder: "A placeholder", onSelect: event => setSelected(event.selected) })))),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.Section, { text: "You can also have a users select menu in a modal", accessory: react_1.default.createElement(core_1.Button, { action: "open-modal", onClick: () => openModal() }, "Open modal") }),
        form && (react_1.default.createElement(core_1.Section, { text: "Modal submission:" },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.UsersSelectMenuExample = UsersSelectMenuExample;
//# sourceMappingURL=users-select-menu.js.map