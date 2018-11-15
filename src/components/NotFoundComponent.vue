<template>
  <error-container>
    <div class="text-right">
      <img src="@/assets/octo.svg" alt="octopussy">
    </div>
    <div class="text-center">
      <img src="@/assets/logo.svg" alt="octopussy" class="logo">
      <br>
      <div class="error-text">
        Looks like one of the page you're looking for<br>
        is taking a Break!
      </div>
      <router-link :to="`/`" tag="button" class="orange-btn">Home</router-link>
    </div>
  </error-container>
</template>

<script>
  import styled from 'vue-styled-components';

  const ErrorContainer = styled.div`
    display: grid;
    grid-template-columns: 70fr 100fr;
    align-items: center;
    height: 80vh;
    .logo {
      filter: invert(100%);
      width: 150px;
      margin-top: 30px;
    }
    .error-text {
      font-size: 18px;
      font-weight: 300;
      margin-top: 30px;
      line-height: 1.5;
    }
    .orange-btn {
      background-image: linear-gradient(-90deg,#ff9966,#ff5e62 50%,#ff9966);
      background-size: 200% auto;
      border: none;
      border-radius: 3px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.3);
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: 300;
      height: 50px;
      outline: none;
      padding: 10px 30px;
      text-transform: uppercase;
      transition: all .17s linear;
      margin-top: 30px;
      &:hover {
        background-position: 100%;
        box-shadow: none;
      }
      &:active {
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.3);
      }
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }
  `;

  export default {
    name: 'NotFoundComponent',
    components: {
      'error-container': ErrorContainer,
    },
    mounted() {
      document.documentElement.style.setProperty('--main-bg-color', '#ffffff');
    },
  };
</script>