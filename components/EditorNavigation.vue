<template>
  <nav class="editor-navigation">
    <ul>
      <NuxtLink tag="button" to="/home" type="button" class="btn btn-dark">Back</NuxtLink>
    </ul>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  nav.editor-navigation {
    background-color: #C1C8D2;
    top: 0;
    width: 100%;
    box-shadow: 0 0 5px rgb(0 0 0 / 25%);

    ul {
      height: 80px;
      align-items: center;
      display: flex;
      padding: 0 30px;
      width: 100%;

      button  {
        padding: 15px  22px;
        border-radius: 5px;
        border: 1px solid #CECECE;
        background: #CECECE;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
</style>
