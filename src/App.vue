<script setup lang="ts">
// const [] = useState();
const store = useAppStore()
</script>

<template>
  <div :class="[store.currentMode === 'Dark' ? 'dark' : '']">
    <div class="flex relative dark:bg-main-dark-bg">
      <div class="fixed right-4 bottom-4" style="z-index: '1000'">tooltip</div>

      <div
        v-if="store.activeMenu"
        class="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
      >
        <Sidebar />
      </div>

      <!-- <div v-else class="w-0 dark:bg-secondary-dark-bg">
        sidebar 2
        <Sidebar />
      </div> -->
      <div
        :class="[
          store.activeMenu
            ? [
                'dark:bg-main-dark-bg',
                'bg-main-bg',
                'min-h-screen',
                'md:ml-72',
                'w-full',
              ]
            : [
                'bg-main-bg',
                'dark:bg-main-dark-bg',
                'w-full',
                'min-h-screen',
                'flex-2',
              ],
        ]"
      >
        <div
          class="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
        >
          <Navbar />
        </div>
        <div>
          <ThemeSettings v-if="store.themeSettings" />
          <RouterView v-slot="{ Component }">
            <Transition name="fade">
              <component :is="Component" :key="$route.fullPath" />
            </Transition>
          </RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url(assets/app.css);
</style>
