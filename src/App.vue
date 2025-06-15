<template>
  <div class="common-layout">
    <el-container>
      <el-header><TitleBar /></el-header>
      <el-main><ScannerPage /></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import TitleBar from './components/TitleBar.vue'
import ScannerPage from './pages/ScannerPage.vue'
</script>

<style scoped>
.common-layout {
  height: 85vh;
  display: flex;
  flex-direction: column;
}
</style>
