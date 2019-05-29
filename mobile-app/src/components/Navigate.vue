/* eslint-disable */
<template>
  <div>
    <div style="height: 50px;">&nbsp;</div>
    <van-tabbar v-model="active" v-bind:style="{width: width + 'px'}" style="margin: 0 auto; left: auto;">
      <van-tabbar-item icon="home-o" to="/">发现</van-tabbar-item>
      <van-tabbar-item icon="search" to="/experience">经验</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/ring">U圈</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/news">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  /* eslint-disable */
  import {Tabbar, TabbarItem} from 'vant';

  export default {
    name: "Navigate",
    components: {
      'van-tabbar': Tabbar,
      'van-tabbar-item': TabbarItem,
    },
    data: () => ({
      active: 0,
      width: ''
    }),
    created() {
      this.width = this.$store.getters.getWidth;
    }
  }
</script>

<style scoped>

</style>
