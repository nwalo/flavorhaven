<template>
  <div class="sticky top-0 z-10">
    <div class="sticky top-0 z-10">
      <header class="bg-white shadow">
        <div class="flex justify-between items-center px-8 py-1">
          <router-link
            to="/"
            class="inline-flex items-center"
            @click="closeNav"
          >
            <img :src="logo" class="w-[180px]" alt="logo" />
          </router-link>

          <!-- Hamburger Menu -->
          <button
            @click="toggleNav"
            class="block md:hidden p-2 focus:outline-none"
          >
            <svg
              class="w-6 h-6 text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <!-- Navigation Links -->
          <div class="hidden md:block">
            <router-link
              v-for="(nav, i) in navs"
              :key="i"
              :to="{ name: nav.to }"
              class="py-2 px-3 text-purple-800 transition-all hover:bg-purple-100 rounded"
              >{{ nav.name }}</router-link
            >
          </div>
        </div>
      </header>
    </div>
    <div
      :class="{ block: isNavOpen, hidden: !isNavOpen }"
      class="flex md:hidden items-end flex-col absolute right-0"
    >
      <div class="bg-white w-[300px] py-5">
        <div v-for="(nav, i) in navs" :key="i" class="py-2 px-5">
          <router-link
            @click="closeNav"
            :to="{ name: nav.to }"
            class="py-2 px-2 text-purple-800 hover:bg-purple-100 rounded"
            >{{ nav.name }}</router-link
          >
        </div>
      </div>
    </div>
    <pre class="hidden">{{ isOpen }}</pre>
  </div>
</template>

<script setup>
import { computed, onUpdated, ref } from "vue";
import Logo from "../assets/logo.png";
import store from "../store";

const isOpen = computed(() => store.state.isNavOpen);
const isNavOpen = ref(store.state.isNavOpen);

const logo = Logo;
const navs = [
  { name: "Search meals", to: "name" },
  { name: "Meals by letter", to: "letter" },
  { name: "Meals by ingredients", to: "ingredients" },
];

const closeNav = () => {
  isNavOpen.value = false;
  store.dispatch("setIsNavOpen", isNavOpen.value);
};

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;

  store.dispatch("setIsNavOpen", isNavOpen.value);
};

onUpdated(() => (isNavOpen.value = isOpen.value));
</script>

<style>
/* Add your custom styles here */
</style>
