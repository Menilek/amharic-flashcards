<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Digits } from '../utils/util'
</script>

<template>
    <h2>0-10</h2>
    <Carousel :itemsToShow="1.5" :wrapAround="true">
        <Slide v-for="digit of Digits" :key="digit">
            <div class="carousel__item">{{ digit }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>