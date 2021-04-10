<template>
  <div class="landing-container">
    <h1 class="landing-title">Rasmus Gerdin</h1>
    <h2>Node.js & web developer, photographer, and livestream engineer.</h2>
  </div>
  <div class="social-icons">
    <a id="social-link" href="mailto:rasmus@rasmusgerdin.com" target="_blank">
      <fa :icon="['fas', 'envelope']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://twitter.com/rasmusgerdin_/" target="_blank">
      <fa :icon="['fab', 'twitter']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://github.com/rasmusgerdin/" target="_blank">
      <fa :icon="['fab', 'github']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://unsplash.com/@rasmusgerdin/" target="_blank">
      <fa :icon="['fab', 'unsplash']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://www.linkedin.com/in/rasmusgerdin/" target="_blank">
      <fa :icon="['fab', 'linkedin-in']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="#" aria-label="rasmus#0001" data-microtip-position="bottom" role="tooltip">
      <fa :icon="['fab', 'discord']" transform="shrink-7" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://www.instagram.com/rasmusgerdin_/" target="_blank">
      <fa :icon="['fab', 'instagram']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://t.me/rasmusgerdin/" target="_blank">
      <fa :icon="['fab', 'telegram-plane']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://open.spotify.com/user/raaaasmus" target="_blank">
      <fa :icon="['fab', 'spotify']" transform="shrink-7" :mask="['fas', 'square']" />
    </a>
    <a id="social-link" href="https://www.twitch.tv/rasmusgerdin" target="_blank">
      <fa :icon="['fab', 'twitch']" transform="shrink-6" :mask="['fas', 'square']" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Landing'
})
</script>

<style scoped lang='scss'>
@import '@/styles/normalize.scss';
@import '@/styles/variables.scss';

.landing-container {
  display: flex;
  flex-flow: column;
  margin-bottom: 3rem;

  h1 {
    font-size: 4.5rem !important;
  }

  h2 { margin: .75rem 0;}
}

.landing-title {
  margin: 0;
}

.social-icons {
  color: $light;
  font-size: 2.5rem;
  display: flex;
  align-items: center;

  #social-link {
    color: $light;
    margin: 0 12px;

    &:first-child {
      margin: 0;
      margin-right: 12px;
    }

    &:hover,
    &:focus-within,
    &:active {
      color: $primary;

      svg {
        transform: translateY(-3px);
      }
    }
  }
}

@import '@/styles/media-queries.scss';
</style>
