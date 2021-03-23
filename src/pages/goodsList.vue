<template>
  <div>
    <van-nav-bar
      title="商品列表"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div v-if="goodsList !== null">
      <van-card
      v-for="item in goodsList"
      :key="item"
      :price="item.price"
      :title="item.title"
      :thumb="$preImg + item.img"
    >
    <template #footer>
        <van-button size="small" icon="cart-o" type="primary"></van-button>
      </template>
    </van-card>
    </div>
    <van-empty
    v-else
      class="custom-image"
      image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无数据"
    />
 
    
  </div>
</template>

<script>
import { getGoods } from "../utils/request";
export default {
  data() {
    return {
      goodsList: []
    };
  },
  methods: {
    requestGoodsList() {
      const fid = this.$route.query.fid;
      getGoods({ fid }).then(res => {
        this.goodsList = res.data.list;
      });
    }
  },
  mounted() {
    this.requestGoodsList();
  }
};
</script>

<style scoped>
.custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
