# Slovakia — legal sources (verified)

## Zákon č. 366/2024 Z. z., amending zákon č. 69/2018 Z. z. o kybernetickej bezpečnosti (read 2026-10-28)

<!-- meta: theme=statute,registration; type=reference; date=2026-10-28; surfaces=data,prompt,marketing; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-slovakia-fiche.test.tsx -->

- **Official citation:** Zákon č. 366/2024 Z. z. z 28. novembra 2024, which
  amends the Cybersecurity Act No. 69/2018 Coll. (it does not replace it).
  69/2018 was amended twice since: 318/2025 Z. z. (from 2026-01-01, a Cyber
  Resilience Act market-surveillance task) and 67/2026 Z. z. (from 2026-04-30,
  narrows § 17(1)(g)).
- **Official URLs:** promulgated PDF ("Obsah dokumentu je právne záväzný",
  signed by Ministerstvo spravodlivosti SR, signature valid)
  https://static.slov-lex.sk/pdf/SK/ZZ/2024/366/ZZ_2024_366.pdf ; consolidated
  69/2018 as from 2026-04-30
  https://static.slov-lex.sk/pdf/SK/ZZ/2018/69/ZZ_2018_69_20260430.pdf
- **Retrieved + read:** 2026-10-28 (Čl. I in full except §§ 29b-29n and
  Annexes 1-2).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Transposes NIS2 | Príloha č. 3 | "ZOZNAM PREBERANÝCH PRÁVNE ZÁVÄZNÝCH AKTOV EURÓPSKEJ ÚNIE Smernica Európskeho parlamentu a Rady (EÚ) 2022/2555" | ✅ |
| Promulgated 2024-12-19 | header | "Vyhlásené: 19. 12. 2024" | ✅ |
| In force 2025-01-01 | Čl. VII | "Tento zákon nadobúda účinnosť 1. januára 2025." | ✅ |
| Authority and contact point | 69/2018 § 4 a) ; § 5(1)(e) | "Národný bezpečnostný úrad (ďalej len „úrad“)" ; "je národným kontaktným miestom pre kybernetickú bezpečnosť" | ✅ |
| Notification within 60 days | § 17(2) | "je povinný do 60 dní odo dňa, kedy činnosť začne vykonávať, oznámiť to úradu" | ✅ |
| Duties start 30 days after entry in the register | § 17(5) | "najskôr však tridsiaty deň nasledujúci po dni tohto zápisu" | ✅ |
| Measures within 12 months of entry | § 19(1) | "do 12 mesiacov odo dňa zápisu do registra prevádzkovateľov základnej služby" | ✅ |
| Transition for operators registered before 2025 | § 34b(5) | "môže do 31. decembra 2026 prijímať a realizovať bezpečnostné opatrenia … podľa predpisov účinných do 31. decembra 2024" | ✅ (clock: re-verify after 2026-12-31) |
| Infringement case closed | Commission infringement register, INFR(2024)0300 | "8/10/2025" "Closing of the case" | ✅ (closed without a reasoned opinion) |

