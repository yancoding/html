<template>
  <el-dialog
    class="invite-dialog"
    title="提示"
    width="30%"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
  >
    <span>{{content}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="$emit('comfirm')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    content: String,
  },
  data() {
    return {
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      },
    },
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
