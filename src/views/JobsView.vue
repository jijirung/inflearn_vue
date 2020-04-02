<template>
  <div>
<<<<<<< HEAD
      <p v-for="job in this.$store.state.jobs" v-bind:key="job.index">
        <a v-bind:href="job.url">{{ job.title }}</a>
        <small>{{job.time_ago}} by {{job.domain}}</small>
      </p>
=======
      job
>>>>>>> 1093cd1587c84710c3b3004564fd29801befe4fe
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
=======

>>>>>>> 1093cd1587c84710c3b3004564fd29801befe4fe
}
</script>

<style>

</style>