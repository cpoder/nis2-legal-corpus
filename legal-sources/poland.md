# Poland — NIS2 National Transposition Legal Sources

## Statute: Amendment to the National Cybersecurity System Act (ustawa o KSC)

<!-- meta: theme=statute; type=reference; date=2026-07-26; surfaces=data,docs; guard=none -->

| Field | Value |
|---|---|
| Official citation | Dz.U. 2026 poz. 252 (ustawa z dnia 23 stycznia 2026 r. o zmianie ustawy o krajowym systemie cyberbezpieczeństwa oraz niektórych innych ustaw) |
| Short name | KSC amendment (Dz.U. 2026 poz. 252) |
| Transposes | Directive (EU) 2022/2555 (NIS2) |
| Official URL (Sejm ELI) | https://api.sejm.gov.pl/eli/acts/DU/2026/252 |
| Retrieval date | 2026-06-07 |

### Fact table

| Fact | Source | Verbatim quote | Status |
|---|---|---|---|
| Entry into force = 2026-04-03 | Art. 49 (Sejm ELI text.pdf) | "Art. 49. Ustawa wchodzi w życie po upływie miesiąca od dnia ogłoszenia." | verified |

### Notes

- Signed by the President 2026-02-19; published in Dziennik Ustaw 2026-03-02 (Dz.U. 2026 poz. 252). Art. 49: "Ustawa wchodzi w życie po upływie miesiąca od dnia ogłoszenia" → one month after publication ⇒ **in force 2026-04-03**.
- Full statute text read from the Sejm ELI text endpoint (https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf) via pdftotext — bypasses the CAPTCHA on the dziennikustaw.gov.pl viewer.
- Tracker: stage = `in_force`; targetDate null (already in force).

## Supply chain — art. 8 and the high-risk-supplier regime (art. 67b–67c)

<!-- meta: theme=supply-chain; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** Dz.U. 2026 poz. 252 (ustawa z dnia 23 stycznia 2026 r.), full
  text via the Sejm ELI endpoint https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf
  (pdftotext — bypasses the ISAP/dziennikustaw CAPTCHA).
- **Retrieved + read:** 2026-07-25 (art. 1 pkt 16 = new art. 8; pkt 76 =
  new rozdział 12a containing art. 67b–67c).

### Fact table

| Fact | Source | Verbatim quote | Status |
|---|---|---|---|
| Supply chain is art. 8 ust. 1 pkt 2 **lit. e** | art. 1 pkt 16 (new art. 8) | "bezpieczeństwo i ciągłość łańcucha dostaw produktów ICT, usług ICT i procesów ICT, od których zależy świadczenie usługi, z uwzględnieniem związków pomiędzy bezpośrednim dostawcą sprzętu lub oprogramowania a podmiotem kluczowym lub podmiotem ważnym" | verified |
| NIS2 art. 21(3) IS transposed, in art. 8 ust. 2 | art. 1 pkt 16 | "Wdrażając środki, o których mowa w ust. 1 pkt 2 lit. e, podmiot kluczowy lub podmiot ważny uwzględnia: 1) podatności związane z dostawcą sprzętu lub oprogramowania; 2) ogólną jakość produktów ICT, usług ICT i procesów ICT pochodzących od dostawcy…; 3) wyniki skoordynowanej oceny bezpieczeństwa przeprowadzonej przez Grupę Współpracy…; 4) wyniki postępowania, o którym mowa w art. 67b." | verified |
| **PL-specific: entities must factor in the high-risk-supplier proceeding** | art. 8 ust. 2 pkt 4 | "wyniki postępowania, o którym mowa w art. 67b" | verified |
| High-risk supplier = ministerial decision | art. 67b ust. 1 | "Minister właściwy do spraw informatyzacji, w celu ochrony bezpieczeństwa państwa lub bezpieczeństwa i porządku publicznego, może wszcząć … postępowanie w sprawie uznania dostawcy sprzętu lub oprogramowania … za dostawcę wysokiego ryzyka." | verified |
| Decision is immediately enforceable, no reconsideration | art. 67b ust. 18–19 | "Decyzja … podlega natychmiastowemu wykonaniu." / "Od decyzji … nie przysługuje wniosek o ponowne rozpatrzenie sprawy." | verified |
| **Hard withdrawal deadlines after a designation** | art. 67c ust. 1–2 | "1) nie wprowadzają do użytkowania typów produktów ICT… dostarczanych przez dostawcę wysokiego ryzyka; 2) wycofują z użytkowania … nie później niż w terminie 7 lat od dnia ogłoszenia decyzji … w Dzienniku Urzędowym … »Monitor Polski«" — 4 years for telecom operators (ust. 2) | verified |
| Public-procurement ban | art. 67c ust. 4 | entities subject to Prawo zamówień publicznych "nie mogą nabywać typów produktów ICT…" covered by the decision | verified |
| **No supplier register, no data-exposure duty in art. 8** | art. 8 (whole) | art. 8 requires supply-chain security + the ust. 2 factors; it does NOT mandate a supplier inventory nor documenting what data a supplier can access | verified (absence confirmed on the full article text) |

### Why this matters to the product

The high-risk-supplier regime is a **hard, dated, PL-specific obligation** on
every podmiot kluczowy/ważny: once a designation is published in Monitor Polski,
the covered ICT products/services/processes must not be newly deployed and must
be withdrawn within 7 years (4 for telecoms on Annex-3 critical functions), with
a procurement ban on top. Reglyze models none of this — `ksc.yaml` carries
`8.2.e` as a bare title. For an MSP selling in Poland this is the single most
concrete supply-chain duty to track per client.

### Corrections to internal data

`packages/regulatory-data/src/nis2-mappings/frameworks/ksc.yaml` has `8.2.e` as
a title only, and no representation of art. 8 ust. 2 (the 21(3) factors) nor of
art. 67b–67c. → enrich before any PL commercial claim on supply chain.

## Registration, supervision, sanctions, thresholds: Dz.U. 2026 poz. 252

<!-- meta: theme=registration,sanctions,scoping; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** same official text, https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf
  (102 pages, `pdftotext -layout`).
- **Retrieved + read:** 2026-07-25 (art. 5, 6, 7c, 53, 73, 73a read verbatim).

### 1. Registration: art. 7c

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| **Registration deadline = 6 rolling months from the moment the entity meets the criteria** | art. 7c ust. 1 | "Podmiot kluczowy lub podmiot ważny składają wniosek o wpis do wykazu, **w terminie 6 miesięcy od dnia spełnienia przesłanek** uznania za podmiot kluczowy lub podmiot ważny." | ✅ |
| Change of data: **14 days** | art. 7c ust. 3 | "składają wniosek o zmianę wpisu w wykazie … **w terminie 14 dni od dnia ich zmiany**" | ✅ |
| Registration effective **upon filing** in the system | art. 7d ust. 1 | "Wpisu podmiotu do wykazu dokonuje się **z chwilą złożenia wniosku** w systemie teleinformatycznym" | ✅ |
| **Declaration by the manager under criminal liability** | art. 7c ust. 5 | "Świadomy **odpowiedzialności karnej** za złożenie fałszywego oświadczenia wynikającej z art. 233 § 6 … Kodeks karny oświadczam, że dane zawarte we wniosku są zgodne z prawdą." (excludes IP ranges and domain names) | ✅ |
| Failure to register within the deadline = **sanctionable** | art. 73 ust. 1a pkt 1 | "może nałożyć karę pieniężną na podmiot, który: 1) **w terminie, o którym mowa w art. 7c ust. 1, nie złożył wniosku o wpis do wykazu**" | ✅ |

⚠️ **This is a rolling deadline, not a calendar window.** An entity that
crosses the thresholds in September 2026 has until March 2027. See the
reconciliation further down.

### 2. Supervision: art. 53

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| **Kluczowy: preventive AND ex-post supervision. Ważny: ex-post only** | art. 53 ust. 3 | "sprawują nadzór o charakterze: 1) **prewencyjnym i następczym** nad podmiotami kluczowymi; 2) **następczym** nad podmiotami ważnymi, w szczególności w przypadku uzasadnionego podejrzenia…" | ✅ |
| Powers over kluczowe entities: on-site or remote inspections, **including unannounced** | art. 53 ust. 2 pkt 1 | "prowadzić kontrole, **w tym doraźne**, w siedzibie podmiotu … lub zdalnie" | ✅ |
| May **impose an audit by decision** | art. 53 ust. 2 pkt 2 | "w drodze decyzji nałożyć na podmiot obowiązek przeprowadzania audytu, o którym mowa w art. 15 ust. 1b" | ✅ |
| May **commission a CSIRT** to assess the entity's information system | art. 53 ust. 2 pkt 3 | "zlecić CSIRT MON, CSIRT NASK, CSIRT GOV lub CSIRT sektorowemu, dokonanie oceny bezpieczeństwa systemu informacyjnego" | ✅ |
| May demand **evidence** of implementation of art. 8 | art. 53 ust. 2 pkt 6 | "wystąpić z wnioskiem o przedstawienie **dowodów realizacji** wymogów, o których mowa w art. 8 ust. 1" | ✅ |

