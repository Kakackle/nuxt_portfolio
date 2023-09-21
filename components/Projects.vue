<script setup>
</script>

<template>
<section class="projects-section">
    <p class="title">Most <span class="important">important</span> projects:</p>
    <div class="project-cards">
        <ProjectCard></ProjectCard>
    </div>
</section>
</template>

<style scoped>
.title{
    font-size: 32px;
    color: var(--almost-white);
    font-weight: 300;
}

.important{
    /* border-bottom: 2px solid var(--purp-soft); */
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 2px;
    text-decoration-color: var(--purp-soft);
}
</style>