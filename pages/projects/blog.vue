<script setup>
// import {getImageUrl} from ".nuxt/composables/getImageUrl.js"
// import {getImageUrl} from "../../composables/getImageUrl.js";
const path = "projects/Home1.png";
const tech_paths = [
    "skills/vue1.png",
    "skills/django1.png",
    "skills/aws1.png",
    "skills/drf1.png"
]

const main_features = [
    "user system with authorization and view protection",
    "home and specified pages listing posts",
    "filtering and sorting by criteria such as date, views, ...",
    "Markdown post creation with the ability to upload and place images mid-post",
]

const pages = [
    {
        name: 'Home',
        path: 'projects/Home1.png',
        desc: 
            ['dynamic navbar',
             'post with filtering options',
            'self-changing banner?']
    },
    {
        name: 'post creation',
        path: 'projects/Home1.png',
        desc: 
            ['dynamic navbar',
             'post with filtering options',
            'self-changing banner?']
    },
    {
        name: 'Smth',
        path: 'projects/Home1.png',
        desc: 
            ['dynamic navbar',
             'post with filtering options',
            'self-changing banner?']
    },
]

const technical  = [
    {
        title: "user system with authorization and view protection",
        subtitle: 'yeah something',
        desc: [
            'dynamic navbar',
             'post with filtering options',
            'self-changing banner?'
        ],
        img: ''
    },
    {
        title: "user system with authorization and view protection",
        subtitle: 'yeah something',
        desc: [
            'dynamic navbar',
             'post with filtering options',
            'self-changing banner?'
        ],
        img: ''
    },
]

</script>

<template>
<main class="project-main">
    <p class="project-title">Django + Vue Fullstack social Blog</p>
    <div class="sections">
        <img :src="getImageUrl(path)">
        <ProjectTechStack :technologies="tech_paths"></ProjectTechStack>
        <ProjectMainFeatures :features="main_features"></ProjectMainFeatures>
        <ProjectMainPages :pages="pages"></ProjectMainPages>
        <ProjectImplementation :details="technical"></ProjectImplementation>
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
