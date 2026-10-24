# France — legal sources (provisional)

## PJL Résilience / ReCyF v2.5

<!-- meta: theme=statute,framework; type=reference; date=2026-07-25; surfaces=data,docs; guard=none -->

> **Status: provisional.** France has **not yet promulgated** its NIS2
> transposition. The *Projet de loi relatif à la résilience des infrastructures
> critiques et au renforcement de la cybersécurité* (PJL Résilience) is adopted
> by the Sénat but not in force; the **ReCyF v2.5 (17 March 2026)** is an ANSSI
> **working draft** published on MesServicesCyber, to be fixed by a *décret en
> Conseil d'État* after promulgation. Every ReCyF fact below is provisional and
> must be re-verified against the final decree.

- **Legal basis:** PJL Résilience, Titre II, art. 14 (al. 5-6) — mandates a
  décret en Conseil d'État fixing the security objectives + the ReCyF
  référentiel, *adapted to entities by exposure, size and incident
  likelihood/severity* (recyf.yaml `legal_basis`).
- **Authority:** ANSSI — drafting / modification / publication of the ReCyF.
- **Official sources:**
  - ReCyF v2.5 working draft — ANSSI / MesServicesCyber (retrieved 2026-03-17;
    mirrored verbatim in `nis2-mappings/frameworks/recyf.yaml`).
  - PJL Résilience — Sénat dossier législatif (Légifrance, on promulgation).
- **Retrieved:** 2026-06-03 (ANSSI working draft; bill not yet in the JO).

### Applicability model (ADR 0034)

ReCyF v2.5 differentiates objectives along **one** per-line dimension — the
**EI/EE proportionality** — which is exactly what Reglyze's entity-applicability
engine resolves (`scope.proportionality`, recyf.yaml ll. 88-93):

| Line | Applies to | Modelled as |
|---|---|---|
| Objectives 1-15 | EI **and** EE | `applicable_to: ["EI","EE"]` |
| Objectives 16-20 («Sécurité avancée EE») | EE only | `applicable_to: ["EE"]` |
| Sub-controls `X.Y-EE` within 1-15 | EE only (2nd-level proportionality) | `applicable_to: ["EE"]` |

The engine reads this via `getFrameworkLineApplicability("recyf")` →
`LineApplicability.classification`; objective-level applicability drives the
derived gap-assessment rows (`isLineApplicable`, ADR 0034 §2).

### OIV / SecNumCloud / collectivités are **not** per-objective conditionals in v2.5

ADR 0034 §3 anticipated conditional regime flags (`oiv`,
`criticalCloudOutsourcing`, `publicBody`). **ReCyF v2.5 does not map them to
specific objectives** — so the `applicability.requires` dimension stays **empty**
for ReCyF until the application decree details any conditional objective. The
authoritative scope (recyf.yaml ll. 72-93):

| Regime | ReCyF v2.5 treatment | Source |
|---|---|---|
| **OIV** (non-SIIV systems) | Follow ReCyF like EE/EI — **no** per-objective filter | art. L. 1332-2 code de la défense (`scope.applies_to`) |
| **SIIV** | **Excluded** from ReCyF — separate cumulative regime, specific requirements of the Prime Minister | art. 16 PJL (`scope.exclusions`) |
| **Critical cloud / datacenter / CDN / MSP…** | **Out of ReCyF scope** — sectoral regime under Règlement (UE) 2024/2690 (not a SecNumCloud per-objective filter) | art. 14 al. 8 PJL (`authority.sectoral_complement_basis`) |
| **Administrations / collectivités / EPA** | **In scope**, follow ReCyF normally — no per-objective filter | art. 8 7° + art. 14 al. 1 (`scope.applies_to`) |

