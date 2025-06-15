<template>
  <div class="scanner-box">
    <h1 class="title">漏洞扫描</h1>
    <el-scrollbar>
      <p class="message">{{ message }}</p>
    </el-scrollbar>
    <div class="send-bar">
      <el-input v-model="request" placeholder="Please input" />
      <el-button @click="reciveMessage" :icon="Top" circle />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Top } from '@element-plus/icons-vue'

const message = ref('')
const request = ref('')

function reciveMessage(get_replay: (msg: string) => string) {
  message.value = get_replay(request.value)
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.scanner-box {
  height: 80%;
}
.send-bar {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
