<template lang="">
  <div>
    <DiuRate
    :num="rateValue"
    size="small"
    ></DiuRate>
    <DiuRate
    :num="rateValue"
    size="default"
    ></DiuRate>
    <DiuRate
    :num="rateValue"
    size="large"
    ></DiuRate>
  </div>
</template>
<script lang="ts" setup >
import { ref } from 'vue'
const rateValue = ref(3)
import DiuRate from '@/components/Rate/Rate.vue'
</script>
