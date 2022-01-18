<template>
    <header class="main-header">
        <nav class="main-header__nav">
            <ul class="main-header__items">
                <the-nav></the-nav>
            </ul>
        </nav>
    </header>
</template>

<script>
import TheNav from '../Layouts/TheNavItems.vue';
export default {
    components:{
        TheNav
    }
    
}
</script>

<style scoped>
header.main-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #28282D;

}
ul.main-header__items{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
}
</style>