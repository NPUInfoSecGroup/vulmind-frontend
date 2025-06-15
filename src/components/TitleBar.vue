<!-- TitleBar.vue -->
<template>
  <div class="title-bar">
    <div class="title-bar-content">
      <img src="@/assets/logo.svg" alt="VulMind" width="30" height="30" />
      <span class="title">VulMind</span>
    </div>
    <div class="pages-tab">
      <span class="subtitle">首页</span>
      <span class="subtitle">模块1</span>
      <span class="subtitle">模块2</span>
      <span class="subtitle">模块3</span>
    </div>
    <div class="settings-tab">
      <span class="subtitle">设置</span>
      <span class="subtitle">帮助</span>
      <span class="subtitle">关于</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.title-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-bar-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pages-tab {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.settings-tab {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.subtitle {
  margin-left: 20px;
  font-size: 14px;
  color: #94a3b8;
}
</style>
