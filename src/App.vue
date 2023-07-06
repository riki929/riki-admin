<template>
  <router-view />
</template>

<script setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()
generateNewStyle(store.getters.cssVar.menuBg).then(newStyleText => {
  writeNewStyle(newStyleText)
})
</script>

<style>
/* 功能指引样式 */
div#driver-highlighted-element-stage {
  background: transparent !important;
  outline: 5000px solid rgba(0,0,0,.75);
}

div#driver-page-overlay {
  background: none !important;
}
</style>
