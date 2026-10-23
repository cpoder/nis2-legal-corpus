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
| **Registration: three months from ENTRY INTO FORCE**, i.e. by 2026-12-31 | § 29 Abs. 3 | "Die Registrierung gemäß Abs. 2 hat **innerhalb von drei Monaten ab Inkrafttreten dieses Bundesgesetzes** zu erfolgen." | ✅ |
| Entities coming into scope later: **rolling** three months | § 29 Abs. 3 | "Einrichtungen, die erst nach diesem Zeitpunkt als wesentliche oder wichtige Einrichtungen gelten …, haben sich ehestmöglich, in jedem Fall aber **innerhalb von drei Monaten ab Erfüllung der jeweiligen Voraussetzungen**, zu registrieren." | ✅ |
| Change notifications: **2 weeks** (identity/contact) / **3 months** (address, size band) | § 29 Abs. 4 | "1. … innerhalb von **zwei Wochen** ab dem Tag der Änderung, und 2. … innerhalb von **drei Monaten** ab dem Tag der Änderung" | ✅ |
| Incident reporting anchors on **Kenntnisnahme** (awareness), not detection | § 35 Abs. 2 Z 1–2 | "innerhalb von **24 Stunden nach Kenntnisnahme** des erheblichen Cybersicherheitsvorfalls, eine Frühwarnung" / "innerhalb von **72 Stunden nach Kenntnisnahme** … eine Meldung" | ✅ |
| **All FIVE acts of art. 23(4) transposed**, including the progress report | § 35 Abs. 2 Z 1–5 | Z 3 "auf Ersuchen eines CSIRTs … einen **Zwischenbericht**"; Z 4 "**spätestens einen Monat nach Übermittlung der Meldung** … einen Abschlussbericht"; Z 5 "soweit der Cybersicherheitsvorfall zum Zeitpunkt der Fälligkeit … **noch andauert**" | ✅ |
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

<!-- meta: theme=statute; type=wrong-citation; date=2026-07-27; surfaces=docs; guard=none; debt=aucune machine ne distingue une citation exacte d'une reformulation crédible sans disposer du texte source ; se prévient par la relecture, pas par un test -->

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
| **No portal or form named in the Act**; nis.gv.at shows none yet | § 29 Abs. 2 / nis.gv.at 2026-09-18 | The Act only says "im elektronischen Weg … über einen sicheren Kommunikationskanal". The authority's portal (nis.gv.at) listed no NISG-2026 registration form or date on 2026-09-18; it lists three incident platforms: nis.cert.at, nis.energy-cert.at, nis.govcert.gv.at. Secondary sources (WKO, Deloitte) speak of a form "durch Verordnung" and of the USP; **not asserted in the product**. | ⚠️ provisional |
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
- Reports go to the CSIRT, never to the Bundesamt directly (§ 34 Abs. 1).
  Private-sector default = CERT.at (§ 51 Abs. 6 continuation), energy =
  Austrian Energy CERT, public administration = GovCERT, per nis.gv.at.
- The count "rund 4 000 Einrichtungen" is a **WKO estimate** (tier 2), labelled as such.
- The registration **form and portal are not asserted** (⚠️ above). The self-declaration
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
