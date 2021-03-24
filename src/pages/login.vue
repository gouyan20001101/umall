<template>
  <div>
    <van-nav-bar
      title="欢迎登陆"
      right-text="注册"
      @click-right="$router.push('/register')"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="user.phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登陆</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {login} from '../utils/request'
export default {
  data() {
    return {
      user:{
        phone:'18811112222',
        password:'11111111111',
      }
    };
  },
  methods: {
    ...mapActions({
      "requestUser":"userActions"
    }),
    onSubmit() {
      login(this.user).then(res=>{
        this.requestUser(res.data.list)
        this.$toast.success(res.data.msg)
        this.$router.push('/mine')
      })
    }
  }
};
</script>

<style></style>
