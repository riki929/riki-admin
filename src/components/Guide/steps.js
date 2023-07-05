const steps = () => {
  return [
    {
      element: '#guide-start',
      popover: {
        title: '引导',
        description: '开始引导',
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-hamburger',
      popover: {
        title: '汉堡按钮',
        description: '点击收缩侧边菜单栏'
      }
    },
    {
      element: '#guide-breadcrumb',
      popover: {
        title: '面包屑',
        description: '展示路由路径'
      }
    },
    {
      element: '#guide-search',
      popover: {
        title: '菜单搜索',
        description: '可模糊搜索菜单项',
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-full',
      popover: {
        title: '全屏',
        description: '点击全屏展示系统',
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-theme',
      popover: {
        title: '更换主题',
        description: '选择自定义主题色',
        position: 'bottom-right'
      }
    },
    {
      element: '#guide-tags',
      popover: {
        title: '标签页',
        description: '已打开的标签页'
      }
    },
    {
      element: '#guide-sidebar',
      popover: {
        title: '菜单栏',
        description: '展示系统菜单',
        position: 'right-center'
      }
    }
  ]
}
export default steps