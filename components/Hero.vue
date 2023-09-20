<script setup>
</script>

<template>
    <section class="hero-section">
        <div class="left">
            <img class="hero-blob" src="../assets/img/hero_blob.svg">
            <img class="user-img" src="../assets/img/example_user.png">
        </div>
        <div class="right">
            <div class="name-div">
                <p class="name-1">MACIEJ</p>
                <p class="name-2"><Icon name="uil:github" color="black" />/kakackle></p>
                <p class="name-3">MARKOWSKI</p>
            </div>
            <p class="bio">Web dev, engineer, persistent learner, self-called musician, creative extraordianire, Automation Engineer by trade. Łódź lover</p>
            <div class="skills"></div>
        </div>
    </section>
</template>

<style scoped>
.hero-section{
    display: flex;
    width: 100%;
    max-width: var(--max-page-width);
    flex-wrap: wrap;
    height: 600px;
}

.left{
    width: 100%;
    height: 100%;
    max-width: 600px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left img{
    position: absolute;
    height: 400px;
    max-width: 600px;
}
/* FIXME: */
.right{
    width: 100%;
    display: flex;
    flex-shrink: 1;
}

p{
color: var(--almost-white);
font-size: 32px;
}
</style>