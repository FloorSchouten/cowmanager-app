<template>
        <div class="contentbox">
                <div class="headerAbout">
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
                            <img src="..\assets\logo-cow.png">
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
.contentbox {
    display: flex;
    flex-direction: column;
    width: 900px;
    height: auto;
    background-color: #eeebdd;
    margin-left: 400px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
}
.contentbox2{
    
    width: 400px;
    height: auto;
    margin: 30px;
    /* flex-direction: column;
    
    margin-right: 50px; */
}
.contentbox3{
    width: 400px;
    height: 400px;
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
    height: auto;
}
.headerAbout {
    margin-top: 30px;
    padding-right: 400px;
    font-size: xx-large;
}
.iconAbout{
    display: flex;
    font-size: 70px;
    background-color: red;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    padding: 15px;
}

.articleAbout {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
}
</style>