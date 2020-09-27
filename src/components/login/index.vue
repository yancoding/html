<template>
  <el-container class="login-container">
    <el-header>
      <h1>fileCenter</h1>
    </el-header>
    <el-main>
      <el-card>
        <el-tabs v-model="activePane">
          <el-tab-pane label="登录" name="login">
            <el-form :model="loginForm">
              <el-form-item label="用户名">
                <el-input
                  placeholder="请输入用户名"
                  v-model.trim="loginForm.username"
                  @change="getSalt"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  placeholder="请输入密码"
                  v-model.trim="loginForm.password"
                  show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="button-confirm"
                  type="primary"
                  @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form :model="registerForm">
              <el-form-item label="用户名">
                <el-input
                  placeholder="请输入用户名"
                  v-model.trim="registerForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  placeholder="请输入密码"
                  v-model.trim="registerForm.password"
                  show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="button-confirm"
                  type="primary"
                  @click="register">注册</el-button>
                </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import bcrypt from "bcryptjs"

export default {
  data() {
    return {
      activePane: "login",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
      },
      rounds: 10,
      salt: "",
    }
  },
  methods: {
    computeRounds() {
      for (let rounds = 1; rounds <= 15; rounds++) {
        const start = Date.now()
        try {
          const salt = bcrypt.genSaltSync(rounds)
          bcrypt.hashSync("", salt)
        } catch (error) {
          this.$message.error(`${error}`)
          break
        }
        const end = Date.now()
        const ms = end - start
        if (ms > 100) {
          this.rounds = rounds
          break
        }
      }
    },
    getSalt() {
      const username = this.loginForm.username
      setTimeout(() => {
        console.log(username)
      }, 1000)
    },
    async login() {
      const { username, password } = this.loginForm
      const salt = this.salt
      let hash
      try {
        hash = await bcrypt.hash(password, salt);
      } catch (error) {
        return;
      }
      setTimeout(() => {
        console.log(username, hash)
        const token = '123'
        if (typeof localStorage !== 'undefined' && token) {
          localStorage.setItem('token', token)
          this.$router.push("/");
        }
      }, 1000)
    },
    async register() {
      const { username, password } = this.registerForm
      const rounds = this.rounds
      let hash = "";
      try {
        const salt = await bcrypt.genSalt(rounds);
        hash = await bcrypt.hash(password, salt)
      } catch (error) {
        return;
      }
      setTimeout(() => {
        console.log(username, hash)
        const token = '123'
        if (typeof localStorage !== 'undefined' && token) {
          localStorage.setItem('token', token)
          this.$router.push("/");
        }
      }, 1000)
    },
  },
  created() {},
  mounted() {
    this.computeRounds()
  },
}
</script>

<style lang="scss">
.login-container {
  align-items: center;

  .el-card {
    width: 350px;
  }
  .button-confirm {
    width: 100%;
  }
}

</style>
