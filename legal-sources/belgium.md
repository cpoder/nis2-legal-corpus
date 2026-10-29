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

> **The last row is superseded (2026-10-29).** The CCB's own timeline, quoted
> in the section « The act in German » below, makes the 2026 step depend on
> the route (a CAB verification on the CyFun route, a self-assessment only on
> the inspection route) and scopes the 2027 Essential certification to the
> entities that must meet that level. Corrected on every surface the same day.

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

> **Superseded on 2026-10-28** by the section « CyFun 2025 tree reconciled node
> for node with the official tools, with the CCB's French and German titles »
> below: the tree is no longer mono-lingual (official French and German titles
> on every node), GV is « Beheren » as in the NL tool, the ids are canonical
> (ID.AM-03, not ID.AM-3) and the controls listed below as missing are in it.
> Kept as the record of what was decided on 2026-06-08.

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
- The official **DE** CyFun edition (for the German-speaking community). Done
  2026-10-28: the German booklets are read and every node carries its German title.
- Reconcile the EN tree against the newer NL tool (the 5 added controls + zero-padding).
  Done 2026-10-28, see the reconciliation section below.

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

## CyFun 2025 official editions in French, German and Dutch, downloaded 2026-10-28; nine nodes of our tree disagree with the Dutch tool

<!-- meta: theme=framework; type=reference,wrong-citation; date=2026-10-28; surfaces=data,ui,docs; guard=none -->

Downloaded from cyfun.eu on 2026-10-28 with a browser session (the CCB's
hosts refuse scripted requests; a visible Chromium was served normally).
Listing pages: cyfun.eu/{fr,de,nl,en}/cyberfundamentals-framework-2025.

| File | SHA-256 |
|---|---|
| `de__CyFun2025_Booklet-BASIC_D.pdf` | `21db9824c13bb57ff8d1f4d91249296b1d78a2e5a1d142106602c2456bd06327` |
| `de__CyFun2025_Booklet-ESSENTIAL_D.pdf` | `e624bc41af796c59045c655631870be600ebb89a1cd414eeb75adc3a701d6883` |
| `de__CyFun2025_Booklet-IMPORTANT_D.pdf` | `6e42f8038be74df1257c16d9b525fe2be93e8ed6eb8fbabb28d79fe5a3c7ebc2` |
| `en__CyFun2025_Self-Assessment_tool_ESSENTIAL_v3.1.xlsx` | `4c55e08d5fedc57040132df0aa8c49463a42d9a84ec0906f7a3f67282f1507a2` |
| `fr__02_CCB_CyFun2025_Booklet-BASIC_F_pr3.pdf` | `2e301099ef57557f3df8270b12b0a8f26830a87e3a5e9d50241c785b0e2a54a2` |
| `fr__03_CCB_CyFun2025_Booklet-IMPORTANT_F_pr3.pdf` | `635f2b0d0f41e0150f1a72a031ff04b74e10eaf825153c821fcddb8448573c03` |
| `fr__04_CCB_CyFun2025_Booklet-ESSENTIAL_F_pr3.pdf` | `b059f8206b7abbc1662da2d68b900bf64da0356ad6fda266abbf4197d76f11b3` |
| `fr__CyFun2025_FR_Self-Assessment_tool_BASIC_v2_0.xlsx` | `274d4970eac7ba2900d91644d8f440cab79062f47f498bcc24d242befd62fef9` |
| `fr__CyFun2025_FR_Self-Assessment_tool_ESSENTIAL_v1.xlsx` | `bc93b8cf552f0ec266d9803c8dc96d05a7fce07a98a1eb4c080b11a8a15d9c24` |
| `fr__CyFun2025_Self-Assessment_tool_IMPORTANT_v2.xlsx` | `01c9712edf21243e48439d0b28bffec758b416df92d45cffc49d1fe77cc23f86` |
| `fr__CyFun2025_mapping_2026-09-23.xlsx` | `9924c2b45c9532890e95136da703d2feffd14f9b24b8e537c230a60e358bcc08` |
| `fr__CyFun_CAS_Clarifications_Version_2026-09-14.pdf` | `e8cb53bd5b6c2461ee0928f386c25c3868f48493c0112ab564132b5470a76283` |
| `nl__CyFun2025_NL_Self-Assessment_tool_ESSENTIAL_V1.xlsx` | `3453f385eb20913d4d7ba1b58475a4707b46143d756f3cb64dd93ec6b1e73e62` |

What the French and German editions give us:
- **French**: the three 2025 booklets (BASIC, IMPORTANT, ESSENTIAL, `_F_pr3`,
  2026-07) and the ESSENTIAL self-assessment tool in French
  (`CyFun2025_FR_Self-Assessment_tool_ESSENTIAL_v1.xlsx`, 2026-06), with the
  CCB's own French names: functions GOUVERNER, IDENTIFIER, PROTÉGER, DÉTECTER,
  RÉPONDRE, RÉTABLIR; categories such as « Contexte Organisationnel (GV.OC) »;
  every subcategory and requirement. It covers every id of our tree.
- **German**: the three 2025 booklets (`_D`, 2026-02). The German page links
  the English self-assessment tools: no German xlsx exists. The booklet text
  extracts with detached drop caps ("GV.OC-01.1 D" then "er Auftrag ...").
- The four editions agree on the requirement set (217 requirements in the NL
  V1, FR v1, mapping 2026-09-23; 218 ids in EN v3.1, one of them a typo).

**Our tree against the official Dutch tool it was built from**
(`CyFun2025_NL_Self-Assessment_tool_ESSENTIAL_V1.xlsx`, still the current
Dutch file on 2026-10-28):