### 3. Sanctions: art. 73 and 73a

**On the entity:**

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| Kluczowy: **€10 M or 2 % of turnover, whichever is HIGHER**, floor 20 000 zł | art. 73 ust. 3 | "nie może przekroczyć 10 000 000 euro … lub 2 % przychodów … **przy czym zastosowanie ma kwota wyższa**. Kara ta nie może być jednak **niższa niż 20 000 zł**." | ✅ |
| Ważny: **€7 M or 1.4 % of turnover**, floor 15 000 zł | art. 73 ust. 4 | "nie może przekroczyć 7 000 000 euro … lub 1,4 % przychodów … Kara ta nie może być jednak niższa niż **15 000 zł**." | ✅ |
| Activity < 12 months or zero turnover: flat-rate basis of assessment **€500 000** (kluczowy) / **€250 000** (ważny) | art. 73 ust. 3a and ust. 4 | "za podstawę wymiaru kary pieniężnej przyjmuje się równowartość kwoty 500 000 euro" / "…250 000 euro" | ✅ |
| **Aggravated sanction up to 100 000 000 zł** (~€23 M) in the event of a serious cyber threat to defence, State security, public order, life and health, or of a risk of serious pecuniary damage | art. 73 ust. 5 | "– organ właściwy do spraw cyberbezpieczeństwa **nakłada** karę w wysokości **do 100 000 000 zł**" (nakłada = imposes, not "may") | ✅ |

**On the manager personally:**

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| **Up to 300 % of their remuneration** | art. 73a ust. 4 | "może być wymierzona w kwocie nie większej niż **300 % otrzymywanego przez ukaranego wynagrodzenia** obliczanego według zasad obowiązujących przy ustalaniu ekwiwalentu pieniężnego za urlop" | ✅ |
| Manager of a public entity: cap **100 %** | art. 73a ust. 5 | "w kwocie nie większej niż **100 %** otrzymywanego przez ukaranego wynagrodzenia" | ✅ |
| **Can be combined with the entity's fine** | art. 73a ust. 3 | "**Niezależnie od** kary pieniężnej, o której mowa w art. 73 ust. 1, karę pieniężną można nałożyć również na kierownika" | ✅ |
| Triggering facts including **failure to register (art. 7c ust. 1 and 3)**, art. 8 (measures), **art. 8e (annual training)** and art. 8f (criminal record) | art. 73a ust. 1 pkt 1-5 | "nie wykonuje co najmniej jednego z obowiązków, o których mowa w art. 7b ust. 4, **art. 7c ust. 1, 3** … art. 8 … art. 8d … **art. 8e** … art. 8f ust. 1 lub 2" | ✅ |
| A **one-off** breach is enough | art. 73a ust. 2 | "którego zaniechanie … miało **charakter jednorazowy**" | ✅ |

### 4. Thresholds: art. 5 and 6

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| Kluczowy (general case, annex 1): **exceeds** the medium-sized enterprise thresholds of Reg. 651/2014/EU annex I art. 2 ust. 1 | art. 5 ust. 1 pkt 1 | "która **przewyższa** wymogi dla średniego przedsiębiorstwa określone w art. 2 ust. 1 załącznika I do rozporządzenia … 651/2014" | ✅ |
| ⚠️ **An MSSP is kluczowy from the SMALL enterprise level onwards** | art. 5 ust. 1 pkt 3 | "**dostawca usług zarządzanych w zakresie cyberbezpieczeństwa**, który co najmniej spełnia wymogi dla **małego albo średniego** przedsiębiorcy … lub je przewyższa" | ✅ |
| Electronic communications operator: kluczowy from the **medium** enterprise level onwards | art. 5 ust. 1 pkt 2 | "który co najmniej spełnia wymogi dla średniego przedsiębiorcy … lub je przewyższa" | ✅ |
| Kluczowy **regardless of size**: DNS, qualified trust service provider, podmiot krytyczny, public entity of annex 1 | art. 5 ust. 1 pkt 4 | "**niezależnie od wielkości podmiotu**: a) dostawca usług DNS, b) kwalifikowany dostawca usług zaufania …, c) podmiot krytyczny, d) podmiot publiczny …" | ✅ |
| Ważny: **meets** the medium-sized enterprise thresholds and is not kluczowy | art. 5 ust. 2 pkt 1-2 (corrected 2026-11-05: this row said art. 6) | "która **spełnia** wymogi dla średniego przedsiębiorcy … **oraz która nie jest podmiotem kluczowym**" | ✅ |

### Why this matters commercially (MSP)

Two facts combine to make Poland a distinctive MSP market:

1. **An MSSP is an ESSENTIAL entity from the small enterprise level onwards** (art. 5 ust. 1
   pkt 3), where the general regime requires exceeding the medium-sized
   enterprise thresholds. A Polish MSP of 30 people is kluczowy, hence subject to the
   **preventive** supervision of art. 53 ust. 3 pkt 1, unannounced inspections
   included.
2. Its clients must **declare it by name in the register** when they entrust it
   with the tasks of art. 8 and 11 (art. 7 ust. 2 pkt 16, already verified),
   with an update within 14 days.

The MSP is therefore both regulated and made visible to the regulator by its own
clients. This is a selling point, not an obstacle: it makes the MSP's compliance
enforceable and verifiable.

### Reconciliation of internal data (2026-07-25)

`transposition-references.ts` (`TRANSPOSITION_REFERENCES_PL`) stated in all
six locales:

> « Self-identification opened on **7 May 2026** with a statutory window running
> to **3 October 2026** — late registration is itself sanctionable. »

- **The sanctionable nature is correct** (art. 73 ust. 1a pkt 1), and it is
  even heavier than stated since the manager is personally exposed
  (art. 73a ust. 1 pkt 1).
- **The window is wrong in its nature.** Art. 7c ust. 1 sets a deadline of
  **6 rolling months from the day the entity meets the criteria**, not
  a common calendar window. 3 October 2026 is only the particular case
  of an entity that already met the criteria at entry into force
  (2026-04-03 + 6 months). An entity that crosses the thresholds in September 2026 has
  until March 2027.
- **7 May 2026 appears nowhere in the statute.** Possibly the opening date
  of the system teleinformatyczny, but that is not the rule of law
  and it was not sourced anywhere.

> ⚠️ **Corrected on 2026-11-05, see the last section of this file.** Both dates
> are the Minister's schedule under art. 33 ust. 3 and art. 34 ust. 3 of the
> amending act (komunikat of 8 April 2026, Dz. Urz. Min. Cyf. poz. 7): 7 May
> to 3 October 2026, for the entities already in scope on 3 April 2026. The
> date above was right and its basis was wrong: that cohort was never governed
> by the six months of art. 7c ust. 1, and six months after 3 April only
> happens to fall on the same day.
- **The 14-day deadline for changes was missing**, although it is
  the one that is triggered most often in practice.

Consequence had we not corrected it: we tell a prospect who comes on board in
November 2026 that they have already missed a sanctioned legal deadline. Corrected.

## Management training: art. 8e UKSC (verified 2026-10-29)

<!-- meta: theme=governance; type=reference; date=2026-10-29; surfaces=data,doc-gen; guard=none -->

- **Source read:** Dz.U. 2026 poz. 252, the signed PDF of the Dziennik Ustaw
  (`pdfsig`: "Signature Validation: Signature is Valid."),
  https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf, 102 pages, sha256
  `f1a027394e5fa8416c63367ec274ab4f3018605987df0ae64d3e0c97439fd374`, read with
  `pdftotext -layout`. Art. 1 pkt 17 inserts arts. 8a to 8j into the ustawa o
  krajowym systemie cyberbezpieczeństwa; art. 1 pkt 4 lit. f inserts art. 2
  pkt 8a. Two words split by the line-end hyphen of the layout (« waż-nego »,
  « finanso-wych ») are rejoined in the quotes.
- **Later amendments checked:** the Sejm ELI record of the act,
  https://api.sejm.gov.pl/eli/acts/DU/2018/1560, lists three amending acts after
  Dz.U. 2026 poz. 252, each read: poz. 815 (its art. 20 amends arts. 15, 26 and
  46), poz. 1003 (its art. 124 amends art. 26 ust. 3) and poz. 1206 (its art. 35
  amends załącznik nr 1). None touches arts. 2 pkt 8a, 8c to 8f, 8i or 73a. The
  last consolidated text, Dz.U. 2026 poz. 20, predates the NIS 2 amendment.
