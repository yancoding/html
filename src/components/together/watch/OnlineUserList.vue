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
      this.$http.get('file')
        .then(res => {
          this.videoList = res.data.content
        })
        .catch(err => {
          console.error(err)
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