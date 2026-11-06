# Finland — legal sources (verified)

## Kyberturvallisuuslaki 124/2025 (read 2026-10-28)

<!-- meta: theme=statute,registration; type=reference,status-error; date=2026-10-28; surfaces=data,prompt; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Official citation:** Kyberturvallisuuslaki (Sw. Cybersäkerhetslag),
  Suomen säädöskokoelma 124/2025, signed 4.4.2025 (HE 57/2024). A new act;
  companion acts 125-140/2025 amend sector acts. Amended since by 369/2025 (CER
  critical entities, from 1.7.2025), 494/2025, 698/2025 (§ 26, from 1.1.2026),
  997/2025, 441/2026 and 785/2026 (§ 26 and Annex I, from 1.1.2027).
- **Official URLs:** https://www.finlex.fi/fi/lainsaadanto/saadoskokoelma/2025/124 ;
  PDF https://www.finlex.fi/api/media/statute/690165/mainPdf/main.pdf
- **Retrieved + read:** 2026-10-28, §§ 1-47 in full (Finlex open data, key
  sections checked against the gazette PDF), the six amending acts in full.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Published 2025-04-07 | PDF masthead | "Julkaistu Helsingissä 7 päivänä huhtikuuta 2025" | ✅ |
| In force 2025-04-08 | § 47(1) | "Tämä laki tulee voimaan 8 päivänä huhtikuuta 2025." | ✅ |
| Single point of contact | § 18(1) | "Liikenne- ja viestintäviraston Kyberturvallisuuskeskus toimii NIS 2 -direktiivin 8 artiklan 3 kohdassa tarkoitettuna keskitettynä yhteyspisteenä." | ✅ (Traficom's NCSC-FI) |
| Supervision by sector | § 26(1) | "1) Liikenne- ja viestintävirasto siltä osin kuin kyse on liitteen I kohdissa 1–7 ja liitteen II kohdissa 1–5 tarkoitetuista toimijoista;" | ✅ (Traficom and six other authorities; Säteilyturvakeskus joins from 2027-01-01, 785/2026) |
| Registration within one month | § 47(2) | "Tämän lain 41 §:ssä tarkoitettu ilmoitus on tehtävä viimeistään kuukauden kuluessa lain voimaantulosta tai siitä, kun 3 §:n mukaiset toimijan kriteerit täyttyvät." | ✅ |
| Risk-management model within three months | § 47(3) | "Tämän lain 8 §:ssä tarkoitettu riskienhallinnan toimintamalli on laadittava kolmen kuukauden kuluessa lain voimaantulosta […]" | ✅ |
| Channel operational (Traficom's sectors) | kyberturvallisuuskeskus.fi, updated 13.10.2026 | "Voit ilmoittautua sähköisesti Traficomin ylläpitämään toimijaluetteloon." | ✅ |
| Infringement case OPEN | Commission register, INFR(2024)0272 | reasoned opinion 7/05/2025, active | ✅ (see eu.md) |

The generic row said no procedure was open; the register shows it open.

## The consolidated act, read on 2026-10-30: scope, incidents, management, supervision, sanctions

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

Read on Finlex, consolidated text ("Ajantasainen", version
`http://data.finlex.fi/eli/sd/2025/124/ajantasa/2026-09-04/fin`), in headless
Chromium, on 2026-10-30, and compared with the Finnish text of Directive (EU)
2022/2555 on EUR-Lex (`legal-content/FI/TXT/?uri=CELEX:32022L2555`).

## Scope: entities, size and the one class the act names

<!-- meta: theme=scoping; type=reference; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/national-size-tests.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Annex I and II activity, medium size by the Recommendation | § 3(1) | "täyttää tai ylittää mikroyritysten sekä pienten ja keskisuurten yritysten määritelmästä annetun komission suosituksen 2003/361/EY liitteen 2 artiklan mukaiset keskisuuria yrityksiä koskevat edellytykset" | meets or exceeds the Recommendation's medium-sized thresholds | ✅ |
| Any size: e-communications, trust services, TLD, DNS, CER critical entities | § 3(2) | "Tätä lakia sovelletaan myös toimijaan, joka koostaan riippumatta on:" | | ✅ |
| Occasional and minor activity is out | § 4(5) | "Tätä lakia ei sovelleta toimijaan, jonka harjoittama liitteessä I tai II tarkoitettu toiminta on satunnaista ja vähäistä." | not to an entity whose Annex activity is occasional and minor | ✅ |
| Municipalities only for their Annex activities or as critical entities | § 4(6) | "Tätä lakia sovelletaan kuntalaissa (410/2015) tarkoitettuun kuntaan vain liitteessä I tai II tarkoitetun toiminnan osalta sekä siltä osin, kun kunta on kriittinen toimija." | | ✅ |
| One class is named: the essential entity, for supervision | § 27(1) and (2) | "Valvonta on kohdistettava keskeisiin toimijoihin." ; "Keskeisellä toimijalla tarkoitetaan:" | Supervision targets essential entities; the others are "muu kuin keskeinen toimija", other than essential | ✅ |
| Essential: large Annex I types, qualified trust services, TLD, DNS, medium e-communications, national-importance cases, critical entities | § 27(2) | "hyväksyttyjä luottamuspalvelun tarjoajia, aluetunnusrekisterin ylläpitäjiä sekä DNS-palveluntarjoajia;" | | ✅ |

Checked for the scoping engine on 2026-10-30: § 3(1) applies the
Recommendation's medium-sized test by reference, so `classifyEnterpriseSize`
in `packages/regulatory-data/src/scoping.ts` applies as written and Finland has
no national size test
(`packages/regulatory-data/test/national-size-tests.test.ts`). § 4(5)
(occasional and minor Annex activity) is an exclusion, not a size test, and no
question asks about it. § 4(6) (municipalities) reaches the scope check through
the level of government since 2026-11-05: see the last section.

## Incident reporting: from detection, to the supervising authority

<!-- meta: theme=incident; type=reference,deadline-model; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/fi-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

**The clocks run from detection, not from becoming aware.** The Finnish text of
the directive counts from awareness ("kun ne ovat tulleet tietoisiksi"); the
act counts both the first notice and the follow-up notification from the
detection of the significant incident ("havaitsemisesta"), as the Polish and
Slovenian acts do. The entity notifies its sector's supervising authority,
which forwards to the CSIRT at Traficom at once. The same day, when Finnish
became a product locale, every label of the configuration gained a Finnish
version in the act's words, compared with the directive's Finnish text in the
Language section below.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| To the supervising authority, without delay | § 11(1) | "Toimijan on viipymättä ilmoitettava valvovalle viranomaiselle merkittävästä poikkeamasta." | The entity notifies the supervising authority of a significant incident without delay. | ✅ |
| 24 hours and 72 hours from DETECTION | § 11(2) | "Ensi-ilmoitus on tehtävä 24 tunnin kuluessa merkittävän poikkeaman havaitsemisesta ja jatkoilmoitus 72 tunnin kuluessa merkittävän poikkeaman havaitsemisesta." | The first notice within 24 hours and the follow-up notice within 72 hours of the detection of the significant incident. | ✅ |
| The directive's Finnish text: from awareness | Directive 2022/2555, Art. 23(4)(a), Finnish | "24 tunnin kuluessa siitä, kun ne ovat tulleet tietoisiksi poikkeamasta" | within 24 hours of becoming aware | ✅ (EUR-Lex, read 2026-10-30) |
| Trust services: the follow-up within 24 hours of detection | § 11(6) | "luottamuspalvelun tarjoajan on tehtävä jatkoilmoitus 24 tunnin kuluessa merkittävän poikkeaman havaitsemisesta" | | ✅ |
| Interim report on request, and for a long incident within a month of the follow-up | § 12 | "Jos merkittävä poikkeama on pitkäkestoinen, toimijan on annettava väliraportti viimeistään kuukauden kuluttua jatkoilmoituksen antamisesta." | | ✅ |
| Final report one month after the follow-up, or after handling ends | § 13(1) | "Toimijan on annettava valvovalle viranomaiselle merkittävää poikkeamaa koskeva loppuraportti kuukauden kuluessa jatkoilmoituksen toimittamisesta tai, jos kyseessä on pitkäkestoinen poikkeama, kuukauden kuluessa sen käsittelyn päättymisestä." | | ✅ |
| The authority forwards to the CSIRT at once | § 17(1) | "Valvovan viranomaisen on toimitettava 11–13 ja 15 §:ssä tarkoitetut ilmoitukset ja raportit CSIRT-yksikölle välittömästi." | | ✅ |
| The CSIRT sits within Traficom | § 19(1) | "Liikenne- ja viestintävirastossa toimii tietoturvaloukkauksiin reagoiva ja niitä tutkiva NIS 2 -direktiivin 1 artiklan 2 kohdan a alakohdassa tarkoitettu CSIRT-yksikkö." | | ✅ |

What the product does with it (2026-10-30): `INCIDENT_REPORTING_FI` counts
the 24-hour and 72-hour clocks from detection (`deadlineAnchor:
"detection"`), so the declaration form does not ask for an awareness time and
no Finnish deadline can fall after the law's. Until that day Finland ran on
the DEFAULT configuration, which counts from awareness: with an awareness
time recorded later than detection, the deadlines shown were later than the
law's.

## Management, supervision and sanctions

<!-- meta: theme=governance,sanctions; type=reference; date=2026-10-30; surfaces=doc-gen,prompt; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The management approves and oversees, and must be adequately versed | § 10(1) | "Toimijan johdolla tulee olla riittävä perehtyneisyys kyberturvallisuutta koskevaan riskienhallintaan." | The management must have sufficient familiarity with cybersecurity risk management. | ✅ (no training duty in those words; the directive's Art. 20(2) says "follow training") |
| Who the management is | § 10(2) | "Johdolla tarkoitetaan toimijan hallitusta, hallintoneuvostoa ja toimitusjohtajaa" | the board, the supervisory board and the managing director | ✅ |
| Seven supervising authorities by annex point | § 26(1) | "1) Liikenne- ja viestintävirasto siltä osin kuin kyse on liitteen I kohdissa 1–7 ja liitteen II kohdissa 1–5 tarkoitetuista toimijoista;" | (and Energiavirasto, Tukes, Lupa- ja valvontavirasto, Elinvoimakeskus, Ruokavirasto, Fimea) | ✅ |
| Management ban, essential entities only, never public bodies | § 32 | "Valvova viranomainen voi kieltää määräajaksi henkilöä toimimasta keskeisen toimijan hallituksen jäsenenä" | | ✅ |
| Fines: EUR 10 million or 2 %, EUR 7 million or 1.4 % | § 38 | "Keskeiselle toimijalle määrättävän hallinnollisen seuraamusmaksun enimmäismäärä on 10 000 000 euroa tai kaksi prosenttia toimijan edellisen tilikauden maailmanlaajuisesta vuotuisesta kokonaisliikevaihdosta sen mukaan, kumpi näistä määristä on suurempi." | (recorded as a fact; marketing never cites fines) | ✅ |
| The register: what each entity reports | § 41(2) | "tieto siitä, onko se keskeinen toimija;" | (with name, contacts, IP ranges, sector, Member States, information-sharing) | ✅ |
| Changes: two weeks, three months for the digital types | § 41(4) | "Muutoksesta 2 momentissa tarkoitettuihin tietoihin on ilmoitettava valvovalle viranomaiselle kahden viikon kuluessa ja 3 momentissa tarkoitettuihin tietoihin kolmen kuukauden kuluessa muutoshetkestä." | | ✅ |

### What the English page and the configuration say, read against the act (2026-11-06)

The Finnish page's delivery note listed four shipped sentences that went beyond this file. Each was read in the consolidated act, `https://opendata.finlex.fi/finlex/avoindata/v1/akn/fi/act/statute-consolidated/2025/124/fin@20250997`, retrieved 2026-11-06.

| Sentence | Where | Verbatim (official) | Status |
|---|---|---|---|
| A significant incident, first subsection | § 11(1) | "Merkittävällä poikkeamalla tarkoitetaan poikkeamaa, joka on aiheuttanut tai voi aiheuttaa vakavan palvelujen toimintahäiriön tai huomattavia taloudellisia tappioita asianomaiselle toimijalle, sekä poikkeamaa, joka on vaikuttanut tai voi vaikuttaa muihin luonnollisiin henkilöihin tai oikeushenkilöihin aiheuttamalla huomattavaa aineellista tai aineetonta vahinkoa." | ✅ |
| A significant incident, the Commission's implementing act | § 11(7) | "Edellä 1 momentissa tarkoitetun lisäksi merkittävällä poikkeamalla tarkoitetaan NIS 2 -direktiivin 23 artiklan 11 kohdan nojalla annetussa Euroopan komission täytäntöönpanosäädöksessä täsmennettyä tilannetta, jossa poikkeama katsotaan merkittäväksi." | ✅ |
| Trust services, and only where their provision is affected | § 11(6) | "luottamuspalvelun tarjoajan on tehtävä jatkoilmoitus 24 tunnin kuluessa merkittävän poikkeaman havaitsemisesta, jos merkittävä poikkeama vaikuttaa sen luottamuspalvelujen tarjontaan." | ✅ |
| The act sets no channel | § 11 | The section says to whom and when. It leaves the content, form and procedure of a notification to the supervising authority's technical rules: "Valvova viranomainen voi toimialallaan antaa tarkempia teknisiä määräyksiä, joilla tarkennetaan 11–15 §:n nojalla tehtävän ilmoituksen, tiedotuksen tai raportin tietosisältöä, teknistä muotoa ja menettelyä." | ✅ |

"Training is a way to reach the familiarity of § 10(1)" is our reading. § 10(1) requires "riittävä perehtyneisyys" and names no means. The sentence stands as a reading, and the Finnish page does not make it.

## Language: Finnish and Swedish, and the act names three acts otherwise than the directive

<!-- meta: theme=statute,incident; type=reference; date=2026-10-30; surfaces=i18n,data,doc-gen; guard=packages/regulatory-data/test/config-official-languages.test.ts,packages/regulatory-data/test/fi-incident-reporting.test.ts,packages/regulatory-data/test/act-stage-names.test.ts -->

- **Source:** Kyberturvallisuuslaki 124/2025, §§ 11 to 13, 15, 17 and 26,
  consolidated text read again on Finlex on 2026-10-30
  (https://www.finlex.fi/fi/lainsaadanto/2025/124, version
  `http://data.finlex.fi/eli/sd/2025/124/ajantasa/2026-09-04/fin`, headless
  Chromium), against the Finnish version of Directive (EU) 2022/2555,
  Art. 23(4), committed at `docs/research/eur-lex/nis2-fi.txt` (EUR-Lex, CELEX
  32022L2555, read the same day).
- Finland has two national languages, Finnish and Swedish, and the act is
  published in both, equally official. The Swedish text was not read: the
  Finnish labels below are the act's Finnish words, and nothing in the product
  quotes the act in Swedish.

| Act of the notification | Kyberturvallisuuslaki 124/2025 (verbatim) | Directive, Finnish version, Art. 23(4) (verbatim) | Same name? |
|---|---|---|---|
| 24 hours | § 11(2): "Ensi-ilmoitus on tehtävä 24 tunnin kuluessa merkittävän poikkeaman havaitsemisesta"; § 11(3): "Ensi-ilmoituksessa on ilmoitettava:" | a alakohta: "24 tunnin kuluessa siitä, kun ne ovat tulleet tietoisiksi poikkeamasta, ennakkovaroituksen" | no: ensi-ilmoitus, where the directive says ennakkovaroitus |
| 72 hours | § 11(2): "jatkoilmoitus 72 tunnin kuluessa merkittävän poikkeaman havaitsemisesta"; § 11(4): "Jatkoilmoituksessa on ilmoitettava:" | b alakohta: "72 tunnin kuluessa siitä, kun ne ovat tulleet tietoisiksi merkittävästä poikkeamasta, poikkeamailmoituksen" | no: jatkoilmoitus, where the directive says poikkeamailmoitus |
| On request | § 12(1): "Toimijan on annettava valvovan viranomaisen pyynnöstä lisätietoja tai väliraportti merkittävää poikkeamaa koskevista tilannepäivityksistä ja käsittelyn edistymisestä." | c alakohta: "CSIRT-yksikön tai tapauksen mukaan toimivaltaisen viranomaisen pyynnöstä väliraportin asiaan liittyvistä tilannepäivityksistä" | yes: väliraportti |
| One month | § 13(1): "loppuraportti kuukauden kuluessa jatkoilmoituksen toimittamisesta" | d alakohta: "viimeistään kuukauden kuluttua b alakohdan mukaisen poikkeamailmoituksen toimittamisesta lopullisen raportin" | no: loppuraportti, where the directive says lopullinen raportti |
| Long or still ongoing | § 12(2): "Jos merkittävä poikkeama on pitkäkestoinen, toimijan on annettava väliraportti viimeistään kuukauden kuluttua jatkoilmoituksen antamisesta." | e alakohta: "jos poikkeama on edelleen meneillään silloin, kun d alakohdassa tarkoitettu lopullinen raportti pitäisi toimittaa, jäsenvaltioiden on varmistettava, että asianomaiset toimijat toimittavat tuolloin edistymisraportin" | no: väliraportti, where the directive says edistymisraportti |
| The incident | § 11(1): "merkittävästä poikkeamasta" | Art. 23(1): "(merkittävä poikkeama)" | yes: merkittävä poikkeama |
| The clock's start | § 11(2): "havaitsemisesta" | a and b alakohta: "siitä, kun ne ovat tulleet tietoisiksi" | no: detection, where the directive says becoming aware (above) |
| The recipient | § 11(1): "valvovalle viranomaiselle"; § 17(1): "CSIRT-yksikölle välittömästi" | a alakohta: "CSIRT-yksikölle tai tapauksen mukaan toimivaltaiselle viranomaiselle" | no: the supervising authority, which forwards to the CSIRT |

What the product does with it (2026-10-30, the day Finnish became a product
locale): `inferLocale("FI")` answers `fi`, and `officialLanguagesOf("FI")` lists
`fi` and `sv`, so a Finnish organisation that never chose a working language
reads Finnish from the deploy on, e-mails and documents included, and Swedish
and English stay selectable in the organisation settings. Every label of
`INCIDENT_REPORTING_FI` gained a Finnish version in the act's words (held by
`packages/regulatory-data/test/config-official-languages.test.ts`, FI: fi, and
the Finnish case of `fi-incident-reporting.test.ts`). Since the act names the
24-hour, 72-hour and one-month acts otherwise than the directive's Finnish
text, the config carries `actStageNames` for fi (ensi-ilmoitus,
jatkoilmoitus, loppuraportti; `act-stage-names.test.ts`), so a Finnish
reminder e-mail names the act as the act does; the generic Finnish strings
keep the directive's words, since they are read about every country. What a
Finnish surface adds is the act's own: the sector's supervising authority
(§ 11(1), § 26), the CSIRT at Traficom (§ 17(1), § 19) and the clocks from
detection. The getting-started page's Finnish incident line says so, since
Finnish is read under this act alone. `tools/fi-i18n/GLOSSARY.md` records the
vocabulary.

## Departures from the directive, and open items

<!-- meta: theme=incident,scoping,governance; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

- **The 24-hour and 72-hour clocks run from detection** (§ 11(2)), where the
  directive's Finnish text counts from awareness.
- The management must be "adequately versed" (§ 10(1)); the act does not
  word a training duty for the management body as Art. 20(2) does.
- Occasional and minor Annex activity is out (§ 4(5)).
- Only the essential class is named (§ 27); the directive's important
  entities are "other than essential". The act on information management
  names both for public administration: see the last section.
- Not read: the authorities' technical regulations under § 11(5) (content and
  form of notifications); the Swedish-language text of the act, which is
  equally official in Finland; the government bill HE 57/2024 on the choice of
  "havaitsemisesta".

## Public administration is in a second act: chapter 4 a of the act on information management (read 2026-11-05)

<!-- meta: theme=scoping,registration,incident,sanctions; type=scope-error; date=2026-11-05; surfaces=data,prompt,docs; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

Nothing in this repository named this act before 2026-11-05. The third sentence
of § 1 of the cyber act points to it, and the sections read on 2026-10-30 did
not follow the pointer.

- **Source:** Laki julkisen hallinnon tiedonhallinnasta (906/2019), as amended
  by laki 125/2025, a companion act of the cyber act. Finlex open data,
  `/akn/fi/act/statute-consolidated/2019/906/fin@20250125`, consolidated
  2026-06-16. §§ 1, 3 and 4 and chapter 4 a read in full.
- **Kept as read:** `docs/research/eur-lex/fi-906-2019-public-administration.txt`.
- The annexes of the cyber act, read the same day in version `fin@20250997`,
  have no public-administration row.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The cyber act sends public administration elsewhere | 124/2025, § 1 | "NIS 2 -direktiivin täytäntöönpanosta mainitun direktiivin liitteen I kohdassa 10 tarkoitetulla julkishallinnon toimialalla säädetään julkisen hallinnon tiedonhallinnasta annetussa laissa (906/2019)." | Implementation in the public-administration sector of Annex I point 10 is in the act 906/2019 | ✅ |
| Two classes, by name, with no size test | 906/2019, § 18 a(1) | "Tämän luvun soveltamisalaan kuuluvat tiedonhallintayksiköt ovat julkishallinnon toimialan keskeisiä toimijoita. Hyvinvointialueet ja hyvinvointiyhtymät sekä Helsingin kaupunki ovat kuitenkin tärkeitä toimijoita." | The units in the chapter's scope are essential entities of the sector. Wellbeing services counties, their joint authorities and the City of Helsinki are important entities | ✅ |
| Who the chapter leaves out | 906/2019, § 3(3) | "Tämän lain 4 a lukua ei sovelleta seuraaviin viranomaisiin ja viranomaisen toimintaan:" | Among the eight points: the President's office, the offices of Parliament, the Defence Forces, the police units, the Border Guard, the prosecution service, the courts, the Bank of Finland, the universities and universities of applied sciences | ✅ |
| Municipal authorities are out, Helsinki excepted for one set of tasks | 906/2019, § 3(3) point 4 | "4) kunnalliset viranomaiset lukuun ottamatta Helsingin kaupunkia, johon sovelletaan 4 a lukua sen hoitaessa hyvinvointialueiden järjestämisvastuulle lailla säädettyjä tehtäviä;" | Municipal authorities, except the City of Helsinki when it performs tasks the law assigns to the wellbeing services counties | ✅ |
| The supervising and competent authority | 906/2019, § 18 h(1) | "Tässä luvussa tarkoitettu valvova viranomainen ja NIS 2 -direktiivin 8 artiklan 1 kohdassa tarkoitettu toimivaltainen viranomainen julkishallinnon toimialalla on Liikenne- ja viestintävirasto." | Traficom | ✅ |
| Supervision of the important entities is reactive | 906/2019, § 18 h(2) | "Valvova viranomainen voi kohdistaa valvontaa hyvinvointialueeseen, hyvinvointiyhtymään tai Helsingin kaupunkiin vain, jos on perusteltu syy epäillä, että mainittu ei ole noudattanut tässä luvussa tai NIS 2 -direktiivin nojalla annetuissa säädöksissä säädettyä." | Only on reasonable cause to suspect a breach | ✅ |
| The incident clocks are the cyber act's | 906/2019, § 18 d(1) to (3) | "Viranomaisen on viipymättä, viimeistään 24 tunnin kuluttua merkittävän poikkeaman havaitsemisesta, toimitettava valvovalle viranomaiselle poikkeamaa koskeva ensi-ilmoitus" | 24 hours from detection; 72 hours from detection (2); final report within a month of the follow-up (3) | ✅ |
| Information to notify, and when | 906/2019, § 18 a(2) and (3); entry-into-force clause of 125/2025 | "Tämän lain 18 a §:n 2 momentissa tarkoitettu ilmoitus on tehtävä viimeistään kuukauden kuluessa lain voimaantulosta." | Within a month of 8 April 2025; a change within two weeks (§ 18 a(3)) | ✅ |
| The sanctions of this chapter | 906/2019, § 18 l | "Valvova viranomainen voi asettaa uhkasakon 1 momentissa tarkoitetun päätöksen noudattamisen tehosteeksi." | An order to correct, publication, a written warning, and a conditional fine to enforce the order. The chapter has no administrative penalty payment | ✅ |

**What the scope check says since 2026-11-05.** It gave a Finnish municipality
the directive's sentence: "in scope only where the member state has extended
the directive", then an important entity.

| Level stated | Verdict | Basis |
|---|---|---|
| Central, or not stated | essential, with no size test | 906/2019, § 18 a(1) |
| Regional, read here as the regional level: a wellbeing services county or a joint authority | important, with no size test | 906/2019, § 18 a(1), second sentence |
| Local, no other sector declared | out of scope, as outside the rules on public administration | 906/2019, § 3(3) point 4; 124/2025, § 4(6) |
| Local, an Annex sector declared | that sector's class by size | 124/2025, § 4(6), § 3(1), § 27(2) |

The same day the country's document context gained a paragraph, so a document
generated for a public body cites chapter 4 a and not the cyber act, and the
country page gained a fact.

**Open.**

- **The act has no word for "regional".** Wellbeing services counties are read
  as the regional level. A regional council (maakunnan liitto) is a joint
  municipal authority by its form: whether point 4 of § 3(3) covers it is not
  read.
- The inputs have no word for the City of Helsinki either. Its tasks as a
  wellbeing services county reach the verdict only through its sentence.
- The incident configuration of Finland cites the cyber act for every entity.
  The clocks and the authority are the same for a public body, so its
  deadlines hold, and only the citation differs.
- **Not read:** the government bill HE 57/2024 on chapter 4 a; the Swedish text
  of the act; Traficom's channel for the public-administration register;
  § 3(6) on Åland beyond its first sentence.

## The national reference (written 2026-11-05)

<!-- meta: theme=statute; type=delivery; date=2026-11-05; surfaces=data,ui; guard=packages/regulatory-data/test/country-configs-transposition-references.test.ts,apps/web/test/dk-fi-national-reference-surfaces.test.tsx -->

`TRANSPOSITION_REFERENCES_FI` is written from the sections above and adds no
source. It carries six requirements in English, French, Italian, German,
Portuguese and Finnish: the clocks, the recipient, public administration in its
second act, registration, the one class, the management. By house rule it states
no fine amount. `managementBodyTrainingDuty` is false: the act does not word a
training duty, so the training page names no duty in its name. It has no Swedish
text: the Swedish version of the act is not read, and its terms are not guessed.

## The Finnish country page and signup: /fi/eu/finland and /fi/luo-tili (2026-11-06)

<!-- meta: theme=statute,scoping,registration,incident,governance; type=delivery; date=2026-11-06; surfaces=marketing,i18n; guard=apps/web/test/country-finland-fiche.test.tsx,apps/web/test/register-funnel-guard.test.ts,apps/web/test/register-redirect-keeps-query.test.ts -->

- **Why:** a Finnish reader had the product in Finnish and the country page in
  English only, and a Finnish browser on `/register` stayed on the form written
  for no country.
- **Source:** this record, and no fact outside it. The page's Finnish is the
  act's, reused from the rows above and from the shipped reference and incident
  configuration. Where a row gives a fact as an English gloss, the Finnish word
  comes from the text this record keeps as read
  (`docs/research/eur-lex/fi-906-2019-public-administration.txt`). Its test holds
  each fact, each legal phrase, each quotation, provision, date and length of
  time against this file, and keeps the two acts apart where they share a
  number.
- **Finnish is read in one country,** so the chrome speaks the act directly, the
  title says "Suomessa" itself, the landing records Finland whatever the source,
  and no market entry is needed. Swedish was left as it was: there is no Swedish
  version of this page, and a Swedish reader in Finland signs up on
  `/sv/skapa-konto`.
- **The framework slot is the risk-management model of § 8,** the one duty on the
  measures this file names, through § 47(3). The page says that Reglyze assesses
  on the requirements of the directive. It does not say that Finland has no
  national catalogue: this file does not quote the act's provision on the
  measures, so it cannot say what that provision holds.
- **The authority is the reference's:** Traficom and the sector supervising
  authorities. The hero button opens the act on Finlex, and the page names no
  channel: this file gives the Kyberturvallisuuskeskus page by its domain, for
  Traficom's sectors only.
- **Readings stay readings:** that a wellbeing services county is the regional
  level is said to be Reglyze's reading.
- **As read on their date:** the Commission's case (2026-10-28), the Traficom
  page (updated 2026-10-13) and the act 906/2019 (consolidated 2026-06-16, read
  2026-11-05). § 26 and Annex I change on 2027-01-01 (785/2026): the seven
  authorities are stated, with Säteilyturvakeskus from that day, so the page's
  `reverifyAfter` is 2026-12-31.
- **Left out, and said to be where a reader would look:** the sectors of the annexes and which annex points each
  authority other than Traficom holds, the Recommendation's figures, the wording
  of § 8 and of the provision on the measures, the end of § 47(3), the
  authorities' technical rules under § 11(5), every channel but Traficom's, the
  regional council's position under § 3(3) point 4, and the government bill on
  "havaitsemisesta".
- **Left out without a word:** § 38 and all of § 18 l of the act 906/2019, whose
  list ends on a word for a fine; the previous regime, which this file does not
  name; § 3(6) of the act 906/2019 on Åland; and, of the same act, what the kept
  text holds and this file does not quote, §§ 18 b, 18 c, 18 e to 18 g and 18 i to
  18 k. The act 906/2019 has no link on the page: this file gives it as a Finlex
  open-data path, not an address. Nor does the page say that the incident
  configuration cites the cyber act for a public body: this file says only the
  citation differs, and a reader of the page does not meet it.
- **What the page says about the product** is tied to what it reports: a state
  body comes out essential and a wellbeing services county important, each with
  no size test, and a municipality out of scope unless it declares an Annex
  sector. The questionnaire has no word for the City of Helsinki or for a state
  body that § 3(3) of the act 906/2019 leaves out, and does not ask about
  occasional and minor activity, and the page says so. The verdict uses
  the directive's classes, so the page says what "tärkeä toimija" means under the
  cyber act. The test runs the engine on these cases.
- **Four shipped sentences went further than this file** when the page was
  written. They are read in the act since: see "What the English page and the
  configuration say", and the page now gives the definition of a significant
  incident word for word.
- **Measured** in Chromium on 2026-11-06, both pages at 360, 390 and 1280 px:
  neither scrolls sideways. At 360 px the act's name in the fiche's title was
  wider than its column and broke inside the word, so the title carries a soft
  hyphen at the seam of the compound, and a no-break space in "NIS 2".
- **No native Finnish speaker has read the page yet.**