- **Retrieved and read:** 2026-10-29.

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| **The training provision is art. 8e, not art. 8c:** the manager, and the person entrusted with the manager's cybersecurity duties, are trained **once per calendar year**; the scope is set by reference; participation is documented | art. 8e ust. 1 to 3 | "Art. 8e. 1. Kierownik podmiotu kluczowego lub podmiotu ważnego oraz osoba, której powierzono obowiązki kierownika w zakresie cyberbezpieczeństwa, raz w roku kalendarzowym przechodzi szkolenie. 2. Zakres szkolenia obejmuje wykonywanie obowiązków, o których mowa w art. 7b ust. 4, art. 7c, art. 7f ust. 3, art. 8, art. 8d, art. 8f ust. 1 i 2, art. 9–12b, art. 14 i art. 15. 3. Udział w szkoleniu jest udokumentowany." | verified (Dz.U. 2026 poz. 252, 2026-10-29) |
| Who the "kierownik" is (the « 4) » after « zm. » is the gazette's footnote marker; the amending act's quotation marks are left out) | art. 2 pkt 8a | "8a) kierownik podmiotu kluczowego lub podmiotu ważnego – kierownik jednostki w rozumieniu art. 3 ust. 1 pkt 6 ustawy z dnia 29 września 1994 r. o rachunkowości (Dz. U. z 2023 r. poz. 120, z późn. zm.4)) kierujący podmiotem kluczowym lub podmiotem ważnym, a w przypadku podmiotu kluczowego lub podmiotu ważnego będącego jednostką sektora finansów publicznych – kierownik jednostki sektora finansów publicznych, o którym mowa w art. 53 ust. 1 ustawy z dnia 27 sierpnia 2009 r. o finansach publicznych (Dz. U. z 2025 r. poz. 1483, 1844 i 1846);" | verified (Dz.U. 2026 poz. 252, 2026-10-29) |
| Art. 8c is the manager's responsibility, art. 8e among the duties it covers; art. 8d pkt 4 is staff awareness, not training | art. 8c ust. 1; art. 8d pkt 4 | "Art. 8c. 1. Kierownik podmiotu kluczowego lub podmiotu ważnego ponosi odpowiedzialność za wykonywanie obowiązków w zakresie cyberbezpieczeństwa przez podmiot kluczowy lub podmiot ważny, o których mowa w art. 7b ust. 4, art. 7c, art. 7f ust. 3, art. 8, art. 8d, art. 8e, art. 8f ust. 1 i 2, art. 9–12b, art. 14 i art. 15." / "4) zapewnia, że personel podmiotu jest świadomy obowiązków z zakresu cyberbezpieczeństwa i zna wewnętrzne regulacje podmiotu w tym zakresie;" | verified (Dz.U. 2026 poz. 252, 2026-10-29) |
| Inverted articulation: the banking and market-infrastructure entities keep arts. 8c to 8f, art. 8e included | art. 8i ust. 2 | "2. Do podmiotów kluczowych lub podmiotów ważnych z sektora bankowości i infrastruktury rynków finansowych stosuje się odpowiednio przepisy art. 8c–8f, art. 12 ust. 7 oraz art. 31 ust. 1." | verified (Dz.U. 2026 poz. 252, 2026-10-29) |
| Failing art. 8e is a ground for a fine on the manager personally (the 300 % cap of art. 73a ust. 4 is in the sanctions section above) | art. 73a ust. 1 pkt 4 | "4) nie wykonuje obowiązku, o którym mowa w art. 8e," | verified (Dz.U. 2026 poz. 252, 2026-10-29) |

**For a training record.** A Polish attestation cites art. 8e ust. 1 to 3: it
names the manager and the person entrusted with the manager's duties, a
calendar-year cadence, a scope fixed by the articles listed in ust. 2, and
documented participation. The article names no provider, no certificate and no
duration. `pl.yaml` maps Art. 20 of the directive to arts. 8c, 8d and 8e; of the
three, only art. 8e speaks of training.

## Incident notification: art. 11 ust. 1 pkt 4 to 4c (verified 2026-07-26)

<!-- meta: theme=incident; type=law-misread,test-pinned; date=2026-07-26; surfaces=data,i18n,doc-gen,test; guard=apps/ai-service/test/native-prompt-csirt-routing.test.ts -->

- **Source read:** same official text Dz.U. 2026 poz. 252 (Sejm ELI, pdftotext).
- **Retrieved + read:** 2026-07-26.

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| Early warning: **24 h from DETECTION**, to the **SECTORAL CSIRT** | art. 11 ust. 1 pkt 4 | "zgłasza wczesne ostrzeżenie o incydencie poważnym niezwłocznie, nie później niż w ciągu **24 godzin od momentu jego wykrycia**, do **właściwego CSIRT sektorowego**" | ✅ |
| Notification: **72 h from detection**, to the sectoral CSIRT | art. 11 ust. 1 pkt 4a | "zgłasza incydent poważny … nie później niż w ciągu **72 godzin od momentu jego wykrycia**, do właściwego CSIRT sektorowego" | ✅ |
| **Intermediate report on request** of the sectoral CSIRT | art. 11 ust. 1 pkt 4b | "przekazuje, **na wniosek** właściwego CSIRT sektorowego, sprawozdanie okresowe z obsługi incydentu poważnego" | ✅ |
| Final report: **1 month from the 72 h notification** | art. 11 ust. 1 pkt 4c | "przekazuje … sprawozdanie końcowe … nie później niż w ciągu **miesiąca od dnia zgłoszenia, o którym mowa w pkt 4a**" | ✅ |
| ⚠️ **Second clock**: if an intermediate report was submitted, the final one runs from **the end of handling** | (continuation of art. 11) | "podmiot kluczowy lub podmiot ważny przekazuje właściwemu CSIRT sektorowemu sprawozdanie końcowe nie później niż w ciągu **miesiąca od zakończenia obsługi** incydentu poważnego" | ✅ |
| ⚠️ **Trust service providers: 24 h instead of 72 h** | (art. 11) | "**Dostawca usług zaufania** zgłasza incydent poważny … nie później niż w ciągu **24 godzin** od momentu jego wykrycia do właściwego CSIRT sektorowego." | ✅ |
| Feedback from the sectoral CSIRT within **24 h** | (art. 11) | "CSIRT sektorowy nie później niż w ciągu **24 godzin** przekazuje podmiotowi zgłaszającemu wytyczne…" | ✅ |

### Three corrections made to `incident-reporting.ts` (PL)

The header of the PL block read: « 24h/72h timeline **verified 2026-06-29 against
CSIRT NASK guidance** ». That is the provenance of the error: a *guidance* is a
secondary source, and the statute says otherwise on two points.

1. **Wrong recipient.** All six locales said « to **CSIRT NASK** ». The statute
   addresses all four acts to the **właściwy CSIRT SEKTOROWY**. The national CSIRTs
   (NASK, GOV, MON) appear in pkt 5 for cooperation during
   handling and in the circulation of information: a different role.
2. **Wrong starting point in 5 locales out of 6.** The `pl` locale correctly
   said « od wykrycia ». The en/fr/it/de/pt locales said
   *awareness / prise de connaissance / consapevolezza / Kenntnisnahme /
   conhecimento*. A Polish reader saw the right rule, **an MSP reading in
   English saw the wrong one**: the opposite of what is needed on a market where
   sales go through MSPs.
3. **Two missing rules**: the 24 h derogation for trust service
   providers, and the second clock of the final report.

Also corrected in `transposition-references.ts`, whose bullet « Three
national-level CSIRTs … notifications flow to the competent CSIRT among NASK,
GOV, MON » **had been written by me on 2026-07-25** and repeated the same recipient
error.

### Modelling gap, left visible

`sprawozdanie okresowe` (pkt 4b) has no `stage` in
`IncidentReportDeadline`, exactly like the Croatian `privremeno izvješće`. The
type models only three acts, and `nis2BaselineDeadlines` hard-codes
24 / 72 / 720 h for **all eight countries**. Any national deviation on the
figures or on the anchor is therefore invisible to the engine and lives only in the
labels. That is the real design flaw behind these errors.

## Native UKSC template: delivered 2026-07-26

<!-- meta: theme=documents; type=delivery; date=2026-07-26; surfaces=doc-gen; guard=none -->

A native Polish incident report now exists
(`apps/doc-gen/src/templates/incident-uksc.ts`), on the same footing as the ANSSI and
ACN ones. Every citation it carries is taken from this file, not from a guidance
nor from a neighbouring template.

### What the directive-based outline could not express

