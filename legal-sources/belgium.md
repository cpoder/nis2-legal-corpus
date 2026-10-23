# Belgium — legal sources (verified)

## Loi du 26 avril 2024 (NIS2 transposition) + AR du 9 juin 2024 (CyFun)

<!-- meta: theme=statute,framework; type=reference; date=2026-07-26; surfaces=data,docs; guard=none -->

- **Official citations:**
  - Loi du 26 avril 2024 établissant un cadre pour la cybersécurité des réseaux et
    des systèmes d'information d'intérêt général pour la sécurité publique (NIS2 BE).
  - Arrêté royal du 9 juin 2024 — **NUMAC 2024005260** — désignant le référentiel
    CyberFundamentals (CyFun) et l'ISO/IEC 27001:2022 comme cadres de conformité
    reconnus, et fixant les conditions d'agrément des CABs.
- **Official portals:** Moniteur belge — ejustice.just.fgov.be ; CCB — ccb.belgium.be ;
  CyFun — cyfun.eu / atwork.safeonweb.be.
- **Retrieved:** 2026-06-07 (CyFun framework verified directly from the official
  self-assessment tool + CAS; loi/AR citations carried from the sourced
  `cyfun.yaml` legal_basis — pin verbatim from the Moniteur belge on next pass).

### Verified facts

| Fact | Where | Note / quote | Status |
|---|---|---|---|
| NIS2 transposed by the Loi du 26 avril 2024 | Loi art. 30 (mesures) + art. 33 (notification) | "Les entités essentielles et importantes prennent les mesures techniques, opérationnelles et organisationnelles appropriées et proportionnées pour gérer les risques …" (cyfun.yaml legal_basis) | ✅ (pin verbatim from Moniteur) |
| AR 9 June 2024 designates **CyFun** (+ ISO 27001:2022) as recognised conformity frameworks | AR NUMAC 2024005260 | designation of CyFun + ISO/IEC 27001:2022 as equivalent recognised frameworks; CAB agrément conditions | ✅ |
| **Presumption of conformity** via accredited-CAB assessment | Loi art. 41–42 | a CAB report on CyFun **or** ISO 27001 grants a presumption of conformity to art. 30 (rebuttable on later inspection) | ✅ |
| **ISO/IEC 27001:2022 is an AR-recognised equivalent** | AR + cyfun.yaml | a BE org certified ISO 27001 by an accredited CAB need NOT switch to CyFun for NIS2 conformity (a BE particularity) | ✅ |
| Authority = **CCB** (NCCA since RD 16-10-2022) | CAS Introduction (read) | "By Royal Decree of 16 October 2022 the CCB is designated as the National Cybersecurity Certification Authority (NCCA)." | ✅ |
| **CyFun is a real, published, structured framework** | CyFun 2025 self-assessment tool (read) | NIST-CSF-2.0 shape: 6 functions (Govern/Identify/Protect/Detect/Respond/Recover) → categories → subcategories → requirement-level measures, scored on a 1–5 maturity scale | ✅ (directly verified) |
| Current edition = **CyFun 2025** (6th function GOVERN added) | CyFun 2025 (2025-10-01) | the 2023 edition (5 functions) stays applicable in transition; 2025 adds GOVERN (NIST CSF 2.0 alignment) | ✅ |
| Assurance levels + obligation deadlines | CAS + cyfun.yaml scope | levels **Basic / Important / Essential**; EE: self-assessment Basic/Important by **2026-04-18**, Essential **certification** by **2027-04-18**; EI: voluntary (benefits from the presumption of conformity) | ✅ |

### Product implication — BE is NATIVE (CyFun)

CyFun is a genuine, structured, assessable native framework — unlike NL (no
framework; see `netherlands.md`) and unlike PT today (QNRCS real but its control
set is pending publication; see `portugal.md`). The **CyFun 2025 ESSENTIAL
self-assessment tool** (official, cyfun.eu, v2025-10-21) was ingested verbatim into
the native assessment tree in
`packages/regulatory-data/src/nis2-mappings/frameworks/cyfun.yaml` — 6 functions /
22 categories / 90 subcategories / **218 requirement leaves** / 29 key measures,
zero invented controls. `cyfun.nativeAssessment = true` ⇒ a BE org's assessment +
conversational surfaces are native. The official **FR** CyFun edition makes the
tree maintainer-reviewable.

