import Vue from 'vue'

import VueRouter from 'vue-router';
import MuseUI from 'muse-ui';

import mytest from './mytest.vue'
import routes from './router';


/*var Hello = Vue.extend({
    data:function(){
        return {
            test:'testing...'
        }
    },
    created:function(){
        console.log('created');
        console.log(this);
        console.log(this.test);
    },
    beforeCreate:function(){
        console.log('beforeCreated');
    }
});
new Hello({
    el: '#app',
    render: h => h(mytest)
});*/

Vue.use(VueRouter);
Vue.use(MuseUI);
const router = new VueRouter({
    routes
});
const app = new Vue({
    router,
    created(){
        console.log('created,the routers is：', router);
    }
}).$mount('#app');