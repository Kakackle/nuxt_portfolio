<script setup>
import cards from "../cards.json";
</script>

<template>
<section class="projects-section">
    <p class="section-title">Most <span class="title-important">important</span> projects:</p>
    <div class="project-cards">
            <ProjectCard v-for="(card, index) in cards" :card="card"></ProjectCard>
    </div>
</section>
</template>

<style scoped>
.projects-section{
    width: 90%;
    max-width: var(--max-page-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
}

.project-cards{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 30px;
}
</style>