### Native tree authored in Dutch (Flemish) — 2026-06-08

Native trees are **mono-lingual** (the loader reads `title` with no locale
resolution — the IT tree is Italian, FR is French). BE's default locale is
Dutch (Flanders is the biggest BE target), so every node `title` + category
`rappel` in `cyfun.yaml` was set from the **official CCB CyFun 2025 NL ESSENTIAL
self-assessment tool**, matched by control ID:

| Fact | Where | Source | Status |
|---|---|---|---|
| Official Dutch (NL) CyFun control texts | `cyfun.yaml` objectives tree (titles + rappels) | `https://cyfun.eu/sites/default/files/2026-03/CyFun2025_NL_Self-Assessment_tool_ESSENTIAL_V1.xlsx` (retrieved 2026-06-08; sheets BEHEREN/IDENTIFICEREN/BESCHERMEN/DETECTEREN/REAGEREN/HERSTELLEN) | ✅ all 330 non-function nodes matched by ID; 6 functions set to the file's existing `label_nl` |

**Flags for CAB review:**
- **Function "Govern" term:** tree uses **Besturen** (matching the crosswalk `label_nl` already in `cyfun.yaml`); the NL self-assessment tool tab labels it **Beheren**. Reviewer to confirm the canonical CCB-NL term.
- **Version skew:** the tree was built from the **EN** tool `v2025-10-21`; the **NL** tool is `V1` (2026-03) and carries **5 controls the EN tree lacks** — `GV.RR-03.1`, `GV.RR-03.2`, `ID.AM-03.3`, `PR.PS-06.4`, `DE.CM-03.1`. These were **not** added (adding controls = structural change → separate EN-version reconciliation). Tree IDs left verbatim (incl. the PR's mixed zero-padding `ID.AM-3` vs the tool's `ID.AM-03`); matching used canonical (zero-stripped) IDs.
- **Mono-lingual Dutch:** FR-speaking (Wallonia) BE orgs see Dutch control titles (consistent with "Default BE → Dutch" + the IT=Italian / FR=French precedent). Per-locale tree resolution would need loader work — out of scope.

### Still to pin (next `verify-legal-source` pass)

- Verbatim **Loi du 26 avril 2024** art. 30 / 33 / 41–42 text from the Moniteur belge.
- Exact **AR du 9 juin 2024** designation article + the CAB agrément conditions.
- The official **DE** CyFun edition (for the German-speaking community).
- Reconcile the EN tree against the newer NL tool (the 5 added controls + zero-padding).

## Governance and conformity assessment — Loi du 26 avril 2024 (verified 2026-07-26)

<!-- meta: theme=governance; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** Moniteur belge of 17 May 2024, **numac 2024202344**, full
  text (194 078 characters) via
  `https://www.ejustice.just.fgov.be/cgi/article_body.pl?language=fr&caller=summary&pub_date=2024-05-17&numac=2024202344`