Not in the statute: a notification date for entities already active on
2025-01-01 (NBÚ's notice of 2025-02-20 gives none either). Note for the scoping
engine: § 2(3)(d) switches the duties off where a DORA-type sector regime applies.

## Incident reporting: from "zistenie", through NBÚ's single information system (read 2026-10-30)

<!-- meta: theme=incident; type=reference; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/sk-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Source:** the consolidated zákon č. 69/2018 Z. z. as in force from
  2026-04-30, §§ 5, 6 and 24, read in the signed Slov-Lex PDF on 2026-10-30
  (https://static.slov-lex.sk/pdf/SK/ZZ/2018/69/ZZ_2018_69_20260430.pdf),
  against the Slovak text of Directive (EU) 2022/2555, Art. 23(4), on
  EUR-Lex the same day.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Reports go through the single cybersecurity information system | § 24(3) | "Hlásenie závažného kybernetického bezpečnostného incidentu sa vykonáva prostredníctvom jednotného informačného systému kybernetickej bezpečnosti" | ✅ |
| NBÚ manages and operates it | § 5(1)(j) | "spravuje a prevádzkuje jednotný informačný systém kybernetickej bezpečnosti" | ✅ |
| NBÚ's centre is the national CSIRT | § 6(1) | "Úrad zriaďuje Národné centrum kybernetickej bezpečnosti ako svoju organizačnú zložku," ; "ktorá má postavenie národnej jednotky CSIRT s pôsobnosťou pre Slovenskú republiku" | ✅ |
| … except the sectors whose central body does the CSIRT's tasks | § 6(1) | "okrem tých sektorov a podsektorov, pre ktoré plní úlohy jednotky CSIRT ústredný orgán" | ✅ |
| Early warning within 24 hours of "zistenie" | § 24(3)(a) | "bez zbytočného odkladu, avšak najneskôr do 24 hodín od jeho zistenia sa hlási včasné varovanie" | ✅ |
| Notification within 72 hours of "zistenie" | § 24(3)(b) | "bez zbytočného odkladu, avšak najneskôr do 72 hodín od jeho zistenia sa hlási oznámenie o závažnom kybernetickom bezpečnostnom incidente" | ✅ |
| Trust services: 24 hours | § 24(3)(b) | "ktorý je poskytovateľom dôveryhodných služieb bez zbytočného odkladu, avšak najneskôr do 24 hodín od jeho zistenia" | ✅ |
| Updates at the CSIRT's request, within the period it sets | § 24(3)(c) | "na žiadosť toho, kto prevádzkuje jednotku CSIRT, sa v určenej lehote hlásia aktualizované alebo iné vyžiadané informácie o priebehu závažného kybernetického bezpečnostného incidentu" | ✅ |
| Final report a month after the notification | § 24(3)(d) | "najneskôr jeden mesiac po nahlásení oznámenia podľa písmena b) sa hlási záverečná správa" | ✅ |
| Cross-border and still ongoing: an updated final report 30 days after restoration | § 24(3)(e) | "hlási sa do 30 dní odo dňa obnovy riadnej prevádzky siete a informačného systému aktualizovaná záverečná správa" | ✅ |
| Still ongoing at the final report: updates, and an updated final report 30 days after resolution | § 24(3)(e) | "hlásia sa ďalšie aktualizované alebo iné vyžiadané informácie a aktualizovaná záverečná správa do 30 dní odo dňa, keď sa závažný kybernetický bezpečnostný incident" | ✅ (the sentence ends "vyriešil" after a page break) |
| Voluntary reporting | § 24(6) | "môžu hlásiť kybernetický bezpečnostný incident, kybernetickú hrozbu alebo udalosť odvrátenú v poslednej chvíli aj dobrovoľne" | ✅ |
| DORA entities report through DORA's authority | § 24(8) | "plní povinnosť podľa odseku 1 nahlasovaním závažných incidentov súvisiacich s IKT prostredníctvom príslušného orgánu podľa nariadenia (EÚ) 2022/2554" | ✅ |
| The directive's Slovak text uses the same word for becoming aware | Directive (SK), Art. 23(4)(a) and (b) | "do 24 hodín od zistenia významného incidentu" ; "do 72 hodín po tom, ako sa dozvedeli o významnom incidente" | ✅ |

The anchor is awareness. "Zistenie" reads like detection through an English
gloss, but the directive's own Slovak text uses it for becoming aware in
point (a), and "dozvedeli" (learned) in point (b): the act takes the
directive's word for both clocks, as the Czech act does with "zjištění". It
is not a departure. Slovakia ran on DEFAULT until 2026-10-30, so
`INCIDENT_REPORTING_SK`
(packages/regulatory-data/src/country-configs/incident-reporting.ts) now
names NBÚ's system and its centre instead of the ENISA directory. The same
day, when Slovak became a product locale, every label of the configuration
gained a Slovak version in the act's own words (včasné varovanie, oznámenie
o závažnom kybernetickom bezpečnostnom incidente, záverečná správa, závažný
kybernetický bezpečnostný incident, "od jeho zistenia", Národný bezpečnostný
úrad, jednotný informačný systém kybernetickej bezpečnosti), quoted in the
Language section below and held by
`packages/regulatory-data/test/config-official-languages.test.ts` (SK: sk)
and by the Slovak case of `sk-incident-reporting.test.ts`.

Point (e) departs from the directive in two ways. Its deadline is 30 days,
not one month after handling. And its first clause, for a cross-border
incident, runs from the restoration of normal operation. Both are stated in
the config's labels, not computed: the product records neither the
restoration nor the resolution as a clock. No portal address was verified.

## The consolidated act read further on 2026-10-30: scope, registration, measures, audit, governance, supervision, sanctions

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Source:** the same consolidated zákon č. 69/2018 Z. z., read again in the
  Slov-Lex PDF on 2026-10-30
  (https://static.slov-lex.sk/pdf/SK/ZZ/2018/69/ZZ_2018_69_20260430.pdf, 79
  pages, SHA-256 `3d4e83a73bcdabe8276374c52089bf148f389c759856ba6df29837798f86f058`;
  `pdfsig`: signed by "Ministerstvo spravodlivosti SR", "Signature is Valid.").
  Its header: "Časová verzia predpisu účinná od: 30. 4.2026" and "Obsah
  dokumentu je právne záväzný." Read this time: §§ 2, 3, 17 to 22, 29, 29a,
  29j, 29n, 30 to 32, 34a and 34b, extracted with `pdftotext -layout`.
- Every quotation below was checked mechanically against that text
  (whitespace normalised) and stops short of the footnote markers ("23a)",
  "23c)") the text prints after some words.

## Scope: the register of operators of essential services, and the critical essential service

<!-- meta: theme=scoping; type=reference; date=2026-10-30; surfaces=data,prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/national-size-tests.test.ts -->

The act keeps the NIS1 vocabulary. The obliged party is the "prevádzkovateľ
základnej služby" (operator of an essential service), and it is one only once
NBÚ has entered it in its register. The essential entity's part is played by
the operator of a critical essential service (§ 18, "Kritická základná služba"); the
act has no word for the important entity.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **The operator is whoever is in the register** | § 3(2) | "Prevádzkovateľom základnej služby je ten, kto je zapísaný v registri prevádzkovateľov základnej služby." | | ✅ |
| Central government: always | § 17(1)(a) | "a) ústredný orgán štátnej správy a iný štátny orgán s celoštátnou pôsobnosťou," | | ✅ |
| At any size: e-communications, trust services, TLD, DNS, and the special-significance cases | § 17(1)(c) | "c) osoba bez ohľadu na splnenie podmienok veľkosti pre stredný podnik, ktorá vykonáva činnosť v niektorom zo sektorov podľa prílohy č. 1 alebo prílohy č. 2 a ktorá" | Points 1 to 9: public e-communications, trust services, TLD, DNS, sole provider of a key service, significant impact on public order, security or health, systemic risk, special national or regional significance, economic mobilisation. | ✅ |
| Regional state bodies and higher territorial units, on a significance test | § 17(1)(d) | "d) štátny orgán vykonávajúci pôsobnosť v najmenej dvoch okresoch a vyšší územný celok, ak by narušenie ich činnosti mohlo mať významný vplyv na verejný poriadok, bezpečnosť alebo verejné zdravie;" | | ✅ |
| Medium-sized and larger entities of the two annexes | § 17(1)(e) | "e) osoba, ktorá spĺňa najmenej podmienky veľkosti pre stredný podnik a vykonáva činnosť v niektorom zo sektorov podľa prílohy č. 1 alebo prílohy č. 2," | The size is the Recommendation's (footnote 23c: "Odporúčanie Komisie 2003/361/ES zo 6. mája 2003 o vymedzení pojmu mikro, malých a stredných podnikov"). | ✅ |
| **Cities, on a significance test** | § 17(1)(f) | "f) mesto, ak by narušenie výkonu jeho pôsobnosti mohlo mať významný vplyv na verejný poriadok, bezpečnosť alebo verejné zdravie," | A town ("mesto"); the act names no other municipality. | ✅ |
| **Public administration IT administrators in categories II and III** | § 17(1)(g) | "na ktorého sa vo vzťahu k informačným technológiám verejnej správy vzťahujú minimálne bezpečnostné opatrenia Kategórie II alebo Kategórie III podľa osobitného predpisu," | The administrator of public administration IT under zákon č. 95/2019 Z. z. | ✅ |
| Registrars at any size | § 17(1)(h) | "h) osoba, ktorá poskytuje službu registrácie názvu domény bez ohľadu na splnenie podmienok veľkosti pre stredný podnik alebo" | | ✅ |
| **A third party of a critical essential service can be registered** | § 17(1)(i) | "i) tretia strana, ktorá má významný vplyv pri zabezpečovaní kybernetickej bezpečnosti, a má uzatvorenú zmluvu s prevádzkovateľom základnej služby, ktorý prevádzkuje kritickú základnú službu." | A supplier with significant influence on cybersecurity under contract with an operator of a critical essential service. | ✅ |
| The critical essential services | § 18(1) | "a) výkon pôsobnosti ústredného" … "b) činnosť v sektore podľa prílohy č. 1, okrem sektoru verejná správa, ak ju vykonáva osoba, ktorá prekračuje limity veľkosti určené pre stredný podnik," … "c) kvalifikovaná dôveryhodná služba," … "d) správa TLD," … "e) služba DNS," … "f) poskytovanie verejnej elektronickej komunikačnej siete alebo verejnej elektronickej komunikačnej služby osobou, ktorá dosahuje najmenej podmienky veľkosti pre stredný podnik," | Central government; a large Annex 1 activity; qualified trust services; TLD; DNS; public e-communications from medium size; the special-significance cases of § 17(1)(c) points 5 to 9; a critical entity's essential service; designated public administration IT services (points g to i). | ✅ |
| One critical service makes the operator a critical operator, which it must notify | § 18(2) | "Ak prevádzkovateľ základnej služby vykonáva aspoň jednu z kritických základných služieb, je prevádzkovateľom kritickej základnej služby a túto skutočnosť je povinný oznámiť úradu." | | ✅ |

Checked for the scoping engine on 2026-10-30: "podmienky veľkosti pre stredný
podnik" are the Recommendation's (footnote 23c), met for § 17(1)(e) and
exceeded for § 18(1)(b), so `classifyEnterpriseSize` in
`packages/regulatory-data/src/scoping.ts` applies as written and Slovakia has
no national size test
(`packages/regulatory-data/test/national-size-tests.test.ts`).

## Registration: notification within 60 days, NBÚ's entry, changes

<!-- meta: theme=registration; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The statute section quotes § 17(2) (60 days) and § 17(5) (duties from the 30th
day after the entry); these rows add the steps between.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| What the notification contains | § 17(2)(a) | "a) názov, sídlo a kontaktné údaje vrátane elektronických adries, verejných IP adries a telefónnych čísel," | Also the Member States served and the representative (points b and c). | ✅ |
| NBÚ enters the operator, after consulting the central body | § 17(3) | "Úrad zapíše do registra prevádzkovateľov základnej služby osobu podľa odseku 1" | On its own initiative, on a reasoned request, or on the central body's proposal. | ✅ |
| Notice through the single information system and the e-mailbox, no decision | § 17(4) | "Zápis do registra prevádzkovateľov základnej služby oznámi úrad bezodkladne prevádzkovateľovi základnej služby prostredníctvom jednotného informačného systému kybernetickej bezpečnosti a doručí do elektronickej schránky podľa osobitného predpisu;" … "osobitné rozhodnutie sa nevydáva." | | ✅ |
| Changes: 14 days | § 17(6) | "oznámiť najneskôr do 14 dní prostredníctvom jednotného informačného systému kybernetickej bezpečnosti úradu." | Of the registered facts that are not reference data. | ✅ |
| … and 30 days in § 19(7) | § 19(7) | "Prevádzkovateľ základnej služby je povinný hlásiť zmeny v zapísaných údajoch, okrem referenčných údajov do 30 dní odo dňa ich vzniku prostredníctvom jednotného informačného systému kybernetickej bezpečnosti" | The act gives two deadlines for what reads as the same duty; 14 days is the safe one. A critical operator also reports the conclusion and the end of a contract with a significant third party. | ✅ (inconsistency recorded) |
| The digital types: changes within three months, on NBÚ's request | § 21(3) | "bezodkladne najneskôr do troch mesiacov odo dňa zmeny" | | ✅ |

## Security measures, third-party contracts and the cybersecurity audit

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The digital types apply the Commission's implementing act | § 19(1), footnote 24a | "Osoba poskytujúca niektorú zo služieb alebo vykonávajúcu niektorú z činností podľa § 2 ods. 2 plní bezpečnostné opatrenia podľa osobitného predpisu." … "Vykonávacie nariadenie Komisie (EÚ) 2024/2690 zo 17. októbra 2024" | Every other operator: the general measures of § 20 within 12 months of the entry (statute section), and the sectoral measures where a decree sets them. | ✅ |
| **A written contract with every third party that operates its systems** | § 19(2) | "Prevádzkovateľ základnej služby je povinný pri výkone činnosti, ktorá priamo súvisí s dostupnosťou, dôvernosťou a integritou prevádzky sietí a informačných systémov prevádzkovateľa základnej služby prostredníctvom tretej strany, uzatvoriť zmluvu o zabezpečení plnenia bezpečnostných opatrení a notifikačných povinností podľa tohto zákona počas celej doby výkonu tejto činnosti;" … "pri uzatvorení zmluvy sa vykonáva analýza rizík." | The third party applies the measures and submits to the operator's checks; NBÚ may check the third party of a critical operator. Not where the third party is itself an operator, or the risk is low (§ 19(3)). | ✅ |
| Eighteen areas of measures | § 20(2) | "(2) Bezpečnostné opatrenia sa prijímajú aspoň pre" … "q) dodávateľský reťazec," … "r) obstarávanie a využívanie certifikovaných produktov IKT, služieb IKT a procesov IKT." | Points a to r: governance, vulnerabilities, assets and risks, incidents, continuity and backup, acquisition and development, effectiveness and compliance, cryptography, human resources, identities and access, operations, malware, system and network security, logging, physical security and endpoints, records and privacy, the supply chain, certified products. | ✅ |
| On approved, current security documentation | § 20(3) | "na základe schválenej bezpečnostnej dokumentácie, ktorá musí byť aktuálna a musí zodpovedať reálnemu stavu." | The content is set by NBÚ's decree (§ 32(1)(b)). | ✅ |
| **An independent cybersecurity manager** | § 20(4)(a) | "a) určenie manažéra kybernetickej bezpečnosti, ktorý je pri návrhu, prijímaní a presadzovaní bezpečnostných opatrení nezávislý od štruktúry riadenia prevádzky a vývoja služieb informačných technológií a ktorý spĺňa znalostné štandardy pre výkon roly manažéra kybernetickej bezpečnosti," | Independent of IT operations and development, meeting the knowledge standards. The other minimum measures (b to i): detection, an incident register, handling procedures, a contact person for reports, connection to the reporting and early-warning system, roles and training, named responsible persons, awareness. | ✅ |
| **A political-risk analysis of third parties** | § 20(5) | "Súčasťou analýzy rizík je aj analýza politického rizika tretej strany," … "Politické riziká schvaľuje vláda Slovenskej republiky na základe stanoviska úradu." | Influence of a State outside the EU and NATO, ownership and control, foreign legislation; NBÚ publishes the political risks in the single information system. | ✅ |
| What NBÚ's decree sets | § 32(1)(b) | "b) obsah bezpečnostných opatrení, obsah a štruktúru bezpečnostnej dokumentácie a rozsah všeobecných bezpečnostných opatrení (§ 20)," | The decree itself was not read. | ✅ |
| **A cybersecurity audit within two years of the entry** | § 29(1) | "Prevádzkovateľ základnej služby je povinný preveriť účinnosť prijatých bezpečnostných opatrení a plnenie požiadaviek ustanovených týmto zákonom vykonaním auditu kybernetickej bezpečnosti do dvoch rokov odo dňa zaradenia prevádzkovateľa základnej služby do registra prevádzkovateľov základnej služby." | By a certified cybersecurity auditor (§ 29(3)), at the operator's cost (§ 29(7)), and again after every significant change and at set intervals (§ 29(2)). | ✅ |
| A non-critical operator may self-assess, then an audit within five years | § 29(8) | "Samohodnotenie vykonáva manažér kybernetickej bezpečnosti." … "Takýto prevádzkovateľ základnej služby je povinný podrobiť sa auditu kybernetickej bezpečnosti do piatich rokov odo dňa zaradenia do registra prevádzkovateľov základnej služby" | Through the single information system, at the periodicity of NBÚ's decree (§ 32(1)(d)). | ✅ |
| The audit report goes to NBÚ within 30 days | § 29(5) | "Prevádzkovateľ základnej služby je povinný predložiť záverečnú správu o výsledkoch auditu úradu spolu s opatreniami na nápravu a s lehotami na ich odstránenie do 30 dní od ukončenia auditu." | | ✅ |
| The audit decree | § 29(3), footnote 31 | "Vyhláška Národného bezpečnostného úradu č. 436/2019 Z. z. o audite kybernetickej bezpečnosti a znalostnom štandarde audítora." | Not read. | ✅ |

## Governance and training: the statutory body and the responsible persons

<!-- meta: theme=governance; type=reference; date=2026-10-30; surfaces=doc-gen,prompt; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The act words no training duty for the members of the statutory body
("štatutárny orgán"), and no approval or oversight duty for it as such: the
measures name the persons responsible for approving them, and training is one
of the measures. A search of the whole text for the stems štatutárn-, vzdeláva- and
školen- found only the rows below.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The statutory body is kept informed | § 19(6)(h) | "h) vytvoriť a zaviesť účinný mechanizmus včasného informovania štatutárneho orgánu a zodpovedných vedúcich zamestnancov o kybernetických hrozbách," | Of threats, vulnerabilities, incidents, near misses, the risk analysis and the treatment status. | ✅ |
| Training for every role, and named persons who approve the measures and answer for training | § 20(4)(g), (h) | "g) určenie a pridelenie úloh, rolí a zodpovednosti podľa podmienok prevádzkovateľa základnej služby a zabezpečenie primeraného vzdelávania a preškoľovania pre všetky zavedené roly, h) určenie konkrétnej osoby alebo konkrétnych osôb zodpovedných za schvaľovanie bezpečnostných opatrení, dohľad, kontrolu a audit, zabezpečenie primeranosti zdrojov na riadenie kybernetickej bezpečnosti a za vzdelávanie," | Adequate training and retraining for all the roles established; the persons responsible for approving the measures, oversight, control and audit, adequate resources and training. The two points are consecutive (a page break falls between them). | ✅ |
| Awareness | § 20(4)(i) | "i) vzdelávanie a budovanie bezpečnostného povedomia v oblasti kybernetickej bezpečnosti." | The details are left to NBÚ's decree (§ 32(1)(h)). | ✅ |
| A ban on the statutory body, critical operators only, never public authorities | § 29j(4) | "zakázať štatutárnemu orgánu prevádzkovateľa základnej služby alebo členovi štatutárneho orgánu prevádzkovateľa základnej služby," … "Ustanovenie prvej vety sa nepoužije, ak ide o prevádzkovateľa základnej služby, ktorý je orgánom verejnej moci, na ktorý sa vzťahuje tento zákon." | After an unheeded audit or remedy order, until the duty is met. | ✅ |

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Recorded as facts. Marketing never cites fines.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| NBÚ supervises | § 29a(1) | "e) prejednávaním správnych deliktov a ukladaním poriadkových pokút a pokút." | By complaints, inspection, remedial measures, settlement agreements and fines (points a to e). | ✅ |
| A daily penalty with a remedy order | § 29j(2) | "povinnosť zaplatiť penále v sume 0,5 % z najvyššej možnej sumy pokuty, ktorú je za porušenie takejto povinnosti možné uložiť, a to za každý deň omeškania so splnením povinnosti." | | ✅ |
| Notification and documentation breaches | § 31(1) | "(1) Úrad môže uložiť pokutu od 300 eur do 500 000 eur prevádzkovateľovi základnej služby," | | ✅ |
| Measures and reporting breaches: up to EUR 7 million or 1.4 % | § 31(2) | "(2) Úrad môže uložiť pokutu od 300 eur do 7 000 000 eur alebo do výšky 1,4 % celkového celosvetového ročného obratu za predchádzajúce účtovné obdobie, podľa toho, ktorá suma je vyššia," | | ✅ |
| … up to EUR 10 million or 2 % for a critical operator | § 31(3) | "(3) Úrad môže uložiť pokutu od 500 eur do 10 000 000 eur alebo do výšky 2 % celkového celosvetového ročného obratu za predchádzajúce účtovné obdobie, podľa toho, ktorá suma je vyššia," | | ✅ |
| Doubled for a repeat within a year | § 31(13) | "úrad môže uložiť pokutu až do dvojnásobku výšky súm uvedených alebo vypočítaných podľa odsekov 1 až 11." | | ✅ |
| Whose turnover | § 31(15) | "Celkovým celosvetovým ročným obratom podľa odsekov 2 a 3 sa na účely tohto zákona rozumie súčet všetkých tržieb, výnosov alebo príjmov z predaja tovaru alebo služieb bez nepriamych daní," | The operator's own sales; no undertaking is named. | ✅ |
| Natural persons | § 30(2) | "(2) Za priestupok môže úrad uložiť pokutu od 100 eur do 5 000 eur." | Among the offences: not following the operator's technical, organisational or personnel measures (§ 30(1)(d)). | ✅ |

## Departures from the directive, read from the texts above

<!-- meta: theme=scoping,registration,governance,sanctions,framework; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

Each line is a reading of quotes recorded in this file.

- **The register makes the operator** (§ 3(2), § 17(3) to (5)): an entity
  notifies within 60 days, NBÚ enters it, and its duties start on the date of
  the notice, at the earliest 30 days after the entry. The two classes are the
  operator of a critical essential service and the other operators.
- **Scope reaches suppliers and part of local government**: a third party of a
  critical operator can be registered (§ 17(1)(i)); cities and regional bodies
  on a significance test (§ 17(1)(d), (f)); public administration IT
  administrators in categories II and III (§ 17(1)(g)).
- **Measures**: eighteen areas (§ 20(2)), an independent cybersecurity
  manager (§ 20(4)(a)), a political-risk analysis of third parties (§ 20(5)),
  a written contract with every third party operating the systems (§ 19(2)).
- **A certified audit within two years of the entry**, the report to NBÚ
  within 30 days (§ 29(1), (5)); a non-critical operator may self-assess and
  is audited within five years (§ 29(8)).
- **Management**: no training duty for the statutory body in the act's words;
  named persons approve the measures and answer for training (§ 20(4)(g), (h)).
- **Fines** have floors (EUR 300 or 500), double for a repeat within a year,
  run on the operator's own turnover, with a 0.5 % daily penalty (§ 31,
  § 29j(2)).
