# Germany — legal sources (verified)

## NIS2UmsuCG / BSIG 2025

<!-- meta: theme=statute; type=reference; date=2026-07-26; surfaces=data,docs; guard=none -->

- **Official citation:** Gesetz zur Umsetzung der NIS-2-Richtlinie … (NIS2-
  Umsetzungs- und Cybersicherheitsstärkungsgesetz), Bundesgesetzblatt Teil I,
  2025, Nr. 301, ausgegeben zu Bonn am **5. Dezember 2025**. Article 1 re-enacts
  the BSI-Gesetz ("BSIG 2025").
- **Official URLs:**
  - BGBl. announcement: https://www.recht.bund.de/bgbl/1/2025/301/VO.html
  - Regelungstext (PDF): https://www.recht.bund.de/bgbl/1/2025/301/regelungstext.pdf
  - Consolidated BSIG 2025: https://www.gesetze-im-internet.de/bsig_2025/
  - BSI press, "ab morgen in Kraft" (05-12-2025): https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251205_NIS-2-Umsetzungsgesetz_in_Kraft.html
- **Retrieved:** 2026-06-03 (official BGBl + BSI press).

### Verified facts

| Fact | Source | Detail | Status |
|---|---|---|---|
| Published | BGBl. I 2025 Nr. 301 | 5 December 2025 | ✅ |
| **Entry into force** | BSI press "ab morgen in Kraft" (05-12) + BGBl | **6 December 2025** | ✅ |
| Mechanism | BGBl text | Art. 1 re-enacts the BSIG ("BSIG 2025") + amends sectoral laws | ✅ |
| Authority | BSIG / BSI | BSI = national authority + CSIRT; ~29,500 entities in scope | ✅ |
| Categories | BSIG | "besonders wichtige" + "wichtige Einrichtungen" | ✅ |

### Corrections to internal data (official source wins)

`transposition-references.ts` (DE block) has `transposedAt`/`enforcementDate =
"2025-03-01"` → **wrong**. Official entry into force is **2025-12-06**.
`de.yaml` already has the correct date (`entry_into_force` 2025-12-06) — align
`transposition-references.ts` to it.

> Note: `de.yaml`'s `law.provisional: true` is about Reglyze's **article-mapping**
> pending German-auditor validation, NOT the law's status — the NIS2UmsuCG **is
> in force** (2025-12-06). Keep that distinction in the provisional reason.

### Still to pin (next pass)

- §32 (Aufsicht/inspections) and §38 (management-body duty) exact wording — the
  DE gap analysis flagged `transposition-references.ts` prose as mis-citing these
  vs `de.yaml`; verify against the consolidated BSIG 2025 (gesetze-im-internet)
  before rewording customer copy.

## Supply chain — BSIG 2025 § 30

<!-- meta: theme=supply-chain; type=reference; date=2026-10-29; surfaces=data,doc-gen; guard=apps/core-api/test/multi-frame-export.test.ts -->

- **Source read:** consolidated BSIG 2025, https://www.gesetze-im-internet.de/bsig_2025/__30.html
- **Retrieved + read:** 2026-07-25 (§ 30 Abs. 1–8 read in full); 2026-10-29 (Abs. 1–9 read again in full, for the presumption question).

### Fact table

| Fact | Source | Verbatim (official) | Status |
|---|---|---|---|
| Supply chain = § 30 Abs. 2 **Nr. 4** | § 30 Abs. 2 Nr. 4 | "Sicherheit der Lieferkette einschließlich sicherheitsbezogener Aspekte der Beziehungen zu unmittelbaren Anbietern oder Diensteanbietern" | ✅ |
| **General documentation duty** over the whole risk-management obligation | § 30 Abs. 1 Satz 3 | "Die Einhaltung der Verpflichtung nach Satz 1 ist durch die Einrichtungen zu dokumentieren." | ✅ |
| NIS2 art. 21(3) (supplier-specific vulnerabilities, product quality, coordinated risk assessments) is **NOT** transposed in § 30 | § 30 Abs. 1–8 | Abs. 3–5 concern the precedence of Commission implementing acts; Abs. 6 concerns certification; no Absatz reproduces art. 21(3) | ✅ (absence confirmed on the full section) |
| Certification can be made mandatory for named ICT products/services/processes | § 30 Abs. 6 | "dürfen … bestimmte IKT-Produkte, IKT-Dienste und IKT-Prozesse nur verwenden, wenn diese über eine Cybersicherheitszertifizierung gemäß europäischer Schemata nach Artikel 49 der Verordnung (EU) 2019/881 verfügen" (by Rechtsverordnung under § 56 Abs. 3) | ✅ |
| **No supplier register, no data-exposure duty** | § 30 | § 30 lists the measure areas; it mandates neither a supplier inventory nor documentation of what data a supplier can access | ✅ (absence confirmed) |
| **No presumption of conformity** for IT-Grundschutz or for "ISO/IEC 27001 auf der Basis von IT-Grundschutz" | § 30 Abs. 1–9 | § 30 names no standard and contains neither "Vermutung" nor "vermutet" nor "Grundschutz" (read in full 2026-10-29). Until that day the IT-Grundschutz profile export told the auditor that such a certificate "confers a strong presumption of conformity with § 30 BSIG". | ✅ (absence confirmed, 2026-10-29) |
| Sector-specific security standards: proposed, then found suitable by the BSI on request | § 30 Abs. 8 Satz 1 und 3 | "Besonders wichtige Einrichtungen und ihre Branchenverbände können branchenspezifische Sicherheitsstandards zur Gewährleistung der Anforderungen nach Absatz 1 vorschlagen." / "Das Bundesamt stellt auf Antrag fest, ob die vorgeschlagenen Sicherheitsstandards branchenspezifisch und geeignet sind, die Anforderungen nach Absatz 1 zu gewährleisten und veröffentlicht diese auf seiner Internetseite." | ✅ (2026-10-29) |
| The same for operators of critical installations | § 30 Abs. 9 | "Betreiber kritischer Anlagen können branchenspezifische Sicherheitsstandards zur Gewährleistung der Anforderungen in Bezug auf kritische Anlagen nach § 30 Absatz 1 Satz 1 in Verbindung mit § 31 Absatz 1 und 2 Satz 1 vorschlagen. Absatz 8 Satz 2 bis 6 gilt entsprechend." | ✅ (2026-10-29) |

### Why this matters to the product

Germany transposes 21(2)(d) verbatim and adds nothing prescriptive on suppliers
— but § 30 Abs. 1 Satz 3 turns **evidence itself into the statutory duty**:
compliance must be documented. For a German customer the selling point is not a
supplier register (not required) but the auditable trail that the supply-chain
measure was taken. Note also Abs. 6: an ICT product may become unusable unless
EU-certified, once the BMI issues the Rechtsverordnung — a supply-chain
constraint worth tracking, adjacent to Poland's high-risk-supplier regime.

## Registration, supervision, sanctions, governance — BSIG 2025 (verified 2026-07-26)

<!-- meta: theme=registration,sanctions,governance; type=reference,wrong-citation; date=2026-10-29; surfaces=data; guard=none; debt=a test cross-checking every § cited in the product against the index would be possible but heavy, and the four faulty § are corrected and covered by the citation tests -->

- **Source read:** official consolidated text, https://www.gesetze-im-internet.de/bsig_2025/
  (§§ 33, 38, 61, 65 read in full; complete table of contents noted)