- **Retrieved + read:** 2026-07-26 (art. 31, 39, 40, 41 read verbatim)
- **Access:** ejustice blocks curl (ERR_CONNECTION_RESET) and the endpoints
  `change_lg.pl` / `summary.pl` even under Playwright. **Only `article_body.pl`
  answers**, and only from a real browser. The CCB (`ccb.belgium.be`) stays
  in 403 even under Chromium. Keep this URL, it is the only one that works.

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The management body **approves** the measures, **oversees** their implementation and **is liable for the infringement** of art. 30 by the entity | art. 31 § 1er | "Les organes de direction des entités essentielles et importantes **approuvent** les mesures de gestion des risques … **supervisent leur mise en oeuvre et sont responsables de la violation dudit article** par ces entités." | ✅ |
| Training: **bare** transposition of NIS 2 art. 20(2), **no certification** | art. 31 § 2 | "Les membres des organes de direction … **suivent une formation** pour que leurs connaissances et compétences soient suffisantes pour déterminer les risques et évaluer les pratiques de gestion des risques …" | ✅ |
| The CCB's role on training is to **encourage**, not to certify | article on the authority's missions, 13° | "**faciliter et encourager** l'organisation de formations en matière de cybersécurité pour les membres du personnel des entités essentielles ou importantes" | ✅ |
| ⚠️ **Only ESSENTIAL entities** are subject to the periodic assessment, **with a CHOICE between two routes** | art. 39 al. 1er | "**Les entités essentielles se soumettent** à une évaluation périodique de la conformité … : **1° Soit** en choisissant une évaluation périodique de la conformité visée à l'article 40 … **2° Soit** en se soumettant à une **inspection par l'autorité nationale de cybersécurité**" | ✅ |
| The route 1° assessment is done by an **ACCREDITED body**, not by the entity | art. 40 § 1er | "est effectuée par un **organisme d'évaluation de la conformité agréé par l'autorité nationale de cybersécurité** selon les conditions fixées par le Roi" | ✅ |
| ⚠️ **IMPORTANT entities: voluntary** | art. 41 | "Les entités importantes **peuvent, de manière volontaire**, se soumettre à une évaluation périodique de la conformité visée à l'article 39, alinéa 1er, 1°" | ✅ |
| The entity **chooses** its reference framework when the King sets several | art. 39 last al. | "Lorsque le Roi détermine plusieurs cadres de référence, **les entités essentielles choisissent le cadre de référence** auquel ils se soumettent." | ✅ |
| Security clearance required to audit critical infrastructures and the administration | art. 40 § 1er al. 2 | "l'organisme d'évaluation de la conformité ainsi que les personnes physiques qui évaluent la conformité **disposent d'une habilitation de sécurité**" | ✅ |

### Absences confirmed on the full text

| Term | Occurrences |
|---|---|
| « Safeonweb » | **0** |
| « CyberFundamentals » / « CyFun » | **0** |
| « auto-évaluation » | **0** |
| « certifié par le CCB » (training) | **0** |

The reference frameworks (CyFun, ISO/IEC 27001) and the cadence are left to the
**King**, hence to the royal decree of 9 June 2024, not to the act.

### The four product claims, settled

| # | What we displayed | Verdict |
|---|---|---|
| 1 | « management body training **certified by CCB** » | ❌ **FALSE.** Art. 31 § 2 transposes art. 20(2) without any certification, and the CCB's mission is to « faciliter et encourager » |
| 2 | « **Mandatory annual self-assessment** … **in-scope entities** must submit … through the **CCB portal** » | ❌ **FALSE on four points.** It is not a self-assessment (accredited body, art. 40); it is not annual but « périodique », cadence set by the King; it is not every entity in scope but **the essential ones only** (art. 39), the important ones being **voluntary** (art. 41); and no CCB portal is mentioned |
| 3 | « CyFun … entities in scope **may request** a CyFun audit » | ⚠️ **Half false.** For an **essential** entity it is not an option, it is an obligation with a choice between the accredited body and the authority's inspection. CyFun is not named in the act: the frameworks are set by the King and the entity chooses among them |
| 4 | « Safeonweb@Work … single entry point for registration, incident notification, and audit submission » | ⚠️ **Not established by the act** (0 occurrences). The platform probably exists in practice, but it is not instituted by the text, and the "single entry point for all three" has no basis in it |

### The Belgian fact worth selling

Art. 39 gives the essential entity a **choice** that few transpositions offer:
be assessed by an accredited body, **or** submit to the national authority's
inspection. It is a real trade-off, with a different cost and a different level
of exposure, and it is exactly the kind of decision where a tool that knows the
text is worth something.

And art. 31 § 1er is a **fifth model** of director liability: the management
body is « **responsable de la violation** » of art. 30 by the entity, with no cap
and no quantified mechanism in the act.


## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Cadre légal et normatif / Wettelijk en normatief kader (bilingue fr/nl) » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: Loi 26-04-2024: art. 30, art. 31, art. 33 (without deadlines, not pinned), AR 09-06-2024 (CyFun + ISO 27001:2022, presumption), art. 39-41 by classification. Sanctions: NOT verified in this index, so the paragraph is absent. Rule: any fact absent from
this index is ABSENT from the block; enriching means verifying here first.
