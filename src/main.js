import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoFastFoodOutline } from "oh-vue-icons/icons/io";
import { CoFastfood } from "oh-vue-icons/icons/co";

addIcons(IoFastFoodOutline, CoFastfood);

createApp(App)
  .use(router)
  .use(store)
  .component("v-icon", OhVueIcon)
  .mount("#app");
