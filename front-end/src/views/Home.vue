<template>
 <div class="container">
      <div class="vertical-center-row">
        <div class="section-home">
          <div>
            <img src="img/mind.png" alt="" srcset="" width="150px">
          </div>
          <div class="title-game">
            <h1>The Minder Game</h1>
          </div>
          <div class="row">
            <div class="col-sm">
            </div>
            <div class="col-sm">
          <div class="player-name ">
            <input type="text" name="playerName" class="form-control" placeholder="กรุณาใส่ชื่อ">
          </div>
            </div>
            <div class="col-sm">
            </div>
          </div>
          <div class="mt-3">
            <button class="btn btn-warning btn-lg" @onclick="join()">Join us</button>
              <!-- <a href="./waitng.html" class="btn btn-warning btn-lg">
                  Join us
              </a> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'Home',
  data() {
    return {
      socket: io('http://localhost:3000')
    }
  },
  mounted() {
    this.join()
  },
  methods: {
    join() {
      this.socket.emit('dropCard', 'hello')
    }
  }
}
</script>

