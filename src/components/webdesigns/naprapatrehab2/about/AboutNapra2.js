import React from 'react'
import './aboutNapra2.css'

const AboutNapra2 = () => {

    const mediaQueryCondition = window.matchMedia('( max-width: 600px )').matches;

    return (
        <div id="om-oss" className='about-napra2-container'>


            <div className='about-napra2-container_images'>
                <div className='about-napra2-container_card'>
                    <div id='about1' className='about-napra2-container_images-card'>
                        <div className='about-napra2-container_images-card_title-container'>
                            <p className='about-napra2-container_card-title'>Susanne Nyström</p>
                            <p className='about-napra2-container_card-title'>Leg. Naprapat</p>
                        </div>

                    </div>
                    <div className='about-napra2-container_images-card_description-container'>
                        <p>Jag är en glad, positiv och engagerad naprapat. Mitt intresse för naprapati växte fram under min tid som aktiv elitgymnast då jag deltog i både mindre och större tävlingar som SM och NM. Idag tränar jag crossfit, löpning och en hel del hemmaträning.  Jag har arbetat med dansare på Kungliga Svenska Baletthögskolan och har även tränat små blivande gymnaster i Vendelsö Gymnastikförening och Dalarö Sportklubb. Efter att jag avslutat min utbildning har jag utökat min kompetens med akupunktur (Dry needling) och jag är certifierad MammaMagetränare.</p>
                        <p>Mitt företag DS Nyström AB (tidigare S.O.Skärgårdsnaprapaten) har jag har drivit sen år 2008  då jag fortfarande gick och utbildade mig till naprapat på Naprapathögskolan i Stockholm.  Min verksamhet började med att jag åkte ut på företag för att behandla personal och idag har jag startat Naprapat & Rehabcenter Haninge AB tillsammans med mina kollegor Sofie Andersson och Line Jonasson. Drömmen är att få vara en del av ett center där flera kompetenser samlats under samma tak för att kunna hjälpa dig som patient på bästa möjliga sätt.</p>
                    </div>
                </div>

                {mediaQueryCondition ?

                    <div className='about-napra2-container_card'>

                        <div id='about2' className='about-napra2-container_images-card'>
                            <div className='about-napra2-container_images-card_title-container'>
                                <p className='about-napra2-container_card-title'>Line Jonasson</p>
                                <p className='about-napra2-container_card-title'>Leg. Naprapat</p>
                            </div>
                        </div>
                        <div className='about-napra2-container_images-card_description-container'>
                            <p>Line Jonasson, legitimerad naprapat och har jobbat inom hälsa, träning och rehabilitering sedan 2001.</p>
                            <p>Jag brinner för mitt yrke och den känslan som infinner sig när en patient går ifrån en behandling med mindre smärta. Jag tycker att arbetet som terapeut blir roligare för varje år som går och jag väljer att kontinuerligt fortbilda mig inom olika behandlingsformer och träning för att du som patient ska kunna få den bästa hjälpen och vägledningen med just dina besvär.</p>
                            <p>Jag har idrottat hela mitt liv med framför allt simning i Södertörnssimsällskap både som simmare och tränare. Har även sysslat med gymnastik och lite friidrott. Idag så är jag utbildad både inom pilates, yoga och soma move/mind och har tidigare hållt i  klasser på Iform friskvårdscenter i Haninge under många år.  Mitt intresse för att hjälpa människor startade framför allt efter en film jag såg när jag var barn som heter Fallet Henry med Harrison Ford. Har sedan dess velat hjälpa människor med smärta och tillbaka till full funktion. Den filmen ligger mig fortfarande varmt om hjärtat.</p>
                        </div>
                    </div>

                    :

                    <div className='about-napra2-container_card'>
                        <div className='about-napra2-container_images-card_description-container'>
                            <p>Line Jonasson, legitimerad naprapat och har jobbat inom hälsa, träning och rehabilitering sedan 2001.</p>
                            <p>Jag brinner för mitt yrke och den känslan som infinner sig när en patient går ifrån en behandling med mindre smärta. Jag tycker att arbetet som terapeut blir roligare för varje år som går och jag väljer att kontinuerligt fortbilda mig inom olika behandlingsformer och träning för att du som patient ska kunna få den bästa hjälpen och vägledningen med just dina besvär.</p>
                            <p>Jag har idrottat hela mitt liv med framför allt simning i Södertörnssimsällskap både som simmare och tränare. Har även sysslat med gymnastik och lite friidrott. Idag så är jag utbildad både inom pilates, yoga och soma move/mind och har tidigare hållt i  klasser på Iform friskvårdscenter i Haninge under många år.  Mitt intresse för att hjälpa människor startade framför allt efter en film jag såg när jag var barn som heter Fallet Henry med Harrison Ford. Har sedan dess velat hjälpa människor med smärta och tillbaka till full funktion. Den filmen ligger mig fortfarande varmt om hjärtat.</p>
                        </div>
                        <div id='about2' className='about-napra2-container_images-card'>
                            <div className='about-napra2-container_images-card_title-container'>
                                <p className='about-napra2-container_card-title'>Line Jonasson</p>
                                <p className='about-napra2-container_card-title'>Leg. Naprapat</p>
                            </div>
                        </div>
                    </div>

                }


                <div className='about-napra2-container_card'>
                    <div id='about3' className='about-napra2-container_images-card'>
                        <div className='about-napra2-container_images-card_title-container'>
                            <p className='about-napra2-container_card-title'>Sofie Schmidt</p>
                            <p className='about-napra2-container_card-title'>Leg. Naprapat</p>
                        </div>
                    </div>
                    <div className='about-napra2-container_images-card_description-container'>
                        <p>Jag är en person som tycker om att hjälpa andra. Oavsett om det handlat om att lyssna eller agera för att få någon att må bra, så har jag alltid brunnit för det. Detta tillsammans med mitt stora intresse för idrott och träning samt min kärlek till att få arbeta med händerna och vara kreativ var anledningen till att jag, efter några härliga år med jobb och resande efter studenten, år 2009 sökte mig till Naprapathögskolan i Stockholm.</p>
                        <p>Jag har som sagt alltid haft ett stort intresse för idrott och fritidsaktiviter, vilket  var en av anledningarna till att jag började studera till naprapat. Att träna och röra på sig, oavsett om det handlat tävling, match eller för att må bra, så har det alltid varit en stor del av mitt liv.</p>
                        <p>Jag har varit aktiv inom många sporter och idrotter, så som gymnastik, dans, ridning och innebandy. Det som dock alltid varit min största passion och där jag har mest erfarenhet både som spelare och ledare är inom fotboll.

                            Numera ägnar jag mig mest åt blandad träning och aktiviteter som styrketräning, klättring, cykling, löpning, längsskidor, rullskidor och golf.</p>
                        <p>Sedan examen från naprapathögskolan har jag startat och drivit min verksamhet, först som konsult på Ryggkliniken i Stockholm, där jag också gjorde min leg. praktik efter utbildningen. Därefter i början av 2014, så var det dags att komma igång och starta upp verksamheten här ute i Haninge, där jag är uppväxt och bor än idag.</p>
                    </div>
                </div>
            </div>

            <div className='about-napra2-container_description'>
                <div className='about-napra2-container_description-text'>
                    <p className='about-napra2-container_description-text_title'>Från början...</p>
                    <p className='about-napra2-container_description-text_subtitle'>var vi enskilda företag som arbetade på varsitt håll, men i samma lokaler. Vänskapen och samarbetet växte fram och vi bestämde oss under hösten 2015 för att gå ihop och bilda det som idag är Naprapat & Rehabcenter Haninge.</p>
                    <p className='about-napra2-container_description-text_title'>Vägen hit...</p>
                    <p className='about-napra2-container_description-text_subtitle'>har varit mycket spännande, rolig och givande men som med allt här i livet inte helt utan gropar i vägen. Vi ser ljust på framtiden tillsammans och hoppas att få  spendera många timmar tillsammans framöver, där vi på bästa sätt vill finnas till  för er som på något sätt kan tänkas behöva vår hjälp.</p>
                    <p className='about-napra2-container_description-text_title'>Under sommaren 2017...</p>
                    <p className='about-napra2-container_description-text_subtitle'>flyttade vi vår verksamhet från Hantverkarvägen 22, ca 200 meter rakt över gatan till Hantverkarvägen 23 C. En flytt som innebar nya fräscha lokaler och  behandlingsrum samt ett rehab-/träningsrum.</p>
                </div>
                <div className='about-napra2-container_description-text'>
                    <p className='about-napra2-container_description-text_title'>Vår målsättning...</p>
                    <p className='about-napra2-container_description-text_subtitle'>och vision med Naprapat & Rehabcenter Haninge är att växa och  i framtiden knyta till oss  andra yrkessamma terapeuter och pedagoger som liksom vi jobbar med hälsa och rehabilitering.
                    </p>
                    <p className='about-napra2-container_description-text_title'>I början...</p>
                    <p className='about-napra2-container_description-text_subtitle'>av 2021 så flyttade Emelie´s kroppsvård in i vårat rehabrum där hon som utbildad kinesiolog, massör och zonterapeut utför behandlingar. Vi är glada för detta och ser fram emot gott samarbete och en kollega som brinner för att hjälpa människor till en friskare och starkare kropp. </p>
                    <p className='about-napra2-container_description-text_title'>Under hösten 2021...</p>
                    <p className='about-napra2-container_description-text_subtitle'>i samband med att Line gick hem på föräldraledighet så utökade vi vår bemmaning med ytterligare en leg. naprapat, nämligen vår kära kollega Charlotte Jacobsson. Detta är vi så glada och tacksamma för då Charlotte besitter många års erfarenhet inom branschen.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutNapra2