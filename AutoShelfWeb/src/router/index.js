import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Infomation.vue'], resolve)
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/StoreTable.vue'], resolve)
                },
                {
                    path: '/ProductTable',
                    component: resolve => require(['../components/page/ProductTable.vue'], resolve)
                },
                {
                    path: '/ShelfTable',
                    component: resolve => require(['../components/page/ShelfTable.vue'], resolve)
                },
                {
                    // vue-datasource组件
                    path: '/datasource',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: {permission: true}
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