- **Changes to registered data**: 14 days in § 17(6), 30 days in § 19(7).

## Open items after the 2026-10-30 reading

<!-- meta: theme=framework,governance; type=lead; date=2026-10-30; surfaces=docs; guard=none -->

- NBÚ's decrees under § 32(1): the content of the measures (b), the audit and
  self-assessment periodicity (d, footnote 31: vyhláška č. 436/2019 Z. z.), the
  details of training (h) and of reports (i). Footnote 35 (§ 34a) names
  "Vyhláška Národného bezpečnostného úradu č. 362/2018 Z. z." for the
  categories of networks and information systems; whether it is still the
  decree of § 32(1)(b) was not checked.
- The sectoral measures decrees of § 32(2) and Annexes 1 and 2 were not read.
- How NBÚ applies the two deadlines for changes (§ 17(6), § 19(7)).

## Language: the binding texts are Slovak

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=i18n,data,doc-gen; guard=packages/regulatory-data/test/config-official-languages.test.ts,packages/regulatory-data/test/sk-incident-reporting.test.ts -->

- **Source:** Ústava Slovenskej republiky (zákon č. 460/1992 Zb.), the
  consolidated text in the signed Slov-Lex PDF
  (https://static.slov-lex.sk/pdf/SK/ZZ/1992/460/ZZ_1992_460_20251101.pdf),
  read on 2026-10-30. Its header states "Časová verzia predpisu účinná od:
  1.11.2025" and "Obsah dokumentu je právne záväzný."; `pdfsig` reports a
  signature by "Ministerstvo spravodlivosti SR", "Signature is Valid.", and
  that not the whole document is signed; SHA-256
  `b5d380761e9d4dc105e32e63a115694bb286ef6db6dd2b476fdac76b0b2a54b0`. The
  HTML version of the same text on Slov-Lex says it is for information only.
- **And:** § 24 of the consolidated zákon č. 69/2018 Z. z., the PDF of the
  incident section above (same SHA-256, `3d4e83a7…`), read again on
  2026-10-30 for the wording the Slovak labels of `INCIDENT_REPORTING_SK`
  follow. Quotes stop short of the footnote markers ("9)").

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Slovak is the state language | Constitution, Art. 6(1) | "Na území Slovenskej republiky je štátnym jazykom slovenský jazyk." | The state language on the territory of the Slovak Republic is Slovak. | verified |
| Every serious incident is reported | § 24(1) | "Prevádzkovateľ základnej služby je povinný hlásiť každý závažný kybernetický bezpečnostný incident." | | verified |
| What a serious incident is | § 24(2) | "Za závažný kybernetický bezpečnostný incident sa považuje rozsiahly kybernetický bezpečnostný incident a kybernetický bezpečnostný incident, ktorý" … "spôsobil alebo môže spôsobiť závažné narušenie fungovania prevádzkovateľa základnej služby, alebo škodu, inú ujmu na majetku alebo ušlý zisk vo veľkom rozsahu," … "zasiahol alebo môže zasiahnuť iné osoby tým, že im spôsobí škodu, inú ujmu alebo ušlý zisk v značnom rozsahu." | A large-scale incident, and one that has caused or may cause a serious disruption of the operator's functioning or large-scale damage or lost profit, or has affected or may affect other persons with considerable damage. | verified |
| What the early warning says | § 24(3)(a) | "v ktorom sa uvádza najmä, či závažný kybernetický bezpečnostný incident mohol byť spôsobený protiprávnym konaním, alebo či môže mať cezhraničný vplyv" | | verified |
| What the notification says | § 24(3)(b) | "v ktorom sa aktualizujú a dopĺňajú informácie z včasného varovania, najmä sa uvádza prvotné posúdenie kybernetického bezpečnostného incidentu, jeho závažnosti a následkov" | | verified |
| What the final report contains | § 24(3)(d) | "ktorá obsahuje najmä podrobný opis závažného kybernetického bezpečnostného incidentu vrátane jeho závažnosti a následkov, druh kybernetickej hrozby alebo hlavnú príčinu, ktorá pravdepodobne kybernetický bezpečnostný incident spôsobila, zavedené a prebiehajúce opatrenia a cezhraničný vplyv, ak existuje" | | verified |
| The members of the management bodies follow training; "pravidelne" is on the employees' training | Directive (EU) 2022/2555, Art. 20(2), Slovak version (`docs/research/eur-lex/nis2-sk.txt`) | "aby členovia riadiacich orgánov kľúčových a dôležitých subjektov boli povinní absolvovať odbornú prípravu, a kľúčové a dôležité subjekty podporia v tom, aby svojim zamestnancom pravidelne poskytovali podobnú odbornú prípravu" | As in the English text, unlike the Polish and Estonian ones. | verified |

What the product does with it (2026-10-30, the day Slovak became a product
locale): `inferLocale("SK")` answers `sk`, so a Slovak organisation that never
chose a working language reads Slovak from the deploy on, e-mails and
documents included, and English stays selectable in the organisation
settings. The Slovak UI, e-mails and PDF labels use the directive's Slovak
words for every generic string (`docs/research/eur-lex/nis2-sk.txt`: kľúčový /
dôležitý subjekt, jednotka CSIRT, príslušný orgán, riadiace orgány, významný
incident, včasné varovanie, oznámenie o incidente, záverečná správa, and
"zistenie" for becoming aware), as every locale does. The act's words
(prevádzkovateľ základnej služby, závažný kybernetický bezpečnostný incident,
oznámenie o závažnom kybernetickom bezpečnostnom incidente, štatutárny orgán,
Národný bezpečnostný úrad, jednotný informačný systém kybernetickej
bezpečnosti) appear where a surface is about Slovakia: the labels of
`INCIDENT_REPORTING_SK` (incident section), the getting-started page's
incident line and the incident reminders, since Slovak is read in one country
only. The early warning and the final report carry the same names in the act
and in the directive; only the 72-hour act and the incident itself differ.
`tools/sk-i18n/GLOSSARY.md` sets the two vocabularies apart.

## The national reference, the mandatory reports of § 24(5) and the reporting system's address (read 2026-11-05)

<!-- meta: theme=statute,incident,governance,supply-chain; type=reference; date=2026-11-05; surfaces=data,ui,prompt,marketing; guard=packages/regulatory-data/test/country-configs-transposition-references.test.ts,packages/regulatory-data/test/sk-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-se-dk-fi-ee-sk.test.tsx,apps/web/test/sk-national-reference-surfaces.test.tsx -->

- **Source:** the consolidated zákon č. 69/2018 Z. z. as in force from
  2026-04-30, the same signed Slov-Lex PDF
  (https://static.slov-lex.sk/pdf/SK/ZZ/2018/69/ZZ_2018_69_20260430.pdf),
  downloaded again on 2026-11-05: SHA-256
  `3d4e83a73bcdabe8276374c52089bf148f389c759856ba6df29837798f86f058`, the
  same file as on 2026-10-28; `pdfsig` reports a signature by "Ministerstvo
  spravodlivosti SR", "Signature is Valid."; the header reads "Časová verzia
  predpisu účinná od: 30. 4.2026". §§ 2 to 6, 17 to 20, 24, 29, 29a and 29j
  were read in full that day.
- **Why:** Slovakia gained its national reference
  (`TRANSPOSITION_REFERENCES_SK`), the text an organisation reads on its
  incidents page, its national-requirements panel and its generated
  documents. Writing each sentence from the act found one duty the record did
  not carry (§ 24(5)), three precisions (§ 18(1)(b), § 19(3), § 29j(4)) and
  the address of the reporting system.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **Threats, near misses and unremedied vulnerabilities are reported too, and it is a duty** | § 24(5) | "(5) Prevádzkovateľ základnej služby prostredníctvom jednotného informačného systému kybernetickej bezpečnosti hlási aj a) významnú kybernetickú hrozbu, o ktorej sa dozvie, b) udalosť odvrátenú v poslednej chvíli, ktorá mohla spôsobiť závažný kybernetický bezpečnostný incident, c) zraniteľnosť ním prevádzkovaných verejne dostupných sietí a informačných systémov, ktorá podľa dostupných informácií a technických znalostí môže byť zneužitá na spôsobenie závažného kybernetického bezpečnostného incidentu a prevádzkovateľ základnej služby nemohol v primeranom čase prijať opatrenia na jej odstránenie alebo zníženie rizika." | "hlási aj": the operator also reports, through the same system, a significant cyber threat it learns of, a near miss that could have caused a serious incident, and a vulnerability of the publicly accessible networks and systems it operates that can be exploited to cause one and that it could not remove or mitigate in reasonable time. The record had only the voluntary reports of § 24(6). | ✅ |
| Those reports leave the incident duty untouched | § 24(7) | "Hlásením podľa odseku 5 nie je dotknutá povinnosť podľa odseku 1." | | ✅ |
| NBÚ may agree another manner and form of reporting by written contract | § 24(4) | "môže úrad namiesto postupu podľa § 8 ods. 6 uzatvoriť písomnú zmluvu o odlišnom spôsobe a forme hlásenia kybernetických bezpečnostných incidentov s prevádzkovateľom základnej služby, pri ktorom je to odôvodnené jeho postavením, alebo rozsahom alebo obsahom činnosti." | With an operator whose position, or the extent or content of whose activity, justifies it. | ✅ |
| The critical essential service of Annex 1 leaves out the public administration sector | § 18(1)(b) | "b) činnosť v sektore podľa prílohy č. 1, okrem sektoru verejná správa, ak ju vykonáva osoba, ktorá prekračuje limity veľkosti určené pre stredný podnik," | Central government is point (a) of the same paragraph. | ✅ |
| The third-party contract is written, and has two exceptions | § 19(2), second sentence ; § 19(3) | "v súlade s písomnou zmluvou a týmto zákonom" ; "Povinnosť uzatvoriť zmluvu podľa odseku 2 neplatí, ak je tretia strana prevádzkovateľom základnej služby, alebo ak je riziko vo vzťahu k činnosti, ktorá priamo súvisí s dostupnosťou, dôvernosťou a integritou prevádzky sietí a informačných systémov prevádzkovateľa základnej služby prostredníctvom tretej strany nízke." | The first sentence of § 19(2) says "zmluvu"; the second calls it written. No contract is due where the third party is itself an operator of an essential service, or where the risk is low. | ✅ |
| The digital services of § 2(2) follow the Commission's implementing regulation | § 19(1), last sentence, footnote 24a | "Osoba poskytujúca niektorú zo služieb alebo vykonávajúcu niektorú z činností podľa § 2 ods. 2 plní bezpečnostné opatrenia podľa osobitného predpisu." | Footnote 24a names "Vykonávacie nariadenie Komisie (EÚ) 2024/2690 zo 17. októbra 2024". | ✅ |
| The cybersecurity manager is independent in designing, adopting and enforcing the measures | § 20(4)(a) | "a) určenie manažéra kybernetickej bezpečnosti, ktorý je pri návrhu, prijímaní a presadzovaní bezpečnostných opatrení nezávislý od štruktúry riadenia prevádzky a vývoja služieb informačných technológií a ktorý spĺňa znalostné štandardy pre výkon roly manažéra kybernetickej bezpečnosti," | | ✅ |
| The risk analysis includes the political risk of third parties | § 20(5) | "Súčasťou analýzy rizík je aj analýza politického rizika tretej strany," | The paragraph lists what the political risk is assessed against, and has the government approve the political risks on NBÚ's opinion. | ✅ |
| The appointment or change of the statutory body is notified to NBÚ | § 19(6)(i) | "i) oznamovať úradu menovanie alebo zmenu štatutárneho orgánu, ak táto zmena nie je referenčným údajom." | | ✅ |
| The audit recurs, and the operator pays for it | § 29(2) ; § 29(7) | "a to po každej zmene majúcej významný vplyv na realizované bezpečnostné opatrenia a v určenom časovom intervale." ; "Náklady na audit kybernetickej bezpečnosti podľa odseku 1 znáša prevádzkovateľ základnej služby" | The audit NBÚ carries out or orders under § 29(6) is at NBÚ's cost. | ✅ |
| What NBÚ may order, and which unmet orders open the ban of § 29j(4) | § 29j(1) ; § 29j(4) | "a) vykonať audit kybernetickej bezpečnosti a vykonať odporúčania podľa výsledkov tohto auditu v určenej lehote, b) prijať opatrenia na nápravu," ; "nesplní povinnosť podľa odseku 1 písm. a) alebo písm. b), ani v dodatočnej lehote určenej vo výzve úradu," | NBÚ may also order (c) informing the persons concerned or the public and (d) a ban on providing the service. The ban of § 29j(4) can reach the statutory body, one of its members, the top-level manager responsible for the activity concerned or an authorised representative entrusted with it. | ✅ |
| The act never uses the directive's two class names | whole text | searched for "kľúčov" and "dôležit" next to "subjekt": no occurrence | The directive's Slovak text says "kľúčové subjekty" and "dôležité subjekty" (`docs/research/eur-lex/nis2-sk.txt`). | ✅ |

### The reporting system's address

- **Source:** SK-CERT, the Národné centrum kybernetickej bezpečnosti of NBÚ,
  page "Nahlásiť incident",
  https://www.sk-cert.sk/sk/rady-a-navody/nahlasit-incident/index.html, read
  on 2026-11-05. The page states "Dátum prvého zverejnenia 12. 8. 2025" and
  "Posledná aktualizácia 23. 9. 2026 17:07", and carries the banner "Toto je
  oficiálna webová stránka orgánu verejnej moci". The link it gives under the
  sentence of the first row is https://jiskb.nbu.gov.sk/.
- **And:** https://jiskb.nbu.gov.sk/ and https://www.nbu.gov.sk/, each
  rendered in headless Chromium on 2026-11-05 at 04:49 UTC (a plain HTTP
  request returns only a script loader).

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **The single cybersecurity information system is at jiskb.nbu.gov.sk** | SK-CERT, "Nahlásiť incident" | "Zvoľte túto možnosť, ak máte pridelený prístup do JISKB, napríklad ak ste prevádzkovateľom základnej služby podľa Zákona 69/2018 Z.z. o kybernetickej bezpečnosti." | Choose this option if you have been given access to the JISKB, for example as an operator of an essential service. | ✅ |
| Only a report through it meets the statutory duty | same page | "len nahlásenie incidentu prostredníctvom JISKB je možné považovať za splnenie zákonnej povinnosti hlásenia závažného kybernetického bezpečnostného incidentu povinným subjektom" | The page cites "§24 ods. 4" for it; in the consolidated text the channel rule is § 24(3), and § 24(4) is the contract on another manner of reporting. | ✅ (the page's citation is not the consolidated text's) |
| The address opens a sign-in page | https://jiskb.nbu.gov.sk/ | "Prihlásenie do jiskb" ; "Prihláste sa do svojho účtu" | The page title and its heading; the request ends on the system's own sign-in service. | ✅ |
| NBÚ's own site | https://www.nbu.gov.sk/ | "Toto je oficiálna webová stránka orgánu verejnej moci Slovenskej republiky." ; "Prevádzkovateľom služby je Národný bezpečnostný úrad." | | ✅ |

What the product does with it (2026-11-05):

- `TRANSPOSITION_REFERENCES_SK`: the law, NBÚ and six bullets in English,
  French, Italian, German, Portuguese and Slovak, with no fine amount. The
  Slovak sentences reuse the act's own words: runs of at least four
  consecutive words of the act make up between 42 % and 69 % of each of the
  six requirements, and 36 % of the description of NBÚ (measured on the
  shipped strings against the signed PDF's text layer).
- Its field `managementBodyTrainingDuty` is `false`, and
  `managementBodyTrainingLaw("SK")` answers `null`: the training page prints
  "Under your national transposition ({law}), this is the management-body
  cybersecurity-training duty." for a country with a reference, and the act
  words no such duty (governance section above). Without the field, the
  reference would have put that sentence on a Slovak organisation's page.
- The short name is "z. č. 69/2018 Z. z. (zákon o kybernetickej
  bezpečnosti)". No official abbreviation of the act was found on the pages
  of NBÚ and SK-CERT read that day. "z. č." does not decline, so the Slovak sentences built on
  "podľa {law}" read right; "Zákon č. 69/2018 Z. z." in that place would be a
  nominative after a preposition that takes the genitive.
- `INCIDENT_REPORTING_SK.primaryCsirt.portalUrl` is
  https://jiskb.nbu.gov.sk/, and the English country page links it, with the
  page of SK-CERT that gives it. Both said "none on record" until this
  reading. `sk.yaml` gives the address to the document prompts, where it told
  the model that none was on record and to name the system only.
- The authority's website is https://www.nbu.gov.sk/ in the reference, in
  `sk.yaml` and on the English page. The last two held the consolidated act
  on Slov-Lex in that place, for want of a page of NBÚ on record.
- The duty of § 24(5) is stated in the reference's incident requirement, in
  `sk.yaml`'s document context and on the English page. None of them carried
  it: the record had the voluntary reports of § 24(6) only.
- Slovakia counts as supported on the transposition tracker from this change
  on: the tracker derives that from the set of countries with a reference.

## Vyhláška č. 226/2025 Z. z.: what makes a disruption serious, and what each report contains (read 2026-11-05)

<!-- meta: theme=incident; type=reference; date=2026-11-05; surfaces=data,prompt,marketing,mcp; guard=packages/regulatory-data/test/sk-incident-thresholds.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-se-dk-fi-ee-sk.test.tsx -->

- **Source:** vyhláška Národného bezpečnostného úradu č. 226/2025 Z. z. z 26.
  augusta 2025, ktorou sa ustanovujú podrobnosti o hláseniach, the decree
  that § 32(1)(i) of the act calls for, in the signed Slov-Lex PDF
  (https://static.slov-lex.sk/pdf/SK/ZZ/2025/226/ZZ_2025_226.pdf): 7 pages,
  retrieved on 2026-11-05 at 05:20 UTC, SHA-256
  `ef37cfc949cc7e893b307c14ee0df29462273cf7b422fcd6d04aff1343d63b90`;
  `pdfsig` reports a signature by "Ministerstvo spravodlivosti SR",
  "Signature is Valid."; the header reads "Vyhlásené: 28. 8. 2025",
  "Vyhlásená verzia v Zbierke zákonov Slovenskej republiky" and "Obsah
  dokumentu je právne záväzný." The text layer is saved at
  `docs/research/eur-lex/sk-vyhlaska-226-2025.txt`.
- **Still the version in force:** the decree's page on Slov-Lex
  (https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2025/226/, rendered in
  headless Chromium on 2026-11-05) shows "Časová verzia predpisu účinná od
  01.09.2025" as the current version and one relation, "Predpis vykonáva"
  "69/2018 Z. z."; it lists no amending act.
- **And, for the size of the damage:** the act's § 3(1)(n) and footnote 9,
  in the signed PDF of the act (the file of the sections above, SHA-256
  `3d4e83a7…`), and § 125(1) of zákon č. 300/2005 Z. z., Trestný zákon, in
  the signed Slov-Lex PDF of the consolidated version in force from
  2026-08-18
  (https://static.slov-lex.sk/pdf/SK/ZZ/2005/300/ZZ_2005_300_20260818.pdf):
  206 pages, retrieved on 2026-11-05 at 05:28 UTC, SHA-256
  `0c24f2f8488e5081cd07f5a8a7f56e3519e2f5272667cbbd503e538d1885cd26`, same
  signer, "Signature is Valid."; the header reads "Časová verzia predpisu
  účinná od: 18. 8.2026". Its § 125 is saved at
  `docs/research/eur-lex/sk-trestny-zakon-300-2005-par-125.txt`.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The decree rests on § 32(1)(i) of the act | decree, preamble | "Národný bezpečnostný úrad podľa § 32 ods. 1 písm. i) zákona č. 69/2018 Z. z. o kybernetickej bezpečnosti a o zmene a doplnení niektorých zákonov v znení neskorších predpisov (ďalej len „zákon“) ustanovuje:" | | ✅ |
| It has been in effect since 1 September 2025 | decree, § 3 | "Táto vyhláška nadobúda účinnosť 1. septembra 2025." | | ✅ |
| Annex 1 says what a serious disruption of functioning is | decree, § 1(1) | "Vymedzenie identifikačných kritérií závažného narušenia fungovania prevádzkovateľa základnej služby je uvedené v prílohe č. 1." | The limb it defines is the first of § 24(2)(a). | ✅ |
| **Complete outage: more than 30 minutes for a critical operator, more than 60 for an operator** | Annex 1, point 1 | "1. Úplný výpadok alebo nedostupnosť činnosti 1.1 prevádzkovateľa kritickej základnej služby na viac ako 30 minút, alebo 1.2 prevádzkovateľa základnej služby na viac ako 60 minút," | Minutes. | ✅ |
| **Disruption or limitation: more than 60 minutes, more than 180** | Annex 1, point 2 | "2. Narušenie alebo obmedzenie činnosti 2.1 prevádzkovateľa kritickej základnej služby na viac ako 60 minút, alebo 2.2 prevádzkovateľa základnej služby na viac ako 180 minút," | | ✅ |
| Data protected under a special regulation | Annex 1, point 3 | "3. Ohrozenie dostupnosti, pravosti, integrity alebo dôvernosti údajov chránených podľa osobitného predpisu,1)" | Footnote 1 opens "Napríklad" and lists, among others, "§ 17 až 20 Obchodného zákonníka", "zákon č. 483/2001 Z. z. o bankách", "zákon č. 215/2004 Z. z. o ochrane utajovaných skutočností", "§ 24 a 25 zákona č. 576/2004 Z. z. o zdravotnej starostlivosti" and "§ 11 zákona č. 563/2009 Z. z. o správe daní (daňový poriadok)". What each of those provisions protects was not read. | ✅ |
| Data or related services, more than 25,000 persons | Annex 1, point 4 | "4. Ohrozenie dostupnosti, pravosti, integrity alebo dôvernosti uchovávaných, prenášaných alebo spracúvaných údajov alebo súvisiacich služieb poskytovaných alebo prístupných prostredníctvom sietí a informačných systémov, ktoré postihuje viac ako 25 000 osôb," | | ✅ |
| Economic loss above 0.1 % of GDP | Annex 1, point 5 | "5. Spôsobenie hospodárskej straty vyššej ako 0,1 % hrubého domáceho produktu podľa údajov z bezprostredne predchádzajúceho rozpočtového roka," | | ✅ |
| More than EUR 250,000 to at least one user | Annex 1, point 6 | "6. Spôsobenie hospodárskej straty alebo hmotnej škody najmenej jednému užívateľovi viac ako 250 000 eur," | | ✅ |
| Rescue work, more than 100 injured, one death | Annex 1, point 7 | "7. Vykonanie záchranných prác alebo výkon činností a opatrení súvisiacich s poskytovaním pomoci v tiesni alebo spôsobenie viac ako 100 zranených osôb vyžadujúcich lekárske ošetrenie alebo úmrtie aspoň jednej osoby, alebo" | The "alebo" that closes the point makes the eight alternatives. | ✅ |
| An event that could cause any of these, that reaches another critical operator, or that another regime calls an incident | Annex 1, point 8 | "8. Udalosť, 8.1 pri ktorej došlo k zjavne neoprávnenému prístupu do siete alebo informačného systému alebo došlo k znefunkčneniu siete alebo informačného systému a ktorá by mohla spôsobiť následky uvedené v prvom až siedmom bode, 8.2 ktorá môže významne narušiť alebo ktorá narúša fungovanie iného prevádzkovateľa kritickej základnej služby, alebo 8.3 ktorá je významným incidentom podľa osobitného predpisu2) alebo incidentom podľa osobitného predpisu.3)" | Footnote 2: "Čl. 3 vykonávacieho nariadenia Komisie (EÚ) 2024/2690 zo 17. októbra 2024". Footnote 3: "Zákon č. 367/2024 Z. z. o kritickej infraštruktúre a o zmene a doplnení niektorých zákonov." | ✅ |
| Annex 2 sets the content of the early warning and of the notification | decree, § 1(2) | "Náležitosti hlásenia závažného kybernetického bezpečnostného incidentu podľa § 24 ods. 3 písm. a) a b) zákona sú uvedené v prílohe č. 2." | | ✅ |
| What the early warning contains | Annex 2, point 1 | "1.1 identifikačné údaje a kontaktné údaje osoby, ktorá hlási závažný kybernetický bezpečnostný incident," ; "1.2.1 čas detekcie závažného kybernetického bezpečnostného incidentu," ; "1.2.2 opis závažného kybernetického bezpečnostného incidentu," ; "1.2.3 opis následkov závažného kybernetického bezpečnostného incidentu alebo predpokladaný rozsah dopadu závažného kybernetického bezpečnostného incidentu," ; "1.2.4 informácia, či závažný kybernetický bezpečnostný incident mohol byť spôsobený protiprávnym konaním," ; "1.2.5 informácia, či závažný kybernetický bezpečnostný incident môže mať cezhraničný vplyv," ; "1.2.6 vplyv na poskytovanie dôveryhodných služieb, ak ide o prevádzkovateľa základnej služby, ktorý je poskytovateľom dôveryhodnej služby." | Who reports, when the incident was detected, what it is, its consequences or expected reach, and the three items § 24(3)(a) already names. | ✅ |
| What the notification adds | Annex 2, point 2 | "2.1 aktualizované a doplnené informácie podľa bodu 1.2 vrátane prvotného posúdenia kybernetického bezpečnostného incidentu, jeho závažnosti a následkov, dopĺňajú sa podrobnejšie informácie o časovom priebehu, opis a dopady závažného kybernetického bezpečnostného incidentu," ; "2.2.1 stav riešenia závažného kybernetického bezpečnostného incidentu," ; "2.2.2 vykonané reaktívne opatrenia alebo opatrenia určené na zabránenie ďalšieho pokračovania, šírenia a opakovaného výskytu závažného kybernetického bezpečnostného incidentu." | | ✅ |
| Annex 3 sets the content of the reports of § 24(5) and (6) | decree, § 1(3) | "Náležitosti hlásenia významnej kybernetickej hrozby, udalosti odvrátenej v poslednej chvíli a zraniteľnosti podľa § 24 ods. 5 zákona a hlásenia kybernetického bezpečnostného incidentu, kybernetickej hrozby a udalosti odvrátenej v poslednej chvíli podľa § 24 ods. 6 zákona sú uvedené v prílohe č. 3." | | ✅ |
| What such a report contains | Annex 3 | "1. Identifikačné údaje a kontaktné údaje osoby, ktorá hlási skutočnosť." ; "2.1 druh hlásenej skutočnosti podľa § 24 ods. 5 alebo ods. 6 zákona," ; "2.2 opis hlásenej skutočnosti podľa § 24 ods. 5 alebo ods. 6 zákona," ; "2.3 opis možných dopadov hlásenej skutočnosti podľa § 24 ods. 5 alebo ods. 6 zákona na kybernetickú bezpečnosť," ; "2.4 čas zistenia hlásenej skutočnosti podľa § 24 ods. 5 alebo ods. 6 zákona." | For a vulnerability also "3.1 označenie alebo opis produktu IKT alebo služby IKT alebo operačnej technológie, ktorej sa zraniteľnosť týka," and its maker or provider "ak je tento výrobca produktu IKT alebo poskytovateľ služby IKT alebo výrobca operačnej technológie nahlasujúcej osobe známy." | ✅ |
| A large-scale incident | act, § 3(1)(n) | "n) rozsiahlym kybernetickým bezpečnostným incidentom kybernetický bezpečnostný incident, ktorý spôsobí narušenie na úrovni presahujúcej schopnosť Slovenskej republiky naň reagovať, alebo ktorý má významný vplyv aspoň na dva členské štáty Európskej únie," | | ✅ |
| The damage limbs of § 24(2) point to the Criminal Code | act, § 24(2)(a) and (b), footnote 9 | "alebo škodu, inú ujmu na majetku alebo ušlý zisk vo veľkom rozsahu,9)" ; "škodu, inú ujmu alebo ušlý zisk v značnom rozsahu.9)" ; "§ 125 ods. 1 Trestného zákona." | | ✅ |
| **The Criminal Code's sizes of damage** | Trestný zákon, § 125(1) | "Škodou malou sa rozumie škoda prevyšujúca sumu 700 eur. Škodou väčšou sa rozumie škoda prevyšujúca sumu 20 000 eur. Značnou škodou sa rozumie škoda prevyšujúca sumu 250 000 eur. Škodou veľkého rozsahu sa rozumie škoda prevyšujúca sumu 650 000 eur. Tieto hľadiská sa použijú rovnako na určenie výšky prospechu, hodnoty veci a rozsahu činu." | The last sentence applies the same sizes to the benefit, the value of a thing and the extent of the act. | ✅ |

What the decree settles, and what it leaves:

- Annex 1 gives a meaning to one limb only, the "závažné narušenie
  fungovania prevádzkovateľa základnej služby" of § 24(2)(a). Its eight
  points are alternatives. The time thresholds are in minutes, and they are
  shorter for an operator of a critical essential service: 30 and 60, where
  an operator of an essential service has 60 and 180.
- The other limbs of § 24(2) are damage, other harm and lost profit "vo
  veľkom rozsahu" (letter a) and "v značnom rozsahu" (letter b). Footnote 9
  sends both to § 125(1) of the Criminal Code, which names a "značná škoda"
  above EUR 250,000 and a "škoda veľkého rozsahu" above EUR 650,000.
  **Pairing each limb with one figure is a reading, not a quotation**: the
  footnote names the paragraph, not a sentence of it. The product states the
  paragraph's two figures and that the act refers to it, and the document
  prompt is told not to say which figure goes with which limb.
- Point 6 of Annex 1 and the Criminal Code's "značná škoda" carry the same
  figure, EUR 250,000, on two different limbs: point 6 is a loss or material
  damage to one user that makes the disruption serious.
- Annex 2 turns the "najmä" of § 24(3)(a) and (b) into a list. **It says
  "čas detekcie" where the act counts the deadline "od jeho zistenia"**: the
  time of detection is an item of the report, not the start of the clock,
  which stays where the incident section above puts it.
- The decree sets no form and no channel: the channel is the act's, the
  single information system (§ 24(3)).
- The decree has no repeal clause. Which decree set these criteria before
  1 September 2025 was not read.

What the product does with it (2026-11-05):

- `INCIDENT_REPORTING_SK.severityClassification.baseline.basisRef`, in
  English, French, Italian, German, Portuguese and Slovak: the eight criteria
  with their figures, the two sizes of § 125(1) as the paragraph the act
  refers to, and the large-scale incident of § 3(1)(n). The Slovak string is
  the decree's own wording. Annex 1 lists criteria, not levels, so it is in
  the baseline basis and not in a `supplement`, as Austria's § 5 NISV 2026
  is. The MCP tool `incident-deadlines` answers it under `severity.basis`.
- The labels of the early warning and of the notification list the content
  of Annex 2, in the same six languages.
- `sk.yaml` gives the document prompts two more lines: when an incident is
  serious, with the instruction to write the thresholds in minutes and to
  name the category each pair applies to, and what each report contains.
  Until this reading a Slovak incident-response plan could only repeat the
  general words of § 24(2).
- The English country page states the outage and disruption thresholds, the
  25,000 persons and the EUR 250,000 of point 6, in a key fact and a
  question, and links the decree's PDF. The amount is a loss to a user and
  sits in no sentence about sanctions.
- **Not done:** the incident form of the application shows no national
  definition of a notifiable incident, for any country: its severity choice
  says only that a notification is required. The text now exists for every
  country in `basisRef`; showing it is a separate change, to be reviewed
  country by country (a native framework must not be shown the directive's
  words).

## Leads after the 2026-11-05 reading

<!-- meta: theme=framework,statute; type=lead; date=2026-11-05; surfaces=docs; guard=none -->

- **The implementing decrees, as Slov-Lex lists them: one read, three not.**
  The act's page on Slov-Lex
  (https://www.slov-lex.sk/pravne-predpisy/SK/ZZ/2018/69/, rendered on
  2026-11-05, showing "Časová verzia predpisu účinná od 30.04.2026" as the
  current version) lists under "Vykonávacie predpisy", after the decrees of
  2018 to 2023: "226/2025 Z. z." "Vyhláška Národného bezpečnostného úradu,
  ktorou sa ustanovujú podrobnosti o hláseniach"; "227/2025 Z. z." "Vyhláška
  Národného bezpečnostného úradu o bezpečnostných opatreniach"; "111/2026
  Z. z.", the Ministry of Transport's sectoral measures; and "212/2026
  Z. z.", which amends the audit decree. The list does not say which older
  decree each one replaced. 227/2025 is, by its title, the measures decree of
  § 32(1)(b) that the open items of 2026-10-30 looked for under 362/2018, and
  226/2025 the reports decree of § 32(1)(i). **226/2025 was read the same
  day** (section above). **227/2025 comes next:** it sets the content of the
  security measures, which the product still describes from § 20 alone.
- **The audit decree is not the one footnote 31 names.** NBÚ's news item
  "Novela vyhlášky o audite kybernetickej bezpečnosti" of 27 August 2026
  (https://www.nbu.gov.sk/novela-vyhlasky-o-audite-kybernetickej-bezpecnosti/)
  says: "bola v Zbierke zákonov SR zverejnená vyhláška Národného
  bezpečnostného úradu č. 212/2026 Z. z., ktorou sa novelizuje vyhláška
  č. 493/2022 Z. z. o audite kybernetickej bezpečnosti" and "Účinnosť nadobúda
  1. septembra 2026." Footnote 31 of the consolidated act still names
  vyhláška č. 436/2019 Z. z. The product states no audit interval, only that
  the decree sets one.
- **A bill on products with digital elements, not on this act.** NBÚ's news
  item of 26 August 2026
  (https://www.nbu.gov.sk/vlada-slovenskej-republiky-schvalila-navrh-zakona-o-kybernetickej-odolnosti/)
  reports that the government approved "návrh zákona o kybernetickej
  bezpečnosti produktov s digitálnymi prvkami, známy aj ako zákon o
  kybernetickej odolnosti", which implements Regulation (EU) 2024/2847. It
  does not amend the duties above. Its passage through the Národná rada was
  not followed.
- SK-CERT's legislation page states "Posledná aktualizácia 03. 5. 2023" and
  lists older decrees: no decree number is taken from it.
- Which central bodies perform the CSIRT's tasks for their sectors (§ 6(1))
  was not read; the reference says only that the exception exists.

## What the scope check says on public administration (2026-11-05)

<!-- meta: theme=scoping; type=scope-error; date=2026-11-05; surfaces=data,prompt; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

The sentences were the directive's. A central state body is now said to be a
critical essential service (§ 18(1)(a)). A higher territorial unit and a town are
said to be under the act on a significance test (§ 17(1)(d) and (f)), which is
assumed and can overstate. The class important is the engine's word: the act has
none.

## The Slovak country page and signup: /sk/eu/slovakia and /sk/registracia (2026-11-05)

<!-- meta: theme=statute,scoping,registration,incident,governance; type=delivery; date=2026-11-05; surfaces=marketing,i18n; guard=apps/web/test/country-slovakia-fiche.test.tsx,apps/web/test/register-redirect-keeps-query.test.ts -->

- **Why:** a Slovak reader had the product in Slovak and the country page in
  English only, and a Slovak browser on `/register` stayed on the form written
  for no country.
- **Source:** this record, and no fact outside it. The page's Slovak is the
  act's, reused from the rows above and from the shipped reference and incident
  configuration. Its test holds each fact, each legal phrase, each quotation,
  provision, date and length of time against this file.
- **The framework slot is § 20 of the act**, which lists the eighteen areas. The
  page says that their content is in a decree of NBÚ, names the decree only as
  Slov-Lex lists it, and says that Reglyze does not carry it and assesses on
  the requirements of the directive.
- **The second button opens the act.** The page template always renders a second,
  outbound button. This file gives no channel for the notification of § 17(2),
  and the JISKB is for whoever has been given access, so the button opens the
  act on Slov-Lex and its label says so. The page names no channel, and says
  that it does not.
- **The statutory body:** the page says that the act words neither a training
  duty for its members nor an approval duty for it (governance section above),
  and states the duties the act does word.
- **Left out, and said to be:** the audit interval, with NBÚ's news item on the
  audit decree in NBÚ's name (never vyhláška č. 436/2019 Z. z. of footnote 31),
  how NBÚ applies the two deadlines for changes, and the list of the sectors
  of Annexes 1 and 2. Also left out: every amount but the EUR 250,000 of the
  decree's point 6, a loss to a user, so the two figures of § 125(1) of the
  Criminal Code are not repeated; and the word for a fine.
- **What the page says about the product** is tied to what it reports: the
  verdict uses the directive's words, which the act does not use; a central
  body comes out essential; a regional or local level comes out important on
  an assumed significance test, which can overstate; the questionnaire has no
  answer for a town apart from another municipality, and no question on a third
  party. The test runs the engine on the three levels.
- **Clock:** the transition of § 34b(5) ends on 2026-12-31, and that is the
  page's `reverifyAfter`. Its test fails from 2027-01-01 until the page is read
  again, as the tracker row's does.
- **Measured** in Chromium on 2026-11-05, both pages at 360, 390 and 1280 px:
  neither scrolls sideways.

## Leads from writing the Slovak page, not used by it (2026-11-05)

<!-- meta: theme=statute,scoping,registration; type=lead; date=2026-11-05; surfaces=docs; guard=none -->

The signed PDF of the act (the file above, same SHA-256,
`3d4e83a73bcdabe8276374c52089bf148f389c759856ba6df29837798f86f058`) was opened
on 2026-11-05 to check the page's Slovak against the text. It answers four
things the page leaves open. They are leads for the next reading, each quoted
from that file, and none of them is on the page.

- **How the notification is filed.** § 33(2): "Informácie, údaje a hlásenia podľa
  tohto zákona sa predkladajú úradu v elektronickej podobe prostredníctvom
  elektronického formulára, ktorého vzor zverejní úrad prostredníctvom
  jednotného informačného systému kybernetickej bezpečnosti a na ústrednom
  portáli verejnej správy v module elektronických formulárov." Read with
  § 17(2), it is the page's missing channel. Whether a person not yet entered
  in the register reaches the form, and where, was not checked.
- **The rest of the transition.** § 34b(1): "Prevádzkovateľ základnej služby podľa
  tohto zákona v znení účinnom do 31. decembra 2024 sa považuje za
  prevádzkovateľa kritickej základnej služby podľa tohto zákona v znení účinnom
  od 1. januára 2025." § 34b(3) does the same for a digital service provider,
  as an operator of an essential service. § 34b(2) and (4) let NBÚ decide
  otherwise until 31 December 2026, § 34b(7) keeps the earlier audit rules until
  then, and § 34b(8) and (9) deal with audits due in 2024 to 2026. The operator
  of § 34b(5) is the one of § 34b(1), and the "…" in the statute section's quote
  stands for "podľa predpisov účinných od 1. januára 2025 aj prijímaním a
  realizovaním bezpečnostných opatrení".
- **§ 17(1)(b)**, "b) kritický subjekt,", which the scope table above skips.
- **What § 2(2) lists.** This file calls them the digital types and does not list
  them: "službu DNS, službu registrácie názvu domény, službu cloud computingu,
  službu dátového centra, sieť na sprístupňovanie obsahu, riadenú službu,
  bezpečnostnú službu, službu online trhu, službu internetového vyhľadávača
  alebo platformu služieb sociálnej siete". So the page cannot say which
  services follow Implementing Regulation (EU) 2024/2690, and does not.
