import React from 'react'
import './brandsNapra2.css'
import logga1 from '../assets/img/polfärskt.jpeg'
import logga2 from '../assets/img/Logotype Crossfit södertörn.jpg'
import logga3 from '../assets/img/logga olofsson bil.jpg'
import logga4 from '../assets/img/logga länna sport.jpg'

const BrandsNapra2 = () => {
    return (
        <div id="foretag" className='brands-napra2-container'>

            <div className='brands-napra2_reach-out-container'>
                <h3 className='brands-napra2_reach-out-container_title'>Naprapati eller friskvård/rehabilitering för ditt företag</h3>
                <h5 className='brands-napra2_reach-out-container_subtitle'>-En god och effektiv investering för dig och dina anställda</h5>
                <div className='brands-napra2_reach-out-container_card'>
                    <h5 className='brands-napra2_reach-out-container_subtitle'>Går ni i tankarna på att erbjuda era anställda naprapatbehandling eller friskvård/massage?</h5>
                    <p>- Förmånen rehabilitering och förebyggande behandling är skattefri. Som arbetsgivare kan du göra avdrag för kostnader för förebyggande behandling. En annan lösning för naprapati via företaget är med bruttolöneavdrag. Det innebär att den anställdas kostnad blir billigare samtidigt som det är kostnadsfritt för företaget.
                        Kontakta oss om du vill veta mer, eller för att se hur vi tillsammans kan skräddarsy en lösning utifrån era behov och önskemål.
                        Det finns ingen mall, utan vi kommer tillsammans fram till vad som passar just er bäst.
                    </p>
                </div>
                <div className='brands-napra2_reach-out-container_card'>
                    <h5 className='brands-napra2_reach-out-container_subtitle'>Naprapatbehandling eller massage/friskvård på ditt företag:</h5>
                    <p>
                        Innebär att vi kommer till er arbetsplats och tar med oss den utrustning som behövs samt utför behandlingar och massage anpassat efter den enskilda individens behov. Med regelbundna behandlingstillfällen för dina anställda så minskar risken för sjukskrivningar, då behandlingarna också har ett förebyggande syfte dåjag genom mina undersökningar och behandlingar kan upptäcka och minska problem/besvär innan de uppstår.
                        Fördelen med behandlingar på arbetsplatsen innebär också ett enkelt och bekvämt sätt för de anställda att få behandling utan längre arbetsuppehåll.
                    </p>
                    <p>
                        Som naprapat använder vi flera behandlingstekniker och metoder för att minska smärta, återställa funktion och förhindra återkomst besvär från kroppens muskler och leder. Några av de tekniker som vi använder oss av är manipulation, mobilisering, stretch, massage, triggerpunktsbehandling med pressur och dry needling (nålbehandling).
                    </p>
                    <p>
                        Vi jobbar med besvär från hela kroppen. Allt  från besvär med rygg och nacke, till smärta från armbågar (så som musarm, tennisarm), huvudvärk, axlar, knän och fötter.
                    </p>
                    <p>
                        Många arbeten idag innebär statiska, monotona och ofta stillasittande arbetspositioner, som leder till spänningar i kroppens muskler och leder. Förutom att behandla och rehabilitera  personalens besvär/ skador så lägger vi också, om behov finns, upp en förebyggande plan samt adresserar ergonomin för varje enskild individ.
                    </p>
                </div>
                <div className='brands-napra2_reach-out-container_card'>
                    <h5 className='brands-napra2_reach-out-container_subtitle'>Om ni hellre vill ha fasta tider som utförs här på kliniken eller låta era anställda själva boka tid så går det också bra!</h5>
                    <p>
                        För offert eller andra frågor kontakta oss via e-post: info@naprapatrehab.com
                    </p>
                </div>
                <div className='brands-napra2_reach-out-container_card'>
                    <h5 className='brands-napra2_reach-out-container_subtitle'>Idrottare/Idrottsföreningar</h5>
                    <p>
                        Som naprapat är man också utbildad inom idrottsmedicin. Det innebär att vi har utbildning inom akut handläggning av idrottsskador, men också behandling och rehablitering av kroniska, långvariga besvär från kroppens muskler och leder som uppkommit i samband med idrottsutövande.
                    </p>
                    <p>
                        Oavsett om det gäller förebyggande och rehabiliterande träning, screening och rörelseanalyser, individuellt träningsprogram för att minska risken för skador eller behandling av redan befintlig skada/besvär så är du välkommen att boka tid eller ta kontakt med oss för att se hur vi på bästa sätt kan hjälpa dig/er.
                    </p>
                    <p>
                        Har du eller din förening frågor eller funderingar på hur vi kan hjälpa er, tveka inte att höra av dig.
                    </p>
                </div>

            </div>


            <div className='brands-napra2_logos'>
                <div className='brands-napra2_logos_logo-container'>
                    <img src={logga1} alt="polfarsk logga" />
                </div>
                <div className='brands-napra2_logos_logo-container'>
                    <img src={logga2} alt="polfarsk logga" />
                </div>
                <div className='brands-napra2_logos_logo-container'>
                    <img src={logga3} alt="polfarsk logga" />
                </div>
                <div className='brands-napra2_logos_logo-container'>
                    <img src={logga4} alt="polfarsk logga" />
                </div>
            </div>
        </div>
    )
}

export default BrandsNapra2