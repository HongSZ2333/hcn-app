<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page">
    <TopNavigation />
    <SideBar />
    <!-- 添加你的主页内容 -->
  </div>
</template>

<script setup>
import TopNavigation from '/src/components/TopNav.vue'
import SideBar from "../../components/SideBar.vue";
</script>

<style scoped>
</style>