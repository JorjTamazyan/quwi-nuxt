<template>
  <form class="editor">
    <div class="row">
      <div class="col-20">
        <label for="name">Name</label>
      </div>

      <div class="col-50">
        <input v-model="name"
               id="name"
               type="text"
               name="email"
               placeholder="Quwi-Desktop"
               :class="{
                'invalid': errorMessages.name
               }"
        />
        <div class="error">{{ errorMessages.name }}</div>
      </div>

      <div class="col-30">
        <input @click.prevent="update"
               type="submit"
               value="OK"
        />
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    layout: 'editor',

    async asyncData ({ store, route, redirect }) {
      let id = route.params.id;

      try {
        const project  = await store.dispatch('project/getProject', id);

        return { name: project.name, id: id }
      } catch (e) {
        redirect('/home')
      }
    },

    data: () => ({
      errorMessages: {
        name: null,
      }
    }),

    methods: {
      async update () {
        try {
          await this.$store.dispatch('project/updateProject', {
            id: this.id,
            name: this.name
          });

          this.$router.push('/home')
        } catch (e) {
          this.errorMessages = e.first_errors
        }
      }
    }
  }
</script>

<style  lang="scss">
    .editor {
        height: fit-content;
        width: 90%;
        border-radius: 4px;
        font-size: 14px;
        background: #fff;
        box-shadow: 0 0 5px rgb(0 0 0 / 20%);
        margin-top: 40px;
        padding: 40px 30px 60px;
        display: flex;
        align-items: center;

        .row {
          width: 100%;
        }

        .col-20 {
          float: left;
          width: 20%;
        }

        .col-30 {
          float: left;
          width: 30%;
        }

        .col-50 {
          float: left;
          width: 50%;
        }

        @media screen and (max-width: 600px) {
          .col-20, .col-30, .col-50, input[type=submit] {
            width: 100%;
            margin: 0 0 10px 0!important;
          }
        }

        input[type=text] {
          width: 100%;
          padding: 14px 22px;
          border: 1px solid #ccc;
          border-radius: 3px;
          font-size: 16px;
          box-shadow: 0 0 3px rgb(0 0 0 / 20%);
        }

        input[type=submit] {
          padding: 14px 22px;
          border: 1px solid #ccc;
          background: #395378;
          border-radius: 5px;
          color: #FFF;
          font-size: 16px;
          font-weight: 700;
          margin-left: 20px;
        }

        label {
          font-size: 18px;
          font-weight: 500;
          display: inline-block;
          padding: 13px 0;
          line-height: 22px;
        }
    }
</style>
