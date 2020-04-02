<template>
  <div>
<<<<<<< HEAD
      <p v-for="item in this.$store.state.news" v-bind:key="item.index">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{item.time_ago}} by {{item.user}}</small>
      </p>
=======
    {{ users }}
>>>>>>> 1093cd1587c84710c3b3004564fd29801befe4fe
  </div>
</template>

<script>
<<<<<<< HEAD

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
=======
import axios from 'axios'
export default {
  data(){
    return{
      users: []
    }
  },
  created() {
    var vm = this;
    axios.get('	https://api.hnpwa.com/v0/news/1.json')
    .then(response =>{
      vm.users = response.data;
    } )
    .catch(error=> console.log(error))
  }

>>>>>>> 1093cd1587c84710c3b3004564fd29801befe4fe
}
</script>

<style>

</style>