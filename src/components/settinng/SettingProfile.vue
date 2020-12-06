<template>
  <div>
    <el-form :model="profileForm">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-form-item label="昵称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AppSetting',
  data() {
    return {
      imageUrl: '',
      profileForm: {
        avatar: '',
        nickname: '',
        email: '',
      },
    }
  },
  methods: {
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
  },
}
</script>

<style lang="scss">

</style>