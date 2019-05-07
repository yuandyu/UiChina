<template>
  <div>
    <div class="van-hairline--bottom">
      <van-row type="flex" justify="space-between" align="center" class="hn-find-top">
        <van-col class="hn-find-title">消息</van-col>
        <van-col class="hn-find-search">全部忽略</van-col>
      </van-row>
    </div>
    <router-view />
  </div>
</template>

<script>
  import { Row, Col } from 'vant';
  export default {
    name: "ExperienceIndex",
    components: {
      'van-row': Row,
      'van-col': Col
    }
  }
</script>

<style scoped lang="scss">
  .hn-find-top{
    padding: 10px 10px;
    .hn-find-title{
      font-size: 18px;
      color: #000;
    }
    .hn-find-search{
      font-size: 14px;
    }
  }

</style>
