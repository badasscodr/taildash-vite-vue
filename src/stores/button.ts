import { defineStore } from 'pinia'

export const useBtnStore = defineStore('btn', () => {
  // const count = ref(0)
  const state = ref<IBtnStore>({
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  })

  const tooltip = ref<IBtnStore>({
    menu: false,
    ...state.value,
  })

  const isClicked = ref<IBtnStore>(state.value)
  const isTooltip = ref<IBtnStore>(tooltip.value)

  /* Hook/react way */
  //   const [isClicked, setIsClicked] = useState(state.value)

  /* function setIsClicked(payload: IBtnStore) {
    isClicked.value = state.value
  } */

  function setDropdown(payload: string) {
    isClicked.value = { ...state.value, [payload]: true }
    return isClicked.value
  }

  function setTooltip(payload: string) {
    isTooltip.value = { ...tooltip.value, [payload]: true }
    return isTooltip.value
  }

  return { state, isClicked, isTooltip, setDropdown, setTooltip }
})
