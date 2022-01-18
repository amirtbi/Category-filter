<template>
  <li class="category">
    <!-- Icon -->
    <span class="category-icon">
      <!-- SVG -->
      <img :src="categoryImage" />
    </span>
    <div class="category_title">
      <p :id="id">{{ title }}</p>
    </div>
    <div class="category-value">
      <input type="number" min="10" max="30" value="16" />
    </div>
  </li>
</template>

<script>
export default {
  props: ["title",'icon','id'],
  data() {
    return {};
  },
  computed: {
    categoryImage() {
         // Binding dynamic image source in 'Vite'
      // In case of vueCli, use require
      const path = `../../statics/images/${this.icon}.svg`;
      const modules = import.meta.globEager("../../statics/images/*.svg");
      return modules[path].default;
    },
  },
};
</script>

<style scoped>
li.category {
  padding: 0.75rem;
  margin: 0 1.2rem;
}
li.category,
div.category_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
span.category-icon > svg {
  height: 1.2rem;
  width: 1.2rem;
}

input[type='number']{
    border-radius: 5px;
    background-color: #39393e;
    border: none;
    text-align: center;
    color:whitesmoke;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
      color:red;
      padding: 0.2rem;
      margin: 0; 
}
</style>
