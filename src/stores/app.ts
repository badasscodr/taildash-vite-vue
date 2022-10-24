import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () =>
    ({
      screenSize: undefined,
      currentColor: '#03C9D7',
      currentMode: 'Light',
      themeSettings: false,
      activeMenu: true,
      isTooltip: false,
    } as IAppStore),

  actions: {
    setScreenSize: function () {},
    setCurrentColor: function () {},
    setCurrentMode: function () {},
    setThemeSettings: function () {},
    setActiveMenu: function () {
      this.activeMenu = !this.activeMenu
    },
    setTooltip: function setTooltip(payload: boolean) {
      this.isTooltip = payload
    },
  },
})
