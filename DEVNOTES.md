ikony z:
https://nuxt.com/modules/icon
https://icones.js.org/

# Przekazywanie zrodel :src obrazkow plikow lokalnych przez props
Problemem jest, ze przesylajac po prostu sciezke do pliku, vue/vite interpretuje ja jako relative sciezke do podstrony aktualnego adresu

aby to rozwiazac wykorzystane rozw. z:
https://stackoverflow.com/questions/56624817/passing-and-binding-img-src-from-props-in-vue-js 

tzn. w tym wypadku przekazywanie tylko nazwy pliku oraz stalej sciezki, ale generalnei chocdzi o tworzenie nowego obiektu new URL() z lokalnej sciezki i tego url podawanie jako zrodlo obrazka

do zobaczenia np. w ProjectCard.vue

# FIXME: o co chodzi: czasem obrazki sie laduja przez to URL, a czasem nie - nie zwraca bledu, tylko po prostu ich nie ma stronie

# Background pattern generators
https://heropatterns.com/
https://www.svgeez.com/
https://pattern.monster/
and many more