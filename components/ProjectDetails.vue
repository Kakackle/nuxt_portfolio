<script setup>
const props = defineProps(['project']);
const project = props.project;
const main_features = project.main_features;
console.log(`main_features: ${JSON.stringify(main_features)}`);
const steps = project.steps;
</script>

<template>
<div class="project-div">
    <div class="project-titles">
        <p class="main-title">{{ project.title }}</p>
        <p class="sub-title">Main features:</p>
    </div>
    <div class="main-images">
        <div class="img-desc" v-for="feature in main_features">
            <img class="main-img" :src="getImageUrl(feature.img)">
            <p class="desc">{{ feature.desc}}</p>
        </div>
    </div>
    <div class="steps">
        <div class="step step-1">
            <img class="step-img" :src="getImageUrl(steps[0].img)">
            <p class="desc">{{ steps[0].desc }}</p>
        </div>
        <div class="step step-2">
            <img class="step-img" :src="getImageUrl(steps[1].img)">
            <p class="desc">{{steps[1].desc}}</p>
        </div>
        <div class="step step-3">
            <img class="step-img" :src="getImageUrl(steps[2].img)">
            <p class="desc">{{steps[2].desc}}</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.project-div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.project-titles{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
}

.project-titles p{
    font-size: 28px;
    font-weight: 300;
}

.main-title{
    color: var(--purp-light);
    /* margin-left: 20px; */
}

.sub-title{
    color: var(--almost-white);
    margin-left: 40px;
}

.main-images{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.main-img, .step-img{
    background-color: var(--purp-dark);
    width: 300px;
    height: 400px;
    object-fit: contain;
}

.step-img{
    width: 300px;
    height: 150px;
    object-fit: cover;
}

.img-desc{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
}

.desc{
    font-size: 20px;
    color: var(--almost-white);
    font-weight: 300;
}

.steps{
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.step{
    display: flex;
    gap: 20px;
    align-items: center;
}

.step-2{
    margin-left: 40px;
}

.step-3{
    margin-left: 80px;
}
</style>