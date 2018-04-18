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
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     
                },

                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)
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
