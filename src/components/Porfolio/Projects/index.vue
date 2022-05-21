<template>
  <div>
    <div v-if="$fetchState.pending">Loading......</div>

    <div v-else class="projects__content grid">
      <porfolio-projects-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      ></porfolio-projects-card>
    </div>
  </div>
</template>

<script>
// image get from https://im.ge/upload
export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    const { data } = await this.$api.projects.getProjects()
    this.projects = data
  },
}
</script>

<style lang="less" scoped></style>
