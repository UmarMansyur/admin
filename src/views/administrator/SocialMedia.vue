<template>
  <h4 class="text-4xl font-bold my-3">Sosial Media</h4>
  <div class="sm:text-end">
    <button type="button" class="inline-flex items-center gap-x-2 bg-primary rounded-xl p-3 text-sm text-white"
      @click="toggleModal('modal-social-media')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      Tambah Sosial Media
    </button>
  </div>
  <Modal modal-id="modal-social-media" title="Tambah/Ubah Sosial Media">
    <label for="social-media" class="block text-sm mb-3">Sosial Media: </label>
    <input type="text" id="social-media" name="social-media" class="form-control"
      placeholder="Masukkan nama sosial media" v-model="social_media"
      :class="{ 'form-control-failed': social_media_message }" />
    <span class="text-sm text-danger py-1" v-if="social_media_message">{{ social_media_message }}</span>
    <div class="flex justify-between">
      <button type="button" class="bg-light text-white rounded-lg p-3 mt-3" @click="closeModal">
        <i class="bx bx-x"></i> Batal
      </button>
      <button type="button" class="bg-primary text-white rounded-lg p-3 mt-3" @click="onSave" :disabled="!meta.valid">
        <i class="bx bx-send"></i> Simpan
      </button>
    </div>
  </Modal>
  <div class="bg-white mt-5">
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <div class="py-3 px-4 flex items-center justify-between">
              <div class="relative max-w-xs">
                <label class="sr-only">Cari</label>
                <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search"
                  class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Masukkan kata kunci ..." />
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg class="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
              </div>

            </div>

            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead class="bg-gray-50 dark:bg-neutral-700">
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Sosial Media</th>
                    <th scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Status</th>
                    <th scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      Aksi</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr class="bg-white dark:bg-neutral-800" v-for="(item, i) in result" :key="item.id">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {{ startNumber + i }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {{ item.name }}
                    </td>
                    <td class="px-6 py-4 flex whitespace-nowrap text-sm font-medium ">
                      <span
                        class="inline-flex mx-auto items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium" :class="{
                          'bg-green-100 text-green-800': item.status === 1,
                          'bg-red-100 text-red-800': item.status === 0
                        }">
                        <span class="size-1.5 inline-block rounded-full" :class="item.status === 1 ? 'bg-green-500' : 'bg-red-500'"></span>
                        {{ item.status === 1 ? 'Aktif' : 'Tidak Aktif' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button type="button"
                        class="inline-flex items-center gap-x-2 me-2 text-sm font-semibold rounded-lg border border-transparent text-white p-2 bg-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-3">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                      </button>
                      <button type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white p-2 bg-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="size-3">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex p-4 text-end">
              <Pagination :limit="limit" :next-page="nextPage" :prev-page="prevPage" :pages="pageList"
                :total="totalData" :current-page="currentPage" :go-to-page="goToPage" :last-page="totalPage"
                :first-page="startNumber" :start-data="startNumber" :end-data="endNumber" v-if="result.length > 0" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Modal from '../../components/Modal.vue';
import { toggleModal, closeModal } from '../../helpers/modal.ts';
import useApi from '../../composables/api';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import useNotify from '../../composables/notify.ts';
import Pagination from '../../components/Pagination.vue';
import usePagination from '../../composables/pagination.ts';
import { onMounted, ref } from 'vue';

const query = ref<string>('');
const {
  limitPage: limit,
  result,
  totalData,
  currentPage,
  totalPage,
  pageList,
  search,
  isFirstPage,
  isLastPage,
  endNumber,
  nextPage,
  prevPage,
  goToPage,
  fetchData,
  changeLimit,
  startNumber
} = usePagination("/api/social/media/list", '', query);

const { postResource } = useApi();
const { notifySuccess } = useNotify();

const schema = yup.object().shape({
  social_media: yup.string().required('Nama sosial media harus diisi').min(3, 'Nama social media minimal 3').max(50, 'Nama sosial media maksimal 50 karakter')
});

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    social_media: ''
  }
});

const { value: social_media, errorMessage: social_media_message } = useField<string>('social_media');

const onSave = async () => {
  const data = {
    name: social_media.value
  };
  closeModal();
  const response: any = await postResource('/api/social/media/create', data);
  if (response.data) {
    notifySuccess(response.data.message);
  }
};

onMounted(() => {
  fetchData();
});
</script>