<template>
  <div>
    <header
      class="bg-white shadow flex justify-between items-stretch mb-8 px-8"
    >
      <div>
        <router-link to="/" class="inline-flex items-center">
          <img :src="Logo" class="w-[180px]" alt="logo" />
        </router-link>
      </div>
      <div>
        <router-link
          :to="{ name: nav.to }"
          v-for="(nav, i) in navs"
          :key="i"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 font-bold text-purple-800"
        >
          {{ nav.name }}</router-link
        >
      </div>
    </header>
  </div>
</template>

<script setup>
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";
const navs = [
  { name: "Search meals", to: "name" },
  { name: "Meals by letter", to: "letter" },
  { name: "Meals by ingredients", to: "ingredients" },
];
</script>

<style></style>
