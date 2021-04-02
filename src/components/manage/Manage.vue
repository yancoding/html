<template>
  <div class="manage-file">
    <ManageHeader/>
    <ManageList/>
  </div>
</template>

<script>
import ManageList from './ManageList'
import ManageHeader from './ManageHeader'

export default {
  name: 'AppSetting',
  components: {
    ManageList,
    ManageHeader,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.manage-file {

  .manage-body {

    .upload-video {
      margin: auto;
    }
  }
}
</style>