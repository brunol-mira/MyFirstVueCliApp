<template>
  <a v-bind:href="url">{{ text }}</a>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['url', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
  text-decoration: none;
}
</style>
