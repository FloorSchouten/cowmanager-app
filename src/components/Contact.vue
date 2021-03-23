<template>
    <div>
        <div class="Contentbox">
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
            
        </div>
        </div>
</template>

<script>


export default {
    name: 'Contact'
}
</script>

<style scoped>

</style>