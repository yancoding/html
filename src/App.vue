<template>
  <div id="app">
    <router-view></router-view>
    <InviteDialog/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import InviteDialog from './components/InviteDialog'

export default {
  name: 'App',
  components: {
    InviteDialog,
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations([
      'updateUser'
    ])
  },
  created() {
    this.$http.get('/user')
      .then(data => {
        this.updateUser(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