- **Retrieved + read:** 2026-07-26
- **Re-read 2026-10-29 for § 38, the management's training duty, and its exits:**
  the Bundesgesetzblatt itself, BGBl. 2025 I Nr. 301, "Ausgegeben zu Bonn am
  5. Dezember 2025", 68 pages, sealed by the Bundesamt für Justiz (`pdfsig`:
  "Signature Field Name: BfJ-Siegel", "Signature Validation: Signature is Valid."),
  https://www.recht.bund.de/bgbl/1/2025/301/regelungstext.pdf?__blob=publicationFile&v=3,
  sha256 `674d68c367cf719b5af7753526168cce85a8fba1a7bae41b0291b77c3187bf93`,
  read with `pdftotext -layout`. Compared the same day with the consolidated
  texts, https://www.gesetze-im-internet.de/bsig_2025/ (its "Stand: Zuletzt
  geändert durch Art. 8 G v. 22.10.2026 I Nr. 318"),
  https://www.gesetze-im-internet.de/enwg_2005/__5e.html and
  https://www.gesetze-im-internet.de/tkg_2021/__165.html: every paragraph quoted
  in the rows dated 2026-10-29 carries the same words in both.

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **Registration: 3 ROLLING months** from the day the entity comes under the regime | § 33 Abs. 1 | "sind verpflichtet, **spätestens drei Monate, nachdem sie erstmals oder erneut als eine der vorgenannten Einrichtungen gelten**, dem Bundesamt … folgende Angaben zu übermitteln" | ✅ |
| **Joint BSI + BBK** registration desk | § 33 Abs. 1 | "über eine **gemeinsam vom Bundesamt und dem Bundesamt für Bevölkerungsschutz und Katastrophenhilfe eingerichtete Registrierungsmöglichkeit**" | ✅ |
| Operators of critical installations register under **ANOTHER act** | § 33 Abs. 2 | "Die Registrierung von Betreibern kritischer Anlagen erfolgt gemäß **§ 8 des KRITIS-Dachgesetzes**." | ✅ |
| § 38 = duty of the MANAGEMENT: implement the § 30 measures and oversee their implementation | § 38 Abs. 1 | "(1) Geschäftsleitungen besonders wichtiger Einrichtungen und wichtiger Einrichtungen sind verpflichtet, die von diesen Einrichtungen nach § 30 zu ergreifenden Risikomanagementmaßnahmen umzusetzen und ihre Umsetzung zu überwachen." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| ⚠️ **Personal CIVIL liability of the executive TOWARDS THEIR OWN ENTITY**, by reference to company law | § 38 Abs. 2 | "Geschäftsleitungen, die ihre Pflichten nach Absatz 1 verletzen, **haften ihrer Einrichtung für einen schuldhaft verursachten Schaden** nach den auf die Rechtsform der Einrichtung anwendbaren Regeln des **Gesellschaftsrechts**. Nach diesem Gesetz haften sie nur, wenn die … gesellschaftsrechtlichen Bestimmungen keine Haftungsregelung nach Satz 1 enthalten." | ✅ |
| § 38 = duty of the MANAGEMENT: attend training **regularly**. The paragraph sets no interval, no certificate and no provider, and says nothing of staff | § 38 Abs. 3 | "(3) Die Geschäftsleitungen besonders wichtiger Einrichtungen und wichtiger Einrichtungen müssen regelmäßig an Schulungen teilnehmen, um ausreichende Kenntnisse und Fähigkeiten zur Erkennung und Bewertung von Risiken und von Risikomanagementpraktiken im Bereich der Sicherheit in der Informationstechnik zu erlangen sowie um die Auswirkungen von Risiken sowie Risikomanagementpraktiken auf die von der Einrichtung erbrachten Dienste beurteilen zu können." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| Who the "Geschäftsleitung" is; the heads of federal administration bodies are not | § 2 Nr. 13 | "13. „Geschäftsleitung“ eine natürliche Person, die nach Gesetz, Satzung oder Gesellschaftsvertrag zur Führung der Geschäfte und zur Vertretung einer besonders wichtigen Einrichtung oder wichtigen Einrichtung berufen ist; Leiterinnen und Leiter von Einrichtungen der Bundesverwaltung nach § 29 gelten nicht als Geschäftsleitung;" | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| ⚠️ **Exit:** § 38 does not apply to public telecom networks and services, nor to energy operators under §§ 5c to 5e EnWG (Satz 2 and 4 of the same paragraph narrow the exit: further critical installations, other Annex activities, an energy installation run as a side activity) | § 28 Abs. 5 Satz 1 | "(5) Die §§ 30, 31, 32, 35, 36, 38, 39, 61 und 62 gelten nicht für besonders wichtige Einrichtungen und wichtige Einrichtungen, die 1. ein öffentliches Telekommunikationsnetz betreiben oder öffentlich zugängliche Telekommunikationsdienste erbringen oder 2. Energieversorgungsnetze, Energieanlagen oder digitale Energiedienste nach dem Energiewirtschaftsgesetz betreiben und den Regelungen der §§ 5c bis 5e des Energiewirtschaftsgesetzes unterliegen." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| ⚠️ **Exit:** § 38 does not apply to DORA financial entities, nor to gematik and the Telematikinfrastruktur services | § 28 Abs. 6 Nr. 1 and 2 | "(6) Die §§ 30, 31, 32, 35, 36, 38 und 39 gelten nicht für 1. Finanzunternehmen nach Artikel 2 Absatz 2 der Verordnung (EU) 2022/2554 und Unternehmen, für die die Anforderungen der Verordnung (EU) 2022/2554 aufgrund von § 1a Absatz 2 und 2a des Kreditwesengesetzes oder § 293 Absatz 5 des Versicherungsaufsichtsgesetzes gelten, 2. die Gesellschaft für Telematik nach § 306 Absatz 1 Satz 3 des Fünften Buches Sozialgesetzbuch, Betreiber von Diensten der Telematikinfrastruktur im Hinblick auf die nach § 311 Absatz 6 und § 325 des Fünften Buches Sozialgesetzbuch zugelassenen Dienste und Betreiber von Diensten, soweit sie die Telematikinfrastruktur für nach § 327 Absatz 2 bis 5 des Fünften Buches Sozialgesetzbuch bestätigte Anwendungen nutzen." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| ⚠️ **Exit:** federal administration bodies follow the rules for particularly important entities, § 38 excepted | § 29 Abs. 2 | "(2) Für Einrichtungen der Bundesverwaltung sind die Regelungen für besonders wichtige Einrichtungen anzuwenden, nicht jedoch die Regelungen der §§ 38, 40 Absatz 3 und der §§ 61 und 65." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| Energy operators: the same training duty, in the EnWG | § 5e Abs. 3 EnWG, inserted by Art. 17 Nr. 2 NIS2UmsuCG | "(3) Die Geschäftsleitung eines Betreibers nach § 5c Absatz 1 Satz 1 Nummer 1 bis 3 muss regelmäßig an Schulungen teilnehmen, um ausreichende Kenntnisse und Fähigkeiten zur Erkennung und Bewertung von Risiken und von Risikomanagementpraktiken im Bereich der Sicherheit in der Informationstechnik zu erlangen sowie um die Auswirkungen von Risiken sowie Risikomanagementpraktiken auf die von der Einrichtung erbrachten Dienste beurteilen zu können." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| Public telecom networks and services: the same duty, in the TKG ("von Risiken sowie Risikomanagementpraktiken", where § 38 Abs. 3 has "von Risiken und von Risikomanagementpraktiken") | § 165 Abs. 2d TKG, inserted by Art. 25 Nr. 11 Buchstabe b NIS2UmsuCG | "(2d) Die Geschäftsleitungen von Betreibern öffentlicher Telekommunikationsnetze und Anbietern öffentlich zugänglicher Telekommunikationsdienste, die besonders wichtige Einrichtungen im Sinne von § 28 Absatz 1 Satz 1 Nummer 3 des BSI-Gesetzes oder wichtige Einrichtungen im Sinne von § 28 Absatz 2 Satz 1 Nummer 2 des BSI-Gesetzes sind, müssen regelmäßig an Schulungen teilnehmen, um ausreichende Kenntnisse und Fähigkeiten zur Erkennung und Bewertung von Risiken sowie Risikomanagementpraktiken im Bereich der Sicherheit in der Informationstechnik zu erlangen sowie um die Auswirkungen von Risiken sowie Risikomanagementpraktiken auf die von der Einrichtung erbrachten Dienste beurteilen zu können." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| Staff training is one of the § 30 measures, not a sentence of § 38 | § 30 Abs. 2 Satz 2 Nr. 7 | "7. grundlegende Schulungen und Sensibilisierungsmaßnahmen im Bereich der Sicherheit in der Informationstechnik," | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| Supervision: the BSI **orders audits by independent third parties**, it does not conduct them itself; § 38 Abs. 3 is among the duties it can have audited | § 61 Abs. 1 | "(1) Das Bundesamt kann gegenüber einzelnen besonders wichtigen Einrichtungen anordnen, Audits, Prüfungen oder Zertifizierungen von unabhängigen Stellen zur Prüfung der Erfüllung der Verpflichtungen nach § 30 Absatz 1 Satz 1, auch in Verbindung mit § 31 Absatz 1 und 2 Satz 1 und § 32 Absatz 1 bis 3 sowie § 38 Absatz 3 durchführen zu lassen." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| Important entities: the BSI checks § 38 Abs. 3 when facts justify it (for particularly important entities it can order an audit, § 61 Abs. 1, previous row) | § 62 | "Rechtfertigen Tatsachen die Annahme, dass eine wichtige Einrichtung Verpflichtungen nach § 30 Absatz 1 Satz 1, § 32 Absatz 1 bis 3 und § 38 Absatz 3 nicht oder nicht richtig umsetzt, so kann das Bundesamt deren Einhaltung überprüfen und Maßnahmen nach § 61 treffen." | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| ⚠️ **3-year moratorium** for the other particularly important entities | § 61 Abs. 3 | "Das Bundesamt kann auch gegenüber **anderen** besonders wichtigen Einrichtungen **frühestens drei Jahre nach Inkrafttreten dieses Gesetzes** die Vorlage von Nachweisen … anordnen." | ✅ |
| Fines: **§ 65**, with SIX bands depending on the offence | § 65 Abs. 5 | "bei besonders wichtigen Einrichtungen … **bis zu zehn Millionen Euro**, bei wichtigen Einrichtungen … **bis zu sieben Millionen Euro**"; then bands at **5 M**, **2 M**, **1 M**, **500 000** and **100 000 euros** depending on the breach | ✅ |
| Percentages: **2 %** / **1.4 %** of the Gesamtumsatz, via § 30 Abs. 2 Satz 2 OWiG | § 65 | "mit einer Geldbuße bis zu **2 Prozent des Gesamtumsatzes**" / "bis zu **1,4 Prozent des Gesamtumsatzes**" | ✅ |
| ⚠️ **No cumulation with a GDPR fine**, for the same conduct | § 65 Abs. 11 | "Verhängen die … Aufsichtsbehörden gemäß Artikel 58 Absatz 2 Buchstabe i der Verordnung (EU) 2016/679 eine Geldbuße, so **darf eine weitere Geldbuße für einen Verstoß nach diesem Gesetz, der sich aus demselben Verhalten ergibt** …, **nicht verhängt werden**." | ✅ |

