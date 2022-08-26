<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Numbers, findKey } from '../utils/util';

const tenRevealed = ref(false);
const twentyRevealed = ref(false);
const thirtyRevealed = ref(false);
const fortyRevealed = ref(false);
const fiftyRevealed = ref(false);
const sixtyRevealed = ref(false);
const seventyRevealed = ref(false);
const eightyRevealed = ref(false);
const ninetyRevealed = ref(false);
const hundredRevealed = ref(false);
const thousandRevealed = ref(false);
const millionRevealed = ref(false);

const toggleReveal = (number: string) => {
    switch(number) {
        case "Asur":
            tenRevealed.value = tenRevealed.value ? false : true;
            break;
        case "Haya":
            twentyRevealed.value = twentyRevealed.value ? false : true;
            break;
        case "Selasa":
            thirtyRevealed.value = thirtyRevealed.value ? false : true;
            break;
        case "Arba":
            fortyRevealed.value = fortyRevealed.value ? false : true;
            break;
        case "Hamsa":
            fiftyRevealed.value = fiftyRevealed.value ? false : true;
            break;
        case "Silsa":
            sixtyRevealed.value = sixtyRevealed.value ? false : true;
            break;
        case "Seba":
            seventyRevealed.value = seventyRevealed.value ? false : true;
            break;
        case "Semanya":
            eightyRevealed.value = eightyRevealed.value ? false : true;
            break;
        case "Zetena":
            ninetyRevealed.value = ninetyRevealed.value ? false : true;
            break;
        case "Meto":
            hundredRevealed.value = hundredRevealed.value ? false : true;
            break;
        case "Shih":
            thousandRevealed.value = thousandRevealed.value ? false : true;
            break;
        case "Miliyon":
            millionRevealed.value = millionRevealed.value ? false : true;
            break;
    }
}

const getIsWordRevealed = (digit: string) => {
    switch(digit) {
        case "Asur":
            return tenRevealed.value;
            break;
        case "Haya":
            return twentyRevealed.value;
            break;
        case "Selasa":
            return thirtyRevealed.value;
            break;
        case "Arba":
            return fortyRevealed.value;
            break;
        case "Hamsa":
            return fiftyRevealed.value;
            break;
        case "Silsa":
            return sixtyRevealed.value;
            break;
        case "Seba":
            return seventyRevealed.value;
            break;
        case "Semanya":
            return eightyRevealed.value;
            break;
        case "Zetena":
            return ninetyRevealed.value;
            break;
        case "Meto":
            return hundredRevealed.value;
            break;
        case "Shih":
            return thousandRevealed.value;
            break;
        case "Miliyon":
            return millionRevealed.value;
            break;
    }
}

</script>

<template>
    <h2>10-1000000</h2>
    <Carousel :itemsToShow="2" :wrapAround="true">
        <Slide v-for="number of Numbers" :key="number">
            <div class="carousel__item black" @click="toggleReveal(number)">{{!getIsWordRevealed(number) ? number : findKey(Numbers, number) }}</div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>