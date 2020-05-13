"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function Counter({ useState, props }) {
    const [counter, setCounter] = useState("counter", 0);
    return (react_1.default.createElement(core_1.Message, { text: "A counter example" },
        react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, null,
                "Hello ",
                props.name,
                ", here is your counter ",
                counter)),
        react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { action: "inc", onClick: () => setCounter(counter + 1) }, "Inc"),
            react_1.default.createElement(core_1.Button, { action: "dec", onClick: () => setCounter(counter - 1) }, "Dec"))));
}
exports.Counter = Counter;
//# sourceMappingURL=counter.js.map