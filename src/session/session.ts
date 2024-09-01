// define store pinia

import { defineStore } from 'pinia'


export const useSessionStore = defineStore({
  id: 'session',
  state: (): any => ({
    user: null,
    token: "",
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login(user: any) {
      this.user = user
    },
    setToken(token: string) {
      this.token = token
    },
    logout() {
      this.user = null
    },
  },
})