# Lithuania — legal sources (verified)

## Kibernetinio saugumo įstatymas Nr. XII-1428, as worded by Nr. XIV-2902 and amended in 2026: read in full (2026-11-12)

<!-- meta: theme=statute; type=reference; date=2026-11-12; surfaces=data,mcp; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts,apps/mcp/test/tools.test.ts -->

- **Official citation:** Lietuvos Respublikos kibernetinio saugumo įstatymo Nr.
  XII-1428 pakeitimo įstatymas Nr. XIV-2902, adopted 2024-07-11, signed by the
  President (Gitanas Nausėda), Teisės aktų registras (TAR) 2024-13535, published
  2024-07-24. Its Art. 1 sets out the whole Cybersecurity Law No. XII-1428 in new
  wording (38 articles in seven chapters, three annexes); its own Arts. 2 and 3
  carry the entry into force, the transition and an ex post evaluation.
  Amended by Law No. XV-894 of 2026-05-12 (Art. 31(13), in force 2026-06-30)
  and Law No. XV-1076 of 2026-06-25 (Arts. 2, 11, 12, 13, 19, 23, 28, 30, 31, 38
  and Annexes 2 and 3).
- **Implementing act read with it:** Government Resolution No. 945 of
  2024-11-06 (TAR 2024-19589, published 2024-11-11), which restates Resolution
  No. 818 of 2018-08-13 "Dėl Lietuvos Respublikos kibernetinio saugumo įstatymo
  įgyvendinimo" and approves six documents, among them the national incident
  management plan and the **Kibernetinio saugumo reikalavimų aprašas** (the
  national cybersecurity requirements).
- **How the texts were reached:** e-tar.lt, the Seimas register and nksc.lt
  answer every scripted request with a Cloudflare challenge, which is not
  bypassed. The DOCX files were downloaded from e-tar.lt by hand, in a browser, on
  2026-11-11/12; their text was extracted (the document XML read in Python,
  nothing executed) and is committed under `docs/research/national/lt/`. The
  signed scan of XIV-2902 (63 pages, image only) was used to cross-check pages
  14, 15, 18, 23, 24 and 63. Three acts notified with it (XIV-2904, XIV-2905,
  XIV-2907) were read from the copies EUR-Lex serves for the national measures,
  committed in the same folder. The directive's Lithuanian text is committed at
  `docs/research/eur-lex/nis2-lt.txt`.
- **Official URLs:** https://www.e-tar.lt/portal/lt/legalAct/1261a35049bd11efbdaea558de59136c
  (XIV-2902) ; https://www.e-tar.lt/portal/lt/legalAct/c8e268a0a00011efa605b9842742bf37
  (Resolution No. 945), both as EUR-Lex gives them ;
  https://eur-lex.europa.eu/legal-content/EN/NIM/?uri=CELEX:32022L2555
  (the national measures notified for the directive).
- **Retrieved + read:** 2026-11-12, every article of the act and of both
  amending laws, every point of Resolution No. 945 and of the documents it
  approves; the 480 names of the secure network's user list by group only.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| A restatement, not an amendment of some articles | XIV-2902, Art. 1 | "Pakeisti Lietuvos Respublikos kibernetinio saugumo įstatymą Nr. XII-1428 ir jį išdėstyti taip:" | the 2014 law is replaced by the text that follows, under the same number | ✅ |
| In force on 2024-10-18 | XIV-2902, Art. 2(1) | "Šis įstatymas, išskyrus šio straipsnio 2 dalį, įsigalioja 2024 m. spalio 18 d." | except para. 2 (implementing acts by 2024-10-17) | ✅ |
| Transposes the directive | Annex 3, point 3; Art. 1(6) | "Šio įstatymo nuostatos suderintos su Europos Sąjungos teisės aktais, nurodytais šio įstatymo 3 priede." ; "Europos Parlamento ir Tarybos direktyva (ES) 2022/2555" | | ✅ |
| NKSC identifies the entities by 2025-04-17 | XIV-2902, Art. 2(3) | "Nacionalinis kibernetinio saugumo centras iki 2025 m. balandžio 17 d. identifikuoja" ; "ir juos įtraukia į Kibernetinio saugumo informacinę sistemą" | | ✅ |
| Published on 2024-07-24 | EUR-Lex, national measure NIM:202404392 | "Official publication: Teisės aktų registras ; Number: 2024-13535 ; Publication date: 2024-07-24" | | ✅ (EUR-Lex record of the notified measure) |
| Signed by the President | signed scan, page 63 | "Skelbiu šį Lietuvos Respublikos Seimo priimtą įstatymą." ; "Respublikos Prezidentas" ; "Gitanas Nausėda" | | ✅ |
| XV-894: one paragraph, in force 2026-06-30 | XV-894, Arts. 1 and 2(1) | "Pakeisti 31 straipsnio 13 dalį" ; "Šis įstatymas įsigalioja 2026 m. birželio 30 d." | | ✅ |
| XV-1076 sets no date of its own | XV-1076, Arts. 1 to 13 | "13 straipsnis. Įstatymo taikymas" | the last article is on application; no article on entry into force | ✅ |
| A law without its own date takes effect on signature and publication | Constitution, Art. 70 | "Seimo priimti įstatymai įsigalioja po to, kai juos pasirašo ir oficialiai paskelbia Lietuvos Respublikos Prezidentas, jeigu pačiais įstatymais nenustatoma vėlesnė įsigaliojimo diena." | the date XV-1076 was published was not on the file read (open items) | ✅ (Seimas copy of the Constitution, lrs.lt) |
| Infringement case closed | Commission register, INFR(2024)0280 | "27/11/2024" formal notice ; "12/02/2025" "Closing of the case" ; "activeInfringementCase": "No" | read 2026-10-28 | ✅ |

The tracker row (`packages/regulatory-data/src/nis2-transposition-status.ts`)
was provisional until this reading, and said the act had not been read. Since
2026-11-12 it carries the act's name, the publication and entry-into-force
dates, the gazette and the closed case, and the MCP `scope_check` names the law
for a Lithuanian organisation, as for every row read from its text. It stays
tier `provisional`, like every country without a native framework.

## Sources read on 2026-11-12, and what EUR-Lex lists

<!-- meta: theme=statute; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

| Text | Where | Read |
|---|---|---|
| Law No. XIV-2902 of 2024-07-11 (the act in new wording, Arts. 1 to 38, Annexes 1 to 3, and its own Arts. 2 and 3) | `docs/research/national/lt/XIV-2902.txt`; signed scan, pages 14, 15, 18, 23, 24, 63 | in full |
| Law No. XV-894 of 2026-05-12 | `docs/research/national/lt/XV-894.txt` | in full |
| Law No. XV-1076 of 2026-06-25 | `docs/research/national/lt/XV-1076.txt` | in full |
| Government Resolution No. 945 of 2024-11-06 and its six approved documents: the national incident management plan, the special-criteria methodology, the Kibernetinio saugumo reikalavimų aprašas, the enforcement procedure, the secure network's user list, the secure network's fee criteria | `docs/research/national/lt/nutarimas-945-2024-11-06.txt`; the tables parsed cell by cell from the DOCX | in full, the user list by group; the plan's Annexes 1 to 4 are not in the file |
| Government Resolution No. 240 of 2026-04-08 (submits the bill that became XV-1076) | `docs/research/national/lt/nutarimas-240-2026-04-08.txt` | in full; preparatory |
| Law No. XIV-2904 of 2024-07-11 (Administrative Offences Code, Arts. 479, 480, 589) | EUR-Lex, NIM:202404399; `docs/research/national/lt/XIV-2904.txt` | in full |
| Law No. XIV-2905 (Electronic Communications Law) | EUR-Lex, NIM:202404395; `docs/research/national/lt/XIV-2905.txt` | in full |
| Law No. XIV-2907 of 2024-07-11 (trust services law, Art. 4) | EUR-Lex, NIM:202404394; `docs/research/national/lt/XIV-2907.txt` | in full |
| Law No. XIV-3048 (Crisis Management and Civil Protection Law, critical entities) | EUR-Lex, NIM:202500671 | its references to the Cybersecurity Law only |
| Directive (EU) 2022/2555, Lithuanian text | EUR-Lex, CELEX 32022L2555; `docs/research/eur-lex/nis2-lt.txt` | Arts. 3, 6, 20, 23, compared |
| Constitution, Art. 70 | https://www.lrs.lt/home/Konstitucija/Konstitucija.htm | the article |

**Other amending acts.** EUR-Lex's list of national measures for the directive
(read 2026-11-12) counts 22 for Lithuania. The only act among them that amends
the Cybersecurity Law is XIV-2902; the others are XIV-2904, XIV-2905, XIV-2907,
XIV-3048, Resolution No. 945, and consolidated versions of laws the act refers
to. The list does not carry XV-894 or XV-1076, which the maintainer downloaded from
e-tar.lt: Lithuania has not notified the 2026 amendments, or EUR-Lex has not
recorded them. So the list cannot show whether a later amendment exists, and
the consolidated text on e-tar.lt, which would, is not readable by script.
Resolution No. 240 announced a bill amending Annex 2 only; XV-1076 as adopted
amends Annexes 2 and 3.

## The 2026 amendments, provision by provision

<!-- meta: theme=statute,scoping,registration,sanctions; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

