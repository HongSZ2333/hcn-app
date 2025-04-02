<template>
  <TopNavigation />
  <t-layout class="login-container">
    <!-- 注册表单 -->
    <t-card class="login-form" :bordered="false">
      <div class="logo">
        <h2>欢迎注册系统</h2>
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

        <!-- 邮箱 -->
        <t-form-item name="email" label="邮箱">
          <t-input
              v-model="formData.email"
              clearable
              placeholder="请输入邮箱"
              :prefix-icon="mail"
          >
            <template #prefix-icon>
              <t-icon name="mail" />
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

        <!-- 重复密码 -->
        <t-form-item name="password" label="重复密码">
          <t-input
              v-model="formData.re_password"
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
<!--        <t-divider></t-divider>-->
        <div style="text-align: right">
          <a>已有账号?</a><t-link theme="primary" hover="color" href="/login">&emsp;前往登录</t-link>
        </div>&emsp;

        <t-button
            theme="primary"
            type="submit"
            block
            :loading="loading"
        >
          {{ loading ? '注册中...' : '立即注册' }}
        </t-button>
      </t-form>
    </t-card>
  </t-layout>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import TopNavigation from '../../components/TopNav.vue';

// 响应式数据
const formRef = ref(null);
const loading = ref(false);

// 表单数据
const formData = reactive({
  username: '',
  password: '',
  email: '',
  re_password: '',
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
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' }
  ],
  re_password: [
    { required: true, message: '重复密码不能为空', trigger: 'blur' }
  ]
};

// 处理登录提交
const handleSubmit = async ({ validateResult }) => {
  if (validateResult === true) {
    try {
      loading.value = true;
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 100));

      if (formData.password !== formData.re_password){
        MessagePlugin.error('两次密码不一致！')
      }else {
        MessagePlugin.success('注册成功');
      }

      // 实际开发中此处进行路由跳转
      // router.push('/dashboard');
    } finally {
      loading.value = false;
    }
  }
};
</script>

<style scoped>
.login-container {
  padding: 20px;
  margin-top: 60px; /* 匹配导航栏高度 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--td-bg-color-container);
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