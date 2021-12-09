<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Days } from '../utils/util'
</script>

<template>
    <h2>Days</h2>
    <Carousel :itemsToShow="1.5" :wrapAround="true">
        <Slide v-for="day of Days" :key="day">
            <div class="carousel__item">{{ day }}</div>
        </Slide>

        <template #addons>
      <Navigation />
      <Pagination />
    </template>
    </Carousel>
</template>

<style scoped>
</style>