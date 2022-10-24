<script setup lang="ts">
import avatar from 'assets/img/avatar.jpg'

const store = useAppStore()
const btnStore = useBtnStore()
const props = defineProps<{ data: TProfileData }>()
</script>

<template>
  <div
    class="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96"
  >
    <div class="flex justify-between items-center">
      <p class="font-semibold text-lg dark:text-gray-200">User Profile</p>
      <AppButton
        @click="btnStore.$reset()"
        icon="material-symbols:cancel-outline"
        color="rgb(153, 171, 180)"
        bgHoverColor="light-gray"
        size="2xl"
        borderRadius="50%"
      />
    </div>
    <div class="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
      <img class="rounded-full h-24 w-24" :src="avatar" alt="user-profile" />
      <div>
        <p class="font-semibold text-xl dark:text-gray-200">Michael Roberts</p>
        <p class="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
        <p class="text-gray-500 text-sm font-semibold dark:text-gray-400">
          info@shop.com
        </p>
      </div>
    </div>
    <div>
      <div
        v-for="item in props.data"
        :key="item.id"
        class="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
      >
        <button
          type="button"
          :style="{ color: item.iconColor, backgroundColor: item.iconBg }"
          class="text-xl rounded-lg p-3 hover:bg-light-gray"
        >
          <Icon :icon="item.icon" />
        </button>

        <div>
          <p class="font-semibold dark:text-gray-200">{{ item.title }}</p>
          <p class="text-gray-500 text-sm dark:text-gray-400">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <AppButton
        color="white"
        :bgColor="store.currentColor"
        text="Logout"
        borderRadius="10px"
        width="full"
      />
    </div>
  </div>
</template>
