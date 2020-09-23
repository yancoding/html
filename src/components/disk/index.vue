<template>
  <div class="disk-container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) of separatePath"
          :key="index">
          <a @click="getPathContent(item.path)">{{item.name}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="pathContent"
      :border="true"
      v-loading="loading"
      size="small"
      style="width: 100%;">
      <el-table-column
        label="文件名"
        :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <el-link
            :underline="false"
            v-if="scope.row.type=='dir'"
            @click="getPathContent(scope.row.path)">{{scope.row.name}}</el-link>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="mime"
        label="类型"
        width="120px"></el-table-column>
      <el-table-column
        prop="url"
        label="路径"
        :show-overflow-tooltip="true"></el-table-column>
      <div slot="empty">
        <div v-if="error">
          加载失败
          <el-link @click="getPathContent(currentPath)">重试</el-link>
        </div>
        <div v-else>该目录为空</div>
      </div>
    </el-table>
  </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions,
} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      currentPath: state => state.disk.currentPath,
      pathContent: state => state.disk.pathContent,
      loading: state => state.disk.loading,
      error: state => state.disk.error,
    }),
    ...mapGetters([
      'separatePath',
    ]),
  },
  methods: {
    ...mapActions([
      'getPathContent',
    ]),
  },
  mounted() {
    if (this.currentPath == '.') {
      this.getPathContent('.')
    }
  },
}
</script>
<style lang="scss">
  .disk-container {
    .el-breadcrumb {
      margin: 10px 0;
    }

    .el-table {
      margin: 10px 0;
    }
  }
</style>