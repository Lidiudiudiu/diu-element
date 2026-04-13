import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { App } from "vue";
import DiuButton from "@/components/Button";
import DiuIcon from "@/components/Icon";
import DiuAlert from "@/components/Alert";
import { Collapse as DiuCollapse, CollapseItem as DiuCollapseItem } from "@/components/Collapse";
import DiuTooltip from "@/components/Tooltip";
import DiuDropdown from "@/components/Dropdown";
import DiuMessage from "@/components/Message";
import DiuNotification from "./components/Notification";
import DiuInput from "./components/Input";
import DiuSwitch from "./components/Switch";
import DiuSelect from "./components/Select";
import { Form as DiuForm, FormItem as DiuFormItem } from "./components/Form";
import { createMessage } from "@/components/Message";
import { createNotification } from "@/components/Notification";

import "./styles/index.css";

library.add(fas);

const components = [
  DiuButton,
  DiuIcon,
  DiuAlert,
  DiuCollapse,
  DiuCollapseItem,
  DiuTooltip,
  DiuDropdown,
  DiuMessage,
  DiuNotification,
  DiuInput,
  DiuSwitch,
  DiuSelect,
  DiuForm,
  DiuFormItem,
];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

/** 这里将组件导出，是为了在单独使用组件时，可以按需引入 */
export {
  DiuButton,
  DiuIcon,
  DiuAlert,
  DiuCollapse,
  DiuCollapseItem,
  DiuTooltip,
  DiuDropdown,
  DiuMessage,
  DiuNotification,
  DiuInput,
  DiuSwitch,
  DiuSelect,
  DiuForm,
  DiuFormItem,
  createMessage,
  createNotification,
};

const DiuElement = {
  install,
};

export default DiuElement;

/**
 * 这里是重点，需要将这些组件在ts中声明为全局组件；
 */
declare module "vue" {
  export interface GlobalComponents {
    DiuButton: typeof DiuButton;
    DiuIcon: typeof DiuIcon;
    DiuAlert: typeof DiuAlert;
    DiuCollapse: typeof DiuCollapse;
    DiuCollapseItem: typeof DiuCollapseItem;
    DiuTooltip: typeof DiuTooltip;
    DiuDropdown: typeof DiuDropdown;
    DiuMessage: typeof DiuMessage;
    DiuNotification: typeof DiuNotification;
    DiuInput: typeof DiuInput;
    DiuSwitch: typeof DiuSwitch;
    DiuSelect: typeof DiuSelect;
    DiuForm: typeof DiuForm;
    DiuFormItem: typeof DiuFormItem;
  }
}
