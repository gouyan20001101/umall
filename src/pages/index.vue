<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" router>
      <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/cate' icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to='/cart' icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to='/mine' icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active:0
        }
    }
};
</script>

<style></style>
