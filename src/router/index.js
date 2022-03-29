import { createRouter, createWebHistory } from '@ionic/vue-router';
import welcome from "./modules/welcome";
import list from "./modules/list";
import addDisease from "./modules/addDisease";

const routes = [
    ...welcome,
    ...list,
    ...addDisease,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
