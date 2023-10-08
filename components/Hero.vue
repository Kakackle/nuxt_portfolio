<script setup>
</script>

<template>
    <section class="hero-section">
        <!-- <div class="left">
            <img class="hero-blob" src="../assets/img/hero_blob.svg">
        </div> -->
        <div class="main-div">
            <div class="name-div">
                <div class="name-top">
                    <p class="name-1">MACIEJ</p>
                    <a class="name-2" href="https://github.com/Kakackle"
                    ><Icon name="uil:github" color="var(--almost-white)" />/kakackle</a>
                </div>
                <p class="name-3">MARKOWSKI</p>
            </div>
            <p class="bio">Full-stack web dev, proficient in Django and Vue, interested in all things Python. Automation and Robot Control MSc., persistent learner, self-called musician, Łódź lover.</p>
            <div class="skills">
                <img class="skill-img" src="../assets/img/skills/htmlcssjs.png">
                <img class="skill-img" src="../assets/img/skills/vue1.png">
                <img class="skill-img" src="../assets/img/skills/django1.png">
                <img class="skill-img drf" src="../assets/img/skills/drf1.png">
                <img class="skill-img" src="../assets/img/skills/python1.png">
                <img class="skill-img" src="../assets/img/skills/pytest.png">
                <img class="skill-img" src="../assets/img/skills/opencv.png">
                <img class="skill-img" src="../assets/img/skills/git.png">
                <img class="skill-img" src="../assets/img/skills/docker1.png">
                <img class="skill-img" src="../assets/img/skills/postgresql.png">
                <img class="skill-img" src="../assets/img/skills/figma1.png">
                <img class="skill-img" src="../assets/img/skills/tailwind1.png">
                <img class="skill-img" src="../assets/img/skills/sass1.png">
            </div>
            <div class="skills-titled">
                <p class="bio">+ Currently working on:</p>
                <div class="skills skills-working">
                    <img class="skill-img" src="../assets/img/skills/fastapi.png">
                    <img class="skill-img" src="../assets/img/skills/aws1.png">
                    <img class="skill-img" src="../assets/img/skills/react.png">
                </div>
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
}

.name-1, .name-3{
    font-size: 80px;
    color: var(--purp-deep);
    /* font-stretch: expanded; */
    font-weight: 600;
    letter-spacing: 2px;
    /* text-shadow: -4px 0 var(--purp), 0px 4px var(--purp), 4px 0 var(--purp), 0 -4px var(--purp); */
    -webkit-text-fill-color: var(--purp-deep-light);
    -webkit-text-stroke: 3px var(--purp);
    /* text-stroke: 2px var(--purp); */
    margin: 0;
    /* line-height: -6px; */
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
    text-decoration: none;
}

.skills{
    display: grid;
    /* gap: 10px; */
    column-gap: 20px;
    row-gap: 20px;
    /* grid-template-columns: repeat(5, 1fr); */
    /* grid-template-rows: repeat(2, 1fr); */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    /* max-width: 600px; */
    align-self: center;
    /* background-color: var(--purp-deep); */
    background-color: var(--purp-dark-05);
    padding: 20px;
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
}

</style>