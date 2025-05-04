<template>
  <div class="app-container">
    <nav>
      <router-link to="/">Current Time</router-link> |
      <router-link to="/practice">Practice</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
.app-container {
  padding: 2rem;
}

nav {
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b983;
}
</style>