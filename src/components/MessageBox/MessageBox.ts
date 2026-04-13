import { h, render } from "vue";
import MessageBoxConstructor from "./MessageBox.vue";
import type { ActionType, MessageBoxMethod, MessageBoxOptions } from "./types";

const openMessageBox = (
  options: MessageBoxOptions = {},
  defaultShowCancelBtn = false,
) => {
  return new Promise<ActionType>((resolve, reject) => {
    if (typeof document === "undefined") {
      resolve("confirm");
      return;
    }

    const container = document.createElement("div");

    const destroy = () => {
      render(null, container);
      container.remove();
    };

    const handleAction = (action: ActionType) => {
      destroy();
      if (action === "confirm") {
        resolve(action);
      } else {
        reject(action);
      }
    };

    const vnode = h(MessageBoxConstructor, {
      ...options,
      showCancelBtn:
        options.showCancelBtn ?? options.showCancleBtn ?? defaultShowCancelBtn,
      onAction: handleAction,
    });

    render(vnode, container);
    document.body.appendChild(container);
  });
};

const MessageBox = ((options: MessageBoxOptions) => {
  return openMessageBox(options);
}) as MessageBoxMethod;

MessageBox.alert = (options: MessageBoxOptions) => {
  return openMessageBox(options);
};

MessageBox.confirm = (options: MessageBoxOptions) => {
  return openMessageBox(options, true);
};

export default MessageBox;
