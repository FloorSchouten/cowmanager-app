<template>
  <TopNavbar /><SideNavbar/>
  <Home />
  <SideNavbar/><About />
  <SideNavbar /><Contact />
</template>

<script>
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    TopNavbar, 
    SideNavbar,
    Home, 
    About, 
    Contact
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
    width: 1040px;
    height: auto;
    background-color: #eeebdd;
    margin: 10px 100px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
}

</style>
