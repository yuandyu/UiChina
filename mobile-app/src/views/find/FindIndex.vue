<template>
  <div>
    <van-tabs v-model="active" sticky color="#808080" :line-height=1>
      <van-tab v-for="(tab, index) in tabs" :key="index">
        <div slot="title">
          {{tab.name}}
        </div>
        <hn-find-nav />
        <hn-find-scroll />
        <hn-find-activity />
      </van-tab>
      <div class="hn-find-tabs-icon" @click="show = true" v-bind:style="{position: position ? 'absolute' : 'fixed'}"><van-icon name="close" /></div>
    </van-tabs>
    <hn-find-sort :show="show" v-on:cross="cross" />
  </div>
</template>

<script>
  /* eslint-disable no-console */

  import { Tabs, Tab, Icon } from 'vant';
  import { HnFindNav, HnFindScroll, HnFindActivity, HnFindSort } from '../../components/index';
  import { GetFind } from '../../api/find';
  export default {
    name: "FindIndex",
    components: {
      'van-tabs': Tabs,
      'van-tab': Tab,
      'van-icon': Icon,
      'hn-find-nav': HnFindNav,
      'hn-find-scroll': HnFindScroll,
      'hn-find-activity': HnFindActivity,
      'hn-find-sort': HnFindSort
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
        }],
        show: false,
        scrollY: 0, // 滚动距离
        position: true // true => absolute, false => fixed
      }
    },
    watch: {
      scrollY: function (val) {
        if(val > 40){
          this.position = false;
        } else {
          this.position = true;
        }
      },
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
      this.GetFindAsync();
    },
    methods: {
      handleScroll () {
        // 滚动距离
        this.scrollY = window.scrollY;
      },
      cross() {
        this.show = false;
      },
      async GetFindAsync() {
        await GetFind(1).then((res) => {
          console.log(res)
        });
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
    right: 10px;
    top: 16px;
    z-index: 99
  }


</style>
