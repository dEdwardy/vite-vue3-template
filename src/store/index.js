import { defineStore } from 'pinia';

export const useAppStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      uinfo: { name: 'jack' },
      permission: {}
    };
  },
  actions: {
    setUinfo(data) {
      this.uinfo = data;
    }
  },
  persist: true
});
