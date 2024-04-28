<template>
  <div class="px-8">
    <h1 class="text-4xl font-black text-purple-900 my-4">
      Search Meal by Ingredients
    </h1>

    <input
      type="text"
      class="outline-none rounded border-1 border-purple-100 w-full py-4 hover:border-purple-400 focus:ring-purple-500 focus:border-purple-400"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchIngredients"
    />

    <!-- class="border border-gray-300 rounded-md px-4 py-2 focus:border-purple-500 focus:ring-purple-500" -->
    <h1 class="text-4xl font-black text-purple-900 my-4">Ingredients</h1>
    <div
      v-for="(ingredient, i) in computedIngredients"
      :key="i"
      class="bg-white p-5 mb-5 rounded shadow"
    >
      <router-link
        :to="{
          name: 'ingredientDetails',
          params: { ingredient: ingredient.strIngredient },
        }"
        ><h3 class="text-2xl font-bold mb-2">
          {{ ingredient.strIngredient }}
        </h3>
        <p>{{ ingredient.strDescription }}</p></router-link
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import MealCard from "../components/MealCard.vue";
import instance from "../instance";
import store from "../store";

const meals = computed(() => store.state.mealByIngredient);
const ingredients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() =>
  ingredients.value.filter((e) => {
    const lowerKeyword = keyword.value.toLowerCase();

    return (
      e?.strIngredient?.toLowerCase().includes(lowerKeyword) ||
      e?.strDescription?.toLowerCase().includes(lowerKeyword)
    );
  })
);

onMounted(async () => {
  try {
    const { data } = await instance.get("/list.php?i=list");

    ingredients.value = data.meals;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>
