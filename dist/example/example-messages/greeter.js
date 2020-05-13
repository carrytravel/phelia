"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function Greeter({ useState }) {
    const [name, setName] = useState("name");
    return (react_1.default.createElement(core_1.Message, { text: "Hey there!" },
        react_1.default.createElement(core_1.Section, { accessory: react_1.default.createElement(core_1.Button, { action: "click", onClick: ({ user }) => setName(user.username) }, "Click me"), text: react_1.default.createElement(core_1.Text, null, "Click the button") },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "*Name:*"),
            react_1.default.createElement(core_1.Text, null, name || "<unknown>")),
        react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { style: "danger", action: "reset", onClick: () => setName(undefined) }, "Reset"))));
}
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.js.map