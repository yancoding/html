<template>
  <div class="chat-user-list">
    <div class="title">最近联系</div>
    <div
      class="item"
      v-for="user in userList"
      :key="user.id"
      :class="{ active: user.id === messageUser.id }"
      @click="handleClickItem(user)"
    >
      <div class="name">{{user.name}}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  props: {
    userList: Array,
    messageUser: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations('websocket', [
      types.CHANGE_MESSAGE_USER,
    ]),
    handleClickItem(user) {
      this[types.CHANGE_MESSAGE_USER]({ user })
    }
  },
}
</script>

<style lang="scss">
$gray: #eaeaea;

.chat-user-list {
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
    cursor: pointer;

    &:hover,
    &.active {
      background-color: rgba(0, 0, 0, .1);
    }
  }
}
</style>
