<template>
  <header class="profile container">
    <i class="ri-moon-line change-theme" @click="changeTheme"></i>

    <div class="profile__container grid">
      <div class="profile__data">
        <div class="profile__border" v-scroll-reveal>
          <div class="profile__perfil">
            <img src="~assets/img/avatar.png" alt="" />
          </div>
        </div>

        <h2 class="profile__name" v-scroll-reveal="{ delay: 500 }">
          {{ profile.name }}
        </h2>
        <h3 class="profile__profession" v-scroll-reveal="{ delay: 600 }">
          {{ profile.profession }}
        </h3>

        <ul
          class="profile__social"
          v-scroll-reveal="{ delay: 700 }"
          v-if="socials.length > 0"
        >
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            class="profile__social-link"
          >
            <i :class="social.icon"></i>
          </a>
        </ul>
      </div>

      <div class="profile__info">
        <div
          class="profile__info-group"
          v-scroll-reveal="{ delay: 700, interval: 100 }"
          v-for="(item, index) in info"
          :key="index"
        >
          <h3 class="profile__info-number">{{ item.indicator }}</h3>
          <p class="profile__info-description" v-html="item.name"></p>
        </div>
      </div>

      <div class="profile__buttons" v-scroll-reveal="{ delay: 800 }">
        <a
          download=""
          href="~assets/resume/Phan-Le-Dang-Khoa-CV.pdf"
          class="button"
        >
          Download CV <i class="ri-download-line"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { get } from 'lodash'

export default {
  name: 'Profile',
  data() {
    return {
      profile: {},
    }
  },
  async fetch() {
    await this.getProfile()
  },
  computed: {
    socials() {
      return get(this.profile, 'social')
    },
    info() {
      return get(this.profile, 'info')
    },
  },
  methods: {
    changeTheme() {
      document.body.classList.toggle('dark-theme')
    },
    async getProfile() {
      const { data } = await this.$api.profile.getProfile()
      this.profile = data[0]
    },
  },
}
</script>

<style scoped lang="less">
.change-theme {
  position: absolute;
  top: 1.5rem;
  right: 0;
  font-size: 1.25rem;
  color: var(--title-color);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--first-color);
  }
}
.profile {
  position: relative;
  padding-top: 3.5rem;

  &__container {
    row-gap: 2rem;
  }
  &__data {
    display: grid;
    text-align: center;
  }
  &__perfil {
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    width: 100px;
    height: 100px;
    background: linear-gradient(
      180deg,
      hsla(var(--hue), var(--sat), var(--lig), 1) 0%,
      hsla(var(--hue), var(--sat), var(--lig), 0.2) 100%
    );
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  &__border {
    border: 3.5px solid var(--first-color);
    justify-self: center;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-bottom: 0.75rem;
  }
  &__name {
    font-size: var(--h2-font-size);
  }
  &__profession {
    font-size: var(--smaller-font-size);
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 1rem;
  }
  &__social {
    display: flex;
    justify-content: center;
    column-gap: 0.75rem;

    &-link {
      font-size: 1.25rem;
      color: var(--title-color);
      transition: 0.3s;

      &:hover {
        color: var(--first-color);
      }
    }
  }
  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2.5rem;

    &-group {
      text-align: center;
    }
    &-number {
      font-size: var(--normal-font-size);
      margin-bottom: 0.25rem;
    }
    &-description {
      font-size: var(--smaller-font-size);
      font-weight: 500;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__buttons {
    column-gap: 1rem;
  }
}
</style>
