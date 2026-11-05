# Estonia — legal sources (verified)

## Küberturvalisuse seaduse ja teiste seaduste muutmise seadus, RT I, 30.12.2025, 4 (read 2026-10-28)

<!-- meta: theme=statute,registration; type=reference,status-error; date=2026-10-28; surfaces=data,prompt; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Official citation:** Küberturvalisuse seaduse ja teiste seaduste muutmise
  seadus (küberturvalisuse 2. direktiivi ülevõtmine), RT I, 30.12.2025, 4.
  Adopted by the Riigikogu on 2025-12-10, promulgated by the President on
  2025-12-18 (decision 640). It amends the 2018 Küberturvalisuse seadus (KüTS)
  and nine other acts; it does not replace KüTS.
- **Official URLs:** https://www.riigiteataja.ee/akt/130122025004 ; consolidated
  KüTS in force since 2026-10-16 https://www.riigiteataja.ee/akt/106102026002 ;
  RIA notification page (updated 15.06.2026)
  https://www.ria.ee/kuberturvalisus/riigi-infoturbe-meetmete-haldus/teenuseosutaja-eits-auditi-iso-sertifikaadi-pilvandmetootluse-teade
- **Retrieved + read:** 2026-10-28. The amending act in full (XML from the Riigi
  Teataja public API); in consolidated KüTS §§ 3¹-5, 20, 28¹, 29 and the
  amendment list; the amendment RT I, 06.10.2026, 1 in full (it changes none of
  the facts below).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Amends KüTS | § 1 | "Küberturvalisuse seaduses tehakse järgmised muudatused:" | ✅ |
| In force 2026-01-01 | § 11 | "Käesolev seadus jõustub 2026. aasta 1. jaanuaril." | ✅ |
| Authority and single point of contact | KüTS § 5(3)(1) | "Riigi Infosüsteemi Amet täidab … 1) artikli 8 lõikes 1 nimetatud pädeva asutuse ja lõikes 3 nimetatud ühtse kontaktpunkti ülesanded" | ✅ (RIA) |
| Notification within three months of qualifying | § 4¹(1) | "täidab … § 3^1 lõikes 1 sätestatud kohustuse kolme kuu jooksul … tunnustele vastavuse tekkimisest arvates" | ✅ |
| Entities already in scope | § 28¹(1) | "kolme kuu jooksul viidatud lõike jõustumisest arvates" | ✅ (about 2026-04-01, computed) |
| Channel operational | RIA page | "teenuseosutaja teavitused palume esitada riigiportaalis eesti.ee (vajab sisselogimist)" | ✅ |
| Three years to comply | § 28¹(3) | "viib oma tegevuse … nõuetega vastavusse kolme aasta jooksul viidatud lõike jõustumisest arvates" | ✅ (about 2029-01-01, computed) |
| Infringement case OPEN | Commission register, INFR(2024)0267 | "7/05/2025" "Reasoned opinion Art. 258-260(3) TFEU"; "activeInfringementCase": "Yes" | ✅ |

### Defect: the tracker said no infringement procedure was open (found 2026-10-28)

The generic Estonian row carried `infringementOpen: false`. The Commission's
register shows case INFR(2024)0267 still active at the reasoned-opinion stage
(2025-05-07), although the transposition law has applied since 2026-01-01.

## Incident reporting: from awareness, to RIA (read 2026-10-30)

