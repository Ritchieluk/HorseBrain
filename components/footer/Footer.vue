<template>
  <footer class="bg-blue_light p-4 text-center w-full">
    <p class="text-gray-600">Currently in Development</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
 .link {
   @apply hover:underline;
   @apply hover:opacity-75;
 }

 footer {
   margin-top: auto;
 }
</style>