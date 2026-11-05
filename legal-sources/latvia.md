# Latvia — legal sources (verified)

## Nacionālās kiberdrošības likums, Latvijas Vēstnesis 128A, 2024-07-04 (read 2026-10-28)

<!-- meta: theme=statute,registration; type=reference; date=2026-10-28; surfaces=data,prompt,marketing; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-lv.test.tsx -->

- **Official citation:** Nacionālās kiberdrošības likums, adopted 2024-06-20,
  proclaimed 2024-07-04, Latvijas Vēstnesis 4.07.2024, Nr. 128A (OP 2024/128A.1),
  "Paraksts pārbaudīts". A new act. Technical correction OP 2024/144.1
  (26.07.2024: in Art. 3(3) "18. pantam" becomes "20. pantam"); amended by OP
  2026/115.1 (17.06.2026), in force the day after proclamation.
- **Official URLs:** https://www.vestnesis.lv/op/2024/128A.1 ;
  https://www.vestnesis.lv/op/2024/144.1 ; https://www.vestnesis.lv/op/2026/115.1 ;
  NKDC registration page
  https://www.cyber.gov.lv/lv/minimalas-kiberdrosibas-prasibas-un-nis2/ka-registreties-nacionalaja-kiberdrosibas-centra
- **Retrieved + read:** 2026-10-28, the law, the correction and the 2026
  amendment in full. likumi.lv timed out, so a later amendment cannot be ruled out.
- **2026-10-30:** read again in full with its Cabinet regulation (sections
  below). The publication's "Grozījumi" tab on vestnesis.lv lists one amendment,
  "Grozījumi Nacionālās kiberdrošības likumā Likums, 04.06.2026.", which is OP
  2026/115.1: no later amendment is published there. likumi.lv still refuses
  the connection (TCP connect timeout on 212.70.163.212), so the consolidated
  text was not read.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Repeals the IT Security Law | Pārejas noteikumi 1 | "Ar šā likuma spēkā stāšanos spēku zaudē Informācijas tehnoloģiju drošības likums" | ✅ |
| Transposes NIS2 | Informatīva atsauce | "Likumā iekļautas tiesību normas, kas izriet no: 1) … direktīvas (ES) 2022/2555" | ✅ |
| In force 2024-09-01 | closing clause | "Likums stājas spēkā 2024. gada 1. septembrī." | ✅ |
| Authority and single point of contact | Art. 4 | "Nacionālais kiberdrošības centrs ir nacionālā kompetentā institūcija, kas darbojas Aizsardzības ministrijā kā vienotais kontaktpunkts kiberdrošības jautājumos" | ✅ (NKDC; Satversmes aizsardzības birojs supervises ICT critical infrastructure, Art. 41) |
| Self-identification within a month | Art. 22(1) | "Atbilstības gadījumā persona ne vēlāk kā mēneša laikā par to paziņo Nacionālajam kiberdrošības centram." | ✅ |
| First deadline | Pārejas noteikumi 7 | "ne vēlāk kā līdz 2025. gada 1. aprīlim" | ✅ |
| Channel operational (e-address, not a portal) | NKDC page | "Izmanto oficiālo elektronisko adresi (e-adrese) adresātam «Aizsardzības ministrija Nacionālais kiberdrošības centrs»" | ✅ |
| Incident reporting since 2025-07-01 | Pārejas noteikumi 11 | "Šā likuma 34. panta otro, trešo, ceturto un piekto daļu piemēro no 2025. gada 1. jūlija." | ✅ |
| Infringement case closed | Commission register, INFR(2024)0284 | "30/01/2026" "Closing of the case" | ✅ (after a formal notice and a reasoned opinion) |

The former row called this an "early transposition". The law was published
before the deadline, but the Commission still issued a reasoned opinion on
2025-05-07 and closed the case only on 2026-01-30; the word is dropped.

## Incident reporting: hours without a starting point (read 2026-10-30)

<!-- meta: theme=incident; type=reference,needs-check; date=2026-10-30; surfaces=data,prompt,marketing; guard=apps/core-api/test/awareness-time-only-where-read.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-lv.test.tsx -->

- **Source:** Nacionālās kiberdrošības likums, Arts. 34 and 35, OP 2024/128A.1,
  read on vestnesis.lv on 2026-10-30, against the Latvian text of Directive
  (EU) 2022/2555, Art. 23(4), on EUR-Lex the same day. The 2026 amendment
  (OP 2026/115.1) names neither article.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| On detecting an incident, act and inform at once | Art. 34(1) | "Konstatējot kiberincidentu, subjekts nekavējoties veic visas kiberincidenta novēršanai nepieciešamās darbības, kā arī nekavējoties par kiberincidentu informē kompetento kiberincidentu novēršanas institūciju" | ✅ |
| Early warning within 24 hours, from no stated instant | Art. 34(2) | "Nozīmīga kiberincidenta gadījumā subjekts nekavējoties, bet ne vēlāk kā 24 stundu laikā elektroniski iesniedz kompetentajai kiberincidentu novēršanas institūcijai agrīno brīdinājumu par nozīmīgo kiberincidentu." | ✅ |
| Initial report within 72 hours, 24 for trust services | Art. 34(3) | "ne vēlāk kā 72 stundu laikā (uzticamības pakalpojumu sniedzējs — 24 stundu laikā)" | ✅ |
| Final report a month after the initial report; an interim one on request | Art. 34(5) | "Subjekts mēneša laikā pēc šā panta trešajā daļā minētā ziņojuma iesniegšanas iesniedz kompetentajai kiberincidentu novēršanas institūcijai galaziņojumu" ; "Pēc kompetentās kiberincidentu novēršanas institūcijas pieprasījuma subjekts iesniedz tai arī starpposma ziņojumu" | ✅ |
| Unresolved by then: a progress report, the final one after resolution | Art. 34(6) | "subjekts iesniedz kompetentajai kiberincidentu novēršanas institūcijai progresa ziņojumu par nozīmīgā kiberincidenta risināšanu, savukārt šā panta piektajā daļā minēto galaziņojumu iesniedz pēc nozīmīgā kiberincidenta atrisināšanas" | ✅ |
| Content and procedure left to the Cabinet | Art. 34(7) | "Ministru kabinets nosaka šā panta otrajā daļā minētā brīdinājuma, kā arī šā panta trešajā, piektajā un sestajā daļā minēto ziņojumu saturu un iesniegšanas kārtību." | ✅ found later on 2026-10-30: Cabinet Regulation No. 397 (section on the regulation under Art. 34(7), below), which fixes no instant |
| The directive counts from becoming aware | Directive (LV), Art. 23(4)(a) | "24 stundu laikā no brīža, kad uzzinājušas par būtisku incidentu" | ✅ |

Read in its own language against the directive's, the act drops the
directive's instant. Arts. 34(2) and (3) give 24 and 72 hours, "ne vēlāk kā",
and say nothing about from when; the only instant in the article is in (1),
"Konstatējot kiberincidentu", on establishing that there is an incident.
The Cabinet regulation under (7) was found later the same day: Regulation No.
397 sends the entity back to the act's time limits and adds no instant
(section on the regulation under Art. 34(7), below). The ministry's guidance
reads the hours from establishing the incident; guidance is not law.

Latvia has no incident config, so it runs on DEFAULT, and since 2026-10-30 a
recorded awareness time does not move DEFAULT's clocks (`awarenessTimeCounts`
in packages/regulatory-data/src/country-configs/incident-reporting.ts): the
clocks run from detection, the reading that can only be early. A Latvian
config should not count from awareness: no Latvian text read so far counts
from becoming aware.

