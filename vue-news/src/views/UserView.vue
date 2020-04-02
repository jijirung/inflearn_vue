<template>
  <div>
    <p>name : {{userInfo.id}}</p>
    <p>karma : {{userInfo.karma}}</p>
    <p>created : {{userInfo.created}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created() {
    /*
    fetchUser('davideast')
      .then(response => console.log(response))
      .catch(error => console.log(error));*/
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);  //호출
  }
}
</script>

<style>

</style>
