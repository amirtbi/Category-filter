<template>
  <li class="main-header__item">
    <router-link  to="/projects">My Projects</router-link>
  </li>
</template>

<script>
export default {
 
  computed: {},
  methods:{
 
  }
};
</script>

<style scoped>
li.main-header__item {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  padding: 1.2rem;
}
a {
  text-decoration: none;
  color: #c93ad9;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  transition: all ease-in 0.3s;
}
a:active,
a:hover {
  color: white;
}
</style>