## Sources read in full on 2026-10-30: the act, its correction and amendment, and Cabinet Regulation No. 397

<!-- meta: theme=statute; type=reference; date=2026-10-30; surfaces=prompt,marketing; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-lv.test.tsx -->

Every text was read on vestnesis.lv, the official publication, in headless
Chromium, on 2026-10-30. likumi.lv refuses the connection from this network,
so the consolidated text was not read: the quotes below are from the
published texts, and a provision the 2026 amendment changed is quoted from the
amending law or marked as published. A quote that carries its own quotation
marks is set in backticks.

| Text | Where | Read |
|---|---|---|
| Nacionālās kiberdrošības likums, adopted 20.06.2024 (OP 2024/128A.1) | https://www.vestnesis.lv/op/2024/128A.1 | in full: Arts. 1 to 46, the transitional provisions, the reference to the directives |
| Technical correction (OP 2024/144.1) | https://www.vestnesis.lv/op/2024/144.1 | in full |
| Grozījumi Nacionālās kiberdrošības likumā, adopted 04.06.2026 (OP 2026/115.1) | https://www.vestnesis.lv/op/2026/115.1 | in full |
| Ministru kabineta noteikumi Nr. 397 "Minimālās kiberdrošības prasības", 25.06.2025 (OP 2025/123.1) | https://www.vestnesis.lv/op/2025/123.1 | points 1 to 158 in full, and the five incident forms (Annexes 10 to 14); the other annexes not in full |
| Directive (EU) 2022/2555, Latvian text | EUR-Lex, CELEX 32022L2555, committed at `docs/research/eur-lex/nis2-lv.txt` | Arts. 2, 3, 6, 20, 21, 23 and 34, compared |
| CERT.LV: what to do in a cyber incident; about CERT.LV | https://cert.lv/lv/riciba-kiberincidenta-gadijuma ; https://cert.lv/lv/par-mums | the pages, as guidance |
| NKDC: NIS2 pages, registration, frequently asked questions of 28.07.2026 | https://www.cyber.gov.lv/lv/minimalas-kiberdrosibas-prasibas-un-nis2 ; https://www.cyber.gov.lv/sites/cyber/files/document/BIE%C5%BD%C4%80K%20UZDOTIE%20JAUT%C4%80JUMI_280726_1.pdf | as guidance |
| Ministry of Defence: how the act's subjects report incidents (infographic) | https://www.mod.gov.lv/sites/mod/files/document/K%C4%81%20NKDL%20subjektiem%20r%C4%ABkoties%20incidenta%20gad%C4%ABjum%C4%81.pdf | as guidance |

The publication's "Uz likuma pamata izdotie tiesību akti" tab lists six
Cabinet regulations under the act (2026-10-30); only No. 397 was read:
"Minimālās kiberdrošības prasības Ministru kabineta noteikumi, 25.06.2025." ;
"Noteikumi par kārtību, kādā nosakāms finanšu gada neto apgrozījums, no kura aprēķina soda naudu, un soda naudas apmēra noteikšanas kritērijiem Ministru kabineta noteikumi, 29.04.2025." ;
"Noteikumi par centralizētu aizsardzību pret pakalpojumatteices kiberuzbrukumiem Ministru kabineta noteikumi, 18.03.2025." ;
"Vienotā valsts interneta plūsmu apmaiņas punkta darbības noteikumi Ministru kabineta noteikumi, 05.11.2024." ;
"Informācijas sistēmu izvietošanas un datu centru drošības prasības Ministru kabineta noteikumi, 29.09.2026." ;
and a regulation of 06.09.2022 on the ".lv" registry and the domain name
registration database. Regulation No. 397's own page lists no amendment.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Regulation No. 397, issued under the act's incident provisions | Reg. 397, preamble | "Minimālās kiberdrošības prasības" ; "34. panta pirmo, septīto un desmito daļu," ; "36. panta pirmo daļu" | issued under Art. 34(1), (7) and (10) and Art. 36(1), among others | ✅ |
| The amendment is in force the day after proclamation | OP 2026/115.1 | "Likums stājas spēkā nākamajā dienā pēc tā izsludināšanas." ; "Rīgā 2026. gada 17. jūnijā" | in force on 18 June 2026 | ✅ |
| The size test: "and" becomes "or" | OP 2026/115.1, point 2 | `aizstāt 16. punkta "b" apakšpunktā vārdu "un" ar vārdu "vai"` | in Art. 1(16)(b), the turnover and the balance sheet become alternatives | ✅ |
| Delegated private-law bodies leave Arts. 3 and 20(5) | OP 2026/115.1, points 3 and 5 | "kā arī privāto tiesību juridiskajām personām, kas pilda valsts pārvaldes deleģētu uzdevumu" | the words are deleted | ✅ |
| National-security bodies essential from 2026-10-01 | OP 2026/115.1, points 5 and 15 | "tai skaitā nacionālajai drošībai nozīmīga komercsabiedrība, nodibinājums un biedrība" ; "stājas spēkā 2026. gada 1. oktobrī" | added to Art. 20(11), with an exception for owners of at least 10,000 ha of forest land or 4,000 ha of agricultural land in Latvia | ✅ |
| NKDC approves the list and decides contested status | OP 2026/115.1, point 6 | `izslēgt ceturtajā daļā vārdus "Digitālās drošības uzraudzības komiteja"` ; "Nacionālais kiberdrošības centrs pieņem lēmumu par personas atbilstību būtisko pakalpojumu sniedzēja vai svarīgo pakalpojumu sniedzēja statusam un" | in Art. 22(4) and (5) | ✅ |
| The cybersecurity manager within three months | OP 2026/115.1, point 9 | "Subjekta vadītājs kiberdrošības pārvaldnieku nosaka ne vēlāk kā triju mēnešu laikā no šā likuma 22. panta pirmajā daļā minētā paziņojuma sniegšanas vai piektajā daļā minētā lēmuma pieņemšanas brīža." | new first sentence of Art. 25(2) | ✅ |
| Early-warning sensors deleted | OP 2026/115.1, point 11 | "Izslēgt 29. pantu." | Art. 29 is deleted | ✅ |
| Auditor requirements by Cabinet regulation, until then those of No. 397 | OP 2026/115.1, points 14 and 15 | "Kiberdrošības auditoram izvirzāmās prasības nosaka Ministru kabinets." ; "bet ne ilgāk kā līdz 2026. gada 1. decembrim" | new Art. 44(2) and transitional point 14 | ✅ |

## Scope: the two classes, the act's own size test, and the size-independent types

<!-- meta: theme=scoping; type=reference; date=2026-10-30; surfaces=data,prompt,marketing,mcp; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/scoping.test.ts,packages/regulatory-data/test/national-size-tests.test.ts,apps/web/test/country-pages-lv.test.tsx -->

