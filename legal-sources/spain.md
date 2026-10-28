# Spain — legal sources (verified)

## Real Decreto 311/2022 — Esquema Nacional de Seguridad (ENS)

<!-- meta: theme=framework; type=reference; date=2026-07-25; surfaces=data,docs; guard=none -->

- **Official citation:** Real Decreto 311/2022, de 3 de mayo, por el que se
  regula el Esquema Nacional de Seguridad — BOE-A-2022-7191.
- **Official URL (consolidated):** https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191
- **Retrieved + read:** 2026-07-25 (consolidated BOE text read directly —
  Anexo II «Medidas de seguridad» + Anexo III applicability table).

> Scope note: the ENS is the Spanish public-sector security framework, in force
> and self-standing. It is **not** the NIS2 transposition — the Spanish
> transposition (anteproyecto de Ley de Coordinación y Gobernanza de la
> Ciberseguridad, LCGC) was still pending at the retrieval date. Reglyze uses
> the ENS as the ES native framework; that choice is unaffected, but customer
> copy must not present the ENS as "the NIS2 transposition".

### Verified facts — supply chain / external resources (`op.ext`)

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Supply-chain protection applies **only at category ALTA** | Anexo III + Anexo II §4.4.3 «Aplicación de la medida» | "Categoría BÁSICA: no aplica. — Categoría MEDIA: no aplica. — Categoría ALTA: op.ext.3." | ✅ |
| What `op.ext.3` actually requires | `op.ext.3.1`–`.3` | "Se analizará el impacto que puede tener sobre el sistema un incidente accidental o deliberado que tenga su origen en la cadena de suministro" / "Se estimará el riesgo sobre el sistema" / "Se tomarán medidas de contención" | ✅ |
| Continuity must account for critical external providers | `op.ext.3.r1.1`–`.r1.2` | "El plan de continuidad de la organización deberá tener en cuenta la dependencia de proveedores externos críticos" ; "Se deberán realizar pruebas o ejercicios de continuidad, incluyendo escenarios en los que falla un proveedor" | ✅ |
| **SBOM required** (reinforcement R3) | `op.ext.3.r3.1` | "Se mantendrá actualizado un registro formal que contenga los detalles y las relaciones de la cadena de suministro de los diversos componentes utilizados en la construcción de programas informáticos… Esta lista será proporcionada por el proveedor" | ✅ |
| **The nature of the information exchanged MUST be documented, per interconnection** — applies from category MEDIA | `op.ext.4.2` | "Para cada interconexión se documentará explícitamente: las características de la interfaz, los requisitos de seguridad y protección de datos y **la naturaleza de la información intercambiada**." | ✅ |
| Contracting + SLA and daily management of external resources apply from MEDIA | Anexo III | `op.ext.1` "Contratación y acuerdos de nivel de servicio", `op.ext.2` "Gestión diaria" — n.a. at BÁSICA, "aplica" at MEDIA and ALTA | ✅ |

### Why this matters to the product

