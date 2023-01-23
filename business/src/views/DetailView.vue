<script>
import { mapActions, mapState } from "pinia";
import Badge from "../components/Badge.vue";
import CardReview from "../components/CardReview.vue";
import ImgProduct from "../components/ImgProduct.vue";

import { useRestaurantStore } from "../stores/business";
export default {
  name: "DetailPage",
  computed: {
    ...mapState(useRestaurantStore, ["detailRestaurants", "reviewRestaurants"]),
  },
  methods: {
    ...mapActions(useRestaurantStore, [
      "fetchDetailRestaurant",
      "fetchReviewRestaurant",
    ]),
  },
  components: {
    Badge,
    ImgProduct,
    CardReview,
  },
  created() {
    const id = this.$route.params.id;
    this.fetchDetailRestaurant(id);
    this.fetchReviewRestaurant(id);
  },
};
</script>
<template>
  <section class="overflow-hidden bg-white py-11 font-poppins">
    <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full mb-8 md:w-1/2 md:mb-0">
          <div class="sticky top-0 z-50 overflow-hidden">
            <div class="relative mb-6 lg:mb-10 lg:h-2/4">
              <img
                :src="detailRestaurants.image_url"
                alt=""
                class="object-cover w-full lg:h-full rounded-lg"
              />
            </div>
            <div class="flex-wrap hidden md:flex">
              <ImgProduct
                v-for="(imgProducts, index) in detailRestaurants.photos"
                :key="index"
                :imgProducts="imgProducts"
              />
            </div>
            <div
              class="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400"
            ></div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-8">
              <h2
                class="max-w-xl mb-6 text-2xl font-bold text-dark md:text-4xl"
              >
                {{ detailRestaurants.name }}
              </h2>
              <Badge
                v-for="(
                  detailCategories, index
                ) in detailRestaurants.categories"
                :key="index"
                :detailCategories="detailCategories"
              />
              <p class="max-w-md text-gray-700 mt-8">
                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                Lorem ispum dor amet Lorem ispum dor amet
              </p>
            </div>
            <div class="mb-8">
              <h2 class="w-16 pb-1 mb-2 text-2xl font-bold text-dark">
                Address
              </h2>
              <p class="max-w-md text-gray-700 mb-2">
                {{ detailRestaurants.location.cross_streets }},
                {{ detailRestaurants.location.address1 }},
                {{ detailRestaurants.location.city }},
                {{ detailRestaurants.location.zip_code }}
              </p>
              <p class="max-w-md text-gray-700 mb-8 font-semibold">
                Phone : {{ detailRestaurants.phone }}
              </p>
            </div>
            <div class="mb-8">
              <h2 class="w-16 pb-1 mb-2 text-2xl font-bold text-dark">Open</h2>
              <p class="max-w-md text-gray-700 mb-8 font-semibold">
                Every Day at 08.00 - 21.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <GMapMap
    :center="center"
    :zoom="7"
    map-type-id="terrain"
    style="width: 100vw; height: 900px"
  >
  </GMapMap>
  <section class="font-poppin">
    <div class="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
      <div class="lg:grid-cols-[40%,1fr] grid grid-cols-1 gap-6">
        <div>
          <div class="p-6 rounded-md bg-gray-50 border-opacity-60">
            <h2 class="mb-6 text-3xl font-black text-center text-dark">
              Customer Reviews
            </h2>
            <div class="mb-4 text-center">
              <span class="inline-block text-5xl font-bold text-dark">{{
                detailRestaurants.rating
              }}</span>
              <span class="inline-block text-xl font-medium text-dark">
                /5</span
              >
            </div>
            <ul class="flex items-center justify-center mb-4">
              <li>
                <a href="#">
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
                </a>
              </li>
              <li>
                <a href="#">
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
                </a>
              </li>
              <li>
                <a href="#">
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
                </a>
              </li>
              <li>
                <a href="#">
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
                </a>
              </li>
              <li>
                <a href="#">
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
                </a>
              </li>
              <li>
                <a href="#">
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
                </a>
              </li>
            </ul>
            <p class="mb-2 text-sm text-center text-dark">
              ({{ detailRestaurants.review_count }} reviews)
            </p>

            <p class="mb-6 text-sm text-center text-dark">
              Average Rating and percentage per views
            </p>
          </div>
        </div>
        <div>
          <CardReview
            v-for="(listReview, index) in reviewRestaurants.reviews"
            :key="index"
            :listReview="listReview"
          />
        </div>
      </div>
    </div>
  </section>
</template>
