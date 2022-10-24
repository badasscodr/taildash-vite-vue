<script setup lang="ts">
const store = useAppStore()
const btnStore = useBtnStore()
const tooltip = useTooltipStore()

// const handleActiveMenu = () => setActiveMenu(!activeMenu);
function handleClick(name: string) {
  tooltip.$reset()
  return btnStore.setDropdown(name)
}
</script>

<template>
  <div class="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
    <div class="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        content="Menu"
        icon="ant-design:menu-outlined"
        dotColor="unset"
        :isDotted="false"
        @click="store.setActiveMenu"
        @mouseleave="tooltip.$reset"
        @mouseenter="tooltip.setTooltip('menu')"
        :isTooltip="tooltip.isTooltip.menu"
      />

      <div class="flex">
        <NavButton
          content="Cart"
          icon="feather:shopping-cart"
          dotColor="unset"
          :isDotted="false"
          :isTooltip="tooltip.isTooltip.cart"
          @mouseleave="tooltip.$reset"
          @mouseenter="tooltip.setTooltip('cart')"
          @click="handleClick('cart')"
        />
        <NavButton
          content="Chat"
          icon="bi:chat-left"
          dotColor="#03C9D7"
          :isDotted="true"
          :isTooltip="tooltip.isTooltip.chat"
          @mouseleave="tooltip.$reset"
          @mouseenter="tooltip.setTooltip('chat')"
          @click="handleClick('chat')"
        />
        <NavButton
          content="Notification"
          icon="ri:notification-3-line"
          dotColor="rgb(254, 201, 15)"
          :isDotted="true"
          :isTooltip="tooltip.isTooltip.notification"
          @mouseleave="tooltip.$reset"
          @mouseenter="tooltip.setTooltip('notification')"
          @click="handleClick('notification')"
        />

        <ProfileButton @click="handleClick('userProfile')" />
      </div>
      <Teleport to="body">
        <CartSidebar :data="cartData" v-if="btnStore.isClicked.cart" />
        <NavDrop
          pos="md:right-52"
          title="messages"
          :data="chatData"
          v-if="btnStore.isClicked.chat"
        />
        <NavDrop
          pos="md:right-40"
          title="notifications"
          :data="chatData"
          v-if="btnStore.isClicked.notification"
        />
        <UserProfile
          :data="userProfileData"
          v-if="btnStore.isClicked.userProfile"
        />
      </Teleport>
    </div>
  </div>
</template>
