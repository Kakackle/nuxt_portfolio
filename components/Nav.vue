<script setup>
</script>

<template>
    <nav class="nav">
        <div class="nav-div">
            <a ref="#" class="logo">LOGO</a>
            <ul class="nav-links">
                <li class="link"><NuxtLink class="link" to="/">Home</NuxtLink></li>
                <li class="link"><NuxtLink class="link" to="/about">About</NuxtLink></li>
                <li class="link"><NuxtLink class="link" to="/resume">Resume</NuxtLink></li>
                <!-- <li class="link"><NuxtLink class="link" to="/projects">Projects</NuxtLink></li> -->
                <!-- <li class="link"><NuxtLink to="/other">Other</NuxtLink></li> -->
                <!-- <li class="link"><NuxtLink to="/projects/blog">Blog</NuxtLink></li> -->
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.nav{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    /* background-color: var(--purp-deep); */
    /* filter: opacity(0.5); */
    background-color: var(--purp-deep-02);
    backdrop-filter: blur(2px);
    position: sticky;
    top: 0px;
    z-index: 99;
    width: 100%;
}
.nav-div{
    width: 100%;
    max-width: var(--max-page-width);
    display: flex;
    justify-content: space-between;
    padding: 0px var(--max-page-padding);
}

.nav-links{
    display: flex;
    align-items: center;
    gap: 20px;
    /* text-decoration: none; */
    list-style: none;
}

.logo, .link{
    color: var(--almost-white);
    font-size: 24px;
    text-decoration: none;
    list-style: none;
}

.link:hover{
    transform: scale(1.05);
}

/* .router-link-active{
    color: var(--purp-soft);
} */

.link.router-link-active{
    color: var(--purp-soft);
}


.logo{
    font-weight: 500px;
    font-size: 28px;
    padding: 0px 40px;
    border: 2px solid var(--almost-white);
}

@media (max-width: 760px)
{
    .logo, .link{
        font-size: 18px;
    }
}

</style>