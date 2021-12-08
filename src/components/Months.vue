<script setup lang="ts">

import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { amharicMonths } from '../utils/util'

</script>

<template>
    <Carousel :itemsToShow="3.95" :wrapAround="true">
        <Slide v-for="month of amharicMonths" :key="month">
            <div class="carousel__item">{{ month }}</div>
        </Slide>

        <template #addons>
      <Navigation />
      <Pagination />
    </template>
    </Carousel>
</template>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
