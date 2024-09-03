<template>
  <Notification></Notification>
  <RouterView> </RouterView>
</template>

<script setup lang="ts">
import Notification from './components/Notification/Notification.vue';
import { onMounted } from "vue";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips, initFlowbite
} from 'flowbite';
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
  initFlowbite();
});
</script>
