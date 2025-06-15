<template>
  <div class="task-info-view">
    <div class="task-details">
      <p>任务名称: {{ taskName }}</p>
      <p>创建时间: {{ creationTime }}</p>
      <p>目标对象: {{ targetObject }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const taskName = '示例任务'
const creationTime = '2023-10-01 12:00:00'
const targetObject = '示例目标对象'
// const status = '进行中'
// const description = '这是一个示例任务的描述信息。'
</script>

<style scoped>
.task-info-view {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
</style>
