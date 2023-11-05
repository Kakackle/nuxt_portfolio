<script setup>
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

// setting the header currently intersecting by reading intersecting target id (of the header)
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
    </main>
    <aside class="aside">
        <div>
            <NuxtLink v-for="(header, index) in headers" :key="header" :to="`#${header}`"
            :class="{active: header === currentHeader}">
            {{ header }}
            </NuxtLink>
        </div>
    </aside>
    <div id="blob"></div>
</main>
<ContactForm id="Contact" class="contact"></ContactForm>
</section>
</template>

<style scoped>
.main-with-aside{
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
}
.aside{
    width: 15%;
}
.aside > div{
    position: sticky;
    top: 80px;
    padding-right: 20px;
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
    left: 20px;
    top: 0px;
    background-color: var(--purp-dark-05);
}

.section-closed{
    display: flex;
    gap: 10px;
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
  filter:blur(200px);
  z-index: -5;
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
