<template>
    <form class="login">
        <h3>Login</h3>

        <input v-model="form.email"
               :class="{
                  invalid: errors.email
               }"
               type="text"
               name="email"
               placeholder="Email"
        />
        <div class="error">{{ errors.email }}</div>

        <input v-model="form.password"
               :class="{
                  invalid: errors.password
               }"
               type="text"
               name="password"
               placeholder="Password"
        />
        <div class="error">{{ errors.password }}</div>

        <input @click.prevent="userLogin"
               type="submit"
               value="Login" />
    </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: null,
      password: null,
    },
    errors: {
      email: null,
      password: null
    }
  }),
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.form });
      } catch (err) {
        console.log(err);
        this.errors = err?.response?.data?.first_errors
      }
    }
  },
}
</script>

<style lang="scss">
  form.login {
      max-width: 460px;
      width: 70%;
      padding: 30px 45px 30px 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #F4F4F4;

      h3 {
        text-transform: uppercase;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 700;
        margin-bottom: 20px;
        font-size: 24px;

      }

      input[type=text],
      input[type=password] {
        width: 100%;
        height: 45px;
        border: 1px solid #ccc;
        padding-left: 10px;
        border-radius: 3px;
        box-shadow: 0 0 3px rgb(0 0 0 / 20%) !important;

        &:focus {
          outline: 0;
        }
      }

      input[type=submit] {
        height: 40px;
        cursor: pointer;
        background: #395378;
        color: white;
        text-transform: uppercase;
        border: 0;
        transition: 0.15s;
        padding: 0 28px;
        font-weight: 700;
        border-radius: 5px;
      }
  }
</style>
