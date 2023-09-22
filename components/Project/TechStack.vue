<script setup>
const props = defineProps(['technologies']);
const techs = props.technologies;
</script>

<template>
    <p class="section-title project-section-title">Tech Stack</p>
    <div class="tech-div">
        <img class="tech-img" v-for="tech in techs" :src="getImageUrl(tech)">
    </div>
</template>

<style scoped>
.project-section-title{
    align-self: flex-start;
}

.tech-div{
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    background-color: var(--purp-dark);
    height: 100px;
}

.tech-img{
    height: 70px;
    width: 70px;
    /* max-height: 70px; */
}
</style>