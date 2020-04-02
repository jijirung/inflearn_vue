import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> 1093cd1587c84710c3b3004564fd29801befe4fe

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect:'/news'
        },
        {
            //path: url 주소
            path: '/news',
            //component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobView
        },
        {
            path:'/user',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        }
    ]
  });