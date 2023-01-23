<script>
export default {
  name: "BadgeCategory",
  props: ["detailCategories"],
};
</script>
<template>
  <span
    class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded text-dark"
    >{{ detailCategories.title }}</span
  >
</template>
