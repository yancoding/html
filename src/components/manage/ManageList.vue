<template>
  <div class="manage-list">
    <el-table
      :data="files"
      :border="true"
      v-loading="loading"
      size="small"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="文件名"
        :show-overflow-tooltip="true"></el-table-column>
      <el-table-column
        prop="classifyName"
        label="分类"
        width="120px"></el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="120px"></el-table-column>
      <el-table-column
        label="url"
        :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="blank">{{scope.row.url}}</a>
        </template>  
      </el-table-column>
      <el-table-column label="操作" width="150" class-name="file-operation">
        <template slot-scope="scope">
          <el-link icon="el-icon-delete" type="danger" @click="deleteFileById(scope.row.id)">删除</el-link>
          <el-link icon="el-icon-edit" type="primary" @click="deitFileById(scope.row.id)">编辑</el-link>
        </template>  
      </el-table-column>
      <div slot="empty">
        <div v-if="error">加载失败<el-link @click="getFiles()">重试</el-link></div>
        <div v-else-if="files.length === 0 && !loading">该目录为空</div>
      </div>
    </el-table>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  data() {
    return {
      loading: false,
      content: [],
      error: false,
      files: [],
      page: 1,
      size: 10,
      total: 0,
      multipleSelection: [],
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations('fileManage', [
      types.UPDATE_MULTIPLE_SELECTION,
    ]),
    ...mapMutations({

    }),
    // 获取文件列表
    getFiles(page) {
      this.$http.get('file', {
        params: {
          page: page,
          size: this.size,
        }
      })
        .then(res => {
          if (res.success) {
            const data = res.data
            this.files = res.data.content
            this.page = data.page
            this.size = data.size
            this.total = data.total
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    deleteFileById(id) {
      this.$http.get('file', { id })
        .then(data => {
          if (data.success) {
            this.$message({
              type: 'success',
              message: '删除成功',
            })
            this.getFiles()
          } else {
            this.$message({
              type: 'error',
              message: '删除失败',
            })
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    deitFileById() {},
    handleCurrentChange(page) {
      this.getFiles(page)
    },
    handleSelectionChange(val) {
      this[types.UPDATE_MULTIPLE_SELECTION](val)
    },
  },
  mounted() {
    this.getFiles(1)
  },
  beforeDestroy() {
    this[types.UPDATE_MULTIPLE_SELECTION]([])
  },
}
</script>
<style lang="scss">
  .manage-list {
    flex: 1;

    .el-table {
      margin: 10px 0;

      .file-operation {
        .el-link {
          &+.el-link {
            margin-left: 10px;
          }
        }
      }
    }

    .el-pagination {
      text-align: right;
    }
  }
</style>
