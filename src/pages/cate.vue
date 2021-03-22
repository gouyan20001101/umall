<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />

    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
   data() {
    return {
      activeKey: 0,
    };
  },
};
</script>

<style></style>
