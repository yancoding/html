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
import { mapState, mapMutations, mapActions } from 'vuex'
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
    ]),
    ...mapActions([
      'getUserInfo',
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
    // 获取用户信息
    this.getUserInfo()
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
