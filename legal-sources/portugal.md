# Portugal — legal sources (verified)

## DL 125/2025 — Regime Jurídico da Cibersegurança (RJC)

<!-- meta: theme=statute; type=reference; date=2026-07-26; surfaces=data,docs; guard=none -->

- **Official citation:** Decreto-Lei n.º 125/2025, de 4 de dezembro — Diário da
  República, 1.ª série, N.º 234, 04-12-2025, pp. 4–68.
- **Official URLs:**
  - Detail: https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-962603401
  - PDF (primary text): https://files.diariodarepublica.pt/1s/2025/12/23400/0000400068.pdf
- **Retrieved + read:** 2026-06-03 (PDF pages 1–5 + 62–65 read directly).

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Transposes NIS2 | Art. 1.º(1) | "aprova o regime jurídico da cibersegurança, transpondo … a Diretiva (UE) 2022/2555 … e revoga a Diretiva (UE) 2016/1148 (Diretiva SRI 1)" | ✅ |
| **New regime in annex** (not an amendment of DL 65/2021) | Art. 2.º | "É aprovado, em anexo ao presente decreto-lei … o regime jurídico da cibersegurança." | ✅ |
| Amends OTHER laws — **not** DL 65/2021 | Art. 3.º–7.º | amends Lei 53/2008 (Segurança Interna), Lei 109/2009 (Cibercrime), Lei 16/2022 (Comunicações Eletrónicas) | ✅ |
| Authority = CNCS, reinforced | Preâmbulo | "o Centro Nacional de Cibersegurança (CNCS) reforça a sua função de autoridade nacional de cibersegurança" | ✅ |
| QNRCS = reference framework | Preâmbulo | "o Quadro Nacional de Referência para a Cibersegurança, que reunirá e permitirá a divulgação de normas, padrões e boas práticas" | ✅ |
| Entry into force = 120 days after publication (→ 2026-04-03) | (final provision) + public summary | "entra em vigor 120 dias após a sua publicação" (pub. 2025-12-04) | ✅ (date corroborated; pin the exact article on next read) |

### Corrections to internal data (official source wins)

`packages/regulatory-data/src/country-configs/transposition-references.ts`
(PT block) currently states two things the official text contradicts:

1. ❌ *"DL 125/2025 amends DL 65/2021 … entities inherit the reference framework"*
   → **Wrong.** DL 125/2025 **approves a new regime in annex** (Art. 2.º) and
   does not amend DL 65/2021. (`pt.yaml`, which treats the prior NIS1 regime as
   superseded/revoked, is correct.)
2. ❌ *registry named "Registo Nacional de Cibersegurança (RNC)"* → the regime
   uses **registration on the CNCS electronic platform** (`pt.yaml` flags that
   PT does NOT use "Registo Nacional"). Confirm the exact term + article on the
   next read of the regime body before rewording customer-facing copy.

→ Follow-up: align `transposition-references.ts` PT block to the official text
(remove "amends DL 65/2021"; correct the registry term). `pt.yaml` already
matches and needs no change.

### Still to pin (next `verify-legal-source` pass)

- Exact **Entrada em vigor** article number (regime body) for the 120-day rule.
- Exact **registration** article + the platform's official name.

## QNRCS — Quadro Nacional de Referência para a Cibersegurança (CNCS)

<!-- meta: theme=framework; type=reference; date=2026-07-26; surfaces=data; guard=none -->

PT **does** have a real, structured, assessable national framework (unlike NL —
see `netherlands.md`). The QNRCS is a NIST-CSF-shaped control catalogue, not a
mere "collection of standards."

- **Official source (primary, read directly):** CNCS, *Quadro Nacional de
  Referência para a Cibersegurança* (PDF, "QNRCS WEB v20200123", 158 pp.) —
  https://www.cncs.gov.pt/docs/cncs-qnrcs-2019.pdf (also cncs.gov.pt/pt/quadro-nacional/).
  Certification scheme: https://www.cncs.gov.pt/docs/esquema-de-certificao-qnrcs-1.pdf ;
  updated certification notice **Aviso n.º 5146/2026/2, de 10 de março** (DR).
- **Retrieved + read:** 2026-06-07 (PDF pp. 1–10 read directly; structure + §4
  control list + Prefácio confirmed). CNCS HTML pages redirect-loop to WebFetch;
  the PDF is the reliable primary.

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| QNRCS is a structured control framework | §4 (Apresentação) | objectives → categorias → subcategorias with IDs, e.g. "ID.GA-1 — Os dispositivos físicos, redes e sistemas de informação existentes na organização devem ser inventariados" | ✅ |
| Five security objectives (NIST-CSF-shaped) | Sumário Executivo (p10) | "Está estruturado num conjunto de medidas de segurança que traduzem cinco objetivos específicos: Identificar, Proteger, Detetar, Responder e Recuperar." (current CNCS web version adds **Gerir** → 6) | ✅ |
| Categories + subcategories per objective, w/ implementation+evidence examples | Sumário (p10) | "Os objetivos são divididos em categorias e subcategorias, sendo que para cada subcategoria este documento referencia um exemplo de implementação tecnológica, de implementação processual e de evidência" | ✅ |
| Three capability levels per measure | §4 / certification | "Inicial, Intermédio e Avançado" per measure; certification levels **Básico, Substancial, Avançado** | ✅ |
| **Adherence is VOLUNTARY** | Prefácio (p3) | "disponibilizando as bases para que qualquer entidade possa, de uma forma voluntária, cumprir os requisitos mínimos de segurança das redes e sistemas de informação" + "convidamos toda a comunidade a adotar este Quadro Nacional de Referência" | ✅ |
| 2019 doc aligns with NIS1 (Lei 46/2018) — superseded edition | Sumário (p10) | "Em alinhamento com a Lei n.º 46/2018 … transpondo a Diretiva (UE) 2016/1148" | ⚠️ old edition |
| QNRCS = the regime's reference instrument | DL 125/2025 Preâmbulo | "o Quadro Nacional de Referência para a Cibersegurança … funciona como instrumento nacional de referência para a identificação das normas, padrões e boas práticas" | ✅ |
| **RJC mandates minimum measures, graded by Conformity Level** | DL 125/2025 (público) | "Os Níveis de Conformidade constituem um sistema de classificação, graduado com os níveis básico, substancial e elevado, do qual resultam as medidas de cibersegurança mínimas que devem ser cumpridas pelas entidades abrangidas pelo Regime Jurídico da Cibersegurança." | ✅ |
| CNCS to publish implementing regs for QNRCS + minimum measures | DL 125/2025 | execution norms to be approved/published by CNCS "quanto ao funcionamento da plataforma eletrónica, Quadro Nacional de Referência para a Cibersegurança e medidas de cibersegurança mínimas" | ✅ |
| **SIX objectives, announced March 2026 (Gerir added)** | Aviso n.º 5146/2026/2 (10-03-2026) + CNCS | "controlos e medidas … que visam cumprir seis objetivos: Gerir, Identificar, Proteger, Detetar, Responder e Recuperar"; "Gerir" = transverse (org context, risk mgmt, roles, policy, supervision) | ⚠️ ANNOUNCEMENT ONLY, superseded for ids |

> ⛔ **The line above used to read "NIST-CSF-2.0-shaped", and that half-sentence cost three months of wrong citations.** It described the March announcement, before the catalogue existed. The catalogue published on 2026-06-22 as Anexo I do Regulamento n.º 756/2026 carries **Portuguese** ids — `GR.PP-1`, `PR.SD-5`, `RC.PR-2` — and the NIST references it prints are cross-reference metadata. Until 2026-10-03 the whole document surface cited the provisional NIST-shaped ids (`GV.PO-01`, `PR.DS-11`, `RC.RP-02`): **none of them exist in the QNRCS**. Read the section "QNRCS 2.ª versão" below for the ids in force, never this row.

### Product implication (native vs substrate — CONFIRMED NATIVE)

The current internal model (PT = NIS2-substrate, "no native tree") is **wrong/outdated**. **PT IS a
native-framework country: the QNRCS is a real, structured, assessable framework
(6 objectives → categories → subcategory controls + capability levels), and it is
INTEGRATED with the binding RJC** — DL 125/2025 sets graded Conformity Levels
(básico/substancial/elevado) whose mandated *minimum measures* are expressed via
the QNRCS + CNCS implementing regs. So it is **not** a purely-voluntary overlay
(that framing was the 2019/NIS1 edition). PT is on par with BE CyFun / FR ReCyF —
authorable as a native assessment tree — and far beyond NL (which has none).

⇒ **PT should flip substrate → native (QNRCS tree)** — materially upgrading the
first paying customer (a Portuguese municipal utility). PT's `pt` locale
already exists, so PT-native needs **no new i18n** — just the QNRCS tree + the
1.A–1.H surface wiring.

### Still to pin (when authoring the QNRCS tree)

- The **current published QNRCS control set** (6 objectives → categories →
  subcategory IDs, e.g. GV.*/ID.*/PR.*/DE.*/RS.*/RC.*) from the latest CNCS
  edition — author from this, NOT the 2019 5-objective PDF read here.
- ~~The CNCS implementing regulation mapping **minimum measures per Conformity
  Level** (básico/substancial/elevado)~~ → **published 2026-06-22** as
  Regulamento n.º 756/2026 Annexes III/IV (see section below).
- ~~EIF: confirm the QNRCS execution norms' own publication/effect date~~ →
  **pinned**: Regulamento n.º 756/2026 published 2026-06-22, in force
  2026-06-23 (see section below).

## Regulamento n.º 756/2026 (CNCS) — RJC implementing regulation

<!-- meta: theme=framework; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Official citation:** Regulamento n.º 756/2026 (Centro Nacional de
  Cibersegurança) — Diário da República, 2.ª série, n.º 118, 22-06-2026.
  In force the day after publication → **2026-06-23**.
- **Official URLs:**
  - Detail: https://diariodarepublica.pt/dr/detalhe/regulamento/756-2026-1134399056
  - PDF (primary text): https://files.diariodarepublica.pt/2s/2026/06/118000000/0003200120.pdf