The law in force is XIV-2902's text with these changes. Every later section
quotes a provision as amended.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Fine decisions enforced through the tax administration law too | XV-894, Art. 1 (Art. 31(13)) | "„13. Nacionalinio kibernetinio saugumo centro sprendimas dėl baudos skyrimo yra vykdomasis dokumentas, vykdomas Lietuvos Respublikos mokesčių administravimo įstatyme ir Civilinio proceso kodekse nustatyta tvarka.“" | the paragraph is replaced whole, so the 2024 wording's three-year limit for enforcement is gone; decisions adopted and final by 2026-06-29 are enforced under the provisions in force until then (Art. 2(2)) | ✅ |
| Root name server renamed | XV-1076, Art. 1(1) (Art. 2(20)) | "Šakninis domenų vardų serveris" | | ✅ |
| New terms by reference | XV-1076, Art. 1(2) (Art. 2(27)) | "Sąvokos „pardavimo grynosios pajamos“, „įmonės finansinių ataskaitų rinkinys“, „įmonių grupės konsoliduotųjų finansinių ataskaitų rinkinys“" ; "Sąvoka „apdraustieji asmenys“" | net sales revenue, financial statements, consolidated group statements, insured persons | ✅ |
| The size test: ir (and) becomes ir (ar) (and/or), with abi (both) | XV-1076, Art. 2(1) (Art. 11(3)(1)) | "viršija vidutinių įmonių darbuotojų skaičių ir (ar) abi finansinius duomenis apibrėžiančias ribas, nustatytas Smulkiojo ir vidutinio verslo plėtros įstatyme;" | 2024: "viršija vidutinių įmonių darbuotojų skaičių ir finansinius duomenis apibrėžiančias ribas" | ✅ |
| The same for the important classes | XV-1076, Art. 2(3), (4) (Art. 11(4)(1), (2)) | "viršija mažų įmonių darbuotojų skaičių ir (ar) abi finansinius duomenis apibrėžiančias ribas" ; "tačiau neviršija vidutinių įmonių darbuotojų skaičiaus ir bent vienos iš finansinių duomenų ribos" | | ✅ |
| How headcount is counted | XV-1076, Art. 2(5) (new Art. 11(8)) | "vidutinis metinis subjekto darbuotojų skaičius nustatomas remiantis Valstybinio socialinio draudimo fondo valdybos prie Socialinės apsaugos ir darbo ministerijos turimais duomenimis apie apdraustuosius asmenis" | the State Social Insurance Fund Board's data; where it differs from the SME law's method (Art. 3(7)), the entity's own figures computed by that method prevail | ✅ |
| How the money is counted, group accounts included | XV-1076, Art. 2(6) (new Art. 11(9)) | "pagal Juridinių asmenų registro informacinės sistemos duomenų tvarkytojui pateiktą įmonės metinių finansinių ataskaitų rinkinį ar įmonių grupės metinių finansinių konsoliduotųjų ataskaitų rinkinį, kai jų teikimas privalomas, arba pagal mokesčių administratoriaus turimus duomenis" | annual revenue and balance-sheet assets from the filed accounts, the consolidated group accounts where filing them is mandatory, or the tax administrator's data | ✅ |
| Main establishment: registration in Lithuania no longer decides | XV-1076, Art. 3 (Art. 12(2)) | "Laikoma, kad šio straipsnio 1 dalies 3 punkte nurodyta pagrindinė buveinė yra Lietuvos Respublikoje, jeigu su kibernetinio saugumo rizikos valdymo priemonėmis susiję sprendimai yra priimami Lietuvos Respublikoje." | the 2024 first sentence (registered or established in Lithuania) is gone | ✅ |
| Trust service providers become special entities | XV-1076, Art. 4 (Art. 13(3)(1)) | "socialinių tinklų paslaugų platformų paslaugų teikėjas ir patikimumo užtikrinimo paslaugų teikėjas (toliau – specialusis subjektas)" | a special entity applies only the Commission's implementing acts (Art. 14(4)) | ✅ |
| KSIS users (naudotojai) become members (nariai) | XV-1076, Art. 5 (Art. 19) | "(toliau – Kibernetinio saugumo informacinės sistemos nariai)" | | ✅ |
| The competence community rewritten | XV-1076, Art. 6 (Art. 23) | "23 straipsnis. Kibernetinio saugumo kompetencijos bendruomenė" | the European competence centre registers members, the national coordination centre assesses (Regulation (EU) 2021/887) | ✅ |
| Enforcement procedure renamed | XV-1076, Arts. 7, 8 (Arts. 28(6), 30(1)) | "Vyriausybės nustatyta vykdymo užtikrinimo priemonių taikymo kibernetinio saugumo subjektams tvarka" | the title Resolution No. 945 already used | ✅ |
| Fine decisions cite the Public Administration Law | XV-1076, Art. 9 (Art. 31(9)) | "Jame nurodoma Viešojo administravimo įstatymo 10 straipsnio 5 dalyje nurodyta informacija" | | ✅ |
| Data centres for special-purpose institutions | XV-1076, Art. 10 (Art. 38(1)) | "(toliau – specialius tikslus įgyvendinančios institucijos)" | secure-network users; no entity duty | ✅ |
| Annex 2, point 5.6.1 corrected | XV-1076, Art. 11 | "C skirsnio 30 skyriuje" | the 2024 text repeated "29 skyriuje" (motor vehicles) for other transport equipment | ✅ |
| Annex 3: the Cybersecurity Act as amended | XV-1076, Art. 12 | "su pakeitimais, padarytais 2024 m. gruodžio 19 d. Europos Parlamento ir Tarybos reglamentu (ES) 2025/37" | | ✅ |

