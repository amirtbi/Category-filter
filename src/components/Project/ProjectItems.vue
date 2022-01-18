<template>
  <div class="project_item" :class="Classes">
    <router-link :to="activeLink" class="project__item--text"
      >{{ title }}
    </router-link>
  </div>
</template>

<script>

export default {
  
  // Props
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {},
  computed: {
    activeLink() {
      if (this.title === "CheckBox") {
        return this.$route.path + "/categories";
      } else {
        return this.$route.path + "/filterCategory";
      }
    },
    Classes() {
      if (this.title === "CheckBox") {
        return "project_item--checkbox";
      } else {
        return "project_item--menu";
      }
    },
  },
};
</script>

<style scoped>
.project__item--text {
  transition: all ease-in 0.5s;
  letter-spacing: 2px;
}
div.project_item:hover .project__item--text {
  transform: scaleX(1.2);
}
div.project_item--checkbox {
  background: linear-gradient(to left top, black, transparent),
    url("../statics/images/coverImage1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background positon */
  background-position: cover;
}
div.project_item--menu {
  background: linear-gradient(to left top, black, transparent),
    url("../statics/images/coverImage2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background positon */
  background-position: cover;
}
a.project__item--text {
  position: absolute;
  text-transform: capitalize;
  z-index: 10;
  top: 40%;
  text-decoration: none;
  color: #ffe900;
  font-family: inherit;
  font-size: 1.4rem;
}
</style>
