# Engler
Nauka języka angielskiego w grach

Aplikacja webowa do nauki języka angielskiego. Za pomocą questów w grze możesz nauczyć się dużo nowych slów i nowe reguły z języka angielskiego.

Autorzy - Artsiom Kirpaniou, Daniil Kochyk

Licencja – ADWare

#### Wymagania funkcjonalne

|Identyfikator|Nazwa krótka|      Opis   | Priorytet |
|-------------|-----------|-------------|-------------|
|1.| Logowanie I rejstracja |stworzyć stronę dla rejestracji I logowania użytkowników |1|
|2.| Quiz | Pierwszy Quiz który można zacząć przed grą | 1 |
|3.| Strona z wyborem gier |Strona na której będzie lista z grami oraz ich poziomy które może wybrać użytkownik | 1 |
|4. |Reguły z angielskiego | Strona z regułami języka angielskiego | 2 |
|5. |Forma kontaktowa |Strona z możliwosćią wysłania formy(wiadomości) dla wsparcia klinetów| 2|
|7. |Strona glówna| Główna strona z inforacjami o aplikacji| 1| 


#### Wymagania niefunkcjonalne

|Identyfikator| Nazwa krótka| Opis |Priorytet|
|--------------|------------|------------|----------|
|1.| Wielopłatformowość| Stworzenie aplikacji mobilnej| 3|
|2.| Użyteczność |Szybka nawigacja w aplikacji, interfejs łatwy do zrozumienia |1|
|3. |Bezpieczeństwo |Zgodność z wymogami bezpieczeństwa(zabiespieczenie danych użytkowników) |2|
|4.| Dostępność| Dostęp dla użytkowników do użytku w dowolnym momencie| 1|
|5.| Wydajność| Szybkość reakcji aplikacji na zapytania| 1|
|6.| Wykorzystanie pamięci operacyjnej |Minimalna zajętość w procentach pamięci RAM| 2|

                                                          
                                                          Priorytet [1-wymagana, 2 - oczekiwana, 3 - dodatkowa]


#### Architektura systemu/oprogramowania
##### Architektura rozwoju
|Lp| Nazwa produktu |Przeznaczenie w projekcie |Wersja|
|-----|-------|-------|-------|
|1.| C#| Backend| 4.0|
|2.| Angular.js| Frontend |11.0.2|
|3. |SQL server 2019| Baza danych |15.0|

##### Architektura uruchomieniowa
|Lp |Nazwa produktu| Przeznaczenie w projekcie| Wersja|
|-------|---------|---------|--------|
|1.| Visual studio code| Środowisko używane przy tworzeniu frontendu |1.55.10|
|2.| Visual studio 2019| Środowisko używane przy tworzeniu backendu |16.9.3 Community|
|3. |Windows 10 |System operacyjny używany przy tworzeniu projektu |10.0.19041.867|
|4.| Git| Systemy kontroli wersji aplikacji |2.31.1|
|5.| GitHub |Utrzymywanie projektu na serwerze, do którego mają dostęp członkowie zespołu| --|
|6. |Azure Dedicated Host| Serwer do hostowania||



# Quizzz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
