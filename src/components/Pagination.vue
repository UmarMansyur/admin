<template>
  <div class="flex justify-between items-center w-full">
    <div class="text-sm">
      Menampilkan <span class="fw-semibold">{{ `${props.startData} - ${props.endData}` }}</span> dari
        <span class="fw-semibold">{{ props.total }}</span> data
    </div>
    <nav class="flex items-center gap-x-1 ms-auto" aria-label="Pagination">
      <button type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Previous" @click="props.prevPage" :disabled="props.currentPage === props.firstPage">
        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span>Previous</span>
      </button>
      <div class="flex items-center gap-x-1">
        <button type="button" v-for="page in props.pages" :key="page"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500" :class="{
            'bg-primary text-white': props.currentPage === page
          }" @click="props.goToPage(page)"
          aria-current="page">{{ page }}</button>
      </div>
      <button type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Next" @click="props.nextPage" :disabled="props.currentPage === props.lastPage">
        <span>Next</span>
        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    limit: number;
    nextPage: any;
    prevPage: any;
    pages: number[];
    total: number;
    currentPage: number;
    goToPage: any;
    lastPage: any;
    firstPage: any;
    startData: number;
    endData: number;
  }>();
</script>