- **Corroboration (tier 2/3):**
  - PLMJ note: https://www.plmj.com/pt/conhecimento/notas-informativas/Regulamento-do-Regime-Juridico-da-Ciberseguranca/34594/
  - CMS note: https://cms.law/pt/prt/news-information/regulamento-de-execucao-do-regime-juridico-da-ciberseguranca-regulamento-n.o-756-2026
  - ECO/Lusa on the CNCS "60 dias úteis" statement:
    https://eco.sapo.pt/2026/06/24/entidades-tem-60-dias-uteis-para-se-registarem-na-plataforma-myciber-no-ambito-da-ciberseguranca/
- **Retrieved + verified:** 2026-07-01 (against the official Diário da
  República texts of the Regulamento + DL 125/2025).

### Verified facts (three corrections to the repo's previous deadline model)

| Fact | Where | What the official text establishes | Status |
|---|---|---|---|
| **MyCiber registration window** — platform opened; entities already active on 2026-04-03 have **60 days from platform availability** (2026-06-22) to register + self-identify; prudent calendar-day reading closes **2026-08-21**. New entities: **30 days from starting activity**. | Regulamento art. 8.º(1) (+ art. 8.º(2) for new entities) | The Regulamento opened myciber.gov.pt and set the registration windows. The CNCS coordinator publicly said "60 dias úteis" (≈ mid-September 2026; ECO/Lusa 2026-06-24) but **no official end date is published** → product advises registering well before 2026-08-21. | ✅ |
| **No blanket "no-coimas period"** — fines for non-deferred duties are **live since 2026-04-03** (essential: up to €10M or 2% worldwide turnover; important: €7M or 1.4%, art. 61.º). Entities can **request a fine waiver until 2027-04-03** (art. 65.º, 12 months from entry into force) and, except intent, CNCS must issue a **prior warning with a cure period** before proceedings (art. 66.º(5)). | DL 125/2025 arts. 61.º, 65.º, 66.º(5) | The repo's previous "no-fines period until 2027-04-01 (RJC art. 86.º)" model was wrong on the date, the article and the semantics (waiver-on-request, not automatic grace). | ✅ |
| **Security measures deferred 24 months from the Regulamento** — obligations of arts. 27.º-30.º + 33.º (measures, supply chain, residual risk, annual report) + their fines take effect **~2028-06-22**, NOT 2028-04-01. | Regulamento art. 10.º(2) | Also: **QNRCS v2** published as **Annex I** of the Regulamento (NIST CSF 2.0-aligned, 6 objectives); risk matrix Annex II; minimum measures Annexes III/IV graded básico/substancial/elevado. | ✅ |

### Superseded internal model (what changed in the repo, 2026-07-01)

The previous model in `packages/regulatory-data/src/country-configs/pt-deadlines.ts`
(and its copy mirrors + web surfaces) encoded:

1. ❌ *MyCiber registration: 20 dias úteis from EIF → deadline 2026-04-23,
   platform pending* → **superseded for registration** by Regulamento art.
   8.º(1) (60 days from platform availability → 2026-08-21 prudent).
   **Careful:** the 20-working-day duty that DID exist and expired on
   **2026-05-04** is a DIFFERENT obligation — communicating the
   **responsável de cibersegurança + 24/7 contact point** (arts. 31.º(4)/
   32.º(4) DL 125/2025). Pages describing THAT duty correctly keep
   "20 dias úteis".
2. ❌ *no-coimas until 2027-04-01 (art. 86.º)* → corrected to the art. 65.º
   fine-waiver-on-request window ending **2027-04-03** + art. 66.º(5) prior
   warning; fines for non-deferred duties live since 2026-04-03 (art. 61.º).
3. ❌ *full implementation 2028-04-01 (art. 87.º)* → corrected to
   **2028-06-22** per Regulamento art. 10.º(2) (24 months from the
   implementing regulation), covering RJC arts. 27.º-30.º + 33.º.

Incident notification (24h/72h/final report) is live since 2026-04-03 and
NOT deferred — the repo already had this right (no change).

> Corrected 2026-10-28: the date and the absence of deferral were right; the
> "24h/72h/final report" shape was not. The RJC sets an initial notification at
> 24 h, an update at 72 h only when necessary, an end-of-impact notification
> 24 h after the impact ends, and a final report 30 working days after that
> notification. See "Incident notification under the RJC: five acts, not the
> directive's three" and "The RJC's incident regime in the product" below.

## Which QNRCS control anchors which generated document (decided 2026-10-03)

<!-- meta: theme=documents; type=wrong-citation,test-pinned; date=2026-10-03; surfaces=data,prompt,doc-gen,test; guard=packages/regulatory-data/test/pt-template-anchors.test.ts -->

Method and obligations: **ADR 0041 — a framework edition is reconciled on
every surface, or on none**.

The twenty Portuguese document cards and the prompts that generate them were
re-anchored on the catalogue in force on 2026-10-03. Several controls name the
document outright, which makes the choice the Regulamento's rather than ours;
six come from the NIST cross-references Anexo I itself publishes; the rest rest
on the official statement quoted beside each card in
`packages/regulatory-data/src/country-configs/doc-templates.ts`.

**A Portuguese reviewer should contest any single line of this table without
having to re-derive the rest.** That is why the statement is quoted, in
Portuguese, next to every one.

| document | control | why |
|---|---|---|
| Política de Segurança da Informação | `GR.PP-1` | "As Políticas para a gestão de Cibersegurança, incluindo a Política de Cibersegurança, são definidas…" |
| Procedimento de Gestão de Incidentes | `GR.PP-2` | "O Plano de Resposta a Incidentes é definido, comunicado, mantido e melhorado." |
| Plano de Recuperação de Negócio | `GR.PP-3` | "O Plano de Recuperação de Desastres é definido, comunicado, mantido e melhorado." Execution: `RC.PR-2/3/5/6`, communication `RC.CO-1`. |
| Plano de Continuidade de Negócio | `GR.CO-5` | "Os requisitos de resiliência necessários para suportar a prestação de serviços críticos são definidos." With `PR.RI-4`, `PR.RI-5`, `RC.PR-1`. **The QNRCS does not name a "plano de continuidade de negócio"**; do not invent a control for it. |
| Política de Segurança dos Recursos Humanos | `GR.FR-4` | "A cibersegurança é contemplada nos processos de gestão de recursos humanos." |
| Regulamento Interno de Utilização | `GR.FR-3` | "As funções, responsabilidades e autoridades … são definidas e comunicadas ao pessoal, fornecedores e partes interessadas." |
| Política de Segurança da Cadeia de Abastecimento | `GR.CA-1` | "As políticas e processos de gestão dos riscos da cadeia de abastecimento são identificados, estabelecidos, avaliados e geridos." |
| Política de Gestão de Fornecedores Relevantes | `GR.CA-4` | "Os fornecedores são periodicamente avaliados." With `GR.CA-5/6/9/10`. |
| Política de Gestão de Ativos | `ID.GA-1` | "Os equipamentos e os demais recursos físicos … são inventariados." With `ID.GA-2/5/7`. |
| Política de Gestão de Vulnerabilidades | `ID.AR-1` | "As vulnerabilidades dos ativos são identificadas e documentadas…" Published cross-reference: NIST `ID.RA-01` → `ID.AR-1`. |
| Política de Gestão de Patches | `ID.AR-7` | "processos para receber informação, analisar e responder a vulnerabilidades provenientes de fontes internas e externas." |
| Política de Gestão de Acessos Lógicos | `PR.GA-5` | "As permissões de acesso … são definidas numa política … menor privilégio e separação de funções." |
| Política de Segurança Física | `PR.GA-6` | "Os controlos de acesso físico a ativos da entidade são geridos, monitorizados e aplicados em função do risco." |
| Política de Formação e Sensibilização | `PR.FC-1` | "Todo o pessoal é sensibilizado e formado em matérias de cibersegurança." Published cross-reference: NIST `PR.AT-01` → `PR.FC-1`. |
| Política de Criptografia | `PR.SD-1` | "protege a confidencialidade, integridade e disponibilidade dos dados em repouso." Published: NIST `PR.DS-01` → `PR.SD-1`. With `PR.SD-2`. |
| Política de Segurança dos Dados (DLP) | `PR.SD-3` | "A entidade implementa proteções que evitem exfiltração de dados." The framework names data-loss prevention itself. |
| Política de Gestão de Cópias de Segurança | `PR.SD-5` | "São realizadas, mantidas e testadas cópias de segurança dos dados da entidade." |
| Política de Registo e Supervisão (Logging) | `PR.SP-2` | "Os logs de sistemas e o histórico de atividades são documentados, implementados e revistos…" Monitoring side `DE.MC-1` (published: NIST `DE.CM-01` → `DE.MC-1`). |
| Política de Segurança do Desenvolvimento | `PR.SP-4` | "É implementado um ciclo de vida de desenvolvimento seguro de software." Published: NIST `PR.PS-06` → `PR.SP-4`. |
| Procedimento de Notificação ao CNCS | `RS.NC-1` | "As partes interessadas internas e externas são notificadas dos incidentes." Published: NIST `RS.CO-02` → `RS.NC-1`. |

Three cards used to share `PR.AT-01` (human resources, training, the
acceptable-use rules). Only training sits on the training control now.

**Objectives with no primary card: Detetar and Recuperar.** Both are cited
inside the prompts where they belong, and forcing a primary card onto either
would put a document on a control that does not describe it. Three separate
tests used to demand that all six objectives be covered; all three passed
throughout the three months when every anchor was a revoked id, which is the
lesson: coverage of objectives measures nothing about anchors.

Enforced by `packages/regulatory-data/test/pt-template-anchors.test.ts`
(existence in the corpus, objective matches the anchor, decisions pinned by
name) and `apps/ai-service/test/pt-prompt-anchor-parity.test.ts` (the three
runtime blocks: preamble, type-keyed prompts, per-card overrides).

## QNRCS 2.ª versão — Anexo I do Regulamento n.º 756/2026 (INGESTED VERBATIM)

<!-- meta: theme=framework; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **What:** the OFFICIAL second version of the QNRCS, published as **Annex I**
  of Regulamento n.º 756/2026 (above). Replaces every provisional/NIST-proxy
  reading of the QNRCS in this repo.