| Official id (NL V1) | Level | In our tree | Defect |
|---|---|---|---|
| DE.CM-03.1 | Basic | leaf `DE.CM-03` carrying the subcategory's own id and title | the requirement text ("Er moeten tools voor eindpunt- en netwerkbeveiliging worden geïmplementeerd ...") appears nowhere |
| PR.PS-06.4 | Essential | absent | requirement missing ("Voor geplande wijzigingen aan de kritieke systemen ... analyse van de beveiligingsimpact ... in een aparte testomgeving") |
| ID.AM-03.3 | Essential, **Kernmaatregel** | `ID.AM-03-3` | non-canonical id |
| GV.RR-03.1, GV.RR-03.2 | Important | `GV.RR-03-1`, `GV.RR-03-2` | non-canonical ids (chosen in #364 to undo a duplicate) |
| ID.AM-04 | Important | `ID.AM-4` | non-canonical id |
| ID.AM-05, ID.AM-05.1 | Basic | `ID.AM-5`, `ID.AM-5.1` | non-canonical ids |
| GV.SC-10 | Essential | `GV.SC-010` | non-canonical id |

A Belgian organisation's assessment therefore lacked one Basic and one
Essential requirement, and showed seven ids an auditor will not find in the
CCB's documents. Renaming ids touches stored scores, so the fix is a
reconciliation with a data migration, scheduled with the French and German
titles (one change across the tree, the loader, the assessment, the
documents and the exports).

## CyFun 2025 tree reconciled node for node with the official tools, with the CCB's French and German titles (2026-10-28)

<!-- meta: theme=framework; type=wrong-citation,test-pinned,i18n; date=2026-10-28; surfaces=data,ui,prompt,doc-gen,test; guard=packages/regulatory-data/test/cyfun-official-tree.test.ts -->

Every node of `packages/regulatory-data/src/nis2-mappings/frameworks/cyfun.yaml`
was compared with the official CyFun 2025 tools listed in the previous section
(same files, same SHA-256), and the tree now carries the CCB's own French and
German title of every node next to the Dutch one (`title_fr`, `title_de`,
`rappel_fr`, `rappel_de`). The official id set is pinned in
`packages/regulatory-data/test/fixtures/cyfun-2025-official-ids.json`,
snapshotted from `CyFun2025_NL_Self-Assessment_tool_ESSENTIAL_V1.xlsx`.

### 218 requirements, not 217

The previous section counted 217 requirements in the NL, FR and mapping files
and called the English tool's 218th id a typo. The 218th is real: each tool
misprints one requirement id, and an id pattern that only accepts the dotted
form drops it.

| File | Prints | Canonical |
|---|---|---|
| NL tool V1, sheet IDENTIFICEREN, row 12 | `ID.AM-03-2:` | ID.AM-03.2 |
| FR tool v1, sheet DÉTECTER, row 9 | `DE.CM-03-1:` | DE.CM-03.1 |
| CCB mapping 2026-09-23, row 131 | `DE.CM-03-1` | DE.CM-03.1 |
| German booklets (Version 2025-10-01) | `GV.RR-03-1`, `GV.RR-03-2`, `ID.AM-03-2`, `ID.AM-03-3`, `DE.CM-03-1`, `DE.CM-03-2`, `PR.PS-06-4`, `GV.SC-010` | dotted, zero-padded |

Read with those typos, the NL tool, the FR tool, the EN tool v3.1 and the
mapping carry the same 218 requirement ids with the same levels and key
measures, and the mapping says so itself:

| Label cell (verbatim) | Value cell |
|---|---|
| Controls for CyFun® BASIC | 34 |
| Specific Controls for CyFun® IMPORTANT | 99 |
| Specific Controls for CyFun® ESSENTIAL | 85 |
| Number of Key Measures in CyFun® BASIC | 13 |
| Total Number of Key Measures in CyFun® IMPORTANT | 22 |
| Total Number of Key Measures in CyFun® ESSENTIAL | 29 |
| TOTAL Controls for CyFun® IMPORTANT | 133 |
| TOTAL Controls for CyFun® ESSENTIAL | 218 |

(`CyFun2025_mapping_2026-09-23.xlsx`, sheet « CyFun® 2025 », rows 163 to 168.)

So the tree is 6 functions, 22 categories, 90 subcategories and 218
requirements: 336 nodes. The German booklets of 2025-10-01 are where our old
hyphenated ids came from.

### What the tree had wrong, and what it says now

| Node (position) | Before | After | Source |
|---|---|---|---|
| function GV | « Besturen (GV) » | « Beheren (GV) » | NL tool tab and summary sheet: `BEHEREN` |
| GV.RR-03 requirements | `GV.RR-03-1`, `GV.RR-03-2` | `GV.RR-03.1`, `GV.RR-03.2` | NL, FR, EN tools; mapping |
| GV.SC subcategory 10 | `GV.SC-010` | `GV.SC-10` | idem |
| ID.AM subcategory 3 | `ID.AM-3` | `ID.AM-03` | idem |
| ID.AM-03 requirements | `ID.AM-03-2`, `ID.AM-03-3` (key measure) | `ID.AM-03.2`, `ID.AM-03.3` | FR, EN tools; mapping (the NL tool misprints the first) |
| ID.AM subcategory 4 | `ID.AM-4` | `ID.AM-04` | NL, FR, EN tools; mapping |
| ID.AM subcategory 5 and its requirement | `ID.AM-5`, `ID.AM-5.1` | `ID.AM-05`, `ID.AM-05.1` | idem |
| fourth leaf under PR.PS-06 (Essential) | id `PR.PS-06`, the subcategory's own text | `PR.PS-06.4`: « Voor geplande wijzigingen aan de kritieke systemen van de organisatie moet een analyse van de beveiligingsimpact worden uitgevoerd in een aparte testomgeving, voordat de wijziging wordt doorgevoerd in de operationele omgeving. » | NL tool |
| first leaf under DE.CM-03 (Basic) | id `DE.CM-03`, the subcategory's own text | `DE.CM-03.1`: « Er moeten tools voor eindpunt- en netwerkbeveiliging worden geïmplementeerd om het gedrag van eindgebruikers te monitoren op gevaarlijke activiteiten. » | NL tool |
| RS.AN-06.1, RS.AN-07.1, RS.AN-08.1 | `important`, applicable to EI and EE | `essential`, EE only | NL, FR and EN tools and the mapping all grade them Essential; the IMPORTANT tool has no RS.AN category |

Every other Dutch title, category statement, level and key-measure flag
matched the NL tool verbatim. The three RS.AN levels had been noticed on
2026-07-02 and patched in the wrong place: the conformity engine excluded
RS.AN at Important by hand "for official workbook parity", and two tests
pinned the wrong counts (34 / 102 / 82, "20 + RS.AN"). The levels are fixed
in the data, the hand exclusion is gone, and the verdicts are unchanged.

### Two defects of the official files, recorded and not copied

- **NL tool V1, GV.OC-03 and GV.OC-03.1** repeat the Dutch text of GV.RM-03 and
  GV.RM-03.1 (« Activiteiten en resultaten op het gebied van
  cyberbeveiligingsrisicobeheer worden opgenomen in de risicobeheerprocessen van
  de onderneming »; « Als onderdeel van de organisatiebrede
  risicobeheerstrategie moet een uitgebreide strategie ... »). The French,
  German and English editions have the legal and regulatory requirement there:
  « Les exigences légales et réglementaires relatives à l'information et à la
  cybersécurité doivent être identifiées et mises en œuvre. » (FR tool),
  « Gesetzliche und behördliche Anforderungen an die Informations- und
  Cybersicherheit werden ermittelt und umgesetzt. » (DE booklet). No other
  official Dutch text exists, so the tree keeps the NL tool's words, with a
  comment on both nodes. GV.OC-03.1 is a Basic requirement: a Dutch-reading
  entity is assessed there on the risk strategy a second time. Worth reporting
  to the CCB.
- **FR tool v1** leaves 8 cells in English (ID.RA-02.1, ID.RA-05, ID.IM-03,
  ID.IM-04, PR.AA-01, RS.MA, and the PR.PS and PR.IR statements), leaves the
  ID.AM-03 subcategory, PR.AA-04 and DE.CM-09.4 empty, and prints DE.CM-09.4's
  text under DE.AE-02.2. The French text of those cells comes from the French
  IMPORTANT tool v2 where it has the node, else from the French ESSENTIAL
  booklet (pr3): PR.AA-04, DE.CM-09.4, and DE.AE-02.2 « L'organisation doit,
  lorsque cela est possible, mettre en œuvre des mécanismes automatisés afin
  d'évaluer et d'analyser les événements détectés. » Each fallback was checked
  against the booklet.

### Where each language comes from

- **Dutch** (`title`, `rappel`): the NL tool V1, verbatim, whitespace
  normalised (a soft hyphen in DE.CM-06.2 is the tool's own).
- **French** (`title_fr`, `rappel_fr`): the FR tool ESSENTIAL v1, verbatim,
  with the fallbacks above. Category names keep the tool's capitals
  (« Stratégie De Gestion Des Risques »).
- **German** (`title_de`, `rappel_de`): the ESSENTIAL booklet, Version
  2025-10-01 (no German self-assessment tool exists). The text was cut with
  the PDF's own font runs (a requirement is set in one style, its guidance in
  another), line-break hyphens resolved against the booklets' own vocabulary,
  three lines whose word spacing the extraction lost restored from the
  page layout, and compared with the IMPORTANT and BASIC booklets (279 texts
  identical) and the PDF bookmarks (90 subcategory titles). The booklet prints
  category names in capitals only; they are stored in German orthographic
  case, letters unchanged (« ORGANISATORISCHER KONTEXT » → « Organisatorischer
  Kontext »; GV.SC unbroken as the IMPORTANT booklet prints it, «
  Cybersicherheitsrisikomanagement in der Lieferkette »). ID.RA-01.3 keeps the
  ESSENTIAL booklet's « Prozess ein , der » (the IMPORTANT booklet has « ein,
  der »).
