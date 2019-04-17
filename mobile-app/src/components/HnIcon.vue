<template>
  <div>
    <div class="hn-icon-box">
      <van-icon :name="icon" />
      <span>{{amount}}</span>
    </div>
  </div>
</template>

<script>
  import { Icon } from 'vant';
  export default {
    name: "HnIcon",
    components: {
      'van-icon': Icon
    },
    props: {
      icon: {
        type: String
      },
      amount: {
        type: Number
      }
    }
  }
</script>

<style scoped lang="scss">
  .hn-icon-box{
    display: flex;
    align-items: center;
    padding-right: 10px;
    span{
      padding-left: 5px;
    }
  }
</style>
