<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
<!--    <ul>-->
<!--      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>-->
<!--    </ul>-->

<!--    <h3>{{$store.state.day}} - {{$store.state.month}} - {{$store.state.year}}</h3>-->
<!--    <h3>{{day}} - {{month}} - {{year}}</h3>-->
<!--    <h3>{{day}} - {{uniqueMonth}} - {{customYear}}</h3>-->

    <h3>{{$store.getters.formattedDate}}</h3>
<!--    <h3>{{ formattedDate2022 }}</h3>-->

    <button v-on:click="incrementDay">incrementer la date</button>
    <button v-on:click="incrementMonth">incrementer le mois</button>

<!--    <ul>-->
<!--      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
<!--      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>-->
<!--      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>-->
<!--      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>-->
<!--      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>-->
<!--    </ul>-->
<!--    <h3>Ecosystem</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
<!--      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>-->
<!--      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
<!--      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
<!--    </ul>-->
  </div>
</template>

<script>
// import {mapState} from 'vuex';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Welcome to Your Vue.js App'
    }
  },
  // computed: {
  //   ...mapState(['day', 'month', 'year'])
  // }
  computed: {
    // ...mapState({
    //   day: 'day',
    //   uniqueMonth: 'month',
    //   customYear: 'year'
    // }),

    // ...mapGetters(
    //   ['formattedDate']
    // ),

    ...mapGetters(
        {formattedDate2022: 'formattedDate'}
    ),
  },

  methods: {
    // ...mapActions(['incrementDay']),
    ...mapActions(['incrementMonth']),


    // incrementDay() {
    //   this.$store.commit('INCREMENT_DAY', {
    //     amount: 10,
    //     name: 'bruno'
    //   })
    // },
    // incrementMonth() {
    //   this.$store.dispatch('incrementMonth',{
    //     amount: 10,
    //     name: 'bruno'
    //   })
    // },
    incrementDay() {
      this.$store.dispatch('incrementDay', {
        amount: 3,
        name: 'bruno'
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
