<script setup lang="ts">

import Days from '../components/Days.vue'
import Months from '../components/Months.vue'
import Seasons from '../components/Seasons.vue'
import Digits from '../components/Digits.vue'
import Numbers from '../components/Numbers.vue'

</script>

<template>
  <Days />
  <Months />
  <Seasons />
  <Digits />
  <Numbers />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
