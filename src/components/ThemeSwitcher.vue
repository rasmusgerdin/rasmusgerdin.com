<template>
  <button class="theme-switcher">
    <fa v-if="theme" :icon="['fas', 'glasses']" />
    <fa v-else :icon="['fas', 'sunglasses']" />

    <span>{{ theme ? ' Dark': ' Light' }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ThemeSwitcher',
  props: {
    theme: Boolean
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/normalize.scss';
@import '@/styles/variables.scss';

.theme-switcher {
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  box-shadow: 0 3px 6px #00000011, 0 3px 6px #00000023;
  color: $dark;
  background-color: $primary;
  cursor: pointer;
  min-width: 84px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
}
</style>
