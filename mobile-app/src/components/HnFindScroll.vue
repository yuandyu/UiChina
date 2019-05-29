<template>
  <div>
    <div class="hn-find-scorll hn-bg-f0f0f0">
      <van-row type="flex">
        <van-col class="hn-find-nav" v-for="(activity, index) in Activity" :key="index">
          <img :src="activity.image" alt="">
          <div class="hn-find-title">
            <div>{{activity.title}}</div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  import { Row, Col } from 'vant';
  export default {
    name: "HnFindScroll",
    components: {
      'van-row': Row,
      'van-col': Col
    },
    props: {
      Activity: {
        type: Array,
        default(){
          return [];
        }
      }
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
        width: 150px;
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
