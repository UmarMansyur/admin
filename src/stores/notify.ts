import { defineStore } from "pinia";

const useNotifyStore = defineStore({
  id: "notify",
  state: () => ({
    message: "",
    type: '',
  }),
  actions: {
    setMessage(message: string, type: string) {
      this.message = message;
      this.type = type;
    },
  },
});

export default useNotifyStore;