> Marking any objective `requires: ["oiv" | "criticalCloudOutsourcing" |
> "publicBody"]` would be **unsourced**: ReCyF v2.5 has no such per-objective
> conditional. The flags remain captured per-org at scoping (migration 0060) and
> the engine supports `requires`, but **no ReCyF line gates on them yet**.
> Revisit when the *décret en Conseil d'État* (or a SIIV-specific annex) is
> published.

### Still to pin (next pass)

- Final ReCyF version (post-decree) — re-verify the objective list +
  proportionality, and whether the decree introduces any regime-conditional
  objectives (then add sourced `applicability.requires` blocks here + in
  recyf.yaml).
- PJL Résilience promulgation date + JO reference (currently a Sénat-adopted
  draft).
- `country-configs/transposition-references.ts` FR block vs `countries/fr.yaml` —
  confirm the provisional EIF / law-name alignment.

## PJL Résilience — legislative status as of 2026-07-25

<!-- meta: theme=statute; type=reference; date=2026-07-25; surfaces=data; guard=none -->

- **Source read:** official legislative dossier of the Assemblée nationale,
  https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N50731
- **Retrieved + read:** 2026-07-25.

### Verified chronology

| Date | Stage |
|---|---|
| 2024-10-15 | Tabled in the Sénat, accelerated procedure engaged |
| 2025-03-12 | **Adopted by the Sénat** (texte n° 78) |
| 2025-03-13 | Transmitted to the Assemblée nationale |
| 2025-09-10 | Report + text of the special committee adopted |
| — | **No first-reading vote in the Assemblée** |
| — | No commission mixte paritaire |
| — | No promulgation |

### Correction made to our data

Our files announced a promulgation "**expected mid-2026**", shown to the
customer through the provisional chrome (`publication_signals.estimated_window` of
`recyf.yaml`, read and rendered by `provisional-framework-chrome`). We are at the end
of July 2026: **that estimate has lapsed without coming true**, and the text
has not even been voted on at first reading.

It has been **withdrawn, not pushed back**. Announcing a new date without a
parliamentary act would be an invention. The files now carry the verified
stage (`legislative_stage` + `legislative_stage_verified_at`), which the
regulatory watch can disseminate.

### Consequence for ReCyF

ReCyF v2.5 (17 March 2026) remains a **working document**. The implementing
decree of art. 14 (TITRE II) can only come after promulgation, so no
`in_force` switch is foreseeable at this stage.

### Watch target

- AN dossier: https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N50731
- Sénat dossier: https://www.senat.fr/dossier-legislatif/pjl24-033.html
- ReCyF (versioned PDF, the name carries date + version):
  https://messervices.cyber.gouv.fr/documents-ressources/20260317_NIS_V2_ReCyF_v2.5.pdf

## PJL Résilience — legislative status re-verified 2026-10-24

<!-- meta: theme=statute; type=reference,surface-inconsistency; date=2026-10-24; surfaces=marketing,data; guard=apps/web/test/transposition-dates-not-stale.test.ts -->

- **Source read:** official legislative dossier of the Assemblée nationale,
  https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N50731
- **Retrieved + read:** 2026-10-24.

### What the dossier shows

| Date | Stage |
|---|---|
| 2025-09-10 | Text of the special committee deposited (n° 1779-A0) |
| 2025-09-16 | Commission text put online ("Mise en ligne : mardi 16 septembre 2025 à 18h40"), the dossier's most recent entry |
| — | No séance publique date at the Assemblée nationale |
| — | No first-reading vote, no commission mixte paritaire, no promulgation |

Unchanged since the 2026-07-25 reading: the text is stalled at the special
committee stage. Secondary sources report that the text was taken off the
agenda of 7 and 9 October 2026; the dossier does not record it, so it is not
asserted here. No date can be announced.

### Defect found on the way

The July correction had reached the data files (`recyf.yaml`, `scope/fr.yaml`)
and the date fields of the France page, but not two sentences of its prose:
`countries-seo.ts` still told visitors the law was "awaiting promulgation,
expected mid-2026" on 2026-10-24, and the tracker row still said "projected
July 2026". Both rewritten to the verified stage with no date. The same scan
found the Netherlands page still "expecting" in Q3 2026 an entry into force
that happened on 15 August 2026. The guard now reads prose: a forward-looking
word followed by a period that has ended fails the test, whatever the
country's status.

