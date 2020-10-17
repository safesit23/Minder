<template>
  <div class="d-flex justify-content-center center-screen">
    <div class="section-home my-auto">
      <div>
        <img src="img/mind.png" alt="" srcset="" width="150px" />
      </div>
      <div class="title-game">
        <h1>The Minder Game</h1>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="player-name">
            <input
              type="text"
              name="playerName"
              class="form-control form-name"
              placeholder="กรุณาใส่ชื่อ"
            />
            <br>
              <input
              type="text"
              name="code"
              class="form-control"
              :class="showCode === false ? 'hide-code' : ''"
              placeholder="โค้ดห้อง"
            />
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="mt-3">
        <button class="btn btn-success btn-lg" @onclick="join()">
          Create
        </button> 
        &nbsp;
        <button class="btn btn-warning btn-lg" @click="join()">
          Join us
        </button>
        
        <!-- <a href="./waitng.html" class="btn btn-warning btn-lg">
                  Join us
              </a> -->
      </div>
    </div>

  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "Home",
  data() {
    return {
      showCode : false,
      socket: io("http://localhost:3000"),
    };
  },
  mounted() {
    this.join();
  },
  methods: {
    join() {
      console.log("aa");
      this.showCode = true;
      // this.socket.emit("dropCard", "hello");
    },
  },
};
</script>

<style>
.hide-code{
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
.form-name{
  color: #FFF;
  background:none;
  border-color: hsl(0, 0%, 100%);
}
</style>