- **Ingested where:** `packages/regulatory-data/src/nis2-mappings/frameworks/qnrcs.yaml`
  (tree + flat catalogue, `status: in_force`) +
  `packages/regulatory-data/src/nis2-mappings/qnrcs-conformity.ts` (Annex III
  dataset) + frozen provisional snapshot in
  `packages/regulatory-data/src/nis2-mappings/qnrcs-legacy.ts` (pre-publication
  assessments stay readable, pinned via `gap_assessments.framework_version`).
- **Source of extraction:** the official signed PDF
  (https://files.diariodarepublica.pt/2s/2026/06/118000000/0003200120.pdf,
  INCM-signed, 89 pp.), parsed directly (PyMuPDF) and cross-validated against
  an independent pdftotext extraction. **Retrieved + verified: 2026-07-02.**

### Verified facts

| Fact | Where | What the official text establishes | Status |
|---|---|---|---|
| **Structure: 6 objetivos → 22 categorias → 107 controlos** | Annex I §§4-9 (pp. 27-65 of the DR PDF) | Objetivos carry PORTUGUESE ids: **GR** (Gerir), ID, PR, DE, RS, RC. Categories GR.CO GR.GR GR.FR GR.PP GR.SP GR.CA / ID.GA ID.AR ID.MC / PR.GA PR.FC PR.SD PR.SP PR.RI / DE.MC DE.AE / RS.GI RS.AI RS.NC RS.MI / RC.PR RC.CO. Per-category counts: 6/5/4/3/3/10, 9/7/3, 7/2/5/4/5, 7/6, 5/4/2/2, 6/2 = **107**. | ✅ |
| **Each control = enunciado + Descrição + Referências** | Annex I, every control block | Cross-references cite NIST CSF 2.0, CyFun 2025, ISO/IEC 27001:2022, ISO/IEC 27002:2022, CIS CSC v8.1, NIST SP-800-53 Rev.5. Kept as METADATA (`cross_references`) — no NIS2 mapping is published anywhere in the Regulamento (`nis2_to_qnrcs: []` is deliberate). | ✅ |
| **Annex II: risk matrix is CNCS-produced** | Annex II (pp. 66-68) | Per-sector/subsector matrix values → each entity's conformity level. NOT computable offline → the entity DECLARES its level (MyCiber/CNCS); Reglyze never derives it. | ✅ |
| **Annex III: mandatory minimum measures per conformity level** | Annex III (pp. 69-85), art. 30.º | Tables "Medidas de Cibersegurança Mínimas para Entidades Essenciais e Importantes": **43 rows básico + 59 substancial + 51 elevado = 153 (control × level) rows**, each = control + Medida + Critério de Verificação. Levels CUMULATIVE (art. 30.º n.º 2) → mandated CONTROL sets **43 / 75 / 92** of 107 (15 controls mandated at no level). Conformity is binary per measure; no percentages. | ✅ |
| **RC.CO has exactly 2 controls** | Annex I §9.2 (p. 65) | The "RC.CO-4" string on that page is the **NIST CSF cross-reference** of control RC.CO-2 ("NIST CSF 2.0 — RC.CO-4"), not a QNRCS control id. | ✅ |

### Typographic findings in the official PDF (handled, documented)

- **Control-id irregularities normalised with note:** "GR. SP-1" printed with a
  stray space (→ GR.SP-1); heading separators inconsistent ("ID.MC-1-",
  "PR.SD-5 -", PR.GA-4 glued mid-line after the previous control's
  references); RC.PR-5 uses "Definição" instead of "Descrição".
- **Official typos kept VERBATIM (quoted text):** NIST references "GV.OV-O2"
  (GR.SP-2) and "GR.OV-3" (GR.SP-3) — malformed NIST ids in the official
  references; "panos de comunicação" (RC.CO-2 description, sic);
  "ciberresiliência" printed solid in RC.PR-4 vs "ciber-resiliência" elsewhere.
- **Two wrap-artifact repairs in Annex III extraction (documented in
  qnrcs-conformity.ts):** "tecn ologias" → "tecnologias" and "pósincidentes" →
  "pós-incidentes" (ID.MC-3 básico row; unhyphenated line wrap / soft-hyphen
  join, verified against the rendered page).

### Review state

- Tree structure, ids, counts, level membership: **verified 100%** (double
  extraction agreement + visual page checks) → ships live.
