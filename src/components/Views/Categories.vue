<template>

  <div class="category-container">
    <!-- Checkbox component -->
    <filter-category @set-filter="setFilter"></filter-category>
    <!--- Categories -->
    <ul class="categories">
      <category-row
        v-for="category in filteredCategories"
        :title="category.title"
        :key="category.id"
        :icon="category.icon"
      ></category-row>
    </ul>
  </div>
</template>

<script>
import FilterCategory from "../../components/Project/Categories/FilterCategory.vue";
import CategoryRow from "../../components/Project/Categories/CategoryrowItems.vue";

export default {
  components: {
    CategoryRow,
    FilterCategory,
  },
  data() {
    return {
      activeFilters: {
        boundingBox: true,
        cornerBox: true,
        borderBox: true,
      },
      categories: [
        { id: new Date().toString(), title: "border_box", icon: "person" },
        { id: new Date().toString(), title: "bounding_box", icon: "triangle" },
        { id: new Date().toString(), title: "corner_box", icon: "corner" },
        { id: new Date().toString(), title: "bounding_box", icon: "triangle" },
        { id: new Date().toString(), title: "border_box", icon: "person" },
      ],
    };
  },
  computed: {
    filteredCategories() {
      // All of categories
      return this.categories.filter((category) => {
        if (category.title === "border_box" && this.activeFilters.borderBox) {
          return true;
        }
        if (category.title === "corner_box" && this.activeFilters.cornerBox) {
          return true;
        }
        if (
          category.title === "bounding_box" &&
          this.activeFilters.boundingBox
        ) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
div.category-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 2rem auto;
  background-color: #28282d;
  font-family: inherit;
}
ul.categories {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  color: white;
  padding: 0;
  margin: 0;
}
</style>
