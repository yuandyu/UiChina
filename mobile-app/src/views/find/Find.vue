<template>
  <div>
    <van-row type="flex" justify="space-between" align="center" class="hn-find-top">
      <van-col class="hn-find-logo">
        <img src="../../assets/uichina.jpg" alt="">
      </van-col>
      <van-col class="hn-find-logo">
        <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
      </van-col>
    </van-row>
    <router-view />
  </div>
</template>

<script>
  import { Row, Col } from 'vant';
  export default {
    name: "Find",
    components: {
      'van-row': Row,
      'van-col': Col
    }
  }
</script>

<style scoped lang="scss">
  .hn-find-top{
    padding: 10px 10px;
    .hn-find-logo{
      img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }
  }

</style>