| Point | NIS 2 Directive | UKSC |
|---|---|---|
| Recipient | national CSIRT | **CSIRT sektorowy** (art. 11 ust. 1 pkt 4, 4a, 4b, 4c) |
| Starting point | awareness | **detection** (« od momentu jego wykrycia ») |
| Number of acts | 3 | **4**: the `sprawozdanie okresowe` of pkt 4b has no equivalent |
| Final report | 1 month from the notification | 1 month from the 72 h notification, **or** 1 month from the end of handling if an intermediate report was submitted |
| Trust service providers | — | **24 h** instead of 72 h |

This is precisely why a generic template would have been the wrong choice:
it would have produced a three-act document, addressed to the wrong body, with
the wrong anchor.

### What is left empty rather than guessed

`sectoralCsirtName` is empty by default. We do not yet hold the sector →
sectoral CSIRT table, and filling it by guesswork would reproduce the addressing
error this work corrects. The template then names the obligation
(« właściwy CSIRT sektorowy ») without designating a wrong body.

Also left empty, for lack of corresponding fields in our incident
model: NIP, KRS, REGON, wykaz number, attack vector, root
cause. These are fields to be filled in, not facts to be invented.

### Correction of the client hint along the way

The text shown to a Polish client said "use **the generic report above**",
while no button was rendered for Poland. It also said to file with the
**CSIRT NASK**. Both were wrong; this is what the maintainer observed in a demo. The
hint now points to the sectoral CSIRT and to the detection anchor, and the
button exists.

## The prompt layer had the same error (found 2026-07-27)

<!-- meta: theme=incident,scoping; type=reference; date=2026-07-27; surfaces=data; guard=packages/regulatory-data/test/pl-sector-competent-authority.test.ts -->

Correcting the data, the i18n hint and the doc-gen template was not enough: the
same assertion also lived in the **LLM prompts**, which had not been
audited. Three locations, all in `apps/ai-service/src/lib/`:

| Location | What it said | Scope |
|---|---|---|
| `native-doc-prompts.ts`, KSC system preamble | « odsyłasz do właściwego CSIRT poziomu krajowego (CSIRT NASK / CSIRT GOV / CSIRT MON) » | **every** generated Polish document |
| `native-doc-prompts.ts`, `incident_response_plan` template | same wording | the incident response plan itself |
| `tabletop-prompt.ts`, `csirt: "CSIRT NASK"` | crisis exercise: "notify via CSIRT NASK" | every Polish tabletop |

A false fact in a preamble is worse than a false fact on a page: it is
reasserted at every generation, in the client's language, under the product's
signature. It is the same multiplier as the fabricated French statute found
earlier in this audit.

All three are corrected and backed by the verified data through
`apps/ai-service/test/native-prompt-csirt-routing.test.ts`, which reads
`getIncidentReportingConfig("PL")` rather than a hard-coded string: if the anchor or
the TSP deadline changes in the data, the test fails on the prompt. The guard was
verified by mutation (re-injecting the original sentence: 4 tests out of 6
fail).

Method note: the national CSIRTs are not forbidden words. They have a
real role in art. 11 ust. 1 **pkt 5** (cooperation in handling) and step in
for the sectoral CSIRT where none is established for the sector. What
is wrong is to designate them as the **recipient of the notification**. The test
is therefore contextual, not a vocabulary ban.

## `primaryCsirt` still carried NASK, and fed the public MCP

<!-- meta: theme=incident; type=law-misread; date=2026-07-27; surfaces=prompt; guard=apps/ai-service/test/native-prompt-csirt-routing.test.ts -->

The 2026-07-26 correction had dealt with `reportDeadlines`, the i18n hint and the
doc-gen template. The `primaryCsirt` field of the same file, however, still said:

```
name: "CSIRT NASK (Naukowa i Akademicka Sieć Komputerowa …)"
abbreviation: "CSIRT NASK"
authorityName.pl: "…właściwy dla sektora ogólnego i prywatnego na podstawie UKSC"
```

That is exactly the assertion refuted by art. 11 ust. 1 pkt 4/4a/4b/4c, in
six locales including Polish.

This field is not decorative. It feeds `apps/mcp/src/tools/incident-deadlines.ts`,
**the unauthenticated MCP tool**: an AI asked about the Polish NIS2 deadlines
received « Authority: CSIRT NASK ». It is the most public surface of the product.

The field now names the generic legal designation: « Właściwy CSIRT
sektorowy », with the mention that NASK/GOV/MON step in where no sectoral
CSIRT is constituted. We **still do not name** a specific sectoral
body: it depends on the sector, no sector → CSIRT table is verified, and
inferring it is precisely what produced the original error.

A test pinned it: `test("PL — primaryCsirt is CSIRT NASK …")`. Fifth
occurrence in this audit of a test that protected the fault.

Still open: `portalUrl` points to `https://incydent.cert.pl/`. The Polish
wording no longer claims that this portal serves "the general and private sector",
only that NASK operates it and that its relevance depends on the assigned sectoral
CSIRT. Settling it requires the sector → CSIRT table.

## Sector → competent authority (art. 41 and 41a UKSC), verified 2026-07-27

<!-- meta: theme=incident; type=law-misread,test-pinned; date=2026-07-27; surfaces=data,mcp,i18n,test; guard=apps/ai-service/test/native-prompt-csirt-routing.test.ts -->

Art. 11 addresses everything to the « właściwy CSIRT sektorowy », but **no sectoral
CSIRT is named in the statute**. The definition says so:

> « CSIRT sektorowy […] na poziomie sektora lub podsektora, **ustanowiony przez
> organ właściwy do spraw cyberbezpieczeństwa** dla danego sektora lub podsektora »

It is therefore the sector's competent authority that establishes it, and the Ministry
of Digital Affairs was still speaking in the future tense (« powstaną nowe zespoły CSIRT »). As
long as no sectoral CSIRT is constituted, the national CSIRTs step in.
**This confirms the 2026-07-26 correction**: naming NASK as the recipient
was wrong, and naming a specific sectoral body would have been just as wrong.

What the statute does give, on the other hand, is the table of competent authorities.
Read in the two Dziennik Ustaw PDFs: base act **Dz.U. 2018 poz. 1560**
(art. 41 pkt 1-11) and amending act **Dz.U. 2026 poz. 252** (in force on
2026-04-03) which inserts pkt 1a and 9a-9l and adds art. 41a. The 2026 text
only inserts and amends: the base points remain.

| Sector | Competent authority | Basis |
|---|---|---|
| Energy | Minister właściwy do spraw energii | art. 41 pkt 1 (1a for nuclear) |
| Transport | Minister właściwy do spraw transportu | art. 41 pkt 2; ⚠️ waterborne transport excluded, pkt 3: ministers for maritime economy **and** inland navigation |
| Banking + market infrastructures | **Komisja Nadzoru Finansowego** | art. 41 pkt 4 |
| Health | Minister właściwy do spraw zdrowia | art. 41 pkt 5; ⚠️ art. 26 ust. 5 entities → Minister of Defence (pkt 6) |
| Drinking water | Minister właściwy do spraw gospodarki wodnej | art. 41 pkt 7 |
| Waste water | Minister właściwy do spraw gospodarki wodnej | art. 41 pkt 9a |
| Digital infrastructure | Minister właściwy do spraw informatyzacji | art. 41 pkt 8; ⚠️ electronic communications → **Prezes UKE**; art. 26 ust. 5 → Defence (pkt 9) |
| ICT service management | Minister właściwy do spraw informatyzacji | art. 41 pkt 9b |
| Space | Minister właściwy do spraw gospodarki | art. 41 pkt 9c |
| Chemicals | Minister właściwy do spraw gospodarki | art. 41 pkt 9d |
| Food | Minister właściwy do spraw rolnictwa | art. 41 pkt 9e |
| Manufacturing | Minister właściwy do spraw gospodarki | art. 41 pkt 9f; ⚠️ medical devices and IVD → **Health** (pkt 9g) |
| Postal services | **Prezes Urzędu Komunikacji Elektronicznej** | art. 41 pkt 9h |
| Waste management | Minister właściwy do spraw klimatu | art. 41 pkt 9i |
| Digital service providers | Minister właściwy do spraw informatyzacji | art. 41 pkt 9j |
| Research | Minister właściwy do spraw szkolnictwa wyższego i nauki | art. 41 pkt 9k; ⚠️ art. 26 ust. 5 pkt 1 → Defence (pkt 9l) |
| Public administration | Minister właściwy do spraw informatyzacji | art. 41a ust. 1; ⚠️ two exceptions: Defence (ust. 2), Public finances (ust. 3) |

Carried in the data layer: `sectorCompetentAuthorities` on `INCIDENT_REPORTING_PL`,
deliberately **distinct** from `sectorSpecificCsirts`, which stays empty since
no sectoral CSIRT is named. Guarded by
`packages/regulatory-data/test/pl-sector-competent-authority.test.ts`: exact
coverage of the 18 sectors, each exactly once, basis cited, no entry
carrying the word CSIRT, and the six sectors the statute splits must carry a
note spelling out the exception.

