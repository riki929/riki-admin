import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR, DEFAULT_COLOR, TEXT_COLOR, DEFAULT_TEXT_COLOR } from '@/constant'
import variables from '@/styles/variables.module.scss'
export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    textColor: getItem(TEXT_COLOR) || DEFAULT_TEXT_COLOR,
    variables
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    },
    /**
     * 设置菜单文字的颜色
     */
    setTextColor(state, newColor) {
      state.textColor = newColor
      state.variables.menuText = newColor
      setItem(TEXT_COLOR, newColor)
    }
  }
}