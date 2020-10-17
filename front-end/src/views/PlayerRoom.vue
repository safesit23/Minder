<template>
  <div></div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: "PlayerRoom",
  data() {
    return {
      card: 0,
      socket: io("http://localhost:3000"),
    }
  },
  mounted () {
  },
  methods: {
    dropCard() {
      this.socket.emit("dropCard");
    },
    playing(){
      this.socket.on("playing");
    }
  },
}
</script>

<style lang="scss" scoped>
</style>