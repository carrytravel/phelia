"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalExample = exports.MyModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function MyModal({ useState }) {
    const [showForm, setShowForm] = useState("showForm", false);
    return (react_1.default.createElement(core_1.Modal, { title: "A fancy pants modal", submit: "submit the form" },
        !showForm && (react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { action: "showForm", onClick: () => setShowForm(true) }, "Show form"))),
        showForm && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Input, { label: "Expiration date" },
                react_1.default.createElement(core_1.DatePicker, { action: "date" })),
            react_1.default.createElement(core_1.Input, { label: "Little bit" },
                react_1.default.createElement(core_1.TextField, { action: "little-bit", placeholder: "just a little bit" })),
            react_1.default.createElement(core_1.Input, { label: "Some checkboxes" },
                react_1.default.createElement(core_1.Checkboxes, { action: "checkboxes" },
                    react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                    react_1.default.createElement(core_1.Option, { value: "option-b", selected: true }, "option b"),
                    react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c"))),
            react_1.default.createElement(core_1.Input, { label: "Summary" },
                react_1.default.createElement(core_1.TextField, { action: "summary", placeholder: "type something here", multiline: true }))))));
}
exports.MyModal = MyModal;
function ModalExample({ useModal, useState, props, }) {
    const [state, setState] = useState("state", "init");
    const [form, setForm] = useState("form", "");
    const openModal = useModal("modal", MyModal, (form) => {
        setState("submitted");
        setForm(JSON.stringify(form, null, 2));
    }, () => setState("canceled"));
    return (react_1.default.createElement(core_1.Message, { text: "A modal example" },
        react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "hey ",
                props.name,
                "!")),
        state === "canceled" && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { emoji: true }, ":no_good: why'd you have to do that"))),
        state === "submitted" && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```"))),
        state !== "init" && (react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { style: "danger", action: "reset", onClick: () => setState("init") }, "reset"))),
        state === "init" && (react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { style: "primary", action: "openModal", onClick: () => openModal() }, "Open the modal")))));
}
exports.ModalExample = ModalExample;
//# sourceMappingURL=modal-example.js.map