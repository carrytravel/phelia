"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButtonExample = exports.RadioButtonModal = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function RadioButtonModal() {
    return (react_1.default.createElement(core_1.Modal, { title: "Radio buttons example", submit: "Submit" },
        react_1.default.createElement(core_1.Input, { label: "Radio buttons" },
            react_1.default.createElement(core_1.RadioButtons, { action: "radio-buttons" },
                react_1.default.createElement(core_1.Option, { value: "option-a" }, "option a"),
                react_1.default.createElement(core_1.Option, { value: "option-b", selected: true }, "option b"),
                react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c")))));
}
exports.RadioButtonModal = RadioButtonModal;
function RadioButtonExample({ useModal, useState }) {
    const [form, setForm] = useState("form");
    const openModal = useModal("modal", RadioButtonModal, form => {
        setForm(JSON.stringify(form, null, 2));
    });
    return (react_1.default.createElement(core_1.Message, { text: "A radio button example" },
        react_1.default.createElement(core_1.Section, { text: "You can only have radio buttons inside of a Modal or Home tab", accessory: react_1.default.createElement(core_1.Button, { action: "open-modal", onClick: () => openModal() }, "Open modal") }),
        form && (react_1.default.createElement(core_1.Section, { text: "Modal submission:" },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.RadioButtonExample = RadioButtonExample;
//# sourceMappingURL=radio-buttons.js.map