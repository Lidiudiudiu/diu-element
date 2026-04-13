<template lang="">
  <div>
    <DiuRate
    :num="rateValue"
    color="red"
    voidColor="blue"
    ></DiuRate>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rateValue = ref(3)
import DiuRate from '@/components/Rate/Rate.vue'
</script>
