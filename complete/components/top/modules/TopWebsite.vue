<template>
  <div class="website-area">
    <div class="inner">
      <h2>WEBサイト</h2>
      <ul class="website-list">
        <li v-for="(site,index) in sites">
          {{ site.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'topWebsite',
  computed: {
     ...mapGetters('storeTopWebsite', {
       'sites': 'getSitesGetter'
     })
   },
   methods: {
     ...mapActions('storeTopWebsite',[
       'getSitesAction',
     ])
   },
   mounted: function () {
     this.getSitesAction()
   }
}
</script>
