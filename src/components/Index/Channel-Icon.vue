<template>
  <div
    style="
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-right: 16px;
    "
  >
    <a-button shape="circle" size="large" type="primary">
      <template #icon>
        <i :class="icon" class="fa"></i>
      </template>
    </a-button>
    <span class="icon-title">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    default: "fa-list",
  },
  text: {
    type: String,
    default: "ChannelIcon",
  },
});
</script>

<style scoped></style>
