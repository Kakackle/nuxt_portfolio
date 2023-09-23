<script setup>
const props = defineProps(['features']);
const features = props.features;
</script>

<template>
    <section class="main-features">
        <p class="section-title">main features</p>
        <ul class="features-list">
            <li v-for="feat in features" class="features-item hover-underline">{{feat}}</li>
        </ul>
    </section>
</template>

<style scoped>
.main-features{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: var(--max-page-width);
    gap: 10px;
}

.features-list{
    padding: 10px 40px;
    background-color: var(--purp-dark);
}

.features-item{
    color: var(--almost-white);
}
</style>