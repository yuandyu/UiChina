<template>
  <div>
    <van-tabs v-model="active" sticky color="#808080" :line-height=1>
      <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.name">
        <div>
          <van-row class="hn-ring-box" type="flex" v-for="n in 5" :key="n">
            <van-col class="hn-ring-header">
              <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
            </van-col>
            <van-col class="hn-ring-right hn-c-666">
              <van-row type="flex" justify="space-between">
                <van-col>UI中国</van-col>
                <van-col>25分钟前</van-col>
              </van-row>
              <div class="hn-ring-synopsis">这不仅仅是一篇经验，而是前辈用日积月累得工作心得，用笔记用脑想，最重要得是要走心。还有我是占位符不是简介</div>
              <van-row type="flex" class="hn-ring-img">
                <van-col>
                  <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
                </van-col>
              </van-row>
              <van-row type="flex" justify="space-between" class="hn-ring-zan">
                <van-col class="hn-ring-zan-number">赞  25·评论  22</van-col>
                <van-col><van-icon name="ellipsis" class="hn-ring-ellipsis" /></van-col>
              </van-row>
            </van-col>
          </van-row>
        </div>
      </van-tab>
    </van-tabs>
    <div class="hn-ring-add">
      <van-icon name="add" class="hn-ring-add-icon" />
    </div>
  </div>
</template>

<script>
  import { Tab, Tabs, Row, Col, Icon } from 'vant';
  export default {
    name: "Ring",
    components: {
      'van-tabs': Tabs,
      'van-tab': Tab,
      'van-row': Row,
      'van-col': Col,
      'van-icon': Icon,
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
  .hn-ring-add{
    position: fixed;
    bottom: 70px;
    right: 30px;
    .hn-ring-add-icon{
      color: #3598db;
      font-size: 50px;
    }
  }
  .hn-ring-box{
    padding: 10px;
    .hn-ring-header{
      padding-right: 10px;
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .hn-ring-right{
      width: 100%;
      .hn-ring-synopsis{
        font-size: 12px;
        line-height: 1.6em;
      }
      .hn-ring-img{
        padding: 6px 0;
        div{
          img{
            width: 100px;
            height: 60px;
          }
        }
      }
      .hn-ring-zan{
        .hn-ring-zan-number{
          font-size: 10px;
        }
        .hn-ring-ellipsis{
          font-size: 16px;
        }
      }

    }
  }
</style>
