<template>
  <div>
    <div class="content-wrap">
      <main class="main">
        <TopWebsite></TopWebsite>
      </main>
    </div>
  </div>
</template>

<script>
import TopWebsite from './modules/TopWebsite.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'top',
  components: {
    TopWebsite,
  }
}
</script>
