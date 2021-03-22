<template>
  <div>
    <TopNavbar />
    <div class="home-container">
      <SideNavbar />
      <Homecontent />
    </div>
  </div>
</template>

<script>
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'
import Homecontent from './Homecontent'

export default {
  name: 'Home',
  components: {
    SideNavbar,
    TopNavbar, 
    Homecontent
  }
}
</script>

<style scoped>

.home-container {
  display: flex;
  flex-direction: row;
  
}
</style>
