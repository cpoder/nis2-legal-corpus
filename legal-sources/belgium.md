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

<!-- meta: theme=governance; type=reference; date=2026-10-29; surfaces=data; guard=none -->

- **Source read:** Moniteur belge of 17 May 2024, **numac 2024202344**, full
  text (194 078 characters) via
  `https://www.ejustice.just.fgov.be/cgi/article_body.pl?language=fr&caller=summary&pub_date=2024-05-17&numac=2024202344`
- **Retrieved + read:** 2026-07-26 (art. 31, 39, 40, 41 read verbatim)
- **Access:** ejustice blocks curl (ERR_CONNECTION_RESET) and the endpoints
  `change_lg.pl` / `summary.pl` even under Playwright. **Only `article_body.pl`
  answers**, and only from a real browser. The CCB (`ccb.belgium.be`) stays
  in 403 even under Chromium. Keep this URL, it is the only one that works.
- **Re-read 2026-10-29 for art. 31 § 2 in both official languages:** the
  Moniteur belge of 17 May 2024, numac 2024202344, in French,
  https://www.ejustice.just.fgov.be/cgi/article_body.pl?language=fr&caller=summary&pub_date=2024-05-17&numac=2024202344
  (sha256 `3bf92dd3829b7edc3560c00fe6d753ceac2ce1dfae0db420492da9a05c06e0c4`),
  and in Dutch, the same URL with `language=nl` (sha256
  `089033bbb701158a0fadafc6a263c9d6d33e9909bb4ce8cbbd9ccd1e323b2ba3`). The Justel
  consolidation, « mise à jour au 19-01-2026 »,
  https://www.ejustice.just.fgov.be/eli/loi/2024/04/26/2024202344/justel,
  carries art. 31 § 2 with the same words. The German text is the unofficial
  coordination of numac 2026007305 (section « The act in German » below), not an
  official text. That day a plain `curl` with a browser User-Agent reached
  `article_body.pl` and the Justel page.

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The management body **approves** the measures, **oversees** their implementation and **is liable for the infringement** of art. 30 by the entity | art. 31 § 1er | "Les organes de direction des entités essentielles et importantes **approuvent** les mesures de gestion des risques … **supervisent leur mise en oeuvre et sont responsables de la violation dudit article** par ces entités." | ✅ |
| Training: **bare** transposition of NIS 2 art. 20(2), **no certification**, no frequency, no provider, and no sentence on staff (the staff side is the authority's mission, next row) | art. 31 § 2 | FR (official): "§ 2. Les membres des organes de direction des entités essentielles et importantes suivent une formation pour que leurs connaissances et compétences soient suffisantes pour déterminer les risques et évaluer les pratiques de gestion des risques en matière de cybersécurité et leur impact sur les services fournis par l'entité." NL (official): "§ 2. De leden van de bestuursorganen van essentiële en belangrijke entiteiten volgen een opleiding zodat ze over voldoende kennis en vaardigheden beschikken om risico's te kunnen identificeren en risicobeheerspraktijken op het gebied van cyberbeveiliging en de gevolgen ervan voor de diensten die door de entiteit worden verleend, te kunnen beoordelen." DE (unofficial coordination of 23 October 2026, not an official text): "§ 2 - Mitglieder der Leitungsorgane wesentlicher und wichtiger Einrichtungen nehmen an Schulungen teil, um ausreichende Kenntnisse und Fähigkeiten zur Erkennung und Bewertung von Risiken und Managementpraktiken im Bereich der Cybersicherheit und deren Auswirkungen auf die von der Einrichtung erbrachten Dienste zu erwerben." | verified (Moniteur belge 17-05-2024, FR and NL, 2026-10-29) |
| The CCB's role on training is to **encourage**, not to certify | art. 17, 13° | FR: "13° faciliter et encourager l'organisation de formations en matière de cybersécurité pour les membres du personnel des entités essentielles ou importantes;" NL: "13° het faciliteren en aanmoedigen van de organisatie van opleidingen rond cyberbeveiliging voor personeelsleden van essentiële of belangrijke entiteiten;" | verified (Moniteur belge 17-05-2024, FR and NL, 2026-10-29) |
| ⚠️ **Exit:** the DORA banking and market-infrastructure entities are outside titles 3 to 5, art. 31 included | art. 6 § 3 | "§ 3. Les dispositions des titres 3 à 5 ne s'appliquent pas aux entités relevant des secteurs bancaire et infrastructures des marchés financiers au sens de l'annexe I qui tombent dans le champ d'application du règlement (UE) 2022/2554 […]" | verified (Moniteur belge 17-05-2024, FR, 2026-10-29) |
| ⚠️ **Exit:** title 3, chapter 1 (arts. 30 to 33, art. 31 included) does not apply to the National Bank, its central securities depository excepted, nor to the financial institutions it supervises that are outside § 3 | art. 6 § 4 | "§ 4. Les dispositions du titre 3, chapitre 1er, du titre 4 et du titre 5 ne s'appliquent pas: 1° à la Banque Nationale de Belgique, exception faite de son activité de dépositaire central de titres à laquelle s'applique le paragraphe 3; 2° aux établissements financiers soumis à la supervision de la Banque Nationale de Belgique en vertu des articles 8 et 12bis de la loi du 22 février 1998 fixant le statut organique de la Banque Nationale de Belgique qui ne relèvent pas du paragraphe 3." | verified (Moniteur belge 17-05-2024, FR, 2026-10-29) |
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

## The CyFun Foundations course in French and German, and the Dutch course read against this record (2026-10-29)

<!-- meta: theme=framework,incident,sanctions,governance; type=delivery,wrong-citation,overclaim,i18n; date=2026-10-29; surfaces=ui,data; guard=apps/web/test/cyfun-training-languages.test.ts -->

Until this day the native CyFun Foundations course existed in Dutch only
(`marketing/training/foundations-cyfun/`) and the catalogue listed it to every
Belgian organisation, so a French- or German-speaking entity was handed Dutch
slides. The course now exists in French (`foundations-cyfun-fr/`) and German
(`foundations-cyfun-de/`): same four modules, same quiz question ids and answer
key, written in each language from the facts of this file and nothing else, with
the CCB's own words (`title_fr` / `title_de` and `label_fr` / `label_de` of
`cyfun.yaml`, « niveau d'assurance », « Sicherheitsstufe », « Reifegrad » only for
the 1 to 5 score). The German course names the act « Gesetz vom 26. April 2024 »
and the CCB « Zentrum für Cybersicherheit Belgien », and says once that the French
and Dutch texts are authentic and that its German terms come from the unofficial
coordination of 23 October 2026. The catalogue offers the course in the user's
language when one is published in it, Dutch otherwise, the rule the documents
follow (`selectNativeTrainingLanguage`, `GET /api/training/courses?language=`).

Before any Dutch claim was reused, the Dutch modules were read against this
file. What they said, and what they say now:

