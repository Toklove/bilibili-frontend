<template>
  <Header />
  <div class="container">
    <div class="header-channel">
      <div class="channel-icons">
        <ChannelIcon icon="fa-rocket" text="动态" />
        <ChannelIcon icon="fa-fire" text="热门" />
        <ChannelIcon icon="fa-cube" text="频道" />
      </div>
      <a-row :gutter="24" class="channel-right">
        <a-col :span="18">
          <a-row :gutter="24" class="left">
            <a-col
              v-for="item in channelLink"
              :key="item"
              :span="3"
              class="gutter-row"
            >
              <ChannelLink :text="item.context" />
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="6">
          <a-row :gutter="24">
            <a-col v-for="item in channelLinkRight" :span="8">
              <ChannelLink :text="item.context" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <a-row :gutter="24">
      <a-col :span="9">
        <Banner style="border-radius: 6px" />
      </a-col>
      <a-col :span="15"></a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";
import Header from "@c/Index/Header.vue";
import ChannelIcon from "@c/Index/Channel-Icon.vue";
import ChannelLink from "@c/Index/Channel-Link.vue";
import Banner from "@c/Index/Banner.vue";
import { menuObj } from "../../types/interface";

const channelLink: Array<menuObj> = [
  { context: "番剧", url: "/" },
  { context: "国创", url: "/" },
  { context: "综艺", url: "/" },
  { context: "动画", url: "/" },
  { context: "鬼畜", url: "/" },
  { context: "舞蹈", url: "/" },
  { context: "娱乐", url: "/" },
  { context: "科技", url: "/" },
  { context: "美食", url: "/" },
  { context: "电影", url: "/" },
  { context: "电视剧", url: "/" },
  { context: "纪录片", url: "/" },
  { context: "游戏", url: "/" },
  { context: "音乐", url: "/" },
  { context: "影视", url: "/" },
  { context: "更多", url: "/" },
];
const channelLinkRight: Array<menuObj> = [
  { context: "游戏", url: "/" },
  { context: "音乐", url: "/" },
  { context: "影视", url: "/" },
  { context: "知识", url: "/" },
  { context: "资讯", url: "/" },
  { context: "更多", url: "/" },
];
</script>

<style lang="scss" scoped>
.header-channel {
  display: flex;

  .channel-icons {
    display: flex;
  }

  .channel-right {
    .left {
      padding-right: 20px;
      border-right: 1px solid #e5e5e5;
    }
  }
}
</style>
