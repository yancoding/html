<template>
  <div class="online-user-list">
    <ul>
      <li v-for="user in otherOnlineUser" :key="user.id">
        {{user.username}}
        <el-button
          type="text"
          @click="invite(user.id)"
        >邀请</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    src: Object,
  },
  data() {
    return {
      videoList: [],
    }
  },
  computed: {
    ...mapState([
      'onlineUsers',
      'user',
    ]),
    otherOnlineUser() {
      return this.onlineUsers.filter(user => user.id != this.user.id)
    }
  },
  methods: {
    getVideoList() {
      this.$http.post('')
        .then(data => {
          console.log(data)
          this.videoList = data.data
        })
    },
    invite(id) {
      this.$emit('invite', id)
    },
  },
  created() {
  },
}
</script>

<style lang="scss">
  
</style>