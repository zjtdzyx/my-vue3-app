<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/search">Search</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>