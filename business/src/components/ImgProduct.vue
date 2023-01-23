<script>
export default {
  name: "ImgProduct",
  props: ["imgProducts"],
};
</script>
<template>
  <div class="w-1/2 p-2 sm:w-1/4">
    <a
      href="#"
      class="block border border-blue-300 hover:border-blue-300 rounded-xl"
    >
      <img
        :src="imgProducts"
        alt=""
        class="object-cover w-full lg:h-20 rounded-xl"
      />
    </a>
  </div>
</template>
