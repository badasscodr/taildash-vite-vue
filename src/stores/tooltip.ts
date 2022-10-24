import { defineStore } from 'pinia'

export const useTooltipStore = defineStore('tooltip', () => {
  const state = ref<IBtnStore>({
    menu: false,
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  })

  const isTooltip = ref<IBtnStore>(state.value)

  function setTooltip(payload: string) {
    isTooltip.value = { ...state.value, [payload]: true }
    return isTooltip.value
  }

  return { state, isTooltip, setTooltip }
})
