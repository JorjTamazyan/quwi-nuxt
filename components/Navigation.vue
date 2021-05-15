<template>
  <nav class="navigation">
    <NuxtLink to="/home" class="logo">Q</NuxtLink>
    <a @click.prevent="logout">LOGOUT</a>
    <NuxtLink to="/home">PROJECTS</NuxtLink>
  </nav>
</template>

<script>
  export default {
    methods: {
      async logout () {
        await this.$auth.logout()
      }
    }
  }
</script>

<style lang="scss">
  .navigation {
    overflow: hidden;
    background-color: #FAFAFA;
    position: fixed;
    padding: 0 30px;
    height: 60px;
    top: 0;
    width: 100%;
    box-shadow: 0 0 5px rgb(0 0 0 / 25%);

    a {
      float: right;
      padding: 20px 16px;
      font-size: 17px;
      color: #000;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        background-color: #ddd;
        color: black;
      }

      &.nuxt-link-active {
        color: #15a9ff;
      }
    }

    .logo {
      padding: 16px 16px;
      color: black!important;
      font-weight: 700;
      font-size: 24px;
      float: left;
    }
  }
</style>
