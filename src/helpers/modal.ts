import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { ref } from 'vue';

const modal = ref<ModalInterface | null>(null);

const toggleModal = (id: string) => {
  const $modalElement: HTMLElement | null = document.querySelector('#' + id);
  
  const modalOptions: ModalOptions = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses:
          'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
  };
  
  const instanceOptions: InstanceOptions = {
    id: 'modalEl',
    override: true
  }; 

  if(modal.value) {
    modal.value.destroyAndRemoveInstance();
  }

  modal.value = new Modal($modalElement, modalOptions, instanceOptions);
  modal.value.toggle();
}

const closeModal = () => {
  if(modal.value) {
    modal.value.hide();
  }
}

export {
  toggleModal, closeModal
}
