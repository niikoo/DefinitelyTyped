# DefinitelyTyped [![Build Status](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped.svg?branch=master)](https://travis-ci.org/DefinitelyTyped/DefinitelyTyped)

[![Join the chat at https://gitter.im/borisyankov/DefinitelyTyped](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/borisyankov/DefinitelyTyped?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Kodelageret for TypeScript definisjoner av høy kvalitet.

Se også nettstedet [definitelytyped.org](http://definitelytyped.org), selv om informasjonen i denne README, eller les meg filen, er mer oppdatert.

## Hva er deklarasjonsfiler?

Se håndboken: [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) (engelsk).

## Hvordan får jeg tak i dem?

### npm

Dette er den anbefalte metoden. Den er bare tilgjengelig for dem som bruker TypeScript 2.0 eller høyere. For eksempel:

```sh
npm install --save-dev @types/node
```

Typene skal da automatisk bli inkludert av kompilereren. See mer om dette i [håndboken](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

For en NPM pakke "foo" så vil typene finnes på "@types/foo".
Hvis du ikke finner din pakke, prøv å finn den på [TypeSearch](https://microsoft.github.io/TypeSearch/).

Hvis du fortsatt ikke finner den, sjekk om pakken [kommer med sine egne type-definisjoner.](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html).
Dette er vanligvis spesifisert i et `"types"` eller `"typings"` felt i `package.json`,
eller bare se etter hvilken som helst ".d.ts" fil som finnes i pakkens mappe, og inkluder dem manuelt med en referanse: `/// <reference path="" />`.

### Andre metoder

Metoder som kan brukes av Typescript 1.0.

* [Typings](https://github.com/typings/typings)
* ~~[NuGet](http://nuget.org/packages?q=DefinitelyTyped)~~ (bruk foretrukne alternativer, nuget DT type-publisering har blitt skrudd av)
* Manuelt last ned deklarasjonene fra `master` branch-en til dette repository-et

Det kan være at du må legge til manuelle [referanser](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## Hvordan kan jeg bidra?

DefinitelyTyped virker på grunn av bidrag av brukere som deg. Bli med på dugnaden du også!

### Testing

Før du deler din forbedring med verden, prøv den selv.

#### Test redigering av en eksisterende pakke

For å legge til nye moduler kan du bruke [module augmentation](http://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation).
Du kan også redigere typene direkte i `node_modules/@types/foo/index.d.ts`, eller kopiere dem fra der og følge trinnene nedenfor.

#### Test en ny pakke

Legg dette til din `tsconfig.json`:

```json
"baseUrl": "types",
"typeRoots": ["types"],
```

(Du kan også bruke `src/types`.)
Opprett `types/foo/index.d.ts` som da vil inneholde deklarasjoner for modulen "foo".
Du skal nå ha mulighet til å importere fra `"foo"` i koden din og det blir dirigert til den nye type-definisjonen.
Så bygger du *og* kjører koden slik at du er sikker på at type-definisjonene faktisk henger sammen med det som skjer under kjøring.
Når du har testet dine definisjoner med ekte kode, så kan du lage en [PR](#make-a-pull-request)
så følger du instruksjonene for hvordan du [redigerer en eksisterende pakke](#edit-an-existing-package) eller
[lager en ny pakke](#create-a-new-package).

### Lag en pull request

Når du har testet pakken din så kan den deles på DefinitelyTyped.

Først, [fork](https://guides.github.com/activities/forking/) dette repository-et, installer [node](https://nodejs.org/), og kjør `npm install`.

#### Rediger en eksisterende pakke

* `cd types/my-package-to-edit`
* Gjør endringer. Husk å endre testene også.
  Hvis du gjør endringer som fører til at koden ikke er bakover kompatibel, såkalte 'breaking changes', så må du huske å [oppdatere hoved-versjonsnummeret](#i-want-to-update-a-package-to-a-new-major-version).
* Du har kanskje også lyst til å legge til deg selv under "Definitions by" (definisjoner av) seksjonen i toppen av hovedfilen i pakken.
  - Dette vil føre til at du blir informert (via ditt GitHub brukernavn) hvis noen lager en pull request eller det kommer en feilrapport angående pakken.
  - Gjør dette med å legge inn ditt navn på slutten av linjen, slik som: `// Definitions by: Alice <https://github.com/alice>, Bob <https://github.com/bob>`.
  - Hvis det er flere personer så kan man også legge det over flere linjer:
  ```typescript
  // Definitions by: Alice <https://github.com/alice>
  //                 Bob <https://github.com/bob>
  //                 Steve <https://github.com/steve>
  //                 John <https://github.com/john>
  ```
* Hvis det er en `tslint.json`, kjør `npm run lint package-name`. Hvis ikke, kjør `tsc` i pakkens mappe.

Når du lager en pull request for en eksisterende pakke så skal `dt-bot` @-referere tidligere bidragsytere.

Hvis den ikke gjør det, så kan du gjøre det selv i kommentarfeltet assosiert med den pull request.

#### Opprett en ny pakke

Hvis du er ansvarlig for en pakke og din pakke er skrevet i TypeScript, så bør du [legge ved de automatisk generte definisjonsfilene](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) i stedet for å legge de ut her på DefinitivelyTyped.

Hvis du legger til typer for en NPM pakke så lager du en mappe med samme navn.
Hvis pakken du lager typer for ikke er på NPM, så må du dobbeltsjekke at ikke navnet du velger skaper en konflikt med en pakke som allerede er på NPM.
(Du kan bruke `npm info foo` for å se om `foo` pakken eksisterer.)

Din pakke skal ha denne strukturen:

| Fil | Hensikt |
| --- | --- |
| index.d.ts | Denne filen inneholder type-definisjonene for pakken. |
| foo-tests.ts | Denne inneholder eksempelkode som bruker typene. Den blir brukt for å teste om typene er i orden. Denne koden blir *ikke* kjørt, men den blir type-sjekket. |
| tsconfig.json | Dette tillater `tsc` å kjøre. |
| tslint.json | Slår på lint-ing for pakken. |

Generer disse ved å kjøre `npx dts-gen --dt --name my-package-name --template module` hvis du har npm ≥ 5.2.0. Hvis ikke kjører du `npm install -g dts-gen` og `dts-gen --dt --name my-package-name --template module`.
Se alle valgene her: [dts-gen](https://github.com/Microsoft/dts-gen).

Du kan redigere `tsconfig.json` for å legge til nye filer, for å legge til `"target": "es6"` (som trengs for asynkrone funksjoner), for å legge til `"lib"`, eller for å legge til `"jsx"` valget til kompilatoren.

Medlemmene i DefinitelyTyped går med jevne mellomrom og sjekker for nye pull requests. Ha i tankene at prosessen kan gå tregere basert på mengden.

For et godt eksempel, se pakken [base64-js](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base64-js).

#### Vanlige feil

* Først og fremst, følg veiledningen fra [håndboken](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
* Formatering: Bruk enten bare tabs eller bare 4-mellomrom.
* `function sum(nums: number[]): number`: Bruk `ReadonlyArray` hvis en funksjon ikke skriver til parametrene.
* `interface Foo { new(): Foo; }`:
    Denne definerer en type objekter som det kan lages nye instanser av. Det du sikkert mente var `declare class Foo { constructor(); }`.
* `const Class: { new(): IClass; }`:
    Alltid foretrekk å bruke klasse deklarasjon `class Class { constructor(); }` i stedet for en konstant som kan lages nye instanser av.
* `getMeAT<T>(): T`:
    Hvis en type-parameter ikke blir brukt i noen av parametrene, så har du ikke egentlig en generisk funksjon. Du har da bare en typeIf a type parameter does not appear in the types of any parameters, you don't really have a generic function, you just have a disguised type-påstand i forkledning.
    Foretrekk å bruke ekte type-påstand, f.eks. `getMeAT() as number`.
    Eksempel når en type-parameter er akseptabel: `function id<T>(value: T): T;`.
    Eksempel der det ikke er akseptabelt: `function parseJson<T>(json: string): T;`.
    Unntak: `new Map<string, number>()` - det er greit.
* Bruk av typene `Function` og `Object` er nesten alltid en dårlig idé. I 99% av tilfellene så er det mulig å være mer spesifikk. Eksempler er `(x: number) => number` for [funksjoner](http://www.typescriptlang.org/docs/handbook/functions.html#function-types) og `{ x: number, y: number }` for objekter. Hvis det ikke er mulig å vite typen i det hele tatt, så er [`any`](http://www.typescriptlang.org/docs/handbook/basic-types.html#any) det rette valget - ikke `Object`. Hvis det eneste du vet er at det er en type object, så bruk typen [`object`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type), ikke `Object` eller `{ [key: string]: any }`.
* `var foo: string | any`:
    Når `any` er brukt i en union-type, så blir resultatet fortsatt `any`. Kanskje det å ha med `string` kan *se* nyttig ut, så gir det faktisk ingen bedre typesjekk over det å bare bruke `any`.
    Avhengig av intensjonen så kan akseptable alternativer være `any`, `string`, or `string | object`.

#### Fjerning av en pakke

Når en pakke [legger ved](http://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) sine egne type-definisjoner, så bør man fjerne typene fra DefinitelyTyped for å forhindre forvirring.

Du kan fjerne pakken ved å kjøre `npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]`.
- `typingsPackageName`: Dette er mappenavnet som skal slettes.
- `asOfVersion`: En 'stump' vil bli publisert til `@types/foo` med denne versjonen. Skal være høyere enn den nåværende publiserte versjonen.
- `sourceRepoURL`: Denne skal vise til repository-et som inneholder definisjonene.
- `libraryName`: Beskrivende navn for biblioteket, f.eks. "Angular 2" i stedet for "angular2". (Hvis dette er utelatt så blir det likt som "typingsPackageName".)

Hvilken som helst annen pakke i DefinitelyTyped som refererte den slettede pakken skal bli oppdatert til å referere de vedlagte typene. For å gjøre dette, legg til en `package.json` med `"dependencies": { "foo": "x.y.z" }`.

Hvis en pakke aldri har vært på DefinitelyTyped, trenger den ikke å bli lagt til `notNeededPackages.json`.

#### Lint

For å linte en pakke, legg til en `tslint.json` til pakken med innholdet: `{ "extends": "dtslint/dt.json" }`. Alle nye pakker må bli lintet.
Hvis en `tslint.json` slår av noen regler, så er det fordi at det ikke har blitt fikset enda. For eksempel:

```js
{
    "extends": "dtslint/dt.json",
    "rules": {
        // This package uses the Function type, and it will take effort to fix.
        "ban-types": false
    }
}
```

(For å indikere at en lint regel virkelig ikke gjelder, bruk `// tslint:disable rule-name` eller bedre, `//tslint:disable-next-line rule-name`.)

For å finne ut om et uttrykk er av en gitt type, bruk `$ExpectType`. For å finne ut om et uttrykk fører til en kompilasjonsfeil, bruk `$ExpectError`.

```js
// $ExpectType void
f(1);

// $ExpectError
f("one");
```

For flere detaljer, se les-meg filen til [dtslint](https://github.com/Microsoft/dtslint#write-tests).

Test pakken ved å kjøre `npm run lint package-name` der `package-name` er navnet til pakken din.
Dette skriptet bruker dtslint](https://github.com/Microsoft/dtslint).

## Ofte silte spørsmål

#### Hva eksakt er forholdet mellom dette repository-et og `@type` pakkene på NPM?

 `master` branch-en er automatisk publisert til `@types` skopet på NPM, takket være [types-publisher](https://github.com/Microsoft/types-publisher).

#### Jeg har laget en pull request. Hvor lang tid tar det før den er flettet inn?

Det varierer, men de fleste pull request-ene vill bli flettet inn innen en uke. Pull request-er som har blitt godkjent av en av bidragsyterne i definisjonens toppfelt blir normalt sett flettet inn raskere; Pull request-er for nye definisjoner vil ta mer tid siden de krever mer tid og gjennomgang fra de som vedlikeholder. Hver pull request blir gjennomgått av et TypeScript eller et DefinitelyTyped team-medlem før de blir flettet inn, så vennligst vær tålmodig mens menneskelige faktorer kan skape forsinkelser. Sjekk denne oversikten: [PR Burndown Board](https://github.com/DefinitelyTyped/DefinitelyTyped/projects/3?card_filter_query=is%3Aopen), for å se fremgangen til de som vedlikeholder, mens de gjennomgår de åpne pull request-ene.

#### Min pull request er flettet inn; når blir `@types` pakken på NPM oppdatert?

NPM pakker skal oppdateres innen et par timer. Hvis det tar mer enn 24 timer, gi et pling til @RyanCavanaugh og @andy-ms på pull request-en slik at de kan sjekke dete.

#### Jeg skriver en definisjon som avhenger av en annen definisjon. Bør jeg bruke `<reference types="" />` eller en import?

Hvis modulen du refererer en en ekstern modul (bruker `export`), bruk en import.
Hvis modulen du refererer er en ambient-modul (bruker `declare module`, eller bare deklarerer globalt), bruk `<reference types="" />`.

#### Jeg ser at noen av pakkene har en `package.json` her.

Normalt sett så trenger du ikke det. Vi lager en `package.json` automatisk når den blir publisert.
En `package.json` kan bli inkludert for å spesifisere krav til nødvendige pakker man er avhengig av. Her er et [eksempel](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/pikaday/package.json).
Vi tillater ikke andre felter som `"description"` å bli satt manuelt.
En annen ting, hvis du trenger å referere til eldre versjoner av typer så gjør du det ved å legge til `"dependencies": { "@types/foo": "x.y.z" }` i `package.json`.

#### Noen pakker har ingen `tslint.json`, og noen `tsconfig.json` mangler `"noImplicitAny": true`, `"noImplicitThis": true`, eller `"strictNullChecks": true`.

Da er de feil. Kanskje du kan hjelpe å fikse dem ved å lage en pull request?

#### Kan jeg spørre etter en definisjon som mangler?

Her er de [nåværende forespurte definisjonene](https://github.com/DefinitelyTyped/DefinitelyTyped/labels/Definition%3ARequest).

#### Hva med type-definisjoner for DOM?

Hvis typene er en del av web standarden, så bør de bli lagt til [TSJS-lib-generator](https://github.com/Microsoft/TSJS-lib-generator) slik at de blir en del av standarden som finnes i `lib.dom.d.ts`.

#### En pakke bruker `export =`, men jeg liker best å bruke standard importer. Kan jeg endre `export =` til `export default`?

Hvis du bruker TypeScript 2.7 or later, bruk `--esModuleInterop` i prosjektet ditt.
Ellers, hvis standar importer virker i ditt miljø (f.eks. Webpack, SystemJS, esm), tenk over om du skal skru på [`--allowSyntheticDefaultImports`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) valget i kompilereren.
Ikke endre på en type-definisjon hvis den er nøyaktig.
For en NPM pakke, `export =` er nøyaktig hvis `node -p 'require("foo")'` er eksporten, og `export default` er nøyaktig hvis `node -p 'require("foo").default'` er eksporten.

#### Jeg ønsker å bruke en funksjon eller egenskap fra TypeScript 2.1 eller høyere.

Da må du legge til en kommentar i siste del av definisjons-toppen (etter `// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped`): `// TypeScript Version: 2.1`.

#### Jeg ønsker å legge til en DOM API som ikke finnes i TypeScript normalt sett.

Dette hører nok til i [TSJS-Lib-Generator](https://github.com/Microsoft/TSJS-lib-generator#readme). Se veiledningen der.
Hvis standarden er fortsatt på tegnebrettet så hører den til her.
Bruk `dom-` som start og inkluder en link til standarden som "Project" linken i toppen.
Når den kommer ut fra tegnebrett-stadiet, så kan være at vi fjerner den fra DefinitelyTyped  og and setter den assosierte `@types` pakken som foreldet (deprecated).

#### Jeg ønsker å oppdatere til en ny hovedversjon.

Hvis du ønsker å fortsette å oppdatere den eldre versjonen av pakken, så kan du lage en ny mappe med den nåværende versjonen, f.eks. `v2` og så kopiere eksisterende filer der. Hvis det er tilfellet så trenger du å:

1. Oppdatere de relative stiene i `tsconfig.json` samt i `tslint.json`.
2. Legg til regler for kartlegging av stier, for å sikre at tester blir kjørt mot den versjonen de er ment for.

For eksempel [history v2 `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/history/v2/tsconfig.json) ser slik ut:

```json
{
    "compilerOptions": {
        "baseUrl": "../../",
        "typeRoots": ["../../"],
        "paths": {
            "history": [ "history/v2" ]
        },
    },
    "files": [
        "index.d.ts",
        "history-tests.ts"
    ]
}
```

Hvis det er andre pakker på DefinitelyTyped som er inkompatible med den nye versjonen så trenger du å legge til kartlegging av stier til den gamle versjonen. Du må kanskje gjøre dette for pakker som avhenger av den gamle versjonen.

For eksempel: `react-router` avhenger av `history@2`, så [react-router `tsconfig.json`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router/tsconfig.json) har en kartlagt sti til `"history": [ "history/v2" ]`;
transitivt `react-router-bootstrap` (som avhenger av `react-router`) legger også til en kartlagt sti i dens [tsconfig.json](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-bootstrap/tsconfig.json).

Også, `/// <reference types=".." />` vil ikke virke med sti referanser, så avhengige moduler må bruke `import`.

#### Hvordan skriver jeg definisjoner for pakker som kan bli brukt global men også som en modul?

TypeScript håndboken inneholder meget god [generell information om skriving av definisjoner](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), samt [denne eksempel definisjonsfilen](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html) som viser hvordan en global definisjon kan lages ved å bruke ES6-stilet modul syntaks, mens man også spesifiserer objekter som er gjort tilgjengelige i det globale skopet. Denne teknikken er demonstrert praktisk i [definisjonen for big.js](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/big.js/index.d.ts), som er et bibliotek som kan bli lastet globalt ved et script tag på en nettside, eller bli importert via ES6-stilet importering.

For å teste hvordan din definisjon kan bli brukt både når den er referert til globalt og som en importert modul, lag en test mappe, og lag to test filer der. Navngi den første `YourLibraryName-global.test.ts` og den andre `YourLibraryName-module.test.ts`.  Den *globale* test filen skal utføre en definisjon tilsvarende det som blir tilfelle med et script som blir lastet på en nettside der biblioteket er tilgjengelig i det globale skopet. I dette scenarioet så skal du ikke spesifisere et import uttrykk. *Modulens* test-fil skal utføre definisjonen i henhold til hvordan den vil bli brukt hvis den blir importert (inkludert `import` uttrykket). Hvis du spesifiserer `files` feltet i `tsconfig.json` filen, så pass på at du tar med begge test filene. Et [praktisk eksempel av dette](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/big.js/test) er også tilgjengelig hvis du ser på definisjonen for big.js.

Husk, det er ikke nødvendig å fullt ut utføre alle testene på definisjonen i hver av test filene. Det er nok å teste bare de globalt tilgjengelige elementene i den globale test filen, og så fullt ut teste definisjonen i modul test filen, eller motsatt selvfølgelig.

#### Hva med skopede pakker?

Typer for en skopet pakke `@foo/bar` skal gå i `types/foo__bar`. Merk den doble understreken.

Når `dts-gen` blir brukt til å sette opp en skopet pakke så trenger `paths` feltet å bli manuelt tilpasset i den genererte `tsconfig.json` for å få referert den skopede pakken på en riktig måte:

```json
{
    "paths":{
      "@foo/bar": ["foo__bar"]
    }
}
```

#### Fil historikken i GitHub ser ikke komplett ut.

GitHub [støtter ikke](http://stackoverflow.com/questions/5646174/how-to-make-github-follow-directory-history-after-renames) fil historikk for filer som det er endret navn på. Bruk [`git log --follow`](https://www.git-scm.com/docs/git-log) i stedet.

#### Skal jeg legge til et tomt navnerom (namespace) til en pakke som ikke eksporterer en modul,  for å bruke ES6-stilet import?

Noen pakker, som [chai-http](https://github.com/chaijs/chai-http), eksporterer en funksjon.

Hvis du importerer denne modulen med en ES6 stilet import av typen `import * as foo from "foo";` så får du denne feilmeldingen:

> error TS2497: Module 'foo' resolves to a non-module entity and cannot be imported using this construct

Denne feilmeldingen kan bli fikset ved å slå sammen deklarasjonen med et tomt navnerom med samme navn, men vi anbefaler ikke at man gjør det på denne måten.
Dette er er vanlig sitert [Stack Overflow svar](https://stackoverflow.com/questions/39415661/what-does-resolves-to-a-non-module-entity-and-cannot-be-imported-using-this) i henhold til dette.

Det er mer riktig å importere modulen, ved å bruke `import foo = require("foo");` syntaksen, eller å bruke en standard import som `import foo from "foo";`, hvis man bruker `--allowSyntheticDefaultImports` flagget, hvis modulens kjøreomgivelse støtter et interop scheme for ikke-ECMAScript modules som slike.

## Lisens

Dette prosjektet er lisensiert under MIT lisensen.

Kopirettigheter på definisjonene tilkommer bidragsyterne som det er henvist til i toppen av hver definisjonsfil.

[![Analytics](https://ga-beacon.appspot.com/UA-47495295-4/borisyankov/DefinitelyTyped)](https://github.com/igrigorik/ga-beacon)
