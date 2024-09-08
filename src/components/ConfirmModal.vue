<script setup lang="ts">
import { closeModal } from '../helpers/modal';
import Modal from './Modal.vue';
const emits = defineEmits(['delete']);

const deleteData = () => {
  emits('delete', true);
  closeModal();
};

const props = defineProps<{
  title: string;
  message: string;
}>();

</script>

<template>
  <Modal modalId="delete-confirm" :title="props.title">
    <div class="text-center">
      <p class="text-xl">{{ props.message === '' ? 'Apakah Anda yakin ingin menghapus data ini?' : props.message }}</p>
      <div class="mt-4 flex justify-center gap-2">
        <button type="button" class="w-50 items-center gap-x-2 bg-gray-300 text-sm text-white p-3 px-5 rounded-lg" @click="closeModal">Tidak</button>
        <button type="button" class="w-50 items-center gap-x-2 bg-blue-400 text-sm text-white p-3 px-5 rounded-lg" @click="deleteData">Ya</button>
      </div>
    </div>
  </Modal>
</template>
