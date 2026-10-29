# Austria — NIS2 National Transposition Legal Sources

## Statute: Netz- und Informationssystemsicherheitsgesetz 2026 (NISG 2026)

<!-- meta: theme=statute,registration,incident,sanctions; type=reference; date=2026-07-27; surfaces=data,docs; guard=none -->

| Field | Value |
|---|---|
| Official citation | BGBl. I Nr. 94/2025, kundgemacht 2025-12-23 |
| Short name | NISG 2026 |
| Transposes | Directive (EU) 2022/2555 (NIS2) |
| Official URL (RIS, ELI) | https://www.ris.bka.gv.at/eli/bgbl/I/2025/94/20251223 |
| Official PDF (37 p.) | https://ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2025_I_94/BGBLA_2025_I_94.pdf |
| Retrieval date | 2026-07-27 (full text read from the BGBl PDF) |

> Access note: RIS returns **HTTP 503 to a plain fetch**. The text was retrieved
> through Playwright's request context after a warm-up call to the site root.
> A 503 here is not "the source is unavailable": test each endpoint with a
> real browser before declaring a source blocked.

### Fact table — quotes are verbatim from BGBl. I Nr. 94/2025

| Fact | Article | Verbatim quote (German) | Status |
|---|---|---|---|
| ⚠️ **Substantive obligations NOT in force until 2026-10-01** | § 51 Abs. 2 | "Nach Ablauf von **neun Monaten** nach der Kundmachung dieses Bundesgesetzes **mit dem nächstfolgenden Monatsersten** treten das Inhaltsverzeichnis, … die **§§ 2 bis 45**, § 46 Abs. 1 sowie die §§ 47 bis 50 sowie die Anlagen 1 und 2 **in Kraft**." | ✅ |
| § 1 and § 46 Abs. 2 (Verfassungsbestimmungen) follow the same clock | § 51 Abs. 1 | "(Verfassungsbestimmung) Nach Ablauf von neun Monaten nach der Kundmachung dieses Bundesgesetzes mit dem nächstfolgenden Monatsersten treten § 1 und § 46 Abs. 2 in Kraft" | ✅ |
| Implementing regulations may be **made** from the day after promulgation, but not **commence** before the Act | § 51 Abs. 3 | "Verordnungen auf Grund dieses Bundesgesetzes können bereits ab dem auf seine Kundmachung folgenden Tag erlassen werden. Sie dürfen jedoch **frühestens mit Inkrafttreten dieses Bundesgesetzes** in Kraft gesetzt werden." | ✅ |
| The existing national CSIRT keeps its tasks for **at most two years** after entry into force | § 51 Abs. 6 | "Das gemäß § 15 Abs. 3 NISG ermächtigte nationale CSIRT hat die Aufgaben … **längstens jedoch für einen Zeitraum von zwei Jahren ab Inkrafttreten dieses Bundesgesetzes**, wahrzunehmen." | ✅ |
| Competent authority = **Bundesamt für Cybersicherheit** | § 3a Abs. 1 | "Zuständige Behörde im Sinne dieses Bundesgesetzes ist das **Bundesamt für Cybersicherheit** (Cybersicherheitsbehörde)." | ✅ |
| **Registration: three months from ENTRY INTO FORCE**. The authority counts the first window to 1 January 2027, and to 4 January 2027 at the latest under § 33 Abs. 2 AVG (corrected 2026-10-28: this row said "i.e. by 2026-12-31", which was our own arithmetic, see "What the product said until 2026-10-28") | § 29 Abs. 3 | "Die Registrierung gemäß Abs. 2 hat **innerhalb von drei Monaten ab Inkrafttreten dieses Bundesgesetzes** zu erfolgen." | ✅ |
| Entities coming into scope later: **rolling** three months | § 29 Abs. 3 | "Einrichtungen, die erst nach diesem Zeitpunkt als wesentliche oder wichtige Einrichtungen gelten …, haben sich ehestmöglich, in jedem Fall aber **innerhalb von drei Monaten ab Erfüllung der jeweiligen Voraussetzungen**, zu registrieren." | ✅ |
| Change notifications: **2 weeks** (identity/contact) / **3 months** (address, size band) | § 29 Abs. 4 | "1. … innerhalb von **zwei Wochen** ab dem Tag der Änderung, und 2. … innerhalb von **drei Monaten** ab dem Tag der Änderung" | ✅ |
| Incident reporting anchors on **Kenntnisnahme** (awareness), not detection | § 34 Abs. 2 Z 1–2 (corrected 2026-10-28, this cell said "§ 35 Abs. 2", see "Correction: the incident stages are § 34 Abs. 2") | "innerhalb von **24 Stunden nach Kenntnisnahme** des erheblichen Cybersicherheitsvorfalls, eine Frühwarnung" / "innerhalb von **72 Stunden nach Kenntnisnahme** … eine Meldung" | ✅ |
| **All FIVE acts of art. 23(4) transposed**, including the progress report | § 34 Abs. 2 Z 1–5 (corrected 2026-10-28, this cell said "§ 35 Abs. 2") | Z 3 "auf Ersuchen eines CSIRTs … einen **Zwischenbericht**"; Z 4 "**spätestens einen Monat nach Übermittlung der Meldung** … einen Abschlussbericht"; Z 5 "soweit der Cybersicherheitsvorfall zum Zeitpunkt der Fälligkeit … **noch andauert**" | ✅ |
| Fines: **10 M EUR / 2 %** essential, **7 M EUR / 1,4 %** important | § 45 Abs. 2 et 3 | "mit Geldstrafe in Höhe von bis zu **10 000 000 EUR** oder bis zu **2 %** des gesamten weltweiten … Umsatzes" / "bis zu **7 000 000 EUR** oder bis zu **1,4 %**" | ✅ |
| ⚠️ **Late registration is a SEPARATE, much smaller band: 50 000 EUR, 100 000 on repeat** | § 45 Abs. 4 Z 1 | "Wer 1. sich bei der Cybersicherheitsbehörde **nicht fristgerecht gemäß § 29 Abs. 3** registriert … ist mit Geldstrafe in Höhe von bis zu **50 000 EUR** und im Wiederholungsfall bis zu **100 000 EUR** zu bestrafen." | ✅ |
| ⚠️ Fines are imposed by the **district administrative authority**, not by the cyber authority | § 44 Abs. 1 | "Den **Bezirksverwaltungsbehörden** obliegt die Verhängung von Verwaltungsstrafen" | ✅ |

### Notes

- Promulgated 2025-12-23; § 51 itself took effect the following day (RIS metadata
  `Inkrafttretensdatum 24.12.2025`), which is **not** the date the obligations start.
- Austria missed the EU deadline of 2024-10-17; the Commission issued a reasoned
  opinion on 2025-05-07. The NIS2 bill failed the required two-thirds majority in
  the previous legislature and passed on 2025-12-12.
- Renamed from the "NISG 2024" draft to **NISG 2026** as enacted.

## Correction of the 2026-06-07 version of this file (made 2026-07-27)

<!-- meta: theme=statute; type=wrong-citation; date=2026-07-27; surfaces=docs; guard=none; debt=no machine can tell an exact quote from a credible paraphrase without the source text at hand, so review prevents it, not a test -->

The earlier fact table gave, in a column headed *Verbatim quote*:

> "§§ 2 bis 45 … treten neun Monate nach Kundmachung dieses Bundesgesetzes mit
> dem auf den Ablauf dieser Frist folgenden Monatsersten in Kraft"

That is a **reconstruction, not the statutory text**. The Act says "mit dem
**nächstfolgenden** Monatsersten". The date it yields is right, but a paraphrase
sitting in a verbatim column is the same defect class as an uncited claim: the
next reader cannot tell it apart from the real thing. Replaced above with the
text as printed, and the table extended from 2 facts to 13.

## The product said `transposed`; it is `adopted`

<!-- meta: theme=statute; type=status-error; date=2026-07-27; surfaces=data,ui,marketing,mcp; guard=apps/web/test/transposition-status-truthfulness.test.ts -->

`countries-seo.ts` carried `transpositionStatus: "transposed"` with
`transpositionDate: "2026-10-01"`, a date in the future. Two surfaces repeated it:

- `/[locale]/eu/austria` rendered a **green "Transposed & Enforced"** badge;
- **`/llms.txt`**, the curated summary answer engines read, emitted
  `transposed (NISG 2026, in force 2026-10-01)`.

