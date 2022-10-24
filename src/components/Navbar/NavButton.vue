<script setup lang="ts">
const store = useAppStore()
const btnSore = useBtnStore()

const props = defineProps<{
  content: string
  icon: string
  dotColor: string
  isDotted: boolean
  isTooltip: boolean | undefined
}>()
</script>

<template>
  <Popper :content="props.content" :show="props.isTooltip" arrow class="dark">
    <button
      type="button"
      class="relative text-xl rounded-full p-3 hover:bg-light-gray"
      style="color: rgb(3, 201, 215)"
    >
      <span
        v-show="props.isDotted"
        :style="{ background: props.dotColor }"
        class="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      <Icon :icon="props.icon" />
    </button>
  </Popper>
</template>

<style scoped>
.dark {
  --popper-theme-background-color: #616161;
  --popper-theme-background-color-hover: #616161;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 6px 8px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
:deep(.popper) {
  font-size: 11px;
}
</style>
