<template>
  <div>
    <van-popup v-model="show" position="top" class="hn-sort" :close-on-click-overlay="false">
      <div class="van-hairline--bottom" v-on:click="$emit('cross')">
        <van-icon name="cross" class="hn-sort-cross" />
      </div>
      <div class="hn-sort-nav">
        <div class="hn-sort-title">常用分类</div>
        <van-row type="flex" justify="space-between" class="hn-sort-used">
          <van-col v-for="n in 4" :key="n" class="hn-sort-order">
            <van-button round hairline plain size="small" type="info">圆形按钮</van-button>
          </van-col>
        </van-row>
      </div>
      <div class="hn-sort-nav">
        <div class="hn-sort-title">常用分类</div>
        <van-row type="flex" justify="space-between" class="hn-sort-used" style="flex-wrap: wrap;">
          <van-col v-for="n in 8" :key="n" class="hn-sort-order">
            <van-button round hairline plain size="small" type="default">圆形按钮</van-button>
          </van-col>
        </van-row>
      </div>
      <div class="hn-sort-edit">长按菜单进行编辑</div>
    </van-popup>
  </div>
</template>

<script>
  import { Popup, Icon, Row, Col, Button } from 'vant';
  export default {
    name: "HnFindSort",
    components: {
      'van-popup': Popup,
      'van-icon': Icon,
      'van-row': Row,
      'van-col': Col,
      'van-button': Button,
    },
    props: {
      show: {
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .hn-sort{
    height: 80%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    .hn-sort-nav{
      padding: 15px;
      .hn-sort-title{
        font-size: 16px;
      }
      .hn-sort-used{
        text-align: center;
        .hn-sort-order{
          margin-top: 15px;
          width: 25%;
          .van-button--small{
            padding: 0 15px;
          }
        }
      }
    }
    .hn-sort-cross{
      font-size: 30px;
      padding: 5px 15px;
      color: #b3b3b3;
    }
    .hn-sort-edit{
      position: absolute;
      bottom: 15px;
      text-align: center;
      width: 100%;
      color: #b3b3b3
    }
  }
</style>
