<template>
  <div>
    <div class="hn-find-box">
      <div class="hn-find-nav" v-for="(activity, index) in Activity" :key="index">
        <img :src="activity.image" alt="">
        <div class="hn-find-title">{{activity.title}}</div>
        <div class="hn-find-time">报名时间：{{activity.createdAt | time}}至{{activity.updatedAt | time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  const _ = require('lodash');
  export default {
    name: "HnFindActivity",
    props: {
      Activity: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    filters: {
      time: function (value) {
        return _.split(value, 'T', 1)[0];
      }
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
        height: 180px;
        border-radius: 5px;
      }
      .hn-find-title{
        padding-top: 5px;
        color: #333;
      }
      .hn-find-time{
        padding-top: 5px;
        font-size: 10px;
        color: #b3b3b3;
      }
    }
  }

</style>
