import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Vue.use(VueLazyload, {
//   loading: "/images/cake-icon.png"
// });

new Vue({
  render: (h) => h(App),
}).$mount("#app");
