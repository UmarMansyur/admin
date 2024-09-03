<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
    <div class="px-3 py-4 lg:px-5 lg:pl-3">
      <div class="flex items-center">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="sidebar-menu-admin" data-drawer-toggle="sidebar-menu-admin"
            aria-controls="sidebar-menu-admin" type="button" @click="toggleMenu"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <a href="https://flowbite.com" class="flex mx-auto -ms-4 justify-center w-72 items-center">
            <img src="/assets/images/logo.png" class="h-12" alt="FlowBite Logo" />
          </a>
        </div>
        <div class="ms-3 hidden sm:block">
          <div class="flex items-center">
            <button type="button" @click="toggleMenu2"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open search</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-center ms-auto">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo">
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Drawer } from 'flowbite';
import { onMounted, ref } from 'vue';

const drawer = ref<any>(null);

onMounted(() => {
  const $targetEl: any = document.querySelector('#sidebar-menu-admin');
  const options = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
      'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onHide: () => {
      $targetEl.classList.add('-translate-x-full');
      $targetEl.classList.remove('sm:translate-x-full');
      
    },
    onShow: () => {
      $targetEl.classList.remove('-translate-x-full');
      $targetEl.classList.add('sm:translate-x-full');
    },
  };

  const instanceOptions = {
    id: 'sidebar-menu-admin',
    override: true
  };


  drawer.value = new Drawer($targetEl, options, instanceOptions);
  drawer.value.init();
});

const toggleMenu = () => {
  drawer.value.toggle();
};

const toggleMenu2 = () => {
  const elementSidebar: any = document.querySelector('#sidebar-menu-admin');
  const pagebar: any = document.querySelector('#page-bar');
  pagebar.classList.toggle('sm:ml-72');

  if (elementSidebar.classList.contains('hidden')) {
    elementSidebar.classList.remove('hidden');
    elementSidebar.classList.add('opacity-0');
    setTimeout(() => {
      elementSidebar.classList.remove('opacity-0');
      elementSidebar.classList.add('transition-opacity', 'duration-300', 'ease-out');
    }, 20);
  } else {
    elementSidebar.classList.add('opacity-0');
    elementSidebar.classList.add('transition-opacity', 'duration-300', 'ease-out');
    elementSidebar.addEventListener('transitionend', () => {
      elementSidebar.classList.add('hidden');
    }, { once: true });
  }

};

</script>