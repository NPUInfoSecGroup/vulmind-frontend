<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="50%" class="aside">
        <h2>环境信息</h2>
        <div class="card">
          <div class="header-title">
            <p>{{ task.target }}</p>
            <el-tag effect="light" type="info" round>
              {{ task.type }}
            </el-tag>
          </div>
          <div class="action">
            <el-button type="primary" @click="$router.push('/scan/' + task.name)">
              查看任务
            </el-button>
          </div>
        </div>
        <div class="terminal">
          <el-card>
            <div class="terminal-content"></div>
          </el-card>
        </div>
      </el-aside>
      <el-main>
        <h2>扫描过程</h2>
        <MessageView />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MessageView from './Message/MessageView.vue'
const task = ref({
  name: '任务1',
  type: 'interactive',
  status: 'completed',
  target: 'http://example.com',
  created_at: '2023-10-01 12:00:00',
})
</script>

<style scoped>
.common-layout {
  padding: 20px;
  height: 100%;
}
.aside {
  display: flex;
  flex-direction: column;
  gap: 10px;
  display: flex;
  flex-direction: column;
  height: 65vh;
}
.card {
  background-color: #f1f1f1;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-around;
  align-items: center;
}
.terminal-content {
  height: 30vh;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  overflow-y: auto;
}
</style>
