<template>
  <Transition name="messagebox-fade" @after-leave="afterLeave">
    <div
      class="vk-message-box"
      v-show="visible"
      @click.self="handleOverlayClick"
    >
      <div class="vk-message-box-wrapper" role="dialog" aria-modal="true">
        <div class="vk-message-box-title">
          <h1>{{ props.title || "MessageBox" }}</h1>

          <span class="vk-message-box-close" @click="handleAction('close')">
            <Icon icon="xmark" />
          </span>
        </div>
        <div class="vk-message-box-content">
          <p>{{ props.content }}</p>
        </div>
        <div class="vk-message-box-btns">
          <Button
            v-if="showCancelButton"
            type="danger"
            @click="handleAction('cancel')"
          >
            {{ props.cancelBtnText || "Cancel" }}
          </Button>
          <Button @click="handleAction('confirm')">
            {{ props.confirmBtnText || "Confirm" }}
          </Button>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { ActionType, MessageBoxOptions } from "./types";
import Button from "../Button/Button.vue";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "DiuMessageBox",
});

const props = defineProps<MessageBoxOptions>();

const emit = defineEmits<{
  (e: "action", action: ActionType): void;
}>();

const visible = ref(true);
const currentAction = ref<ActionType>("close");

const showCancelButton = computed(() => {
  return props.showCancelBtn ?? props.showCancleBtn ?? false;
});

const handleAction = (action: ActionType) => {
  currentAction.value = action;
  visible.value = false;
};

const handleOverlayClick = () => {
  if (props.closeOnClickModal !== false) {
    handleAction("close");
  }
};

const afterLeave = () => {
  emit("action", currentAction.value);
};
</script>
<style></style>