Three facts decide real cases. **The act lists its own types**, in Art. 20
(essential: "būtisko pakalpojumu sniedzējs") and Art. 21 (important:
"svarīgo pakalpojumu sniedzējs"), instead of referring to the directive's
annexes. **The act defines size itself**, as "liels" and "vidējs saimnieciskās
darbības veicējs", with no reference to Recommendation 2003/361/EC, and since
18 June 2026 either financial figure makes an operator large. **Some types
are essential at any size** that the directive sizes or leaves optional:
every electronic communications undertaking, every state institution and
derived public person, and the public electronic media.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Who the act's duties fall on | Art. 3(1)(1) | "būtisko pakalpojumu sniedzējiem, svarīgo pakalpojumu sniedzējiem un informācijas un komunikācijas tehnoloģiju kritiskās infrastruktūras īpašniekiem un tiesiskajiem valdītājiem" | essential and important service providers, and the owners and legal possessors of ICT critical infrastructure (together "subjekti") | ✅ |
| Large operator, as published | Art. 1(16) | "atbilst vismaz vienai no šādām pazīmēm:" ; "a) saimnieciskās darbības veicējs nodarbina vismaz 250 nodarbinātos," ; "b) saimnieciskās darbības veicēja pēdējā finanšu gada kopējais neto apgrozījums pārsniedz 50 miljonus euro un gada bilances kopsumma pārsniedz 43 miljonus euro;" | at least one of: 250 employees; turnover above EUR 50 million and balance sheet above EUR 43 million. Since 18 June 2026 the "un" reads "vai" (above) | ✅ |
| Medium operator | Art. 1(25) | "atbilst visām šādām pazīmēm:" ; "saimnieciskās darbības veicējs nodarbina līdz 249 nodarbinātajiem;" ; "saimnieciskās darbības veicēja pēdējā finanšu gada kopējais neto apgrozījums ir vismaz 10 miljoni euro, bet nepārsniedz 50 miljonus euro vai gada bilances kopsumma ir vismaz 10 miljoni euro, bet nepārsniedz 43 miljonus euro;" | all of: up to 249 employees; a turnover from EUR 10 to 50 million or a balance sheet from EUR 10 to 43 million. No headcount floor | ✅ |
| Operators active in Latvia | Art. 1(16) and (25) | "juridiskā vai fiziskā persona vai šādu personu apvienība, kas veic saimniecisko darbību Latvijas Republikā" | no partner or linked enterprise is named | ✅ |
| Essential at any size: registries, DNS, e-communications, qualified trust services | Art. 20, points 1 to 4 | "3) elektronisko sakaru komersants;" ; "4) kvalificēts uzticamības pakalpojumu sniedzējs;" | (and the TLD registry, point 1, and DNS service providers other than root name servers, point 2) | ✅ |
| Essential at any size: the state and derived public persons | Art. 20, points 5 and 6 | "5) tiešās pārvaldes iestāde un cita valsts institūcija" ; "6) atvasināta publiskā persona;" | (state security institutions excepted) | ✅ |
| Municipalities are subjects | Reg. 397, point 145 | "Ja subjekts, kurš ir pašvaldība vai pašvaldības dibināta pastarpinātās pārvaldes iestāde" | a municipality is a derived public person, treated as a subject | ✅ |
| Essential at any size: public electronic media | Art. 20, point 7 | "7) sabiedriskie elektroniskie plašsaziņas līdzekļi;" | a national addition | ✅ |
| Essential: large operators of the Art. 20(8) list | Art. 20, point 8 | "8) liels saimnieciskās darbības veicējs, kurš ir:" ; "v) informācijas un komunikācijas tehnoloģiju pārvaldības vai kiberdrošības pakalpojumu sniedzējs," | energy, oil, hydrogen, transport, banking and market infrastructure, health, medicines, critical medical devices, water, IXP, cloud, data centre, CDN, ICT management or cybersecurity services, space | ✅ |
| Sole provider, and disruption impact | Art. 20, points 9 and 11 | "ir vienīgais šāda veida pakalpojuma sniedzējs Latvijas Republikā" ; "iestāde vai saimnieciskās darbības veicējs, kura darbības traucējums var būtiski ietekmēt sabiedrības drošību, valsts aizsardzību, sabiedrības veselību vai var radīt būtisku sistēmisku risku" | | ✅ |
| Important: a medium operator of the Art. 20(8) list | Art. 21(1), point 1 | "1) vidējs saimnieciskās darbības veicējs, kurš veic saimniecisko darbību vismaz vienā no šā likuma 20. panta 8. punktā minētajām jomām;" | | ✅ |
| Important: medium or large operators of the Art. 21(1)(2) list | Art. 21(1), point 2 | "2) vidējs vai liels saimnieciskās darbības veicējs, kurš ir:" ; "p) apsardzes pakalpojumu sniedzējs;" | postal, waste, chemicals, food, manufacturing, online marketplaces, search engines, social media, research, and security services (a national addition) | ✅ |
| Important at any size: education information systems, non-qualified trust services | Art. 21(1), points 5 and 6 | "5) izglītības informācijas sistēmas uzturētājs;" ; "6) uzticamības pakalpojumu sniedzējs, kurš nav kvalificēts uzticamības pakalpojumu sniedzējs." | the first is a national addition (Art. 21(2) defines the system) | ✅ |
| Out: e-communications undertakings not active in Latvia | Art. 3(10) | "Likums neattiecas uz elektronisko sakaru komersantiem, kuri nenodrošina elektronisko sakaru tīklu un nesniedz elektronisko sakaru pakalpojumus Latvijas Republikā." | | ✅ |
| DORA financial entities, as far as DORA governs | Art. 3(3), as corrected | "ciktāl regula 2022/2554 vai citi normatīvie akti nenosaka citas prasības" | correction OP 2024/144.1 replaces "18. pantam" with "20. pantam" | ✅ |
| One status, the higher | NKDC FAQ (28.07.2026), Q2 | "kā atbilstošo nosaka augstāko" | an entity that meets both lists is essential | ✅ (guidance) |
| The size test is Art. 1(16) and (25) | NKDC FAQ, Q8 | "to apgrozījums un izmērs atbilst NKDL 1. panta 16. un 25. punktam" | | ✅ (guidance) |

Reading, not a quotation. Art. 1(16), as amended on 18 June 2026, and Art.
1(25) together put an operator of an Art. 20(8) or 21(1)(2) type in scope from
250 employees, or from a turnover of at least EUR 10 million, or from a
balance sheet of at least EUR 10 million: below 250 employees, only the money
decides. The directive (Art. 2(1), through the Recommendation, `eu.md` section
F) puts it in scope from 50 persons, or from a turnover and a balance sheet
both above EUR 10 million. So the Latvian test is narrower for an operator of
50 to 249 employees whose turnover and balance sheet are both under EUR 10
million (out in Latvia, in under the directive), and wider for an operator
under 50 employees with one of the two figures at EUR 10 million or more (in
Latvia, small and out under the directive). Before 18 June 2026 an operator
under 250 employees with a turnover above EUR 50 million and a balance sheet
under EUR 10 million met neither definition; the amendment closed that. The
act names no partner or linked enterprise: whether group figures count is not
settled by the texts read.

```
IN SCOPE of the Nacionālās kiberdrošības likums (Arts. 1, 3, 20, 21; Art. 1(16) as amended 2026-06-18):
  LARGE  = employees >= 250 OR turnover > 50M OR balance > 43M
  MEDIUM = employees <= 249 AND (10M <= turnover <= 50M OR 10M <= balance <= 43M)
  Art. 20(8) type AND LARGE                                   -> essential
  Art. 20(8) type AND MEDIUM                                  -> important (21(1)(1))
  Art. 21(1)(2) type AND (LARGE OR MEDIUM)                    -> important
  TLD | DNS (not root) | e-communications undertaking | QTSP  -> essential, any size (20(1)-(4))
  direct administration, other state institution              -> essential, any size (20(5))
  derived public person (municipalities, Reg. 397 pt 145)     -> essential, any size (20(6))
  public electronic media                                     -> essential, any size (20(7))
  sole provider in Latvia of an Art. 20(8) service (20(9))    -> essential, any size
  disruption impact; national-security bodies from 2026-10-01 (20(11)) -> essential, any size
  sole provider in Latvia of an Art. 21(1)(2) service (21(1)(3)) -> important, any size
  education information system maintainer | non-qualified TSP -> important, any size (21(1)(5), (6))
  domain name registration service provider                   -> notifies NKDC (Art. 23), no class stated
EXCEPT state security institutions; e-comms undertakings not active in Latvia (3(10)); other Member States' state bodies (3(11))
BOTH lists met -> essential (NKDC FAQ, Q2)
```

