import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 构建路由器
const router = new VueRouter({
    routes: [
        // 一级路由
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                // 二级路由
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        // 三级路由
                        {
                            name:'detail',
                            path:'detail',
                            component:Detail
                        }
                    ]
                },
            ]
        }
    ]
})

export default router