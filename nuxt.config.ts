// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: [
    "@element-plus/nuxt",
    "@nuxt/image",
    "@artmizu/nuxt-prometheus",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "@nuxt/content"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      theme: "github-light",
      langs: ["rust", "bash"]
    }
  },
});
