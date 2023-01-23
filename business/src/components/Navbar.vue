<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
};
</script>
<template>
  <header class="p-4 bg-gray-50 text-dark">
    <div class="container flex justify-between h-16 mx-auto">
      <div class="flex">
        <RouterLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          class="flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
            />
          </svg>
        </RouterLink>
        <ul class="items-stretch hidden space-x-3 lg:flex ml-8">
          <li class="flex">
            <RouterLink
              rel="noopener noreferrer"
              to="/list"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >Explore</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="items-center flex-shrink-0 hidden lg:flex">
        <button class="px-8 py-3 font-semibold rounded bg-blue-200 text-dark">
          Log in
        </button>
      </div>
      <button class="p-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 dark:text-gray-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>
