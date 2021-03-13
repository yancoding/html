<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
  >
    <span>{{inviteInfo.video}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
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
    dialogVisible: {
      get() {
        return this.inviteDialog.visible
      },
      set(value) {
        this.updateInviteDialog({
          visible: value,
        })
      },
    },
  },
  methods: {
    ...mapMutations([
      'updateInviteDialog',
      'updateCurrentSource',
    ]),
    getVideoList() {
      this.$http.post('')
        .then(data => {
          this.videoList = data.data
        })
    },
    invite(id) {
      this.$emit('invite', id)
    },
    handleConfirm() {
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
  },
}
</script>

<style lang="scss">
  
</style>