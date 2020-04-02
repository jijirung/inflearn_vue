import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem
} from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    return fetchNews().then(({data})=> commit('SET_NEWS', data))
    .catch(error =>{
      console.log(error);
    });
  },
  FETCH_ASK({ commit }) {
    return fetchAsk().then(({data})=> commit('SET_ASK', data))
    .catch(error =>{
      console.log(error);
    });
  },
  FETCH_JOBS({ commit }) {
    return fetchJobs().then(({data})=> commit('SET_JOBS', data))
    .catch(error =>{
      console.log(error);
    });
  },
  FETCH_USER({ commit }, name){
    fetchUser(name)
      .then(({data}) => commit('SET_USER', data))
    .catch(error =>{
      console.log(error);
    });
   
  },
  FETCH_ITEM({commit}, id){
    fetchItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(error => {
        console.log(error);
      });

  }
  
}