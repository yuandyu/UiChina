<template>
  <div>
    <div class="hn-find-box">
      <div class="hn-find-nav" v-for="n in 5" :key="n">
        <img src="../assets/1551755286_566.png" alt="">
        <div class="hn-find-title">活动 UTalk线下活动第二十九期-广州站</div>
        <div class="hn-find-time">报名时间：2019.8.14-2018.8.24</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HnFindActivity"
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
