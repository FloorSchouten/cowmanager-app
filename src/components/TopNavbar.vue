<template>
    <div class="top-Navbar">
        <div class="logo">
            <img src="..\assets\logo-cow.png">
        </div>
        <div class="logout">
            <p>logout</p>
            <a href="./Home.vue" target="blank"><img class="power-img" src="..\assets\powerbutton-white.png"></a>
            
        </div>
    </div>
</template>

<script>

export default {
    name: "TopNavbar"
}
</script>

<style>
/* @import url("https://fonts.googleapis.com/icon?family=Material+Icons"); */
.logo {
  display: flex;
  width: 200px;
  height: 200px;
  margin-left: -15px;
  margin-top: -5px;
}
.logout {
  display: flex;
  width: 200px;
  height: 200px; 
  margin-top: 60px;
}
.power-img {
  display: flex;
  width: 30px;
  height: 30px; 
  margin-top: -12px;
  margin-left: 5px;
}
.top-Navbar {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #ffa40000 0%, red 100%);
  height: 170px;
  width: auto;
  margin-bottom: 25px;
  position: sticky;
}

</style>