- Annex III measure/criterion TEXTS: extracted verbatim, visually spot-checked
  per level, but **review-pending** behind
  `QNRCS_ANNEX3_TEXTS_REVIEWED = false` until the native PT review
  (the customer's lead and the maintainer) signs them off.

## Follow-up executed — alignment of `transposition-references.ts` (2026-07-26)

<!-- meta: theme=statute; type=delivery; date=2026-07-26; surfaces=data; guard=none -->

The follow-up recorded higher up ("align `transposition-references.ts` PT block to
the official text") **had never been done**. It is done now, and the
reason for the delay deserves to be noted.

### Why it had not been done

The test `country-configs-transposition-references.test.ts` contained:

```ts
test("PT additionalNationalRequirements name the RNC registry", () => {
  expect(en).toMatch(/RNC/);
  expect(en).toMatch(/Registo Nacional de Cibersegurança/);
});
```

The test **demanded the false fact**. Anyone who applied the correction already
documented in this file saw CI turn red and, very
probably, reverted. The error was not only present
in the data: it was **protected by the test suite**.

Test rewritten to pin the MyCiber platform and to require the explicit negation
of the RNC. Rule adopted: **when the `docs/legal-sources` index contradicts a test,
the index wins and the test is rewritten.** A test that freezes a legal
fact is worth only what the fact is worth.

### What was corrected in the PT bullets

1. "DL 125/2025 amends DL 65/2021" → the decree **approves a new regime in
   annex** (art. 2.º) and amends **other laws** (art. 3.º to 7.º: Lei
   53/2008, Lei 109/2009, Lei 16/2022).
2. « Registo Nacional de Cibersegurança (RNC) » → **MyCiber** (myciber.gov.pt),
   with the windows of Regulamento art. 8.º: **60 days from the platform being
   made available on 22 June 2026**, that is a prudent closing on
   **21 August 2026**, and **30 days** for an entity that starts its activity
   afterwards.
3. "Four-month transitional period … to complete registration" → the 120 days
   and the registration window are **two distinct clocks**. The 120
   days led to entry into force on 3 April 2026; registration only
   opened on 22 June 2026. The four months were for preparing, not for
   registering.

⚠️ **21 August 2026 is less than a month away.** It is the only deadline of a country
covered by Reglyze that expires in the short term, and until now our data
announced a window closed since April.

## The tabletop prompt still cited the repealed law (found 2026-07-27)

<!-- meta: theme=statute; type=stale-statute,test-pinned; date=2026-07-27; surfaces=prompt,test; guard=apps/ai-service/test/tabletop-prompt.test.ts -->

`apps/ai-service/src/lib/tabletop-prompt.ts` maintained by hand, in its cached
methodology block, an "authority per country" table which gave for
Portugal:

```
| Portugal| CNCS (Centro Nacional de Cibersegurança) | Decreto-Lei 65/2021 alterado |
```

The transposition is **DL 125/2025 (RJC)**, verified higher up in this file,
and correctly named by the `TABLETOP_CONFIGS` config **ten lines further down
in the same file**. The cached block therefore contradicted the neighbouring config.

Aggravating factor: the test `includes the FR/IT/PT/DE transposition statutes` asserted
`toMatch(/Decreto-Lei 65\/2021/)`. That test already carried, three lines above,
the comment explaining that it had pinned a fabricated French law. The
pass that had corrected the French line had not looked at the next line.

The table is now **derived** from `getTranspositionReferencesConfig()` at
module load, so byte-identical from one request to the next (the block is
cached), but unable to diverge from the legal index. It covers the eight
configured countries instead of six: Poland and Croatia were missing although
they both have a tabletop config.

Also corrected in passing in the same block: `23(4)(a)-(d)` → `(a)-(e)`, and the
timeline that published only three of the five timed acts.

## The repealed law had survived in the remediation prompt (found 2026-07-27)

<!-- meta: theme=statute; type=stale-statute; date=2026-07-27; surfaces=prompt,test; guard=packages/regulatory-data/test/pt-repealed-statute-not-the-transposition.test.ts -->

After the tabletop correction that same morning, `remediation-prompt.ts` still
said, in its per-country vocabulary block:

> `- **PT — Portugal.** Competent authority: CNCS. Transposition: **Decreto-Lei
> n.º 65/2021 alterado para transpor a NIS2.**`

Wrong in two ways. DL 125/2025 **does not amend** the old NIS1 text: its
annex approves a new regime, the RJC, and its art. 9 **repeals** Lei
n.º 46/2018 and DL n.º 65/2021. Presenting the repealed text as the
transposition inverts the relationship.

Worth noting, and reassuring: the data layer was **correct everywhere
else**. `transposition-references.ts`, `regimes-interaction.yaml` and
`countries/pt.yaml` all say explicitly "ABROGÉES par DL 125/2025 art. 9"
and "ancien régime NIS1". Only the prompt had kept the old wording, which
confirms that the prompt layer is the last place where corrections
arrive.

Also corrected: `packages/prompts/test/templates.test.ts` carried a fixture
`legalReferences: ["Decreto-Lei 65/2021"]`. A fixture is not rendered to a
customer, but it serves as an example to whoever reads the test to understand the
expected shape, and it taught the wrong law.


## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Enquadramento Legal e Normativo » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: DL 125/2025 (EIF 2026-04-03), QNRCS v2 (Anexo I Reg. 756/2026), MyCiber art. 8.º (60/30 days), deferral of the measures art. 10.º(2) (~06-2028), coimas art. 61.º + dispensa 65.º + advertência 66.º(5). Governance: article not verified → absent. Rule: any fact absent from
this index is ABSENT from the block; enriching means verifying here first.

## Scope and classification: RJC (annex to DL 125/2025) Arts. 3.º, 4.º, 6.º to 9.º and Anexos I to III, read in full (2026-10-23)

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing; guard=none -->

- **Official citation:** Decreto-Lei n.º 125/2025, de 4 de dezembro. The DRE
  detail page reads "Publicação: Diário da República n.º 234/2025, Série I de
  2025-12-04" and "Data de Publicação: 2025-12-04", with the status "Em vigor".
  The regime is the annex, "ANEXO (a que se refere o artigo 2.º) Regime jurídico
  da cibersegurança", whose articles restart at 1.º and whose text calls itself
  "o presente decreto-lei". Below, *RJC art.* is an article of that annex and
  *DL art.* an article of the decree-law itself.
- **Primary text read:** the PDF recorded at the top of this file,
  https://files.diariodarepublica.pt/1s/2025/12/23400/0000400068.pdf (65 pages),
  fetched with `curl` and a browser User-Agent and converted with `pdftotext`
  (reading order and `-layout`). PDF pages: DL art. 11.º p. 7; RJC art. 3.º
  pp. 12-14, art. 4.º p. 14, arts. 6.º and 7.º pp. 16-17, art. 8.º pp. 17-18,
  art. 9.º p. 18, art. 15.º p. 21, art. 35.º pp. 37-38; Anexo I pp. 61-63
  (sector 8 on p. 63), Anexo II p. 64, Anexo III p. 65.
- **Detail page:** https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-962603401
  answers `curl` with "JavaScript is required"; rendered with Playwright. Every
  quote below was checked against both its text and the PDF; it served to rejoin
  quotes that the PDF splits across page breaks. Its "Modificações" tab lists "MODIFICAÇÕES PRODUZIDAS (6
  associações)", the acts this decree-law amends or repeals, and no amendment of
  DL 125/2025 itself.
- **Retrieved and read:** 2026-10-23.

### Why this section exists

The Portuguese diagnostic (`apps/web/src/components/diagnostic/pt-config.ts`)
told a visitor that a "fornecedor DNS, registo TLD, fornecedor de serviços
cloud, centro de dados, CDN ou prestador de serviços de confiança" is covered
regardless of size and is an essential entity, citing "art. 4.º DL n.º
125/2025". RJC art. 4.º is the territorial rule. The size-independent list is
RJC art. 3.º n.º 2 and the essential list is RJC art. 6.º n.º 1: neither names
cloud, data-centre or CDN providers, and only a *qualified* trust service
provider is essential at any size.

### Fact table

| Fact | Article | Verbatim quote (Portuguese) | English gloss | Status |
|---|---|---|---|---|
| In force since 2026-04-03; no amendment recorded by DRE | DL art. 11.º; DRE, "Modificações" | "O presente decreto-lei entra em vigor 120 dias após a sua publicação." / DRE: "Revoga, a partir de 3 de abril de 2026, o Decreto-Lei n.º 65/2021, de 30 de julho" | In force 120 days after publication on 2025-12-04; DRE dates the decree's effects from 3 April 2026. This is the entry-into-force article left to pin in the first section of this file. | verified |
| General size test, private entities only | RJC art. 3.º n.º 1 | "O presente decreto-lei aplica-se às entidades privadas de um dos tipos que constam nos anexos i ou ii ao presente decreto-lei e do qual fazem parte integrante, que, respeitados os critérios de âmbito territorial fixados no artigo seguinte: a) Sejam qualificadas como médias empresas nos termos do artigo 2.º do anexo iii ao presente decreto-lei e do qual faz parte integrante, correspondentes ao previsto na Recomendação 2003/361/CE, da Comissão, de 6 de maio de 2003, ou que excedam os limiares relativos às médias empresas previstos no n.º 1 desse artigo; e b) Prestem os seus serviços ou exerçam as suas atividades na União Europeia." | Private entities of an Anexo I or II type that are medium-sized or larger under Anexo III art. 2.º and provide services or carry out activities in the EU. Public entities enter through n.º 2 to n.º 6. | verified |
| The thresholds, printed in the decree | Anexo III, art. 2.º n.º 1 to 3 | "A categoria das micro, pequenas e médias empresas (PME) é constituída por empresas que empregam menos de 250 pessoas e cujo volume de negócios anual não excede 50 milhões de euros ou cujo balanço total anual não excede 43 milhões de euros." / "Na categoria das PME, uma pequena empresa é definida como uma empresa que emprega menos de 50 pessoas e cujo volume de negócios anual ou balanço total anual não excede 10 milhões de euros." / "Na categoria das PME, uma microempresa é definida como uma empresa que emprega menos de 10 pessoas e cujo volume de negócios anual ou balanço total anual não excede 2 milhões de euros." | SME: fewer than 250 persons, and turnover not above EUR 50 M or balance sheet not above EUR 43 M. Small: fewer than 50 persons, and turnover or balance sheet not above EUR 10 M. Micro: fewer than 10 persons, and not above EUR 2 M. | verified |
| Anexo III stops at the size categories | Anexo III; every mention of Recommendation 2003/361/CE in the PDF | Anexo III has two articles, "Empresa" and "Categorias". | Nothing on partner or linked enterprises, and nothing on public-body control. The decree mentions the Recommendation six times, always through Anexo III: five times its art. 2.º, once (art. 7.º n.º 3 f)) the annex as a whole. The directive (Art. 2(1), second subparagraph) and the Italian decree (Art. 3 c. 3 and c. 4) both address these points; the Portuguese text does not. | verified (absence established by full-text search of the PDF) |
| **In scope at any size and of any nature: three groups of providers** | RJC art. 3.º n.º 2, alínea a) | "O presente decreto-lei aplica-se igualmente às entidades de um dos tipos que constam nos anexos i ou ii ao presente decreto-lei que, independentemente da sua natureza e dimensão e respeitados os critérios de âmbito territorial fixados no artigo seguinte, preencham pelo menos um dos seguintes requisitos: a) A entidade em causa seja: i) Fornecedor de redes públicas de comunicações eletrónicas ou prestador de serviços de comunicações eletrónicas acessíveis ao público; ii) Prestador de serviços de confiança; iii) Registo de nomes de domínio de topo, prestador de serviços de registo de nomes de domínio, e prestador de serviços de sistemas de nomes de domínio;" | Regardless of nature and size: providers of public e-communications networks or publicly available e-communications services; trust service providers, qualified or not; TLD registries, domain name registration service providers and DNS service providers. **Cloud, data-centre, CDN, IXP, MSP and MSSP providers are not listed.** | verified |
| In scope at any size on qualitative grounds | RJC art. 3.º n.º 2, alíneas b) to e) | "b) A entidade em causa seja o único prestador de um serviço que é essencial para a manutenção de atividades sociais ou económicas críticas, … c) Uma perturbação do serviço por si prestado possa afetar consideravelmente a segurança pública, a proteção pública ou a saúde pública; d) Uma perturbação do serviço por si prestado possa gerar riscos sistémicos consideráveis, … e) A entidade seja crítica devido à sua importância específica, a nível nacional ou regional, para o setor ou tipo de serviço em causa, ou para outros setores interdependentes." | Sole provider of an essential service; considerable impact on public security, safety or health; considerable systemic risk; specific national or regional importance. CNCS decides the class of such an entity (art. 6.º n.º 1 f) and n.º 3, art. 8.º n.º 3). | verified |
| Public administration, with no size condition, three financial supervisors excepted | RJC art. 3.º n.º 3 | "O presente decreto-lei aplica-se à Administração Pública, abrangendo: a) Os serviços da administração direta do Estado, central e periférica; b) Os serviços da administração direta das Regiões Autónomas, central e periférica; c) As entidades da administração indireta do Estado; d) As entidades da administração indireta das Regiões Autónomas; e) As entidades da administração autónoma; f) Os organismos e as entidades administrativas independentes, com exceção do Banco de Portugal, da Comissão do Mercado dos Valores Mobiliários e da Autoridade de Supervisão de Seguros e Fundos de Pensões." | State and regional direct and indirect administration, autonomous administration, independent bodies other than the Bank of Portugal, CMVM and ASF. | verified |
| Named state bodies | RJC art. 3.º n.º 4 | "O presente decreto-lei aplica-se às seguintes entidades: a) Provedoria de Justiça; b) Conselho Económico e Social; c) Serviços técnicos e administrativos da Presidência da República, da Assembleia da República, dos tribunais e das secretarias com competência para a tramitação de procedimentos, do Conselho Superior da Magistratura, do Conselho Superior dos Tribunais Administrativos e Fiscais e do Conselho Superior do Ministério Público, sem prejuízo do disposto no n.º 7." | Ombudsman, Economic and Social Council, and the technical and administrative services of the Presidency, Parliament, courts and judicial councils. | verified |
| Critical entities at any size | RJC art. 3.º n.º 5 | "O presente decreto-lei aplica-se às entidades que, independentemente da sua dimensão, sejam identificadas como entidades críticas nos termos do disposto da Diretiva (UE) 2022/2557, do Parlamento Europeu e o Conselho, de 14 de dezembro de 2022, relativa à resiliência das entidades críticas, sem prejuízo da alínea f) do n.º 3." | CER critical entities, at any size. | verified |
| Higher education | RJC art. 3.º n.º 6 | "O presente decreto-lei aplica-se às instituições de ensino superior." | Higher-education institutions, with no size condition and without distinguishing public from private. | verified |
| **Exits:** defence, police, intelligence, classified networks, and their exclusive private suppliers | RJC art. 3.º n.º 7 | "O presente decreto-lei não é aplicável: a) Ao Estado-Maior-General das Forças Armadas e dos ramos das Forças Armadas, no que respeita às redes e sistemas de informação diretamente relacionados com o seu comando e controlo; … c) Às entidades públicas com responsabilidades exclusivas em matéria de produção de informações, … f) Às entidades privadas que prestem serviços exclusivamente a uma ou mais entidades previstas nas alíneas anteriores e no que respeita a estas atividades." | Each exit is limited to the networks named (command and control, intelligence production, classified information). A private supplier is out only for its exclusive services to those bodies. | verified |
| The financial supervisors are covered only as authorities | RJC art. 3.º n.º 8; art. 15.º n.º 2, alínea b) | "Às entidades referidas na alínea b) do n.º 2 do artigo 15.º aplica-se o presente decreto-lei apenas no que respeita ao exercício das suas competências na qualidade de autoridades nacionais especiais de cibersegurança." / "Na qualidade de autoridades nacionais especiais de cibersegurança, no que respeita à matéria da resiliência operacional digital do setor financeiro: i) A Autoridade de Supervisão de Seguros e Fundos de Pensões; ii) A Comissão do Mercado de Valores Mobiliários; iii) O Banco de Portugal." | ASF, CMVM and the Bank of Portugal are special cybersecurity authorities for financial-sector digital operational resilience, and are covered only in that capacity. | verified |
| **Articulation with DORA:** without prejudice, and no chapter switched off | RJC art. 3.º n.º 9; art. 24.º n.º 7 | "O presente decreto-lei não prejudica o disposto no Regulamento (UE) 2022/2554, do Parlamento Europeu e do Conselho, de 14 de dezembro de 2022, relativo à resiliência operacional digital do setor financeiro." / "Os acordos referidos no n.º 4, quando celebrados por entidades essenciais e importantes abrangidas pelo Regulamento (UE) 2022/2554, do Parlamento Europeu e do Conselho, de 14 de dezembro de 2022, relativo à resiliência operacional digital do setor financeiro, são comunicados às respetivas autoridades nacionais especiais de cibersegurança." | The RJC is without prejudice to DORA and routes DORA entities' information-sharing agreements to the special authorities. Unlike Italy's Art. 3 c. 14 it switches off no chapter for banks or market infrastructures, which stay in Anexo I (sectors 3 and 4). The PDF cites Regulation (EU) 2022/2554 in these two provisions only; its subject, "resiliência operacional digital", appears once more, in art. 15.º n.º 2 b). | verified (absence established by full-text search of the PDF) |
| Territorial rule | RJC art. 4.º n.º 1 | "a) Tenham estabelecimento no território nacional; b) Tratando-se de empresas que oferecem redes públicas de comunicações eletrónicas ou prestam serviços de comunicações eletrónicas acessíveis ao público, disponibilizem os mesmos no território nacional; c) Tratando-se de prestadores de serviços de sistemas de nomes de domínio, registo de nomes de domínio de topo, entidades que prestam serviços de registo de nomes de domínio, prestadores de serviços de computação em nuvem, prestadores de serviços de centro de dados, aos fornecedores de redes de distribuição de conteúdos, prestadores de serviços geridos, aos prestadores de serviços de segurança geridos, bem como prestadores de serviços de mercados em linha, de motores de pesquisa em linha ou de plataformas de serviços de redes sociais: i) Tenham o seu estabelecimento principal no território nacional; ii) Não tendo estabelecimento na União Europeia, o seu representante tenha estabelecimento no território nacional." | Establishment in Portugal; e-communications providers where they provide the service; DNS, TLD, registrars, cloud, data centres, CDNs, MSPs, MSSPs, marketplaces, search engines and social networks by main establishment, or by their representative if established outside the EU. This is the article the diagnostic cited for size independence. | verified |
| **Essential entities: six heads** | RJC art. 6.º n.º 1 | "Para efeitos do presente decreto-lei, consideram-se entidades essenciais: a) As entidades de um dos tipos referidos no anexo i ao presente decreto-lei que excedam os limiares para as médias empresas previstos no artigo 2.º do anexo iii ao presente decreto-lei, correspondentes aos da Recomendação 2003/361/CE, da Comissão, de 6 de maio de 2003; b) Os prestadores de serviços de confiança qualificados e registo de nomes de domínio de topo, e os prestadores de serviços de sistemas de nomes de domínio, independentemente da sua dimensão; c) As empresas que oferecem redes públicas de comunicações eletrónicas ou serviços de comunicações eletrónicas acessíveis ao público que sejam consideradas médias empresas nos termos do artigo 2.º do anexo iii ao presente decreto-lei, correspondentes aos da Recomendação 2003/361/CE da Comissão, de 6 de maio de 2003; d) As entidades da Administração Pública que tenham como atribuições a prestação de serviços nas áreas do desenvolvimento, manutenção e gestão de infraestruturas de tecnologias de informação e comunicação ou aquelas que apresentem um grau particularmente elevado de integração digital na prestação dos seus serviços, e ainda a entidade pública responsável pela área da avaliação educativa; e) As entidades identificadas como entidades críticas nos termos da Diretiva (UE) 2022/2557, do Parlamento Europeu e o Conselho, de 14 de dezembro de 2022, relativa à resiliência das entidades críticas e que revoga a Diretiva 2008/114/CE do Conselho, independentemente da sua dimensão; f) Qualquer outra entidade de um dos tipos constantes dos anexos i ou ii ao presente decreto-lei, referida nas alíneas b) a e) do n.º 2 do artigo 3.º, que seja qualificada como entidade essencial com base no respetivo grau de exposição da entidade aos riscos, na dimensão da entidade e na probabilidade de ocorrência de incidentes e a sua gravidade, incluindo o seu impacto social e económico." | (a) Anexo I types above the medium-enterprise ceilings; (b) **qualified** trust service providers, TLD registries and DNS service providers, any size; (c) public e-communications providers that are medium-sized; (d) public administration entities whose remit is ICT infrastructure, or with a particularly high degree of digital integration, and the public body responsible for educational assessment; (e) CER critical entities, any size; (f) entities qualified as essential by CNCS under the qualitative grounds of art. 3.º n.º 2 b) to e). **Cloud, data-centre and CDN providers are essential only through (a), that is when large.** | verified |
| Important entities | RJC art. 6.º n.º 2 and n.º 3 | "Para efeitos do presente decreto-lei, são entidades importantes as entidades dos tipos referidos nos anexos i e ii ao presente decreto-lei que não sejam consideradas entidades essenciais ao abrigo do número anterior." / "Para efeitos do presente decreto-lei, são também entidades importantes as entidades de um dos tipos constantes nos anexos i ou ii ao presente decreto-lei, referidas nas alíneas b) a e) do n.º 2 do artigo 3.º, que justifiquem tal qualificação com base no respetivo grau de exposição da entidade aos riscos, na dimensão da entidade e na probabilidade de ocorrência de incidentes e a sua gravidade, incluindo o seu impacto social e económico." | Anexo I and II types that are not essential, plus the qualitatively identified entities CNCS qualifies as important. The residual class covers annex types only. | verified |
| Classes are assigned through the art. 8.º procedure | RJC art. 6.º n.º 4; art. 8.º n.º 1 to 3 | "A atribuição das qualificações de entidades essenciais e entidades importantes previstas nos números anteriores resulta dos mecanismos previstos no artigo 8.º" / "As entidades previstas no artigo 3.º identificam-se em plataforma eletrónica disponibilizada pelo CNCS, no prazo de 30 dias após o início da sua atividade ou, caso a entidade já se encontre em atividade aquando da entrada em vigor do presente decreto-lei, no prazo de 60 dias após a disponibilização da referida plataforma eletrónica, sendo responsáveis por manter essa informação devidamente atualizada." / "A qualificação das entidades pelo CNCS com base nos critérios previstos nas alíneas a) a c) e e) do n.º 1 e no n.º 2 do artigo 6.º, e ainda no artigo 7.º, resulta do mecanismo previsto no número anterior." / "A qualificação das entidades pelo CNCS com base nos critérios previstos nas alíneas d) e f) do n.º 1 e no n.º 3 do artigo 6.º, é comunicada com a antecedência mínima de 60 dias ao membro do Governo responsável pela área da cibersegurança e revista pelo menos de dois em dois anos." | Every art. 3.º entity self-identifies on the CNCS platform within 30 days of starting activity, or within 60 days of the platform's availability if already active at entry into force. The size-based and list-based classes (art. 6.º n.º 1 a) to c) and e), n.º 2, art. 7.º) follow from that self-identification. The discretionary ones (art. 6.º n.º 1 d) and f), n.º 3) are CNCS decisions, notified 60 days ahead to the minister, reasoned, after a prior hearing (n.º 4), reviewed at least every two years. | verified |
| A third class for public bodies: entidades públicas relevantes, Grupos A and B | RJC art. 7.º n.º 1 to 3 | "As entidades públicas que não sejam qualificadas como entidades essenciais ou importantes nos termos do artigo anterior, consideram-se entidades públicas relevantes, integrando-se em dois grupos" / Grupo A: "a) Os serviços da administração direta do Estado, central e periférica, com 250 ou mais trabalhadores no seu quadro de pessoal; … c) As entidades da administração indireta do Estado, com mais de 250 trabalhadores no seu quadro de pessoal; … f) As entidades públicas empresariais que excedam os limiares previstos no artigo 2.º do anexo iii ao presente decreto-lei, … g) As entidades administrativas independentes;" / Grupo B: "a) Os serviços da administração direta do Estado, central e periférica, que tenham entre 75 e 249 trabalhadores no seu quadro de pessoal; … f) As entidades públicas empresariais qualificadas como empresas médias nos termos do anexo iii ao presente decreto-lei," | Public entities that are neither essential nor important are *relevant public entities*: Grupo A from 250 workers (direct administration) or above 250 (indirect and autonomous administration), large public enterprises, independent administrative bodies and the art. 3.º n.º 4 bodies; Grupo B from 75 to 249 workers and medium public enterprises. | verified |
| Order of precedence when several classes apply | RJC art. 9.º n.º 1 | "Caso uma entidade se enquadre simultaneamente em mais do que uma qualificação, aplica-se o regime que resultar mais exigente para gerir os riscos que se colocam à segurança das redes e sistemas de informação, de acordo com a seguinte ordem: a) Entidades essenciais; b) Entidades importantes; c) Entidades públicas relevantes do Grupo A; d) Entidades públicas relevantes do Grupo B." | Essential, then important, then Grupo A, then Grupo B. | verified |
| Registrars: their own identification duty, and named apart from the three classes | RJC art. 8.º n.º 6; art. 35.º n.º 3 | "Os prestadores de serviços de registos de nomes de domínio devem identificar-se e comunicar a informação prevista no n.º 2 do artigo 35.º através da plataforma eletrónica disponibilizada pelo CNCS, no prazo de 30 dias após o início da sua atividade." / "As entidades essenciais, importantes, públicas relevantes e os prestadores de serviços de registos de nomes de domínio notificam o CNCS de qualquer alteração aos dados referidos nos números anteriores, no prazo de 30 dias úteis a contar da alteração." | Registrars identify themselves within 30 days of starting activity, and art. 35.º n.º 3 lists them next to, not inside, the essential, important and relevant public classes. Art. 36.º gives them the domain-registration database duty. | verified |
| Anexo I heading | Anexo I | "Setores de importância crítica" | Sectors of critical importance. | verified |
| **Anexo I, sector 8: nine types** | Anexo I, row "8. Infraestruturas digitais" (p. 63) | "Fornecedores de pontos de troca de tráfego" … "Prestadores de serviços de DNS, excluindo operadores de servidores de nomes raiz" … "Registos de nomes de TLD" … "Prestadores de serviços de computação em nuvem" … "Prestadores de serviços de centro de dados" … "Fornecedores de redes de distribuição de conteúdos" … "Prestadores de serviços de confiança" … "Fornecedores de redes públicas de comunicações eletrónicas" … "Prestadores de serviços de comunicações eletrónicas acessíveis ao público" | IXPs; DNS providers except root name server operators; TLD registries; cloud; data centres; CDNs; trust service providers; public e-communications networks; publicly available e-communications services. | verified |
| Anexo I, sector 9: managed services, separate from sector 8 | Anexo I, row "9. Gestão de serviços de tecnologias da informação ou comunicação (entre empresas)" (p. 63) | "Prestadores de serviços geridos" … "Prestadores de serviços de segurança geridos" | MSPs and MSSPs. | verified |
| Anexo II, sector 6: the directive's three digital providers, no registrars | Anexo II, row "6. Prestação de serviços digitais" (p. 64) | "Prestadores de serviço de mercados em linha" … "Prestadores de serviço de motores de pesquisa em linha" … "Prestadores de serviço de plataformas de serviços de redes sociais" | Online marketplaces, search engines, social networks. Registrars are a type in no Portuguese annex. | verified |
| Reading: the registrar is in scope at any size but in neither class | RJC art. 3.º n.º 2 (opening words and a) iii)); art. 6.º n.º 1 b) and n.º 2; art. 35.º n.º 3 | (no new quote; reading of the rows above) | Art. 3.º n.º 2 opens on "entidades de um dos tipos que constam nos anexos i ou ii" yet lists registrars, which no annex lists. Art. 6.º n.º 1 b) leaves them out of the essential list and art. 6.º n.º 2 covers annex types only, so on the letter a registrar is neither essential nor important. It carries the art. 8.º n.º 6, 35.º and 36.º duties. The directive treats registrars the same way (Art. 2(4), Art. 3(3)). | reading of verified texts |
| Reading: two gaps in art. 7.º | RJC art. 7.º n.º 2 and n.º 3 | (no new quote; reading of the row above) | Grupo A takes direct administration from "250 ou mais" workers but indirect and autonomous administration only from "mais de 250"; Grupo B is "entre 75 e 249". On the letter, an indirect or autonomous administration entity with exactly 250 workers, and any public entity under 75 workers, falls in neither group while art. 3.º n.º 3 keeps it in scope. The decree does not resolve this; CNCS practice was not checked. | reading of verified texts |

