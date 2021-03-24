<template>
  <div>
    <van-nav-bar
      title="会员中心"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="header">
      <van-image
        round
        width="10rem"
        height="10rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div>{{user.nickname}}</div>
    </div>
    <van-button type="danger" block @click="logout">安全退出</van-button>
    <div class="main">
      <van-cell title="我的收藏" is-link />
      <van-cell title="我的评论" is-link />
      <van-cell title="我的订单" is-link />
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      "user":"user"
    })
  },
  methods:{
    ...mapActions({
      "requestUser":"userActions"
    }),
    logout(){
      this.requestUser(null)
      this.$toast.success('退出成功')
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.header{
  height: 250px;
  background: rgb(215, 221, 231);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.van-button{
  margin-top: 10px;
  border-radius: 20px;
}
</style>
