<template>
    <div class="contactContentbox">
        <form class="contactform">
            <div class="headerContact" id="#Contact">
                <h1>Contact</h1>
            </div>
            
            <div class="textbox">
                <div>
                    <label for="name">Your name: </label>&nbsp;
                    <input id="name" v-model="name" v-on:keypress="isLetter($event)" placeholder="Full name">
                </div>
                <div>
                    <label for="email">Email: </label>&nbsp;
                    <input id="email" v-model="email" placeholder="Email">
                </div>
                <div>
                    <label for="message">Your message: </label>&nbsp;
                    <input id="message"  :maxlength="500" v-model="message" placeholder="Tell us what's on your mind">
                </div> 
            </div>
                <input class="button" type="submit" value="Submit" @click="goToHome()" >
           
           
        </form>

                <div class="contentbox3">
                    <img src="..\assets\logo-cow.png" class="imageAbout">
                    <p>Gerverscop 9, 3481 LT Harmelen</p>
                    <p> tel. 0348 443 840</p>
                </div>
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
    onSubmit(){  
        event.target.reset();
        },           
    goToHome(){
        this.$router.push('/Home'); 
      }
  }
}
</script>

<style scoped>
.contactContentbox {
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 350px;
    background-color: #eeebdd;
    margin-left: 380px;
    margin-top: 50px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
 }
.button {
    background-color: red;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.textbox {
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
}
.contentbox2{
    
    width: 450px;
    height: auto;
    margin: 30px;
}
.contentbox3{
    width: 400px;
    height: 400px;
    padding-left: 200px;
}
.contentbox4 {
    /* display: flex;
    flex-direction: column; */
    width: 400px;
    height: 400px;
    margin-bottom: 50px;
}
.flex {
    width: 900px;
    height: 900px;
    display: flex;
    flex-direction: row;
}
.headerbox {
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 180px;
}
.headerContact {
    margin-top: 40px;
    margin-bottom: 20px;
    padding-right: 450px;
    font-size: xx-large;
    
}
.imageAbout {
    width: 450px;
    height: 350px;
    margin-left: -20px;
    margin-top: 50px;
}
</style>