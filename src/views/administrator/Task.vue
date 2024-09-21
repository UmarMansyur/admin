<template>
  <Modal modal-id="modal-task" title="Tambah/Ubah Tugas">
    <form role="form">
      <label for="task-form">Tugas: </label>
      <input type="text" id="task-form" name="task-form" class="form-control"
        placeholder="Masukkan tugas" :class="{ 'form-control-failed': task_message }"
        v-model="task" />
      <span class="text-danger py-1" v-if="task_message">{{ task_message }}</span>
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

  <div class="hidden p-4 bg-white rounded-lg" id="task" role="tabpanel" aria-labelledby="task-tab">
    <div class="flex justify-between items-center">
      <div>
        <h4 class="text-2xl font-bold">Tugas: </h4>
        <p class="text-sm text-gray-500 mb-3">
          Tugas merupakan aktivitas atau modul yang dikelola oleh para partner. Silahkan tambah tugas jika ada modul baru yang ingin dikelola!
        </p>
      </div>
      <div>
        <button type="button" class="border border-gray-300 rounded-xl px-4 py-2" @click="addData">
          <i class="bx bx-plus-circle align-middle me-3"></i>
          <span class="align-middle hidden md:inline-block">Tambah Tugas </span>
        </button>
      </div>
    </div>
    <hr>
    <ConfirmModal @delete="getDelete" confirmId="hapus-task" title="Hapus Tugas: "
      message="Apakah anda yakin ingin menghapus tugas ini?" />
    <div class="relative overflow-x-auto mt-5">
      <table class="w-full text-left rtl:text-right">
        <thead class="text-gray-700">
          <tr>
            <th>Status Item</th>
            <th scope="col" class="px-6 py-3">
              Tugas
            </th>
            <th scope="col" class="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in result" :key="item.id">
            <td class="px-2 py-3 flex gap-2 w-1/4">
              <label class="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" :value="Boolean(item.is_active)" class="sr-only peer"
                  :checked="Boolean(item.is_active)" @change="changeStatus(item)">
                <div
                  class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                </div>
                <span class="ms-3 text-sm font-medium">
                  {{ item.is_active ? 'Aktif' : 'Tidak Aktif' }}
                </span>
              </label>
            </td>
            <td class="px-6 py-3 whitespace-nowrap">
              {{ item.name }}
            </td>
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
import { onMounted, ref } from 'vue';
import Pagination from '../../components/Pagination.vue';
import usePagination from '../../composables/pagination';
import Modal from '../../components/Modal.vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { closeModal, toggleModal } from '../../helpers/modal';
import useApi from '../../composables/api';
import useNotify from '../../composables/notify';
import ConfirmModal from '../../components/ConfirmModal.vue';

const { notifySuccess } = useNotify();

const query = ref<string>('');
const { limitPage, nextPage, prevPage, pageList, totalData, currentPage, goToPage, totalPage, startNumber, endNumber, result, fetchData } = usePagination('/task/list', '', query);

const schema = yup.object().shape({
  task: yup.string().required('Tugas harus diisi')
});

const { meta } = useForm({ validationSchema: schema, initialValues: { task: '' } });

const { value: task, errorMessage: task_message } = useField<string>('task');

const task_id = ref<string>('');

const { postResource, putResource, deleteResource } = useApi();

const onSave = async () => {
  if (!meta.value.valid) return;
  closeModal();
  let response: any;
  if (task_id.value !== '') {
    response = await putResource(`/task/${task_id.value}/update`, {
      name: task.value
    });
  } else {
    response = await postResource('/task/create', {
      name: task.value
    });
  }

  if (response.data) {
    notifySuccess(response.message);
  }
  await fetchData();
};

const editData = (value: any) => {
  task.value = value.name;
  task_id.value = value.id;
  toggleModal('modal-task');
};

const deleteData = (value: string) => {
  task_id.value = value;
  toggleModal('hapus-task');
};

const deleteClick = ref<boolean>(false);

const getDelete = async (value: any) => {
  if (value) {
    await deleteCampaignType();
  }
};

const addData = () => {
  task.value = '';
  task_id.value = '';
  toggleModal('modal-task');
};

const deleteCampaignType = async () => {
  const response: any = await deleteResource(`/task/${task_id.value}/destroy`);
  if (response.data) {
    notifySuccess(response.message);
    deleteClick.value = false;
    task_id.value = '';
  }
  await fetchData();
};

const changeStatus = async (value: any) => {
  const response: any = await putResource(`/task/${value.id}/update/status`, {
    is_active: value.is_active === 1 ? 0 : 1
  });
  if (response.data) {
    notifySuccess(response.message);
  }
  await fetchData();
};

onMounted(async () => {
  await fetchData();
});
</script>