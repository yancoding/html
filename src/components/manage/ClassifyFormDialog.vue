<template>
  <el-dialog
    title="文件分类"
    width="30%"
    :visible.sync="dialogVisible"
    :center="true"
    @open="handleOpen"
  >
    <el-form>
      <el-form-item label="分类">
        <el-select v-model="form.classify">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogVisible = false">取 消</el-button>
      <el-button size="small" type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    visible: Boolean,
  },
  data() {
    return {
      options: [],
      form: {
        classify: '',
      },
    }
  },
  computed: {
    ...mapState('fileManage', [
      'multipleSelection',
    ]),
    dialogVisible: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      }
    },
  },
  methods: {
    handleOpen() {
      this.$http.get('file/classify')
        .then(res => {
          if (res.success) {
            this.options = res.data
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    handleConfirm() {
      if (this.form.classify) {
        this.$http.put('file', {
          files: this.multipleSelection.map(item => item.id),
          classify: this.form.classify,
        })
          .then(res => {
            if (res.success) {
              this.$message({
                type: 'success',
                message: '更新成功',
              })
              this.dialogVisible = false
            }
          })
          .catch(err => {
            console.error(err)
          })
      } else {
        this.$message({
          type: 'warning',
          message: '请选择分类',
        })
      }
      
    }
  },
}
</script>

<style lang="scss">
</style>