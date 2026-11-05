# Romania — legal sources (verified)

## OUG nr. 155/2024, approved by Legea nr. 124/2025 (read 2026-10-28)

<!-- meta: theme=statute,registration; type=reference; date=2026-10-28; surfaces=data,prompt; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts,packages/regulatory-data/test/ro-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

- **Official citation:** Ordonanța de urgență nr. 155/2024 privind instituirea
  unui cadru pentru securitatea cibernetică a rețelelor și sistemelor
  informatice din spațiul cibernetic național civil, Monitorul Oficial nr. 1332
  din 31 decembrie 2024; approved with amendments by Legea nr. 124/2025 (MO
  638/07.07.2025); Legea nr. 123/2026 adds Art. 36(1^1). It repeals Legea nr.
  362/2018, the NIS1 law (Art. 66(1)(a)).
- **Official URLs:** https://legislatie.just.ro/Public/DetaliiDocumentAfis/293121 ;
  https://legislatie.just.ro/Public/DetaliiDocument/299675
- **Retrieved + read:** 2026-10-28, Arts 1-68 and both annexes in full, both
  amending laws, DNSC Ordin 1/2025 and its Cerințe, on the Portal Legislativ
  (not the Monitorul Oficial PDF).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| In force 2024-12-31 | Constitution Art. 115(5); Senate record L7/2025 | "Ordonanța de urgență intră în vigoare numai după depunerea sa spre dezbatere […] și după publicarea ei în Monitorul Oficial" ; "31-12-2024 Înregistrat la Senat pentru dezbatere" | ✅ |
| Sanctions start 30 days later | Art. 64(4) | "Prevederile art. 60 și 61 intră în vigoare la 30 de zile de la data publicării […]" | ✅ |
| Competent authority and national CSIRT | Art. 24(1)-(2) | "DNSC este autoritatea competentă responsabilă cu securitatea cibernetică […]" ; "DNSC îndeplinește funcția de […] CSIRT național" | ✅ |
| Single point of contact | Art. 40(1) | "DNSC îndeplinește funcția de punct unic de contact la nivel național" | ✅ (ANCOM and ADR are sector authorities, Art. 37(1)) |
| Registration within 30 days | Art. 18(2) | "[…] notifică DNSC în vederea înregistrării în cel mult 30 de zile de la data intrării în vigoare […]" | ✅ |
| Registration platform | Cerințe art. 3(2)(a) (Ordin DNSC 1/2025) | "Platforma NIS2@RO - acces online […] pe site-ul platformanis2.ro" | created by the order; NOT confirmed live (dnsc.ro answers scripts with a Cloudflare challenge) |
| Infringement case closed | Commission register, INFR(2024)0294 | closing of the case 8/10/2025 | ✅ |

`registrationLive` stays false in the tracker until the platform is seen live.

## Sources read in full on 2026-10-29: the OUG, both amending laws, the DNSC acts, and how they were reached

<!-- meta: theme=statute; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Every fact in the sections below was read in one of these texts. The OUG, the
two amending laws and the DNSC orders and decision are the binding sources;
anything marked "authority statement" is DNSC's own page and binds nobody.
Each text of the first table below was read on the Portal Legislativ (Ministry
of Justice) and then compared word by word with the text layer of the
Monitorul Oficial issue that published it: the only differences are layout (article headings printed
"Art. 15. —" instead of "Articolul 15", superscripts printed flat, "(21)" for
"(2^1)", line-end hyphenation, page numbers and running headers). The gazette
PDFs carry no electronic signature (`pdfsig`: "does not contain any
signatures"); their SHA-256 is recorded instead.

| Text | Citation and dates | Monitorul Oficial, Partea I (PDF from monitoruloficial.ro e-monitor) | Portal Legislativ | What was read |
|---|---|---|---|---|
| The OUG | Ordonanța de urgență a Guvernului nr. 155 din 30 decembrie 2024 privind instituirea unui cadru pentru securitatea cibernetică a rețelelor și sistemelor informatice din spațiul cibernetic național civil | nr. 1332 din 31 decembrie 2024, pages 2-31 (32 pages); SHA-256 `73ba4d81155f368a3d213f50f75e4f27b9612bd3be10d3a1bb380ff20cc7714d` | base text DetaliiDocumentAfis/293121; consolidation of 06.07.2026: DetaliiDocument/311690 (also served at DetaliiDocument/293121); consolidation of 10.07.2025: DetaliiDocument/298744 | Preamble, Arts 1 to 68, Annexes 1 and 2, in full, in the consolidation of 06.07.2026 and in the gazette |
| First amending law | Legea nr. 124 din 7 iulie 2025 pentru aprobarea Ordonanței de urgență a Guvernului nr. 155/2024 (Articol unic, points 1 to 23); promulgated by Decret nr. 768 din 7 iulie 2025 | nr. 638 din 7 iulie 2025, pages 3-5 (16 pages); SHA-256 `f4904afe4531c0b517a28f58a8bd3072b6998595348a8473aa1d60812aa9fd6f` | DetaliiDocument/299675 | In full |
| Second amending law | Legea nr. 123 din 3 iulie 2026 pentru completarea art. 36 din Ordonanța de urgență a Guvernului nr. 155/2024 […], precum și pentru completarea Legii nr. 286/2009 privind Codul penal; promulgated by Decret nr. 377 din 3 iulie 2026 | nr. 550 din 3 iulie 2026, page 11 (16 pages); SHA-256 `60859b1fabe4aa2b64c0a12bc69f0fb9bfb0e0a95dd556cf76dbb7ad019e4430` | DetaliiDocument/312027 | In full (Art. I and Art. II) |
| Registration order | Ordinul directorului DNSC nr. 1 din 11 august 2025 pentru aprobarea Cerințelor privind procesul de notificare în vederea înregistrării și metoda de transmitere a informațiilor, and the Cerințe with their annex (Formular de notificare) | nr. 776 din 20 august 2025, pages 3-7 (16 pages); SHA-256 `16688e5eea1c93bf660e95ddb6cf81fe95355e5a2b57d94647d8d8fb3159cd29` | DetaliiDocument/301473 (order), 301474 (Cerințe) | In full, form included |
| Criteria and risk-level order | Ordinul directorului DNSC nr. 2 din 11 august 2025 pentru aprobarea Criteriilor și pragurilor de determinare a gradului de perturbare a unui serviciu și a Metodologiei privind evaluarea nivelului de risc al entităților | same issue nr. 776/2025, pages 8-13 | DetaliiDocument/301475 (order), 301476 (Criterii și praguri), 301477 (Metodologie) | In full, the sector table included; the Metodologie both as published and as amended on 27.08.2026 |
| Supervision order | Ordinul directorului DNSC nr. 3 din 27 noiembrie 2025 pentru aprobarea Normelor de aplicare a dispozițiilor privind supravegherea, verificarea și controlul […] și a Metodologiei de prioritizare pe bază de risc a activităților de supraveghere, verificare și control | nr. 1149 din 11 decembrie 2025 (16 pages); SHA-256 `278569cd29a01bc0a416116febf54439cab01330d71f67f5e2413af8619d9f39` | DetaliiDocument/305128 (order), 305129 (Norme), 305130 (Metodologie) | In full |
| Measures order | Ordinul directorului DNSC nr. 1 din 6 august 2026 pentru aprobarea Măsurilor de gestionare a riscurilor de securitate cibernetică aferente rețelelor și sistemelor informatice utilizate de entitățile esențiale și importante și a Metodologiei de autoevaluare a maturității măsurilor de gestionare a riscurilor de securitate cibernetică și pentru modificarea Metodologiei privind evaluarea nivelului de risc al entităților […] | order: nr. 712 din 27 august 2026, page 5 (16 pages); SHA-256 `5f1efeb502033157e1dfadc323668194648151946c6c6706b4a339c44b1ce6a5`. Annexes 1 and 2: nr. 712 bis din 27 august 2026 (324 pages); SHA-256 `8d1587bb54664f4bd67e905cb69f785d93316326cc370ad94b8398617d60ddad` | DetaliiDocument/313799 (order), 314360 (Măsurile; identical copy at 314682), 314361 (Metodologia; identical copy at 314683) | Order in full; Măsurile: Arts 1 to 4, all 218 control statements and the applicability table, both checked against 712 bis; implementation guidance read where cited below; Metodologia in full |
| Completing order | Ordinul directorului DNSC nr. 2 din 14 septembrie 2026 privind completarea Ordinului […] nr. 1/2026 | nr. 792 din 18 septembrie 2026 (16 pages); SHA-256 `37c9fa0ae36e1bc21f00c6804c71ee6a0426e5e3855682e8b5c88fb92a2e6963` | DetaliiDocument/314676 | In full |
| Group rules | Decizia directorului DNSC nr. 3 din 14 septembrie 2026 pentru aprobarea Normelor de aplicabilitate a cerințelor de securitate cibernetică pentru entitățile care fac parte dintr-un grup de întreprinderi | nr. 798 din 21 septembrie 2026, pages 7-10 (16 pages); SHA-256 `125b9ae53a71e88d4229e96dfef41a64a52148e0ef26b895657abb828a88ad40` | DetaliiDocument/314698 (decision), 314699 (Norme) | In full |

Further texts read, each only where it is cited below:

| Text | Where | What was read |
|---|---|---|
| Legea nr. 346/2004 privind stimularea înființării și dezvoltării întreprinderilor mici și mijlocii (MO nr. 681 din 29 iulie 2004), the SME law OUG Art. 8 refers to | Portal, consolidation of 12.12.2025, DetaliiDocument/304501 | Arts 1 to 8 |
| Legea nr. 58/2023 privind securitatea și apărarea cibernetică a României (MO nr. 214 din 15 martie 2023) | Portal, DetaliiDocument/265677; the portal records no amending act ("Nu exista actiuni suferite de acest act"); MO 214/2023 PDF, SHA-256 `d35f40139ecf2213e21d92224dd0ad6efec87a35b1abb1ab50adaf9591ee64cd` | Arts 3 to 7 and 20 to 23 |
| Legea nr. 294/2024 privind reziliența entităților critice (MO nr. 1189 din 29 noiembrie 2024), the CER transposition | Portal, DetaliiDocument/291491; MO 1189/2024 PDF, SHA-256 `2310beffe0be06dba0d5cefabb2519d03bab7f304bcedc524f721f8b9f5148ff` | Arts 1, 2 and 6, and the provisions on the Prime Minister's decisions |
| Legea nr. 119 din 3 iulie 2026 privind evidența și administrarea infrastructurii digitale publice (MO nr. 550 din 3 iulie 2026, pages 4-7) | Portal, DetaliiDocument/312019; checked against MO 550/2026 | In full |
| Legea nr. 24/2000 privind normele de tehnică legislativă, republicată | Portal, consolidation of 15.12.2022, DetaliiDocument/262035 | Arts 11 and 12 |
| Constituția României, republicată (MO nr. 767 din 31 octombrie 2003) | Portal, DetaliiDocument/47355 | Arts 13, 78 and 115 |
| Ordonanța de urgență a Guvernului nr. 104/2021 privind înființarea Directoratului Național de Securitate Cibernetică (MO nr. 918 din 24 septembrie 2021) | Portal, DetaliiDocumentAfis/262595 | Arts 1 and 7 |
| Autoritatea pentru Digitalizarea României: Procedură din 20 martie 2026 de supraveghere, suspendare, retragere și luare a măsurilor pentru prestatorii de servicii de încredere calificate și necalificate, approved by Decizia ADR nr. 162 din 20 martie 2026 | Portal, DetaliiDocument/309010; MO nr. 246 bis din 30 martie 2026 (66 pages), SHA-256 `221dd0364d75a0998a844e1d17386cd7c901222f642491a94d02aaeaa6933783` | Arts 1 to 12 and 27 |
| HG nr. 1.115 din 18 decembrie 2025 (Măsuri and Proceduri under Legea nr. 294/2024, MO nr. 1214 din 30 decembrie 2025) | Portal, DetaliiDocument/306188 and 306187; MO 1214/2025 PDF, SHA-256 `895ef626963fb7d49d36a40decb9d49b3de17ffd5c1b87a50588bd507b87b3f9` | The passages that cite the OUG |
| Regulamentul de punere în aplicare (UE) 2024/2690 al Comisiei, Romanian version | EUR-Lex, `CELEX:32024R2690`, read through headless Chromium | Arts 1, 2, 3 and 16 |
| Directiva (UE) 2022/2555, Romanian version (OJ L 333, 27.12.2022) | EUR-Lex, `CELEX:32022L2555`, read through headless Chromium | Arts 20, 23, 32, 33 and 34, for comparison only |
| Senate legislative record L7/2025 | senat.ro, `legis/lista.aspx?nr_cls=L7&an_cls=2025` | The procedure record |

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The OUG transposes NIS2 | OUG, closing clause | "Prezenta ordonanță de urgență transpune Directiva (UE) 2022/2555 a Parlamentului European și a Consiliului din 14 decembrie 2022 privind măsuri pentru un nivel comun ridicat de securitate cibernetică în Uniune" | This emergency ordinance transposes Directive (EU) 2022/2555. | verified |
| An emergency ordinance takes effect on publication, after deposit with Parliament | Constitution Art. 115(5); Legea nr. 24/2000 Art. 12(2) | "Ordonanța de urgență intră în vigoare numai după depunerea sa spre dezbatere în procedura de urgență la Camera competentă să fie sesizată și după publicarea ei în Monitorul Oficial al României." … "Ordonanțele de urgență ale Guvernului intră în vigoare la data publicării în Monitorul Oficial al României, Partea I, sub condiția depunerii lor prealabile la Camera competentă să fie sesizată, dacă în cuprinsul lor nu este prevăzută o dată ulterioară." | An emergency ordinance enters into force only after its deposit with the competent Chamber and its publication; the OUG names no later date, so it took effect on 31 December 2024, the day of both. | verified |
| Deposit with the Senate on the day of publication | Senate record L7/2025 | "Înregistrat la Senat pentru dezbatere  cu nr.b667 (adresa nr.E267/31/12/2024)" … "A devenit Legea nr.124/07.07.2025 publicatã în M.O. nr.638/07.07.2025" | Registered with the Senate on 31-12-2024; it became Legea nr. 124/2025. | verified |
| A law takes effect three days after publication | Constitution Art. 78; Legea nr. 24/2000 Art. 12(1) | "Legea se publică în Monitorul Oficial al României și intră în vigoare la 3 zile de la data publicării sau la o dată ulterioară prevăzută în textul ei." … "Termenul de 3 zile se calculează pe zile calendaristice, începând cu data publicării în Monitorul Oficial al României, și expiră la ora 24,00 a celei de-a treia zi de la publicare." | Legea nr. 124/2025 (published 7 July 2025) and Legea nr. 123/2026 (published 3 July 2026) name no later date; the Portal dates their amendments "la 10-07-2025" and "la 06-07-2026". | verified (the two effective dates are the Portal's) |
| DNSC is a central specialised administration body; its normative orders and decisions are published in the gazette | OUG nr. 104/2021 Art. 1(1), Art. 7(3), (4) | "Se înființează Directoratul Național de Securitate Cibernetică, denumit în continuare DNSC, organ de specialitate al administrației publice centrale, în cadrul aparatului de lucru al Guvernului și în coordonarea prim-ministrului" … "În exercitarea atribuțiilor sale, directorul DNSC emite decizii și ordine." … "Deciziile și ordinele cu caracter normativ se publică în Monitorul Oficial al României, Partea I." | So Art. 11(1) and 12(3) of Legea nr. 24/2000 apply to DNSC's orders and decisions. | verified |
| A DNSC order takes effect on publication unless it says otherwise | Legea nr. 24/2000 Art. 12(3) | "Actele normative prevăzute la art. 11 alin. (1), cu excepția legilor și a ordonanțelor, intră în vigoare la data publicării în Monitorul Oficial al României, Partea I, dacă în cuprinsul lor nu este prevăzută o dată ulterioară." | Ordin 1/2025 and Ordin 2/2025 took effect on 20 August 2025, Ordin 1/2026 on 27 August 2026, Ordin 2/2026 on 18 September 2026, Decizia 3/2026 on 21 September 2026; none names a later date. | verified |
| Ordin 3/2025 says so itself, and repeals the 2022 control rules | Ordin 3/2025 Art. 4, Art. 5 | "La data intrării în vigoare a prezentului ordin se abrogă Ordinul directorului Directoratului Național de Securitate Cibernetică nr. 105/2022" … "Prezentul ordin se publică în Monitorul Oficial al României, Partea I, și intră în vigoare la data publicării." | In force 11 December 2025; Ordin 105/2022 repealed. | verified |
| The NIS1 law is repealed, its chapter IV and V measures saved until revised | OUG Art. 66(1)(a), (2) | "Legea nr. 362/2018 privind asigurarea unui nivel comun ridicat de securitate a rețelelor și sistemelor informatice, publicată în Monitorul Oficial al României, Partea I, nr. 21 din 9 ianuarie 2019, cu excepția măsurilor adoptate sau impuse în temeiul dispozițiilor din capitolele IV și V, care rămân în vigoare până la revizuirea acestora, conform art. 65;" … "Trimiterile făcute prin alte acte normative la Legea nr. 362/2018 privind asigurarea unui nivel comun ridicat de securitate a rețelelor și sistemelor informatice se consideră a fi făcute la prezenta ordonanță de urgență." | Legea 362/2018 is repealed except the measures adopted under its chapters IV and V, which stay until revised; references to it are read as references to the OUG. | verified |
| The telecom security chapter of OUG 111/2011 is repealed; ANCOM's Decision 70/2024 stays until revised | OUG Art. 66(1)(b), Art. 64(1) | "art. 4 alin. (1) pct. 54^1 și 54^2, precum și capitolul IV: Securitatea rețelelor și serviciilor de comunicații electronice din Ordonanța de urgență a Guvernului nr. 111/2011;" … "Măsurile adoptate sau impuse de ANCOM în temeiul dispozițiilor din capitolul IV din Ordonanța de urgență a Guvernului nr. 111/2011, prin Decizia nr. 70/2024 a președintelui ANCOM privind securitatea rețelelor publice de comunicații electronice și a serviciilor de comunicații electronice destinate publicului, rămân în vigoare până la revizuirea acestora." | ANCOM's 2024 security measures for public e-communications remain in force until revised. Decision 70/2024 itself was not read. | verified |
| Only two acts have amended the OUG | Portal, "Acțiuni suferite" of act 293121 (read 2026-10-29) | "ART. 36 \| COMPLETAT DE \| LEGE 123 03/07/2026" … "ANEXA 2 \| MODIFICAT DE \| LEGE 124 07/07/2025" | Every recorded action is by Legea nr. 124/2025 or Legea nr. 123/2026. | verified |

Further facts of record, read on the Portal on 2026-10-29:

- **The complete list of DNSC acts on the Portal.** A search by issuer
  ("Directoratul Național de Securitate Cibernetică", issuer id 483) returns 23
  acts since 2021: Decizia 301/2021 (tariffs); Ordin 105/2022 and its Norme
  (control rules under the NIS1 law, repealed by Ordin 3/2025); Ordin 106/2022
  and its Norme (authorisation of cybersecurity training providers); Decizia
  107/2022 (training curricula for auditors, CSIRT members and "responsabilii cu
  securitatea rețelelor și sistemelor informatice"); Ordin 100/2024 (PNRISC
  confidentiality and transparency policies, under Legea 58/2023); Ordin
  180/2024 and its Metodologie (cyber alert levels, under Legea 58/2023); and
  the OUG acts listed in the table above. Ordin 106/2022, Decizia 107/2022 and
  Ordin 100/2024 carry no recorded amendment or repeal; 106/2022 and 107/2022
  were made under Legea 362/2018 (Decizia 107/2022 cites "art. 32 alin. (2)
  lit. e) și ale art. 33 alin. (2) lit. e) din Legea nr. 362/2018"), and
  whether they survive under the saving clause of OUG Art. 66(1)(a) was not
  established.
- **Not on the Portal**: the DNSC order on "Normele metodologice privind
  raportarea incidentelor" required by OUG Art. 15(17) and Art. 65(1)(c)
  ("în termen de 120 de zile de la data intrării în vigoare"); the national
  crisis plan (Art. 65(1)(e)); the CSIRT, training-provider and auditor rules of
  Art. 65(1)(f) to (h) and (j) to (l); the curricula decisions of Art. 65(2);
  any joint order of DNSC and a sector authority under Art. 37(8)(b); any
  Government decision designating a sector authority under Art. 37(5); the
  Government decision setting up the Corpul Auditorilor de Sisteme Informatice
  din România (Art. 59(1)). The Portal's "Referit de" list of the OUG (acts that
  refer to it) lists none of them either.
- The Portal's "Referit de" list also names HG nr. 462/2025 (the Ministry of
  Energy runs a CSIRT "în conformitate cu secțiunea a 4-a a cap. V din
  Ordonanța de urgență a Guvernului nr. 155/2024") and HG nr. 807/2026 (an
  investment note of the Ministry of Defence); neither bears on the duties of
  entities.

How the texts were reached:

- **Portal Legislativ**, plain HTTPS with a browser User-Agent, no challenge
  met: `DetaliiDocument/<id>` pages; the act sheet through its own POST
  endpoints `Public/actiuniSuferite` and `Public/referitDe` (form field
  `contor=<id>`); the issuer search `Public/RezultateCautare?sectiuneact=483`.
  The Portal's own pages carry the notice "Conținutul acestui material nu
  reprezintă în mod obligatoriu poziția oficială a Uniunii Europene sau a
  Guvernului României", which is why each text was also read in the gazette.
