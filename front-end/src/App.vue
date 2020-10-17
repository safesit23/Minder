<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

html, body {
    font-family: 'Concert One', cursive;
    height: 100%;
    color: #FFF;
    background: #141E30;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}
.section-home{
    text-align: center;
}
.title-game h1{
    font-size: 5rem;
}
.card{
    color:#243B55;
}
.card-title{
    color: #FFF;
}

</style>
