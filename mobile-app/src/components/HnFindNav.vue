<template>
  <div>
    <div class="hn-find-box">
      <div class="hn-find-nav" v-for="n in 5" :key="n">
        <img src="../assets/1507875512.jpeg" alt="">
        <van-row type="flex" justify="space-between" align="center" class="hn-find-title hn-c-333">
          <van-col>作品 微视品牌体验设计</van-col>
          <van-col class="hn-find-name">
            <img src="../assets/uichina.jpg" alt="">
            腾讯ISUX
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center" class="hn-find-number hn-c-b3b3b3">
          <van-col class="hn-find-icon">
            <hn-icon :icon="'eye'" :amount=2016 />
            <hn-icon :icon="'chat'" :amount=420 />
            <hn-icon :icon="'like'" :amount=74 />
          </van-col>
          <van-col>1小时前</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { Row, Col } from 'vant';
  import { HnIcon } from './index'
  export default {
    name: "HnFindNav",
    components: {
      'van-row': Row,
      'van-col': Col,
      'hn-icon': HnIcon
    }
  }
</script>

<style scoped lang="scss">
  .hn-find-box{
    padding: 15px 15px 0 15px;
    background: #fff;
    .hn-find-nav{
      padding-bottom: 15px;
      img{
        width: 100%;
        border-radius: 5px;
      }
      .hn-find-title{
        padding-top: 5px;
        .hn-find-name{
          display: flex;
          align-items: center;
          img{
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
      }
      .hn-find-number{
        padding-top: 5px;
        .hn-find-icon{
          display: flex;
        }
      }
    }
  }

</style>
