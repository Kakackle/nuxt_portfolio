<script setup>
import skills from "../skills.json"
import learning_skills from "../learning_skills.json"
</script>

<template>
    <section class="hero-section">
        <div class="main-div">
            <div class="languages">
                <NuxtLink class="shiny" to="/">
                    <span class="lang">ENG</span><Icon name="flagpack:gb-ukm"></Icon></NuxtLink>
                <NuxtLink class="shiny" to="/pl">
                    <span class="lang wip">PL</span><Icon name="flagpack:pl"></Icon></NuxtLink>
            </div>
            <div class="name-div">
                <div class="name-top">
                    <p class="name-1">MACIEJ</p>
                    <a class="name-2" href="https://github.com/Kakackle" target="_blank"
                    ><Icon name="uil:github" color="var(--almost-white)" />/kakackle</a>
                </div>
                <p class="name-3">MARKOWSKI</p>
            </div>
            <p class="bio">Full-stack web dev, proficient in Django and Vue, interested in all things Python. Automation and Robot Control MSc., persistent learner, self-called musician, Łódź lover.</p>
            <p class="skills-title">Skills:</p>
            <div class="skills">
                <SkillHover v-for="skill in skills" :key="skill.file" :skill="skill"></SkillHover>
            </div>
            
            <p class="skills-title">Currently working on:</p>
            <div class="skills skills-working">
            <SkillHover v-for="skill in learning_skills" :key="skill.file" :skill="skill"></SkillHover>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section{
    display: flex;
    max-width: var(--max-page-width);
    width: 100%;
    padding: 40px;
}

.main-div{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    gap: 20px;
    letter-spacing: 0.5px;
}

.name-div{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.name-1, .name-3{
    font-size: 80px;
    color: var(--purp-deep);
    font-weight: 600;
    letter-spacing: 2px;
    -webkit-text-fill-color: var(--purp-deep-light);
    -webkit-text-stroke: 3px var(--purp);
    margin: 0;
    height: 72px;
}

.name-top{
    display: flex;
    align-items: center;
    gap: 10px;
}

.bio, .name-2{
    color: var(--almost-white);
    font-weight: 300;
    font-size: 20px;
}

.name-2{
    font-size: 28px;
    height: 20px;
    text-decoration: underline;
    text-decoration-color: var(--purp-light);
    text-underline-offset: 3px;
    text-decoration-thickness: 2px;
}

.skills{
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    align-self: center;
    background-color: var(--purp-dark-05);
    padding: 20px;
    width: 100%;
}

.skills-working{
    align-self: flex-start;
}

.skills-titled{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.skill-img{
    align-self: center;
    max-height: 80px;
}

.drf{
    background-color: var(--almost-white);
    padding: 10px;
}

.languages{
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
    width: 100%;
    margin: 0 auto;
}

.skills-title{
    font-size: 20px;
    font-weight: 400;
    color: var(--almost-white);
    /* text-decoration: underline; */
    /* text-decoration-color: var(--purp-light); */
}

/* shiny button */
.shiny{
    text-decoration: none;
    color: var(--almost-white);
    font-size: 24px;
    padding: 16px 40px;
    position: relative;
    border: 1px solid var(--purp-soft-05);
    border-radius: 30px;
    overflow: hidden;

    display: flex;
    gap: 10px;
    align-items: center;
}

.shiny:hover{
    cursor: pointer;
}

.shiny::before{
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        120deg,
        transparent,
        var(--purp-soft-05),
        transparent
    );
}

.shiny:hover::before{
    left: 100%;
    transition: all 0.6s;
}

@media (max-width: 760px)
{
    .name-1, .name-3{
        font-size: 56px;
    }
    .name-2{
        font-size: 20px;
    }
}

</style>