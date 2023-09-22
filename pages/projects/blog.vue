<script setup>
// import {getImageUrl} from ".nuxt/composables/getImageUrl.js"
// import {getImageUrl} from "../../composables/getImageUrl.js";
const path = "Home1.png";
const tech_paths = [
    "vue1.png",
    "django1.png",
    "aws1.png",
    "drf1.png"
]
</script>

<template>
<main class="project-main">
    <p class="project-title">Django + Vue Fullstack social Blog</p>
    <div class="sections">
        <img :src="getImageUrl(path)">
        <ProjectTechStack :technologies="tech_paths"></ProjectTechStack>
        <ProjectMainFeatures></ProjectMainFeatures>
        <ProjectMainPages></ProjectMainPages>
        <ProjectImplementation></ProjectImplementation>
    </div>
</main>
</template>

<style scoped>
.project-main{
    width: 100%;
    max-width: var(--max-page-width);
    padding: 0px var(--max-page-padding);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.project-title{
    font-size: 56px;
    color: var(--purp-light);
    margin-top: 20px;
}

.sections{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    }
</style>
