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

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The General Scheme was published on 2024-08-30 | Oireachtas briefing paper | "The General Scheme of the National Cyber Security Bill was published on 30 August 2024." | ✅ |
| Pre-legislative scrutiny took place, but its report was not published | Oireachtas briefing paper | "The Bill underwent pre-legislative scrutiny (PLS) by the Joint Committee on Transport and Communications on 17 October 2024. However, a report on PLS was not published before the dissolution of the 33rd Dáil Éireann and cessation of the 26th Seanad Éireann." | ✅ |
| The bill would revoke the NIS1 regulations | Oireachtas briefing paper | "(Network and Information Systems) Regulations 2018, SI 2018/360 which transposed the first NIS" | ✅ |
| The deadline was missed and NIS1 still applies | NCSC | "Unfortunately, the transposition deadline for NIS2 of 17 October 2024 has not been met." / "The predecessor of NIS2 (NIS1) remains in full effect and covers the most critical operators within the State." | ✅ |
| No portal yet | NCSC | "The NIS2 registration and incident reporting portals are not available at this time" | ✅ |
| No bill introduced | Oireachtas API | 0 matching bills among 642 (see above) | ✅ |
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
