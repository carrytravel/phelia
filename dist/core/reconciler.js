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
exports.getOnSearchOptions = exports.render = void 0;
const react_reconciler_1 = __importDefault(require("react-reconciler"));
/** A function to help debug errors */
const debug = (...args) => {
    // console.log(args);
};
/** Reconciler config */
class HostConfig {
    constructor() {
        this.supportsMutation = true;
        this.supportsPersistence = false;
        this.supportsHydration = true;
    }
    getPublicInstance(_instance) {
        // throw new Error("Method not implemented.");
    }
    getRootHostContext(_rootContainerInstance) {
        return { type: "root" };
    }
    getChildHostContext(_parentHostContext, type, _rootContainerInstance) {
        return { type };
    }
    prepareForCommit(_containerInfo) {
        return;
    }
    resetAfterCommit(_containerInfo) {
        return;
    }
    createInstance(type, props, rootContainerInstance, _hostContext, _internalInstanceHandle) {
        if (props.toSlackElement) {
            return props.toSlackElement(props, (e) => {
                const [nodes, promises, onSearchOptions] = reconcile(e, rootContainerInstance.action, rootContainerInstance.getOnSearchOptions);
                if (nodes &&
                    rootContainerInstance.action &&
                    nodes.action_id === rootContainerInstance.action.value &&
                    rootContainerInstance.getOnSearchOptions &&
                    onSearchOptions) {
                    rootContainerInstance.onSearchOptions = onSearchOptions;
                }
                return [nodes, promises];
            }, rootContainerInstance.promises);
        }
        throw Error("Unknown Component type " + JSON.stringify({ props, type }));
    }
    appendInitialChild(parentInstance, child) {
        debug("appendInitialChild");
        if (Array.isArray(parentInstance.blocks)) {
            parentInstance.blocks.push(child);
            return;
        }
        if (parentInstance.type === "overflow") {
            parentInstance.options.push(child);
            return;
        }
        if (parentInstance.type === "static_select" ||
            parentInstance.type === "multi_static_select") {
            if (child.isOptionGroup) {
                if (!Array.isArray(parentInstance.option_groups)) {
                    parentInstance.option_groups = [];
                }
                parentInstance.option_groups.push(child);
                return;
            }
            if (!Array.isArray(parentInstance.options)) {
                parentInstance.options = [];
            }
            parentInstance.options.push(Object.assign(Object.assign({}, child), { url: undefined }));
            return;
        }
        if (parentInstance.type === "checkboxes" ||
            parentInstance.type === "radio_buttons" ||
            parentInstance.isOptionGroup) {
            parentInstance.options.push(Object.assign(Object.assign({}, child), { url: undefined }));
            return;
        }
        if (parentInstance.type === "input") {
            parentInstance.element = child;
            return;
        }
        if (parentInstance.type === "actions") {
            parentInstance.elements.push(child);
            return;
        }
        if (parentInstance.type === "context") {
            parentInstance.elements.push(child);
            return;
        }
        if (parentInstance.isConfirm || parentInstance.isOption) {
            parentInstance.text = child;
            if (parentInstance.text.type === "text") {
                parentInstance.text.type = "plain_text";
            }
            return;
        }
        if (parentInstance.type === "button") {
            parentInstance.text.text += child.text;
            return;
        }
        if (parentInstance.type === "section") {
            if (!parentInstance.fields) {
                parentInstance.fields = [];
            }
            parentInstance.fields.push(child);
            return;
        }
        if (parentInstance.type === "mrkdwn" ||
            parentInstance.type === "plain_text") {
            parentInstance.text += child.text;
            return;
        }
        if (parentInstance.type === child.type) {
            parentInstance.text += child.text;
            return;
        }
        throw new Error("appendInitialChild::" + JSON.stringify({ parentInstance, child }));
    }
    finalizeInitialChildren(_parentInstance, _type, props, rootContainerInstance, _hostContext) {
        var _a, _b;
        if (((_a = rootContainerInstance.action) === null || _a === void 0 ? void 0 : _a.type) === "onload" && props.onLoad) {
            rootContainerInstance.promises.push(props.onLoad(rootContainerInstance.action.event));
            return true;
        }
        if (((_b = rootContainerInstance.action) === null || _b === void 0 ? void 0 : _b.type) === "onupdate" && props.onUpdate) {
            rootContainerInstance.promises.push(props.onUpdate(rootContainerInstance.action.event));
            return true;
        }
        if (rootContainerInstance.action &&
            props.action === rootContainerInstance.action.value) {
            if (rootContainerInstance.getOnSearchOptions && props.onSearchOptions) {
                rootContainerInstance.onSearchOptions = props.onSearchOptions;
                return true;
            }
            if (props.onClick) {
                rootContainerInstance.promises.push(props.onClick(rootContainerInstance.action.event));
            }
            if (props.onSubmit) {
                rootContainerInstance.promises.push(props.onSubmit(rootContainerInstance.action.event));
            }
            if (props.onSelect) {
                rootContainerInstance.promises.push(props.onSelect(rootContainerInstance.action.event));
            }
            return true;
        }
        return false;
    }
    prepareUpdate(_instance, _type, _oldProps, _newProps, _rootContainerInstance, _hostContext) {
        debug("prepareUpdate");
        return true;
    }
    shouldSetTextContent(_type, _props) {
        return false;
    }
    shouldDeprioritizeSubtree(_type, _props) {
        return false;
    }
    createTextInstance(text, _rootContainerInstance, _hostContext, _internalInstanceHandle) {
        debug("createTextInstance");
        return {
            type: "text",
            text,
        };
    }
    scheduleDeferredCallback(_callback, _options) { }
    cancelDeferredCallback(callbackID) { }
    setTimeout(_handler, _timeout) { }
    clearTimeout(handle) { }
    now() {
        return Date.now();
    }
    appendChildToContainer(container, child) {
        if (container.isRoot) {
            container.node = child;
            return;
        }
        debug("appendChildToContainer");
        throw new Error("container is not an array");
    }
    appendChild(_parentInstance, _child) {
        debug("appendChild");
    }
    commitTextUpdate(textInstance, _oldText, newText) {
        debug("commitTextUpdate");
        textInstance.text = newText;
    }
    commitMount(_instance, _type, _newProps, _internalInstanceHandle) {
        debug("commitMount");
    }
    replaceContainerChildren(container, newChildren) {
        debug("replaceContainerChildren", { container, newChildren });
    }
    resetTextContent(_instance) {
        debug("resetTextContent");
    }
    commitUpdate(_instance, _updatePayload, _type, _oldProps, _newProps, _internalInstanceHandle) { }
    insertBefore(parentInstance, child, beforeChild) {
        debug("insertBefore", { parentInstance, child, beforeChild });
    }
    insertInContainerBefore(container, child, beforeChild) {
        debug("insertInContainerBefore", { container, child, beforeChild });
    }
    removeChild(parentInstance, child) {
        debug("removeChild", parentInstance, child);
    }
    removeChildFromContainer(container, child) {
        debug("removeChildFromContainer", {
            container,
            child,
        });
    }
}
/** Reconcile the reaction components */
function reconcile(element, action, getOnSearchOptions) {
    const reconcilerInstance = react_reconciler_1.default(new HostConfig());
    const root = {
        isRoot: true,
        action,
        promises: new Array(),
        getOnSearchOptions,
    };
    const container = reconcilerInstance.createContainer(root, false, false);
    reconcilerInstance.updateContainer(element, container, null, null);
    return [root.node, root.promises, root.onSearchOptions];
}
/** Render the reaction components */
function render(element, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const [blocks, promises] = reconcile(element, action);
        yield Promise.all(promises);
        return blocks;
    });
}
exports.render = render;
/** Search filter options */
function getOnSearchOptions(element, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const [_, promises, onSearchOptions] = reconcile(element, action, true);
        yield Promise.all(promises);
        return onSearchOptions;
    });
}
exports.getOnSearchOptions = getOnSearchOptions;
