<template>
    <Home />
    <About />
    <Contact />
</template>

<script>
import About from './components/About.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Home, About, Contact
  }
}
</script>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 125%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/animal-print-2556284.jpg");
  
  
}
.Contentbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #eeebdd;
    margin: 10px 100px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
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