What the product does with it (2026-10-30): `nationalSizeTestFor("LV")` in
`packages/regulatory-data/src/scoping.ts` applies Art. 1(16) as amended and
Art. 1(25) with their bounds ("vismaz" inclusive, "pārsniedz" exclusive,
"nepārsniedz" inclusive) and the "vai" in force since 18 June 2026; an
operator that meets both definitions is large, since Art. 21(1) makes
important only a person that is not essential. With the questionnaire's
answers it also applies the rows above that they can decide: every electronic
communications undertaking essential at any size (Art. 20(3)), every state
institution and derived public person essential at any size whatever the
level of government (Art. 20(5), (6)), a non-qualified trust service provider
important at any size (Art. 21(1)(6)). It reads the directive's Annex I
sectors as the Art. 20(8) types and its Annex II sectors as the Art. 21(1)(2)
types, as the rows above list them. A missing balance sheet is not counted:
counted as reaching EUR 10 million it would make every operator medium, and as
exceeding EUR 43 million every operator large, so the verdict can only
understate, and says so. The figures entered are taken as given, since the
act names no partner or linked enterprise. The scoping wizard, the MCP
`scope_check` and, since 2026-10-30, the free scope checker on the website
run it, and the auto-scoping prompt states the same rules; the free checker
asks no balance sheet, says which classes one could give, and the public
page says so. Not modelled, because no question asks: the
public electronic media (Art. 20(7)), education information systems (Art.
21(1)(5)), security services (Art. 21(1)(2)(p)), and the act's own
sole-provider and disruption grounds (Art. 20(9), (11), 21(1)(3)), which the
questionnaire asks in the directive's words.
`packages/regulatory-data/test/national-size-tests.test.ts` holds the quotes
the entry rests on against this file.

## Registration: self-assessment, one month, a signed form to the Ministry of Defence

<!-- meta: theme=registration; type=reference; date=2026-10-30; surfaces=prompt,marketing; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-lv.test.tsx -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The person assesses itself | Art. 22(1) | "Persona veic pašvērtējumu, nosakot savu atbilstību būtisko pakalpojumu sniedzēja vai svarīgo pakalpojumu sniedzēja statusam." | | ✅ |
| What the notification states | Art. 22(1), point 4 | "4) personas pastāvīgi izmantoto interneta protokola (IP) adrešu diapazonus;" | (with name, status, contacts, the field of activity under Arts. 20 and 21, the services, the countries served, a contact person) | ✅ |
| Changes within two weeks | Art. 22(2) | "nekavējoties, bet ne vēlāk kā divu nedēļu laikā paziņo Nacionālajam kiberdrošības centram par jebkādām šā panta pirmajā daļā minētajā paziņojumā norādīto ziņu izmaiņām" | | ✅ |
| The list is restricted | Art. 22(4) | "Būtisko pakalpojumu un svarīgo pakalpojumu sniedzēju saraksts ir ierobežotas pieejamības informācija." | NKDC compiles and, since 18 June 2026, approves it (above) | ✅ |
| NKDC can decide the status, and correct a wrong self-assessment | Art. 22(5) and (5¹), as amended | "ja tas konstatē, ka persona savu atbilstību būtisko pakalpojumu sniedzēja vai svarīgo pakalpojumu sniedzēja statusam ir noteikusi neatbilstoši" | the person then gives its information within a month | ✅ |
| Within a month of NKDC's notice | Art. 22(5) | "ne vēlāk kā mēneša laikā pēc paziņojuma saņemšanas sniegt Nacionālajam kiberdrošības centram šā panta pirmajā daļā minēto informāciju" | | ✅ |
| NKDC may take a public body or a former entity off the list | Art. 22(4¹), added by OP 2026/115.1 | "Nacionālais kiberdrošības centrs var pieņemt lēmumu izslēgt no būtisko pakalpojumu un svarīgo pakalpojumu sniedzēju saraksta" | | ✅ |
| Registrars notify NKDC within a month | Art. 23(1) | "kura lēmumi saistībā ar kiberdrošību tiek pieņemti Latvijas Republikā vai kuram Latvijas Republikā ir vislielākais darbinieku skaits, ne vēlāk kā mēneša laikā par to paziņo Nacionālajam kiberdrošības centram" | | ✅ |
| Channel: a signed form to the Ministry of Defence's official e-address | Reg. 397, point 7 | "nosūtot uz Aizsardzības ministrijas oficiālo elektronisko adresi elektroniski aizpildītu un ar drošu elektronisko parakstu parakstītu būtisko vai svarīgo pakalpojumu sniedzēja statusa paziņojuma veidlapu (1. pielikums)" | | ✅ |
| ICT critical infrastructure also notifies SAB | Reg. 397, point 8 | "tas šo noteikumu 7. punktā minēto statusa paziņojumu iesniedz arī Satversmes aizsardzības birojam" | | ✅ |
| The cybersecurity manager is notified within five working days | Art. 25(2) | "Subjekts nekavējoties, bet ne vēlāk kā piecu darbdienu laikā paziņo Nacionālajam kiberdrošības centram un Satversmes aizsardzības birojam par kiberdrošības pārvaldnieka noteikšanu." | first notifications by 1 October 2025 (transitional point 10) | ✅ |
| Questions go to NKDC's NIS2 contact | NKDC registration page | "NIS2@mod.gov.lv" | guidance | ✅ (guidance) |

