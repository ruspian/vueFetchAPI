<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
      <RouterLink class="nav-link" active-class="active" to="/about">About</RouterLink>
    </nav>
  </header>

  <!-- suspense component digunakan untuk menampilkan loading sebelum data utama ditampilkan -->
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  margin-bottom: 50px;
}

.nav-link {
  font-weight: bold;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #fff;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.active {
  font-weight: bold;
  background-color: #fff;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}


</style>
