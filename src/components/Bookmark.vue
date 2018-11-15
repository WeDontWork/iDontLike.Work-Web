<template>
  <div>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <a @click="goBack">
          <img src="@/assets/logo.svg" alt="logo" class="logo">
        </a>
      </div>
      <!-- Header end -->

      <div class="star-content bubble-burst animate">
        <img src="@/assets/star.svg" alt="bookmark" class="star-img bounce">
        <img src="@/assets/up-arrow.svg" alt="arrow" class="up-arrow">
      </div>

      <bookmark-content>
        <bookmark-title>One more thing!!!</bookmark-title>
        <bookmark-desc>
          It’s usually hard to recall such websites when they are actually needed. <br>Bookmark it now to check whenever you need it back.
        </bookmark-desc>
        <button @click="goBack" class="white-btn">Okay Cool!</button>
        <img src="@/assets/mouth.svg" alt="smile" class="smile">
      </bookmark-content>
    </div>
    <vue-particles color="#ffffff" shapeType="triangle" :clickEffect="false" :particleOpacity="0.4" :particlesNumber="120"></vue-particles>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueParticles from 'vue-particles';
  import styled from 'vue-styled-components';

  Vue.use(VueParticles);

  const BookmarkContent = styled.div`
    text-align: center;
    margin-top: 10vh;
    color: white;

    .white-btn {
      background: white;
      border-radius: 3px;
      border: 0;
      color: var(--main-bg-color);
      cursor: pointer;
      font-size: 16px;
      font-weight: 300;
      margin-top: 80px;
      min-width: 20%;
      outline: none;
      padding: 12px 20px;
      transition: 0.17s all ease-in-out;
      position: relative;
      z-index: 5;
      &:active {
        box-shadow: inset 0px 0px 2px 0px #787878;
      }
    }

    .smile {
      margin: 0 auto;
      margin-top: 3%;
      width: 150px;
      display: block;
    }
  `;

  const BookmarkTitle = styled.h1`
    font-size: 100px;
    font-weight: 200;
    transition: 0.17s all ease-in-out;
  `;

  const BookmarkDesc = styled.p`
    font-size: 18px;
    margin-top: 8vh;
    font-weight: 200;
    line-height: 1.8;
  `;

  export default {
    name: 'Bookmark',
    data() {
      return {};
    },
    props: ['goBack'],
    components: {
      'bookmark-content': BookmarkContent,
      'bookmark-title': BookmarkTitle,
      'bookmark-desc': BookmarkDesc,
    },
    mounted() {
      document.documentElement.style.setProperty('--main-bg-color', '#000000');
      localStorage.setItem('showBookmark', 'true');
    },
    methods: {},
  };
</script>

<style lang="scss">
  @import './styles/bookmark.scss';
</style>
