import React from 'react';
import "./main.css"

export default function Main() {
    return (
        <main>
            <p>
                React är ett JavaScript-bibliotek som mest är känt för sitt sätt att bygga och återanvända komponenter. Med hjälp av React kan man i komponenterna skriva HTML direkt i JavaScript-koden i form av JSX som sedan omvandlas till ren JavaScript. Komponenterna är mindre delar som tillsammans kan hanteras i en större applikation genom uppdateringar av olika värden (states) som genom detta skapar snabba och användarvänliga upplevelser. States sparar värden och dessa värden kan man använda runt om i sina applikationer för att göra dem dynamiska, detta sker genom att man skickar dessa värden vidare i komponenterna i form av props.
            </p>

            <p>
                Vite är ett redskap som snabbt och enkelt sätter upp och konfigurerar nya projekt.
            </p>
        </main>
    );
}