### What a classifier must answer (reading of the provisions above)

This table is a reading of the quoted provisions, not an additional source. It
assumes a private, autonomous enterprise meeting the art. 4.º territorial rule,
that is not a CER critical entity and that CNCS has not qualified under art. 3.º
n.º 2 b) to e), unless the row says otherwise. Sizes are those of Anexo III
art. 2.º; *large* means above the medium-enterprise ceilings.

| Entity | Micro or small | Medium | Large | Basis |
|---|---|---|---|---|
| Cloud computing, data-centre, CDN or IXP provider | Out | Important | Essential | art. 3.º n.º 1 a); art. 6.º n.º 1 a) and n.º 2 |
| MSP or MSSP (Anexo I sector 9) | Out | Important | Essential | art. 3.º n.º 1 a); art. 6.º n.º 1 a) and n.º 2 |
| DNS service provider (not a root name server operator) or TLD registry | Essential | Essential | Essential | art. 3.º n.º 2 a) iii); art. 6.º n.º 1 b) |
| Qualified trust service provider | Essential | Essential | Essential | art. 3.º n.º 2 a) ii); art. 6.º n.º 1 b) |
| Non-qualified trust service provider | Important | Important | Essential | art. 3.º n.º 2 a) ii); art. 6.º n.º 1 a) and n.º 2 |
| Public e-communications network or publicly available service | Important | **Essential** | Essential | art. 3.º n.º 2 a) i); art. 6.º n.º 1 a) and c), n.º 2 |
| Domain name registration service provider | In scope, neither essential nor important | same | same | art. 3.º n.º 2 a) iii); art. 8.º n.º 6; arts. 35.º and 36.º |
| CER critical entity, any sector | Essential | Essential | Essential | art. 3.º n.º 5; art. 6.º n.º 1 e) |
| Anexo I or II entity meeting art. 3.º n.º 2 b) to e) | In scope; essential or important as CNCS qualifies it | same | same | art. 6.º n.º 1 f) and n.º 3; art. 8.º n.º 3 and 4 |
| Credit institution or market infrastructure (Anexo I sectors 3 and 4) | Out | Important | Essential | art. 3.º n.º 1; art. 6.º; the RJC is without prejudice to DORA (art. 3.º n.º 9) |
| Public administration (art. 3.º n.º 3) or named body (n.º 4) | In scope at any size: essential if art. 6.º n.º 1 a), d), e) or f) applies; important if of an annex type and not essential (n.º 2); otherwise a relevant public entity, Grupo A or B (art. 7.º) | | | art. 3.º n.º 3 and 4; arts. 6.º, 7.º and 9.º |
| Higher-education institution | In scope (art. 3.º n.º 6). A public one follows the row above; for a private one that is neither essential nor important the decree states no class (art. 7.º covers public entities only) | | | art. 3.º n.º 6; arts. 6.º and 7.º |

