<template>
  <div class="common-layout">
    <el-container class="full-container">
      <el-header class="header">
        <TitleBar />
      </el-header>
      <el-main class="main">
        <router-view class="router-view" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import TitleBar from './components/TitleBar.vue'
</script>

<style scoped>
.common-layout {
  height: 98.1vh; /* 整个页面满屏 */
  display: flex;
  flex-direction: column;
  padding: 0; /* 根据需要设定 */
}

.full-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0; /* 根据需要设定 */
}

.header {
  height: 60px; /* 或你自己的 TitleBar 高度 */
  flex-shrink: 0;
}

.main {
  flex: 1;
  padding: 0; /* 根据需要设定 */
}

.router-view {
  height: 100%;
}
</style>
