<template>
  <div class="container">
    <div class="header">{{title}}</div>
    <div class="body" ref="body">
      <div v-for="(message, index) in messages" :key="index">
        <div class="date">{{new Date(message.date) | moment('YYYY/M/D hh:mm:ss')}}</div>
        <div :class="['message', message.user.id === userId ? 'mine' : '']">
          <el-image class="avator" fit="cover" :src="message.user.avatar"></el-image>
          <div class="content">{{message.content}}</div>
        </div> 
      </div>
    </div>
    <div class="input-box">
      <textarea v-model="text" @keydown.enter.prevent @keyup.enter="send"></textarea>
      <el-button type="primary" size="mini" @click="send">发送</el-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      text: '',
    }
  },
  props: {
    messages: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '',
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  watch: {
    messages() {
      Vue.nextTick()
        .then(this.scrollToBottom)
    },
  },
  methods: {
    send() {
      const content = this.text
      if (content.trim()) {
        this.$emit('send', content)
      }
      this.text = ''
    },
    scrollToBottom() {
      const body = this.$refs.body
      const scrollHeight = body.scrollHeight
      const offsetHeight = body.offsetHeight
      body.scrollTo(0, scrollHeight - offsetHeight + 2)
    },
  },
  mounted() {
    this.scrollToBottom()
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  border-radius: 4px;

  .header {
    font-size: 16px;
    padding: 5px 15px;
  }

  .body {
    min-height: 300px;
    padding: 5px 15px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    overflow: auto;
    flex: 1;

    .date {
      text-align: center;
      color: #808080;
      font-size: 12px;
      line-height: 2;
    }

    .message {
      display: flex;
      margin: 10px 0;
      &.mine {
        flex-direction: row-reverse;

        .content::before {
          left: auto;
          right: -4px;
        }
      }
      .avator {
        flex: 0 0 auto;
        width: 30px;
        height: 30px;
        vertical-align: top;
      }

      .content {
        &::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          position: absolute;
          top: 10px;
          left: -4px;
          transform: rotate(45deg);
          background: inherit;
        }
        position: relative;
        display: inline-block;
        font-size: 14px;
        padding: 10px;
        border-radius: 5px;
        background: #eeeeee;
        margin: 0 10px;
      }
    }
  }
  .input-box {
    padding: 10px;
    &::after {
      content: '';
      display: block;
      clear: both;
    } 
    textarea {
      width: 100%;
      min-height: 150px;
      resize: none;
      border: none;
      font-size: 14px;
      line-height: 1.5;

      &:focus {
        outline: none;
      }
      
    }

    .el-button {
      float: right;
    }
  }
}
</style>

