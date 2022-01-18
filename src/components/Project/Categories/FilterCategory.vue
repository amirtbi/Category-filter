<template>
  <div class="filter_actions">
    <div class="filter_actions-control">
      <input
        type="checkbox"
        @change="setFilter($event)"
        class="input-field"
        id="boundingBox"
        checked
      />
      <img src="../../statics/images/triangle.svg"/>
    </div>
    <div class="filter_actions-control">
      <input
        type="checkbox"
        @change="setFilter($event)"
        class="input-field"
        id="borderBox"
        checked
      />
      <img src="../../statics/images/person.svg"/>
    </div>
    <div class="filter_actions-control">
      <input
        type="checkbox"
        @change="setFilter($event)"
        class="input-field"
        id="cornerBox"
        checked
      />
      <img src="../../statics/images/corner.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilters: {
        boundingBox: true,
        cornerBox: true,
        borderBox: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      // id of checkbox
      const checkBoxId = event.target.id;
      // Checked is active or not
      const isActive = event.target.checked;
      // Update filters
      const updatedFilter = {
        ...this.activeFilters,
        [checkBoxId]: isActive,
      };

      // Updateing activeFilters  
      this.activeFilters = updatedFilter;  
      // Emits changes
      this.$emit("set-filter", updatedFilter);
    },
  },
};
</script>

<style scoped>
div.filter_actions {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom : 1px solid gray;
}

.filter_actions-control {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #28282d;
  padding: 0.5rem 1rem;
}

img {
  margin-left: 0.75rem;

}
</style>
