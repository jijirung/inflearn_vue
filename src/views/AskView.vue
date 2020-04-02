<template>
<<<<<<< HEAD
  <div>
      <p v-for="ask in this.$store.state.ask" v-bind:key="ask.index">
        <a v-bind:href="ask.url">{{ ask.title }}</a>
        <small>{{ask.time_ago}} by {{ask.user}}</small>
      </p>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
=======
  <div>ask</div>
</template>

<script>
export default {

>>>>>>> 1093cd1587c84710c3b3004564fd29801befe4fe
}
</script>

<style>

</style>