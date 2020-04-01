import Vue from 'vue';
import Vuex from "vuex";
import mutations from './mutations.js';
import actions from './action.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           news: [],
           jobs: [],
           ask: []
         },
         mutations,
         actions
       });
