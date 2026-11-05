# Denmark — NIS2 National Transposition Legal Sources

## Statute: NIS 2-loven (LOV nr 434 af 06/05/2025)

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=data; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

| Field | Value |
|---|---|
| Official citation | LOV nr 434 af 06/05/2025 — Lov om foranstaltninger til sikring af et højt cybersikkerhedsniveau |
| Short name | NIS2-loven (LOV nr 434 af 06/05/2025) |
| Transposes | Directive (EU) 2022/2555 (NIS2) |
| Official URL (competent authority) | https://samsik.dk/nis2/implementering-af-nis-2-i-dansk-ret/ |
| Retrieval date | 2026-06-07 |

### Fact table

| Fact | Source | Verbatim quote (Danish) | Status |
|---|---|---|---|
| Entry into force = 2025-07-01 | § 33 (Kapitel 10), retsinformation.dk | "§ 33. Loven træder i kraft den 1. juli 2025." | verified |
| Registration deadline 2025-10-01 | competent authority | "de omfattede enheder skal registrere sig senest 1. oktober" (Styrelsen for Samfundssikkerhed) | verified |

### Notes

- retsinformation.dk returns HTTP 403 to plain fetches; the official statute text was read via **Playwright** (real browser, da-DK locale). The ikrafttræden clause is § 33 in Kapitel 10 ("Ikrafttrædelse, overgangsbestemmelser og ændringer i anden lovgivning").
- LOV nr 434 af 06/05/2025; transposes Directive (EU) 2022/2555 (EU note at the foot of the official text).
- Tracker: stage = `in_force`; targetDate null (already in force).
- 2026-10-30: this scouting note was followed; the record below reads the act, its two executive orders and the authority's pages in full. Both facts above are confirmed (§ 33, stk. 1 and 3).

## Sources read in full on 2026-10-30: the act, its two executive orders, the authority's pages

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Every text was read on Retsinformation.dk (the state legal information
system) in headless Chromium, which answers where plain fetches get HTTP 403,
and the authority's pages on samsik.dk the same way.

| Text | Where | Read |
|---|---|---|
| LOV nr 434 af 06/05/2025, NIS 2-loven ("GÆLDENDE", ressort Ministeriet for Samfundssikkerhed og Beredskab) | https://www.retsinformation.dk/eli/lta/2025/434 | in full, chapters 1 to 11 and both annexes |
| BEK nr 620 af 02/06/2025, the competent authorities and digital communication | https://www.retsinformation.dk/eli/lta/2025/620 | in full |
| BEK nr 653 af 04/06/2025, validation and disclosure of domain name registration data | https://www.retsinformation.dk/eli/lta/2025/653 | its scope and definitions |
| Styrelsen for Samfundssikkerhed (SAMSIK): NIS 2, sector authorities, registration | https://samsik.dk/nis2/ ; /sektoransvarlige-myndigheder/ ; /registrering-nis2/ | the pages, as guidance |
| Commission infringement register | `ec.europa.eu/implementing-eu-law/search-infringement-decisions/`, `POST /api/decisions` with `memberState` "DK" | the two decisions |

Retsinformation lists exactly two executive orders under the act (BEK 620 and
BEK 653, "Alle bekendtgørelser m.v. og cirkulærer m.v. til denne lov",
2026-10-30). No executive order on measures (§ 6, stk. 3) or on significance
thresholds (§ 12, stk. 3) exists.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Title | heading | "Lov om foranstaltninger til sikring af et højt cybersikkerhedsniveau (NIS 2-loven)" | Act on measures to ensure a high level of cybersecurity | ✅ |
| In force 1 July 2025 | § 33, stk. 1 | "§ 33. Loven træder i kraft den 1. juli 2025." | The act enters into force on 1 July 2025. | ✅ |
| Registration by 1 October 2025 | § 33, stk. 3 | "Oplysningerne efter § 9, stk. 1, og § 10, stk. 1, skal indgives senest den 1. oktober 2025." | The § 9 and § 10 information is due by 1 October 2025. | ✅ |
| It repeals four 2018 NIS1 acts | § 33, stk. 4 to 7 | "Lov nr. 436 af 8. maj 2018 om net- og informationssikkerhed for domænenavnssystemer og visse digitale tjenester ophæves." | (and acts 437, 440 and 441 of 2018) | ✅ |
| Not for the Faroe Islands and Greenland | § 34 | "Loven gælder ikke for Færøerne og Grønland" | | ✅ |
| Infringement case closed | Commission register, INFR(2024)0265 | "Reasoned opinion Art. 258-260(3) TFEU" … "7/05/2025" ; "Closing of the case" … "30/01/2026" ; "activeInfringementCase":"No" | | ✅ |

