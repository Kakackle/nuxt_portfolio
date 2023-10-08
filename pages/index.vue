<script setup>
// import 'assets/css/extra.css';
const projects_show = ref(1);
const indepth_show = ref(1);
const headers = [
    "Home",
    "Projects",
    "Kalopsia",
    "Blog",
    "Insta",
    "Forum"
]

const currentHeader = ref("");

onMounted(() => {
    const observer = IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            if (entry.intersectionRatio > 0) {
                currentHeader.value = entry.target.getAttribute('id');
            }
        })
    },
    {
        rootMargin: '0px 0px -90% 0px',
    })
    document.querySelectorAll('.header').forEach((section)=>{
        observer.observe(section);
    })
}) 

</script>

<template>
<main class="main-with-aside">
    <main class="index-main">
        <Hero class="hero header" id="Home"></Hero>
        <section class="section-collapsible section-margin">
            <!-- section with transition -->
            <Transition name="slide-fade">
            <Projects class="projects header" id="Projects" v-if="projects_show"></Projects>
            </Transition>
            <!-- collapsible controls -->
            <div class="collapse-controls hover" @click="projects_show = !projects_show">
                <Icon name="ion:remove-outline" color="var(--almost-white)"
                 class="collapse-icon"
                 v-if="projects_show"></Icon>
                <div class="section-closed" v-else>
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
                 v-if="indepth_show"></Icon>
                <div class="section-closed" v-else>
                    <p class="section-title">The projects in-depth</p>
                    <Icon name="ion:chevron-down-outline" color="var(--almost-white)"
                    class="collapse-icon"
                    ></Icon>
                </div>
            </div>
        </section>
        
        <ProjectsOther class="section-margin"></ProjectsOther>
    </main>
    <aside class="aside">
        <div>
            <!-- <p>{{ currentHeader }}</p> -->
            <a v-for="(header, index) in headers" :key="header" :href="`#${header}`"
            :class="{active: header === currentHeader}">
            {{ header }}
            </a>
        </div>
    </aside>
</main>
</template>

<style scoped>
.main-with-aside{
    display: flex;
}
.aside{
    width: 200px;
}
.aside > div{
    position: sticky;
    top: 80px;
    padding-left: 20px;
}

.aside > div > a{
    display: block;
    font-size: 16px;
    color: var(--almost-white);
    text-decoration: none;
    border-left: 2px solid var(--almost-white);
    padding-left: 20px;
}

.aside a.active {
    font-weight: 500;
    border-color: var(--purp-light);
    color: var(--purp-light);
}

.index-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-page-width);
    padding: 0px var(--max-page-padding);
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
