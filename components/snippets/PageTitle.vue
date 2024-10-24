<template>
    <div class="page-title dark-background">
      <div class="container position-relative">
        <h1>Racetracks</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><Nuxt-link to="/">Home</Nuxt-link></li>
            <li class="current">Racetracks</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->
</template>

<script>
// TODO: Breadcrumbs should be dynamic based upon current url.
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang='scss' scoped>

</style>