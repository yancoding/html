<template>
  <div id="chat">
    <yan-chat
      title="yan"
      :data="message"
    ></yan-chat>
  </div>
</template>
<script>
import YanChat from '../components/YanChat.vue'
export default {
  components: {
    YanChat,
  },
  data() {
    return {
      message: [
        {
          date: Date.now(),
          content: 'hello world',
          user: {
            name: 'yan',
            avatar: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1005382251,3596345746&fm=111&gp=0.jpg',
          },
        }
      ]
    }
  },
}
</script>
<style lang="scss">
#chat {
  display: flex;
  
  .container {
    flex: auto;
  }
}
</style>
