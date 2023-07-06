<template>
  <el-dialog title="提示" :model-value="modelValue" @close="closed" width="22%">
    <div>
      <el-form ref="formRef" :model="form" label-width="80px" size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="主题色">
              <el-color-picker
                v-model="form.mColor"
                :predefine="predefineColors"
              ></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单文字">
              <el-color-picker
                v-model="form.tColor"
                :predefine="predefineTextColors"
              ></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">取消</el-button>
        <el-button type="primary" @click="comfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

// 弹窗的双向绑定
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])
/**
 * 关闭弹窗
 */
const closed = () => {
  emits('update:modelValue', false)
}

// 预定义色值-主题色
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
]
// 预定义色值-菜单文字
const predefineTextColors = [
  '#303133',
  '#606266',
  '#909399',
  '#C0C4CC',
]
const store = useStore()
// 默认色值
const form = ref({
  mColor: store.getters.mainColor,
  tColor: store.getters.textColor
})

/**
 * 确定
 * 1. 修改主题色
 * 2. 保存最新的主题色
 * 3. 关闭 dialog
 */
const formRef = ref(null)
const comfirm = async () => {
  // element-plus主题色覆盖
  const newStyleText = await generateNewStyle(form.value.mColor)
  writeNewStyle(newStyleText)
  // 非 element-plus主题色覆盖
  store.commit('theme/setMainColor', form.value.mColor)
  store.commit('theme/setTextColor', form.value.tColor)
  closed()
}
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>