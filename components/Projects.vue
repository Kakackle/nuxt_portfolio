<script setup>
const cards = [
    {
        img: "Home1.png",
        desc: "Fully functional account-based blog composed of a Vue frontend and a Django REST backend"
    },
    {
        img: "jutub1.png",
        desc: ""
    },
    {
        img: "sklep1.png",
        desc: ""
    },
    {
        img: "",
        desc: ""
    },
    {
        img: "",
        desc: "...and more to come!"
    },
]
</script>

<template>
<section class="projects-section">
    <p class="section-title">Most <span class="title-important">important</span> projects:</p>
    <div class="project-cards">
        <ProjectCard v-for="(card, index) in cards" :card_img="card.img"
        :card_desc="card.desc"></ProjectCard>
    </div>
</section>
</template>

<style scoped>
.projects-section{
    width: 100%;
    max-width: var(--max-page-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.project-cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    width: 100%;
    justify-content: center;
    row-gap: 20px;
}
</style>