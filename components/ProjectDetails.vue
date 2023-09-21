<script setup>
const getImageUrl = function(path){
    return new URL(path, import.meta.url);
}
</script>

<template>
<div class="project-div">
    <div class="project-titles">
        <p class="main-title">Fullstack Blog</p>
        <p class="sub-title">Main features:</p>
    </div>
    <div class="main-images">
        <div class="img-desc">
            <img class="main-img" :src="getImageUrl('../assets/img/projects/Home1Big.png')">
            <p class="desc">Sortable, filtered with with new suggestions</p>
        </div>
        <div class="img-desc">
            <img class="main-img" :src="getImageUrl('../assets/img/projects/Home1Big.png')">
            <p class="desc">Rich post creation options thans to markdown syntax</p>
        </div>
        <div class="img-desc">
            <img class="main-img" :src="getImageUrl('../assets/img/projects/Home1Big.png')">
            <p class="desc">Accounts, comments, authorization systems</p>
        </div>
    </div>
    <div class="steps">
        <div class="step step-1">
            <img class="step-img" :src="getImageUrl('../assets/img/projects/Home4.png')">
            <p class="desc">Sortable filtered feed with new suggestions</p>
        </div>
        <div class="step step-2">
            <img class="step-img" :src="getImageUrl('../assets/img/projects/Home4.png')">
            <p class="desc">Sortable filtered feed with new suggestions</p>
        </div>
        <div class="step step-3">
            <img class="step-img" src="../assets/img/projects/Home4.png">
            <p class="desc">Sortable filtered feed with new suggestions</p>
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
    background-color: var(--gray-light);
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