### What this means for the product

- The essential-at-any-size branch holds exactly three types, and their
  Portuguese citation is **RJC art. 3.º, n.º 2, alínea a), subalíneas ii) and
  iii), with art. 6.º, n.º 1, alínea b)** (annex to DL 125/2025), the trust
  service provider being *qualificado*. The diagnostic's "art. 4.º" is the
  territorial rule; its "RJC art. 4.º + Diretiva NIS 2 art. 3.º" for large
  Anexo I entities should read RJC art. 6.º, n.º 1, alínea a).
- Size-independent heads the diagnostic did not ask about on 2026-10-23: public
  e-communications providers (essential from medium size), non-qualified trust
  service providers (important unless large), registrars (in scope, neither
  class), CER critical entities, the qualitative grounds of art. 3.º n.º 2 b)
  to e), public administration and named bodies (n.º 3, n.º 4) and higher
  education (n.º 6).
- Exits a classifier must offer: art. 3.º n.º 3 f) (Bank of Portugal, CMVM,
  ASF, except as authorities under n.º 8) and n.º 7 (defence, police,
  intelligence, classified networks, and their exclusive private suppliers),
  each limited to the networks it names. DORA is not an exit in Portugal.

### Not read, therefore not asserted

- Regulamento n.º 756/2026 (CNCS), the platform regulation of art. 8.º n.º 7,
  was not re-read for this section. Whether it details the qualification
  procedure, or settles the art. 7.º gaps, is not verified here.
- How CNCS treats group data (partner and linked enterprises) when sizing an
  entity: the decree is silent and no CNCS guidance was read.
- The class of a private higher-education institution that is neither essential
  nor important.
- Two citations earlier in this file attribute to the Regulamento rules that the
  decree itself carries: the 30-day and 60-day identification windows are RJC
  art. 8.º n.º 1 (quoted above), and the 24-month deferral is DL art. 10.º n.º 2,
  "O disposto nos n.os 1 e 2 do artigo 27.º, nos artigos 28.º a 30.º, no artigo
  33.º e nas alíneas b), c) e f) do n.º 1 do artigo 61.º do regime jurídico da
  cibersegurança, aprovado em anexo ao presente decreto-lei, produz efeitos 24
  meses após a publicação da regulamentação referida nos artigos 8.º, 14.º,
  26.º, 31.º, 32.º e 83.º do referido regime." Whether the Regulamento restates
  them under its own arts. 8.º and 10.º was not checked.

## Incident notification under the RJC: five acts, not the directive's three (read 2026-10-28)

<!-- meta: theme=incident; type=deadline-model; date=2026-10-28; surfaces=marketing,ui,data; guard=apps/web/test/pt-incident-timeline.test.ts -->

- **Source read:** Decreto-Lei n.º 125/2025, Diário da República, 1.ª série,
  n.º 234, 04-12-2025, official PDF
  `https://files.diariodarepublica.pt/1s/2025/12/23400/0000400068.pdf`
  (SHA-256 `9f6e95c33144fd70cbe1cac5377d374ba0fc7df8d06e51b07e123a11171b1108`),
  arts. 40.º to 44.º and 7.º, 8.º, 25.º, 31.º to 33.º, 55.º, 61.º read in full.
- **Retrieved:** 2026-10-28.

| Fact | Article | Verbatim (official) | Status |
|---|---|---|---|
| Relevant public entities notify like essential and important ones | art. 40.º n.º 1 | "As entidades essenciais, importantes e públicas relevantes notificam qualquer incidente significativo à autoridade de cibersegurança competente." | verified |
| Initial notification: **24 hours** from the entity's conclusion | art. 42.º n.º 1 | "assim que a entidade essencial, importante ou pública relevante concluir que existe, ou possa vir a existir, um incidente significativo, sem demora injustificada e até 24 horas após essa verificação" | verified |
| The **72-hour** act is an update, **only when necessary** | art. 42.º n.º 3 | "Quando necessário, a entidade essencial, importante ou pública relevante envia à autoridade de cibersegurança competente uma atualização da notificação inicial até 72 horas após a verificação do incidente significativo" | verified |
| End of significant impact: **24 hours** after the impact ends | art. 43.º n.º 1 | "A notificação do fim de impacto significativo do incidente deve ser submetida à autoridade de cibersegurança competente, sem demora injustificada e dentro do prazo de 24 horas após o fim do impacto." | verified |
| Final report: **30 working days** from the end-of-impact notification | art. 44.º n.º 1 | "O relatório final deve ser submetido à autoridade de cibersegurança competente, no prazo de 30 dias úteis a contar da data da notificação do fim de impacto significativo do incidente." | verified |
| Still running at the final-report deadline: **weekly interim reports, on request** | art. 44.º n.º 3 | "deve apresentar relatório intercalar a autoridade de cibersegurança competente, a pedido destas entidades e com periodicidade semanal até ao momento da apresentação do relatório final" | verified |
| Resolved within **two hours** of detection: the end-of-impact notification only | art. 41.º n.º 2 | "Nos casos em que o incidente é resolvido nas duas horas após a sua deteção, as entidades referidas ficam apenas obrigadas ao envio da notificação do fim de impacto significativo." | verified |

