# Taxonomy of the legal source files

Every `##` section of a `legal-sources/<country>.md` file carries a metadata
line right under its title:

```markdown
## Section title

<!-- meta: theme=incident; type=law-misread; date=2026-07-26; surfaces=data,prompt,doc-gen; guard=packages/regulatory-data/test/incident-conditional-stages.test.ts -->
```

Invisible when rendered, readable by a machine. `legal-sources/INDEX.md` is
**generated** from these lines by `node tools/build-index.mjs`, and
`packages/regulatory-data/test/legal-sources-taxonomy.test.ts` rejects a section
without metadata or with a value outside the taxonomy.

## Why

The files were organised **by country only**, in chronological order of
addition. That answers "what do we know about Polish law?" well and "where have
we already had this kind of defect?" not at all.

The cost is concrete. The most useful finding of 2026-07-27 is a pattern, not a
fact: *the prose is rigorous, the titles and badges are not*. It appeared on
Germany (a "Frist: 6. März 2026" badge contradicting its own paragraph) and it
would have predicted the Austrian badge ("Transposed & Enforced" on an act not
yet in force). But one lives in `germany.md`, the other in `austria.md`, and the
pattern stays invisible.

**Filing facts by country keeps the facts and loses the regularities.** The
regularities are what save time the next time.

## `theme`: what the section is about

| Value | Scope |
|---|---|
| `statute` | Identity of the text: official citation, publication, entry into force, repeals |
| `scoping` | Who is concerned: thresholds, sectors, essential/important classification, scope |
| `registration` | Registration duty, register, portal, associated deadlines |
| `incident` | Notification: recipient, anchor, deadlines, the acts of Art. 23(4) |
| `supply-chain` | Supply-chain security and supplier obligations |
| `governance` | Management body: duties, training, personal liability |
| `sanctions` | Fines, bands, supervision, non-cumulation |
| `framework` | National technical framework (ReCyF, CyFun, ENS, IT-Grundschutz, ZSIS, QNRCS, Misure ACN, NSC) |
| `documents` | Doc-gen templates and native documents |

## `type`: what kind of entry it is

Split into two families, because they are not read the same way.

### Reference findings

| Value | Meaning |
|---|---|
| `reference` | Facts verified at the source, no product defect attached |
| `delivery` | Record of a delivery (template, wiring) resting on these facts |
| `needs-check` | Identified, **not yet verified**, and **the product already uses it**. Never promote without reading the source |
| `lead` | Scouting note: name of the text and gazette reference, without reading the source. **Feeds no configuration.** |

### `needs-check` or `lead`? The question is: does the product use it?

That is the distinction that decides whether an entry can be deleted.

- **`lead`**: five countries (BG, CY, DK, MT, SE) feed **zero configuration
  files**. Calling them "facts" is an overstatement: they are scouting notes. They
  can be deleted without breaking anything, at the price of finding the name of
  the Danish act again the day Denmark becomes a market. So they are kept, but
  named for what they are.
- **`needs-check`**: Arts. 30 and 32 of D.lgs 138/2024 appear **five times** in
  `acn-registration.ts`. Deleting the note would not delete the assertion, it
  would delete the fact that we know it is unverified. The product would keep
  asserting and nobody would know it is unchecked.

**Rule: an unverified fact cannot be deleted while the product asserts it.** The
note is not the problem, it is the report of the problem.

### Corrected defects

| Value | Meaning | Lived example |
|---|---|---|
| `fabrication` | Assertion with no source at all | The EUR 850,000 BSI fine; the "Loi n° 2024-1039" |
| `stale-statute` | Repealed or replaced text cited as in force | DL 65/2021 presented as the Portuguese transposition |
| `wrong-citation` | Right text, wrong article or paragraph | Four German bullets citing the wrong § of the BSIG |
| `law-misread` | The text was read wrongly | CSIRT NASK instead of the CSIRT sektorowy |
| `deadline-model` | Wrong anchor, unit or number of acts | Three acts out of five; `detectedAt + 30 days` |
| `scope-error` | Error about who is concerned | The ENS presented as applying to every private SME |
| `status-error` | Wrong legislative stage | Austria "Transposed & Enforced" before entry into force |
| `surface-inconsistency` | The data is right, the display lies | Badge and meta contradicting the neighbouring paragraph |
| `i18n` | Language or locale defect | Task detail generated in English for a Polish customer |
| `test-pinned` | **A test pinned the error** | `toMatch(/Decreto-Lei 65\/2021/)` |

`test-pinned` combines with the defect it protected: `type=stale-statute,test-pinned`.
Six occurrences on 2026-07-26/27, which makes it the best-established regularity
of the corpus and the reason for a dedicated value.

## `surfaces`: where the defect lived

`data`, `prompt`, `doc-gen`, `ui`, `marketing`, `mcp`, `i18n`, `test`, `docs`.

A defect present on several surfaces lists them all. That is what makes visible
the fact, established on 2026-07-27, that **the `prompt` layer is the last place a
correction reaches**: three distinct defects survived there after the data had
been corrected.

## `guard`: the test that prevents the return

Path of the test, or `none` if there is none. A guard is an **automated test that
fails if the defect comes back**. Without one, a correction holds until the next
person rewrites the sentence in good faith, which happened six times on
2026-07-26/27.

## `debt`: the accepted absence of a guard

`guard=none` alone means "not done yet". `guard=none; debt=<reason>` means "we
looked, it cannot be mechanised, and here is why". The INDEX separates them,
because a queue mixed with unsolvable cases stops being a queue.

Two accepted debts to date: telling a verbatim quote from a credible paraphrase
without the source text at hand (no machine does it), and cross-checking every §
cited in the product against the index (possible but heavy).

## Mutation-test your own guards

A green test proves nothing until it has been seen to fail. Re-injecting the
original error and checking that the test falls is part of the job.

This is not a theoretical precaution: the Portuguese guard **passed** its first
mutation. Its line contained both the faulty assertion and a "repeals" further
on, and the exclusion written for the second swallowed the first. Fixed by
judging a window around the citation rather than the whole line.

## Adding an entry

1. Write the section normally, with the verbatim quotes and the retrieval date.
2. Add the `<!-- meta: ... -->` line under the title.
3. `node tools/build-index.mjs` to regenerate `INDEX.md`.
4. `node tools/validate.mjs` validates the taxonomy.