## Obligations — texte n° 78 adopted by the Sénat (art. 14 to 16)

<!-- meta: theme=scoping,governance; type=reference; date=2026-07-25; surfaces=data; guard=none -->

- **Source read:** https://www.senat.fr/leg/tas24-078.pdf (75 p., pdftotext -layout)
- **Retrieved + read:** 2026-07-25 (art. 14, 15, 16 read in full).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| France states **4 objectives**, not the 10 letters of art. 21(2) | art. 14, 1° to 4° | "1° Prévoir que les organes de direction approuvent et supervisent… ; 2° Assurer la protection des réseaux et systèmes d'information, y compris en cas de recours à la sous-traitance ; 3° Mettre en place des outils et des procédures pour assurer la défense… et gérer les incidents ; 4° Garantir la résilience des activités." | ✅ |
| Governance AND training in the same 1° | art. 14, 1° | "…leurs membres ainsi que **les personnes exposées aux risques** devant être formés à la cybersécurité" | ✅ |
| **Training broader than NIS 2 art. 20(2)** | art. 14, 1° | the directive targets the management body; France adds « les personnes exposées aux risques » | ✅ |
| The decree sets the objectives AND **the conditions for producing the référentiel**: it does not adopt it | art. 14, last paragraph | "Un décret en Conseil d'État fixe les objectifs… Ce décret **détermine également les conditions d'élaboration, de modification et de publication d'un référentiel** d'exigences techniques et organisationnelles…" | ✅ |
| **ReCyF = presumption of conformity, not an obligation** | art. 15 al. 1 | "Les personnes… qui mettent en œuvre les exigences du référentiel… **ou qui mettent en œuvre tout autre référentiel reconnu comme équivalent** par l'autorité… **peuvent s'en prévaloir** auprès de celle-ci lors d'un contrôle… le cas échéant au moyen d'un **label de confiance** approuvé par elle." | ✅ |
| Otherwise, **reversed burden of proof** | art. 15 al. 2 | "Dans le cas contraire, ces personnes sont tenues de **démontrer** que les mesures qu'elles mettent en œuvre permettent de se conformer à ces objectifs." | ✅ |
| OIVs apply the référentiel + specific requirements of the Prime Minister | art. 16 | "Ces opérateurs mettent en œuvre sur leurs systèmes d'information d'importance vitale les exigences du référentiel mentionné à l'article 14… ainsi que les exigences spécifiques… fixées par le Premier ministre." | ✅ |

### French structure = THREE tiers

`loi` (4 objectives) → `décret en Conseil d'État` (detailed objectives + conditions
for drafting the référentiel) → `référentiel` (ReCyF, technical and
organisational requirements). **Neither the decree nor the final référentiel exists**: the law
is not promulgated.

### What it is worth commercially

Art. 15 is the best product argument of the French file: implementing
ReCyF, or a référentiel recognised as equivalent, ISO/CEI 27001:2022 being
explicitly accepted by ANSSI (ReCyF v2.5 p. 8), makes it possible to **rely on it
during an inspection**. Without that, the entity must demonstrate its conformity by
itself. It is a reversal of the burden of proof, not a comfort.

### State of our data

The `countries/fr.yaml` mapping was **verified as conforming** on these points: the
4 synthetic categories, the reference to the référentiel and the art. 15 mechanism
were already described correctly there. A single nuance corrected: the decree
does not adopt the référentiel, it sets the conditions for drafting it.

## Sanctions — texte n° 78, art. 37

<!-- meta: theme=sanctions; type=reference; date=2026-07-25; surfaces=data; guard=none -->