## Scope: who is obliged, the size test and the two classes

<!-- meta: theme=scoping; type=reference; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/national-size-tests.test.ts -->

Three facts decide real cases. **Energy, telecommunications and part of
finance are outside the NIS 2-loven**: each has its own act. **The size test is
written into the act**, as headcount and financial thresholds of the entity
itself, with no reference to Recommendation 2003/361/EC. And **ministers decide
by executive order** whether local public administration and education come in.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Annex 1 and 2 entities, public and private | § 1, stk. 1 | "Loven finder anvendelse på offentlige og private enheder, der er omfattet af lovens bilag 1 og 2" | | ✅ |
| Energy, telecom and designated financial entities are out | § 1, stk. 2 | "Loven finder ikke anvendelse på enheder, i det omfang de er omfattet af lov om styrket beredskab i energisektoren. Loven finder ikke anvendelse på enheder, i det omfang de er omfattet af lov om sikkerhed og beredskab i telesektoren" | (and entities designated under § 333 of the financial business act) | ✅ |
| Sector Union acts at least equivalent prevail | § 1, stk. 3 | "hvor sektorspecifikke EU-retsakter og eventuel national gennemførelse heraf har mindst samme virkning som bestemmelserne i §§ 6, 12, 13 og 15" | | ✅ |
| Security, defence, law enforcement bodies are out | § 1, stk. 4 | "Loven finder ikke anvendelse på offentlige forvaltningsenheder, som udfører deres aktiviteter inden for national sikkerhed, offentlig sikkerhed, forsvar eller retshåndhævelse" | | ✅ |
| Never an exemption for a trust service provider | § 1, stk. 6 | "Der kan ikke fastsættes regler efter stk. 5, hvor en enhed fungerer som tillidstjenesteudbyder." | | ✅ |
| Local public administration and education only by executive order | § 1, stk. 7 | "Vedkommende minister kan efter forhandling med ministeren for samfundssikkerhed og beredskab fastsætte regler om, at loven helt eller delvis også finder anvendelse på henholdsvis offentlige forvaltningsenheder på lokalt plan og uddannelsesinstitutioner." | A minister may by rules extend the act to local public administration and to education. | ✅ |
| Essential: 250 persons, or turnover over 50 and balance sheet over 43 million euro | § 4, stk. 1 | "Enheder af en type, som er omfattet af lovens bilag 1, anses for at være væsentlige enheder, hvis enheden opfylder en af følgende betingelser, jf. dog stk. 2 og 3:" ; "1) Enheden beskæftiger 250 personer eller derover." ; "2) Enheden har en årlig omsætning på over 50 mio. euro og en årlig samlet balance på over 43 mio. euro." | An entity of an Annex 1 type is essential if it meets one of the two conditions. (The opening words were added to this row on 2026-10-30, read on Retsinformation in headless Chromium the same day.) | ✅ |
| Municipalities and regions as commercial e-communications providers | § 4, stk. 2 | "Kommuner og regioner anses som væsentlige enheder, såfremt de med et kommercielt formål udfører opgaver som udbydere af offentlige elektroniske kommunikationsnet" | | ✅ |
| Essential at any size | § 4, stk. 3 | "1) Kvalificerede tillidstjenesteudbydere og topdomæneadministratorer samt DNS-tjenesteudbydere." ; "2) Offentlige forvaltningsenheder under den centrale forvaltning." ; "3) Enheder, der er identificeret som kritiske enheder i henhold til CER-loven." | (and NIS1 operators of essential services, and the directive's national-importance cases) | ✅ |
| Important: 50 persons, or turnover and balance sheet over 10 million euro | § 5, stk. 1 | "Enheder af en type, som er omfattet af lovens bilag 1 eller 2, anses for at være vigtige enheder, hvis enheden ikke opfylder kriterierne for at være væsentlige enheder i medfør af § 4 og enheden opfylder mindst en af følgende betingelser:" ; "1) Enheden beskæftiger 50 personer eller derover." ; "2) Enheden har en årlig omsætning på over 10 mio. euro og en årlig samlet balance på over 10 mio. euro." | An entity of an Annex 1 or 2 type that is not essential under § 4 is important if it meets at least one of the two conditions. (Opening words added on 2026-10-30, as above.) | ✅ |
| Non-qualified trust service providers are important at any size | § 5, stk. 3 | "anses tillidstjenesteudbydere, der ikke opfylder kriterierne for at være væsentlige enheder, for at være vigtige enheder" | | ✅ |
| Public administration in the annex: central and regional | Bilag 1, pkt. 10 | "Offentlige forvaltningsenheder under den centrale forvaltning som defineret af en medlemsstat i overensstemmelse med national ret" ; "Offentlige forvaltningsenheder på regionalt plan som defineret af en medlemsstat i overensstemmelse med national ret" | | ✅ |

Reading, not a quotation: the thresholds of §§ 4 and 5 are the entity's own
("Enheden beskæftiger"); the act does not mention the Recommendation's
partner and linked enterprises. Whether group figures count is not settled by
the act read here.

Checked for the scoping engine on 2026-10-30: written out, the thresholds are
the Recommendation's as `classifyEnterpriseSize` in
`packages/regulatory-data/src/scoping.ts` applies them. The numbers are the
same; "250 personer eller derover" and "50 personer eller derover" are the
other side of the Recommendation's "fewer than"; "over" is the other side of
its "not exceeding"; "en af" and "mindst en af følgende betingelser" put an
"or" between the headcount and the two figures, which must both be exceeded.
So Denmark has no national size test in the engine, and
`packages/regulatory-data/test/national-size-tests.test.ts` holds the two
opening sentences above against this file. Still open: the group question
above, the telecom and energy acts (§ 1, stk. 2). Local government was
settled on 2026-11-05 (last section).

## Scope: five-person digital-infrastructure companies, and a reading for a classifier

<!-- meta: theme=scoping; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

A five-person company established in Denmark (the digital types: main
establishment, § 2, stk. 2), under the NIS 2-loven:

| Service | In scope of the NIS 2-loven? | Class | Why |
|---|---|---|---|
| Qualified trust service | yes | essential | § 4, stk. 3, nr. 1 |
| Non-qualified trust service | yes | important | § 5, stk. 3 |
| TLD registry | yes | essential | § 4, stk. 3, nr. 1 |
| DNS service | yes | essential | § 4, stk. 3, nr. 1 |
| Domain name registration (registrar) | for registration (§ 10) and the domain data duty (§ 11) | none stated (reading) | § 10, stk. 1 names "enheder, der leverer domænenavnsregistreringstjenester" next to essential and important entities |
| Public e-communications network or service | under the telecom act, not this one | n/a here | § 1, stk. 2; SAMSIK supervises them under "Lov om sikkerhed og beredskab i telesektoren" (guidance) |
| Internet exchange point (IXP) | yes, under this act (corrected 2026-10-30: this row put IXPs under the telecom act) | per the act | BEK 620, § 12, nr. 2: "Enheder, der udgør udbydere af internetudvekslingspunkter, jf. NIS 2-lovens bilag 1, pkt. 8." (SAMSIK is their competent authority) |
| Cloud, data centre, CDN, MSP, MSSP, marketplace, search engine, social network | no, unless designated | n/a | the size test of § 5, stk. 1 applies |

```
IN SCOPE of the NIS 2-loven (not the energy, telecom or § 333 financial acts):
  Annex 1/2 type AND (persons >= 50 OR (turnover > 10M AND balance > 10M))      -> in
  QTSP | TSP | TLD | DNS                                                        -> in, any size
  central government entity | regional entity (Annex 1, pt. 10)                 -> in
  municipality/region as commercial e-comms provider of medium size             -> in, essential (§ 4(2))
  CER critical entity | NIS1 OES | sole provider / significant impact cases     -> in, any size
  local public administration, education                                        -> only if an executive order says so (§ 1(7))
EXCEPT security/defence/law-enforcement bodies; ministerial exemption (never for a TSP)
CLASS essential: Annex 1 AND (persons >= 250 OR (turnover > 50M AND balance > 43M))
      | QTSP | TLD | DNS | central government | CER | NIS1 OES | national importance
      else important (§ 5), including every non-qualified TSP
```

## Registration: two lists, two deadlines, one form on Virk.dk

<!-- meta: theme=registration; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Essential and important entities, and registrars: within two weeks | § 10, stk. 1 and 2 | "Væsentlige og vigtige enheder samt enheder, der leverer domænenavnsregistreringstjenester, skal registrere sig hos den relevante kompetente myndighed" ; "Oplysningerne efter stk. 1 skal indgives, senest 2 uger efter at enheden omfattes af loven." | Register within two weeks of coming into scope. | ✅ |
| Their changes within two weeks | § 10, stk. 3 | "skal enheden give den relevante kompetente myndighed underretning herom senest 2 uger efter datoen for ændringen." | | ✅ |
| The digital types file the Article 27 list within three months | § 9, stk. 2 | "Oplysningerne efter stk. 1 skal indgives, senest 3 måneder efter at enheden omfattes af loven." | | ✅ |
| Through SAMSIK's self-service on Virk.dk, signed with MitID | BEK 620, § 14 | "Registrering efter NIS 2-lovens §§ 9 og 10 og underretning efter NIS 2-lovens §§ 12-14 skal ske digitalt gennem den af Styrelsen for Samfundssikkerhed anviste selvbetjeningsløsning, som er tilgængelig via Virk.dk" ; "Den digitale kommunikation efter stk. 1 skal være forsynet med den offentlige digitale signatur MitID." | | ✅ |
| Domain data access requests: 72 hours | § 11, stk. 5 | "Anmodninger skal besvares senest inden for 72 timer efter modtagelse af anmodningen." | | ✅ |

Guidance departing from the act (the act governs): SAMSIK's registration page
gives three months for every change ("senest tre måneder efter datoen for
ændringen", citing § 9, stk. 1), while § 10, stk. 3 gives essential and
important entities two weeks.

## Security measures: the directive's ten, and no national catalogue

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The duty | § 6, stk. 1 | "Væsentlige og vigtige enheder skal træffe passende og forholdsmæssige tekniske, operationelle og organisatoriske foranstaltninger" | | ✅ |
| Supply chain | § 6, stk. 1, nr. 4 | "Forsyningskædesikkerhed, herunder sikkerhedsrelaterede aspekter vedrørende forholdene mellem den enkelte enhed og dens direkte leverandører eller tjenesteudbydere." | | ✅ |
| Rules may follow, none exist | § 6, stk. 3 | "Vedkommende minister kan efter forhandling med ministeren for samfundssikkerhed og beredskab fastsætte nærmere regler om foranstaltninger efter stk. 1." | | ✅ (no such order on Retsinformation, 2026-10-30) |

## Incident reporting: to the authority and the CSIRT, from awareness

<!-- meta: theme=incident; type=reference; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/dk-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Since 2026-10-30 this section feeds `INCIDENT_REPORTING_DK`
(packages/regulatory-data/src/country-configs/incident-reporting.ts). The
channel was read live on SAMSIK's NIS 2 page that day: "Hændelser skal
indberettes på virk.dk:", linked as "Indberet hændelse (virk.dk)" to
https://virk.dk/myndigheder/stat/SAMSIK/, and "Indberetninger håndteres af
Forsvarets Efterretningstjeneste (FE), som varetager opgaven som national
CSIRT." The sector's competent authority is named in the text, not modelled
as a sector rule.

The directive's clocks, in the Danish text of the directive's words, with one
national choice: **the entity notifies both the competent authority and the
CSIRT**. The authority's pages name the national CSIRT: the Danish Defence
Intelligence Service. The same day, when Danish became a product locale, every
label of the configuration gained a Danish version in the act's words, compared
with the directive's Danish text in the Language section below.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Recipients: the competent authority and the CSIRT | § 12, stk. 1 | "Væsentlige og vigtige enheder skal underrette den relevante kompetente myndighed og Computer Security Incident Response Team (CSIRT) om enhver væsentlig hændelse." | | ✅ |
| Early warning: 24 hours from awareness | § 13, stk. 1, nr. 1 | "sendes uden unødigt ophold, og senest inden for 24 timer efter at enheden har fået kendskab til den væsentlige hændelse." | within 24 hours of becoming aware | ✅ |
| Incident notification: 72 hours | § 13, stk. 1, nr. 2 | "under alle omstændigheder inden for 72 timer efter at enheden har fået kendskab til den væsentlige hændelse" | | ✅ |
| Interim report on request | § 13, stk. 1, nr. 3 | "En foreløbig rapport med relevante statusopdateringer sendes efter anmodning fra CSIRT’en." | | ✅ |
| Final report: one month after the notification | § 13, stk. 1, nr. 4 | "En endelig rapport sendes senest 1 måned efter fremsendelsen af den hændelsesunderretning, der er omhandlet i nr. 2." | | ✅ |
| Still ongoing: a status report, then one month after handling | § 13, stk. 1, nr. 5 | "skal den underrettende enhed indsende en statusrapport på det pågældende tidspunkt og en endelig rapport, senest 1 måned efter at hændelsen er håndteret." | | ✅ |
| Trust services: 24 hours | § 13, stk. 2 | "Tillidstjenesteudbydere skal i tilfælde af væsentlige hændelser afgive underretningen efter stk. 1, nr. 2, uden unødigt ophold og senest inden for 24 timer efter at være blevet bekendt med den væsentlige hændelse." | | ✅ |
| Significant incident | § 12, stk. 2 | "1) Hændelsen har forårsaget eller er i stand til at forårsage alvorlige driftsforstyrrelser af tjenesterne eller økonomiske tab for den berørte enhed." | | ✅ |
| Channel: Virk.dk | BEK 620, § 14 | (quoted in the registration section) | | ✅ |
| The national CSIRT is the Defence Intelligence Service | SAMSIK, NIS 2 page | "Indberetninger håndteres af Forsvarets Efterretningstjeneste (FE), som varetager opgaven som national CSIRT." | Reports are handled by the Danish Defence Intelligence Service, the national CSIRT. | ✅ (authority page; the act says "CSIRT’en") |
| Informing recipients | § 15, stk. 1 | "Væsentlige og vigtige enheder underretter uden unødigt ophold modtagerne af deres tjenester om væsentlige hændelser, der sandsynligvis vil påvirke leveringen af deres tjenester negativt." | | ✅ |

## Governance and training

<!-- meta: theme=governance; type=reference; date=2026-10-30; surfaces=doc-gen,prompt; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Approval and oversight | § 7, stk. 1 | "skal være godkendt af enhedens ledelsesorgan. Ledelsesorganet fører tilsyn med foranstaltningernes gennemførelse." | | ✅ |
| Training of the management body, no interval | § 7, stk. 2 | "Medlemmerne af en væsentlig eller vigtig enheds ledelsesorgan skal deltage i relevante kurser om styring af cybersikkerhedsrisici og tilskynde til, at tilsvarende kurser tilbydes til enhedens øvrige ansatte." | Members of the management body must attend relevant courses on cybersecurity risk management and encourage similar courses for the other employees. | ✅ |
| Who the management body is | § 3, nr. 20 | "i) bestyrelsen i selskaber, der har en direktion og en bestyrelse," | (the board where there is one; the executive board otherwise; for a public authority its top administrative management) | ✅ |
| Temporary ban on a manager, essential entities, never public bodies | § 23, stk. 1, nr. 2 and stk. 4 | "Midlertidigt at forbyde enhver fysisk person med ledelsesansvar på niveau med administrerende direktør eller den juridiske repræsentant hos enheden at udøve ledelsesfunktioner" ; "Bestemmelserne i stk. 1-3 finder ikke anvendelse på offentlige forvaltningsenheder." | | ✅ |

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Recorded as facts. Marketing never cites fines.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| One authority per sector, by executive order | § 20, stk. 1 | "fastsætter efter forhandling med vedkommende minister regler om, hvilken myndighed der skal varetage funktionen som kompetent myndighed" | | ✅ |
| SAMSIK: municipalities and central government | BEK 620, § 1 | "§ 1. Styrelsen for Samfundssikkerhed er kompetent myndighed for følgende:" ; "1) Kommunerne." | | ✅ |
| The Agency for Digital Government: digital infrastructure, ICT services, digital providers | BEK 620, § 6 | "§ 6. Digitaliseringsstyrelsen er kompetent myndighed for følgende enheder:" | (DNS, TLD, cloud, data centres, CDN, trust services, MSP, MSSP, marketplaces, search engines, social networks, registrars) | ✅ |
| Health: the Health Data Authority, which also supervises the regions | BEK 620, §§ 2 and 4 | "§ 2. Sundhedsdatastyrelsen er kompetent myndighed for følgende:" ; "1) Regionerne, jf. NIS 2-lovens bilag 1, pkt. 10." | | ✅ |
| Transport, postal, maritime, research, space, water, food, waste, chemicals, manufacturing | BEK 620, §§ 5 and 7 to 13 | "§ 7. Trafikstyrelsen er kompetent myndighed for følgende enheder:" ; "§ 11. Miljøstyrelsen er kompetent myndighed for følgende enheder:" ; "§ 13. Fødevarestyrelsen er kompetent myndighed for enheder" | (and Søfartsstyrelsen, Uddannelses- og Forskningsstyrelsen, Klimadatastyrelsen, Energistyrelsen for waste incineration, SAMSIK for IXPs, chemicals and four manufacturing subsectors) | ✅ |
| Energy, telecom and finance under their own acts | SAMSIK, sector authorities page | "NIS 2 bliver implementeret i særskilt lovgivning for telesektoren i Lov om sikkerhed og beredskab i telesektoren." ; "NIS 2 er implementeret i særskilt lovgivning for energisektoren i Lov om styrket beredskab i energisektoren" ; "NIS 2 er implementeret i særskilt lovgivning for finanssektoren i Lov om finansiel virksomhed." | | ✅ (authority page) |
| Fines are criminal, with no amount in the act | § 32, stk. 1 | "Med bøde straffes den, der" | Whoever ... is punished with a fine | ✅ |
| Companies are criminally liable | § 32, stk. 2 | "Der kan pålægges selskaber m.v. (juridiske personer) strafansvar efter reglerne i straffelovens 5. kapitel." | | ✅ |

The act sets no maximum fine. How Denmark meets the directive's Art. 34
minimum ceilings is not stated in the texts read (the bill's remarks were not
read).

## Language: the binding texts are Danish, and they take the directive's Danish words

<!-- meta: theme=statute,incident; type=reference; date=2026-10-30; surfaces=i18n,data,doc-gen; guard=packages/regulatory-data/test/config-official-languages.test.ts,packages/regulatory-data/test/dk-incident-reporting.test.ts,packages/regulatory-data/test/act-stage-names.test.ts -->

- **Source:** LOV nr 434 af 06/05/2025, § 13, stk. 1, nr. 1 to 5, read again
  on Retsinformation.dk on 2026-10-30 (https://www.retsinformation.dk/eli/lta/2025/434,
  headless Chromium), against the Danish version of Directive (EU) 2022/2555,
  Art. 23(4), committed at `docs/research/eur-lex/nis2-da.txt` (EUR-Lex,
  CELEX 32022L2555, read the same day).
- The act, BEK 620 and BEK 653 are published in Danish only. SAMSIK publishes
  "NIS 2 in English" pages, which are guidance, not law. The act does not apply
  to the Faroe Islands and Greenland (§ 34, quoted above), so Danish is read
  under it in Denmark alone.

| Act of the notification | NIS 2-loven, § 13, stk. 1 (verbatim) | Directive, Danish version, Art. 23(4) (verbatim) | Same name? |
|---|---|---|---|
| 24 hours | nr. 1: "En tidlig varsling, som skal angive, om den væsentlige hændelse mistænkes at være forårsaget af ulovlige eller ondsindede handlinger eller kunne have en grænseoverskridende virkning, sendes uden unødigt ophold, og senest inden for 24 timer efter at enheden har fået kendskab til den væsentlige hændelse." | litra a): "inden for 24 timer efter at have fået kendskab til den væsentlige hændelse en tidlig varsling" | yes: tidlig varsling |
| 72 hours | nr. 2: "En hændelsesunderretning, som skal ajourføre oplysningerne fra den tidlige varsling, jf. nr. 1, og give en indledende vurdering af den væsentlige hændelse" | litra b): "inden for 72 timer efter at have fået kendskab til den væsentlige hændelse, en hændelsesunderretning" | yes: hændelsesunderretning |
| On request | nr. 3: "En foreløbig rapport med relevante statusopdateringer sendes efter anmodning fra CSIRT’en." | litra c): "en foreløbig rapport om relevante statusopdateringer" | yes: foreløbig rapport |
| One month | nr. 4: "En endelig rapport sendes senest 1 måned efter fremsendelsen af den hændelsesunderretning, der er omhandlet i nr. 2." | litra d): "en endelig rapport senest en måned efter forelæggelsen af den i litra b) omhandlede hændelsesunderretning" | yes: endelig rapport |
| Still ongoing | nr. 5: "skal den underrettende enhed indsende en statusrapport på det pågældende tidspunkt og en endelig rapport, senest 1 måned efter at hændelsen er håndteret." | litra e): "en statusrapport på det pågældende tidspunkt og en endelig rapport senest en måned efter deres håndtering af hændelsen" | yes: statusrapport |
| The incident | § 12, stk. 1: "om enhver væsentlig hændelse" | Art. 23(1): "(væsentlig hændelse)" | yes: væsentlig hændelse |

