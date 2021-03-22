<template>
    <Home />
    <About />
    <Contact />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 150%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/animal-print-2556284.jpg");
  
}
/* .img {
  width: 70%;
  margin: 40px;
  padding: 15px;
}
.logo {
  display: flex;
  width: 200px;
  height: 200px;
  margin-left: -5px;
  margin-top: -15px;
}
.logout {
  display: flex;
  width: 200px;
  height: 200px; 
  margin-top: 55px;
}
.power {
  display: flex;
  width: 35px;
  height: 35px; 
  margin: 10px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #ffa40000 0%, red 100%);
  height: 170px;
  width: auto;
  margin-bottom: 25px;
} */
</style>
