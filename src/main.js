import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Clock from './components/Clock.vue'
import DeskItem from './components/DeskItem.vue'
import Header from './components/Header.vue'
import ItemWindow from './components/ItemWindow.vue'
import ItemWindowClippy from './components/ItemWindowClippy.vue'
import ProjectsWindow from './components/ProjectsWindow.vue'
import ProjectItem from './components/ProjectItem.vue'
import Topico_W from './components/Topico_W.vue'
import SmartBelt_W from './components/SmartBelt_W.vue'
import Cleaver_W from './components/Cleaver_W.vue'
import CoffeeCan_W from './components/CoffeeCan_W.vue'
import Clippy from './components/Clippy.vue'
import vueVimeoPlayer from 'vue-vimeo-player'


Vue.component('Clock', Clock)
Vue.component('DeskItem', DeskItem)
Vue.component('Header', Header)
Vue.component('ItemWindow', ItemWindow)
Vue.component('ItemWindowClippy', ItemWindowClippy)
Vue.component('ProjectsWindow', ProjectsWindow)
Vue.component('ProjectItem', ProjectItem)
Vue.component('Topico_W', Topico_W)
Vue.component('SmartBelt_W', SmartBelt_W)
Vue.component('Clippy', Clippy)
Vue.component('Cleaver_W', Cleaver_W)
Vue.component('CoffeeCan_W', CoffeeCan_W)
Vue.use(vueVimeoPlayer)
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
