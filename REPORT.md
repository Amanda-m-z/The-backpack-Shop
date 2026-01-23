# 📌 Rättningsrapport – fed25s-the-webshop-webbshop-grupp1-backpack

## 🎯 Uppgiftens Krav:
# The Webshop - En inlämningsuppgift

Denna uppgift går ut på att ni skall bygga en webbshop baserat på kraven här under.
Projektet är ett vite-projekt med vanilla/typescript.
Målet är att studenterna skall förstå vad som krävs för att skicka information mellan sidor, använda localStorage och kunna manipulera data i listor och objekt.

## VIKTIGT

Varukorgen skall vara en lista med objekt som baseras på en ny klass eller datatyp. Denna klass/datatyp skall innehålla en produkt men också hur många av denna produkt som varukorgen har. Ibland kan det behövas mer information i detta objekt, men minst skall klassen innhålla produkt och antal på något sätt.

## Teknik

- HTML
- SCSS
- TypeScript

## Krav - Betyg G

- En landningssida (startsida)
- En produktsida (Produktdetaljer)
- En kassasida
- En varukorg
- Kunna lägga produkter i varukorgen
- Simulera att ett köp genomförs på kassasidan
- Beräkna fram ett totalpris på produkterna i varukorgen
- Att informationen i varukorgen lagras genom utökade objekt, inte bara en produkt
- Att kunna öka/minska antalet produkter i varukorgen.
- Att kunna öka/minska antalet produkter på kassasidan
- Koden skall vara mycket väl strukturerad, väl formaterad samt innehålla god namngivning

## Styling

Försök att arbeta med så mycket styling ni hinner. Det är en rolig uppgift att ha med i ett portfolio framöver. Se till att era animationer är subtila. Arbeta med hero-images, kanske med lite video/ljud. Och skapa en bra struktur mer er scss redan från början.

## Krav för styling

Det är inget krav att video och ljud används.
Partials bör användas.
Mixins skall användas om möjligt, t.ex. för mediaqueries.
Ingen dubbelstyling, används mixins i sådana fall.

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-grupp1-backpack\src\main.ts - no-console - Unexpected console statement.,no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-grupp1-backpack\src\pages\OneProduct\oneProductPage\createSimilarProductsSection.ts - no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-grupp1-backpack\src\pages\home\loopNew.ts - no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed25s-the-webshop-webbshop-grupp1-backpack\src\pages\home\product_highlight_card.ts - no-console - Unexpected console statement.

## 🏆 **Betyg: G**
📌 **Motivering:** Projektet uppfyller kraven för betyget G utifrån den granskade koden: ni har en landningssida, produktsida och kassasida, en fungerande varukorg (overlay), möjlighet att lägga till produkter i varukorgen, beräkning av totalpris, samt lagring i localStorage via utökade objekt (t.ex. ProductCart med quantity). Det går också att öka/minska antal både i varukorgen och på kassasidan, och köpflödet simuleras genom submit-handler som bekräftar köp och tömmer localStorage. Strukturen är överlag modulär (t.ex. pages/, Cart/, scss/partials) och TypeScript-typer används.

Samtidigt finns flera kodkvalitets- och robusthetsproblem som gör att kravet på “mycket väl strukturerad, väl formaterad samt innehålla god namngivning” bara delvis uppfylls: inkonsekvent mapp-/filnamngivning och imports (t.ex. Cart vs cart, Services vs services) riskerar att bygget kraschar på case-känsliga system. Det finns även duplicerad markup i HTML (t.ex. dubbla sektioner/blocks), inkonsekventa/fragila relativa länkar mellan sidor (olika antal ../), element-id:n som refereras i TS men inte tydligt finns i HTML, samt bristande felhantering kring nätverksanrop och localStorage-parsning. Trots detta är funktionaliteten som krävs för G på plats och helheten håller godkänd nivå.

💡 **Förbättringsförslag:**  
1) Standardisera fil- och mappnamn (case/path) och uppdatera imports konsekvent (t.ex. alltid src/cart och src/services). Detta är en potentiellt “build-breaking” fråga på macOS/Linux.

2) Rensa duplicerad/inkonsekvent HTML: ta bort dubbla sektioner (t.ex. dubbla newsletter/header-block) och säkerställ att varje id bara finns en gång och faktiskt används.

3) Gör navigation robust i en Vite-app: undvik sköra relativa sökvägar som "../../../oneproduct.html" och "../../checkout.html". Använd konsekventa absoluta paths (t.ex. "/checkout.html") eller en gemensam helper för routing/länkbygge.

4) Lägg till felhantering för API-anrop (try/catch) och visa fallback i UI vid fel (tom lista, felmeddelande, loader).

5) Säkra localStorage-data: validera att parsad data har rätt form innan ni renderar (undvik att JSON.parse kan ge fel typ och orsaka runtime-crash).

6) Minska duplicerad DOM-byggkod: ni skapar produktkort på flera ställen med liknande logik—extrahera en gemensam funktion/komponent och återanvänd den.

7) SCSS: ni använder partials bra, men lägg till minst en mixin (t.ex. för breakpoints/media queries) och undvik dubbelstyling mellan Bootstrap-klasser och egna knappklasser genom att standardisera.

Ni har fått ihop ett komplett flöde med varukorg + checkout och tydlig localStorage-hantering—bra jobbat. Fortsätt bygga vidare på detta genom att strama upp struktur/namngivning och göra koden mer robust, så kommer projektet kännas betydligt mer “production ready”.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Emma Pang | 99 | 37.1% | 0.25 | 0.3 |
| Amanda-m-z | 85 | 31.8% | 0.25 | 0.28 |
| Benjamin Palmroth | 43 | 16.1% | 0.25 | 0.21 |
| Cecilia Edstein | 40 | 15% | 0.25 | 0.21 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
