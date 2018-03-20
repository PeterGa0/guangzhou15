// 导入初始化样式
import 'normalize.css';
// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 使用路由
Vue.use(VueRouter);

// 导入自己写的东西
import App from './component/App.vue';
// 导入路由配置
import routerConfig from './router/index.js';
// 导入，因为他不是vue插件，手动加到原型中
import axios from 'axios';
axios.defaults.baseURL='http://157.122.54.189:9095';
Vue.prototype.$http=axios;

import apiConfig from './js/api-config.js';
Vue.prototype.$api=apiConfig;
new Vue({
    el:"#app",
    router: new VueRouter(routerConfig),//挂载到实例
    render:function (createElement) {
        return createElement(App);
      }
})