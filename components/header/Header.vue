<template> 
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div id="heading" class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <nuxt-link to="/" class="logo d-flex align-items-center">
        <img src="../../static/horse.png" alt="Horse" >
        <h1 class="sitename">HorseBrain</h1>
      </nuxt-link>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Home</a></li>
          <li><a href="#about">Today's Races</a></li>
          <li><nuxt-link to="/Racetracks">Racetracks</nuxt-link></li>
          <li><a href="#portfolio">Pricing</a></li>
          <li><a href="#portfolio">Contact Us</a></li>
          <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a class="btn-sign-in" href="#contact">Sign In</a></li>
          <br>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
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
</style>