//这里是Search组件的具体内容
<template>
  <div class="search-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>自我介绍</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-avatar
            src="../../public/Logo.png.jpg"
            size="large"
            fit="cover"
          />
        </el-col>
        <el-col :span="20">
          <el-descriptions title="个人信息" border>
            <el-descriptions-item label="姓名">张宇翔</el-descriptions-item>
            <el-descriptions-item label="年龄">20</el-descriptions-item>
            <el-descriptions-item label="手机号">13627106814</el-descriptions-item>
            <el-descriptions-item label="介绍">目前想专注于前端开发，成为一名优秀的前端工程师，但是希望未来可以成为一名卓越的全栈开发工程师</el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
      <el-divider />
      <el-row>
        <el-col>
          <el-alert
            title="关于我"
            type="info"
            description="梦想成为一名优秀的全栈工程师"
            show-icon
          />
        </el-col>
      </el-row>
      <el-divider />
      <el-row>
        <el-col>
          <el-button type="primary" @click="handleClick">
            {{ showMoreInfo ? '隐藏更多信息' : '显示更多信息' }}
          </el-button>
        </el-col>
      </el-row>
      <el-row v-if="showMoreInfo" style="margin-top: 20px;">
        <el-col>
          <el-card>
            <div slot="header" class="clearfix">
              <span>更多信息</span>
            </div>
            <p>熟悉Vue3与React基础前端框架，React的SSR框架：Nest.js</p>
            <p>熟悉Nodejs系的Express框架以及Python系的FastAPI框架</p>
            <p>如果可以得到您的赏识，希望可以得到面试的机会</p>
            <el-tooltip content="点击查看更多" placement="top">
              <el-button type="text">更多</el-button>
            </el-tooltip>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {  ref } from 'vue'
import { ElCard, ElRow, ElCol, ElAvatar, ElDescriptions, ElDescriptionsItem, ElDivider, ElAlert, ElButton, ElTooltip } from 'element-plus'

  const showMoreInfo = ref(false)

  const handleClick = () => {
    showMoreInfo.value = !showMoreInfo.value
  }



</script>

<style scoped>
.search-content {
  padding: 20px;
}

.box-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.el-avatar {
  display: block;
  margin: 0 auto;
}

.el-button {
  margin-top: 20px;
}
</style>