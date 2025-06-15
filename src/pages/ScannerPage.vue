<template>
  <div class="common-layout">
    <el-container class="outer-container">
      <el-header class="header">
        <div class="header-title">
          <el-page-header @back="goBack" title="返回">
            <template #content>
              <span class="text-large font-600 mr-3"> {{ taskName }} </span>
            </template>
          </el-page-header>
        </div>
        <TaskInfoView />
      </el-header>
      <el-container class="inner-container">
        <el-aside class="aside">
          <el-scrollbar height="100%">
            <ConfigSubView />
          </el-scrollbar>
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
import { useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const taskName = route.params.taskName
const goBack = () => {
  router.push('/scan')
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
}

.header {
  height: auto; /* 或你想要的固定高度 */
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.721);
  box-shadow: #e6e6e693 0px 0px 16px 6px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e8f0; /* 边框样式 */
}

.inner-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  padding: 20px;
  height: 100%;
  gap: 10px; /* 设置间距 */
}

.aside {
  height: 100%;
  overflow: auto; /* 如果需要 aside 内部滚动 */
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #e2e8f0; /* 边框样式 */
  overflow-x: hidden; /* 禁止横向滚动 */
  min-width: 30%;
}

.main {
  flex: 1;
  height: 100%;
  border: 2px solid #e2e8f0; /* 边框样式 */
  box-shadow: #e2e8f0 0px 0px 10px; /* 阴影效果 */
  border-radius: 1rem;
}

.header-title {
  padding: 20px;
}
</style>
