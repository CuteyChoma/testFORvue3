// import {createRouter, createWebHashHistory} from 'vue-router' //hash模式
import {createRouter, createWebHistory} from 'vue-router'; //history 模式

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    // history: createWebHashHistory(), //hash模式
    history: createWebHistory(process.env.BASE_URL), //history 模式
    // 路由地址
    routes: [{
        path: '/todolist',
        // 必须添加.vue后缀
        component: () => import('../views/todo-list.vue')
    }, {
        path: '/mapguide',
        component: () => import('../views/mapguide/index.vue')
    },{
        path:'/',
        redirect:'/mapguide'
    }]
})
// export default new Router({
//   mode: 'history', // 去掉url中的#
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes
// })
