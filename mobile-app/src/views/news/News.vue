<template>
  <div>
    <van-tabs v-model="active" sticky color="#808080" :line-height=1>
      <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.name">
        <van-row type="flex" align="center" class="hn-news-box" v-for="n in 5" :key="n">
          <van-col class="hn-news-header">
            <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
          </van-col>
          <van-col class="hn-news-right">
            <van-row type="flex" justify="space-between">
              <van-col class="hn-news-name">昵称</van-col>
              <van-col class="hn-news-time">27小时前</van-col>
            </van-row>
            <div class="van-ellipsis">2019-2020 设计趋势报告，源自我们平时日常设计工作的总结归纳，本次由ISUX首尔主笔新视角</div>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { Tab, Tabs, Row, Col } from 'vant';
  export default {
    name: "News",
    components: {
      'van-tabs': Tabs,
      'van-tab': Tab,
      'van-row': Row,
      'van-col': Col
    },
    data() {
      return {
        tabs: [{
          name: '关注的人'
        }, {
          name: '团队的人'
        }, {
          name: '同城的人'
        }, {
          name: '圈子的人'
        }, {
          name: '我的'
        }],
        active: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .hn-news-box{
    padding: 10px;
    .hn-news-header{
      padding-right: 10px;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .hn-news-right{
      width: 100%;
      .hn-news-name{
        font-size: 14px;
      }
      .hn-news-time{
        color: #808080;
      }
      .van-ellipsis{
        padding-top: 5px;
        width: 250px;
      }
    }
  }
</style>
