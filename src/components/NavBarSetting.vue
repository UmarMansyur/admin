<template>
  <div class="mb-4 border-b bg-white rounded-lg overflow-x-auto">
    <ul class="flex -mb-px font-medium text-center overflow-x-auto" id="tab-setting" role="tablist">
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="social-media-tab" data-tabs-target="#social-media"
          type="button" role="tab" aria-controls="social-media" aria-selected="true">
          <i class="ti ti-brand-instagram"></i>
          <span class="hidden sm:block">Sosial Media</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="status-partner-tab" data-tabs-target="#status-partner"
          type="button" role="tab" aria-controls="status-partner" aria-selected="false">
          <i class="ti ti-status-change"></i>
          <span class="hidden sm:block">Status Partner</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="industry-category-tab" data-tabs-target="#industry-category"
          type="button" role="tab" aria-controls="industry-category" aria-selected="false">
          <i class="ti ti-category-2"></i>
          <span class="hidden sm:block">Kategori Industri</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="interest-category-tab" data-tabs-target="#interest-category"
          type="button" role="tab" aria-controls="interest-category" aria-selected="false">
          <i class="ti ti-table-heart"></i>
          <span class="hidden sm:block">Kategori Minat</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="campaign-support-tab" data-tabs-target="#campaign-support"
          type="button" role="tab" aria-controls="campaign-support" aria-selected="false">
          <i class="ti ti-heart-handshake"></i>
          <span class="hidden sm:block">Campaign Support</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="campaign-type-tab" data-tabs-target="#campaign-type"
          type="button" role="tab" aria-controls="campaign-type" aria-selected="false">
          <i class="ti ti-brand-campaignmonitor"></i>
          <span class="hidden sm:block">Jenis Campaign</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="task-tab" data-tabs-target="#task" type="button"
          role="tab" aria-controls="task" aria-selected="false">
          <i class="ti ti-checklist"></i>
          <span class="hidden sm:block">Tugas</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="service-category-tab" data-tabs-target="#service-category"
          type="button" role="tab" aria-controls="service-category" aria-selected="false">
          <i class="ti ti-checklist"></i>
          <span class="hidden sm:block">Kategori Layanan</span>
        </button>
      </li>
      <li class="me-2 flex-shrink-0" role="presentation">
        <button class="inline-flex items-center gap-x-2 p-4" id="member-category-tab" data-tabs-target="#member-category"
          type="button" role="tab" aria-controls="member-category" aria-selected="false">
          <i class="ti ti-user-square-rounded"></i>
          <span class="hidden sm:block">Kategori Member</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TabItem } from 'flowbite';
import TabsOption from '../helpers/tabs';
import { onMounted } from 'vue';

const initializeTabs = () => {
  const tab: HTMLElement = document.getElementById('tab-setting') as HTMLElement;
  const tabElement: TabItem[] = [
    {
      id: 'social-media',
      triggerEl: document.getElementById('social-media-tab') as HTMLElement,
      targetEl: document.getElementById('social-media') as HTMLElement
    },
    {
      id: 'status-partner',
      triggerEl: document.getElementById('status-partner-tab') as HTMLElement,
      targetEl: document.getElementById('status-partner') as HTMLElement
    },
    {
      id: 'industry-category',
      triggerEl: document.getElementById('industry-category-tab') as HTMLElement,
      targetEl: document.getElementById('industry-category') as HTMLElement
    },
    {
      id: 'interest-category',
      triggerEl: document.getElementById('interest-category-tab') as HTMLElement,
      targetEl: document.getElementById('interest-category') as HTMLElement
    },
    {
      id: 'campaign-support',
      triggerEl: document.getElementById('campaign-support-tab') as HTMLElement,
      targetEl: document.getElementById('campaign-support') as HTMLElement
    },
    {
      id: 'campaign-type',
      triggerEl: document.getElementById('campaign-type-tab') as HTMLElement,
      targetEl: document.getElementById('campaign-type') as HTMLElement
    },
    {
      id: 'task',
      triggerEl: document.getElementById('task-tab') as HTMLElement,
      targetEl: document.getElementById('task') as HTMLElement
    },
    {
      id: 'service-category',
      triggerEl: document.getElementById('service-category-tab') as HTMLElement,
      targetEl: document.getElementById('service-category') as HTMLElement
    },
    {
      id: 'member-category',
      triggerEl: document.getElementById('member-category-tab') as HTMLElement,
      targetEl: document.getElementById('member-category') as HTMLElement
    }
  ];
  const tabOptions = new TabsOption(tab);
  tabOptions.setTab(tabElement).setInstanceOptions().setTabOptions().init();
};

onMounted(() => {
  initializeTabs();
});
</script>
