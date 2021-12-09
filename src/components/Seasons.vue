<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Seasons } from '../utils/util'
</script>

<template>
    <h2>Seasons</h2>
    <Carousel :itemsToShow="1.5" :wrapAround="true">
        <Slide v-for="season of Seasons" :key="season">
            <div class="carousel__item">{{ season }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>