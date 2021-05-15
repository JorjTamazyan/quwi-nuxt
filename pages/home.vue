<template>
  <div class="home-container">
    <div v-if="projects"
         class="container">
        <NuxtLink
          v-for="project in projects"
          :key="project.id"
          tag="div"
          :to="`/project/${project.id}`"
          class="row">
          <div class="logo">
            <img v-if="project.logo_url"
                 :src="project.logo_url"
                 alt="avatar">
            <div v-else>{{ project.name.charAt(0).toUpperCase() }}</div>
            <span class="name">{{ project.name }}</span>
          </div>

          <span class="time">{{ project.is_active ? 'Active' : 'Inactive' }}</span>
        </NuxtLink>
    </div>
    <div v-else>No Data found.</div>
  </div>

</template>

<script>
  export default {
    layout: 'list',
    async asyncData({ store }) {
      try {
        await store.dispatch('project/getProjects');
        return {
          projects: store.state.project.projects
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss">
  .home-container {
    height: 100%;
    padding: 20px 0;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .row {
        padding: 20px 30px;
        display: flex;
        width: 70%;
        align-items: center;
        background: #fff;
        box-shadow: 0 0 5px rgb(0 0 0 / 20%);
        margin-top: 20px;
        border-radius: 8px;
        font-size: 14px;
        justify-content: space-between;
        cursor: pointer;

        @media screen and (max-width: 600px) {
          flex-direction: column;

          .logo {
            flex-direction: column;

            .name {
              margin-left: 0!important;
              margin-bottom: 10px;
              margin-top: 10px;
            }
          }
        }

        .logo {
          display: flex;
          align-items: center;

          img {
            width: 50px;
          }

          div {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid #F4F4F4;
            text-align: center;
            font-size: 20px;
            line-height: 50px;
          }

          .name {
            margin-left: 10px;
          }
        }

        .time {
          color: green;
          font-size: 14px;
        }

        .spots {
          display: flex;
          padding-right: 20px;

          p {
            margin-bottom: 4px;
            &:first-child {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
</style>
