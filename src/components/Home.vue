<template>
  <div>
    <div class="home-right-container">
      <Homecontent />
    </div>
  </div>
</template>

<script>

import Homecontent from './Homecontent'

export default {
  name: 'Home',
  components: {
    Homecontent
  }
}
</script>

<style scoped>

.home-right-container {
  /* display: flex;
  flex-direction: row; */
  margin-top: -910px;
  margin-left: 280px;
  
}
</style>
