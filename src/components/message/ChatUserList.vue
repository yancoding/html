<template>
  <div class="list">
    <div class="title">最近联系</div>
    <div class="item" v-for="item in onlineUsers" :key="item.id" @click="switchUser(item)">
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'onlineUsers',
    ]),
  },
  methods: {
    ...mapMutations('chat', [
      types.SWITCH_TO_MESSAGE_USER,
    ]),
    switchUser(user) {
      this[types.SWITCH_TO_MESSAGE_USER](user)
    }
  },
}
</script>

<style lang="scss" scoped>
$gray: #eaeaea;

.list {
  width: 200px;
  border: 1px solid $gray;

  .title {
    font-size: 16px;
    line-height: 1.5;
    padding: 10px 10px;
    border-bottom: 1px solid $gray;
  }

  .item {
    padding: 10px 20px;
    border-bottom: 1px solid $gray;
  }
}
</style>
