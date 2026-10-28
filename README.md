# NIS2 legal corpus

Provenance-cited record of the official legal facts behind the national transpositions of
Directive (EU) 2022/2555 (NIS2): statutes, entry-into-force dates, competent authorities and
CSIRTs, registration mechanisms and deadlines, incident-reporting clocks, scope rules and fines,
read in the official gazettes and quoted verbatim, with the article and the retrieval date.

It exists because compliance tools, including the one that maintains this corpus, state legal
facts that nobody can check. Here every fact can be checked: the quote is in the language of the
gazette, the article is named, the source URL and the date of reading are given, and the facts we
got wrong are recorded next to the facts we got right.

Maintained by [Reglyze](https://reglyze.com), the NIS2 compliance platform for European SMEs and
MSPs. This repository is a generated mirror of the corpus that drives the product. Corrections are
welcome as issues or pull requests and are ported back to the source. Last generated
2026-10-28.

## What is in here

| path | content |
|---|---|
| `legal-sources/<country>.md` | One file per jurisdiction (28 files, including `eu.md` for Union law). Each `##` section carries a machine-readable `<!-- meta: -->` line and, for facts, a table: fact, article, verbatim quote, English gloss, status. 134 annotated sections, 31 of which record a defect we found in our own product and the test that now prevents it. |
| `legal-sources/INDEX.md` | Generated cross-cutting view: by theme, by type of defect, open items. |
| `legal-sources/TAXONOMY.md` | The meta-line vocabulary and why it exists. |
| `data/nis2-transposition-tracker.json` | The dataset behind the public [transposition tracker](https://reglyze.com/en/nis2-tracker): stage, dates, statute, authority, sources, for 30 EU and EEA countries, each row saying how it was established. |
| `data/scoping-rules.md`, `data/scoping-conformance-cases.json` | The NIS2 scope rules as written (the size ceilings with their "and/or", the closed list of size-independent types, the essential/important ladder, Slovenia's cumulative national test) and 33 conformance cases a classifier can be tested against. |
| `tools/` | The index builder and the validator that CI runs. |

## Countries

| file | statute | sections | defects recorded | open items | last dated entry |
|---|---|---|---|---|---|
| [austria](legal-sources/austria.md) | NISG 2026 (BGBl. I Nr. 94/2025) | 6 | 2 | 0 | 2026-09-29 |
| [belgium](legal-sources/belgium.md) | Loi NIS2 — 26 avril 2024 | 3 | 0 | 0 | 2026-08-25 |
| [bulgaria](legal-sources/bulgaria.md) | Cybersecurity Act amendment (ДВ бр. 17/2026) | 1 | 0 | 1 | 2026-06-07 |
| [croatia](legal-sources/croatia.md) | Zakon o kibernetičkoj sigurnosti (NN 14/2024) | 11 | 2 | 0 | 2026-10-28 |
| [cyprus](legal-sources/cyprus.md) | N. 60(I)/2025 (amends N. 89(I)/2020) | 1 | 0 | 1 | 2026-06-07 |
| [czechia](legal-sources/czechia.md) | Zákon č. 264/2025 Sb., o kybernetické bezpečnosti (read 2026-10-28) | 1 | 0 | 0 | 2026-10-28 |
| [denmark](legal-sources/denmark.md) | NIS2-loven (LOV nr 434 af 06/05/2025) | 1 | 0 | 1 | 2026-06-07 |
| [estonia](legal-sources/estonia.md) | Küberturvalisuse seaduse ja teiste seaduste muutmise seadus, RT I, 30.12.2025, 4 (read 2026-10-28) | 1 | 1 | 0 | 2026-10-28 |
| [eu](legal-sources/eu.md) | Directive (EU) 2022/2555 Arts. 2 and 3, Annexes I and II; Recommendation 2003/361/EC | 14 | 3 | 0 | 2026-10-28 |
| [finland](legal-sources/finland.md) | Kyberturvallisuuslaki 124/2025 (read 2026-10-28) | 1 | 1 | 0 | 2026-10-28 |
| [france](legal-sources/france.md) | Loi Résilience (en attente de promulgation) | 8 | 3 | 0 | 2026-10-28 |
| [germany](legal-sources/germany.md) | NIS2UmsuCG | 7 | 3 | 0 | 2026-08-25 |
| [greece](legal-sources/greece.md) | Ν. 5160/2024 (ΦΕΚ Α΄ 195/27.11.2024) | 11 | 1 | 2 | 2026-08-25 |
| [hungary](legal-sources/hungary.md) | 2024. évi LXIX. törvény Magyarország kiberbiztonságáról (read 2026-10-28) | 1 | 0 | 0 | 2026-10-28 |
| [ireland](legal-sources/ireland.md) | National Cyber Security Bill: a General Scheme, no bill in the Oireachtas (read 2026-10-28) | 1 | 1 | 0 | 2026-10-28 |
| [italy](legal-sources/italy.md) | D.lgs. 138/2024 | 11 | 0 | 1 | 2026-10-23 |
| [latvia](legal-sources/latvia.md) | Nacionālās kiberdrošības likums, Latvijas Vēstnesis 128A, 2024-07-04 (read 2026-10-28) | 1 | 0 | 0 | 2026-10-28 |
| [lithuania](legal-sources/lithuania.md) | Kibernetinio saugumo įstatymo pakeitimo įstatymas Nr. XIV-2902: located, NOT read (2026-10-28) | 1 | 0 | 1 | 2026-10-28 |
| [luxembourg](legal-sources/luxembourg.md) | Loi du 5 mai 2026 concernant des mesures destinées à assurer un niveau élevé de cybersécurité (read 2026-10-28) | 1 | 0 | 0 | 2026-10-28 |
| [malta](legal-sources/malta.md) | S.L. 460.41 (L.N. 22 of 2026) | 1 | 0 | 1 | 2026-06-07 |
| [netherlands](legal-sources/netherlands.md) | Cyberbeveiligingswet (Stb. 2026, 187) | 7 | 4 | 1 | 2026-07-30 |
| [poland](legal-sources/poland.md) | KSC amendment (Dz.U. 2026 poz. 252) | 11 | 4 | 0 | 2026-09-08 |
| [portugal](legal-sources/portugal.md) | DL 125/2025 (RJC) | 10 | 3 | 0 | 2026-10-23 |
| [romania](legal-sources/romania.md) | OUG nr. 155/2024, approved by Legea nr. 124/2025 (read 2026-10-28) | 1 | 0 | 0 | 2026-10-28 |
| [slovakia](legal-sources/slovakia.md) | Zákon č. 366/2024 Z. z., amending zákon č. 69/2018 Z. z. o kybernetickej bezpečnosti (read 2026-10-28) | 1 | 0 | 0 | 2026-10-28 |
| [slovenia](legal-sources/slovenia.md) | ZInfV-1 (Uradni list RS, št. 40/2025) | 12 | 0 | 1 | 2026-10-22 |
| [spain](legal-sources/spain.md) | Real Decreto 311/2022 — Esquema Nacional de Seguridad (ENS) | 8 | 3 | 1 | 2026-10-28 |
| [sweden](legal-sources/sweden.md) | Cybersäkerhetslag (SFS 2025:1506) | 1 | 0 | 1 | 2026-06-07 |

Depth differs by country and the files say so. Some statutes were read in full from the signed
gazette PDF; some facts are recorded from a secondary reading and typed `needs-check`; some are
typed `lead`, which means "we saw a claim, we have not read the source". Never promote a lead to a
fact without reading the source.

## Method

- Official publication only: EUR-Lex, the national gazette or the legislature's record. Law-firm
  notes, vendor blogs and news are leads, never the cited source.
- Read the whole act, not a summary. Final provisions sit at the end; scope and penalties are far
  apart; a summary written for a marketing page is allowed to be incomplete, a classifier is not.
- Quote verbatim in the original language, name the article, give the retrieval date. If a site
  blocks a plain fetch, say how the text was obtained (signed PDF, rendered page), not "unavailable".
- Record the defects. A fact the product once asserted wrongly stays in the file with the date it
  was found and the guard that now prevents it. That is what makes the rest credible.
- A fact with an end date gets a clock, not a comment: transitional periods, registration windows
  and time-limited orders are dated so that they can expire.
- People and organisations that are not public authorities appear by role or under a stable
  pseudonym (MSP-A, the partner whose document reviews drove the Italian corrections; Client-A,
  Client-B; Reviewer-A). The pseudonyms are consistent across files.

## The meta line

```markdown
## Fines (Art. 52 and 53)

<!-- meta: theme=sanctions; type=reference; date=2026-10-22; surfaces=marketing,data; guard=apps/web/test/country-slovenia-fiche.test.ts -->
```

- `theme`, what the section is about: `statute`, `scoping`, `registration`, `incident`, `supply-chain`, `governance`, `sanctions`, `framework`, `documents`.
- `type`, how to read it: `reference`, `delivery`, `needs-check`, `lead`, `fabrication`, `stale-statute`, `wrong-citation`, `law-misread`, `deadline-model`, `scope-error`, `status-error`, `surface-inconsistency`, `i18n`, `test-pinned`. The first four are reference material; the others name a
  class of defect that was found and corrected.
- `date`, ISO, when the section was written or last re-verified.
- `surfaces`, which parts of the product restate the fact: `data`, `prompt`, `doc-gen`, `ui`, `marketing`, `mcp`, `i18n`, `test`, `docs`.
- `guard`, the test in the Reglyze repository that fails if the product restates the fact wrongly
  again; paths refer to that private repository.

## Languages

The working language is English. Quotes are always in the language of the gazette, because a
translation of a legal text is an interpretation and the corpus records what the text says. A
French sentence left over from an earlier working language is a bug: report it.

## Contributing

Native readers are the scarcest resource. If you read Slovenian, Croatian, Polish, Greek or any
other language of the Union and find an error, open an issue with the official source: the issue
template asks for the article and the quote. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence and citation

Content (Markdown and JSON data) is licensed under
[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (`LICENSE`): reuse
it, including in your own tools and models, with attribution to Reglyze and a link to this
repository. Scripts under `tools/` are licensed under Apache 2.0 (`LICENSE-CODE`). Citation
metadata is in `CITATION.cff`.

This corpus records what the texts say. It is not legal advice.
