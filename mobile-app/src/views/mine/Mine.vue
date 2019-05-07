<template>
  <div>
    <div class="hn-mine-top">
      <van-row type="flex" justify="space-between" align="center">
        <van-col class="hn-mine-my">我的</van-col>
        <van-col class="hn-mine-edit">编辑</van-col>
      </van-row>
      <div></div>
      <div></div>
      <van-row>
        <van-col>
          <div></div>
          <div></div>
        </van-col>
        <van-col></van-col>
        <van-col></van-col>
        <van-col></van-col>
        <van-col></van-col>
        <van-col></van-col>
        <van-col></van-col>
      </van-row>
    </div>

  </div>
</template>

<script>
  import { Row, Col } from 'vant';
  export default {
    name: "Mine",
    components: {
      'van-row': Row,
      'van-col': Col
    }
  }
</script>

<style scoped lang="scss">
  .hn-mine-top{
    padding: 10px;
    .hn-mine-my{
      font-size: 16px;
    }
    .hn-mine-edit{
      font-size: 14px;
    }
  }
</style>
