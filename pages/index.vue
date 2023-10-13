<script setup>
// import 'assets/css/extra.css';
const projects_show = ref(1);
const indepth_show = ref(1);

// aside section nav
const headers = [
    "Home",
    "Projects",
    "Kalopsia",
    "Blog",
    "Insta",
    "Forum",
    "Contact"
]

// setting the header currently intesecting by reading intersecting target id
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

    // mouse light
    const blob = document.getElementById("blob");

        window.onpointermove = event => { 
        const { clientX, clientY } = event;

        // blob.animate({
        //     left: `${clientX}px`,
        //     top: `${clientY}px`
        // }, { duration: 200, fill: "forwards" });

        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
        }

})

</script>

<template>
<section class="master">
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
        <section class="this-project">
            <p class="section-title">This project</p>
            <p class="desc">Built using Nuxt, a server-side rendered framework based on Vue, utitlizing various styling techniques such as an intersection observer, css animations and GSAP - a javascript animation library. Built for speed etc</p>
        </section>
        <!-- <ProjectsOther class="section-margin"></ProjectsOther> -->
    </main>
    <aside class="aside">
        <div>
            <!-- <p>{{ currentHeader }}</p> -->

            <!-- <a v-for="(header, index) in headers" :key="header" :href="`#${header}`"
            :class="{active: header === currentHeader}">
            {{ header }}
            </a> -->

            <NuxtLink v-for="(header, index) in headers" :key="header" :to="`#${header}`"
            :class="{active: header === currentHeader}">
            {{ header }}
            </NuxtLink>
        </div>
    </aside>
    <div id="blob"></div>
    <!-- <div id="blur"></div> -->
</main>
<ContactForm id="Contact" class="contact"></ContactForm>
</section>
</template>

<style scoped>
/* .master{
    width: 100%;
} */
.main-with-aside{
    display: flex;
    position: relative;
    justify-content: center;
    /* max-width: calc(var(--max-page-width) + 200px); */
    width: 100%;
    /* margin: 0 auto; */
}
.aside{
    /* width: 140px; */
    width: 200px;
    /* width: 20%; */
    /* position: absolute; */
}
.aside > div{
    position: sticky;
    top: 80px;
    /* padding-right: 20px; */
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

/* @media() */
@media (max-width: 768px)
{
    .aside{
        display: none;
    }
    .main-with-aside{
        width: 100%;
    }
}

.index-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-page-width);
    /* width: 80%; */
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

/* .light
{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: radial-gradient(circle at var(--x) var(--y), transparent 5%, var(--purp-deep-02) 10%);
} */

@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.2;
  }
  
  to {
    rotate: 360deg;
  }
}

#blob {
  background-color: white;
  height: 300px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(to right, aquamarine, mediumpurple);
  animation: rotate 20s infinite;
  opacity: 0.5;
  /* backdrop-filter: blur(12vmax); */
  filter:blur(200px);
  z-index: -5;
}

#blur {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -4;
  backdrop-filter: blur(12vmax);
}

.this-project{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--max-page-padding);
    gap: 20px;
}

.desc{
    font-size: 20px;
    color: var(--almost-white);
    align-self: flex-start;
    font-weight: 300;
}

.contact{
    width: 100vw;
}

</style>
