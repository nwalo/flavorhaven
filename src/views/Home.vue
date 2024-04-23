<template>
  <div>
    <div class="mx-10 max-w-[1000px]">
      <h1 class="text-purple-900 font-black text-4xl md:text-6xl max-w-[800px]">
        Welcome to Flavor Haven: Where Every Bite Tells a Story
      </h1>
      <p class="text-xl md:text-2xl text-gray-500 py-5">
        Your Passport to Culinary Adventures! Discover a world of tantalizing
        tastes and culinary delights with our curated collection of recipes,
        tips, and inspiration. Explore tantalizing recipes, and expert tips to
        elevate your cooking journey.
      </p>

      <h1 class="text-4xl font-black text-purple-900 mt-10 flex">
        <v-icon name="co-fastfood" scale="2" animation="float" /> Random Meals
      </h1>
    </div>

    <MealCard :meals="meals" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import instance from "../instance";
import MealCard from "../components/MealCard.vue";

const meals = ref([]);

onMounted(async () => {
  const mealArray = [];
  try {
    for (let index = 0; index < 10; index++) {
      const { data } = await instance.get("/random.php");
      mealArray.push(data.meals[0]);
    }
    meals.value = mealArray;
  } catch (error) {
    meals.value = [];
  }
});
</script>

<style lang="scss" scoped></style>
