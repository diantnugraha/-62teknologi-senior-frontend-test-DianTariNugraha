<script>
export default {
  name: "CardRestaurants",
  props: ["restList"],
  methods: {
    clickHandler() {
      this.$router.push({
        name: "detail",
        params: {
          id: this.restList.id,
        },
      });
    },
  },
};
</script>
<template>
  <section>
    <div class="relative overflow-hidden shadow rounded-xl">
      <div class="relative overflow-hidden">
        <div class="mb-5 overflow-hidden">
          <img
            class="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
            :src="restList.image_url"
            alt=""
          />
        </div>
        <button
          class="absolute top-0 left-0 p-3 bg-blue-500 rounded-l-none hover:bg-blue-600 rounded-b-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            ></path>
          </svg>
        </button>
      </div>
      <a>
        <h3 class="px-5 text-md font-bold text-dark cursor-pointer">
          <a class="break-words" @click="clickHandler"> {{ restList.name }} </a>
        </h3>
      </a>
      <a>
        <h3 class="px-5 text-md text-dark mt-2">
          {{ restList.location.address1 }}
        </h3>
      </a>
      <div class="flex">
        <div class="my-auto px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            ></path>
          </svg>
        </div>

        <div class="my-auto py-6">
          <p class="text-md text-dark text-blue-500 font-bold">
            {{ restList.rating }}/5 ({{ restList.review_count }} reviews)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