- **Monitorul Oficial**: `monitoruloficial.ro/Monitorul-Oficial--PI--<nr>--<year>.html`
  returns the issue PDF when requested with the e-monitor page as Referer; the
  e-monitor page states "Formatul electronic gratuit și liber este de document
  portabil, fără filigran sau inscripții suplimentare formatului tipărit"
  (Legea nr. 202/1998). The "bis" issues 712 bis/2026 and 246 bis/2026 were
  obtained the same way, although the order says 712 bis "se poate achiziționa".
  Text layers extracted with `pdftotext` (raw and `-layout`). The 218 control
  statements of the measures were found one by one in 712 bis, and the
  applicability table of 712 bis was parsed column by column: 218 rows, zero
  differences from the Portal.
- **DNSC**: `dnsc.ro` answers curl, WebFetch and headless Chromium with a
  Cloudflare managed challenge ("Efectuarea verificării de securitate"), still
  unsolved after 25 seconds; `platformanis2.ro` answers all three with a
  Cloudflare block page ("Sorry, you have been blocked"). No bypass was tried.
  `pnrisc.dnsc.ro` answers plain HTTPS (landing page and `/raporteaza` read);
  headless Chromium is blocked on `/raporteaza` by a web application firewall
  ("Web Page Blocked!"). The Internet Archive held no capture of the DNSC NIS 2
  page and rate-limited further requests (HTTP 429).
- **EUR-Lex**: curl received an empty 202; headless Chromium read the Romanian
  HTML of Implementing Regulation (EU) 2024/2690 and of the directive.
- **Every quote in this file was checked mechanically**: 442 fragments of the
  "Verbatim (official)" columns, each found in the text read. Every fragment
  from a text published in a gazette issue listed above was also found in that
  issue's text layer, except four where the PDF text layer drops a line-end
  hyphen or interleaves two columns (OUG Art. 4(g) "administrativ-teritorială",
  the replaced Art. 6(3) of the 2025 methodology "business-to-business",
  control PR.AT-02.1 "le-au", HG 1.115/2025 Măsuri Art. 1(2)); those four were
  compared by eye in the `-layout` extraction. Quotes from the Constitution,
  Legea nr. 24/2000, Legea nr. 346/2004 (consolidated), the Senate record, the
  Portal's act sheet and notes, PNRISC and EUR-Lex were checked against those
  pages only (their gazette issues were not downloaded or do not exist). Where
  the Portal and the gazette differ in spacing or a sign, the gazette's form is
  quoted ("c)-f)", "CyFun®", "la art. 20 din Legea").

## Scope: the two classes, the territorial rule and the size test

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=data,prompt; guard=packages/regulatory-data/test/ro-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/national-size-tests.test.ts -->

The OUG keeps the directive's two classes, "entități esențiale" (Art. 5) and
"entități importante" (Art. 6), over the sectors of Annex 1 ("Sectoare cu o
importanță critică ridicată") and Annex 2 ("Alte sectoare de importanță
critică"). Size is measured with the national SME law, Legea nr. 346/2004, not
with Recommendation 2003/361/EC directly.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Essential at any size: six cases | OUG Art. 5(1) | "Următoarele entități sunt considerate esențiale, indiferent de dimensiunea pe care o au:" … "a) entitățile administrației publice centrale în conformitate cu anexa nr. 1;" … "b) entitățile din anexa nr. 1 sau nr. 2 identificate în conformitate cu art. 9;" … "c) entitățile identificate drept entități critice conform dispozițiilor legale privind reziliența entităților critice;" … "d) furnizorii de servicii DNS;" … "e) prestatori de servicii de încredere calificați;" … "f) registrele de nume TLD." | Essential whatever their size: central public administration per Annex 1; Annex 1 or 2 entities identified under Art. 9; critical entities under the critical-entities resilience law; DNS service providers; qualified trust service providers; TLD name registries. | verified |
| Essential by size: large in Annex 1 | OUG Art. 5(2) | "Sunt considerate esențiale entitățile din categoria întreprinderilor mari conform art. 8 și care se încadrează în sectoarele prevăzute în anexa nr. 1." | Large enterprises in an Annex 1 sector are essential. | verified |
| Essential from medium: public e-communications | OUG Art. 5(3) | "Sunt considerate esențiale entitățile din categoria întreprinderilor mijlocii conform art. 8 și care sunt furnizori de rețele publice de comunicații electronice sau furnizori de servicii de comunicații electronice destinate publicului." | Medium-sized providers of public e-communications networks or publicly available services are essential. | verified |
| **Essential from medium: managed security service providers** | OUG Art. 5(4) | "Sunt considerate esențiale entitățile din categoria întreprinderilor mijlocii conform art. 8 și care sunt furnizori de servicii de securitate gestionate." | A medium-sized MSSP is essential. The directive makes a medium MSSP important (it is an Annex I type, essential only when large, Art. 3(1)(a)); this is an inverted ladder. | verified |
| Important by size | OUG Art. 6(1) | "Sunt considerate entități importante entitățile din categoriile întreprinderilor mari și mijlocii conform art. 8, care se încadrează în anexele nr. 1 și 2 și care nu sunt identificate drept entități esențiale conform art. 5." | Large and medium enterprises of Annexes 1 and 2 that are not essential are important. | verified |
| Important at any size: three cases | OUG Art. 6(2) | "Următoarele entități sunt considerate importante dacă nu au fost identificate drept entități esențiale conform art. 5 și indiferent de dimensiunea pe care o au:" … "a) entitățile din anexele nr. 1 și 2 identificate în conformitate cu art. 9;" … "b) furnizorii de rețele publice de comunicații electronice și furnizorii de servicii de comunicații electronice destinate publicului;" … "c) prestatorii de servicii de încredere." | Important whatever their size, unless essential: Annex 1 or 2 entities identified under Art. 9; public e-communications providers; trust service providers. | verified |
| Territorial rule: established and registered in Romania | OUG Art. 7(1) | "Entitățile care intră în domeniul de aplicare al prezentei ordonanțe de urgență sunt entitățile din sectoarele prevăzute în anexele nr. 1 și 2, înființate și înregistrate pe teritoriul României conform prevederilor legale." | In scope: entities of the annex sectors set up and registered in Romania. | verified |
| E-communications: providing services in Romania suffices | OUG Art. 7(2) | "Prin excepție de la alin. (1), furnizorii de rețele publice de comunicații electronice sau furnizorii de servicii de comunicații electronice destinate publicului intră în domeniul de aplicare al prezentei ordonanțe de urgență atunci când prestează servicii pe teritoriul României, indiferent de locul de înființare sau de înregistrare." | E-communications providers are in scope when they provide services in Romania, wherever established. | verified |
| Digital types: main EU establishment in Romania | OUG Art. 7(3) | "Furnizorii de servicii DNS, registrele de nume TLD, entitățile care furnizează servicii de înregistrare a numelor de domenii, furnizorii de servicii de cloud computing, furnizorii de servicii de centre de date, furnizorii de rețele de furnizare de conținut, furnizorii de servicii gestionate, furnizorii de servicii de securitate gestionate, precum și furnizorii de piețe online, de motoare de căutare online și de platforme de servicii de socializare în rețea intră în domeniul de aplicare al prezentei ordonanțe de urgență atunci când sediul principal al acestora din Uniunea Europeană este situat pe teritoriul României." | DNS, TLD, domain registration, cloud, data centre, CDN, MSP, MSSP, marketplace, search engine and social network providers are in scope when their main EU establishment is in Romania. | verified |
| How the main establishment is found | OUG Art. 7(5) | "a) este sediul în care se iau deciziile legate de măsurile de gestionare a riscurilor în materie de securitate cibernetică în mod predominant;" … "b) atunci când nu se poate stabili sediul principal conform lit. a) sau dacă astfel de decizii nu sunt luate în Uniunea Europeană, se consideră a fi sediul în care își desfășoară operațiunile de securitate cibernetică;" … "c) atunci când nu se poate stabili sediul principal conform lit. b), acesta este considerat a fi în statul în care entitatea în cauză își are sediul cu cel mai mare număr de angajați." | Where cybersecurity risk decisions are predominantly taken; else where cybersecurity operations are carried out; else where the establishment with the most employees is. | verified |
| Non-EU digital providers: an EU representative | OUG Art. 7(6), (7) | "Atunci când, în situația descrisă la alin. (3), entitatea nu este stabilită în Uniunea Europeană, dar oferă servicii pe teritoriul acesteia, entitatea este obligată să desemneze un reprezentant în Uniunea Europeană, în cadrul unuia dintre statele membre în care își prestează serviciile. În acest caz, entitatea se consideră a fi sub jurisdicția statului membru în care este stabilit reprezentantul." | A non-EU Art. 7(3) provider serving the EU designates a representative in a Member State where it provides services, and falls under that State's jurisdiction; DNSC may sue one serving Romania without a representative (Art. 7(7)). | verified |
| Foreign public administrations | OUG Art. 7(4) | "Entitățile administrației publice străine sunt în jurisdicția statului care le-a instituit." | Foreign public administration entities fall under the State that set them up. | verified |

### The size test: Legea nr. 346/2004, by reference

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Large and medium defined through the SME law, its public-body rule disapplied | OUG Art. 8(1), (2) | "O entitate este considerată întreprindere mare dacă depășește criteriile stabilite pentru întreprinderile mijlocii astfel cum sunt prevăzute la art. 4 alin. (1) lit. c) din Legea nr. 346/2004 privind stimularea înființării și dezvoltării întreprinderilor mici și mijlocii, cu modificările și completările ulterioare, fără a fi aplicate însă dispozițiile art. 4^5 din aceeași lege." … "O entitate este considerată întreprindere mijlocie dacă îndeplinește criteriile prevăzute la art. 4 alin. (1) lit. c) din legea prevăzută la alin. (1), fără a fi aplicate însă dispozițiile art. 4^5 din aceeași lege." | Large: exceeds the medium-enterprise criteria of Art. 4(1)(c) of Legea 346/2004. Medium: meets them. Art. 4^5 of that law does not apply. | verified |
| The three categories of the SME law | Legea nr. 346/2004 Art. 4(1)(a) to (c) | "a) microîntreprinderi - au până la 9 salariați și realizează o cifră de afaceri anuală netă sau dețin active totale de până la 2 milioane euro, echivalent în lei;" … "b) întreprinderi mici - au între 10 și 49 de salariați și realizează o cifră de afaceri anuală netă sau dețin active totale de până la 10 milioane euro, echivalent în lei;" … "c) întreprinderi mijlocii - au între 50 și 249 de salariați și realizează o cifră de afaceri anuală netă de până la 50 milioane euro, echivalent în lei, sau dețin active totale care nu depășesc echivalentul în lei a 43 milioane euro." | Micro: up to 9 employees and turnover or total assets up to EUR 2 M. Small: 10 to 49 employees and turnover or total assets up to EUR 10 M. Medium: 50 to 249 employees and turnover up to EUR 50 M or total assets up to EUR 43 M. All in the lei equivalent. | verified |
| What total assets are | Legea nr. 346/2004 Art. 3(1)(b) | "Prin active totale se înțelege active imobilizate plus active circulante plus cheltuieli în avans;" | Total assets: fixed assets plus current assets plus prepaid expenses. | verified |
| The disapplied rule: 25 % held by public bodies | Legea nr. 346/2004 Art. 4^5 | "Cu excepția cazurilor prevăzute la alin. (3) al art. 4^2, o întreprindere nu poate fi considerată mică sau mijlocie dacă cel puțin 25% din capitalul social ori din drepturile de vot ale acesteia sunt controlate, direct sau indirect, în comun ori cu titlu individual, de către una sau mai multe organisme ori colectivități publice." | The rule that an enterprise 25 % controlled by public bodies is not an SME. OUG Art. 8 switches it off, as the directive's Art. 2(1) second subparagraph does for Recommendation Art. 3(4). | verified |
| Figures from the previous year's approved accounts; status changes after two consecutive years | Legea nr. 346/2004 Art. 6(1), (2), (3) | "Datele utilizate pentru calculul numărului mediu anual de salariați, cifra de afaceri netă anuală și activele totale sunt cele raportate în situațiile financiare aferente exercițiului financiar precedent, aprobate de adunarea generală a acționarilor sau asociaților." … "aceasta nu își va pierde calitatea de întreprindere mică, mijlocie sau microîntreprindere decât dacă depășirea acestor plafoane se produce în două exerciții financiare consecutive." … "datele cu privire la numărul mediu anual de salariați, cifra de afaceri anuală netă și activele totale se determină în cursul exercițiului financiar și se declară pe propria răspundere de către reprezentantul/reprezentanții întreprinderii în cauză." | The previous financial year's approved statements; a category is lost only when exceeded in two consecutive financial years; a new enterprise declares its own figures. | verified |
| Partner and linked enterprises are aggregated | Legea nr. 346/2004 Art. 6(5) to (7) | "În cazul unei întreprinderi autonome, datele, inclusiv numărul mediu anual de salariați, vor fi stabilite exclusiv pe baza situațiilor financiare anuale ale întreprinderii respective." … "Datele prevăzute la alin. (6) se vor cumula în proporție de 100% cu datele oricărei întreprinderi care este legată direct sau indirect de întreprinderea în cauză, dacă datele nu sunt deja incluse în situațiile financiare anuale consolidate." | Autonomous: own accounts only. Partners: pro rata to the holding (Art. 6(6)); linked: 100 %. Autonomous, partner and linked are defined in Arts 4^1 to 4^4. | verified |
| The size goes into the notification and is evidenced | Ordin 1/2025, Cerințe Art. 5(2)(a), 5(4)(a); form | "date privind dimensiunea entității, astfel: numărul mediu anual de salariați, cifra de afaceri anuală netă și totalul activelor, conform dispozițiilor legale." … "documentele care atestă încadrarea în plafoanele corespunzătoare întreprinderilor mijlocii sau mari" … "Dimensiunea entității, conform Legii nr. 346/2004:" | The form asks the average annual headcount, net turnover and total assets, and "the size of the entity under Legea 346/2004"; documents proving the medium or large ceilings must be attached. | verified |

**Reading, not resolved: a gap in the national size bands.** Art. 4(1)(c) of
Legea nr. 346/2004 makes "between 50 and 249 employees" part of the medium
category, and OUG Art. 8(1) defines a large enterprise as one that exceeds the
medium criteria. Read literally, an enterprise with fewer than 50 employees
whose turnover and total assets both exceed EUR 10 million, without exceeding
EUR 50 million and EUR 43 million, falls in none of the four categories: it is
not small (Art. 4(1)(b)), not medium (headcount below 50), and it exceeds no
medium criterion. Under Recommendation 2003/361/EC such an enterprise is medium
(Annex Art. 2(2): small requires turnover and/or balance sheet not above EUR
10 million). No DNSC reading of this case was found (DNSC's pages were not
reachable). A classifier must not decide it either way; it should flag it.

What the product does with it (2026-10-30): the transposition reference and
`ro.yaml` state the national size test, its gap and the essential medium MSSP,
and the document context tells a generated document not to classify an
enterprise that falls in the gap. The scoping engine (`scoping.ts`) has no
Romanian layer: it still applies the Recommendation and the directive's
classes to a Romanian organisation.

Checked for the scoping engine on 2026-10-30, and left out of it on purpose.
Outside the gap, the bands of Art. 4(1) give the answer
`classifyEnterpriseSize` gives: medium is "între 50 și 249 de salariați" with
turnover "de până la 50 milioane euro" or assets that "nu depășesc" EUR 43
million, the Recommendation's medium band from 50 employees, and large is the
reading of "depășește" in the classifier block below. The engine departs from
the national text only inside the gap, where it says medium and the text says
none; this record says not to decide that case, so no national entry decides
it. The essential medium MSSP of Art. 5(4) is not applied either: the
questionnaire's ICT service management sector holds MSPs and MSSPs together,
and telling them apart needs a question it does not ask.
`packages/regulatory-data/test/national-size-tests.test.ts` lists Romania as
open, with both reasons.

## Scope: the Art. 9 route, identification by criteria and self-assessed thresholds

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Art. 9 is how an entity of an annex sector becomes essential or important
whatever its size (Art. 5(1)(b), 6(2)(a)). Ordin DNSC nr. 2/2025 turns two of
its four criteria into thresholds the entity assesses itself in its
notification, and settles which class the other criteria give.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The four criteria | OUG Art. 9 | "O entitate este considerată esențială sau importantă dacă:" … "a) entitatea este singurul furnizor al unui serviciu care este esențial pentru susținerea unor activități societale și economice critice;" … "b) perturbarea serviciului furnizat de entitate ar putea avea un impact semnificativ asupra siguranței publice, a securității publice sau a sănătății publice;" … "c) perturbarea serviciului furnizat de entitate ar putea genera un risc sistemic semnificativ, în special pentru sectoarele în care o astfel de perturbare ar putea avea un impact transfrontalier;" … "d) entitatea este critică datorită importanței sale specifice la nivel național sau regional pentru sectorul sau tipul de servicii în cauză sau pentru alte sectoare interdependente." | Sole provider of a service essential for critical activities; disruption with significant impact on public safety, security or health; disruption generating significant systemic risk; critical because of specific national or regional importance. | verified |
| The impact dimensions, set by DNSC order | OUG Art. 10(1), (2) | "a) impactul asupra drepturilor și libertăților fundamentale;" … "f) impactul transsectorial sau transfrontalier." … "Criteriile prevăzute la alin. (1), pragurile corespunzătoare acestora și metodologia de evaluare a nivelului de risc al entităților se stabilesc prin ordin al directorului DNSC." | Fundamental rights; national economy; health and life; financial; defence, public order and national security; cross-sector or cross-border. Criteria, thresholds and the risk methodology are set by DNSC order. | verified |
| Who assesses the disruption: entities not already qualified | Ordin 2/2025 Art. 1(1), (3) | "care nu au fost calificate drept entități esențiale sau entități importante conform art. 5 alin. (1) lit. a) și c)-f) și alin. (2)-(4), art. 6 alin. (1) și alin. (2) lit. b) și c) și nici conform art. 9 lit. a) și d) din același act normativ, realizează evaluarea gradului de perturbare a serviciilor în vederea completării informațiilor solicitate conform Ordinului directorului Directoratului Național de Securitate Cibernetică nr. 1/2025" … "Atunci când se realizează evaluarea gradului de perturbare, entitățile se raportează la toate serviciile pe care le prestează și care se încadrează în anexele nr. 1 și 2" | Entities not qualified by any other route assess the disruption of all their annex services, for the notification form and to set their category of measures. | verified |
| Sole provider in Romania: Annex 1 essential, Annex 2 important | Ordin 2/2025 Art. 2 | "a) o entitate care este unic furnizor în România al unui serviciu prevăzut în anexa nr. 1 la Ordonanța de urgență a Guvernului nr. 155/2024 este entitate esențială dacă nu a fost identificată astfel conform celorlalte criterii prevăzute la art. 5 din același act normativ;" … "b) o entitate care este unic furnizor în România al unui serviciu prevăzut în anexa nr. 2 la Ordonanța de urgență a Guvernului nr. 155/2024 este entitate importantă dacă nu a fost identificată astfel conform celorlalte criterii prevăzute la art. 6 din același act normativ." | The Art. 9(a) self-analysis: sole provider in Romania of an Annex 1 service makes the entity essential; of an Annex 2 service, important. | verified |
| Thresholds: high in Annex 1 gives essential, medium gives important | Ordin 2/2025, annex 1 (Criterii și praguri) Art. 2(4) | "a) orice entitate din sectoarele din anexa nr. 1 la Ordonanța de urgență a Guvernului nr. 155/2024 care nu a fost identificată drept entitate esențială conform celorlalte criterii prevăzute la art. 5 din același act normativ, dar care atinge sau depășește pragul ridicat al impactului generat de perturbarea serviciului furnizat, este entitate esențială;" … "b) orice entitate din sectoarele din anexele nr. 1 și 2 la Ordonanța de urgență a Guvernului nr. 155/2024 care nu a fost identificată drept entitate importantă conform celorlalte criterii prevăzute la art. 6 din același act normativ sau nu a fost identificată ca entitate esențială conform lit. a), dar care atinge sau depășește pragul mediu al impactului generat de perturbarea serviciului furnizat, este entitate importantă." | Any Annex 1 entity reaching the high impact threshold is essential; any Annex 1 or 2 entity reaching the medium threshold is important. | verified |
| Which dimensions serve which criterion | Criterii Art. 2(2), (3); Art. 1(3) | "se evaluează nivelul impactului în conformitate cu art. 10 alin. (1) lit. a)-d) din același act normativ." … "se evaluează nivelul impactului în conformitate cu art. 10 alin. (1) lit. f) din același act normativ." … "Atunci când sunt aplicabile cel puțin două dintre lit. a)-f) ale alin. (2), impactul entității este determinat de nivelul cel mai crescut dintre nivelurile rezultate în urma analizei efectuate conform prevederilor ordinului." | Art. 9(b) uses dimensions (a) to (d) of Art. 10(1); Art. 9(c) uses (f); where two or more dimensions apply, the highest level resulting counts. | verified |
| Fundamental rights thresholds | Criterii Art. 3 | "Impactul asupra drepturilor și libertăților fundamentale este ridicat atunci când sunt afectate datele cu caracter personal a mai mult de 1.000.000 de persoane sau când este afectat accesul la serviciile publice esențiale pentru un număr de cel puțin 115.000 de persoane." … "Impactul asupra drepturilor și libertăților fundamentale este mediu atunci când sunt afectate datele cu caracter personal a mai mult de 200.000 de persoane sau când este afectat accesul la serviciile publice esențiale pentru un număr de cel puțin 25.000 de persoane." | High: personal data of more than 1,000,000 persons, or access to essential public services for at least 115,000. Medium: more than 200,000, or at least 25,000. | verified |
| National economy thresholds | Criterii Art. 4 | "Impactul asupra economiei naționale este ridicat atunci când sunt provocate pierderi de peste 0,1% din PIB-ul României, atunci când este afectată cel puțin 25% din valoarea serviciilor din unul dintre sectoarele din anexele nr. 1 și 2 la Ordonanța de urgență a Guvernului nr. 155/2024 sau atunci când sunt provocate distrugeri la nivelul infrastructurii critice" … "Impactul asupra economiei naționale este mediu atunci când este afectată furnizarea serviciilor din unul dintre sectoarele din anexele nr. 1 și 2 la Ordonanța de urgență a Guvernului nr. 155/2024 sau atunci când este afectată funcționarea infrastructurii critice" | High: losses above 0.1 % of GDP, at least 25 % of the value of a sector's services affected, or destruction of critical infrastructure. Medium: the provision of services of an annex sector is affected, or the operation of critical infrastructure. | verified |
| Health and life thresholds | Criterii Art. 5 | "Impactul asupra sănătății și vieții persoanelor este ridicat atunci când este provocat decesul, îmbolnăvirea cronică sau infirmitatea a mai mult de 50 de persoane sau atunci când sunt provocate leziuni traumatice sau este afectată sănătatea a mai mult de 115.000 de persoane." … "Impactul asupra sănătății și vieții persoanelor este mediu atunci când sunt provocate leziuni traumatice sau când este afectată sănătatea persoanelor." | High: death, chronic illness or disability of more than 50 persons, or injury or health effects for more than 115,000. Medium: injuries or health effects, no number. | verified |
| Financial thresholds | Criterii Art. 6 | "Impactul financiar este ridicat atunci când este provocată pierderea a cel puțin 2.500 de lei asupra a cel puțin 115.000 de persoane." … "Impactul financiar este mediu atunci când este provocată pierderea a cel puțin 2.500 de lei asupra a cel puțin 25.000 de persoane." | High: a loss of at least RON 2,500 for at least 115,000 persons. Medium: the same loss for at least 25,000. | verified |
| Defence, public order, national security | Criterii Art. 7 | "Impactul asupra apărării, ordinii publice și securității naționale este ridicat atunci când este afectată capacitatea statului de a asigura apărarea, ordinea publică și securitatea națională" … "Impactul asupra apărării, ordinii publice și securității naționale este mediu atunci când este afectată capacitatea statului de a asigura activități din sfera apărării, ordinii publice și securității naționale, cu consecințe potențial grave pentru siguranța persoanelor și a proprietății private." | Qualitative thresholds. | verified |
| Cross-sector or cross-border thresholds | Criterii Art. 8 | "Impactul transsectorial sau transfrontalier este ridicat atunci când sunt afectate cel puțin două sectoare și cel puțin 20% din serviciile esențiale din cel puțin un sector" … "Impactul transsectorial sau transfrontalier este mediu atunci când sunt afectate cel puțin două sectoare și cel puțin 5% din serviciile esențiale din cel puțin un sector" | High: at least two sectors and at least 20 % of a sector's essential services (or Romania's international obligations can no longer be met). Medium: at least two sectors and 5 % (or those obligations are affected). | verified |
| The form carries the four criteria | Ordin 1/2025, Cerințe, annex (Formular de notificare), "Situații specifice" | "9a. Entitatea este singurul furnizor al unui serviciu care este esențial pentru susținerea unor activități societale și economice critice." … "9b. Perturbarea serviciului furnizat de entitate ar putea avea un impact semnificativ asupra siguranței publice, a securității publice sau a sănătății publice." … "Scăzut/Mediu/Ridicat" … "9d. Entitatea este critică datorită importanței sale specifice la nivel național sau regional pentru sectorul sau tipul de servicii în cauză sau pentru alte sectoare interdependente." | 9a and 9d are yes/no; 9b and 9c are low/medium/high. | verified |
| Art. 9(d) includes infrastructures of national interest under the 5G law | Cerințe Art. 5(3)(c) | "rezultatele autoanalizei privind furnizarea de servicii care depind de infrastructuri informatice și de comunicații de interes național, astfel cum sunt definite la art. 2 lit. d) din Legea nr. 163/2021 privind adoptarea unor măsuri referitoare la infrastructuri informatice și de comunicații de interes național și condițiile implementării rețelelor 5G, în vederea stabilirii încadrării conform dispozițiilor art. 9 lit. d)" | The self-analysis for Art. 9(d) covers services depending on IT and communications infrastructures of national interest (Legea 163/2021, not read). | verified |

