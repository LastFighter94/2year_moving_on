// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  // это можно и в html прописать
  // @ts-ignore
  app: {
    head: {
      title: 'Main title',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env["CURRENCY_API_KEY"],
    // if you want to make public environment vars
    public: {

    }
  }
})



