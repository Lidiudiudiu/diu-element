<template>

    <DiuButton @click="showConfirmMessageBox" type="danger">ConfirmMessageBox</DiuButton>
</template>
<script setup>
import DiuMessageBox from '@/components/MessageBox/MessageBox'
import DiuButton from '@/components/Button/Button.vue'

const showConfirmMessageBox = () => {
  DiuMessageBox.confirm({
    showCancelBtn: true,
    confirmBtnText: '确定',
    cancelBtnText: '取消',
    title: 'ConfirmMessageBox',
    content: 'This is ConfirmMessageBox content'
  }).then(() => {
    console.log('ConfirmMessageBox resolve')
  }).catch(() => {
    console.log('ConfirmMessageBox reject')
  })
}
</script>