Two readings for a classifier, neither resolved by any text found:

- **The medium limbs of Criterii Art. 4(2) and Art. 5(2) carry no number.**
  "este afectată furnizarea serviciilor din unul dintre sectoarele" and "sunt
  provocate leziuni traumatice sau când este afectată sănătatea persoanelor"
  can be read to reach almost any disruption in an annex sector. Read that
  way, a micro enterprise of an annex sector whose service disruption would
  affect the provision of services is important under Criterii Art. 2(4)(b).
  The product cannot conclude "out of scope" for a small or micro enterprise of
  an annex sector without asking the Art. 9 questions.
- **Art. 9(d) gives no class.** For 9(a) Ordin 2/2025 Art. 2 decides by annex,
  and for 9(b) and 9(c) the Criterii decide by threshold; for 9(d) no text read
  says whether the entity is essential or important.

## Scope: the annexes, and the national additions

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Annex 1 has 11 sectors and Annex 2 has 7, the directive's own list. Legea nr.
124/2025 rewrote Annex 1 sectors 5 (health) and 8 (digital infrastructure) and
renamed Annex 2 sector 4. The rows below are those that differ from the
directive or decide a digital-infrastructure case; the rest of the annexes
were read and follow the directive's types, with references to Romanian
statutes.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Digital infrastructure: nine types | Annex 1, sector 8 (as replaced by Legea 124/2025, point 22) | "- Furnizorii de IXP (internet exchange point)" … "- Furnizorii de servicii DNS, cu excepția operatorilor de servere pentru nume primare" … "- Registrele de nume TLD" … "- Furnizorii de servicii de cloud computing" … "- Furnizorii de servicii de centre de date" … "- Furnizorii de rețele de furnizare de conținut" … "- Prestatorii de servicii de încredere" … "- Furnizorii de rețele publice de comunicații electronice" … "- Furnizorii de servicii de comunicații electronice destinate publicului" | IXP, DNS (root name servers excepted), TLD registries, cloud, data centre, CDN, trust service providers, public e-communications networks, publicly available e-communications services. No domain name registration services. | verified |
| ICT service management (B2B) | Annex 1, sector 9 | "- Furnizorii de servicii gestionate" … "- Furnizorii de servicii de securitate gestionate" | MSPs and MSSPs. | verified |
| DNS provider definition | OUG Art. 4(i) | "furnizor de servicii DNS înseamnă o entitate care furnizează:" … "1. servicii de rezoluție recursivă a numelor de domenii accesibile publicului pentru utilizatorii finali ai internetului;" … "2. servicii de rezoluție a numelor de domenii cu autoritate destinate utilizării de către terți, cu excepția serverelor de nume rădăcină;" | Public recursive resolution for internet end users, or authoritative resolution for third parties, root servers excepted. | verified |
| MSP and MSSP definitions | OUG Art. 4(j), (k) | "furnizor de servicii gestionate înseamnă o entitate care furnizează servicii legate de instalarea, gestionarea, funcționarea sau întreținerea produselor, rețelelor, infrastructurilor sau aplicațiilor tehnologiei informațiilor și comunicațiilor, denumită în continuare TIC, sau a altor rețele și sisteme informatice, prin asistență sau administrare activă, fie la sediul clientului, fie de la distanță;" … "furnizor de servicii de securitate gestionate înseamnă un furnizor de servicii gestionate care efectuează sau furnizează asistență pentru activități legate de gestionarea riscurilor în materie de securitate cibernetică;" | The directive's definitions. | verified |
| Health: two national additions, including retail pharmacies | Annex 1, sector 5 (as replaced by Legea 124/2025, point 22) | "- Entitățile titulare ale unei autorizații de distribuție a medicamentelor menționate la art. 803 din Legea nr. 95/2006, republicată, cu modificările și completările ulterioare" … "- Întreprinderile care desfășoară oricare dintre activitățile economice menționate în diviziunea 4646 - Comerț cu ridicata al produselor farmaceutice și medicale și 4773 - Comerț cu amănuntul al produselor farmaceutice, în magazine specializate din CAEN Rev. 3" | Holders of a medicines distribution authorisation, and enterprises in CAEN Rev. 3 classes 4646 (pharmaceutical wholesale) and 4773 (pharmaceutical retail in specialised stores). Both are in Annex 1, so large ones are essential and medium ones important. | verified |
| Energy: two national additions | Annex 1, sector 1, subsectors a) and f) | "- Operatori economici, concesionarii și dezvoltatorul centralei electrice eoliene offshore prevăzuți de Legea nr. 121/2024 privind energia eoliană offshore" … "f) Beneficiarii proiectelor finanțate din fonduri nerambursabile, iar tipul de entitate care va avea următorul conținut" … "- Beneficiarii prevăzuți de Ordonanța de urgență a Guvernului nr. 60/2022 privind stabilirea cadrului instituțional și financiar de implementare și gestionare a fondurilor alocate României prin Fondul pentru modernizare" | Offshore wind operators, concessionaires and developer; beneficiaries of Modernisation Fund projects (the subsector heading reproduces amending wording as printed). | verified |
| Air transport: national additions | Annex 1, sector 2, subsector a) | "- Operatori mentenanță aeronave" … "- Agenți aeronautici civili, astfel cum sunt definiți ca „agenți aeronautici“ la art. 3 pct. 15 din Codul aerian din 18 martie 2020" … "- Organizațiile menționate la art. 2 alin. (1) din Regulamentul delegat (UE) 2022/1.645" | Aircraft maintenance operators, civil aeronautical agents, and the organisations within Part-IS (Delegated Regulation 2022/1645 and Implementing Regulation 2023/203). | verified |
| Public administration: central only, with a list of exclusions | Annex 1, sector 10 | "- Entitățile administrației publice centrale, cu excepția instituțiilor din domeniul apărării, ordinii publice și securității naționale, Oficiului Registrului Național al Informațiilor Secrete de Stat, instituțiile de învățământ superior, domeniul juridicar, justiție, inclusiv Ministerul Public, Parlamentul României, Secretariatul General al Guvernului, Cancelaria Prim-Ministrului, Administrația Prezidențială, ASF, BNR și ANCOM." | Central public administration entities, except defence, public order and national security institutions, ORNISS, higher education institutions, the judiciary and justice including the Public Ministry, Parliament, the Government's General Secretariat, the Prime Minister's Chancellery, the Presidential Administration, ASF, BNR and ANCOM. | verified |
| Space | Annex 1, sector 11 | "- Operatorii de infrastructură terestră deținută, gestionată și operată de statul român sau de entități private pe teritoriul României, care sprijină furnizarea de servicii spațiale, cu excepția furnizorilor de rețele publice de comunicații electronice" | Ground infrastructure supporting space-based services, owned and operated by the State or private entities in Romania. | verified |
| Digital providers and research | Annex 2, sectors 6 and 7 | "- Furnizorii de piețe online" … "- Furnizorii de motoare de căutare online" … "- Furnizorii de platforme de servicii de socializare în rețea" … "Organizațiile de cercetare" | Online marketplaces, search engines, social networks; research organisations. | verified |
| Research organisations exclude education institutions | OUG Art. 4(r) | "organism de cercetare înseamnă o entitate al cărei obiectiv principal este de a desfășura activități de cercetare aplicată sau de dezvoltare experimentală în vederea exploatării rezultatelor cercetării respective în scopuri comerciale, dar care nu include instituțiile de învățământ;" | The directive's definition. | verified |
| Food: "and/or" | Annex 2, sector 4 (renamed by Legea 124/2025, point 23) | "4. Producția, prelucrarea și/sau distribuția de alimente" | Production, processing and/or distribution of food. | verified |
| Manufacturing divisions cite two CAEN revisions | Annex 2, sector 5, b) to f) | "diviziunea 26 din CAEN Rev. 2" … "diviziunea 27 din CAEN Rev. 3, potrivit Ordinului președintelui Institutului Național de Statistică" | Division 26 is cited in CAEN Rev. 2, divisions 27 to 30 in CAEN Rev. 3. | verified |
| One entity in several sectors applies the highest level of measures | OUG Art. 37(6) | "Atunci când o entitate desfășoară activitate în două sau mai multe sectoare, astfel cum sunt prevăzute în anexele nr. 1 și 2, acesteia i se aplică măsurile tehnice, operaționale și organizatorice proporționale și adecvate pentru a gestiona riscurile aferente securității rețelelor și a sistemelor informatice de nivelul cel mai ridicat." | The measures of the highest level apply to a multi-sector entity. | verified |

## Scope: public administration, exits, and the articulation with DORA, CER, sector acts and Implementing Regulation (EU) 2024/2690

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts,packages/regulatory-data/test/ro-incident-reporting.test.ts -->

### Public administration

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| What a public administration entity is | OUG Art. 4(g) | "entitate a administrației publice înseamnă o autoritate sau instituție din administrația publică, potrivit prevederilor art. 5 lit. k), l), w) și kk) din Ordonanța de urgență a Guvernului nr. 57/2019 privind Codul administrativ, cu modificările și completările ulterioare, precum și o unitate administrativ-teritorială, un organism de drept public sau o asociație formată din una sau mai multe astfel de autorități sau instituții din sectorul public sau din unul sau mai multe astfel de organisme de drept public;" | Authorities and institutions under the Administrative Code, administrative-territorial units, bodies governed by public law and their associations. | verified |
| Only central entities are in scope, and they are essential at any size | OUG Art. 5(1)(a) with Annex 1, sector 10 (above) | "a) entitățile administrației publice centrale în conformitate cu anexa nr. 1;" | No regional or local public administration entity is listed in either annex. | verified |
| Local administration still reports incidents, under Legea 58/2023 | Legea nr. 58/2023 Art. 3(1)(c), Art. 21(1), (2) | "rețelele și sistemele informatice deținute, organizate, administrate sau utilizate de autorități și instituții ale administrației publice centrale și locale, altele decât cele prevăzute la lit. a), precum și de persoane fizice și juridice care furnizează servicii publice ori de interes public, altele decât cele de la lit. b)." … "Persoanele prevăzute la art. 3 alin. (1) lit. b) și c) au obligația de a notifica incidentele de securitate cibernetică prin intermediul PNRISC de îndată, dar nu mai târziu de 48 de ore de la constatarea incidentului." … "Dacă incidentele de securitate cibernetică nu pot fi comunicate complet în termenul prevăzut la alin. (1), acestea se transmit în cel mult 5 zile calendaristice de la notificarea inițială" | The networks of central and local public authorities, and of persons providing public services or services of public interest, are under Legea 58/2023, whose holders notify incidents through PNRISC at once and at the latest 48 hours after finding them, completing within 5 calendar days. | verified |
| For essential and important entities the OUG's reporting replaces that duty | OUG Art. 17 | "Prin derogare de la dispozițiile art. 21 alin. (1) și (2) din Legea nr. 58/2023, persoanele prevăzute la art. 3 alin. (1) lit. b) și c) din aceeași lege, care sunt identificate ca fiind entități esențiale și entități importante, aplică prevederile art. 15 și 16 privind raportarea incidentelor." | An entity under both laws that is essential or important reports under OUG Arts 15 and 16, not under the 48-hour rule. | verified |
| From 2027, public digital resources registered in PNIDP "fall under" the OUG | Legea nr. 119/2026 Art. 1(2), Art. 16(1), Art. 15(3), Art. 25(1) | "Prezenta lege se aplică autorităților și instituțiilor publice centrale și locale, precum și entităților aflate în subordonarea, coordonarea sau sub autoritatea acestora." … "Resursele digitale publice înregistrate în PNIDP intră sub incidența dispozițiilor Ordonanței de urgență a Guvernului nr. 155/2024, aprobată cu modificări și completări prin Legea nr. 124/2025." … "Responsabilii digitali ai entităților publice prevăzute la art. 7 alin. (1) din Ordonanța de urgență a Guvernului nr. 155/2024 […] realizează de îndată notificarea incidentelor de securitate cibernetică către DNSC, prin Platforma națională pentru raportarea incidentelor de securitate cibernetică prevăzută la art. 20 din Legea nr. 58/2023." … "Prezenta lege intră în vigoare la 6 luni de la data publicării în Monitorul Oficial al României, Partea I." | Legea 119/2026 covers central and local public authorities; public digital resources registered in the new national platform (PNIDP, run by ADR) fall under the OUG; digital officers notify incidents to DNSC through PNRISC at once. It enters into force six months after its publication on 3 July 2026. What "intră sub incidența" does to the class of a local authority is not stated; see the open items. | verified (the effect is open) |

What the product does with it (2026-10-30): `ro.yaml` says that of the public
administration only the central entities are in the annexes, that a local
authority notifies under Legea nr. 58/2023 Art. 21, and that Legea nr. 119/2026
changes this six months after 3 July 2026 with an effect no text settles. A
clock in `packages/regulatory-data/test/ro-incident-reporting.test.ts` fails
from 2027-01-04 until the "Time-limited facts" row below is re-read.

### Exits and exclusions

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Defence, public order, national security, foreign affairs, ORNISS, law enforcement, classified systems | OUG Art. 2(2) | "Prezenta ordonanță de urgență nu se aplică instituțiilor din domeniul apărării, ordinii publice și securității naționale, conform dispozițiilor art. 6 din Legea nr. 51/1991 privind securitatea națională a României, republicată, cu modificările și completările ulterioare, Ministerului Afacerilor Externe, Oficiului Registrului Național al Informațiilor Secrete de Stat și entităților cu atribuții în domeniul aplicării legii, inclusiv prevenirii, investigării, depistării și urmăririi penale a infracțiunilor. Sunt, de asemenea, exceptate de la aplicarea prezentei ordonanțe de urgență sistemele informatice și de comunicații care vehiculează informații clasificate." | Out: defence, public order and national security institutions (Legea 51/1991 Art. 6), the Ministry of Foreign Affairs, ORNISS, law-enforcement entities, and systems carrying classified information. | verified |
| Those excluded bodies acting as trust service providers apply Legea 58/2023 | OUG Art. 2(4) | "Prin excepție de la alin. (2), în situația în care entități din cadrul acestora acționează drept prestator de servicii de încredere, instituțiile din domeniul apărării, ordinii publice și securității naționale, Ministerul Afacerilor Externe, precum și Oficiul Registrului Național al Informațiilor Secrete de Stat asigură obținerea unui nivel comun ridicat de securitate cibernetică prin aplicarea Legii nr. 58/2023" | Where their units act as trust service providers, those institutions secure a high common level of cybersecurity under Legea 58/2023. | verified |

### Articulation with DORA

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| DORA entities: only Arts 5 to 10 and 18 apply | OUG Art. 2(3) | "Entităților cărora li se aplică Regulamentul (UE) 2022/2.554 al Parlamentului European și al Consiliului din 14 decembrie 2022 privind reziliența operațională digitală a sectorului financiar […], denumit în continuare Regulamentul DORA, le sunt incidente doar dispozițiile art. 5-10 și art. 18." | A DORA financial entity is classified (Arts 5 to 10) and registers (Art. 18); nothing else of the OUG applies to it. | verified |
| Banking and FMI DORA entities do no risk-level assessment and apply DORA | Ordin 2/2025, annex 2, Art. 6(1), (2), as replaced by Ordin 1/2026 Art. V on 27.08.2026 | "Entitățile din sectorul 3 - Sectorul bancar și din sectorul 4 - Infrastructuri ale pieței financiare, prevăzute în anexa nr. 1 la Ordonanța de urgență a Guvernului nr. 155/2024, aprobată cu modificări și completări prin Legea nr. 124/2025, cu completările ulterioare, cărora li se aplică Regulamentul (UE) 2022/2.554" … "nu realizează evaluarea nivelului de risc al entității." … "Entitățile menționate la alin. (1) aplică măsurile de gestionare a riscurilor în materie de securitate cibernetică prevăzute de Regulamentul (UE) 2022/2.554." | | verified |
| Digital-infrastructure and ICT-management entities designated critical third-party providers under DORA: the same | Same, Art. 6(3) | "Atunci când entitățile din sectorul 8 - Infrastructură digitală și din sectorul 9 - Gestionarea serviciilor TIC (business-to-business), prevăzute în anexa nr. 1 la Ordonanța de urgență a Guvernului nr. 155/2024, aprobată cu modificări și completări prin Legea nr. 124/2025, cu completările ulterioare, sunt desemnate ca furnizori terți esențiali de servicii TIC potrivit Regulamentului (UE) 2022/2.554, acestea nu realizează evaluarea nivelului de risc al entității și aplică măsurile de gestionare a riscurilor în materie de securitate cibernetică prevăzute de același regulament." | | verified |
| BNR and ASF exchange incident information with DNSC | OUG Art. 37(3)(a), (16) | "BNR și ASF transmit în timp util către DNSC informații privind incidentele majore legate de TIC și amenințările cibernetice semnificative, raportate de către entitățile cărora li se aplică cerințele Regulamentului DORA" … "Dispozițiile alin. (7)-(14) nu se aplică BNR și ASF." | | verified |

### Articulation with CER (Legea nr. 294/2024)

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| A critical entity is essential at any size | OUG Art. 5(1)(c) (above) | "c) entitățile identificate drept entități critice conform dispozițiilor legale privind reziliența entităților critice;" | | verified |
| Identification by 17 July 2026, list approved by the Prime Minister, DNSC told within a month | Legea nr. 294/2024 Art. 6(1), (3), (6) | "Până la 17 iulie 2026, CNCPIC identifică entitățile critice pentru sectoarele și subsectoarele prevăzute în anexă, cu sprijinul ACS." … "Lista entităților critice identificate prin aplicarea criteriilor prevăzute la alin. (2) se aprobă, la propunerea CNCPIC, prin decizie a prim-ministrului." … "CNCPIC notifică autoritățile competente responsabile cu securitatea cibernetică și cu sarcinile de supraveghere și asigurare a respectării măsurilor pentru un nivel comun ridicat de securitate cibernetică cu privire la entitățile critice identificate în temeiul prezentului articol, în termen de o lună de la identificare." | CNCPIC (Ministry of Internal Affairs) identifies the critical entities; the Prime Minister's decision approves the list; the cybersecurity authority is notified within a month. Whether that decision has been adopted was not established. | verified (status of the list unknown) |
| Cyber measures of critical entities follow the OUG | HG nr. 1.115/2025, Măsuri, Art. 1(2) | "Măsurile menite să asigure un nivel ridicat al rezilienței entităților critice, prevăzute la alin. (1), în ceea ce privește securitatea cibernetică, se aplică în conformitate cu prevederile Ordonanței de urgență a Guvernului nr. 155/2024" | | verified |

