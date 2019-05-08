<template>
  <div>
    <div class="hn-article-cover">
      <img src="https://activity.ui.cn/Public/uiapp/img/seven.jpeg" alt="">
    </div>
    <div class="hn-article-user">
      <van-row type="flex" justify="space-between" align="center">
        <van-col>
          <van-row type="flex" align="center">
            <van-col class="hn-article-user-img">
              <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
            </van-col>
            <van-col class="hn-c-666">
              <div>Hn.</div>
              <div>除了放弃尝试以外没有失败</div>
            </van-col>
          </van-row>
        </van-col>
        <van-col>
          <van-button type="info" size="small" round>关注</van-button>
        </van-col>
      </van-row>
      <div style="padding: 20px 0" class="van-hairline--bottom">
        <van-row type="flex" justify="space-between" align="center" class="hn-article-title">
          <van-col class="title">作品名称</van-col>
          <van-col class="hn-article-hot"><van-icon name="fire" />375</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="hn-user-time">
          <van-col class="hn-c-808080">
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
          <van-col class="hn-c-808080">1小时前</van-col>
        </van-row>
      </div>
    </div>
    <div class="hn-article-nav">
      <div class=" hn-c-666 van-hairline--bottom">
        上一篇文章 「前端面试题系列9」浅拷贝与深拷贝的含义、区别及实现 中提到了深拷贝的实现方法，从递归调用，到 JSON，再到终极方案 cloneForce。
        不经让我想到，lodash 中的 _.cloneDeep 方法。它是如何实现深拷贝的呢？今天，就让我们来具体地解读一下 _.cloneDeep 的源码实现。
        源码中的内容比较多，为了能将知识点讲明白，也为了更好的阅读体验，将会分为上下 2 篇进行解读。今天主要会涉及位掩码、对象判断、数组和正则的深拷贝写法。
        ok，现在就让我们深入源码，共同探索吧~

        作者：Micherwa
        链接：https://juejin.im/post/5cbc57a2f265da0380436cca
        来源：掘金
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      </div>
    </div>
    <hn-user-scroll />
    <div>
      <van-cell title="24条评论" is-link />
      <van-row class="hn-article-comment">
        <van-col>
          <img src="http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM7x9PSxVbg1fCu6JMsHNBeAFK6aLyxAl0YOMYZKTFV4FJ0294Al1AnEKGcgER0h43xu4RmM7zIfbzBn9F34hKSckN0zuTYxKLk/132" alt="">
        </van-col>
        <van-col>
          <van-row type="flex" justify="space-between">
            <van-col></van-col>
            <van-col></van-col>
          </van-row>
          <div></div>
          <div></div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import { Row, Col, Button, Icon, Cell } from 'vant';
  import { HnUserScroll } from '../../components/index';
  export default {
    name: "Article",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-button': Button,
      'van-icon': Icon,
      'van-cell': Cell,
      'hn-user-scroll': HnUserScroll,
    }
  }
</script>

<style scoped lang="scss">
  .hn-article-comment{
    padding: 10px;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .hn-article-nav{
    padding: 0 10px;
    line-height: 1.5em;
    div{
      padding-bottom: 20px;
    }
  }
  .hn-article-cover{
    img{
      width: 100%;
    }
  }
  .hn-article-user{
    padding: 20px 10px 10px 10px;
    .hn-article-title{
      padding: 10px 0;
      .title{
        font-size: 16px;
      }
      .hn-article-hot{
        color: #e74c3c;
      }
    }

    .hn-article-user-img{
      padding-right: 10px;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }

</style>
