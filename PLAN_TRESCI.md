[pl]
# Plan tresci jaka chcialbym zawrzec w portfolio - umiejetnosci, projekty

## Projekty

### Strona front

[Dodatkowe]: Strona albumu - ze designerskie itd, niezbyt ciekawe

[Drugorzedne]: Cheatsheets & links - bardzo fajny pomysl, ale realizacja bez frameworku to byl blad, ale moze cos ze bez frameworku, do wspomnienia
- localstorage
- wiele eventow
- obsluga jsona troche, inputow
- Ze dokumentacja generowana z jsdoc troche?

[Drugorzedne] Timestamper - tez fajny pomysl, ale ponownie, nie do konca odpowiednie zadanie jak na samo JS, ale fajny, przydatny pomysl

[] Zbior API - nie wiem czy warto wspominac, ale jest to uzyteczny pomysl powiedzmy

### Vue notes?
Moze gdybym dokonczyl, bo takto 5/10 pomysl, z 3/10 wykonaniem i problemami z dzialaniem bibliotek - do zapomnienia - startowy projekt z Vue i luj

### Zbior api vue
To samo co vue notes? niedokonczone

[Drugorzedne]?
### Designs n copies , figma_designs
w sumie spoko bylo by to wspomniec, ze sa umiejetnosci w Figmie, ze kopiowanie, tworzenie, rozne wersje, jakies tam principles jak srodkowe grid columns
- szczegolnie ze wariacje projektu sklepu, ze przed zrobieniem insta itd
- ze troche sass potrafione
- tak samo portfolio

[Pierwszorzedne]?
### Django + Vue blog separately
#### Technologie:
- Django
- DRF i ogolnie rest api
- SQLITE?
- paginacja itd?
- Vue
- Vue Router
- Pinia
- Tailwind
- Axios
- Marked i wlasny edytor markdown
#### Konkretne cechy

**Django**
- System tagow
- System uploadow obrazkow do podfolderow
- System uzytkownikow / profilow
- System komentarzy z odpowiedziami
- System lubienia postow
- System lubienia komentarzy
- System sledzenia uzytkownikow
- Filtracja postow po polubionych, autorze, tytule, dacie
- Sortowanie po polbieiach, wyswietleniach, dacie
- Tworzenie, edycja postow z obrazkami w srodku, uploadowania obrazkow pod to
- Zabezpiecznia by autor sie zgadzal itd
- Swagger / OpenAPI

**Vue**
- Obsluga logowania i pinia stores
- Filtry, sortowanie przez wymiane danych props i emits
- Dropdowny
- Paginacja
- Karuzela postow
- Niby system trendujacych postow z kalkulacja (to tez Django)
- 

[Drugorzedne]?
### Django Forum
Taki projekt dosyc prosty, ale fullstack samo Django

- Konta, logowanie, rejestracja obslugiwane przez django z wlasnymi templates
- Crispy forms?
- implementacja biblioteki python markdown
- System CRUD dla tablic tematow, watkow, postow w nich
Generalnie nic imponujacego

[Pierwszo/drugorzedne]?
### Nuxt portfolio

- Wyglad
- Moze wykorzystanie jakichs bibliotek o ktorych pisalem jak do tla, wizualizacji 3d, pod katami itd
- Nuxt i zwiazany z tym routing, fetching i wszystko
- Serving na jakims serwisie

[Pierwszorzedne]
### Django insta
Projekt solo Django fullstack z CRUDem, ale troche bardziej zaawansowany bo

- sledzenie uzytkownikow, choc brakuje jakiegos powiadamiania o nowych postach od ostatniej wizyty - TODO: ? z wykorzystaniem sessions, localstorage itd, ktory zapisywalby ostatni post ktory uzytkownik widzial? w sensie slugiem albo id, w kazdym badz razie jakos tanio
- teoretycznie infinite scroll
- Filtrowanie, sortowanie
- Lubienie postow, komentarzy, wgl komentarze
- Osobny model na postimage z metadata itd
- HTMX do postowania forms bez reloadowania calych stron, tylko z czescia stron / partial views
- osobny model na sledzienie relacji bo latwo sie zarzadza, meta dane itd

[Pierwszorzedne]
### Django + Vue sklep
Projekt ecommerce, chcialbym zeby moze z jakimis serwisami jak mailowanie, placenie.

- Polaczenie Django serwujacego Vue z jednego domain, Vue doczepione do jednego z veiw django
- Wlasny webpack + vue loader + inne loadery do obslugi obrazkow itd
- Przekazywanie danych miedzy Django a Vue przez ten view
- rest api
- filtracja, search, sortowanie z biblioteka django-filter i wbudowanymi backendami z Django i DRF
- followowanie, lajkowanie
- Tworzenie manufacturerow, produktow, typow efektow itd w Django
- Ale tez z mozliwoscia tworzenia tego oraz recenzji w Vue
- Obsluga koszykow zaleznych od uzytkownikow
- Obsluga zamowien (konwertowanych z koszykow)
- Custom permissions pod autora itd
- Wszystko co z cartem jak trzymanie przedmiotow w osobnych modalch z quantity, obsluga znizek, sumowan itd TODO: ? signals?
- Wykorzystanie generic django forms ale i tez customowe z wymiana obrazkow zwiazanych z produktem
- Paginacja itd
- Uzytkownicy z profilami itd
- Axios z generic composables, csrf tokeny, awaitowanie itd
- liczne devnotes
- MySQL zamiast sqlite bo obsluga decimalfield, jsonfield
- Oddzielny model na kody discountowe z terminem trwalosci TODO: ? rzeczywiste sprawdzanie tego terminu


# prawdziwe TODO: dokladniej rozpisac funkcjonalnosci? bo tutaj haslami, albo raczej tak bardziej atrakcyjnie, marketingowo, zwiezle zeby przekazywac zasade dzialania pod skriny i wybrac najwazniejsze


