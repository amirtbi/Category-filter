import { createRouter, createWebHistory } from "vue-router";

// Views

import Projects from "../Views/Projects.vue";
import Categories from "../Views/Categories.vue";
// Routes
const routes = [
  { path: "/", redirect: "/project" },
  {
    path: "/projects",
    name: "project-page",
    component: Projects,
    children: [{ path: "categories", component: Categories }],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
