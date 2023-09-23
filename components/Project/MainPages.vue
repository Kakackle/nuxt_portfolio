<script setup>
const props = defineProps(['pages']);
const pages = props.pages;
</script>

<template>
    <section class="main-pages">
        <p class="section-title">Main Pages</p>
        <div class="pages">
            <div class="page" v-for="page in pages">
                <p class="page-title">{{ page.name }}</p>
                <img class="page-img" :src="getImageUrl(page.path)">
                <div class="page-desc">
                    <p v-for="desc in page.desc">{{ desc }}</p>
                </div>
            </div>
            
        </div>
    </section>
    
</template>

<style scoped>
.main-pages{
    width: 100%;
    max-width: var(--max-page-width);
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.pages{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    column-gap: 60px;
    row-gap: 20px;
    justify-content: center;
}

.page-title{
    color: white;
    font-size: 24px;
}

.page{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.page-img{
    width: 300px;
}

.page-desc{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.page-desc p{
    color: var(--almost-white);
}
</style>