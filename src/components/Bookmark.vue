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

      <div class="bookmark-content">
        <div class="hd1">One more thing!!!</div>
        <div class="desc1">
          It’s usually hard to recall such websites when they are actually needed. <br>Bookmark it now to check whenever you need it back.
        </div>
        <button @click="goBack" class="white-btn">Okay Cool!</button>
        <img src="@/assets/mouth.svg" alt="smile" class="smile">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bookmark',
    data() {
      return {};
    },
    props: ['goBack'],
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
