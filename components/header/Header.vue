<template>
  <header class="flex items-center justify-start bg-blue_light shadow-md px-4 py-2">
    <nuxt-link to="/" class="flex items-center bg-black rounded-lg px-3 py-1 cursor-pointer hover:bg-gray-800 transition-colors duration-200">
      <img src="../../static/horse.png" alt="Horse" class="w-12 h-12 mr-2">
      <h1 class="text-2xl font-bold text-white">HorseBrain</h1>
    </nuxt-link>
  </header>
</template>
  
<script>
  export default {
    name: 'Header',

    computed: {
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn;
      },
      getUserName () {
        let name = this.$store.getters.getUserName;

        if (name === '') {
          return 'user';
        } else {
          return name;
        }
      }
    },
    
    methods: {
      showLoginModal () {
        this.$store.commit('showLoginModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    background: url('../../static/horse.png') no-repeat;
    background-position: 50% 50%;
    background-size: 165px;
  }
</style>