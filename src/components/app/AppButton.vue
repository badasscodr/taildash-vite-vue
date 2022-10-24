<script lang="ts" setup>
const btnStore = useBtnStore()

const props = defineProps<{
  icon?: string
  bgColor?: string
  color?: string
  bgHoverColor?: string
  size?: string
  text?: string
  borderRadius?: string
  width?: string
}>()

const computedClass = computed(
  () =>
    ` text-${props.size} p-3 w-${props.width} hover:drop-shadow-xl hover:bg-${props.bgHoverColor}`
)
</script>

<template>
  <button
    type="button"
    :style="{ 'background-color': bgColor, color, borderRadius }"
    :class="computedClass"
  >
    <Icon :icon="props.icon" />
    {{ props.text }}
  </button>
</template>

<style lang="scss"></style>