**What the product said.** The incident configuration (`INCIDENT_REPORTING_PT`)
renders the directive's model: an "alerta precoce" at 24 hours, a mandatory
"notificação" at 72 hours, and a final report "within 1 month of
notification". A comment beside it already knew the final report runs 30
working days from the end of impact and deferred the fix. The public page
`/pt/notificacao-incidente-cncs` had the 30 working days right, but said the
end-of-impact notification has "no numeric deadline" (it has 24 hours),
presented the 72-hour update as mandatory, and described the directive's
progress report instead of art. 44.º n.º 3. The two-hour rule appeared nowhere.

**Relevant public entities (art. 7.º, 33.º, 55.º, 61.º), for the
public-administration page.** Grupos A and B are defined by the decree itself,
by headcount (Grupo A: direct administration of the State or the autonomous
regions from 250 workers, indirect and autonomous administration above 250,
public enterprises above the medium-enterprise ceilings, independent
administrative bodies, the bodies of art. 7.º n.º 2 h); Grupo B: 75 to 249
workers, medium public enterprises). Their security measures are set by CNCS
regulation in proportion to the group (art. 33.º n.º 1 and 2); their
supervision is the one of important entities (art. 33.º n.º 3, art. 55.º);
very serious offences carry EUR 16 000 to 4 000 000 (Grupo A) and EUR 8 000
to 350 000 (Grupo B) for a legal person (art. 61.º). The duties of arts. 25.º
(management body), 31.º (cybersecurity officer) and 32.º (permanent contact
point) are written for essential and important entities. The page
`/pt/administracao-publica-municipios` said the opposite on six points (groups
"by population", a threshold "to be fixed by CNCS regulation", Grupo A
"equivalent to essential entities, ex ante supervision", IPSS and foundations
in Grupo B, registration "within 20 working days (art. 8.º n.º 5)", the art. 21.º
and 39.º citations), and carried an unsourced municipality count ("308 em
Portugal continental + 11 nas Regiões Autónomas"), removed rather than
replaced since no official count was read.

## The RJC's incident regime in the product: acts, instants, readings (2026-10-28)

<!-- meta: theme=incident; type=deadline-model,test-pinned; date=2026-10-28; surfaces=data,ui,prompt,doc-gen,mcp,i18n,test; guard=packages/regulatory-data/test/pt-incident-notification-model.test.ts,apps/core-api/test/incident-acts-pt.test.ts,apps/core-api/test/incident-deadlines-regression.test.ts,packages/regulatory-data/test/legal-frames.test.ts -->

The section above records the five clocks of arts. 40.º to 44.º and the two
public pages they corrected. This one records what the product computed, what
it computes now, and the provisions the computation needs beyond the clocks.
Same official PDF, read on the same day:
https://files.diariodarepublica.pt/1s/2025/12/23400/0000400068.pdf, converted
with `pdftotext`; PDF pages: art. 2.º b) p. 9; art. 15.º p. 21; art. 40.º
n.º 1 p. 39; art. 40.º n.º 6, art. 41.º and the start of art. 42.º p. 40;
art. 42.º n.º 3 and art. 43.º p. 41; art. 44.º p. 42.

### The defect, and the test that held it

Every country's deadlines came from one engine,
`apps/core-api/src/lib/article23-deadlines.ts`: 24 h early warning, 72 h
notification, final report one month after the notification. Portugal went
through it like every other country, so a Portuguese entity, a municipality
among them, was shown a mandatory notification at 72 hours, no end-of-impact
notification at all, and a final report a month after a notification the RJC
does not require. `packages/regulatory-data/test/country-configs-incident-reporting.test.ts`
asserted 24 / 72 / 720 hours for every configuration, Portugal included, so the
error was pinned by a test. The configuration's own comment had called the
final report "a known approximation" since April, and quoted art. 44.º n.º 1 in
quotation marks with words that are not in the decree ("30 dias úteis após a
verificação da circunstância que pôs fim à situação de impacto significativo");
the decree counts from the date of the end-of-impact NOTIFICATION.

### Provisions the computation needs, beyond the five clocks

| Fact | Article | Verbatim (official) | What it means for the product | Status |
|---|---|---|---|---|
| Who receives | RJC art. 2.º b); art. 15.º n.º 2 a) | "«Autoridade de cibersegurança competente», o Centro Nacional de Cibersegurança (CNCS), ou, quando aplicável, a autoridade nacional setorial de cibersegurança competente nos termos da alínea a) do n.º 2 do artigo 15.º, sem prejuízo das reservas de competência exclusiva de entidades públicas com responsabilidades em matéria de investigação criminal, de produção de informações e de ciberdefesa;" / "i) O Gabinete Nacional de Segurança (GNS), no que respeita aos serviços de confiança nas transações eletrónicas no mercado interno; ii) A Autoridade Nacional de Comunicações (ANACOM), no que respeita à matéria das comunicações eletrónicas e dos serviços postais;" | The act labels say "the CNCS, or the GNS or ANACOM in their sectors". | verified |
| Channel | RJC art. 40.º n.º 6 | "As notificações devem ser submetidas na plataforma eletrónica referida no n.º 7 do artigo 8.º" | The entity files on the CNCS platform; Reglyze records the submission and sends nothing. | verified |
| The mandatory acts | RJC art. 41.º n.º 1 | "Por cada incidente sujeito a notificação obrigatória, as entidades essenciais, importantes e públicas relevantes submetem: a) Uma notificação inicial, nos termos do artigo 42.º; b) Uma notificação de fim do impacto significativo, nos termos do artigo 43.º; c) Um relatório final, nos termos dos artigos 44.º" | Three mandatory acts walk the step machine; the 72-hour update and the interim report are not in the list. | verified |
| An interim report can be requested | RJC art. 41.º n.º 3 | "Sem prejuízo do disposto no número anterior, as entidades essenciais, importantes e públicas relevantes podem ainda ser notificadas para apresentar um relatório intercalar, nos termos do artigo 44.º" | The interim report is a conditional stage with no clock until the authority asks. | verified |
| The final report needs both instants | RJC art. 44.º n.º 2 a) and b) | "a) Data e hora em que o incidente assumiu o impacto significativo; b) Data e hora em que o incidente perdeu o impacto significativo;" | Why the incident records the end of the significant impact. | verified |
| "Resolvido" is not "fim do impacto" | RJC art. 41.º n.º 2 read with art. 44.º n.º 3 | (the two quotes in the section above) | Art. 44.º n.º 3 has an incident still "em curso" after its significant impact ended, so the decree keeps resolution and end of impact apart. The two-hour relief is keyed on a separate resolution instant measured from detection, never inferred from the end of impact, which can come first and would grant the relief too often. | verified (reading) |
| No trust-service-provider derogation | RJC arts. 40.º to 44.º; full-text search of the PDF | (absence) | The directive gives trust service providers 24 hours instead of 72 (art. 23(4), subparagraph after point (e)). The RJC needs no such rule, since every entity's initial notification is already due within 24 hours, and has none: the PDF mentions "serviços de confiança" only in the definitions, the scope (art. 3.º), the essential-entity list (art. 6.º), art. 15.º and Anexo I. The configuration carries `null`, and the incident page and the MCP tool no longer say "24 h instead of 72 h" for Portugal. | verified (absence established by full-text search of the PDF) |

### What the product does with it

- **Data:** `INCIDENT_REPORTING_PT.notificationModel` in
  `packages/regulatory-data/src/country-configs/incident-reporting.ts` lists the
  four timed acts in order, each with what starts its clock (the awareness
  anchor, the end of impact, or the submission of another act), its period
  (hours, or working days of the Portuguese calendar), whether it is mandatory
  or sent only when necessary, and which acts remain due when the incident is
  resolved within two hours of detection. The interim report is the
  configuration's single conditional stage. A country without a
  `notificationModel` keeps the directive's clocks, computed by the same
  function with the same arguments as before.
- **Engine:** `apps/core-api/src/lib/incident-acts.ts` reads that model without
  knowing the country. The routes, the reminders, the MSP portfolio feed, the
  incident page, the MCP tool and the tabletop facilitator read the engine or
  the model, never a hard-coded 24 / 72 / 720.
- **Generated documents:** `describeNotificationModel` words the same model in
  Portuguese for the legal frame spliced into every Portuguese document
  (`packages/regulatory-data/src/doc-corpus/legal-frames.ts`) and for the
  QNRCS incident-plan prompt (`apps/ai-service/src/lib/native-doc-prompts.ts`),
  which until then only said "remit to the notification obligations" and let
  the model supply the directive's clocks. The deterministic template used
  when AI generation fails (`apps/core-api/src/lib/document-generator.ts`)
  builds its incident tables from the same model.
- **Record:** `incidents.impact_ended_at` and `incidents.resolved_at`
  (migration 0109), and the report type `end_of_impact`.
- **Readings chosen so that no date shown is later than the law allows:** hour
  periods run from the recorded instant (Código Civil art. 279.º b) and d),
  next section, would allow more); before the end-of-impact notification is
  submitted, the final report is shown as a ceiling computed as if that
  notification were sent at its own deadline, exactly as the engine already
  treats the directive's final report before the notification.

### Not read, therefore not asserted

- The CNCS technical instruction on the format and procedure of notification
  and the incident taxonomy (RJC art. 41.º n.º 4) was not read; nothing in the
  product depends on it.
- The "Aviso CNCS sobre notificação de incidentes graves" of 4 December 2025,
  recorded in `packages/regulatory-data/src/nis2-mappings/soft-law/pt.yaml` and
  referenced by `INCIDENT_REPORTING_PT.softLawRefs`, was not found. Its entry
  cites "RJC art. 32.º" for incident notification, and RJC art. 32.º is the
  *ponto de contacto permanente*; the notification articles are 40.º to 44.º.
  It stays a lead to check until someone reads the notice itself.

