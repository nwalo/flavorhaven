<template>
  <div class="px-0 sm:px-10">
    <div
      v-if="meals && meals.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-9 sm:px-0 gap-10"
    >
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class="bg-white shadow rounded-xl hover:scale-105 transition-all"
      >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          ><img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl h-60 w-full object-cover"
        /></router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p v-if="meal?.strInstructions">
            {{ meal?.strInstructions?.slice(0, 100) }} ...
          </p>
          <div class="pt-5 pb-3 flex gap-2">
            <YoutubeButton :href="meal.strYoutube" v-if="meal.strYoutube" />
            <a
              v-if="meal.strSource"
              :href="meal.strSource"
              target="_blank"
              class="p-3 py-2 rounded border-2 text-white border-purple-600 bg-purple-500 hover:bg-purple-600 hover:text-white transition-colors"
              >View</a
            >
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex justify-center text-gray-600 p-20">
      There are no meals
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const props = defineProps({
  meals: Array,
});
</script>

<style lang="scss" scoped></style>