### Articulation with sector EU acts and the sector authorities

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Equivalent sector EU acts displace measures, reporting and supervision | OUG Art. 37(14) | "În cazul în care actele juridice sectoriale ale Uniunii Europene impun entităților esențiale sau entităților importante să adopte măsuri de gestionare a riscurilor în materie de securitate cibernetică sau să raporteze incidentele semnificative, iar cerințele respective au un efect cel puțin echivalent cu efectul obligațiilor prevăzute în prezenta ordonanță de urgență, dispozițiile prezentei ordonanțe de urgență privind măsurile de gestionare a riscurilor, raportarea incidentelor, precum și supravegherea, verificarea și controlul nu se aplică acestor entități." | | verified |
| What counts as equivalent | OUG Art. 37(15) | "a) măsurile de gestionare a riscurilor în materie de securitate cibernetică sunt cel puțin echivalente în privința efectului cu cele prevăzute la art. 13;" … "b) actul juridic sectorial al Uniunii Europene prevede accesul imediat, după caz, automat și direct, la raportarea incidentelor pentru CSIRT-uri, autoritățile competente sau punctele unice de contact în temeiul prezentei ordonanțe de urgență și dacă cerințele de raportare a incidentelor semnificative au un efect cel puțin echivalent cu cele prevăzute la art. 15." | | verified |
| ANCOM and ADR are the named sector authorities | OUG Art. 37(1)(a), (c) | "Autoritatea Națională pentru Administrare și Reglementare în Comunicații, denumită în continuare ANCOM, care este autoritate competentă sectorial în domeniul securității cibernetice, potrivit prevederilor prezentei ordonanțe de urgență, pentru sectorul „8. Infrastructură digitală“: „Furnizorii de IXP (internet exchange point)“, „Furnizorii de servicii de centre de date“, „Furnizorii de rețele publice de comunicații electronice“ și „Furnizorii de servicii de comunicații electronice destinate publicului“ din anexa nr. 1 și pentru sectorul „1. Servicii poștale și de curierat“ din anexa nr. 2;" … "Autoritatea pentru Digitalizarea României, denumită în continuare ADR, care este autoritate competentă sectorial în domeniul securității cibernetice, potrivit prevederilor prezentei ordonanțe de urgență, pentru sectorul „8. Infrastructură digitală“: „Prestatorii de servicii de încredere“;" | ANCOM: IXPs, data centres, public e-communications networks and services, postal and courier. ADR: trust service providers. Others are to be designated by Government decision (Art. 37(5)); none found. | verified |
| Aviation: cooperation with AACR under Part-IS | OUG Art. 37(18) | "DNSC cooperează și colaborează cu Autoritatea Aeronautică Civilă Română, denumită în continuare AACR" | DNSC and the civil aviation authority cooperate on entities under Implementing Regulation 2023/203 and Delegated Regulation 2022/1645. | verified |

### Articulation with Implementing Regulation (EU) 2024/2690

