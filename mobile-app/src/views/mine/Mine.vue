<template>
  <div>
    <div class="hn-mine-top">
      <van-row type="flex" justify="space-between" align="center">
        <van-col class="hn-mine-my">我的</van-col>
        <van-col class="hn-mine-edit">编辑</van-col>
      </van-row>
      <div class="hn-ming-info">
        <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
        <div class="hn-mine-user-name hn-c-1a1a1a">Hn.</div>
        <div class="hn-c-999 hn-mine-Signature">除了放弃尝试以外没有失败</div>
      </div>
      <van-row type="flex" justify="space-around" align="center" class="hn-mine-data">
        <van-col>
          <div>682</div>
          <div class="hn-c-999">热力值</div>
        </van-col>
        <van-col class="hn-mine-border"></van-col>
        <van-col>
          <div>24</div>
          <div class="hn-c-999">作品</div>
        </van-col>
        <van-col class="hn-mine-border"></van-col>
        <van-col>
          <div>140</div>
          <div class="hn-c-999">粉丝</div>
        </van-col>
        <van-col class="hn-mine-border"></van-col>
        <van-col>
          <div>320</div>
          <div class="hn-c-999">关注</div>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="我的勋章" is-link value="24" />
        <van-cell title="我的作品" is-link value="24" />
        <van-cell title="我的收藏" is-link value="24" />
        <van-cell title="我的简历" is-link value="24" />
        <van-cell title="主页留言" is-link value="24" />
        <van-cell title="设置" is-link value="24" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import { Row, Col, Cell, CellGroup } from 'vant';
  export default {
    name: "Mine",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-cell': Cell,
      'van-cell-group': CellGroup,
    }
  }
</script>

<style scoped lang="scss">
  .hn-mine-top{
    padding: 10px;
    border-bottom: 10px solid #f0f0f0;
    .hn-mine-my{
      font-size: 16px;
    }
    .hn-mine-edit{
      font-size: 14px;
    }
    .hn-ming-info{
      text-align: center;
      padding-top: 15px;
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
    .hn-mine-data{
      padding-top: 15px;
      text-align: center;
      .hn-mine-border{
        border-left: 1px solid #b3b3b3; /*no*/
        height: 15px;
      }
    }

  }
</style>
