<template>
  <header class="video-list-header">
    <span class="name">{{title}}</span>
  </header>
</template>

<script>
export default {
  components: {
  },
  props: {
    title: String,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
}
</script>

<style lang="scss">
.video-list-header {
  height: 36px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .name {
    font-size: 20px;
    line-height: 28px;
    color: #212121;
    display: inline-block;
  }
}
  
</style>