<script setup>
</script>

<template>
    <section class="projects-depth-section">
        <p class="section-title">The projects in-<span class="title-important">depth</span></p>
        <div class="projects">
            <ProjectDetails></ProjectDetails>
            <ProjectDetails></ProjectDetails>
        </div>
    </section>
</template>

<style scoped>
.projects-depth-section{
    display: flex;
    flex-direction: column;
    max-width: var(--max-page-width);
    width: 100%;
    gap: 20px;
    align-items: center;
}
.projects{
    width: 100%;
    padding: 0 var(--max-page-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}
</style>