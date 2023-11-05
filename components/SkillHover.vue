<script setup>
const props = defineProps(['skill']);
const skill = props.skill;
const img_link = `/img/skills/${skill.file}`;
</script>

<template>
<div class="skill-div">
    <img class="skill-img" :src="img_link"
    :class="{whiteback: skill.whiteback}">
    <p class="hide">{{ skill.name }}</p>
</div>

</template>

<style scoped>
.skill-div{
    position: relative;
}

.skill-img{
    align-self: center;
    max-height: 80px;
}

.whiteback{
    background-color: var(--almost-white);
    padding: 10px;
}

.hide{
    display: none;
    position: absolute;
    background-color: var(--purp-dark-05);
    color: var(--almost-white);
    padding: 2px 6px;
    top: 25%;
    width: 100%;
}

.skill-div:hover .hide{
    display: flex;
    justify-content: center;
}
</style>