<template>
  <div>
    <p v-for="ask in fetchedAsk" :key="ask.id">
      <router-link v-bind:to="`item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
  },/*
  ...mapState({
    fetchedAsk: state => state.ask
  }),*/

  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
