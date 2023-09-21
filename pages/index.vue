<script setup>
// import 'assets/css/extra.css';
</script>

<template>
    <main class="index-main">
        <Hero class="hero section-margin"></Hero>
        <Projects class="projects section-margin"></Projects>
        <ProjectsInDepth class="section-margin"></ProjectsInDepth>
        <ProjectsOther class="section-margin"></ProjectsOther>
    </main>
    <!-- <p>Also, here's an icon: <Icon name="uil:github" color="black" /></p> -->
</template>

<style scoped>
.index-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100%; */
    max-width: var(--max-page-width);
    padding: 0px var(--max-page-padding);
    /* background-color: var(--purp-deep); */
    margin: 0 auto;
}
</style>
