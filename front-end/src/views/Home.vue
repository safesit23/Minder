<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import io from 'socket.io-client'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  beforeMount() {
    const socket = io()
  },
  methods: {
    join() {
      var socket = require('socket.io-client')('http://localhost:3000')
      socket.emit('check', 'hello')
    }
  }
}
</script>
