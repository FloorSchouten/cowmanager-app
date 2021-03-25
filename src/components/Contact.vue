<template>
    <div class="contactContentbox">
        <form class="contactform">
            <div class="headerContact" id="#Contact">
                <h1>Contact</h1>
            </div>
            
            <div class="textbox">
                <div class="inputfield">
                    <label class="label" for="name">Your name: </label>&nbsp;
                    <input id="name" v-model="name" v-on:keypress="isLetter($event)" placeholder="Full name">
                </div>
                <div class="inputfield">
                    <label class="label" for="email">Email: </label>&nbsp;
                    <input id="email" v-model="email" placeholder="Email">
                </div>
                <div class="inputfield">
                    <label class="label" for="message">Your message: </label>&nbsp;
                    <input class="messagebox" id="message" :maxlength="500" v-model="message" placeholder="Tell us what's on your mind">
                </div> 
                <input class="button" type="submit" value="Submit" @click="goToHome()" >
            </div>
                
           
           
        </form>

                
    </div>
 <div class="contentboxfooter">
                    <!-- <img src="..\assets\logo-cow.png" class="imageBelow"> -->
                    <p>Cowmanager</p>
                    <p>Gerverscop 9, 3481 LT Harmelen</p>
                    <p>tel. 0348 443 840</p>
                    <p><a href="www.cowmanager.nl" > www.cowmanager.nl</a></p>
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
    width: 69%;
    height: 610px;
    background-color: #eeebdd;
    margin-left: 380px;
    margin-top: 50px;
    margin-bottom: 80px;
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
    margin-top: 25px;
    margin-left: 20px;

}
.inputfield {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
    text-align: left;
}
.label {
    margin-bottom: -20px;
}
.textbox {
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
/* .contentbox2{
    
    width: 450px;
    height: auto;
    margin: 30px;
}

.contentbox4 {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    margin-bottom: 50px;
} */
.contentboxfooter{
    width: 65%;
    height: 200px;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
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

.messagebox {
    display: flex;
    width: 480px;
    height: 100px;
}
</style>