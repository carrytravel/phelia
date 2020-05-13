"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeApp = void 0;
const core_1 = require("../../core");
const react_1 = __importDefault(require("react"));
const modal_example_1 = require("./modal-example");
function HomeApp({ useState, useModal, user }) {
    const [counter, setCounter] = useState("counter", 0);
    const [loaded, setLoaded] = useState("loaded", 0);
    const [form, setForm] = useState("form");
    const [updated, setUpdated] = useState("updated", false);
    const openModal = useModal("modal", modal_example_1.MyModal, (event) => setForm(JSON.stringify(event.form, null, 2)));
    return (react_1.default.createElement(core_1.Home, { onLoad: () => setLoaded(loaded + 1), onUpdate: () => setUpdated(true) },
        react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { emoji: true },
                "Hey there ",
                user.username,
                " :wave:"),
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Updated:* ",
                String(updated)),
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Counter:* ",
                counter),
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
                "*Loaded:* ",
                loaded)),
        react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { action: "counter", onClick: () => setCounter(counter + 1) }, "Click me"),
            react_1.default.createElement(core_1.Button, { action: "modal", onClick: () => openModal() }, "Open a Modal")),
        form && (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "```\n" + form + "\n```")))));
}
exports.HomeApp = HomeApp;
//# sourceMappingURL=home-app.js.map