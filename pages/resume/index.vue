<script setup>
</script>

<template>
<main class="resume-main">
    <iframe src="/MaciejMarkowski2023FullStack.pdf" frameborder="0" class="pdf"></iframe>
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
    width: 100%;
    height: 1080px;
}
</style>