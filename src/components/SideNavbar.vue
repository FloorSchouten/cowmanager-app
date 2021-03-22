<template>
  <div class="sideNavBar">
        <div class="sideNavBarA">
        <div class="d">
            <div class="e"><button class="navbutton"><a href="Home.vue"><i class="fas fa-home" />Home</a></button></div>
        </div>
        <br>
                <div class="d">
            <div class="e"><button class="navbutton"><a href="About.vue"><i class="fas fa-hands" />About</a></button></div>
        </div>
        <br>
                <div class="d">
            <div class="e"><button class="navbutton"><a href="Contact.vue"><i class="fas fa-phone" />Contact</a></button></div>
        </div>
        <br>
            
        </div>

        <div class="sideNavBarB">
            <div class="b">
                <a href="www.google.com">
                    <font-awesome-icon icon="google" />
                </a>
            </div>
            <div class="b">
                <a href="www.facebook.com">
                    <font-awesome-icon icon="facebook" />
                </a>
            </div>
            <div class="b">
                <a href="www.twitter.com">
                    <font-awesome-icon icon="twitter" />
                </a>
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
    width: 500px;
    height: 800px;
    background-color: pink;
    color: white;
    margin-top: 10px;
    border-radius: 25px;
    box-shadow: 2px 3px 3px 3px red;
    text-align: left;
    padding: 50px;
    position: sticky;
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
    text-align: left;
}
a:link {
  background-color: transparent;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
}
a:active a:hover{
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
.d {
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 80px;
    border-style: 2px;
}
.e {
    /* display: flex; */
    width: 120px;
    height: 80px;
    border-style: solid 1px;
    /* background-color: red; */
}
.f { 
    width: 80px;
    height: 80px;
    /* border-style: 2px;
    background-color: transparent; */
    
}
.icon {
    fill: white;
    background-color: transparent;
}
.sideNavBarB {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    width: 100px;
    height: 100px;
}
</style>