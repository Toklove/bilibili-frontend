<template>
  <div class="video-card">
    <div class="video-card-wrap">
      <div class="video-card-img">
        <img
          alt=""
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
      </div>
      <div class="video-card-desc">
        <div class="video-item">播放次数</div>
        <div class="time">2:33</div>
      </div>
    </div>
    <div class="content">
      <h3>
        2022年小破站高质量力扣算法视频教程|每天30分钟|高效的刷算法题|附LeetCode
      </h3>
      <div class="info-bottom">
        <div class="author">阿婆主呀</div>
        <div class="date">· 3-14</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/*
 * Author: 今晚月色真美
 * Date: 2022-03-17 15:18:59
 * */
let date = new Date();
date.getFullYear(); //这个是当前的年份
date.getMonth(); //这个是月份但是要加一 因为它从零开始
date.getDay(); //这个是这个月的那一天
date.getHours(); //小时
date.getMinutes(); //分钟
date.getMinutes(); //秒
</script>

<style lang="scss" scoped>
.video-card {
  width: 100%;
  margin-bottom: 10px;

  .video-card-wrap {
    border-radius: 6px;
    overflow: hidden;
    position: relative;

    .video-card-img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .video-card-desc {
      display: flex;
      width: 100%;
      color: white;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      padding: 0 5px 5px;
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }
  }

  .content {
    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #18191c;
      transition: ease 0.5s;
    }

    h3:hover {
      color: #00aeec;
      cursor: pointer;
    }

    .info-bottom {
      color: #9499a0;
      display: flex;

      .date {
        margin-left: 5px;
      }
    }
  }
}
</style>
