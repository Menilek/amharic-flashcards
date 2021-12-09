<script setup lang="ts">
import { defineProps } from "vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    items: {
        required: true,
        type: Object
    }
})

</script>

<template>
    <h2>{{ props.title }}</h2>
    <Carousel :itemsToShow="1.5" :wrapAround="true">
        <Slide v-for="item of props.items" :key="item">
            <div class="carousel__item">{{ item }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>