**What this makes it possible to tell a Polish client**, and what no competing tool
says: your competent authority is X; it is the one that designates your sectoral
CSIRT; as long as it has not done so, the notification goes to the national CSIRT.

## `apps/web` had never been reconciled (found 2026-08-14)

<!-- meta: theme=incident; type=law-misread,test-pinned; date=2026-08-14; surfaces=marketing,ui,i18n; guard=apps/web/test/pl-csirt-recipient.test.ts -->

The fact has been verified since 2026-07-26 (art. 11 ust. 1 pkt 4 above), and
the prompts, `incident-reporting.ts`, `transposition-references.ts` and the public
MCP were corrected. **The website, however, was not.** Noticed while looking for
why two Reglyze pages contradicted each other: the transpositions article published
on 2026-08-11 said « CSIRT sektorowy », `/pl/podmioty-kluczowe-wazne` said
« CSIRT NASK dla sektora ogólnego i prywatnego ».

The wrong recipient was still asserted on:

| Surface | Scope |
|---|---|
| `components/pl/pl-shell.tsx` | footer of **every** /pl page |
| `components/landing/pl-landing.tsx` | `/pl`, the most visited market page of the site |
| `app/pl/zgloszenie-incydentu-csirt` | the page dedicated to notification (body + JSON-LD FAQ) |
| `app/pl/podmioty-kluczowe-wazne` | obligation no. 3 |
| `app/pl/srodki-bezpieczenstwa-ksc` | body + JSON-LD FAQ |
| `app/pl/msp-cyberbezpieczenstwo-polska` | body + JSON-LD FAQ |
| `lib/countries/poland.ts` | PL country sheet (3 places) |
| `i18n.ts`, `app.dashboard.ksc.incident.{subtitle,body}` | **in-app dashboard, 10 locales** |

The last line is the most serious: it is the screen a paying Polish client
reads **while** declaring an incident, and it named « CSIRT poziomu
krajowego (CSIRT NASK / GOV / MON) ».

### What was corrected, and what was not

Corrected: the **assertion** of the recipient, everywhere, with the citation
`art. 11 ust. 1 pkt 4`. The two in-app keys are rewritten in all ten locales
and name the sectoral CSIRT + the start of the deadlines **from detection**.

Deliberately not corrected: the **title, slug and keywords** of
`/pl/zgloszenie-incydentu-csirt`, which target « zgłoszenie incydentu CSIRT
NASK ». It is a real Polish search term; rewriting it is an SEO trade-off
that belongs to the maintainer, not a legal correction. The body of the page is
now accurate, so a reader who arrives through this keyword reads the right rule.

The guard `apps/web/test/pl-csirt-recipient.test.ts` forbids the **assertion**,
not the term: naming CSIRT NASK remains correct for the incydent.cert.pl portal
it operates, for its cooperation role (pkt 5) and for the fallback case. It
itself found two surfaces the manual review had missed
(`srodki-bezpieczenstwa-ksc`, the MSP JSON-LD FAQ).


## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Ramy prawne i normatywne » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: Ustawa KSC znowelizowana (Dz.U. 2026 poz. 252, EIF 2026-04-03): wykaz art. 7c-7d + sankcja art. 73 ust. 1a pkt 1, nadzór art. 53 by classification. Measures/notification: articles not verified → absent. Rule: any fact absent from
this index is ABSENT from the block; enriching = verifying here first.

## PL doc-audit campaign, round 1 (2026-09-08)

<!-- meta: theme=documents; type=reference; date=2026-09-08; surfaces=prompt,doc-gen; guard=none -->

Audit --deep (anchored on this index) of the 3 live PL documents in prod.
Tooling lesson: WITHOUT the index, the LLM auditor produced 5 false positives
« prior directive » (wykrycia→powzięcia, doubts about 7c ust. 5 / 7d ust. 1 /
53 ust. 2 although verified above); anchored, it CONFIRMS the real errors.

### Mapa liter art. 8 ust. 1 pkt 2 (verified, full text Dz.U. 2026 poz. 252, p. 14-15)

a) polityki szacowania ryzyka oraz bezpieczeństwa systemu informacyjnego, w tym
polityki tematyczne; b) bezpieczeństwo w procesie nabywania, rozwoju, utrzymania
i eksploatacji, w tym testowanie; c) bezpieczeństwo fizyczne i środowiskowe
uwzględniające kontrole dostępu; d) bezpieczeństwo zasobów ludzkich;
e) bezpieczeństwo i ciągłość łańcucha dostaw; f) plany ciągłości działania /
awaryjne / odtworzenia; g) monitorowanie w trybie ciągłym; h) polityki i
procedury oceny skuteczności; i) edukacja z zakresu cyberbezpieczeństwa dla
personelu; j) podstawowe zasady cyberhigieny; k) kryptografia, w tym
szyfrowanie; l) bezpieczne środki komunikacji elektronicznej + MFA w stosownych
przypadkach; m) zarządzanie aktywami; n) polityki kontroli dostępu.
Pkt of ust. 1: 1) szacowanie ryzyka; 2) środki lit. a-n; 3) zbieranie
informacji o cyberzagrożeniach i podatnościach; 4) zarządzanie incydentami;
5) środki zapobiegające (lit. a-d).

**Error found in prod**: the PSSI (Hydropol, TransLogis) mapped « łańcuch
dostaw » onto lit. i and « ocena skuteczności » onto lit. e. Generation rule
added (mapa liter in KSC_OUTPUT_CITATION_RULE): same class as the Italian mappa
lettere art. 24 c.2.

### Other round 1 findings
- Truncations + fictitious approval: documents of 27/07, from the era before the
  durable-generation fix → TO BE REGENERATED (not a defect of the current generator).
- NSC cited as normative basis: rule added (NSC = wytyczne).
- Sprawozdanie końcowe clocks + single definition of wykrycia: rules
  added (verbatim art. 11 above).

## Entities already in scope on 3 April 2026: art. 33 to 35 of the amending act and the Minister's schedule (verified 2026-11-05)

<!-- meta: theme=registration,sanctions; type=wrong-citation,deadline-model,surface-inconsistency,test-pinned; date=2026-11-05; surfaces=data,marketing,i18n,test,docs; guard=apps/web/test/pl-wykaz-deadline-rolling.test.ts -->

- **Sources read, all official:**
  - **Dz.U. 2026 poz. 252**, the PDF served by the Sejm's ELI API
    (`https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf`, pdftotext):
    transitional articles 33 to 35, and art. 16 and art. 46 ust. 4 of the UKSC
    as amended.
  - **Dziennik Urzędowy Ministra Cyfryzacji, 8 April 2026, poz. 7**: « Komunikat
    Ministra Cyfryzacji z dnia 08 kwietnia 2026 r. w sprawie harmonogramu
    złożenia wniosków o wpis do wykazu podmiotów kluczowych i podmiotów ważnych
    oraz rozpoczęcia korzystania z systemu teleinformatycznego przez podmioty
    kluczowe lub podmioty ważne » (`https://www.gov.pl/web/cyfryzacja/du-mc-poz-7`,
    PDF attachment, two pages).
  - **The journal's register itself** (`https://www.gov.pl/web/cyfryzacja/du-mc`,
    570 acts, read through its data endpoint): the 2026 volume holds 27
    positions, the last published on 6 October 2026, and **poz. 7 is its only
    komunikat**. No later position amends the schedule, which art. 34 ust. 5
    would have required.
  - The Ministry's page of 7 May 2026 opening self-registration
    (gov.pl/web/cyfryzacja, « uruchamiamy samorejestrację w Wykazie podmiotów
    kluczowych i podmiotów ważnych »). A ministry page, not a statute.
  - **The Sejm's own records** of the base act (`/eli/acts/DU/2018/1560`) and
    of the amending act (`/eli/acts/DU/2026/252`), for what has changed since:
    see « The UKSC was amended three times since » below.
- **Retrieved + read:** 2026-11-05.