- **Functions**: the tool tabs in Dutch and French (`BEHEREN … HERSTELLEN`,
  `GOUVERNER … RÉTABLIR`), the booklet page headers in German (Regeln,
  Identifizieren, Schützen, Erkennen, Reagieren, Wiederherstellen).

### What the product does with it

- Stored ids follow through migration `0110_cyfun_canonical_ids` (scores under
  `framework_key = 'cyfun'`; for Belgian organisations, remediation tasks, the
  conversational derivation and running sessions, and KPI ids that no longer
  exist). The two placeholder leaves keep the score given against the
  subcategory's text, now under the requirement that stood in their place:
  those two rows deserve a second look.
- A French- or German-speaking Belgian entity reads the official edition of
  its language in the assessment tree, the summary, the gap list, the
  verdict's key measures and categories, the dashboard's function cards and
  the CSV/XLSX export; the conversational assessment asks in that language and
  its catalogue quotes the CCB's text. Every other language keeps the Dutch
  original, never a translation of ours.
- The French and German document prompts name every function and category as
  the CCB does (`apps/ai-service/test/cyfun-prompt-anchor-parity-fr-de.test.ts`);
  the Dutch one says « Beheren ».
- Not changed: the Belgian marketing pages and the Dutch Foundations course
  still say « Besturen »; the marketing page already says the tool calls it
  « Beheren ».

## The act in German: no official translation, an unofficial coordination of 23 October 2026, and the CCB's German vocabulary (verified 2026-10-29)

<!-- meta: theme=statute,registration,incident,sanctions,framework; type=reference,delivery,i18n; date=2026-10-29; surfaces=marketing,data; guard=apps/web/test/country-belgium-de-fiche.test.ts -->

The question: does an official German translation of the loi du 26 avril 2024
exist? Read on 2026-10-29 in a visible Chromium (Playwright, no stealth plugin,
nothing spoofed). The Staatsblatt search form (`cgi/rech.pl`, posting to
`rech_res.pl`), `article_body.pl` and the Justel ELI page all answered.

