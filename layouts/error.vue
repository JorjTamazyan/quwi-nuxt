<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/home">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>

<style class="" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F4F4F4;
    height: 100vh;
  }
</style>