| Module | What the Dutch course said | What it says now | Where in this file |
|---|---|---|---|
| 1, 4 | « eindverslag binnen 1 maand »; « reken vanaf dat moment 24 uur, 72 uur en 1 maand » from awareness | the final report at the latest one month after the incident notification (art. 35 § 1, 4°), the intermediate report on request (3°), the progress report (5°); 24 hours for a trust service provider (art. 35 § 2) | « The act in German », arts. 34 to 36 |
| 4 | the duty to notify laid down by the act « samen met het koninklijk besluit van 9 juni 2024 », « aan het CCB », « de bevoegde autoriteit en het nationaal contactpunt » | the act alone (art. 34 § 1): to the national CSIRT, whose tasks the national authority performs (art. 16), CERT.be, through the CCB's notification platform | arts. 16 and 34; « The CCB in German », notification |
| 4 | a « content » column per stage (« compromisindicatoren », « werkelijke impact ») | removed: the contents of each report are not in this record | none |
| 1, 4 | the CCB's 2026 and 2027 steps without the ISO/IEC 27001 route, without the 2027 step of the inspection route, without « an essential entity may justify Important » | route by route as the CCB writes it, with the condition on the 2027 Essential certification and art. 75 | « The CCB in German », the first conformity assessments |
| 1 | no word on the management body or the fines; the recap announced « Module 2, de verplichtingen van het bestuur », which does not exist | a slide on art. 31 § 1 and § 2, the fines of art. 59, 4° and 5°, the doubling on recidivism, art. 62; the recap lists the real modules | arts. 31, 59, 62 |
| 1 | the act applies to entities « waarvan een verstoring de samenleving of de economie zou raken » | art. 3 § 1 and § 3; art. 9, 4° for the public administration that depends on the federal State; registration within five months (art. 13 § 1) on Safeonweb@Work | arts. 3, 9, 13 |
| 3 | the function GV « Besturen »; modules 1, 2 and 4 used the English function names (GOVERN … RECOVER) | « Beheren », and the six names of the NL tool's tabs everywhere | « CyFun 2025 tree reconciled… », « Where each language comes from » |
| 3, 4 | category names of our own (« Rapportering en communicatie van de incidentrespons », « Incidentmitigatie », « Uitvoering van het herstelplan », « Analyse van ongunstige gebeurtenissen », …) | the 22 names as the NL tool prints them (« Incidentresponsrapportage en -Communicatie », « Incidentbeperking », « Uitvoering van het Incidentherstelplan », « Analyse van Ongewenste Gebeurtenissen », …) | same |
| 1, 2, 3 | « vier assurance-niveaus »; « Basic omvat alles van Small »; Small « voor micro-organisaties, enkel zelfevaluatie »; « dezelfde 22 categorieën gelden op elk niveau »; a higher level asks « een strengere invulling » of the same requirement | three zekerheidsniveaus (the CCB's Dutch word), Basic, Important and Essential, preceded by the entry level Small; 34, 133 (34 + 99) and 218 (133 + 85) requirements, 13, 22 and 29 key measures; GV.SC, RS.MI and RC.CO start at Important, GV.OV and RS.AN are Essential only | « CyFun in German: the level word », the mapping counts |
| 1, 2, 4 | « Het CCB beveelt Basic aan als baseline voor elke organisatie » | the CCB advises at least Basic to the organisations that may be in the supply chain of an entity in scope, and such an entity may impose a CyFun level on its direct suppliers | « The CCB in German », CyFun |

**Found while delivering, outside the record.** Three of the four Dutch module
READMEs carried no `- **Slug:**` line, the key of the content indexer
(`apps/core-api/src/lib/training-admin.ts`), so `GET /api/training/courses/:slug`
served no slides for modules 1 to 3; the indexer also resolved
`foundations-cyfun/` to the locale `be`, a country. Both corrected. The Spanish
(ENS, modules 2 and 3) and Polish (KSC, modules 2 to 4) courses lack the same line;
not corrected here.

Not live until somebody acts: the courses are seeded into the database, so the
French and German courses, and the corrected Dutch one, reach users only after a
production re-seed (`seed-foundations-native-course.ts --framework cyfun
--publish`, which now seeds nl, fr and de). Until then every Belgian user keeps
the Dutch rows, which the language choice falls back to.

Guards: `apps/web/test/cyfun-training-languages.test.ts` (the facts and the
vocabulary in the three languages, question parity, the counts against the tree;
it fails 17 tests on the Dutch course as it stood),
`apps/core-api/test/training-native-language.test.ts` (the seeder against a
transient database, then the catalogue and the player for a Belgian organisation;
13 failures against the route and indexer as they stood),
`packages/regulatory-data/test/native-training-languages.test.ts` (the selection
rule), and the existing `apps/web/test/be-citations-timeline.test.ts`, which now
reads the three directories.

## CyFun's levels as the CCB writes them: three assurance levels, preceded by an entry level (verified 2026-10-29)

<!-- meta: theme=framework; type=reference,law-misread,i18n,test-pinned; date=2026-10-29; surfaces=marketing,ui,prompt,data,i18n,test,docs; guard=apps/web/test/cyfun-level-framing.test.ts -->

The question: the Belgian surfaces counted CyFun's levels in two ways that
cannot both be the CCB's. About thirty-four places said « four (cumulative)
assurance levels », Small included (« vier assurance-niveaus », « quatre
niveaux d'assurance », « four assurance levels »); about fifteen said three.
The Dutch ones also wrote « assurance-niveau ». How many levels does the CCB
name, is Small one of them, and what is its word for a level in each language?

Read on 2026-10-29 in a visible Chromium (Playwright, no stealth plugin,
nothing spoofed; cyfun.eu answers a headless browser with 403):

- the four CyFun 2025 pages, `https://cyfun.eu/{nl,fr,en,de}/cyberfundamentals-framework-2025`,
  and the overview pages they link to: the « Over » / « À propos » / « About »
  / « Über » pages (`/nl/over`, `/fr/à-propos`, `/en/about`, `/de/ueber`), the
  « CyFun® in België / en Belgique / In Belgium / in Belgien » pages
  (`/{nl,fr,en,de}/about/CyFun®-in-Belgium`) and the home pages
  (`/{nl,fr,en,de}`);
- every 2025 booklet those pages link, in the four languages, and the
  key-measures overview in Dutch and in English;
- the introduction sheet of the self-assessment tools downloaded on
  2026-10-28 (same files, SHA-256 in the section of that date);
- for comparison, the four CyFun 2023 pages
  (`/{nl,fr,en,de}/cyberfundamentals-framework-2023`) and the 2023 Small
  booklet they link.

The French and German booklets downloaded today have the SHA-256 recorded on
2026-10-28. The files that are new to this record (URLs under
`https://cyfun.eu/sites/default/files/`):

| File | SHA-256 |
|---|---|
| `2026-10/CyFun2025_Booklet-BASIC_N.pdf` | `aa37ae2dd0d9cfb155a0560c6d76a7b87a2154af8abf967430619eb217452537` |
| `2026-03/CyFun2025_Booklet-IMPORTANT_N.pdf` | `c7bcd8d7e2fa769bcfd2a97b97d6238b9ebc6e4e6f2238069879e204f9fdb82e` |
| `2026-03/CyFun2025_Booklet-ESSENTIAL_N.pdf` | `e9e63390ccae2a92fd2984f1479dc8d031aaa3bb67e4e82cfab66991dea6c9f2` |
| `2026-02/CyFun2025-Key_Measures_NL_1.pdf` | `dfe666236ca4fddbe9d2d17d2d26e127cfabbd5b18a2d0ed54ad6f4aafffad7b` |
| `2026-03/CyFun2025_Booklet_BASIC_E.pdf` | `5782563b243a9dd0210ddb8e7a8ea2cb6b9b6c0448ece42a52aee7916abddf84` |
| `2026-03/CyFun2025_Booklet_IMPORTANT_E.pdf` | `6d61bfebedea8aeb1b840272ec2e3497213d6be807e70f0a98aeccc36d70b38d` |
| `2026-03/CyFun2025_Booklet_ESSENTIAL_E.pdf` | `1a52c71df4d9da762647ae764e39f547cca6940ca9b3e373b03135e1d3b673cc` |
| `2026-03/CyFun2025-Key_Measures_EN.pdf` | `dccd4fe99f152b7af9fc3fbb89629d71183e4efa06ffe6f98da15e7b7d7ec11a` |
| `2025-10/CyFun2025_Booklet-BASIC.pdf` (an earlier upload, Version 2025-10-01) | `e7310020e7bace72e3541e5a39b819a5d958b01dc9185a77831d53558ff9af67` |
| `2025-11/CCB_CyFun2023_Booklet-SMALL_E.pdf` (Version 2023-03-01) | `e8a7acc34a59012d2c64c29b09a4b48066ec0187921cb09d2fe523ea4c1a7537` |

### What the framework documents say, verbatim

The booklets (Version 2025-10-01) print the same two sentences after the six
functions, in BASIC, IMPORTANT and ESSENTIAL alike. The tools say it on their
introduction sheet. Apostrophes are normalised; the Dutch BASIC and IMPORTANT
booklets write « small » in lower case both times.

| | Booklets | Self-assessment tools |
|---|---|---|
| nl | « Het CyberFundamentals Framework maakt gebruik van een proportioneel borgingsmodel met drie zekerheidsniveaus: Basic, Important en Essential, voorafgegaan door een instapniveau: small. » « Het instapniveau Small stelt een organisatie in staat een eerste beoordeling te maken. Het is bedoeld voor micro-organisaties of organisaties met beperkte technische kennis. » « Het zekerheidsniveau Basic omvat informatie- en cyberbeveiligingsvereisten die van toepassing zijn op alle organisaties. » | « (1) Zekerheidsniveaus: De CyberFundamentals-Self-Assessment is beschikbaar voor de drie zekerheidsniveaus: Basic, Important en Essential. » Column header « Zekerheidsniveau » (NL ESSENTIAL V1) |
| fr | « Le cadre CyberFundamentals utilise un modèle d'assurance proportionnel avec trois niveaux d'assurance : Basic, Important et Essential, précédés d'un niveau d'entrée : Small. » « Le niveau d'entrée « Small » permet à une organisation de procéder à une évaluation initiale. Il est destiné aux micro-organisations ou aux organisations disposant de connaissances techniques limitées. » | « (1) Niveaux d'assurance: L'auto-évaluation CyberFundamentals est disponible pour les trois niveaux d'assurance : Basic, Important et Essential. » Column header « Niveau d'assurance » (FR BASIC v2_0, IMPORTANT v2, ESSENTIAL v1) |
| en | « The CyberFundamentals Framework uses a proportional assurance model with three assurance levels: Basic, Important and Essential, preceded by an entry level: Small. » « The entry level Small allows an organisation to make an initial assessment. It is intended for micro-organisations or organisations with limited technical knowledge. » | « (1) Assurance levels: The CyberFundamentals self-assessment is available for the three assurance levels: Basic, Important and Essential. » Column header « Assurance level » (EN ESSENTIAL v3.1) |
| de | « Der CyberFundamentals Framework verwendet ein proportionales Sicherheitsmodell mit drei Sicherheitsstufen: Basic, Important und Essential, dem eine Einstiegsstufe vorangestellt ist: Small. » « Die Einstiegsstufe Small ermöglicht es einer Organisation, eine erste Bewertung vorzunehmen. Sie ist für Mikro-Organisationen oder Organisationen mit begrenzten technischen Kenntnissen gedacht. » | none: no German tool exists, the German page links the English ones |

The key-measures overviews (« CyFun 2025 Kernmaatregelen », « CyFun 2025 Key
Measures ») count key measures for BASIC, IMPORTANT and ESSENTIAL, and for
nothing else.

So: **three assurance levels, Basic, Important and Essential, preceded by an
entry level, Small.** In none of the four languages is Small an assurance
level, and « four levels » appears nowhere.

| | nl | fr | en | de |
|---|---|---|---|---|
| a level (Basic, Important, Essential) | zekerheidsniveau | niveau d'assurance | assurance level | Sicherheitsstufe |
| Small | instapniveau | niveau d'entrée | entry level | Einstiegsstufe |
| the 1 to 5 score of the tool | maturiteitsniveau | niveau de maturité | maturity level | Reifegrad |

The level names stay in English in the four editions. The maturity row comes
from the tools' sheet names (« Maturiteitsniveaus », « Niveaux de maturité »,
« Maturity Levels ») and the German page (« Reifegrad der Politik »).

### The CyFun 2025 pages, and Small

The four 2025 pages say the same, and do not mention Small:

- nl: « Het zekerheidsniveau Basic bevat de standaardmaatregelen voor
  informatiebeveiliging voor alle ondernemingen. »; the key-measures overview
  covers « de drie CyberFundamentals-zekerheidsniveaus »; « Er zijn drie
  afzonderlijke Self-Assessment tools, één voor elk zekerheidsniveau: Basic,
  Important, Essential ».
- fr: « Le niveau d'assurance « Basic » comprend les mesures standard de
  sécurité de l'information pour toutes les entreprises. »; « les trois
  niveaux d'assurance CyberFundamentals »; « Il existe trois outils de
  Self-Assessment distincts, un pour chaque niveau d'assurance ».
- en: « The assurance level Basic contains the standard information security
  measures for all enterprises. »; « the three CyberFundamentals assurance
  levels »; « There are three separate self-assessment tools, one for each
  assurance level ».
- de: « Die Sicherheitsstufe „Basic" umfasst die Standardmaßnahmen zur
  Informationssicherheit für alle Unternehmen. »; « der drei
  CyberFundamentals-Sicherheitsstufen »; « Es gibt drei separate Tools zur
  Selbstbewertung, eines für jede Sicherheitsstufe ».

Each lists three booklets and three tools, BASIC, IMPORTANT and ESSENTIAL:
**CyFun 2025 publishes no Small booklet and no Small tool.** The URL
`https://cyfun.eu/sites/default/files/2025-10/CyFun2025_Booklet-SMALL.pdf`,
which `frameworks/cyfun.yaml` listed as a CyFun 2025 booklet of the level
Small « (publié 2025-10-01) », answers 404; the Basic booklet uploaded next to it
(`2025-10/CyFun2025_Booklet-BASIC.pdf`) carries the same « three assurance
levels ... preceded by an entry level: Small ». The only Small booklet on
cyfun.eu is the 2023 edition's, linked from the 2023 pages (Version
2023-03-01): « To respond to the severity of the threat that an organisation
is exposed to, and in addition to the starting level Small, three assurance
levels are also provided: Basic, Important and Essential. » The 2023 pages
call it « startniveau », « niveau de départ », « starting level »,
« Einstiegsstufe ». The CCB has not counted Small among its assurance levels
in either edition.

