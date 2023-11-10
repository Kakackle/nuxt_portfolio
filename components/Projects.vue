<script setup>
const cards = [
    {
        name: "Kalopsia Effects / Django/ Vue e-commerce store",
        img: "Sklep/page1.PNG",
        desc: "Guitar effect store with users, carts, detailed product pages, \
        reviews, a newsletter system and Stripe payment integration.",
        tech: ["Django with with a Django Rest Framework API serving static Vue files \
        with webpack", "Stripe payments integration", "Trello Sendgrid for newsletter handling",
        "Postgresql as a database service and Amazon S3 for media file hosting"],
        live: ["https://django-vue-sklep.onrender.com/",],
        git: ["https://github.com/Kakackle/django_vue_sklep",],
    },
    {
        name: "The Blog / Django/Vue blog app",
        img: "Blog/Home.PNG",
        desc: "Account-based blog with multi-image markdown post creation, tag definitons, \
        comments with replies, including sorting and filterign by data-based criteria.",
        tech: ["Vue frontend consuming a Django backend API", "OpenAPI documentation", "pagination, query filtering, \
        user following and post liking systems"],
        live: ["https://vue-blog-front.netlify.app/", "https://web-production-4c6b.up.railway.app/api/posts/"],
        git: ["https://github.com/Kakackle/vue_blog","https://github.com/Kakackle/django_blog"],
    },
    {
        name: "Rate Your Stuff / Rect social platform",
        img: "RYS/rys_1.png",
        desc: "Account-based app for rating anything you want with categories, comments, CRUD operations backed by Supabase services",
        tech: ["Supabase-hosted PostgreSQL database and authentication system",
        "posting, commenting, filtering and account functionalities through CRUD operations",
        "Redux and React Router for state management"],
        live: ["https://rate-your-anything.vercel.app/"],
        git: ["https://github.com/Kakackle/rate_your_anything"],
    },
    {
        name: "Totally not Instagram / Django",
        img: "Insta/Home.PNG",
        desc: "Instagram clone with infinite scroll, account, follow, like, comment and post filter functionalities",
        tech: ["Fully Django-based", "file hosting on Amazon S3", "Booststrap django forms and HTMX for in-place form refreshing"],
        live: ["https://django-insta.onrender.com",],
        git: ["https://github.com/Kakackle/django_insta",],
    },
    {
        name: "Forum for your thoughts / Django",
        img: "Forum/Post.PNG",
        desc: "Account-based forum with posts withing threads within topic-based boards, dockerized with a Postgresql \
        database, Unittes tand Pytest coverage, bootstrap styling,",
        tech: ["Django fullstack", "Dockerized with a postgres database", "Pytest coverage", "Github Action with Flake8 implementation and testing"],
        live: [],
        git: ["https://github.com/Kakackle/django_forum",],
    },
    {
        img:"",
    }
]
</script>

<template>
<section class="projects-section">
    <p class="section-title">Most <span class="title-important">important</span> projects:</p>
    <div class="project-cards">
            <ProjectCard v-for="(card, index) in cards" :card="card"></ProjectCard>
    </div>
</section>
</template>

<style scoped>
.projects-section{
    width: 90%;
    max-width: var(--max-page-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
}

.project-cards{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 30px;
}
</style>