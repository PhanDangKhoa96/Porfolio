<template>
  <div class="skills__area">
    <h3 class="skills__title">{{ skill.name }}</h3>

    <div class="skills__box grid">
      <div class="skills__data" v-for="(item, i) in detail" :key="i">
        <i class="ri-checkbox-circle-line"></i>

        <div>
          <h3 class="skills__name">{{ item.name }}</h3>
          <span class="skills__level">{{ item.level }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillArea',
  props: {
    skill: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    detail() {
      return this.skill.detail
    },
  },
}
</script>

<style lang="less" scoped>
.skills {
  &__title {
    font-size: var(--h3-font-size);
    text-align: center;
    margin-bottom: 1.5rem;
  }
  &__box {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 3rem;
  }
  &__data {
    display: flex;
    column-gap: 0.5rem;

    & i {
      font-size: 1rem;
      color: var(--first-color);
    }
  }
  &__name {
    font-size: var(--normal-font-size);
    font-weight: 500;
    line-height: 18px;
  }
  &__level {
    font-size: var(--smaller-font-size);
  }
}
</style>
