<template>
<div class="search">
    <SearchContent />
  </div>
</template>

<script setup lang="ts" name="Search">
import SearchContent from '../components/SearchContent.vue'
</script>

<style scoped>
.search {
  padding: 20px;
}
</style>

//这里是Search路由组件，具体内容抽象在component文件夹中