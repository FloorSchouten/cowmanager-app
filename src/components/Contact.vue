<template>
    <div class="contentbox">
        <form class="contactform"  @submit.prevent="onSubmit">
            <div>
                <h1>Contact us</h1>
            </div>
            <div>
                <label for="name">Full name: </label>&nbsp;
                <input id="name" v-model="name" v-on:keypress="isLetter($event)" placeholder="Your name">
            </div>
            <div>
                <label for="email">Email: </label>&nbsp;
                <input id="email" v-model="email" placeholder="Email">
            </div>
            <div>
                <label for="message">Your message: </label>&nbsp;
                <input id="message"  :maxlength="500" v-model="message" placeholder="Tell us what's on your mind">
            </div>
            <input class="button" type="submit" value="Submit" @click="goToHome()" >
           
        </form>
        <!-- data () {
            name: '',
            email: '', 
            message: ''
        }, 
        methods: {
            onSubmit(){
                let contactform = {
                    name: this.name, 
                    email: this.email,
                    message: this.message
                }
            }
        } -->
  </div>  
</template>

<script>


export default {
    name: 'Contact',
    methods:  {
        isLetter(e) {
        let char = String.fromCharCode(e.keyCode);
        if(/^[A-Za-z]+$/.test(char)) return true; 
        else e.preventDefault(); 
        }
    ,
    goToHome(){
   this.$router.push('/Home'); 
      }
  }
}
</script>

<style scoped>
.contentbox {
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 750px;
    background-color: #eeebdd;
    margin-left: 400px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
}
</style>