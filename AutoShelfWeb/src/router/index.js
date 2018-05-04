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
            path: '/userMng',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/investList',
                    component: resolve => require(['../components/page/user/investList.vue'], resolve)
                },
                {
                    path: '/lendList',
                    component: resolve => require(['../components/page/user/lendList.vue'], resolve)
                },
                {
                    path: '/corpList',
                    component: resolve => require(['../components/page/user/corpList.vue'], resolve)
                },
                {
                    path: '/userDetail',
                    component: resolve => require(['../components/page/user/userDetail.vue'], resolve),
                },
            ]
        },

        {
            path: '/trades',
            component: resolve => require(['../components/page/Login.vue'], resolve),
            children: [
                {
                    path: 'test',
                    component: null
                }
            ]
        },
        {
            path: '/tickets',
            component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
            children: [
                {
                    path: 'assetPkg',
                    component: null
                },
                {
                    path: 'protocol',
                    component: null
                }
            ]
        },
        {
            // 权限页面
            path: '/permission',
            component: resolve => require(['../components/page/Permission.vue'], resolve),
            meta: {permission: true}
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