### Where the CCB's pages disagree with each other

On the count they agree: every page that counts says three. On the word, the
marketing pages do not:

| Page | nl | fr | en | de |
|---|---|---|---|---|
| About | « CyFun® is opgebouwd rond drie zekerheidsniveaus – Basic, Important en Essential– » | « Conçu autour de trois niveaux de maturité (Basic, Important et Essential) » | « Built around three maturity levels – Basic, Important, and Essential – » | « CyFun® basiert auf drei Reifegraden − Basic, Important und Essential − » |
| Home | « CyFun® is opgebouwd rond drie volwassenheidsniveaus – Basis, Important en Essential – » | as the About page | as the About page | as the About page |
| CyFun in Belgium, step 1 | « bepaal uw zekerheidsniveau: Basic, Important of Essentieel » | « déterminez votre niveau d'assurance : Basic, Important ou Essential » | « determine your assurance level: Basic, Important, or Essential » | « bestimmen Sie Ihre Sicherheitsstufe: Basic, Important, oder Essential » |
| CyFun in Belgium, « Conformiteit » | « verzekeringsniveaus BASIC en IMPORTANT », « verzekeringsniveau ESSENTIAL » | « niveaux d'assurance BASIC et IMPORTANT », « niveau d'assurance ESSENTIAL » | « assurance levels BASIC and IMPORTANT », « assurance level ESSENTIAL » | « Zuverlässigkeitsstufen BASIC und IMPORTANT », « Zuverlässigkeitsstufe ESSENTIAL » |

