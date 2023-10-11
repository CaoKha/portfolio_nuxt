import { defineStore } from "pinia";
import { UserData } from "~/types/UserData";

export const useUsersStore = defineStore("users", {
  state: () => ({ _users: [] as UserData[], _duration: 0 }),
  getters: {
    users: (state) => state._users,
    duration: (state) => state._duration,
  },
  actions: {
    async fetchUsers() {
      const { data } = await useFetch("/api/get-users");
      if (data.value) {
        this.$patch({
          _users: data.value.users,
          _duration: data.value.duration,
        });
      }
    },
  },
});
