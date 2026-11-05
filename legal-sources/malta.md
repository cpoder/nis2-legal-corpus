# Malta — NIS2 National Transposition Legal Sources

## Statute: Measures for a High Common Level of Cybersecurity (Malta) Order (S.L. 460.41)

<!-- meta: theme=statute; type=reference; date=2026-10-29; surfaces=data; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

| Field | Value |
|---|---|
| Official citation | S.L. 460.41 (L.N. 71 of 2025), brought fully into force by L.N. 22 of 2026 — Government Gazette of Malta No. 21,575, 23.01.2026 |
| Short name | S.L. 460.41 (L.N. 22 of 2026) |
| Transposes | Directive (EU) 2022/2555 (NIS2) |
| Official URL (Legislation Malta, ELI) | https://legislation.mt/eli/ln/2026/22/eng |
| Retrieval date | 2026-06-07 |

### Fact table

| Fact | Source | Verbatim quote | Status |
|---|---|---|---|
| Commenced 2026-01-23 | L.N. 22 of 2026 (Commencement Notice, under art. 1(3) of S.L. 460.41) | "…the Minister responsible for critical infrastructure protection has established the 23rd January 2026 as the date on which all the provisions of the said Order shall come into force." | verified |

### Notes

- The Order itself (S.L. 460.41, L.N. 71 of 2025) has no commencement article; commencement is fixed by the separate **Commencement Notice L.N. 22 of 2026** (Government Gazette No. 21,575, 23.01.2026). PDF read via Playwright + direct download.
- S.L. 460.41 was later amended by L.N. 89 of 2026 (post-commencement). The EC digital-strategy tracker still showed Malta "not yet transposed" (stale) at retrieval.
- Tracker: stage = `in_force`; targetDate null (already in force).
- 2026-10-29: this scouting note was followed. The Order is L.N. 71 of 2025, dated 2025-04-08 in Legislation Malta's own metadata; L.N. 22 of 2026 only brought it into force. The tracker named the commencement notice as the law and dated the law 2026-01-23 until that day.

## Sources read in full on 2026-10-29: the Order as amended, its commencement, its amendment

<!-- meta: theme=statute; type=reference; date=2026-10-29; surfaces=data; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

