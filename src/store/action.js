import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

export default {
           FETCH_NEWS(context) {
             fetchNewsList()
               .then(response => {
                 context.commit("SET_NEWS", response.data);
                 //this.state.news = response.data;
               })
               .catch(err => {
                 console.log(err);
               });
           },
           FETCH_ASK({ commit }) {
             fetchAskList()
               .then(({ data }) => {
                 commit("SET_ASK", data);
                 //this.state.ask = response.data;
               })
               .catch(err => {
                 console.log(err);
               });
           },
           FETCH_JOBS({ commit }) {
             fetchJobsList()
               .then(({ data }) => {
                 commit("SET_JOBS", data);
                 //this.state.jobs = response.data;
               })
               .catch(err => {
                 console.log(err);
               });
           }        
}
   
