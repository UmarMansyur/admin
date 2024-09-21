<template>
  <nav class="fixed top-0 z-50 w-full bg-transparent backdrop-blur-xl sm:backdrop-blur-3xl shadow-sm">
    <div class="px-3 py-4 lg:px-5 lg:pl-3">
      <div class="flex items-center">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="sidebar-menu-admin" data-drawer-toggle="sidebar-menu-admin"
            aria-controls="sidebar-menu-admin" type="button" @click="toggleMenu"
            class="inline-flex items-center p-2  text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
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
              class="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open search</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex items-center ms-auto justify-center">
          <div class="flex items-center relative" @mouseleave="closeToggleDropdown">
            <div>
              <button type="button" class="flex  bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" @mouseenter="toggleDropdown">
                <span class="sr-only">Open user menu</span>
                <img class="w-10 h-10 rounded-full" src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/profile/user-1.jpg"
                  alt="user photo">
              </button>
            </div>
            <div
              class="z-50 my-4 text-base border list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute w-80 sm:w-96 top-6 right-0 hidden px-5"
              id="dropdown-user" >
              <div class="px-4 py-3" role="none">
                <div class="flex flex-wrap space-x-5 items-center">
                  <div class="d-flex flex-shrink-0">
                    <img class="w-12 h-12 sm:w-20 sm:h-20 rounded-full"
                      src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/profile/user-1.jpg" alt="user photo">
                  </div>
                  <div>
                    <p class=" text-gray-900 dark:text-white text-sm sm:text-md" role="none">
                      Muhammad Umar Mansyur
                    </p>
                    <span class="text-gray-400 text-xs sm:text-md">Administrator</span>
                    <p class="text-gray-900 font-medium truncate dark:text-gray-300 sm:text-md" role="none">
                      umar@publish.co.id
                    </p>
                  </div>
                </div>

              </div>
              <ul class="py-3" role="none">
                <li>
                  <div class="flex px-4 space-x-4">
                    <div class="bg-gray-50 p-3 h-12 w-12 flex items-center justify-center rounded-md">
                      <i class="ti ti-users text-purple-500 text-xl"></i>
                    </div>
                    <div>
                      <h6>Profil Saya</h6>
                      <p class="text-gray-500 text-sm">Lihat dan edit profil</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="p-4">
                <button type="button" class="border-primary text-primary border w-full py-2 rounded-md items-center hover:bg-primary hover:text-white" @click="tryLogout">
                  Log out
                </button>
              </div>
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
import useApi from '../composables/api';
import { useSessionStore } from '../stores/session';
import router from '../router';

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

const toggleDropdown = () => {
  const dropdown = document.getElementById('dropdown-user');
  if (dropdown) {
    dropdown.classList.remove('hidden');
    // Add fade-in animation
    dropdown.classList.add('animate-fade-in');
    setTimeout(() => {
      dropdown.classList.remove('animate-fade-in');
    }, 300);
  } else {
    console.error('Dropdown element not found');
  }
};

const closeToggleDropdown = () => {
  const dropdown: any = document.getElementById('dropdown-user');
  dropdown.classList.add('hidden');
}

const { postResource } = useApi();
const session = useSessionStore();
const tryLogout = async () => {
  await postResource('/logout', {});
  sessionStorage.clear();
  session.$reset();
  router.push('/login');
}

</script>