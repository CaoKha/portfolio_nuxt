import { defineStore } from "pinia";
import { UserData } from "~/types/UserData";

export const useExperiencesStore = defineStore("experiences", {
  state: () => ({
    _date: "" as String,
    _title: "" as String,
    _content: "" as String,
    _tech_stack: [] as Array<String>,
  }),
  getters: {
    date: (state) => state._date,
    title: (state) => state._title,
    content: (state) => state._content,
    tech_stack: (state) => state._tech_stack,
  },
});