**For a training record (2026-10-29).** The provision a German attestation
cites is § 38 Abs. 3 BSIG for the Geschäftsleitung of a particularly important
or important entity, § 5e Abs. 3 EnWG for an operator under § 5c Abs. 1 Satz 1
Nr. 1 to 3 EnWG, and § 165 Abs. 2d TKG for a public telecom network or service
that is a particularly important or important entity. For a DORA financial
entity, gematik, a Telematikinfrastruktur service or a federal administration
body, § 38 does not apply (§ 28 Abs. 6, § 29 Abs. 2). All three paragraphs say
"regelmäßig" and none sets an interval, a duration, a certificate or a provider.

### Four wrong citations corrected in `transposition-references.ts` (DE)

The German block carried five bullets. **Only one cited the right paragraph.**

| What we displayed | Reality |
|---|---|
| « Three-month registration deadline (**§ 33** BSIG) » | ✅ **Correct.** The only accurate bullet. Enriched (rolling deadline, joint BSI/BBK desk) |
| « KRITIS obligations stack on NIS 2 (**§§ 8a, 8b** BSIG) » | ❌ **These paragraphs no longer exist.** The BSIG 2025 runs from § 1 to § 66 with neither 8a nor 8b; § 8 deals with defence against malware for the federal communication technology. KRITIS registration now falls under the **KRITIS-Dachgesetz** (§ 33 Abs. 2) |
| « BSI on-site inspections without prior notice (**§ 32** BSIG) » | ❌ **§ 32 = Meldepflichten** (notification obligations). The supervisory power lies in **§ 61**, and it consists in **ordering audits by third parties**, not in conducting unannounced visits. No mention of Vor-Ort or unangekündigt in § 61. And § 61 Abs. 3 sets a **3-year moratorium** that our data ignored |
| « Designated **IT-Sicherheitsbeauftragter** (**§ 38** BSIG) … must be designated and reported to the BSI » | ❌ **§ 38 creates no CISO position.** It carries the duties of the management: implementation, oversight, training. And its Abs. 2 establishes a **personal civil liability of the executive towards their entity**, which our data did not carry at all |
| « Fine cap up to € 10 M / 2 % codified (**§ 64** BSIG) » | ❌ **§ 64 = Zuwiderhandlungen durch Institutionen der sozialen Sicherung.** The fines are in **§ 65**, and they are **graduated in six bands** (100 k, 500 k, 1 M, 2 M, 5 M, then 10 M / 7 M), not a single cap |

### The German fact worth selling

§ 38 Abs. 2 is a **fourth model** of executive liability, distinct from
the three others already verified:

| Country | Mechanism | Towards whom |
|---|---|---|
| 🇵🇱 PL | Administrative fine up to **300 % of the remuneration** (art. 73a ust. 4) | The State |
| 🇭🇷 HR | Administrative fine of **1 000 to 6 000 €** (čl. 101. st. 2.) | The State |
| 🇫🇷 FR / 🇮🇹 IT | **Ban / incapacity to exercise** management functions | (non-pecuniary sanction) |
| 🇩🇪 DE | **Civil liability for the damage caused**, by reference to company law | **Their own entity** |

Germany does not punish the executive, it makes them **liable to their
company**. The cap is therefore not a statutory amount but the loss suffered, which
can exceed by very far the administrative fines of the other countries.

### Method note

The GDPR no-cumulation rule now appears in **two** verified transpositions
(FR art. 37 I last subparagraph, DE § 65 Abs. 11). It is no longer a French
singularity, it is a pattern to look for systematically in the other countries.

## ⛔ A BSI fine of € 850 000 was asserted in public, and it is fabricated (2026-07-27)

<!-- meta: theme=sanctions; type=fabrication; date=2026-07-27; surfaces=marketing,ui; guard=apps/web/test/no-unsourced-enforcement-claims.test.ts -->

Three public surfaces asserted, as a fact:

> « The German Federal Office for Information Security (BSI) issued the first
> significant NIS2 fine in Europe, EUR 850,000 against a mid-sized cloud service
> provider for failing to implement adequate incident detection measures and for
> late reporting of a security incident. This case sets a precedent for active
> enforcement across the EU. » (February 2026)

Locations: `/[locale]/nis2-fines` (« Recent enforcement cases » card +
FAQ answer), and `/[locale]/tools/nis2-fine-calculator` (red box
« Recent enforcement reality » **and the JSON-LD `FAQPage`**, hence the form read
by search engines and assistants).

**No corroboration.** Neither bsi.bund.de, nor bmi.bund.de, nor heise, nor golem,
which would certainly cover the first NIS2 fine in Europe. The two independent and
exhaustive German NIS2 trackers, `openkritis.de` and `nisd2.eu`, list
**only theoretically possible sanctions**, none imposed.

**The trap to remember.** A web search *seemed* to confirm the claim:
the third result was Reglyze's own page, and the automatic summary
served our own sentence back to us as proof. **A well-ranked fabrication
becomes its own source.** Never accept a confirmation
without looking at which domain it comes from.

Aggravating factor: Google ranked this page at **position 3.6 on « first nis2
fine »**, so it was served precisely to the people who were trying to find out
whether a fine had taken place. 

**Replaced by** the honest answer (no verifiable fine, and why that is
not reassuring), backed by the facts already verified higher up in this
document: § 61 Abs. 1 (the BSI *orders* the audits, it does not conduct them),
§ 61 Abs. 3 (3-year moratorium for the other particularly important
entities), § 33 Abs. 1 (registration, 3 rolling months, joint BSI/BBK
desk), § 38 Abs. 2 (personal civil liability of the executive),
§ 65 Abs. 11 (no cumulation with a GDPR fine).

**Guarded by** `apps/web/test/no-unsourced-enforcement-claims.test.ts`. The rule
is not "never talk about fines" but "never assert one that we
cannot name". If a real fine is published: add it with
the authority, the date and the official decision, then **extend the test to
require that citation**, do not delete it.

## The registration deadline was presented as fixed at 6 March 2026 (corrected 2026-07-27)

<!-- meta: theme=registration; type=deadline-model,surface-inconsistency; date=2026-07-27; surfaces=marketing,ui; guard=apps/web/test/de-registration-deadline-rolling.test.ts -->

§ 33 Abs. 1 BSIG, already verified above, sets a **rolling** clock:

> « sind verpflichtet, **spätestens drei Monate, nachdem sie erstmals oder erneut**
> als eine besonders wichtige oder wichtige Einrichtung gelten »

6 March 2026 is only three months after the entry into force of the NIS2UmsuCG
(6 December 2025). It is the right date for the entities **already affected on
that day**, and for them only. An entity that crosses a threshold, or that is
designated later, has three months from its own trigger.