## Working days for the RJC final report: Código do Trabalho art. 234.º, Código Civil art. 279.º, CPA art. 87.º (read 2026-10-28)

<!-- meta: theme=incident; type=reference; date=2026-10-28; surfaces=data; guard=packages/regulatory-data/test/pt-working-days.test.ts -->

The RJC counts the final report in *dias úteis* (art. 44.º n.º 1) and does not
say how to count them. The three texts below do.

- **Código do Trabalho** (Lei n.º 7/2009, de 12 de fevereiro), art. 234.º
  "Feriados obrigatórios":
  - n.º 1 in the wording of **Lei n.º 8/2016, de 1 de abril**, art. 2.º,
    Diário da República, 1.ª série, N.º 64, 1 April 2016, p. 1112:
    https://files.diariodarepublica.pt/1s/2016/04/06400/0111201112.pdf (fetched
    with `curl`, read with `pdftotext`). Its art. 3.º: "A presente lei entra em
    vigor no dia seguinte ao da sua publicação."
  - n.º 2 and n.º 3, and the absence of any later change, read on the DRE
    consolidated version,
    https://diariodarepublica.pt/dr/legislacao-consolidada/lei/2009-34546475-73982045
    (rendered with Playwright). It records the article as "Alterado pelo/a Artigo 2.º do/a Lei
    n.º 8/2016 ... em vigor a partir de 2016-04-02" and, before that, by Lei
    n.º 23/2012, and lists no later change to this article. The page itself warns that the
    consolidated version "não tem valor legal".
- **Código Civil**, art. 279.º "Cômputo do termo", DRE consolidated version,
  https://diariodarepublica.pt/dr/legislacao-consolidada/decreto-lei/1966-34509075-49784875
  (rendered with Playwright; no change to the article recorded).
- **Código do Procedimento Administrativo** (Decreto-Lei n.º 4/2015, de 7 de
  janeiro), art. 87.º "Contagem dos prazos", Diário da República, 1.ª série,
  N.º 4, 7 January 2015, pp. 69 and 70 of
  https://files.dre.pt/1s/2015/01/00400/0005000087.pdf (the original
  publication; later amendments of the CPA were not checked for this article).
- **Retrieved and read:** 2026-10-28.

| Fact | Provision | Verbatim quote (Portuguese) | English gloss | Status |
|---|---|---|---|---|
| The thirteen national public holidays | Código do Trabalho art. 234.º n.º 1 (Lei n.º 8/2016, art. 2.º) | "São feriados obrigatórios os dias 1 de janeiro, de Sexta-Feira Santa, de Domingo de Páscoa, 25 de abril, 1 de maio, de Corpo de Deus, 10 de junho, 15 de agosto, 5 de outubro, 1 de novembro, 1, 8 e 25 de dezembro." | Ten fixed dates and three movable feasts: Good Friday, Easter Sunday and Corpus Christi. | verified |
| Good Friday may move locally | Código do Trabalho art. 234.º n.º 2 | "O feriado de Sexta-Feira Santa pode ser observado em outro dia com significado local no período da Páscoa." | A local observance; the national calendar keeps Good Friday. | verified (consolidated text) |
| A specific law may move a holiday to the Monday | Código do Trabalho art. 234.º n.º 3 | "Mediante legislação específica, determinados feriados obrigatórios podem ser observados na segunda-feira da semana subsequente." | No such law is encoded. One would require the calendar to be updated. | verified (consolidated text) |
| The day of the event is not counted | Código Civil art. 279.º b) | "Na contagem de qualquer prazo não se inclui o dia, nem a hora, se o prazo for de horas, em que ocorrer o evento a partir do qual o prazo começa a correr;" | The 30 working days start the day after the end-of-impact notification. | verified (consolidated text) |
| 24 hours is a one-day period | Código Civil art. 279.º d) | "É havido, respectivamente, como prazo de uma ou duas semanas o designado por oito ou quinze dias, sendo havido como prazo de um ou dois dias o designado por 24 ou 48 horas;" | Read with b), this could carry a 24-hour act to the end of the next day. The product keeps the recorded instant plus 24 hours, which is never later. | verified (consolidated text) |
| Administrative counting | CPA art. 87.º b), c), f), g) | "b) Não se inclui na contagem o dia em que ocorra o evento a partir do qual o prazo começa a correr; c) O prazo fixado suspende-se nos sábados, domingos e feriados; ... f) O termo do prazo que coincida com dia em que o serviço perante o qual deva ser praticado o ato não esteja aberto ao público, ou não funcione durante o período normal, transfere -se para o primeiro dia útil seguinte; g) Considera-se que o serviço não está aberto ao público quando for concedida tolerância de ponto, total ou parcial." | Same exclusion of the first day; Saturdays, Sundays and holidays are not counted. Where the CPA applies, a *tolerância de ponto* on the last day moves the end of the period later; the product does not apply that move. | verified (original publication) |

**What the product computes**
(`packages/regulatory-data/src/calendars/working-days.ts`):

- A working day is Monday to Friday and not one of the thirteen days of
  art. 234.º n.º 1.
- The movable feasts are the ecclesiastical computation, which the law names
  and does not define: Easter Sunday by the Gregorian computus, Good Friday two
  days before it, Corpus Christi sixty days after it (the Thursday after
  Trinity Sunday). Cross-check for 2026 against a government page, not the law:
  the Embassy of Portugal in Ankara lists "03/04/2026 Sexta-feira Santa" and
  "04/06/2026 Corpo de Deus"
  (https://ancara.embaixadaportugal.mne.gov.pt/pt/a-embaixada/calendario-de-feriados).
- The day of the notification is excluded and the period ends at 24:00 of the
  thirtieth working day. The calendar date is taken in the earliest of the two
  Portuguese time zones and the end of the day in the latest one to close
  (Atlantic/Azores and Europe/Lisbon), so an entity in the Azores and one on the
  mainland never see a later date than their own clock would give them.
- Counted as working days, so that the date shown is never later than the law
  allows: Carnival Tuesday, which art. 234.º n.º 1 does not list, municipal
  holidays, the regional holidays of the Azores and Madeira, and days of
  *tolerância de ponto*.

## Incident routing by sector: the GNS, ANACOM and the CNCS platform (read 2026-10-29)

<!-- meta: theme=incident; type=reference,surface-inconsistency; date=2026-10-29; surfaces=data,ui,mcp,doc-gen,prompt; guard=packages/regulatory-data/test/incident-recipients.test.ts,packages/regulatory-data/test/incident-recipient-reads.test.ts,apps/core-api/test/incident-recipients-routes.test.ts -->

The row "Who receives" of the section on the RJC's incident regime (art. 2.º b)
with art. 15.º n.º 2 a)) was recorded on 2026-10-28 and reached the act labels
only. The configuration had no sector authority, so every surface that names a
recipient named the CNCS, a postal operator included. Same official PDF
(https://files.diariodarepublica.pt/1s/2025/12/23400/0000400068.pdf), read again
on 2026-10-29 for what routing needs beyond the definition; PDF pages: art. 8.º
pp. 17-18; art. 15.º p. 21; art. 40.º pp. 39-40; Anexo I p. 63; Anexo II p. 64.

| Fact | Article | Verbatim (official) | What it means for the product | Status |
|---|---|---|---|---|
| The recipient is the competent cybersecurity authority | art. 40.º n.º 1 | "As entidades essenciais, importantes e públicas relevantes notificam qualquer incidente significativo à autoridade de cibersegurança competente." | Whoever art. 2.º b) designates for the entity's matter receives the notification: the CNCS, or the GNS or ANACOM in theirs. | verified |
| One channel, whichever authority receives | art. 40.º n.º 6; art. 8.º n.º 1 | "As notificações devem ser submetidas na plataforma eletrónica referida no n.º 7 do artigo 8.º" / "As entidades previstas no artigo 3.º identificam-se em plataforma eletrónica disponibilizada pelo CNCS" | A postal operator notifies ANACOM on the CNCS platform. The channel of every Portuguese recipient is the CNCS's; no URL of ANACOM or of the GNS is asserted. | verified |
| Notifying several authorities at once is a possibility, not a duty | art. 40.º n.º 7 | "Às entidades essenciais, importantes e públicas relevantes é assegurada a possibilidade de notificar um incidente, simultaneamente, à autoridade de cibersegurança competente, às autoridades especiais de cibersegurança, bem como às entidades previstas no n.º 5, através da plataforma prevista no n.º 7 do artigo 8.º, nos termos a definir por protocolo outorgado entre as referidas autoridades." | No parallel recipient is modelled: the special authorities of art. 15.º n.º 2 b) may be notified through the platform, and the decree does not require it. | verified |
| The postal sector is one entity type, all of it postal services | Anexo II, sector 1 | "Serviços postais e de estafeta" / "Prestadores de serviços postais na aceção da Lei n.º 17/2012, de 26 de abril, na sua redação atual, incluindo prestadores de serviços de estafeta" | ANACOM's "serviços postais" (art. 15.º n.º 2 a) ii)) cover the whole sector, so `postal_and_courier` routes to ANACOM automatically. | verified (reading) |
| Electronic communications and trust services are three of the nine digital-infrastructure entity types | Anexo I, sector 8 | "Prestadores de serviços de confiança" / "Fornecedores de redes públicas de comunicações eletrónicas" / "Prestadores de serviços de comunicações eletrónicas acessíveis ao público" (beside IXPs, DNS providers, TLD registries, cloud, data centres and CDNs) | An organisation records one sector and no entity type, so the GNS and ANACOM are conditional notes for `digital_infrastructure`, never a route. | verified |

What the product does with it: `INCIDENT_REPORTING_PT.sectorCompetentAuthorities`
carries three entries that `receivesNotification` (ANACOM for postal services,
automatic; ANACOM for electronic communications and the GNS for trust services,
both conditional), and `resolveIncidentRecipients` in
`packages/regulatory-data/src/country-configs/incident-recipients.ts` reads them
for the incident page and API, the reminder e-mail, the MSP feed, the document
template, the tabletop facilitator and the MCP tool. The national recipient's
legal basis is stated as art. 40.º n.º 1 and art. 2.º b), its channel as
art. 40.º n.º 6.
