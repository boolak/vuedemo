import Contain from './Contain.vue';
import Mytest from './mytest.vue';
import App from './App.vue';
import Muse from './Muse.vue';

export default [
    {
        path:'/',
        component:Contain,
        redirect:'/mytest',
        children:[
            {
                path:'/mytest',
                component:Mytest
            },
            {
                path:'/app',
                component:App
            },
            {
                path: '/muse',
                component: Muse
            }
        ]
    }
]