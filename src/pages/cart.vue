<template>
  <div class="car">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="main">
      <template v-if="cartList !== null">
        <van-card
          v-for="item in cartList"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$preImg + item.img"
        >
          <template #footer>
            <van-stepper
              v-model="item.num"
              theme="round"
              button-size="22"
              disable-input
            />
            <van-button type="primary" size="mini" @click="del(item.id)"
              >删除</van-button
            >
          </template>
        </van-card>
      </template>
      <van-empty
       v-else
        class="custom-image"
        image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
        description="购物车空空如也"
      />

      <van-submit-bar
        :price="sumAcount"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { delCart, getCart } from "../utils/request";
export default {
  data() {
    return {
      // value:1,
      // cartList: []
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
      cartList: "cartList",
      sumAcount: "sumAcount"
    })
  },
  methods: {
    ...mapActions({
      requestCart: "cartListActions"
    }),
    del(id) {
      //删除
      delCart({ id }).then(res => {
        this.$toast.success("删除成功");
        //发起更新购物车
        this.requestCart(this.user.uid);
      });
    }
  },
  mounted() {
    if (this.user) {
      this.requestCart(this.user.uid);
    }

    // if(this.user){
    //   const uid = this.user.uid
    //   getCart({uid}).then(res=>{
    //     this.cartList = res.data.list
    //   })
    // }
  }
};
</script>

<style scoped>
.main {
  margin-bottom: 100px;
}
.van-submit-bar {
  margin-bottom: 50px;
}
 .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
