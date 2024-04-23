<template>
  <div>
    <div class="flex flex-col px-8 py-0">
      <h1 class="text-4xl font-black text-purple-900 my-4">
        Search Meal by Letter
      </h1>
      <div class="flex flex-wrap justify-center gap-2 pt-10">
        <router-link
          :to="{ name: 'letter', params: { letter } }"
          v-for="(letter, i) in letters"
          v-bind:key="i"
          :class="{
            'font-bold': true,
            'hover:text-purple-500': true,
            'text-purple-500': letter === computedLetter,
          }"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>

    <MealCard :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import store from "../store";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const route = useRoute();
const computedLetter = computed(() => route.params.letter);
const meals = computed(() => store.state.mealByLetter);

watch(computedLetter, (from, to) => {
  store.dispatch("mealByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("mealByLetter", route.params.letter);
});
</script>

<style lang="scss" scoped></style>
