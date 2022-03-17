<template>
  <a-button class="channel-link" size="small">{{ text }}</a-button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: "button",
  },
});
</script>

<style lang="scss" scoped>
.channel-link {
  letter-spacing: 2px;
  border-radius: 6px;
  font-size: 13px;
  box-sizing: content-box;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
</style>
