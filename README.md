# Keikkakoodi

Keikkakoodi on verkkosovellus jonka avulla voi hakea pelastustoimen ja ensihoidon tehtäviä tehtäväkoodin (esim. 103) perusteella.

# Kehittäjille

Sovellus on tehty käyttäen [React.JS](https://react.dev) -frameworkkia, kielenä [Typescript](https://typescriptlang.org).

## Tiedostorakenne ja kehitysympäristö

Käytössä on standardi React-kansiorakenne:
"src"-kansion sisällä on "Components"-kansio, joka sisältää kaikkialla sivulla, tai useassa paikassa tarvittavat komponentit (ylä- ja alaviite, yms.) sekä jokaiselle sivulle oman kansionsa, jossa on *sivun nimi*Page.tsx tiedosto jossa renderöidään sivu, *sivun nimi*Page.css tiedosto joka sisältää kyseisen sivun ja sen komponenttien tyylit, sekä sivulla tarvittavat muut komponentit.
src-kansion juuressa on index.tsx joka renderöi sivut (apuna React Router) ja komponentit. <br>
Kaikki komponentit joita ei näytetä aina sivun ollessa auki (esim haetun tehtävän kenttä) renderöidään Lazy-funktiolla. Samoin kaikki sivut kuin kotisivu.
<br> <br>
Esimerkki kansiorakenteesta:

```
src/
    index.tsx
    global.css
    404.tsx
    ...

    Info/
        InfoPage.tsx
        InfoPage.css
        ContactForm.tsx

    Home/
        HomePage.tsx
        HomaPage.css
        ...
    Data/
        Kiekat.json
```

Package managerina käytetään NPM:ää, jonka tarvitset kehittääksesi sovellusta.
Asentaaksei tarvittavat paketit aja komento `npm install`

Yhtenäistä muotoilua varten on käytössä Prettier. Ennen jokaista committia tulee prettier write. Kun paketit on asennettu voit tehdä sen ajamalla projektin juuressa komennon

```
$ npx prettier --write .
```

Jos haluat osallistua projektin kehittämiseen, keskutele ensin projektin omiatajan kanssa sähköpostilla leevi.saastamoinen@gmail.com
