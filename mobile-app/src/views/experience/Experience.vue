<template>
  <div>
    <van-tabs v-model="active" sticky color="#808080" :line-height=1>
      <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.name">
        <div slot="title">
          {{tab.name}}
          <van-icon :name="tab.icon" />
        </div>
        <van-row type="flex" class="hn-ex-box van-hairline--bottom" v-for="n in 5" :key="n">
          <van-col span="16" class="hn-ex-left">
            <div class="hn-ex-title">MG神器！AE插件Motion2超全面使用方11法用方</div>
            <van-row type="flex" justify="space-between" class="hn-ex-bottom">
              <van-col>2061</van-col>
              <van-col class="hn-ex-user">
                <img class="hn-ex-header" src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
                <span>设计师深海</span>
              </van-col>
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
        }],
        active: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .hn-ex-box{
    padding: 10px;
    border-bottom: 1px solid #ebedf0; /*no*/
    .hn-ex-left{
      align-content: space-between;
      display: flex;
      flex-wrap: wrap;
      padding-right: 15px;
      .hn-ex-title{
        width: 100%;
      }
      .hn-ex-bottom{
        width: 100%;
        color: #b3b3b3;
        .hn-ex-user{
          display: flex;
          align-items: center;
          .hn-ex-header{
            margin-right: 5px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
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
