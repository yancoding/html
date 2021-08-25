<template>
  <div class="online-user-list">
    <div class="title">在线用户：</div>
    <div class="user" v-for="user in otherOnlineUser" :key="user.id">
      <div class="name"><span class="icon el-icon-user-solid"></span>{{user.username}}</div>
      <span class="btn" @click="invite(user.id)">邀请</span>
    </div>
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
.online-user-list {
  width: 300px;

  .title {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 15px;
  }

  .user {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;

    .name {}

    .btn {
      cursor: pointer;
    }
  }
}
</style>