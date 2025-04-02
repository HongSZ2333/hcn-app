<template>
  <TopNavigation />
  <t-layout class="login-container">
    <!-- 登录表单 -->
    <t-card class="login-form" :bordered="false">
      <div class="logo">
        <h2>欢迎登录系统</h2>
      </div>

      <t-form ref="formRef" :rules="rules" :data="formData" @submit="handleSubmit">
        <!-- 用户名 -->
        <t-form-item name="username" label="用户名">
          <t-input
              v-model="formData.username"
              clearable
              placeholder="请输入用户名"
              :prefix-icon="UserIcon"
          >
            <template #prefix-icon>
              <t-icon name="user" />
            </template>
          </t-input>
        </t-form-item>

        <!-- 密码 -->
        <t-form-item name="password" label="密码">
          <t-input
              v-model="formData.password"
              type="password"
              clearable
              placeholder="请输入密码"
              :prefix-icon="LockOnIcon"
          >
            <template #prefix-icon>
              <t-icon name="lock-on" />
            </template>
          </t-input>
        </t-form-item>
        <t-divider></t-divider>

        <!-- 记住我 & 忘记密码 -->
        <div class="flex-between">
          <t-checkbox v-model="rememberMe">记住密码</t-checkbox>
          <t-link theme="primary" hover="color">忘记密码?
            <t-link theme="primary" hover="color" href="/register">&emsp;前往注册</t-link>
          </t-link>
        </div>&emsp;

        <t-button
            theme="primary"
            type="submit"
            block
            :loading="loading"
        >
          {{ loading ? '登录中...' : '立即登录' }}
        </t-button>
      </t-form>
    </t-card>
  </t-layout>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import TopNavigation from '../../components/TopNav.vue';
import router from "../../router/index.js";

// 响应式数据
const formRef = ref(null);
const loading = ref(false);
const rememberMe = ref(false);
const isDark = ref(false);

// 表单数据
const formData = reactive({
  username: '',
  password: '',
});

// 验证规则
const rules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 4, max: 16, message: '用户名长度在4-16个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: '至少8位字母数字组合' }
  ]
};

// 主题切换
const toggleTheme = (checked) => {
  document.documentElement.setAttribute('theme-mode', checked ? 'dark' : '');
};

// 处理登录提交
const handleSubmit = async ({ validateResult }) => {
  if (validateResult === true) {
    try {
      loading.value = true;
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 100));

      MessagePlugin.success('登录成功');

      // 记住密码处理
      if (rememberMe.value) {
        localStorage.setItem('loginInfo', JSON.stringify(formData));
      } else {
        localStorage.removeItem('loginInfo');
      }

      // 实际开发中此处进行路由跳转
      // router.push('/dashboard');
    } finally {
      loading.value = false;
      await router.push('/user/clientarea');
    }
  }
};

// 初始化记住的密码
onMounted(() => {
  const savedInfo = localStorage.getItem('loginInfo');
  if (savedInfo) {
    Object.assign(formData, JSON.parse(savedInfo));
    rememberMe.value = true;
  }
});
</script>

<style scoped>
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.login-container {
  padding: 20px;
  margin-top: 60px; /* 匹配导航栏高度 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--td-bg-color-container);
}

.theme-switch {
  position: fixed;
  top: 20px;
  right: 20px;
}

.login-form {
  width: 400px;
  border-radius: 8px;
  box-shadow: var(--td-shadow-3);
  margin-top: 40px;
}

.logo {
  text-align: center;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .login-container {
    margin-top: 48px;
    padding: 16px;
  }

  .login-form {
    width: 100%;
    margin-top: 20px;
  }
}
</style>