- **Source read:** https://www.senat.fr/leg/tas24-078.pdf (`pdftotext -layout`)
- **Retrieved + read:** 2026-07-26 (art. 37, I to VII read in full).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| It is the **commission des sanctions** that imposes it, not ANSSI | art. 37 I | "la **commission des sanctions** peut prononcer" | ✅ |
| Essential entities: **€10 M or 2 % of worldwide annual turnover excluding taxes, whichever is higher** | art. 37 I 1° | "ne peut excéder 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial, hors taxes, de l'exercice précédent **de l'entreprise à laquelle l'entité essentielle appartient**, le montant le plus élevé étant retenu" | ✅ |
| Important entities: **€7 M or 1.4 %**, whichever is higher | art. 37 I 2° | "ne peut excéder 7 millions d'euros ou 1,4 % du chiffre d'affaires annuel mondial total, hors taxes…" | ✅ |
| ⚠️ **The base is the turnover of the GROUP**, not of the entity | art. 37 I 1° | "de l'entreprise à laquelle l'entité essentielle appartient" | ✅ |
| **Public bodies are excluded from the fine** | art. 37 I 1° and 2° | "à l'exception des administrations de l'État et de ses établissements publics administratifs, des collectivités territoriales, de leurs groupements et de leurs établissements publics administratifs" | ✅ |
| ⚠️ **No cumulation with a GDPR fine from the CNIL** | art. 37 I, last paragraph | "Si les manquements relevés constituent également une violation du règlement (UE) n° 2016/679 … donnant lieu à une amende administrative prononcée par la **Commission nationale de l'informatique et des libertés** …, la commission des sanctions **ne peut prononcer de sanction sous forme d'amende administrative**." | ✅ |
| ⚠️ **The sanction on the director is a BAN ON EXERCISING MANAGEMENT RESPONSIBILITIES, not a fine** | art. 37 V | "La commission des sanctions peut, **en dernier recours**, **si le manquement persiste après que l'amende administrative** prévue au I ou au II du présent article **a été prononcée**, **interdire à toute personne physique exerçant les fonctions de dirigeant** dans l'entité essentielle **d'exercer des responsabilités dirigeantes dans cette entité**, jusqu'à ce que l'entité essentielle ait remédié au manquement. Ces dispositions **ne s'appliquent pas aux administrations**." | ✅ |
| Publication of the sanction possible, at the entity's expense | art. 37 VI | "elle peut exiger que l'entité concernée communique au public, par tout moyen adapté et **à ses frais**, le manquement constaté" | ✅ |

### Three corrections made to `transposition-references.ts` (FR)

**1. "Individual administrative fines on directors": FALSE.**

The bullet asserted, in the five locales: "the French transposition
explicitly authorises **ANSSI** to impose **individual fines** on members of the
management body, **on top of** the company-level fine".

Three errors in one sentence:
- it is not a **fine** but a **ban on exercising management
  responsibilities** (art. 37 V);
- it is not **on top of** the entity's fine but **after** it, as a last
  resort and on condition that the breach **persists**;
- it is not **ANSSI** that imposes it but the **commission des sanctions**.

⚠️ **The same bullet, word for word, exists for Italy.** The wording is
obviously templated across countries. D.lgs 138/2024 may genuinely have
exercised the option of art. 32(5) NIS 2, but after what was just found on the
French side, the Italian version must be verified in the Gazzetta before being
kept. Not done to date.

**2. "SecNumCloud qualification … is the recognised baseline for NIS 2
compliance": UNSOURCED.**

Search of the full text n° 78: **zero occurrences of "SecNumCloud"**.
The qualification exists and ANSSI promotes it, but it is not a NIS 2
compliance baseline instituted by the transposition. The bullet presented it as
an additional national requirement. Removed.

**3. "Scope extension to collectivités territoriales": HALF TRUE.**

