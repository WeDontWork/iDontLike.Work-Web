<template>
  <div>
    <bookmark-view v-if="showBookmark" :goBack=goBack></bookmark-view>

    <div class="container" v-if="showHome">
      <a class="product-hunt" href="https://www.producthunt.com/posts/i-don-t-like-work" target="_blank" rel="noopener">
        We are on Product Hunt
      </a>
      <a href="https://www.producthunt.com/posts/i-don-t-like-work" target="_blank" class="kitty hidden-xs" rel="noopener">
        <img src="@/assets/kitty2.png" alt="kitty" class="kitty">
      </a>
      <div class="cannon hidden-xs">
        <div class="cannon__path cannon__path--sm cannon__path--angle-2">
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-1"></div>
          <div class="cannon__confetti-spacer"></div>
        </div>
        <div class="cannon__path cannon__path--md cannon__path--angle-1">
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-2"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
          <div class="cannon__confetti-spacer"></div>
        </div>
        <div class="cannon__path cannon__path--lg cannon__path--angle0">
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
          <div class="cannon__confetti-spacer"></div>
        </div>
        <div class="cannon__path cannon__path--md cannon__path--angle1">
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-4"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
          <div class="cannon__confetti-spacer"></div>
        </div>
        <div class="cannon__path cannon__path--sm cannon__path--angle2">
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-2"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-3"></div>
          <div class="cannon__confetti cannon__confetti--flake cannon__confetti--color-4"></div>
          <div class="cannon__confetti cannon__confetti--ribbon cannon__confetti--color-1"></div>
          <div class="cannon__confetti-spacer"></div>
        </div>
      </div>
      <!-- Header -->
      <div class="header">
        <div>
          <a>
            <img src="@/assets/logo.svg" alt="logo" class="logo">
          </a>
        </div>
        <div class="text-right">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhkzp_cKi2lL_jSFrQ1TlTK_6LlE8APTdRbYt9yZrljkHsqA/viewform" target="_blank" class="link add-reason" rel="noopener">
            Got a creative reason ? Share with us !
          </a>
        </div>
      </div>
      <!-- Header end -->

      <!-- Main content -->
      <div class="main-content">
        <div v-show="step1">
          <div class="title1">
            The ultimate productivity tool you have been waiting for is here!<br>Go Work From Home ;-)
          </div>
          <button class="white-btn" @click="showReasons">Show me a reason</button>
        </div>
        <div v-show="step2">
          <div class="msg-box" v-clipboard:copy="reasons[random] && reasons[random].text" v-clipboard:success="onCopy">
            <span id="msg">{{reasons[random] && reasons[random].text}}</span>
          </div>
          <div class="copy-text" v-clipboard:copy="reasons[random] && reasons[random].text" v-clipboard:success="onCopy">
            <span v-if="copied">Copied!</span>
            <span v-else>Click to copy text</span>
          </div>
          <button class="white-btn" @click="getNewReason">Show me another reason</button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhkzp_cKi2lL_jSFrQ1TlTK_6LlE8APTdRbYt9yZrljkHsqA/viewform" target="_blank" class="link add-reason2">Got a creative reason? Share with us !</a>
        </div>
      </div>
      <!-- Main content end -->

      <!-- Footer -->
      <div class="footer">
        <div class="left-content">
          <div class="hd1">Also experience it on</div>
          <div class="gass">
            <a href="https://play.google.com/store/apps/details?id=work.idontlike.idontlikework" target="_blank">
              <img src="@/assets/playstore.svg" alt="playstore" class="foo-logo">
            </a>
            <img src="@/assets/assistance.svg" alt="gassistance" class="foo-logo ga-logo">
            <div class="tooltip">
              <img src="@/assets/assistance.svg" alt="gassistance" class="foo-logo">
              <br>
              Invoke Google Assistant on your phone or Google Home and try saying:<br><br>
              "Ask I don’t like work"<br><br>
              "Let me talk to I don’t like work"
            </div>
          </div>
        </div>
        <div></div>
        <div class="right-content">
          <div class="hd1">Share only with close friends</div>
          <img src="@/assets/fb.svg" alt="playstore" class="foo-social" @click="socialFb()">
          <img src="@/assets/tw.svg" alt="gassistance" class="foo-social" @click="socialTwitter()">
        </div>
      </div>
      <!-- Footer end -->
  </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueClipboard from 'vue-clipboard2';
  import bookmarkView from '@/components/Bookmark';
  // import router from '@/router';

  Vue.use(VueClipboard);

  export default {
    name: 'Home',
    data() {
      return {
        reasons: [],
        random: 0,
        colorList: ['#ffab40', '#db504a', '#40A379', '#F4555D', '#3A7290', '#795548', '#607D8B', '#9CCC65', '#78586F'],
        colorNumber: 0,
        copied: false,
        step1: true,
        step2: false,
        showHome: true,
        showBookmark: false,
      };
    },
    components: {
      bookmarkView,
    },
    async created() {
      try {
        const response = await axios.get('https://s3.ap-south-1.amazonaws.com/idontlikework/wfh-reasons.json');
        this.reasons = this.shuffle(response.data);
        this.random = this.getRandomInt(1, this.reasons.length);
      } catch (e) {
        // console.log(e);
      }
      this.setBgColor();
    },
    beforeMount() {
      document.addEventListener('mouseout', this.bookmarkListen);
    },
    mounted() {
      this.colorList = this.shuffle(this.colorList);
    },
    beforeDestroy() {
      document.removeEventListener('mouseout', this.bookmarkListen);
    },
    methods: {
      getNewReason() {
        if (this.random === this.reasons.length - 1) {
          this.random = 0;
        } else {
          this.random += 1;
        }
        this.setBgColor();
        this.copied = false;
      },
      setBgColor() {
        if (this.colorNumber === this.colorList.length - 1) {
          this.colorNumber = 0;
        } else {
          this.colorNumber += 1;
        }
        document.documentElement.style.setProperty('--main-bg-color', this.colorList[this.colorNumber]);
      },
      onCopy() {
        this.copied = true;
      },
      showReasons() {
        this.step2 = true;
        this.step1 = false;
        this.setBgColor();
      },
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
      shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          /* eslint no-param-reassign: off */
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      },
      bookmarkListen(e) {
        const windowsize = e.clientX >= window.innerWidth || e.clientY >= window.innerHeight;
        if (e.clientY <= 0 || e.clientX <= 0 || windowsize) {
          if (localStorage.getItem('showBookmark') == null) {
            this.showHome = false;
            this.showBookmark = true;
          }
        }
      },
      goBack() {
        this.showHome = true;
        this.showBookmark = false;
        this.setBgColor();
      },
      socialFb() {
        window.open(
          'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fidontlike.work%2F',
          'yyyyy',
          'width=500,height=500,resizable=no,toolbar=no,menubar=no,location=no,status=no',
        );
      },
      socialTwitter() {
        window.open(
          'http://twitter.com/share?text=Check out the awesome Work From Home Reason Generator&url=https://idontlike.work',
          'yyyyy',
          'width=500,height=500,resizable=no,toolbar=no,menubar=no,location=no,status=no',
        );
      },
    },
  };
</script>

<style lang="scss">
  @import './styles/home.scss';
</style>
