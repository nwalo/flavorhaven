import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue";
import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealDetails from "../views/MealDetails.vue";
import IngredientsDetails from "../views/IngredientsDetails.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/letter/:letter?",
        name: "letter",
        component: MealsByLetter,
      },
      {
        path: "/keyword/:name?",
        name: "name",
        component: MealsByName,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: MealsByIngredients,
      },
      {
        path: "/ingredients/:ingredient",
        name: "ingredientDetails",
        component: IngredientsDetails,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
