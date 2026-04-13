export interface MessageBoxOptions {
  title?: string;
  content?: string;
  showCancelBtn?: boolean;
  showCancleBtn?: boolean;
  cancelBtnText?: string;
  confirmBtnText?: string;
  field?: string;
  closeOnClickModal?: boolean;
  [key: string]: unknown;
}

// 用户操作类型
export type ActionType = "confirm" | "cancel" | "close";

export interface MessageBoxMethod {
  (options: MessageBoxOptions): Promise<ActionType>;
  alert: (options: MessageBoxOptions) => Promise<ActionType>;
  confirm: (options: MessageBoxOptions) => Promise<ActionType>;
}
