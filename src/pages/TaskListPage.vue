<template>
  <h1>任务列表</h1>
  <div class="custom-style">
    <el-segmented v-model="value" :options="options" />
  </div>
  <div class="grid-content">
    <el-button @click="goSubPage" type="primary">{{ task_name }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const value = ref('全部')

const options = ['全部', '已完成', '扫描中', '异常']

const task_name = '任务1'

const router = useRouter()

function goSubPage() {
  router.push('/scan/' + task_name)
}
</script>

<style scoped>
.custom-style .el-segmented {
  --el-segmented-item-selected-color: var(--el-text-color-primary);
  --el-segmented-item-selected-bg-color: #ffd100;
  --el-border-radius-base: 16px;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  /* background-color: aqua; */
  gap: 10px;
}
</style>
