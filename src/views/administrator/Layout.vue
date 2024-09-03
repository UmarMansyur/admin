<template>
   <TheNavbarAdmin />
   <TheSidebarAdmin />
   <div class="mt-[70px] px-4 py-7 sm:ml-72" id="page-bar">
     <slot></slot>
   </div>
 </template>
 
 <script setup lang="ts">
 import { onMounted } from 'vue';
 import TheNavbarAdmin from '../../components/TheNavbarAdmin.vue';
 import TheSidebarAdmin from '../../components/TheSidebarAdmin.vue';
 onMounted(() => {
   document.body.style.fontFamily = 'Inter';
 });
 </script>