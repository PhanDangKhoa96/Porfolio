<template>
  <article class="projects__card">
    <img :src="project.image" alt="" class="projects__img" />

    <div class="projects__modal">
      <div>
        <h3 class="projects__title">{{ project.title }}</h3>
        <p class="projects__subtitle">{{ project.subtitle }}</p>
        <a
          target="_blank"
          :href="project.url"
          class="projects__button button button__small"
          :class="{ disabled: project.url === 'unknow' }"
        >
          <i class="ri-link"></i>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped>
.projects {
  &__card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
    }

    &:hover .projects__modal {
      bottom: 0;
    }
  }
  &__modal {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -100%;
    left: 0;
    background: linear-gradient(
      180deg,
      hsla(var(--hue), 24%, 40%, 0.3) 0%,
      hsla(var(--hue), 24%, 4%, 1) 95%
    );
    display: grid;
    align-items: flex-end;
    padding: 1.5rem 1.25rem;
    transition: 0.3s;
  }
  &__subtitle,
  &__title {
    color: #fff;
  }
  &__subtitle {
    font-size: var(--smaller-font-size);
    margin-bottom: 0.75rem;
  }
  &__title {
    font-size: var(--h3-font-size);
  }
  &__button {
    padding: 0.5rem;

    &.disabled {
      pointer-events: none;
      background-color: gray;
    }
  }
}
</style>
