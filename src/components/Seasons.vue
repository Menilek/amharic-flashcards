<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Seasons, findKey } from '../utils/util';

const springRevealed = ref(false);
const summerRevealed = ref(false);
const autumnRevealed = ref(false);
const winterRevealed = ref(false);

const toggleReveal = (season: string) => {
    switch(season) {
        case "Tseday":
            springRevealed.value = springRevealed.value ? false : true;
            break;
        case "Bega":
            summerRevealed.value = summerRevealed.value ? false : true;
            break;
        case "Belg":
            autumnRevealed.value = autumnRevealed.value ? false : true;
            break;
        case "Kiremt":
            winterRevealed.value = winterRevealed.value ? false : true;
            break;
    }
}


const getIsWordRevealed = (digit: string) => {
    switch(digit) {
        case "Tseday":
            return springRevealed.value;
            break;
        case "Bega":
            return summerRevealed.value;
            break;
        case "Belg":
            return autumnRevealed.value;
            break;
        case "Kiremt":
            return winterRevealed.value;
            break;
    }
}

</script>

<template>
    <h2>Seasons</h2>
    <Carousel :itemsToShow="2" :wrapAround="true">
        <Slide v-for="season of Seasons" :key="season">
            <div class="carousel__item yellow" @click="toggleReveal(season)">{{!getIsWordRevealed(season) ? season : findKey(Seasons, season) }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>