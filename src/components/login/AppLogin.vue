<template>
  <div class="login-container">
    <header>
      <h1>fileCenter</h1>
    </header>
    <el-card>
      <el-tabs v-model="activePane">
        <el-tab-pane label="登录" name="login">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginFormRules"
            @keyup.enter.native="login"
          >
            <el-form-item
              label="用户名"
              prop="username"
            >
              <el-input
                placeholder="请输入用户名"
                v-model.trim="loginForm.username"
                @change="getSalt"></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              prop="password"
            >
              <el-input
                placeholder="请输入密码"
                v-model.trim="loginForm.password"
                show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="button-confirm"
                type="primary"
                @click="login"
              >登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form
            ref="registerForm"
            :model="registerForm"
            :rules="registerFormRules"
            @keyup.enter.native="register"
          >
            <el-form-item
              label="用户名"
              prop="username"
            >
              <el-input
                placeholder="请输入用户名"
                v-model.trim="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              prop="password"
            >
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
  </div>
</template>

<script>
import bcrypt from 'bcryptjs'
import user from '@/api/user'

export default {
  name: 'AppLogin',
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
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
      registerFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
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
      user.getSalt({ username })
        .then(data => {
          if (data.success) {
            this.salt = data.data.salt
          } else {
            this.$message.error(data.msg)
          }
        })
        .catch(err => this.$message.error(`${err}`))
    },
    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const { username, password } = this.loginForm
          const salt = this.salt
          let hash
          try {
            hash = await bcrypt.hash(password, salt);
          } catch (error) {
            return;
          }
          user.login({
            username,
            password: hash,
          })
            .then(data => {
              if (data.success) {
                localStorage.setItem('token', data.data.token)
                this.$router.push("/")
              } else {
                this.$message.error(data.msg)
              }
            })
            .catch(err => {
              this.$message.error(`${err}`)
            })
        }
      })
    },
    register() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          const { username, password } = this.registerForm
          const rounds = this.rounds
          let hash = ""
          try {
            const salt = await bcrypt.genSalt(rounds);
            hash = await bcrypt.hash(password, salt)
          } catch (err) {
            this.$message.error(`${err}`)
            return;
          }
          user.register({
            username,
            password: hash,
          })
            .then(data => {
              if (data.success) {
                localStorage.setItem('token', data.data.token)
                this.$router.push('/')
              } else {
                this.$message.error(data.msg)
              }
            })
            .catch(err => {
              this.$message.error(`${err}`)
            })
        }
      })
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 150px;
  background: url(~@/assets/login-bg.jpg) center/cover no-repeat;

  .el-card {
    width: 350px;
  }
  .button-confirm {
    width: 100%;
  }
}

</style>
