<template>
  <div
    id="toast-top-left"
    class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-md shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
    role="alert"
  >
    <div class="flex space-x-5 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-green-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div>
        <h4 class="text-black text-sm">Berhasil</h4>
        <p class="text-xs">Anda berhasil login</p>
      </div>
    </div>
  </div>
</template>

