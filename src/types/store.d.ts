interface IAppStore {
  screenSize: number | undefined
  currentColor: string
  currentMode: string
  themeSettings: boolean
  activeMenu: boolean
  isTooltip: boolean
}

interface IBtnStore {
  menu?: boolean
  chat: boolean
  cart: boolean
  userProfile: boolean
  notification: boolean
}