**Answer: there is no German translation of the act as adopted ("Deutsche
Übersetzung"). There is, since 23 October 2026, an unofficial coordination in
German ("inoffizielle Koordinierung in deutscher Sprache") established by the
federal German translation service in Malmedy and published in the
Belgisches Staatsblatt.**

- **The search.** Belgisches Staatsblatt, Ausfertigungsdatum 2024-04-26,
  documents in German only: 18 results. For this act, a single entry, the
  coordination; six other acts of the same date carry a "Deutsche
  Übersetzung". Title words « Cybersicherheit », German only: 6 documents, none
  of them a German text of the royal decree of 9 June 2024; Ausfertigungsdatum
  2024-06-09, German only: one unrelated decree. **No German text of the royal
  decree of 9 June 2024 exists.**
- **The publication.** Belgisches Staatsblatt of 23 October 2026, Numac
  **2026007305**, under « Föderaler Öffentlicher Dienst Inneres »:
  `https://www.ejustice.just.fgov.be/cgi/article_body.pl?language=de&caller=summary&pub_date=2026-10-23&numac=2026007305`
  (194 399 characters).
  - Title, verbatim: « 26. APRIL 2024 - Gesetz zur Festlegung eines Rahmens
    für die Cybersicherheit von Netz- und Informationssystemen von allgemeinem
    Interesse für die öffentliche Sicherheit. - Inoffizielle Koordinierung in
    deutscher Sprache »
  - Status, verbatim: « Der folgende Text ist die inoffizielle Koordinierung in
    deutscher Sprache des Gesetzesvom 26. April 2024 zur Festlegung eines
    Rahmens für die Cybersicherheit von Netz- und Informationssystemen von
    allgemeinem Interesse für die öffentliche Sicherheit, so wie es abgeändert
    worden ist durch das Gesetz vom 19. Dezember 2025 über die Resilienz
    kritischer Einrichtungen. Diese inoffizielle Koordinierung in deutscher
    Sprache ist von der Zentralen Dienststelle für Deutsche Übersetzungen in
    Malmedy erstellt worden. » (« Gesetzesvom » is the Staatsblatt's own missing
    space.)
  - A translation proper reads differently. Numac 2026001361 (27 February
    2026), another act of 26 April 2024: « Der folgende Text ist die deutsche
    Übersetzung des Gesetzes vom 26. April 2024 [...]. Diese Übersetzung ist
    von der Zentralen Dienststelle für Deutsche Übersetzungen in Malmedy
    erstellt worden. » The NIS2 act has no such entry.
- **What the product may say.** The act was adopted and published in French
  and Dutch (Moniteur belge of 17 May 2024, Numac 2024202344). A German text
  exists as an unofficial coordination of the federal translation service; its
  terms are the Belgian State's German wording, and the German pages use them,
  labelled for what they are. Never "the official German translation".

### The German terms, verbatim, cross-checked with the French text

French text read the same day in Justel,
`https://www.ejustice.just.fgov.be/eli/loi/2024/04/26/2024202344/justel`
(consolidated, « mise à jour au 19-01-2026 », « Entrée en vigueur : 18 octobre
2024 »). Every number below is identical in both texts.

| Art. | German (coordination of 23 October 2026) | French (Justel) |
|---|---|---|
| title | « Gesetz zur Festlegung eines Rahmens für die Cybersicherheit von Netz- und Informationssystemen von allgemeinem Interesse für die öffentliche Sicherheit » | « Loi établissant un cadre pour la cybersécurité des réseaux et des systèmes d'information d'intérêt général pour la sécurité publique » |
| 3 § 1 | the act applies to entities of a type in Annex I or II that « nach Artikel 2 des Anhangs der Empfehlung 2003/361/EG als mittlere Unternehmen gelten » or exceed those thresholds | |
| 3 § 3 | regardless of size: public electronic communications providers, « Vertrauensdiensteanbietern », « Namenregistern der Domäne oberster Stufe und Domänennamensystem-Diensteanbietern », designated entities, public administration entities | |
| 4 § 2 Nr. 2 | DNS, TLD, cloud, data centre, CDN, « Anbieter von verwalteten Diensten », managed security, marketplaces, search engines, social networks: under the Belgian act « wenn sie [...] ihre Hauptniederlassung in Belgien haben » | |
| 9, 10 | « Als wesentliche Einrichtungen gelten: », « Als wichtige Einrichtungen gelten: » | entités essentielles, entités importantes |
| 9 Nr. 1 | « Einrichtungen der in Anlage I aufgeführten Art, die die in Artikel 2 Absatz 1 des Anhangs der Empfehlung 2003/361/EG vorgesehenen Schwellenwerte für mittlere Unternehmen überschreiten » | |
| 9 Nr. 4 | « Einrichtungen der öffentlichen Verwaltung, die vom Föderalstaat abhängen » | |
| 10 Nr. 1 | « Einrichtungen der in Anlage I oder II aufgeführten Art, die nicht als wesentliche Einrichtungen im Sinne von Artikel 9 gelten » | |
| Anlage I Nr. 9 | « Verwaltung von IKT-Diensten (Business-to-Business) », « Anbieter verwalteter Dienste » (defined in art. 8 Nr. 38) | |
| 13 § 1 | « Innerhalb fünf Monaten nach Inkrafttreten des Gesetzes oder nach der in Artikel 11 erwähnten Einstufung lassen sich wesentliche Einrichtungen, wichtige Einrichtungen und Einrichtungen, die Domänennamen-Registrierungsdienste erbringen, bei der nationalen Cybersicherheitsbehörde gemäß den von dieser Behörde festgelegten praktischen Modalitäten registrieren » | « Dans les cinq mois suivant l'entrée en vigueur de la loi ou l'identification visée à l'article 11, [...] s'enregistrent auprès de l'autorité nationale de cybersécurité selon les modalités pratiques fixées par cette autorité » |
| 14 § 1 | DNS, TLD, registrars, cloud, data centres, CDN, managed and managed security services, marketplaces, search engines, social networks: « Innerhalb zweier Monate nach Inkrafttreten des Gesetzes » | |
| 15 § 1 | « Der König benennt die nationale Cybersicherheitsbehörde. » | |
| 16 | the national authority performs, among others, the tasks « des nationalen CSIRT » | |
| 17 Nr. 13 | « Erleichterung und Förderung der Organisation von Schulungen zum Thema Cybersicherheit für Personalmitglieder von wesentlichen oder wichtigen Einrichtungen » | « faciliter et encourager » (above) |
| 30 § 3 | eleven measures, the last « Konzepte zur koordinierten Offenlegung von Schwachstellen » | |
| 31 § 1 | « Die Leitungsorgane wesentlicher und wichtiger Einrichtungen billigen die von diesen Einrichtungen zur Einhaltung von Artikel 30 ergriffenen Risikomanagementmaßnahmen im Bereich der Cybersicherheit, überwachen ihre Umsetzung und sind für Verstöße gegen diesen Artikel durch die betreffenden Einrichtungen verantwortlich. » | |
| 34 § 1 | « Wesentliche und wichtige Einrichtungen unterrichten unverzüglich das nationale CSIRT über jeden erheblichen Sicherheitsvorfall » | |
| 35 § 1 Nr. 1 | « innerhalb vierundzwanzig Stunden nach Kenntnisnahme des erheblichen Sicherheitsvorfalls, eine Frühwarnung » | « une alerte précoce » |
| 35 § 1 Nr. 2 | « innerhalb zweiundsiebzig Stunden nach Kenntnisnahme des erheblichen Sicherheitsvorfalls, eine Meldung über den Sicherheitsvorfall » | « une notification d'incident » |
| 35 § 1 Nr. 3 | « auf Ersuchen des nationalen CSIRT oder gegebenenfalls der relevanten sektorspezifischen Behörde einen Zwischenbericht » | « un rapport intermédiaire » |
| 35 § 1 Nr. 4 | « spätestens einen Monat nach Übermittlung der Meldung des Sicherheitsvorfalls gemäß Nr. 2 einen Abschlussbericht » | « un rapport final au plus tard un mois après la présentation de la notification d'incident visée au 2° » |
| 35 § 1 Nr. 5 | « einen Fortschrittsbericht zu diesem Zeitpunkt und einen Abschlussbericht innerhalb eines Monats nach endgültiger Abhandlung des Sicherheitsvorfalls » | « un rapport d'avancement » |
| 35 § 2 | a trust service provider notifies within 24 hours instead of 72 | idem |
| 36 § 1 | the CSIRT answers « nach Möglichkeit innerhalb vierundzwanzig Stunden nach Eingang der Frühwarnung » | |
| 39 | « Wesentliche Einrichtungen unterziehen sich einer regelmäßigen Bewertung der Konformität », by an Art. 40 assessment or « der Kontrolle durch die nationale Cybersicherheitsbehörde » | (above) |
| 41 | « Wichtige Einrichtungen können sich freiwillig [...] unterziehen » | (above) |
| 42 | « wird bis zum Gegenbeweis davon ausgegangen, dass sie die in Artikel 30 erwähnten Verpflichtungen erfüllen » | |
| 58 | administrative measures (« administrative Maßnahmen »), no fine | « mesures administratives » |
| 59 Nr. 4 | « 500 bis 7.000.000 EUR oder 1,4 Prozent des gesamten weltweiten Jahresumsatzes [...], wobei der höhere Betrag maßgeblich ist », important entities | « 500 à 7.000.000 d'euros ou 1,4 pour cent » |
| 59 Nr. 5 | « 500 bis 10.000.000 EUR oder 2 Prozent [...] », essential entities; « Bei Rückfälligkeit aufgrund der gleichen Verstöße binnen einer Frist von drei Jahren wird die administrative Geldbuße verdoppelt. » | « 500 à 10.000.000 d'euros ou 2 pour cent » |
| 62 | the measures and fines of arts. 59 and 60 do not apply to public administration entities | « ne s'appliquent pas aux entités faisant partie du secteur de l'administration publique » |
| 75 | « Der König legt die Fristen fest, innerhalb deren die wesentlichen Einrichtungen ihre ersten regelmäßigen Konformitätsbewertungen gemäß Artikel 39 durchführen. » | |
| 97 | « Das Gesetz vom 7. April 2019 [...] wird aufgehoben. » | « est abrogée » |
| 98 | « Vorliegendes Gesetz tritt am 18. Oktober 2024 in Kraft. » | « entre en vigueur le 18 octobre 2024 » |

The coordination integrates the law of 19 December 2025 on the resilience of
critical entities (B.S. 19 January 2026), for instance in arts. 3 § 4, 15 § 2,
37 § 5, 40 § 1 and the new 75/1. Justel lists the same amending law (« Loi du
19-12-2025 publié le 19-01-2026 », articles 3; 75/1; 8; 15; 25; 28; 37; 40; 45;
67; 68). Not read further here.

### The CCB in German

- **Name.** The German translations in the Staatsblatt call the CCB the
  « Zentrum für Cybersicherheit Belgien », abbreviated « ZCB »: Numac
  2023042272 (22 May 2023), « 16. FEBRUAR 2022 - Königlicher Erlass zur
  Abänderung des Königlichen Erlasses vom 10. Oktober 2014 zur Schaffung des
  Zentrums für Cybersicherheit Belgien - Deutsche Übersetzung », and in its
  body « Das ZCB wird als nationales Koordinierungszentrum [...] ». The CCB's
  German site (`https://ccb.belgium.be/de`) heads its pages « ZENTRUM FÜR
  CYBERSICHERHEIT BELGIEN » and writes both « ZCB » and « CCB » (« kostenlose
  CCB-Dienste »). The product keeps the acronym CCB, the one the authority
  uses in all its languages, and writes the German name in full.
- **Designation.** `https://atwork.safeonweb.be/de/nis2` (the CCB's NIS2 page
  in German, read 2026-10-29): « Der neue Text wird vom Königlichen Erlass vom
  9. Juni 2024 begleitet, der seine Bestimmungen ausführt, zum Beispiel durch
  die Benennung des Zentrums für Cybersicherheit Belgien (ZCB) als nationale
  Cybersicherheitsbehörde. » The CCB's German regulation page,
  `https://ccb.belgium.be/de/verordnung/nis2`, names the act with the
  coordination's title and calls it « NIS2-Gesetz ».
- **Registration.** Same Safeonweb page: « In der Praxis erfolgt diese
  Registrierung über ein Onlineformulars, das hier auf Safeonweb@Work
  ausgefüllt werden muss. » and « Da das Inkrafttreten für den 18. Oktober 2024
  vorgesehen ist, muss die Registrierung bis spätestens dem 18. März 2025
  abgeschlossen sein. » (its timeline section misprints « 18. März 2024 »; five
  months after 18 October 2024 is 18 March 2025).
- **Notification.** Same page: « In der Praxis erfolgt die Meldung über unsere
  Meldeplattform. »
- **CyFun.** Same page: « rät das Zentrum für Cybersicherheit Belgien allen
  NIS2-Einrichtungen, das CyberFundamentals (CyFun®) Framework zu verwenden,
  das all diese Punkte abdeckt. Eine validierte Umsetzung des
  CyFun®-Frameworks ermöglicht es NIS2-Einrichtungen von einer
  Konformitätsvermutung zu profitieren. » For the supply chain: « rät das
  Zentrum für Cybersicherheit Belgien allen Organisationen, die sich in der
  Lieferkette einer NIS2-Einrichtung befinden könnten, zumindest die im
  CyberFundamentals (CyFun®) Framework Level Basic festgelegten Maßnahmen
  einzuhalten. Eine NIS2-Einrichtung könnte theoretisch die Einhaltung eines
  bestimmten CyFun®-Levels ihren direkten Zulieferern oder Dienstleistern
  auferlegen. »
- **The first conformity assessments of essential entities** (same page,
  « Zeitleiste »; the act leaves these deadlines to the King, art. 75):
  - CyFun route: by **18 April 2026**, a verification at level Basic or
    Important by an accredited and authorised CAB. An entity that must meet
    Essential has twelve more months, to **18 April 2027**, for the Essential
    certification; one that must meet Important may do Basic first and
    Important by 18 April 2027.
  - ISO/IEC 27001 route: by 18 April 2026, the scope, the Statement of
    Applicability and the last internal audit to the ZCB; the certification by
    18 April 2027.
  - Inspection route: by 18 April 2026, « Einreichung der Selbstbewertung von
    CyFun® Sicherheitsstufe Basic oder Important » (or the ISO documents); by
    18 April 2027, « Bericht über den Konformitätsfortschritt ».
  - « Eine wesentliche Einrichtung könnte beispielsweise auf der Grundlage
    einer umfassenden Risikoanalyse die Verwendung des CyFun®-Levels
    "Important" rechtfertigen. » An essential entity is therefore not always
    an entity at level Essential.

### CyFun in German: the level word and the GV function

The German booklets (`CyFun2025_Booklet-BASIC_D.pdf` and
`CyFun2025_Booklet-ESSENTIAL_D.pdf`, Version 2025-10-01, re-downloaded
2026-10-29 from `https://cyfun.eu/de/cyberfundamentals-framework-2025` with
the SHA-256 recorded above):

- **Levels.** « Der CyberFundamentals Framework verwendet ein proportionales
  Sicherheitsmodell mit drei Sicherheitsstufen: Basic, Important und
  Essential, dem eine Einstiegsstufe vorangestellt ist: Small. » The German
  word is **Sicherheitsstufe**. « Reifegrad » is the 1 to 5 maturity score of
  the self-assessment (« Reifegrad der Politik », « Reifegrad der
  Implementierung »), another thing. The CCB's pages
  `https://cyfun.eu/{en,fr,nl}/cyberfundamentals-framework-2025`, read the same
  day, use « assurance level 'Basic' », « Le niveau d'assurance « Basic » » and
  « Het zekerheidsniveau Basic ».
- **Functions.** Page headers REGELN, IDENTIFIZIEREN, SCHÜTZEN, ERKENNEN,
  REAGIEREN, WIEDERHERSTELLEN, as in `label_de` of cyfun.yaml. Two variants of
  the CCB's own German, recorded and not followed: the booklet's introduction
  calls RS « Antworten », and the cyfun.eu German page describes the six sheets
  of the tool as « Steuern, Identifizieren, Schützen, Erkennen, Reagieren,
  Wiederherstellen » (that page links the English tools; there is no German
  tool). The product follows the booklet headers.

### Delivered on these facts (2026-10-29)

The German fiche `BELGIUM_DE` (`/de/eu/belgium`), the `/de-be` cluster, the
German law title in `TRANSPOSITION_REFERENCES_BE.lawName.de` (until then our
own translation, « zur Schaffung eines Rahmens [...] der Netze und
Informationssysteme »), and the CCB's word for CyFun's levels in the four
languages of the framework mapping table on the Belgian fiches (it said
« maturity level », « niveau de maturité », « maturiteitsniveau », « Reifegrad »).

### Found while reading, not corrected in this change

Recorded so that one pass corrects every surface at once (ADR 0041):

- **Fines cited to art. 58.** Art. 58 lists administrative measures; both
  ceilings are in art. 59 (Nr. 4 important, Nr. 5 essential). The Dutch and
  French pages `/be/essentiele-belangrijke-entiteiten`,
  `/be/incident-melding-ccb`, `/fr-be/entites-essentielles-importantes` and
  `/fr-be/notification-incident-ccb` cite « art. 58 » for the essential
  ceiling, as do `packages/regulatory-data/src/nis2-mappings/scope/be.yaml` and
  `countries/be.yaml`; the CyFun dashboard subtitle says « art. 58-59 ».
- **Public administration.** Art. 9 Nr. 4 makes essential only the public
  administration entities that depend on the federal state; a regional one is
  in scope when identified under art. 11 § 2 (art. 3 § 3 Nr. 3 lit. b).
  `/fr-be/entites-essentielles-importantes` writes « l'administration publique
  centrale et régionale fait partie des entités essentielles (art. 9 de la
  loi) ».
- **18 April 2026 and 18 April 2027.** On the CCB's timeline the 2026 step is a
  CAB verification on the CyFun route and a self-assessment only on the
  inspection route, and the 2027 Essential certification concerns the entities
  that must meet Essential. Pages and fiches that write « auto-évaluation
  CyFun [...] au 18 avril 2026 » or an Essential certification for every
  essential entity say more than the CCB does.
- **The repeal.** `countries/be.yaml` says the law of 7 April 2019 is repealed
  by art. 92. It is art. 97; art. 92 amends another act.

All four were corrected on every Belgian surface the same day: see the next
section.


## Fines, repeal, art. 9 and the CCB's timeline, corrected on every Belgian surface (2026-10-29)

<!-- meta: theme=sanctions,statute,scoping,framework; type=wrong-citation,overclaim; date=2026-10-29; surfaces=marketing,data,ui,i18n,docs; guard=apps/web/test/be-citations-timeline.test.ts -->

The four defects listed above under « Found while reading, not corrected in
this change », corrected in Dutch, French, German and English, from the facts
of the section « The act in German » and nothing else: the table of arts. 58,
59, 9 and 97, and the CCB's « Zeitleiste » quoted under « The CCB in German ».

| Defect | What the surfaces said | What they say now |
|---|---|---|
| Fines | « boetes van art. 58 en 59 », « amendes des art. 58 et 59 », « (art. 58) » after the essential-entity ceiling, « art. 58-59 » on the CyFun dashboard; in `be.yaml` the 10 M€ ceiling under art. 58 and « Le BE n'impose pas de floor minimum » | art. 59: 4° for important entities, 500 to 7 000 000 euros or 1,4 %; 5° for essential entities, 500 to 10 000 000 euros or 2 %, the higher amount, doubled on recidivism within three years. Art. 58 is named for what it is, the administrative measures |
| Repeal | « abrogée par art. 92 », « art. 92 (abrogation NIS1) », « arts. 95-96 (transitoires) » | art. 97. The « arts. 95-96 » citation is removed; the claim it carried (operators identified under the 2019 act keep their status for a transition) stays, marked unverified |
| Art. 9 | « l'administration publique centrale et régionale fait partie des entités essentielles », « de centrale en gewestelijke overheid », « federal/regional public-sector bodies are squarely in scope », « admin publique centrale + régionale », « art. 9 alinéa 5 » | the entities of public administration that depend on the federal State are essential (art. 9, 4°); a regional one is in scope once identified under art. 11 § 2 (art. 3 § 3, 3°, b) |
| Timeline | « zelfevaluatie Basic of Important tegen 18 april 2026 » and « auto-évaluation CyFun au 18 avril 2026 » for every essential entity; « verplichte certificering op niveau Essential voor essentiële entiteiten », « Certification obligatoire au niveau Essential pour les entités essentielles », « CIBLE LÉGALE OBLIGATOIRE pour toutes les EE au 2027-04-18 »; « de wettelijke termijnen » | per route, as the CCB writes it: CyFun, a verification at Basic or Important by an accredited and authorised CAB by 18 April 2026, the Essential certification by 18 April 2027 for the entities that must meet that level (Basic then Important for those that must meet Important); ISO/IEC 27001, scope, Statement of Applicability and last internal audit to the CCB, then the certification; inspection, the self-assessment, then a progress report. Attributed to the CCB, the act leaving these deadlines to the King (art. 75); an essential entity may justify Important on a comprehensive risk analysis |

Surfaces corrected: the Dutch pages `/be`, `/be/essentiele-belangrijke-entiteiten`,
`/be/assurance-niveaus-cyfun`, `/be/cyfun-conformiteit`, `/be/incident-melding-ccb`,
`/be/veelgestelde-vragen` and their French twins under `/fr-be` (copy, meta
descriptions, Open Graph, FAQ JSON-LD, `dateModified`); the Dutch and French
fiches in `apps/web/src/lib/countries/belgium.ts`, whose 2026 and 2027 steps now
cite the CCB's German page as provenance, the only version of it read; the
English entry in `countries-seo.ts`; the CyFun dashboard's sanctions strings in
eleven locales (`translations.ts`, then the generated dictionaries); the
YAMLs `countries/be.yaml`, `scope/be.yaml`, `soft-law/be.yaml`,
`frameworks/cyfun.yaml` and the two Belgian entries of
`regimes-interaction.yaml`; the Dutch Foundations course (modules 1, 2 and 4,
the quiz of module 2, the READMEs, the course description in
`seed-foundations-native-course.ts`); and the comments and the ADR 0042 bullet
that restated the old calendar. The German pages, `BELGIUM_DE` and
`TRANSPOSITION_REFERENCES_BE` already said it right.

Not live until somebody acts: the course is seeded into the database, so the
corrected slides and quiz reach users only after a re-seed
(`seed-foundations-native-course.ts --framework cyfun --publish`).

**What this record does not settle, left as it was.**
- Art. 60 (« handhavingsmaatregelen », « mesures d'exécution ») and art. 61
  (publication of the decision), cited on the pages and in `be.yaml`. Art. 62,
  above, speaks of « the measures and fines of arts. 59 and 60 », which fits
  measures in art. 60, but neither article is read here.
- Art. 58 § 2 (criteria for the amount of a fine) and § 3 (no cumulation with
  a fine under the GDPR), in `be.yaml` and on the dashboard (« non bis in idem
  met de AVG (art. 58 §3) »). The table puts the fines in art. 59, which makes
  both paragraph citations doubtful; flagged in `be.yaml`, not moved.
- The sanctions chapter, « titre IV, chapitre II (art. 58 à 61) »: the act's
  divisions are not in this record. The pages now cite arts. 58 and 59 by
  name instead; the `structure` block of `be.yaml` keeps its titles and
  ranges, unverified.
- Transitional provisions for the operators identified under the act of
  7 April 2019: none read. The vital-services branch of `scope/be.yaml` and
  `regimes-interaction.yaml` stays, its claim marked unverified.
- The CAB capacity figures (about 7 CABs for Essential, at most 1 500
  certifications a year) in `be.yaml`, `cyfun.yaml` and `soft-law/be.yaml`:
  marked unverified.

**Found while correcting, outside these four, not corrected.**
- The Belgian legal frame of the generated documents
  (`packages/regulatory-data/src/doc-corpus/legal-frames.ts`) cites art. 33 for
  the notification of incidents, in Dutch and in French. The table above gives
  art. 34 § 1 for the duty and art. 35 § 1 for the stages; the first section of
  this file and the delivery of 2026-08-25 carried art. 33, unpinned.
- `be.yaml` has `entry_into_force: 2024-10-17`, which `formatCountryPromptContext`
  prints into every Belgian prompt; art. 98 says 18 October 2024.
- `scope/be.yaml` grounds the essential and important size classes on
  « art. 8 alinéa 1 / 2 » (art. 9, 1° and art. 10, 1° in the table), and
  `be.yaml` words the size threshold « 50 employés OU 10 M€ CA OU 10 M€ bilan »,
  where the Recommendation's two financial limbs are cumulative.
- The fine calculator says « Loi NIS2 in force since May 2024 »
  (`apps/web/src/app/[locale]/tools/nis2-fine-calculator/fine-calculator-tool.tsx`).
- The dashboard's « Essentiële entiteiten richten zich op Essential »
  (`app.dashboard.cyfun.assurance.body`) echoes the engine's derived target
  (`cyfunTargetLevelForProfile`), which an essential entity at Important
  contradicts.
- `soft-law/be.yaml` counts CyFun as Small ≈ 30, Basic ≈ 100, Important ≈ 140,
  Essential ≈ 200, against 34 / 133 / 218.
- The German document prompts call the level « Sicherheitsniveau »
  (`apps/ai-service/src/lib/graded-level.ts`); the CCB's word is
  « Sicherheitsstufe ».

Guard: `apps/web/test/be-citations-timeline.test.ts` reads every Belgian source
above (comments dropped) and fails on a fine tied to art. 58, on « art. 92 » or
« arts. 95-96 », on central and regional public administration, and on a 2027
Essential certification without its condition or a 2026 self-assessment without
its route, in the four languages; it also checks the fiches field by field and
`be.yaml` through the loader. Mutation-tested: against the files as they stood
before this correction it fails 32 tests, with findings from all four
detectors.

## The legal frame of generated documents, in all four languages, with the right articles and the fines (2026-10-29)

<!-- meta: theme=incident,sanctions,scoping,framework; type=wrong-citation,i18n,overclaim; date=2026-10-29; surfaces=doc-gen,prompt,data; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Read in the French and Dutch texts (Justel, ELI
`https://www.ejustice.just.fgov.be/eli/loi/2024/04/26/2024202344/justel` and
`.../eli/wet/2024/04/26/2024202344/justel`, retrieved 2026-10-29) and in the
German coordination of the Staatsblatt of 23 October 2026 (Numac 2026007305).

| What the corpus said | Where | What the act says |
|---|---|---|
| « Notification des incidents (art. 33) » in every Belgian document | `doc-corpus/legal-frames.ts` | Art. 33 lets the King impose additional measures: « le Roi peut, par arrêté délibéré en Conseil des ministres, imposer des mesures supplémentaires de gestion des risques ». The duty is art. 34, § 1er: « Les entités essentielles et importantes notifient tout incident significatif sans retard injustifié au CSIRT national »; the stages are art. 35, § 1er (24 hours, 72 hours, final report one month after the notification). |
| No fine paragraph, "not verified" | same | Art. 59, 4° and 5° (quoted in the section above); « L'amende administrative est doublée en cas de récidive pour les mêmes faits dans un délai de trois ans. »; art. 62: « Les mesures et amendes administratives visées aux articles 59 et 60 ne s'appliquent pas aux entités faisant partie du secteur de l'administration publique. » NL: « De administratieve geldboete wordt verdubbeld in geval van herhaling van dezelfde feiten binnen een termijn van drie jaar. » |
| A German or English document received the frame in French | `buildLegalFrameBlock`, case `cyfun` | The CyFun prompt variants (fr, de, en, 2026-10-28) each ask for the section under their own heading; the frame now exists in fr, nl, de and en. The German text follows the unofficial coordination and says so; the English one says it has no legal force. |
| NL: « zijn verantwoordelijk voor de schending van artikel 30 » | same | Art. 31, § 1: « zijn aansprakelijk voor inbreuken door deze entiteiten op dat artikel » |
| `entry_into_force: 2024-10-17`, printed in every Belgian prompt | `countries/be.yaml` | Art. 98: « La présente loi entre en vigueur le 18 octobre 2024. » / « Deze wet treedt in werking op 18 oktober 2024. » |
| Size: « 50 employés OU 10 M€ CA OU 10 M€ bilan total »; « < 50 ETP ET ≤ €10M CA »; « ≥50 ETP OU CA annuel > €10M » | `countries/be.yaml`, `scope/be.yaml` | Art. 3, § 1er refers to art. 2 of the annex of Recommendation 2003/361/CE; the two financial ceilings are cumulative, and « L'article 3, § 4, de l'annexe de la recommandation n° 2003/361/CE ne s'applique pas aux fins de la présente loi. » |
| Size classes « art. 8 alinéa 1 / 2 » | `scope/be.yaml` | Art. 8 is the definitions. Essential: art. 9, 1°; important: art. 10, 1°; scope: art. 3, § 1er. |
| CyFun: Basic ≈ 100, Important ≈ 140, Essential ≈ 200 | `soft-law/be.yaml` | 34, 133 and 218 controls (CCB mapping of 2026-09-23, above). |
| « Sicherheitsniveau » in the German prompts | `graded-level.ts`, `native-doc-prompts.ts` | The CCB's word is « Sicherheitsstufe » (section above). |
| GV.OV « applicable only to essential entities » in the board deck prompt, four languages | `native-doc-prompts.ts` | Both sub-controls sit at level Essential, and « Eine wesentliche Einrichtung könnte [...] die Verwendung des CyFun®-Levels "Important" rechtfertigen ». The note now names the level. |

Guards: `packages/regulatory-data/test/legal-frames.test.ts` (four languages,
art. 34 and 35 and never 33, the fine of the entity's own class with art. 62)
and `apps/ai-service/test/legal-frame-cyfun-languages.test.ts` (the heading
each prompt variant asks for is the frame's heading, and the fallback splice
finds it).
