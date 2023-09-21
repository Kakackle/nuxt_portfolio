<script setup>
const props = defineProps(['card_img', 'card_desc'])
const card_img = props.card_img;
const card_desc = props.card_desc;

const getImageUrl = function(){
    return new URL(`../assets/img/projects/${card_img}`, import.meta.url);
}
</script>

<template>
    <div class="card" v-if="card_img">
        <div class="img-div">
            <img class="card-img" :src="getImageUrl()">
        </div>
        <p class="desc">
            {{ card_desc }}
        </p>
    </div>
    <!-- sam opis, bez obrazka -->
    <div class="card" v-else>
        <div class="img-div">
            <p class="desc">
            {{ card_desc }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card{
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.img-div{
    width: 300px;
    height: 300px;
    background-color: var(--purp-plus);
    border: 10px solid var(--purp-deep-light);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-img{
    background-color: var(--gray-light);
}

.desc{
    font-size: 20px;
    font-weight: 300;
    color: var(--almost-white);
}
</style>