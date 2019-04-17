<template>
  <div>
    <van-tabs v-model="active" sticky color="#808080" :line-height=1>
      <van-tab v-for="(tab, index) in tabs" :key="index">
        <div slot="title">
          {{tab.name}}
        </div>
        <div class="hn-find-box">
          <div class="hn-find-nav" v-for="n in 5" :key="n">
            <img src="../../assets/1507875512.jpeg" alt="">
            <van-row type="flex" justify="space-between" align="center" class="hn-find-title hn-c-333">
              <van-col>作品 微视品牌体验设计</van-col>
              <van-col class="hn-find-name">
                <img src="../../assets/uichina.jpg" alt="">
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
      </van-tab>
      <div class="hn-find-tabs-icon" style=""><van-icon name="close" /></div>
    </van-tabs>

  </div>
</template>

<script>
  import { Tabs, Tab, Icon, Row, Col } from 'vant';
  import { HnIcon } from '../../components/index'
  export default {
    name: "FindIndex",
    components: {
      'van-tabs': Tabs,
      'van-tab': Tab,
      'van-row': Row,
      'van-col': Col,
      'van-icon': Icon,
      'hn-icon': HnIcon
    },
    data() {
      return {
        active: 0,
        tabs: [{
          name: '我的关注'
        }, {
          name: '首页推荐'
        }, {
          name: '最新作品'
        }, {
          name: '佳作分享'
        }]
      }
    }
  }
</script>

<style scoped>
  >>>.van-tabs__nav--line{
    padding-right: 20px;
  }
</style>
<style scoped lang="scss">
  .hn-find-tabs-icon{
    position: absolute;
    right: 10px;
    top: 16px;
    z-index: 99
  }
  .hn-find-box{
    padding: 15px;
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