The collectivités are indeed covered by the obligations, but art. 37 I
**explicitly excludes them from the scope of the administrative fine** (like the
State administrations and their EPAs), and art. 37 V excludes the
administrations from the ban on exercising management responsibilities. The bullet
only said the half that burdens, not the half that lightens. Reworded.

### And the substantive point

All these bullets were written **in the present indicative**, as
obligations in force. The text is not promulgated: it has not even been voted on
at first reading in the Assemblée. A French SME reading the "national
context" card could believe these rules enforceable today. The bullets are
now explicitly conditional and dated to the parliamentary stage.

## 🔴 Fabricated legal citation — « Loi n° 2024-1039 » (found and purged 2026-07-26)

<!-- meta: theme=statute; type=fabrication,test-pinned; date=2026-07-26; surfaces=data,prompt,doc-gen,marketing,test; guard=apps/ai-service/test/tabletop-prompt.test.ts -->

The ANSSI incident report template, that is **the PDF a French customer
sends to the regulator after an incident**, cited as legal basis:

> « Article 23(4)(a) Directive (UE) 2022/2555 — **Loi n° 2024-1039 du 21 mai 2024** »
> « conformément à **l'article 13 de la loi n° 2024-1039** du 21 mai 2024 portant
> transposition de la directive NIS2 »

**This law has nothing to do with cybersecurity.** Verification on Légifrance:
the **LOI n° 2024-1039 du 19 novembre 2024** aims « à renforcer les outils de
régulation des **meublés de tourisme** à l'échelle locale ». The date of 21 May
2024 is also false, and the « l'article 13 » invoked is invented.

Reminder of the context: France **has promulgated no transposition** of NIS 2
(see the "PJL Résilience — legislative status" section above). No French
transposition law could therefore exist to be cited.

### Where it had spread

| Surface | Effect |
|---|---|
| `apps/doc-gen/src/templates/incident-anssi.ts` | The **three** report headers (alert, notification, final report): the document handed to ANSSI |
| `apps/ai-service/src/routes/incident-draft.routes.ts` | Incident-draft writing prompt → **every generated draft** repeated it |
| `apps/ai-service/src/lib/remediation-prompt.ts` | Remediation prompt → same on the action plans |
| `apps/ai-service/src/lib/tabletop-prompt.ts` | Methodology table of the crisis exercises |
| 4 public `[locale]` pages (vs-sprinto, vs-drata, vs-dataguard, nis2-msp) | **Sales argument**: "our templates cite Loi n° 2024-1039", in 4 to 6 languages |
| `nis2-article-20-training` | Public SEO page, 3 languages |
| 2 tests | **Locked in** the fabrication: `expect(STATIC_METHODOLOGY).toMatch(/Loi n° 2024-1039/)` |

It is the widest propagation found in the whole audit: from a template
to the LLM prompts, then to the public marketing, then frozen by tests.

### What replaced the citation

The template now cites **Directive (EU) 2022/2555** and says explicitly
that no French transposition is promulgated, with the verified parliamentary
stage. The LLM prompts carry a negative instruction: "Ne JAMAIS citer
une loi française de transposition NIS 2 : elle n'existe pas."

The final report also carries the day's anchoring correction: "1 mois à compter de la
**remise de la notification**", not from awareness.

### Why it was the worst defect of the session

The other errors misled the customer. This one misled them **in front of their
regulator**: an incident report invoking a law on seasonal rentals
discredits itself at ANSSI's first reading. And the public sales
argument made it a strength.

Final check: **zero occurrences** of `2024-1039` remaining in
`packages/` and `apps/`, apart from the comment that documents the removal.


## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Cadre légal et normatif » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: assumed PROVISIONAL: a "law not promulgated" banner at the top of the block; art. 14 (4 objectives), art. 15 (ReCyF presumption / reversed burden), art. 37 (commission des sanctions, no cumulation with the CNIL, ban on exercising management responsibilities). To be realigned at promulgation. Rule: any fact absent from
this index is ABSENT from the block; enriching means verifying here first.
