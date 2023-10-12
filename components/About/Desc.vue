<script setup>
</script>

<template>
<section class="desc-section">
    <div class="desc-div">
        <p class="desc-title">Programatically</p>
        <p class="desc">Interested in learning new technologies, frameworks, languages, love the feeling of progress and making thinks work. My favoruite language is Python, but I've spent some time in Javascript, C#, C++ along with a lick of Java and C.</p>
        <p class="desc">In python I have worked with OOP, libraries like OpenCV for computer vision tasks, Tensorflow and Pytorch for ML purposes and numpy and pandas for data-focused purposes.</p>
        <p class="desc">In C# I've worked with EmguCV (essentially a OpenCV port) for computer vision study tasks and Unity for my Master's thesis.</p>
        <p class="desc">C++ served me as a classic introduction to programming and a programmatic way of thinking as well as for Arduino-based personal and scholar projects.</p>
        <p class="desc">As part of my creative drive and for the purposes of fullstack dev, I also use Figma to create website layouts.</p>
    </div>
    <div class="project-images">
            <figure class="project-figure">
                <!-- <img class="project-image-large" src="_nuxt/assets//img//about//designy.png"> -->
                <img class="project-image-large" src="/img//about//designy.png">
                <figcaption class="project-caption">The design process</figcaption>
            </figure>
        </div>
    <div class="desc-div">
        <p class="desc-title">Education</p>
        <p class="desc">During studies I mostly learned about control theory and applications, ways of controlling robots and the mechanical calculations required plus various technical topics such as Digital Signal Processing, Motor control, Optimization Methods, Electric circuits, physics and system simulation techniques, escpecially in MATLAB and Simulink. </p>
        <p class="desc">For my Bachelor's thesis I created a mechanical system capable of visually assessing the state of a Rubik's cube, find a solution and solve it itself. The computer vision program was wrriten in C#, connected through UART to and Arduino unit controlling the robot.</p>
        <div class="project-images">
            <figure class="project-figure">
                <img class="project-image" src="/img/about/caly_ukl_1.jpg">
                <figcaption class="project-caption">The mechanical system</figcaption>
            </figure>
            <figure class="project-figure">
                <img class="project-image" src="/img/about/dzialajacy_program_1.png">
                <figcaption class="project-caption">The Rubik solving program</figcaption>
            </figure>
        </div>
        <p class="desc">For my Master's thesis I printed and constructed a semi-realistic robotic model of a human forearm and hand, controlled by the movements of the operator's hand through a Websocket server hosted on a ESP32 system, with the addition of a controllable simulation of the hand's movement built in Unity with C# with Google Cardboard VR support and a printed headset, including a lengthy discussion of the state of the art solutions and underlying problems spanning over 100 references and citations</p>
        <div class="project-images">
            <figure class="project-figure">
                <img class="project-image" src="/img/about/stanowisko_biceps.png">
                <figcaption class="project-caption">The mechanical arm</figcaption>
            </figure>
            <figure class="project-figure">
                <img class="project-image" src="/img/about/skrin_cardboard.jpg">
                <figcaption class="project-caption">The simulation</figcaption>
            </figure>
            <figure class="project-figure">
                <img class="project-image" src="/img/about/rekawica_powerbank.png">
                <figcaption class="project-caption">The control glove</figcaption>
            </figure>
        </div>
        <p class="desc">Some more notable study projects include a system for the estimation of the 3D position of an object of known size with the use of one camera, realized with OpenCV through Zhang's method, a guitar effect with a LTSpice simulation and an attempt of mapping and localizing users within a faculty building through BLE acces point triangulation</p>
        <div class="project-images">
            <figure class="project-figure">
                <img class="project-image" src="/img/about/zhang.png">
                <figcaption class="project-caption">3D position estimation</figcaption>
            </figure>
            <figure class="project-figure">
                <img class="project-image" src="/img/about/efekt_schemat.png">
                <figcaption class="project-caption">Guitar effect schema</figcaption>
            </figure>
            <figure class="project-figure">
                <img class="project-image" src="/img/about/access_points2.png">
                <figcaption class="project-caption">Faculty mapping</figcaption>
            </figure>
        </div>
    </div>
    <div class="desc-div">
        <p class="desc-title">Personal</p>
        <p class="desc">My biggest passion (outside of programming of course &#128516;) is music, both in terms of listening and creating. I enjoy all genres, although my favourites will probably always remain in the realm of jazz, soul, oldschool hiphop and all the other things that groove. </p>
        <p class="desc">My biggest passion project so far has been a "release" of a compilation of boombap beats inspired by artists like MF DOOM, NOON, Madlib, Q-Tip and more, which you can listen to for free on youtube: <a class="intermedium" href="https://www.youtube.com/playlist?list=PLc0mBJHoWgQNCvPh6Upf2JAjyQ9yb2Ouh" target="_blank">Intermedium</a></p>
        <div class="project-images">
            <figure class="project-figure">
                <img class="project-image-square" src="/img/about/OKLADKA_PROBA_1.png">
                <!-- <figcaption class="project-caption">front</figcaption> -->
            </figure>
            <figure class="project-figure">
                <img class="project-image-square" src="/img/about/okladka_tyl.png">
                <!-- <figcaption class="project-caption">Guitar effect schema</figcaption> -->
            </figure>
        </div>
        <p class="desc">Besides music I enjoy all forms of art, be it movies, drawings or books, with a side of indie or fighting games</p>
    </div>   
    
</section>

</template>

<style scoped>
.desc-section{
    max-width: var(--max-page-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
}

.desc-div{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.desc-title{
    font-size: 20px;
    color: var(--purp-soft);
}

.desc{
    color: var(--almost-white);
    font-size: 18px;
    font-weight: 300;

}

.intermedium{
    text-decoration: underline;
    color: var(--purp-soft);
    font-weight: 400;
}

.project-images{
    display: flex;
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    width: 100%;
    align-self: center;
    justify-content: center;
}

.project-figure{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* justify-content: center; */
}

.project-image{
    height: 300px;
    width: 400px;
    object-fit: contain;
}

.project-image-large{
    height: 400px;
    width: 600px;
    object-fit: contain;
}

.project-image-square{
    height: 400px;
    height: 400px;
}

.project-caption{
    color: var(--almost-white);
    font-weight: 300;
}

</style>