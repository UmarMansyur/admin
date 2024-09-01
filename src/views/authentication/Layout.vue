<template>
  
  <div class="flex h-screen w-screen justify-center items-center overflow-hidden">
    <div class="sm:w-full md:w-6/12 lg:w-6/12 xl:w-4/12 w-full px-5">
      <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div class="p-4 sm:p-7">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>