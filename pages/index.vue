<script setup>
// import 'assets/css/extra.css';
const projects_show = ref(1);
const indepth_show = ref(1);
</script>

<template>
    <main class="index-main">
        <Hero class="hero section-margin"></Hero>
        <section class="section-collapsible section-margin">
            <Transition name="slide-fade">
            <Projects class="projects" v-if="projects_show"></Projects>
            </Transition>
            <div class="collapse-controls hover" @click="projects_show = !projects_show">
                <Icon name="ion:remove-outline" color="var(--almost-white)"
                 class="collapse-icon"
                 v-if="projects_show"></Icon>
                <div class="section-closed" v-else>
                    <!-- <p class="section-title">Most <span class="title-important"> important</span>projects</p> -->
                    <p class="section-title">Most important projects</p>
                    <Icon name="ion:chevron-down-outline" color="var(--almost-white)"
                    class="collapse-icon"
                    ></Icon>
                </div>

            </div>
        </section>
        <section class="section-collapsible section-margin">
            <Transition name="slide-fade">
                <ProjectsInDepth v-if="indepth_show"></ProjectsInDepth>
            </Transition>
            <div class="collapse-controls hover" @click="indepth_show = !indepth_show">
                <Icon name="ion:remove-outline" color="var(--almost-white)"
                 class="collapse-icon"
                 v-if="projects_show"></Icon>
                <div class="section-closed" v-else>
                    <!-- <p class="section-title">Most <span class="title-important"> important</span>projects</p> -->
                    <p class="section-title">The projects in-depth</p>
                    <Icon name="ion:chevron-down-outline" color="var(--almost-white)"
                    class="collapse-icon"
                    ></Icon>
                </div>

            </div>
        </section>
        
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
.section-collapsible{
    width: 100%;
    position: relative;
    min-height: 40px;
    overflow: hidden;
}

.collapse-controls{
    position: absolute;
    /* right: 20px; */
    left: 20px;
    top: 0px;
    background-color: var(--purp-dark);
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
