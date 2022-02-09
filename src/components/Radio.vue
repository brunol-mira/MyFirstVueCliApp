<template>

  <div class="radio">
    <h2>Radio</h2>
    <button v-on:click="sendMessage">{{ this.title }}</button>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  title: 'vide',
  queryString: 'vide',

  // mounted() {
  //   this.queryString = 'message bel et bien envoye!'
  // },

  methods: {
    sendMessage() {
      this.$emit('message-sent',
          { message: this.queryString }
      )
    }
  },

  data() {
    return {
      title: 'Envoyer un message',
      queryString: 'message bel et bien envoye :)',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
  text-decoration: none;
}
</style>
