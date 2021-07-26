import Vue from "vue"
import Router from "./router"
import Layout from "./Components/layout.vue"
import Storage from "./Components/store.js"
import Vuetify from "vuetify"

Vue.use(Vuetify)


const app = new Vue({
    el: '#app',
    store: Storage,
    vuetify: new Vuetify({
        theme: {
          dark: true,
        },
      }),
    router: Router,
    components: { Layout },
});

export default new Vuetify(app);