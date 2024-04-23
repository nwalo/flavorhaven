<template>
  <div class="py-8">
    <h1 class="text-4xl px-10 font-black text-purple-900 my-4">
      Ingredients Details
    </h1>

    <MealCard :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import instance from "../instance";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.mealByIngredient);

onMounted(() => store.dispatch("mealByIngredient", route.params.ingredient));
</script>

<style></style>
