<template>
    <div class="Homecontent">
        <div class="itembox">
            <ul>
                <li class="item">
                    <div>
                        <img src="..\assets\logo-cow.png" class="itemimage">
                        <h4>Cowmanager update</h4>
                    </div>
                    <div class="textcontent">
                        <p>U kunt de overzichten weer inzien</p>
                    </div>
                </li>
                <li class="item">
                    <div>
                        <img src="..\assets\logo-cow.png" class="itemimage">
                        <h4>Cowmanager update</h4>
                    </div>
                    <div class="textcontent">
                        <p>De storing is verholpen</p>
                    </div>
                </li>
                <li class="item">
                    <div>
                        <img src="..\assets\logo-cow.png" class="itemimage">
                    <h4>Cowmanager update</h4>
                    </div>
                    <div class="textcontent">
                        <p>Er is een storing, wij werken hard aan een oplossing. Wacht u even af</p>
                    </div>
                </li>
            </ul>
            <br>
        </div>     
    </div>
</template>

<script>

export default {
    name: 'Homecontent'
}
</script>

<style>
.Homecontent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
    background-color: #eeebdd;
    margin: 10px 100px;
    padding-left: 50px;
    padding-left: 50px;
    box-shadow: 2px 3px 3px 3px red;
    border-radius: 25px; 
}
.item {
    width: 700px;
    height: auto;
    background-color: white;
    border-radius: 25px;
    margin: 5%;
    padding: 30px;
    list-style: none;
    display: flex;
}
.itemimage {
    width: 150px;
    height: 125px;
}
.textcontent {
    width: 400px;
    text-align: left;
    margin: 30px;
}
</style>