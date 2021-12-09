<script setup lang="ts">

import Carousel from './components/Carousel.vue'
import { Day, Month, Season, Digits, Tens } from './utils/util'

</script>

<template>
  <Carousel title="Days" :items="Day" />

  <Carousel title="Months" :items="Month" />

  <Carousel title="Seasons" :items="Season" />

  <Carousel title="0-10" :items="Digits" />

  <Carousel title="10-1000000" :items="Tens" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
