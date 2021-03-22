<template>
    <div class="Homecontent">
        <div class="itembox">
            <ul>
                <li class="item">
                    <img src="..\assets\logo-cow.png" class="itemimage">
                    <h2>Cowmanager update</h2>
                    <p>U kunt de overzichten weer inzien</p>
                </li>
                <li class="item">
                    <img src="..\assets\logo-cow.png" class="itemimage">
                    <h2>Cowmanager update</h2>
                    <p>Nieuwsupdate: de storing is verholpen</p>
                </li>
                <li class="item">
                    <img src="..\assets\logo-cow.png" class="itemimage">
                    <h2>Cowmanager update</h2>
                    <p>Er is een storing, wij werken er aan</p>
                </li>
            </ul>
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
    height: 900px;
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
}
.itemimage {
    width: 150px;
    height: 125px;
}
</style>