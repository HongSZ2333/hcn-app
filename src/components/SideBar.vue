<template>
  <div class="box">
    <t-menu theme="light" default-value="dashboard" style="margin-right: 40px">
      <template #logo>
        <h2>HCN 控制台</h2>
      </template>
      <t-menu-item value="dashboard">
        <template #icon>
          <t-icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <t-icon name="server" />
        </template>
        资源列表
      </t-menu-item>
<!--      <t-menu-item value="user-circle">-->
<!--        <template #icon>-->
<!--          <t-icon name="user-circle" />-->
<!--        </template>-->
<!--        个人中心-->
<!--      </t-menu-item>-->
    </t-menu>
  </div>
</template>

<script setup>
const changeHandler = (active) => {
  console.log('change', active);
};
</script>
