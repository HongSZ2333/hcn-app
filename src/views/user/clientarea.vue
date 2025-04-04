<template>
  <t-space direction="vertical">
    <div>
      <t-layout>
        <t-aside>
          <SideBar />
        </t-aside>
        <t-layout>
          <t-content>
            <div class="card-container">
              <!-- 左侧卡片 - 余额 -->
              <t-card class="top-info">
                <span class="ft">余额</span>
                <t-divider />
                <h3><span class="ft-a">{{ formattedMoney }} ￥</span></h3>
                <t-divider />
                <t-button theme="primary" variant="text">前往充值 -></t-button>
              </t-card>

              <!-- 中间卡片 - 积分 -->
              <t-card class="top-info">
                <span class="ft">积分</span>
                <t-divider />
                <h3>
                  <span class="ft-a">{{ formattedPoints }}</span>
                  <span class="ft-b">≈ {{ formattedPointsMoney }}</span>
                  <span><t-link theme="primary" hover="color"> &emsp;提现￥ </t-link></span>
                </h3>
                <t-divider />
                <t-button theme="primary" variant="text">积分商城 -></t-button>
              </t-card>

              <!-- 右侧卡片 - 本月消费 -->
              <t-card class="top-info">
                <span class="ft">本月消费</span>
                <t-divider />
                <h3>
                  <span class="ft-a">{{ formattedTotalMoney }} ￥</span>
                </h3>
                <t-divider />
                <t-button theme="primary" variant="text">消费历史 -></t-button>
              </t-card>
            </div>
          </t-content>
        </t-layout>
      </t-layout>
    </div>
  </t-space>
</template>

<script setup>
import { ref, computed } from 'vue';
import SideBar from "../../components/SideBar.vue";

// 原始数据
const money = ref(114514);          // 余额
const points = ref(17073);          // 积分
const total_money = ref(521);   // 本月消费

// 通用金额格式化函数
const formatCurrency = (value) => {
  const numberValue = Number(value) || 0;
  return numberValue.toLocaleString('zh-CN', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// 计算属性
const formattedMoney = computed(() => formatCurrency(money.value));
const formattedTotalMoney = computed(() => formatCurrency(total_money.value));

// 积分相关格式化
const formattedPoints = computed(() => {
  return points.value.toLocaleString('zh-CN') + ' 分';
});

const formattedPointsMoney = computed(() => {
  const amount = points.value / 2000;
  return amount.toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  });
});
</script>

<style scoped>
/* 保持原有样式不变 */
.card-container {
  background-color: white;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  padding: 20px;
}

.top-info {
  position: relative;
  width: 450px;
  flex: 1;
  min-width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ft {
  font-size: 16px;
  color: #6e6b7b;
  display: block;
  margin-bottom: 8px;
}

.ft-a {
  font-size: 20px;
  color: #5e5873;
  margin-right: 8px;
}

.ft-b {
  font-size: 16px;
  color: #8d8a9e;
}

@media (max-width: 1200px) {
  .card-container {
    flex-direction: column;
  }

  .top-info {
    width: 100%;
    min-width: auto;
  }
}
</style>