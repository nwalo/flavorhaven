<template>
  <div class="px-10">
    <div class="max-w-[800px] mx-auto">
      <h1 class="font-bold mb-5 text-5xl text-purple-900">
        {{ meal.strMeal }}
      </h1>
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full h-auto aspect-[7/5]"
      />

      <div class="grid grid-cols-1 sm:grid-cols-3 my-3">
        <div><strong>Category:</strong> {{ meal.strCategory }}</div>
        <div><strong>Area:</strong> {{ meal.strArea }}</div>
        <div class="flex flex-wrap">
          <strong>Tags:</strong>
          <span v-for="(el, index) in tags" :key="index">
            <span class="ml-1" v-if="el"> {{ el }},</span>
          </span>
        </div>
      </div>

      <div class="my-3">
        {{ meal.strInstructions }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 capitalize my-4">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul>
            <li v-for="(el, index) in new Array(20)" :key="index">
              <span
                v-if="
                  meal['strIngredient' + (index + 1)] &&
                  meal['strIngredient' + (index + 1)] !== ' '
                "
                >{{ index + 1 }}.
                {{ meal["strIngredient" + (index + 1)] }}</span
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-3">Measures</h2>
          <ul>
            <li v-for="(el, index) in new Array(20)" :key="index">
              <span
                v-if="
                  meal['strMeasure' + (index + 1)] &&
                  meal['strMeasure' + (index + 1)] !== ' '
                "
                >{{ index + 1 }}. {{ meal["strMeasure" + (index + 1)] }}</span
              >
            </li>
          </ul>
        </div>

        <div class="my-8 flex gap-2">
          <YoutubeButton :href="meal.strYoutube">Go to YouTube</YoutubeButton>
          <a
            :href="meal.strSource"
            class="hover:bg-purple-500 transition-colors hover:text-white rounded px-3 py-2 text-purple-500"
            target="_blank"
            >View original source</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import instance from "../instance";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();

const meal = ref({});
let tags = ref([]);

onMounted(async () => {
  const routeId = route.params.id;
  const { data } = await instance.get(`/lookup.php?i=${routeId}`);

  meal.value = data.meals[0];
  tags = data?.meals[0]?.strTags?.split(",");
});
</script>

<style></style>
