<script setup>
</script>

<template>
<section class="contact-section">
    <p class="title">Still have more questions? Contact me below!</p>
    <div class="label-div">
        <label for="message">Your message</label>
        <textarea id="message" name="message"></textarea>
    </div>
    <button class="send hover">SEND <Icon name="ion:chevron-forward"></Icon></button>
    <div class="other">
        <p>Or through one of my socials:</p>
        <div class="socials">
            <a class="social" href="https://github.com/kakackle"><Icon name="uil:github"></Icon>/kakackle</a>
            <a class="social" href="https://www.instagram.com/kakackle2g/"><Icon name="uil:instagram"></Icon>/kakackle2g</a>
            <a class="social" href="https://m.me/m.markowski98" target="_blank"><Icon name="uil:facebook"></Icon></a>
            <a class="social" href="https://www.linkedin.com/in/maciej-markowski-65407b211/" target="_blank"><Icon name="uil:linkedin"></Icon></a>
        </div>
    </div>
    
</section>
</template>

<style scoped>
.contact-section{
    /* max-width: var(--max-page-width); */
    width: 100%;
    background-color: var(--purp-dark);
    margin-top: var(--section-margin);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-bottom: var(--section-margin);
    gap: 20px;
}

.title{
    font-size: 24px;
    color: var(--almost-white);
    font-weight: 300;
}

.label-div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 60%;
}

.label-div label{
    font-size: 16px;
    color: var(--purp-light);
}

.label-div textarea{
    width: 100%;
    min-height: 120px;
    background-color: var(--almost-white);
    border: 4px solid var(--purp);
    border-radius: 3px;
    font-size: 16px;
}

.other{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.other p{
    color: var(--almost-white);
    font-size: 20px;
    font-weight: 300;
}

.socials{
    display: flex;
    gap: 20px;
}

.social{
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 20px;
    color: var(--almost-white);
}

.social:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.3s;
}

.send{
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 24px;
    padding: 2px 12px;
    border-radius: 50px;
    background-color: var(--purp);
    border: none;
    color: var(--almost-white);
}

</style>