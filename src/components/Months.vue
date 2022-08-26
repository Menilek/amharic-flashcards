<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Months, findKey } from '../utils/util'

const septemberRevealed = ref(false);
const octoberRevealed = ref(false);
const novemberRevealed = ref(false);
const decemberRevealed = ref(false);
const januaryRevealed = ref(false);
const februaryRevealed = ref(false);
const marchRevealed = ref(false);
const aprilRevealed = ref(false);
const mayRevealed = ref(false);
const juneRevealed = ref(false);
const julyRevealed = ref(false);
const augustRevealed = ref(false);
const pagumeRevealed = ref(false);

const toggleReveal = (month: string) => {
    switch(month) {
        case "Meskerem":
            septemberRevealed.value = septemberRevealed.value ? false : true;
            break;
        case "Tikimt":
            octoberRevealed.value = octoberRevealed.value ? false : true;
            break;
        case "Hidar":
            novemberRevealed.value = novemberRevealed.value ? false : true;
            break;
        case "Tahsas":
            decemberRevealed.value = decemberRevealed.value ? false : true;
            break;
        case "Tir":
            januaryRevealed.value = januaryRevealed.value ? false : true;
            break;
        case "Yekatit":
            februaryRevealed.value = februaryRevealed.value ? false : true;
            break;
        case "Megabit":
            marchRevealed.value = marchRevealed.value ? false : true;
            break;
        case "Miyazya":
            aprilRevealed.value = aprilRevealed.value ? false : true;
            break;
        case "Ginbot":
            mayRevealed.value = mayRevealed.value ? false : true;
            break;
        case "Sene":
            juneRevealed.value = juneRevealed.value ? false : true;
            break;
        case "Hamle":
            julyRevealed.value = julyRevealed.value ? false : true;
            break;
        case "Nehase":
            augustRevealed.value = augustRevealed.value ? false : true;
            break;
        case "Pagume":
            pagumeRevealed.value = pagumeRevealed.value ? false : true;
            break;
    }
}

const getIsWordRevealed = (month: string) => {
    switch(month) {
        case "Meskerem":
            return septemberRevealed.value;
            break;
        case "Tikimt":
            return octoberRevealed.value;
            break;
        case "Hidar":
            return novemberRevealed.value;
            break;
        case "Tahsas":
            return decemberRevealed.value;
            break;
        case "Tir":
            return januaryRevealed.value;
            break;
        case "Yekatit":
            return februaryRevealed.value;
            break;
        case "Megabit":
            return marchRevealed.value;
            break;
        case "Miyazya":
            return aprilRevealed.value;
            break;
        case "Ginbot":
            return mayRevealed.value;
            break;
        case "Sene":
            return juneRevealed.value;
            break;
        case "Hamle":
            return julyRevealed.value;
            break;
        case "Nehase":
            return augustRevealed.value;
            break;
        case "Pagume":
            return pagumeRevealed.value;
            break;
    }
}

</script>

<template>
    <h2>Months</h2>
    <Carousel :itemsToShow="2" :wrapAround="true">
        <Slide v-for="month of Months" :key="month">
            <div class="carousel__item" @click="toggleReveal(month)">{{!getIsWordRevealed(month) ? month : findKey(Months, month) }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>