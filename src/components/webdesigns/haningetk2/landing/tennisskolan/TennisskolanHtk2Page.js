import React from 'react'
import './tennisskolanhtk2page.css'
import { useContext } from 'react';
import { Htk2Context } from '../../Haningetk2';

const TennisskolanHtk2Page = () => {

    const htk2 = useContext(Htk2Context);

    console.log('link @TennisskolanHtk2Page: ', htk2.link);

    return (
        <div className='htk2_tennisskolan_container'>
            <div>

                {htk2.link === "T-skolan" &&
                    <div>
                        <h1>T-skolan</h1>
                        <h3>Tennisskolan är öppen för både nybörjare och mer vana spelare av varierande åldrar - allt från minitennis till vuxengrupper.</h3>
                        <h3>Tennisskolan löper terminsvis och pågår alla dagar i veckan, dock med uppehåll för skollov. Träningen pågår i regel under en timme per gång och standarduppsättningen är en tränare och 4-6 elever. Varje elev tränar en eller flera tillfällen per vecka enligt önskemål. Schemat läggs med avsikt att så långt det går skapa jämna grupper efter ålder och spelerfarenhet.</h3>
                    </div>
                }

                {htk2.link === "Prislista" &&
                    <div>
                        <h1>Prislista</h1>
                        <h3>Tennisskola</h3>
                        <h3>Vuxengrupp - 15 tillfällen-</h3>
                        <h3>Minitennis - 15 tillfällen</h3>
                        <h3>T-skolans höst- och vårtermin omfattar c a 15 veckor vardera (bollar, tränare och omklädningsrum med duschar ingår i priset)</h3>
                    </div>
                }

                {htk2.link === "Tränarna" &&
                    <div>
                        <h1>Tränarna</h1>
                        <h3>Nenad Markovic</h3>
                        <h3>Slobodan Antic</h3>
                        <h3>Gabriel Gliori</h3>
                        <h3>Ludvig Ekelund</h3>
                    </div>
                }
            </div>
            <div className='htk2_tennisskolan-link_container'>
                <span onClick={() => htk2.setLink("T-skolan")}>T-skolan</span>
                <span onClick={() => htk2.setLink("Prislista")}>Prislista</span>
                <span onClick={() => htk2.setLink("Tränarna")}>Tränarna</span>
            </div>
        </div>
    )
}

export default TennisskolanHtk2Page