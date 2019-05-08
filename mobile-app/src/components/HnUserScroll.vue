<template>
  <div>
    <van-cell title="其他作品" is-link />
    <div class="hn-find-scorll">
      <van-row type="flex">
        <van-col class="hn-find-nav" v-for="n in 5" :key="n">
          <img src="../assets/1507875512.jpeg" alt="">
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import { Row, Col, Cell } from 'vant';
  export default {
    name: "HnFindScroll",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-cell': Cell,
    }
  }
</script>

<style scoped lang="scss">
  .hn-find-scorll{
    padding: 10px 15px;
    overflow-x: scroll;
    .hn-find-nav{
      margin-right: 10px;
      img{
        width: 110px;
        height: 80px;
      }
      .hn-find-title{
        height: 34px;
        padding: 5px;
        width: 140px;
        background: #fff;
        font-size: 12px;
        color: #666;
        div{
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
        }
      }
    }

  }
</style>