<!-- meta: theme=incident; type=reference; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/ee-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Source:** consolidated KüTS, RT I, 06.10.2026, 2 (the amending act is
  RT I, 06.10.2026, 1; corrected 2026-10-30), in force since
  2026-10-16, §§ 5, 8 and 8¹, read on Riigi Teataja on 2026-10-30
  (https://www.riigiteataja.ee/akt/106102026002), against the Estonian text of
  Directive (EU) 2022/2555, Art. 23(4), on EUR-Lex the same day. The page
  renders the superscript paragraph numbers flat (§ 8(4¹) appears as "(41)"),
  so the quotations below stop short of them.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| RIA does the CSIRT's tasks, besides the authority's and the contact point's | § 5(3)(1) and (3) | "Riigi Infosüsteemi Amet täidab järgmisi Euroopa Parlamendi ja nõukogu direktiivis (EL) 2022/2555 nimetatud ülesandeid" ; "artikli 10 lõikes 1 nimetatud küberintsidentide käsitlemise üksuse ülesanded" | ✅ |
| First notice to RIA within 24 hours of becoming aware | § 8(1) | "esitab Riigi Infosüsteemi Ametile esmase teate viivitamata, kuid hiljemalt 24 tundi pärast teada saamist küberintsidendist" | ✅ |
| Also when the significant impact is not obvious | § 8(1)(2) | "mille oluline mõju süsteemi turvalisusele või teenuse toimepidevusele ei ole ilmne, kuid seda võib mõistlikult eeldada" | ✅ |
| An outsourced administrator or host must tell the entity within 24 hours | § 8(1¹) | "vastutab teenuseosutaja selle eest, et teine isik teavitab teenuseosutajat hiljemalt 24 tundi pärast" | ✅ |
| Disruption in another Member State is always significant | § 8(3) | "loetakse küberintsident alati olulise mõjuga küberintsidendiks" | ✅ |
| Incident report within 72 hours of becoming aware | § 8(4¹) | "edastab Riigi Infosüsteemi Ametile viivitamata, kuid hiljemalt 72 tundi pärast olulise mõjuga küberintsidendist teada saamist intsidenditeate" | ✅ |
| Trust services: 24 hours | § 8(4²) | "intsidenditeate viivitamata, kuid hiljemalt 24 tundi pärast olulise mõjuga küberintsidendist teada saamist" | ✅ |
| Interim report at RIA's request | § 8(4³) | "Riigi Infosüsteemi Ameti taotlusel esitab teenuseosutaja enne käesoleva paragrahvi lõikes 7 nimetatud lõppraporti esitamist vahearuande olulise mõjuga küberintsidendi lahendamise seisu kohta." | ✅ |
| Final report within a month of the incident report | § 8(7) | "intsidenditeate esitamisest arvates Riigi Infosüsteemi Ametile lõppraporti" | ✅ |
| Unresolved then: a new final report a month after resolution | § 8(7) | "teenuseosutaja esitab uue lõppraporti ühe kuu jooksul pärast olulise mõjuga küberintsidendi lahendamist" | ✅ |
| Voluntary notification | § 8¹(1)(1) | "teenuseosutaja teavitada napilt toimumata jäänud küberintsidendist, küberintsidendist, turvahaavatavusest ja küberohust" | ✅ |
| Data and procedure by ministerial regulation | § 8(8) | "Küberintsidendist teavitamisel esitatavad andmed ja teavitamise korra kehtestab riikliku küberturvalisuse valdkonna eest vastutav minister määrusega." | ❓ the regulation was not read; consultation papers cite it as Justiits- ja digiministri 5. märtsi 2026. a määrus nr 7. On 2026-10-30 Riigi Teataja lists it under the act as "Küberintsidendist teavitamisel esitatavad andmed ja teavitamise kord", issued by the Justiits- ja digiminister, "Akt nr: 7" (measures section); its date and content stay unread |
| The directive's Estonian text, the same words | Directive (ET), Art. 23(4)(a) | "24 tunni jooksul pärast olulisest intsidendist teada saamist" | ✅ |

The anchor is awareness in the act's own words and in the directive's
("teada saamist" in both). Estonia ran on DEFAULT until 2026-10-30, and since
that day DEFAULT does not use a recorded awareness time
(`awarenessTimeCounts`), so `INCIDENT_REPORTING_EE`
(packages/regulatory-data/src/country-configs/incident-reporting.ts) gives
the two Estonian organisations in production their awareness instant back,
and names RIA rather than the generic pointer to the ENISA directory. No
channel is named until the regulation of § 8(8) is read. The same day, when
Estonian became a product locale, every label of the configuration gained an
Estonian version in the act's own words (esmane teade, intsidenditeade,
vahearuanne, lõppraport, olulise mõjuga küberintsident, "teada saamist",
Riigi Infosüsteemi Amet), held by
`packages/regulatory-data/test/config-official-languages.test.ts` (EE: et)
and by the Estonian case of `ee-incident-reporting.test.ts`.

§ 8(1¹) matters to managed service providers: an entity that hands the
administration or the hosting of a system to someone else answers for that
party telling it within 24 hours of becoming aware. The product does not
model it yet.

