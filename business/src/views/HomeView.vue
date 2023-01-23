<script>
import { mapActions, mapState } from "pinia";
import CardRestaurant from "../components/CardRestaurant.vue";
import { useRestaurantStore } from "../stores/business";

export default {
  name: "HomePage",
  computed: {
    ...mapState(useRestaurantStore, ["dataRestaurants"]),
  },
  methods: {
    ...mapActions(useRestaurantStore, ["fetchRestaurants"]),
  },
  components: { CardRestaurant },
  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <section>
    <div class="bg-blue-200">
      <div
        class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900"
      >
        <h1
          class="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900"
        >
          Welcome to ENAMDUA
        </h1>
        <p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
          Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet Lorem
          ipsum dor ame!
        </p>
        <div class="flex flex-wrap justify-center">
          <button
            type="button"
            class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
          >
            Get started
          </button>
          <button
            type="button"
            class="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="ml-72 font-semibold text-4xl mt-16">
      <p>Explore Food, Your Choice</p>
    </div>
    <div class="ml-72 mt-2 font-normal text-lg">
      <p>Get your voucher vellas !</p>
    </div>
    <div
      class="w-[1550px] py-16 mx-auto bg-blue-200 dark:text-gray-900 mt-6 rounded-lg"
    >
      <div class="container mx-auto px-16">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <h2 class="text-center text-6xl tracking-tighter font-bold">
            Up to <br class="sm:hidden" />50% Off
          </h2>
          <div class="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span class="font-bold text-lg">ENAMDUA</span>
          </div>
          <a
            href="#"
            rel="noreferrer noopener"
            class="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >Get It Now</a
          >
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex-cols">
      <div class="ml-72 font-semibold text-4xl mt-16">
        <p>Here Recomendation's For You</p>
      </div>
      <div class="ml-72 mt-2 font-normal text-lg">
        <p>Restaurant are ready to welcome you</p>
      </div>
      <section class="flex items-center py-20">
        <div class="px-4 mx-auto max-w-7xl">
          <div
            class="grid grid-cols-1 gap-4 lg:gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <CardRestaurant
              v-for="restList in dataRestaurants.businesses.slice(0, 4)"
              :key="restList.id"
              :restList="restList"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
  <div class="flex">
    <div class="mx-auto">
      <button
        @click="$router.push('/list')"
        type="button"
        class="px-8 py-3 font-semibold text-xl rounded-full bg-blue-500 text-white"
      >
        Explore More
      </button>
    </div>
  </div>
  <section class="container mx-auto py-10 md:py-20 antialiased">
    <div class="mx-auto">
      <div class="text-3xl mt-2 mb-16 font-bold text-center">
        <p>WHY USE ENAMDUA ?</p>
      </div>
    </div>
    <section class="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
      <article
        class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl"
      >
        <img
          class="mx-auto mb-20 mt-10 w-40"
          src="https://penpot.app/images/cross-teams.webp"
          alt=""
        />
        <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
          For cross-domain teams
        </h2>
        <p class="m-4 text-lg p-4 leading-relaxed text-center">
          Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet Lorem
          ipsum dor ame!
        </p>
      </article>

      <article
        class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl"
      >
        <img
          class="mx-auto mb-20 mt-10 w-40"
          src="https://penpot.app/images/open-standards.webp"
          alt=""
        />
        <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
          With love and Open Standards
        </h2>
        <p class="m-4 text-lg p-4 leading-relaxed text-center">
          Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet Lorem
          ipsum dor ame!
        </p>
      </article>

      <article
        class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl"
      >
        <img
          class="mx-auto mb-20 mt-10 w-40"
          src="https://penpot.app/images/multi-platforms.webp"
          alt=""
        />
        <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
          Multiplatform
        </h2>
        <p class="m-4 text-lg p-4 leading-relaxed text-center">
          Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet Lorem
          ipsum dor ame!
        </p>
      </article>

      <article
        class="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl"
      >
        <img
          class="mx-auto mb-20 mt-10 w-40"
          src="https://penpot.app/images/open-source.webp"
          alt=""
        />
        <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
          Open Source power
        </h2>
        <p class="m-4 text-lg p-4 leading-relaxed text-center">
          Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet Lorem
          ipsum dor ame!
        </p>
      </article>
    </section>
  </section>
</template>
