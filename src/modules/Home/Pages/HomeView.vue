<script setup>
import { defineAsyncComponent } from 'vue'

const TheWelcome = defineAsyncComponent(
  () => import('../Components/TheWelcome.vue'),
)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
