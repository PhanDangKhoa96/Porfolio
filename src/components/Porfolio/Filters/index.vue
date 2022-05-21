<template>
  <section class="filters container" v-scroll-reveal="{ delay: 1000 }">
    <ul class="filters__content" v-scroll-reveal="{ delay: 900 }">
      <button
        class="filters__button"
        @click="selectFilter(button)"
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ active: button.component === currentComp }"
      >
        {{ button.name }}
      </button>
    </ul>

    <div class="filters__sections">
      <transition name="slide-fade">
        <keep-alive>
          <component :is="currentComp"></component>
        </keep-alive>
      </transition>
    </div>
  </section>
</template>

<script>
import Projects from '../Projects/index.vue'
import Skills from '../Skills/index.vue'

export default {
  name: 'Filters',
  components: {
    projects: Projects,
    skills: Skills,
  },
  async fetch() {
    await this.getFilter()
  },
  data() {
    return {
      currentComp: 'projects',
      buttons: [],
    }
  },
  computed: {
    components() {
      return this.buttons.map((b) => {
        return b.component
      })
    },
  },
  methods: {
    selectFilter(btn) {
      this.currentComp = btn.component
    },
    async getFilter() {
      const { data } = await this.$api.filter.getFilter()
      this.buttons = data[0].button
    },
  },
}
</script>

<style lang="less" scoped>
.filters {
  &__content {
    margin: 2rem auto 2.5rem;
    background-color: var(--text-color-lighten);
    padding: 0.375rem;
    border-radius: 0.75rem;
    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;
  }
  &__button {
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    color: var(--title-color);
    font-size: var(--small-font-size);
    font-family: var(--body-font);
    font-weight: 500;
    border-radius: 0.75rem;
    cursor: pointer;
    background-color: transparent;
    transition: 0.3s;
    text-transform: capitalize;

    &:hover {
      background-color: var(--body-color);
    }

    &.active {
      background-color: var(--body-color);
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