The 2025 risk methodology first carved the regulation's entities out of the
national risk assessment; Ordin 1/2026 removed that carve-out. The regulation
itself is directly applicable whatever the Romanian orders say.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **Until 27.08.2026**: banking entities, digital providers, DORA FMIs and the sector 8 entities under the regulation did no risk-level assessment | Ordin 2/2025, annex 2 (Metodologie), Art. 6(1), (3), (4), as published in MO nr. 776/2025 | "Entitățile din sectorul 3 — Sectorul bancar din anexa nr. 1 și entitățile din sectorul 6 — Furnizori digitali din anexa nr. 2 la Ordonanța de urgență a Guvernului nr. 155/2024 nu realizează evaluarea nivelului de risc al entității." … "Entitățile din sectorul 6 — Furnizori digitali din anexa nr. 2 la Ordonanța de urgență a Guvernului nr. 155/2024, menționate la alin. (1), aplică măsurile de gestionare a riscurilor în materie de securitate cibernetică prevăzute de Regulamentul de punere în aplicare (UE) 2024/2.690" … "precum și entitățile din sectorul 8 — Infrastructură digitală din anexa nr. 1 la Ordonanța de urgență a Guvernului nr. 155/2024, cărora li se aplică Regulamentul de punere în aplicare (UE) 2024/2.690" … "nu realizează evaluarea nivelului de risc al entității." | Banking (Annex 1 sector 3), digital providers (Annex 2 sector 6, which applied the regulation's measures), FMIs under DORA and the Annex 1 sector 8 entities under the regulation were out of the risk assessment. MSPs and MSSPs are in sector 9, which the old text did not name. | verified (revoked) |
| **Since 27.08.2026**: Art. 6 replaced; only DORA banking, FMI and DORA-designated providers are carved out | Ordin 1/2026 Art. V; Portal note on the Metodologie | "Articolul 6 din Metodologia privind evaluarea nivelului de risc al entităților […] se modifică și va avea următorul cuprins:" … "(la 27-08-2026, Articolul 6 a fost modificat de Articolul V din ORDINUL nr. 1 din 6 august 2026" | Read with Ordin 1/2026 Art. IV (essential and important entities implement the controls of their assurance level), the regulation's entities now compute a risk level and implement the national controls. The previous Art. 6 is revoked. | verified (reading: the consequence) |
| The regulation's scope | Implementing Regulation (EU) 2024/2690, Art. 1 (RO) | "În ceea ce privește furnizorii de servicii DNS, registrele de nume TLD, furnizorii de servicii de cloud computing, furnizorii de servicii de centre de date, furnizorii de rețele de furnizare de conținut, furnizorii de servicii gestionate, furnizorii de servicii de securitate gestionate, furnizorii de piețe online, de motoare de căutare online și de platforme de servicii de socializare în rețea, precum și prestatorii de servicii de încredere (entitățile relevante), prezentul regulament stabilește cerințele tehnice și metodologice ale măsurilor menționate la articolul 21 alineatul (2) din Directiva (UE) 2022/2555 și precizează mai în detaliu cazurile în care un incident trebuie considerat semnificativ" | The regulation sets the technical and methodological requirements of the measures and the significant-incident cases for these "relevant entities". | verified |
| Its measures are in its annex; it is directly applicable | Same, Art. 2(1), Art. 16 | "Pentru entitățile relevante, cerințele tehnice și metodologice ale măsurilor de gestionare a riscurilor în materie de securitate cibernetică menționate la articolul 21 alineatul (2) literele (a)-(j) din Directiva (UE) 2022/2555 sunt prevăzute în anexa la prezentul regulament." … "Prezentul regulament este obligatoriu în toate elementele sale și se aplică direct în toate statele membre." | | verified |
| Its significance test | Same, Art. 3(1) | "Un incident este considerat semnificativ în sensul articolului 23 alineatul (3) din Directiva 2022/2555 în ceea ce privește entitățile relevante în cazul în care sunt îndeplinite unul sau mai multe dintre următoarele criterii:" | Followed by criteria (a) to (e) (for example direct financial loss above EUR 500,000 or 5 % of the previous year's turnover, the lower), recurring incidents (f), Art. 4) and the per-type criteria of Arts 5 to 14 ((g)). Planned interruptions and maintenance are not significant incidents (Art. 3(2)). | verified (Arts 5 to 14 not read) |
| The national measures' guidance points to it for reporting | Ordin 1/2026, annex 1, guidance to the RS.CO category | "Toate raportările ar trebui să respecte legislația națională și europeană relevantă, precum Regulamentul de punere în aplicare (UE) 2024/2690 al Comisiei din 17 octombrie 2024" | Implementation guidance ("ar trebui"), not a control statement. | verified |
| Special or sector rules complement the national measures, in a statement of applicability | Ordin 1/2026 Art. III(1), (2) | "Atunci când este cazul, măsurile de gestionare a riscurilor de securitate cibernetică aplicabile entității se completează cu alte cerințe prevăzute în reglementări speciale sau sectoriale aplicabile acesteia." … "Cerințele implementate ca urmare a aplicării unor reglementări speciale sau sectoriale se evidențiază într-o declarație de aplicabilitate întocmită de entitate." | | verified |

## Scope: five-person digital-infrastructure companies, and a reading for a classifier

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=data; guard=packages/regulatory-data/test/ro-incident-reporting.test.ts -->

This table is a reading of the rows quoted above, not an additional source. It
assumes an autonomous enterprise with 5 employees and net turnover and total
assets both at or under EUR 2 million (a microîntreprindere, Legea nr.
346/2004 Art. 4(1)(a)), set up and registered in Romania (or, for the Art. 7(3)
types, with its main EU establishment in Romania), not identified under Art. 9
(no sole-provider status, Art. 9(b) and 9(c) self-assessment below the medium
threshold), not a critical entity and not a DORA entity.

| Service of a 5-person company | In scope? | Class | Measures level by default | Sector authority | Basis |
|---|---|---|---|---|---|
| Public electronic communications network, or publicly available e-communications service | **Yes**, at any size; providing services in Romania suffices | Important (essential from medium size) | Bază (standard score 95) | ANCOM | Art. 6(2)(b), 5(3), 7(2), 37(1)(a) |
| Qualified trust service provider | **Yes** | **Essential** | Bază (95) | ADR | Art. 5(1)(e), 37(1)(c) |
| Non-qualified trust service provider | **Yes** | Important (essential when large, Art. 5(2)) | Bază (95) | ADR | Art. 6(2)(c) |
| TLD name registry | **Yes** | **Essential** | Bază (95) | none named | Art. 5(1)(f), 7(3) |
| DNS service provider: public recursive resolution, or authoritative for third parties (root name servers excepted) | **Yes** | **Essential** | Bază (95) | none named | Art. 5(1)(d), 4(i), 7(3); Annex 1 sector 8 |
| Cloud computing, data centre, CDN | **No** on size; yes through Art. 9 (sole provider in Romania, or a self-assessed impact reaching the medium threshold) | none (important or essential only through Art. 9) | n/a | ANCOM for data centres; none named for cloud and CDN | Art. 5(2), 6(1), 9; Ordin 2/2025 Art. 2; Criterii Art. 2(4) |
| IXP | **No** on size; same Art. 9 route | none | n/a | ANCOM | same |
| MSP | **No** on size; same Art. 9 route | none (important from medium, essential when large) | n/a | none named | Annex 1 sector 9; Art. 6(1), 5(2) |
| MSSP | **No** on size; same Art. 9 route | none (**essential from medium**, Art. 5(4)) | n/a | none named | Art. 5(4) |
| Domain name registration services (registrar, reseller, privacy or proxy) | Not an annex type; Art. 19 duties apply | neither class | n/a | none named | Art. 4(h), 7(3), 19, 60(1)(u) to (z) |
| Online marketplace, search engine, social network | **No** on size; same Art. 9 route (sole provider in Romania of an Annex 2 service is important) | none (important from medium; never essential by size, Annex 2) | n/a | none named | Annex 2 sector 6; Art. 6(1) |

"Measures level by default" is the assurance level of Ordin 1/2026 given by the
standard score of the risk methodology for the digital-infrastructure and
ICT-management column at small or micro size (95, so "nivelul de Bază", 0 to
99 points). An entity can change its impact and probability values only with
a reasoned request DNSC validates (Ordin 2/2025 Art. 5(3), (4)). **The class
and the level are independent**: a five-person DNS provider is essential and,
by default, implements the 34 Basic controls; a small central public
administration entity (standard score 125) implements the Important level.

Differences from the Union yardstick for the same company (eu.md, "Reading for
a scoping engine"): none for the five types in scope at any size, whose
classes match Art. 2(2)(a) and 3(1) of the directive. The differences are
elsewhere: a medium MSSP is essential in Romania and important under the
directive; the Art. 9 route is self-assessed against thresholds whose medium
limbs for the economy and for health carry no number; an enterprise under 50
employees with both financial figures above EUR 10 million may fall in no
national size category (scope section).

### Reading for a classifier

Derived from the quotes in the scope sections; each line names its source.

```
INPUTS
  types[]            entity types provided, each as a row of Annex 1 or 2 (sector, subsector, type)
  S, T, A            average annual headcount, net annual turnover, total assets ("active totale"),
                     from the approved statements of the previous financial year (L346 art. 6(1));
                     a new enterprise declares them (L346 art. 6(3)); EUR amounts "echivalent în lei"
  links              partner and linked enterprises (L346 arts 4^1 to 4^4, 6(5) to 6(10))
  established        set up and registered in Romania (art. 7(1));
                     e-communications: provides services in Romania (art. 7(2));
                     art. 7(3) types: main EU establishment in Romania (art. 7(5));
                     non-EU art. 7(3) provider: jurisdiction of its EU representative (art. 7(6))
  centralPA          central public administration entity, Annex 1 sector 10, not in its exclusion list
  excluded           art. 2(2): defence, public order and national security institutions, MAE, ORNISS,
                     law-enforcement entities; systems carrying classified information
  criticalEntity     on the Prime Minister's list under Legea 294/2024 (art. 6(3) of that law)
  art9               9a sole provider in Romania (yes/no); 9b, 9c impact level low|medium|high per
                     Ordin 2/2025 annex 1; 9d national/regional importance, incl. IICIN (yes/no)
  dora               Regulation (EU) 2022/2554 applies to the entity
  sectorActEquiv     a sector EU act with at least equivalent measures/reporting (art. 37(14), (15))

SIZE  (OUG art. 8; L346 art. 4(1), art. 4^5 disapplied)
  aggregate S, T, A with partner (pro rata) and linked (100 %) enterprises
  micro  = S <= 9          AND (T <= 2 M  OR A <= 2 M)
  small  = 10 <= S <= 49   AND (T <= 10 M OR A <= 10 M)
  medium = 50 <= S <= 249  AND (T <= 50 M OR A <= 43 M)                       art. 8(2)
  large  = exceeds the medium criteria:  S >= 250 OR (T > 50 M AND A > 43 M)  art. 8(1) (reading of "depășește")
  none   = anything else, e.g. S < 50 with T > 10 M AND A > 10 M              (reading; flag, do not decide)
  a category is lost only after two consecutive financial years (L346 art. 6(2))

CLASS  (out of scope first if excluded, or not established under art. 7)
  ESSENTIAL if any of:
    centralPA                                                              art. 5(1)(a)
    9a and the service is in Annex 1                                       art. 5(1)(b); Ordin 2/2025 art. 2(a)
    9b or 9c high and the entity is in Annex 1                             art. 5(1)(b); Criterii art. 2(4)(a)
    criticalEntity                                                         art. 5(1)(c)
    DNS service provider (root name servers excepted)                      art. 5(1)(d)
    qualified trust service provider                                       art. 5(1)(e)
    TLD name registry                                                      art. 5(1)(f)
    large and an Annex 1 type                                              art. 5(2)
    medium and a public e-communications network or service provider      art. 5(3)
    medium and a managed security service provider                         art. 5(4)
  else IMPORTANT if any of:
    (large or medium) and an Annex 1 or 2 type                             art. 6(1)
    9a and the service is in Annex 2                                       art. 6(2)(a); Ordin 2/2025 art. 2(b)
    9b or 9c medium or above (Annex 1 or 2)                                art. 6(2)(a); Criterii art. 2(4)(b)
    public e-communications network or service provider, any size          art. 6(2)(b)
    trust service provider, any size                                       art. 6(2)(c)
  9d yes: essential or important, no rule found → DNSC's decision (open)
  else NOT OBLIGED; voluntary registration possible                        art. 18(17)

MODIFIERS
  dora → only arts 5-10 and 18 apply (art. 2(3)); banking and FMI do no risk-level assessment and apply
         DORA's measures (Ordin 2/2025 annex 2 art. 6(1), (2), since 27-08-2026)
  sector 8 or 9 entity designated a critical ICT third-party provider under DORA → same (art. 6(3))
  sectorActEquiv → the OUG's measures, reporting and supervision do not apply (art. 37(14), (15))
  TLD registry or registrar → art. 19 registration-data duties whatever the class
  several sectors → measures of the highest level (art. 37(6)); risk score per sector, highest wins
         (Ordin 2/2025 art. 5(2))
  local public administration → not in the annexes; Legea 58/2023 art. 21 (PNRISC, 48 h) applies;
         Legea 119/2026 art. 16(1) from its entry into force (effect open)
  Implementing Regulation (EU) 2024/2690 entities → the regulation applies directly; since 27-08-2026
         they also compute a risk level and implement the national controls (reading)

ASSURANCE LEVEL OF THE MEASURES  (Ordin 2/2025 annex 2 art. 3; Ordin 1/2026 art. IV)
  sizeParam = 3 large | 2 medium | 1 small or micro; public administration by headcount:
              <= 49 → 1, 50-249 → 2, >= 250 → 3
  score = Σ over 5 threat actors × 5 attack categories of
          sizeParam × nature (1 global | 2 targeted) × impact (10 | 5 | 0) × probability (1 | 0.5 | 0)
  default values: the annex table per sector (its "Scor standard întreprindere" row);
          impact and probability changed only with DNSC's validation (art. 5(3), (4))
  level = Bază if 0-99; Important if 100-199; Esențial if 200-1500           annex 2 art. 3(6)
  recompute every 3 years and whenever the high impact threshold is exceeded   art. 5(5)
```

## Registration: notification, DNSC's decision, and the duties that follow

<!-- meta: theme=registration; type=reference; date=2026-10-29; surfaces=data,prompt; guard=packages/regulatory-data/test/ro-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The entity notifies; DNSC decides and enters it in the register; the decision
starts a chain of deadlines (security officers, risk level, maturity
self-assessment). The notification is a form generated by a DNSC tool and
signed by the legal representative.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Who and when: 30 days | OUG Art. 18(2) | "Entitățile care desfășoară activitate în sectoarele din anexa nr. 1 sau anexa nr. 2 notifică DNSC în vederea înregistrării în cel mult 30 de zile de la data intrării în vigoare a prezentei ordonanțe de urgență sau în termen de cel mult 30 de zile de la data la care prevederile prezentei ordonanțe de urgență le sunt aplicabile, atunci când, conform art. 5 și 6, se încadrează ca entități esențiale sau entități importante." | Entities of the annex sectors that qualify as essential or important under Arts 5 and 6 notify DNSC within 30 days of the OUG's entry into force, or within 30 days of the date it becomes applicable to them. | verified |
| The order's own window | Cerințe Art. 14 | "Procesul de notificare în vederea înregistrării în registrul entităților nu depășește un termen de 30 de zile de la publicarea în Monitorul Oficial al României, Partea I, a prezentelor cerințe." | The notification process does not exceed 30 days from the Cerințe's publication (20 August 2025). The order states no end date; none is computed here. | verified |
| What the notification contains | OUG Art. 18(3) | "a) denumirea;" … "b) adresa sediului social principal și datele de contact actualizate, inclusiv adresele de e-mail și numerele de telefon;" … "d) mijloacele permanente de contact și persoana din cadrul entității însărcinată cu monitorizarea mijloacelor de contact;" … "f) sectorul, subsectorul și tipul de entitate, astfel cum acestea se încadrează în anexa nr. 1 sau în anexa nr. 2;" … "h) intervalele de adrese IP publice ale entității, în cazul furnizorilor de servicii DNS, registrelor de nume TLD, entităților care furnizează servicii de înregistrare a numelor de domenii, furnizorilor de servicii de cloud computing, operatorilor de rețele de livrare de conținut, furnizorilor de servicii de centre de date, furnizorilor de servicii gestionate, furnizorilor de servicii de securitate gestionate și furnizorilor de servicii digitale;" … "j) informații necesare și suficiente din care să rezulte îndeplinirea condițiilor pentru identificarea drept entitate esențială sau entitate importantă conform art. 5 și, respectiv, art. 6." | Name; main seat and contact data; other EU establishments; permanent contact means and the person monitoring them; the representative of a non-EU entity; sector, subsector and type; Member States served (point g, as replaced by Legea 124/2025); public IP ranges (mandatory for the digital types, "după caz" for others, point i); evidence of the qualifying conditions. | verified |
| Two mechanisms: a tool and a platform | Cerințe Art. 2(1), (3) | "a) un instrument digital de evaluare și generare a datelor de notificare, denumit Instrument NIS2@RO;" … "b) o platformă de înrolare, informare și cooperare, denumită Platforma NIS2@RO." … "În situația în care Platforma NIS2@RO este indisponibilă, entitățile utilizează Instrumentul NIS2@RO în procesul de identificare în vederea înscrierii în registrul entităților prin generarea formularului de notificare." | The Instrument NIS2@RO (a downloadable assessment and form-generation tool) and the Platforma NIS2@RO; if the platform is unavailable, the tool generates the form. | verified |
| Where each is | Cerințe Art. 3(2) | "a) Platforma NIS2@RO - acces online, pe baza unui cont de utilizator al entității, după autentificarea pe site-ul platformanis2.ro;" … "b) Instrumentul NIS2@RO - utilizare locală, prin acces direct, după descărcarea fișierului de pe site-urile DNSC (dnsc.ro sau platformanis2.ro)." | Platform: online account on platformanis2.ro. Tool: local file downloaded from dnsc.ro or platformanis2.ro. | verified |
| The form is a PDF signed by the legal representative | Cerințe Art. 3(4), Art. 6(1), (2) | "formularul de notificare se salvează în format .PDF și se semnează electronic sau, după caz, olograf, de către reprezentantul/reprezentanții entității" … "În cazul utilizării Platformei NIS2@RO, formularul de notificare semnat cu semnătură electronică calificată de către reprezentantul/reprezentanții legal/legali al/ai entității și, după caz, documentele justificative se încarcă în platforma pusă la dispoziție conform prezentelor cerințe." | Through the platform: qualified electronic signature, uploaded. Through the tool: qualified electronic signature if filed electronically, handwritten signature if filed on paper. | verified |
| The six sections of the form | Cerințe Art. 4 | "Formularul de notificare este prevăzut în anexa la prezentele cerințe și structurat în șase secțiuni, astfel: Date generale; Date specifice; Situații specifice; Documente anexate; Evaluare preliminară și Reprezentare entitate." | General data; specific data (size, services, security officer, contact means, IP ranges, EU presence, representative); specific situations (Art. 9, Legea 294/2024); attached documents; preliminary self-classification; signature. | verified |
| Three channels, the platform first | Cerințe Art. 10(1) to (4) | "a) Platforma NIS2@RO;" … "b) poșta electronică;" … "c) depunerea fizică." … "Principala metodă de transmitere este cea prevăzută la alin. (1) lit. a)." … "Atunci când Platforma NIS2@RO nu este disponibilă, transmiterea formularelor de notificare se efectuează prin poșta electronică, la adresa de e-mail evidenta@dnsc.ro, pusă la dispoziție de către DNSC." … "la sediul DNSC de la adresa Str. Italiană nr. 22, București, sectorul 2, personal sau printr-un serviciu specializat de poștă și curierat cu confirmare de primire." | Platform; if unavailable, e-mail to evidenta@dnsc.ro; if neither, paper at DNSC, Str. Italiană nr. 22, Bucharest, by hand or registered courier. | verified |
| When the notification counts as received | Cerințe Art. 11 | "Indiferent de metoda de transmitere a formularului de notificare, data la care se consideră a fi primită notificarea este cea la care DNSC confirmă primirea acesteia, dar nu mai târziu de 5 zile lucrătoare, atunci când sunt incidente prevederile art. 10 alin. (1) lit. a) și b), respectiv la momentul depunerii, atunci când sunt incidente prevederile art. 10 alin. (1) lit. c)." | The date DNSC confirms receipt, at the latest 5 working days later (platform, e-mail); the filing date (paper). | verified |
| Those who filed without the platform re-enter on it within 20 days | Cerințe Art. 12(1), (2) | "În cazul în care o entitate nu s-a înregistrat pe Platforma NIS2@RO în cadrul procesului de notificare din cauza indisponibilității platformei, entitatea este obligată să își creeze un cont atunci când aceasta devine disponibilă." … "entitatea introduce în Platforma NIS2@RO datele din formularul de notificare transmis anterior, într-un termen de cel mult 20 de zile de la data la care platforma a devenit disponibilă" | When the platform becomes available, entities that notified otherwise create an account and re-enter their data within 20 days; DNSC validates within 10 working days and notifies the contact persons that the platform is available (Art. 12(3)). | verified |
| DNSC's decision: 60 days for essential, 150 for important | OUG Art. 18(4), (5) | "În termen de 60 de zile de la primirea notificării prevăzute la alin. (2), conducerea DNSC emite o decizie pentru identificarea și înscrierea în registru a entităților esențiale." … "În termen de 150 de zile de la primirea notificării prevăzute la alin. (2), conducerea DNSC emite o decizie pentru identificarea și înscrierea în registru a entităților importante." | | verified |
| Out of scope: not registered, and told so | Cerințe Art. 8(3) | "Atunci când, în urma evaluării notificării, entitatea nu se încadrează în domeniul de aplicare al Ordonanței de urgență a Guvernului nr. 155/2024, aceasta nu se înregistrează în registrul entităților, urmând a fi notificată în acest sens." | | verified |
| Security officers: 30 days from the decision | OUG Art. 14(3) | "desemnează, în termen de 30 de zile de la data comunicării deciziei directorului DNSC pentru identificarea și înscrierea în registru, responsabilii cu securitatea rețelelor și sistemelor informatice" | Officers for network and information system security are designated within 30 days of the communication of DNSC's decision (wording of Legea 124/2025, point 4). | verified |
| Risk level: 60 days from the decision | OUG Art. 18(6) | "În termen 60 de zile de la data comunicării deciziei directorului DNSC prevăzute la alin. (4), respectiv alin. (5), entitățile esențiale și entitățile importante transmit către DNSC evaluarea nivelului de risc a entității în conformitate cu art. 10 alin. (2)." | | verified |
| … through the platform or the ENIRE@RO tool, one or the other | Ordin 2/2025, annex 2, Art. 1(1), (3); Art. 3(7) | "a) un instrument de evaluare a nivelului de risc al unei entități - ENIRE@RO;" … "În cazul în care Platforma NIS2@RO este indisponibilă sau se dorește o preevaluare a nivelului de risc al unei entități, se utilizează Instrumentul ENIRE@RO, care se descarcă de pe site-urile DNSC (dnsc.ro, platformanis2.ro) și se utilizează local." … "În vederea aplicării prezentei metodologii, entitatea înregistrată în registrul entităților utilizează exclusiv unul dintre cele două mecanisme puse la dispoziție de către DNSC." | Without the platform, the report is uploaded within 20 days of its availability and DNSC validates within 15 days (Art. 4(1)). | verified |
| Maturity self-assessment: 60 days after the risk level, then yearly | OUG Art. 18(7), Art. 12(4) | "În termen de 60 de zile de la transmiterea evaluării nivelului de risc prevăzute la alin. (6), entitățile realizează o autoevaluare a nivelului de maturitate a măsurilor de gestionare a riscurilor de securitate cibernetică prevăzută la art. 12 alin. (4)." … "Entitățile esențiale și entitățile importante realizează și transmit către DNSC și, după caz, către autoritatea competentă sectorial, anual, o autoevaluare a nivelului de maturitate a măsurilor de gestionare a riscurilor de securitate cibernetică conform ordinului prevăzut la alin. (1) […], asumată de managementul entității." | Measures section for the method. | verified |
| Changes: two weeks or three months | OUG Art. 18(8) | "a) pentru informațiile prevăzute la alin. (3) lit. a)-d), lit. f) și j), fără întârzieri nejustificate și, în orice caz, în termen de cel mult 2 săptămâni de la data modificării;" … "b) pentru informațiile prevăzute la alin. (3) lit. e) și lit. g)-i), fără întârzieri nejustificate și, în orice caz, în termen de cel mult trei luni de la data modificării." | Name, addresses, contact means, sector and type, qualifying evidence: two weeks. Representative, Member States, IP ranges: three months. | verified |
| A change of class restarts the notification | Cerințe Art. 12(5) | "Atunci când modificările operate conform alin. (4) sunt de natură a conduce la schimbarea calității entității din „importantă“ în „esențială“ sau din „esențială“ în „importantă“, entitatea reia procesul de notificare conform prevederilor prezentelor cerințe." | | verified |
| Leaving the register: 30 days, with evidence; DNSC decides | OUG Art. 18(13), (14) | "Entitățile care nu mai îndeplinesc condițiile și criteriile prevăzute de dispozițiile prezentei ordonanțe de urgență notifică DNSC în vederea radierii din registru și furnizează acte doveditoare pentru aceasta în termen de 30 de zile de la data la care se constată schimbările." … "DNSC dispune, prin decizie a conducerii, radierea din registru în urma evaluării documentațiilor prevăzute la alin. (13) și comunică entității decizia." | | verified |
| DNSC chases those who do not notify | OUG Art. 18(12) | "După expirarea termenului prevăzut la alin. (2), DNSC, din oficiu sau în urma unei sesizări privind sustragerea de la o obligație de notificare și înscriere în registru făcută de orice persoană interesată, notifică entitatea în cauză cu privire la respectarea obligației de a se supune procesului de identificare" | After the deadline DNSC, of its own motion or on any interested person's complaint, notifies the entity of its duty. | verified |
| Voluntary registration, any size | OUG Art. 18(17) | "Se pot înregistra la DNSC și alte entități decât cele menționate la alin. (2), indiferent de dimensiunea acestora, în conformitate cu alin. (2)-(16)." | | verified |
| The register, and the digital types' identification | OUG Art. 18(1), Art. 25(2), (3) | "DNSC păstrează un registru al entităților esențiale și al entităților importante identificate." … "DNSC este responsabil de gestionarea procesului de identificare a furnizorilor de servicii DNS, registrelor de nume TLD, furnizorilor de servicii de cloud computing, furnizorilor de servicii de centre de date, furnizorilor de rețele de furnizare de conținut, furnizorilor de servicii gestionate, furnizorilor de servicii de securitate gestionate, precum și furnizorilor de piețe online, de motoare de căutare online și de platforme de servicii de socializare în rețea" | | verified |
| Failing to notify, to inform, or to send the risk level or self-assessment are offences | OUG Art. 60(1)(o) to (t) | "o) nerespectarea de către entitățile din sectoarele prevăzute în anexele nr. 1 și 2 a obligației de notificare conform art. 18 alin. (2) în termenul indicat;" … "q) nerespectarea de către entitățile esențiale și importante a obligației de transmitere a evaluării nivelului de risc conform art. 18 alin. (6) în termenul indicat;" … "r) nerespectarea de către entitățile esențiale și importante a obligației de autoevaluare a nivelului de maturitate conform art. 18 alin. (7) în termenul indicat;" | Fines in the sanctions section. | verified |

The registration channels in practice could not be seen: `platformanis2.ro`
and `dnsc.ro` refused every client used (sources section). Whether the
platform is live, and whether registration still runs through the tool and
e-mail, is **not verified**.

What the product does with it (2026-10-30): the transposition reference and
`ro.yaml` state the 30 days of Art. 18(2), the notification form of Ordin DNSC
nr. 1/2025 with the e-mail and paper filing it provides when the platform is
unavailable, DNSC's 60 or 150 days, and the chain of deadlines the decision
starts. Neither gives the NIS2@RO platform an address, and the tracker's
`registrationLive` stays false.

### Domain name registration data (TLD registries and registrars, any class)

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Who is a domain name registration services provider | OUG Art. 4(h) | "entitate care furnizează servicii de înregistrare de nume de domenii înseamnă un operator de registru sau un agent care acționează în numele operatorilor de registru, cum ar fi un furnizor sau un revânzător de servicii de protecție a confidențialității sau servicii de proxy;" | | verified |
| A dedicated registration database | OUG Art. 19(1), (2) | "registrele de nume TLD și entitățile care furnizează servicii de înregistrare a numelor de domenii depun diligențele necesare pentru a colecta date exacte și complete de înregistrare a numelor de domenii într-o bază de date dedicată" … "a) numele de domeniu;" … "b) data înregistrării;" … "c) numele, adresa de e-mail și numărul de telefon ale solicitantului înregistrării;" | Domain name, registration date, registrant's name, e-mail and phone, and the administrative contact if different. | verified |
| Incorrect data: blocked, then cancelled | OUG Art. 19(5) to (7) | "Dacă termenul acordat conform alin. (5) nu este respectat, numele de domeniu este blocat." … "Transferul unui nume de domeniu blocat este interzis, iar atunci când datele solicitate nu au fost corectate corespunzător, numele de domeniu este anulat." | A national addition to the directive's Art. 28. | verified |
| Access requests answered within 72 hours | OUG Art. 19(9) | "răspund la toate cererile de acces cu celeritate, dar nu mai târziu de 72 de ore de la primirea unei cereri." | | verified |

## Risk-management measures: the duty, Ordin DNSC nr. 1/2026, the risk level, self-assessment, audit and the supply chain

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-10-29; surfaces=data,prompt; guard=packages/regulatory-data/test/ro-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Romania has a **national measures catalogue**, in force since 27 August 2026:
the annex to Ordin DNSC nr. 1/2026, 218 controls in six functions (GV, ID, PR,
DE, RS, RC), 22 categories, three assurance levels. Its structure and ids are
NIST CSF 2.0-shaped (`GV.OC-01.1`) and its own text names CyFun® (the Portal
renders the sign "(R)"). The level an entity implements is given by its risk
score, not by its class.

### The duty in the OUG

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The general duty | OUG Art. 11(1), (2) | "Entitățile esențiale și entitățile importante iau măsuri tehnice, operaționale și organizatorice proporționale și adecvate pentru a identifica, evalua și gestiona riscurile aferente securității rețelelor și a sistemelor informatice pe care acestea le utilizează în desfășurarea activităților lor sau furnizarea serviciilor lor" … "Măsurile prevăzute la alin. (1) trebuie să asigure un nivel de securitate cibernetică adecvat nivelului de risc al entității" | Measures proportionate to the entity's risk level, assessed under the DNSC methodology (Art. 11(3)). | verified |
| Logging and traceability are part of the duty | OUG Art. 11(4) | "inclusiv prin jurnalizarea și asigurarea trasabilității tuturor activităților în cadrul rețelelor și sistemelor informatice." | | verified |
| The ten minimum measures | OUG Art. 13 | "Măsurile prevăzute la art. 11 alin. (1) cuprind cel puțin următoarele:" … "a) politicile și procedurile referitoare la analiza riscurilor și la securitatea sistemelor informatice și revizuirea periodică a acestora;" … "d) securitatea lanțului de aprovizionare, inclusiv aspectele legate de securitatea relației dintre entitate și prestatorii și furnizorii săi direcți;" … "j) utilizarea soluțiilor de autentificare multifactor sau de autentificare continuă a comunicațiilor vocale, video și text, a sistemelor de comunicații de urgență securizate și securizate în interiorul entității, după caz." | The directive's Art. 21(2)(a) to (j). | verified |
| Assets and risks to DNSC on request | OUG Art. 11(7) | "Entitățile esențiale și importante pun la dispoziția DNSC, la cerere, lista activelor relevante și lista riscurilor identificate în urma analizei riscurilor, prevăzută la alin. (1)." | | verified |
| The measures are set by DNSC order, possibly with sector requirements | OUG Art. 12(1), (2) | "Directorul DNSC emite un ordin privind măsurile de gestionare a riscurilor prevăzute la art. 11 alin. (1) în ceea ce privește cerințele tehnice, operaționale și organizatorice, conform art. 13." | Sector authorities may add requirements through joint orders (Art. 37(8)(b)); none found. | verified |
| Management corrects without undue delay | OUG Art. 12(3) | "În cazul în care organele de conducere ale entităților esențiale și ale entităților importante constată că nu respectă măsurile prevăzute în ordinul de la alin. (1) […], acestea aplică, fără întârzieri nejustificate, măsurile corective necesare." | | verified |
| Essential entities send a remediation plan within 30 days of each self-assessment | OUG Art. 12(5) | "În termen de 30 de zile de la realizarea autoevaluării, entitățile esențiale întocmesc și transmit către DNSC și, după caz, către autoritatea competentă sectorial, un plan de măsuri pentru remedierea deficiențelor identificate, asumat de managementul entității" | | verified |

### Ordin DNSC nr. 1/2026: the catalogue

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Entities implement the controls of the level their risk gives | Ordin 1/2026 Art. IV | "Entitățile esențiale și importante implementează controalele aferente nivelului de asigurare corespunzător nivelului lor de risc, determinat potrivit Metodologiei privind evaluarea nivelului de risc al entităților" | | verified |
| Six functions, categories, subcategories, controls | Măsurile, Art. 1(1), (2) | "Măsurile de gestionare a riscurilor de securitate cibernetică sunt organizate în șase Funcții, după cum urmează:" … "a) Guvernare (GV)" … "b) Identificare (ID)" … "c) Protecție (PR)" … "d) Detecție (DE)" … "e) Răspuns (RS)" … "f) Recuperare (RC)" … "Fiecare Funcție prevăzută la alin. (1) se împarte în Categorii, fiecare Categorie se împarte în Subcategorii, iar fiecare Subcategorie cuprinde unul sau mai multe Controale." | | verified |
| The id format | Măsurile, Art. 1(4) | "Fiecare Control este identificat printr-un cod alfanumeric unic, având forma \"XX.YY-NN.MM\", în care \"XX\" desemnează Funcția, \"YY\" Categoria, \"NN\" Subcategoria, iar \"MM\" Controlul din cadrul Subcategoriei." | Function, category, subcategory, control: `GV.OC-01.1`. Although the pattern reads "MM", the control number after the dot is printed with one or two digits (`GV.OC-01.1`, `ID.AM-08.10`): a guard must accept both. | verified |
| Key measures are mandatory and first | Măsurile, Art. 1(5) | "Anumite Controale sunt marcate ca Măsuri cheie pe baza tipurilor comune de atacuri cibernetice. Măsurile cheie sunt obligatorii și trebuie tratate cu prioritate, conform nivelului de asigurare căruia le sunt aplicabile." | | verified |
| Management aspects reviewed at each assurance audit | Măsurile, Art. 1(6) | "Anumite Controale sunt marcate ca fiind aferente unor Aspecte de management, corespunzând principiilor sistemelor de management pe care standardul ISO/IEC 17021-1 le impune auditorilor să le evalueze" … "Stadiul îndeplinirii acestor Controale se revizuiește în cadrul fiecărui audit de evaluare a nivelului de asigurare." | | verified |
| Three cumulative levels | Măsurile, Art. 3(1), (2) | "a) nivelul de Bază, care cuprinde Controale aplicabile tuturor entităților" … "b) nivelul Important, la care Controalele nivelului de Bază sunt consolidate" … "c) nivelul Esențial, la care Controalele nivelului Important sunt consolidate suplimentar" … "Nivelurile de asigurare se află în raport de incluziune ierarhică" | Basic, Important, Essential; each includes the previous. | verified |
| Each control has a statement and implementation guidance | Măsurile, Art. 2 | "Conținutul integral al Controalelor, cuprinzând, pentru fiecare Control, codul de identificare, enunțul cerinței și ghidul de implementare, este prevăzut în continuare, în cuprinsul prezentei anexe." | The statements use "trebuie" (must); the guidance uses "ar trebui" (should). | verified |
| The catalogue names CyFun | Măsurile, ID.IM category; GV.OC-04.2 guidance | "Îmbunătățirile aduse proceselor, procedurilor și activităților organizaționale de management al riscului de securitate cibernetică sunt identificate în toate funcțiile CyFun®." … "inclusiv a cerințelor specifice reglementărilor și domeniului (de exemplu, CyFun®, ISO/IEC 27001, IEC 62443)." | Whether it is a licensed adaptation of the Belgian CyFun was not established; the shape (functions, "key measures", three levels named Basic, Important, Essential) matches it. | verified (relation to CyFun not established) |

Counts, from the applicability table at the end of annex 1, read in MO 712
bis and on the Portal (218 rows, both identical):

| Level | Controls applicable | Of which key measures introduced at that level | Management aspects introduced at that level |
|---|---|---|---|
| Bază | 34 | 13: ID.AM-08.2, PR.AA-01.1, PR.AA-03.2, PR.AA-05.1, PR.AA-05.2, PR.AA-05.3, PR.AA-05.4, PR.DS-11.1, PR.IR-01.1, PR.IR-01.2, PR.PS-04.1, DE.AE-03.1, DE.CM-01.2 | 0 |
| Important | 133 (the 34 plus 99) | 9: GV.RR-02.1, ID.RA-08.1, PR.AA-03.3, PR.IR-01.3, PR.IR-01.4, PR.PS-01.1, DE.CM-01.3, RS.CO-02.2, RS.MI-01.2 | 9: GV.RM-01.1, GV.RM-02.1, GV.RM-03.2, GV.RR-02.1, ID.IM-04.1, ID.RA-05.2, ID.RA-06.1, PR.IR-04.1, RC.CO-03.1 |
| Esențial | 218 (the 133 plus 85) | 7: GV.SC-05.2, GV.SC-05.3, ID.AM-03.3, ID.AM-08.7, ID.AM-08.9, ID.AM-08.10, PR.DS-02.1 | 6: GV.RR-02.2, GV.SC-01.1, ID.IM-03.9, ID.IM-04.2, ID.RA-05.3, DE.AE-04.1 |

By function, all levels: GV 40, ID 55, PR 79, DE 22, RS 14, RC 8. The 22
categories: GV.OC, GV.RM, GV.RR, GV.PO, GV.OV, GV.SC; ID.AM, ID.RA, ID.IM;
PR.AA, PR.AT, PR.DS, PR.PS, PR.IR; DE.CM, DE.AE; RS.MA, RS.AN, RS.CO, RS.MI;
RC.RP, RC.CO. The 34 Basic controls: GV.OC-03.1, GV.PO-01.1, GV.RM-03.1,
GV.RR-04.1, ID.AM-01.1, ID.AM-02.1, ID.AM-05.1, ID.AM-07.1, ID.AM-08.2,
ID.IM-03.1, ID.RA-01.1, ID.RA-05.1, PR.AA-01.1, PR.AA-03.1, PR.AA-03.2,
PR.AA-05.1 to PR.AA-05.4, PR.AA-06.1, PR.AT-01.1, PR.DS-01.9, PR.DS-11.1,
PR.IR-01.1, PR.IR-01.2, PR.PS-04.1, PR.PS-05.1, DE.AE-03.1, DE.CM-01.1,
DE.CM-01.2, DE.CM-03.1, RS.CO-02.1, RS.MA-01.1, RC.RP-01.1.

The ids are the official ones; a Romanian framework tree built from this
record must use them as printed, never a NIST CSF id that merely looks alike
(ADR 0041). They are a first edition: no earlier Romanian catalogue is revoked
by them, and the 2025 methodology's Art. 6 is the only provision Ordin 1/2026
replaced.

What the product does with it (2026-10-30): the transposition reference and
`ro.yaml` name the catalogue, its 218 controls in three levels (34, 133, 218),
its 29 key measures and the risk score of Ordin DNSC nr. 2/2025 that picks the
level, and say that Reglyze assesses Romanian organisations on the NIS2
substrate. No Romanian framework tree is built (a separate project); the only
control id the product prints is `GV.OC-01.1`, as an example of the format
(an id the catalogue prints, "The id format" above), and the document context
forbids a generated document to cite any.

### The risk level (Ordin 2/2025, annex 2) that picks the assurance level

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Purpose: the category of measures | Ordin 2/2025 Art. 4(2), (3) | "Utilizarea metodologiei prevăzute la alin. (1) are scopul de a determina categoria de măsuri tehnice, operaționale și organizatorice destinate identificării, evaluării și gestionării riscurilor" … "Scorul general obținut de către entitate determină nivelul de complexitate a măsurilor de securitate, aferent ordinului privind măsurile de gestionare a riscurilor." | | verified |
| Five actors, five attack categories | Metodologie Art. 2(1), (2) | "a) cei cu capabilități de nivel comun: teroriști, activiști motivați ideologic și competitori ostili." … "b) cei cu capabilități extinse: infractori cibernetici și actori statali." … "a) sabotaj/perturbare a furnizării serviciului;" … "e) atacuri care țintesc sau care afectează imaginea entității." | | verified |
| The multiplication | Metodologie Art. 3(3) | "Valoarea riscului se determină prin înmulțirea următorilor parametri: dimensiunea entității, astfel cum aceasta este determinată la dispozițiile alin. (1) lit. b), natura atacului, astfel cum aceasta este determinată la dispozițiile alin. (1) lit. a) pct. (ii), impactul, astfel cum acesta este determinat la dispozițiile alin. (1) lit. c) pct. (i), și probabilitatea, astfel cum aceasta este determinată la dispozițiile alin. (1) lit. c) pct. (ii)." | Size (1, 2, 3) × nature (global 1, targeted 2) × impact (high 10, medium 5, low 0) × probability (high 1, medium 0.5, low 0), summed over actors and categories (Art. 3(4), (5)). | verified |
| Public administration sized by headcount | Metodologie Art. 3(1)(b) | "În cazul entităților din administrația publică, parametrul va fi calculat în funcție de numărul mediu de persoane angajate, calculat conform dispozițiilor art. 5 din Legea nr. 346/2004, astfel: până la 49 de angajați - va avea valoarea „1“, între 50 și 249 de angajați - va avea valoarea „2“, minimum 250 de angajați - va avea valoarea „3“." | | verified |
| The three bands | Metodologie Art. 3(6) | "a) entitățile care au obținut un scor între „0“ și „99“ de puncte vor implementa nivelul de bază" … "b) entitățile care au obținut un scor între „100“ și „199“ de puncte vor implementa nivelul important" … "c) entitățile care au obținut un scor între „200“ și „1.500“ de puncte vor implementa nivelul esențial" | | verified |
| Changing a sector default needs DNSC's validation | Ordin 2/2025 Art. 5(3), (4) | "entitatea transmite către DNSC o analiză care cuprinde câte o motivare temeinică pentru fiecare valoare cu privire la care aceasta solicită modificarea valorii de bază." … "DNSC poate valida propunerile înaintate de către entitate prin solicitarea transmisă." | | verified |
| Recompute every three years, or when the high threshold is crossed | Ordin 2/2025 Art. 5(5) | "Entitățile își recalculează scorul general o dată la 3 ani și ori de câte ori este depășit pragul ridicat al impactului generat de perturbarea serviciului furnizat aferent sectorului din care acestea fac parte" | | verified |

The annex's "Scor standard întreprindere" rows (sector defaults, read on the
Portal and compared by eye with a render of pages 12 and 13 of MO 776/2025,
where the table is printed rotated; recomputing the Energie column for a small
enterprise from the table's impact, probability and global/targeted marks
gives the printed 95):

| Sector column of the annex | mică/micro | mijlocie | mare |
|---|---|---|---|
| Energie | 95 | 190 | 285 |
| Transport | 85 | 170 | 255 |
| Piață financiară | 85 | 170 | 255 |
| Sănătate | 72,5 | 145 | 217,5 |
| Apă potabilă | 67,5 | 135 | 202,5 |
| Ape uzate | 67,5 | 135 | 202,5 |
| Infrastructură digitală / Gestionarea serviciilor TIC (one column) | 95 | 190 | 285 |
| Administrație publică | 125 | 250 | 375 |
| Spațiu | 87,5 | 175 | 262,5 |
| Servicii poștale și de curierat | 50 | 100 | 150 |
| Gestionarea deșeurilor | 15 | 30 | 45 |
| Fabricarea, producția și distribuția de substanțe chimice | 60 | 120 | 180 |
| Producția, prelucrarea și distribuția de alimente | 42,5 | 85 | 127,5 |
| Fabricare | 57,5 | 115 | 172,5 |
| Furnizori digitali | 55 | 110 | 165 |
| Cercetare | 62,5 | 125 | 187,5 |

Read with the bands: by default every small or micro entity implements the
Basic level except in public administration (125, Important); every medium
entity the Important level except public administration (250, Esențial),
waste (30) and food (85), which are Basic, with postal on the boundary (100,
Important); every large entity the Esențial level except postal (150),
chemicals (180), food (127,5), manufacturing (172,5), digital providers (165)
and research (187,5), which are Important, and waste (45), which is Basic. This
is arithmetic on the printed table, not a further source.

### Self-assessment of maturity (Ordin 1/2026, annex 2, as completed by Ordin 2/2026)

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The tools | Metodologia Art. 1(1), (2) | "b) instrumentele de evaluare a maturității măsurilor de gestionare a riscurilor de securitate cibernetică, corespunzătoare fiecărui nivel de asigurare: EVAL_MMS_B pentru nivelul de Bază, EVAL_MMS_I pentru nivelul Important și EVAL_MMS_E pentru nivelul Esențial." … "În cazul în care Platforma NIS2@RO este indisponibilă, se utilizează instrumentele de evaluare a maturității, care se descarcă de pe website-ul oficial al Directoratului Național de Securitate Cibernetică (https://www.dnsc.ro/) și se utilizează la nivel local, conform instrucțiunilor publicate." | The platform, or one local tool per level. | verified |
| Two scores per control, 1 to 5, each justified in writing | Metodologia Art. 2(1), (2), (5) | "a) Maturitatea documentației, care măsoară gradul în care regulile și procedurile scrise satisfac cerințele Controlului;" … "b) Maturitatea implementării, care măsoară gradul în care practicile operaționale efective corespund Controlului și documentației aferente." … "Este obligatorie completarea variabilelor \"Scor documentație\" și \"Scor implementare\" pentru fiecare Control." … "Fiecare valoare este justificată în scris, prin informații și argumente." | Documentation maturity and implementation maturity, five stages (Inițial, Repetabil, Definit, Gestionat, Optimizare; Art. 2(3)); averages by subcategory, category and entity (Art. 2(6) to (9)). | verified |
| The target scores | Metodologia Art. 2(11) | "a) pentru nivelul de Bază: scorul-țintă al fiecărui Control marcat ca Măsură cheie este de cel puțin 2,5, iar scorul-țintă total al entității este de cel puțin 2,5;" … "b) pentru nivelul Important: scorul-țintă al fiecărui Control marcat ca Măsură cheie este de cel puțin 3, iar scorul-țintă total al entității este de cel puțin 3;" … "c) pentru nivelul Esențial: scorul-țintă al fiecărui Control marcat ca Măsură cheie este de cel puțin 3, scorul-țintă total al fiecărei Categorii este de cel puțin 3, iar scorul general al entității este de cel puțin 3,5." | Basic: each key measure and the total at least 2.5. Important: at least 3. Essential: key measures and each category at least 3, overall at least 3.5. | verified |
| Below target: a remediation plan | Metodologia Art. 3 | "Atunci când, în urma autoevaluării, nu sunt atinse scorurile-țintă aferente nivelului de asigurare evaluat, prevăzute la art. 2, entitatea are obligația de a întocmi un plan de măsuri pentru remedierea tuturor deficiențelor care au condus la neconformitate, plan ce cuprinde acțiunile ce urmează a fi întreprinse și termenele asumate pentru implementare." | Every entity below target draws up a plan; essential entities also send it within 30 days (OUG Art. 12(5)). | verified |
| Not-applicable controls: capped, never key measures | Metodologia Art. 4(1), (2), (3) (added by Ordin 2/2026, in force 18.09.2026) | "a) pentru nivelul de Bază, cel mult un Control;" … "b) pentru nivelul Important, cel mult trei Controale;" … "c) pentru nivelul Esențial, cel mult cinci Controale." … "a) Controalele marcate ca Măsuri-cheie, indiferent de nivelul de asigurare;" … "b) Controalele aferente Aspectelor de management, pentru nivelul Esențial." | At most 1, 3 or 5 controls marked N/A; key measures never, management aspects never at the Essential level; an excluded control counts 2.5 (Basic) or 3 (Important, Essential); each exclusion justified in the statement of applicability (Art. 4(4)). | verified |

### Groups of undertakings (Decizia DNSC nr. 3/2026)

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The rules change nothing in the controls or targets | Decizia 3/2026 Art. 3 | "Normele nu modifică și nu completează controalele, stadiile de maturitate, scorurile-țintă și regulile de calcul prevăzute în Ordinul directorului Directoratului Național de Securitate Cibernetică nr. 1/2026, cu completările ulterioare, ci stabilesc modul în care acestea se aplică atunci când guvernanța, strategia și managementul riscului de securitate cibernetică sunt definite la nivel de grup." | | verified |
| Inherited, implemented or shared controls; the entity stays accountable | Norme, "Modelul de aplicabilitate" | "preluate: controale ale căror guvernanță, luare a deciziilor, gestionare și garantare sunt exercitate la nivel de grup și pe care entitatea se bazează (sau le adoptă) în mod direct;" … "partajate: responsabilitățile sunt împărțite între entitate și grupul din care face parte." … "Indiferent de modelul de aplicabilitate, entitatea răspunde pentru demonstrarea implementării eficace a controalelor aplicabile în propriul său domeniu (principiu general)." | | verified |
| A group policy formally adopted counts as the entity's documentation | Norme, "Eroare frecventă de evaluare" | "Entitatea adoptă în mod formal o politică a grupului, deci maturitatea documentației depinde de aprobare, aplicabilitate, revizuire și de tratarea excepțiilor." | | verified |

### Audit

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Both classes undergo audits, on conditions and a periodicity the measures order is to set | OUG Art. 11(5), (6) | "Entitățile esențiale și entitățile importante sunt obligate să se supună efectuării unui audit de securitate cibernetică în condițiile și cu periodicitatea stabilite prin ordinul directorului DNSC prevăzut la art. 12 alin. (1), în funcție de nivelul de risc prevăzut la alin. (3)." | Ordin 1/2026 (articles I to VI read in full; annex 1 searched for an audit schedule) sets no audit conditions or periodicity; the periodic audit duty has no schedule in the texts read. | verified (no schedule found) |
| Periodic or ad hoc; the entity picks the auditor | OUG Art. 57(1), (4) | "a) periodic, care se desfășoară cu regularitate, conform ordinului de la art. 11 alin. (5) sau, după caz, alin. (6);" … "b) ad-hoc, în baza deciziei directorului DNSC conform alin. (2)." … "Entitatea auditată are dreptul de a selecta auditorul." | Ad hoc audits follow a significant incident, a significant change (within 180 days) or serious indications of a breach (Art. 57(2)). | verified |
| Results within 5 days; plan within 15 working days; costs on the entity | OUG Art. 46(8), (9), Art. 57(8) | "În termen de cel mult 5 zile de la finalizarea oricărui audit de securitate cibernetică, entitatea auditată transmite către DNSC și, după caz, autorității competente sectorial rezultatele acestuia." … "Costurile generate de auditul de securitate cibernetică, inclusiv cel ad-hoc, sunt suportate de către entitatea auditată." … "În cel mult 15 zile lucrătoare de la data primirii raportului de audit, entitățile sunt obligate să întocmească și să transmită către DNSC și, după caz, autorității competente sectorial, în baza recomandărilor emise de către auditor, planul de măsuri pentru remedierea tuturor deficiențelor constatate și termenele asumate pentru implementarea acestora." | | verified |
| DNSC-attested auditors, independent, at most three audits in a row | OUG Art. 58(1), (3), (6) | "Auditul de securitate cibernetică se realizează de către auditorii de securitate cibernetică ce dețin atestat valabil eliberat de către DNSC" … "c) auditorul care a mai efectuat 3 audituri consecutive la aceeași entitate esențială sau entitate importantă." … "Atestatele au o valabilitate de 3 ani." | Not an auditor who provides security or CSIRT services to the entity, or had a service contract on the audited system within a year. | verified |
| Trust service providers: a conformity assessment at least every 24 months | ADR Procedure Art. 2 | "Prestatorii de servicii de încredere sunt auditați, pe propria cheltuială, cel puțin la fiecare 24 de luni, de către un organism de evaluare a conformității." | ADR's procedure under Regulation (EU) 910/2014; its audit confirms the requirements of "articolul 21 din Directiva (UE) 2022/2555 transpusă prin Ordonanța de Urgență nr. 155". | verified |

### Supply chain and vulnerabilities

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| What the supply-chain measures must consider | OUG Art. 11(8) | "a) vulnerabilitățile specifice ale fiecărui furnizor direct și ale fiecărui furnizor de servicii, de calitatea generală a produselor și de calitatea practicilor de securitate cibernetică ale furnizorilor direcți și ale furnizorilor de servicii, inclusiv de securitatea proceselor de dezvoltare ale acestora;" | Plus the results of the EU coordinated risk assessments (b). | verified |
| Supplier data to DNSC on request | OUG Art. 11(9) | "entitățile esențiale și entitățile importante au obligația să transmită către DNSC, la cerere, date cu privire la prestatorii de servicii de încredere, prestatorii de servicii de încredere calificați, furnizorii de servicii DNS, registrele de nume TLD sau entitățile care oferă servicii de înregistrare nume de domenii, furnizorii de servicii de cloud computing, furnizorii de servicii de centre de date, furnizorii de servicii gestionate și furnizorii de servicii de securitate gestionate și care le asigură aceste tipuri de servicii, în termenul prevăzut în cererea DNSC." | On request, data on the trust, DNS, TLD, registrar, cloud, data centre, MSP and MSSP providers serving them. | verified |
| Supplier controls in the catalogue | Măsurile, GV.SC-05.1 (Important), GV.SC-07.1 (Important), GV.SC-05.2 and GV.SC-05.3 (Essential, key measures) | "Cerințele privind abordarea riscurilor de securitate cibernetică și schimbul de informații sensibile în lanțurile de aprovizionare trebuie stabilite, prioritizate, integrate în contracte și alte tipuri de acorduri formale și puse în aplicare." … "Riscurile prezentate de un furnizor, produsele și serviciile sale și alte părți terțe trebuie identificate, documentate, prioritizate, atenuate și evaluate cel puțin anual și atunci când apar modificări în cursul relației." … "Organizația trebuie să stabilească cerințe contractuale care să îi permită să revizuiască programele de securitate cibernetică sau a informației implementate de furnizori și parteneri terți." | No supply-chain control is at the Basic level; contractual clauses start at Important; the right to review suppliers' programmes is an Essential key measure. | verified |
| ICT producers and suppliers that are in scope report and fix vulnerabilities | OUG Art. 36(4) | "Producătorii și furnizorii de produse sau servicii TIC, care sunt entități esențiale sau importante, au obligațiile de a transmite către DNSC toate informațiile cu privire la vulnerabilitățile pe care le identifică, precum și cu privire la vulnerabilitățile care le sunt semnalate de către terți și care le afectează propriile produse sau servicii și de a remedia respectivele vulnerabilități într-un termen stabilit de comun acord cu DNSC." | | verified |
| Every entity in scope runs a vulnerability-management process | OUG Art. 36(7) | "Entitățile care fac obiectul prezentei ordonanțe de urgență au obligația de a institui la nivelul acestora procese de management al vulnerabilităților TIC aferente produselor și serviciilor pe care le oferă" | Receiving reports, cooperating with DNSC, publishing contact and reporting terms, communicating with reporters (a) to (d). | verified |
| Reporters: 48 hours, good faith; a criminal-law safe harbour | OUG Art. 36(6); Legea 123/2026 Art. II | "Raportarea de la alin. (3) se realizează în termen de cel mult 48 de ore de la identificarea vulnerabilității." … "Faptele prevăzute la art. 360 alin. (1) și (3), art. 361 și art. 364 nu constituie infracțiune atunci când sunt săvârșite de o persoană fizică sau juridică, dacă sunt îndeplinite cumulativ condițiile privind cercetarea și raportarea vulnerabilităților unor produse sau servicii ale tehnologiei informațiilor și comunicațiilor prevăzute la art. 36 alin. (5) și (6)" | A reporter reports to DNSC within 48 hours; acts under Criminal Code Arts 360(1) and (3), 361 and 364 are not offences when the research and reporting meet Art. 36(5) and (6) (new Art. 365^1 of the Criminal Code; the Code's articles themselves were not read). | verified |

## Incident reporting: what, to whom, by when, and through what

<!-- meta: theme=incident; type=reference; date=2026-10-29; surfaces=data,ui,prompt,mcp,i18n; guard=packages/regulatory-data/test/ro-incident-reporting.test.ts,apps/core-api/test/incident-recipients-routes.test.ts,apps/core-api/test/incident-deadlines-ro.test.ts,apps/mcp/test/tools.test.ts,apps/web/test/nis2-start-incident-terms.test.ts -->

The OUG follows the directive's four acts (24 h, 72 h, intermediate on request,
final at one month) with the anchor "luat cunoștință" (became aware), in the
directive's own Romanian words, and puts a 6-hour limit on the information
that shows a cross-border impact, which the directive asks for without one. The
recipient is DNSC as national CSIRT, through PNRISC. The DNSC norms on incident
reporting that the OUG requires have not been published.

### What must be reported

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Significant incidents, to the national CSIRT; users where appropriate | OUG Art. 15(1) | "Entitățile esențiale și entitățile importante raportează, fără întârzieri nejustificate, echipei de răspuns la incidente de securitate cibernetică naționale orice incident care are un impact semnificativ asupra prestării serviciilor lor și, dacă este cazul, entitățile în cauză notifică, fără întârzieri nejustificate, destinatarilor serviciilor lor incidentele semnificative care ar putea afecta prestarea serviciilor respective." | Any incident with a significant impact on the provision of their services, to the national CSIRT; and, where applicable, the significant incidents likely to affect their service, to its recipients. | verified |
| What significant means: at least one of two conditions | OUG Art. 15(6) (opening words as replaced by Legea 124/2025, point 5) | "Un incident este considerat semnificativ sau impactul unui incident este considerat semnificativ dacă este îndeplinită cel puțin una dintre condițiile de mai jos:" … "a) a provocat sau poate provoca perturbări operaționale grave ale serviciilor sau pierderi financiare pentru entitatea în cauză;" … "b) a afectat sau poate afecta alte persoane fizice sau juridice, cauzând prejudicii materiale sau nonmateriale considerabile." | Serious operational disruption or financial loss for the entity; or considerable material or non-material damage to others. For the relevant entities of Implementing Regulation 2024/2690, that regulation's Art. 3 criteria (scope section). | verified |
| The national norms on reporting are delegated to a DNSC order | OUG Art. 15(17), Art. 65(1)(c) | "Fără a aduce atingere dispozițiilor art. 37 alin. (8) lit. b), prin ordin al directorului DNSC se stabilesc norme metodologice privind raportarea incidentelor." … "Normele metodologice privind raportarea incidentelor, în temeiul art. 15 alin. (17), în termen de 120 de zile de la data intrării în vigoare a prezentei ordonanțe de urgență;" | No such order is on the Portal as of 2026-10-29 (sources section). No national threshold, form or taxonomy beyond the OUG's own words is in force in the texts read. | not found (the order) |
| Voluntary reporting by anyone | OUG Art. 16(1), (4) | "b) alte entități decât cele menționate la lit. a), indiferent dacă intră în domeniul de aplicare al prezentei ordonanțe de urgență, cu privire la incidente semnificative, amenințări cibernetice și incidente evitate la limită." … "Raportarea voluntară nu impune entității notificatoare nicio obligație suplimentară care nu i-ar fi revenit dacă nu ar fi transmis raportarea." | | verified |

### The stages and their deadlines

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **Early warning: 24 hours from awareness** | OUG Art. 15(7)(a) | "fără întârzieri nejustificate, dar nu mai târziu de 24 de ore de la data la care au luat cunoștință de incidentul semnificativ, o avertizare timpurie care, după caz, indică dacă există suspiciuni că incidentul este cauzat de acțiuni ilicite sau răuvoitoare sau că ar putea avea un impact transfrontalier;" | "Avertizare timpurie": at the latest 24 hours after becoming aware of the significant incident; says whether unlawful or malicious action is suspected or a cross-border impact possible. | verified |
| **Incident report: 72 hours from awareness** | OUG Art. 15(7)(b) | "fără întârzieri nejustificate, dar nu mai târziu de 72 de ore din momentul în care au luat cunoștință de incidentul semnificativ, o raportare a incidentului, care, după caz, actualizează informațiile menționate la lit. a) și prezintă o evaluare inițială a incidentului semnificativ, inclusiv a gravității și a impactului acestuia, precum și a indicatorilor de compromitere, dacă sunt disponibili;" | "Raportare a incidentului" (point d calls it "notificarea incidentului"): within 72 hours, with an initial assessment, severity, impact and indicators of compromise. | verified |
| Trust service providers: 24 hours for that report | OUG Art. 15(8) | "Prin excepție de la alin. (7) lit. b), un prestator de servicii de încredere raportează, în ceea ce privește incidentele semnificative care afectează prestarea serviciilor sale de încredere, echipei de răspuns la incidente de securitate cibernetică naționale, fără întârzieri nejustificate și, în orice caz, în termen de 24 de ore de la data la care a luat cunoștință de incidentul semnificativ." | | verified |
| Intermediate report: on request | OUG Art. 15(7)(c) | "c) un raport intermediar privind actualizarea relevantă a situației, la cererea echipei de răspuns la incidente de securitate cibernetică naționale;" | "Raport intermediar", only when the CSIRT asks. | verified |
| **Final report: one month from the incident report** | OUG Art. 15(7)(d) | "d) un raport final, în termen de cel mult o lună de la transmiterea notificării incidentului în temeiul lit. b), care să includă cel puțin următoarele elemente:" … "1. o descriere detaliată a incidentului, inclusiv a gravității și a impactului acestuia;" … "2. tipul de amenințare sau de cauză principală care probabil că a declanșat incidentul;" … "3. măsurile de atenuare aplicate și în curs;" … "4. dacă este cazul, impactul transfrontalier al incidentului;" | "Raport final": at the latest one month after the 72-hour report, with description, severity and impact, likely threat or root cause, mitigation, cross-border impact. | verified |
| Ongoing at that date: progress report, then a final report one month after handling | OUG Art. 15(7)(e) | "în cazul unui incident în desfășurare la momentul prezentării raportului menționat la lit. d), entitățile în cauză prezintă un raport privind progresele înregistrate și un raport final în termen de o lună de la gestionarea incidentului." | "Raport privind progresele înregistrate", then the final report within one month of the incident's handling. | verified |
| **National addition: 6 hours for information showing a cross-border impact** | OUG Art. 15(3) | "Entitățile esențiale și entitățile importante raportează, fără întârzieri nejustificate, dar nu mai târziu de 6 ore de la momentul la care au luat cunoștință de orice informație care îi permite echipei de răspuns la incidente de securitate cibernetică naționale să constate un impact transfrontalier al incidentului. Simpla raportare nu expune entitatea unei răspunderi sporite." | Entities report, at the latest 6 hours after becoming aware of any information that lets the national CSIRT establish a cross-border impact of the incident. The sentence does not name its object; reading: that information. The directive asks for that information without a time limit of its own (Art. 23(1), comparison section); the 6 hours are national. Reporting alone does not increase liability. | verified (object of the sentence: reading) |
| The CSIRT answers within 24 hours where possible | OUG Art. 15(9) | "Echipa de răspuns la incidente de securitate cibernetică națională furnizează, fără întârzieri nejustificate și, atunci când este posibil, în termen de 24 de ore de la primirea avertizării timpurii conform alin. (7) lit. a), un răspuns entității raportoare" | | verified |

### The anchor: "au luat cunoștință"

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Awareness, worded "data" for 24 h and "momentul" for 72 h | OUG Art. 15(7)(a), (b) (above) | "de la data la care au luat cunoștință de incidentul semnificativ" … "din momentul în care au luat cunoștință de incidentul semnificativ" | Both anchor on becoming aware of the significant incident; the 24-hour limb says "from the date on which", the 72-hour limb "from the moment at which". The Romanian text of the directive uses the same two phrasings (comparison section), so the difference is not national. No text read resolves whether "data" means a calendar date. | verified (wording difference not resolved) |
| Legea 58/2023 anchors on finding the incident | Legea nr. 58/2023 Art. 21(1) (above) | "nu mai târziu de 48 de ore de la constatarea incidentului" | For the persons who stay under that law (not essential or important), 48 hours from finding the incident. | verified |

### Recipient and channel

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| DNSC is the national CSIRT | OUG Art. 24(2) | "DNSC îndeplinește funcția de echipă de răspuns la incidente de securitate cibernetică națională, denumită în continuare CSIRT național, în temeiul dispozițiilor Ordonanței de urgență a Guvernului nr. 104/2021." | | verified |
| Reports go through PNRISC | OUG Art. 15(2); Legea nr. 58/2023 Art. 20(1) | "Raportarea se face prin intermediul Platformei naționale pentru raportarea incidentelor de securitate cibernetică, denumită în continuare PNRISC, astfel cum este prevăzută la art. 20 din Legea nr. 58/2023." … "DNSC dezvoltă și asigură managementul Platformei naționale pentru raportarea incidentelor de securitate cibernetică, denumită în continuare PNRISC." | | verified |
| PNRISC is live, with a path for OUG entities | pnrisc.dnsc.ro and /raporteaza (read 2026-10-29) | "Platforma naţională pentru raportarea incidentelor de securitate cibernetică." … "Pentru ce tip de entitate dorești să raportezi?" … "III. Entitate înregistrată conform OUG 155/2024" | The form offers natural person, legal person, and "entity registered under OUG 155/2024"; the page gives DNSC's 1911 line, "24/7". The fields of path III were not seen (WAF block on headless Chromium; no submission attempted). | verified (authority statement) |
| Who can read PNRISC data | pnrisc.dnsc.ro (read 2026-10-29) | "au acces la datele introduse în PNRISC în vederea asigurării managementului incidentelor, rezilienței în spațiul cibernetic și îndeplinirii responsabilităților care le revin, următoarele instituții: DNSC, MEDAT, ANCOM, MAE, MApN, MAI, SRI, SIE, STS, SPP, ORNISS." | Under Legea 58/2023 Art. 20(2); DNSC's confidentiality policies are Ordin DNSC nr. 100/2024 (not read beyond its first articles). | verified (authority statement) |
| Sector authorities may collect reports, through joint orders not yet made | OUG Art. 37(7)(b) | "colecta raportări de incidente din propriul sector, potrivit ordinelor comune prevăzute la alin. (8) lit. b);" | No joint order found; until one exists the national CSIRT is the only recipient named. | verified (no joint order found) |
| Trust service providers also tell ADR within 24 hours of a critical incident | ADR Procedure Art. 12(1) (MO 246 bis/2026) | "În caz de incident critic, precum compromiterea cheilor, pierderea datelor, compromiterea lanțului de încredere, prestatorul are obligația de a:" … "a) suspenda imediat serviciul afectat;" … "b) informa ADR în maxim 24 de ore;" … "c) informa utilizatorii impactati;" … "d) furniza un plan de remediere în 24 ore." | For key compromise, data loss or trust-chain compromise: suspend the service, inform ADR within 24 hours, inform affected users, a remediation plan within 24 hours. A duty under ADR's eIDAS supervision, alongside OUG Art. 15(8). | verified |
| The catalogue puts authority reporting in the IRP, as a key measure at Important | Măsurile, RS.CO-02.2 | "Incidentele de securitate cibernetică trebuie comunicate părților interesate externe relevante în termenele definite în IRP, inclusiv raportarea incidentelor semnificative către autorități, conform prevederilor legale." | | verified |

### Informing users, the public, and other authorities

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Users exposed to a significant threat | OUG Art. 15(5) | "Dacă este cazul, entitățile esențiale și entitățile importante comunică, fără întârzieri nejustificate, destinatarilor serviciilor lor care ar putea fi afectați de o amenințare cibernetică semnificativă orice măsuri sau măsuri corective pe care destinatarii respectivi le pot lua ca răspuns la amenințarea respectivă" | | verified |
| DNSC may order users to be informed | OUG Art. 48(4) | "DNSC poate dispune entităților să informeze, într-un termen anume determinat, persoanele cărora le prestează un serviciu sau cu care desfășoară activități, dacă acestea au fost sau pot fi afectate de o amenințare cibernetică semnificativă" | Failing to do so is an offence (Art. 60(1)(ff)). | verified |
| DNSC may inform the public or ask the entity to | OUG Art. 15(13) | "DNSC sau, după caz, DNSC împreună cu autoritățile omoloage din alte state în cauză pot, după consultarea entității respective, să informeze publicul cu privire la incidentul semnificativ sau să solicite entității să facă acest lucru." | | verified |
| GDPR breach notifications are unaffected | OUG Art. 62(4) | "Raportările realizate în temeiul prezentei ordonanțe de urgență nu afectează obligațiile operatorilor de date cu caracter personal stabilite potrivit art. 33 și 34 din Regulamentul (UE) 2016/679." | | verified |

What the product does with it (2026-10-29): one UI string, the Romanian
incident line of the getting-started page (`nis2Start.basics.incident`),
follows the OUG: an avertizare timpurie within 24 hours and a raportare a
incidentului within 72 hours of becoming aware ("ați luat cunoștință") of the
significant incident, sent through PNRISC to DNSC as the CSIRT național, and a
raport final within one month of that report (Art. 15(2), (7)(a), (b), (d),
Art. 24(2)).

What the product does with it (2026-10-30): the Romanian incident configuration
(`INCIDENT_REPORTING_RO`) counts the avertizare timpurie and the raportare a
incidentului from becoming aware, in the directive's own Romanian words, gives
trust service providers 24 hours and puts the raport final one month after the
notification, on the directive's engine (no `notificationModel`). It names DNSC
as CSIRT național for every sector, with PNRISC (`pnrisc.dnsc.ro/raporteaza`) as
the channel, and never the NIS2@RO platform. The 6-hour limit of Art. 15(3) is
stated and not computed: in DNSC's description on the incident page's recipient
card, in the early-warning label and basis (the MCP tool), in the transposition
reference and in `ro.yaml`. No incident record holds the instant it runs from
(becoming aware of the information that shows the cross-border impact), the
duty exists only when such information does, and the OUG names no form for it;
the DNSC norms of Art. 15(17) may settle all three. A trust service provider's
24 hours to ADR (ADR Procedure Art. 12(1)) are stated in the notification
basis, never routed. The reminders follow the same clocks and name DNSC.

## Governance and training: the management bodies ("organele de conducere")

<!-- meta: theme=governance; type=reference; date=2026-10-29; surfaces=doc-gen,data,prompt; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/ro-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Approve, oversee, answer for breaches | OUG Art. 14(1) | "Organele de conducere ale entităților esențiale și ale entităților importante aprobă măsurile de gestionare a riscurilor de securitate cibernetică pe care le iau în vederea respectării art. 11-13 […], supraveghează punerea acestora în aplicare și sunt responsabile de încălcările acestor dispoziții, fără a aduce atingere dispozițiilor legale privind răspunderea instituțiilor publice, a funcționarilor publici și a celor aleși sau numiți." | | verified |
| **Members follow accredited training; all staff are trained regularly** | OUG Art. 14(2) (as replaced by Legea 124/2025, point 4) | "Membrii organelor de conducere ale entităților esențiale și ale entităților importante urmează cursuri de formare profesională acreditate în vederea asigurării unui nivel suficient de cunoștințe și competențe pentru a identifica riscurile și a evalua practicile de gestionare a riscurilor de securitate cibernetică, precum și impactul acestora asupra serviciilor furnizate de entitate. Entitățile esențiale și importante asigură, în mod regulat, formarea profesională întregului personal în vederea asigurării unui nivel suficient de cunoștințe și competențe." | Management-body members follow accredited professional training; the entity ensures regular training of all staff. The OUG sets no frequency for the members' training and names no accrediting body. | verified |
| Contact means, resources, security officers within 30 days | OUG Art. 14(3) | "Organele de conducere ale entităților esențiale și ale entităților importante stabilesc mijloacele permanente de contact, asigură alocarea resurselor necesare pentru punerea în aplicare a măsurilor de gestionare a riscurilor de securitate cibernetică și desemnează, în termen de 30 de zile de la data comunicării deciziei directorului DNSC pentru identificarea și înscrierea în registru, responsabilii cu securitatea rețelelor și sistemelor informatice" | | verified |
| The security officer's profile in essential entities (not public administration, micro or small) | OUG Art. 14(4) | "Persoana responsabilă cu securitatea rețelelor și sistemelor informatice, prevăzută la alin. (3), desemnată în cadrul entităților esențiale, cu excepția entităților administrației publice, precum și a microîntreprinderilor și întreprinderilor mici, astfel cum sunt stabilite potrivit dispozițiilor art. 4 alin. (1) lit. a) și b) din Legea nr. 346/2004, trebuie să îndeplinească cumulativ cel puțin următoarele:" … "a) are autoritate managerială;" … "b) este subordonată direct organelor de conducere ale entității;" … "c) funcționează independent de structurile IT și de tehnologie operațională din cadrul entității;" … "e) să fi obținut un curs de specialitate acreditat, recunoscut de DNSC, în domeniul securității cibernetice, în termen de 12 luni de la desemnare." | Managerial authority, reporting directly to the management body, independent of IT and OT, with resources, and an accredited specialist course recognised by DNSC within 12 months of designation. | verified |
| **The general meeting and the board of directors are not management bodies** | OUG Art. 50(4) (as replaced by Legea 124/2025, point 14) | "Adunarea generală a acționarilor și consiliul de administrație nu sunt organe de conducere a entităților esențiale și importante în sensul prezentei ordonanțe de urgență." | For the OUG, neither the shareholders' meeting nor the board of directors is a management body. Which body is (executive management) is not stated. | verified |
| Management answers for giving inspectors access | OUG Art. 50(3) | "Organele de conducere ale entității răspund pentru permiterea accesului personalului, desemnat în acest sens de către DNSC, în spațiile supuse controlului, cât și asupra datelor și informațiilor necesare controlului." | | verified |
| The members' failures are offences | OUG Art. 60(1)(g) to (k) | "g) nerespectarea de către membrii organelor de conducere ale entităților esențiale și importante a obligației de supraveghere a punerii în aplicare a măsurilor de gestionare a riscurilor conform art. 14 alin. (1);" … "h) nerespectarea de către membrii organelor de conducere ale entităților esențiale și importante a obligației de a urma cursuri de formare profesională în domeniul securității cibernetice conform cu art. 14 alin. (2);" … "k) nerespectarea de către membrii organelor de conducere ale entităților esențiale și importante a obligației de desemnare a responsabililor cu securitatea rețelelor și sistemelor informatice conform art. 14 alin. (3);" | Oversight, training, contact means, resources, designation. These fall in the turnover-based bands of Art. 60(2)(a) and (b), which are worded "pentru entitățile importante" and "pentru entitățile esențiale"; whether the fine is imposed on the entity or on the members is not stated in those words. | verified (addressee of the fine not resolved) |
| Temporary ban on managers, essential entities only, not public administration | OUG Art. 49(1)(b), (3) | "b) sesizarea autorităților, instituțiilor sau entităților competente pentru a impune interdicția temporară de a exercita funcția de conducere la nivel de director executiv sau de reprezentant legal în entitatea în cauză." … "Măsurile prevăzute la alin. (1) nu se aplică entităților din administrația publică care intră în domeniul de aplicare al prezentei ordonanțe de urgență." | When the Art. 48 measures fail; until DNSC notifies that the cause has ended (Art. 49(2)). | verified |
| The catalogue: management training to be demonstrable (Important) | Măsurile, PR.AT-02.1 | "Membrii organelor de conducere trebuie să poată demonstra că au urmat cursuri de instruire care le-au permis să dobândească cunoștințe solide în domeniul securității cibernetice sau a informației, precum și al managementului riscului" | | verified |
| The catalogue: a senior information security manager (Essential) and top-management accountability (Essential) | Măsurile, GV.RR-02.2, GV.RR-01.1 | "Organizația trebuie să numească un manager superior pentru securitatea informației." … "Conducerea de vârf a organizației trebuie să fie responsabilă și răspunzătoare pentru riscul de securitate cibernetică și trebuie să promoveze o cultură conștientă de riscuri, etică și în continuă îmbunătățire." | | verified |
| The catalogue: an awareness and training programme for all staff (Basic) | Măsurile, PR.AT-01.1 | "Organizația trebuie să stabilească și să mențină un program de conștientizare și instruire în domeniul securității cibernetice pentru a se asigura că tot personalul înțelege cum să își îndeplinească sarcinile în mod securizat și responsabil." | | verified |

What the product does with it (2026-10-30): the training attestation quotes
art. 14 alin. (2) in Romanian, and its note says that the OUG names neither the
accrediting body nor a frequency and that the attestation does not attest that
the course is accredited. The transposition reference and `ro.yaml` state the
approval, the oversight, the accredited training, the regular training of all
staff and Art. 50(4).

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-10-29; surfaces=prompt; guard=packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The fines are recorded as facts. House rule: marketing copy never cites them.
Amounts are ceilings with floors; the euro amounts are applied "în
echivalentul în lei".

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| DNSC's supervisory powers | OUG Art. 46(1) | "a) derula activități de supraveghere, verificare și control efectuate de persoane desemnate în acest sens prin decizie a directorului DNSC;" … "b) dispune efectuarea de audituri de securitate ad-hoc, realizate de un auditor de securitate cibernetică atestat;" … "c) solicita informații necesare pentru a evalua măsurile de gestionare a riscurilor în materie de securitate cibernetică adoptate de entitatea în cauză, inclusiv politicile de securitate cibernetică documentate" | Also access to data and documents and evidence of implementation, including audit results (d), (e); non-intrusive scans with prior notice (Art. 46(5)). | verified |
| Important entities: supervision after the fact | OUG Art. 46(4) | "În cazul entităților importante, supravegherea conform alin. (1) lit. a) se realizează doar pentru punerea în aplicare a art. 48 alin. (2) lit. b)-g)." | | verified |
| Findings, point of view in 3 days, plan in 15 working days | OUG Art. 47(3) to (5) | "Punctul de vedere prevăzut la alin. (3) va fi comunicat în termen de 3 zile de la primirea notei de constatare transmise de către DNSC" … "În cel mult 15 zile lucrătoare de la data primirii notei de constatare conform alin. (3) sau transmiterii punctului de vedere conform alin. (3), după caz, entitățile sunt obligate să întocmească și să transmită către DNSC planul de măsuri pentru remedierea tuturor deficiențelor constatate și termenele asumate pentru implementarea acestora." | Point of view within 3 days (up to 10 on a reasoned request); plan within 15 working days; proof of implementation within five days of the deadline (Art. 47(5), as replaced by Legea 124/2025). | verified |
| Sanctions and measures | OUG Art. 48(1), (2) | "a) avertisment;" … "b) amendă contravențională." … "e) desemnarea unei persoane din cadrul personalului de control cu sarcini bine definite pe o perioadă de timp determinată, responsabilă cu supravegherea respectării de către entitatea esențială în cauză a dispozițiilor art. 11-14;" … "g) ca încălcările dispozițiilor prezentei ordonanțe de urgență să fie făcute publice de către entitatea responsabilă." | Warning or fine; orders to remedy, stop, implement audit recommendations, comply in a set way; a monitoring officer (essential entities); publication of breaches. | verified |
| Factors and grave infringements | OUG Art. 50(1), (2) | "a) durata faptei;" … "b) existența unei abateri anterioare;" … "a) încălcări repetate;" … "b) obstrucționarea auditurilor, a activității de monitorizare dispuse de DNSC în urma constatărilor sau a activității de control desfășurate de către DNSC ori de către autoritatea competentă sectorial;" … "c) furnizarea de informații false sau vădit denaturate în ceea ce privește măsurile de gestionare a riscurilor în materie de securitate cibernetică prevăzute la art. 11-14 sau obligațiile de raportare prevăzute la art. 15;" | | verified |
| **Important entities: RON 5,000 to EUR 7 M or 1.4 %** | OUG Art. 60(2)(a) (as replaced by Legea 124/2025, point 17) | "a) pentru entitățile importante, amendă de la 5.000 lei la cel mult 7.000.000 euro în echivalentul în lei sau cel mult 1,4% din cifra de afaceri anuală la nivel mondial, luându-se în considerare valoarea cea mai mare dintre acestea, pentru contravențiile prevăzute la alin. (1) lit. a)-d), f)-m), dd), jj) și mm);" | From RON 5,000 up to EUR 7,000,000 or 1.4 % of worldwide annual turnover, whichever is higher: measures (a), audit (b), data (c), (d), remediation plan (f), management duties (g) to (k), reporting (l), informing recipients (m), vulnerability process (dd), audit plan (jj), joint-order rules (mm). Reading: the list skips (e), the yearly self-assessment, which binds both classes, and includes (f), which Art. 60(1)(f) addresses to essential entities only; no band of Art. 60(2) names (e) for an important entity. | verified (the gap is a reading) |
| **Essential entities: RON 10,000 to EUR 10 M or 2 %** | OUG Art. 60(2)(b) | "b) pentru entitățile esențiale, amendă de la 10.000 lei la cel mult 10.000.000 euro în echivalentul în lei sau cel mult 2% din cifra de afaceri anuală la nivel mondial, luându-se în considerare valoarea cea mai mare dintre acestea, pentru contravențiile prevăzute la alin. (1) lit. a)-m), dd), jj) și mm);" | Including the yearly self-assessment (e). | verified |
| Fixed bands for the procedural offences | OUG Art. 60(2)(c) to (e) | "c) pentru entitățile importante, amendă de la 1.000 lei la 300.000 lei, pentru contravențiile prevăzute la alin. (1) lit. n)-t), ee), ff), kk), ll) și nn)-qq);" … "d) pentru entitățile esențiale, amendă de la 1.500 lei la 500.000 lei, în cazul alin. (1) lit. n)-t), ee), ff), kk), ll) și nn)-qq);" … "e) amendă de la 1.000 lei la 100.000 lei, pentru contravențiile prevăzute la alin. (1) lit. u)-z), aa)-cc) și gg)-ii)." | RON 1,000 to 300,000 (important) and 1,500 to 500,000 (essential) for failing to notify or remedy significant incidents or remedy found deficiencies (n), notification and registration data (o), (p), risk level (q), first self-assessment (r), changes (s), deregistration (t), audit results and plans (ee), (kk), (ll), informing (ff), information requests and remediation plans (nn) to (qq); RON 1,000 to 100,000 for registries, registrars, unauthorised CSIRTs, vulnerability duties, CSIRTs, auditors and training providers. | verified |
| Grave infringements: RON 3,000 to 600,000, raised by half when repeated | OUG Art. 60(2^1), (4) | "încălcările grave prevăzute la art. 50 alin. (2) constituie contravenții și se sancționează cu amendă de la 3.000 lei la 600.000 lei." … "În cazurile prevăzute la art. 50 alin. (2) lit. a), cuantumul limitelor prevăzute la alin. (2^1) se majorează cu jumătate." | | verified |
| **The turnover is the entity's own** | OUG Art. 60(3) (as replaced by Legea 124/2025, point 19) | "Cifra de afaceri anuală la nivel mondial prevăzută la alin. (2) lit. a) și b) este cea înregistrată de către entitatea importantă sau esențială în ultimul exercițiu financiar." | The worldwide annual turnover of the entity itself in its last financial year (the directive's Art. 34(4) and (5) refer to the undertaking to which the entity belongs). | verified |
| New companies: 1 to 50 minimum gross salaries | OUG Art. 60(5) | "Pentru persoanele juridice nou-înființate și pentru persoanele juridice care nu au înregistrat cifra de afaceri în exercițiul financiar anterior sancționării, amenda prevăzută la alin. (2) se stabilește în cuantum de minimum unu și maximum 50 de salarii minime brute pe economie." | | verified |
| Half the fine if paid within 15 days | OUG Art. 60(7) | "contravenientul poate achita, în termen de cel mult 15 zile de la data înmânării sau comunicării actului de constatare a contravenției și de aplicare a sancțiunii, jumătate din cuantumul amenzii aplicate" | | verified |
| Limitation: three years | OUG Art. 61(4) | "aplicarea sancțiunii stabilite în temeiul prezentei ordonanțe de urgență se prescrie în termen de trei ani de la data săvârșirii faptei." | From the end of a continuing breach where it lasts. | verified |
| Who finds the offences | OUG Art. 61(2) (as replaced by Legea 124/2025, point 20) | "Constatarea contravențiilor prevăzute la art. 60 alin. (1) lit. a)-n), ee), ff), jj)-qq) se realizează de către DNSC sau de către personalul de control al autorităților competente sectorial conform art. 37 alin. (1)" … "Constatarea contravențiilor prevăzute la art. 60 alin. (1) lit. o)-dd), gg)-ii) și alin. (2^1) se realizează de către DNSC, aplicarea sancțiunii realizându-se prin decizie a directorului DNSC." | Sector authorities (ANCOM, ADR) for their sectors on the substantive offences; DNSC alone on registration and the rest. | verified |
| Appeal: Bucharest Court of Appeal, 30 days, no prior complaint | OUG Art. 61(8) | "pot fi atacate în contencios administrativ la Curtea de Apel București, fără parcurgerea procedurii prealabile, în termen de 30 de zile de la comunicarea acestora." | | verified |
| No double sanction with the data-protection authority | OUG Art. 62(2) | "DNSC nu aplică dispozițiile art. 48 alin. (1) pentru fapte cu impact în domeniul protecției datelor cu caracter personal cu privire la care s-a efectuat sau se efectuează o investigație de către ANSPDCP." | | verified |
| The fines took effect 30 days after the OUG's publication | OUG Art. 64(4) (first section) | "Prevederile art. 60 și 61 intră în vigoare la 30 de zile de la data publicării prezentei ordonanțe de urgență în Monitorul Oficial al României, Partea I." | 30 days from 31 December 2024; the end date is not stated in the text. | verified |

### How DNSC controls (Ordin 3/2025, annex 1)

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Three kinds of control | Norme Art. 13 | "a) controale de fond reprezentând activități de control cu caracter general, prevăzute în planul de control anual" … "b) controale tematice" … "c) controale inopinate reprezentând activități de control neplanificate, desfășurate cu operativitate" | General, thematic (both planned, notified in advance), unannounced. | verified |
| Notice: 30 days for planned controls, 5 days or none for unannounced ones | Norme Art. 22(3), (4) | "În cazul controalelor planificate notificarea se comunică fie în format letric, prin scrisoare recomandată cu confirmare de primire, fie în format electronic, cu confirmare de primire, cu 30 de zile calendaristice anterior declanșării controlului." … "În cazul controalelor declanșate inopinat notificarea se poate aduce la cunoștința entității, în oricare dintre modalitățile prevăzute la alin. (3), cu 5 zile calendaristice anterior începerii controalelor sau, după caz, la data declanșării activității de control." | | verified |
| Unannounced controls: a significant incident is a trigger | Norme Art. 20(1)(a) | "a) producerea unui incident semnificativ în înțelesul dispozițiilor art. 15 alin. (6) din Ordonanța de urgență a Guvernului nr. 155/2024;" | | verified |
| Findings note within 30 working days; DNSC decides within 30 days | Norme Art. 36, Art. 41(2) | "Nota de constatare se întocmește în termen de cel mult 30 de zile lucrătoare de la finalizarea activității de supraveghere sau de control." … "Decizia de constatare a contravenției și de aplicare a sancțiunii se emite cu respectarea unui termen de 30 de zile calendaristice de la data înaintării notei de constatare către directorul DNSC." | | verified |
| Complaints and follow-up go to a DNSC address | Norme Art. 11(3), Art. 44(1) | "Sesizările menționate la alin. (1) lit. b) pot fi transmise DNSC fie în format letric, la sediul din Strada Italiană nr. 22, sectorul 2, București, fie prin e-mail, la adresa control@dnsc.ro." … "Rezultatele privind stadiul implementării măsurilor prevăzute în nota de constatare și în planul de măsuri asumat de către entitate sunt consemnate într-un document aprobat de către conducerea entității și care este transmis către DNSC, în format electronic, la adresa de e-mail: control@dnsc.ro" | | verified |
| Documents an entity must have ready | Norme Art. 10(2)(c) | "să pună la dispoziția personalului de control registrul de riscuri, situații centralizatoare referitoare la bazele de date administrate, să permită accesul la aplicațiile informatice utilizate la nivelul entității supuse controlului, inventarul software-ului utilizat, al licențelor utilizate în cadrul entității, evidențe ale aplicațiilor dezvoltate" | The risk register, database summaries, access to applications, software and licence inventories, records of applications developed. | verified |

## Language: the binding texts are Romanian

<!-- meta: theme=statute; type=reference; date=2026-10-29; surfaces=i18n,doc-gen,data; guard=packages/regulatory-data/test/nis2-catalogue-locales.test.ts,packages/regulatory-data/test/config-official-languages.test.ts -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Romanian is the official language | Constitution Art. 13 | "În România, limba oficială este limba română." | | verified |
| The texts are published in Romanian in Monitorul Oficial, Partea I | The issues listed in the sources section | (no quote) | The gazette also has a Hungarian edition of Part I ("Partea I Maghiară", issue 52 on 31.12.2024 in the e-monitor listing); whether it carries the OUG was not checked. | verified (Hungarian edition not checked) |
| No official English text found | Portal Legislativ and monitoruloficial.ro (the national measures listed on EUR-Lex were not consulted) | (no quote) | No English version of the OUG or of the DNSC orders was found. DNSC's site, where an English page might be, could not be reached. Never quote an unofficial translation as the law. | not found |

Terms the product will need, in their dictionary form (lemmas, not
quotations): entitate esențială, entitate importantă (essential and important
entity); întreprindere mare, mijlocie, mică, microîntreprindere; notificare în
vederea înregistrării; registrul entităților; decizia de identificare și
înscriere în registru; radiere din registru; evaluarea nivelului de risc;
autoevaluarea nivelului de maturitate; plan de măsuri; responsabil cu
securitatea rețelelor și sistemelor informatice; organele de conducere
(management bodies); incident semnificativ; avertizare timpurie (early
warning); raportare a incidentului or notificarea incidentului (incident
notification); raport intermediar; raport final; raport privind progresele
înregistrate; a lua cunoștință (to become aware); CSIRT național; punct unic de
contact; autoritate competentă sectorial; PNRISC; Platforma NIS2@RO;
Instrumentul NIS2@RO; ENIRE@RO; EVAL_MMS_B / _I / _E; nivel de asigurare (de
Bază, Important, Esențial); Măsură cheie; Aspect de management; declarație de
aplicabilitate; auditor de securitate cibernetică atestat; notă de constatare.
DNSC is "Directoratul Național de Securitate Cibernetică".

What the product does with it (2026-10-29): the Romanian UI, e-mails and PDF
labels use the directive's Romanian words for every generic string and these
words only where a string is about Romania (`tools/ro-i18n/GLOSSARY.md`, which
sets the two apart). The 72-hour act is the directive's "notificare a
incidentului" everywhere but in the one OUG string above, which says
"raportare a incidentului".

## The directive's Romanian text, read for comparison

<!-- meta: theme=incident,governance,sanctions; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Directive (EU) 2022/2555 in its Romanian version (OJ L 333, 27.12.2022, EUR-Lex
HTML, read through headless Chromium). Every language version is authentic;
these rows exist only to tell what is national in the OUG from what is the
directive's own Romanian wording.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Cross-border information is already a duty, without a deadline | Directive Art. 23(1), third and fourth sentences | "Fiecare stat membru se asigură că entitățile respective raportează, inter alia, orice informație care îi permite echipei CSIRT sau, după caz, autorității competente să constate orice impact transfrontalier al incidentului. Simpla notificare nu expune entitatea notificatoare unei răspunderi sporite." | The OUG's Art. 15(3) adds the 6-hour limit. | verified |
| The same anchor words | Directive Art. 23(4)(a), (b) | "în termen de 24 de ore de la data la care au luat cunoștință de incidentul semnificativ, o avertizare timpurie" … "în termen de 72 de ore din momentul în care au luat cunoștință de incidentul semnificativ, o notificare a incidentului" | The 72-hour act is "o notificare a incidentului" in the directive and "o raportare a incidentului" in OUG Art. 15(7)(b), whose point (d) still says "notificării incidentului". | verified |
| Progress report "at that time" | Directive Art. 23(4)(e) | "statele membre se asigură că entitățile în cauză prezintă la momentul respectiv un raport privind progresele înregistrate și un raport final în termen de o lună de la gestionarea incidentului." | OUG Art. 15(7)(e) omits "la momentul respectiv"; its opening words ("la momentul prezentării raportului menționat la lit. d)") place the progress report at the final report's due date all the same (reading). | verified |
| Training: members obliged; staff training encouraged | Directive Art. 20(2) | "membrii organelor de conducere din cadrul entităților esențiale și al entităților importante au obligația de a urma o formare" … "și încurajează entitățile esențiale și entitățile importante să ofere o formare similară tuturor angajaților în mod regulat." | The OUG makes the members' training "acreditate" and the staff's regular training a duty ("asigură"). | verified |
| Audits: periodic for essential, targeted for important, as supervisory powers | Directive Art. 32(2)(b); Art. 33(2)(b) | "unor audituri de securitate periodice și specifice efectuate de un organism independent sau de o autoritate competentă;" … "unor audituri de securitate specifice efectuate de un organism independent sau de o autoritate competentă;" | The OUG makes undergoing an audit an entity duty for both classes (Art. 11(5)). | verified |
| The directive's grave infringements | Directive Art. 32(7)(a) | "(ii)" … "o neîndeplinire a obligației de notificare sau de remediere a incidentelor semnificative;" … "(iii)" … "o neremediere a deficiențelor în urma instrucțiunilor obligatorii din partea autorităților competente;" | OUG Art. 50(2) lists repeated breaches, obstruction, false information, denied access and breach of DNSC's Art. 48(2) orders; the directive's point (ii) is not in that list (failure to notify or remedy is offence n) of Art. 60(1)). | verified |
| Fines: the undertaking's turnover | Directive Art. 34(4) | "unor amenzi administrative având o limită superioară de cel puțin 10 000 000 EUR sau o limită superioară de cel puțin 2 % din cifra de afaceri mondială totală anuală, înregistrată în exercițiul financiar precedent, a întreprinderii căreia îi aparține entitatea esențială" | The directive's turnover is that of the undertaking the entity belongs to; OUG Art. 60(3) takes the entity's own. Art. 34(5) is the same for important entities (EUR 7,000,000, 1.4 %). | verified |

## Departures from the directive, read from the texts above

<!-- meta: theme=scoping,registration,incident,governance,sanctions,framework; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Each line is a reading of quotes already recorded in this file and in eu.md; it
adds no source.

- **Size test by the national SME law.** OUG Art. 8 sizes by Legea 346/2004
  Art. 4(1)(c) (with Art. 4^5 off), whose medium band requires 50 to 249
  employees: an enterprise under 50 employees with both financial figures
  above EUR 10 million may be in no category, where the Recommendation makes
  it medium (scope section, unresolved).
- **Inverted ladder: a medium MSSP is essential** (Art. 5(4)); under the
  directive it is important.
- **Annex additions**: medicines distribution authorisation holders and CAEN
  4646 and 4773 (pharmaceutical wholesale and retail) in health; offshore wind
  operators; Modernisation Fund beneficiaries; aircraft maintenance operators,
  civil aeronautical agents and Part-IS organisations in air transport.
- **Public administration**: central only, essential at any size, with a longer
  exclusion list than the directive's (higher education institutions, the
  Government's General Secretariat, the Prime Minister's Chancellery, the
  Presidential Administration, ASF, ANCOM, beside the judiciary, Parliament and
  the central bank); no regional or local level; the Ministry of Foreign
  Affairs and ORNISS are outside the OUG altogether (Art. 2(2)). Local
  authorities keep a 48-hour PNRISC duty under Legea 58/2023.