| Fact | Provision | Verbatim | Status |
|---|---|---|---|
| Entities already in scope at entry into force register **by the Minister's schedule**, not by the six months of art. 7c ust. 1 | art. 33 ust. 3 of the amending act | "Podmioty, które z dniem wejścia w życie niniejszej ustawy spełniają przesłanki uznania ich za podmiot kluczowy albo za podmiot ważny, są obowiązane złożyć wniosek o wpis do wykazu podmiotów kluczowych i podmiotów ważnych zgodnie z harmonogramem określonym w art. 34 ust. 3 pkt 1." | ✅ |
| The Minister publishes that schedule in his official journal | art. 34 ust. 3 | "Minister właściwy do spraw informatyzacji ogłasza w swoim dzienniku urzędowym komunikat określający harmonogram: 1) złożenia wniosków o wpis do wykazu podmiotów kluczowych i podmiotów ważnych przez podmioty kluczowe lub podmioty ważne, które w dniu wejścia w życie niniejszej ustawy spełniają przesłanki uznania ich za podmiot kluczowy albo podmiot ważny;" | ✅ |
| The schedule: applications **from 7 May to 3 October 2026**, key and important entities alike, except those entered ex officio | komunikat, pkt 1 lit. a (lit. b says the same of the podmiot ważny) | "w terminie od dnia 7 maja 2026 r. do dnia 3 października 2026 r. – składanie wniosków o wpis do tego wykazu przez podmioty, które spełniają przesłanki uznania ich za podmiot kluczowy, z wyłączeniem podmiotów kluczowych wpisanych z urzędu," | ✅ |
| Use of the art. 46 system (S46) starts by **3 April 2027** | komunikat, pkt 2 lit. b (lit. a: from 8 April 2026 for the parties to earlier agreements) | "w terminie od dnia 12 czerwca 2026 r. do dnia 3 kwietnia 2027 r. – przez podmioty kluczowe i podmioty ważne niewymienione w lit. a." | ✅ |
| The schedule may be amended. It was not | art. 34 ust. 5 | "Komunikat, o którym mowa w ust. 3, może być zmieniany, jeżeli z powodów technicznych lub organizacyjnych niemożliwe jest dokonanie wpisów i rozpoczęcie korzystania z systemu teleinformatycznego" | ✅ (journal read 2026-11-05) |
| Former operators of essential services are entered **ex officio** | art. 34 ust. 2 | "Minister właściwy do spraw informatyzacji wpisuje, z urzędu, do wykazu podmiotów kluczowych i podmiotów ważnych operatorów usług kluczowych wpisanych przed dniem wejścia w życie niniejszej ustawy do wykazu operatorów usług kluczowych." | ✅ |
| The register is created within a month of entry into force | art. 34 ust. 1 | "Minister właściwy do spraw informatyzacji utworzy wykaz podmiotów kluczowych i podmiotów ważnych, w terminie miesiąca od dnia wejścia w życie niniejszej ustawy." | ✅ |
| Chapter 3 duties, the art. 8 measures among them: **12 months from entry into force** for entities already in scope, hence 3 April 2027 | art. 33 ust. 1 | "Podmioty, które z dniem wejścia w życie niniejszej ustawy spełniają przesłanki uznania ich za podmiot kluczowy albo za podmiot ważny, realizują obowiązki określone w rozdziale 3 ustawy zmienianej w art. 1, w brzmieniu nadanym niniejszą ustawą, w terminie 12 miesięcy od dnia wejścia w życie niniejszej ustawy." | ✅ |
| Chapter 3 is where art. 8 sits: the amending act retitles it (pkt 15), then rewrites art. 8 (pkt 16) and, as the chapter's last article, art. 16 (pkt 24) | art. 1 pkt 15 of the amending act | "tytuł rozdziału 3 otrzymuje brzmienie:" followed by „Obowiązki podmiotów kluczowych lub podmiotów ważnych” | ✅ |
| First audit of a key entity already in scope: 24 months from entry into force | art. 33 ust. 2 | "przeprowadzają pierwszy audyt, o którym mowa w art. 15 ust. 1 ustawy zmienianej w art. 1, w brzmieniu nadanym niniejszą ustawą, w terminie 24 miesięcy od dnia wejścia w życie niniejszej ustawy." | ✅ |
| For an entity that comes into scope later, the same 12 and 24 months run **from the day it meets the criteria** | art. 16 UKSC as amended | "kluczowy lub ważny realizuje obowiązki, o których mowa w niniejszym rozdziale, w terminie 12 miesięcy," ; "kluczowy zapewnia przeprowadzenie audytu po raz pierwszy w terminie 24 miesięcy" ; "– od dnia spełnienia przesłanek uznania za podmiot kluczowy lub podmiot ważny." | ✅ |
| Fines can first be imposed two years after entry into force | art. 35 | "Kary pieniężne, o których mowa w art. 73 ust. 1–4 oraz art. 73a–73c i art. 76b ustawy zmienianej w art. 1 w brzmieniu nadanym niniejszą ustawą mogą być po raz pierwszy nałożone po upływie 2 lat od dnia wejścia w życie ustawy." | ✅ |
| Where to file: the Wykaz KSC application, part of System S46, at wykaz-ksc.gov.pl | Ministry page of 7 May 2026 | "Wykaz KSC to aplikacja, będąca częścią Systemu S46, w której prowadzony jest Wykaz podmiotów kluczowych i podmiotów ważnych." | ✅ (ministry page) |
| The Ministry states the same window to the public | same page | "Termin złożenia wniosku: 7 maja – 3 października 2026 r." | ✅ (ministry page) |

### The UKSC was amended three times since, and none of it touches these facts

The Sejm's record of the base act lists three amending acts later than
Dz.U. 2026 poz. 252. Each article was read in the Dziennik Ustaw PDF. The
record of the amending act itself lists no act amending it (its references are
« Akty zmienione » and « Akty uznane za uchylone » only), so art. 33 to 35
stand as published.

| Act | What it changes in the UKSC | Verbatim | In force (Sejm record) |
|---|---|---|---|
| Dz.U. 2026 poz. 815, act of 29 May 2026 amending the crisis-management act, art. 20 | art. 15 ust. 7 pkt 2 and art. 26 ust. 3, 5 and 7 (references to critical infrastructure), and a new art. 46 ust. 1b on the S46 system | "w art. 46 po ust. 1a dodaje się ust. 1b w brzmieniu:" | 2026-07-04 |
| Dz.U. 2026 poz. 1003, act of 3 July 2026 on artificial-intelligence systems, art. 124 | a new task in art. 26 ust. 3 | "w art. 26 w ust. 3 w pkt 23 kropkę zastępuje się średnikiem i dodaje się pkt 24 w brzmieniu:" | 2026-10-28 |
| Dz.U. 2026 poz. 1206, act of 31 July 2026 amending the banking act, art. 35 | one entity type of the banking sector in annex 1 | "wyrazy „Oddział banku zagranicznego, o którym mowa w art. 4 ust. 1 pkt 20 ustawy z dnia 29 sierpnia 1997 r. – Prawo bankowe” zastępuje się wyrazami „Oddział z państwa trzeciego w rozumieniu art. 4 ust. 1 pkt 20a ustawy z dnia 29 sierpnia 1997 r. – Prawo bankowe”" | 2027-01-11 |

Art. 7c, 7d, 11, 16, 46 ust. 4, 73 and 73a are untouched. The product names no
branch of a foreign bank anywhere (grep, 2026-11-05), so the annex change of
January 2027 reaches no surface today.

### What this corrects

1. **The basis of the date, in this file.** The reconciliation of 2026-07-25
   above read 3 October 2026 as « 2026-04-03 + 6 months », an application of
   art. 7c ust. 1 to the entities already in scope, and wrote that 7 May 2026
   « appears nowhere in the statute ». Art. 33 ust. 3 takes that cohort out of
   art. 7c ust. 1 and sends it to a schedule, and both dates are that schedule.
   The transitional articles sit at the very end of an 86-page act and had not
   been read: the same lesson as Austria's § 24, read the whole text.
2. **The English country page had received none of the Polish corrections.**
   `apps/web/src/lib/countries-seo.ts` (`/en/eu/poland` and its line in
   llms.txt) still said, in six places, that entities « must apply for entry
   in the register (the S46 System) by 3 October 2026 », a month after that
   day, and still named CSIRT NASK as the recipient of incident notifications,
   which the section of 2026-07-26 above had corrected on the Polish surfaces
   and the one of 2026-08-14 on the website. The guard
   `pl-wykaz-deadline-rolling.test.ts` scanned « Polish surfaces only ».
   `transposition-dates-not-stale.test.ts` went red on 1 November because it
   reads prose against the calendar, and that red is what led here.
3. **The Polish fiche** (`apps/web/src/lib/countries/poland.ts`) said « termin
   upływa 3 października 2026 r. » in the present tense, carried the 12 months
   and the two years as single-source items marked needs-check, and pointed its
   registration link at the Ministry's home page. It now speaks of the window in
   the past tense, cites art. 33 ust. 1 and art. 35, and links
   `https://wykaz-ksc.gov.pl/`.
4. **The product's reference text** (`TRANSPOSITION_REFERENCES_PL`, six
   locales) called the registration « not a fixed calendar window ». True of
   art. 7c ust. 1, and misleading for an organisation that was in scope on
   3 April 2026 and has not registered: its window was fixed and has closed.
5. **The tracker row** carried « registration open 2026-05-07 with window to
   2026-10-03 » with no basis and no cohort.
