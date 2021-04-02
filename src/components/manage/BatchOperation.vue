<template>
  <div>
    <el-dropdown class="manage-batch-operation" trigger="click" szie="small" @command="handleCommandEvent">
      <el-button size="small" :disabled="!multipleSelection.length">批量操作</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="classify">更改分类</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <ClassifyFormDialog :visible.sync="ClassifyDialogVisible"/>
  </div>
</template>

<script>
import ClassifyFormDialog from './ClassifyFormDialog'
import { mapState } from 'vuex'

export default {
  components: {
    ClassifyFormDialog,
  },
  data() {
    return {
      ClassifyDialogVisible: false,
    }
  },
  computed: {
    ...mapState('fileManage', [
      'multipleSelection',
    ]),
  },
  methods: {
    handleCommandEvent(command) {
      console.log(command)
      switch(command) {
        case 'classify':
          this.ClassifyDialogVisible = true
          break;
      }
    }
  },
}
</script>

<style lang="scss">
</style>