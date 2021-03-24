<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" router>
      <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/cate' icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to='/cart' icon="cart-o" :badge="total">购物车</van-tabbar-item>
      <van-tabbar-item to='/mine' icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            active:0
        }
    },
    computed:{
      ...mapGetters({
        "user":"user",
        "total":"total"
      })
    },
    methods:{
      ...mapActions({
      "requestCart":"cartListActions"
      })
    },
    mounted(){
      if(this.user){
        this.requestCart(this.user.uid)
      }
    }
};
</script>

<style></style>