What the product does with it (2026-10-30, the day Danish became a product
locale): `inferLocale("DK")` answers `da`, so a Danish organisation that never
chose a working language reads Danish from the deploy on, e-mails and
documents included, and English stays selectable in the organisation
settings. Every label of `INCIDENT_REPORTING_DK` gained a Danish version in the
act's words, held by `packages/regulatory-data/test/config-official-languages.test.ts`
(DK: da) and the Danish case of `dk-incident-reporting.test.ts`. Since the act
names every stage as the directive's Danish text does, the config carries no
`actStageNames` (`act-stage-names.test.ts` pins that): the reminders' Danish
names are the act's. What a Danish surface adds is the act's own: both
recipients (§ 12, stk. 1), Styrelsen for Samfundssikkerhed's self-service on
Virk.dk (BEK 620, § 14), and Forsvarets Efterretningstjeneste as the national
CSIRT. The getting-started page's Danish incident line says so, since Danish
is read in one country only. `tools/da-i18n/GLOSSARY.md` records the
vocabulary.

## Departures from the directive, read from the texts above

<!-- meta: theme=scoping,registration,incident,sanctions; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

- Energy, telecommunications and the financial entities designated under
  § 333 of the financial business act are outside the NIS 2-loven, each under
  its own act (§ 1, stk. 2). A Danish telecom or energy company reads those
  acts, not this one.
