# Ireland — legal sources (verified)

## National Cyber Security Bill: a General Scheme, no bill in the Oireachtas (read 2026-10-28)

<!-- meta: theme=statute; type=reference,surface-inconsistency; date=2026-10-28; surfaces=data,ui; guard=packages/regulatory-data/test/nis2-transposition-status.test.ts -->

- **Sources read, all on 2026-10-28:**
  - Houses of the Oireachtas Library & Research Service, *National Cyber
    Security Bill 2024*, briefing paper dated 2025-06-12 (PDF read in full with
    `pdftotext`):
    https://data.oireachtas.ie/ie/oireachtas/libraryResearch/2025/2025-06-12_briefing-paper-national-cyber-security-bill-2024_en.pdf
  - National Cyber Security Centre, NIS2 page ("Last updated 24 th June 2025"):
    https://www.ncsc.gov.ie/nis2/
  - The Oireachtas bills register, through its open data API
    (`https://api.oireachtas.ie/v1/legislation?date_start=2024-01-01&date_end=2026-12-31&limit=1000`):
    642 bills with activity from 2024-08-30 to 2026-10-27, including 37
    Government bills of 2026. None has "cyber", "network and information",
    "NIS2" or "2022/2555" in its short or long title. The human-facing register
    (oireachtas.ie/en/bills) refuses scripted requests with a 403; the API is the
    same register.
  - European Commission referral of 2026-07-08 (see `eu.md`).
- **Re-read on 2026-11-12, nothing changed:**
  - The same query of the Oireachtas API: 649 bills with activity from
    2024-08-30 to 2026-11-12, including 38 Government bills of 2026. None has
    "cyber", "network and information", "NIS2" or "2022/2555" in its short or
    long title.
  - The NCSC page: still "Last updated 24 th June 2025", and the three
    sentences quoted in the table below are on it word for word.
  - Not re-read: the briefing paper, a dated document, and the Commission's
    referral.
- **Re-read on 2026-11-13, nothing changed, and the texts are now committed**
  (`docs/research/national/ie/`):
  - The same query of the Oireachtas API: 649 bills, 38 Government bills of
    2026, the latest update dated 2026-11-12. None has a title with cyber,
    network and information, NIS2 or 2022/2555.
  - The NCSC page: the same date, the same three sentences.
  - The briefing paper, downloaded again. Its cover says 28 May 2025; the date
    2025-06-12 is in its address.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The General Scheme was published on 2024-08-30 | Oireachtas briefing paper | "The General Scheme of the National Cyber Security Bill was published on 30 August 2024." | ✅ |
| Pre-legislative scrutiny took place, but its report was not published | Oireachtas briefing paper | "The Bill underwent pre-legislative scrutiny (PLS) by the Joint Committee on Transport and Communications on 17 October 2024. However, a report on PLS was not published before the dissolution of the 33rd Dáil Éireann and cessation of the 26th Seanad Éireann." | ✅ |
| The bill would revoke the NIS1 regulations | Oireachtas briefing paper | "the European Union (Measures for a High Common Level of Security of Network and Information Systems) Regulations 2018, SI 2018/360 which transposed the first NIS Directive into Irish law" | ✅ |
| The deadline was missed and NIS1 still applies | NCSC | "Unfortunately, the transposition deadline for NIS2 of 17 October 2024 has not been met." / "The predecessor of NIS2 (NIS1) remains in full effect and covers the most critical operators within the State." | ✅ |
| No portal yet | NCSC | "The NIS2 registration and incident reporting portals are not available at this time" | ✅ |
| No bill introduced | Oireachtas API | 0 matching bills among 642 on 2026-10-28, and among 649 on 2026-11-12 (see above) | ✅ |
| Referred to the Court of Justice on 2026-07-08 | Commission | see `eu.md` | ✅ |

### Defect: the tracker showed the AI sweep's stage, not ours (found 2026-10-28)

The Irish row was a generic provisional one, with no source and no
`lastVerifiedAt`. The display merge lets an AI overlay yield only to a sourced
row, so the public tracker showed the sweep's `not_transposed` of 2026-08-03,
cited to the Commission's generic NIS2 page with a confidence of 95, instead of
the curated `draft`. Spain had the same defect. Both rows are now sourced, so the
curated stage is the one shown; the stage stays `draft` because the General
Scheme went through pre-legislative scrutiny, while the note says that no bill
has been introduced.

## What the General Scheme proposes, and what the NCSC recommends meanwhile (read 2026-11-13)

<!-- meta: theme=statute,framework,sanctions; type=reference; date=2026-11-13; surfaces=marketing,mcp; guard=apps/web/test/country-pages-ie.test.tsx -->

