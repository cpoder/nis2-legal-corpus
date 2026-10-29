# European Union: who is in scope of NIS2, and in which class

Union-level provisions that decide whether an entity is covered by Directive
(EU) 2022/2555 (NIS2) and whether it is an essential or an important entity,
together with the SME definition the Directive borrows from Commission
Recommendation 2003/361/EC. The key `eu` stands for Union law. National
transpositions may depart from these rules (see the per-country files); for its
own country, a national file wins over this one.

Conventions for every table below:

- Quotes are the **English text as published in the Official Journal**, read in
  full on EUR-Lex on 2026-10-23 and cross-checked against the OJ PDF. They are
  verbatim. "…" marks an elision. Footnote call numbers printed after a cited
  act, such as "(5)", are left out. In Annex rows the dashes "—" are the
  Annex's own indent marks, and line breaks are collapsed.
- **Verdict**: `verified` means the quoted words were read in the official text.
  `refuted` means the official text contradicts the claim. `secondary` marks the
  Commission's SME User Guide, which by its own disclaimer has no legal force.
- The notes under each table are readings, not quotations.

## Sources read, edition in force, and how they were reached

<!-- meta: theme=statute,scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Field | Directive (EU) 2022/2555 (NIS 2 Directive) | Commission Recommendation 2003/361/EC |
|---|---|---|
| Official citation | Directive (EU) 2022/2555 of the European Parliament and of the Council of 14 December 2022, OJ L 333, 27.12.2022, pp. 80–152 | Commission Recommendation of 6 May 2003 concerning the definition of micro, small and medium-sized enterprises, notified under document number C(2003) 1422, OJ L 124, 20.5.2003, pp. 36–41 |
| CELEX / ELI | 32022L2555 / http://data.europa.eu/eli/dir/2022/2555/oj | 32003H0361 / http://data.europa.eu/eli/reco/2003/361/oj |
| Text read in full (HTML) | https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng | https://eur-lex.europa.eu/eli/reco/2003/361/oj/eng |
| OJ PDF used for the cross-check and the page numbers | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32022L2555 (73 pages, L 333/80 to L 333/152) | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32003H0361 (6 pages, L 124/36 to L 124/41) |
| Amending acts listed by EUR-Lex ("Modified by") | **None.** Only corrigenda 32022L2555R(01) to R(09). The one corrigendum covering English, R(04) (OJ L, 2023/90206, 22.12.2023, ELI http://data.europa.eu/eli/dir/2022/2555/corrigendum/2023-12-22/oj), changes Art. 19(1) "The Cooperation Group shall, on 17 January 2025" to "by 17 January 2025". It touches nothing quoted in this file. | **None.** Only corrigenda R(01) (FI, SV), R(02) (EL), R(03) (BG, CS, ET, GA, HR, LT, LV, HU, MT, PL, RO, SK, SL); none covers English. EUR-Lex records that it replaced Recommendation 96/280/EC from 01/01/2005. |
| Pending proposals listed by EUR-Lex ("Amendment proposed by") | 52025PC0837 (Digital Omnibus, COM(2025) 837): its Article 6 amends NIS2 Art. 23, adds Art. 23a and amends Art. 30, nothing on scope. 52026PC0013 (COM(2026) 13): rewrites Art. 2(2)(a)(iii) and Art. 3(1)(a) and (b), see the section "Pending, not law" below. | none listed |
| Document-information pages read | https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32022L2555 | https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32003H0361 |
| Retrieval date | 2026-10-23 | 2026-10-23 |

The English text quoted below is therefore the current text of every provision
used here: no amending act exists, and the only English corrigendum concerns
Art. 19(1).

> Access note: EUR-Lex answered every plain request, including `curl -sL` with a
> browser User-Agent, with **HTTP 202 and an AWS WAF JavaScript challenge** (a
> 2 035-byte page with no text). A headless chromium (Playwright 1.61.1, browser
> from `~/.cache/ms-playwright`) passes the challenge on the first navigation.
> The HTML was read through that browser; the OJ PDFs were downloaded through the
> same browser context (same cookies) and read with `pdftotext -layout`. A 202
> from EUR-Lex is a bot check, not an unavailable source.

## A. Article 2(1): the general size-cap rule

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| The general rule covers entities of an Annex I or II type that are medium-sized or larger and active in the Union | Dir. Art. 2(1), first subpara., OJ L 333 p. 108 | "This Directive applies to public or private entities of a type referred to in Annex I or II which qualify as medium-sized enterprises under Article 2 of the Annex to Recommendation 2003/361/EC, or exceed the ceilings for medium-sized enterprises provided for in paragraph 1 of that Article, and which provide their services or carry out their activities within the Union." | verified |
| The Recommendation's public-body rule is switched off for NIS2 | Dir. Art. 2(1), second subpara., p. 108 | "Article 3(4) of the Annex to that Recommendation shall not apply for the purposes of this Directive." | verified |

Notes:

- Two conditions, both required: an Annex I or II type, and a size of at least
  medium. Small enterprises and microenterprises are outside the general rule and
  come in only through Art. 2(2) to 2(5).
- "Medium-sized" and "the ceilings" are the Recommendation's (section F),
  including its rules on how the figures are built. The second subparagraph
  disapplies only Art. 3(4) of the Recommendation's Annex: the partner and linked
  enterprise rules stay. Recital 16 (section G) speaks of Member States "applying
  Article 6(2) of the Annex", which confirms that aggregation applies.
- Without that subparagraph, an enterprise 25 % or more controlled by public
  bodies could not be an SME at all (Recommendation, Annex Art. 3(4), quoted in
  section F). With it, a publicly owned company is classified on its figures like
  any other.

## B. Article 2(2): in scope regardless of size

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| The size-independent grounds of paragraph 2 reach only Annex I or II types | Dir. Art. 2(2), chapeau, p. 108 | "Regardless of their size, this Directive also applies to entities of a type referred to in Annex I or II, where:" | verified |
| Point (a) names exactly three groups of providers | Dir. Art. 2(2)(a), p. 108 | "(a) services are provided by: (i) providers of public electronic communications networks or of publicly available electronic communications services; (ii) trust service providers; (iii) top-level domain name registries and domain name system service providers;" | verified |
| Cloud computing, data centre, content delivery network and Internet Exchange Point providers are in scope regardless of size under Art. 2(2)(a) | Dir. Art. 2(2)(a), p. 108; Annex I, sector 8, p. 145 | Absent from point (a) quoted above. They are listed only in Annex I, sector 8: "— Internet Exchange Point providers" … "— Cloud computing service providers — Data centre service providers — Content delivery network providers" | **refuted** |
| Managed service providers and managed security service providers are in scope regardless of size | Dir. Art. 2(2)(a); Annex I, sector 9, p. 145 | Absent from point (a). Annex I, sector 9: "— Managed service providers — Managed security service providers" | **refuted** |
| Sole provider of an essential service | Dir. Art. 2(2)(b), p. 108 | "(b) the entity is the sole provider in a Member State of a service which is essential for the maintenance of critical societal or economic activities;" | verified |
| Disruption with significant impact on safety, security or health | Dir. Art. 2(2)(c), p. 108 | "(c) disruption of the service provided by the entity could have a significant impact on public safety, public security or public health;" | verified |
| Disruption inducing significant systemic risk | Dir. Art. 2(2)(d), p. 108 | "(d) disruption of the service provided by the entity could induce a significant systemic risk, in particular for sectors where such disruption could have a cross-border impact;" | verified |
| Entity critical at national or regional level | Dir. Art. 2(2)(e), p. 108 | "(e) the entity is critical because of its specific importance at national or regional level for the particular sector or type of service, or for other interdependent sectors in the Member State;" | verified |
| Public administration: central government always, regional level on a risk-based assessment | Dir. Art. 2(2)(f), p. 109 | "(f) the entity is a public administration entity: (i) of central government as defined by a Member State in accordance with national law; or (ii) at regional level as defined by a Member State in accordance with national law that, following a risk-based assessment, provides services the disruption of which could have a significant impact on critical societal or economic activities." | verified |

Notes:

- **Point (a) is a closed list of three groups**, and every one of them is an
  Annex I sector 8 type. Cloud computing, data centre, content delivery network
  and Internet Exchange Point providers sit in the same Annex I sector but **not**
  in point (a); managed (security) service providers are Annex I sector 9 and not
  in point (a) either. For all of them the size test of Art. 2(1) applies, unless
  a ground in points (b) to (e) applies or national law widens the list.
- At HEAD `b8d65cea` Reglyze treated cloud, data-centre and CDN providers as
  size-independent: `SPECIAL_CATEGORY_QUESTION_IDS` in
  `packages/regulatory-data/src/scoping.ts` listed `is_cloud_provider`,
  `is_data_centre` and `is_cdn_provider` under the comment "Per Article 2(2)(a)
  NIS2", and step 2 of the public scope checker
  (`apps/web/src/app/[locale]/tools/nis2-scope-checker/scope-checker-tool.tsx`)
  answered "essential" for them. The text above supports neither.
- Point (a)(ii) says "trust service providers", without "qualified": every trust
  service provider in the eIDAS sense (Art. 6(25)) is in scope at any size, trust
  services used exclusively within closed systems aside (recital 11, see the
  Exits section). The qualified / non-qualified split decides only the class
  (section D).
- Points (b) to (e) are criteria. Art. 3(1)(e), Art. 3(2) second sentence and
  Art. 3(5)(b) speak of entities "identified" by a Member State under them. A
  self-assessed "sole provider" answer is a pointer to the national authority's
  identification, not a classification.
- Point (f)(ii) is conditional (risk-based assessment, significant impact);
  point (f)(i) is not.

## C. Article 2(3), 2(4) and 2(5): critical entities, domain name registration, optional extensions

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| Critical entities under the CER Directive are in scope at any size | Dir. Art. 2(3), p. 109 | "Regardless of their size, this Directive applies to entities identified as critical entities under Directive (EU) 2022/2557." | verified |
| Entities providing domain name registration services are in scope at any size | Dir. Art. 2(4), p. 109 | "Regardless of their size, this Directive applies to entities providing domain name registration services." | verified |
| Who counts as such an entity: registrars and their agents | Dir. Art. 6(22), p. 113 | "‘entity providing domain name registration services’ means a registrar or an agent acting on behalf of registrars, such as a privacy or proxy registration service provider or reseller;" | verified |
| Member States may extend the Directive to local public administration and to education institutions | Dir. Art. 2(5), p. 109 | "Member States may provide for this Directive to apply to: (a) public administration entities at local level; (b) education institutions, in particular where they carry out critical research activities." | verified |
| "Art. 2(5) lets Member States apply the Directive to other public administration entities" (wording of the brief) | Dir. Art. 2(5), p. 109 | as above | **incomplete**: point (a) is local public administration only, and point (b) adds education institutions |

Notes:

- Art. 2(3) and 2(4) do not carry the "of a type referred to in Annex I or II"
  condition of Art. 2(2).
- Entities providing domain name registration services are **not an Annex I or
  Annex II type** (neither Annex lists them, section E). Art. 3(3) lists them "as
  well as", not among, essential and important entities, and Art. 3(2) reaches
  only "entities of a type referred to in Annex I or II". Reading: a registrar or
  reseller that does nothing else is in scope but is neither essential nor
  important. Besides Art. 2(4) and the definitions in Art. 6(22) and 6(34), the
  articles that name it are Art. 3(3), 26, 27 and 28 (only Art. 3(3) is quoted
  here). A registrar that also runs authoritative DNS for third parties is a DNS
  service provider (Art. 6(20), section E) and therefore essential under
  Art. 3(1)(b).
- Local public administration is not an Annex I type either: Annex I sector 10
  lists central and regional entities only. Its class, where a Member State uses
  Art. 2(5)(a), is set by the transposing law.

## D. Article 3(1) and 3(2): essential versus important

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| Essential entities are an exhaustive list | Dir. Art. 3(1), chapeau, p. 110 | "For the purposes of this Directive, the following entities shall be considered to be essential entities:" | verified |
| (a) Annex I types above the medium ceilings, i.e. large | Dir. Art. 3(1)(a), p. 110 | "(a) entities of a type referred to in Annex I which exceed the ceilings for medium-sized enterprises provided for in Article 2(1) of the Annex to Recommendation 2003/361/EC;" | verified |
| (b) Qualified trust service providers, TLD registries and DNS service providers, at any size | Dir. Art. 3(1)(b), p. 110 | "(b) qualified trust service providers and top-level domain name registries as well as DNS service providers, regardless of their size;" | verified |
| (c) Public electronic communications providers **only when they qualify as medium-sized** | Dir. Art. 3(1)(c), p. 110 | "(c) providers of public electronic communications networks or of publicly available electronic communications services which qualify as medium-sized enterprises under Article 2 of the Annex to Recommendation 2003/361/EC;" | verified |
| (d) Central-government public administration | Dir. Art. 3(1)(d), p. 110 | "(d) public administration entities referred to in Article 2(2), point (f)(i);" | verified |
| (e) Entities a Member State identifies as essential | Dir. Art. 3(1)(e), p. 110 | "(e) any other entities of a type referred to in Annex I or II that are identified by a Member State as essential entities pursuant to Article 2(2), points (b) to (e);" | verified |
| (f) Critical entities under the CER Directive | Dir. Art. 3(1)(f), p. 110 | "(f) entities identified as critical entities under Directive (EU) 2022/2557, referred to in Article 2(3) of this Directive;" | verified |
| (g) Former operators of essential services, if the Member State so provides | Dir. Art. 3(1)(g), p. 110 | "(g) if the Member State so provides, entities which that Member State identified before 16 January 2023 as operators of essential services in accordance with Directive (EU) 2016/1148 or national law." | verified |
| Every other in-scope Annex I or II entity is important | Dir. Art. 3(2), p. 110 | "For the purposes of this Directive, entities of a type referred to in Annex I or II which do not qualify as essential entities pursuant to paragraph 1 of this Article shall be considered to be important entities. This includes entities identified by Member States as important entities pursuant to Article 2(2), points (b) to (e)." | verified |
| Registrars are listed beside, not among, essential and important entities | Dir. Art. 3(3), p. 110 | "By 17 April 2025, Member States shall establish a list of essential and important entities as well as entities providing domain name registration services." | verified |
| Every public electronic communications provider is essential whatever its size | Dir. Art. 3(1)(c), 3(1)(a), 3(2) | Point (c) above requires that they "qualify as medium-sized enterprises"; point (a) covers them only when they "exceed the ceilings"; the rest fall under Art. 3(2). | **refuted** |
| Every trust service provider is essential | Dir. Art. 3(1)(b), 3(1)(a), 3(2) | Point (b) names "qualified trust service providers" only. | **refuted** |
| An Annex II entity becomes essential by size alone | Dir. Art. 3(1)(a) | Point (a) is limited to "entities of a type referred to in Annex I". | **refuted** |

Notes, as a ladder (a reading of the rows above):

| Entity | Micro or small | Medium | Large (exceeds the medium ceilings) | Basis |
|---|---|---|---|---|
| Annex I type, general rule | out, unless Art. 2(2)(b) to (f) or 2(3) | important | essential | Art. 2(1), 3(1)(a), 3(2) |
| Annex II type | out, unless Art. 2(2)(b) to (e) or 2(3) | important | important (essential only if identified, Art. 3(1)(e)) | Art. 2(1), 3(2) |
| Qualified trust service provider, TLD name registry, DNS service provider | essential | essential | essential | Art. 2(2)(a), 3(1)(b) |
| Non-qualified trust service provider | important | important | essential | Art. 2(2)(a)(ii), 3(1)(a), 3(2) |
| Public electronic communications provider | important | **essential** | essential | Art. 2(2)(a)(i), 3(1)(c), 3(1)(a), 3(2) |
| Cloud, data centre, CDN, IXP provider; MSP, MSSP | out | important | essential | Art. 2(1), 3(1)(a), 3(2) |
| Central-government public administration | essential | essential | essential | Art. 2(2)(f)(i), 3(1)(d) |
| Regional public administration meeting the Art. 2(2)(f)(ii) test | important | important | important under Art. 3(2); whether Art. 3(1)(a) can reach a regional entity above the ceilings is not settled by the text read here | Art. 2(2)(f)(ii), 3(2) |
| Critical entity under Directive (EU) 2022/2557 | essential | essential | essential | Art. 2(3), 3(1)(f) |
| Registrar or reseller only | in scope, neither class | same | same | Art. 2(4), 3(3) |

The public electronic communications row is the inverted ladder: the medium rung,
which makes an ordinary Annex I entity important, makes a telecoms provider
essential.

## E. Annexes I and II, and the definitions that decide the type

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| Annex I, eleven sectors of high criticality | Annex I, title and sector column, pp. 143–146 | "SECTORS OF HIGH CRITICALITY": 1 "Energy", 2 "Transport", 3 "Banking", 4 "Financial market infrastructures", 5 "Health", 6 "Drinking water", 7 "Waste water", 8 "Digital infrastructure", 9 "ICT service management (business-to-business)", 10 "Public administration", 11 "Space" | verified |
| Sector 8, digital infrastructure: nine types | Annex I, point 8, p. 145 | "— Internet Exchange Point providers — DNS service providers, excluding operators of root name servers — TLD name registries — Cloud computing service providers — Data centre service providers — Content delivery network providers — Trust service providers — Providers of public electronic communications networks — Providers of publicly available electronic communications services" | verified |
| Sector 9, ICT service management (B2B): two types | Annex I, point 9, p. 145 | "— Managed service providers — Managed security service providers" | verified |
| Sector 10, public administration: central and regional only | Annex I, point 10, p. 146 | "— Public administration entities of central governments as defined by a Member State in accordance with national law — Public administration entities at regional level as defined by a Member State in accordance with national law" | verified |
| Critical medical devices and pharmaceutical manufacturing are Annex I (health), not Annex II | Annex I, point 5, p. 145 | "Entities manufacturing basic pharmaceutical products and pharmaceutical preparations referred to in section C division 21 of NACE Rev. 2" / "Entities manufacturing medical devices considered to be critical during a public health emergency (public health emergency critical devices list) within the meaning of Article 22 of Regulation (EU) 2022/123 of the European Parliament and of the Council" | verified |
| Annex II, seven other critical sectors | Annex II, title and sector column, pp. 148–149 | "OTHER CRITICAL SECTORS": 1 "Postal and courier services", 2 "Waste management", 3 "Manufacture, production and distribution of chemicals", 4 "Production, processing and distribution of food", 5 "Manufacturing", 6 "Digital providers", 7 "Research" | verified |
| Manufacturing: medical devices and IVDs other than the Annex I critical ones | Annex II, point 5(a), p. 148 | "Manufacture of medical devices and in vitro diagnostic medical devices": "Entities manufacturing medical devices as defined in Article 2, point (1), of Regulation (EU) 2017/745 of the European Parliament and of the Council, and entities manufacturing in vitro diagnostic medical devices as defined in Article 2, point (2), of Regulation (EU) 2017/746 of the European Parliament and of the Council with the exception of entities manufacturing medical devices referred to in Annex I, point 5, fifth indent, of this Directive" | verified |
| Manufacturing: NACE Rev. 2 divisions C26 to C30 | Annex II, point 5(b) to (f), p. 148 | (b) "Manufacture of computer, electronic and optical products": "Undertakings carrying out any of the economic activities referred to in section C division 26 of NACE Rev. 2"; (c) "Manufacture of electrical equipment": "… section C division 27 of NACE Rev. 2"; (d) "Manufacture of machinery and equipment n.e.c.": "… section C division 28 of NACE Rev. 2"; (e) "Manufacture of motor vehicles, trailers and semi-trailers": "… section C division 29 of NACE Rev. 2"; (f) "Manufacture of other transport equipment": "… section C division 30 of NACE Rev. 2" | verified |
| Digital providers: three types, all Annex II | Annex II, point 6, p. 149 | "— Providers of online marketplaces — Providers of online search engines — Providers of social networking services platforms" | verified |
| Research | Annex II, point 7, p. 149 | "Research organisations" | verified |
| Entities providing domain name registration services are an Annex I or II type | Annexes I and II, pp. 143–149 | Not listed in either Annex (compare sector 8 above). | **refuted** |
| Online marketplaces, search engines and social networks are digital infrastructure | Annex I, point 8; Annex II, point 6 | They are Annex II "Digital providers", not Annex I "Digital infrastructure". | **refuted** |

Definitions that decide whether an entity is of a given type (Art. 6):

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| DNS service provider: public recursive or third-party authoritative resolution, root servers excluded | Art. 6(20), p. 113 | "‘DNS service provider’ means an entity that provides: (a) publicly available recursive domain name resolution services for internet end-users; or (b) authoritative domain name resolution services for third-party use, with the exception of root name servers;" | verified |
| TLD name registry: own-use TLDs excluded | Art. 6(21), p. 113 | "‘top-level domain name registry’ or ‘TLD name registry’ means an entity which has been delegated a specific TLD and is responsible for administering the TLD … but excluding situations where TLD names are used by a registry only for its own use;" | verified |
| Trust service provider and qualified trust service provider are the eIDAS notions | Art. 6(25) and 6(27), p. 113 | "‘trust service provider’ means a trust service provider as defined in Article 3, point (19), of Regulation (EU) No 910/2014;" / "‘qualified trust service provider’ means a qualified trust service provider as defined in Article 3, point (20), of Regulation (EU) No 910/2014;" | verified |
| Cloud computing service | Art. 6(30), p. 113 | "‘cloud computing service’ means a digital service that enables on-demand administration and broad remote access to a scalable and elastic pool of shareable computing resources, including where such resources are distributed across several locations;" | verified |
| Data centre service | Art. 6(31), p. 114 | "‘data centre service’ means a service that encompasses structures, or groups of structures, dedicated to the centralised accommodation, interconnection and operation of IT and network equipment providing data storage, processing and transport services together with all the facilities and infrastructures for power distribution and environmental control;" | verified |
| Content delivery network | Art. 6(32), p. 114 | "‘content delivery network’ means a network of geographically distributed servers for the purpose of ensuring high availability, accessibility or fast delivery of digital content and services to internet users on behalf of content and service providers;" | verified |
| Managed service provider | Art. 6(39), p. 114 | "‘managed service provider’ means an entity that provides services related to the installation, management, operation or maintenance of ICT products, networks, infrastructure, applications or any other network and information systems, via assistance or active administration carried out either on customers’ premises or remotely;" | verified |
| Managed security service provider | Art. 6(40), p. 114 | "‘managed security service provider’ means a managed service provider that carries out or provides assistance for activities relating to cybersecurity risk management;" | verified |
| Research organisation: educational institutions excluded | Art. 6(41), p. 114 | "‘research organisation’ means an entity which has as its primary goal to conduct applied research or experimental development with a view to exploiting the results of that research for commercial purposes, but which does not include educational institutions." | verified |

Notes:

- "Digital infrastructure" (Annex I, can be essential by size) and "Digital
  providers" (Annex II, at most important by size) are different sectors. A
  questionnaire that merges them misclassifies large marketplaces, search engines
  and social networks as essential.
- Manufacturing is Annex II and therefore never essential by size alone. Two
  manufacturing activities sit in Annex I instead: pharmaceutical manufacturing
  (NACE C21) and medical devices on the public health emergency critical devices
  list, which Annex II point 5(a) excludes by cross-reference to Annex I, point 5,
  fifth indent.
- An organisation running DNS for its own domains, or a recursive resolver for its
  own staff, is not a DNS service provider under Art. 6(20): the definition
  requires "publicly available" recursive resolution "for internet end-users", or
  authoritative resolution "for third-party use".

## F. Recommendation 2003/361/EC: the ceilings, and how the figures are built

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| SME ceilings: headcount, and one of two financial ceilings ("and/or") | Rec. Annex Art. 2(1), OJ L 124 p. 39 | "The category of micro, small and medium-sized enterprises (SMEs) is made up of enterprises which employ fewer than 250 persons and which have an annual turnover not exceeding EUR 50 million, and/or an annual balance sheet total not exceeding EUR 43 million." | verified |
| Small enterprise ceilings | Rec. Annex Art. 2(2), p. 39 | "Within the SME category, a small enterprise is defined as an enterprise which employs fewer than 50 persons and whose annual turnover and/or annual balance sheet total does not exceed EUR 10 million." | verified |
| Microenterprise ceilings | Rec. Annex Art. 2(3), p. 39 | "Within the SME category, a microenterprise is defined as an enterprise which employs fewer than 10 persons and whose annual turnover and/or annual balance sheet total does not exceed EUR 2 million." | verified |
| A turnover above EUR 10 million on its own makes an enterprise medium-sized | Rec. Annex Art. 2(2), p. 39 | The small-enterprise test reads "annual turnover and/or annual balance sheet total does not exceed EUR 10 million": an enterprise under 50 persons whose balance sheet total stays at or under EUR 10 million is small whatever its turnover. | **refuted** |
| Public-body rule (disapplied for NIS2 by Dir. Art. 2(1), second subpara.) | Rec. Annex Art. 3(4), p. 40 | "Except in the cases set out in paragraph 2, second subparagraph, an enterprise cannot be considered an SME if 25 % or more of the capital or voting rights are directly or indirectly controlled, jointly or individually, by one or more public bodies." | verified |
| Which figures: latest approved accounts, annual basis, turnover net of VAT | Rec. Annex Art. 4(1), p. 40 | "The data to apply to the headcount of staff and the financial amounts are those relating to the latest approved accounting period and calculated on an annual basis. They are taken into account from the date of closure of the accounts. The amount selected for the turnover is calculated excluding value added tax (VAT) and other indirect taxes." | verified |
| Status changes only after the ceilings are crossed in **two consecutive accounting periods** | Rec. Annex Art. 4(2), p. 40 | "Where, at the date of closure of the accounts, an enterprise finds that, on an annual basis, it has exceeded or fallen below the headcount or financial ceilings stated in Article 2, this will not result in the loss or acquisition of the status of medium-sized, small or microenterprise unless those ceilings are exceeded over two consecutive accounting periods." | verified (the text says accounting periods, not years) |
| New enterprises: a bona fide estimate | Rec. Annex Art. 4(3), p. 40 | "In the case of newly established enterprises whose accounts have not yet been approved, the data to apply is to be derived from a bona fide estimate made in the course of the financial year." | verified |
| Headcount is counted in annual work units | Rec. Annex Art. 5, p. 40 | "The headcount corresponds to the number of annual work units (AWU), i.e. the number of persons who worked full-time within the enterprise in question or on its behalf during the entire reference year under consideration." … "Apprentices or students engaged in vocational training with an apprenticeship or vocational training contract are not included as staff. The duration of maternity or parental leaves is not counted." | verified |
| Autonomous enterprise: its own accounts only | Rec. Annex Art. 6(1), p. 40 | "In the case of an autonomous enterprise, the data, including the number of staff, are determined exclusively on the basis of the accounts of that enterprise." | verified |
| Partner enterprises aggregated pro rata, linked enterprises at 100 % | Rec. Annex Art. 6(2), second and third subparas., p. 41 | "To the data referred to in the first subparagraph are added the data of any partner enterprise of the enterprise in question situated immediately upstream or downstream from it. Aggregation is proportional to the percentage interest in the capital or voting rights (whichever is greater)." … "To the data referred to in the first and second subparagraph is added 100 % of the data of any enterprise, which is linked directly or indirectly to the enterprise in question, where the data were not already included through consolidation in the accounts." | verified |
| Partner from 25 %; linked from a majority of voting rights (first of four tests) | Rec. Annex Art. 3(2) and 3(3)(a), p. 39 | "an enterprise (upstream enterprise) holds, either solely or jointly with one or more linked enterprises within the meaning of paragraph 3, 25 % or more of the capital or voting rights of another enterprise (downstream enterprise)." / "(a) an enterprise has a majority of the shareholders' or members' voting rights in another enterprise;" | verified |

The Commission's own reading of the "and/or", **secondary source**: *User guide
to the SME Definition*, European Commission (DG GROW), Publications Office of the
European Union, 2020, PDF ISBN 978-92-79-69902-3, doi:10.2873/255862, retrieved
2026-10-23 from
https://ec.europa.eu/docsroom/documents/42921/attachments/1/translations/en/renditions/pdf
(the link serves the file from `webgate.ec.europa.eu/circabc-ewpp`; 60 pages,
read with `pdftotext`).

| Claim | Citation | Verbatim (EN) | Verdict |
|---|---|---|---|
| The guide has no legal force; the Recommendation is the sole authentic basis | User guide, inside cover (PDF p. 2) | "It does not have any legal force and does not bind the Commission in any way. Commission Recommendation 2003/361/EC, as published in the Official Journal of the European Union L 124, p. 36 of 20 May 2003, is the sole authentic basis for determining the conditions regarding qualification as an SME." | secondary, quoted accurately |
| Headcount ceiling mandatory; either financial ceiling suffices | User guide, p. 11 (PDF p. 13) | "Meeting the staff headcount criterion is mandatory in order to be considered an SME. However, an enterprise may choose to meet either the turnover or the balance sheet total ceiling. It does not need to satisfy both requirements and may exceed one of them without impact on its SME status." | secondary, quoted accurately |
| Headcount decides the category too | User guide, p. 12 (PDF p. 14) | "The staff headcount is a compulsory criterion for determining whether an enterprise can be considered an SME and, if so, in which category the SME falls. If an enterprise does not meet it, it cannot be considered an SME." | secondary, quoted accurately |

Notes:

- Thresholds on staff are strict ("fewer than"); thresholds on money are
  inclusive ("not exceeding", "does not exceed").
- The Recommendation defines the SME category (Art. 2(1)) and, within it, small
  (Art. 2(2)) and micro (Art. 2(3)) enterprises. "Medium-sized" is the SME
  category minus the small one. The boolean form is in the last section.
- A scoping questionnaire that asks only for the organisation's own headcount and
  turnover does not apply Art. 6(2): a 20-person subsidiary that is linked to a
  large group carries 100 % of the group's linked data. Recital 16 (section G)
  lets Member States take an entity's independence into account; that is a
  national choice, not a default.

## G. Recitals 7, 15, 16 and 28

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

| Claim | Citation | Verbatim (EN, as published), one sentence | Verdict |
|---|---|---|---|
| The size cap is the uniform scope criterion | Recital 7, OJ L 333 pp. 81–82 | "That criterion should consist of the application of a size-cap rule, whereby all entities which qualify as medium-sized enterprises under Article 2 of the Annex to Commission Recommendation 2003/361/EC, or exceed the ceilings for medium-sized enterprises provided for in paragraph 1 of that Article, and which operate within the sectors and provide the types of service or carry out the activities covered by this Directive fall within its scope." | verified |
| The two classes reflect criticality and size | Recital 15, p. 83 | "Entities falling within the scope of this Directive for the purpose of compliance with cybersecurity risk-management measures and reporting obligations should be classified into two categories, essential entities and important entities, reflecting the extent to which they are critical as regards their sector or the type of service they provide, as well as their size." | verified |
| Member States may weigh an entity's independence from its partner or linked enterprises | Recital 16, p. 83 | "In order to avoid entities that have partner enterprises or that are linked enterprises being considered to be essential or important entities where this would be disproportionate, Member States are able to take into account the degree of independence an entity enjoys in relation to its partner or linked enterprises when applying Article 6(2) of the Annex to Recommendation 2003/361/EC." | verified |
| DORA governs financial entities instead | Recital 28, p. 85 | "Member States should therefore not apply the provisions of this Directive on cybersecurity risk-management and reporting obligations, and supervision and enforcement, to financial entities covered by Regulation (EU) 2022/2554." | verified |

Notes: recital 7 has a second sentence, not quoted here, on small enterprises
and microenterprises that fulfil specific criteria indicating a key role.
Recitals 16 and 28 (here) and 8, 11 and 12 (Exits section) were not in the
brief; they bear directly on the size test, the DORA articulation and the exits.

## Exits and articulation with other Union acts

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

The provisions a prospect checks first, because they are the way out.

| Claim | Citation | Verbatim (EN, as published) | Verdict |
|---|---|---|---|
| Public administration in national security, public security, defence or law enforcement is outside the Directive | Dir. Art. 2(7), p. 109 | "This Directive does not apply to public administration entities that carry out their activities in the areas of national security, public security, defence or law enforcement, including the prevention, investigation, detection and prosecution of criminal offences." | verified |
| Member States may exempt entities in those areas, or serving only those administrations, from Art. 21 or 23, and if exclusively so, also from Art. 3 and 27 | Dir. Art. 2(8), p. 109 | "Member States may exempt specific entities which carry out activities in the areas of national security, public security, defence or law enforcement, … or which provide services exclusively to the public administration entities referred to in paragraph 7 of this Article, from the obligations laid down in Article 21 or 23 with regard to those activities or services." … "Where the entities carry out activities or provide services exclusively of the type referred to in this paragraph, Member States may decide also to exempt those entities from the obligations laid down in Articles 3 and 27." | verified |
| The two exits above never apply to a trust service provider | Dir. Art. 2(9), p. 109 | "Paragraphs 7 and 8 shall not apply where an entity acts as a trust service provider." | verified |
| Art. 2(7) reaches administrations whose activities are predominantly in those areas; regulators are not law enforcement | Recital 8, p. 82 | "The exclusion of public administration entities from the scope of this Directive should apply to entities whose activities are predominantly carried out in the areas of national security, public security, defence or law enforcement, including the prevention, investigation, detection and prosecution of criminal offences." … "For the purposes of this Directive, entities with regulatory competences are not considered to be carrying out activities in the area of law enforcement and are therefore not excluded on that ground from the scope of this Directive." | verified |
| Trust services used exclusively within closed systems are outside | Recital 11, p. 82 | "In line with the exclusion of certain specific services from Regulation (EU) No 910/2014, this Directive should not apply to the provision of trust services that are used exclusively within closed systems resulting from national law or from agreements between a defined set of participants." | verified |
| Postal and courier: transport not tied to a step of the postal chain is outside | Recital 12, p. 83 | "Transport services that are not undertaken in conjunction with one of those steps should be excluded from the scope of postal services." | verified |
| Entities exempted from DORA under its Art. 2(4) are outside NIS2 too | Dir. Art. 2(10), p. 109 | "This Directive does not apply to entities which Member States have exempted from the scope of Regulation (EU) 2022/2554 in accordance with Article 2(4) of that Regulation." | verified |
| National law may go further than the Directive, within Union law | Dir. Art. 5, p. 111 | "This Directive shall not preclude Member States from adopting or maintaining provisions ensuring a higher level of cybersecurity, provided that such provisions are consistent with Member States’ obligations laid down in Union law." | verified |
| Sector-specific Union acts with at least equivalent requirements displace NIS2's measures, reporting and supervision | Dir. Art. 4(1), p. 111 | "Where sector-specific Union legal acts require essential or important entities to adopt cybersecurity risk-management measures or to notify significant incidents and where those requirements are at least equivalent in effect to the obligations laid down in this Directive, the relevant provisions of this Directive, including the provisions on supervision and enforcement laid down in Chapter VII, shall not apply to such entities." | verified |
| Judiciary, parliaments and central banks are not public administration entities; four cumulative criteria | Dir. Art. 6(35), p. 114 | "‘public administration entity’ means an entity recognised as such in a Member State in accordance with national law, not including the judiciary, parliaments or central banks, which complies with the following criteria: (a) it is established for the purpose of meeting needs in the general interest and does not have an industrial or commercial character; (b) it has legal personality or is entitled by law to act on behalf of another entity with legal personality; (c) it is financed, for the most part, by the State, regional authorities or by other bodies governed by public law, is subject to management supervision by those authorities or bodies, or has an administrative, managerial or supervisory board, more than half of whose members are appointed by the State, regional authorities or by other bodies governed by public law; (d) it has the power to address to natural or legal persons administrative or regulatory decisions affecting their rights in the cross-border movement of persons, goods, services or capital;" | verified |
| Root name servers are not DNS service providers; own-use TLDs are not TLD registries; educational institutions are not research organisations | Dir. Art. 6(20), 6(21), 6(41) | See section E: "with the exception of root name servers" / "but excluding situations where TLD names are used by a registry only for its own use" / "but which does not include educational institutions" | verified |
| Exclusions inside Annex I: water, waste water, road authorities, space | Annex I, points 2(d) (p. 144), 6 and 7 (p. 145), 11 (p. 146) | "excluding distributors for which distribution of water for human consumption is a non-essential part of their general activity of distributing other commodities and goods" / "excluding undertakings for which collecting, disposing of or treating urban waste water, domestic waste water or industrial waste water is a non-essential part of their general activity" / "responsible for traffic management control, excluding public entities for which traffic management or the operation of intelligent transport systems is a non-essential part of their general activity" / "that support the provision of space-based services, excluding providers of public electronic communications networks" | verified |
| Exclusions inside Annex II: waste management as a side activity, food retail | Annex II, points 2 and 4, p. 148 | "excluding undertakings for whom waste management is not their principal economic activity" / "Food businesses as defined in Article 3, point (2), of Regulation (EC) No 178/2002 of the European Parliament and of the Council which are engaged in wholesale distribution and industrial production and processing" | verified |

Notes:

- Art. 2(9) is the trap inside the trap: a defence or law-enforcement body that
  also acts as a trust service provider stays in scope.
- Annex I points 3 (credit institutions) and 4 (operators of trading venues,
  central counterparties) name entities that may also be financial entities under
  Regulation (EU) 2022/2554. Where they are, recital 28 says the NIS2
  risk-management, reporting, supervision and enforcement provisions should not
  be applied to them, and Art. 4(1) is the operative rule. Which entities DORA
  covers is set by DORA itself, which was not read for this file. A classifier
  that returns "essential, NIS2 obligations" for a DORA-covered entity without
  saying so misleads.
- Art. 4(2), not quoted here, sets what counts as equivalent: risk-management
  measures at least equivalent in effect to Art. 21(1) and (2), or incident
  notification at least equivalent in effect to Art. 23(1) to (6) together with
  immediate access to the notifications for the CSIRTs, competent authorities or
  single points of contact.

## Pending, not law: COM(2026) 13 would rewrite Art. 2(2)(a)(iii) and Art. 3(1)(a) and (b)

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=docs; guard=none -->

Commission proposal for a Directive amending Directive (EU) 2022/2555 "as
regards simplification measures and alignment with the [Proposal for the
Cybersecurity Act 2]", COM(2026) 13 final, Strasbourg, 20.1.2026, procedure
2026/0012(COD), CELEX 52026PC0013,
https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026PC0013. On
2026-10-23 the EUR-Lex procedure page
(https://eur-lex.europa.eu/procedure/EN/2026_12) shows it as **"Ongoing"**, with
two steps listed (the Commission proposal, an opinion of the Economic and Social
Committee), and the Directive's own page lists no amending act. **Nothing in this
section is law. It must not feed any configuration.** It is recorded because a
fix to the scoping engine should know which of today's rules are under review.

| What the proposal would change | Citation | Verbatim (EN, proposal text) | Verdict |
|---|---|---|---|
| DNS service providers would leave the size-independent list; EU Digital Identity Wallet and European Business Wallet providers would join it | COM(2026) 13, Art. 1(1)(a) | "(i) point (iii) is replaced by the following: ‘(iii) ‘top-level domain name registries;’;" … "the following points (iv) and (v) are added: ‘(iv) providers of European Digital Identity Wallets as provided in in Regulation (EU) No 910/2014;" | verified as proposal text, not law |
| Annex I entities would be essential only above the small mid-cap ceilings; DNS providers would leave Art. 3(1)(b) | COM(2026) 13, Art. 1(2)(a)(i) | "‘(a) entities of a type referred to in Annex I which exceed the ceilings for small mid-cap enterprises;" / "‘(b) qualified trust service providers, providers of European Digital Identity Wallets, providers of European Business Wallets and top-level domain name registries, regardless of their size;’;" | verified as proposal text, not law |
| Stated intent for DNS | COM(2026) 13, recital 2 | "the general size-cap rule set out in Directive (EU) 2022/2555, whereby all entities which qualify as medium-sized enterprises under Article 2 of the Annex to Commission Recommendation 2003/361/EC, or exceed the ceilings for medium-sized enterprises provided for in paragraph 1 of that Article, fall within the scope of Directive (EU) 2022/2555, should be applied to Domain Name System service providers." | verified as proposal text, not law |

The proposal also inserts an Art. 2(3a) and an Art. 3(1)(h) on strategic dual-use
infrastructure, and its Annex amends Annex I points 1(a) (producers whose total
generation capacity does not exceed 1 MW excluded), 1(e) (hydrogen), 2(d)
(intelligent transport systems service providers), 5 (healthcare providers) and
8 (three new digital-infrastructure types: providers of European Digital Identity
Wallets, providers of European Business Wallets, and "Operators of submarine data
transmission infrastructure where they are not covered as another type of
entity"), and Annex II point 3 (chemicals). The small mid-cap ceilings come from
Commission Recommendation (EU) 2025/1099, which was not read for this file.

## Reading for a scoping engine

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=none -->

Derived from the quotes above; each line names its article. Union law only:
apply the national file first where one exists.

**1. Size test (Recommendation, Annex Art. 2, with Art. 3 to 6).** Inputs: `S` =
staff in annual work units (Art. 5); `T` = annual turnover net of VAT (Art. 4(1));
`B` = annual balance sheet total; all from the latest approved accounts on an
annual basis (Art. 4(1)) or a bona fide estimate for a new enterprise (Art. 4(3));
own accounts only if autonomous (Art. 6(1)), otherwise plus partner data pro rata
and linked data at 100 % (Art. 6(2)); the public-body rule of Art. 3(4) disapplied
(Dir. Art. 2(1), second subpara.).

```
SME    = S < 250  AND (T <= 50 000 000 OR B <= 43 000 000)        Art. 2(1)
small  = S < 50   AND (T <= 10 000 000 OR B <= 10 000 000)        Art. 2(2)   (micro is a subset)
micro  = S < 10   AND (T <=  2 000 000 OR B <=  2 000 000)        Art. 2(3)
large  = NOT SME  = S >= 250 OR (T > 50 000 000 AND B > 43 000 000)
         ("exceed the ceilings for medium-sized enterprises", Dir. Art. 2(1), 3(1)(a))
medium = SME AND NOT small

Dir. Art. 2(1) size condition = medium OR large = NOT small
                              = S >= 50 OR (T > 10 000 000 AND B > 10 000 000)
```

A status changes only when the ceilings are crossed over two consecutive
accounting periods (Art. 4(2)). Worked cases: 30 AWU, T 12M, B 5M is small (out
of Art. 2(1)); 30 AWU, T 12M, B 11M is medium; 100 AWU, T 60M, B 30M is medium;
100 AWU, T 60M, B 45M is large; 260 AWU is large whatever the money.

**2. Size-independent types under Art. 2(2)(a), exhaustively:** (i) providers of
public electronic communications networks or of publicly available electronic
communications services; (ii) trust service providers, qualified or not
(trust services used exclusively within closed systems aside, recital 11);
(iii) top-level domain name registries and DNS service providers (Art. 6(20):
publicly available recursive resolution for internet end-users, or authoritative
resolution for third-party use; root name servers excepted). Nothing else.
Cloud computing, data centre, CDN and IXP providers, MSPs, MSSPs and the Annex II
digital providers are size-tested. The other size-independent grounds sit
outside point (a): Art. 2(2)(b) to (e) (identification by a Member State),
2(2)(f) (central government; regional on a risk-based assessment), 2(3) (CER
critical entities), 2(4) (domain name registration services), 2(5) (optional:
local public administration, education institutions).

**3. Essential entities under Art. 3(1), exhaustively:** (a) Annex I types that
exceed the medium ceilings, i.e. large (never Annex II by size); (b) qualified
trust service providers, TLD name registries and DNS service providers, at any
size; (c) public electronic communications providers that qualify as
medium-sized; (d) central-government public administration (Art. 2(2)(f)(i));
(e) Annex I or II types a Member State identifies as essential under Art. 2(2)(b)
to (e); (f) critical entities under Directive (EU) 2022/2557; (g) where the Member
State so provides, entities it identified before 16 January 2023 as operators of
essential services. Every other in-scope entity of an Annex I or II type is
important (Art. 3(2)). Entities providing domain name registration services and
nothing else are in scope but in neither class (Art. 2(4), 3(3)).

**4. The two inverted cases.** A **non-qualified trust service provider** is in
scope at any size (Art. 2(2)(a)(ii)); it is essential only when large, because
trust service providers are an Annex I type (Art. 3(1)(a)); otherwise it is
important (Art. 3(2)). A **micro or small public electronic communications
provider** is in scope (Art. 2(2)(a)(i)) and important (Art. 3(2)): Art. 3(1)(c)
makes the provider essential from the medium rung, and Art. 3(1)(a) keeps it
essential when large.

**5. What a classifier must ask to be exhaustive at Union level:** whether the
entity is linked to or a partner of other enterprises (Rec. Art. 6(2), recital 16);
for public administration, which level (central, regional, local) and whether it
is the judiciary, a parliament, a central bank or a national-security, defence or
law-enforcement body (Art. 6(35), 2(7), recital 8), and whether it acts as a
trust service provider (Art. 2(9)); for a trust service provider, whether its
services are used exclusively within closed systems (recital 11); for DNS, whether the service is public or for third parties
(Art. 6(20)); whether it is a DORA financial entity (Art. 4(1), 2(10), recital 28);
whether it has been identified as a CER critical entity (Art. 2(3)); whether it
provides domain name registration services (Art. 2(4)); and whether it is
"Digital infrastructure" (Annex I) or a "Digital provider" (Annex II).

## Defect: cloud, data-centre and CDN providers treated as size-independent, and the SME ceilings read with "and" (found 2026-10-22, fixed 2026-10-23)

<!-- meta: theme=scoping; type=scope-error,test-pinned; date=2026-10-23; surfaces=data,ui,marketing,prompt,mcp; guard=packages/regulatory-data/test/scoping.test.ts,apps/web/test/diagnostic-any-size-lists.test.ts -->

What the product asserted until the commits that carry this section. The first
two commits corrected the engine, the prompts, the MCP tool, the public scope
checker, the five national diagnostic widgets, the country pages and the
homepage FAQ; the market landings and feature pages (DE, FR, IT, PT, PL, BE),
the training courses (which need a reseed) and a handful of minor strings are
corrected in the follow-up pull request listed at the end of this section.

| Surface | What it said | What the text says |
|---|---|---|
| `packages/regulatory-data/src/scoping.ts` (`SPECIAL_CATEGORY_QUESTION_IDS`) | cloud computing, data centre and CDN providers "in scope regardless of size under Article 2(2)(a)" | Art. 2(2)(a) names public e-communications providers, trust service providers, TLD registries and DNS providers, and nobody else (section B) |
| same file, special-category branch | DNS, TLD **and public e-communications providers** "always essential under Article 3(1)" | Art. 3(1)(c): essential when they "qualify as medium-sized enterprises"; Art. 3(2): otherwise important (section D) |
| same file, `classifySize` | medium on turnover alone above EUR 10 M; large on turnover alone above EUR 50 M | Annex Art. 2: "annual turnover … and/or … balance sheet total"; one financial ceiling suffices, the headcount ceiling is mandatory (section F) |
| same file, order of checks | the size exit ran before the public-administration rule | Art. 2(2)(f): public administration regardless of size |
| `apps/ai-service/src/lib/auto-scoping-prompt.ts`, `packages/prompts/src/templates/classification.ts` | the same list and the same "and" | sections B, D, F |
| `/tools/nis2-scope-checker` (own classifier), diagnostic widgets DE, FR, IT, PT, PL, eight sentences in `countries-seo.ts`, the DE and PT localized fiches | "DNS, TLD, cloud, data centre, CDN, trust services: in scope regardless of size", answered "essential" | sections B and D |

Effect measured on 2026-10-23: of the 58 scoping assessments stored in
production, one verdict changes under the corrected engine (a 10-person Polish
ICT consultancy with a cloud flag, from important to out of scope). The
Slovenian sign-up of 2026-10-22 (5 staff, digital infrastructure) would have
been told "in scope, important" had it submitted.

Guards: the Recommendation matrix and the Article 2(2)(a) matrix in
`packages/regulatory-data/test/scoping.test.ts`; the five widgets' lists in
`apps/web/test/diagnostic-any-size-lists.test.ts`; the public checker's case
table in `apps/web/test/scope-checker-classify.test.ts`.

Corrected by the follow-up pull request #760
(`fix/scoping-copy-market-pages-and-training`, 2026-10-23): the market pages
and landings (DE, FR, IT, PT, PL, BE), `apps/web/src/lib/countries/italy.ts`
and `portugal.ts`, the country SEO fiches in `apps/web/src/lib/countries-seo.ts`
(worked cases re-sized or re-classed: a 120-person utility and a 150-person
distributor are important, not essential), the training courses (curriculum
CHANGELOG v1.20.1; reseed required), the Italian fine citation (art. 38 c. 9
lett. a)/b) on the pages, in `misure-acn.yaml` and in the in-app strings; the
accessory incapacity is c. 6 and the registration-failure bands c. 10-11), the
"Annex I (essential) / Annex II (important)" labels on the public checker page,
the country pages and the remediation prompt
`apps/ai-service/src/lib/remediation-prompt.ts`, and the minor in-app strings
listed above; the tests that carried the old wording are re-pinned.

Still open after #760 (declared, not forgotten):

- The five national diagnostic widgets
  (`apps/web/src/components/diagnostic/{de,fr,it,pt,pl}-config.ts`) and the
  public checker (`scope-checker-tool.tsx`) ask for turnover but not for the
  balance sheet, so their lower bound is turnover-only: a 30-person company
  with EUR 12 M turnover and a EUR 5 M balance sheet is told it is medium. The
  missing input is disclosed only on the large branch.
- The national scope trees
  `packages/regulatory-data/src/nis2-mappings/scope/{de,fr,it,pt,be}.yaml`
  still encode the old lists; `getScope()` in the mappings loader is exercised
  by `packages/regulatory-data/test/nis2-mappings-loader.test.ts` only, no app
  calls it.
- Not modelled by the engine on any version: domain-name registrars (in
  scope, no class, Art. 2(4) and 3(3)), CER critical entities (Art. 2(3),
  3(1)(f)), linked and partner enterprise aggregation (Rec. Annex Art. 6(2)),
  the Polish MSSP rule (UKSC art. 5 ust. 1 pkt 3, kluczowy from small size,
  also unstated on the Polish page); the central/regional level of public
  administration is asked, not known.
- The stale `apps/web/src/lib/i18n/translations.ts.orig` and the
  `tools/es-i18n/chunks` extracts, read by nothing, still carry the old
  sentences.

## Court of Justice referral of Ireland, Spain, France and the Netherlands (8 July 2026)

<!-- meta: theme=statute; type=reference,status-error; date=2026-10-28; surfaces=data,marketing,ui,prompt; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

- **Source read:** European Commission, Shaping Europe's digital future,
  "Commission refers Ireland, Spain, France and the Netherlands to the Court of
  Justice for failing to transpose the rules on cybersecurity", publication
  08 July 2026, last update 9 July 2026.
  https://digital-strategy.ec.europa.eu/en/news/commission-refers-ireland-spain-france-and-netherlands-court-justice-failing-transpose-rules
- **Retrieved + read:** 2026-10-28 (page text extracted directly; quotes below
  are verbatim).

| Fact | Verbatim (official) | Status |
|---|---|---|
| The decision and the four Member States | "The European Commission has decided to refer Ireland, Spain, France and the Netherlands to the Court of Justice of the European Union for failing to notify measures transposing the NIS2 Directive on securing network and information systems (Directive (EU) 2022/2555) into national law." | ✅ |
| Why these four | "While most complied, Spain, France, Ireland and the Netherlands have yet to notify full transposition." | ✅ |
| What is asked of the Court | "The referrals include a request to the Court to impose financial sanctions, consisting of a lump sum and daily penalties until notification of complete transposition." | ✅ |
| The earlier steps | "The Commission sent letters of formal notice on 28 November 2024 and reasoned opinions on 7 May 2025." | ✅ |
| Case numbers | None on the page (no INFR reference per country). | n/a |

### What the product said until 2026-10-28

The tracker rows of the four countries said "directive deadline missed" (FR, ES,
IE) or "the Commission procedure is not verified as closed" (NL), and the France
and Spain country pages said "infringement procedure". Each was true when
written and stale for sixteen weeks: the referral is the step that changes what a
reader should expect, a judgment and financial penalties, and the weekly AI sweep
does not look for it. The four rows and both pages now cite it, and
`nis2-transposition-status.test.ts` fails if a row stops naming it.

The Netherlands was referred the day after its Eerste Kamer adopted the
Cyberbeveiligingswet (2026-07-07) and before the law commenced (2026-08-15).
The register, read later the same day (section below), shows the Commission
closed the Dutch case on 2026-10-01, so `infringementOpen` is false.

## NIS2 non-transposition infringement cases: the Commission's register, all member states (read 2026-10-28)

<!-- meta: theme=statute; type=reference,status-error; date=2026-10-28; surfaces=data; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

- **Source read:** European Commission, infringement decisions register,
  https://ec.europa.eu/implementing-eu-law/search-infringement-decisions/ ,
  through its JSON API (`POST /api/infringements` with
  `{"langCode":"EN","refId":"INFR(2024)0xxx"}`), one call per case, for the 24
  cases titled "Lack of transposition of Directive (EU) 2022/2555 on measures for
  a high common level of cybersecurity across the Union by <member state>".
- **Retrieved:** 2026-10-28. Belgium, Croatia and Italy have no such case.
- Every case opened with a formal notice on 27/11/2024; the reasoned opinions
  are dated 7/05/2025.

| Member state | Case | Status | Last decision |
|---|---|---|---|
| Austria | INFR(2024)0254 | closed | 1/10/2026 Closing of the case |
| Bulgaria | INFR(2024)0257 | closed | 1/10/2026 Closing of the case |
| Cyprus | INFR(2024)0259 | closed | 8/10/2025 Closing of the case |
| Czechia | INFR(2024)0261 | closed | 8/07/2026 Closing of the case |
| Denmark | INFR(2024)0265 | closed | 30/01/2026 Closing of the case |
| Estonia | INFR(2024)0267 | **open** | 7/05/2025 Reasoned opinion |
| Finland | INFR(2024)0272 | **open** | 7/05/2025 Reasoned opinion |
| France | INFR(2024)0274 | **open** | 8/07/2026 Referral to the Court of Justice (C-1089/26) |
| Germany | INFR(2024)0263 | **open** | 7/05/2025 Reasoned opinion |
| Greece | INFR(2024)0268 | closed | 12/02/2025 Closing of the case |
| Hungary | INFR(2024)0277 | closed | 1/10/2026 Closing of the case |
| Ireland | INFR(2024)0279 | **open** | 8/07/2026 Referral to the Court of Justice (C-1076/26) |
| Latvia | INFR(2024)0284 | closed | 30/01/2026 Closing of the case |
| Lithuania | INFR(2024)0280 | closed | 12/02/2025 Closing of the case |
| Luxembourg | INFR(2024)0282 | closed | 8/07/2026 Closing of the case |
| Malta | INFR(2024)0286 | closed | 8/10/2025 Closing of the case |
| Netherlands | INFR(2024)0288 | closed | 1/10/2026 Closing of the case |
| Poland | INFR(2024)0290 | closed | 1/10/2026 Closing of the case |
| Portugal | INFR(2024)0292 | **open** | 7/05/2025 Reasoned opinion |
| Romania | INFR(2024)0294 | closed | 8/10/2025 Closing of the case |
| Slovakia | INFR(2024)0300 | closed | 8/10/2025 Closing of the case |
| Slovenia | INFR(2024)0298 | closed | 30/01/2026 Closing of the case |
| Spain | INFR(2024)0270 | **open** | 8/07/2026 Referral to the Court of Justice (C-1080/26) |
| Sweden | INFR(2024)0296 | **open** | 7/05/2025 Reasoned opinion |

### What the tracker said until 2026-10-28

Seven rows disagreed with the register. Germany, Portugal, Sweden, Estonia and
Finland said no procedure was open, while each case is still active at the
reasoned-opinion stage, even where the national law has applied for months
(Germany since 2025-12-06, Portugal since 2026-04-03, Sweden since 2026-01-15,
Estonia since 2026-01-01). Austria and the Netherlands said a procedure was
open, while the Commission closed both cases on 2026-10-01; the Netherlands had
been referred to the Court of Justice on 2026-07-08 and the case was closed
after the Cyberbeveiligingswet applied. The tracker now carries the register's
status for every row, and the test pins it, with a clock: the snapshot must be
re-read within 90 days.

## Defect: three pages said "the class follows size, not the annex" (found and fixed 2026-10-29)

<!-- meta: theme=scoping; type=law-misread; date=2026-10-29; surfaces=marketing; guard=apps/web/test/country-greece-fiche.test.tsx -->

Found while writing the Greek fiches. The English chrome of every country
page (`apps/web/src/app/[locale]/eu/[country]/page.tsx`), the HowTo of the
scope checker (`apps/web/src/app/[locale]/tools/nis2-scope-checker/page.tsx`)
and the Austrian FAQ in `countries-seo.ts` said that the class, essential or
important, "follows size, not the annex". Section D above refutes the
reading: Art. 3(1)(a) is limited to "entities of a type referred to in Annex
I", so an Annex II entity is never essential by its size alone (row "An Annex
II entity becomes essential by size alone", refuted). The Greek law says the
same in its own words, art. 4 §1 α) of ν. 5160/2024 (greece.md, P0.2).

The sentence replaced one that equated Annex I with essential and Annex II
with important (#760); it corrected that error by overstating the opposite.
All three now say that the class depends on the annex and the size together,
and the guard fails on the old wording anywhere under `apps/web/src`.
