<template>
  <div id="app">
    <router-view></router-view>
    <InviteDialog
      :visible.sync="inviteDialogVisible"
      :content="inviteDialog.content"
      @confirm="handleInviteDialogConfirm"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'
import InviteDialog from './components/InviteDialog'

export default {
  name: 'App',
  components: {
    InviteDialog,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'inviteDialog',
      'inviteInfo',
      'user',
    ]),
    inviteDialogVisible: {
      get() {
        return this.inviteDialog.visible
      },
      set(value) {
        this[types.UPDATE_INVITE_DIALOG]({
          visible: value,
        })
      },
    },
  },
  methods: {
    ...mapMutations([
      types.UPDATE_INVITE_DIALOG,
      'updateCurrentSource',
      'updateUser',
    ]),
    ...mapMutations('user', [
      types.UPDATE_USER_INFO,
    ]),
    handleInviteDialogConfirm() {
      this.updateCurrentSource(this.inviteInfo.video)
      this.dialogVisible = false
      this.$socket.sendObj({
        type: 'acceptInvite',
        roomId: this.inviteInfo.roomId,
        user: this.user,
      })
    },
  },
  created() {
    this.$http.get('/user')
      .then(res => {
        if (res.success) {
          this[types.UPDATE_USER_INFO](res.data)
        }
      })
      .catch(err => {
        console.error(err)
      })

    this.$socket.on("connect", () => {
      console.log(this.$socket.id); // x8WIv7-mJelg7on_ALbx

      this.$socket.emit('chat', '我们来聊天吧', res => {
        console.log({ res })
      })
    });

    this.$socket.on('message', data => {
      console.log(data)
    })

    this.$socket.on("disconnect", () => {
      console.log(this.$socket.id); // undefined
    });
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-size: 12px;
}
</style>
