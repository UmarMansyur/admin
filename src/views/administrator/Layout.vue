<template>
  <TheNavbarAdmin />
  <TheSidebarAdmin />
  <div class="mt-[70px] px-4 py-7 sm:ml-72" id="page-bar">
    <nav class="flex items-center justify-between" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-xs">
        <li class="inline-flex items-center">
          <RouterLink to="/admin/dashboard" class="inline-flex items-center font-medium text-neutral-500 hover:text-primary dark:text-gray-400 dark:hover:text-white">
            Dashboard
          </RouterLink>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="rtl:rotate-180 w-2 h-2 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <a href="#"
              class="ms-1 font-medium text-neutral-500 hover:text-primary md:ms-2 dark:text-gray-400 dark:hover:text-white">
              {{ $route.meta.title }}
            </a>
          </div>
        </li>
      </ol>
    </nav>
    <slot></slot>
  </div>
</template>

<script lang="ts">
declare const $: any;
</script>

<script setup lang="ts">
import { onMounted } from 'vue';
import TheNavbarAdmin from '../../components/TheNavbarAdmin.vue';
import TheSidebarAdmin from '../../components/TheSidebarAdmin.vue';

onMounted(() => {
  document.body.style.fontFamily = 'Inter';
  // metismenu
  $('#sidebar').metisMenu();
});
</script>