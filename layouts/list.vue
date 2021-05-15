<template>
  <div>
    <NavBar v-if="$auth.loggedIn"/>

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
<script>
  import NavBar from "../components/Navigation";
  export default {
    components: {
      NavBar
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 90px);
    background: #F4F4F4;
    overflow-y: hidden;
    margin-top: 60px;
  }
</style>
