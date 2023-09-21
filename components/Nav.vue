<script setup>
</script>

<template>
    <nav class="nav">
        <div class="nav-div">
            <a ref="#" class="logo">LOGO</a>
            <ul class="nav-links">
                <li class="link"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="link"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="link"><NuxtLink to="/projects">Projects</NuxtLink></li>
                <li class="link"><NuxtLink to="/other">Other</NuxtLink></li>
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
    height: 60px;
    /* background-color: var(--purp-deep); */
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
}

.logo, .link{
    color: var(--almost-white);
    font-size: 24px;
    text-decoration: none;
    list-style: none;
}

.link a{
    color: inherit;
    font-size: 24px;
}

.link a:link, .link a:visited{
    text-decoration: none;
}
/* TODO: ehhh, juz nie dziala stylizacja aktywnego linku */
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
.logo{
    font-weight: 500px;
    font-size: 28px;
    padding: 2px 40px;
    border: 2px solid var(--almost-white);
}

</style>