An Austrian visitor, or an LLM answering for one, was told they were already
regulated. Fixed by adding an `adopted` status (published, obligations start
later) and setting Austria to it. Guarded by
`apps/web/test/transposition-status-truthfulness.test.ts`, which fails any
country claiming `transposed` with a commencement date in the future. France and
the Netherlands are still `in_progress` and will pass through exactly this state.

## Sections read for the product configuration (2026-09-18)

<!-- meta: theme=statute,scoping,registration,incident,governance,sanctions; type=reference; date=2026-09-18; surfaces=data,ui,marketing; guard=packages/regulatory-data/test/country-configs-transposition-references.test.ts,packages/regulatory-data/test/country-configs-incident-reporting.test.ts -->

Read for `TRANSPOSITION_REFERENCES_AT`, `INCIDENT_REPORTING_AT`, the German
fiche `apps/web/src/lib/countries/austria.ts` and the `/de-at` marketing cluster.

> Access note: RIS answered **HTTP 503 with a Myra bot check** to every
> variant tried on 2026-09-18 (plain fetch, Playwright request context after a
> warm-up, a full browser navigation of the ELI page). The text below is the
> **Beschluss des Nationalrates** of 2025-12-12 (308 d.B. XXVIII. GP, BNR 126,
> `https://www.parlament.gv.at/dokument/XXVIII/BNR/126/fname_1729726.pdf`,
> 37 pages, "mit Zweidrittelmehrheit in dritter Lesung angenommen"), which is
> the text promulgated as BGBl. I Nr. 94/2025. Its § 3a and § 51 match the BGBl
> quotes already in the fact table above, so the two sources agree.

| Fact | Article | Verbatim quote (German) | Status |
|---|---|---|---|
| 18 sectors listed in the Act itself | § 2 | "in den Sektoren 1. Energie, 2. Verkehr, 3. Bankwesen, 4. Finanzmarktinfrastrukturen, 5. Gesundheitswesen, 6. Trinkwasser, 7. Abwasser, 8. Digitale Infrastruktur, 9. Verwaltung von IKT-Diensten (Business-to-Business), 10. Öffentliche Verwaltung, 11. Weltraum, 12. Post- und Kurierdienste, 13. Abfallbewirtschaftung, 14. Produktion, Herstellung und Handel mit chemischen Stoffen, 15. Produktion, Verarbeitung und Vertrieb von Lebensmitteln, 16. Verarbeitendes Gewerbe und Herstellung von Waren, 17. Anbieter digitaler Dienste sowie 18. Forschung" | ✅ |
| National CSIRT is **authorised by the authority**, one per sector possible | § 8 Abs. 2 and 3 | "Die Cybersicherheitsbehörde hat bei Erfüllung der Voraussetzungen gemäß § 9 eine Einrichtung zur Wahrnehmung der Aufgaben gemäß Abs. 1 sowie § 11 Abs. 1 zu ermächtigen (nationales CSIRT)." / "Die Cybersicherheitsbehörde kann bei Bedarf für jeden Sektor (§ 2) eine Einrichtung … ermächtigen (sektorspezifisches CSIRT). Solange kein sektorspezifisches CSIRT besteht, hat das nationale CSIRT die Aufgaben des jeweiligen sektorspezifischen CSIRTs … wahrzunehmen." | ✅ |
| GovCERT = CSIRT of public administration | § 8 Abs. 4 | "Das bei der Cybersicherheitsbehörde eingerichtete GovCERT hat als sektorspezifisches CSIRT (Abs. 3) die Aufgaben gemäß Abs. 1 für Einrichtungen der öffentlichen Verwaltung (§ 24 Abs. 3) wahrzunehmen." | ✅ |
| Essential entities regardless of size; large Annex-1 entities | § 24 Abs. 1 | "Als wesentliche Einrichtungen gelten 1. unabhängig von der Unternehmensgröße a) qualifizierte Vertrauensdiensteanbieter, b) Namenregister der Domäne oberster Stufe (TLD Namenregister), c) DNS-Diensteanbieter, d) Einrichtungen im Sektor der öffentlichen Verwaltung auf Bundesebene …, e) Einrichtungen, die von der Cybersicherheitsbehörde als wesentliche Einrichtung eingestuft wurden (§ 26 Abs. 1 und 2) sowie f) … kritische Einrichtungen gemäß der Richtlinie (EU) 2022/2557 …; 3. Einrichtungen der in Anlage 1 dieses Gesetzes genannten Art, die ein großes Unternehmen gemäß § 25 Abs. 2 betreiben." | ✅ |
| Important entities = medium or large in Annex 1 and 2 | § 24 Abs. 2 Z 1 | "Als wichtige Einrichtung gelten 1. Einrichtungen der in den Anlagen 1 und 2 dieses Gesetzes genannten Art, die ein großes oder mittleres Unternehmen betreiben" | ✅ |
| Register kept by the authority, reviewed at least every two years | § 29 Abs. 1 | "Die Cybersicherheitsbehörde hat ein Register der wesentlichen und wichtigen Einrichtungen … zu führen, dieses in regelmäßigen Abständen, längstens jedoch alle zwei Jahre zu überprüfen" | ✅ |
| Seven registration data items, electronic, secure channel | § 29 Abs. 2 | "haben sich bei der Cybersicherheitsbehörde zu registrieren und dieser im elektronischen Weg folgende Angaben über einen sicheren Kommunikationskanal strukturiert zu übermitteln: 1. den Namen der Einrichtung; 2. die Anschrift und aktuelle Kontaktdaten …; 3. den Sektor …; 4. die Mitgliedstaaten …; 5. gegebenenfalls die IP-Adressbereiche …; 6. die Anschrift der Hauptniederlassung …; 7. Informationen zu den in § 25 angeführten Schwellenwerten und darüber, ob es sich um eine wesentliche oder wichtige Einrichtung handelt." | ✅ |
| Contact point: phone + e-mail | § 29 Abs. 6 | "eine Kontaktstelle bestehend aus zumindest einer Telefonnummer und E-Mailadresse" | ✅ |
| **No portal or form named in the Act**; nis.gv.at shows none yet | § 29 Abs. 2 / nis.gv.at 2026-09-18 | The Act only says "im elektronischen Weg … über einen sicheren Kommunikationskanal". The authority's portal (nis.gv.at) listed no NISG-2026 registration form or date on 2026-09-18; it lists three incident platforms: nis.cert.at, nis.energy-cert.at, nis.govcert.gv.at. Secondary sources (WKO, Deloitte) speak of a form "durch Verordnung" and of the USP; **not asserted in the product**. | ⚠️ superseded 2026-10-28: the Act still names no portal, but the authority now runs registration and reporting through "NIS2-Services" on the Unternehmensserviceportal (see "After entry into force") |
| Management: ensure, supervise, train; staff training | § 31 Abs. 1 and 2 | "Die Leitungsorgane … haben die Einhaltung der Risikomanagementmaßnahmen gemäß § 32 sicherzustellen und zu beaufsichtigen." / "müssen an für diese spezifisch gestalteten Cybersicherheitsschulungen teilnehmen. Die Einrichtungen haben den Mitarbeitern regelmäßig entsprechende Schulungen anzubieten" | ✅ |
| Ten measure themes in the Act, regulation power for details | § 32 Abs. 4 lit. a to j, Abs. 5 | "zumindest folgende Inhalte zu umfassen: a) Konzepte in Bezug auf die Risikoanalyse und Sicherheit für Informationssysteme; b) Bewältigung von Cybersicherheitsvorfällen; c) Aufrechterhaltung des Betriebs …; d) Sicherheit der Lieferkette …; e) Sicherheitsmaßnahmen bei Erwerb, Entwicklung und Wartung …; f) Konzepte und Verfahren zur Bewertung der Wirksamkeit …; g) grundlegende Verfahren im Bereich der Cyberhygiene und Schulungen …; h) Konzepte und Verfahren für den Einsatz von Kryptografie …; i) Sicherheit des Personals, Konzepte für die Zugriffskontrolle und Management von Anlagen; j) Verwendung von Lösungen zur Multi-Faktor-Authentifizierung …" / "(5) Die Cybersicherheitsbehörde ist ermächtigt, durch Verordnung nähere Anforderungen an die Risikomanagementmaßnahmen gemäß Abs. 4 festzulegen." | ✅ |
| Self-declaration within 12 months of the registration duty | § 33 Abs. 1 | "haben innerhalb von zwölf Monaten nach Eintritt der Registrierungspflicht gemäß § 29 Abs. 2 der Cybersicherheitsbehörde Informationen hinsichtlich umgesetzter Risikomanagementmaßnahmen gemäß § 32, insbesondere betreffend die genutzten Netz- und Informationssysteme und die Sicherheit der Lieferketten sowie die Ergebnisse der durchgeführten Risikoanalyse, nach den Vorgaben der Cybersicherheitsbehörde in strukturierter Form zu übermitteln (Selbstdeklaration)." | ✅ |
| Independent proof: on request, first request ≥ 2 years after entry into force; essential 2 months; certificates admissible | § 33 Abs. 2 | "innerhalb von zwei Jahren nach Aufforderung durch die Cybersicherheitsbehörde … durch eine von einer unabhängigen Stelle … durchgeführten Prüfung … nachzuweisen, wobei der Nachweis der operativen sowie organisatorischen Umsetzung auch durch einschlägige gültige Zertifikate möglich ist. Davon abweichend haben wesentliche Einrichtungen … innerhalb von zwei Monaten nach Aufforderung … nachzuweisen. … Die erstmalige Aufforderung kann frühestens nach Ablauf von zwei Jahren ab Inkrafttreten dieses Bundesgesetzes erfolgen." | ✅ |
| Incident goes to the **sector CSIRT, else national CSIRT**, which forwards | § 34 Abs. 1 | "haben dem für sie zuständigen sektorspezifischen CSIRT …, in Ermangelung eines solchen dem nationalen CSIRT, unverzüglich jeden erheblichen Cybersicherheitsvorfall (§ 35) zu melden. Das CSIRT leitet die Meldung unverzüglich an die Cybersicherheitsbehörde weiter." | ✅ |
| Trust-service providers: 24 h for the notification (Z 2) | § 34 Abs. 2, last sentence | "Abweichend von Z 2 unterrichtet ein Vertrauensdiensteanbieter das CSIRT … unverzüglich, in jedem Fall aber innerhalb von 24 Stunden nach Kenntnisnahme des erheblichen Cybersicherheitsvorfalls." | ✅ |
| Recipients of the service must be informed | § 34 Abs. 3 | "hat die Einrichtung die Empfänger ihrer Dienste unverzüglich über diesen erheblichen Cybersicherheitsvorfall zu unterrichten" | ✅ |
| CSIRT answers within 24 h | § 34 Abs. 4 | "Das CSIRT hat der meldenden Einrichtung spätestens 24 Stunden nach Eingang der Frühwarnung gemäß Abs. 2 Z 1 eine Antwort zu übermitteln" | ✅ |
| Significant incident: two limbs | § 35 Abs. 1 | "Ein Cybersicherheitsvorfall gilt als erheblich, wenn er 1. schwerwiegende Betriebsstörungen der erbrachten Dienste der Einrichtung oder schwerwiegende finanzielle Verluste für die betreffende Einrichtung verursacht hat oder verursachen kann; 2. andere natürliche oder juristische Personen durch erhebliche materielle oder immaterielle Schäden beeinträchtigt hat oder beeinträchtigen kann." | ✅ |
| Offences carrying the main fine bands include the two training duties | § 45 Abs. 1 Z 1 to 6 | "1. seiner Verpflichtung, Cybersicherheitsschulungen für Leitungsorgane gemäß § 31 Abs. 2 vorzusehen, nicht nachkommt, 2. … für Mitarbeiter …, 3. Risikomanagementmaßnahmen gemäß § 32 nicht umsetzt, soweit dieser Umstand der Cybersicherheitsbehörde nicht nur aufgrund einer Selbstdeklaration gemäß § 33 Abs. 1 bekanntgeworden ist, 4. seiner Verpflichtung zur Meldung … nicht entspricht, 5. … Unterrichtung der Empfänger … nicht entspricht, oder 6. den … Durchsetzungsmaßnahmen nicht fristgerecht nachkommt" | ✅ |
| Self-declaration omitted or knowingly false = separate offence | § 45 Abs. 4 Z 7 and 8 | "7. entgegen § 33 Abs. 1 seiner Verpflichtung zur Selbstdeklaration nicht fristgerecht nachkommt, 8. in einer Selbstdeklaration gemäß § 33 Abs. 1 wissentlich falsche Angaben über die Umsetzung …" | ✅ |
| NISG 2018 §§ 2 to 31, NISV and QuaSteV repealed on the same day | § 51 Abs. 2 | "Gleichzeitig treten … die §§ 2 bis 31 NISG sowie die Netz- und Informationssystemsicherheitsverordnung (NISV), BGBl. II Nr. 215/2019, und die Verordnung über qualifizierte Stellen (QuaSteV), BGBl. II Nr. 226/2019, außer Kraft." | ✅ |