- **Art. 9 made self-assessed**: sole provider in Romania is essential (Annex 1)
  or important (Annex 2) by order; impact thresholds the entity assesses itself
  decide the rest, some without a number (Ordin 2/2025).
- **DORA**: financial entities are classified and register; nothing else
  applies (Art. 2(3)).
- **Registration chain**: DNSC decides within 60 days (essential) or 150 days
  (important); the decision starts 30 days for security officers, 60 days for
  a risk-level assessment, then 60 days for a maturity self-assessment, repeated
  yearly and sent to DNSC; essential entities send a remediation plan within 30
  days of each one.
- **Measures level set by a risk score**, not by the class: a national
  catalogue of 218 controls in three cumulative levels; a five-person essential
  DNS provider is at the Basic level by default, a small central public body at
  the Important level.
- **Incident reporting**: a 6-hour limit on the information that shows a
  cross-border impact (Art. 15(3)), which the directive asks for without a
  deadline (Art. 23(1)); otherwise the directive's own Romanian words: 24 h,
  72 h (24 h for trust services), an intermediate report on request, a final
  report one month after the notification.
- **Management**: members follow "accredited" training (no frequency); the
  regular training of all staff is a duty, where the directive encourages it
  (Art. 20(2)); designated security officers with a statutory profile in medium
  and large essential entities; the shareholders' meeting and the board of
  directors are not management bodies (Art. 50(4)).
