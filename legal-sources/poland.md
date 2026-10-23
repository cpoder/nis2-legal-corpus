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
| Ważny: **meets** the medium-sized enterprise thresholds and is not kluczowy | art. 6 ust. 2 pkt 1-2 | "która **spełnia** wymogi dla średniego przedsiębiorcy … **oraz która nie jest podmiotem kluczowym**" | ✅ |

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
- **The 14-day deadline for changes was missing**, although it is
  the one that is triggered most often in practice.

Consequence had we not corrected it: we tell a prospect who comes on board in
November 2026 that they have already missed a sanctioned legal deadline. Corrected.

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
