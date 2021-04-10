<template>
  <ThemeSwitcher :theme="theme" @click="toggleDark" />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import { theme } from '@/store'
import { useToggle } from '@vueuse/shared'

export default defineComponent({
  name: 'App',
  components: {
    ThemeSwitcher
  },
  setup () {
    return {
      theme: theme,
      toggleDark: useToggle(theme)
    }
  }
})
</script>

<style lang="scss">
@import '@/styles/normalize.scss';
@import '@/styles/variables.scss';
@import 'microtip/microtip';

* {
  animation-duration: 0.2ms;
  animation-iteration-count: 1;
  transition-duration: 0.2ms;
  scroll-behavior: auto;
  transition: all .18s;
}

html {
  background-color: $dark;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23181818' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 30%;
  background-position: 25% 75%;
  background-attachment: fixed;
}

#app {
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 100vh auto;

  h1 {
    color: $light;
    font-family: flegrei, sans-serif;
    font-size: 3.5rem;
    font-weight: 400;
  }
  h2 { color: $primary; }
  p { color: $light; font-size: 1rem; }
  a { color: $primary; }

}

.content {
  grid-column: 2/11;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem;
}

#landing {
  grid-row: 1;
  align-items: flex-start;
  flex-flow: column;
}

#portfolio {
  grid-row: 2;
  align-items: flex-start;
  flex-flow: column;
}

[aria-label][role~="tooltip"]::after {
  background: $primary;
  color: $dark;
}
[role~="tooltip"][data-microtip-position|="bottom"]::before {
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22%23E9B44C%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;
}
[role~="tooltip"][data-microtip-position|="top"]::before {
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22%23E9B44C%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;
}

@import '@/styles/media-queries.scss';
@import '@/styles/themes.scss';
</style>
