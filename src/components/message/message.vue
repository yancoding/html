<template>
  <div class="message">
    <ChatUserList
      :userList="userList"
      :messageUser="messageUser"
    />
    <Chat
      :user="userInfo"
      :messageList="messageList"
      :messageUser="messageUser"
      @send="sendContent"
    />
  </div>
</template>
<script>
import Chat from './Chat'
import ChatUserList from './ChatUserList'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Chat,
    ChatUserList,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('user', [
      'userInfo',
    ]),
    ...mapState('chat', [
      'messages',
      'toMessageUser',
    ]),
    ...mapState('websocket', [
      'messageUser',
      'messageList',
    ]),
    ...mapState('websocket', {
      userList: state => state.userList,
    }),
  },
  methods: {
    ...mapActions('websocket', [
      'sendMessage',
    ]),
    sendContent(content) {
      this.sendMessage({ content })
    },
  },
}
</script>
<style lang="scss">
.el-container {
  height: 100vh;
}
.message {
  display: flex;
  
  .chat {
    flex: auto;
  }
  
  .chat-user-list {
    margin-right: 10px;
  }
}
</style>
