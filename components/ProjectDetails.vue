<script setup>
const props = defineProps(['project']);
const project = props.project;
const main_features = project.main_features;
const base_path = "_nuxt/static/img/projects/"
// const img_path = base_path + card.img;
const project_show = ref(1);
</script>

<template>
<section class="section-collapsible header" :id="project.id">
    <Transition name="slide-fade">
    <div class="project-div" v-if="project_show">
        <div class="project-titles">
            <p class="main-title">{{ project.title }}</p>
            <p class="sub-title">Main features:</p>
        </div>
        <div class="main-images">
            <div class="img-desc" v-for="feature in main_features">
                <img class="main-img" :src="base_path + feature.img">
                <p class="desc">{{ feature.desc}}</p>
            </div>
        </div>
        <p class="desc">{{ project.desc }}</p>
    </div>
    </Transition>
    <!-- collapsible controls -->
    <div class="collapse-controls hover" @click="project_show = !project_show">
        <Icon name="ion:remove-outline" color="var(--almost-white)"
            class="collapse-icon"
            v-if="project_show"></Icon>
        <div class="section-closed" v-else>
            <p class="section-title">{{ project.title }}</p>
            <Icon name="ion:chevron-down-outline" color="var(--almost-white)"
            class="collapse-icon"
            ></Icon>
        </div>
    </div>
</section>
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
    width: 100%;
    padding: 0 20px;
    /* align-self: flex-start; */
    /* width: 80%; */
}

.project-titles p{
    font-size: 28px;
    font-weight: 300;
    width: 95%;
    align-self: center;
}

.main-title{
    color: var(--purp-light);
    /* margin-left: 20px; */
}

.sub-title{
    color: var(--almost-white);
    /* margin-left: 40px; */
}

.main-images{
    display: flex;
    gap: 30px;
    /* row-gap: 30px; */
    flex-wrap: wrap;
    /* padding: 0 20px; */
    padding-left: 20px;;
    width: 100%;
}

.main-img, .step-img{
    background-color: var(--purp-dark);
    width: 300px;
    height: 420px;
    /* object-fit: contain; */
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
    padding-left: 10px;
    /* padding: 10px; */
}


.section-collapsible{
    width: 100%;
    position: relative;
    min-height: 40px;
    overflow: hidden;
}

.collapse-controls{
    position: absolute;
    /* right: 20px; */
    /* left: 20px; */
    top: 0px;
    background-color: var(--purp-dark-05);
    /* width: 100%; */
    /* opacity: 0.5; */
}

.collapse-icon{
    font-size: 36px;
}

.section-closed{
    display: flex;
    gap: 10px;
    /* width: 100%; */
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.8, 0.5, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
</style>