<template>
  <div class="box">
    <t-head-menu defaultValue="2-1" expandType="popup">
<!--      <template #logo>-->
<!--        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />-->
<!--        <a style="font-size: 25px;color: black">HCN</a>-->
<!--      </template>-->
      <t-menu-item value="1" href="/">
        <span>首页</span>
      </t-menu-item>
      <t-button variant="text" shape="square">
        <search-icon slot="icon" shape="square" />
      </t-button>
<!--      <t-submenu value="2" title="菜单2">-->
<!--        <t-menu-item value="2-1">子菜单2-1</t-menu-item>-->
<!--        <t-menu-item value="2-2">子菜单2-2</t-menu-item>-->
<!--        <t-menu-item value="2-3">子菜单2-3</t-menu-item>-->
<!--      </t-submenu>-->
      <template #operations>

<!--        <t-button variant="text" shape="square" href="/login">-->
<!--          <user-icon slot="icon" />-->
<!--        </t-button>-->
      <t-button theme="primary" href="/login">登录</t-button></template>
    </t-head-menu>
  </div>
</template>

<script>
import { SearchIcon, MailIcon, UserIcon, EllipsisIcon } from 'tdesign-icons-vue-next';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
};
</script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
