<template>
  <div class="disk-container">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) of separatePath"
          :key="index">
          <a @click="getPathContent(item.path)">{{item.name}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <template v-for="item of pathContent">
      <div :key="item.path" style="display: inline-block;">
        <el-button type="text"  v-if="item.type === 'dir'" @click="getPathContent(item.path)">{{item.name}}</el-button>
        <div v-else-if="item.type === 'file'" style="display: inline-block;">
          <el-image
            v-if="item.mime.indexOf('image') !== -1"
            :src="item.url" fit="contain"
            :preview-src-list="[item.url]"
            style="width: 200px; height: 200px;"></el-image>
          <audio v-else-if="item.mime.indexOf('audio') !== -1" :src="item.url" controls></audio>
          <video v-else-if="item.mime.indexOf('video') !== -1" :src="item.url" controls></video>
        </div>
      </div>
    </template> -->
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
        <div v-if="isError">
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
  mapMutations,
} from 'vuex'
import {
  UPDATE_CURRENT_PATH,
} from '../../store/mutation-types'

export default {
  data() {
    return {
      pathContent: [],
      loading: false,
      isError: false,
    }
  },
  computed: {
    ...mapState([
      'currentPath',
    ]),
    ...mapGetters([
      'separatePath',
    ]),
  },
  methods: {
    ...mapMutations({
      updateCurrentPath: UPDATE_CURRENT_PATH,
    }),
    getPathContent(dir) {
      this.loading = true
      this.$http.post('/disk/dir', {
        dir,
      })
        .then(res => {
          if (res.data.success) {
            this.pathContent = res.data.data
            this.updateCurrentPath({
              path: dir,
            })
            this.isError = false
          }
        })
        .catch(() => {
          this.isError = true
        })
        .finally(() => this.loading = false)
    },
  },
  mounted() {
    this.getPathContent('.')
  },
}
</script>
<style lang="scss">
  // img,
  // video {
  //   width: 300px;
  // }
  .disk-container {
    .el-breadcrumb {
      margin: 10px 0;
    }

    .el-table {
      margin: 10px 0;
    }
  }
</style>