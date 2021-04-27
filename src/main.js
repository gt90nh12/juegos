import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'jquery';
// import 'popper.js';
// import 'bootstrap';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/app.css';
import './assets/css/stylepagesprofile.css';
import './assets/css/cubeportfolio.min.css';

// import firebase from 'firebase'
// import JQuery from 'jquery'
// window.$ = JQuery
// // In main.js
// import LoadScript from 'vue-plugin-load-script';
// Vue.use(LoadScript);

//   Vue.loadScript("/js/jquery.cubeportfolio.js")
//     .then(() => {
//       // Script is loaded, do something
//     })
//     .catch(() => {
//       // Failed to fetch script
//     });

  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
