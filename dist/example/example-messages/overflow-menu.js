"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowMenuExample = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
function OverflowMenuExample({ useState }) {
    const [selected, setSelected] = useState("selected");
    const overflow = (react_1.default.createElement(core_1.OverflowMenu, { action: "overflow", onSelect: event => setSelected(event.selected) },
        react_1.default.createElement(core_1.Option, { value: "dogs" }, "Dogs"),
        react_1.default.createElement(core_1.Option, { value: "cats" }, "Cats"),
        react_1.default.createElement(core_1.Option, { url: "https://pixabay.com/images/search/dog/", value: "a-link" }, "Dog images")));
    return (react_1.default.createElement(core_1.Message, null,
        react_1.default.createElement(core_1.Section, { accessory: overflow }, selected ? (react_1.default.createElement(core_1.Text, { type: "mrkdwn" },
            "You selected *",
            selected,
            "*")) : (react_1.default.createElement(core_1.Text, { emoji: true }, "Click the menu option :point_right:")))));
}
exports.OverflowMenuExample = OverflowMenuExample;
//# sourceMappingURL=overflow-menu.js.map