Every text was downloaded from Legislation Malta (legislation.mt, the
Legislation Unit's ELI service) as PDF with curl, converted with pdftotext and
read in full. The consolidated text is the one Legislation Malta publishes for
S.L. 460.41, "LEGAL NOTICE 71 of 2025, as amended by Legal Notice 89 of 2026."

| Text | ELI and PDF | Date (Legislation Malta metadata) | Read |
|---|---|---|---|
| S.L. 460.41, consolidated (67 pages) | https://legislation.mt/eli/sl/460.41/eng ; `/eng/pdf` | "legislationDate": "2025-04-15", version "2026-04-07" | in full |
| L.N. 71 of 2025, the Order as made (72 pages) | https://legislation.mt/eli/ln/2025/71/eng ; `/eng/pdf` | "legislationDate": "2025-04-08" | Part I and the commencement clause, compared with the consolidated text |
| L.N. 22 of 2026, Commencement Notice | https://legislation.mt/eli/ln/2026/22/eng ; `/eng/pdf` | "legislationDate": "2026-01-23" | in full |
| L.N. 89 of 2026, Amendment Order (34 pages) | https://legislation.mt/eli/ln/2026/89/eng ; `/eng/pdf` | "legislationDate": "2026-04-07" | its opening and its citation clause; its effect read in the consolidated text |
| Commission infringement register | `ec.europa.eu/implementing-eu-law/search-infringement-decisions/`, the page's own `POST /api/decisions` with `memberState` "MT" | read 2026-10-29 | the two decisions |

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Transposes NIS2 | S.L. 460.41 art. 1(2) | "The scope of this order is to transpose Directive (EU) 2022/2555" | ✅ |
| Made under the European Union Act | L.N. 71 of 2025, preamble | "IN EXERCISE of the powers conferred by article 4(2) of the European Union Act, the Minister responsible for critical infrastructure protection, has made the following order" | ✅ |
| Commencement by notice | L.N. 71 of 2025 art. 1(3) | "This order shall come into force on such a date or dates as the Minister responsible for critical infrastructure protection may by notice in the Gazette establish" | ✅ |
| In force 2026-01-23, all provisions | L.N. 22 of 2026 | "has established the 23rd January 2026 as the date on which all the provisions of the said Order shall come into force." | ✅ |
| Amended once | S.L. 460.41, header | "LEGAL NOTICE 71 of 2025, as amended by Legal Notice 89 of 2026." | ✅ |
| The amendment is read as one with the Order | L.N. 89 of 2026 art. 1 | "shall be read and construed as one with the Measures for a High Common Level of Cybersecurity across the European Union (Malta) Order" | ✅ |
| Infringement case closed | Commission register, INFR(2024)0286 | "Formal notice Art. 258-260(3) TFEU" … "27/11/2024" ; "Closing of the case" … "8/10/2025" ; "activeInfringementCase":"No" | ✅ |

L.N. 89 of 2026 has no commencement clause of its own. When it applied is not
stated in the texts read; the consolidated version is dated 2026-04-07.

## Scope: who is obliged, the size test and the two classes

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=data,docs; guard=packages/regulatory-data/test/national-size-tests.test.ts -->

The Order repeats the directive's scope almost word for word. Its national
choices: local councils are in only after a risk assessment, a public
broadcaster type is added to public administration, and critical entities
under the CER Order are in at any size.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Size test: the Recommendation, by reference | art. 3(1) | "which qualify as medium-sized enterprises under Article 2 of the Annex of Commission Recommendation 2003/361/EC or exceed the ceilings for medium-sized enterprises provided for in that article, and which provide their services or carry out their activities within the Union" | ✅ |
| Without the Recommendation's public-body rule | art. 3(2) | "Article 3(4) of the Annex to Commission Recommendation 2003/361/EC shall not apply for the purposes of this order." | ✅ |
| Size-free: e-communications, trust services, TLD and DNS | art. 3(3)(a) | "providers of public electronic communications networks or of publicly available electronic communications services" ; "trust service providers" ; "top-level domain name registries and domain name system service providers" | ✅ |
| Size-free: the directive's national-importance cases | art. 3(3)(b) to (e) | "the entity is the sole provider in Malta of a service which is essential for the maintenance of critical societal or economic activities" | ✅ |
| Public administration: central government, and local councils after a risk assessment | art. 3(3)(f) | "if it is a government entity established in accordance with national law" ; "if it is a local government authority established in accordance with national law and which following a risk assessment, provides services the disruption of which may have a significant impact on critical or societal or economic activities." | ✅ |
| Critical entities, at any size | art. 3(4) | "Regardless of their size, this order applies to entities identified as critical entities in accordance with Directive (EU) 2022/2557" | ✅ |
| Registrars, at any size | art. 3(5) | "Regardless of their size, this order also applies to entities providing domain name registration services." | ✅ |
| Public administration definition excludes the judiciary, Parliament and the Central Bank | art. 2(1) | "not including the judiciary, the Parliament of Malta or the Central Bank of Malta" | ✅ |
| Exit: security, defence, law enforcement | art. 3(7) | "This order shall not apply to public administration entities that carry out their activities in the areas of national security, public security, defence or law enforcement" | ✅ |
| Never for trust services | art. 3(9) | "Sub-articles (7) and (8) shall not apply where an entity acts as a trust service provider." | ✅ |
| DORA-exempt entities are out | art. 3(10) | "This order shall not apply to entities which are exempted from the scope of Regulation (EU) 2022/2554" | ✅ |
| Sector-specific Union acts prevail where equivalent | art. 3(16) | "where those requirements are at least equivalent in effect to the obligations established in this order, the relevant provisions of this order, including the provisions on supervision and enforcement established in Part VII, shall not apply to such entities" | ✅ |
| Essential: large Annex I types | art. 4(1)(a) | "entities of a type indicated in the First Schedule which exceed the ceilings for medium-sized enterprises" | ✅ |
| Essential at any size: qualified trust services, TLD, DNS | art. 4(1)(b) | "qualified trust service providers and top-level domain name registries as well as DNS service providers, regardless of their size" | ✅ |
| Essential: e-communications from medium size | art. 4(1)(c) | "providers of public electronic communications networks or of publicly available electronic communications services which qualify as medium-sized enterprises" | ✅ |
| Essential: central government, designated entities, critical entities | art. 4(1)(d) to (f) | "public administration entities mentioned in article 3(3)(f)(i)" | ✅ |
| Essential: former operators of essential services | art. 4(1)(g) | "entities which the CIP Department or where designated the competent authority identified before 16 January 2023 as operators of essential services" | ✅ |
| Important: every other scheduled type | art. 4(2) | "entities of a type referred to in the First or Second Schedule which do not qualify as essential entities pursuant to sub-article (1) shall be considered to be important entities." | ✅ |
| A public administration type added: emergency broadcasting | First Schedule, 10. Public administration (ii) | "Public administration entities that provide broadcasting and transmission services deliver essential and emergency services, including public safety alerts" | ✅ |
| No rail in Malta | First Schedule, 2. Transport (b) Rail | "Not applicable." | ✅ |

Checked for the scoping engine on 2026-10-30: the Recommendation by reference
(art. 3(1)), its Art. 3(4) switched off as in the directive (art. 3(2)), so
`classifyEnterpriseSize` in `packages/regulatory-data/src/scoping.ts` applies
as written and Malta has no national size test
(`packages/regulatory-data/test/national-size-tests.test.ts`).

## Scope: five-person digital-infrastructure companies, and a reading for a classifier

<!-- meta: theme=scoping; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

A micro company (5 persons, turnover and balance sheet under EUR 2 million),
established in Malta, providing one service:

| Service | In scope? | Class | Why |
|---|---|---|---|
| Public electronic communications network or service | yes | important | art. 3(3)(a)(i); essential only from medium size, art. 4(1)(c) |
| Qualified trust service | yes | essential | art. 3(3)(a)(ii), art. 4(1)(b) |
| Non-qualified trust service | yes | important | art. 3(3)(a)(ii), art. 4(2) |
| TLD name registry | yes | essential | art. 3(3)(a)(iii), art. 4(1)(b) |
| DNS service | yes | essential | art. 3(3)(a)(iii), art. 4(1)(b) |
| Domain name registration (registrar) | yes, for registration (art. 24) and the domain data duty (art. 25) | none stated (reading) | art. 3(5); a registrar is not a type of either Schedule, so art. 4 classifies it neither way |
| Internet exchange point | no | n/a | not in art. 3(3)(a): the size test applies |
| Cloud, data centre, CDN, MSP, MSSP, marketplace, search engine, social network | no | n/a | the size test applies, unless designated under art. 3(3)(b) to (e) |

Reading for a classifier (not a quotation):

```
IN SCOPE when established in Malta (art. 23; the digital types by main establishment) and:
  scheduled type AND (medium-sized OR above)                              -> in
  public e-comms | trust service | TLD | DNS                              -> in, any size
  registrar                                                                -> in, any size (arts 24-25 only; no class)
  designated by the CIP Department under art. 3(3)(b)-(e)                  -> in, any size
  central government entity | critical entity (CER Order)                  -> in, any size
  local council AND risk assessment finds significant impact               -> in
EXCEPT security/defence/law-enforcement public bodies (not trust services), DORA-exempt entities
CLASS essential: large First Schedule type | QTSP | TLD | DNS | e-comms from medium size
      | central government | designated as essential | critical entity | former OES
      else important
```

## Registration: the national self-registration mechanism of the CIP Department

<!-- meta: theme=registration; type=reference; date=2026-10-29; surfaces=data,prompt; guard=packages/regulatory-data/test/mt-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

Malta asks every essential and important entity to register, and to name the
CSIRT that monitors it. The digital types also file the directive's Art. 27
list, plus a detailed list of their resources on request.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Who registers, and where | art. 7(4) | "Essential and important entities providing services in Malta as well as entities providing domain name registration services in Malta shall register on the national self-registration mechanism established by the CIP Department" | ✅ |
| What: including the monitoring CSIRT | art. 7(4)(a) to (e) | "the name of the CSIRT providing monitoring services to the entity and whether it is an internal or autonomous CSIRT" ; "the address and up-to-date contact details, including email addresses, IP ranges and telephone numbers" | ✅ |
| Changes within two weeks | art. 7(5) | "without delay and, in any event, within two (2) weeks of the date of the change." | ✅ |
| The digital types file the Art. 27 list | art. 24(1) | "shall submit to the CIP Department, by the prescribed date, the following information" | ✅ |
| Including a resources list, on request | art. 24(1)(g) and (2) | "a detailed list of computer, network and operational technology resources used." ; "the entity shall provide information in accordance with sub-article (1)(g) to the CIP Department upon request." | ✅ |
| Their changes within three months | art. 24(2) | "without delay and in any event within three (3) months of the date of the change" | ✅ |
| Domain registration data, 72 hours to answer | art. 25(5) | "shall reply without undue delay and in any event within seventy-two (72) hours of receipt of any requests for access." | ✅ |

The portal itself was not seen: homeaffairs.gov.mt, where the CIP Department
publishes, answered with a Cloudflare bot check, which was not bypassed. No
date is set for the "prescribed date" of art. 24(1) in the texts read.

## Security measures: the duty, the security liaison officer, CSIRT monitoring and the qualified auditor

<!-- meta: theme=framework,supply-chain; type=reference; date=2026-10-29; surfaces=data,prompt; guard=packages/regulatory-data/test/mt-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The ten themes of Art. 21(2) are there, plus an eleventh. Three duties are
national, and they apply to important entities as much as to essential ones.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| A security liaison officer | art. 19(1)(c) | "appoint a security liaison officer who shall have the necessary expertise" | ✅ |
| Monitored by a CSIRT, internal or outsourced | art. 19(1)(d) | "receive CSIRT monitoring services from any of the following CSIRTs" ; "an internal CSIRT; or" ; "an autonomous CSIRT." | ✅ |
| "Autonomous CSIRT" defined | art. 2(1) | "an outsourced CSIRT which provides a monitoring function of CSIRT services to essential or important entities" | ✅ |
| Operator security plan and continuity plans | art. 19(1)(c)(i) and (iii) | "ensure that the essential or important entity maintains and exercises an operator security plan" | ✅ |
| An eleventh theme: logging | art. 19(2)(k) | "logging and traceability of network and information systems." | ✅ |
| Supply chain | art. 19(2)(d) | "supply chain security, including security-related aspects concerning the relationships between each entity and its direct suppliers or service providers" | ✅ |
| A qualified auditor, approved by the CIP Department | art. 14(1) | "An essential or important entity shall appoint a qualified auditor who shall verify if the entity has implemented the cybersecurity risk-management measures in accordance with article 19" | ✅ |
| The auditor's conditions | art. 14(4) | "independent from the essential or important entity being audited, including submitting a Declaration of Independence as determined by the CIP Department" | ✅ |

## Incident reporting: what, to whom, by when

<!-- meta: theme=incident; type=reference; date=2026-10-29; surfaces=data,ui,prompt; guard=packages/regulatory-data/test/mt-incident-reporting.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

The directive's clocks, from awareness, to the national CSIRT, which L.N. 89 of
2026 placed within the Malta Information Technology Agency (MITA). The CIP
Department receives the notifications from the CSIRT, not from the entity.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The national CSIRT is within MITA | art. 8(1) | "There shall be established a national CSIRT within the Malta Information Technology Agency" | ✅ |
| "Immediately", where the directive says "without undue delay" | art. 20(1) | "Essential and important entities shall immediately notify the national CSIRT, of any incident that has a significant impact on the provision of their services" | ✅ |
| Early warning, 24 hours from becoming aware | art. 20(5)(a) | "without undue delay and in any event within twenty-four (24) hours of becoming aware of the significant incident, an early warning" | ✅ |
| Incident notification, 72 hours from becoming aware | art. 20(5)(b) | "without undue delay and in any event within seventy-two (72) hours of becoming aware of the significant incident, an incident notification" | ✅ |
| Intermediate report on request | art. 20(5)(c) | "upon the request of the national CSIRT, an intermediate report on relevant status updates" | ✅ |
| Final report, one month from the notification | art. 20(5)(d) | "a final report not later than one (1) month after the submission of the incident notification" | ✅ |
| Still ongoing: a progress report | art. 20(5)(e) | "the entities concerned shall provide the national CSIRT with a progress report at that time and a final report within one (1) month of their handling of the incident." | ✅ |
| Trust services: 24 hours | art. 20(6) | "a trust service provider shall, with regard to significant incidents that have an impact on the provision of its trust services, notify the national CSIRT without undue delay and in any event within twenty-four (24) hours of becoming aware of the significant incident." | ✅ |
| The CSIRT forwards to the CIP Department and the regulator | art. 20(1), second proviso | "the national CSIRT shall immediately notify in writing the CIP Department and any other designated competent authority" | ✅ |
| Significant incident | art. 2(1) | "has caused or is capable of causing severe operational disruption of the service or financial loss for the entity concerned" | ✅ |
| Informing recipients | art. 20(2) | "Where appropriate, essential and important entities shall notify, without undue delay, the recipients of their services of significant incidents that are likely to adversely affect the provision of those services." | ✅ |

The anchor is awareness, in the directive's own words. The reporting channel
(form, portal, address) is not set by the Order and was not found on an
official page: MITA's site has no CSIRT page at the address tried
(mita.gov.mt/csirtmalta/, 404), and homeaffairs.gov.mt was behind a bot check.

What the product does with it (2026-10-30): the Maltese incident
configuration (`INCIDENT_REPORTING_MT`) counts the early warning and the
notification from becoming aware, 24 hours for trust services, and the final
report one month after the notification. It names the national CSIRT within
MITA for every sector, says "immediately" in its bases, and has no portal: the
channel is not on record. The document context (mt.yaml) and the
transposition reference carry the same facts and the three national duties.

## Governance and training

<!-- meta: theme=governance; type=reference; date=2026-10-29; surfaces=doc-gen,prompt; guard=apps/doc-gen/test/training-attestation-national-provision.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Approve and oversee | art. 18(1) | "shall ensure that management bodies of such essential and important entities approve the cybersecurity risk-management measures in accordance with article 19 and oversee their implementation." | ✅ |
| Training of the management body, no interval | art. 18(3) | "Members of the management bodies of essential and important entities are required to follow training in order to carry out their tasks." | ✅ |
| Training of employees, regularly | art. 18(4) | "Essential and important entities shall offer similar training to their employees on a regular basis" | ✅ |
| Who is the management body | art. 2(1) | ""management body" shall include the head of the essential and important entity and any other officers appointed by the head for the purpose of carrying out article 18(1)" | ✅ |
| Personal liability of the legal representative | art. 37(1) | "shall be liable for breach of his duties in case of non-compliance of the essential or important entity" | ✅ |
| Temporary ban from managerial functions, essential entities | art. 31(10)(b) | "to prohibit temporarily any natural person who is responsible for discharging managerial responsibilities of chief executive officer or legal representation in the essential entity from exercising managerial functions" | ✅ |

What the product does with it (2026-10-30): the training attestation quotes
art. 18(3) in English, the language of the Order, and the document context
states the approval, the oversight and the training duty.

## Supervision and sanctions

<!-- meta: theme=sanctions; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Recorded as facts. Marketing never cites fines.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The CIP Department supervises nationally | art. 7(1) | "The CIP Department shall be the national supervisory authority responsible for monitoring the implementation of this order at national level and ensuring compliance therewith" | ✅ |
| The Malta Communications Authority for digital infrastructure, postal services and digital providers | First Schedule 8 ; Second Schedule 1 and 6 | "Malta Communications Authority (MCA)." | ✅ |
| The CIP Department for every other sector | First and Second Schedules | "CIP Department as the national supervisory authority." | ✅ |
| Fines are decided by an Enforcement Committee | art. 33(1) | "The Enforcement Committee shall have the power to impose administrative fines established by this order, on any entity reported by the CIP Department" | ✅ |
| Essential: EUR 10 million or 2 % | art. 32(3) | "administrative penalties of a maximum of ten million euro (€10 000 000), or of a maximum of two percent (2%) of the total worldwide annual turnover in the preceding financial year of the undertaking to which the essential entity belongs, whichever is higher." | ✅ |
| Important: EUR 7 million or 1.4 % | art. 32(4) | "administrative penalties of a maximum of seven million euro (€7 000 000), or of a maximum of one point four percent (1.4%) of the total worldwide annual turnover" | ✅ |
| Public administration may be fined | art. 32(5) | "administrative penalties may be imposed against public administration entities." | ✅ |
| Daily penalty: EUR 100 per breach and day | art. 38(2) | "The daily penalty payment shall be one hundred euro (€100) for each breach in terms of sub-article (1), for each day during which the breach persists" | ✅ |
| Appeal within 20 days | art. 41(1) | "may be appealed within twenty (20) days from the service of the decision by means of an application filed before the Administrative Review Tribunal." | ✅ |

## Language

<!-- meta: theme=statute; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Maltese and English are both official. Legislation Malta offers S.L. 460.41 in
both ("Language : Ingliż Malti"), and the legal notices carry the Gazette's
bilingual chrome. Only the English text was read. Which version prevails in a
conflict is not stated in the texts read and was not checked. The product's
English serves Maltese entities; a Maltese locale is not needed to support them.

## Departures from the directive, and drafting errors

<!-- meta: theme=scoping,registration,incident,governance; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

Departures (read from the texts above):
- Every essential and important entity must be monitored by a CSIRT, internal
  or outsourced (art. 19(1)(d)), and names it when registering (art. 7(4)(b)).
- Every essential and important entity appoints a security liaison officer
  (art. 19(1)(c)) and a qualified auditor approved by the CIP Department
  (art. 14). The directive leaves audits to the authority.
- An eleventh measure, logging and traceability (art. 19(2)(k)).
- Notification "immediately" (art. 20(1)), where the directive's Art. 23(1)
  says "without undue delay". The deadlines of art. 20(5) are the directive's.
- Registration changes within two weeks for every entity (art. 7(5)), three
  months for the digital types' Art. 27 list (art. 24(2)).
- Local councils only after a risk assessment; a broadcasting type added to
  public administration; CER critical entities in at any size.
- Fines are imposed by an Enforcement Committee, on the CIP Department's
  report, and a daily penalty of EUR 100 exists.

Drafting errors in the consolidated text (the text governs as published; none
changes a deadline):
- Art. 4(1)(g)(i) identifies former operators of essential services "in
  conformity with: (i) Directive (EU) 2022/2555", the NIS2 Directive itself,
  where the directive's Art. 3(1)(g) refers to Directive (EU) 2016/1148.
- Arts 7(4), 24(4), 29(6)(j) and 30(6)(i) send the self-registration
  mechanism to "sub-article 3(h)" or "article 7(3)", while the mechanism is
  established by art. 7(1)(c).
- Art. 30(4), on important entities, has the costs paid by "the audited
  essential entity".
- First Schedule 8 (viii) reads "Providers of electronic communications
  services" where the directive's Annex I names providers of public
  electronic communications networks.

## The fallback documents sent reports to the CIP Department (corrected 2026-11-05)

<!-- meta: theme=incident; type=surface-inconsistency; date=2026-11-05; surfaces=data,doc-gen,ui; guard=packages/regulatory-data/test/incident-authority-receives.test.ts,apps/core-api/test/document-fallback-national-recipients.test.ts,apps/web/test/incidents-page.test.tsx -->

Art. 20(1) has the entity notify the national CSIRT, and the CSIRT notify the
CIP Department in writing (rows above). The documents produced when AI
generation fails printed both bodies in every recipient cell, "Initial
notification to CIP Department / National CSIRT (MITA)", sent the final report
"to CIP Department", and told the board that significant incidents "must be
reported to" the Critical Infrastructure Protection Department. The incident
page named the CIP Department for a moment, while its list of recipients
loaded.

Since 2026-11-05 the incident configuration says that the competent authority
receives no report from the entity (`competentAuthorityReceives: false`), and
the documents name the national CSIRT alone. The CIP Department is still named
as the competent authority and as the body the entity registers with.

## Open items: not read, or not resolved

<!-- meta: theme=registration,incident; type=lead; date=2026-10-29; surfaces=docs; guard=none -->

- The self-registration portal, its address and whether it is open; the CIP
  Department's pages are behind a bot check.
- The national CSIRT's reporting channel (form, portal, e-mail) at MITA.
- Whether a registrar is essential or important: art. 4 classifies neither way.
- Which language version prevails.
- When L.N. 89 of 2026 applied.
- The Resilience of Critical Entities and Infrastructures (Identification,
  Designation and Protection) Order named in art. 4(1)(f): not read.

## What the scope check says on public administration (2026-11-05)

<!-- meta: theme=scoping; type=scope-error; date=2026-11-05; surfaces=data,prompt; guard=packages/regulatory-data/test/national-size-tests.test.ts,apps/ai-service/test/auto-scoping-national-rules.test.ts -->

The class of each level did not change. The sentences were the directive's. A
local council is now said to be in scope after a risk assessment (art. 3(3)(f)), a
positive one being assumed, which can overstate. The Order names no regional level,
and the regional input reads as a local council.