- **Sources read on 2026-11-13**, committed under `docs/research/national/ie/`:
  - The Oireachtas briefing paper (see above), for what the General Scheme
    proposes. Read today: the abstract, the executive summary, the part
    Legislative proposal and the conclusion. It is a parliamentary research
    paper about a General Scheme: **nothing in it is law**, and the bill, when
    it is introduced, may differ.
  - NCSC, the page on the Cyber Fundamentals framework:
    https://www.ncsc.gov.ie/CyFun/
  - NCSC, the NIS2 page: https://www.ncsc.gov.ie/nis2/
  - NCSC, the incident reporting page: https://www.ncsc.gov.ie/incidentreporting/
- **Not read:** the General Scheme itself (a PDF on gov.ie), the NCSC's draft
  Risk Management Measures guidance (65 pages) and its NIS2 FAQ. Nothing below
  says what they contain beyond what the pages above say of them.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The bill would also put the NCSC on a statutory footing | Briefing paper, executive summary | "This Bill seeks to provide for the transposition of the Network and Information Security Directive EU 2022/2555 (NIS2) and to provide a statutory footing for the National Cyber Security Centre (NCSC)." | ✅ |
| The NCSC exists since 2011 | Briefing paper | "The NCSC has been in operation in Ireland since 2011." | ✅ |
| The NCSC would be the CSIRT | Briefing paper, Head 12 | "designation of NCSC as the computer security incident response team (CSIRT) with responsibility for, among other tasks, monitoring of cyber threats, vulnerabilities and incidents, proactive scanning, responding to incidents and providing assistance to essential and important entities where applicable (Head 12)" | ✅ proposed |
| and the single point of contact | Briefing paper, Head 13 | "designation of the NCSC as single point of contact on cybersecurity (Head 13)" | ✅ proposed |
| and the lead competent authority, a role the directive does not have | Briefing paper, Head 18 | "Head 18 of the General Scheme also seeks to provide for the NCSC as “lead competent authority”" | ✅ proposed |
| Sectoral authority: energy, drinking water, waste water | Briefing paper, Head 17 | "Commission for the Regulation of Utilities (CRU) – energy, drinking water, waste water" | ✅ proposed |
| Sectoral authority: digital infrastructure, ICT service management, space, digital providers | Briefing paper, Head 17 | "Commission for Communications Regulation (ComReg) - Digital Infrastructure, ICT Service Management, Space, Digital Providers" | ✅ proposed |
| Sectoral authority: banking, financial market infrastructures | Briefing paper, Head 17 | "Central Bank of Ireland (CBI) - Banking, Financial Market" | ✅ proposed |
| Sectoral authorities: transport | Briefing paper, Head 17 | "Irish Aviation Authority (IAA) - Transport (Aviation)" / "Commission for Rail Regulation (CRR) - Transport (Rail)" / "The Minister for Transport - Transport (Maritime)" / "National Transport Authority (NTA) - Transport (Road)" | ✅ proposed |
| Sectoral authority: health | Briefing paper, Head 17 | "An Agency or Agencies under the remit of the Minister for Health - Health" | ✅ proposed |
| Every other sector | Briefing paper, Head 17 | "The NCSC - all other sectors set out in Schedule I and II." | ✅ proposed |
| Significant incidents would be reported to the NCSC as CSIRT | Briefing paper, Head 15 | "Head 28 and 29 address governance and risk-management measures, whilst Head 15 addresses reporting obligations (including the timeline for reporting significant incidents to the NCSC as CSIRT)." | ✅ proposed |
| The obligations would be the directive's | Briefing paper | "These Heads broadly replicate the corresponding articles in NIS2 (Articles 20, 21 and 23, as outlined above)." | ✅ proposed |
| Essential public administration entities | Briefing paper, Head 23 | "Government Ministers, the Central Statistics Office (CSO), the Office of the Comptroller and Auditor General, the Office of the Revenue Commissioners, the Office of Public Works, and the National Shared Services Office." | ✅ proposed |
| Every other public administration body | Briefing paper, Head 23 | "This Head states that any other public administration body shall fall within the classification of important entity." | ✅ proposed |
| The fines' maxima would be the directive's floor | Briefing paper, Part 8A | "The maximum penalties for infringements under this General Scheme are equivalent those contained in Article 34 of NIS2" | ✅ proposed, not in force |
| A court could keep a chief executive or a director from their role | Briefing paper, Head 37B | "Make an application to the High Court to seek a declaration that any person who is exercising the role of chief executive officer or director of an entity shall not exercise their role until the requirements in the compliance notice are met;" | ✅ proposed |
| NIS1 applies to the operators already designated | NCSC, NIS2 page | "The earlier version of NIS2 (NIS1) is still operational and continues to apply to already designated Operators of Essential Services (OESs)within the State." | ✅ |
| The portals will open with the legislation | NCSC, NIS2 page | "Once the legislation is implemented, both the NIS2 registration portal and the NIS2 incident reporting portal will be available for use." | ✅ |
| Drafting was made a priority in July 2024 | NCSC, NIS2 page | "A Cabinet decision in July 2024 directed priority drafting of the legislation transposing the NIS2 Directive, and drafting is progressing swiftly." | ✅ |
| Ireland co-owns the Cyber Fundamentals scheme | NCSC, CyFun page | "Ireland has joined the Cyber Fundamentals Framework (CyFun), originally developed in Belgium, as a scheme co-owner." | ✅ |
| The NCSC recommends it, as a voluntary tool | NCSC, CyFun page | "The NCSC recommends the CyberFundamentals (CyFun) framework (NIST CSF 2.0 version) as a well-recognised, structured, voluntary tool to assist entities in meeting their NIS2 obligations." | ✅ |
| It is optional and gives no presumption of compliance | NCSC, CyFun page | "Certification or self-assessment under Cyber Fundamentals is optional. Compliance with NIS2 will always be a matter determined by the relevant National Competent Authority (NCA) empowered by legislation. CyFun is one recognised way to organise and evidence your controls, not a statutory presumption of compliance." | ✅ |
| It is not the only route | NCSC, CyFun page | "The scheme does not, however, represent the sole route to compliance, and will be optional and voluntary." / "The NCSC will continue to recognise other internationally accepted standards such as ISO 27001 for information security and ISO 62443 for industrial control systems." | ✅ |
| It will inform the statutory instrument | NCSC, CyFun page | "CyFun will serve as a key component of this compliance structure, both informing the statutory instrument and acting as a recognised means by which entities can clearly demonstrate compliance." | ✅ announced |
| A national certification system is 18 to 24 months away | NCSC, CyFun page | "A national certification system will take 18-24 months to establish due to the need for legal agreements, resourcing, and accreditation infrastructure." | ✅ announced |
| The NCSC published draft Risk Management Measures | NCSC, NIS2 page and CyFun page | "The Draft RMM published here: RMM." / "The Risk Management Measures (RMM) published by the NCSC provide detailed guidance on the measures the NCSC believe are the minimum required to meet the obligations of NIS2 for essential and important entities." | ✅ |
| CyFun is the NCSC's preferred way to show compliance with them | NCSC, CyFun page | "However, the NCSC is recommending CyFun as the preferred method to demonstrate compliance." | ✅ |
| Entities are encouraged to start with the framework | NCSC, CyFun page | "In the mean time, entities are encouraged to use the framework internally and begin preparations." | ✅ |
| The health service was attacked in May 2021 | Briefing paper, executive summary | "attack when the Health Service Executive (HSE) was targeted with a ransomware attack by a Russian-based cybercrime group." | ✅ |
| CSIRT-IE serves a defined constituency | NCSC, incident reporting page | "CSIRT-IE is the body within the NCSC that responds to incidents and as such has a strictly defined list of constituents it serves in regard to incident support." / "This constituency is made up of organisations from the Irish Government and Critical National Infrastucture providers." | ✅ |

