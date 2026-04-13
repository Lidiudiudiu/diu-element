<template>
  <DiuButton @click="showMessageBox">showMessageBox</DiuButton>
</template>
<script setup lang="ts">
import DiuMessageBox from '@/components/MessageBox/MessageBox'

import DiuButton from '../../../src/components/Button/Button.vue'

const showMessageBox = () => {
  DiuMessageBox({
    // 确认文字、标题和内容
    confirmBtnText: 'Ok',
    title: 'MessageBox',
    content: 'This is ConfirmMessageBox content'
  }).then(() => {
    console.log('MessageBox resolve')
  }).catch(() => {
    console.log('MessageBox reject')
  })
}
</script>
