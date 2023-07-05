<template>
  <div>
    <el-tooltip content="功能指引">
      <svg-icon id="guide-start" icon="guide" @click="onClick" />
    </el-tooltip>
  </div>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted } from 'vue'
import steps from './steps'

let driver = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    animate: true,
    closeBtnText: '关闭指引',
    nextBtnText: '下一步',
    prevBtnText: '上一步'
  })
})

const onClick = () => {
  driver.defineSteps(steps())
  driver.start()
}
</script>

<style lang="scss" scoped>
</style>