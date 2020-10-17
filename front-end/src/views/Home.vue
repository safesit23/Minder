<template>
  <div class="d-flex justify-content-center center-screen">
    <div class="section-home my-auto">
      <div>
        <img src="img/mind.png" alt srcset width="150px" />
      </div>
      <div class="title-game">
        <h1>The Minder Game</h1>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="player-name">
            <input type="text" name="playerName" class="form-control form-name" placeholder="กรุณาใส่ชื่อ" />
            <br />
            <input
              type="text"
              name="code"
              class="form-control form-name"
              :class="showCode == false ? 'hide-code' : ''"
              placeholder="โค้ดห้อง"
            />
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="mt-3">
        <button
          class="btn btn-lg"
          :class="showCode == false ? 'btn-success' : 'btn-danger'"
          @click="createRoom()"
        >{{ textCreate }}</button>
        &nbsp;
        <button
          class="btn btn-lg"
          :class="showCode == false ? 'btn-warning' : 'btn-success'"
          @click="join()"
        >{{ textJoin }}</button>

        <!-- <a href="./waitng.html" class="btn btn-warning btn-lg">
                  Join us
        </a>-->
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
      showCode: false,
      textJoin: 'Join Now',
      textCreate: 'Create',
      socket: io('http://localhost:3000'),
      code: null
    }
  },
  mounted() {
    this.getCode()
  },
  methods: {
    createRoom() {
      if (this.showCode == false) {
        this.socket.emit('createRoom')
      }
      this.showCode = false
      this.textJoin = 'Join us'
      this.textCreate = 'Create'
    },
    join() {
      if (this.showCode == true) {
        this.$router.push('waiting')
      }
      this.showCode = true
      this.textJoin = 'Start Now'
      this.textCreate = 'Cancel'
      // this.socket.emit("dropCard", "hello");
    },
    getCode() {
      this.socket.on('createRoom', code => {
        console.log('Code:' + code)
        this.code = code
        this.changePage()
      })

    },
    changePage(){
      this.$router.push({ name: 'Waiting', params: { codeRoomId: this.code } })
    }
  }
}
</script>

<style>
.hide-code {
  display: none;
}
.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
.form-name {
  color: #fff;
  background: none;
  border-color: hsl(0, 0%, 100%);
}
</style>