The French 2025 page also writes once « les scores cibles (seuils) fixés pour
chaque niveau de sécurité dans le Conformity Assessment Scheme (CAS) ». The
booklets and the tools use one word per language and keep maturiteit,
maturité, maturity and Reifegrad for the 1 to 5 score, so the product follows
them: zekerheidsniveau, niveau d'assurance, assurance level, Sicherheitsstufe,
and instapniveau, niveau d'entrée, entry level, Einstiegsstufe for Small.
« assurance-niveau » and « assurantieniveau » are words of ours: no CCB text
in Dutch uses them.

### Presumption of conformity, on the same page

The « Conformiteit » paragraph of the CyFun in Belgium page names three
routes, none of them at Small:

- nl: « In België kan het vermoeden van conformiteit met NIS2 worden verkregen
  door middel van CyberFundamentals-verificatie (verzekeringsniveaus BASIC en
  IMPORTANT), CyberFundamentals-certificering (verzekeringsniveau ESSENTIAL)
  of ISO/IEC 27001-certificering (op voorwaarde dat het toepassingsgebied en
  het statement of applicability aanvaardbaar worden bevonden door het CCB). »
- fr: « En Belgique, la présomption de conformité à la norme NIS2 peut être
  obtenue par le biais de la vérification CyberFundamentals (niveaux
  d'assurance BASIC et IMPORTANT), de la certification CyberFundamentals
  (niveau d'assurance ESSENTIAL) ou de la certification ISO/IEC 27001 (à
  condition que le champ d'application et le statement of applicability
  soient jugés acceptables au CCB). »
- en: « In Belgium, presumption of Conformity to NIS2 can be obtained through
  CyberFundamentals verification (assurance levels BASIC and IMPORTANT),
  CyberFundamentals certification (assurance level ESSENTIAL) or ISO/IEC
  27001 certification (provided the scope and Statement of Applicability is
  found acceptable by the CCB). »
- de: « In Belgien kann die Konformitätsvermutung für NIS2 durch eine
  CyberFundamentals-Verifizierung (Zuverlässigkeitsstufen BASIC und
  IMPORTANT), eine CyberFundamentals-Zertifizierung (Zuverlässigkeitsstufe
  ESSENTIAL) oder eine ISO/IEC 27001-Zertifizierung erlangt werden
  (vorausgesetzt, der Geltungsbereich und die Anwendbarkeitserklärung werden
  vom CCB für akzeptabel befunden). »

A conformity statement or certificate « op het juiste assurance-niveau (Small,
Basic, Important of Essential) », which the Dutch fiche wrote (and the French
one « au bon niveau d'assurance (Small, Basic, Important ou Essential) »),
therefore says more than the CCB: Small yields no presumption of conformity.

### What the product said, and what it says now

| | Said | Says now |
|---|---|---|
| The count | « vier (cumulatieve) zekerheidsniveaus », « vier assurance-niveaus », « quatre niveaux d'assurance (cumulatifs) », « Les 4 niveaux », « 4 cumulative assurance levels », « 4 kumulative Assurance-Stufen », and « 4 » in the dashboard's seven other locales | three assurance levels, Basic, Important and Essential, preceded by the entry level Small, in each language's words from the table above |
| Small | listed among the assurance levels (« zekerheidsniveaus (Small, Basic, Important, Essential) », « assurance levels (Small, ...) »); a statement or certificate « op het juiste assurance-niveau (Small, ...) » giving a presumption of conformity; « Instapdiagnose », « Een lichte zelfevaluatie », « zonder waarde voor NIS2 »; in `frameworks/cyfun.yaml`, 7 controls, `self_assessment_only`, a list of practices (passwords, updates, backups, antivirus) and a « CyFun 2025 » Small booklet, and « ≈ 7 pour Small » in `countries/be.yaml` | the entry level, for an initial assessment, intended for micro-organisations or organisations with limited technical knowledge; no conformity assessment and no presumption of conformity; CyFun 2025 publishes no Small booklet or tool; no count |
| The Dutch word | « assurance-niveau » (the Dutch fiche, the dashboard, the citation rule of the Dutch prompt, the `/nl-nl` pages), « assurantieniveau » (the Dutch prompt's preamble, the Dutch declared-level block of `graded-level.ts`, the noun of the declared-level card) | « zekerheidsniveau » |
| The German word on the dashboard | « Assurance-Stufen » | « Sicherheitsstufen » |
| The level names | « Petit », « Basique », « Essentiel » (`label_fr` in `cyfun.yaml`, read into `labelLocal` and rendered nowhere); « Mala / Osnovna / Važna / Ključna » on the Croatian dashboard | Small, Basic, Important and Essential, in English in every locale, as in the CCB's four editions |
| The course | slide 4 « De vier treden van de schaal », « Les quatre paliers », « Die vier Stufen der Skala »; READMEs listing Small among the zekerheidsniveaus | « Het instapniveau en de drie zekerheidsniveaus », « Le niveau d'entrée et les trois niveaux d'assurance », « Die Einstiegsstufe und die drei Sicherheitsstufen » |

The dashboard's « Essentiële entiteiten richten zich op Essential », listed
above among the defects found on 2026-10-29 and not corrected, sat in the
string rewritten here; it now names the condition and the CCB's « Important »
justification, in the eleven locales.

### Delivered on these facts (2026-10-29)

- Dutch pages `/be`, `/be/assurance-niveaus-cyfun` (the URL is kept),
  `/be/cyfun-conformiteit`, `/be/veelgestelde-vragen`, and their French twins
  `/fr-be`, `/fr-be/niveaux-assurance-cyfun`, `/fr-be/conformite-cyfun`,
  `/fr-be/questions-frequentes`: copy, meta descriptions, Open Graph and
  Twitter cards, Article and FAQ JSON-LD. The German `/de-be` pages already
  said it.
- The Dutch-language pages of the Netherlands that compare it with CyFun
  (`/nl-nl`, `/nl-nl/veelgestelde-vragen`, `/nl-nl/zorgplicht-maatregelen`):
  « geen zekerheidsniveaus ».
- The fiches `BELGIUM_BE` and `BELGIUM_FR` in `apps/web/src/lib/countries/belgium.ts`
  (description, structure, the FAQ answer on the presumption); `BELGIUM_DE`
  already said it. The English entry in `countries-seo.ts`.
- The CyFun dashboard strings in `translations.ts`, eleven locales, then the
  generated dictionaries.
- The noun of the declared-level card for Belgium
  (`packages/regulatory-data/src/country-configs/declared-level.ts`).
- The Dutch CyFun prompt in `native-doc-prompts.ts` (preamble and citation
  rule) and the Dutch block of `graded-level.ts` (« ## Zekerheidsniveau »).
  The French, German and English prompts already named three levels.
- `frameworks/cyfun.yaml` (header, proportionality, the Small entry, `label_fr`,
  the publication list, the notes), `soft-law/be.yaml`, `countries/be.yaml`,
  `scope/be.yaml`.
- The CyFun Foundations course in the three languages: the three slide titles
  and the READMEs.
- Developer text: the shape check (`CYFUN_LEVELS`, its messages), the comments
  of the pages, the dashboard, the shells and the sitemap, ADR 0042.

Not live until somebody acts: the course is seeded into the database, so the
slide titles reach users only after a re-seed
(`seed-foundations-native-course.ts --framework cyfun --publish`).

Guard: `apps/web/test/cyfun-level-framing.test.ts` reads every Belgian source
(comments dropped) and fails on a count of four put on CyFun's levels in any
of the product's languages, on Small called an assurance level, on
« assurance-niveau », « assurantieniveau » or « verzekeringsniveau » outside a
slug, and on a maturity word naming a level; it also checks the fiches, the
English entry, the dashboard in eleven locales, the two Dutch prompts, the
declared-level noun and the Small entry of `cyfun.yaml` field by field, and
that this section still quotes the four booklets. Mutation-tested: against the
files as they stood before this correction it fails 41 of its 183 tests, with
findings from all four detectors (48 counts of four, 30 Small called an
assurance level, 17 old Dutch words, 1 maturity word). Two tests had pinned the
old Dutch word and were corrected with it:
`apps/ai-service/test/graded-level.test.ts` (five assertions on
« Assurantieniveau ») and `apps/web/test/declared-level-card.test.tsx`.

### Found while reading, not corrected in this change

- **Important is verified, not certified.** The « Conformiteit » paragraph
  quoted above names a verification for Basic and Important and a
  certification for Essential, and the CCB's timeline recorded above already
  says « a verification at level Basic or Important ». Several surfaces still
  describe Important as a certification: the Important cards of
  `/be/assurance-niveaus-cyfun`, `/be/cyfun-conformiteit`,
  `/fr-be/niveaux-assurance-cyfun` and `/fr-be/conformite-cyfun`
  (« Certificering door een erkende CAB », « Certification par un CAB agréé »),
  the Important summaries of `/be` and `/fr-be` (« Te certificeren door een
  erkende CAB », « À faire certifier par un CAB agréé »), and
  `target_attestation: "cab_certification_important"` with its note in
  `frameworks/cyfun.yaml`.
- **« Het CCB raadt Basic aan als basislijn voor elke organisatie ».** The
  booklets say that Basic holds requirements « die van toepassing zijn op alle
  organisaties »; the recommendation the record quotes (section « The CCB in
  German ») is narrower: at least Basic for the organisations that may be in
  the supply chain of an entity in scope. The Dutch course follows the narrower
  wording since 2026-10-29; the Dutch and French pages, the fiches and the
  dashboard keep the broad one.
- **The maturity steering card of the multi-frame view** builds one group per
  entry of `levels[]` (`getFrameworkGroups`), Small first. Small has no
  crosswalk row (`framework_to_directive` covers Basic, Important and
  Essential), so its group can never be scored. Read in the code, not seen
  rendered.

The first two were corrected the same day: see the next section. The third is
still open.

## Important is verified, not certified, and the CCB advises Basic to the supply chain (verified 2026-10-29)

<!-- meta: theme=framework,supply-chain; type=law-misread,overclaim; date=2026-10-29; surfaces=marketing,ui,i18n,data,docs; guard=apps/web/test/cyfun-level-framing.test.ts -->

The first two defects listed under « Found while reading, not corrected in
this change » in the previous section, settled from the CCB's own pages and
from the booklets. Read on 2026-10-29 between 08:41 and 08:42 UTC in a visible
Chromium (Playwright, no stealth plugin, nothing spoofed): the CCB's NIS2 page
on Safeonweb@Work in its four versions, `https://atwork.safeonweb.be/{nl,fr,de}/nis2`
and `https://atwork.safeonweb.be/nis2` (English), and the four « CyFun® in
België / en Belgique / In Belgium / in Belgien » pages
(`https://cyfun.eu/{nl,fr,en,de}/about/CyFun®-in-Belgium`), whose
« Conformiteit » paragraph the previous section quotes and which read the same
today. The booklets are those of the previous section, same SHA-256, read again
for two passages. Apostrophes are normalised.

### The CAB verifies Basic and Important, and certifies Essential

Four texts of the CCB say it, each in the four languages.

- **The four steps of « CyFun® in België »**, steps 3 and 4:
  - nl: « Selecteer een erkend CAB om uw zelfbeoordeling en de implementatie
    van uw risicobeperkende maatregelen te verifiëren of te certificeren. »
    « Vraag uw label aan (optioneel) [...] Zodra het
    conformiteitsbeoordelingsproces met uw CAB is afgerond, kunt u, na
    registratie en inloggen, uw CyFun®-label aanvragen in het
    Safeonweb@work-portaal. »
  - fr: « Sélectionnez un organisme d'évaluation de la conformité (CAB) agréé
    pour vérifier ou certifier votre auto-évaluation et la mise en œuvre de
    vos mesures d'atténuation. » « Demandez votre label (facultatif) [...]
    Une fois le processus d'évaluation de la conformité avec votre CAB
    terminé, vous pouvez, après vous être inscrit et connecté, demander votre
    label CyFun® sur le portail Safeonweb@work. »
  - en: « Select an authorised Conformity Assessment Body (CAB) to verify or
    certify your self-assessment and the implementation of your mitigating
    measures. » « Request your label (optional) [...] Once the Conformity
    Assessment process is finalised with your CAB, you can request your CyFun®
    label in the Safeonweb@work portal. »
  - de: « Wählen Sie eine zugelassene Konformitätsbewertungsstelle (CAB), um
    Ihre Selbstbewertung und die Umsetzung abmildernde Maßnahmen verifizieren
    oder zertifizieren zu lassen. » « Fordern Sie Ihr Label an (optional)
    [...] Sobald der Konformitätsbewertungsprozess mit Ihrer CAB abgeschlossen
    ist, können Sie Ihr CyFun®Label im Safeonweb@work-Portal anfordern. »

  Step 1 says how the level is chosen: « Beoordeel uw cyberrisico en bepaal uw
  zekerheidsniveau: Basic, Important of Essentieel. Gebruik de CyFun®
  Selection Tool om het juiste niveau voor uw organisatie te vinden. » (fr
  « Utilisez l'outil de sélection CyFun® pour trouver le niveau adapté à votre
  organisation. »). The label is asked for in the portal once the CAB is done;
  the CAB does not hand it out.
- **The supervision paragraph of the NIS2 page**, the first of the three
  options of an essential entity:
  - nl: « Een CyberFundamentals (CyFun®)-certificering (niveau Essential) of
    -verificatie (niveau Important of Basic) met het relevante
    toepassingsgebied, toegekend door een conformiteitsbeoordelingsinstantie
    (CAB) die is goedgekeurd door het CCB na accreditatie door BELAC; »
  - fr: « Une certification (niveau essentiel) ou une vérification (niveau
    important ou basic) des CyberFundamentals (CyFun®) avec le champ
    d'application correspondant, délivrée par un organisme d'évaluation de la
    conformité (CAB) approuvé par le CCB après accréditation de BELAC ; »
  - en: « A CyberFundamentals (CyFun®) certification (level essential) or
    verification (level important or basic) with the relevant scope of
    application, granted by a conformity assessment body (CAB) authorised by
    the CCB after accreditation from BELAC; »
  - de: « Eine CyberFundamentals (CyFun®)-Zertifizierung (Level Essential)
    oder Verifizierung (Level Important oder Basic) mit dem entsprechenden
    Anwendungsbereich, ausgestellt von einer durch das ZCB zugelassene
    Konformitätsbewertungsstelle (CAB) nach Akkreditierung durch BELAC; »

  The same paragraph on important entities: « Deze entiteiten kunnen zich
  echter vrijwillig onderwerpen aan hetzelfde regime als essentiële entiteiten
  en krijgen als zodanig ook een vermoeden van conformiteit. » (fr « Toutefois,
  ces entités peuvent se soumettre volontairement au même régime que les
  entités essentielles et, à ce titre, bénéficient également d'une présomption
  de conformité. », en « However, these entities may voluntarily submit to the
  same regime as essential entities and as such also receive a presumption of
  conformity. », de « Diese Einrichtungen können sich jedoch freiwillig der
  gleichen Regelung wie die wesentlichen Einrichtungen unterwerfen und
  erhalten somit ebenfalls eine Konformitätsvermutung. »).
- **The timeline of the same page** (« Tijdlijn », « Calendrier »,
  « Timeline »), of which the section « The act in German » quotes the German
  version: an entity that must meet Important has until 18 April 2026 to obtain
  « ofwel een Basic of een Important verificatie » (fr « une vérification par
  un OEC (CAB) accrédité et agréé », en « either obtain a Basic or an Important
  verification by an accredited and authorised CAB »), and only Essential is
  certified: « een zekerheidsniveau Essential certificering », « une
  certification au niveau d'assurance Essential », « an Essential
  certification ». The Dutch, French and English timelines say what the German
  one says, route by route. For registration the English page repeats the
  German one's misprint, « until 18th March 2024 at the latest »; the Dutch and
  French pages say 18 March 2025 (« uiterlijk tot 18 maart 2025 », « au plus
  tard pour le 18 mars 2025 »).
- **The booklets** tie the certification audits to Essential, in the IMPORTANT
  booklet as well as in the ESSENTIAL one (Version 2025-10-01; the BASIC
  booklet has no such sentence):
  - en: « Controls related to management aspects [icon] have to be reviewed
    during every certification audit – whether it is an initial audit, a
    surveillance audit, or a recertification audit – when auditing the CyFun® "Essential" assurance level. These controls correspond to the management
    system principles that ISO/IEC 17021-1 requires certification bodies to
    assess when auditing any type of management system. »
  - fr: « Les contrôles relatifs aux aspects de management [icône] doivent
    être évalués lors de chaque audit de certification, qu'il s'agisse d'un
    audit initial, d'un audit de surveillance ou d'un audit de recertification,
    lorsque le niveau d'assurance CyFun® Essential est audité. Ces contrôles
    s'alignent sur les principes des systèmes de management que les organismes
    de certification doivent obligatoirement appliquer conformément à
    l'ISO/IEC 17021-1, quel que soit le type de système de management
    certifié. »
  - nl: « Controles met betrekking tot managementaspecten [icoon] moeten
    tijdens elke certificeringsaudit worden beoordeeld – ongeacht of het gaat
    om een initiële audit, een surveillance-audit of een hercertificeringsaudit
    – wanneer het CyFun®-zekerheidsniveau Essential wordt geaudit. »
  - de: « Kontrollen in Bezug auf Managementaspekte [Symbol] müssen bei jedem
    Zertifizierungsaudit – unabhängig davon, ob es sich um ein Erstaudit, ein
    Überwachungsaudit oder ein Rezertifizierungsaudit handelt – überprüft
    werden, wenn die CyFun®-Sicherheitsstufe „Essential" auditiert wird. »

  An icon marks those controls; the text extraction leaves a gap in its place
  and, in two booklets, interleaves the two columns, so the sentences are read
  back in the order of the page. The IMPORTANT booklet lists those controls for
  its own level in an annex (« ANNEX C: List of controls linked to the
  management aspects for the assurance level 'Important' »), and still ties the
  certification audit to Essential.

### The CCB advises Basic to the supply chain; the booklets say what Basic holds

- **The NIS2 page**, under « Niet in het toepassingsgebied? Vergeet
  identificatie en toeleveringsketen niet! » (fr « Pas dans le champ
  d'application ? N'oubliez pas l'identification et la chaîne
  d'approvisionnement ! », en « Not in scope? Don't forget identification and
  supply chain! »):
  - nl: « In deze context adviseert het Centrum voor Cybersecurity België alle organisaties die zich in de toeleveringsketen van een NIS2-entiteit kunnen bevinden, om ten minste te voldoen aan de maatregelen die zijn uiteengezet in het CyberFundamentals (CyFun®) Framework level Basic. Een NIS2-entiteit zou theoretisch de naleving van een bepaald CyFun®-niveau kunnen opleggen aan haar directe leveranciers of dienstverleners. »
  - fr: « Dans ce contexte, le Centre pour la Cybersécurité Belgique conseille à toutes les organisations susceptibles de se trouver dans la chaîne d'approvisionnement d'une entité NIS2 de se conformer au moins aux mesures énoncées dans le niveau Basic du CyberFundamentals (CyFun®) Framework. Une entité NIS2 pourrait théoriquement imposer le respect d'un certain niveau CyFun® à ses fournisseurs directs ou à ses prestataires de services. »
  - en: « In this context, the Centre for Cybersecurity Belgium advises all organisations that may find themselves in the supply chain of a NIS2 entity, to at least comply with the measures set out in the CyberFundamentals (CyFun®) Framework level Basic. A NIS2 entity could theoretically impose the compliance with a certain CyFun® level onto its direct suppliers or service providers. »
  - de: quoted in the section « The act in German » (« The CCB in German »),
    word for word the same on today's reading.

  That is the whole of the CCB's Basic advice on these pages. To NIS2 entities
  it advises CyFun as a framework (« adviseert het Centrum voor Cybersecurity
  België alle NIS2-entiteiten gebruik te maken van het CyberFundamentals
  (CyFun®) Framework »), and an entity determines its level on its risk
  assessment (« Entiteiten die op basis van hun risicobeoordeling bepalen dat
  ze moeten voldoen aan het zekerheidsniveau Basic [...] », the timeline).
- **The booklets**, all three (the Dutch sentence is also in the previous
  section):
  - nl: « Het zekerheidsniveau Basic omvat informatie- en cyberbeveiligingsvereisten die van toepassing zijn op alle organisaties. »
  - fr: « Le niveau d'assurance « Basic » comprend les exigences en matière d'information et de cybersécurité applicables à toutes les organisations. »
  - en: « The assurance level Basic includes information and cyber security requirements applicable for all organisations. » (the IMPORTANT booklet writes « cybersecurity »)
  - de: « Die Sicherheitsstufe Basic umfasst Anforderungen an die Informations- und Cybersicherheit, die für alle Organisationen gelten. »

  A description of what Basic contains, not a recommendation that every
  organisation take it.

### The attack-coverage figures

`frameworks/cyfun.yaml` gave each level a share of the common attacks it
covers, « ≈ 82 % (chiffres CCB 2024) » for Basic, « ≈ 94 % » for Important and
« ≈ 100 % » for Essential, with `coverage_basis: "Évaluation CCB 2024 contre
les profils d'attaque CERT-courants"`. The twelve 2025 booklets and the two
key-measures overviews of the previous section contain no percentage of attacks
covered, and no percentage sign at all; neither do the CyFun 2025 and 2023
pages, the « About », « CyFun® in Belgium » and home pages in the four
languages, or the NIS2 page in its four versions. The figures are removed. None
reached a page or a prompt: the loader reads only the ids, labels, order and
applicability of the levels.

### What the product said, and what it says now

| | Said | Says now |
|---|---|---|
| Important | « Certificering door een erkende CAB », « Certification par un CAB agréé » on the Important cards of `/be/assurance-niveaus-cyfun`, `/be/cyfun-conformiteit` and their French twins; « Te certificeren door een erkende CAB », « À faire certifier par un CAB agréé » in the Important summaries of `/be` and `/fr-be`; `target_attestation: "cab_certification_important"`, its note « Certification délivrée par un CAB agréé (BELAC + habilitation CCB). Surveillance + recertification cycles conformes à ISO/IEC 17021-1. » | a self-assessment, then a verification by a recognised CAB, as for Basic; only Essential is certified. `cab_verification_important`, its note quoting the CCB and tying the certification audits and ISO/IEC 17021-1 to Essential, as the booklets do |
| Basic | « Zelfevaluatie of een Basic-label van een erkende CAB », « Auto-évaluation ou label Basic délivré par un CAB agréé »; `self_assessment_or_cab_label_basic`, « Le label CAB Basic (« CyberFundamentals Basic Label ») est délivré par un CAB agréé après audit complet » | a self-assessment, then a verification by a CAB, after which the CyFun label may be asked for on Safeonweb@work. `cab_verification_basic` |
| Important entities | « Belangrijke entiteiten kunnen vrijwillig certificeren », « ook voor wie vrijwillig certificeert », « Les entités importantes peuvent se faire certifier volontairement », « y compris à qui se fait certifier volontairement » | they may submit voluntarily to the same regime as essential entities (art. 41), the CCB's words |
| The presumption | « Een conformiteitsverklaring of certificaat op het juiste zekerheidsniveau (Basic, Important of Essential) », « Une déclaration de conformité ou un certificat au bon niveau d'assurance » and the same for the MSPs (the fiches); « la certification CyFun par un CAB agréé bénéficie de la présomption de conformité » (`soft-law/be.yaml`); « entités certifiées par un CAB agréé sur l'un OU l'autre référentiel », « la PRÉSOMPTION DE CONFORMITÉ la plus forte » for Essential (`cyfun.yaml`) | a CyberFundamentals verification (Basic, Important) or certification (Essential) by a recognised CAB, as the « Conformiteit » paragraph says; one presumption, art. 42, whatever the level |
| The CAB in marketing copy | « klaar voor de CAB-certificering », « prêt pour la certification par un CAB », « de zelfevaluatie of de CAB-certificering », « l'auto-évaluation ou la certification par un CAB »; the keywords « CAB certificering », « certification CAB » | « de verificatie of de certificering door een CAB », « la vérification ou la certification par un CAB », the CCB's « te verifiëren of te certificeren »; « CAB verificatie », « vérification CAB » |
| Basic advice | « Het CCB raadt Basic aan als (geloofwaardige) basislijn voor elke (Belgische) organisatie », with « Important voor verhoogde risico's »; « De door het CCB aanbevolen basislijn »; « Voor elke Belgische organisatie is Basic de aanbevolen basislijn »; the badge « De aanbevolen basislijn »; « Telt mee voor NIS2 als basislijn »; « Het CCB beveelt Basic aan als baseline »; the French twins (« base de référence (crédible) pour toute organisation (belge) », « socle »); the dashboard in eleven locales; in `cyfun.yaml`, « Le CCB recommande typiquement Basic comme baseline pour toute organisation belge ; Important pour les EE de moindre criticité [...] ; Essential pour les EE des secteurs critiques » and « Toute organisation cherchant un baseline crédible » | Basic holds the requirements applicable to all organisations (booklets); the CCB advises at least Basic to the organisations that may be in the supply chain of a NIS2 entity, and such an entity could impose a CyFun level on its direct suppliers; an entity determines its level on its risk assessment, with the CCB's Selection Tool |
| Coverage | ≈ 82 %, ≈ 94 %, ≈ 100 % (« chiffres CCB 2024 ») | removed |

### Delivered on these facts (2026-10-29)

- The Dutch pages `/be`, `/be/assurance-niveaus-cyfun`, `/be/cyfun-conformiteit`,
  `/be/veelgestelde-vragen`, `/be/cyfun-maatregelen`, `/be/hosting-beveiliging`
  and their French twins `/fr-be`, `/fr-be/niveaux-assurance-cyfun`,
  `/fr-be/conformite-cyfun`, `/fr-be/questions-frequentes`,
  `/fr-be/mesures-cyfun`, `/fr-be/securite-hebergement`: level cards and
  summaries, banners, FAQ answers (hence their FAQ JSON-LD), keywords, calls to
  action, `dateModified`.
- The fiches `BELGIUM_BE` and `BELGIUM_FR` (`apps/web/src/lib/countries/belgium.ts`):
  description, structure, the supply-chain sector, the FAQ answer on CyFun;
  both now cite the Dutch and French NIS2 pages read today. `BELGIUM_DE` and
  the `/de-be` pages already said both things the CCB's way, and the English
  entry in `countries-seo.ts` says neither wrong thing.
- The CyFun dashboard (`app.dashboard.cyfun.assurance.body`) in the eleven
  locales of `translations.ts`, then the generated dictionaries.
- `frameworks/cyfun.yaml` (header, proportionality, the Basic, Important and
  Essential entries, the notes of the mapping to the directive, the ISO/IEC
  27001 basis) and `soft-law/be.yaml`.
- Unchanged, because they said neither thing: the document prompts, the legal
  frame of the documents, the three CyFun Foundations courses (the Dutch one
  has followed the CCB's supply-chain wording since the morning) and the
  seeded course descriptions.

Guard: `apps/web/test/cyfun-level-framing.test.ts`, extended. It reads the
Belgian sources it already read, each unit now tagged with the level of the
card or YAML entry it sits in, and fails, in any of the product's languages, on
a certification put on Basic or Important (bound to the level by the syntax,
named inside a Basic or Important card or entry, or a CAB certification with no
verification beside it), on an important entity that « certifies »
voluntarily, on a CyFun label issued by a CAB, and on Basic as every
organisation's baseline or the CCB recommending it so outside the supply chain.
It checks the level cards, the YAML attestations and notes, the fiches and the
dashboard field by field, and that this section quotes the CCB. Mutation-tested:
against the product sources as they stood before this correction (this section
and the guard kept), it fails 29 of its 302 tests, 16 sources among them, with
findings from all four new detectors: 39 Basic baselines, 23 certifications on
Basic or Important, 10 voluntary certifications, 5 labels from a CAB. One test
pinned the Dutch fiche's sources and was extended with the two pages read
today: `apps/web/test/country-belgium-de-fiche.test.ts`.

### Found while reading, not corrected in this change

- ~~`/be/cyfun-conformiteit` and `/fr-be/conformite-cyfun` count « 34 »,
  « 117 » and « 140 » measures « op hoofdniveau » / « de premier niveau ».~~
  **Corrected 2026-10-29:** 34 / 133 / 218 requirements, of which 13 / 22 /
  29 key measures (« kernmaatregelen », « mesures clés »), from the mapping
  above. `cyfun.yaml` no longer keeps the 2023 count as a second « view »
  (guard: `apps/web/test/cyfun-control-counts.test.ts`).
- The Essential cards (« monitoring (SOC), EDR/XDR/SIEM, red teaming, een
  jaarlijkse onafhankelijke audit en bestuur op directieniveau ») and the
  Important ones (« Dekt de tien NIS2-maatregelen van art. 21(2)(a-j) »)
  describe content this record has not read; so does the ISO/IEC 27001 block of
  `cyfun.yaml` (« Surveillance annuelle + recertification triennale
  conformément à ISO/IEC 27006 », « ≈ 90 % de recouvrement »). The NIS2 page
  sets its own conditions on ISO/IEC 27001: a certification issued by a CAB
  accredited by a signatory of the EA or IAF mutual recognition agreement and
  authorised by the CCB, with a scope and Statement of Applicability the CCB
  finds acceptable.
- ~~The dashboard's « Incidenten worden binnen 72 u bij het CCB gemeld », in
  eleven locales, leaves out the early warning within 24 hours (art. 35 § 1,
  1°).~~ **Corrected 2026-10-29:** each locale names the three stages in the
  official terms of its language version of art. 23(4), read on EUR-Lex the
  same day (nl « vroegtijdige waarschuwing », pt « alerta rápido », es
  « alerta temprana », hr « rano upozorenje », el « έγκαιρη προειδοποίηση »,
  sl « zgodnje opozorilo », pl « wczesne ostrzeżenie », it « preallarme »);
  the French and German use the Belgian law's own « alerte précoce » and
  « Frühwarnung ».
- ~~The English entry of `countries-seo.ts` says the three levels are « mapped
  to entity criticality ».~~ **Corrected 2026-10-29:** each entity determines
  its level on its own risk assessment, with the CCB's selection tool, and an
  essential entity may justify Important.
- `cyfun.yaml`, note of the mapping for Basic: « Pour Reglyze : recommander
  Basic aux clients BE EI ou micro-organisations qui ne savent pas par où
  commencer ». The booklets intend the entry level Small for
  micro-organisations. **Corrected 2026-10-29:** the note now points a
  micro-organisation at Small and says an NIS2 entity's level follows from its
  risk assessment.

## What the scope check says on public administration (2026-11-05)

<!-- meta: theme=scoping; type=scope-error; date=2026-11-05; surfaces=data,prompt; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

The engine read the regional and local levels on the directive's sentences. The
law was read again in the Moniteur (the source of this file) on 2026-11-05.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Three kinds of public administration, at any size | art. 3, § 3 | "3° l'entité est une entité de l'administration publique: a) qui dépend de l'Etat fédéral; b) qui dépend des entités fédérées, identifiée conformément à l'article 11, § 2; c) qui est une zone de secours au sens de l'article 14 de la loi du 15 mai 2007 relative à la sécurité civile ou le Service d'incendie et d'aide médicale urgente de la Région de Bruxelles-Capitale" | ✅ |
| Only the federal level is essential by name | art. 9 | "4° les entités de l'administration publique qui dépendent de l'Etat fédéral;" | ✅ |
| The rest is important | art. 10 | "1° les entités d'un type visé à l'annexe I ou II qui ne sont pas qualifiées d'entités essentielles sur la base de l'article 9;" | ✅ |
| The identification | art. 11, § 2 | "En ce qui concerne les entités qui dépendent des entités fédérées, l'autorité nationale de cybersécurité identifie les administrations publiques qui, à la suite d'une évaluation basée sur les risques, fournissent des services dont la perturbation pourrait avoir un impact important sur des activités sociétales ou économiques critiques." | ✅ |

| Level stated | Verdict | Basis |
|---|---|---|
| Federal, or not stated | essential, whatever the size | art. 3, § 3, 3°, a; art. 9, 4° |
| Regional | important, identification assumed | art. 3, § 3, 3°, b; art. 11, § 2; art. 10, 1° |
| Local | important, identification assumed, or a fire-rescue zone | art. 3, § 3, 3°, c; art. 10, 1° |

**Open.** Whether a commune or a province "depends on a federated entity" in the
sense of art. 3, § 3, 3°, b is not settled by the text: the verdict assumes it,
which can overstate.
