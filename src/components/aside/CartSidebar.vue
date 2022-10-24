<script setup lang="ts">
const store = useAppStore()
const btnStore = useBtnStore()
const props = defineProps<{ data: TCartData }>()
</script>

<template>
  <div class="bg-half-transparent w-full fixed nav-item top-0 right-0">
    <div
      class="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8"
    >
      <div class="flex justify-between items-center">
        <p class="font-semibold text-lg">Shopping Cart</p>
        <AppButton
          @click="btnStore.$reset()"
          icon="material-symbols:cancel-outline"
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      <div v-for="item in props.data" :key="item.id">
        <div>
          <div
            class="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4"
          >
            <img class="rounded-lg h-80 w-24" :src="item.image" alt="" />
            <div>
              <p class="font-semibold">{{ item.name }}</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                {{ item.category }}
              </p>
              <div class="flex gap-4 mt-2 items-center">
                <p class="font-semibold text-lg">{{ item.price }}</p>
                <div
                  class="flex items-center border-1 border-r-0 border-color rounded"
                >
                  <p
                    class="p-2 border-r-1 dark:border-gray-600 border-color text-red-600"
                  >
                    <Icon icon="ant-design:minus-circle-outlined" />
                  </p>
                  <p
                    class="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"
                  >
                    0
                  </p>
                  <p
                    class="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"
                  >
                    <Icon icon="ant-design:plus-circle-outlined" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 mb-3">
        <div class="flex justify-between items-center">
          <p class="text-gray-500 dark:text-gray-200">Sub Total</p>
          <p class="font-semibold">$890</p>
        </div>
        <div class="flex justify-between items-center mt-3">
          <p class="text-gray-500 dark:text-gray-200">Total</p>
          <p class="font-semibold">$890</p>
        </div>
      </div>
      <div class="mt-5">
        <AppButton
          color="white"
          :bgColor="store.currentColor"
          text="Place Order"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  </div>
</template>