- **Fines**: maxima at the level Art. 34(4) and (5) require, with lei floors
  (the directive sets no cap of its own: eu.md, section of 2026-11-05); the
  turnover limb is the entity's own worldwide turnover, not its undertaking's
  (Art. 60(3) against directive Art. 34(4), (5)); fixed lei bands for
  procedural offences; half the fine if paid within 15 days; a list of grave
  infringements that drops the directive's failure to notify or remedy
  significant incidents (Art. 50(2) against Art. 32(7)(a)(ii)).
- **Vulnerability disclosure**: in-scope ICT producers and suppliers report and
  fix vulnerabilities with DNSC (Art. 36(4)); every entity runs a
  vulnerability-management process (Art. 36(7)); a criminal-law safe harbour
  for reporters (Legea 123/2026, in force on the date the Portal gives,
  06-07-2026).
- **Audits as an entity duty for both classes** (Art. 11(5)) by DNSC-attested
  auditors, where the directive gives authorities the power to order periodic
  and targeted audits of essential entities and targeted audits of important
  ones (Art. 32(2)(b), 33(2)(b)); the schedule is not set.
- **Domain names**: a registration that is not corrected is blocked, then
  cancelled (Art. 19(6), (7)).

## Time-limited facts: re-check before rendering

<!-- meta: theme=statute,scoping,registration,framework; type=reference; date=2026-10-29; surfaces=docs,test,marketing; guard=packages/regulatory-data/test/ro-incident-reporting.test.ts,apps/web/test/country-romania-fiche.test.tsx -->

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Legea 119/2026 not yet in force | Legea nr. 119/2026 Art. 25(1) | "Prezenta lege intră în vigoare la 6 luni de la data publicării în Monitorul Oficial al României, Partea I." | Published 3 July 2026, so in force about 3 January 2027 (computed, not read); its Art. 16(1) then brings public digital resources registered in PNIDP under the OUG. Re-check the scope of local public administration then. | verified (the date is computed) |
| The auditors' professional body is due within two years | OUG Art. 59(1) | "se înființează Corpul Auditorilor de Sisteme Informatice din România prin hotărâre de Guvern elaborată de către DNSC, în termen de doi ani de la intrarea în vigoare a prezentei ordonanțe de urgență." | Two years from 31 December 2024; no such Government decision found. | not found as of 2026-10-29 |
| The critical-entities list was due by 17 July 2026 | Legea nr. 294/2024 Art. 6(1) | "Până la 17 iulie 2026, CNCPIC identifică entitățile critice pentru sectoarele și subsectoarele prevăzute în anexă, cu sprijinul ACS." | Whether the Prime Minister's decision exists, and whether it is published, was not established. Art. 5(1)(c) depends on it. | not established |
| The 2025 risk methodology's Art. 6 was replaced on 27 August 2026 | Ordin 1/2026 Art. V | (quoted in the scope section) | Anything built before that date that kept the sector 8 entities under Implementing Regulation 2024/2690 (DNS, TLD, cloud, data centre, CDN, trust services) or the digital providers out of the national risk assessment is stale. | verified |
| The not-applicable rule exists since 18 September 2026 | Ordin 2/2026 Art. I point 2 | "La anexa nr. 2, după articolul 3 se introduce un nou articol, art. 4, cu următorul cuprins:" | Self-assessments made before that date had no cap on N/A controls. | verified |
| Incident-reporting norms still to come | OUG Art. 15(17), Art. 65(1)(c) | (quoted in the incident section) | When DNSC publishes them, the incident model must be re-read: they may add thresholds, a form, or sector rules. | not found as of 2026-10-29 |
| Staffing derogations end on 31 December 2027 | OUG Art. 67(1) | "Până la data de 31 decembrie 2027, în vederea obținerii unui nivel adecvat de personal calificat" | Internal to the authorities; no entity duty. | verified |

