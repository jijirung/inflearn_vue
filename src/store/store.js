import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
//import * as getters from './getters'
//import * as mutations from './mutations'


Vue.use(Vuex); // 뷰의 플러그인 

// Todo.vue
export const store = new Vuex.Store({
    modules: {
        todoApp
    }
    /*
    getters,
    mutations
    */
});