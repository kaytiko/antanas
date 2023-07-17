<template>
  <transition name="open">
    <div class="page__menu" v-show="isVisible">
      <div class="page__menu-container">
        <div class="page__menu-wrapper">
          <h3 class="page__menu-title">{{ menuText }} <a href="https://t.me/kate_stoltz"
              title="telegram" target="_blank">telegram</a></h3>
        </div>
        <div class="page__menu-close" @click="isVisible = !isVisible">
          <svg width="51" height="19" viewBox="0 0 51 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.457842 0.669922L49.8666 17.6101L49.4087 18.9454L0 2.00529L0.457842 0.669922Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.457031 17.6101L49.8658 0.669922L50.3236 2.00529L0.914873 18.9454L0.457031 17.6101Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </transition>
  <p class="header__logo">{{ logo }}</p>
  <p class="header__date">— 2022</p>
  <p class="header__info" v-html="about"></p>
  <ul class="header__switcher">
    <li class="header__switcher-item" v-for="(menu, index) in langMenuList" :key="index">
      <router-link active-class="header__switcher--active" aria-current="page" :to="menu.path">{{ menu.lang
      }}</router-link>
    </li>
  </ul>
  <div class="header__toggle" @click="isVisible = !isVisible">
    <svg width="35" height="13" viewBox="0 0 35 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="35" y1="0.5" y2="0.5" stroke="black" />
      <line x1="35" y1="12.5" y2="12.5" stroke="black" />
      <line x1="35" y1="6.5" y2="6.5" stroke="black" />
    </svg>
  </div>
</template>

<style>
.open-enter-to,
.open-leave-from {
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
  transition: all 0.5s ease-in;
}

.open-enter-from,
.open-leave-to {
  -webkit-clip-path: inset(0 0 100% 0);
  clip-path: inset(0 0 100% 0);
  transition: all 0.5s ease-in;
}
</style>

<script>
export default {
  name: 'HelloWorld',
  props: {
    logo: String,
    about: String,
    menuText: String
  },
  data() {
    return {
      isVisible: false,
      langMenuList: [
        { lang: 'Ru', path: '/' },
        { lang: '/', path: '' },
        { lang: 'En', path: '/en' }
      ]
    }
  },
  // mounted() {
  //   this.toggleMenu();
  // },
  // methods: {
  //   toggleMenu() {
  //     let menu = document.querySelector('.page__menu');
  //     menu.classList.add('page__menu--open');
  //   }
  // }
}
</script>