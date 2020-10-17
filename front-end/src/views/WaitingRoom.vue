<template>
     <div class="container">
  <div class="vertical-center-row center-screen">
   <div class="d-flex justify-content-center mt-5">
    <h1>Player Lists #{{roomId}}</h1>
   </div>

  <div class="row mt-5">
      <div class="col-md-3" v-for="player in playerWaiting" :key="player.id">
      <div class="card">
        <img class="card-img" :src="player.img" alt="Card image">
        <div class="card-img-overlay">
          <h5 class="card-title">{{ player.name}}</h5>
        </div>
      </div>
    </div>

    <!-- <div class="col-md-3">
      <div class="card">
        <img class="card-img" src="/img/avatar/1.png" alt="Card image">
        <div class="card-img-overlay">
          <h5 class="card-title">Bob</h5>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <img class="card-img" src="/img/avatar/2.png" alt="Card image">
        <div class="card-img-overlay">
          <h5 class="card-title">Bob</h5>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <img class="card-img" src="/img/avatar/3.png" alt="Card image">
        <div class="card-img-overlay">
          <h5 class="card-title">Bob</h5>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <img class="card-img" src="/img/avatar/4.png" alt="Card image">
        <div class="card-img-overlay">
          <h5 class="card-title">Bob</h5>
        </div>
      </div>
    </div> -->
  </div>

  <div class="d-flex justify-content-center mt-5">
    <button type="submit" class="btn btn-danger btn-lg" v-if="role == 'Header'">Start Game</button>
    <button @click="addPlayer()">Add Player</button>
  </div>
  </div>
  


 </div>
</template>
<script>
export default {
    name: 'WaitingRoom',
    data() {
      return {
        roomId: "600400",
        role:"Header",
        playerWaiting : [
          {
            id : 1,
            name : "Bob",
            img : "/img/avatar/1.png"
          }
        ],
        player: {id : 1,
            name : "Bob",
            img : "/img/avatar/1.png"}
      }
    },
    methods:{
      addPlayer(){
        if(this.playerWaiting.length!=4){
          this.playerWaiting.push(this.player)
        }
      }
    }
}
</script>