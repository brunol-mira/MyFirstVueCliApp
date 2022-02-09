<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Receiver />
  </div>
</template>

<script>
import Receiver from '@/components/Receiver.vue';

export default {
  name: 'Message',
  components: {
    Receiver
  }
}
</script>
