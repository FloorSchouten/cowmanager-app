<template>
    <div>
        <AboutA />
        <AboutB />
    </div>
</template>

<script>
import AboutA from './AboutA.vue'
import AboutB from './AboutB.vue'

export default {
    name: 'About',
    components: {
    AboutA,
    AboutB
}
}
</script>
<style scoped>
.home-container {
  display: flex;
  flex-direction: row;
  
}


</style>