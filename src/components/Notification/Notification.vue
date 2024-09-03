<template>
  <div
    class="fixed max-w-xs w-full items-center p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-md shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
    role="alert" :class="{ hidden: !notify?.message && !notify?.type, flex: notify?.message && notify?.type }">
    <div class="flex space-x-5 items-center" v-if="notify?.type === 'success'">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6 text-green-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div>
        <h4 class="text-black text-sm">Berhasil</h4>
        <p class="text-xs">{{ notify?.message }}</p>
      </div>
    </div>
    <div class="flex space-x-5 items-center" v-if="notify?.type === 'info'">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
      </div>
      <div>
        <h4 class="text-black text-sm">Gagal</h4>
        <p class="text-xs">{{ notify?.message }}</p>
      </div>
    </div>
    <div class="flex space-x-5 items-center" v-if="notify?.type === 'warning'">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-yellow-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>
      <div>
        <h4 class="text-black text-sm">Peringatan</h4>
        <p class="text-xs">{{ notify?.message }}</p>
      </div>
    </div>
    <div class="flex space-x-5 items-center w-50" v-if="notify?.type === 'error'">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div>
        <h4 class="text-black text-sm">Gagal</h4>
        <p class="text-xs">{{ notify?.message }}</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { watch } from "vue";
import useNotify from "../../composables/notify";

const { notify } = useNotify();

watch(notify, (value) => {
  if(value.message) {
    setTimeout(() => {
      notify.$reset();
    }, 3000);
  }
});
</script>
