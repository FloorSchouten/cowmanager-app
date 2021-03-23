<template>
    <div class="contentbox1">

        <div v-for="article in articlesList" v-bind:key="article.id">
            <div class="headerbox">  
                <div class="iconAbout">
                    <i class="fas fa-hat-cowboy-side"></i>
                </div>
                <div>
                    <ChildComponent v-model="title" />
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.body }}</p>
                </div>
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
.contentbox1 {
    display: flex;
    flex-direction: column;
    width: 800px;
    height: auto;
    background-color: #eeebdd;
    margin: 10px 100px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
}
.iconAbout{
    display: flex;
    font-size: xx-large;

}
</style>