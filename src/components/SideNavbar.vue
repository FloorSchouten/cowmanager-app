<template>
  <div class="sideNavBar">
        <div class="sideNavBarA">
            <div>
                <div><button class="navbutton"><a href="./Home.vue"><i class="fas fa-home" />&nbsp;Home</a></button></div>
            </div>
            <br>
            <div>
                <div><button class="navbutton"><a href="./About.vue"><i class="fas fa-info-circle" />&nbsp;About</a></button></div>
            </div>
            <br>
            <div>
                <div><button class="navbutton"><a href="./Contact.vue"><i class="fas fa-phone" />&nbsp;Contact</a></button></div>
            </div>   
        </div>

        <div class="sideNavBarB">
            <div>
                <div><a href="www.google.com"><i class="fab fa-google"></i></a></div>
            </div> 
            
            <div>
                <div><a href="www.facebook.com"><i class="fab fa-facebook"></i></a></div>
            </div>

                
            <div>
                <div><a href="www.twitter.com"><i class="fab fa-twitter"></i></a></div>
            </div>
        </div>
 </div>
</template>

<script>



export default {
    name: 'SideNavbar'


}
</script>

<style>
.sideNavBar {
    width: 300px;
    height: 1000px;
    background-color: black;
    color: white;
    margin-top: 10px;
    border-radius: 25px;
    box-shadow: 2px 3px 3px 3px red;
    text-align: left;
    padding: 40px;
    
}
.sideNavBarA {
    display: flex;
    flex-direction: column;
    /* justify-content: start; */
    width: 300px;
    height: 700px;
    
}
.navcontainer{
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 20px;
    
}
.navbutton {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    box-shadow: none;
    width: 200px;
    height: 75px;
    text-align: left;
    font-size: larger;
    border-radius: 25px;

}
navbutton:active {
    display: flex;
    flex-direction: row;
    background-color: red;
    box-shadow: none;
    text-align: left;
}
a:link {
  background-color: transparent;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
}

button:active button:hover{
  background-color: #f44336;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
}
a:visited {
  background-color: transparent;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
}
.a {
    display: flex;
}
.b {
    /* display: flex;
    flex-direction: row; */
    height: 50px;
    width: 50px;
    margin-top: 20px;
    margin-right: 20px;
    color: black;
}
.c {
    height: 50px;
    width: 50px;
}

.sideNavBarB {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    width: 100px;
    height: 100px;
    font-size:xx-large
}
</style>