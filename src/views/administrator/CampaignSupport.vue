
<template>
  <Modal modal-id="modal-campaign-support" title="Tambah/Ubah Campaign Support">
    <form role="form">
      <div class="mb-3">
        <label for="campaign-support-form">Campaign Support: </label>
        <input type="text" id="campaign-support-form" name="campaign-support" class="form-control"
          placeholder="Masukkan campaign support" :class="{ 'form-control-failed': campaign_support_message }"
          v-model="campaign_support" />
        <span class="text-danger py-2" v-if="campaign_support_message">{{ campaign_support_message }}</span>
      </div>
      <div class="mb-3">
        <label for="description-campaign-support-form">Keterangan: </label>
        <textarea id="description-campaign-support-form" name="description-campaign-support" class="form-control"
          placeholder="Masukkan deskripsi campaign support" :class="{ 'form-control-failed': description_campaign_support_message }"
          v-model="description_campaign_support" rows="5" />
        <span class="text-danger py-2" v-if="description_campaign_support_message">{{ description_campaign_support_message }}</span>
      </div>
      <div class="flex justify-between">
        <button type="button" class="bg-light text-white rounded-lg p-3 mt-3" @click="closeModal">
          <i class="bx bx-x"></i> Batal
        </button>
        <button type="button" class="bg-primary text-white rounded-lg p-3 mt-3" @click="onSave" :disabled="!meta.valid">
          <i class="bx bx-send"></i> Simpan
        </button>
      </div>
    </form>
  </Modal>

  <div class="hidden p-4 bg-white rounded-lg" id="campaign-support" role="tabpanel" aria-labelledby="campaign-support-tab">
    <div class="flex justify-between items-center">
      <div>
        <h4 class="text-2xl font-bold">Campaign Support</h4>
        <p class="text-sm text-gray-500 mb-3">
          Campaign support adalah campaign yang akan dijalankan oleh perusahaan untuk mendukung program atau proyek tertentu.
        </p>
      </div>
      <div>
        <button type="button" class="border border-gray-300 rounded-xl px-4 py-2" @click="addData">
          <i class="bx bx-plus-circle align-middle me-3"></i>
          <span class="align-middle hidden md:inline-block">Tambah Campaign Support</span>
        </button>
      </div>
    </div>
    <hr>
    <ConfirmModal @delete="getDelete" confirmId="hapus-campaign-support" title="Hapus Campaign Support"
      message="Apakah anda yakin ingin menghapus campaign support ini?" />
    <div class="relative overflow-x-auto mt-5">
      <table class="w-full text-left rtl:text-right">
        <thead class="text-gray-700">
          <tr>
            <th class="px-6 py-3 text-center">No</th>
            <th class="px-6 py-3">Status Item</th>
            <th class="px-6 py-3">Campaign Support</th>
            <th class="px-6 py-3">Deskripsi</th>
            <th class="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in result" :key="index">
            <td class="px-6 py-3 text-center">{{ startNumber + index }}</td>
            <td class="px-6 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" :checked="Boolean(item.is_active)" @change="changeStatus(item)">
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span class="ms-3 text-sm font-medium">
                  {{ item.is_active ? 'Aktif' : 'Tidak Aktif' }}
                </span>
              </label>
            </td>
            <td class="px-6 py-3">{{ item.name }}</td>
            <td class="px-6 py-3">{{ item.description }}</td>
            <td class="px-6 py-3 flex space-x-2">
              <button type="button" class="text-blue-500" @click="editData(item)">
                <i class="bx bx-pencil text-xl"></i>
              </button>
              <button type="button" class="text-red-500" @click="deleteData(item.id)">
                <i class="bx bx-trash text-xl"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :limit="limitPage" :next-page="nextPage" :prev-page="prevPage" :pages="pageList" :total="totalData"
      :current-page="currentPage" :go-to-page="goToPage" :last-page="totalPage" :first-page="startNumber"
      :start-data="startNumber" :end-data="endNumber" v-if="result.length > 0" />
  </div>
</template>

<script setup lang="ts">
import ConfirmModal from '../../components/ConfirmModal.vue';
import Modal from '../../components/Modal.vue';
import Pagination from '../../components/Pagination.vue';
import useNotify from '../../composables/notify';
import usePagination from '../../composables/pagination';
import useApi from '../../composables/api';
import { onMounted, ref } from 'vue';
import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import { closeModal, toggleModal } from '../../helpers/modal';

const { notifySuccess } = useNotify();

const query = ref<string>('');
const { limitPage, nextPage, prevPage, pageList, totalData, currentPage, goToPage, totalPage, startNumber, endNumber, result, fetchData } = usePagination('/campaign/support/list', '', query);

const schema = yup.object().shape({
  campaign_support: yup.string().required('Campaign support harus diisi'),
  description_campaign_support: yup.string().required('Deskripsi campaign support harus diisi')
});

const { meta } = useForm({ validationSchema: schema, initialValues: { campaign_support: '', description_campaign_support: '' } });

const { value: campaign_support, errorMessage: campaign_support_message } = useField<string>('campaign_support');
const { value: description_campaign_support, errorMessage: description_campaign_support_message } = useField<string>('description_campaign_support');

const campaign_support_id = ref<string>('');

const { postResource, putResource, deleteResource } = useApi();

const onSave = async () => {
  if (!meta.value.valid) return;
  closeModal();
  let response: any;
  if (campaign_support_id.value !== '') {
    response = await putResource(`/campaign/support/${campaign_support_id.value}/update`, {
      name: campaign_support.value,
      description: description_campaign_support.value
    });
  } else {
    response = await postResource('/campaign/support/create', {
      name: campaign_support.value,
      description: description_campaign_support.value
    });
  }
  if (response.status === 200) {
    notifySuccess('Campaign support berhasil ditambahkan');
    fetchData();
  }
};

const editData = (item: any) => {
  campaign_support_id.value = item.id;
  campaign_support.value = item.name;
  description_campaign_support.value = item.description;
};

const deleteData = (item: any) => {
  campaign_support_id.value = item.id;
  toggleModal('hapus-campaign-support');
};

const getDelete = async () => {
  const response = await deleteResource(`/campaign/support/${campaign_support_id.value}/delete`);
  if (response.status === 200) {
    notifySuccess('Campaign support berhasil dihapus');
    fetchData();
  }
};

const changeStatus = async (item: any) => {
  const response = await putResource(`/campaign/support/${item.id}/change-status`, {
    is_active: !item.is_active
  });
  if (response.status === 200) {
    notifySuccess('Status campaign support berhasil diubah');
    fetchData();
  }
};

const addData = () => {
  campaign_support_id.value = '';
  campaign_support.value = '';
  description_campaign_support.value = '';
  toggleModal('modal-campaign-support');
};

onMounted(() => {
  fetchData();
});


</script>

