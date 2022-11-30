import Vue from 'vue'
import App from './App.vue'

import { Plugin } from 'vue-responsive-video-background-player'
import SvgSprite from 'vue-svg-sprite';
import YmapPlugin from 'vue-yandex-maps'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {ScrollSmoother} from 'gsap/ScrollSmoother';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

Vue.use(Plugin);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

Vue.mixin({
  created: function () {
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.ScrollSmoother = ScrollSmoother;
    this.ScrollToPlugin = ScrollToPlugin;
  }
});

Vue.use(YmapPlugin, {
  apiKey: '56c6be8d-b5f9-45d5-8ffa-7fdb884fcf53',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
});
 
Vue.use(SvgSprite, {
  url: require(`@/assets/sprite.svg`),
  class: 'icon',
});

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#app')
