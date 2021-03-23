<template>
  <div class="car">
    
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="main">
       <van-card
    v-for="item in 10"
    :key="item"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-stepper v-model="value" theme="round" button-size="22" disable-input />
      </template>
    </van-card>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
    </div>
   
</template>

<script>
export default {
  data(){
    return {
      value:1
    }
  }
};
</script>

<style scoped>
.main{
  margin-bottom: 100px;
}
.van-submit-bar{
  margin-bottom: 50px;
}
</style>
