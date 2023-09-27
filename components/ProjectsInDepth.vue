<script setup>
const projects=[
    {
        title: 'Django Instagram clone (with HTMX)',
        main_features: [
            {
                img: "projects/Insta/Home.PNG",
                desc: "Infinite scroll post page with comments section previews, post liking, filtering by followed users etc"
            },
            {
                img: "projects/Insta/User_view.PNG",
                desc: "User profiles with followers, created posts, editing, authorization"
            },
            {
                img: "projects/Insta/post_view.PNG",
                desc: "..."
            }
        ],
        steps: [
            {
                img: "projects/Insta/Grid_liked.PNG",
                desc: "Filtering posts by tags, description, following or being liked"
            },
            {
                img: "projects/Insta/New_post_form.PNG",
                desc: "Django forms with bootstrap styling"
            },
            {
                img: "projects/Insta/Edit_profile.PNG",
                desc: "Editing...."
            }
        ]
    },
]
</script>

<template>
    <section class="projects-depth-section">
        <p class="section-title">The projects in-<span class="title-important">depth</span></p>
        <div class="projects">
            <ProjectDetails v-for="project in projects" :project="project">
            </ProjectDetails>
        </div>
    </section>
</template>

<style scoped>
.projects-depth-section{
    display: flex;
    flex-direction: column;
    max-width: var(--max-page-width);
    width: 100%;
    gap: 20px;
    align-items: center;
}
.projects{
    width: 100%;
    padding: 0 var(--max-page-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}
</style>