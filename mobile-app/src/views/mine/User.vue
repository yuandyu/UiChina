<template>
  <div>
    <div class="hn-mine-top" style="background-image: url('http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132')">
      <van-icon name="arrow-left" class="hn-arrow-left" />
      <div class="hn-ming-info">
        <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
        <div class="hn-mine-user-name">Hn.</div>
        <div class="hn-mine-Signature">除了放弃尝试以外没有失败</div>
      </div>
      <div class="hn-user-button">
        <van-button round plain size="small" class="hn-user-primary">私信</van-button>
        <van-button round type="info" size="small">关注</van-button>
      </div>
      <van-row type="flex" justify="space-around" align="center" class="hn-mine-data">
        <van-col>
          <div>682</div>
          <div>热力值</div>
        </van-col>
        <van-col class="hn-mine-border"></van-col>
        <van-col>
          <div>24</div>
          <div>作品</div>
        </van-col>
        <van-col class="hn-mine-border"></van-col>
        <van-col>
          <div>140</div>
          <div>粉丝</div>
        </van-col>
        <van-col class="hn-mine-border"></van-col>
        <van-col>
          <div>320</div>
          <div>关注</div>
        </van-col>
      </van-row>
    </div>

    <div>
      <van-tabs v-model="active" sticky swipe-threshold="5">
        <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.name">
          <div class="hn-user-tabs" v-for="n in 5" :key="n" @click="$router.push('article')">
            <img src="https://activity.ui.cn/Public/uiapp/img/seven.jpeg" alt="">
            <van-row type="flex" justify="space-between" class="hn-user-title">
              <van-col>作品·设计概念</van-col>
              <van-col class="hn-c-b3b3b3">原创</van-col>
            </van-row>
            <van-row type="flex" justify="space-between" class="hn-user-time">
              <van-col class="hn-c-b3b3b3">
                <span>
                  <van-icon name="eye" />&nbsp;2461
                </span>
                <span>
                  <van-icon name="chat" />&nbsp;2461
                </span>
                <span>
                  <van-icon name="like" />&nbsp;2461
                </span>
              </van-col>
              <van-col class="hn-c-b3b3b3">1小时前</van-col>
            </van-row>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import { Row, Col, Icon, Button, Tab, Tabs } from 'vant';
  export default {
    name: "Mine",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-icon': Icon,
      'van-button': Button,
      'van-tab': Tab,
      'van-tabs': Tabs,
    },
    data() {
      return {
        tabs: [{
          name: '主页'
        }, {
          name: '收藏'
        }, {
          name: '资料'
        }, {
          name: '团队'
        }, {
          name: 'U圈'
        }],
        active: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .hn-user-tabs{
    padding: 10px;
    .hn-user-title{
      padding-top: 5px;
    }
    .hn-user-time{
      padding-top: 5px;
    }
    img{
      width: 100%;
      border-radius: 4px;
    }
  }
  .hn-mine-top{
    padding: 10px;
    background-repeat: no-repeat;
    background-size: 100%;
    .hn-arrow-left{
      color: #fff;
      font-size: 18px;
    }
    .hn-mine-my{
      font-size: 16px;
    }
    .hn-mine-edit{
      font-size: 14px;
    }
    .hn-ming-info{
      text-align: center;
      padding-top: 15px;
      color: #fff;
      .hn-mine-user-name{
        font-size: 18px;
        padding-top: 10px;
      }
      .hn-mine-Signature{
        padding-top: 5px;
      }
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0 auto;
      }
    }
    .hn-user-button{
      text-align: center;
      padding-top: 10px;
      .hn-user-primary{
        margin-right: 15px;
      }
    }
    .hn-mine-data{
      padding-top: 10px;
      text-align: center;
      color: #fff;
      .hn-mine-border{
        border-left: 1px solid #fff; /*no*/
        height: 15px;
      }
    }

  }
</style>
