<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'

const { locale } = useI18n()

watch(
  locale,
  (newLocale) => {
    const body = document.body
    if (newLocale === 'en') {
      body.style.fontFamily = 'patrick, sans-serif'
      body.style.letterSpacing = '3px'
    } else {
      body.style.fontFamily = 'mincho, sans-serif'
      body.style.letterSpacing = ''
    }
  },
  { immediate: true },
)
</script>
