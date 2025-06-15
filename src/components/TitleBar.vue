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
    <el-menu-item index="1" @click="goScanList">扫描列表</el-menu-item>
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
const goScanList = () => {
  router.push('/scan')
  activeIndex.value = '1'
}

const handleSelect = (key: string) => {
  // 这里也可以用handleSelect做跳转
  // 但用显式的点击事件更灵活
  console.log('menu selected:', key)
}
</script>

<style scoped></style>
