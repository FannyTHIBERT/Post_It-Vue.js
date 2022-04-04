import { createRouter, createWebHistory } from "vue-router";


import PostIt from "../components/PostIt.vue";
import ViewPostIt from "../components/ViewPostIt.vue";
import NewPostIt from "../components/NewPostIt.vue";
import DeletePostIt from "../components/DeletePostIt.vue";

const routes = [
  {
    path: "/",
    name: "PostIt",
    component: PostIt,
  },
  {
    path: "/ViewPostIt/:id",
    name: "ViewPostIt",
    component: ViewPostIt,
    props: true,
  },
  {
    path: "/NewPostIt",
    name: "NewPostIt",
    component: NewPostIt,
  },
  {
    path: "/DeletePostIt/:id",
    name: "DeletePostIt",
    component: DeletePostIt,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