- The size thresholds are written into the act for the entity itself, with no
  reference to Recommendation 2003/361/EC (§§ 4 and 5).
- Local public administration and education are in only if an executive order
  extends the act to them (§ 1, stk. 7); none was found. BEK 620 names
  "Kommunerne" among SAMSIK's supervised entities because a municipality that
  carries out an Annex activity is under the act as a whole (last section).
- Every significant incident is notified to both the competent authority and
  the CSIRT (§ 12, stk. 1).
- Registration within two weeks of coming into scope for essential and
  important entities (§ 10, stk. 2), shorter than any directive deadline.
- Fines are criminal and the act sets no amount (§ 32).

## Open items: not read, or not resolved

<!-- meta: theme=scoping,incident,sanctions; type=lead; date=2026-10-30; surfaces=docs; guard=none -->

- The three sector acts: Lov om sikkerhed og beredskab i telesektoren, Lov om
  styrket beredskab i energisektoren (lov nr. 258 af 6. marts 2025) with its
  executive order, and the NIS2 provisions of Lov om finansiel virksomhed.
- The bill's remarks (L 141, 2024/25): the fine levels, the group question.
- SAMSIK's incident-notification guidance ("vejledningen om
  hændelsesunderretning") and the Virk.dk form itself (MitID Erhverv).
