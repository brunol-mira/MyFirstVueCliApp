<template>
  <div>
    <h1>Recepteur</h1>
    <Radio v-on:message-sent="updateMessage"/>
    <p>
      {{ message }}
    </p>

    <!--    <button v-on:click="togglePopup">clique</button>-->

<!--    <a v-on:click="togglePopup" href="#">clic here</a>-->

<!--    <label for="couleur">{{showColor}}</label>-->
<!--    <input  id="couleur" type="text">-->

    <div>
<!--      <label for="add-color-item">color : {{showColor}}</label>-->
<!--      <input v-model="color" id="add-color-item" type="text" />-->
<!--      <input id="add-color-item" type="text" />-->
      <input v-model="color" type="text" placeholder="vfvfvfbhhhh" />

      <a v-on:click="togglePopup" href="#">clic here</a> |
      <a v-on:click="clearColor" href="#">clear</a>
    </div>

    <!--    <p v-show="popUp">Hello oui ca marche !!!</p>-->

    <v-container v-show="popUp">
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-btn
              v-for="t in types"
              :key="t"
              class="my-4"
              block
              @click="type = t"
          >
            {{ t }}
          </v-btn>
        </v-col>
        <v-col
            class="d-flex justify-center"
        >
          <v-color-picker v-model="color"></v-color-picker>
        </v-col>
        <v-col
            cols="12"
            md="4"
        >
          <v-sheet
              dark
              class="pa-4"
          >
            <pre>{{ showColor }}</pre>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

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
    popUp: false,

    types: ['hex', 'hexa', 'rgba', 'hsla', 'hsva'],
    type: 'hex',
    hex: '#FFFFFF',
    hexa: '#FF00FFFF',
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 },
  }),

  computed: {
    color: {
      get () {
        return this[this.type]
      },
      set (v) {
        this[this.type] = v
      },
    },
    showColor () {
      if (typeof this.color === 'string') return this.color

      return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
        color[key] = Number(this.color[key].toFixed(2))
        return color
      }, {}), null, 2)
    },
  },

  methods: {
    updateMessage(payload) {
      console.log(payload.message)
      this.message = payload.message;
    },

    togglePopup() {
      this.popUp = !this.popUp
    },

    clearColor() {
      this.hex = '#FFFFFF'
      // this.color.set('')
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