## Security measures: Art. 27 and Cabinet Regulation No. 397

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The act states the duty in one sentence and does not list the directive's ten
measures: it leaves the minimum requirements to the Cabinet (Art. 26), and
Regulation No. 397 sets them in detail.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The duty | Art. 27 | "Subjekts veic piemērotus un samērīgus tehniskos un organizatoriskos pasākumus, lai pārvaldītu kiberriskus subjekta izmantoto elektronisko sakaru tīklu un informācijas sistēmu drošībai" | appropriate and proportionate technical and organisational measures | ✅ |
| The Cabinet sets the minimum requirements | Art. 26 | "Ministru kabinets nosaka minimālās kiberdrošības prasības subjektiem" | | ✅ |
| A risk and continuity plan, and regular staff training | Art. 28(1) | "Subjektam ir pienākums izstrādāt kiberrisku pārvaldības un informācijas un komunikācijas tehnoloģiju darbības nepārtrauktības plānu un nodrošināt darbiniekiem regulāru apmācību efektīvai plānā iekļauto pasākumu īstenošanai." | | ✅ |
| Where information systems are kept | Art. 30(1) | "Subjekts savā īpašumā vai valdījumā esošās informācijas sistēmas uztur savā informācijas un komunikācijas tehnoloģiju infrastruktūrā, kas atbilst minimālajām kiberdrošības prasībām, vai Ministru kabineta noteiktajām prasībām atbilstošos datu centros" | the data-centre regulation of 29.09.2026 was not read | ✅ |
| Privileged ICT staff without certain convictions | Art. 26¹, added by OP 2026/115.1 | "Par subjekta darbinieku informācijas un komunikācijas tehnoloģiju jomā, kuram ir privileģētas tiesības piekļūt sistēmām vai informācijas un komunikācijas tehnoloģiju resursiem, kam ir tieša ietekme uz subjekta pamatdarbību, nevar būt persona, kura sodīta" | for intentional crimes of terrorism, against the state or against property or the economy, unless rehabilitated; an individual decision otherwise | ✅ |
| Four governance documents | Reg. 397, point 21 | "21.1. kiberdrošības politika;" ; "21.2. IKT resursu un informācijas sistēmu katalogs;" ; "21.3. kiberrisku pārvaldības un IKT darbības nepārtrauktības plāns;" ; "21.4. kiberincidentu žurnāls." | the policy, the ICT and information systems catalogue, the plan, the incident log | ✅ |
| The policy reviewed at least every three years | Reg. 397, point 28 | "ne retāk kā reizi trijos gados pārskata un nepieciešamības gadījumā aktualizē kiberdrošības politiku" | | ✅ |
| Security classes A, B and C | Reg. 397, point 32 | "Subjekts nosaka konfidencialitātes, integritātes un pieejamības drošības klasi (A, B vai C)" | per information system and category of information resources | ✅ |
| The plan reviewed every year, two years or three years | Reg. 397, point 40 | "vismaz reizi gadā" ; "vismaz reizi divos gados" ; "vismaz reizi trijos gados" | yearly for ICT critical infrastructure and for an essential entity with an A-class system, every two years for the other essential entities, every three years for important entities | ✅ |
| Supply chain in the risk assessment | Reg. 397, point 41.2 | "tostarp ar piegādes ķēdēm saistīto risku analīzi" | | ✅ |
| Multi-factor authentication | Reg. 397, point 52 | "Subjekts nodrošina obligātu daudzfaktoru autentifikācijas izmantošanu" | for A-class accounts, B-class administrator accounts and B-class remote access without an MFA VPN | ✅ |
| Logs kept by class | Reg. 397, point 57 | "vismaz 18 mēnešus pēc ieraksta izdarīšanas" | 18 months for A, 12 for B, 6 for C | ✅ |
| Staff briefings | Reg. 397, point 76 | "ne vēlāk kā viena mēneša laikā no fiziskās personas lietotāja konta reģistrācijas brīža" ; "vismaz reizi kalendāra gadā" | an initial briefing within a month of a new account, then every calendar year | ✅ |
| No ICT outsourcing to Russia, Belarus or a state sponsor of terrorism | Reg. 397, point 86.1 | "ja ārpakalpojuma sniedzējs ir juridiska persona, kas reģistrēta Krievijas Federācijā, Baltkrievijas Republikā vai valstī, kuru Eiropas Parlaments vai Latvijas Republikas Saeima ir atzinusi par terorismu atbalstošu valsti" | nor where an owner, beneficial owner, board member or person on the contract is a citizen of such a state, or the resource's manufacturer is from there (points 86.2 to 86.5) | ✅ |
| Contract clauses | Reg. 397, point 87.3.2 | "ārpakalpojuma sniedzēja pienākumu nekavējoties ziņot subjektam par konstatēto kiberincidentu" | with monitoring rights, subcontractor disclosure and confidentiality | ✅ |
| Supply-chain risks assessed before buying | Reg. 397, point 89 | "Pirms ārpakalpojuma iegādes subjekts apzina un novērtē ar ārpakalpojuma iegādi saistītos riskus, tostarp piegādes ķēdes drošības riskus" | | ✅ |
| The cybersecurity manager clears each outsourcing contract | Reg. 397, point 92 | "Subjekts nodrošina, ka pirms ārpakalpojuma līguma slēgšanas tas tiek saskaņots ar subjekta kiberdrošības pārvaldnieku." | | ✅ |
| Essential entities' A-class systems: NATO, EU, EFTA or IP4 providers | Reg. 397, point 101 | "Būtisko pakalpojumu sniedzējam, kas nav IKT kritiskās infrastruktūras īpašnieks vai tiesiskais valdītājs, ārpakalpojuma līgumu A klases informācijas sistēmai atļauts slēgt" | only with a provider and manufacturer meeting point 94, or after an SAB opinion (point 103.2) | ✅ |
| Penetration tests of A-class systems | Reg. 397, point 131.1 | "vismaz reizi trijos gados informācijas sistēmas ekspluatācijas laikā" | and before going live | ✅ |
| The digital types: the Implementing Regulation first | Reg. 397, point 6 | "piemēro, ciktāl tās nav pretrunā ar Eiropas Komisijas 2024. gada 17. oktobra Īstenošanas regulu (ES) 2024/2690" | | ✅ |

## Governance: the head of the entity, the cybersecurity manager, and no training duty for the management

<!-- meta: theme=governance; type=reference; date=2026-10-30; surfaces=doc-gen,prompt,marketing; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-lv.test.tsx -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The head of the entity ensures and answers for it, and designates a cybersecurity manager | Art. 25(1) | "Subjekta kiberdrošības pārvaldību nodrošina un par to atbild subjekta vadītājs. Katra subjekta vadītājs nosaka atbildīgo personu, kura īsteno un pārrauga kiberdrošības pasākumu īstenošanu attiecīgajā subjektā" | The head of the entity ensures, and is responsible for, the entity's cybersecurity management, and designates the person who implements and oversees the measures, the "kiberdrošības pārvaldnieks" | ✅ |
| The manager's yearly duties | Art. 25(5), points 2 to 4 | "2) ne retāk kā reizi gadā veikt informācijas un komunikācijas tehnoloģiju drošības pārbaudi un atbilstoši tās rezultātiem organizēt konstatēto trūkumu novēršanu;" ; "3) vismaz reizi gadā apmeklēt kiberincidentu novēršanas institūcijas organizētu apmācību kiberdrošības jautājumos;" ; "4) ne retāk kā reizi gadā nodrošināt, ka tiek veikta institūcijā nodarbināto instruktāža par subjektam aktuālajiem kiberriskiem un kiberdrošību." | a yearly ICT security check, a yearly training organised by the incident-response institution, a yearly staff briefing | ✅ |
| CERT.LV runs that training twice a year | NKDC FAQ, Q23 | "CERT.LV divas reizes gadā organizē apmācības kiberdrošības pārvaldniekiem." | | ✅ (guidance) |
| Who may be the manager of an important entity | Reg. 397, point 13.1 | "kurai ir NATO, Eiropas Savienības vai EBTA dalībvalsts pilsonība;" | a NATO, EU or EFTA citizen, with an IT or cybersecurity education, a certificate, or two years' experience (13.3); for an essential entity also no conviction for an intentional crime (12.2) | ✅ |
| At most five essential entities per manager | Reg. 397, point 18 | "Fiziskā persona vienlaikus drīkst būt noteikta par kiberdrošības pārvaldnieku ne vairāk kā piecos būtisko pakalpojumu sniedzējos" | | ✅ |
| The head gives the manager the knowledge and authority | Reg. 397, point 44 | "Subjekta vadītājs nodrošina, ka kiberdrošības pārvaldniekam un, ja attiecināms, citām par darbības nepārtrauktības pasākumu īstenošanu atbildīgajām personām ir nepieciešamās zināšanas un pilnvaras" | | ✅ |
| The self-assessment form asks whether the entity approved its policy | Reg. 397, Annex 16, item 0301 | "Subjekts ir izstrādājis un apstiprinājis subjekta kiberdrošības politiku" | the entity, not a named body | ✅ |
| The directive: approval, oversight and training of the management bodies | Directive (LV), Art. 20(1) and (2) | "būtisku un svarīgu vienību pārvaldes struktūras apstiprina kiberdrošības risku pārvaldības pasākumus" ; "pārvaldības struktūru locekļiem tiek prasīts iziet apmācību" | | ✅ |
| Temporary ban on a manager, essential entities and ICT critical infrastructure | Art. 45(5), point 3 | "uz laiku aizliegt jebkurai fiziskajai personai, kas subjektā ir atbildīga par vadības un pārstāvības pienākumu veikšanu izpildinstitūcijas līmenī vai tam līdzvērtīgā līmenī, veikt vadības un pārstāvības funkcijas" | | ✅ |
| Never for important entities outside ICT critical infrastructure | Art. 45(8) | "Šā panta piektās daļas 3. punktā minēto aizliegumu nepiemēro svarīgo pakalpojumu sniedzējam, kurš nav informācijas un komunikācijas tehnoloģiju kritiskās infrastruktūras īpašnieks vai tiesiskais valdītājs." | | ✅ |
| Never for public bodies | Art. 45(11) | "Šā panta piektās daļas 3. punktā minēto aizliegumu nepiemēro tiešās vai pastarpinātās pārvaldes iestādēm, citām valsts institūcijām un atvasinātām publiskajām personām." | | ✅ |

