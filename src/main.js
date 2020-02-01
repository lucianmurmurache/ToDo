import Vue from 'vue'
import App from './App.vue'
import {
  MdCard,
  MdIcon,
  MdField,
  MdButton,
  MdTooltip,
  MdCheckbox
} from 'vue-material/dist/components';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

Vue.use(MdCard);
Vue.use(MdIcon);
Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdTooltip);
Vue.use(MdCheckbox);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')