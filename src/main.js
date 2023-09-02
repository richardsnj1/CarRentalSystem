
import * as bootstrap from 'bootstrap';
import App from './App.vue' ;
import router from './router.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue';
import { defineComponent } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue'

const app = createApp(App);
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter,faFacebook,faUserSecret)
// app.use(library);
app.use(defineComponent);
app.use(router);
// app.use(store);
// app.use(analytics);
app.mount('#app');
app.use(bootstrap);
app.use(BootstrapIconsPlugin);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('BIconBatteryFull', BIconBatteryFull);
app.component('BIconArrow90degDown', BIconArrow90degDown);
app.component('BIconBookmark', BIconBookmark);
// app.component('base-card', BaseCard);
// app.component('base-button', BaseButton);
// // app.component('base-badge', BaseBadge);
// app.component('base-spinner', BaseSpinner);
// app.component('base-dialog', BaseDialog);
