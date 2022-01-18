<template>
  <!-- Main -->
  <main class="main-container">
    <section class="main-section">
      <h1 class="main-container__title">List of My Projects</h1>
      <!-- Project Items -->
      <article>
        <!-- Project Items -->

        <project-item
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :id="project.id"
        >
        </project-item>
      </article>
    </section>
    <section>
        <router-view></router-view>
    </section>
   
    
  </main>
</template>

<script>
import ProjectItem from "../../components/Project/ProjectItems.vue";
export default {
  components: {
    ProjectItem,
  },
  data() {
    return {};
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: rgb(245 245 249);
  width: 100%;
  
}
h1.main-container__title {
  margin: 0;
  width: 100;
  padding: 1rem;
  font-family: inherit;
}
section.main-section {
  padding: 3rem;

}
article {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;
  padding-left: 1.2rem;
}
div.project_item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px #c1c1c1;
  min-width: 200px;
  width: 300px;
  min-height: 200px;
  margin-right: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}
</style>
