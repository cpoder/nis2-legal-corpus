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

<!-- meta: theme=supply-chain; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** consolidated BSIG 2025, https://www.gesetze-im-internet.de/bsig_2025/__30.html
- **Retrieved + read:** 2026-07-25 (§ 30 Abs. 1–8 read in full).

### Fact table

| Fact | Source | Verbatim (official) | Status |
|---|---|---|---|
| Supply chain = § 30 Abs. 2 **Nr. 4** | § 30 Abs. 2 Nr. 4 | "Sicherheit der Lieferkette einschließlich sicherheitsbezogener Aspekte der Beziehungen zu unmittelbaren Anbietern oder Diensteanbietern" | ✅ |
| **General documentation duty** over the whole risk-management obligation | § 30 Abs. 1 Satz 3 | "Die Einhaltung der Verpflichtung nach Satz 1 ist durch die Einrichtungen zu dokumentieren." | ✅ |
| NIS2 art. 21(3) (supplier-specific vulnerabilities, product quality, coordinated risk assessments) is **NOT** transposed in § 30 | § 30 Abs. 1–8 | Abs. 3–5 concern the precedence of Commission implementing acts; Abs. 6 concerns certification; no Absatz reproduces art. 21(3) | ✅ (absence confirmed on the full section) |
| Certification can be made mandatory for named ICT products/services/processes | § 30 Abs. 6 | "dürfen … bestimmte IKT-Produkte, IKT-Dienste und IKT-Prozesse nur verwenden, wenn diese über eine Cybersicherheitszertifizierung gemäß europäischer Schemata nach Artikel 49 der Verordnung (EU) 2019/881 verfügen" (by Rechtsverordnung under § 56 Abs. 3) | ✅ |
| **No supplier register, no data-exposure duty** | § 30 | § 30 lists the measure areas; it mandates neither a supplier inventory nor documentation of what data a supplier can access | ✅ (absence confirmed) |

### Why this matters to the product

Germany transposes 21(2)(d) verbatim and adds nothing prescriptive on suppliers
— but § 30 Abs. 1 Satz 3 turns **evidence itself into the statutory duty**:
compliance must be documented. For a German customer the selling point is not a
supplier register (not required) but the auditable trail that the supply-chain
measure was taken. Note also Abs. 6: an ICT product may become unusable unless
EU-certified, once the BMI issues the Rechtsverordnung — a supply-chain
constraint worth tracking, adjacent to Poland's high-risk-supplier regime.

## Registration, supervision, sanctions, governance — BSIG 2025 (verified 2026-07-26)

<!-- meta: theme=registration,sanctions,governance; type=reference,wrong-citation; date=2026-07-26; surfaces=data; guard=none; debt=a test cross-checking every § cited in the product against the index would be possible but heavy, and the four faulty § are corrected and covered by the citation tests -->

- **Source read:** official consolidated text, https://www.gesetze-im-internet.de/bsig_2025/
  (§§ 33, 38, 61, 65 read in full; complete table of contents noted)
- **Retrieved + read:** 2026-07-26

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **Registration: 3 ROLLING months** from the day the entity comes under the regime | § 33 Abs. 1 | "sind verpflichtet, **spätestens drei Monate, nachdem sie erstmals oder erneut als eine der vorgenannten Einrichtungen gelten**, dem Bundesamt … folgende Angaben zu übermitteln" | ✅ |
| **Joint BSI + BBK** registration desk | § 33 Abs. 1 | "über eine **gemeinsam vom Bundesamt und dem Bundesamt für Bevölkerungsschutz und Katastrophenhilfe eingerichtete Registrierungsmöglichkeit**" | ✅ |
| Operators of critical installations register under **ANOTHER act** | § 33 Abs. 2 | "Die Registrierung von Betreibern kritischer Anlagen erfolgt gemäß **§ 8 des KRITIS-Dachgesetzes**." | ✅ |
| § 38 = duty of the MANAGEMENT (implementation, oversight, training) | § 38 Abs. 1 and 3 | "Geschäftsleitungen … sind verpflichtet, die … nach § 30 zu ergreifenden Risikomanagementmaßnahmen **umzusetzen und ihre Umsetzung zu überwachen**"; "müssen **regelmäßig an Schulungen teilnehmen**" | ✅ |
| ⚠️ **Personal CIVIL liability of the executive TOWARDS THEIR OWN ENTITY**, by reference to company law | § 38 Abs. 2 | "Geschäftsleitungen, die ihre Pflichten nach Absatz 1 verletzen, **haften ihrer Einrichtung für einen schuldhaft verursachten Schaden** nach den auf die Rechtsform der Einrichtung anwendbaren Regeln des **Gesellschaftsrechts**. Nach diesem Gesetz haften sie nur, wenn die … gesellschaftsrechtlichen Bestimmungen keine Haftungsregelung nach Satz 1 enthalten." | ✅ |
| Supervision: the BSI **orders audits by independent third parties**, it does not conduct them itself | § 61 Abs. 1 | "Das Bundesamt kann … **anordnen, Audits, Prüfungen oder Zertifizierungen von unabhängigen Stellen** … durchführen zu lassen." | ✅ |
| ⚠️ **3-year moratorium** for the other particularly important entities | § 61 Abs. 3 | "Das Bundesamt kann auch gegenüber **anderen** besonders wichtigen Einrichtungen **frühestens drei Jahre nach Inkrafttreten dieses Gesetzes** die Vorlage von Nachweisen … anordnen." | ✅ |
| Fines: **§ 65**, with SIX bands depending on the offence | § 65 Abs. 5 | "bei besonders wichtigen Einrichtungen … **bis zu zehn Millionen Euro**, bei wichtigen Einrichtungen … **bis zu sieben Millionen Euro**"; then bands at **5 M**, **2 M**, **1 M**, **500 000** and **100 000 euros** depending on the breach | ✅ |
| Percentages: **2 %** / **1.4 %** of the Gesamtumsatz, via § 30 Abs. 2 Satz 2 OWiG | § 65 | "mit einer Geldbuße bis zu **2 Prozent des Gesamtumsatzes**" / "bis zu **1,4 Prozent des Gesamtumsatzes**" | ✅ |
| ⚠️ **No cumulation with a GDPR fine**, for the same conduct | § 65 Abs. 11 | "Verhängen die … Aufsichtsbehörden gemäß Artikel 58 Absatz 2 Buchstabe i der Verordnung (EU) 2016/679 eine Geldbuße, so **darf eine weitere Geldbuße für einen Verstoß nach diesem Gesetz, der sich aus demselben Verhalten ergibt** …, **nicht verhängt werden**." | ✅ |

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