## The consolidated act read further on 2026-10-30: scope, registration, measures, management, supervision, sanctions

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Source:** the consolidated Küberturvalisuse seadus on Riigi Teataja
  (https://www.riigiteataja.ee/akt/106102026002), read in full in headless
  Chromium on 2026-10-30: §§ 1 to 4¹, 6¹, 7, 14 to 17¹, 18¹ to 19, 28¹. The
  page states "Sõnastuse jõustumise kp:" 16.10.2026 and "Avaldamismärge:" RT I,
  06.10.2026, 2: the consolidated text carries ", 2"; RT I, 06.10.2026, 1 is the
  amending act the incident section names.
- **Rendering:** the page prints superscript numbers flat ("§ 61" is § 6¹,
  "(11)" is (1¹), "§ 182" is § 18²). Every quotation below stops short of them,
  and was checked mechanically against the page text (whitespace normalised).
- **Implementing acts:** the page's "Rakendusaktid" pane lists eight
  regulations under the act; their titles are recorded in the measures section.
  None of them was read.

## Scope: who is obliged, the size test and the two classes

<!-- meta: theme=scoping; type=reference; date=2026-10-30; surfaces=data,prompt,mcp; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/scoping.test.ts,packages/regulatory-data/test/national-size-tests.test.ts -->

The act calls the obliged entity a "teenuseosutaja" (service provider) and
names the two classes "ülioluline üksus" (essential) and "oluline üksus"
(important). It lists the types in § 3 itself, and its size test is
cumulative: a headcount AND a financial limb.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The service provider is the essential or the important entity | § 3(1) | "Teenuseosutaja käesoleva seaduse tähenduses on ühiskonna toimimise seisukohast ülioluline üksus (edaspidi ülioluline üksus) ja ühiskonna toimimise seisukohast oluline üksus (edaspidi oluline üksus)." | | ✅ |
| Registrars are covered too | § 1(1)(1) | "ühiskonna toimimise seisukohast ülioluliste üksuste ja oluliste üksuste ning domeeninimede registreerimise teenuse osutajate kasutatavate võrgu- ja infosüsteemide pidamise nõuded, vastutuse ning järelevalve;" | Requirements, liability and supervision for the systems of essential and important entities and of domain name registration service providers. | ✅ |
| Essential at any size: DNS, vital services, central and local public administration, critical communications, qualified trust services, TLD | § 3(2) points 1 to 7 | "1) domeeninimede süsteemi teenuse osutaja;" … "2) elutähtsa teenuse osutaja kriisiolukorra ja riigikaitse seaduse tähenduses;" … "3) keskvalitsuse avaliku halduse üksus;" … "4) kohaliku omavalitsuse avaliku halduse üksus;" … "6) kvalifitseeritud usaldusteenuse osutaja;" … "7) tippdomeeninimede registri pidaja;" | Point 5: providers of critical-importance communications, maritime radio and operational radio network services. | ✅ |
| Local public administration: what it covers | § 2 point 16 | "kohaliku omavalitsuse avaliku halduse üksus – kohaliku omavalitsuse üksus, valla või linna ametiasutus, valla või linna ametiasutuse hallatav asutus, osavald, linnaosa, osavalla või linnaosa ametiasutus, osavalla või linnaosa ametiasutuse hallatav asutus ning kohaliku omavalitsuse üksuste ühisamet ja -asutus;" | Every municipality and city, their agencies and the institutions they administer, rural municipality districts and city districts, and the joint offices of local authorities. | ✅ |
| Public e-communications: essential from medium size, by a cumulative test | § 3(2) point 8 | "8) üldkasutatava elektroonilise side võrgu teenuse osutaja või üldkasutatava elektroonilise side teenuse osutaja, kellel on Euroopa Komisjoni soovituses 2003/361/EÜ mikro-, väikeste ja keskmise suurusega ettevõtjate määratluse kohta" … "majandusaasta jooksul 50 või rohkem töötajat ja kelle aastabilansimaht või aastakäive ületab 10 miljonit eurot." | 50 or more employees in the financial year AND a balance sheet or turnover above EUR 10 million. Smaller providers are important (§ 3(4) point 9). | ✅ |
| Large entities of the listed types are essential: 250 employees AND a financial limb | § 3(3) | "Lisaks käesoleva paragrahvi lõikes 2 sätestatule loetakse ülioluliseks üksuseks ka üksus, kellel on Euroopa Komisjoni soovituses 2003/361/EÜ esitatud keskmise suurusega ettevõtja määratluse kohaselt majandusaasta jooksul 250 või rohkem töötajat ja kelle aastabilansimaht ületab 43 miljonit eurot või aastakäive ületab 50 miljonit eurot ning kes on:" | 42 types follow, most of the directive's Annex I types among them (the four rows after the next one say which it leaves out): "1) andmekeskusteenuse osutaja;", "9) haldusteenuse osutaja;", "11) infoturbeteenuse osutaja;", "12) interneti sõlmpunkti teenuse osutaja;", "29) pilvandmetöötlusteenuse osutaja;", "33) sisulevivõrguteenuse osutaja;" (data centres, managed services, managed security services, IXPs, cloud, CDN). | ✅ |
| Important: national public bodies and a family-doctor rule | § 3(4) points 1 to 7 | "1) andmekogu vastutav töötleja ja volitatud töötleja avaliku teabe seaduse tähenduses;" … "3) avalik-õiguslik juriidiline isik;" … "4) kohaliku omavalitsuse üksuste liit;" … "5) perearstiabi osutaja tervishoiuteenuste korraldamise seaduse tähenduses, kes ei ole elutähtsa teenuse osutaja;" … "7) usaldusteenuse osutaja, välja arvatud kvalifitseeritud usaldusteenuse osutaja;" | Controllers and processors of a database under the Public Information Act; Arenguseire Keskus (point 2); every public-law legal person; associations of local authorities; family doctors that are not vital service providers; Riigimetsa Majandamise Keskus (point 6); non-qualified trust service providers. | ✅ |
| Important: medium entities of the § 3(3) types, and small public e-communications | § 3(4) points 8 and 9 | "8) üksus, kes ei ole ülioluline üksus, kuid kellel on Euroopa Komisjoni soovituses 2003/361/EÜ esitatud keskmise suurusega ettevõtja määratluse kohaselt majandusaasta jooksul 50 või rohkem töötajat ja kelle aastabilansimaht või aastakäive ületab 10 miljonit eurot ning kelle tegevusala on nimetatud käesoleva paragrahvi lõikes 3;" … "9) üldkasutatava elektroonilise side teenuse osutaja ja üldkasutatava elektroonilise side võrgu teenuse osutaja, kes ei vasta käesoleva seaduse § 3 lõike 2 punktis 8 nimetatud tingimustele." | Public e-communications providers below the medium test are important at any size. | ✅ |
| Important: medium entities of the directive's Annex II types | § 3(5) | "Lisaks käesoleva paragrahvi lõikes 4 toodule loetakse oluliseks üksuseks ka üksus, kellel on Euroopa Komisjoni soovituses 2003/361/EÜ esitatud keskmise suurusega ettevõtja määratluse kohaselt majandusaasta jooksul 50 või rohkem töötajat ja kelle aastabilansimaht või aastakäive ületab 10 miljonit eurot ning kes on:" | Waste, chemicals, food, medical devices, manufacturing (NACE C 26 to 30), online marketplaces, postal and courier services, social media platforms, research organisations, search engines (points 1 to 10). | ✅ |
| A non-qualified trust service provider is important at any size: § 3(3) lists no trust service | § 3(3) points 1 to 42; § 3(4) point 7 | "7) usaldusteenuse osutaja, välja arvatud kvalifitseeritud usaldusteenuse osutaja;" | None of the 42 types of § 3(3) is a trust service provider (nor a public e-communications provider, a DNS provider or a TLD registry, which § 3(2) and (4) place at any size). No size therefore makes a non-qualified trust service provider essential, where the directive's Art. 3(1)(a) makes a large one essential. | ✅ (the absence established by reading the 42 points, 2026-10-30) |
| Health: § 3(3) lists three types, and no healthcare provider | § 3(3) points 6, 7 and 39 | "6) Euroopa Parlamendi ja nõukogu määruse (EL) 2022/123" … "artiklis 22 nimetatud rahvatervise hädaolukorras esmatähtsa meditsiiniseadme tootja;" … "7) Euroopa Liidu majanduse tegevusalade statistilise klassifikaatori NACE Revision 2 C jao osas 21 osutatud põhifarmaatsiatoote ja ravimpreparaadi tootja;" … "39) üksus, kes tegeleb ravimiseadusekohase ravimi, välja arvatud" … "veterinaarravimi uurimise ja arendamisega;" | Manufacturers of medical devices critical in a public health emergency; manufacturers of basic pharmaceutical products and preparations (NACE C 21); entities researching and developing medicinal products other than veterinary ones. The directive's Annex I health sector also names healthcare providers and EU reference laboratories; § 3(3) lists neither. A healthcare provider comes in through another point of § 3: as a vital service provider (§ 3(2) point 2) or, for a family doctor that is not one, § 3(4) point 5. | ✅ (the absence established by reading the 42 points, 2026-10-30) |
| Transport: § 3(3) names no road authority | § 3(3) points 5, 20 to 24, 31, 32 and 36 | "20) lennuettevõtja" … "24) liiklusseadusekohase intelligentse transpordisüsteemi käitaja;" … "31) raudteeinfrastruktuuriettevõtja ja raudteeveoettevõtja, sealhulgas teenindusrajatise käitaja raudteeseaduse tähenduses;" … "36) veeliikluse juhtimise keskus;" | Water transport undertakings (5), air carriers (20), airport managing bodies and operators (21, 22), air traffic services (23), intelligent transport system operators (24), rail (31), ports (32), vessel traffic centres (36). The directive's Annex I road subsector also names road authorities responsible for traffic management control; § 3(3) names none. | ✅ (the absence established by reading the 42 points, 2026-10-30) |
| Food: wholesale and industrial production or processing, alcohol excepted, from half of turnover | § 3(5) point 3 | "3) ettevõtja, kes tegeleb toidu hulgimüügi, tööstusliku tootmise või tööstusliku töötlemisega või mitmega neist, välja arvatud alkoholi hulgimüügi, tööstusliku tootmise ja tööstusliku töötlemisega," … "ning ühest või mitmest nimetatud tegevusest saadav aastakäive on vähemalt 50 protsenti tema aastakäibest;" | An undertaking in the wholesale, industrial production or industrial processing of food, alcohol excepted, whose turnover from those activities is at least 50 % of its annual turnover. The directive's Annex II names food businesses engaged in wholesale distribution and industrial production and processing, with no share of turnover. | ✅ |
| The Recommendation's Art. 3(4) is not applied | § 3(6) | "Käesolevas seaduses ei kohaldata üksuse töötajate arvu, aastabilansimahu ja aastakäive kindlakstegemisel Euroopa Komisjoni soovituse 2003/361/EÜ lisa artikli 3 lõiget 4." | The 25 % public-body rule. | ✅ |
| Partner and linked data are not counted for an independent entity | § 3(7) | "Käesolevas seaduses ei arvestata üksuse töötajate arvu, aastabilansimahu ja aastakäibe kindlakstegemisel partner- või sidusettevõtja andmeid Euroopa Komisjoni soovituse 2003/361/EÜ tähenduses, kui üksus on teenuste osutamisel kasutatavate süsteemide puhul oma partner- või sidusettevõtjast sõltumatu." | When the entity is independent of its partner or linked enterprise in the systems it uses to provide its services. | ✅ |
| Exclusions never cover trust service providers | § 1(2¹) | "Käesoleva paragrahvi lõikes 2 sätestatud erisust ei kohaldata usaldusteenuse osutajale." | State secrets, defence systems and missions abroad are out (§ 1(2)), never a trust service provider. | ✅ |
| Equivalent rules elsewhere apply with the act | § 1(4) | "Kui teenuseosutaja võrgu- ja infosüsteemi pidamise ning küberintsidendist teavitamise nõuded on samaväärselt käesolevas seaduses sätestatuga reguleeritud välislepinguga, Euroopa Liidu õigusaktiga või muu seadusega, kohaldatakse käesolevat seadust välislepingust, Euroopa Liidu õigusaktist või muust seadusest tulenevate erisustega." | | ✅ |

Reading, not a quotation: the act states the medium and large tests as
cumulative ("50 või rohkem töötajat ja" a financial limb), where Article 2 of the
Recommendation's Annex counts an enterprise as at least medium when it employs
50 persons or more, OR when its turnover and its balance sheet both exceed
EUR 10 million (eu.md, section F). An Estonian entity of 60 employees whose
turnover and balance sheet stay under EUR 10 million is outside the act; under
the directive's test it would be medium.

What the product does with it (2026-10-30): `nationalSizeTestFor("EE")` in
`packages/regulatory-data/src/scoping.ts` applies both tests with their bounds
("50 või rohkem" inclusive, "ületab" exclusive), and with them the rows above
that the questionnaire's answers can decide: local government essential at any
size, a non-qualified trust service provider important at any size, public
e-communications by § 3(2) point 8 and § 3(4) point 9, and a note on the
health, transport and food sectors, which § 3 lists only in part. A missing
balance sheet is taken to exceed both balance-sheet limbs, which can only
overstate the class. The scoping engine, the MCP `scope_check` and the
auto-scoping prompt read it, and so, since 2026-10-30, does the public scope
checker, which runs the engine; it asks no balance sheet, and says when one
would change its verdict. Not modelled: the other any-size types of § 3(2) and (4) (vital
service providers, critical communications, public-law legal persons, family
doctors, the named bodies), which no question asks.

## Registration: notification to RIA, and three years to comply

<!-- meta: theme=registration; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| What every service provider and registrar notifies to RIA | § 3¹(1) | "Teenuseosutaja ja domeeninimede registreerimise teenuse osutaja esitab Riigi Infosüsteemi Ametile käesoleva paragrahvi lõikes 2 nimetatud nimekirja koostamiseks vähemalt järgmise teabe:" … "2) tegevuskoha aadress ja ajakohased kontaktandmed, sealhulgas e-posti aadressid, internetiprotokolli aadresside vahemikud ja telefoninumbrid;" | Name and registry code, address and contacts with IP ranges, the directive's sector and subsector, and the States served. | ✅ |
| Within three months of qualifying | § 4¹(1) | "kolme kuu jooksul teenuseosutaja või domeeninimede registreerimise teenuse osutaja tunnustele vastavuse tekkimisest arvates." | | ✅ |
| Changes: two weeks | § 3¹(4) | "Teenuseosutaja ja domeeninimede registreerimise teenuse osutaja teavitab kõigist käesoleva paragrahvi lõike 1 kohaselt esitatud teabe muudatustest viivitamata, kuid hiljemalt kaks nädalat pärast muudatuse tegemise kuupäeva Riigi Infosüsteemi Ametit." | | ✅ |
| The digital types: their own data, changes within three months | § 4(1), § 4(6) | "Digitaalse teenuse osutaja esitab Riigi Infosüsteemi Ametile vähemalt järgmise teabe:" … "Digitaalse teenuse osutaja teatab kõigist käesoleva paragrahvi lõike 1 kohaselt esitatud teabe muudatustest viivitamata, kuid hiljemalt kolm kuud pärast muudatuse tegemise kuupäeva." | | ✅ |
| RIA draws up the list every two years; it is internal | § 3¹(2), (3) | "Riigi Infosüsteemi Amet koostab iga kahe aasta järel teenuseosutajate ja domeeninimede registreerimise teenuse osutajate nimekirja." … "Käesoleva paragrahvi lõikes 2 nimetatud teave on asutusesiseseks kasutamiseks mõeldud teave avaliku teabe seaduse tähenduses." | No designation decision: the entity assesses and notifies itself. | ✅ |
| **Three years to bring the activity into line, from qualifying** | § 4¹(3) | "Teenuseosutaja, sealhulgas digitaalse teenuse osutaja, viib oma tegevuse käesoleva seaduse ja selle alusel kehtestatud nõuetega vastavusse ning täidab käesolevast seadusest ja selle alusel kehtestatud õigusaktidest tulenevad kohustused kolme aasta jooksul teenuseosutaja, sealhulgas digitaalse teenuse osutaja tunnustele vastavuse tekkimisest arvates." | The notification keeps its own three months. Vital service providers follow the deadline set under the crisis and national defence act (§ 4¹(4)); entities in scope before 1 January 2026 follow § 28¹ (statute section). | ✅ |

## Security measures: § 7, the Estonian information security standard, outsourcing

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The duty, with a risk analysis | § 7(1) | "Teenuseosutaja rakendab alaliselt asjakohaseid ja proportsionaalseid tehnilisi, tegevuslikke ning korralduslikke turvameetmeid, et:" … "1) hallata riske, mis ohustavad teenuseosutaja tegevuses või teenuse osutamisel kasutatava süsteemi turvalisust, sealhulgas koostab vastava riskianalüüsi;" | Permanently, to manage risks (drawing up a risk analysis), to prevent or minimise the impact on recipients, to prevent, detect and resolve incidents. | ✅ |
| **Outsourcing: the entity answers for its provider's measures** | § 7(3) | "Kui teenuseosutaja volitab süsteemi haldamise teisele isikule või majutab süsteemi teise isiku juures, vastutab teenuseosutaja selle eest, et teine isik tagab süsteemi turvameetmete rakendamise." | Where it entrusts the administration of a system to another person or hosts it with another person. | ✅ |
| The requirements are set by regulation, the Estonian information security standard among them | § 7(5) | "Vabariigi Valitsus või tema volitatud minister kehtestab määrusega käesolevas paragrahvis sätestatud kohustuste täitmise ja süsteemide küberturvalisuse tagamiseks:" … "1) infoturbe halduse nõuded üldnimetusega Eesti infoturbestandard;" | Also the general requirements for measures and the special requirements with their scope (points 2 and 3); the regulation may take the § 3 sectors into account (§ 7(6)). | ✅ |
| The regulations listed under the act | Riigi Teataja, "Rakendusaktid" | "Võrgu- ja infosüsteemide küberturvalisuse nõuded" … "Akt nr: 121" … "Eesti infoturbestandard" … "Akt nr: 30" … "Võrgu- ja infosüsteemi turvameetmete nõuded ja nende kohaldamise ulatus pilvteenuse kasutamisel" … "Küberintsidendist teavitamisel esitatavad andmed ja teavitamise kord" … "Akt nr: 7" | The Government's regulation no 121 (requirements), the minister's regulation no 30 (E-ITS), the Government's regulation no 1 (cloud), the minister's regulation no 7 (incident data, § 8(8)); four more cover the strategy, peer review, the coordination unit and the incident register. **Not read**: which entities must apply E-ITS, and what each regulation requires, are not on record. | ✅ (titles only) |

## Governance and training: one designated board member

<!-- meta: theme=governance; type=reference; date=2026-10-30; surfaces=doc-gen,prompt; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| A designated board member approves the measures, oversees them and answers for them | § 6¹(1) | "Teenuseosutaja määrab vähemalt ühe juhatuse liikme, kes kiidab heaks turvameetmed, jälgib nende rakendamist ja vastutab selle eest." … "Vastutava juhatuse liikme määramise kohustust ei kohaldata teenuseosutajale, kellel on üks juhatuse liige." | At least one management board member; RIA may ask for the name and contacts; not for a provider with a single board member. | ✅ |
| **That member trains regularly** | § 6¹(2) | "(2) Käesoleva paragrahvi lõikes 1 nimetatud teenuseosutaja juhatuse liige läbib korrapäraselt koolitusi eesmärgiga omandada piisavad teadmised ja oskused, et mõista ja hinnata riske, nende mõju teenuseosutaja teenustele ning riskide juhtimise viise." | The member trains "korrapäraselt" (regularly), with no interval set. | ✅ |
| Without a designation, every board member | § 6¹(3) | "Kui teenuseosutaja ei määra käesoleva paragrahvi lõikes 1 nimetatud juhatuse liiget, kohaldatakse käesolevas paragrahvis sätestatud kohustusi kõigile juhatuse liikmetele." | | ✅ |
| No board: the persons with management tasks; a sole trader himself | § 6¹(4) | "Kui teenuseosutaja on füüsilisest isikust ettevõtja, kohaldatakse teenuseosutaja juhatuse liikme kohustuste kohta sätestatut asjaomasele füüsilisele isikule." | | ✅ |
| Suspension of a board member's powers, essential entities | § 16(1⁵) point 2 | "ülioluliselt üksuselt juhatuse liikme volituste ajutist peatamist." | After unheeded precepts and a further deadline (§ 16(1⁴)); until the deficiencies are remedied (§ 16(1⁶)). | ✅ |

The directive (Art. 20(2)) binds every member of the management body to
follow training; the act binds the designated member, every member only when
none is designated, and adds "korrapäraselt".

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Recorded as facts. Marketing never cites fines.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| RIA supervises | § 14(1) | "Käesolevas seaduses ja selle alusel kehtestatud õigusaktides sätestatud nõuete täitmise üle teeb riiklikku ja haldusjärelevalvet Riigi Infosüsteemi Amet." | | ✅ |
| Important entities: ex post only | § 14(6) point 3 | "teeb olulise üksuse suhtes riiklikku ja haldusjärelevalvet järelkontrollina, kui järelevalveasutusel on alust arvata, et oluline üksus ei järgi käesolevas seaduses ning ennekõike käesoleva seaduse §-des 7 ja 8 sätestatud nõudeid." | | ✅ |
| Essential entities: a regular security audit once every three years | § 16(1¹) point 2¹ | "üliolulise üksuse suhtes regulaarseid turvaauditeid üks kord kolme aasta jooksul, välja arvatud juhul, kui ülioluline üksus on kohustatud regulaarselt auditeerima käesoleva seaduse § 7 lõike 5 alusel kehtestatud küberturvalisuse nõuete täitmise raames;" | RIA's power; not where the § 7(5) requirements already oblige the entity to audit regularly. | ✅ |
| Periodic penalty for an unheeded precept | § 17¹ | "Ettekirjutuse täitmata jätmise korral on asendustäitmise ja sunniraha seaduses sätestatud korras rakendatava sunniraha kohaldamise igakordne ülemmäär 70 000 eurot." | Up to EUR 70,000 each time. | ✅ |
| Essential entity, legal person: EUR 10 million or 2 % of the entity's turnover | § 18²(2) | "karistatakse rahatrahviga kuni 10 000 000 eurot või kuni 2 protsenti üliolulise üksuse eelmise majandusaasta ülemaailmsest aastasest kogukäibest olenevalt sellest, kumb summa on suurem." | For breaches of § 7 (measures) and § 8 (notification). The turnover is the essential entity's own ("üliolulise üksuse eelmise majandusaasta ülemaailmsest aastasest kogukäibest"); the directive's Art. 34(4) names the undertaking the entity belongs to. | ✅ |
| Important entity, legal person: EUR 7 million or 1.4 % | § 18³(2) | "karistatakse rahatrahviga kuni 7 000 000 eurot või kuni 1,4 protsenti olulise üksuse eelmise majandusaasta ülemaailmsest aastasest kogukäibest olenevalt sellest, kumb summa on suurem." | | ✅ |
| Misdemeanour procedure, RIA as the out-of-court body, three-year limitation | § 19(1), (4) | "sätestatud väärtegude kohtuväline menetleja on Riigi Infosüsteemi Amet." … "sätestatud väärtegude aegumistähtaeg on kolm aastat." | The fines are misdemeanour fines (väärteod). | ✅ |

## Departures from the directive, read from the texts above

<!-- meta: theme=scoping,registration,governance,sanctions,framework; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

Each line is a reading of quotes recorded in this file.

- **The size test is cumulative** (§ 3(2) point 8, § 3(3), (4) point 8,
  (5)): at least 50 employees AND a balance sheet or turnover above EUR 10
  million; 250 employees AND a balance sheet above EUR 43 million or turnover
  above EUR 50 million. Narrower than the Recommendation's test. Partner and
  linked data are not counted for an entity independent in its systems
  (§ 3(7)).
- **Local public administration is essential at any size** (§ 3(2) point 4,
  § 2 point 16), next to central government; every public-law legal person,
  every association of local authorities, the controllers and processors of a
  public database and the family doctors are important (§ 3(4)).
- **The act lists its types itself, and the lists differ from the
  directive's annexes**: no size makes a non-qualified trust service provider
  essential (§ 3(3) lists no trust service; § 3(4) point 7); § 3(3) names no
  healthcare provider, EU reference laboratory or road authority; food
  undertakings count only from half of their turnover (§ 3(5) point 3).
- **Three years to comply from qualifying** (§ 4¹(3)), after a notification
  within three months (§ 4¹(1)); the directive sets no such period.
- **Management**: one designated board member approves, oversees and answers
  for the measures and trains "korrapäraselt" (§ 6¹).
- **Outsourcing**: the entity answers for its administrator's or host's
  measures (§ 7(3)) and for being told of an incident within 24 hours
  (§ 8(1¹), incident section).
- **Fines** are misdemeanour fines, processed out of court by RIA, on the
  entity's own turnover (§§ 18², 18³, 19).

## Open items after the 2026-10-30 reading

<!-- meta: theme=framework,scoping; type=lead; date=2026-10-30; surfaces=docs; guard=none -->

- The regulations under § 7(5) (Government regulation no 121, the minister's
  regulation no 30 on E-ITS, Government regulation no 1 on cloud use): which
  entities must apply E-ITS, what the requirements and audits are.
- The minister's regulation no 7 under § 8(8) (incident data and channel):
  listed under the act, not read; no channel is on record.
- § 3(2) point 5 (critical-importance communications) and the crisis act's
  vital-service deadlines (§ 4¹(4)) were not followed into their acts.

## Language: the binding texts are Estonian

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=i18n,data,doc-gen; guard=packages/regulatory-data/test/config-official-languages.test.ts -->

- **Source:** Eesti Vabariigi põhiseadus on Riigi Teataja
  (https://www.riigiteataja.ee/akt/115052015002), read in headless Chromium on
  2026-10-30: the consolidated text RT I, 15.05.2015, 2, whose page states
  "Sõnastuse kehtivuse lõpp:" 08.07.2025. § 6 carries no amendment note there.
  The version in force since then was not opened: the page's "Hetkel kehtiv"
  link led to the portal's 404 page in headless Chromium.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Estonian is the state language | Constitution § 6 | "Eesti riigikeel on eesti keel." | The state language of Estonia is Estonian. | verified (text valid to 08.07.2025) |
| The members of the management bodies train "regularly" in the Estonian text of the directive | Directive (EU) 2022/2555, Art. 20(2), Estonian version (`docs/research/eur-lex/nis2-et.txt`) | "elutähtsate ja oluliste üksuste juhtorganite liikmed on kohustatud läbima korrapäraselt erikoolitusi" | The English text puts "on a regular basis" on the training offered to employees only. | verified |

What the product does with it (2026-10-30, the day Estonian became a product
locale): `inferLocale("EE")` answers `et`, so an Estonian organisation that
never chose a working language reads Estonian from the deploy on, e-mails and
documents included, and English stays selectable in the organisation settings.
The Estonian UI, e-mails and PDF labels use the directive's Estonian words for
every generic string (`docs/research/eur-lex/nis2-et.txt`: elutähtis / oluline
üksus, CSIRT, pädev asutus, juhtorgan, varajane hoiatus, intsidenditeade,
lõpparuanne), as every locale does. The act's words (teenuseosutaja,
ülioluline üksus, esmane teade, lõppraport, olulise mõjuga küberintsident,
juhatuse liige, Riigi Infosüsteemi Amet) appear where a surface is about
Estonia: the labels of `INCIDENT_REPORTING_EE` (incident section), the
getting-started page's incident line and the incident reminders, since
Estonian, unlike Swedish, is read in one country only.
`tools/et-i18n/GLOSSARY.md` sets the two vocabularies apart. Article 20(2)'s
"korrapäraselt" is quoted where the training attestation quotes the directive;
the catalogue's sub-control 21.2.g.2 and the training page do not turn it into
an interval, and neither the directive nor the act sets one.

## The national reference (written 2026-11-05)

<!-- meta: theme=statute; type=delivery; date=2026-11-05; surfaces=data,ui; guard=packages/regulatory-data/test/country-configs-transposition-references.test.ts,apps/web/test/dk-fi-national-reference-surfaces.test.tsx -->

`TRANSPOSITION_REFERENCES_EE` is written from the sections above and adds no
source. It carries six requirements in English, French, Italian, German,
Portuguese and Estonian: the cumulative size test, registration and the three
years to comply, incidents, local government, the measures and outsourcing, the
designated board member. By house rule it states no fine amount. The size test's
figures are not fines. The Estonian training sentence said "juhtorgani"; the act
binds the designated board member, and it now says "juhatuse liikme".
