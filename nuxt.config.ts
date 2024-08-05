export default defineNuxtConfig({

  modules: ["@nuxtjs/supabase"],
  supabase: {redirect: false},
  
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
})
