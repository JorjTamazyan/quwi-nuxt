<template>
  <div>
    <EditorNavigation />

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
<script>
  import EditorNavigation from "../components/EditorNavigation";
  export default {
    components: {
      EditorNavigation
    },
  }
</script>

<style class="" scoped>
  .container {
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    background: #F4F4F4;
  }
</style>