6. **The wrong recipient had survived 2026-08-14 in wordings its guard did
   not know.** Corrected here: the FAQ of the `/pl` landing (« do właściwego
   CSIRT (CSIRT NASK dla sektora ogólnego i prywatnego, … ) ») and the
   description of `/pl/rejestracja` (« terminów zgłoszeń do CSIRT NASK »),
   with the English page. The sweep that found them found the same assertion
   on other Polish pages (hosting, tabletop, the FAQ page, the scope page, the
   Polish copy of the MSP and comparison pages): they are corrected in the
   change that follows this one, recorded in the next section, where the guard
   stops being a list of wordings.
7. **`ksc.yaml`** said « obowiązek od 2026-05-07 », the opening day of the
   Minister's window read as the start of a duty. No code reads that field.

### Left open

- ~~**Who is entered ex officio beyond the former operators of essential
  services.**~~ Closed the same day by the next section: art. 7a ust. 2 names
  four categories (telecommunications undertakings, trust service providers,
  public entities, critical entities) and art. 7b gives them six months from
  the summons to complete the entry.
- **CSIRT Cyfra.** Zarządzenie Nr 15 of 30 June 2026 (Dz. Urz. Min. Cyf. poz.
  20) establishes a sectoral CSIRT. The section on art. 41 above says no
  sectoral CSIRT was constituted in July. The order was seen in the journal's
  list, not read: which sectors it serves and since when is to be read before
  any surface names it.
- **Fine amounts on the English page** remain, as on the other older country
  pages: that is the founder's call, not a legal correction.

## The register and who stands around a notification: art. 7 and 7a to 7d (verified 2026-11-05)

<!-- meta: theme=registration,incident; type=law-misread,wrong-citation,overclaim,surface-inconsistency,test-pinned; date=2026-11-05; surfaces=data,marketing,test,docs; guard=apps/web/test/pl-csirt-recipient.test.ts -->

- **Source read:** Dz.U. 2026 poz. 252, art. 1 pkt 13 (new art. 7) and pkt 14
  (new art. 7a to 7m), https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf,
  `pdftotext -layout`. The three later amending acts listed in the previous
  section do not touch these articles.
- **Retrieved and read:** 2026-11-05. Every quotation below was checked
  mechanically as a substring of the official text.
- **Why it was read:** the sweep announced in the previous section. Correcting
  « CSIRT NASK » on the remaining Polish pages meant writing who does hold each
  role, and the first sentence written from memory, « wykaz prowadzony przez
  Ministra Cyfryzacji », turned out to be wrong too.

| Fact | Article | Verbatim | Status |
|---|---|---|---|
| **The register is kept by the competent authority of each sector**, not by the Minister and not by a CSIRT | art. 7 ust. 4 | "Organ właściwy do spraw cyberbezpieczeństwa prowadzi wykaz w zakresie nadzorowanego sektora i w tym zakresie jest administratorem danych zawartych w wykazie." | verified |
| The Minister maintains the system the register is kept in, and is joint controller of its data | art. 7 ust. 6 and 7 | "Minister właściwy do spraw informatyzacji zapewnia rozwój lub utrzymanie systemu teleinformatycznego, o którym mowa w art. 46 ust. 1, za pomocą którego wykaz jest prowadzony." / "Minister właściwy do spraw informatyzacji jest współadministratorem danych, w tym danych osobowych, gromadzonych w wykazie." | verified |
| **An entity's entry names its competent authority, its sectoral CSIRT and its national CSIRT** | art. 7 ust. 2 pkt 20 to 22 | "20) wskazanie organu właściwego do spraw cyberbezpieczeństwa dla podmiotu kluczowego lub podmiotu ważnego; 21) wskazanie CSIRT sektorowego właściwego dla podmiotu kluczowego lub podmiotu ważnego; 22) wskazanie CSIRT MON, CSIRT NASK lub CSIRT GOV właściwego dla podmiotu kluczowego lub podmiotu ważnego;" | verified |
| Those data are not supplied by the entity: the Minister completes them | art. 7a ust. 1 | "Dane, o których mowa w art. 7 ust. 2 pkt 19–26, uzupełnia minister właściwy do spraw informatyzacji." | verified |
| **Who is entered ex officio:** four categories, from public registers | art. 7a ust. 2 | "W przypadku: 1) przedsiębiorców telekomunikacyjnych, 2) dostawców usług zaufania, 3) podmiotów publicznych, 4) podmiotów krytycznych – minister właściwy do spraw informatyzacji wpisuje do wykazu dane, o których mowa w art. 7 ust. 2 pkt 1–8 oraz pkt 19–26, dotyczące tych podmiotów" | verified |
| They are notified, then summoned to complete the entry within six months, under penalty | art. 7b ust. 1 and 2 | "Zawiadomienie o wpisie do wykazu z urzędu minister właściwy do spraw informatyzacji doręcza podmiotom kluczowym lub podmiotom ważnym." / "Minister właściwy do spraw informatyzacji wzywa podmioty kluczowe lub podmioty ważne, o których mowa w art. 7a ust. 2, do uzupełnienia brakujących danych w wykazie, w terminie 6 miesięcy od dnia doręczenia wezwania, pod rygorem nałożenia kary pieniężnej." | verified |
| They complete it through an application to change the entry | art. 7b ust. 4 | "Podmioty kluczowe lub podmioty ważne, o których mowa w art. 7a ust. 2, uzupełniają dane w wykazie, składając wniosek o zmianę wpisu w tym wykazie" | verified |
| The application is filed in the system (the article and its deadlines are in the section on art. 7c above) | art. 7c ust. 6 | "Wniosek składa się w systemie teleinformatycznym, o którym mowa w art. 46 ust. 1." | verified |
| An entity can obtain a certificate of its entry showing the data currently held on it | art. 7d ust. 6 | "Minister właściwy do spraw informatyzacji wydaje, na żądanie podmiotu wpisanego do wykazu, zaświadczenie o wpisie podmiotu do wykazu albo o zmianie tego wpisu wraz ze wskazaniem aktualnych danych zawartych w wykazie dotyczących podmiotu." | verified |

**What this lets us tell a Polish entity that asks « which CSIRT is mine? »:**
the statute does not make it guess. Its entry in the register carries the
answer (pkt 21 and 22), the Minister is the one who fills it in (art. 7a
ust. 1), and it can ask for a certificate of the entry (art. 7d ust. 6). The
dedicated incident page, the FAQ page and the English country page now say so.
It also settles a wording used above: a national CSIRT is « właściwy dla
podmiotu », competent for an entity, never for a « general and private
sector », a split that appears nowhere in these articles.

### What this corrects

1. **Thirty-five sentences on thirteen files named CSIRT NASK in a role it does
   not have**, after the corrections of 2026-08-14 and of the previous section.
   Most still made it the addressee of the notification (« złożenie w CSIRT
   NASK », « zgłoszenie do CSIRT NASK », « dla sektora prywatnego i ogólnego
   właściwy jest CSIRT NASK »). The others had never been looked at because
   they are not about incidents: NASK as the body one registers with
   (`nis2-vs-nist-csf`), as « krajowy CSIRT » in a comparison table
   (`nis2-vs-dora`), as a supervisory authority publishing inspection criteria
   (`nis2-article-20-training`) or asking MSPs for evidence (`nis2-msp`), and as
   the author of guidance on training records (`nis2-training-records`). Files:
   the four `/pl` pages `bezpieczenstwo-hostingu`, `cwiczenia-tabletop`,
   `czesto-zadawane-pytania`, `podmioty-kluczowe-wazne`, and the Polish copy of
   `nis2-msp`, `reglyze-vs-drata`, `reglyze-vs-sprinto`, `reglyze-vs-bastione`,
   `best-nis2-compliance-software`, `nis2-vs-dora`, `nis2-vs-nist-csf`,
   `nis2-article-20-training`, `nis2-training-records`.
2. **Three pages still sold the native Polish report as « na mapie drogowej ».**
   It was delivered on 2026-07-26 (section « Native UKSC template » above) and
   `incidents.routes.ts` routes Polish organisations to it. The MSP
   page and the two comparison pages now say what the product does: a native
   report in the UKSC layout, addressed to the właściwy CSIRT sektorowy, filed
   by the operator.
3. **On the training-records page the Polish clause cited « krajowe wytyczne w
   Polsce (ustawa o KSC / CSIRT NASK) »**, a guidance document nobody had read.
   It now cites the statute, which says it outright: art. 8e ust. 1 and 3,
   verified on 2026-10-29 above (« raz w roku kalendarzowym przechodzi
   szkolenie », « Udział w szkoleniu jest udokumentowany. »).
