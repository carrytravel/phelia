"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthdayPicker = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
const delay = (ms) => new Promise(res => setTimeout(res, ms));
function BirthdayPicker({ useState }) {
    const [birth, setBirth] = useState("birth");
    const [user, setUser] = useState("user");
    const today = new Date().toISOString().split("T")[0];
    const birthdayIsToday = birth === today;
    return (react_1.default.createElement(core_1.Message, { text: "Gimme yo birthday" },
        react_1.default.createElement(core_1.Section, { text: birth
                ? birthdayIsToday
                    ? `Happy birthday ${user}!`
                    : `Your birthday is on ${birth}.`
                : "Select your birthday.", accessory: react_1.default.createElement(core_1.DatePicker, { initialDate: birth, onSelect: ({ user, date }) => __awaiter(this, void 0, void 0, function* () {
                    yield delay(2000);
                    setBirth(date);
                    setUser(user.username);
                }), action: "date" }) })));
}
exports.BirthdayPicker = BirthdayPicker;
//# sourceMappingURL=birthday-picker.js.map