`op.ext.4.2` is the ES anchor for the supplier `dataShared` field: Spain requires
the **nature of the information exchanged** to be documented explicitly, for each
interconnection, from category MEDIA up. Our previous internal reading ("ES: no
explicit requirement") was an artefact of indexing the ENS at title level only —
it is wrong.

Note the split: in Spain the data-exposure duty sits under **interconnection**
(`op.ext.4`), not under **supply chain** (`op.ext.3`). A crosswalk that only maps
`nis2.21.2.d` → `op.ext.3` will miss it.

### Corrections to internal data (official source wins)

`packages/regulatory-data/src/nis2-mappings/frameworks/ens.yaml` carries the 91
ENS measures as **titles only** (median 29 characters of text, 97 % stubs). No
requirement text, no per-category applicability, no reinforcements. Consequences:

1. ❌ We cannot tell an ES customer *what* `op.ext.3` demands, nor that it is
   **ALTA-only** — an SME on BÁSICA/MEDIA would be shown an obligation that does
   not apply to it.
2. ❌ `op.ext.4.2` (nature of information exchanged) is invisible to the
   crosswalk, so the ES supply-chain surface looks emptier than it is.
3. ❌ The R1/R2/R3 reinforcements (continuity, online flow protection, SBOM) are
   absent entirely.

→ Follow-up: enrich `ens.yaml` with requirement text + per-category
applicability (BÁSICA/MEDIA/ALTA) + reinforcements, at least for the `op.ext`
family, before any ES commercial claim.

### Still to pin (next `verify-legal-source` pass)

- The Spanish **NIS2 transposition** itself (LCGC) once published in the BOE —
  entry into force, competent authority, registration mechanism, and whether it
  layers supply-chain duties on top of the ENS.
- Whether `mp.sw.1.r5` (referenced by `op.ext.3.r3.1`) adds SBOM detail we
  should mirror.

## ⚠️ Ámbito de aplicación — the ENS does NOT apply to a private SME by default

<!-- meta: theme=scoping; type=scope-error; date=2026-07-25; surfaces=ui,data; guard=apps/web/test/ens-scope-notice.test.ts -->

- **Source read:** consolidated BOE text, art. 2 «Ámbito de aplicación».
- **Retrieved + read:** 2026-07-25.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Applies to the **whole public sector** | art. 2.1 | "El presente real decreto es de aplicación a todo el sector público, en los términos en que este se define por el artículo 2 de la Ley 40/2015…" | ✅ |
| Applies to classified-information systems | art. 2.2 | "…será de aplicación a los sistemas que tratan información clasificada…" | ✅ |
| **Private entities ONLY as public-sector contractors** | art. 2.3 | "Este real decreto también se aplica a los sistemas de información de las entidades del sector privado… **cuando, de acuerdo con la normativa aplicable y en virtud de una relación contractual, presten servicios o provean soluciones a las entidades del sector público** para el ejercicio por estas de sus competencias y potestades administrativas." | ✅ |
| Public contracts must carry ENS-conformity requirements | art. 2.3 al. 3 | "Los pliegos… contemplarán todos aquellos requisitos necesarios para asegurar la conformidad con el ENS… tales como la presentación de las correspondientes Declaraciones o Certificaciones de Conformidad con el ENS." | ✅ |

### Why this is a product risk, not a footnote

Spain has **no NIS 2 transposition in force** (the LCGC is still in parliamentary
proceedings as of the 2026-07-25 check — no BOE publication found). Reglyze
nonetheless routes every ES org to the ENS dashboard variant and the ENS native
assessment tree.

For a Spanish **private SME with no public contract**, that means being assessed
against a scheme that, by its own art. 2, does not apply to it — while the law
that WILL apply to it does not exist yet. Asserting ENS obligations to that
customer would be a false positive of the worst kind: an obligation invented for
someone who does not bear it.

The ENS remains the right frame for a Spanish **public-sector entity** or a
**supplier to one** — and for the latter it is commercially sharp, since public
tender documents must require an ENS conformity declaration or certification.

### Follow-up required

1. The ES surface must know whether the org is in the ENS scope (public sector,
   or contractor to the public sector) and say so honestly when it is not.
2. ES copy must never present the ENS as "the Spanish NIS 2 transposition".
3. Track the LCGC to BOE publication — that is the text that will actually bind
   private Spanish entities.


## Categoría del sistema y régimen de conformidad — lectura 2026-10-15

<!-- meta: theme=framework; type=reference; date=2026-10-15; surfaces=ui,marketing; guard=apps/web/test/es-diagnostic.test.ts -->

- **Source read:** consolidated BOE text of RD 311/2022, BOE-A-2022-7191,
  https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191
- **Retrieved + read:** 2026-10-15 (art. 38.1, art. 40.2 and ANEXO I §§2-4;
  art. 2 was already read on 2026-07-25, see the section above).
- **Why now:** the ES diagnostic widget states a system's category and the
  conformity route that follows from it. Those are legal claims on a public
  marketing surface, and the ES page that already published them had never been
  checked against the source.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The five security dimensions | ANEXO I §2 «Dimensiones de la seguridad» | "Confidencialidad [C]", "Integridad [I]", "Trazabilidad [T]", "Autenticidad [A]", "Disponibilidad [D]" | ✅ |
| A dimension takes one of three levels, by the harm an incident would cause | ANEXO I §3 | nivel BAJO = "perjuicio limitado"; nivel MEDIO = "perjuicio grave"; nivel ALTO = "perjuicio muy grave". A dimension that is not affected takes no level. | ✅ |
| The category is the HIGHEST level any dimension reaches | ANEXO I §4 | "será de categoría ALTA si alguna de sus dimensiones de seguridad alcanza el nivel de seguridad ALTO" ; MEDIA "si alguna … alcanza el nivel de seguridad MEDIO" and none higher ; BÁSICA "si alguna … alcanza el nivel BAJO" and none higher | ✅ |
| Categorising the system does not change the levels of the other dimensions | ANEXO I §4.2 | the category is set by the driving dimension; the others keep their own level | ✅ |
| The category comes from the impact assessment, per ANEXO I | art. 40.2 | "valoración del impacto que tendría un incidente que afectase a la seguridad de la información o de los servicios" | ✅ |
| MEDIA and ALTA need a certification audit; BÁSICA only a self-assessment | art. 38.1 | "los sistemas de categoría MEDIA o ALTA precisarán de una auditoría para la certificación de su conformidad" ; "los sistemas de categoría BÁSICA solo requerirán de una autoevaluación para su declaración de la conformidad" | ✅ |

### What is deliberately NOT asserted

- **No audit periodicity.** art. 31 carries one, and the fetch of 2026-10-15
  returned it as a paraphrase ("at least every two years") rather than verbatim
  text. It is therefore absent from the widget copy, and
  `apps/web/test/es-diagnostic.test.ts` fails if a period appears there. Read
  art. 31 properly before any surface states it.
- **No size threshold.** The ENS has none: art. 2 keys scope to who you are and
  ANEXO I keys the measures to the category of each system. The ES widget is
  the only market questionnaire that asks neither headcount nor turnover, and a
  test pins that absence — importing the NIS2 widgets' size questions would
  invent a threshold the scheme does not have.
- **No NIS2 transposition.** Unchanged since the 2026-07-25 reading: the LCGC
  was in tramitación with no BOE publication. The out-of-scope verdict dates
  that statement to the day it was checked rather than predicting an entry into
  force.

### Where these facts are now published

`apps/web/src/components/diagnostic/es-config.ts` — the ES diagnostic widget on
/es/diagnostico. The page had explained a diagnostic it did not contain since it
shipped, and its button sent the visitor to /es/registro, whose own button sent
them back. 

## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Marco Legal y Normativo » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: ENS only: RD 311/2022, ámbito art. 2, categories BÁSICA/MEDIA/ALTA; NIS2 transposition explicitly « pendiente » in the block, no NIS2 fact asserted. Rule: any fact absent from
this index is ABSENT from the block; enriching means verifying here first.

## The LCGC is an anteproyecto, the Cortes are dissolved, and Spain is before the Court of Justice (read 2026-10-28)

<!-- meta: theme=statute; type=reference; date=2026-10-28; surfaces=data,marketing,ui,prompt; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

- **Sources read, all on 2026-10-28 (page text extracted directly):**
  - La Moncloa, Referencia del Consejo de Ministros, 14 January 2025:
    https://www.lamoncloa.gob.es/consejodeministros/referencias/Paginas/2025/20250114-referencia-rueda-de-prensa-ministros.aspx
  - La Moncloa, Referencia del Consejo de Ministros, 17 March 2026 (Interior,
    Proyecto de Ley de Protección y Resiliencia de las Entidades Críticas):
    https://www.lamoncloa.gob.es/consejodeministros/referencias/Paginas/2026/20260317-referencia-rueda-de-prensa-ministros.aspx
  - BOE-A-2026-20742, Real Decreto 806/2026, «BOE» núm. 248, de 6 de octubre
    de 2026: https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-20742
  - Real Decreto-ley 12/2018, consolidated text ("Última actualización
    publicada el 30/03/2022"), art. 11:
    https://www.boe.es/buscar/act.php?id=BOE-A-2018-12257
  - Government answer to written question 184/28254 (Congreso, 17/09/2025):
    https://www.congreso.es/entradap/l15p/e8/e_0085940_n_000.pdf
  - European Commission referral of 2026-07-08 (see `eu.md`).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| First-round approval of the anteproyecto | Moncloa, 14/01/2025 | "El Consejo de Ministros ha aprobado el anteproyecto de Ley de Coordinación y Gobernanza de la Ciberseguridad a propuesta conjunta de los ministerios del Interior, de Defensa y para la Transformación Digital y de la Función Pública." | ✅ |
| A second round was still to come, after the reports | Moncloa, 14/01/2025 | "dar trámite administrativo de urgencia al anteproyecto, para que pueda ser aprobado por el Gobierno, en segunda vuelta, cuanto antes y dar de inmediato paso a su debate parlamentario" ; "junto al preceptivo dictamen del Consejo de Estado" | ✅ |
| It transposes NIS 2 | Moncloa, 14/01/2025 | "la futura ley incorporará al ordenamiento jurídico español la Directiva (UE) 2022/2555" | ✅ |
| Still with the Ministry of the Interior in March 2026 | Moncloa, 17/03/2026 | "la Ley de Coordinación y Gobernanza de la Ciberseguridad que tramita el Ministerio del Interior y cuyo anteproyecto fue aprobado por el Consejo de Ministros en enero" | ✅ ("en enero" = January 2025: no other approval was found) |
| The bill's authorities: a Centro Nacional de Ciberseguridad and three control authorities | Moncloa, 14/01/2025 | "crea el Centro Nacional de Ciberseguridad, órgano de contacto único con la Unión Europea adscrito a la Secretaría General de Presidencia del Gobierno" ; "autoridades de control encargadas de las funciones de supervisión y ejecución: el Ministerio del Interior, a través de la Oficina de Coordinación de Ciberseguridad de la Secretaría de Estado de Seguridad, el Ministerio de Defensa, a través del Centro Criptológico Nacional, y el Ministerio para la Transformación Digital y de la Función Pública, a través de la Secretaría de Estado de Telecomunicaciones e Infraestructuras Digitales y de Digitalización e Inteligencia Artificial" | ✅ |
| The Cortes are dissolved | RD 806/2026, art. 1 | "Quedan disueltos el Congreso de los Diputados y el Senado elegidos el día 23 de julio de 2023." | ✅ |
| Election date | RD 806/2026, art. 2 | "Se convocan elecciones a ambas Cámaras, que se celebrarán el domingo 29 de noviembre de 2026." | ✅ |
| The new chambers meet on 23 December | RD 806/2026, art. 5 | "las Cámaras resultantes se reunirán, en sesiones constitutivas, el día 23 de diciembre, a las diez horas" | ✅ |
| In force on publication, 6 October 2026 | RD 806/2026, disposición final única | "El presente real decreto entrará en vigor el mismo día de su publicación en el «Boletín Oficial del Estado»." | ✅ |
| The 2018 NIS law names INCIBE-CERT as the reference CSIRT for private entities | RDL 12/2018, art. 11 | INCIBE-CERT serves the operators "no incluidas en el ámbito subjetivo de aplicación" of Ley 40/2015, and the citizens and private-law entities | ✅ |

A search of congreso.es found no proyecto de ley for the LCGC, and none of the
Council's referencias read mentions a second-round approval. Neither absence is
asserted anywhere: the product says only what the 17 March 2026 referencia says.

The tracker row must be re-verified once the new chambers have met
(`nis2-transposition-status.test.ts` fails after 2026-12-23 until it is).

## Defect: a "partial transposition via Real Decreto-ley" and a bill "en tramitación parlamentaria" (found 2026-10-28)

<!-- meta: theme=statute; type=status-error; date=2026-10-28; surfaces=data,ui,prompt,marketing; guard=packages/regulatory-data/test/country-configs-transposition-references.test.ts -->

`TRANSPOSITION_REFERENCES_ES` (read by the national-requirements panel, the
public compliance page, the training and incidents pages, and the tabletop
prompt of ai-service) told customers:

- "Partial transposition in force via Real Decreto-ley (reported by consistent
  secondary sources; primary BOE identity pending verification by the weekly
  regulatory watch)", in five languages. No such act was found in the BOE, and
  the weekly watch is an AI sweep of a few official pages: it never verifies a
  gazette identity. A fact flagged "pending verification" sat in a
  customer-facing list for months.
- `lawCitation`: "en tramitación parlamentaria; entrada en vigor estimada en
  2026". The text never left the ministry as far as any official source shows,
  and an entry into force in 2026 is now impossible with the Cortes dissolved.

Both are replaced by the facts of the section above. The guard rejects the
Real Decreto-ley claim, "tramitación parlamentaria" and any estimated entry
into force in the ES entry.

## Defect: the Spain page said the directive already binds Spanish companies, and called Spain the slowest (found 2026-10-28)

<!-- meta: theme=statute; type=law-misread,fabrication; date=2026-10-28; surfaces=marketing; guard=apps/web/test/country-spain-fiche.test.ts -->

`/eu/spain` said "Spanish organizations are still subject to the EU directive's
principles — courts may apply direct effect", "Spanish organisations remain
subject to the directive's principles" and, in an FAQ, "the directive's
principles already apply". An untransposed directive creates no obligations for
a private company by itself; the page's own enforcement note already said that
direct effect runs against the State and that enforcement against private
entities awaits the Spanish law. The page now says the 2018 NIS law (Real
Decreto-ley 12/2018) is the regime in force.

It also said "Spain has the slowest NIS2 transposition among major EU
economies", with no source; France, a major economy, is at the same stage and
was referred to the Court on the same day. Replaced by the referral itself.

## Needs check: INCIBE presented as Spain's NIS 2 competent authority

<!-- meta: theme=statute; type=needs-check; date=2026-10-28; surfaces=marketing,ui,data; guard=none -->

The bill's official summary (section above) creates a Centro Nacional de
Ciberseguridad and three control authorities (OCC of the Interior, CCN of
Defence, SETID of Digital Transformation). It does not name INCIBE, and the
Government's answer to written question 184/28254 lists the same three control
authorities. INCIBE-CERT is the reference CSIRT for private entities under the
2018 NIS law (RDL 12/2018, art. 11).

The product still names INCIBE as the competent authority on several surfaces:
the `/eu/spain` page ("INCIBE will be the primary competent authority", the
Competent Authority card, the meta description), `SPAIN_ES.authority` in the
national landing content, `primaryAuthorityName` in the country-config helpers,
and the ES diagnostic. Correcting one of them alone would make the surfaces
disagree (ADR 0041), so the correction is scheduled as one change across all of
them.
