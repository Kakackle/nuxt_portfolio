<script setup>

</script>

<template>
<main class="hero-main">
    <div class="hero-left">
        <!-- <img class="user-blog" src="_nuxt/assets/img/hero_blob.svg">
        <img class="user-img" src="_nuxt/assets/img/example_user.png"> -->
        <img class="user-blog" src="/img/hero_blob.svg">
        <img class="user-img" src="/img/about/img1.png">
    </div>
    <div class="hero-right">
        <p class="name">MACIEJ MARKOWSKI</p>
        <div class="links">
            <a class="social link" href="https://github.com/Kakackle" target="_blank"
                ><Icon name="uil:github" color="var(--almost-white)"/>/kakackle</a>
            <a class="social link" href="https://www.instagram.com/kakackle2g" target="_blank"
                ><Icon name="uil:instagram" color="var(--almost-white)"/>/kakackle2g</a>    
            <a class="social link" href="https://www.youtube.com/channel/UCFmD5JSGl4l9Y4MnD6KT8OA" target="_blank"
                ><Icon name="uil:youtube" color="var(--almost-white)"/>/kakackle</a>
            <a class="social link" href="https://www.linkedin.com/in/maciej-markowski-65407b211/" target="_blank"
                ><Icon name="uil:linkedin" color="var(--almost-white)"/></a>
        </div>
        <p class="desc-1">I am a technology-curious, breadth-first, mostly Python focused programmer, captivated by the creative aspect of development and system design, especialy in Web dev, but open to anything. I love discovering and learning about new things, self-development and completing creative, complex, attention-demanding tasks. I have a MSc. degree in Automation Theory and Robot Control at TUL under my belt, mainly interested in the robotics part. In my free time I listen to various genres of music, mostly jazz, oldschool hiphop and soul, watch arthouse movies, learn instruments (guitar, bass and piano) and create some music of my own.</p>    
    </div>
</main>
</template>

<style scoped>
.hero-main{
    display: flex;
    max-width: var(--max-page-width);
    width: 100%;
    margin: 0 auto;
    gap: 40px;
    flex-wrap: wrap;
    /* height: 100%; */
    min-height: 400px;
    justify-content: center;
}

.hero-left{
    max-width: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 400px;
}

.user-blog{
    position: absolute;
    width: 100%;
}

.user-img{
    position: absolute;
    height: 360px;
    width: 360px;
    border-radius: 50%;
}


.hero-right{
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
}

.name{
    font-size: 48px;
    color: var(--almost-white);
    text-decoration: underline;
    text-decoration-color: var(--purp-light);
    text-underline-offset: 4px;
    text-decoration-thickness: 4px;
    /* text-decoration-style:wavy; */
    letter-spacing: -1px;   
}

.link{
    text-decoration: underline;
    text-underline-offset: 2px;
    color: var(--almost-white);
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 2px;
}

.link:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.3s;
    color: var(--purp-light);
}

.links{
    display: flex;
    gap: 12px;
}

.desc-1{
    color: var(--almost-white);
    line-height: 1.2;
    /* letter-spacing: 1px; */
    font-size: 18px;
    font-weight: 300;
}



</style>