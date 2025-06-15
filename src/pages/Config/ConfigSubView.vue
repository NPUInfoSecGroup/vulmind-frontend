<template>
  <div class="demo-collapse-position">
    <el-collapse :expand-icon-position="position">
      <el-collapse-item title="模型配置" name="1"> </el-collapse-item>
      <el-collapse-item title="MCP插件" name="2"> </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CollapseIconPositionType } from 'element-plus'

const position = ref<CollapseIconPositionType>('left')
</script>
