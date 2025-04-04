<template>
  <div class="box">
    <t-menu
        theme="light"
        :default-value="activeMenu"
        style="margin-right: 40px"
    >
      <template #logo>
        <h2>HCN 控制台</h2>
      </template>
      <t-menu-item value="dashboard" href="/user/clientarea">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource" href="/user/clientarea/resource">
        <template #icon>
          <t-icon name="server" />
        </template>
        资源列表
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const activeMenu = computed(() => {
  return route.path.startsWith('/user/clientarea/resource') ? 'resource' : 'dashboard';
});
</script>