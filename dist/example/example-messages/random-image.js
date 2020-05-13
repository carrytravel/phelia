"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomImage = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("../../core");
const imageUrls = [
    "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826__480.jpg",
    "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__480.jpg",
    "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__480.jpg",
    "https://cdn.pixabay.com/photo/2016/02/26/16/32/dog-1224267__480.jpg"
];
function randomImage() {
    const index = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[index];
}
function RandomImage({ useState }) {
    const [imageUrl, setImageUrl] = useState("imageUrl", randomImage());
    return (react_1.default.createElement(core_1.Message, { text: "Choose a dog" },
        react_1.default.createElement(core_1.ImageBlock, { emoji: true, title: "an adorable :dog:", alt: "a very adorable doggy dog", imageUrl: imageUrl }),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.Actions, null,
            react_1.default.createElement(core_1.Button, { style: "primary", action: "randomImage", onClick: () => setImageUrl(randomImage()), confirm: react_1.default.createElement(core_1.Confirm, { title: "Are you sure?", confirm: "Yes, gimmey that doggy!", deny: "No, I hate doggies" },
                    react_1.default.createElement(core_1.Text, { type: "mrkdwn" }, "Are you certain you want to see the _cutest_ doggy ever?")) }, "New doggy"))));
}
exports.RandomImage = RandomImage;
//# sourceMappingURL=random-image.js.map