<template>
        <div class="contentbox">
                <div class="headerAbout" id="#About">
                    <h1>About us</h1>
                </div>
                <div class="flex">
                    <div class="contentbox4">
                        <div v-for="article in articlesList" v-bind:key="article.id" class="contentbox2">
                            <div class="headerbox">  
                                <div class="iconAbout">
                                    <i class="fas fa-hat-cowboy-side"></i>
                                </div>
                                <div class="articleAbout">
                                    <ChildComponent v-model="title" />
                                    <h3>{{ article.title }}</h3>
                                    <p>{{ article.body }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                        <div class="contentbox3">
                            <img src="..\assets\logo-cow.png" class="imageAbout">
                        </div>
            </div>
        </div>
</template>

<script>
import articles from '../assets/articles.json';

export default{
    data() {
        return {
            articlesList: articles
        }
    }
}
</script>

<style scoped>
/* <i class="fas fa-hat-cowboy-side"> */
.articleAbout {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
    text-align: left;
}
.contentbox {
    display: flex;
    flex-direction: column;
    width: 1030px;
    height: auto;
    background-color: #eeebdd;
    margin-left: 400px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
}
.contentbox2{
    
    width: 450px;
    height: auto;
    margin: 30px;
    /* flex-direction: column;
    
    margin-right: 50px; */
}
.contentbox3{
    width: 400px;
    height: 400px;
    padding-left: 100px;
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
.headerAbout {
    margin-top: 40px;
    margin-bottom: 20px;
    padding-right: 480px;
    font-size: xx-large;
    
}
.imageAbout {
    width: 450px;
    height: 350px;
    margin-left: -20px;
    margin-top: 50px;
}
.iconAbout{
    display: flex;
    font-size: 70px;
    background-color: rgb(238, 105, 81);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    padding: 15px;
}


</style>