<template>
  <div>
    <h1>Recepteur</h1>
    <Radio v-on:message-sent="updateMessage"/>
    <p>
      {{ message }}
    </p>

<!--    <button v-on:click="togglePopup">clique</button>-->

    <a v-on:click="togglePopup" href="#">clic here</a>

    <p v-show="popUp">Hello oui ca marche !!!</p>
  </div>
</template>

<script>
import Radio from '@/components/Radio';

export default {
  name: 'Receiver',

  components: {
    Radio
  },
  // data() {
  //   return {
  //     message: 'Pas de bon message',
  //   }
  // },
  data: () => ({
    message: 'Pas de message',
    popUp: false
  }),

  methods: {
    updateMessage(payload) {
      console.log(payload.message)
      this.message = payload.message;
    },

    togglePopup() {
      this.popUp = !this.popUp
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