**The pattern of the defect is worth remembering**, because it repeats elsewhere:
the German prose was **rigorous** (« für bereits am 6.12.2025 betroffene
Einrichtungen **war** die Frist der 6. März 2026 », in the past tense and qualified), and the
elements that catch the eye were **not**. The nuance was written and then
summarised wrongly in the badge, the title and the meta.

Corrected on five surfaces:

| Surface | Before |
|---|---|
| Hero badge of `/de/bsi-registrierung` | « Frist: 6. März 2026 » in primary colour |
| `metaDescription` of that page | « …, Frist 6. März 2026, Ablauf über… » |
| `ogDescription` | « Frist 6. März 2026, Ablauf über… » |
| Alert title of the diagnostic | « Registrierung beim BSI ausstehend — Frist 6. März 2026 » |
| Three next steps of the diagnostic | « Beim BSI registrieren (§ 33) — Frist 6. März 2026. » |

As of 27 July, that date had been **past for four and a half months**. A
company entering the scope in July read that it had already missed
the deadline, while its clock had just started. For a compliance
product, manufacturing panic over a verifiable fact is the wrong mistake to make.

The date is not banned: it remains correct for the initial cohort, and people
search for it. What is banned is presenting it **bare, as the deadline**,
in a title, a badge or a meta. Guarded by
`apps/web/test/de-registration-deadline-rolling.test.ts`, which requires a
qualifier on the same line and is verified by mutation.


## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Rechtlicher Rahmen » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: BSIG 2025: identity + EIF 06-12-2025, § 30 (+ Dokumentationspflicht), § 32 (Meldepflichten, without deadlines: not pinned here), § 33 (3 months, BSI+BBK, reference to KRITIS-DachG), § 38 (Geschäftsleitung), § 61 (bwE only; wE: § 62 NOT verified → paragraph absent), § 65 (bands). Rule: any fact absent from
this index is ABSENT from the block; enriching = verifying here first.

## § 32 (notification deadlines) + §§ 61-62 (aufsicht by category) — verified 2026-08-25

<!-- meta: theme=incident,sanctions; type=reference; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

- **Source read:** gesetze-im-internet.de (official consolidated text of the BSIG 2025),
  pages `bsig_2025/__32.html`, `__61.html`, `__62.html`. **Retrieved:** 2026-08-25.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| § 32 = « Meldepflichten »; **frühe Erstmeldung 24 h** | § 32 | "unverzüglich, spätestens jedoch innerhalb von 24 Stunden nach Kenntniserlangung" | ✅ |
| **Meldung 72 h** | § 32 | "unverzüglich, spätestens jedoch innerhalb von 72 Stunden nach Kenntniserlangung" | ✅ |
| **Abschlussmeldung: 1 month after the Meldung** (not after becoming aware) | § 32 | "spätestens einen Monat nach Übermittlung der Meldung des Sicherheitsvorfalls" | ✅ |
| § 61 = « Aufsichts- und Durchsetzungsmaßnahmen für **besonders wichtige** Einrichtungen » | § 61 (Überschrift) | verbatim | ✅ |
| § 62 = « Aufsichts- und Durchsetzungsmaßnahmen für **wichtige** Einrichtungen », **ex post on the basis of facts** | § 62 | "Rechtfertigen Tatsachen die Annahme, dass eine wichtige Einrichtung Verpflichtungen … nicht oder nicht richtig umsetzt, so kann das Bundesamt deren Einhaltung überprüfen und Maßnahmen nach § 61 treffen." | ✅ |

Resolves the two gaps noted in the corpus entry of 2026-08-25 (§ 32 deadlines,
§ 62): the DE corpus block and the lint rules can now carry them.

## Incident stages as § 32 BSIG names them (verified 2026-10-28)

<!-- meta: theme=incident; type=reference,wrong-citation; date=2026-10-28; surfaces=data,ui,marketing,prompt; guard=packages/regulatory-data/test/incident-stage-names-statutes.test.ts -->

Read on gesetze-im-internet.de, `https://www.gesetze-im-internet.de/bsig_2025/__32.html`,
retrieved 2026-10-28. The product called the 24-hour stage "Frühwarnung" (the
directive's German wording, and the Austrian NISG's) and the last one
"Abschlussbericht". The BSIG says otherwise.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Recipient: a joint reporting office of the BSI and the BBK | § 32 Abs. 1 Satz 1 | "folgende Informationen an eine vom Bundesamt und dem Bundesamt für Bevölkerungsschutz und Katastrophenhilfe eingerichtete gemeinsame Meldestelle zu melden" | ✅ |
| 24 h: "frühe Erstmeldung" | § 32 Abs. 1 Nr. 1 | "unverzüglich, spätestens jedoch innerhalb von 24 Stunden nach Kenntniserlangung von einem erheblichen Sicherheitsvorfall, eine frühe Erstmeldung" | ✅ |
| 72 h: "Meldung über diesen Sicherheitsvorfall" | § 32 Abs. 1 Nr. 2 | "unverzüglich, spätestens jedoch innerhalb von 72 Stunden nach Kenntniserlangung von einem erheblichen Sicherheitsvorfall, eine Meldung über diesen Sicherheitsvorfall" | ✅ |
| On request: "Zwischenmeldung" | § 32 Abs. 1 Nr. 3 | "auf Ersuchen des Bundesamtes eine Zwischenmeldung über relevante Statusaktualisierungen" | ✅ |
| One month: "Abschlussmeldung" | § 32 Abs. 1 Nr. 4 | "spätestens einen Monat nach Übermittlung der Meldung des Sicherheitsvorfalls gemäß Nummer 2, vorbehaltlich Absatz 2, eine Abschlussmeldung" | ✅ |
| Still running: "Fortschrittsmeldung"; the Abschlussmeldung after final handling, with no period | § 32 Abs. 2 | "legt die betreffende Einrichtung statt einer Abschlussmeldung zu diesem Zeitpunkt eine Fortschrittsmeldung vor. Die Abschlussmeldung ist dem Bundesamt nach abschließender Bearbeitung des Sicherheitsvorfalls durch die betreffende Einrichtung vorzulegen." | ✅ |
| The duty starts with the reporting channel | § 32 Abs. 1 Satz 2 | "Die Verpflichtung nach Satz 1 gilt frühestens ab Einrichtung des Meldewegs." | ✅ |

What the product does with it (2026-10-28): the DE incident config, the German
fiche and the `/de` pages use these names. § 32 Abs. 2 fixes no period for the
Abschlussmeldung after a Fortschrittsmeldung; Reglyze keeps counting the
directive's month (art. 23(4)(e)) and says so in the label. The app's generic
German UI keeps "Frühwarnung", which is right for Austria.

## The entry into force was in the German file, where nothing read it (fixed 2026-11-05)

<!-- meta: theme=statute; type=surface-inconsistency; date=2026-11-05; surfaces=data,prompt; guard=packages/regulatory-data/test/country-prompt-context-dates.test.ts -->

No legal fact changes here. The date is the one verified at the top of this
file on 2026-06-03: published in BGBl. 2025 I Nr. 301 on 5 December 2025, in
force on 6 December 2025.

