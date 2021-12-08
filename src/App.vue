<script setup lang="ts">
import Days from './components/Days.vue'
import Months from './components/Months.vue'
import Seasons from './components/Seasons.vue'
</script>

<template>
  <Days />
  <Months />
  <Seasons />
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
