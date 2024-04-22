<template>
  <div class="px-8 py-0">
    <h1 class="text-4xl font-black text-purple-900 my-4">
      Search Meal by Name
    </h1>

    <input
      type="text"
      class="outline-none rounded border-1 border-purple-100 w-full py-4 hover:border-purple-400 focus:ring-purple-500 focus:border-purple-400"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />

    <MealCard :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import YoutubeButton from "../components/YoutubeButton.vue";
import instance from "../instance";
import store from "../store";

const keyword = ref("");
const route = useRoute();

const meals = computed(() => {
  return store.state.searchedMeals;
});

onMounted(() => {
  keyword.value = route.params.name;

  if (keyword.value) {
    searchMeals();
  }
});

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
};
</script>

<style></style>
