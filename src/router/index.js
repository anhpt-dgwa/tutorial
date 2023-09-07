import { createWebHistory, createRouter } from "vue-router";
import PageHome from "@/views/PageHome.vue";
import PageAbout from "@/views/PageAbout.vue";
import PageService from "@/views/PageService.vue";
import PagePartner from "@/views/PagePartner.vue";
import PageRecruit from "@/views/PageRecruit.vue";
import PageContact from "@/views/PageContact.vue";

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },
  {
    path: "/about",
    name: "PageAbout",
    component: PageAbout,
  },
  {
    path: "/service",
    name: "PageService",
    component: PageService,
  },
  {
    path: "/partner",
    name: "PagePartner",
    component: PagePartner,
  },
  {
    path: "/recruit",
    name: "PageRecruit",
    component: PageRecruit,
  },
  {
    path: "/contact",
    name: "PageContact",
    component: PageContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;