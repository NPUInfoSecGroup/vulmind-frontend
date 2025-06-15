<template>
  <div :class="['task-info-view', taskState]">
    <div class="task-details">
      <h1>{{ taskName }}</h1>
      <p>创建时间: {{ creationTime }}</p>
      <p>目标对象: {{ targetObject }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const taskName = '示例任务'
const creationTime = '2023-10-01 12:00:00'
const targetObject = '示例目标对象'
const taskState = 'failed' // 或 'in-progress', 'failed'
</script>

<style scoped>
.task-info-view {
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.task-info-view.completed {
  background-color: #d4edda;
  color: #155724;
}

.task-info-view.in-progress {
  background-color: #fff3cd;
  color: #856404;
}

.task-info-view.failed {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
