import VueRouter from "vue-router";

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'


// 构建路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        // 一级路由
        {
            path: '/about',
            component: About,
            meta: {isAuth:true, title: '关于' }
        },
        {
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                // 二级路由
                {
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // 独享守卫
                    beforeEnter(to, from, next) {
                        if (to.meta.isAuth) {   //鉴权
                            if (JSON.parse(localStorage.getItem('login'))) {    //判断是否登录
                                next()
                            } else {
                                console.log('你没有登陆,登陆后才能访问')
                            }
                        }
                    }
                },
                {
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        // 三级路由
                        {
                            name: 'detail',       //命名路由
                            // path:'detail',
                            path: 'detail/:id/:title',   //给params传参占位
                            component: Detail,
                            meta: { title: '消息详情' },

                            // props的对象形式,会将对象作为key-value传递到组件
                            // props:{
                            //     id:'000',
                            //     title:'固定值'
                            // }

                            // props的布尔形式,将params传递的值作为props传递给组件
                            props: true

                            // props的函数形式
                            // props(route){
                            //     return {
                            //         id: route.query.id,
                            //         title: route.query.title
                            //     }
                            // }
                        }
                    ]
                },
            ]
        }
    ]
})

// 全局路由守卫,路由开始之前
// 验证权限
// router.beforeEach((to, from, next) => {
//     if (to.meta.isAuth) {     //鉴权
//         if (JSON.parse(localStorage.getItem('login'))) {  //验证权限
//             next()
//         } else {
//             console.log('你没有登陆,登陆后才能访问')
//         }
//     } else {
//         next()  //往下执行
//     }
// })

// 全局路由守卫,路由结束后
// 修改网页标题
router.afterEach((to, from) => {
    document.title = to.meta.title
})

export default router