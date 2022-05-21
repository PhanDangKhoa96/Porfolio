<template>
  <div class="skills__content grid" data-content id="skills">
    <porfolio-skills-area
      v-for="(skill, i) in skills"
      :key="i"
      :skill="skill"
    ></porfolio-skills-area>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [],
    }
  },
  async fetch() {
    const { data } = await this.$api.skills.getSkills()
    this.skills = data
  },
}
</script>

<style lang="less" scoped>
.skills {
  &__content {
    row-gap: 3.5rem;
  }
}
</style>