Read against the directive's Latvian text, the act does not word Article 20
for a management body: it puts cybersecurity management, and the
responsibility for it, on the head of the entity ("subjekta vadītājs"), who
designates a cybersecurity manager. Neither the act nor Regulation No. 397
makes the head approve the measures, oversee them, or follow training. The
one training the act requires each year is the cybersecurity manager's,
organised by the incident-response institution, which for private-law legal
persons is CERT.LV.

## The regulation under Art. 34(7): forms, recipients, and still no starting point

<!-- meta: theme=incident; type=reference,needs-check; date=2026-10-30; surfaces=data,prompt,marketing; guard=apps/core-api/test/awareness-time-only-where-read.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,apps/web/test/country-pages-lv.test.tsx -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The incident-response institution for private persons | Art. 9(2), point 2 | "Latvijas Universitātes Matemātikas un informātikas institūts" ; "attiecībā uz valsts un pašvaldību institūcijām (izņemot valsts drošības iestādes un šīs daļas 1. punktā minētās institūcijas), kā arī privāto tiesību juridiskajām personām" | for state and municipal institutions and private-law legal persons | ✅ |
| The Ministry of Defence's own | Art. 9(2), point 1 | "Militārās izlūkošanas un drošības dienests" ; "attiecībā uz Aizsardzības ministriju, tās padotībā esošajām iestādēm un Nacionālajiem bruņotajiem spēkiem" | | ✅ |
| CERT.LV is that institute's unit | CERT.LV, about page | `CERT.LV (Kiberincidentu novēršanas institūcija) ir "Latvijas Universitātes Matemātikas un informātikas institūta" (LU MII) struktūrvienība` | | ✅ (authority page) |
| The regulation sets the content and procedure of the reports | Reg. 397, point 1.13 | "agrīnā brīdinājuma, sākotnējā ziņojuma, starpposma ziņojuma, progresa ziņojuma un galaziņojuma par nozīmīgu kiberincidentu saturu un iesniegšanas kārtību" | | ✅ |
| On establishing an incident, assess its significance at once | Reg. 397, point 117 | "Konstatējot kiberincidentu, subjekts nekavējoties novērtē kiberincidenta nozīmīgumu." | | ✅ |
| The time limits are the act's, and the regulation adds no instant | Reg. 397, point 119 | "Par nozīmīgu kiberincidentu subjekts Nacionālās kiberdrošības likuma 34. panta otrajā, trešajā, piektajā un sestajā daļā noteiktajos termiņos ziņo kompetentajai kiberincidentu novēršanas institūcijai" | | ✅ |
| By e-mail, signed with a secure electronic signature | Reg. 397, point 119 | "nosūtot uz tās elektroniskā pasta adresi elektroniski aizpildītu un ar drošu elektronisko parakstu parakstītu" | | ✅ |
| Five forms | Reg. 397, points 119.1, 119.2 and 119.5 | "agrīnā brīdinājuma veidlapu (10. pielikums);" ; "sākotnējā ziņojuma veidlapu (11. pielikums);" ; "galaziņojuma veidlapu (14. pielikums)." | (and the progress and interim report forms, Annexes 12 and 13, where applicable) | ✅ |
| The forms say 24 and 72 hours, from no instant | Reg. 397, Annexes 10 and 11 | "IESNIEDZAMS 24 STUNDU LAIKĀ" ; "IESNIEDZAMS 72 STUNDU LAIKĀ" ; "Kiberincidenta datums un laiks (ja zināms):" | the forms ask for the incident's own date and time, if known | ✅ |
| Final report within a month; progress report if unresolved | Reg. 397, Annexes 14 and 12 | "IESNIEDZAMS 1 MĒNEŠA LAIKĀ, JA KIBERINCIDENTS NAV ATRISINĀTS" | | ✅ |
| An incident that is not significant: free form, by e-mail | Reg. 397, point 120 | "Par kiberincidentu, kurš nav uzskatāms par nozīmīgu kiberincidentu, subjekts ziņo kompetentajai kiberincidentu novēršanas institūcijai, nosūtot uz tās elektroniskā pasta adresi kiberincidenta aprakstu brīvā formā." | | ✅ |
| Essential entities also report to SAB | Reg. 397, point 121 | "IKT kritiskās infrastruktūras īpašnieks vai tiesiskais valdītājs un būtiskā pakalpojuma sniedzējs šo noteikumu 119. un 120. punktā minētos ziņojumus nosūta arī Satversmes aizsardzības birojam." | the Constitution Protection Bureau receives the same reports | ✅ |
| Significance: the Implementing Regulation, or national criteria | Reg. 397, point 118 | "tas atbilst būtiska kiberincidenta definīcijai regulas 2024/2690 3. panta 1. punkta izpratnē;" ; "tas atbilst vismaz vienai no šādām pazīmēm:" | the regulation puts no "un" or "vai" between 118.1 and 118.2; CERT.LV's page reads them as alternatives | ✅ |
| A loss threshold | Reg. 397, point 118.2.2 | "vismaz 500 000 euro vai 5 % apmērā no subjekta pēdējā finanšu gada apgrozījuma (atkarībā no tā, kura summa ir mazāka)" | at least EUR 500,000 or 5 % of the last year's turnover, whichever is smaller | ✅ |
| Disruption of a service, harm to a person | Reg. 397, points 118.2.3 and 118.2.5 | "kiberincidents rada vai var radīt kaitējumu fiziskās personas dzīvībai vai veselībai;" ; "kiberincidents ir izraisījis vai var izraisīt būtiskā vai svarīgā pakalpojuma saņemšanas vai IKT kritiskās infrastruktūras funkcionēšanas traucējumus;" | (and threats to public health or safety, state or economic security, reputation, foreign relations, civil liberties or fundamental rights; restricted or classified information; a cross-border incident) | ✅ |
| The incident log: within 24 hours of establishing the incident | Reg. 397, point 47 | "Subjekts nodrošina ziņu reģistrēšanu žurnālā ne vēlāk kā 24 stundu laikā no kiberincidenta konstatēšanas brīža" | the one instant the regulation names, for the log, not the reports | ✅ |
| The log keeps two times | Reg. 397, point 48.1 | "kiberincidenta konstatēšanas datumu un laiku, kā arī kiberincidenta datumu un laiku, ja tāds ir zināms" | when the incident was established, and when it happened | ✅ |
| CERT.LV: the channel | CERT.LV page | "Kiberincidenta konstatēšanas gadījumā paziņot CERT.LV:" ; "rakstot uz cert@cert.lv" ; "zvanot uz 24x7 tālruni 67085888" | by e-mail to cert@cert.lv, or by its 24x7 telephone | ✅ (authority page) |
| CERT.LV's final report deadline | CERT.LV page | "1 mēneša laikā pēc sākotnējā ziņojuma iesniegšanas" | the page lists the 24 and 72 hours with no instant | ✅ (authority page) |
| CERT.LV reads 118 as alternatives | CERT.LV page | "atbilst būtiska kiberincidenta definīcijai regulas 2024/2690 3. panta 1. punkta izpratnē" ; "vismaz vienai no šādām pazīmēm:" | the page sets "vai" between the two | ✅ (authority page) |
| The ministry's FAQ: both clocks from establishing the incident | NKDC FAQ (28.07.2026), Q47 | "agrīno brīdinājumu (24 stundu laikā pēc incidenta konstatēšanas)" ; "sākotnējo ziņojumu (72 stundu laikā pēc incidenta konstatēšanas" | guidance, not law | ✅ (guidance) |
| The ministry's FAQ: minor incidents only logged | NKDC FAQ, Q47 | "nav jāziņo CERT.LV, bet tie ir jāreģistrē organizācijas iekšējā incidentu pārvaldības sistēmā un/vai incidentu žurnālā" | guidance narrower than point 120 | ✅ (guidance) |
| The ministry's infographic: hours, no instant | Ministry of Defence infographic | "24 stundu laikā elektroniski jāiesniedz kiberincidentu novēršanas institūcijai CERT.LV agrīnais brīdinājums par nozīmīgo kiberincidentu" | | ✅ (guidance) |

