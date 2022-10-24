<script setup lang="ts">
const store = useAppStore()
const btnStore = useBtnStore()
const props = defineProps<{ pos: string; title: string; data: TChatData }>()
</script>

<template>
  <div
    class="nav-item absolute right-5 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96"
    :class="props.pos"
  >
    <div class="flex justify-between items-center">
      <div class="flex gap-3">
        <p class="font-semibold text-lg dark:text-gray-200">
          {{ capsFirst(props.title) }}
        </p>
        <button
          type="button"
          class="text-gray-500 dark:text-gray-400 text-xs rounded p-1 px-2 bg-orange"
        >
          5 New
        </button>
      </div>
      <AppButton
        @click="btnStore.$reset"
        icon="material-symbols:cancel-outline"
        color="rgb(153, 171, 180)"
        bgHoverColor="light-gray"
        size="2xl"
        borderRadius="50%"
      />
    </div>
    <div class="mt-5">
      <template v-if="props.data.length > 0">
        <div
          class="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          v-for="item in chatData"
          :key="item.id"
        >
          <div class="relative">
            <img
              class="rounded-full h-10 w-10"
              :src="item.image"
              :alt="item.message"
            />
            <span
              style=""
              class="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
            />
          </div>
          <div>
            <p class="font-semibold dark:text-gray-200">
              {{ item.message ? item.message : null }}
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              {{ item.desc }}
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-xs">
              {{ item.time }}
            </p>
          </div>
        </div>
      </template>
      <span v-else>Not found</span>

      <div class="mt-5">
        <AppButton
          color="white"
          :bgColor="store.currentColor"
          :text="`See all ${props.title}`"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  </div>
</template>
