<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Digits, findKey } from '../utils/util'

const andRevealed = ref(false);
const huletRevealed = ref(false);
const sostRevealed = ref(false);
const aratRevealed = ref(false);
const amustRevealed = ref(false);
const sidistRevealed = ref(false);
const sebatRevealed = ref(false);
const simintRevealed = ref(false);
const zetegnRevealed = ref(false);
const asurRevealed = ref(false);

const toggleReveal = (digit: string) => {
    switch(digit) {
        case "And":
            andRevealed.value = andRevealed.value ? false : true;
            break;
        case "Hulet":
            huletRevealed.value = huletRevealed.value ? false : true;
            break;
        case "Sost":
            sostRevealed.value = sostRevealed.value ? false : true;
            break;
        case "Arat":
            aratRevealed.value = aratRevealed.value ? false : true;
            break;
        case "Amust":
            amustRevealed.value = amustRevealed.value ? false : true;
            break;
        case "Sidist":
            sidistRevealed.value = sidistRevealed.value ? false : true;
            break;
        case "Sebat":
            sebatRevealed.value = sebatRevealed.value ? false : true;
            break;
        case "Simint":
            simintRevealed.value = simintRevealed.value ? false : true;
            break;
        case "Zetegn":
            zetegnRevealed.value = zetegnRevealed.value ? false : true;
            break;
        case "Asur":
            asurRevealed.value = asurRevealed.value ? false : true;
            break;
    }
}

const getIsWordRevealed = (digit: string) => {
    switch(digit) {
        case "And":
            return andRevealed.value;
            break;
        case "Hulet":
            return huletRevealed.value;
            break;
        case "Sost":
            return sostRevealed.value;
            break;
        case "Arat":
            return aratRevealed.value;
            break;
        case "Amust":
            return amustRevealed.value;
            break;
        case "Sidist":
            return sidistRevealed.value;
            break;
        case "Sebat":
            return sebatRevealed.value;
            break;
        case "Simint":
            return simintRevealed.value;
            break;
        case "Zetegn":
            return zetegnRevealed.value;
            break;
        case "Asur":
            return asurRevealed.value;
            break;
    }
}
</script>

<template>
    <h2>0-10</h2>
    <Carousel :itemsToShow="2" :wrapAround="true">
        <Slide v-for="digit of Digits" :key="digit">
            <div class="carousel__item" @click="toggleReveal(digit)">{{!getIsWordRevealed(digit) ? digit : findKey(Digits, digit) }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>