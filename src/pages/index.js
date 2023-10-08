import Company from '@/components/Company'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'


const companys = [
  {
    name: "3D Interactive Sthlm", 
    body: "Vi på 3D Interactive Sthlm AB är ett innovativt företag som specialiserar sig på utvecklingen av interaktiva 3D-lösningar med fokus på AR/VR/MR. Vi har länge legat i framkant när det gäller att revolutionera sättet människor interagerar med digitalt innehåll. Med ett team av högkvalificerade experter skapar 3D Interactive Sthlm fördjupande upplevelser som sömlöst sammanför den virtuella och fysiska världen. Att jobba hos oss innebär att du ingår i ett team som ständigt strävar efter att utvecklas och leverera innovativa och högkvalitativa produkter och tjänster med en tydlig kundnytta. Vi har en startup attityd men tydliga arbetsprocesser och en tydlig mission om att populära den riktiga världen med immersiva platsbaserade upplevelser.",
    lia: true,
    hire: true,
    contact: "Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "info@3dinteractive.se",
    contactWeb: null,
    links: [{ name: "Webbsida", url: "https://3dinteractive.se/sv/index.html" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/3d-interactive-sthlm-ab/" }, { name: "Rörlig presentation", url: "https://www.youtube.com/watch?v=AdJrKEWmHww"}],
    id: 1
  },
  {
    name: "Arbetsförmedlingen", 
    body: "Välkommen till händelsernas centrum. Här arbetar du på regeringens uppdrag och på en myndighet som just nu behövs mer än någonsin. Som experter på alla typer av arbetsmarknadsfrågor bidrar vi med allt från analyser till konkreta insatser som gör att fler människor snabbare och lättare hittar jobb. Nu utvecklar vi nya arbetssätt, nya lösningar och nya sätt att samarbeta med olika aktörer i hela landet. Därför behövs fler engagerade medarbetare inom IT som vill vara med och driva förändring inom viktiga områden – är du en av dem? Vi rekryterar ständigt så håll utkik.",
    lia: true,
    hire: true,
    contact: "För frågor angående LIA eller Arbetsförmedlingen:",
    contactEmail: null,
    contactWeb: "https://arbetsformedlingen.se/om-oss/jobba-hos-oss/jobba-med-it-hos-arbetsformedlingen",
    links: [{ name: "Webbsida", url: "https://arbetsformedlingen.se/om-oss/jobba-hos-oss" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/arbetsformedlingen/" }],
    id: 2
  },
  {
    name: "B3", 
    body: "B3 är ett konsultbolag som finns på elva orter. Vi är uppdelade i specialistenheter med stark entreprenörskraft där medarbetaren alltid sätts i första rummet. Vi är stolta och glada att för att utses till Sveriges bästa karriärföretag 2022. Detta efter att 2021 även varit finalist i Sveriges friskaste bolag och utsetts till Sveriges tredje bästa plats av Great Place to Work",
    lia: true,
    hire: true,
    contact: "För frågor ang LIA",
    contactEmail: "recruit@b3.se",
    contactWeb: null,
    links: [{ name: "Webbsida", url: "https://www.b3.se/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/b3it/" }],
    id: 3
  },
  {
    name: "Crosskey", 
    body: "Crosskey combines big-league IT capabilities with flexibility, engagement and a personal touch. We make it easier to create new revenue from financial services, getting you to market faster with the right offering. Our expertise covers everything from traditional banking to eBanking, card & mobile payments and capital markets. A subsidiary of Ålandsbanken, we have offices in Mariehamn, Stockholm, Helsinki and Turku. We offer you a fun and challenging workplace in an innovative company where our employees are the heroes. We have an open and flexible working culture built on mutual trust. Cooperation and feedback are some of the cornerstones. We love challenges and are driven by making our customers more successful.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "monika.sigmark@crosskey.fi",
    competences: "API gateways, Build Tools (Gradle), Spring Boot, SQL, Vaadin, Oracle, JBoss, OIDC, AWS, C#, Microservices, Gradle, Jenkins, CI/CD, Junit, Integration testing, Automated testing, Security, Integrations SOAP/REST APIs, JIRA and Scrum.",
    contactWeb: null,
    links: [{ name: "Webbsida", url: "https://www.crosskey.fi/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/crosskey-banking-solutions/" }],
    id: 4
  },
  {
    name: "Epinova", 
    body: "Vi är en certifierad Premier Managed Services Google Cloud partner med över 400 specialister över 20 länder, och arbetar med allt från infrastruktur och applikationsutveckling till data engineering och machine learning. Med närmare 3000 kunder så strävar vi efter att vara en global ledare inom Google Cloud teknologier och en Google Cloud Premier Partner som håller sig i framkant.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "annika.jansson@epinova.se",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://www.epinova.se/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/epinova/" }],
    id: 5
  },
  {
    name: "Extenda Retail",
    body: "Extenda Retail är ett mjukvarubolag som befinner sig på en tillväxtresa med sikte mot den globala marknaden. De två hörnstenarna i vårt företag är mjukvara och retail. Vi levererar mjukvarulösningar inom många marknadssegment såsom butiksmiljöer inom mode, matbutiker, apotek såväl som lageroptimering och logistiklösningar. Vår ambition är att digitalisera köpupplevelsen för konsumenten såväl som att underlätta lagerhantering genom bland annat automatisering och AI. Vi strävar alltid efter att kombinera och vidareutveckla tills vi har den perfekta lösningen för våra kunder. Våra produkter används i mer än 35 länder genom kunder såsom H&M, ICA, Coop, Postnord och DHL. Extenda Retail sysselsätter omkring 700 medarbetare i Sverige, Norge, Nederländerna, UK, Spanien, Rumänien och Moldavien Vi har uppmärksammats för vår värdeskapande kultur och fått flera utmärkelser för vår attraktiva arbetsplats.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor. Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant",
    contactEmail: "ylva.brene@extendaretail.com",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://www.extendaretail.com/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/extenda-retail/"}, {name: "Hur det är att jobba hos oss", url: "https://career.extendaretail.com/pages/life-at-extenda-retail"}],
    id: 6
  },
  {
    name: "IBM",
    body: "Are you craving to learn more? Prepared to solve some of the world’s most unique challenges? And ready to shape the future for millions of people? If so, then it’s time to join us, express your individuality, unleash your curiosity and discover new possibilities.Every IBMer, and potential ones like yourself, has a voice, carves their own path, and uses their expertise to help co-create and add to our story. Together, we have the power to make meaningful change – to alter the fabric of our clients, of society and IBM itself, to create a truly positive impact and make the world work better for everyone. It’s time to define your career.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor. Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant",
    contactEmail: "hakan.c.andersson@se.ibm.com",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://www.ibm.com/uk-en" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/ibm/"}, {name: "Rörlig presentation", url: "https://www.youtube.com/watch?v=TKlKxLXuWu8"}],
    id: 7
  },
  {
    name: "NoA Ignite",
    body: "Vi är NoA Ignite. Vi samlar visionärer, okonventionella hjärnor och erfarna experter under ett och samma tak för att bygga banbrytande digitala upplevelser i den yttersta tekniska framkanten. Tillsammans är vi fler än 400 kollegor utspridda över fyra länder men med ett och samma mål – att bekämpa digital tristess. I en värld där digitala gränssnitt ser allt mer likadana ut vill vi tänja på gränserna för att skapa onlineupplevelser som både berör och engagerar användaren.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "jens.isaksson@thenorthalliances.com",
    contactWeb: null,
    competences: "Vi är tech-agnostiska och utvärderar alla kompetenser men arbetar framförallt med React, Next.js, Node, Sanity, Centra, Optimizely (Episerver), Contentful, och Microsoftplattformen.",
    links: [{ name: "Webbsida", url: "https://noaignite.se/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/noaignitesweden/" }, {name: "Rörlig företagspresentation", url: "https://vimeo.com/836146830/2eb77dbc41?share=copy"}],
    id: 8
  },
  {
    name: "Mestro",
    body: "Mestro utvecklar och säljer en molnbaserad produktsvit som hjälper fastighetsägare att ta kontroll över sin energianvändning och minska sin klimatpåverkan. I tider som dessa, med en lågkonjunktur runt hörnet och i brinnande energi- och klimatkris är våra produkter helt rätt positionerade för fastighetsägare som behöver spara kostnader, automatisera digitala processer och visa upp goda resultat i sina hållbarhetsrapporter. Att fastigheter dessutom står för 40% av Sveriges energianvändning gör att produkter likt vår blir en “must have” i den stora klimatomställningen. Hos oss får du vara med och bidra, på riktigt. Du får jobba med riktiga case och tillsammans med våra utvecklar-team vara med om att skapa verktyget som ska lösa en av vår tids största klimatproblem!",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "jimmy.persson@mestro.se",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://mestro.com/sv/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/mestro/" }, {name: "Företagsfilm", url: "https://www.youtube.com/watch?v=U7bgTVrJfjU"}],
    id: 9
  },
  {
    name: "Polisen",
    body: "Du behöver inte vara polis för att jobba inom polisen. Polisens IT-avdelning är en del i det brottsbekämpande arbetet, vi ger service till medborgarna och underlättar för myndighetens medarbetare att utföra sina uppdrag. I takt med att digitaliseringen ökar måste polisen kunna hantera allt större datamängder, dra nytta av nya teknologier och ligga steget före de kriminella, utan att kompromissa med säkerhet och rättssäkerhet. Att jobba på polisens IT-avdelning är att vara en avgörande del i polisens verksamhet. Oavsett om det handlar om att utveckla ny forensisk teknologi eller kommunicera via polisradion krävs väl fungerande IT-lösningar.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "student.it-avdelningen@polisen.se",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://polisen.se/jobb-och-utbildning/jobba-hos-polisen/var-verksamhet/jobb-it-avdelningen/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/polismyndigheten/" }, {name: "Företagsfilm", url: "https://www.youtube.com/watch?v=agk4NVZCseI"}],
    id: 10
  },
  {
    name: "Releye",
    body: "På Releye är vi strategiskt inriktade konsulter som specialiserar oss på att implementera CRM-plattformarna Microsoft CRM och Salesforce. Vårt gemensamma kontor vid Odenplan är fullt med glada och sociala kollegor som utöver att vi arbetar även har AWn och kubbturneringar. Hoppas vi ses!",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "cecilia.landin@releye.se",
    contactWeb: null,
    competences: "Sociala och ansvarstagande personer som vill bli implementationskonsulter. Vi ser gärna att du har tidigare erfarenheter av att jobba i någon typ av service- eller konsultjobb.",
    links: [{ name: "Webbsida", url: "https://releye.se/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/releye/" }, {name: "Alternativ LinkedIn", url: "https://www.linkedin.com/company/sweet-systems"}],
    id: 11
  },
  {
    name: "Scania",
    body: "Scania is a world-leading provider of transport solutions committed to a better tomorrow. Our purpose is to drive the shift towards a sustainable transport system. In doing so, we are creating a world of mobility that’s better for business, society and our environment. Scania’s culture is both pragmatic and ambitious. We want to drive real change and by harnessing the power of innovation, we are finding answers to some of our most urgent sustainability challenges, from urban mobility to climate change. At the same time, technologies such as electrification and automation are radically re-shaping our business, creating exciting new opportunities and business models.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor",
    contactEmail: "employerbranding.sweden@scania.com",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://www.scania.com/group/en/home/career.html" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/scania/" }, {name: "Rörlig företagspresentation", url: "https://www.youtube.com/watch?v=o_JBfvBj5Hg"}],
    id: 12
  },
  {
    name: "TECHNIA",
    body: "TECHNIA is a leading PLM company with a solid global presence, known for its innovation and commitment to excellence. We help our customers resolve tough business challenges and realize business opportunities. We provide exceptional PLM solutions comprising software, systems and services for critical business processes in vertical markets across the globe. Combining industry-leading Product Lifecycle Management (PLM) tools with specialist knowledge, our mission is to make product creation what it should be – easy. TECHNIA will offer you an inspiring role in a dynamic and international organization with great values and a sustainable profitable growth strategy. TECHNIAs four core values and attitudes, Go Explore, Work Together, Build Trust, and Keep Learning define who we are and how we work together.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "cecilia.stenberg@technia.com",
    applyEmail: "career@technia.com",
    contactWeb: null,
    competences: "Någon som delar våra värderingar och attityder. Ett intresse för PLM lösningar och hållbarhet är såklart ett plus. Vi talar Engelska med många kollegor så det är det viktigt att vara bekväm med.",
    links: [{ name: "Webbsida", url: "https://www.technia.com/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/technia/" }],
    id: 13
  },
  {
    name: "Trafikförvaltningen Region Stockholm",
    body: "På trafikförvaltningen är vi cirka 900 medarbetare som varje dag arbetar för att skapa en närmare, tryggare och mer hållbar kollektivtrafik i världsklass. Följ med oss på resan! Hos oss på trafikförvaltningen får du jobba med starka varumärken som SL, Waxholmsbolaget, Färdtjänst i Region Stockholm och Spårvägsmuseet. Tillsammans ansvarar vi för halva Sveriges kollektivtrafik och vi har höga ambitioner. Vi utvecklar en av världens mest hållbara och attraktiva kollektivtrafik. Och vi jobbar dagligen med att minska vår miljöpåverkan, öka social hållbarhet och ansvarfullt förvalta våra gemensamma medel. Utan oss stannar Stockholm. Trafikförvaltningen är ett karriärföretag 2023! Vi vill vara ett självklart val för unga talanger som vill jobba med ett samhällsviktigt uppdrag och vara med och utveckla framtidens kollektivtrafik. Därför välkomnar vi varje år dig som student med intresse för kollektivtrafik och samhällsutveckling. Hos oss finns goda möjligheter att skriva ditt examensarbete eller göra praktik/LIA för att få inblick i verksamheten, knyta kontakter för framtiden och möjligheter till fortsatt anställning.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "student@sl.se",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://www.regionstockholm.se/om-regionstockholm/Organisation/forvaltningar/trafikforvaltningen/jobba-pa-trafikforvaltningen/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/trafikforvaltningen-region-stockholm/?originalSubdomain=se" }],
    id: 14
  },
  {
    name: "Triggerbee",
    body: "Triggerbee är en trygg, rolig och dynamisk arbetsplats där du kan utvecklas och få ditt bästa arbete utfört. Vår mission är att göra webbkanalen till mer relevant till fördel för både konsumenter och företag. Alla företag ska kunna bli framgångsrika i den digitala världen utan att tvingas köpa sin trafik från de stora amerikanska jättarna. Hos oss får du meningsfulla uppgifter som direkt påverkar affärsresultatet. Genom att samarbeta kan vi åstadkomma stora saker, även med ett mindre team. Vi vill att våra medarbetare ska må bra och ha en fin balans i livet. Därför erbjuder vi flexibilitet när det kommer till möjligheterna att arbeta från kontoret och hemifrån. Vi har en härlig gemenskap, med teamaktiviteter och resor där vi fokuserar på att ha roligt ihop och kombinera fysisk aktivitet (som volleyboll eller cykling) med njutning (som god mat och dryckprovningar). Bra villkor och fördelar: Pensionsförsäkring, friskvårdsbidrag och sjukvårdsförsäkring ingår för våra anställda.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "johan.lindholm@triggerbee.com",
    contactWeb: null,
    competences: "Drivna och vill utvecklas. God kommunikation. Gillar att ta eget ansvar och kan jobba både i team samt självständigt.",
    links: [{ name: "Webbsida", url: "https://triggerbee.com/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/triggerbee/" }, { name: "Företags film", url: "https://www.youtube.com/watch?v=N05DXauogD8"}, {name: "Karriärsida", url: "https://triggerbee.com/career"}],
    id: 15
  },
  {
    name: "Zington",
    body: "Zington är en digital helhetspartner med kompetens inom IT, digital design och management. Vi är 250 konsulter i Stockholm som hjälper dig att möta utmaningar och utveckla din affär i en digital värld. Det gör vi genom att utforma strategier, designa tjänster och bygga lösningar som driver din affär framåt. Från idé till genomförande, med fokus på människan, tekniken och affären.",
    lia: true,
    hire: true,
    contact: "Du kan kontakta mig om du har några frågor, Bifoga CV och en kort presentation av dig och berätta varför du är intresserad av att göra din praktik eller att jobba hos oss. Vi kontaktar dig ifall din profil låter intressant.",
    contactEmail: "alexander.guitz@zingtongroup.com",
    contactWeb: null,
    competences: null,
    links: [{ name: "Webbsida", url: "https://www.zingtongroup.com/" }, { name: "LinkedIn", url: "https://www.linkedin.com/company/zington/?originalSubdomain=se" }],
    id: 16
  },
]


export default function Home() {
  const [userComments, setUserComments] = useState([])

  useEffect(() => {
    const localStorageComments = window.localStorage.getItem("userComments")
    { localStorageComments ? setUserComments(JSON.parse(localStorageComments)) : console.log("no")}
  }, [])


  useEffect(() => {
    {userComments.length > 0 && window.localStorage.setItem("userComments", JSON.stringify(userComments)) }
  }, [userComments])


  return (
    <>
      <Header />
      <main className='max-w-2xl flex flex-col justify-center' id="top">
        <h1>test</h1>
        {companys.map((company, i) => {
          return <Company key={i} company={company} userComments={userComments} setUserComments={setUserComments} />
        })}
      </main>
    </>
  )
}
