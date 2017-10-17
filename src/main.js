// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header'
import Content from './components/Content'
import Requirement from './components/Requirement'
import Company from './components/Company'
import Slider from './components/Slider'
import Information from './components/Information'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Popup } from 'mint-ui';
import axios from 'axios';

Vue.component(Information.name,Information)
Vue.component(Header.name,Header)
Vue.component(Content.name,Content)
Vue.component(Requirement.name,Requirement)
Vue.component(Slider.name,Slider)
Vue.component(Company.name,Company)

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
