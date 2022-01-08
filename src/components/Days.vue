<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import '../assets/carousel.css';
import { Days } from '../utils/util'

const MondayRevealed = ref(false);
const TuesdayRevealed = ref(false);
const WednesdayRevealed = ref(false);
const ThursdayRevealed = ref(false);
const FridayRevealed = ref(false);
const SaturdayRevealed = ref(false);
const SundayRevealed = ref(false);

const findKey = (obj: any, value: string) => {
    return Object.keys(obj).find(key => obj[key] === value);
}

const toggle = (day: string) => {
    const dayMap = {
        Segno: () => MondayRevealed.value = MondayRevealed.value ? false : true,
        Makisegno: () => TuesdayRevealed.value = TuesdayRevealed.value ? false : true,
        Erob: () => WednesdayRevealed.value = WednesdayRevealed.value ? false : true,
        Hamus: () => ThursdayRevealed.value = ThursdayRevealed.value ? false : true,
        Arb: () => FridayRevealed.value = FridayRevealed.value ? false : true,
        Kidame: () => SaturdayRevealed.value = SaturdayRevealed.value ? false : true,
        Ehud: () => SundayRevealed.value = SundayRevealed.value ? false : true
    }
    dayMap[day as keyof typeof dayMap]()
}

const isWordRevealed = (day: string) => {
    const revealMap = {
        Segno: MondayRevealed.value,
        Makisegno: TuesdayRevealed.value,
        Erob: WednesdayRevealed.value,
        Hamus: ThursdayRevealed.value,
        Arb: FridayRevealed.value,
        Kidame: SaturdayRevealed.value,
        Ehud: SundayRevealed.value
    }
    return revealMap[day as keyof typeof revealMap];
}

const dayToShow = (day: string) => !isWordRevealed(day) ? day : findKey(Days, day);

</script>

<template>
    <h2>Days</h2>
    <Carousel :itemsToShow="2" :wrapAround="true">
        <Slide v-for="day in Days" :key="day">
            <div class="carousel__item red" @click="toggle(day)">{{ dayToShow(day) }}</div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style scoped>
</style>