**What can be stated.** Ireland has no act, so no Irish obligation can be
stated, no Irish deadline, no Irish fine, no Irish registration. Two things
can be: what the General Scheme proposes, marked as proposed, and what the
NCSC says today.

**The NCSC's dates.** The NCSC's NIS2 page says the Heads were published on
the Department's website in September 2024; the briefing paper says the
General Scheme was published on 30 August 2024. Both are quoted as written;
the page uses the briefing paper's date.

## Delivery: Ireland's English country page (2026-11-13)

<!-- meta: theme=statute,framework; type=delivery; date=2026-11-13; surfaces=marketing,mcp; guard=apps/web/test/country-pages-ie.test.tsx -->

`/en/eu/ireland`, the last country page of the EU's twenty-seven. Written from
the two sections above on the model of Spain's, the other country whose act
is not adopted: the status, what the General Scheme proposes (each sentence
says proposed), what applies meanwhile (the 2018 regulations for the operators
already designated), what the NCSC recommends, and what Reglyze does for an
Irish organisation today (the NIS2 baseline; no Irish framework, no Irish
incident configuration, no registration step).

Linked from the scope checker (`IE` now has a page) and from the MCP server's
country links. Ireland keeps no national reference and no incident
configuration: the tests that use it as the country the product does not read
still hold.
