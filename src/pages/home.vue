<template>
  <div>
    <van-nav-bar title="首页" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img :src="$preImg+item.img" alt="">
      </van-swipe-item>
     
    </van-swipe>
    <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card
        v-for="item in goodsList[0].content"
        :key="item.id"
        tag='hot'
          :price="item.price"
          :title="item.title"
          :thumb="$preImg+item.img"
        >
          
          <template #footer>
            <van-button type='primary' size="small" icon='cart-o'></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="发现新品">
        <van-card
        v-for="item in goodsList[1].content"
        :key="item.id"
        tag='new'
          :price="item.price"
          :title="item.title"
          :thumb="$preImg+item.img"
        >
          
          <template #footer>
            <van-button type='primary' size="small" icon='cart-o'></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="全部商品">
        <van-card
        v-for="item in goodsList[2].content"
        :key="item.id"
        
          :price="item.price"
          :title="item.title"
          :thumb="$preImg+item.img"
        >
          
          <template #footer>
            <van-button type='primary' size="small" icon='cart-o'></van-button>
          </template>
        </van-card>
      </van-tab>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {getBanner,getIndexGoods} from '../utils/request'
export default {
  data() {
    return {
      active: 0,
      bannerList:[],
      goodsList:[{content:[]},{content:[]},{content:[]}]
    };
  },
  methods:{
    reqBanner(){
      getBanner().then(res=>{
        // console.log(res);
        this.bannerList = res.data.list
      })
    },
    requestIndexGoods(){
      getIndexGoods().then(res=>{
        this.goodsList = res.data.list
      })
    }

  },
  mounted(){
    this.reqBanner(),
    this.requestIndexGoods()
  }
};
</script>

<style>
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 100%;
}
.van-tabs__content{
    margin-bottom: 50px;
}
</style>
