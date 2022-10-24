<script setup lang="ts">
const activeLink = computed(
  () =>
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2'
)
const normalLink = computed(
  () =>
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
)

const store = useAppStore()

const computedStyle = computed((isActive) => ({
  backgroundColor: isActive ? store.currentColor : '',
}))

const computedClass = computed((isActive) =>
  isActive ? activeLink.value : normalLink.value
)
</script>

<template>
  <div class="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
    <div
      class="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
    >
      <div class="flex justify-between items-center">
        <a
          class="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          href="/"
          ><svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path
              d="M23.9477 10.8913a.1735.1735 0 00-.061-.1178c-2.5032-2.078-4.5288-2.9261-6.9905-2.9261-1.3127 0-2.32.2638-2.9916.7827-.5822.4492-.8896 1.0772-.8896 1.812 0 2.0605 2.5184 3.0003 5.4358 4.0883 1.5023.5604 3.057 1.1404 4.483 1.9319a.1626.1626 0 00.0828.0218.187.187 0 00.0589-.011c.0458-.0174.085-.0523.1025-.1002.545-1.3955.822-2.8673.822-4.374a13.082 13.082 0 00-.0523-1.1076zm-4.81 10.4791c-1.0423-.785-2.5795-1.3824-4.2061-2.0125-1.9362-.7501-4.132-1.6027-5.7803-2.913-1.8665-1.4871-2.7757-3.3623-2.7757-5.7324 0-2.1281.883-3.9466 2.5533-5.2614 1.873-1.474 4.7119-2.2546 8.2071-2.2546.966 0 1.8883.0589 2.743.1766a.1696.1696 0 00.1788-.098.17.17 0 00-.0414-.2007C17.814 1.0924 14.9664.0022 12.001.0022c-3.2052 0-6.2186 1.2472-8.4862 3.5148C1.2494 5.7825 0 8.796 0 11.999c0 3.2051 1.2472 6.2185 3.5149 8.484 2.2654 2.2654 5.2788 3.5148 8.4862 3.5148 2.5903 0 5.0564-.8133 7.1344-2.3505a.1714.1714 0 00.0697-.1374.1735.1735 0 00-.0676-.1395Z"
            ></path>
          </svg>
          <span>Shoppy</span></a
        >
        <div class="e-control e-tooltip e-lib">
          <button
            type="button"
            class="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            style="color: rgb(3, 201, 215)"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
              <path
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-10">
        <div v-for="item in menu" :key="item.id">
          <p class="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
            {{ item.title }}
          </p>
          <div
            v-for="link in item.links"
            :key="link.id"
            :style="computedStyle"
            :class="computedClass"
          >
            <Icon :icon="link.icon" />
            <span class="capitalize">{{ link.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