`packages/regulatory-data/src/nis2-mappings/countries/de.yaml` carried it
under `law.adoption_chronology.entry_into_force`. The loader reads
`law.entry_into_force`, one level up, and every other country file writes it
there. So the German mapping loaded no date, and the country context handed
to a model had no "Entry into force" line. That had been so since the loader
shipped on 2026-05-22. The section above ("`de.yaml` already has the correct
date") was right about the value and did not check where it was written.

Measured on 2026-11-05, for the twenty-two country files, what the loader
returns against the tracker and the references: twenty agree on a date in all
the tables that carry one, France has none in any (its bill is not adopted),
and Germany was the only file whose date did not load.

What it reached. The country context goes to documents generated on the
directive's baseline and to the crisis exercise on the same path. German
organisations take IT-Grundschutz for their documents, and that path never
receives this block, so their documents are unchanged: 15 prompts of 15
identical before and after. On the baseline path, each of the 30 German
document prompts and the exercise prompt gains exactly one line, "Entry into
force: 2025-12-06". The Austrian, French and Dutch prompts, taken as controls,
are identical.

The date is now at `law.entry_into_force`. The guard no longer says "when a
mapping declares a date, it must be ISO": for each country it compares what
the mapping file loads, and what the context says, with the tracker's date,
and requires no line at all where no law is in force.

## § 65 in full, with §§ 35 and 38: six bands, a percentage above EUR 500 million of turnover, no second fine after a GDPR fine, no fine for the training duty (read 2026-11-05)

<!-- meta: theme=sanctions,governance; type=reference; date=2026-11-05; surfaces=marketing,mcp,data; guard=apps/web/test/fines-pages-articles-32-34.test.ts,packages/regulatory-data/test/transpositions-fines-follow-the-record.test.ts -->

- **Source read:** official consolidated text,
  https://www.gesetze-im-internet.de/bsig_2025/__65.html, `__35.html` and
  `__38.html`.
- **Retrieved + read:** 2026-11-05. § 65 in full (Abs. 1 to 11, where the page
  ends), § 35 and § 38 in full. The three texts as read are kept in
  `docs/research/eur-lex/de-bsig-2025-par-65.txt`, `-par-35.txt` and
  `-par-38.txt`; every quotation below is a whole paragraph, number or
  sentence of them.

| Fact | Where | Verbatim (official, DE) | Verdict |
|---|---|---|---|
| Six bands, by the offences of Abs. 1 to 4 they sanction; the first distinguishes the two classes | § 65 Abs. 5 | "(5) Die Ordnungswidrigkeit kann geahndet werden: 1. in den Fällen des Absatzes 2 Nummer 1 Buchstabe d, Nummer 2 bis 5 und 9, a) bei besonders wichtigen Einrichtungen nach § 28 Absatz 1 Satz 1 mit einer Geldbuße bis zu zehn Millionen Euro, b) bei wichtigen Einrichtungen im Sinne des § 28 Absatz 2 Satz 1 mit einer Geldbuße bis zu sieben Millionen Euro, 2. in den Fällen des Absatzes 2 Nummer 11 mit einer Geldbuße bis zu fünf Millionen Euro, 3. in den Fällen des Absatzes 2 Nummer 1 Buchstabe a mit einer Geldbuße bis zu zwei Millionen Euro, 4. in den Fällen des Absatzes 1 und des Absatzes 2 Nummer 10 mit einer Geldbuße bis zu einer Million Euro, 5. in den Fällen des Absatzes 2 Nummer 1 Buchstabe c, Nummer 6, 8, 12 bis 16 und des Absatzes 4 mit einer Geldbuße bis zu fünfhunderttausend Euro und 6. in den Fällen des Absatzes 2 Nummer 1 Buchstabe b, Nummer 7 und 17 und des Absatzes 3 mit einer Geldbuße bis zu hunderttausend Euro. In den Fällen des Satzes 1 Nummer 3 und 4 ist § 30 Absatz 2 Satz 3 des Gesetzes über Ordnungswidrigkeiten anzuwenden." | verified |
| Particularly important entity above EUR 500 million of total turnover: up to 2 % of it, for the offences of the first band | § 65 Abs. 6 | "(6) Gegenüber einer besonders wichtigen Einrichtung im Sinne des § 28 Absatz 1 Satz 1 mit einem Gesamtumsatz von mehr als 500 Millionen Euro kann abweichend von Absatz 5 Satz 1 Nummer 1 Buchstabe a, auch in Verbindung mit § 30 Absatz 2 Satz 2 des Gesetzes über Ordnungswidrigkeiten, eine Ordnungswidrigkeit in den Fällen des Absatzes 2 Nummer 1 Buchstabe d, Nummer 2 bis 5 und 9 mit einer Geldbuße bis zu 2 Prozent des Gesamtumsatzes geahndet werden." | verified |
| Important entity above EUR 500 million of total turnover: up to 1.4 % | § 65 Abs. 7 | "(7) Gegenüber einer wichtigen Einrichtung im Sinne des § 28 Absatz 2 Satz 1 mit einem Gesamtumsatz von mehr als 500 Millionen Euro kann abweichend von Absatz 5 Satz 1 Nummer 1 Buchstabe b, auch in Verbindung mit § 30 Absatz 2 Satz 2 des Gesetzes über Ordnungswidrigkeiten, eine Ordnungswidrigkeit in den Fällen des Absatzes 2 Nummer 1 Buchstabe d, Nummer 2 bis 5 und 9 mit einer Geldbuße bis zu 1,4 Prozent des Gesamtumsatzes geahndet werden." | verified |
| The turnover is the worldwide revenue of the undertaking the entity belongs to, in the financial year before the decision, and it may be estimated | § 65 Abs. 8 | "(8) Gesamtumsatz im Sinne der Absätze 6 und 7 ist die Summe aller Umsatzerlöse, die das Unternehmen, dem die besonders wichtige Einrichtung oder die wichtige Einrichtung angehört, in dem der Behördenentscheidung vorausgegangenen Geschäftsjahr weltweit erzielt hat. Der Gesamtumsatz kann geschätzt werden." | verified |
| The halving of the maximum for negligence does not apply to the first band nor to the percentages | § 65 Abs. 9 | "(9) § 17 Absatz 2 des Gesetzes über Ordnungswidrigkeiten ist in den Fällen des Absatzes 5 Satz 1 Nummer 1 sowie der Absätze 6 und 7 nicht anzuwenden." | verified |
| Who imposes: the Federal Ministry of the Interior for one offence, the BSI for all the others | § 65 Abs. 10 | "(10) Verwaltungsbehörde im Sinne des § 36 Absatz 1 Nummer 1 des Gesetzes über Ordnungswidrigkeiten ist 1. in den Fällen des Absatzes 2 Nummer 11 das Bundesministerium des Innern und 2. in den Fällen der Absätze 1, 3 und 4 sowie in den Fällen des Absatzes 2, die nicht in Nummer 1 genannt sind, das Bundesamt." | verified |
| A GDPR fine bars a further fine under the BSIG for the same conduct | § 65 Abs. 11 | "(11) Verhängen die in Artikel 55 oder 56 der Verordnung (EU) 2016/679 genannten Aufsichtsbehörden gemäß Artikel 58 Absatz 2 Buchstabe i der Verordnung (EU) 2016/679 eine Geldbuße, so darf eine weitere Geldbuße für einen Verstoß nach diesem Gesetz, der sich aus demselben Verhalten ergibt wie jener Verstoß, der Gegenstand der Geldbuße nach Artikel 58 Absatz 2 Buchstabe i der Verordnung (EU) 2016/679 war, nicht verhängt werden." | verified |
| First band: failing to take a measure of § 30 | § 65 Abs. 2 Nr. 2 | "2. entgegen § 30 Absatz 1 Satz 1 eine dort genannte Maßnahme nicht, nicht richtig, nicht vollständig oder nicht rechtzeitig ergreift," | verified |
| First band: failing to report under § 32 | § 65 Abs. 2 Nr. 4 | "4. entgegen § 32 Absatz 1 Satz 1 eine Meldung nicht, nicht richtig, nicht vollständig oder nicht rechtzeitig macht," | verified |
| Fifth band (500,000 euros): failing to register or to update the registration | § 65 Abs. 2 Nr. 6 | "6. entgegen § 33 Absatz 1 oder 2 Satz 1, jeweils auch in Verbindung mit einer Rechtsverordnung nach § 56 Absatz 4 Satz 1, oder entgegen § 34 Absatz 1 eine Angabe nicht, nicht richtig, nicht vollständig oder nicht rechtzeitig übermittelt," | verified |
| First band: disregarding an enforceable order to inform the recipients of the services | § 65 Abs. 2 Nr. 1 d | "d) § 35 Absatz 1 Satz 1 oder § 36 Absatz 2 Satz 1 zuwiderhandelt," | verified |
| Informing the recipients of the services of a significant incident is due on the BSI's order | § 35 Abs. 1 Satz 1 | "(1) Im Fall eines erheblichen Sicherheitsvorfalls kann das Bundesamt besonders wichtigen Einrichtungen und wichtigen Einrichtungen anordnen, die Empfänger ihrer Dienste unverzüglich über diesen erheblichen Sicherheitsvorfall zu unterrichten, der die Erbringung des jeweiligen Dienstes beeinträchtigen könnte." | verified |
| The training duty of the management | § 38 Abs. 3 | "(3) Die Geschäftsleitungen besonders wichtiger Einrichtungen und wichtiger Einrichtungen müssen regelmäßig an Schulungen teilnehmen, um ausreichende Kenntnisse und Fähigkeiten zur Erkennung und Bewertung von Risiken und von Risikomanagementpraktiken im Bereich der Sicherheit in der Informationstechnik zu erlangen sowie um die Auswirkungen von Risiken sowie Risikomanagementpraktiken auf die von der Einrichtung erbrachten Dienste beurteilen zu können." | verified (same words as the row of 2026-10-29 above) |

Readings, not quotations:

- The bands are six: up to 10 million euros (7 million for an important
  entity), 5 million, 2 million, 1 million, 500,000 and 100,000. "Seven
  severity tiers" counted the two amounts of the first band as two tiers; the
  act numbers six.
- The percentage is not "the higher of the two" in the act's words. It is an
  exception to the first band, open only above EUR 500 million of total
  turnover, the point from which 2 % exceeds 10 million and 1.4 % exceeds
  7 million. The base is the undertaking's worldwide revenue (Abs. 8), as in
  Article 34(4) and (5) of the directive. The result is the level those
  paragraphs require (`eu.md`).
- § 65 Abs. 1 to 4 name no breach of § 38. The training duty of § 38 Abs. 3
  is supervised (§§ 61 and 62, rows above) and carries no fine of its own
  under this act. The liability of § 38 Abs. 2 is owed to the entity, under
  company law.
- In Germany an entity tells the recipients of its services about a
  significant incident when the BSI orders it to (§ 35 Abs. 1). § 35 Abs. 2 is
  a different duty, on significant cyber threats, for five sectors.
- Abs. 11 carries Article 35(2) of the directive. Where the BSIG places the
  duty to inform the data protection authorities (Article 35(1)) was not read.

**Defect closed with this reading (2026-11-05).** The English country page
(twice) and the deviation table still said "seven" bands, and the same table
said of Germany that "the non-bis-in-idem rule is not statutorily codified".
Both are told in `eu.md`, "the public fines pages read Article 34 as a
ceiling". The row of 2026-07-26 above cites the percentages "via § 30 Abs. 2
Satz 2 OWiG"; the act's words are "auch in Verbindung mit", inside Abs. 6 and
7, and the fine calculator's page said the same. It now cites Abs. 6 and 7.
The German mapping file had no national article for Article 35 of the
directive and called that a gap; it now carries Abs. 11, and its summary of
Abs. 2 gives the bands as Abs. 5 sets them.


## Public administration: the BSIG covers the federal level only, and the onboarding form put municipalities, counties and universities under it (read and fixed 2026-11-05)

<!-- meta: theme=scoping; type=fabrication; date=2026-11-05; surfaces=data,ui,i18n,docs; guard=packages/regulatory-data/test/public-admin-de-follows-the-bsig.test.ts,apps/web/test/onboarding-public-admin-help.test.ts,packages/regulatory-data/test/national-size-tests.test.ts -->

- **Source read:** official consolidated text,
  https://www.gesetze-im-internet.de/bsig_2025/__28.html, `__29.html`,
  `__2.html`, `__43.html`, `__44.html`, `__45.html`, `anlage_1.html`,
  `anlage_2.html` and the table of contents, `index.html`.
- **Retrieved + read:** 2026-11-05. §§ 28, 29, 43, 44 and 45 in full, both
  annexes in full, row by row, § 2 for its Nr. 12 and 22, and the table of
  contents for the titles of the sixty-six paragraphs. The texts as read are
  kept in `docs/research/eur-lex/de-bsig-2025-par-28.txt`, `-par-29.txt`,
  `-par-2.txt`, `-par-43.txt`, `-par-44.txt`, `-par-45.txt`, `-anlage-1.txt`,
  `-anlage-2.txt` and `-inhalt.txt`; every quotation below is a whole
  paragraph, number, sentence, title or table cell of them.

| Fact | Where | Verbatim (official, DE) | Status |
|---|---|---|---|
| The act's public administration is the federal one: three kinds of body | § 29 Abs. 1 | "(1) Einrichtungen der Bundesverwaltung im Sinne dieses Gesetzes sind, mit Ausnahme der Institutionen der Sozialen Sicherung und der Deutschen Bundesbank, 1. Bundesbehörden, 2. öffentlich-rechtlich organisierte IT-Dienstleister der Bundesverwaltung sowie 3. weitere Körperschaften, Anstalten und Stiftungen des öffentlichen Rechts sowie ihre Vereinigungen, ungeachtet ihrer Rechtsform, auf Bundesebene, soweit durch das Bundesamt im Einvernehmen mit dem jeweils zuständigen Ressort angeordnet." | verified (gesetze-im-internet.de, 2026-11-05) |
| Such a body follows the rules for particularly important entities, four provisions excepted | § 29 Abs. 2 | quoted above in this file, under "Exit: federal administration bodies follow the rules for particularly important entities, § 38 excepted" | verified (BGBl. 2025 I Nr. 301, 2026-10-29) |
| It is not itself a particularly important entity, unless it operates a critical installation | § 28 Abs. 1, last sentence | "Davon ausgenommen sind Einrichtungen der Bundesverwaltung, sofern sie nicht gleichzeitig Betreiber kritischer Anlagen sind." | verified (gesetze-im-internet.de, 2026-11-05) |
| Nor an important entity | § 28 Abs. 2, last sentence | "Davon ausgenommen sind besonders wichtige Einrichtungen und Einrichtungen der Bundesverwaltung." | verified (gesetze-im-internet.de, 2026-11-05) |
| Four portfolios and services are further excepted, among others from §§ 30, 33 and 35 | § 29 Abs. 3 Satz 1 | "(3) Die Geschäftsbereiche des Auswärtigen Amts und des Bundesministeriums der Verteidigung sowie der Bundesnachrichtendienst und das Bundesamt für Verfassungsschutz sind zusätzlich zu den Regelungen gemäß Absatz 2 von den Regelungen des § 7 Absatz 5 Satz 4, der §§ 10, 13 Absatz 1 Satz 1 Nummer 1 Buchstabe e sowie der §§ 30, 33 und 35 ausgenommen." | verified (gesetze-im-internet.de, 2026-11-05) |
| The four provisions § 29 Abs. 2 sets aside, by their titles: the duty of management bodies, the contact point, the supervision of particularly important entities, the fines | table of contents | "§ 38 Umsetzungs-, Überwachungs- und Schulungspflicht für Geschäftsleitungen besonders wichtiger Einrichtungen und wichtiger Einrichtungen"; "§ 40 Nationale Verbindungsstelle sowie zentrale Melde- und Anlaufstelle für besonders wichtige und wichtige Einrichtungen"; "§ 61 Aufsichts- und Durchsetzungsmaßnahmen für besonders wichtige Einrichtungen"; "§ 65 Bußgeldvorschriften" | verified (gesetze-im-internet.de, 2026-11-05) |
| In a federal body the head is responsible for the conditions of information security | § 43 Abs. 1 Satz 1 | "(1) Die Leitung der Einrichtung der Bundesverwaltung ist dafür verantwortlich, unter Berücksichtigung der Belange des IT-Betriebs die Voraussetzungen zur Gewährleistung der Informationssicherheit zu schaffen." | verified (gesetze-im-internet.de, 2026-11-05) |
| The head attends training regularly | § 43 Abs. 2 | "(2) Die Leitung der Einrichtung der Bundesverwaltung muss regelmäßig an Schulungen teilnehmen, um ausreichende Kenntnisse und Fähigkeiten zur Erkennung und Bewertung von Risiken und von Risikomanagementpraktiken im Bereich der Informationssicherheit zu erlangen sowie die Auswirkungen von Risiken sowie Risikomanagementpraktiken auf die von der Einrichtung erbrachten Dienste beurteilen zu können." | verified (gesetze-im-internet.de, 2026-11-05) |
| Registering the body under § 33 falls to its head | § 43 Abs. 4 | "(4) Die Registrierung von Einrichtungen der Bundesverwaltung nach § 33 obliegt der Leitung der Einrichtung der Bundesverwaltung." | verified (gesetze-im-internet.de, 2026-11-05) |
| A federal body meets minimum requirements: the BSI standards, IT-Grundschutz and the federal minimum standards | § 44 Abs. 1 Satz 1 und 2 | "(1) Die Einrichtungen der Bundesverwaltung müssen Mindestanforderungen zum Schutz der in der Bundesverwaltung verarbeiteten Informationen erfüllen. Die Mindestanforderungen ergeben sich aus den BSI-Standards und dem Grundschutzkompendium (IT-Grundschutz) sowie aus den Mindeststandards für die Sicherheit in der Informationstechnik des Bundes (Mindeststandards) in den jeweils geltenden Fassungen." | verified (gesetze-im-internet.de, 2026-11-05) |
| Meeting them satisfies § 30, unless an implementing act of the Commission goes further | § 44 Abs. 2 Satz 1 | "(2) Durch die Umsetzung der Mindestanforderungen nach Absatz 1 Satz 1 ist die Erfüllung der Vorgaben nach § 30 gewährleistet, soweit nicht die Europäische Kommission einen Durchführungsrechtsakt gemäß Artikel 21 Absatz 5 Unterabsatz 2 der NIS-2-Richtlinie erlässt, in dem die technischen und methodischen Anforderungen über die Mindestanforderungen aus Absatz 1 Satz 1 hinausgehen." | verified (gesetze-im-internet.de, 2026-11-05) |
| The head appoints an information security officer and at least one deputy | § 45 Abs. 1 | "(1) Jede Leitung einer Einrichtung der Bundesverwaltung bestellt für ihre Einrichtung eine Informationssicherheitsbeauftragte oder einen Informationssicherheitsbeauftragten und bestimmt mindestens eine zur Vertretung berechtigte Person." | verified (gesetze-im-internet.de, 2026-11-05) |
| Everyone else is caught by entity type and size, and a legally dependent unit of a territorial authority that sells goods or services is caught the same way: particularly important | § 28 Abs. 1 Nr. 4 | "4. sonstige natürliche oder juristische Personen oder rechtlich unselbstständige Organisationseinheiten einer Gebietskörperschaft, die anderen natürlichen oder juristischen Personen entgeltlich Waren oder Dienstleistungen anbieten und die einer der in Anlage 1 bestimmten Einrichtungsarten zuzuordnen sind, und a) mindestens 250 Mitarbeiter beschäftigen oder b) einen Jahresumsatz von über 50 Millionen Euro und zudem eine Jahresbilanzsumme von über 43 Millionen Euro aufweisen." | verified (gesetze-im-internet.de, 2026-11-05) |
| The same, one size down: important | § 28 Abs. 2 Nr. 3 | "3. sonstige natürliche oder juristische Personen oder rechtlich unselbstständige Organisationseinheiten einer Gebietskörperschaft, die anderen natürlichen oder juristischen Personen entgeltlich Waren oder Dienstleistungen anbieten und die einer der in den Anlagen 1 und 2 bestimmten Einrichtungsarten zuzuordnen sind und a) mindestens 50 Mitarbeiter beschäftigen oder b) einen Jahresumsatz und eine Jahresbilanzsumme von jeweils über 10 Millionen Euro aufweisen." | verified (gesetze-im-internet.de, 2026-11-05) |
| The operator of a critical installation is particularly important, with no size test | § 28 Abs. 1 Nr. 1 | "1. Betreiber kritischer Anlagen," | verified (gesetze-im-internet.de, 2026-11-05) |
| A critical installation is defined by another act | § 2 Nr. 22 | "22. „kritische Anlage“ eine Anlage im Sinne des § 2 Nummer 3 des KRITIS-Dachgesetzes;" | verified (gesetze-im-internet.de, 2026-11-05) |
| The Recommendation's method of counting is not applied to a legally dependent unit of a territorial authority | § 28 Abs. 4 Satz 1 | "(4) Bei der Bestimmung von Mitarbeiteranzahl, Jahresumsatz und Jahresbilanzsumme nach den Absätzen 1 und 2 ist außer für rechtlich unselbstständige Organisationseinheiten einer Gebietskörperschaft die Empfehlung der Kommission (2003/361/EG) mit Ausnahme von Artikel 3 Absatz 4 des Anhangs anzuwenden." | verified (gesetze-im-internet.de, 2026-11-05) |
| The shared service providers of Länder and municipalities are outside the act once Land law regulates them | § 28 Abs. 8 | "(8) Dieses Gesetz findet keine Anwendung auf rechtlich unselbstständige Organisationseinheiten von Gebietskörperschaften und auf juristische Personen, an denen ausschließlich Gebietskörperschaften, ausgenommen der Bund, beteiligt sind, wenn sie 1. zu dem Zweck errichtet wurden, im öffentlichen Auftrag Leistungen für Verwaltungen zu erbringen, und 2. durch vergleichbare landesrechtliche Vorschriften unter Bezugnahme auf diesen Absatz reguliert werden." | verified (gesetze-im-internet.de, 2026-11-05) |
| Annex 1 has seven sectors, and public administration is not one of them | Anlage 1, column B | Energie; Transport und Verkehr; Finanzwesen; Gesundheit; Wasser; Digitale Infrastruktur; Weltraum | verified (gesetze-im-internet.de, 2026-11-05) |
| Annex 2 has seven sectors, and public administration is not one of them (the page breaks the second name across a line) | Anlage 2, column B | Transport und Verkehr; Abfall- bewirtschaftung; Produktion, Herstellung und Handel mit chemischen Stoffen; Produktion, Verarbeitung und Vertrieb von Lebensmitteln; Verarbeitendes Gewerbe/Herstellung von Waren; Anbieter digitaler Dienste; Forschung | verified (gesetze-im-internet.de, 2026-11-05) |
| A hospital is a listed entity type, whoever owns it | Anlage 1, Nr. 4.1.1 | "Erbringer von Gesundheitsdienstleistungen im Sinne der Richtlinie 2011/24/EU" | verified (gesetze-im-internet.de, 2026-11-05) |
| Research is one row, and an educational institution is not a research institution | Anlage 2, Nr. 7.1.1, and § 2 Nr. 12 | "Forschungseinrichtungen"; "12. „Forschungseinrichtung“ eine Einrichtung, deren primäres Ziel es ist, angewandte Forschung oder experimentelle Entwicklung im Hinblick auf die Nutzung der Ergebnisse dieser Forschung für kommerzielle Zwecke durchzuführen; Bildungseinrichtungen gelten nicht als Forschungseinrichtungen;" | verified (gesetze-im-internet.de, 2026-11-05) |

**What the act says, in short.**

1. Public administration is under the act at federal level only (§ 29). No
   row of either annex names an administration, a municipality, a Landkreis,
   a school or a university. § 28 names territorial authorities twice: for
   their units that sell goods or services in a listed sector (Abs. 1 Nr. 4,
   Abs. 2 Nr. 3) and for their shared service providers (Abs. 8).
2. The directive covers regional administration on a risk-based assessment
   (Article 2(2)(f)(ii)) and leaves local administration and education to
   each member state (Article 2(5)); both are quoted in `eu.md`. The federal
   act takes up neither.
3. A public hospital, a municipal water or waste-water unit, an energy
   utility or a waste service is caught like any operator of its type, by the
   two size tests of § 28. Public ownership does not change the thresholds.
   For a legally dependent unit of a territorial authority, § 28 Abs. 4 does
   not apply the Recommendation when staff, turnover and balance sheet total
   are determined, and does not say what is counted instead.
4. A university is not under the act as a university.
5. A federal body is not supervised under § 61 and is not fined under § 65,
   and § 38, the duty of management bodies, does not apply to it (§ 29
   Abs. 2). Its own chapter gives its head the responsibility for the
   conditions of information security, a regular training and the
   registration under § 33 (§ 43 Abs. 1, 2 and 4), sets minimum requirements
   (§ 44 Abs. 1) and has the head appoint an information security officer
   (§ 45 Abs. 1).

**What the product said.** The German public-administration configuration
(`packages/regulatory-data/src/country-configs/public-admin.ts`) is shown at
the first step of onboarding to a German organisation that says it is a
public body, in five languages. Since 2026-05-24 it said, on no source:

- "Kommunen above a population threshold + Landkreise + öffentliche
  Krankenhäuser + Hochschulen are all in scope", and for the municipality
  "typically 30 000+ population". The act has no population threshold and
  does not cover a municipality's administration.
- "NIS2UmsuCG brings all Kreise into NIS 2 scope (no population threshold at
  this tier)", with the class "essential". A test pinned it: "DE Landkreis is
  classified essential (every Kreis in scope, no threshold)".
