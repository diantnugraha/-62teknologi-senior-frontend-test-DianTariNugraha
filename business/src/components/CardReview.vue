<script>
export default {
  name: "CardReview",
  props: ["listReview"],
};
</script>
<template>
  <div class="p-6 mb-6 border border-gray-100 rounded-md lg:p-6 bg-gray-50">
    <div class="flex items-center justify-between">
      <div class="flex flex-wrap items-center">
        <img
          class="object-cover w-10 h-10 mb-1 mr-2 rounded-full shadow lg:mb-0"
          :src="listReview.user.image_url"
        />
        <h2 class="ml-2 text-lg font-semibold text-dark">
          {{ listReview.user.name }}
        </h2>
      </div>
    </div>
    <h2 class="mb-2 text-xl font-bold text-dark mt-4">
      {{ listReview.rating }}/5
    </h2>
    <p class="text-sm font-medium text-dark mb-2 mt-2">
      {{ listReview.time_created }}
    </p>
    <p class="mb-3 text-sm text-dark">
      {{ listReview.text }}
    </p>
  </div>
</template>
