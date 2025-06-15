<template>
  <div class="info-bar">
    <div class="task-info-view">
      <div class="task-details">
        <h1>{{ taskName }}</h1>
        <p>任务时间: {{ creationTime }}</p>
      </div>
    </div>
    <div class="back-button">
      <el-button type="primary" @click="$router.back()">返回</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const taskName = '示例任务'
const creationTime = '2023-10-01 12:00:00'
</script>

<style scoped>
.info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e2e8f0;
}
.task-info-view {
  flex: 1;
}
.task-details {
  margin-left: 20px;
}
</style>
