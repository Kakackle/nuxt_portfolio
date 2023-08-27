// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Roboto: true,
        }
    }],
    'nuxt-icon',
  ],
  css: ['~/assets/css/base.css']
})

// export default {
//   googleFonts: {
//     families: {
//       Roboto: true,
//       'Josefin+Sans': true,
//       Lato: [100, 300],
//       Raleway: {
//         wght: [100, 400],
//         ital: [100]
//       },
//     }
//   }
// }