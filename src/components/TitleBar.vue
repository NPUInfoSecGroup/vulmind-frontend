<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" @click="goHome">
      <img style="height: 30px" src="@/assets/logo.svg" alt="Element logo" />
    </el-menu-item>
    <el-menu-item index="1" @click="goAddTask">创建任务</el-menu-item>
    <el-menu-item index="2" @click="goScanList">任务列表</el-menu-item>
    <el-menu-item index="3" @click="goConfigList">用户配置</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeIndex = ref(route.path === '/' ? '0' : route.path === '/scan-list' ? '1' : '1')

// 跳转函数
const goHome = () => {
  router.push('/')
  activeIndex.value = '0'
}
const goAddTask = () => {
  router.push('/add-task')
  activeIndex.value = '1'
}
const goScanList = () => {
  router.push('/scan')
  activeIndex.value = '2'
}
const goConfigList = () => {
  router.push('/config')
  activeIndex.value = '3'
}

const handleSelect = (key: string) => {
  // 这里也可以用handleSelect做跳转
  // 但用显式的点击事件更灵活
  console.log('menu selected:', key)
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(4) {
  margin-left: auto;
}
</style>