- that public universities "qualify as PA-shape entities + as research /
  education sector under the directive baseline". § 2 Nr. 12 says the
  opposite of the second half.
- that a public hospital is essential "by virtue of the health sector in
  Annex I + bed-count thresholds". The act has two size tests and no bed
  count; a hospital of 50 to 249 staff under the two financial ceilings
  is an important entity.
- "§ 28 NIS2UmsuCG" as the legal basis (§ 28 is the BSIG's; the NIS2UmsuCG is
  the act that rewrote it), "BSI-KritisV § 8", and "the existing § 8a BSIG
  regime" (the 2025 act has no § 8a; critical installations are §§ 31 and
  39).
- that a mayor "signs § 33 BSIG registrations + § 32 BSIG incident
  notifications to BSI", that "the BSI typically accepts either" hospital
  director "as the named signatory", that "the § 33 BSIG registration uses
  the AGS as primary", and that for the three audit courts "NIS 2 compliance
  evidence is increasingly part of the BRH's programmed audit catalogue".
  None of this is in the act or on any page of the BSI read for this file.

Two more surfaces carried the premise. The help under the onboarding toggle
said in nineteen languages that municipalities, public hospitals and public
universities "face country-specific NIS 2 obligations". The German quick
diagnostic said that public administration is "auf Bundesebene … besonders
wichtig (Art. 3 Abs. 1 Buchst. d)" and that "Länder und Kommunen sind wichtige
Einrichtungen, soweit das BSIG sie erfasst".



