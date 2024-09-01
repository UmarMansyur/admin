<template>
  <div class="hidden" id="notify-alert">
    <Success></Success>
  </div>
  <RouterView> </RouterView>
</template>

<script setup lang="ts">
import Success from './components/Notification/Success.vue'
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
</script>