- Implementing Regulation (EU) 2024/2690 for the digital types.

## Public administration: a region by size, a municipality by what it does (read 2026-11-05)

<!-- meta: theme=scoping; type=scope-error; date=2026-11-05; surfaces=data,prompt,ui,docs; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

The bill closes the question this file left open on "Kommunerne". The text read
is kept in `docs/research/eur-lex/dk-nis2-loven-public-administration.txt`: §§ 1,
4 and 5 and Bilag 1, pkt. 10 of the act, and the remarks of Forslag til lov
L 141, 2024/25, on Retsinformation (`https://www.retsinformation.dk/eli/ft/202412L00141`),
in headless Chromium. The bill's § 1, stk. 6 is § 1, stk. 7 of the act.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Central government: essential at any size, the only public level so named | § 4, stk. 3, nr. 2 | "Uanset deres størrelse anses følgende enheder for at være væsentlige enheder:" ; "2) Offentlige forvaltningsenheder under den centrale forvaltning." | | ✅ |
| The regional level is in the annex | Bilag 1, pkt. 10 | "Offentlige forvaltningsenheder på regionalt plan som defineret af en medlemsstat i overensstemmelse med national ret" | No words on size or on a risk assessment | ✅ |
| A municipality can be in without an executive order | Bill L 141, remarks to § 1, stk. 6 | "Det bemærkes, at en offentlig forvaltningsenhed på lokalt plan eller en uddannelsesinstitution efter omstændighederne kan være omfattet af lovens anvendelsesområde, selvom bemyndigelsen i det foreslåede stk. 6 ikke er udnyttet." | | ✅ |
| The example is a healthcare provider | Same | "Dette vil eksempelvis være tilfældet i en situation, hvor en kommune agerer som sundhedstjenesteyder i overensstemmelse med lovens bilag 1 eller 2." | | ✅ |
| And then the whole municipality | Same | "I sådanne tilfælde vil eksempelvis en kommune og en uddannelsesinstitution som en helhed være omfattet af lovens krav." | All its network and information systems, by point 3.1.3 of the bill | ✅ |

