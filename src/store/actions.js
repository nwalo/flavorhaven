import instance from "../instance";

const searchMeals = async ({ commit }, keyword) => {
  const { data } = await instance.get(`/search.php?s=${keyword}`);

  commit("setSearchedMeals", data.meals);
};

const mealByLetter = async ({ commit }, letter) => {
  const { data } = await instance.get(`/search.php?f=${letter}`);

  commit("setMealByLetter", data.meals);
};

const mealByIngredient = async ({ commit }, ingredient) => {
  const { data } = await instance.get(`/filter.php?i=${ingredient}`);

  commit("setMealByIngredient", data.meals);
};

const setIsNavOpen = ({ commit }, isOpen) => {
  commit("setNavOpen", isOpen);
};

export { searchMeals, mealByLetter, mealByIngredient, setIsNavOpen };
