<template lang="">
  <div>
    <DiuRate
    :num="rateValue"
    ></DiuRate>
    <DiuRate
    :num="rateValue"
    :max=10
    ></DiuRate>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rateValue = ref(3)
import DiuRate from '@/components/Rate/Rate.vue'
</script>
