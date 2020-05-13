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
const react_1 = __importDefault(require("react"));
const core_1 = require("../core");
describe("Text", () => {
    describe("Default Text", () => {
        const component = () => react_1.default.createElement(core_1.Text, null, "hello world");
        it("renders plain_text Text without emoji", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Text with emoji", () => {
        const component = () => react_1.default.createElement(core_1.Text, { emoji: true }, "hello world");
        it("renders plain_text Text with emoji", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Text with mrkdwn property", () => {
        const component = () => react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "hello world");
        it("renders mrkdwn Text without verbatim", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Text with mrkdwn and verbatim property", () => {
        const component = () => (react_1.default.createElement(core_1.Text, { type: "mrkdwn", verbatim: true }, "hello world"));
        it("renders mrkdwn Text with verbatim", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Text with two children", () => {
        const component = () => react_1.default.createElement(core_1.Text, null,
            "hello ",
            "world");
        it("renders Text with children concatenated", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Section", () => {
    describe("Section with one Text component", () => {
        const component = () => (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, null, "First text")));
        it("renders Section with child Text component in the fields property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Section with string Text property", () => {
        const component = () => react_1.default.createElement(core_1.Section, { text: "some text" });
        it("renders Section with child Text component in the fields property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Section with two Text components", () => {
        const component = () => (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, null, "First text"),
            react_1.default.createElement(core_1.Text, null, "First text")));
        it("renders Section with child Text components in the fields property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Section with a multi-child Text component", () => {
        const component = () => (react_1.default.createElement(core_1.Section, null,
            react_1.default.createElement(core_1.Text, null,
                "First",
                " text")));
        it("renders Section with a multi-child Text component", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Section with a text property and no children", () => {
        const component = () => react_1.default.createElement(core_1.Section, { text: react_1.default.createElement(core_1.Text, null, "Hello world") });
        it("renders Section with a text property and empty fields", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Section with Image accessory", () => {
        const component = () => (react_1.default.createElement(core_1.Section, { accessory: react_1.default.createElement(core_1.Image, { imageUrl: "https://google.com/image.png", alt: "an image" }), text: react_1.default.createElement(core_1.Text, null, "Hello world") }));
        it("renders Section with a Image accessory", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Section with Button accessory", () => {
        const onClick = jest.fn();
        const component = () => (react_1.default.createElement(core_1.Section, { accessory: react_1.default.createElement(core_1.Button, { action: "click", onClick: onClick }, "Click me"), text: react_1.default.createElement(core_1.Text, null, "Hello world") }));
        it("renders Section with a Button accessory", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
        describe("with await render action and onClick Button property", () => {
            it("calls the onClick function", () => __awaiter(void 0, void 0, void 0, function* () {
                const user = {
                    username: "johnsmith",
                    name: "john smith",
                    id: "u123",
                    team_id: "t123",
                };
                yield core_1.render(react_1.default.createElement(component), {
                    value: "click",
                    event: { user },
                });
                expect(onClick).toBeCalledWith({ user });
                expect(onClick).toBeCalledTimes(1);
            }));
        });
    });
    describe("Section with Button accessory, Text, and Fields", () => {
        const component = () => (react_1.default.createElement(core_1.Section, { accessory: react_1.default.createElement(core_1.Button, null, "Click me"), text: react_1.default.createElement(core_1.Text, null, "The text") },
            react_1.default.createElement(core_1.Text, null, "Field #1"),
            react_1.default.createElement(core_1.Text, null, "Field #2")));
        it("renders Section with a Button accessory, Text, and fields", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Button", () => {
    describe("Default button", () => {
        const component = () => react_1.default.createElement(core_1.Button, null, "Click me");
        it("renders Button with default properties", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Button with danger style", () => {
        const component = () => react_1.default.createElement(core_1.Button, { style: "danger" }, "Click me");
        it("renders Button with danger style", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Button with url", () => {
        const component = () => (react_1.default.createElement(core_1.Button, { url: "https://google.com" }, "Click me"));
        it("renders Button with url", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Button with emoji property", () => {
        const component = () => react_1.default.createElement(core_1.Button, { emoji: true }, "Click me");
        it("renders Button with emoji text property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Button with Confirm component", () => {
        const component = () => (react_1.default.createElement(core_1.Button, { emoji: true, confirm: react_1.default.createElement(core_1.Confirm, { title: "Confirm me?", confirm: "Yes, I confirm!", deny: "No, go away!" }, "Do you confirm me?") }, "Click me"));
        it("renders Button with emoji text property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Button with action property", () => {
        const onClick = jest.fn();
        const component = () => (react_1.default.createElement(core_1.Button, { action: "click", onClick: onClick }, "Click me"));
        it("renders Button with value property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
        describe("with render action and onClick property", () => {
            it("calls the onClick function", () => __awaiter(void 0, void 0, void 0, function* () {
                const user = {
                    username: "johnsmith",
                    name: "john smith",
                    id: "u123",
                    team_id: "t123",
                };
                yield core_1.render(react_1.default.createElement(component), {
                    value: "click",
                    event: { user },
                });
                expect(onClick).toBeCalledWith({ user });
                expect(onClick).toBeCalledTimes(1);
            }));
        });
    });
    describe("Button with async onClick property", () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        const onClick = jest.fn();
        const component = () => (react_1.default.createElement(core_1.Button, { action: "click", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                yield delay(100);
                onClick();
            }) }, "Click me"));
        it("calls the onClick function", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = {
                username: "johnsmith",
                name: "john smith",
                id: "u123",
                team_id: "t123",
            };
            yield core_1.render(react_1.default.createElement(component), {
                value: "click",
                event: { user },
            });
            expect(onClick).toBeCalledTimes(1);
        }));
    });
});
describe("Actions", () => {
    describe("Actions with one Button", () => {
        const component = () => (react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, null, "Click me")));
        it("renders Actions with one Button", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Actions with two Buttons", () => {
        const component = () => (react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, null, "Click me"),
            react_1.default.createElement(core_1.Button, null, "No, click me")));
        it("renders Actions with two Buttons", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Image", () => {
    describe("Default Image", () => {
        const component = () => (react_1.default.createElement(core_1.Image, { imageUrl: "https://google.com/image.png", alt: "an image" }));
        it("renders Image with image_url and alt_text properties", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Image Block", () => {
    describe("Default Image Block", () => {
        const component = () => (react_1.default.createElement(core_1.ImageBlock, { imageUrl: "https://google.com/image.png", alt: "an image" }));
        it("renders Image Block with image_url and alt_text properties", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Image Block with string title", () => {
        const component = () => (react_1.default.createElement(core_1.ImageBlock, { imageUrl: "https://google.com/image.png", alt: "an image", title: "a string" }));
        it("renders Image Block with title", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Image Block with emoji property", () => {
        const component = () => (react_1.default.createElement(core_1.ImageBlock, { imageUrl: "https://google.com/image.png", alt: "an image", title: "a string", emoji: true }));
        it("renders Image Block with title", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Divider", () => {
    describe("Default Divider", () => {
        const component = () => react_1.default.createElement(core_1.Divider, null);
        it("renders Divider", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Context", () => {
    describe("Context with one element", () => {
        const component = () => (react_1.default.createElement(core_1.Context, null,
            react_1.default.createElement(core_1.ImageBlock, { imageUrl: "https://google.com/image.png", alt: "an image" })));
        it("renders Context with one element", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Context with Image and Text component", () => {
        const component = () => (react_1.default.createElement(core_1.Context, null,
            react_1.default.createElement(core_1.ImageBlock, { imageUrl: "https://google.com/image.png", alt: "an image" }),
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "*Hello world*")));
        it("renders Context with one element", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Confirm", () => {
    describe("Confirm with string properties", () => {
        const component = () => (react_1.default.createElement(core_1.Confirm, { title: "Confirm me?", confirm: "Yes, I confirm!", deny: "No, go away!" }, "Do you confirm me?"));
        it("renders with string properties", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Confirm with Text Component properties", () => {
        const component = () => (react_1.default.createElement(core_1.Confirm, { title: react_1.default.createElement(core_1.Text, { emoji: true }, "Confirm me?"), confirm: react_1.default.createElement(core_1.Text, { emoji: true }, "Yes, I confirm!"), deny: react_1.default.createElement(core_1.Text, { emoji: true }, "No go away") },
            react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "*No go away*")));
        it("renders Confirm component with Text Component properties", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Option", () => {
    describe("Option with string child", () => {
        const component = () => react_1.default.createElement(core_1.Option, { value: "an option" }, "I am an option");
        it("renders Option with string child", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Option with Text child", () => {
        const component = () => (react_1.default.createElement(core_1.Option, { value: "an option" },
            react_1.default.createElement(core_1.Text, { emoji: true }, "Another option")));
        it("renders Option with Text child", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Option with url property", () => {
        const component = () => (react_1.default.createElement(core_1.Option, { url: "https://google.com", value: "an option" },
            react_1.default.createElement(core_1.Text, { emoji: true }, "Another option")));
        it("renders Option with url property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Option with description string property", () => {
        const component = () => (react_1.default.createElement(core_1.Option, { url: "https://google.com", description: "hello i am a description", value: "an option" },
            react_1.default.createElement(core_1.Text, { emoji: true }, "Another option")));
        it("renders Option with description string property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Option with description Text property", () => {
        const component = () => (react_1.default.createElement(core_1.Option, { url: "https://google.com", description: react_1.default.createElement(core_1.Text, { emoji: true }, "hello i am a description"), value: "an option" },
            react_1.default.createElement(core_1.Text, { emoji: true }, "Another option")));
        it("renders Option with description Text property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("DatePicker", () => {
    describe("Default DatePicker", () => {
        const onSubmit = jest.fn();
        const component = () => react_1.default.createElement(core_1.DatePicker, { onSelect: onSubmit, action: "date" });
        it("renders default DatePicker", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
        describe("with render action", () => {
            it("calls the onSubmit function", () => __awaiter(void 0, void 0, void 0, function* () {
                const user = {
                    username: "johnsmith",
                    name: "john smith",
                    id: "u123",
                    team_id: "t123",
                };
                yield core_1.render(react_1.default.createElement(component), {
                    value: "date",
                    event: { user, date: "2020-04-16" },
                });
                expect(onSubmit).toBeCalledWith({ user, date: "2020-04-16" });
                expect(onSubmit).toBeCalledTimes(1);
            }));
        });
    });
    describe("DatePicker with initial date property", () => {
        const component = () => (react_1.default.createElement(core_1.DatePicker, { onSelect: () => null, action: "date", initialDate: "2020-11-11" }));
        it("renders DatePicker with initial date property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("DatePicker with string placeholder property", () => {
        const component = () => (react_1.default.createElement(core_1.DatePicker, { onSelect: () => null, action: "date", initialDate: "2020-11-11", placeholder: "just a placeholder" }));
        it("renders DatePicker with string placeholder property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("DatePicker with Text component placeholder property", () => {
        const component = () => (react_1.default.createElement(core_1.DatePicker, { onSelect: () => null, action: "date", initialDate: "2020-11-11", placeholder: react_1.default.createElement(core_1.Text, { emoji: true }, "just a placeholder") }));
        it("renders DatePicker with Text component placeholder property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("DatePicker with confirm property", () => {
        const component = () => (react_1.default.createElement(core_1.DatePicker, { onSelect: () => null, action: "date", initialDate: "2020-11-11", placeholder: react_1.default.createElement(core_1.Text, { emoji: true }, "just a placeholder"), confirm: react_1.default.createElement(core_1.Confirm, { title: "Confirm me?", confirm: "Yes, I confirm!", deny: "No, go away!" }, "Do you confirm me?") }));
        it("renders DatePicker with confirm property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Input", () => {
    describe("Input with DatePicker element", () => {
        const component = () => (react_1.default.createElement(core_1.Input, { label: "Expiration date" },
            react_1.default.createElement(core_1.DatePicker, { action: "date" })));
        it("renders Input with DatePicker element", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Input with label string", () => {
        const component = () => (react_1.default.createElement(core_1.Input, { label: "Expiration date" },
            react_1.default.createElement(core_1.DatePicker, { action: "date" })));
        it("renders Input with label string", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Input with label Text component", () => {
        const component = () => (react_1.default.createElement(core_1.Input, { label: react_1.default.createElement(core_1.Text, { emoji: true }, "Label") },
            react_1.default.createElement(core_1.DatePicker, { action: "date" })));
        it("renders Input with label Text component", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Input with hint Text component", () => {
        const component = () => (react_1.default.createElement(core_1.Input, { label: "label", hint: react_1.default.createElement(core_1.Text, { emoji: true }, "hint") },
            react_1.default.createElement(core_1.DatePicker, { action: "date" })));
        it("renders Input with hint Text component", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Input with hint Text component", () => {
        const component = () => (react_1.default.createElement(core_1.Input, { label: "label", hint: react_1.default.createElement(core_1.Text, { emoji: true }, "hint") },
            react_1.default.createElement(core_1.DatePicker, { action: "date" })));
        it("renders Input with hint Text component", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Input with optional property", () => {
        const component = () => (react_1.default.createElement(core_1.Input, { label: "label", hint: react_1.default.createElement(core_1.Text, { emoji: true }, "hint"), optional: true },
            react_1.default.createElement(core_1.DatePicker, { action: "date" })));
        it("renders Input with optional property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("TextField", () => {
    describe("TextField with action", () => {
        const component = () => react_1.default.createElement(core_1.TextField, { action: "text" });
        it("renders TextField with action", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("TextField with initial value", () => {
        const component = () => (react_1.default.createElement(core_1.TextField, { action: "text", initialValue: "hey there" }));
        it("renders TextField with initial value", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("TextField with maxLength property", () => {
        const component = () => (react_1.default.createElement(core_1.TextField, { action: "text", initialValue: "hey there", maxLength: 10 }));
        it("renders TextField with maxLength property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("TextField with minLength property", () => {
        const component = () => (react_1.default.createElement(core_1.TextField, { action: "text", initialValue: "hey there", minLength: 7 }));
        it("renders TextField with minLength property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("TextField with multiline property set", () => {
        const component = () => (react_1.default.createElement(core_1.TextField, { action: "text", initialValue: "hey there", minLength: 7, multiline: true }));
        it("renders TextField with multiline property set", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("TextField with string placeholder", () => {
        const component = () => (react_1.default.createElement(core_1.TextField, { action: "text", initialValue: "hey there", minLength: 7, multiline: true, placeholder: "i am a placeholder" }));
        it("renders TextField with string placeholder", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("TextField with Text component placeholder", () => {
        const component = () => (react_1.default.createElement(core_1.TextField, { action: "text", initialValue: "hey there", minLength: 7, multiline: true, placeholder: react_1.default.createElement(core_1.Text, { emoji: true }, "I'm a placeholder") }));
        it("renders TextField with Text component placeholder", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Checkboxes", () => {
    describe("Checkboxes with one option", () => {
        const component = () => (react_1.default.createElement(core_1.Checkboxes, { action: "options" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "hello")));
        it("renders Checkboxes with one option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Checkboxes with two options", () => {
        const component = () => (react_1.default.createElement(core_1.Checkboxes, { action: "options" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "hey"),
            react_1.default.createElement(core_1.Option, { value: "2" }, "hello")));
        it("renders Checkboxes with two options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Checkboxes with one selected option", () => {
        const component = () => (react_1.default.createElement(core_1.Checkboxes, { action: "options" },
            react_1.default.createElement(core_1.Option, { value: "1", selected: true }, "hey"),
            react_1.default.createElement(core_1.Option, { value: "2" }, "hello")));
        it("renders Checkboxes with one selected option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Checkboxes with two selected options", () => {
        const component = () => (react_1.default.createElement(core_1.Checkboxes, { action: "options" },
            react_1.default.createElement(core_1.Option, { value: "1", selected: true }, "hey"),
            react_1.default.createElement(core_1.Option, { value: "2", selected: true }, "hello")));
        it("renders Checkboxes with two selected options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Checkboxes with Confirm component", () => {
        const component = () => (react_1.default.createElement(core_1.Checkboxes, { action: "options", confirm: react_1.default.createElement(core_1.Confirm, { title: "Confirm me?", confirm: "Yes, I confirm!", deny: "No, go away!" }, "Do you confirm me?") },
            react_1.default.createElement(core_1.Option, { value: "1", selected: true }, "hey"),
            react_1.default.createElement(core_1.Option, { value: "2", selected: true }, "hello")));
        it("renders Checkboxes with Confirm component", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Checkboxes with Url property in Options component", () => {
        const component = () => (react_1.default.createElement(core_1.Checkboxes, { action: "options" },
            react_1.default.createElement(core_1.Option, { value: "1", url: "https://google.com" }, "hey")));
        it("renders Option component without Url property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Overflow Menu", () => {
    describe("Overflow Menu with a single option", () => {
        const component = () => (react_1.default.createElement(core_1.OverflowMenu, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { value: "dogs" }, "Dogs")));
        it("renders an Overflow menu with a single option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Overflow Menu with two options", () => {
        const component = () => (react_1.default.createElement(core_1.OverflowMenu, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { value: "dogs" }, "Dogs"),
            react_1.default.createElement(core_1.Option, { value: "cats" }, "Cats")));
        it("renders an Overflow menu with a two options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Overflow Menu with a Url options", () => {
        const component = () => (react_1.default.createElement(core_1.OverflowMenu, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { url: "google.com", value: "dogs" }, "Dogs")));
        it("renders an Overflow menu with a Url option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Radio Buttons", () => {
    describe("Radio Buttons with a single option", () => {
        const component = () => (react_1.default.createElement(core_1.RadioButtons, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { value: "dogs" }, "Dogs")));
        it("renders an Radio Buttons with a single option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Radio Buttons with two options", () => {
        const component = () => (react_1.default.createElement(core_1.RadioButtons, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { value: "dogs" }, "Dogs"),
            react_1.default.createElement(core_1.Option, { value: "cats" }, "Cats")));
        it("renders an Radio Buttons with a two options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Radio Buttons with selected option", () => {
        const component = () => (react_1.default.createElement(core_1.RadioButtons, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { value: "dogs" }, "Dogs"),
            react_1.default.createElement(core_1.Option, { value: "cats", selected: true }, "Cats")));
        it("renders an Radio Buttons with a selected option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Radio Buttons with a Url options", () => {
        const component = () => (react_1.default.createElement(core_1.RadioButtons, { action: "overflow" },
            react_1.default.createElement(core_1.Option, { url: "google.com", value: "dogs" }, "Dogs")));
        it("renders an Radio Buttons without a Url property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Option Group", () => {
    describe("Option Group with a single Option", () => {
        const component = () => (react_1.default.createElement(core_1.OptionGroup, { label: "option group" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")));
        it("renders an Option Group with a single Option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Option Group with two Options", () => {
        const component = () => (react_1.default.createElement(core_1.OptionGroup, { label: "option group" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2")));
        it("renders an Option Group with two Options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Option Group with Url Option", () => {
        const component = () => (react_1.default.createElement(core_1.OptionGroup, { label: "option group" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2", url: "google.com" }, "Option 2")));
        it("renders an Option Group without a Url Option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Static Select Menu", () => {
    describe("Static Select Menu with one option", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")));
        it("renders a Static Select Menu with one option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Static Select Menu with two options", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2")));
        it("renders a Static Select Menu with two options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Static Select Menu with two options and one initial option", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select", initialOption: react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2") },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2")));
        it("renders a Static Select Menu with two options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Static Select Menu with selected option", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2", selected: true }, "Option 2")));
        it("renders a Static Select Menu with selected option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Static Select Menu with one option group", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "group" },
                react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"))));
        it("renders a Static Select Menu with one option group", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Static Select Menu with two option groups", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "group 1" },
                react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")),
            react_1.default.createElement(core_1.OptionGroup, { label: "group 2" },
                react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2"))));
        it("renders a Static Select Menu with two option groups", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Static Select Menu with selected option group", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "group 1" },
                react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")),
            react_1.default.createElement(core_1.OptionGroup, { label: "group 2" },
                react_1.default.createElement(core_1.Option, { value: "2", selected: true }, "Option 2"))));
        it("renders a Static Select Menu with selected option group", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("User Select Menu", () => {
    describe("Default User Select Menu", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "users", action: "select", placeholder: "a placeholder" }));
        it("renders a default User Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("User Select Menu with initial user property", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "users", action: "select", initialUser: "U12345", placeholder: "a placeholder" }));
        it("renders a User Select Menu with initial user property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Conversations Select Menu", () => {
    describe("Default Conversations Select Menu", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "conversations", action: "select", placeholder: "a placeholder" }));
        it("renders a default Conversations Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Conversations Select Menu with initial conversation property", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "conversations", action: "select", initialConversation: "C12345", placeholder: "a placeholder" }));
        it("renders a Conversations Select Menu with initial user property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Conversations Select Menu with a filter property", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "conversations", action: "select", initialConversation: "C12345", placeholder: "a placeholder", filter: { excludeExternalSharedChannels: true } }));
        it("renders a Conversations Select Menu with a filter property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Channel Select Menu", () => {
    describe("Default Channel Select Menu", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "channels", action: "select", placeholder: "a placeholder" }));
        it("renders a default Channel Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Channel Select Menu with initial channel property", () => {
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "channels", action: "select", initialChannel: "C12345", placeholder: "a placeholder" }));
        it("renders a Channel Select Menu with initial channel property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("External Select Menu", () => {
    describe("Default External Select Menu", () => {
        const onSearchOptions = jest.fn();
        const component = () => (react_1.default.createElement(core_1.SelectMenu, { type: "external", minQueryLength: 100, onSearchOptions: (event) => {
                onSearchOptions(event);
                return [
                    react_1.default.createElement(core_1.OptionGroup, { key: "1", label: "A group" },
                        react_1.default.createElement(core_1.Option, { value: "option-1" }, "This was loaded asynchronously")),
                ];
            }, action: "select", placeholder: "a placeholder" }));
        it("renders a default External Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
        describe("When fetching onSearchOptions", () => {
            it("fetches the correct onSearchOptions function", () => __awaiter(void 0, void 0, void 0, function* () {
                const user = {
                    username: "johnsmith",
                    name: "john smith",
                    id: "u123",
                    team_id: "t123",
                };
                const onSearchOptionsFn = yield core_1.getOnSearchOptions(component(), {
                    value: "select",
                    event: {
                        user,
                    },
                });
                yield onSearchOptionsFn({
                    user,
                    query: "a query",
                });
                expect(onSearchOptions).toBeCalled();
                expect(onSearchOptions).toBeCalledWith({
                    user,
                    query: "a query",
                });
            }));
        });
    });
});
describe("Multi Static Select Menu", () => {
    describe("Multi Static Select Menu with one option", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")));
        it("renders a Multi Static Select Menu with one option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Static Select Menu with two options", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2")));
        it("renders a Multi Static Select Menu with two options", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Static Select Menu with selected option", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"),
            react_1.default.createElement(core_1.Option, { value: "2", selected: true }, "Option 2")));
        it("renders a Multi Static Select Menu with selected option", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Static Select Menu with one option group", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "group" },
                react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1"))));
        it("renders a Multi Static Select Menu with one option group", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Static Select Menu with two option groups", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "group 1" },
                react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")),
            react_1.default.createElement(core_1.OptionGroup, { label: "group 2" },
                react_1.default.createElement(core_1.Option, { value: "2" }, "Option 2"))));
        it("renders a Static Select Menu with two option groups", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Static Select Menu with selected option group", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { maxSelectedItems: 10, placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "group 1" },
                react_1.default.createElement(core_1.Option, { value: "1" }, "Option 1")),
            react_1.default.createElement(core_1.OptionGroup, { label: "group 2" },
                react_1.default.createElement(core_1.Option, { value: "2", selected: true }, "Option 2"))));
        it("renders a Multi Static Select Menu with selected option group", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Static Select Menu with diverse option group", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { maxSelectedItems: 10, placeholder: "a placeholder", action: "select" },
            react_1.default.createElement(core_1.OptionGroup, { label: "an option group" },
                react_1.default.createElement(core_1.Option, { value: "option-a", selected: true }, "option a"),
                react_1.default.createElement(core_1.Option, { value: "option-b", selected: true }, "option b"),
                react_1.default.createElement(core_1.Option, { value: "option-b" }, "option b"),
                react_1.default.createElement(core_1.Option, { value: "option-c" }, "option c"))));
        it("renders a Multi Static Select Menu with diverse option group", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Multi External Select Menu", () => {
    describe("Default Multi External Select Menu", () => {
        const onSearchOptions = jest.fn();
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "external", minQueryLength: 100, onSearchOptions: (event) => {
                onSearchOptions(event);
                return [
                    react_1.default.createElement(core_1.OptionGroup, { key: "1", label: "A group" },
                        react_1.default.createElement(core_1.Option, { value: "option-1" }, "This was loaded asynchronously")),
                ];
            }, action: "select", placeholder: "a placeholder" }));
        it("renders a default Multi External Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
        describe("When fetching onSearchOptions", () => {
            it("fetches the correct onSearchOptions function", () => __awaiter(void 0, void 0, void 0, function* () {
                const user = {
                    username: "johnsmith",
                    name: "john smith",
                    id: "u123",
                    team_id: "t123",
                };
                const onSearchOptionsFn = yield core_1.getOnSearchOptions(component(), {
                    value: "select",
                    event: {
                        user,
                    },
                });
                yield onSearchOptionsFn({
                    user,
                    query: "a query",
                });
                expect(onSearchOptions).toBeCalled();
                expect(onSearchOptions).toBeCalledWith({
                    user,
                    query: "a query",
                });
            }));
        });
    });
});
describe("Multi User Select Menu", () => {
    describe("Default Multi User Select Menu", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "users", action: "select", placeholder: "a placeholder" }));
        it("renders a default Multi User Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi User Select Menu with initial user property", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "users", action: "select", initialUsers: ["U12345"], placeholder: "a placeholder" }));
        it("renders a Multi User Select Menu with initial user property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Multi Channel Select Menu", () => {
    describe("Default Multi Channel Select Menu", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "channels", action: "select", placeholder: "a placeholder" }));
        it("renders a default Multi Channel Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Channel Select Menu with initial channel property", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "channels", action: "select", initialChannels: ["C12345"], placeholder: "a placeholder" }));
        it("renders a Multi Channel Select Menu with initial channel property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
describe("Multi Conversations Select Menu", () => {
    describe("Default Multi Conversations Select Menu", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "conversations", action: "select", placeholder: "a placeholder" }));
        it("renders a default Conversations Select Menu", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Conversations Select Menu with initial conversation property", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "conversations", action: "select", initialConversations: ["C12345"], placeholder: "a placeholder" }));
        it("renders a Multi Conversations Select Menu with initial user property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
    describe("Multi Conversations Select Menu with a filter property", () => {
        const component = () => (react_1.default.createElement(core_1.MultiSelectMenu, { type: "conversations", action: "select", initialConversations: ["C12345"], placeholder: "a placeholder", filter: { excludeExternalSharedChannels: true } }));
        it("renders a Conversations Select Menu with a filter property", () => __awaiter(void 0, void 0, void 0, function* () {
            const blocks = yield core_1.render(react_1.default.createElement(component));
            expect(blocks).toMatchSnapshot();
        }));
    });
});
//# sourceMappingURL=reconciler.spec.js.map