4. **`pl.yaml` cited art. 7b for the application for entry.** Art. 7b is the
   notice to entities entered ex officio; the application, its six months and
   the fourteen days for a change are art. 7c ust. 1 to 3, as the section of
   2026-07-25 above already had it. The same block said the register is « tenu
   par le ministre » and attributed arts. 7a and following to art. 1 pkt 13
   (they are pkt 14). No surface printed it: no control carries directive
   article 3 and the prompt context does not list this block, so it is
   corrected before anything reads it. The entry now lists art. 7, 7b and 7c
   with what each one says.

### The guard no longer knows wordings, it knows roles

`apps/web/test/pl-csirt-recipient.test.ts` was a list of banned phrases written
from the sentences found on 2026-08-14. Every one of the thirty-five sentences
above got past it, because each said the same thing in other words. The list
is kept and extended, since it also reads the translation tables of the sixteen
other languages. A second layer now parses the Polish and English sources and
requires that **every sentence naming NASK put it in a role the statute gives
it**: cooperation during handling (art. 11 ust. 1 pkt 5), the fallback where no
sectoral CSIRT is established, the national CSIRT the register names for the
entity (art. 7 ust. 2 pkt 22), or the operator of the portal. Anything else
fails whatever its wording. Run against the pages as they stood on `main`, it
lists the thirty-five sentences; run against the corrected pages, it passes.

Kept on purpose, each listed in the test with its reason: the title, the h1
and the JSON-LD headline of `/pl/zgloszenie-incydentu-csirt` (the decision of
2026-08-14 stands: a search phrase, the founder's call), the sentence of the
transpositions article that admits the error, and the placeholder of the
training-provider field.

### Left open

- **The in-app incident card** (`app.dashboard.ksc.incident.body`, eighteen
  locales) says who the addressee is and not where an entity reads which one is
  its own. The sentence on the register entry belongs there too; it is a change
  to eighteen languages and was not made here.
- **Three guidance documents on the training-records page**, in every language:
  « ANSSI's NIS2 implementation note », « BSI's BSI-CS 134 reference » and
  « ACN's D.lgs. 138/2024 application notes » are said to list training records
  as a mandatory artifact for inspection. None is recorded in this folder. To
  be read at the source or removed; the national provisions on training that
  were read (art. 8e here, and the sections « For a training record » of the
  other country files) are the sourced replacement.
- **« APDC »** is named as a national authority, next to ANSSI, BSI, ACN and
  CNCS, on four pages (`compliance`, `nis2-training`,
  `nis2-article-20-training`, `nis2-msp`). `portugal.md` does not know that
  name. To be checked against the Portuguese record.
- **CSIRT Cyfra** is still unread (see the previous section).

## The fallback template named the Minister as a recipient (corrected 2026-11-05)

<!-- meta: theme=incident; type=surface-inconsistency; date=2026-11-05; surfaces=data,doc-gen,ui; guard=packages/regulatory-data/test/incident-authority-receives.test.ts,apps/core-api/test/document-fallback-national-recipients.test.ts,apps/web/test/incidents-page.test.tsx -->

Art. 11 ust. 1 pkt 4 and 4a send the early warning and the notification "do
właściwego CSIRT sektorowego" (section "Incident notification", above). The
template used when AI generation fails printed the reference's competent
authority next to it, "MC / CSIRT sektorowy", sent the final report "to MC"
and said that significant incidents "must be reported to" the Minister. No
Polish organisation received that text: an organisation on the KSC framework
gets no fallback document at all. The incident page did name the Minister for
a moment, while its list of recipients loaded.

Since 2026-11-05 the incident configuration says that the competent authority
receives no report (`competentAuthorityReceives: false`), the template names
the sectoral CSIRT alone, and the page asks the resolver before its list
loads.

## Defect: the publication date was shown as the entry into force (found 2026-11-05)

<!-- meta: theme=statute; type=status-error,surface-inconsistency; date=2026-11-05; surfaces=data,marketing,test; guard=apps/web/test/country-in-force-date.test.ts -->

Found by reading production after the deploy of the two sections above, not by
a test.

- **The fact, already in this file** (first section, fact table): published in
  Dziennik Ustaw on 2026-03-02, in force 2026-04-03. Re-read the same day in the
  official PDF (https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf): the
  journal's header "Warszawa, dnia 2 marca 2026 r. Poz. 252" and "Art. 49.
  Ustawa wchodzi w życie po upływie miesiąca od dnia ogłoszenia."
- **What two surfaces said:**
  - /llms-full.txt, the summary written for answer engines: "transposed (Act of
    23 January 2026 […], published as Dz.U. 2026 poz. 252, in force 2026-03-02)".
  - /en/eu/poland, under the name of the law: "Adopted / in force: 2026-03-02".
    The same page said "in force from 3 April 2026" in its own prose, twice.
- **What was right:** /pl/eu/poland ("Obowiązuje od: 2026-04-03"), which reads
  another field, the mapping file `pl.yaml` (`law.entry_into_force`), the
  transposition references (`enforcementDate`) and the tracker row.

**Cause.** `COUNTRIES_SEO.<country>.transpositionDate` had no stated meaning.
The code reads it as the day the obligations commence
(`effectiveTranspositionStatus` promotes `adopted` to `transposed` on that
date), and nineteen of the twenty-one dated country records carried their
entry into force there.
Poland's and Croatia's carried the publication date of their gazette, and the
label on the page, "Adopted / in force", let one date mean two things. A
publication date is neither.

**Corrected.**

1. Poland's `transpositionDate` is 2026-04-03; Croatia's is 2024-02-15
   (docs/legal-sources/croatia.md, section of the same day). The field's meaning
   is written on the type.
2. The page prints a line derived from the status instead of the two-way label:
   "In force since: 2026-04-03"; "Published, in force from: …" for a law with a
   deferred start; "Not in force yet" where nothing is adopted (France and Spain
   showed "Adopted / in force: TBD").
3. `apps/web/test/country-in-force-date.test.ts` compares the date of EVERY
   country record with the two places that hold the entry into force
   (`law.entry_into_force` of the mapping file, `enforcementDate` of the
   references), checks that the two agree, and reads the status line of each
   country block of /llms-full.txt. Run against the previous data, it fails on
   poland and croatia and on nothing else. A dated record that neither source
   can confirm fails too, so a new country cannot join unchecked.

**Why no test had caught it.** Three families of country tests already compared
this field with the day the obligations apply, each for the countries it was
written for (CZ, MT, CY, RO; SE, DK, FI, EE, SK; LV), and one of them said "as
on every page". None did it for every page.

**Left open, closed on 2026-11-05.** `de.yaml` kept Germany's entry into force
under `law.adoption_chronology`, where the loader does not read it: the German
prompt context therefore had no "Entry into force" line (the date was right
everywhere it is printed; the guard checked Germany against the references).
Moving it is a change to a prompt input, and was done with the German prompts
compared before and after: see the section of that date in `germany.md`.

## What the scope check says on public administration (2026-11-05)

<!-- meta: theme=scoping; type=scope-error; date=2026-11-05; surfaces=data,prompt; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

This file named "public entity of annex 1" and did not read the annex. Read on
2026-11-05 in Dz.U. 2026 poz. 252, through the Sejm ELI endpoint.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Who a public entity is | art. 2 pkt 11b | "11b) podmiot publiczny – podmiot wskazany w załączniku nr 1 lub 2 do ustawy w sektorze podmioty publiczne;" | ✅ |
| The voivodeship | Annex 1, public entities, point 2 | "2) w odniesieniu do samorządu województwa: jednostki budżetowe oraz zakłady budżetowe z wyłączeniem:" | ✅ |
| The district | Annex 1, public entities, point 3 | "3) w odniesieniu do samorządu powiatu: starostwo powiatowe" | ✅ |
| The municipality, with a headcount | Annex 1, public entities, point 4 | "4) w odniesieniu do samorządu gminy: urząd gminy, jeżeli zatrudnia na dzień 1 stycznia danego roku w przeliczeniu na pełny wymiar czasu pracy na podstawie umowy o pracę co najmniej 50 osób" | ✅ |
| The rest of local government is important | art. 5 ust. 2 pkt 8 | "8) podmiot publiczny, który nie jest podmiotem kluczowym oraz jest samorządową jednostką budżetową, samorządowym zakładem budżetowym, samorządową instytucją kultury albo spółką wykonującą zadania o charakterze użyteczności publicznej" | ✅ |

| Level stated | Verdict | Basis |
|---|---|---|
| Central, or not stated | essential, whatever the size | art. 5 ust. 1 pkt 4 lit. d |
| Regional | essential, the exclusions of point 2 not being modelled | Annex 1, point 2 |
| Local, 50 full-time staff or more | essential | Annex 1, point 4 |
| Local, fewer | important, a public task on information systems being assumed | art. 5 ust. 2 pkt 8 |

**Open.** A district office of fewer than 50 staff reads as a municipal office: the
inputs do not tell them apart, and the verdict understates. Its sentence says so.
The exclusions of point 2 of Annex 1 are not modelled.
