import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


await (async function loadFonts() {
   const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader');

   webFontLoader.load({
     google: {
       families: ['Roboto:100,300,400,500,700,900&display=swap'],
     },
   })
})();

const vuetifyApp = createVuetify({
   theme: {
     themes: {
       light: {
         colors: {
           primary: '#1867C0',
           secondary: '#5CBBF6',
         },
       },
     },
   },
});

const app = createApp(App)
app.use(vuetifyApp)
app.use(router)
app.mount('#app')