### What the product asserts, and what it does not

- Authority: **Bundesamt für Cybersicherheit (Cybersicherheitsbehörde)**, § 3a.
  The earlier `countries-seo.ts` wording "Bundesministerium für Inneres, NIS-Anlaufstelle"
  named the 2018-regime contact point; corrected 2026-09-18 (the Bundesamt is
  subordinate to the BMI, § 3a Abs. 2, so nis.gv.at remains the public entry point).
  Superseded 2026-10-28: nis.gv.at answers HTTP 301 to
  https://www.bundesamt-cybersicherheit.gv.at/, the authority's own site.
- Reports go to the CSIRT, never to the Bundesamt directly (§ 34 Abs. 1).
  Private-sector default = CERT.at (§ 51 Abs. 6 continuation), energy =
  Austrian Energy CERT, public administration = GovCERT, per nis.gv.at.
  Superseded 2026-10-28: the authority lists three CSIRTs from 2026-10-01,
  GovCERT, the Austrian HealthCERT for health (§ 8a GTelG 2012) and the
  national CSIRT, and no energy-sector CSIRT; energy reports to the national
  CSIRT. Every report goes through "NIS2-Services".
- The count "rund 4 000 Einrichtungen" is a **WKO estimate** (tier 2), labelled as such.
- The registration **form and portal are not asserted** (⚠️ above; superseded
  2026-10-28, the authority's channel is now asserted from its own pages). The self-declaration
  date is stated as "zwölf Monate nach dem 1. Oktober 2026" rather than a calendar day.

## Administrative identifiers — Firmenbuchnummer and UID-Nummer

<!-- meta: theme=registration,scoping; type=reference; date=2026-09-29; surfaces=data,ui; guard=packages/regulatory-data/test/country-configs-org-identifiers.test.ts -->

Needed to give Austria its own `ORG_IDENTIFIERS_AT` / `SUPPLIER_IDENTIFIERS_AT`
rather than the DEFAULT config, which asks only for a free-text registration
number and cannot validate anything. Retrieved 2026-09-29.

| Identifier | Format, verbatim from the source | Source |
|---|---|---|
| **Firmenbuchnummer (FN)** | "Jedem Rechtsträger wird im Firmenbuch eine Nummer (die Firmenbuchnummer) zugewiesen, die aus **maximal sechs Ziffern und einem Prüfbuchstaben** besteht." | [USP — Firmenbuch](https://www.usp.gv.at/themen/betrieb-und-umwelt/laufender-betrieb/firmenbuch.html) |
| Firmenbuchnummer — printed form | Official sample extract is headed "FN 123456 b"; WKO's worked example is "FN 48381z". The check letter is printed lower-case and the space is cosmetic. | [JustizOnline — Musterauszug](https://justizonline.gv.at/jop/web/assets/firmenbuch/Firmenbuch_Auszug_Muster.pdf), [WKO](https://www.wko.at/gruendung/weg-kennnummern-dschungel-unternehmensgruender) |
| **UID-Nummer** | Table row: "Österreich \| AT \| **U und 8 Stellen** \| ATU12345678" | [WKO — UID-Nummer](https://www.wko.at/steuern/uid-nummer-umsatzsteuer-identifikationsnummer) |
| UID — issuing authority | "Die Umsatzsteueridentifikationsnummer (UID-Nummer) ist eine spezielle Registrierungsnummer, die Unternehmern im Zuge der Vergabe der Steuernummer **vom Finanzamt** zugeteilt wird." | [WKO](https://www.wko.at/steuern/uid-nummer-umsatzsteuer-identifikationsnummer) |

Notes for the implementation:

- The Firmenbuch is kept by the courts, not by a single federal registry: the
  Handelsgericht Wien, the Landesgericht für Zivilrechtssachen Graz and the
  Landesgerichte in their districts. So `authorityRef` points at JustizOnline's
  public search rather than at a "registry authority" homepage.
- `normalizeOrgIdentifierValue` strips whitespace and upper-cases before the
  regex runs, so the patterns are written against `FN123456B` and
  `ATU12345678`.
- **No checksum is declared.** The Prüfbuchstabe is a check character, but its
  algorithm is not published by any of the sources above. Declaring a checksum
  we cannot cite would reject valid numbers at onboarding, which is worse than
  no checksum at all. Format only, deliberately.
- ⚠️ Not asserted anywhere: that every Austrian entity has a Firmenbuchnummer.
  Sole traders below the accounting threshold and many public bodies are not in
  the Firmenbuch, which is why the field is optional here while the German
  Handelsregister field is required. Entities outside the Firmenbuch carry a
  KUR from the Ergänzungsregister instead; that register's number format is not
  published by the sources above, so it is not modelled.

## § 24 in full — the categories a scoping questionnaire actually needs

<!-- meta: theme=scoping; type=reference; date=2026-09-29; surfaces=data,ui,marketing; guard=apps/web/test/de-at-diagnostic.test.ts -->

Read from the official BGBl PDF (BGBLA_2025_I_94.pdf, 37 pages, retrieved
2026-09-29). The earlier fact table quoted Abs. 1 and Abs. 2 Z 1 only, which is
enough for a marketing page and NOT enough for a classifier: five further
categories decide real cases, and three of them are carve-outs that keep an
entity OUT.

| Fact | Article | Verbatim quote (German) | Status |
|---|---|---|---|
| Medium-sized electronic-communications providers are ESSENTIAL, not important | § 24 Abs. 1 Z 2 | "Einrichtungen, die ein mittleres Unternehmen gemäß § 25 Abs. 3 betreiben und Anbieter öffentlicher elektronischer Kommunikationsnetze oder Anbieter öffentlich zugänglicher elektronischer Kommunikationsdienste sind" | ✅ |
| Land-level public administration is IMPORTANT | § 24 Abs. 2 Z 2 | "Einrichtungen im Sektor der öffentlichen Verwaltung auf Landesebene gemäß Abs. 5" | ✅ |
| Three categories are IMPORTANT regardless of size | § 24 Abs. 2 Z 3 | "unabhängig von ihrer Größe a. Anbieter von öffentlichen elektronischen Kommunikationsnetzen oder von öffentlich zugänglichen Kommunikationsdiensten, b. Vertrauensdiensteanbieter und c. Einrichtungen, die von der Cybersicherheitsbehörde als wichtige Einrichtung eingestuft wurden (§ 26 Abs. 1)" | ✅ |
| Public-administration entity = three cumulative tests, ⚠️ **municipalities excluded** | § 24 Abs. 3 | "Einrichtungen im Sektor der öffentlichen Verwaltung sind Einrichtungen, die 1. zum Zweck eingerichtet wurden, im öffentlichen Interesse liegende Aufgaben nicht gewerblicher Art zu erfüllen, 2. der Aufsicht des Bundes oder eines Landes unterstehen oder an die Weisungen eines obersten Organs gebunden sind oder ein Leitungs- oder Aufsichtsorgan haben, das mehrheitlich aus Mitgliedern besteht, die von Bundes- oder Landesbehörden … eingesetzt worden sind, oder an denen der Bund oder ein Land mit mindestens 50 vH des Stamm-, Grund- oder Eigenkapitals beteiligt ist … und 3. ermächtigt sind, im Rahmen ihrer gesetzlich übertragenen Aufgaben Bescheide zu erlassen, die Rechte Einzelner im grenzüberschreitenden Personen-, Waren, Dienstleistungs- oder Kapitalverkehr berühren, **mit Ausnahme der Gemeinden sowie Gemeindeverbände**." | ✅ |
| Federal level, plus a three-month list duty on ministers | § 24 Abs. 4 | "Einrichtungen … auf Bundesebene sind Einrichtungen gemäß Abs. 3, die zudem zur Besorgung von Angelegenheiten der Bundesverwaltung berufen sind und entweder als Bundesbehörden eingerichtet wurden oder Rechtspersönlichkeit besitzen. Die übrigen Mitglieder der Bundesregierung haben der Cybersicherheitsbehörde erstmalig innerhalb von drei Monaten ab Inkrafttreten … eine Liste der in ihren Wirkungsbereich fallenden Einrichtungen zu übermitteln." | ✅ |
| Land level is named concretely | § 24 Abs. 5 | "Einrichtungen im Sektor der öffentlichen Verwaltung auf Landesebene sind die **Ämter der Landesregierungen und die Bezirkshauptmannschaften** sowie Einrichtungen gemäß Abs. 3, die zudem zur Besorgung von Angelegenheiten der Landesverwaltung berufen sind und Rechtspersönlichkeit besitzen." | ✅ |
| ⚠️ **Six whole categories are neither essential nor important** | § 24 Abs. 6 | "Einrichtungen im Sektor der öffentlichen Verwaltung, deren Wirkungsbereiche überwiegend die nationale Sicherheit einschließlich der militärischen Landesverteidigung, die öffentliche Sicherheit oder die Strafverfolgung umfassen, sowie Einrichtungen des **Universitäts-, Hochschul- und Schulwesens**, Einrichtungen der **Gerichtsbarkeit** …, Einrichtungen der **Gesetzgebung** einschließlich der Parlamentsdirektion, sowie die **Österreichische Nationalbank** gelten nicht als wesentliche oder wichtige Einrichtungen. **Für Vertrauensdiensteanbieter kommt dieser Absatz nicht zur Anwendung.**" | ✅ |
| DORA takes precedence | § 24 Abs. 7 | "Gegenüber Einrichtungen, die in den Anwendungsbereich der Verordnung (EU) 2022/2554 fallen, gehen die einschlägigen Bestimmungen dieser Verordnung und nationaler Durchführungsbestimmungen vor." | ✅ |
| …but DORA's ICT third-party providers are ALSO caught by the NISG | § 24 Abs. 8 | "IKT-Drittdienstleister gemäß Art. 3 Z 23 der Verordnung (EU) 2022/2554 unterliegen auch den Bestimmungen dieses Bundesgesetzes." | ✅ |

### Why this section exists

The Austrian diagnostic shipped on 2026-09-29 built on the two-paragraph
summary and was wrong for five kinds of visitor:

- an electronic-communications provider, which reaches the ESSENTIAL tier at
  medium size (Abs. 1 Z 2) and the IMPORTANT tier at any size (Abs. 2 Z 3 a),
  and was being size-tested like an ordinary Anlage-1 entity;
- a non-qualified trust service provider, IMPORTANT at any size (Abs. 2 Z 3 b),
  which the questionnaire only recognised in its qualified form;
- a university, school, court, parliament body or the Nationalbank, all of
  which Abs. 6 keeps out entirely and which would otherwise have been told they
  were in scope, the research sector being in Anlage 2;
- a **Gemeinde**, excluded by name in Abs. 3 and the single most likely Austrian
  public-sector visitor to a compliance site;
- a bank or financial-market entity under DORA, where Abs. 7 makes the
  Regulation govern instead.

Abs. 6's last sentence is the trap inside the trap: the carve-out does **not**
apply to trust service providers, so a university that is also a trust service
provider stays in scope.

## After entry into force: the channel, the CSIRTs, registration and the NISV 2026 (read 2026-10-28)

<!-- meta: theme=statute,registration,incident,framework; type=reference; date=2026-10-28; surfaces=data,ui,marketing,prompt,mcp,docs; guard=packages/regulatory-data/test/country-configs-incident-reporting.test.ts,packages/regulatory-data/test/country-configs-transposition-references.test.ts,packages/regulatory-data/test/nis2-transposition-status.test.ts,apps/web/test/austria-after-entry-into-force.test.tsx -->

The NISG 2026 applies since 2026-10-01. Since then the Bundesamt für
Cybersicherheit has published its reporting and registration channel, its list
of CSIRTs and a regulation, and the GTelG amendment carried by the same
Bundesgesetzblatt has given the health sector its own CSIRT. Every quote below
was read on 2026-10-28 in the file whose hash is given. The two PDFs are the
signed ("amtssigniert") issues of the Bundesgesetzblatt; a plain `curl` reached
RIS on that day, unlike in July and September.

### Sources

| Source | URL | Retrieved | sha256 of the file read |
|---|---|---|---|
| BGBl. I Nr. 94/2025, signed PDF, 38 PDF pages (37 printed pages and the signature block), signed 2025-12-23T14:18:06+01:00 | https://ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2025_I_94/BGBLA_2025_I_94.pdf | 2026-10-28 | `5d40e81ca95d1fca94441f799150c9a3a41a3125314de75b586eb74e9797f35a` |
| BGBl. II Nr. 290/2026, NISV 2026, signed PDF, 4 PDF pages (3 printed pages and the signature block), "Ausgegeben am 1. Oktober 2026", signed 2026-10-01T16:15:32+02:00 | https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2026_II_290/BGBLA_2026_II_290.pdf (ELI https://www.ris.bka.gv.at/eli/bgbl/II/2026/290) | 2026-10-28 | `9353862da0552e858c058583fcd7cd4c2c42a8b995c6594254e339a9ff60702e` |
| Nationalrat text, 308 d.B. XXVIII. GP, BNR 126 (cross-check only) | https://www.parlament.gv.at/dokument/XXVIII/BNR/126/fname_1729726.pdf | 2026-10-28 | `937e5cae4917c0a7bb9608ddfccfedb7c51840f305c2ba588daa772ddbf8194c` |
| Authority, "Meldepflicht und Fristen", "Letzte Aktualisierung: 5. Oktober 2026" | https://www.bundesamt-cybersicherheit.gv.at/303/meldepflicht-und-fristen.html | 2026-10-28 | `fba29a608a14b7f66dee8237a5962acef63e323d97706d57898013ae9eecbe40` |
| Authority, "Computer-Notfallteams (CSIRTs)", "Letzte Aktualisierung: 25. September 2026" | https://www.bundesamt-cybersicherheit.gv.at/204/start.html | 2026-10-28 | `00335bed2e32819348a30d9d80d703523d7c3d911005bc9b40f538eb3b53bbc0` |
| Authority, "Registrierung", "Letzte Aktualisierung: 2. Oktober 2026" | https://www.bundesamt-cybersicherheit.gv.at/303/registrierung.html | 2026-10-28 | `85d68105fb2da94099a5a45338ae75656dc5de0871c1e44292002e410f0a93c1` |
| Authority, "Risikomanagementmaßnahmen", "Letzte Aktualisierung: 21. September 2026" | https://www.bundesamt-cybersicherheit.gv.at/303/risikomanagementmassnahmen.html | 2026-10-28 | `6d1d0b5853bea555224d206aa3883dfb8bb3c143fe320680a813d7d4f3485e37` |
| Authority, "Recht und Dokumente", "Letzte Aktualisierung: 27. Oktober 2026" | https://www.bundesamt-cybersicherheit.gv.at/501/start.html | 2026-10-28 | `09c84b3cf792e5f9aeb604bd873b92ad5698ef64e8a04a82a653263bd55ab50a` |
| Authority, home page, reached from https://www.nis.gv.at/ (`curl -I` on 2026-10-28: HTTP 301 to https://www.bundesamt-cybersicherheit.gv.at/) | https://www.bundesamt-cybersicherheit.gv.at/ | 2026-10-28 | `a1b13daf21108995b387b4491c7144bd4609359ced6e558556436b6edee3788e` |
| Austrian HealthCERT, home page | https://a-healthcert.at/ | 2026-10-28 | `d8994297d2b50dcd619e1f25dcf34281879944223516c38b6c74ee3309fb83a6` |
| CERT.at, "NISG 2026/CRA" | https://www.cert.at/de/nis2/ | 2026-10-28 | `1f4538d16a2083087eb53faa4c83a087ab97841ca47325a4caefa2e065f057d7` |

The HTML hashes identify the copy that was read; those pages change.

### The Austrian HealthCERT: Art. 3 of BGBl. I Nr. 94/2025, § 8a GTelG 2012

| Fact | Provision | Verbatim quote (German) | Status |
|---|---|---|---|
| The health minister sets up and runs the Austrian HealthCERT | § 8a Abs. 1, first sentence | "Der für das Gesundheitswesen zuständige Bundesminister oder die zuständige Bundesministerin hat als datenschutzrechtlich Verantwortlicher (Art. 4 Z 7 DSGVO) zur Gewährleistung der Cybersicherheit und -resilienz im Gesundheitswesen ein spezialisiertes Cybersicherheits-Kompetenzteam, das „Austrian HealthCERT“, einzurichten und zu betreiben." | ✅ (the PDF breaks the line after "Cybersicherheits-"; the capital K shows that the hyphen belongs to the word) |
| It is the sector CSIRT for health by statute, not by authorisation | § 8a Abs. 2 | "Das Austrian HealthCERT hat die Aufgaben eines sektorspezifischen Computer-Notfallteams gemäß § 8 des Netz- und Informationssystemsicherheitsgesetzes (NISG 2026), BGBl. I Nr. 94/2025, für den Sektor Gesundheitswesen gemäß § 2 Z 5 NISG 2026 wahrzunehmen und dabei die Voraussetzungen gemäß § 9 Abs. 1 NISG 2026, mit Ausnahme von Z 8 zu erfüllen. Die Bestimmungen des NISG 2026 über die Ermächtigung der Cybersicherheitsbehörde zur Einrichtung von sektorspezifischen CSIRTs kommen nicht zur Anwendung." | ✅ |
| Health-sector entities report to it | § 8a Abs. 3 | "Wesentliche und wichtige Einrichtungen gemäß den §§ 24 ff NISG 2026, die dem Sektor Gesundheitswesen gemäß § 2 Z 5 NISG 2026 angehören, haben zur Erfüllung ihrer auf den Sektor Gesundheitswesen bezogenen Meldepflichten gemäß den §§ 34 und 37 NISG 2026 Meldungen an das Austrian HealthCERT zu erbringen. Andere Meldepflichten bleiben hiervon unberührt." | ✅ |
| In force 2026-10-01 | § 26 Abs. 22 GTelG 2012, added by Art. 3 | "(22) Das Inhaltsverzeichnis sowie § 8a samt Überschrift in der Fassung des Bundesgesetzes BGBl. I Nr. 94/2025 treten nach Ablauf von neun Monaten nach der Kundmachung dieses Bundesgesetzes mit dem nächstfolgenden Monatsersten in Kraft." | ✅ derived: promulgated 2025-12-23, nine months end on 2026-09-23, the next first of the month is 2026-10-01, the clock of § 51 Abs. 2 NISG 2026 |
| The authority's half-yearly report counts HealthCERT reports | § 34 Abs. 9 NISG 2026 | "einschließlich der gemäß den Abs. 1, 5, 7 und 8 sowie gemäß § 8a Abs. 3 des Gesundheitstelematikgesetzes 2012 (GTelG 2012), BGBl. I Nr. 111/2012, zur Verfügung gestellten Informationen" | ✅ |

HealthCERT's own home page points at the same channel as the authority:
"Zur Meldung eines Sicherheitsvorfalls finden Sie das Meldeportal hier.", the
link going to `https://nim.services.usp.gv.at/at.gv.brz.nis2-public-p/nis2gvat/incidentsOverview/`.
Its contact block names AGES (Österreichische Agentur für Gesundheit und
Ernährungssicherheit GmbH); § 8a Abs. 1 lets the minister use a service
provider. Not asserted in the product.

### The NISV 2026: BGBl. II Nr. 290/2026

Title: "290. Verordnung der Cybersicherheitsbehörde zur Festlegung näherer
Anforderungen an die Risikomanagementmaßnahmen im Bereich der Cybersicherheit
und weiterer Kriterien über das Vorliegen eines erheblichen
Cybersicherheitsvorfalls (Netz- und Informationssystemsicherheits-Verordnung –
NISV 2026)". Legal basis, verbatim: "Aufgrund des § 32 Abs. 5 und § 35 Abs. 3
des Netz- und Informationssystemsicherheitsgesetzes 2026 (NISG 2026), BGBl. I
Nr. 94/2025, wird verordnet:". Signed by the director of the Bundesamt für Cybersicherheit.

> § 1. Mit dieser Verordnung werden 1. nähere Anforderungen an die Risikomanagementmaßnahmen im Bereich der Cybersicherheit sowie 2. weitere Kriterien über das Vorliegen eines erheblichen Cybersicherheitsvorfalls festgelegt.

> § 2. Die näheren Anforderungen an die Risikomanagementmaßnahmen gemäß Art. 2 samt Anhang der Durchführungsverordnung (EU) 2024/2690 mit Durchführungsbestimmungen zur Richtlinie (EU) 2022/2555 im Hinblick auf die technischen und methodischen Anforderungen der Risikomanagementmaßnahmen im Bereich der Cybersicherheit und die Präzisierung der Fälle, in denen ein Sicherheitsvorfall in Bezug auf DNS-Diensteanbieter, TLD-Namenregister, Anbieter von Cloud-Computing-Diensten, Anbieter von Rechenzentrumsdiensten, Betreiber von Inhaltszustellnetzen, Anbieter verwalteter Dienste, Anbieter verwalteter Sicherheitsdienste, Anbieter von Online-Marktplätzen, Online-Suchmaschinen und Plattformen für Dienste sozialer Netzwerke und Vertrauensdiensteanbieter als erheblich gilt, ABl. Nr. L 2024/2690 vom 18.10.2024, sind auch auf die nicht von dieser Durchführungsverordnung umfassten in den Anlagen 1 und 2 des Netz- und Informationssystemsicherheitsgesetzes 2026 (NISG 2026), BGBl. I Nr. 94/2025, gelisteten Arten wesentlicher und wichtiger Einrichtungen anwendbar.

> § 3. Wesentliche und wichtige Einrichtungen haben sich im Zuge ihrer Risikoanalyse zumindest an folgenden Risikokategorien zu orientieren und bei ihrem Risikomanagementverfahren im Bereich der Cybersicherheit zu berücksichtigen: 1. technologische Risiken, 2. menschliche Risiken, 3. Risiken in der IKT-Lieferkette, 4. standortbezogene Risiken für Netz- und Informationssysteme.

> § 4. (1) Kompensierende Maßnahmen sind umzusetzen, wenn eine wesentliche oder wichtige Einrichtung einzelnen Anforderungen gemäß § 2 vorübergehend oder aufgrund ihrer Größe nicht entsprechen kann.
> (2) Kompensierende Maßnahmen müssen geeignet sein, dem jeweiligen Zweck einer Anforderung gemäß § 2 und der Minimierung damit verbundener Risiken auf Basis einer Risikobewertung zu dienen.
> (3) Die Umsetzung kompensierender Maßnahmen ist nachvollziehbar und begründet zu dokumentieren. Die Wirksamkeit kompensierender Maßnahmen ist in regelmäßigen Abständen, jedoch zumindest jährlich, zu überprüfen.
> (4) Die Pflicht zur Umsetzung kompensierender Maßnahmen besteht nicht bezüglich jener Anforderungen gemäß § 2, denen ausdrücklich nur soweit angemessen, anwendbar oder durchführbar zu entsprechen ist.

> § 5. (1) Ein Cybersicherheitsvorfall gilt in Bezug auf die betreffenden Einrichtungen jedenfalls als erheblich im Sinne von § 35 Abs. 1 NISG 2026, wenn eines oder mehrere der folgenden Kriterien erfüllt sind:
> 1. der Cybersicherheitsvorfall hat der betreffenden Einrichtung einen direkten finanziellen Verlust in Höhe von mehr als 500 000 EUR oder 5 % ihres jährlichen Gesamtumsatzes im vorangegangenen Geschäftsjahr – je nachdem, welcher Wert niedriger ist – verursacht oder kann einen solchen Verlust verursachen;
> 2. der Cybersicherheitsvorfall hat den Abfluss von Geschäftsgeheimnissen der betreffenden Einrichtung im Sinne von § 26b des Bundesgesetzes gegen den unlauteren Wettbewerb 1984 (UWG), BGBl. Nr. 448/1984, oder von Informationen, die gemäß § 6 des Bundesgesetzes über den Zugang zu Informationen (Informationsfreiheitsgesetz – IFG), BGBl. I Nr. 5/2024, der Geheimhaltung unterliegen, verursacht oder kann einen solchen Abfluss verursachen;
> 3. der Cybersicherheitsvorfall hat den Tod einer natürlichen Person verursacht oder kann einen solchen Tod verursachen;
> 4. der Cybersicherheitsvorfall hat eine schwere Schädigung der Gesundheit einer natürlichen Person verursacht oder kann eine solche Schädigung verursachen;
> 5. es hat einen erfolgreichen, mutmaßlich böswilligen und unbefugten Zugriff auf Netz- und Informationssysteme gegeben, der wahrscheinlich dazu führt, schwerwiegende Betriebsstörungen zu verursachen;
> 6. der Cybersicherheitsvorfall erfüllt die in § 7 aufgeführten Kriterien für wiederholte Cybersicherheitsvorfälle;
> 7. der Cybersicherheitsvorfall hat zum Ausfall oder zur eingeschränkten Verfügbarkeit der von der Einrichtung erbrachten Dienste für mehr als 100 000 Nutzer oder 10 % der Nutzer – je nachdem, welcher Wert niedriger ist – für mehr als 24 Stunden geführt oder kann dazu führen (Ausbreitung auf Nutzer). Eine eingeschränkte Verfügbarkeit liegt insbesondere dann vor, wenn ein von einer betreffenden Einrichtung erbrachter Dienst nicht im regelmäßig zu erwartenden Umfang erbracht werden kann;
> 8. der Cybersicherheitsvorfall hat zum Ausfall oder zur eingeschränkten Verfügbarkeit für die Nutzer der von der Einrichtung erbrachten Dienste im Gebiet zumindest eines Bundeslandes für mehr als 24 Stunden geführt oder kann dazu führen (geografische Ausbreitung). Eine eingeschränkte Verfügbarkeit liegt insbesondere dann vor, wenn ein von einer betreffenden Einrichtung erbrachter Dienst nicht im regelmäßig zu erwartenden Umfang erbracht werden kann;
> 9. der Cybersicherheitsvorfall hat zur Aktivierung des Krisenmanagements oder von Notfallwiederherstellungsplänen des Betriebskontinuitätsmanagements geführt.

> § 6. Planmäßige Betriebsunterbrechungen und geplante Folgen planmäßiger Wartungsarbeiten, die von oder im Auftrag der betreffenden Einrichtung durchgeführt werden, gelten nicht als erhebliche Cybersicherheitsvorfälle.

> § 7. Cybersicherheitsvorfälle, die einzeln betrachtet nicht als erhebliche Cybersicherheitsvorfälle anzusehen sind, gelten zusammengenommen als ein erheblicher Cybersicherheitsvorfall, wenn sie alle folgenden Kriterien erfüllen: 1. sie sind innerhalb von sechs Monaten mindestens zwei Mal aufgetreten; 2. sie haben dieselbe offensichtliche Ursache und Auswirkung; 3. sie erfüllen zusammengenommen die in § 5 Abs. 1 Z 1 aufgeführten Kriterien.

> § 8. Soweit in dieser Verordnung auf Bundesgesetze verwiesen wird, ist die zum Zeitpunkt des Inkrafttretens der Verordnung geltende Fassung maßgeblich.

> § 9. Diese Verordnung tritt mit Ablauf des Tages der Kundmachung in Kraft.

What follows from the text, and how far the product goes:

- **In force at the end of 2026-10-01**, the day of its Kundmachung (§ 9 and the
  issue date). § 51 Abs. 3 NISG 2026 forbids a regulation to commence before the
  Act; this one commenced the day the Act did.
- **§ 2 is the national measures baseline.** Art. 2 and the Annex of
  Implementing Regulation (EU) 2024/2690 apply to the entity types that
  Regulation covers, and § 2 extends them to every other entity type listed in
  Annexes 1 and 2 NISG 2026. The Implementing Regulation itself was not re-read
  for this entry: the product states the extension and does not carry the Annex
  as a checklist. Whether to build it as a framework is a product decision, not
  taken here.
- **§ 5 answers the question the 2026-09-18 pages left open.** § 35 Abs. 1 NISG
  2026 has two qualitative limbs and § 35 Abs. 2 weighing criteria; § 5 Abs. 1
  NISV 2026 adds nine criteria under which an incident is significant
  "jedenfalls", among them two numeric ones (500 000 EUR or 5 %, whichever is
  lower; 100 000 users or 10 %, whichever is lower, for more than 24 hours) and
  a territorial one (one Bundesland, more than 24 hours). § 5 has a single
  paragraph although it is numbered "(1)".
- **The name.** The authority's "Risikomanagementmaßnahmen" page, last updated
  on 2026-09-21, ten days before the issue, says: "Die aufgrund des NISG 2026
  erlassene Verordnung zu den Risikomanagementmaßnahmen (RMMV) beschreibt diese
  Vorgaben genauer." The Bundesgesetzblatt and the authority's own "Recht und
  Dokumente" page (2026-10-27) say "NISV 2026". The product uses the
  Bundesgesetzblatt name. Not to be confused with the NISV of 2019 (BGBl. II
  Nr. 215/2019), which § 51 Abs. 2 NISG 2026 repealed on the same day.
- The "Recht und Dokumente" page also links "NISV 2026 – Erläuterungen"
  (`files/nisv-2026-erlaeuterungen-20261002.pdf`). Not read for this entry.

### The authority's channel, its CSIRTs and the registration window

| Fact | Source | Verbatim quote (German) | Status |
|---|---|---|---|
| All reports, mandatory and voluntary, go through "NIS2-Services" on the USP | "Meldepflicht und Fristen" | "Über die Anwendung „NIS2-Services“, die über das Unternehmensserviceportal bereitgestellt wird, können Meldungen zur Erfüllung der Berichtspflichten sowie freiwilligen Meldung abgegeben werden." The link is `https://nim.services.usp.gv.at/at.gv.brz.nis2-public-p/nis2gvat`; the header link "Vorfall melden" goes to `.../nis2gvat/incidentsOverview/`. | ✅ |
| Public administration: the connection is still to come | "Meldepflicht und Fristen" and "Registrierung", same sentence | "Für die Einrichtungen der öffentlichen Verwaltung wird momentan an einer Anbindungsmöglichkeit über den Portalverbund gearbeitet, diese soll zeitnah nach dem 1. Oktober 2026 zur Verfügung gestellt werden." | ✅ the product says it is to follow, never that it exists |
| Fallback when the portal is down: PDF forms | "Meldepflicht und Fristen" | "Für den Fall einer vorübergehenden technischen Nichtverfügbarkeit des NIS2-Meldeportals stehen Meldeformulare für die verschiedenen Meldetypen unter „Recht und Dokumente“ zur Verfügung." | ✅ |
| Seven forms, version v20261027 | "Recht und Dokumente" | "Meldeformulare für alternativen Meldeweg" / "Nur für den Fall einer vorübergehenden technischen Nichtverfügbarkeit des NIS2-Meldeportals." Forms: Frühwarnung, Meldung, Zwischenbericht, Fortschrittsbericht, Abschlussbericht, Widerruf, Freiwillige Meldung (`files/275-2026-formular-<type>-v20261027-web.pdf`) | ✅ |
| The recipient is the competent CSIRT | "Meldepflicht und Fristen" | "Wem? Meldung an zuständiges sektorspezifisches CSIRT, in Ermangelung eines solchen dem nationalen CSIRT" | ✅ |
| The authority numbers the stages § 34 Abs. 2 | "Meldepflicht und Fristen" | "Frühwarnung (§ 34 Abs. 2 Z 1 NISG 2026)", "Meldung (§ 34 Abs. 2 Z 2 NISG 2026)", "Zwischenbericht (§ 34 Abs. 2 Z 3 NISG 2026)", "Abschlussbericht (§ 34 Abs. 2 Z 4 NISG 2026)", "Fortschrittsbericht (§ 34 Abs. 2 Z 5 NISG 2026)" | ✅ |
| Three CSIRTs from 2026-10-01, none for energy | "Computer-Notfallteams (CSIRTs)" | "Ab 1. Oktober 2026 existieren folgende Computer-Notfallteams: das GovCERT für Einrichtungen der öffentlichen Verwaltung, das HealthCERT für den Gesundheitssektor sowie das nationale CSIRT mit allgemeiner Zuständigkeit." The page sets the three as a bulleted list, joined here. Links: https://www.govcert.gv.at/, https://a-healthcert.at/, https://www.cert.at/de/ | ✅ |
| More sector CSIRTs may follow | same | "Bei Bedarf können weitere sektorspezifische Computer-Notfallteams eingerichtet werden." | ✅ |
| An entity active in several sectors reports to each competent CSIRT | same | "Ist eine wesentliche oder wichtige Einrichtung in mehreren Sektoren tätig, müssen Meldungen auch an die jeweils zuständigen CSIRTs übermittelt werden." | ✅ |
| Anonymous voluntary reports go to the CSIRT directly | "Meldepflicht und Fristen" | "Sollten Sie Ihre Identität gemäß § 37 Abs 3 NISG 2026 nicht preisgeben wollen, so verwenden Sie den anonymisierten Meldeweg direkt über Ihr zuständiges Computer-Notfallteam." | ✅ |
| Registration goes through the same application | "Registrierung" | "Über die Anwendung „NIS2-Services“, die über das Unternehmensserviceportal bereitgestellt wird, kann die Registrierung durchgeführt werden." | ✅ |
| **The first registration window, as the authority counts it** | "Registrierung" | "Initial: Grundsätzlich bis 1. Jänner 2027, aufgrund § 33 Abs. 2 AVG bis spätestens 4. Jänner 2027 (drei Monate nach Inkrafttreten)." | ✅ the date is the authority's: 2027-01-01 is a Friday and a public holiday, 2027-01-04 a Monday (`date -d`). § 33 Abs. 2 AVG was not read for this entry, so the product attributes the date to the authority |
| Later entrants | "Registrierung" | "Generell: Spätestens drei Monate nach Erfüllung der Kriterien als wesentliche oder wichtige Einrichtung." | ✅ |
| Non-EU entities under § 28 Abs. 4 use a form sent by e-mail | "Registrierung" | "Der Registrierungspflicht und der Pflicht zur Bekanntgabe eines Vertreters gemäß § 29 Abs. 2 Z 2 wird allein in Fällen des § 28 Abs. 4 durch korrektes Ausfüllen und Übermitteln des folgenden Formulars an die Cybersicherheitsbehörde unter post@bundesamt-cybersicherheit.gv.at nachgekommen." Form: `files/400-2026-vertreterformular-bcs-v20260930-bf-v2.pdf` | ✅ |
| The authority's name and site | home page | "Das Bundesamt für Cybersicherheit (BCS) ist eine neue, nach dem NISG 2026 bundesweit zuständige Behörde in Österreich. Es wurde als nachgeordnete Dienststelle des Bundesministeriums für Inneres eingerichtet." | ✅ |

What the national CSIRT says on its own page, read the same day:

| Fact | Verbatim quote (German) | Status |
|---|---|---|
| The platform opened on 2026-10-01 and needs a USP account | "CERT.at ist als nationales CSIRT für die Entgegennahme, Bearbeitung und Weiterleitung dieser Meldungen verantwortlich. Dazu wurde im Unternehmensserviceportal (USP) eine Meldeplattform erstellt, die mit 1. Oktober 2026 in Betrieb gegangen ist. Für den Zugang zu dieser Meldeplattform wird ein USP-Konto benötigt." | ✅ |
| Where CERT.at wants the fallback forms | "Bei einem Ausfall des USP-Meldeportals nutzen Sie bitte die folgenden PDF-Formulare für Ihre Meldung und senden Sie diese an reports@cert.at" | ✅ for CERT.at's constituency only: GovCERT and HealthCERT publish no address for the forms on the pages read |
| The 2018 platforms are gone | `curl` on 2026-10-28: https://nis.cert.at, https://nis.energy-cert.at and https://nis.govcert.gv.at all answer HTTP 301 to https://www.cert.at/de/nis2/ | ✅ |

Not asserted in the product: that the Portalverbund connection exists; the
fields of the NIS2-Services forms, which sit behind a USP login and were not read
(so Austria still has no registration kit); an address for fallback forms sent
to GovCERT or HealthCERT; the content of the Annex of Implementing Regulation
(EU) 2024/2690; AGES's role.

## What the product said until 2026-10-28, and what replaces it

<!-- meta: theme=registration,incident,framework; type=stale-statute,status-error,deadline-model,test-pinned; date=2026-10-28; surfaces=data,ui,marketing,prompt,mcp,doc-gen,i18n,docs,test; guard=apps/web/test/austria-after-entry-into-force.test.tsx,apps/web/test/country-austria-fiche.test.ts,apps/web/test/de-at-diagnostic.test.ts,packages/regulatory-data/test/country-configs-incident-reporting.test.ts,packages/regulatory-data/test/country-configs-transposition-references.test.ts -->

Every statement below was true, or the best reading available, on 2026-09-18.
Each was written as a statement of the present, and the present changed on
2026-10-01. All were corrected on every surface the day they were found.

| The product said | It now says | Source | Where it lived |
|---|---|---|---|
| Reports go through nis.cert.at, nis.energy-cert.at or nis.govcert.gv.at, "the three platforms the authority lists on nis.gv.at" | Every report goes through "NIS2-Services" on the Unternehmensserviceportal, to the competent CSIRT; PDF forms only while the portal is down | "Meldepflicht und Fristen"; the three hosts now redirect to cert.at | `INCIDENT_REPORTING_AT` (portal URLs, the authority text in five languages), `countries-seo.ts`, `countries/austria.ts`, `/de-at/vorfall-melden`, `tests/e2e/at-landing.spec.ts`, `country-austria-fiche.test.ts` |
| Energy reports to the Austrian Energy CERT | There is no energy-sector CSIRT: energy reports to the national CSIRT. The health sector reports to the Austrian HealthCERT | "Computer-Notfallteams (CSIRTs)"; § 8a Abs. 3 GTelG 2012 | `INCIDENT_REPORTING_AT.sectorSpecificCsirts`, `countries-seo.ts`, `countries/austria.ts` (twice), `/de-at/vorfall-melden`, `/de-at/haeufige-fragen` |
| Registration "by 31 December 2026" (`2026-12-31`, "31. Dezember 2026", "31 décembre 2026", "31 dicembre 2026", "31 de dezembro de 2026", "Jahresende") | Three months from entry into force (§ 29 Abs. 3); the authority counts 1 January 2027, and 4 January 2027 at the latest under § 33 Abs. 2 AVG | "Registrierung" | `TRANSPOSITION_REFERENCES_AT` (five languages), the tracker row, `countries-seo.ts` (four places), `countries/austria.ts`, four `/de-at` pages, `de-at-config.ts`, `de-at-diagnostic.test.ts` |
| No regulation under § 32 Abs. 5 had been published; "NO national technical framework"; the Act "names no number" for a significant incident | The NISV 2026 applies Art. 2 and the Annex of Implementing Regulation (EU) 2024/2690 to every entity type, and its § 5 lists nine criteria, three of them numeric or territorial. Reglyze assesses on the NIS2 substrate and does not yet carry that Annex as a checklist | NISV 2026 | `TRANSPOSITION_REFERENCES_AT` (five languages), the `INCIDENT_REPORTING_AT` severity basis, `countries-seo.ts`, `countries/austria.ts`, five `/de-at` pages, `docs/ORIENTATION.md` §4 |
| No registration portal or form had been published, and the product "does not assert" the USP | Registration through "NIS2-Services" on the USP; the § 28 Abs. 4 form by e-mail | "Registrierung" | `/de-at` pages, `countries/austria.ts`, and the fiche test that forbade the very words |
| The authority's site is nis.gv.at | https://www.bundesamt-cybersicherheit.gv.at/ (nis.gv.at answers 301) | `curl -I` | `TRANSPOSITION_REFERENCES_AT`, `PUBLIC_ADMIN_AT`, `countries-seo.ts`, `countries/austria.ts`, `DeAtShell`, `de-at-config.ts` |
| Competent authority "BMI/BMK (joint)" | Bundesamt für Cybersicherheit (§ 3a Abs. 1) | the 2026-07-27 fact table | the AT line of `apps/ai-service/src/lib/remediation-prompt.ts` |
| The authority abbreviated "CSB" | "BCS", the authority's own abbreviation | home page | `PUBLIC_ADMIN_AT` |
| The deterministic document template named the national CSIRT for every sector, so an Austrian hospital was told to notify CERT.at | The sector's own CSIRT where its routing is `primary`: the HealthCERT for health, GovCERT for public administration | § 8a Abs. 3 GTelG 2012; § 8 Abs. 4 NISG 2026 | `apps/core-api/src/lib/document-generator.ts` |
| The board briefing deck's "Register" action quoted the first national requirement, for Austria "NO national technical framework …" | The requirement that is about registration | § 29 Abs. 3 | `apps/core-api/src/lib/document-generator.ts` |
| The MCP `incident_deadline_formats` tool named only the national CSIRT | It also lists the sector routing | § 8a Abs. 3 GTelG 2012 | `apps/mcp/src/tools/incident-deadlines.ts` |
| The in-app incident page told an Austrian organisation to "submit to your national authority" (the generic fallback) | Report to the competent CSIRT through NIS2-Services, never to the authority directly | § 34 Abs. 1 | `app.incidents.detail.authorityReport.nisgHint` in `apps/web/src/lib/i18n/translations.ts`, eleven locales |

Five assertions in three test files held the old state in place:
`country-austria-fiche.test.ts` pinned `notificationUrl` to `https://nis.cert.at`,
required the date `2026-12-31` and asserted that the German fiche never
contained "Unternehmensserviceportal|USP"; `de-at-diagnostic.test.ts` required
"31. Dezember 2026" in every in-scope verdict; and `tests/e2e/at-landing.spec.ts`
required "nis.cert.at" on the incident page.
Each now requires the new fact, and `apps/web/test/austria-after-entry-into-force.test.tsx`
reads every Austrian surface for the superseded hosts, the Energy CERT route
and the 31 December date, in every language.

## Correction: the incident stages are § 34 Abs. 2, not § 35 Abs. 2 (made 2026-10-28)

<!-- meta: theme=incident; type=wrong-citation; date=2026-10-28; surfaces=docs; guard=none; debt=a paragraph number in this record is checked against the gazette by a reader and not by a test, and the product surfaces already cited § 34 and are pinned by packages/regulatory-data/test/country-configs-incident-reporting.test.ts -->

The fact table of 2026-07-27 gave the article of the 24 h and 72 h stages as
"§ 35 Abs. 2 Z 1–2" and of all five acts as "§ 35 Abs. 2 Z 1–5". The quotes in
those rows were right and the paragraph was wrong. The stages are in § 34 Abs. 2:
§ 34 Abs. 4 refers to the "Frühwarnung gemäß Abs. 2 Z 1", and the authority's
own page heads each stage "§ 34 Abs. 2 Z 1 NISG 2026" to "§ 34 Abs. 2 Z 5 NISG
2026". § 35 Abs. 1 defines a significant incident and § 35 Abs. 2 lists what is
weighed: "Bei der Beurteilung, ob ein Cybersicherheitsvorfall als erheblich
gemäß Abs. 1 einzustufen ist, sind folgende Kriterien zu berücksichtigen". Every
product surface already cited § 34; only this record was wrong. Corrected in
place in the two rows.

## Sector routing reaches every surface (2026-10-29)

<!-- meta: theme=incident; type=surface-inconsistency; date=2026-10-29; surfaces=ui,mcp,doc-gen,prompt,i18n; guard=packages/regulatory-data/test/incident-recipient-reads.test.ts,apps/core-api/test/incident-recipients-routes.test.ts,apps/web/test/incident-recipients-card.test.tsx -->

From 2026-10-28 the configuration routed health to the Austrian HealthCERT
(§ 8a Abs. 3 GTelG 2012) and public administration to GovCERT (§ 8 Abs. 4
NISG 2026), and two surfaces read it: the document template and the MCP tool
(table above). The incident page, the incident API, the reminder e-mail and the
MSP feed still named CERT.at for every sector, and the reminder named it with the
national CSIRT's full description, which breaks the sentence in two.

Since 2026-10-29 all of them ask `resolveIncidentRecipients(country, sector)`.
The two entries were re-read against this record and stand as they are: § 8a
Abs. 3 and § 8 Abs. 4 cover their whole sector, so both route automatically, and
no Austrian rule covers only part of a sector. The national recipient's legal
basis is stated as § 34 Abs. 1 and § 51 Abs. 6, and each recipient has a short
name for sentences. Not modelled: the authority's note that an entity active in
several sectors reports to each competent CSIRT ("Ist eine wesentliche oder
wichtige Einrichtung in mehreren Sektoren tätig, müssen Meldungen auch an die
jeweils zuständigen CSIRTs übermittelt werden"), because an organisation records
one sector.