What the regulation under Art. 34(7) says about the starting point: nothing.
Point 119 sends the entity back to the time limits of Art. 34(2), (3), (5) and
(6), which give hours and no instant, and the forms say only "IESNIEDZAMS 24
STUNDU LAIKĀ" and "IESNIEDZAMS 72 STUNDU LAIKĀ". The one instant the regulation names is the
incident log's (point 47): "no kiberincidenta konstatēšanas brīža", the moment
the incident is established, the act's own word in Art. 34(1). The ministry's
FAQ of 28 July 2026, published on NKDC's site, reads both clocks the same way
("pēc incidenta konstatēšanas"): guidance, not law.

Compared in Latvian: "konstatēt" is neither the directive's word for becoming
aware ("uzzinājušas", Art. 23(4)) nor its word for detecting ("atklāt", Art.
6(8): "novērst, atklāt, analizēt un ierobežot incidentu"), which the act's own
definition of incident handling also uses (Art. 1(13): "novērst, atklāt,
analizēt un ierobežot kiberincidentu"). It means establishing that there is an
incident. Nothing here moves DEFAULT, which counts from the detection time
recorded on the incident: the guidance's reading, and the one that can only be
early.

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Recorded as facts. Marketing never cites fines.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| NKDC supervises essential and important entities | Art. 41, point 1 | "attiecībā uz būtisko pakalpojumu un svarīgo pakalpojumu sniedzējiem, izņemot informācijas un komunikācijas tehnoloģiju kritisko infrastruktūru" | | ✅ |
| SAB supervises ICT critical infrastructure | Art. 41, point 2 | "attiecībā uz informācijas un komunikācijas tehnoloģiju kritisko infrastruktūru" | the Satversmes aizsardzības birojs | ✅ |
| A self-assessment report by 1 October | Reg. 397, points 141 and 142 | "subjekts, kura īpašumā un valdījumā nav nevienas A klases informācijas sistēmas, ja vien Nacionālais kiberdrošības centrs nav noteicis citādāk" ; "līdz attiecīgā kalendāra gada 1. oktobrim pašvērtējuma ziņojuma veidlapu (16. pielikums) iesniedz" | every year for ICT critical infrastructure or an entity with an A-class system, every three years otherwise; the first by 1 October 2025 (transitional point 12) | ✅ |
| Audit on suspicion or finding of a breach | Art. 44(1) | "ja ir aizdomas par kiberdrošības pārkāpumiem vai tie ir konstatēti" | by NKDC or SAB, or an external audit at the entity's cost (44(4)) | ✅ |
| Fines for an essential entity | Art. 46(1) | "piemērot būtisko pakalpojumu sniedzējam soda naudu līdz 10 miljoniem euro" ; "līdz diviem procentiem no būtisko pakalpojumu sniedzēja pēdējā finanšu gada kopējā neto apgrozījuma" | the percentage applies where that turnover exceeds EUR 500 million | ✅ |
| Fines for an important entity | Art. 46(2) | "piemērot svarīgo pakalpojumu sniedzējam soda naudu līdz septiņiem miljoniem euro" ; "līdz 1,4 procentiem no svarīgo pakalpojumu sniedzēja pēdējā finanšu gada kopējā neto apgrozījuma" | idem | ✅ |
| Only for a material non-compliance, of three kinds | Art. 46(5) | "1) subjekts neveic piemērotus un samērīgus tehniskos un organizatoriskos pasākumus kiberapdraudējuma vai kiberincidenta ietekmes mazināšanai;" ; "3) subjekts šajā likumā noteiktajā termiņā nepaziņo kompetentajai kiberincidentu novēršanas institūcijai par nozīmīgu kiberincidentu vai apzināti sniedz tai nepatiesu informāciju." | (and repeatedly refusing NKDC's or SAB's lawful requests for information, point 2) | ✅ |
| Periodic penalty payments | Art. 46(9) | "vienā reizē ne vairāk kā 10 000 euro" | | ✅ |
| Never for public bodies | Art. 46(12) | "Šo pantu nepiemēro tiešās vai pastarpinātās pārvaldes iestādēm, citām valsts institūcijām un atvasinātām publiskām personām." | | ✅ |
| Turnover and amounts by Cabinet regulation | Art. 46(4) | "Ministru kabinets nosaka kārtību, kādā nosakāms finanšu gada neto apgrozījums, no kura aprēķina soda naudu, un soda naudas apmēra noteikšanas kritērijus." | Regulation No. 252 of 29.04.2025, not read | ✅ |
| The ministry's FAQ says "worldwide"; the act does not | NKDC FAQ, Q10 | "līdz 2 % no uzņēmuma kopējā gada apgrozījuma pasaulē" | guidance departing from Art. 46(1), which counts the provider's own last-year net turnover | ✅ (guidance; the act governs) |
| The directive: worldwide turnover of the undertaking, whichever is higher | Directive (LV), Art. 34(4) | "no tā uzņēmuma kopējā globālā apgrozījuma iepriekšējā finanšu gadā, pie kura pieder būtiskā vienība, atkarībā no tā, kura summa ir lielāka" | of the worldwide turnover of the undertaking to which the essential entity belongs, whichever is higher | ✅ |

## Language: the act's words against the directive's Latvian text

<!-- meta: theme=statute,incident; type=reference; date=2026-10-30; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Source:** the act, OP 2024/128A.1, against the Latvian version of Directive
  (EU) 2022/2555, committed at `docs/research/eur-lex/nis2-lv.txt` (EUR-Lex,
  CELEX 32022L2555, read 2026-10-30).

| Term | Act (verbatim) | Directive, Latvian version (verbatim) | Same? |
|---|---|---|---|
| Essential entity | Art. 20: "Būtisko pakalpojumu sniedzējs šā likuma izpratnē ir:" | Art. 3(1): "Šajā direktīvā par būtiskām vienībām uzskata šādas vienības:" | no: provider of essential services |
| Important entity | Art. 21(1): "Svarīgo pakalpojumu sniedzējs šā likuma izpratnē ir persona, kas nav būtisko pakalpojumu sniedzējs un ir:" | Art. 3(2): "Šajā direktīvā par svarīgām vienībām uzskata tās I vai II pielikumā minēto veidu vienības" | no: provider of important services |
| Significant incident | Art. 34(2): "Nozīmīga kiberincidenta gadījumā" | Art. 23(1): "(būtisks incidents)" | no: nozīmīgs kiberincidents |
| 24 hours | Art. 34(2): "agrīno brīdinājumu par nozīmīgo kiberincidentu" | Art. 23(4)(a): "agrīnu brīdinājumu" | yes: agrīnais brīdinājums |
| 72 hours | Art. 34(3): "sākotnējo ziņojumu par nozīmīgo kiberincidentu" | Art. 23(4)(b): "paziņojumu par incidentu" | no: sākotnējais ziņojums, an initial report |
| On request | Art. 34(5): "starpposma ziņojumu" | Art. 23(4)(c): "starpposma ziņojumu par attiecīgajiem statusa atjauninājumiem" | yes |
| One month | Art. 34(5): "galaziņojumu par nozīmīgā kiberincidenta atrisināšanu" | Art. 23(4)(d): "galīgu ziņojumu" | no: galaziņojums |
| Still ongoing | Art. 34(6): "progresa ziņojumu par nozīmīgā kiberincidenta risināšanu" | Art. 23(4)(e): "progresa ziņojumu" | yes |
| The instant | Art. 34(1): "Konstatējot kiberincidentu" ; Art. 34(2) and (3): none | Art. 23(4)(a): "no brīža, kad uzzinājušas par būtisku incidentu" ; (b): "pēc tam, kad uzzinājušas par būtisko incidentu" | no instant in the act's clocks |
| Who is trained | Art. 25(5), point 3: the cybersecurity manager | Art. 20(2): "pārvaldības struktūru locekļiem" | no |

The act and Regulation No. 397 are published in Latvian only. Latvian is not a
product locale and Latvia has no incident config, so no product surface names
these acts in Latvian today. A Latvian config would carry `actStageNames` for
the 72-hour act ("sākotnējais ziņojums") and the final report
("galaziņojums"), which differ from the directive's Latvian words.

## Departures from the directive, read in Latvian

<!-- meta: theme=scoping,registration,incident,governance,supply-chain,sanctions; type=reference; date=2026-10-30; surfaces=docs; guard=none -->

- **Size is the act's own** (Art. 1(16), (25)), with no reference to the
  Recommendation. Since 18 June 2026 either financial figure makes an operator
  large, and below 250 employees only the money decides: an operator of 50 to
  249 employees with both figures under EUR 10 million is out, one under 50
  employees with either figure at EUR 10 million or more is in.
- **Every electronic communications undertaking is essential at any size**
  (Art. 20(3)), where the directive makes the small ones important (Art.
  3(1)(c) and 3(2)).
- **All public administration is essential at any size**: direct
  administration, other state institutions and derived public persons,
  municipalities among them (Art. 20(5), (6); Reg. 397, point 145), where the
  directive requires only central government and leaves the regional and
  local levels to the Member State (Art. 2(2)(f), 2(5)(a)).
- **National additions to the lists**: the public electronic media
  (essential, Art. 20(7)), security services (important, Art. 21(1)(2)(p)),
  maintainers of an education information system (important at any size, Art.
  21(1)(5)), and from 1 October 2026 companies, foundations and associations
  significant for national security (Art. 20(11) as amended).
- **Every incident goes to the CSIRT at once** (Art. 34(1)): a significant one
  on the forms of Regulation No. 397, any other in free form (point 120). An
  essential entity sends the same reports to the Satversmes aizsardzības
  birojs (point 121).
- **The 24 and 72 hours run from no stated instant** (Art. 34(2), (3)), where
  the directive counts from becoming aware; the 72-hour act is an initial
  report ("sākotnējais ziņojums"), not a notification.
- **Significance is national**: Regulation No. 397 adds six criteria to the
  Implementing Regulation's definition (point 118), among them a loss of EUR
  500,000 or 5 % of turnover, whichever is smaller.
- **Governance is the head's and a designated manager's** (Art. 25): the act
  words no approval, oversight or training duty for a management body; the
  yearly training it requires is the cybersecurity manager's, at the
  incident-response institution.
- **Measures by Cabinet regulation** (Art. 26; Regulation No. 397): four
  governance documents, security classes, and supplier rules that exclude
  Russian and Belarusian providers and states recognised as sponsors of
  terrorism (point 86), and limit essential entities' A-class systems to
  NATO, EU, EFTA or IP4 providers (point 101). Privileged ICT staff may not
  carry certain convictions (Art. 26¹).
- **Registration by self-assessment** within a month, on a signed form to the
  Ministry of Defence's e-address (Art. 22(1); Reg. 397, point 7), with the
  cybersecurity manager notified to NKDC and SAB within five working days (Art.
  25(2)) and a self-assessment report every one or three years (points 141,
  142).
- **Vulnerabilities**: an entity fixes a vulnerability reported through the
  incident-response institution within its term, at most 90 days, extendable
  to 180 (Art. 40(1), (2)).
- **Fines** only for a material non-compliance of three kinds (Art. 46(5));
  the percentage counts the provider's own last-year net turnover above EUR
  500 million (Art. 46(1), (2)), where the directive counts the worldwide
  turnover of the undertaking. Recorded as facts.

## Open items: not read, or not resolved

<!-- meta: theme=scoping,incident,framework,sanctions; type=lead; date=2026-10-30; surfaces=docs; guard=none -->

- **The instant of the 24 and 72 hours.** Neither the act nor Regulation No.
  397 states one; the ministry's FAQ reads "pēc incidenta konstatēšanas".
  Latvia stays on DEFAULT, which counts from detection; a Latvian incident
  config is a decision for later, and it should not count from awareness.
- **Incidents that are not significant.** Art. 34(1) and point 120 make every
  incident reportable, in free form for the minor ones; the ministry's FAQ says
  minor ones are only logged. The act and the regulation govern.
- **118.1 and 118.2**: the regulation does not say whether both must be met;
  CERT.LV reads them as alternatives.
- **likumi.lv** refused the connection on 2026-10-28 and 2026-10-30: the
  consolidated text was not read.
- **Not read**: Annexes 1 to 9, 15 and 16 of Regulation No. 397 in full;
  Regulation No. 252 of 29.04.2025 on fines; the regulations on centralised
  DDoS protection, the national internet exchange point and the data centres
  (29.09.2026); the auditor regulation due under Art. 44(2) by 1 December
  2026; the bill's annotation.
- **Product**: since 2026-10-30 the scoping engine applies the act's size test
  (`nationalSizeTestFor("LV")` in packages/regulatory-data/src/scoping.ts; the
  scope section above says how). Still open: whether group figures count, which
  the texts read do not settle (the engine takes the figures as entered); how
  the act counts its "nodarbinātie", against the questionnaire's annual work
  units; the full lists of Art. 20(8) and 21(1)(2), which this record glosses
  rather than quotes, so no sector carries a note on a type the act leaves out;
  and the types no question asks (Art. 20(7), (9), (11); 21(1)(2)(p), (3),
  (5)).