Read against the Recommendation's logic, the 2026 wording of Art. 11(3)(1) is
the directive's test: above the medium-enterprise headcount, or above both
financial ceilings. The 2024 wording ("darbuotojų skaičių ir finansinius
duomenis") could be read as requiring both the headcount and the money. The
ceilings themselves are in the SME Development Law, which was not read.

## Scope: two classes, registration as the condition, the size test, the types in scope at any size

<!-- meta: theme=scoping; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

Four facts decide real cases. **Status and duties start with registration** in
the Cybersecurity Information System (KSIS), not with meeting the criteria.
**The size test refers to the national SME Development Law**, not to the
Recommendation, and since XV-1076 has the Recommendation's and/or shape. **An
Annex 2 type is important only if that activity brings more than half of the
entity's annual revenue.** **Central, regional and municipal administration
entities are essential.**

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Status on meeting a criterion and being registered; two classes | Art. 11(1) | "Kibernetinio saugumo subjekto statusą įgyja ir Kibernetinio saugumo informacinėje sistemoje registruojami subjektai, atitinkantys bent vieną iš šio straipsnio 3–5 dalyse nurodytų bendrųjų ar specialiųjų kibernetinio saugumo subjektų identifikavimo kriterijų" ; "esminius kibernetinio saugumo subjektus (toliau – esminiai subjektai) ir svarbius kibernetinio saugumo subjektus (toliau – svarbūs subjektai)" | entities meeting a general or special criterion, and operating network and information systems for those services, are registered and become essential or important | ✅ |
| Duties only from registration | Art. 11(2) | "Kibernetinio saugumo subjektai įgyja pareigas, nustatytas kibernetinio saugumo subjektams, tik nuo jų įregistravimo Kibernetinio saugumo informacinėje sistemoje." | and they lose them on deregistration (Art. 13(10)) | ✅ |
| Essential: Annex 1 above medium size | Art. 11(3)(1), as amended | "subjektas teikia paslaugas ir (ar) vykdo veiklą šio įstatymo 1 priede nurodytuose sektoriuose ir viršija vidutinių įmonių darbuotojų skaičių ir (ar) abi finansinius duomenis apibrėžiančias ribas, nustatytas Smulkiojo ir vidutinio verslo plėtros įstatyme;" | | ✅ |
| Essential at any size: qualified trust services, TLD registries, DNS | Art. 11(3)(2), as amended | "teikia kvalifikuotas patikimumo užtikrinimo paslaugas, aukščiausio lygio domeno vardų registravimo paslaugas ar domenų vardų sistemos (toliau – DNS) paslaugas, išskyrus šakninių domenų vardų serverių operatorius;" | | ✅ |
| Essential: medium public e-communications | Art. 11(3)(3) | "teikia viešąsias elektroninių ryšių tinklų ar viešąsias elektroninių ryšių paslaugas ir yra laikomas vidutine įmone pagal Smulkiojo ir vidutinio verslo plėtros įstatymą;" | large ones are essential under (3)(1); small and micro ones important under (4)(4) | ✅ |
| Essential: critical entities | Art. 11(3)(4) | "subjektas Krizių valdymo ir civilinės saugos įstatymo nustatyta tvarka yra pripažintas ypatingos svarbos subjektu;" | the Government's list of critical entities (XIV-3048) | ✅ |
| Essential: central, regional and municipal administration | Art. 11(3)(5) | "subjektas šio įstatymo 1 priede nurodytame viešojo administravimo sektoriuje teikia paslaugas ir (ar) vykdo veiklą ir yra laikomas centriniu valstybinio administravimo subjektu ar regioninio administravimo subjektu, ar savivaldybių administravimo subjektu pagal Viešojo administravimo įstatymą;" | "regioninio" (genitive) is the act's own slip, on the signed scan too (page 14); the Public Administration Law, which defines these entities, was not read | ✅ |
| Annex 1, public administration | Annex 1, sector 10 | "10.1.1. Valstybinio administravimo subjektai." ; "10.1.2. Regioninio administravimo subjektai ir savivaldybių administravimo subjektai." | identification by the Ministry of the Interior | ✅ |
| Essential: critical or important state information resources | Art. 11(3)(6) | "subjektas Valstybės informacinių išteklių valdymo įstatymo nustatyta tvarka valdo ir (ar) tvarko ypatingos svarbos ir (ar) svarbius valstybės informacinius išteklius;" | | ✅ |
| Essential: national security | Art. 11(3)(7) | "subjektas yra laikomas nacionaliniam saugumui užtikrinti svarbia įmone arba subjekto valdoma ir (ar) tvarkoma tinklų ir informacinė sistema yra įrašyta į nacionaliniam saugumui užtikrinti svarbių įrenginių ir turto sąrašą." | | ✅ |
| Important: Annex 2 above small size, more than half of the revenue | Art. 11(4)(1), as amended | "viršija mažų įmonių darbuotojų skaičių ir (ar) abi finansinius duomenis apibrėžiančias ribas, nustatytas Smulkiojo ir vidutinio verslo plėtros įstatyme, ir šio subjekto šiame punkte nurodytų teikiamų paslaugų ir (ar) vykdomos veiklos metinių pajamų suma viršija 50 procentų visų subjekto metinių pajamų;" | | ✅ |
| Important: Annex 1, medium | Art. 11(4)(2), as amended | "viršija mažų įmonių darbuotojų skaičių ir (ar) abi finansinius duomenis apibrėžiančias ribas, tačiau neviršija vidutinių įmonių darbuotojų skaičiaus ir bent vienos iš finansinių duomenų ribos" | no revenue-share test for Annex 1 | ✅ |
| Important at any size: non-qualified trust services | Art. 11(4)(3) | "subjektas teikia nekvalifikuotas patikimumo užtikrinimo paslaugas šio įstatymo 1 priede nurodytame skaitmeninės infrastruktūros sektoriuje ir yra laikomas vidutine, maža ar labai maža įmone" | a large one is essential under (3)(1) | ✅ |
| Important: small and micro public e-communications | Art. 11(4)(4) | "yra laikomas maža ar labai maža įmone pagal Smulkiojo ir vidutinio verslo plėtros įstatymą;" | | ✅ |
| Important at any size: state information resources, domain registration, hosting | Art. 11(4)(5) to (7) | "5) subjektas valdo ir (ar) tvarko valstybės informacinius išteklius;" ; "6) subjektas teikia domenų vardų registravimo paslaugas;" ; "7) subjektas teikia elektroninės informacijos prieglobos paslaugas." | hosting providers are also an Annex 2 type (6.1.4) | ✅ |
| Special criteria | Art. 11(5) | "Specialieji kibernetinio saugumo subjektų identifikavimo kriterijai:" | sole provider; impact on public safety, security or health; systemic risk; critical for a sector; territorial administration; impact on an essential entity's service; vital state functions and mobilisation tasks; critical research | ✅ |
| A Government methodology; (5) essential only, (8) important only | Art. 11(6) | "Pagal šio straipsnio 5 dalies 5 punkte nurodytą kriterijų identifikuojami tik esminiai subjektai, o pagal šio straipsnio 5 dalies 8 punkte nurodytą kriterijų identifikuojami tik svarbūs subjektai." | Resolution No. 945, point 1.2 | ✅ |
| Both classes met: essential | Art. 11(7) | "laikoma, kad subjektas yra esminis subjektas nepriklausomai nuo jo atitikties svarbaus subjekto kriterijams" | | ✅ |
| Territorial state administration, by threshold | Methodology, Annex, row 5 | "Teritorinis valstybinio administravimo subjektas, kuris valdo ir (ar) tvarko TIS, kurios sutrikimas galėtų sukelti paslaugos nepasiekiamumą ilgiau nei 24 valandas ar daugiau nei 145 tūkst. gyventojų, ar visos savivaldybės gyventojams" | essential; no important value | ✅ |
| A supplier to an essential entity, by contract length | Methodology, Annex, row 6 | "Subjektas teikia TIS (ar jų dalies) nuomos paslaugą esminiam subjektui, numatyta paslaugos teikimo trukmė yra ilgesnė nei 12 mėn." | essential; a service over 12 months giving access to an essential entity's systems is essential, one giving the right to service them is important | ✅ |
| Silence confirms the data | Methodology, point 9 | "Pasibaigus dešimties darbo dienų terminui ir nesulaukus subjekto atsakymo, laikoma, kad subjektas sutinka, kad pateikti duomenys teisingi." | the responsible institution asks the entity to confirm within ten working days | ✅ |
| Out: intelligence institutions; most credit unions | Art. 1(2) | "Šis įstatymas, išskyrus VII skyrių, netaikomas žvalgybos institucijoms. Šis įstatymas netaikomas kredito unijoms, išskyrus kredito unijas, kurios paslaugoms teikti ar veiklai vykdyti valdo ir (ar) tvarko tinklų ir informacines sistemas nepriklausomai nuo centrinių kredito unijų." | | ✅ |
| Sector acts at least equivalent displace Arts. 14, 15 and 18 | Art. 1(3) | "Šio įstatymo 14 straipsnio, 15 straipsnio ir 18 straipsnio 1 dalies 1 ir (ar) 2 punktų nuostatos netaikomos kibernetinio saugumo subjektams, jeigu jiems taikomuose Europos Sąjungos teisės aktuose yra keliami reikalavimai" | the Government approves the list of such acts (Art. 1(5)) | ✅ |
| E-communications in Lithuania's jurisdiction where they serve it | Art. 12(1)(4) | "viešųjų elektroninių ryšių tinklų ir (ar) viešųjų elektroninių ryšių paslaugų teikėjai, teikiantys šias paslaugas Lietuvos Respublikoje." | the digital providers of Art. 12(1)(3) by main establishment | ✅ |

Reading, not a quotation:

```
IN SCOPE of the Kibernetinio saugumo įstatymas (Art. 11 as amended by XV-1076; Annexes 1 and 2):
  status and duties only once registered in KSIS                         (11(1), 11(2), 13(10))
  ABOVE_MEDIUM = above the SME Development Law's medium headcount, or above both its financial ceilings
  ABOVE_SMALL  = above its small headcount, or above both its financial ceilings
  Annex 1 type AND ABOVE_MEDIUM                                          -> essential (11(3)(1))
  Annex 1 type AND ABOVE_SMALL AND NOT ABOVE_MEDIUM                      -> important (11(4)(2))
  Annex 2 type AND ABOVE_SMALL AND Annex 2 revenue > 50 % of all revenue -> important (11(4)(1))
  QTSP | TLD registry | DNS (not root name servers)                      -> essential, any size (11(3)(2))
  public e-comms: medium -> essential (11(3)(3)); small, micro -> important (11(4)(4))
  non-qualified TSP: medium, small, micro                                -> important (11(4)(3))
  critical entity (Crisis Management and Civil Protection Law)           -> essential (11(3)(4))
  central | regional | municipal administration entity                   -> essential (11(3)(5))
  critical or important state information resources                      -> essential (11(3)(6))
  enterprise important to national security, or listed system            -> essential (11(3)(7))
  any state information resources | domain registration | hosting        -> important, any size (11(4)(5)-(7))
  special criteria (11(5)) by the Government methodology                 -> essential or important (11(6))
EXCEPT intelligence institutions (but ch. VII); credit unions not running their systems independently (1(2))
BOTH classes met -> essential (11(7))
```

The ceilings and the counting method of Art. 3(7) are in the SME Development
Law, which was not read: no figure is recorded here. Group figures count where
consolidated group accounts must be filed (Art. 11(9)); which entities that
covers is the accounting law's question, also not read.

What the product does with it (2026-11-12): nothing national. Lithuania has no
`nationalSizeTestFor` and no `nationalPublicAdministrationFor` entry in
`packages/regulatory-data/src/scoping.ts`, so the engine applies the
Recommendation and the directive's reading of public administration.
`packages/regulatory-data/test/national-size-tests.test.ts` pins Lithuania
among the countries "with no rule", and a Lithuanian regional or municipal
entity gets "important" where Art. 11(3)(5) makes it essential. That is the
first thing a Lithuanian scoping layer must change (open items).

Since the same day, `nationalPublicAdministrationFor("LT")` applies Art.
11(3)(5): a central, regional or municipal administration entity is essential
at any size, and the sentence adds that status and duties start with
registration (Art. 11(1), (2)). The public scope checker runs the same engine,
and the auto-scoping prompt states the same rule. The size test itself stays
the Recommendation's in the engine, the SME Development Law being unread.

## Registration: KSIS, NKSC, and no deadline in the act

<!-- meta: theme=registration; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| A cybersecurity entity is a registered one | Art. 2(13) | "Kibernetinio saugumo subjektas – subjektas, registruotas Kibernetinio saugumo informacinėje sistemoje." | | ✅ |
| The register lives in KSIS | Art. 13(2) | "Kibernetinio saugumo subjektų registras tvarkomas Kibernetinio saugumo informacinėje sistemoje." | | ✅ |
| What the register holds | Art. 13(3), points 3 to 7 | "kontaktiniai duomenys (elektroninio pašto adresas, ryšio numeris);" ; "5) kibernetinio saugumo subjekto naudojami interneto protokolo (IP) adresai;" ; "7) kibernetinio saugumo subjekto paslaugų teikimui ar veiklai reikšmingos tinklų ir informacinės sistemos;" | with the name, code, legal form, economic activities, address, services, countries served, sector and subsector | ✅ |
| The entity gives its data, as the Minister's KSIS regulations say | Art. 13(4) | "Subjektas, atitinkantis šio įstatymo 11 straipsnio 3–5 dalyse nustatytus kibernetinio saugumo subjektų identifikavimo kriterijus, Kibernetinio saugumo informacinės sistemos duomenų tvarkytojui pateikia duomenis, nurodytus krašto apsaugos ministro tvirtinamuose Kibernetinio saugumo informacinės sistemos nuostatuose." | no deadline in the act; the regulations were not read | ✅ |
| NKSC registers and deregisters | Art. 13(5) | "Kibernetinio saugumo subjektus registruoja ir išregistruoja Kibernetinio saugumo informacinės sistemos duomenų tvarkytojas" | NKSC is the system's processor (Art. 19(2)); sectors by the economic activity classification | ✅ |
| The ministries of the annexes confirm | Art. 13(6) | "Šio įstatymo 1 ir 2 prieduose nurodytos institucijos, atsakingos už kibernetinio saugumo subjektų identifikavimą, patvirtina" | | ✅ |
| Deregistration within 20 working days | Art. 13(8) | "per 20 darbo dienų nuo dienos, kai Kibernetinio saugumo informacinės sistemos duomenų tvarkytojas gauna informacijos, kad kibernetinio saugumo subjektas nebeatitinka" | | ✅ |
| Registration decisions can be appealed | Art. 13(9) | "Subjektai turi teisę skųsti sprendimą juos registruoti arba jų neregistruoti" | | ✅ |
| NKSC identified the entities by 2025-04-17 | XIV-2902, Art. 2(3) | "iki 2025 m. balandžio 17 d. identifikuoja" | | ✅ |
| An entity may submit itself | Methodology, point 15 | "Subjekto, atitinkančio specialiuosius kriterijus ir  savarankiškai pateikusio duomenis KSIS duomenų tvarkytojui KSIS nuostatuose nustatyta tvarka, duomenys vertinami" | said for the special criteria | ✅ |
| Implementation data to NKSC through KSIS | Art. 14(3) | "pateikti šiuose nuostatuose nurodytus duomenis apie kibernetinio saugumo rizikos valdymo priemonių įgyvendinimą" | | ✅ |
| Documents notified to KSIS within five working days | Aprašas, points 5, 13, 29 | "ne vėliau kaip per 5 darbo dienas nuo šio dokumento (-ų) patvirtinimo ir (ar) pakeitimo dienos" | the policy's approval data, the risk report and plan's approval data and results, the continuity test report's approval data | ✅ |
| Responsible persons notified through KSIS | Aprašas, point 17 | "NKSC būtų informuotas apie paskirtus už kibernetinį saugumą atsakingus asmenis per KSIS" | | ✅ |
| Information-sharing arrangements notified within 20 working days | Art. 19(4), as amended | "kibernetinio saugumo subjektai privalo pranešti Nacionaliniam kibernetinio saugumo centrui apie tokių susitarimų sudarymą, taip pat apie pasitraukimą iš tokių susitarimų per 20 darbo dienų" | | ✅ |

Whether the channel is live for a self-submitting entity, its form and any
deadline are in the KSIS regulations and on NKSC's pages, neither readable by
script. The tracker keeps `registrationLive` false for that reason, as for
Romania.

## The authority, and who receives the reports

<!-- meta: theme=statute,incident; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

The act never uses the word "CSIRT" and designates no single point of contact.
Its one mention of an incident response service ("reagavimo į kibernetinius
incidentus tarnybos", Art. 1(4)(3), (4)) is in the equivalence test for sector
acts and names no body. It gives NKSC the incident-management, early-warning,
monitoring, inspection, enforcement and certification functions, and makes it
the recipient of every report.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Policy: the Ministry of National Defence | Art. 4(2) | "Kibernetinio saugumo politiką formuoja, jos įgyvendinimą organizuoja, kontroliuoja ir koordinuoja Lietuvos Respublikos krašto apsaugos ministerija." | | ✅ |
| Implementation: NKSC, the police, the data protection inspectorate | Art. 4(3) | "Kibernetinio saugumo politiką įgyvendina Nacionalinis kibernetinio saugumo centras, Lietuvos policija ir Valstybinė duomenų apsaugos inspekcija." | | ✅ |
| NKSC | Art. 7(1) | "Nacionalinis kibernetinio saugumo centras yra įstaiga prie Krašto apsaugos ministerijos." | National Cyber Security Centre under the Ministry of National Defence | ✅ |
| It manages incidents under the national plan | Art. 7(2)(3) | "valdo kibernetinius incidentus Vyriausybės tvirtinamo nacionalinio kibernetinių incidentų valdymo plano nustatyta tvarka;" | | ✅ |
| It monitors compliance with the measures | Art. 7(2)(16) | "atlieka kibernetinio saugumo subjektų atitikties kibernetinio saugumo rizikos valdymo priemonėms stebėseną;" | | ✅ |
| Every report goes to NKSC | Art. 18(1) | "Kibernetinio saugumo subjektai privalo pranešti Nacionaliniam kibernetinio saugumo centrui apie:" | | ✅ |
| Through the Platform, a KSIS subsystem | Plan, point 10 | "Kibernetinio saugumo subjekto Saugumo operacijų centras apie kibernetinius incidentus informuoja NKSC, juos registruodamas Kibernetinio saugumo informacinės sistemos posistemyje – Nacionalinėje kibernetinių incidentų valdymo platformoje (toliau – Platforma)." | the entity's security operations centre registers the incident on the National Cyber Incident Management Platform | ✅ |
| Otherwise a form, the website, an e-mail address or the telephone | Plan, point 11 | "NKSC informuoja užpildydamas formą Platformoje, NKSC interneto svetainėje, NKSC nurodytu elektroninio pašto adresu arba telefonu." | when the incident prevents reporting automatically | ✅ |
| The Platform passes it to the police and the inspectorate | Plan, point 19 | "naudojantis Platforma, pateikiama atitinkamai Lietuvos policijai ir (ar) Valstybinei duomenų apsaugos inspekcijai" | possible crime, personal data breach | ✅ |
| Trust service providers' reports forwarded to RRT | Art. 20(2)(5) | "nedelsdamas, bet ne vėliau kaip per 24 valandas informuoja Ryšių reguliavimo tarnybą apie gautus patikimumo užtikrinimo paslaugų teikėjų pranešimus apie kibernetinius incidentus;" | NKSC forwards; the provider reports to NKSC | ✅ |
| E-communications outages also to RRT | Electronic Communications Law, Art. 51(4), as worded by XIV-2905 | "viešųjų elektroninių ryšių tinklų ir (arba) viešųjų elektroninių ryšių paslaugų teikėjas privalo nedelsdamas apie šį įvykį informuoti Ryšių reguliavimo tarnybą jos nustatyta tvarka ir sąlygomis" | an interruption of public e-communications services meeting RRT's criteria: a continuity duty, separate from Art. 18 | ✅ |
| Ministries identify, NKSC supervises | Annexes 1 and 2, column 4; Art. 26(1) | "Institucija, atsakinga už identifikavimą" ; "Nacionalinis kibernetinio saugumo centras atlieka kibernetinio saugumo subjektų atitikties šio įstatymo reikalavimams, išskyrus nustatytus šio įstatymo VI ir VII skyriuose, patikrinimus." | no sectoral supervisor under the act | ✅ |
| Lietuvos bankas: the ECB is consulted first | Art. 20(2)(8) | "prieš vykdydamas šio įstatymo 26 straipsnyje nurodytus patikrinimus ar taikydamas šio įstatymo 28 straipsnyje nurodytas vykdymo užtikrinimo priemones Lietuvos banko atžvilgiu, konsultuojasi su Europos Centriniu Banku" | | ✅ |

## Incident reporting: from becoming aware ("nuo sužinojimo"), to NKSC, every incident

<!-- meta: theme=incident; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Significant incidents, and every other incident affecting the activity | Art. 18(1)(1), (2) | "1) didelį kibernetinį incidentą" ; "2) šio straipsnio 2 dalyje nurodytų didelio kibernetinio incidento kriterijų neatitinkančius kibernetinius incidentus, darančius poveikį jų šio įstatymo 11 straipsnio 3–5 dalyse nurodytus kriterijus atitinkančiai vykdomai veiklai ir (ar) teikiamoms paslaugoms, nacionalinio kibernetinių incidentų valdymo plano nustatytais terminais" | | ✅ |
| Significant: the directive's two limbs | Art. 18(2) | "1) kai dėl kibernetinio incidento kibernetinio saugumo subjektas patyrė arba gali patirti didelių paslaugų teikimo sutrikimų arba finansinių nuostolių;" | or considerable damage to others (2); the Commission's implementing acts specify (3) | ✅ |
| Early warning: 24 hours from becoming aware | Art. 18(4)(1) | "nedelsiant, bet ne vėliau kaip per 24 valandas nuo sužinojimo apie didelį kibernetinį incidentą momento – ankstyvasis perspėjimas" | | ✅ (signed scan, page 24) |
| Notification: 72 hours from becoming aware | Art. 18(4)(2) | "nedelsiant, bet ne vėliau kaip per 72 valandas nuo sužinojimo apie didelį kibernetinį incidentą momento – pranešimas apie kibernetinį incidentą" | with an initial assessment and indicators of compromise if any | ✅ (signed scan, page 24) |
| Interim report on request | Art. 18(4)(3) | "Nacionalinio kibernetinio saugumo centro prašymu – tarpinė atitinkamų atnaujintų padėties duomenų ataskaita per Nacionalinio kibernetinio saugumo centro nurodytą pateikimo terminą" | | ✅ |
| Final report: a month from the point-1 act | Art. 18(4)(4) | "ne vėliau kaip per vieną mėnesį nuo šios dalies 1 punkte nurodyto pranešimo apie kibernetinį incidentą pateikimo dienos – galutinė ataskaita" | point 1 is the early warning; the words "pranešimas apie kibernetinį incidentą" are point 2's name | ✅ (signed scan, page 24, same wording) |
| Still ongoing: progress report, final report a month after handling | Art. 18(4)(5) | "pateikiama pažangos ataskaita, o galutinė ataskaita – per vieną mėnesį nuo dienos, kai kibernetinis incidentas buvo suvaldytas" | | ✅ |
| Handled means services restored | Plan, point 5 | "Kibernetinis incidentas laikomas suvaldytu, kai yra atkurtos kibernetinio saugumo subjektų tinklų ir informacinėmis sistemomis teikiamos paslaugos." | | ✅ |
| Monthly updates beyond a month | Plan, point 15 | "Jei kibernetinis incidentas tęsiasi ilgiau nei vieną mėnesį, kibernetinio saugumo subjektai kas mėnesį atnaujina Kibernetinio saugumo įstatymo 18 straipsnio 4 dalies 2 punkte nurodytą informaciją." | | ✅ |
| Other incidents: 72 hours from becoming aware | Plan, point 13.1 | "nedelsdamas, bet ne vėliau kaip per 72 valandas nuo sužinojimo apie kibernetinį incidentą momento, pranešimą apie nedidelį kibernetinį incidentą" | "nedidelis kibernetinis incidentas": an incident below the significance criteria | ✅ |
| and a final report a month after registration, unless the notification said it all | Plan, point 13.2 | "per vieną mėnesį nuo pranešimo apie kibernetinį incidentą registravimo dienos galutinę ataskaitą apie nedidelį kibernetinį incidentą" ; "Galutinė ataskaita apie nedidelį kibernetinį incidentą neteikiama, jei pranešime apie kibernetinį incidentą pateikta visa galutinės ataskaitos informacija." | | ✅ |
| Significance, national criteria: disruption with one of seven markers | Plan, point 9.1 | "tinklų ir informacinės sistemos veikla trikdoma 2 ar daugiau valandų;" ; "paveiktų paslaugų gavėjų ar kompiuterizuotų darbo vietų skaičius lygus arba didesnis nei 1 000, arba 25 procentai (atsižvelgiant į tai, kuris dydis yra mažesnis);" | applies "Jei Europos Komisijos įgyvendinamieji teisės aktai neapibrėžia išsamiau"; also nationwide or cross-border disruption, data of 1,000 or 25 % of recipients, legal requirements no longer met, trade secrets or classified information lost, a recurring incident | ✅ |
| a loss threshold | Plan, point 9.2 | "lygių arba didesnių nei 500 000 Eur, arba 5 procentų kibernetinio saugumo subjekto praėjusių finansinių metų apyvartos (atsižvelgiant į tai, kuri suma yra mažesnė)" | | ✅ |
| harm to others | Plan, point 9.3 | "galimos turtinės žalos dydis yra lygus arba didesnis nei 400 bazinių socialinių išmokų;" ; "galimos neturtinės žalos dydis lygus arba didesnis nei 10 000 Eur;" ; "sutrikdyta bent vieno žmogaus sveikata arba bent vienas žmogus žuvo." | | ✅ |
| NKSC may reclassify an incident as significant | Plan, point 21 | "kibernetinį incidentą Platformoje priskiria dideliam kibernetiniam incidentui ir apie tai nedelsdamas, bet ne vėliau kaip per 24 valandas nuo šiame punkte nurodyto incidento nustatymo informuoja kibernetinio saugumo subjektą" | | ✅ |
| An incident registered by an authority: the entity owes the point-1 or point-2 information | Plan, point 20 | "Kibernetinio saugumo subjekto Saugumo operacijų centras Plane nustatytais terminais privalo pateikti Kibernetinio saugumo įstatymo 18 straipsnio 4 dalies 1 arba 2 punkte nurodytą informaciją." | | ✅ |
| Automatic registration on the Platform within 12 months of registration | Resolution No. 945, point 3 of Resolution No. 818 as restated | "per 12 mėnesių nuo jų įregistravimo Kibernetinių saugumo subjektų registre pritaikyti kibernetinio saugumo įvykių ir kibernetinių incidentų valdymo tinklų ir informacines sistemas taip, kad kibernetiniai incidentai Kibernetinio saugumo informacinėje sistemoje veikiančioje Nacionalinėje kibernetinių incidentų valdymo platformoje būtų registruojami automatiniu būdu" | NKSC may extend once, by up to 12 months | ✅ |
| A security operations centre, separate from IT operations | Plan, point 3 | "Kibernetinio saugumo subjektas užtikrina, kad Saugumo operacijų centro funkcijos nebūtų pavedamos kibernetinio saugumo subjekto arba paslaugų teikėjo darbuotojui, atsakingam už tinkamą to kibernetinio saugumo subjekto tinklų ir (ar) informacinių sistemų veiklą." | | ✅ |
| Root causes from a closed list | Plan, point 18 | "parenkama viena iš išvardytų kibernetinių grėsmių ir pagrindinių incidentų priežasčių:" | ten categories, from abusive content to supply-chain attacks | ✅ |
| No 24-hour rule for trust service providers | Art. 18 (whole); XIV-2907, Art. 1 | "Pripažinti netekusiu galios 4 straipsnio 2 dalies 7 punktą." | an absence: Art. 18 sets no rule of their own, and the one act notified for the trust services law only repeals that point of its Art. 4; the only trust-service incident rule in the texts read is NKSC's forwarding to RRT (Art. 20(2)(5)) | ✅ |
| Voluntary reports | Art. 24(1) | "turi teisę savanoriškai apie juos pranešti Nacionaliniam kibernetinio saugumo centrui" | | ✅ |

**The instant.** Both clocks run "nuo sužinojimo apie didelį kibernetinį
incidentą momento", from the moment of becoming aware of the significant
incident. The directive's Lithuanian text counts "nuo tada, kai sužinojo apie
didelį incidentą". It is the same verb, sužinoti, in a noun form: Lithuania
keeps the directive's awareness anchor. Detecting is another word in both
texts ("atskleisti", Art. 2(11) of the act, Art. 6(8) of the directive), and the
act does not use it for the clocks. The minor-incident clock of the Plan
(point 13.1) runs from the same instant.

**The final report.** Art. 18(4)(4) counts the month from the submission of
"the notification about the cyber incident referred to in point 1". Point 1 is
the early warning; "pranešimas apie kibernetinį incidentą" is what point 2
calls the 72-hour act, and the directive counts from the notification (point
(b)). The signed scan reads the same, so this is the act's wording, not an
extraction error. Read by its number the month runs from the early warning,
read by its name from the notification. The first reading gives the earlier
date.

What the product does with it (2026-11-12): Lithuania has no incident config
and runs on DEFAULT, which never lets a recorded awareness time move its clocks
(`awarenessTimeCounts`, ORIENTATION §5g): the clocks run from detection, which
can only be early, and the final report a month after the notification, which
by the first reading above can be a day or two late. A Lithuanian config would
count from awareness, send everything to NKSC through the Platform, count the
final report from the early warning unless NKSC reads point 1 otherwise, carry
the minor-incident acts, and give trust service providers 72 hours, as the act
does.

Since the same day it does all of that: `INCIDENT_REPORTING_LT` counts the 24
and 72 hours from becoming aware, names NKSC as the recipient for every sector
with the Platform as its channel (no address of either is on this record, so
none is given), and counts the final report a calendar month in Vilnius time
from the day the early warning is submitted, through a notification model whose
label states both readings of point 1. The minor-incident acts are stated in
the label of an incident that is not significant, and a trust service provider
gets the same 72 hours as everyone else.

## Language: the act's words against the directive's Lithuanian text

<!-- meta: theme=statute,incident,governance; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

- **Source:** the act as amended, against the Lithuanian version of Directive
  (EU) 2022/2555, committed at `docs/research/eur-lex/nis2-lt.txt` (EUR-Lex,
  CELEX 32022L2555, read 2026-11-12).

| Term | Act (verbatim) | Directive, Lithuanian version (verbatim) | Same? |
|---|---|---|---|
| Essential entity | Art. 11(1): "esminius kibernetinio saugumo subjektus (toliau – esminiai subjektai)" | Art. 3(1): "esminiais subjektais laikomi šie subjektai:" | yes: esminis subjektas |
| Important entity | Art. 11(1): "svarbius kibernetinio saugumo subjektus (toliau – svarbūs subjektai)" | Art. 3(2): "laikomi svarbiais subjektais" | yes: svarbus subjektas |
| Significant incident | Art. 18(1)(1): "didelį kibernetinį incidentą" | Art. 23(1): "(toliau – didelis incidentas)" | yes, with "kibernetinis" |
| 24 hours | Art. 18(4)(1): "ankstyvasis perspėjimas" | Art. 23(4)(a): "ankstyvąjį perspėjimą" | yes |
| 72 hours | Art. 18(4)(2): "pranešimas apie kibernetinį incidentą" | Art. 23(4)(b): "pranešimą apie incidentą" | yes |
| On request | Art. 18(4)(3): "tarpinė atitinkamų atnaujintų padėties duomenų ataskaita" | Art. 23(4)(c): "tarpinę ataskaitą apie atitinkamus atnaujintus duomenis apie padėtį" | yes, reworded |
| One month | Art. 18(4)(4): "galutinė ataskaita" | Art. 23(4)(d): "galutinę ataskaitą" | yes |
| Still ongoing | Art. 18(4)(5): "pažangos ataskaita" | Art. 23(4)(e): "pažangos ataskaitą" | yes |
| The instant | Art. 18(4)(1), (2): "nuo sužinojimo apie didelį kibernetinį incidentą momento" | Art. 23(4)(a), (b): "nuo tada, kai sužinojo apie didelį incidentą" | yes: sužinoti, becoming aware |
| Detecting | Art. 2(11): "užkirsti kelią kibernetiniam incidentui, jį atskleisti, išanalizuoti" | Art. 6(8): "užkirsti incidentui kelią, atskleisti, išanalizuoti" | yes: atskleisti, not the clocks' word |
| The final report's start | Art. 18(4)(4): "nuo šios dalies 1 punkte nurodyto pranešimo apie kibernetinį incidentą pateikimo dienos" | Art. 23(4)(d): "nuo b punkte nurodyto pranešimo apie incidentą" | no: point 1 where the directive says (b) |
| After handling | Art. 18(4)(5): "nuo dienos, kai kibernetinis incidentas buvo suvaldytas" | Art. 23(4)(e): "nuo tada, kai suvaldė incidentą" | yes: suvaldyti |
| Trust services, 24 hours | none | Art. 23(4), second subparagraph: "patikimumo užtikrinimo paslaugų teikėjas" ; "per 24 valandas nuo tada, kai sužinojo apie didelį incidentą" | no: not transposed |
| Who is trained | Art. 14(7): "Kibernetinio saugumo subjekto valdymo organų nariai, vadovas ir jo įgaliotas asmuo" | Art. 20(2): "valdymo organų nariai turėtų dalyvauti mokymuose" | yes, and more: the head too, every two years |
| Who approves the measures | Aprašas, points 4, 10, 22, 27: "Kibernetinio saugumo subjekto vadovas arba jo įgaliotas asmuo turi patvirtinti" | Art. 20(1): "valdymo organai patvirtintų kibernetinio saugumo rizikos valdymo priemones" | no: the head or an authorised person |

Unlike Latvia's, this act speaks the directive's Lithuanian almost word for
word: the classes, the five reports and the instant are the directive's own
words. A Lithuanian reminder could use the directive's terms for every stage.

## Governance: the head, the management bodies' training every two years, the cybersecurity manager

<!-- meta: theme=governance; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The head ensures and oversees compliance | Art. 14(6) | "Kibernetinio saugumo subjekto vadovas arba jo įgaliotas asmuo privalo užtikrinti, kad kibernetinio saugumo subjektas laikytųsi šiame įstatyme jam nustatytų pareigų, ir prižiūrėti jų laikymąsi." | | ✅ |
| Training at least every two years, for the management bodies and the head | Art. 14(7) | "Kibernetinio saugumo subjekto valdymo organų nariai, vadovas ir jo įgaliotas asmuo, jeigu toks yra, ar kibernetinio saugumo subjektas, jeigu jis yra fizinis asmuo, privalo ne rečiau kaip kartą per 2 metus Nacionalinio kibernetinio saugumo centro vadovo nustatyta tvarka išklausyti kibernetinio saugumo mokymus ir užtikrinti kibernetinio saugumo subjekto darbuotojų, jeigu tokių yra, nuolatinį švietimą kibernetinio saugumo srityje." | by the procedure the head of NKSC sets, which was not read | ✅ |
| A cybersecurity manager reporting to the head | Art. 15(1) | "Kibernetinio saugumo subjekto vadovas ar jo įgaliotas asmuo privalo paskirti kibernetinio saugumo vadovą, tiesiogiai atskaitingą kibernetinio saugumo subjekto vadovui" | responsible for compliance with Arts. 14 and 18 | ✅ |
| A security officer per system | Art. 15(2) | "privalo paskirti saugos įgaliotinį, atsakingą už konkrečios tinklų ir informacinės sistemos atitiktį" | one person may hold both roles, for several entities or systems (15(3)) | ✅ |
| Both may be bought from a supplier | Art. 15(4) | "Kibernetinio saugumo subjektui leidžiama iš tiekėjo įsigyti paslaugas, kurias teikiant būtų atliekamos kibernetinio saugumo vadovo ir (ar) saugos įgaliotinio funkcijos." | | ✅ |
| Their qualifications | Art. 15(5)(3) | "turi turėti ne mažiau kaip 2 metų patirtį informacinių technologijų, kibernetinio saugumo ar tinklų ir informacinių sistemų srityje" | or a degree, an international certificate, or NKSC's training and exam; and the civil service's reputation test, no recent administrative penalty in the field | ✅ |
| Not for an entity that is a natural person | Art. 15(6) | "Jeigu kibernetinio saugumo subjektas yra fizinis asmuo, jam netaikomi šiame straipsnyje nustatyti reikalavimai." | | ✅ |
| They may not administer the systems | Aprašas, point 19 | "Kibernetinio saugumo vadovas ir (ar) saugos įgaliotinis negali vykdyti funkcijų, susijusių su tinklų ar informacinių sistemų administravimu" | | ✅ |
| The head approves the policy, the risk report and plan, the incident plan and the continuity plan | Aprašas, points 4, 10, 22, 27 | "Kibernetinio saugumo subjekto vadovas arba jo įgaliotas asmuo turi patvirtinti tinklų ir informacinių sistemų kibernetinio saugumo politikos dokumentą" | | ✅ |
| All staff: a yearly cyber-hygiene training | Aprašas, point 52 | "Kibernetinio saugumo vadovas turi užtikrinti, kad ne rečiau kaip kartą per metus visi kibernetinio saugumo subjekto darbuotojai išklausytų kibernetinės higienos praktikos mokymus." | a training report within three months, kept three years (point 54) | ✅ |
| Breaching the training duty is a minor violation | Art. 29(4) | "Nedidelio pavojingumo pažeidimais yra laikomi šio įstatymo 14 straipsnio 3 ir 7 dalyse" | the head's duty of 14(6) is of medium severity (29(3)) | ✅ |
| The head of an essential entity can be suspended | Art. 28(1)(11); Art. 33(1) | "inicijuoja šio įstatymo 33 straipsnyje nustatytą esminio subjekto vadovo, išskyrus Seimo, Vyriausybės ir Lietuvos Respublikos Prezidento sprendimu skiriamus viešojo administravimo subjektų vadovus, laikiną nušalinimą nuo pareigų" | by a court, only for a dangerous violation, up to six months, renewable by three | ✅ |
| Heads can be fined personally | Administrative Offences Code, Art. 480(3), as worded by XIV-2904 | "Lietuvos Respublikos kibernetinio saugumo įstatyme nustatytų reikalavimų kibernetinio saugumo subjektų vadovams ar jų įgaliotiems asmenims pažeidimas" | supervision section | ✅ |

Read against the directive's Lithuanian text, Art. 20(2) is transposed and
sharpened: the management bodies' members and the head train at least every
two years. Art. 20(1)'s approval by the management bodies is not worded: the
act puts compliance and its oversight on the head or an authorised person
(14(6)), and the requirements make the head approve the documents.

## Security measures: Art. 14 and the Kibernetinio saugumo reikalavimų aprašas

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

The act lists the elements; the Government approved the requirements
(Resolution No. 945, point 1.3). Measured from the DOCX, tables parsed cell by
cell:

- **Three chapters, 72 numbered points.** Chapter II has **twelve sections**
  (each a "skirsnis") that follow the twelve elements of Art. 14(5)(1) to (12), the
  directive's Art. 21(2) themes: (1) network and information systems security
  policy, points 4 to 6; (2) risk analysis, 7 to 15; (3) the responsible persons
  and the head, 16 to 21; (4) incident management, 22 to 26; (5) continuity, 27
  to 31; (6) supply chain, 32 to 39; (7) acquisition, development and
  maintenance, vulnerabilities included, 40 to 47; (8) effectiveness of the
  requirements, 48 to 51; (9) cyber hygiene and training, 52 to 54; (10)
  cryptography, 55 to 57; (11) human resources, physical access and assets, 58
  to 64; (12) access control and multi-factor authentication, 65 to 69. Chapter
  III (70 to 72) sets the deadlines. Art. 14(5)(13), sector-specific
  requirements, has no section.
- **Seven tables of technical requirements**, numbered across the tables, rows
  1 to 76. Eleven rows are headings with sub-rows, which makes **116 leaf
  requirements**. Each table but one has two columns, "Esminiams" and
  "Svarbiems" (for essential and for important entities), marked "x":
  **97 leaves apply to both classes, 16 to essential entities only, 3 to
  important entities only.** The table on physical access (Table 5, rows 51
  and 52) has no class columns and applies to both.
- The three important-only rows are the lower bar of an essential-only pair:
  availability of 96 % against 99 % (row 16), a yearly check of administrator
  accounts against automated controls (row 73), a regular check of user
  accounts against automated controls (row 74). The other essential-only rows:
  OS time changes and event types in the logs (1.9, 3.2), dedicated log
  storage (5), an alert when logging stops (6), signatures within 24 hours (22),
  peer-to-peer off (29), TLS 1.3 and fail-secure modules (48.4, 48.6), mobile
  code and remote wipe (55, 56), server-room climate, fire sensors everywhere,
  redundant critical elements (57.3, 57.6, 57.7).

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The duty: the Government's requirements and the Commission's implementing acts | Art. 14(1) | "1) kibernetinio saugumo reikalavimams, tvirtinamiems Vyriausybės, išskyrus šio straipsnio 4 dalyje nurodytus atvejus;" ; "2) Europos Komisijos priimtiems įgyvendinamiesiems teisės aktams." | | ✅ |
| At least 12 months from registration | Art. 14(2) | "per Vyriausybės nustatytą ne trumpesnį kaip 12 mėnesių terminą nuo jų įregistravimo Kibernetinio saugumo informacinėje sistemoje" | | ✅ |
| 12 months, 24 for the technical tables | Aprašas, points 71 and 72 | "ne vėliau kaip per 12 mėnesių nuo jų įregistravimo" ; "techninius kibernetinio saugumo reikalavimus, nustatytus Aprašo 26, 31, 47, 57, 60, 64, 69 punktuose, privalo įgyvendinti ne vėliau kaip per 24 mėnesius" | | ✅ |
| Special entities: only the Commission's acts | Art. 14(4) | "Specialusis subjektas privalo užtikrinti savo naudojamų tinklų ir informacinių sistemų atitiktį tik šio straipsnio 1 dalies 2 punkte nurodytoms kibernetinio saugumo rizikos valdymo priemonėms." | DNS, TLD, cloud, data centre, CDN, managed and managed security services, marketplaces, search engines, social networks and, since XV-1076, trust service providers (Art. 13(3)(1)) | ✅ |
| The elements | Art. 14(5) | "1) kibernetinio saugumo rizikos analizės, tinklų ir informacinių sistemų kibernetinio saugumo politiką;" ; "5) tiekimo grandinės saugumą, įskaitant aspektus, susijusius su kiekvieno kibernetinio saugumo subjekto ir jo tiesioginių tiekėjų ar paslaugų teikėjų santykiais;" ; "7) politiką ir procedūras, skirtas kibernetinio saugumo reikalavimų veiksmingumui įvertinti;" | thirteen elements | ✅ |
| Risk assessment every year, records kept three years | Aprašas, points 9 and 14 | "Rizikos vertinimas turi būti atliekamas ne rečiau kaip kartą per metus" ; "turi būti saugomi ne mažiau kaip 3 metus" | and after significant changes or a significant incident | ✅ |
| The policy reviewed every year | Aprašas, point 4.5 | "ne rečiau kaip kartą per metus arba pasikeitus aplinkybėms, peržiūrėti ir atnaujinti kibernetinio saugumo politikos dokumentus" | | ✅ |
| Logs kept 90 days, both classes | Aprašas, Table 1, row 7 | "Žurnaliniai įrašai turi būti saugomi ne trumpiau kaip 90 kalendorinių dienų." | | ✅ |
| Multi-factor authentication, both classes | Aprašas, Table 7, row 61 | "Naudotojas ir administratorius turi patvirtinti savo tapatybę slaptažodžiu ir papildoma tapatumo nustatymo priemone (kelių veiksnių tapatumo nustatymo priemonės)." | | ✅ |
| Passwords of 10 and 15 characters | Aprašas, Table 7, rows 71.2, 72.2 | "slaptažodį turi sudaryti ne mažiau kaip 10 simbolių;" ; "slaptažodį turi sudaryti ne mažiau kaip 15 simbolių;" | users, administrators | ✅ |
| Supplier selection criteria | Aprašas, point 33 | "tiekėjo atitiktį Apraše nustatytiems kibernetinio saugumo reikalavimams;" | quality requirements and time-limited access too | ✅ |
| Contract clauses, sub-suppliers included | Aprašas, point 34 | "sutartyse su tiekėjais (įskaitant subtiekėjus)" ; "tiekėjo pareigą pranešti kibernetinio saugumo subjektui apie visus didelius ir (ar) kitus incidentus" ; "teisę kibernetinio saugumo subjektui arba jo įgaliotiems paslaugų teikėjams atlikti tiekėjo atitikties Aprašui auditą (įskaitant neplaninį)" | ten clauses: compliance, staff skills, incidents, audit, vulnerabilities, confidentiality, SLA, access, premises, rights and duties | ✅ |
| Internet contracts, graded | Aprašas, points 36 and 37 | "nepertraukiamas interneto paslaugos teikimas: 24 valandas per parą, 7 dienas per savaitę;" ; "nepertraukiamas paslaugos teikimas įprastomis darbo valandomis;" | essential entities 24/7, important entities business hours | ✅ |
| A supplier list | Aprašas, point 39 | "Kibernetinio saugumo subjektas turi būti sudaręs tiekėjų sąrašą" | | ✅ |
| Vulnerability scans every six months | Aprašas, point 45.8 | "visą tinklų informacinės sistemos spragų skenavimą atlikti ne rečiau kaip kas 6 mėnesius" | | ✅ |
| A yearly compliance assessment with a report and a remediation plan | Aprašas, points 48.1, 48.2 | "reguliariai, ne rečiau kaip kartą per metus, įvertinti kibernetinio saugumo subjekto atitiktį Kibernetinio saugumo įstatymui, šio Aprašo ir kibernetinio saugumo subjekto patvirtintiems kibernetinio saugumo politikos dokumentuose nustatytiems reikalavimams (toliau – Atitikties vertinimas)" | approved by the head | ✅ |
| Essential entities answer NKSC's questionnaire every year | Aprašas, point 51 | "Esminis kibernetinio saugumo subjektas ne rečiau kaip kartą per metus teikia atitikties kibernetinio saugumo reikalavimams vertinimą, užpildydamas NKSC klausimyną KSIS." | the questionnaire was not read | ✅ |
| An audit every three years, by NKSC's methodology | Art. 14(8) | "Kibernetinio saugumo subjektai ne rečiau kaip kartą per 3 metus atlieka kibernetinio saugumo auditą pagal Nacionalinio kibernetinio saugumo centro tvirtinamą kibernetinio saugumo auditų atlikimo metodiką." | by independent certified auditors, trained and examined by NKSC's procedure; the methodology was not read | ✅ |
| The cybersecurity manager organises the assessment by that methodology | Aprašas, point 20.1 | "organizuoti kibernetinio saugumo subjekto atitikties šio Aprašo reikalavimams vertinimą NKSC patvirtintos Kibernetinio saugumo auditų atlikimo metodikos nustatyta tvarka;" | | ✅ |
| NKSC sensors in essential entities | Art. 16(1), (4) | "Nacionalinis kibernetinio saugumo centras esminių subjektų tinklų ir informacinėse sistemose diegia ir valdo technines kibernetinio saugumo priemones." ; "Esminiai subjektai privalo sudaryti sąlygas" | in important entities only at their request | ✅ |
| Other laws still apply | Aprašas, point 70 | "Aprašo reikalavimų įgyvendinimas kibernetinio saugumo subjektų neatleidžia nuo pareigos įgyvendinti ir kituose teisės aktuose nustatytų reikalavimų" | except the equivalence cases of Art. 1(3) | ✅ |
| The 2013 general security requirements repealed | Resolution No. 945, point 2.1 | "Lietuvos Respublikos Vyriausybės 2013 m. liepos 24 d. nutarimą Nr. 716 „Dėl Bendrųjų elektroninės informacijos saugos reikalavimų aprašo ir Saugos dokumentų turinio gairių aprašo patvirtinimo“" | | ✅ |

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

Recorded as facts. Marketing never cites fines.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Important entities inspected only on suspicion | Art. 26(3) | "Šio straipsnio 1 dalyje nurodyti svarbių subjektų patikrinimai atliekami tik gavus duomenų ar informacijos, kad svarbus subjektas, kaip įtariama, padarė šio įstatymo reikalavimų pažeidimą." | essential entities on NKSC's own initiative too (26(2)) | ✅ |
| Four months, at most six | Art. 27(1), (2) | "ne vėliau kaip per 4 mėnesius" ; "Bendras patikrinimo atlikimo terminas negali būti ilgesnis kaip 6 mėnesiai" | | ✅ |
| A targeted audit at the entity's cost, where risk is high | Art. 27(3)(2) | "savo lėšomis atlikti nepriklausomą tinklų ir informacinių sistemų arba jomis vykdomos veiklos ar teikiamų paslaugų tikslinį kibernetinio saugumo auditą" | | ✅ |
| Eleven enforcement measures | Art. 28(1) | "taiko vieną ar kelias vykdymo užtikrinimo priemones:" | warnings, orders, a monitoring officer (essential), publication, fines, suspension and the head's removal (essential, by a court) | ✅ |
| Three severities | Art. 29(2) to (4) | "Pavojingais pažeidimais yra laikomi šio įstatymo 14 straipsnio 1 dalyje, 18 straipsnio 1 dalies 1 punkte nustatytų reikalavimų pažeidimai." | dangerous: the measures, significant-incident reporting; medium: the head's duty, the audit, the responsible persons; minor: data to KSIS, training, minor-incident reporting | ✅ |
| Fines for an essential entity | Art. 30(2)(1) | "esminiam subjektui – iki 10 000 000 Eur arba iki 2 procentų juridinio asmens bendros pasaulinės metinės apyvartos per praėjusį finansinį laikotarpį, atsižvelgiant į tai, kuri suma didesnė;" | | ✅ |
| Fines for an important entity | Art. 30(2)(2) | "svarbiam subjektui – iki 7 000 000 Eur arba iki 1,4 procento juridinio asmens bendros pasaulinės metinės apyvartos per praėjusį finansinį laikotarpį, atsižvelgiant į tai, kuri suma didesnė;" | | ✅ |
| Budgetary institutions capped | Art. 30(2)(3), (4) | "bet ne didesnė kaip 60 000 Eur" ; "bet ne didesnė kaip 30 000 Eur" | 1 % or 0.5 % of the budget and other income | ✅ |
| Fines by severity | Art. 30(3) | "iki 100 procentų" ; "iki 50 procentų" ; "iki 10 procentų" | of the maximum, for a dangerous, medium or minor violation | ✅ |
| No second fine after a GDPR fine | Art. 31(10) | "Bauda neskiriama, jeigu kibernetinio saugumo subjektui už tą patį pažeidimą jau buvo skirta bauda vadovaujantis Reglamento (ES) 2016/679 58 straipsnio 2 dalies i punktu." | | ✅ |
| Two years to act | Art. 28(7) | "jeigu praėjo ne daugiau kaip 2 metai nuo pažeidimo dienos" | | ✅ |
| Liability of managers unaffected | Art. 28(2) | "Vykdymo užtikrinimo priemonės taikymas juridiniams asmenims neatleidžia jų vadovų ir darbuotojų nuo įstatymuose nustatytos civilinės, administracinės ar baudžiamosios atsakomybės." | | ✅ |
| Heads personally: a warning or EUR 250 to 3,000 | Administrative Offences Code, Art. 480(3), as worded by XIV-2904 | "užtraukia įspėjimą arba baudą juridinių asmenų vadovams ar jų įgaliotiems asmenims nuo dviejų šimtų penkiasdešimt iki trijų tūkstančių eurų" | for breaching the act's requirements addressed to heads or their authorised persons; EUR 2,000 to 6,000 if repeated (480(4)); NKSC decides (589(46)); in force 2024-10-18 | ✅ |
| Police information and orders | Administrative Offences Code, Arts. 479, 480(1), (2) | "užtraukia įspėjimą arba baudą juridinių asmenų vadovams ar kitiems atsakingiems asmenims nuo trisdešimt iki trijų šimtų eurų" | not giving the police information on a possibly criminal incident; not executing police orders in time (EUR 70 to 150) | ✅ |
| How a measure is chosen | Enforcement procedure (Resolution No. 945, point 1.4), point 5.4 | "kartu su Kibernetinio saugumo įstatymo 28 straipsnio 1 dalies 1–8 ir (ar) 10, 11 papunkčiuose nurodyta (-omis) vykdymo užtikrinimo priemone (-ėmis) taikoma ir Kibernetinio saugumo įstatymo 28 straipsnio 1 dalies 9 punkte numatyta vykdymo užtikrinimo priemonė" | a fine is added where the other measures would not deter | ✅ |

## Departures from the directive, read in Lithuanian

<!-- meta: theme=scoping,registration,incident,governance,framework,supply-chain,sanctions; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

- **Status and duties start with registration** in KSIS (Art. 11(1), (2),
  13(10)), not with meeting the criteria; NKSC registers, the ministries of the
  annexes confirm, and the act sets no deadline for an entity's own
  submission.
- **Size by the national SME Development Law** (Art. 11(3)(1), (4)(1), (2)),
  with the Recommendation's and/or shape only since XV-1076, and counted from
  social-insurance and filed accounts data, consolidated group accounts where
  mandatory (Art. 11(8), (9)).
- **An Annex 2 type is important only above half of its revenue** (Art.
  11(4)(1)): a medium manufacturer whose Annex 2 activity is a minor line is
  out. The directive has no revenue-share test.
- **Public administration at every level is essential**: central, regional
  and municipal administration entities (Art. 11(3)(5); Annex 1, sector 10),
  territorial state administration by a threshold (methodology, row 5). The
  directive requires central government and leaves the regional level to a
  risk assessment and the local level to the Member State (Art. 2(2)(f),
  2(5)(a)).
- **National additions to the lists**: hosting providers, important at any
  size (Art. 11(4)(7); Annex 2, 6.1.4); domain name registration service
  providers as important entities (11(4)(6)), where the directive covers them
  for Art. 28 only; holders of state information resources (11(3)(6), 11(4)(5));
  enterprises important to national security (11(3)(7)).
- **Every incident affecting the activity is reported**, the minor ones within
  72 hours of becoming aware with a final report a month after registration
  (Art. 18(1)(2); Plan, point 13), and a running incident is updated every
  month (point 15).
- **The final report is counted from the point-1 act** by the letter of Art.
  18(4)(4), the early warning, where the directive counts from the
  notification.
- **No 24-hour notification for trust service providers**: the directive's
  derogation (Art. 23(4), second subparagraph) is not in the act; they report
  within the general 24 and 72 hours, and NKSC forwards to RRT.
- **National significance criteria** where the Commission's acts are silent
  (Plan, point 9): two hours of disruption, 1,000 users or 25 %, EUR 500,000 or
  5 % of turnover, 400 basic social benefits, EUR 10,000 non-material, any harm
  to health.
- **Management training every two years** for the management bodies' members
  and the head (Art. 14(7)); no approval of the measures by the management
  bodies is worded.
- **A national catalogue of requirements**, graded by class row by row, due 12
  months after registration and 24 for the technical tables (Aprašas, points
  71, 72); special entities follow only the Commission's implementing acts
  (Art. 14(4)), trust service providers among them since XV-1076.
- **An audit every three years for every entity** (Art. 14(8)), a yearly
  compliance assessment (Aprašas, point 48.1), and NKSC's questionnaire every
  year for essential entities (point 51).
- **NKSC sensors in essential entities' systems** (Art. 16), a security
  operations centre kept apart from IT operations (Plan, point 3), and
  automatic incident registration on the Platform within 12 months (Resolution
  No. 945, point 3).
- **Fines in three severity bands**, capped for budgetary institutions (Art.
  30), and personal fines for heads under the Administrative Offences Code
  (Art. 480(3), (4)). Recorded as facts.

## The national baseline: the aprašas is binding, graded by class and assessed every year (2026-11-12)

<!-- meta: theme=framework; type=reference; date=2026-11-12; surfaces=docs; guard=none -->

The Kibernetinio saugumo reikalavimų aprašas is a published and binding
national baseline that an entity is assessed against. It is a Government
resolution in the TAR (2024-19589), binding under Art. 14(1)(1). It holds
twelve sections, 72 points, 76 numbered technical rows and 116 leaf
requirements, each with its class in the text (Esminiams, Svarbiems). And an
entity is assessed against it: a yearly compliance assessment with a report
and a remediation plan (point 48), NKSC's questionnaire in KSIS every year
for essential entities (point 51), an audit every three years by NKSC's
methodology (Art. 14(8); point 20.1), and inspections that check compliance
with Art. 14(1) (Art. 27(3)(3)). The section on the security measures, above,
quotes each of these.

That puts Lithuania with Croatia, whose decree also carries a graded
catalogue with a statutory self-assessment, and not with the Netherlands,
Austria or Luxembourg, which have no national catalogue. Czechia's decrees
409/2025 and 410/2025 are national catalogues of the same kind, one per
regime.

Two limits. Special entities (the digital providers of Art. 13(3)(1) and,
since XV-1076, trust service providers) apply only the Commission's
implementing acts and never the aprašas (Art. 14(1)(2), (4)). And the two
instruments of assessment were not read: NKSC's audit methodology
(Art. 14(8)) and the KSIS questionnaire (point 51).



## The English country page: /en/eu/lithuania (2026-11-12)

<!-- meta: theme=statute,scoping,registration,incident,governance,framework; type=delivery; date=2026-11-12; surfaces=marketing,mcp; guard=apps/web/test/country-pages-lt.test.tsx -->

- **Why:** Lithuania had this record, a native framework, a national
  reference, an incident configuration and a document context, and no public
  page: the scope checker linked nothing for Lithuania, and the MCP tools
  could only send a Lithuanian question to the tracker.
- **Source:** this record, and no new reading. One provision was read again
  in the official text before its sentence was written: point 3 of Resolution
  No. 818 as restated by Resolution No. 945 (the 12 months to register
  incidents on the Platform automatically, and the single extension on a
  reasoned request).
- **The authority is the reference's and the mapping's**: NKSC, under the
  Ministry of National Defence, with nksc.lt as its website.
- **No channel address.** The CSIRT line names NKSC and the Platform and
  carries no notification link: no address of either is on this record, the
  incident configuration carries none, and the page says so.
- **The clocks are stated as the act states them**, from becoming aware, in
  the act's words. The final report is given with both the letter of Art.
  18(4)(4) and the directive's rule, and the page says which one the product
  counts: the early warning, the earlier date.
- **No figure in euro, and no fine.** The size test's ceilings are in the SME
  Development Law, which was not read, so the page gives none; the loss and
  damage thresholds of the plan's point 9 are left out with them. Supervision
  is described without an amount.
- **What Reglyze does is said as it is, and held against the function that
  decides it**: the assessment on the aprašas; three sectors on the NIS2
  baseline, which also holds out telecom operators, exchange points and
  hosting providers; documents, exercises, training and vendor questionnaires
  on the aprašas in preparation; a scope check that applies one Lithuanian
  rule, public administration, and the directive's size test, so it does not
  ask for the Annex 2 revenue share and does not know the types the act adds
  at any size. The page's two scenarios are run through the engine by the
  test: the municipality is essential, the manufacturer important.
- **Everything the page calls "not on Reglyze's record"** is a line of the
  open items below: the KSIS regulations, the SME Development Law's ceilings,
  NKSC's questionnaire and audit methodology, the NKSC head's training
  procedure, the date XV-1076 took effect.
- **Guard:** `apps/web/test/country-pages-lt.test.tsx`: the product's data,
  each quotation behind a paraphrase, every date and case number of the prose,
  the two scenarios through the engine, no amount. Twelve mutations of the
  page, one per kind of claim, each make it fail.
- **Not done here:** the Lithuanian page (`/lt/eu/lithuania`) and signup
  landing, which need the `lt` locale; the Lithuanian strings of the reference
  and of the incident configuration. All three came the same day, after the
  locale (the two sections that follow it).

## Lithuanian locale: the surfaces that take the act's words (2026-11-12)

<!-- meta: theme=incident,governance; type=delivery; date=2026-11-12; surfaces=i18n,doc-gen,ui; guard=apps/web/test/nis2-start-incident-terms.test.ts,apps/doc-gen/test/training-attestation-national-provision.test.ts,apps/core-api/test/training-emails.test.ts -->

Lithuanian is a product locale since 2026-11-12 (`feat/lt-locale`). Its
generic strings keep the directive's Lithuanian words, which the act keeps
too ("Language", above). Three surfaces read in Lithuania alone take the
act's and the plan's, and each fragment of them is held to the quotes of this
record:

- **The incident line of the getting-started page**
  (`nis2Start.basics.incident`): every report to NKSC, registered on the
  Platform (Art. 18(1), plan point 10); the early warning within 24 hours and
  the notification within 72 hours "nuo sužinojimo apie didelį kibernetinį
  incidentą momento" (18(4)(1), (2)); the final report within one month of
  the early warning's submission, by the letter of 18(4)(4); a minor incident
  within 72 hours (plan point 13.1). It names no CSIRT, as the act names none.
- **The training attestation** quotes Art. 14(7) for a Lithuanian
  organisation, in every document language, with a note in Lithuanian and in
  English: the interval and the persons, and that the attestation does not
  attest the procedure the head of NKSC sets, which was not read.
- **The training renewal e-mail** in Lithuanian cites Art. 14(7) beside
  Art. 20(2) of the directive. The date it reminds of is the one recorded with
  the training, or a year: the product's, not the act's two years.

The incident configuration and the national reference were written before
the locale, in en, fr, it, de and pt, and the country page in English. Their
Lithuanian strings, the Lithuanian country page and the Lithuanian signup
landing came the same day, after the locale (the two sections below). The
dictionary is machine-written and mechanically validated
(`tools/lt-i18n/validate.mjs`), not ratified by a native reader; its uncertain
terms are marked in `tools/lt-i18n/GLOSSARY.md`.

## The Lithuanian strings of the reference and of the incident config (2026-11-12)

<!-- meta: theme=incident,statute,registration,governance,scoping,framework; type=delivery; date=2026-11-12; surfaces=data,i18n,ui; guard=packages/regulatory-data/test/lt-incident-reporting.test.ts,packages/regulatory-data/test/country-configs-transposition-references.test.ts,packages/regulatory-data/test/config-official-languages.test.ts,packages/regulatory-data/test/act-stage-names.test.ts,apps/web/test/lt-national-reference-surfaces.test.tsx,apps/core-api/test/incident-reminders-fire.test.ts,apps/core-api/test/incident-reminders-plan.test.ts -->

`TRANSPOSITION_REFERENCES_LT` and `INCIDENT_REPORTING_LT` were written in
English, French, Italian, German and Portuguese before Lithuanian became a
product locale. They took their Lithuanian strings the same day, 21 in the
incident configuration and 8 in the reference, written from this record and
from the official texts committed under `docs/research/national/lt/`, and
from nothing else.

- **The texts' words.** Each Lithuanian string takes its legal wording from
  the act as amended, from the national plan and from the aprašas. The tests
  hold each legal fragment of the strings against the committed texts
  themselves (white space collapsed, case ignored), not against this record's
  quotes of them.
- **Citations in the Lithuanian form.** An article is cited as Lithuanian
  legal writing cites it, the article, then the paragraph, then the point
  (`18 straipsnio 4 dalies 1 punktas`, `Aprašo 71 ir 72 punktai`), never in
  the English form of the five other languages.
- **The instant is the act's.** Every limit of 24 or 72 hours is stated from
  becoming aware, in the act's words for a significant incident and in the
  plan's for a minor one (point 13.1). No Lithuanian string uses a word for
  detecting.
- **The final report.** Its label gives the provision's own words between
  Lithuanian quotation marks, says that point 1 is the early warning and that
  the name is point 2's, that the directive counts from the notification, and
  that the product counts from the early warning, the earlier date, until NKSC
  reads the provision otherwise.
- **No `actStageNames`.** Lithuania has a notification model, which names its
  three acts itself, in the act's words. A Lithuanian reminder takes the name
  from there.
- **The regime's name** is `Kibernetinio saugumo įstatymo 18 str.`: the
  Lithuanian titles put it before a noun, where a placeholder cannot take the
  genitive, and the abbreviation reads right in every case.
- **The recipient's mention** reads after `Gavėjas:` in the reminder, in the
  nominative: `NKSC (Nacionalinis kibernetinio saugumo centras)`.
- **One dictionary sentence changed for it.** `app.incidents.guidance.nationalRoute`
  put the law's name after `pagal`, which asks for a case a placeholder cannot
  give. It now names the recipient first and gives the law after a colon, as
  the legal basis.
- **No fine.** No Lithuanian string names one. The only amounts are the
  plan's significance thresholds (point 9), in the configuration, which are
  the plan's figures.
- **Not ratified by a native reader**, like the dictionary: the strings are
  the texts' words joined by a writer who does not read Lithuanian natively.

## The Lithuanian country page and signup: /lt/eu/lithuania and /lt/sukurti-paskyra (2026-11-12)

<!-- meta: theme=statute,scoping,registration,incident,governance,framework; type=delivery; date=2026-11-12; surfaces=marketing,i18n; guard=apps/web/test/country-lithuania-fiche.test.tsx,apps/web/test/country-pages-lt.test.tsx -->

- **Why:** a Lithuanian reader had the product in Lithuanian and the country
  page in English only, and a Lithuanian browser on `/register` stayed on the
  form written for no country.
- **Source:** this record and the official texts committed under
  `docs/research/national/lt/`, and no new reading. The page says what
  `/en/eu/lithuania` says, in the texts' Lithuanian words. Its test
  (`apps/web/test/country-lithuania-fiche.test.tsx`) holds each fact to a row
  or a quote of this record, read without its delivery sections; each legal
  fragment and each span between Lithuanian quotation marks to the committed
  texts; the wording to the act as amended, so that the 2024 text of a
  provision Law No. XV-1076 replaced fails; and every provision cited, every
  date, every length of time and every negation to this record.
- **What it states:** the act, its two amending laws and their dates; NKSC,
  which registers, receives every report and inspects; status and duties from
  registration in KSIS, with no deadline for the entity in the act; the two
  classes, the national size test with its and/or shape, the types in scope
  at any size and the Annex 2 revenue share; every report to NKSC on the
  Platform, the 24 and 72 hours from becoming aware, both readings of the
  final report's month and the one the product counts, every other incident
  within 72 hours, no shorter limit for trust service providers; the head,
  the training every two years, the cybersecurity manager and the security
  officer; the aprašas, its twelve sections and 116 technical requirements,
  the special entities, the yearly assessment, the questionnaire and the
  audit; how NKSC inspects and enforces.
- **What it says is absent from Reglyze's sources** (`Reglyze šaltiniuose
  nėra`), each a line of the open items or of the incident section above: the
  KSIS regulations, the SME Development Law's ceilings, the day Law No.
  XV-1076 took effect, NKSC's questionnaire and audit methodology, the NKSC
  head's training procedure, the Platform's address.
- **Partial lists say so.** The types in scope at any size and the
  enforcement measures are given with `tarp jų`, as the English page gives
  them without Art. 11(3)(7); the special entities of Art. 13(3)(1) are given
  whole. The page tells the reader that it does not repeat Art. 11(3) to (5)
  whole.
- **Left out on purpose:** any fine and any word for one, so the page names
  four of the eleven enforcement measures where the English page also names
  financial sanctions, without an amount; any amount in euro; Arts. 30 and 31
  and the Administrative Offences Code; any portal or channel address. NKSC's
  website is the authority's address and is not listed among the sources,
  which carry the day they were read: no page of it was read.
- **Said where the reader meets the claim.** The opening paragraph says that
  Reglyze assesses Lithuanian organisations on the aprašas and names the
  exception with it, the three sectors assessed on the requirements of the
  directive. The English overview gives the claim there and the exception in
  its last key fact.
- **The chrome** for `lt` speaks the act directly, Lithuanian being read in
  one country: the title names the act, the framework card and the lead name
  the requirements as Art. 14(1)(1) does, and the closing line promises the
  scope check, the assessment on the aprašas and the incident deadlines, and
  says that three sectors are assessed on the directive and that documents on
  the aprašas are in preparation. The authority card keeps the directive's
  role name, which the act never gives NKSC. The hero's second button opens
  the act in the Teisės aktų registras and says so: no portal is named.
- **The signup landing** promises what the product keeps: the assessment on
  the aprašas, the directive's requirements for three sectors, and the
  deadlines of the early warning and of the notification to NKSC, counted from
  becoming aware. It promises no document, so it does not carry the sibling
  landings' argument of a first document in about 15 minutes. Its copy says
  `Sukurti paskyrą` and never the Lithuanian for registering, which next to
  the act reads as the registration in KSIS.
- **The coverage page does not name Lithuania.** Its grid is held back as
  Greece's is: the `ksra` tree is marked as a draft that no native reader has
  ratified (`multi-frame-registry.ts`), and documents on the aprašas are in
  preparation. The guard records the hold and pins the two conditions it
  rests on (`apps/web/test/coverage-page-completeness.test.ts`); lifting it is
  the founder's decision.
- **Measured** in headless Chromium on 2026-11-12, against the local app: on
  `/lt/eu/lithuania` and `/lt/sukurti-paskyra`, at 320, 375, 414, 640, 768 and
  1280 px, the document is never wider than the screen and no text is painted
  past an edge; the two hero buttons wrap at 320 px; the form submitted empty
  shows its three messages in Lithuanian without widening the page; the
  landing's header carries the logo alone; a Lithuanian browser on a bare
  `/register?intent=pro_1` is sent by a 302 to `/lt/sukurti-paskyra`, the plan
  kept; the first link of a Lithuanian footer opens `/lt/eu/lithuania`. The
  signup links of the shared pages are the bare `/register` (five on `/lt`),
  which the middleware sends to the landing for a browser or a cookie in
  Lithuanian: a browser in English that reads `/lt` stays on the generic
  form, the shared pages carrying one set of signup links for every language
  (`apps/web/test/register-redirect-keeps-query.test.ts`). Chromium only: iOS
  Safari was not measured.
- **Not ratified by a native reader.** The page and the landing are the
  texts' words joined by a writer who does not read Lithuanian natively; the
  terms that writer was unsure of are listed in `tools/lt-i18n/GLOSSARY.md`.
- **Due again** on 12 February 2027, three months after the reading: this
  record names no event that calls for an earlier one, and cannot rule out a
  later amendment (open items).

## Open items: not read, or not resolved

<!-- meta: theme=statute,scoping,registration,incident,framework; type=lead; date=2026-11-12; surfaces=docs; guard=none -->

None of these may feed a configuration until read or resolved.

- **The product's scoping of Lithuania, beyond public administration.** The
  engine's Lithuanian rule (2026-11-12) covers Art. 11(3)(5) only. Not modelled:
  the size test of the SME Development Law, the Annex 2 revenue-share test,
  hosting providers and domain registration as important at any size, state
  information resources, and registration as the condition of every duty
  (stated in the verdict's sentence, not computed).
- **XV-1076's date.** It has no article on entry into force; under Art. 70 of
  the Constitution it took effect on signature and official publication, whose
  date is not on the file read. EUR-Lex does not list it.
- **Later amendments.** EUR-Lex lists neither 2026 amendment, so it cannot rule
  out a later one; e-tar.lt's consolidated text was not readable by script.
  Whether Resolution No. 818 as worded by No. 945 was amended after 2024-11-06
  is not established either.
- **The final report's start** (Art. 18(4)(4), point 1 against point 2): no
  NKSC reading was found; the earlier date is the literal one.
- **Not read**: the KSIS regulations (krašto apsaugos ministro tvirtinami
  Kibernetinio saugumo informacinės sistemos nuostatai: the data, form and any
  deadline of registration, Art. 13(4), 14(3)); NKSC's audit methodology (Art.
  14(8)) and the questionnaire of point 51; the NKSC head's training procedure
  (Art. 14(7), 15(5)(3)); the national vulnerability disclosure procedure (Art.
  25); the plan's Annexes 1 to 4 (process schemes), absent from the DOCX; the
  list of EU acts of Art. 1(5); the Government's list of critical entities;
  the SME Development Law (the ceilings, Art. 3(7)), the Public Administration
  Law, the Law on the Management of State Information Resources; XIV-3048 in
  full; the explanatory notes of XIV-2902 and XV-1076.
- **Supplier nationality.** The aprašas sets no nationality rule for
  suppliers, unlike Latvia's Regulation No. 397. Whether another Lithuanian act
  does was not read: the act ties only the competence community (Art. 23) to the
  investor screening of the Law on Objects Important to National Security.
