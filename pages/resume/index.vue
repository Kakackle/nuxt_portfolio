<script setup>
// import VuePdfEmbed from 'vue-pdf-embed';
</script>

<template>
<main class="resume-main">
    <!-- <img class="resume-image" src="../../assets/img/resume.png"> -->
    <!-- <vue-pdf-embed source="../../static/devcv_experience.pdf" class="pdf"/> -->
    <!-- <vue-pdf-embed source="https://github.com/Kakackle/latex_resume_templates/blob/main/devcv/devcv_experience.pdf?raw=true " class="pdf"/> -->
    <!-- <iframe src="../../assets/devcv_experience.pdf" frameborder="0"></iframe> -->
    <iframe src="/devcv_experience.pdf" frameborder="0" class="pdf"></iframe>
</main>
</template>

<style scoped>
.resume-main{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--max-page-width);
    width: 100%;
    margin: 0 auto;
    padding: 20px;
}
.resume-image{
    width: 100%;
    object-fit: contain;
}
.pdf{
    /* width: var(--max-page-width); */
    width: 100%;
    /* height: 100%; */
    height: 1080px;
}
</style>