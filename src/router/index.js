import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue";
import NotFound from "../views/NotFound.vue";
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
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
      {
        path: "/ingredients",
        children: [
          {
            path: "", // Empty path for /ingredients
            name: "ingredients",
            component: MealsByIngredients,
          },
          {
            path: ":ingredient",
            name: "ingredientDetails",
            component: IngredientsDetails,
            props: true,
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  linkActiveClass: "border-purple-500 text-purple-700 border-b-2",
  // linkExactActiveClass: "border-purple-700 border-b-2",
  history: createWebHistory(),
  routes,
});

export default router;
