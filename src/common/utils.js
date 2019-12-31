import { Notification } from 'element-ui'

// 这里引用了element-ui 组件中的提示组件，如不需要可自行写样式。
export function prompt (message) {
  Notification.error({
    message,
    duration: 0
  })
}