<template>
  <div class="common-layout">
    <el-container class="outer-container">
      <el-header class="header">
        <div class="header-title">
          <el-page-header @back="goBack" title="返回">
            <template #content>
              <span class="text-large font-600 mr-3"> 漏洞扫描任务信息 </span>
            </template>
          </el-page-header>
        </div>
        <TaskInfoView />
      </el-header>
      <el-container class="inner-container">
        <el-aside class="aside" width="40%">
          <ConfigSubView />
        </el-aside>
        <el-main class="main">
          <MessageView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import TaskInfoView from './Task/TaskInfoView.vue'
import ConfigSubView from './Config/ConfigSubView.vue'
import MessageView from './Scanner/MessageView.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.common-layout {
  overflow: hidden; /* 禁止滚动 */
}

.outer-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 10px; /* 设置间距 */
}

.header {
  height: auto; /* 或你想要的固定高度 */
  flex-shrink: 0;
}

.inner-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  padding: 20px;
  height: 100%;
}

.aside {
  height: 100%;
  overflow: auto; /* 如果需要 aside 内部滚动 */
  padding: 20px;
  padding-top: 0;
}

.main {
  flex: 1;
  height: 100%;
  border: 2px solid #d4d4d493; /* 边框样式 */
  box-shadow: #d4d4d493 0px 0px 10px; /* 阴影效果 */
  border-radius: 1rem;
}

.header-title {
  padding: 20px;
}
</style>
