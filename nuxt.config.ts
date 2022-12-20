// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Oleg Nazarov Resume",
      meta: [
        { name: "description", content: "Oleg Nazarov Resume" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        }
      ],
    }
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "@fortawesome/fontawesome-svg-core/styles.css", "@/assets/scss/style.scss"],
  modules: [
      "@nuxtjs/color-mode",
      "@nuxtjs/i18n"
  ],
  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: {
        en: require("./locales/en.json"),
        ru: require("./locales/ru.json"),
      }
    }
  }
})
