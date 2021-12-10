<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Months } from '../utils/util'
</script>

<template>
    <h2>Months</h2>
    <Carousel :itemsToShow="2" :wrapAround="true">
        <Slide v-for="month of Months" :key="month">
            <div class="carousel__item green">{{ month }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>