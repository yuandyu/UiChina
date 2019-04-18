<template>
  <div>
    <van-tabs v-model="active" sticky color="#808080" :line-height=1>
      <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.name">
        <div slot="title">
          {{tab.name}}
          <van-icon :name="tab.icon" />
        </div>
        <van-row type="flex" class="hn-ex-box">
          <van-col span="16" class="hn-ex-left">
            <div class="hn-ex-title">MG神器！AE插件Motion2超全面使用方11法用方</div>
            <van-row type="flex" justify="space-between" class="hn-ex-bottom">
              <van-col>2061</van-col>
              <van-col>设计师深海</van-col>
            </van-row>
          </van-col>
          <van-col span="8" class="hn-ex-img">
            <img src="../../assets/1507875512.jpeg" alt="">
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { Tabs, Tab, Icon, Row, Col } from 'vant';
  export default {
    name: "Experience",
    components: {
      'van-tabs': Tabs,
      'van-tab': Tab,
      'van-icon': Icon,
      'van-row': Row,
      'van-col': Col
    },
    data() {
      return {
        tabs: [{
          name: '推荐',
          icon: 'arrow-down'
        }, {
          name: '教程/案例'
        }, {
          name: '经验/观点'
        }, {
          name: '规范/资料'
        }, {
          name: '人物/作品'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .hn-ex-box{
    padding: 10px;
    .hn-ex-left{
      align-content: space-between;
      display: flex;
      flex-wrap: wrap;
      padding-right: 15px;
      .hn-ex-title{
        width: 100%;
        .hn-ex-bottom{
          width: 100%;
          color: #b3b3b3;
        }
      }
    }
  }
  .hn-ex-img{
    img{
      width: 100%;
    }
  }
</style>
