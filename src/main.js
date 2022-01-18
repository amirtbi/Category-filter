import { createApp } from 'vue'
import App from './App.vue'
// import Dependencies
import router from './components/router/router.js';
import store from './components/store/store.js';


// importing LAYOUTS

const app = createApp(App);






// Registering components



// Registering dependencies
app.use(router);
app.use(store);

app.mount('#app');
