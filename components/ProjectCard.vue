<script setup>
const props = defineProps(['card']);
const card = props.card;


const getImageUrl = function(){
    return new URL(`../assets/img/projects/${card_img}`, import.meta.url);
}

const base_path = "_nuxt/static/img/projects/"
const img_path = base_path + card.img;

</script>

<template>
    <div class="project" v-if="card.img">
        <p class="project-title">{{ card.name }}</p>
        <div class="card" >
            <div class="img-div">
                <img class="card-img" :src="img_path">
            </div>
            <div class=card-right>
                <p class="desc">
                    {{ card.desc }}
                </p>
                <div class="with-title">
                    <p class="built">Built with:</p>
                    <p class="desc">
                        {{ card.tech }}
                    </p>
                </div>
            </div>
        </div>
        <div class="links">
            <div class="live-links">
                <a class="live hover-underline" v-for="(live, index) in card.live"
                :href="live">Live {{index+1}}</a>
            </div>
            <div class="live-links">
                <a class="git hover-underline" v-for="(git, index) in card.git"
                :href="git">Github {{index+1}}</a>
            </div>
        </div>
    </div>
    <p class="project-title" v-else>...And more to come!</p>
    <!-- sam opis, bez obrazka -->
    <!-- <div class="card" v-else>
        <div class="img-div">
            <p class="desc">
            {{ card_desc }}
            </p>
        </div>
    </div> -->
</template>

<style scoped>
.project{
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
}

.project-title{
    font-size: 24px;
    color: var(--almost-white);
    padding: 10px;
    /* font-weight: 300; */
    /* text-decoration: underline; */
    /* text-decoration-color: var(--purp-light); */
}

.card{
    display: flex;
    gap: 20px;
    max-width: 680px;
    width: 100%;
}

@media (max-width: 1420px)
{
    .card{
        max-width: 1000px;
    }
}

.img-div{
    width: 320px;
    height: 400px; 
    background-color: var(--purp-plus);
    border: 10px solid var(--purp-deep-light);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    /* width: 100%; */
    /* height: 100%; */
    flex-shrink: 0;
}

@media (max-width: 760px)
{
    .img-div{
        width: 240px;
        height: 300px;
    }
}

.card-img{
    /* height: 380px;
    width: 280px; */
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* background-color: var(--purp-dark); */
}

.card-right{
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* align-self: center; */
    padding: 10px;
    text-wrap: wrap;
    width: 100%;
}

.built{
    color: var(--purp-light);
    font-size: 20px;
}

.with-title{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.desc{
    font-size: 20px;
    font-weight: 300;
    color: var(--almost-white);
    width: 100%;
    /* text-wrap: wrap;
    overflow-wrap: break-word; */
}

.links{
    display: flex;
    align-self: center;
    gap: 20px;
}

.live-links{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.live, .git{
    text-decoration: none;
    color: var(--purp-light);
    font-weight: 500;
    font-size: 20px;
}

.live:hover, .git:hover{
    text-decoration: underline;
}

.git{
    color: var(--almost-white);
}

</style>