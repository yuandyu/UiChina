<template>
  <div>
    <div class="hn-find-box">
      <div class="hn-find-nav" v-for="(find, index) in Find" :key="index">
        <van-image :src="find.cover">
          <template v-slot:error>
            <van-icon name="close" size="20" />
          </template>
        </van-image>
        <van-row type="flex" justify="space-between" align="center" class="hn-find-title hn-c-333">
          <van-col>{{find.title}}</van-col>
          <van-col class="hn-find-name">
            <img :src="find.authorHeader" alt="">
            {{find.author}}
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center" class="hn-find-number hn-c-b3b3b3">
          <van-col class="hn-find-icon">
            <hn-icon :icon="'eye'" :amount=find.view />
            <hn-icon :icon="'chat'" :amount=find.message />
            <hn-icon :icon="'like'" :amount=find.collection />
          </van-col>
          <van-col>1小时前</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  import { Row, Col, Image, Icon } from 'vant';
  import { HnIcon } from './index';
  import { GetFind } from '../api/find';
  export default {
    name: "HnFindNav",
    data: () => ({
      Find: ''
    }),
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-image': Image,
      'van-icon': Icon,
      'hn-icon': HnIcon
    },
    mounted() {
      this.GetFindAsync();
    },
    methods: {
      async GetFindAsync() {
        await GetFind().then((res) => {
          console.log(res)
          this.Find = res.data;
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .hn-find-box{
    padding: 5px 15px 0 15px;
    background: #fff;
    .hn-find-nav:nth-last-child(1){
      border-bottom-width: 0;
    }
    .hn-find-nav{
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0; /*no*/
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
