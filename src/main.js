import "./style.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import ToastPlugin from "vue-toastification";
import app from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const App = createApp(app);
App.use(pinia);
App.use(ToastPlugin, {
  position: "bottom-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
});
App.mount("#app");
