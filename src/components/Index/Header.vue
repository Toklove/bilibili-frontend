<template>
  <div id="header">
    <div class="left">
      <a v-for="item in menus.left" :href="item.url" class="link-item">{{
        item.context
      }}</a>
    </div>
    <div class="search">
      <a-input-search
        v-model:value="search"
        auto-size
        placeholder="请输入要查询的内容"
        style="width: 370px; border-radius: 6px"
        @search="onSearch"
      />
    </div>
    <div class="right">
      <a v-for="item in menus.right" :href="item.url" class="link-item">{{
        item.context
      }}</a>
      <a-button class="pink-btn" type="primary">登录</a-button>
    </div>
  </div>
  <div class="header-banner">
    <video id="banner-video" autoplay loop muted src="@a/header.mp4"></video>
  </div>
</template>

<script lang="ts" setup>
import { menu } from "../../types/interface";
import { InputSearch } from "ant-design-vue";
import { onMounted, ref } from "vue";

const menus: menu = {
  left: [
    { context: "主站", url: "/" },
    { context: "番剧", url: "/" },
    { context: "直播", url: "/" },
  ],
  right: [
    { context: "主站", url: "/" },
    { context: "番剧", url: "/" },
    { context: "直播", url: "/" },
  ],
};
const search = ref("");

function onSearch() {}

onMounted(() => {});
</script>

<style lang="scss" scoped>
#header {
  height: 56px;
  width: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);

  .link-item {
    margin-right: 12px;
    color: white;
  }
}

.header-banner {
  min-height: 155px;
  height: 9.375vw;
  min-width: 999px;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1) translate(0px, -15.57px) rotate(0deg);
    opacity: 1;
  }
}
</style>
