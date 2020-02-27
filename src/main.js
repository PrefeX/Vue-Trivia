import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import GameMenu from './components/GameMenu';
import GamePlay from './components/GamePlay';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: GameMenu },
  { path: '/game', component: GamePlay }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