No stored organisation carried a German public-administration shape when
this was found.

**What changed.**

- The configuration says what the act says, in its five languages: the
  regime note, the entity types, the signatory roles and the three audit
  bodies. A municipality, a Landkreis and a university are classed
  `out_of_scope` with the provisions that say so; a hospital is
  `threshold_dependent` with the two tests of § 28. The entity types stay
  selectable, because such bodies do sign up, for a utility or a hospital of
  theirs or by their own choice.
- The signatory roles no longer say who signs "for NIS 2 purposes". Who signs
  for a municipality or a Kreis follows the municipal or county code of the
  Land, which is not read here, and the strings say so.
- The audit bodies are described as what they are: courts of audit, not
  cyber-security supervisors.
- The toggle's help says that each country's law treats public bodies
  differently and leaves some of them out, in nineteen languages.
- The German diagnostic says that the act covers the federal level only and
  that it assumes a federal body.

**What a second reading of the change found, the same day.** The first
correction stated § 29 and left the screens around it as they were.

- The German quick diagnostic added the § 29 sentence to the verdict of any
  particularly important entity. The same screen then said that the sector
  "steht in Anhang I", promised "laufende Aufsicht (§ 61)" and fines under
  § 65, and told the reader to involve the management body under § 38: the
  provisions § 29 Abs. 2 sets aside. A federal body now has its own verdict.
  It names no annex, cites §§ 29, 43, 44 and 45, and says that §§ 61 and 65
  do not apply. Its registration notice names no route and no date: the route
  and the dates of the other verdicts were read for companies.
