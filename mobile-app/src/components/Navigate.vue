<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';
    export default {
        name: "Navigate",
        components: {
            'van-tabbar': Tabbar,
            'van-tabbar-item': TabbarItem,
        },
        data() {
            return {
                active: 1
            }
        }
    }
</script>

<style scoped>

</style>
