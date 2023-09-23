<script setup>
const props = defineProps(['details']);
const details = props.details;
</script>

<template>
    <section class="details-section">
        <p class="section-title">Implementations / technical details</p>
        <div class="detail-div" v-for="detail in details">
            <li class="detail-anchor">{{ detail.title }}</li>
            <p class="subtitle">{{ detail.subtitle }}</p>
            <div class="detail-split">
                <img class="detail-img" :src="getImageUrl(detail.img)">
                <div class="detail-right">
                    <p class="det" v-for="det in detail.desc">{{ det }}</p>
                </div>
            </div>
        </div>

    </section>
    
</template>

<style scoped>
.details-section{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    max-width: var(--max-page-width);
    /* align-items: center; */
}

.detail-div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.detail-anchor, .subtitle{
    align-self: flex-start;
    color: var(--almost-white);
}

.subtitle{
    font-weight: 300;
}

.detail-split{
    width: 100%;
    display: flex;
    gap: 20px;
}

.detail-img{
    width: 500px;
    height: 300px;
    padding: 10px;
    background-color: var(--purp-dark);
}

.detail-right{
    display: flex;
    flex-direction: column;
    color: var(--almost-white);
    font-size: 16px;
    font-weight: 300;
    gap: 10px;
}

.det{

}
</style>