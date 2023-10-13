// import Vue from 'vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { defineNuxtPlugin } from "nuxt/app";

const options = {
    position: "top-right",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
}

export default defineNuxtPlugin((nuxtApp)=>{
    // vueApp.use(Toast, options)
    nuxtApp.vueApp.use(Toast, options);
})

