<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Numbers } from '../utils/util'
</script>

<template>
    <h2>10-1000000</h2>
    <Carousel :itemsToShow="1.5" :wrapAround="true">
        <Slide v-for="number of Numbers" :key="number">
            <div class="carousel__item">{{ number }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>