**A region is decided by size.** This is a reading of the text. § 4, stk. 3 gives
the class "whatever its size" to central government and names no other public
level. A region is an Annex 1 type, as BEK 620, § 2 confirms ("Regionerne, jf.
NIS 2-lovens bilag 1, pkt. 10"), so § 4, stk. 1 makes it essential from 250
persons and § 5, stk. 1 important from 50 persons. The directive puts a regional
entity in regardless of size after a risk-based assessment (Article 2(2)(f)(ii));
the act does not repeat that, and the bill does not discuss the regional level.
A region of 250 persons or more is therefore essential, where the directive's
general reading gave important.

**What the scope check says since 2026-11-05.** It gave a Danish region the class
important, and a municipality the directive's sentence.

| Level stated | Verdict | Basis |
|---|---|---|
| Central, or not stated | essential, with no size test | § 4, stk. 3, nr. 2 |
| Regional | by the size tests | Bilag 1, pkt. 10; §§ 4 and 5 |
| Local, no other sector declared | out of scope, as outside the act | Bilag 1, pkt. 10; § 1, stk. 7 |
| Local, an Annex sector declared | that sector's class by size, the whole municipality being in | Bill L 141 |

The document context and the country page say the same since that day.

**Open.**

- The inputs carry one set of figures. For a municipality that is right here,
  since the bill takes the municipality as a whole.
- Sundhedsdatastyrelsen's and SAMSIK's guidance on regions is not read.
- § 4, stk. 2 (a municipality or a region as a commercial e-communications
  provider) is not modelled by the level of government.
