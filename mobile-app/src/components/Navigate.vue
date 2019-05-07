/* eslint-disable */
<template>
  <div>
    <div style="height: 50px;">&nbsp;</div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/find">发现</van-tabbar-item>
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
    props: {
      active: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>

</style>
