<template>
    <the-header></the-header>
    <router-view></router-view>
    

</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue';
export default {
    components:{
        TheHeader
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    box-sizing: border-box;
}
body{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}


</style>