- The configuration had no entity type for a federal body, while the
  diagnostic sends one to the form with the box ticked and the form requires
  an entity type. It has one now, listed first, with the head of the body as
  signatory (§ 43).
- The hospital entry said "Public ownership does not change the test" in five
  languages. It now carries the qualifier of § 28 Abs. 4, as this record did.
- The scope tree `packages/regulatory-data/src/nis2-mappings/scope/de.yaml`
  cited "§ 28 Abs. 6 Nr. 5 BSIG" for the federal administration. § 28 Abs. 6
  has two numbers, financial entities and the gematik. The node also put the
  administration of Länder and municipalities in scope "wenn sie spezifisch
  durch Landesgesetze adressiert wird", which nothing read says. It now cites
  § 29 and § 44, and the tree no longer titles § 28 "Anwendungsbereich" and
  § 29 "Begriffsbestimmungen".
- The configuration's `scopeStatus` stays `mixed`, and the definition of that
  value now says what it covers: entity types that do not share one
  classification, one of which may be outside the national act.
- The guard on the toggle's help matched spelled forms of the word for a duty
  and could not read "obligación", "υποχρέωση", "obowiązek", "meldplicht",
  "pligt" or "velvollisuus". It matches stems on text without diacritics, and
  proves it on usual forms of the word in the nineteen languages.

**What the scope check says since 2026-11-05.** It gave a German regional or
local administration the directive's general sentence: an important entity
"where the member state so provides", and for a municipality "check the
national transposition". The engine has a German entry now, and an outcome the
national rules did not have, a level the national act leaves out.

| Level stated | Verdict | Basis |
|---|---|---|
| Federal, or not stated | essential, whatever the size | § 29 Abs. 1 und 2 |
| Land | important, the directive's reading | Article 2(2)(f)(ii) and 3(2); the federal act does not cover it |
| Municipality or Landkreis, no other sector declared | out of scope, as outside the federal act | § 29; neither Anlage; Article 2(5)(a) |
| Municipality or Landkreis, a listed sector declared | that sector's class by size | § 28 Abs. 1 Nr. 4 und Abs. 2 Nr. 3 |

The verdict names what was not read, in these words: "A Land may bind its own
administration and its municipalities; the law of the Länder is not read
here." For the Land level it adds "no duty under the BSIG follows from it",
and for the unit of a municipality "so the figures entered are taken as
given".

The same day the sentence the application shows above an out-of-scope
organisation's dashboards lost its Article 2(1) and its thresholds of 50 staff
and EUR 10 million, in the nineteen languages. It was false for a municipality
of any size, and it was already false for Slovenia, Estonia and Latvia, whose
acts write their own size tests.

**Open.**

- **The law of the sixteen Länder is not read.** A Land may bind its own
  administration and its municipalities. Nothing in the product may say that
  it does, or that it does not.
- The Land verdict is the directive's, kept until that law is read. It can
  overstate. The municipal verdict means outside the federal act, and nothing
  more.
- Finland and Denmark have the same outcome since the same day (`finland.md`,
  `denmark.md`).
- The scope check takes the size of a municipal unit from the figures the
  user enters. The inputs have one set of figures for the whole organisation,
  so a user who enters the municipality's figures gets an overstated verdict.
- § 28 Abs. 8 is not modelled: a shared service provider regulated by Land law
  still reads as its sector.
- §§ 46 to 48 (the information security officers of the ministries, the
  digitalisation projects, the coordinator) are not read. Of §§ 43 to 45,
  read in full, the product uses the sentences quoted above and no other.
- **How a federal body registers is not read.** § 33 and the pages of the BSI
  were read for companies. The federal verdict of the quick diagnostic names
  no route and no date.
- **The scope tree cites a § 28 the act does not have.**
  `packages/regulatory-data/src/nis2-mappings/scope/de.yaml` refers to "§ 28
  Abs. 6 Nr. 1" to "Nr. 5", to "§ 28 Abs. 7 Nr. 1" and "Nr. 2" and to "§ 28
  Abs. 4 (Vorrang DORA)". In the text as read, the classes and their size
  tests are Abs. 1 and 2, Abs. 4 is the counting rule, Abs. 6 has two numbers
  and Abs. 7 has none. Only the federal node is re-anchored. No production
  code reads the tree: its reader, `getScope()`, has no caller outside the
  tests. Nothing may be cited from it until each node is read against § 28.
- The German quick diagnostic calls its two sector lists "Anhang I" and
  "Anhang II des BSIG 2025". Those are the directive's annexes. The act has
  Anlage 1 and Anlage 2, with seven sectors each. The lists are not compared
  with the two Anlagen row by row here.
- The consolidated § 2 carries an editorial note that an amending instruction
  of Article 8 of the act of 22 October 2026 (BGBl. 2026 I Nr. 318, the act
  modernising the Federal Police Act, in effect on 28 October 2026) could not
  be carried out. What else that act changed in the BSIG is not read. Every
  quotation of this file read before 28 October 2026 is to be compared with
  the consolidated text.
- `packages/regulatory-data/src/nis2-mappings/scope/de.yaml` asks whether the
  entity operates a critical installation "im Sinne der BSI-KritisV oder der
  KRITIS-Schwellenwerte des § 31 BSIG". § 2 Nr. 22 defines it by the
  KRITIS-Dachgesetz. Not corrected here: the KRITIS-Dachgesetz is not read.

## Where a report is filed (read 2026-11-05)

<!-- meta: theme=incident; type=reference; date=2026-11-05; surfaces=data; guard=packages/regulatory-data/test/country-configs-incident-reporting.test.ts -->

`https://www.bsi.bund.de/meldung`, the portal our configuration named, answered 404.

- **Source read:** BSI, "NIS-2-Meldepflicht",
  https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-Infopakete/NIS-2-Meldepflicht/NIS-2-Meldepflicht_node.html,
  retrieved 2026-11-05.

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| The portal has a guide for reporting | BSI, NIS-2-Meldepflicht | "Eine Anleitung zur Meldung über das BSI-Portal finden Sie hier." | ✅ |
| Before registration, a form in the MIP | BSI, NIS-2-Meldepflicht | "Einrichtungen, die vom BSI -Gesetz betroffen sind und vor Registrierung im BSI -Portal einen erheblichen Sicherheitsvorfall erleiden, melden diesen dem BSI über ein Online-Formular im Melde- und Informationsportal (MIP)." | ✅ |
| KRITIS and federal bodies keep their channels for now | BSI, NIS-2-Meldepflicht | "KRITIS und Bundesbehörden nutzen vorübergehend ihre bisherigen Meldewege." | ✅ |

The configuration now points at https://portal.bsi.bund.de/.
