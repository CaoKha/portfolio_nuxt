import { defineStore } from "pinia";
import type { UserData } from "@/types/UserData";
import type { RequestState } from "@/types/RequestState";

export const useUsersStore = defineStore("users", {
  state: () => ({ _users: [] as UserData[], _duration: 0 }),
  getters: {
    users: (state) => state._users,
    duration: (state) => state._duration,
  },
  actions: {
    async fetchUsers() {
      const requestState: RequestState = {
        loading: true,
        error: null
      };
      try {
        const { data } = await useFetch<{ users: UserData[], duration: number }>("/api/get-users", {
          method: "get"
        });
        const result = data.value;
        if (result) {
          this.$patch({
            _users: result.users,
            _duration: result.duration,
          });
        }
        requestState.loading = false;
        return requestState;
      } catch (error) {
        requestState.loading = false;
        requestState.error = error;
        return requestState;
      }
    },

    async addUser(user: UserData) {
      const requestState: RequestState = {
        loading: true,
        error: null
      };
      try {
        const { data } = await useFetch<{ user: UserData, duration: number }>("/api/add-user", {
          method: "post",
          body: user
        });
        const result = data.value;
        if (result) {
          this.$patch((state) => {
            state._users.push(result.user);
            state._duration = result.duration;
          });
          requestState.loading = false;
          return requestState;
        }
      } catch (error) {
        requestState.loading = false;
        requestState.error = error;
        return requestState;
      }
    }
  },
});
