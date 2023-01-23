<script>
import { mapActions, mapState } from "pinia";
import CardRestaurant from "../components/CardRestaurant.vue";
import { useRestaurantStore } from "../stores/business";

export default {
  name: "ListView",
  computed: {
    ...mapState(useRestaurantStore, ["dataRestaurants"]),
  },
  methods: {
    ...mapActions(useRestaurantStore, [
      "fetchRestaurants",
      "fetchSearchRestaurant",
      "fetchFilterRestaurant",
    ]),
  },
  components: { CardRestaurant },
  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <section>
    <div class="ml-72 font-semibold text-4xl mt-16">
      <p>Lets Explore More Restaurant's</p>
    </div>
    <div class="ml-72 mt-2 font-normal text-lg">
      <p>Restaurant are ready to welcome you</p>
    </div>
    <div class="max-w-2xl mx-auto mt-16 mb-8">
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            v-model="name"
            @click.prevent="fetchRestaurants()"
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          @click.prevent="fetchSearchRestaurant(name)"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
    <div
      class="p-4 bg-white shadow-lg rounded-lg max-w-md md:max-w-2xl mx-auto mt-6 mb-8"
    >
      <h2 class="text-lg font-bold text-black ml-2">Filter Categories</h2>
      <div
        class="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400 ml-2"
      ></div>
      <select
        id="movie-rating"
        v-model="filter"
        @click.prevent="fetchFilterRestaurant(filter)"
        class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded text-black dark:placeholder-gray-400"
      >
        <option value="food">Food</option>
        <option value="restaurants">Restaurants</option>
      </select>
      <button
        type="button"
        @click.prevent="fetchRestaurants()"
        class="px-2 py-auto rounded-md bg-blue-600 text-white text-md my-auto"
      >
        Reset
      </button>
    </div>
    <section class="flex items-center py-20">
      <div class="px-4 mx-auto max-w-7xl">
        <div
          class="grid grid-cols-1 gap-6 lg:gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <CardRestaurant
            v-for="restList in dataRestaurants.businesses"
            :key="restList.id"
            :restList="restList"
          />
        </div>
      </div>
    </section>
  </section>
</template>
