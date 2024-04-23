<template>
  <div>
    <NavBar />

    <div class="relative">
      <div
        class="backdrop fixed"
        :class="{ hidden: !isNavOpen }"
        @click="handleBackDrop"
      ></div>
      <router-view class="pt-8" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUpdated } from "vue";
import NavBar from "../components/NavBar.vue";
import store from "../store";
import state from "../store/state";

const isNavOpen = computed(() => store.state.isNavOpen);

const handleBackDrop = () => {
  store.dispatch("setIsNavOpen", !isNavOpen.value);
};
</script>

<style scoped>
.backdrop {
  background: #000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
}
</style>