## Open items: not read, or not resolved

<!-- meta: theme=scoping,registration,incident,framework,governance; type=lead; date=2026-10-29; surfaces=docs; guard=none -->

None of these may feed a configuration until read or resolved.

- **DNSC's own pages and the NIS2@RO platform**: unreachable (Cloudflare
  challenge on `dnsc.ro`, Cloudflare block on `platformanis2.ro`, for curl,
  WebFetch and headless Chromium; no bypass tried). So it is **not verified**
  whether the platform is live, how entities register today in practice, or
  what DNSC's FAQs and guidance say. Leads seen only as search-result titles,
  not read: "COMUNICAT DE PRESĂ: Anunț privind înregistrarea entităților
  esențiale și importante conform prevederilor OUG 155/2024"
  (dnsc.ro/citeste/comunicat-presa-inregistrare-entitati-esentiale-importante-oug155);
  "DIRECTIVA NIS 2" (dnsc.ro/pagini/ansrsi2); "Raport anual de activitate 2025"
  (dnsc.ro/vezi/document/dnsc-raport-anual-2025); a 2025 draft order at
  dnsc.ro/vezi/document/notificare-metoda-transmitere-proiect-v2025; "Metodologie
  privind identificarea și clasificarea entităților"
  (dnsc.ro/vezi/document/metodologie-miceia-ro). The tracker's
  `registrationLive` must stay false.
- **The PNRISC form for OUG 155 entities**: the landing page and the type
  choice were read; the fields and stages of path III were not (WAF).
- **Incident-reporting norms (Art. 15(17))** and the other delegated acts of
  Art. 65(1)(e) to (l) and 65(2): not on the Portal.
- **The size gap** of Legea 346/2004 Art. 4(1)(c) (scope section): no
  authority reading found.
- **Art. 9(d)**: no rule found deciding essential or important.
- **The medium limbs of Criterii Art. 4(2) and 5(2)** carry no number; no
  authority reading found.
- **Registrars**: the OUG gives them Art. 19 duties and lists them in Art.
  7(3), 18(3)(h) and 18(10), but Art. 18(2) makes notification conditional on
  Arts 5 and 6, which name no registrar. Whether a registrar must notify was not
  established.
- **Fines for management-body offences** (Art. 60(1)(g) to (k)): whether they
  fall on the entity or on the members.
- **Art. 60(2)(a)** (important entities) lists letters a)-d) and f)-m): it
  skips (e), the yearly self-assessment, and includes (f), an essential-only
  offence. No band names (e) for an important entity; no correcting text or
  authority reading found.
- **"Cursuri de formare profesională acreditate"** (Art. 14(2)): the
  accrediting body is not named; the training-provider rules of Ordin DNSC nr.
  106/2022 and the curricula of Decizia nr. 107/2022 were made under the
  repealed Legea 362/2018 and their status was not established.
- **Legea 119/2026 Art. 16(1)**: what "intră sub incidența" does to the class
  of a local authority once that law is in force.
- **Implementing Regulation (EU) 2024/2690 Arts 5 to 14** (per-type
  significance thresholds) and its annex: not read here; they belong in eu.md.
- **The annex 1 implementation guidance** of Ordin 1/2026 (the "GHID DE
  IMPLEMENTARE" under each control, about 400,000 characters) was read only
  where cited; the 218 control statements and the applicability table were
  read in full.
- **ANCOM Decision 70/2024**, kept in force by Art. 64(1), was not read.
- **Legea 163/2021** (infrastructures of national interest, used by the Art.
  9(d) self-analysis) was not read.
- **Ordin DNSC nr. 100/2024** (PNRISC policies) read only in its first articles.
- **The explanatory note** to the OUG and the Senate's concordance table were
  not read.

## What the scope check says on public administration (2026-11-05)

<!-- meta: theme=scoping; type=scope-error; date=2026-11-05; surfaces=data,prompt; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

The engine read the directive's sentences for a county or a municipality. The
rows above settle them: only the central level is listed, so a regional or local
body is out of scope as public administration, and the sentence says it still
reports incidents under Legea nr. 58/2023. Legea nr. 119/2026 is to be read again
when it enters into force: the row above computes about 3 January 2027. The size
test stays open and has no entry.
