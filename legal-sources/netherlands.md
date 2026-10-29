# Netherlands — legal sources (verified)

## Cyberbeveiligingswet (Cbw) — NIS2 transposition (wetsvoorstel 36.764)

<!-- meta: theme=statute,framework; type=reference; date=2026-06-07; surfaces=data,docs; guard=none -->

- **Official citation:** Cyberbeveiligingswet, Kamerstukdossier 36 764 — implements
  Directive (EU) 2022/2555 (NIS2). **Not yet in force** as of the retrieval date.
- **Status (2026-06-07):** Passed the **Tweede Kamer on 2026-04-15** (together with
  the Wet weerbaarheid kritieke entiteiten / CER). Now before the **Eerste Kamer**
  (committees DIGI + J&V reported 2026-06-02, awaiting government response).
  Government target: Cbw + Wwke + lower regulations **in force simultaneously in
  Q2 2026**. NL missed the NIS2 deadline of **2024-10-17** (transposition delayed).
- **Official URLs:**
  - Eerste Kamer dossier: https://www.eerstekamer.nl/wetsvoorstel/36764_cyberbeveiligingswet
  - Tweede Kamer dossier: https://www.tweedekamer.nl/kamerstukken/wetsvoorstellen/detail?qry=wetsvoorstel%3A36764&cfg=wetsvoorsteldetails
  - Rijksoverheid (Tweede Kamer vote, 2026-04-15): https://www.rijksoverheid.nl/actueel/nieuws/2026/04/15/tweede-kamer-stemt-in-met-wetsvoorstellen-cyberbeveiligingswet-en-wet-weerbaarheid-kritieke-entiteiten
  - NCSC — zorgplicht: https://www.ncsc.nl/cyberbeveiligingswet-nis2/zorgplicht
  - RDI — FAQ Cyberbeveiligingswet: https://www.rdi.nl/onderwerpen/cyberbeveiligingswet/veelgestelde-vragen
- **Retrieved + read:** 2026-06-07 (NCSC zorgplicht page read directly via fetch;
  status corroborated across Eerste Kamer + Tweede Kamer + Rijksoverheid pages).

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Transposes NIS2 | Cbw (title) | "Regels ter implementatie van Richtlijn (EU) 2022/2555 … (Cyberbeveiligingswet)" | ✅ |
| Passed Tweede Kamer 2026-04-15 | Rijksoverheid news | "Tweede Kamer stemt in met wetsvoorstellen Cyberbeveiligingswet en Wet weerbaarheid kritieke entiteiten" (15-04-2026) | ✅ |
| Not yet in force; target Q2 2026 | Rijksoverheid / Eerste Kamer | government aims for Cbw + Wwke + lagere regelgeving in force "gelijktijdig" in Q2 2026; still before Eerste Kamer | ⏳ target, not final |
| **Zorgplicht is RISK-BASED, not a prescriptive national framework** | NCSC — zorgplicht | "Organisaties zijn zelf verantwoordelijk voor het vaststellen welke maatregelen passend zijn. Risicomanagement vormt hierbij de basis." | ✅ |
| Measures = the 10 NIS2 Art. 21(2) measures (verbatim NIS2, no national reframing) | NCSC — zorgplicht | risicoanalyse · incidentenbehandeling · bedrijfscontinuïteit · beveiliging toeleveringsketen · cyberhygiëne en opleiding · beveiliging netwerk- en informatiesystemen · personeel/toegangsbeleid/assetbeheer · multifactor-authenticatie · cryptografiebeleid · beoordeling effectiviteit | ✅ |
| **No mandated national technical baseline** — guidance only | NCSC; BZK mapping | NCSC refers to "de basisprincipes van digitale weerbaarheid"; BZK published a mapping of NIS2 measures to **NEN-EN-ISO/IEC 27002**; **BIO** (Baseline Informatieveiligheid Overheid) is referenced as "in lijn" but applies to **government**, not all NIS2 entities | ✅ |
| Supervisor (toezichthouder) | RDI FAQ | Rijksinspectie Digitale Infrastructuur (RDI) supervises a set of sectors; sectoral supervisors for others; Min. J&V system responsibility | ✅ |
| CSIRT + registration | NCSC FAQ | NCSC is both national CSIRT and sectoral CSIRT for designated sectors; entities **register with NCSC** (national register); significant incidents reported **within 24h** to CSIRT + supervisor | ✅ |

### DECISIVE conclusion — NL is a NIS2-SUBSTRATE country, NOT native-framework

NL does **not** designate a single mandated national technical security
baseline/framework for NIS2 entities — unlike **FR ReCyF**, **IT Misure ACN**,
**DE IT-Grundschutz**, **BE CyberFundamentals (CyFun)**. The Cyberbeveiligingswet
enacts the NIS2 Article 21(2) measures as a **risk-based duty of care (zorgplicht)**
that each organisation operationalises itself; the state provides *guidance* and a
*mapping to ISO/IEC 27002*, and BIO covers government only.

**Product implication (the question this verification was opened for):** there is
**no real native framework to author a native assessment tree from**, and the
native-framework-supremacy invariant forbids fabricating/crosswalking one. So **NL must stay on the NIS2 substrate**
(like PT) — the correct NL support is: NIS2-substrate assessment + **NL-law
citations (Cyberbeveiligingswet)** + **Dutch (`nl`) i18n** + NL CSIRT/authority
routing (**NCSC** registration/CSIRT, **RDI** supervisor). It is **NOT** a native
tree. Contrast **BE**, which *does* have a real native framework (CyFun) and can go
fully native.

### Still to pin (next `verify-legal-source` pass, once enacted)

- Exact **entry-into-force** date + article once the Cbw is published in the
  **Staatsblad** (currently only a Q2-2026 target; read the gazette PDF then).
- Exact statutory **article numbers** for the zorgplicht (Art. 21-equivalent),
  the registration duty, and the 24h/72h/1-month incident-reporting timeline,
  from the enacted text (the page sources above are official guidance, not the
  gazette body).
- Confirm the **full list of RDI-supervised sectors** vs sectoral supervisors.

---

## UPDATE 2026-07-27: the act is adopted, published, and enters into force on 15 August 2026

<!-- meta: theme=statute,incident,registration; type=reference,status-error; date=2026-07-27; surfaces=data,ui,marketing; guard=apps/web/test/transposition-status-truthfulness.test.ts -->

The section above dated from 2026-06-07 and left three points "still to pin".
Two are now settled at the source; the text has moved a great deal since.

### Official chronology

| Step | Date | Source |
|---|---|---|
| Adoption by the Tweede Kamer | 2026-04-15 | Rijksoverheid |
| **Adoption by the Eerste Kamer** | **2026-07-07** | eerstekamer.nl, « aangenomen na stemming bij zitten en opstaan » (19 groups in favour, FVD against) |
| Signature | 2026-07-08 | « Gegeven te 's-Gravenhage, 8 juli 2026 — Willem-Alexander / De Minister van Justitie en Veiligheid, D.M. van Weel » |
| **Publication in the Staatsblad** | **2026-07-10** | **Stb. 2026, 187**, « Uitgegeven de tiende juli 2026 » |

⚠️ The Eerste Kamer dossier page still showed an **empty** Staatsblad section
on 2026-07-27: it is not up to date. The publication is established by the
Staatsblad itself, not by the parliamentary dossier.

### The three instruments, not to be confused

| Number | Type | Content |
|---|---|---|
| **Stb. 2026, 187** | Wet | **Cyberbeveiligingswet (Cbw)**: transposes Directive (EU) 2022/2555 |
| Stb. 2026, 188 | Wet | Wet weerbaarheid kritieke entiteiten: transposes Directive **2022/2557 (CER)**, a separate text |
| **Stb. 2026, 189** | AMvB | **Cyberbeveiligingsbesluit (Cbb)**: implementing measures **and the setting of the entry-into-force date** |

### Verified facts (verbatim)

| Fact | Where | Verbatim (Dutch) | Status |
|---|---|---|---|
| ⚠️ **The act itself sets NO date** | art. 107 Cbw | "Deze wet treedt in werking op **een bij koninklijk besluit te bepalen tijdstip**, dat voor de verschillende artikelen of onderdelen daarvan verschillend kan worden vastgesteld." | ✅ |
| ⚠️ **Entry into force: 15 August 2026**, set by the AMvB | art. 35 Cbb (Stb. 2026, 189) | "De Cyberbeveiligingswet en dit besluit **treden in werking met ingang van 15 augustus 2026**." | ✅ |
| Acknowledged derogation from the « vaste verandermomenten » | explanatory memorandum to the Cbb | "Hierbij wordt **afgeweken van de vaste verandermomenten en de minimuminvoeringstermijn**, omdat de Cbw en het Cbb strekken [tot implementatie]" | ✅ |
| Short title | art. 108 Cbw | "Deze wet wordt aangehaald als: **Cyberbeveiligingswet**." | ✅ |
| National register of entities | art. 43 Cbw | "Artikel 43 (**nationaal register van entiteiten**)" ; "Het nationale register, genoemd in artikel 43, komt **uiterlijk één maand na de inwerkingtreding van artikel 43** tot stand." | ✅ |
| **Anchor = becoming aware**, not detection | art. 25 et seq. Cbw | "binnen **24 uur nadat zij kennis heeft gekregen** van het significante incident" ; "binnen **72 uur nadat zij kennis heeft gekregen**" | ✅ |
| ⚠️ **Two recipients**: the CSIRT AND the competent authority | art. 25 et seq. Cbw | "een melding in bij **haar CSIRT en haar bevoegde autoriteit**" | ✅ |
| Derogation for trust service providers: 24 h | art. 25 et seq. Cbw | "entiteit die een **vertrouwensdienst** aanbiedt onverwijld of, indien dat niet mogelijk is, **binnen 24 uur** … een melding" | ✅ |

### Product consequence (corrected on 2026-07-27)

`countries-seo.ts` carried `transpositionStatus: "in_progress"` with
`transpositionDate: "2026-Q3"`. Both were wrong on 27 July:

- **`in_progress`** although the act had passed both chambers, been signed by the
  King and published in the Staatsblad. The correct state is `adopted` (adopted, in
  force at a future date), the status introduced for Austria.
- **`2026-Q3`** although the exact date is set at **15 August 2026**. A vague
  quarter was hiding a deadline **19 days** away at the time of the correction.

Corrected to `adopted` / `2026-08-15`. The Netherlands is the second case of the
`adopted` status, which confirms that it was not an Austrian exception.

### Still to pin

- The exact article numbers of the zorgplicht (art. 21 equivalent) and of the
  notification regime, read in the body of the Cbw rather than inferred from the
  section headings.
- The full list of the sectors supervised by the RDI vs the sectoral supervisors,
  now readable in the **Cyberbeveiligingsbesluit**.
- The conclusion "NL is a NIS2-SUBSTRATE country, NOT native-framework" of the
  2026-06-07 section remains valid and must be **re-verified against the Cbb**,
  which is the text liable to introduce a technical baseline if one were to exist.

---

## CORRECTION 2026-07-29: "NIS2 substrate, no national framework" was misleading

<!-- meta: theme=statute,framework; type=reference,law-misread; date=2026-07-29; surfaces=data,docs,marketing; guard=none -->

The 2026-06-07 section concludes in bold: **"NL is a NIS2-SUBSTRATE country, NOT
native-framework"**, with the product implication that there would be **"no real
native framework to author a native assessment tree from"**.

That conclusion was drawn **before** the publication of the Cyberbeveiligingsbesluit
(Cbb, Stb. 2026, 189, published on 10 July 2026). The "Still to pin" section of
2026-07-27 explicitly asked for it to be re-verified against that text. Done on
2026-07-29, by reading the official Staatsblad PDF. **It must be corrected.**

### What the Cbb actually contains

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| The measures ARE elaborated in national law | Cbb, **Hoofdstuk 4 « Zorgplicht », art. 5 to 19** | one article per theme: beleid beveiliging · risicomanagement · incidentenbehandeling · bedrijfscontinuïteit · **beveiliging van de toeleveringsketen** · verwerven/ontwikkelen/onderhouden · cyberhygiëne en opleiding · cryptografie · personeel · toegangsbeleid · beheer van assets · attenderingen en dreigingsinformatie · evaluatie · nadere regels | ✅ |
| Concrete and auditable obligations, not open principles | art. 10 Cbb | « De entiteit **legt dat beleid schriftelijk vast en past dat beleid aantoonbaar toe** [...] **toetst** of haar rechtstreekse leveranciers [...] voldoen aan de beveiligingseisen [...] **controleert dit periodiek**. » | ✅ |
| Legal status of these measures: a floor | Nota van toelichting Cbb | « deze maatregelen **het minimumniveau vormen** en passend en evenredig toegepast moeten worden, afhankelijk van de risicoanalyse van de betreffende entiteit » ; « de open norm uit de Cbw blijft leidend » | ✅ |
| Training of directors imposed, with a certificate | Cbb, **Hoofdstuk 5 « Training », art. 20-22** | doel van de training · eisen aan de training · **eisen aan het certificaat** | ✅ |
| NO normative reference to a technical standard | body of the Cbb | **zero occurrences** of « ISO/IEC 27001 », « ISO/IEC 27002 », « NEN » in the text | ✅ |
| The BIO remains reserved to the public administration | Nota van toelichting | « In de ministeriële regeling onder de Cbw **voor de sector overheid** zullen de specifieke bepalingen uit de BIO worden opgenomen » | ✅ |
| Relationship to the ISO standards: comparison, not incorporation | Nota van toelichting | « De verplichtingen ten aanzien van de zorgplicht in het Cbb **gaan in grote lijnen niet verder dan** reeds bestaande verplichtingen van genoemde ISO-standaarden en de BIO » | ✅ |

### Correct wording

Neither "a CyFun-style national framework" nor "nothing national". Both extremes are wrong:

- **There is no** catalogue of controls, no assurance levels, no thresholds and no
  certification scheme. Nothing equivalent to CyFun (BE), ZSIS (HR), ReCyF (FR) or
  the misure ACN (IT). On this point the 7 June 2026 section was right.
- **There is** a national elaboration of the measures in law: fifteen articles in
  chapter 4, qualified as a minimum by the explanatory memorandum, plus a chapter on
  the training of directors. Telling a Dutch entity that it only has a general
  best-efforts obligation is false.

### Product implication, revised

The implication "NL must stay on the NIS2 substrate (like PT) [...] It is NOT a native
tree" underestimated the work. There is a national structure on which to align the
assessment: articles 5 to 19 of the Cbb. Lighter than a tree with thresholds, but it
is not a mere layer of citations on top of the NIS2 substrate.

### Scope of the reading

Read: the complete official structure (chapters and article headings) and the full
text of chapter 4, extracted from the Staatsblad PDF `stb-2026-189.pdf`. **Not read
article by article**: chapters 6 to 10 (meldingen, register, authorities, personal
data, final provisions). The facts of the 27 July 2026 section on the incident
deadlines remain those of the Cbw, not of the Cbb.

---

## Reading of chapters 6 to 10 of the Cbb: 2026-07-29

<!-- meta: theme=incident,registration,governance; type=reference,needs-check; date=2026-07-29; surfaces=data,ui,marketing; guard=none -->

Completes the partial reading of the same day, which stopped at chapter 5. Source:
official PDF `stb-2026-189` from the Staatsblad.

### Verified facts

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| ⚠️ **The significant-incident criteria ARE NOT in the decree** | art. 23 Cbb | « kunnen de criteria worden vastgesteld **bij regeling van Onze Minister die het aangaat** [...] waarbij onderscheid kan worden gemaakt tussen sectoren, subsectoren, soorten entiteiten en entiteiten »; possibility of setting them **by individual decision** for a given entity | ✅ |
| Exception: digital infrastructure | art. 23 lid 2 Cbb | reference to the implementing acts adopted under art. 23(11) of the directive → Implementing Regulation (EU) 2024/2690 | ✅ |
| Early warning: 4 NL fields on top of the legal base | art. 24 Cbb | a. « het **vermoedelijke tijdstip van de aanvang** » · b. nature + perceptible consequences (if possible) · c. « een **prognose van de hersteltijd** » (if possible) · d. measures taken or planned (if possible) | ✅ |
| Filing via a single ministerial reporting point | art. 25 Cbb | « wordt gedaan bij een hiervoor door Onze Minister ingericht **meldpunt** » | ✅ |
| Register: self-classification + KvK number | art. 27 Cbb | a. « de vermelding of zij de registratie doet als **essentiële entiteit, belangrijke entiteit of entiteit die domeinnaamregistratiediensten verleent** » · b. « het nummer, bedoeld in **artikel 9, onderdeel a, van de Handelsregisterwet 2007** », or foreign equivalent | ✅ |
| ⚠️ **The competent authorities are NOT designated by the decree** | art. 28 Cbb | « **kunnen** de autoriteiten, bedoeld in artikel 51, tweede lid, onderdeel i, van de wet, **worden aangewezen** » by ministerial order | ✅ |
| Retention of personal data: 60 months | art. 29 Cbb | « doch uiterlijk binnen **60 maanden** na de eerste verwerking verwijderd »; register: 60 months after the last confirmation of accuracy | ✅ |
| Financial entities: double reporting DORA + CSIRT | art. 30 Cbb | the notification under art. 19 of the DORA Regulation is made « **tevens** bij het [...] aangewezen CSIRT voor de sectoren bankwezen en infrastructuur voor de financiële markt » | ✅ |
| The Drinkwaterbesluit is amended | art. 33 Cbb | art. 15 becomes « Toezicht door de eigenaar en **risicobeoordeling en risicobeheer** van het watervoorzieningssysteem » | ✅ |
| Repeal of the NIS1 decree | art. 34 Cbb | « Het **Besluit beveiliging netwerk- en informatiesystemen wordt ingetrokken**. » | ✅ |

### The two open questions REMAIN open after reading the decree

The 2026-06-07 section listed "confirm the full list of RDI-supervised sectors" as
still to pin, "now readable in the Cyberbeveiligingsbesluit". **That is false: the Cbb
does not designate them**, it empowers a ministerial order to do so (art. 28).

Likewise, the significant-incident threshold, the datum that starts the 24 h clock and
would feed the product directly, **does not yet exist in Dutch law** for most sectors.
On 15 August 2026, the obligation to notify enters into force without the threshold
being published, except for digital infrastructure.

**Product consequence**: do not encode an NL incident threshold or NL authority routing
until the ministerial orders have been published. Both entries remain `needs-check`, and
that is the reason this section carries that type despite the verified facts next to them.

---

## CORRECTION 2026-07-30: the competent authorities ARE designated, by art. 15 Cbw

<!-- meta: theme=statute,governance; type=reference,law-misread; date=2026-07-30; surfaces=data,ui,marketing; guard=none -->

The 2026-07-29 section concludes that "the competent authorities are NOT designated
by the decree" on the ground that art. 28 Cbb empowers a ministerial order to do so.
**That is false, and the claim was published the same day on eight surfaces**, including
production pages. Cause: the Staatsblad PDF had lost the tables at extraction, so
the art. 15 table was invisible. The **official XML** (`stb-2026-187.xml`, 317 KB
versus 226 KB for the PDF) contains them.

Art. 28 Cbb concerns the authorities of art. **51, tweede lid, onderdeel i**, which
is a narrow subset. It says nothing about the general regime.

### Verified fact: art. 15 Cbw, verbatim

« De bevoegde autoriteit is voor de entiteiten in de sectoren en subsectoren,
genoemd in bijlage 1 en bijlage 2 van deze wet: »

| Bevoegde autoriteit | Sector (subsector) |
|---|---|
| Minister van **Binnenlandse Zaken en Koninkrijksrelaties** | overheid — centrale overheden ; decentrale overheden, **uitgezonderd de waterschappen** |
| Minister van **Economische Zaken** | digitale infrastructuur · beheer van ICT-diensten (B2B) · ruimtevaart · post- en koeriersdiensten · vervaardiging (informaticaproducten en elektronische/optische producten ; elektrische apparatuur ; machines n.e.g. ; motorvoertuigen, aanhangers en opleggers ; andere transportmiddelen) · digitale aanbieders |
| Minister van **Financiën** | bankwezen · infrastructuur voor de financiële markt |
| Minister van **Infrastructuur en Waterstaat** | vervoer (lucht, spoor, water, weg) · drinkwater · afvalwater · afvalstoffenbeheer · vervaardiging, productie en distributie van chemische stoffen · overheid — decentrale overheden **alleen voor de waterschappen** |
| Minister van **Klimaat en Groene Groei** | energie (elektriciteit, stadsverwarming en -koeling, aardolie, aardgas, waterstof) |
| Minister van **Landbouw, Visserij, Voedselzekerheid en Natuur** | productie, verwerking en distributie van levensmiddelen |
| Minister van **Volksgezondheid, Welzijn en Sport** | gezondheidszorg · vervaardiging van medische hulpmiddelen en medische hulpmiddelen voor in-vitrodiagnostiek |

- **art. 15 lid 2**: the Minister of Economic Affairs is the competent authority for
  the entities that provide domain name registration services.
- **art. 15 lid 3**: the Minister of Education, Culture and Science is the competent
  authority for the higher education institutions designated under art. 11.

### Consequence: « overheid » is a sector, and public-admin is unblocked

The table names an **overheid** sector with the sub-sectors *centrale
overheden* and *decentrale overheden*, and it splits the latter: the
**waterschappen** fall under Infrastructuur en Waterstaat, everything else under BZK.
The absence note of `public-admin.ts` invoked art. 28 Cbb and the absence of
annexes; both grounds fall away. What remains to be found is the Dutch **signatory
roles**, which appear nowhere in the act.

### The RDI does NOT appear in this table

The 2026-06-07 section said, based on an RDI FAQ, that the RDI "supervises a set
of sectors". The art. 15 table does not name it: it designates ministers only. The
RDI most likely acts **under** a minister (Economische Zaken for digital
infrastructure), but that link has not been read. **Do not write "your supervisor
is the RDI" without having verified it.**

### Method lesson, to remember

The Staatsblad PDF **loses the tables**. Two false claims came out of it on
29 July 2026: "no readable sector list" and "no authority designated". For any
Dutch text, **read the XML** (`.xml` on zoek.officielebekendmakingen.nl), not
the PDF.

---

## 2026-07-30: who signs for a Dutch public entity (last `public-admin` blocker)

<!-- meta: theme=governance,scoping,registration; type=reference,wrong-citation; date=2026-07-30; surfaces=data,ui,doc-gen; guard=packages/regulatory-data/test/country-configs-public-admin.test.ts -->

`public-admin.ts` kept NL absent for **one** remaining reason: `signatoryRoles`.
The module comment said, rightly, that a guessed signatory role would be
worse than nothing: "a wrong signatory role is a document a public body
files with the wrong person's name on it".

This was not an unknown: the three Dutch organic acts each name explicitly, in a
dedicated article, the person who represents the local authority **in en buiten
rechte**. They had to be read.

### Source

Official consolidated text, `wetten.overheid.nl` (Basis Wetten Bestand, official
publication of the Dutch government). Retrieved on **2026-07-30**.

Method note: `WebFetch` **truncates** these pages (they weigh 1.9 to 2.8 MB) and
returns « artikel niet gevonden » although the article is indeed there. The form
`curl -sSL "https://wetten.overheid.nl/jci1.3:c:<BWBR>&artikel=<n>"` followed by
local extraction works. The 404 on `/0/xml` does not mean absent: it is the
wrong URL form. Same family of error as the Staatsblad PDF/XML above.

### Verified facts (verbatim)

| fact | article | verbatim | status |
|---|---|---|---|
| The mayor represents the municipality | Gemeentewet art. 171 lid 1 (BWBR0005416) | « De burgemeester vertegenwoordigt de gemeente in en buiten rechte. » | verified |
| …and may delegate that representation | Gemeentewet art. 171 lid 2 | « De burgemeester kan de in het eerste lid bedoelde vertegenwoordiging opdragen aan een door hem aan te wijzen persoon. » | verified |
| The King's Commissioner represents the province | Provinciewet art. 176 lid 1 (BWBR0005645) | « De commissaris vertegenwoordigt de provincie in en buiten rechte. » | verified |
| …and may delegate | Provinciewet art. 176 lid 2 | « De commissaris kan de in het eerste lid bedoelde vertegenwoordiging opdragen aan een door hem aan te wijzen persoon. » | verified |
| The chair represents the waterschap; delegation requires the consent of the executive board | Waterschapswet art. 95 (BWBR0005108) | « De voorzitter vertegenwoordigt het waterschap in en buiten rechte. Indien de voorzitter aan een ander machtiging verleent tot vertegenwoordiging, behoeft deze machtiging de instemming van het dagelijks bestuur. » | verified |
| The chair **signs** all documents issued by the two bodies | Waterschapswet art. 94 lid 4 | « Hij ondertekent alle stukken welke van het algemeen en het dagelijks bestuur uitgaan. » | verified |
| The legal title is `voorzitter`, **not** `dijkgraaf` | Waterschapswet, full text | 0 occurrences of « dijkgraaf » / « watergraaf » in BWBR0005108 | verified (negative) |

Art. 94 lid 4 is the most useful of the seven: it is a **signature** clause,
not merely a representation clause. It is exactly the field this module fills.

### Audit chamber: mandatory at all three tiers

| fact | article | verbatim | status |
|---|---|---|---|
| Municipal audit chamber mandatory | Gemeentewet art. 81a | « De raad stelt een rekenkamer in. » | verified |
| Provincial audit chamber mandatory | Provinciewet art. 79a | « Provinciale staten stellen een rekenkamer in. » | verified |
| Waterschap audit chamber mandatory | Waterschapswet art. 51aa | « Het algemeen bestuur stelt een rekenkamer in. » | verified |
| Preventive financial supervision of the province over the municipality | Gemeentewet art. 203 lid 1 | the budget « behoeven de goedkeuring van gedeputeerde staten » when it is not structurally balanced | verified |
| The national Court of Audit audits **only** the State | Grondwet art. 76 (BWBR0001840) | « De Algemene Rekenkamer is belast met het onderzoek van de ontvangsten en uitgaven van het Rijk. » | verified |

⚠️ Consequence not to miss: the **Algemene Rekenkamer does not audit** the
municipalities, provinces and waterschappen. Its constitutional mandate stops at the
Rijk. Writing "your supreme auditor is the Algemene Rekenkamer" to a Dutch
municipality would be false. For local authorities, the body is the local
`rekenkamer`, plus the province's toezicht interbestuurlijk (art. 203).

Drift note: the provincial article was art. 79p in our implicit notes; it is
**[Vervallen per 01-01-2023]**. The live one is **79a**.

### Identifier: the KvK also covers the ministries

| fact | article | verbatim | status |
|---|---|---|---|
| Legal persons governed by public law are entered in the handelsregister; in place of the State, it is the **ministries** and their designated departments that are entered | Handelsregisterwet 2007 art. 6 lid 1 onder c (BWBR0021777) | « een publiekrechtelijke rechtspersoon, met dien verstande dat in plaats van de Staat de ministeries, bedoeld in artikel 2.1, eerste lid, van de Comptabiliteitswet 2016 en de dienstonderdelen van een ministerie die overeenkomstig artikel 2.20 van de Comptabiliteitswet 2016 zijn aangewezen worden ingeschreven. » | verified |

A useful and non-obvious coincidence: the unit of registration in the register
(ministry + designated `dienstonderdeel`) is **exactly** the unit of scope
adopted by art. 8 lid 1 onder g Cbw (« de ministeries, met inbegrip van de
daartoe behorende dienstonderdelen »). The KvK-nummer therefore identifies a
Dutch public entity in scope without ambiguity, at every tier.
This is consistent with `org-identifiers.ts` (NL → KvK, then BTW).

### The MANAGEMENT BODY is named by the Cbw itself: art. 24 lid 12

This section first concluded that the central tier (ministries, `dienstonderdelen`,
ZBO) remained unverifiable, for lack of an equivalent of art. 171 Gemeentewet for
the State. **False, and for a reason that should have been obvious**: it is not
in the organic acts that one has to look, it is in the Cbw. **Art. 24
(governance)** lists, tier by tier, what counts as « het bestuur ».

It is the same trap as the PDF/XML: looking for the answer in the wrong source.

Verbatim, art. 24 lid 12 Cbw (Stb. 2026, 187):

> 12. Indien de essentiële entiteit een overheidsinstantie is, wordt voor de
> toepassing van dit artikel als het bestuur aangemerkt: a. bij ministeries: de
> minister; b. bij zelfstandige bestuursorganen van de centrale overheid: het
> zelfstandige bestuursorgaan; c. bij provincies: gedeputeerde staten; d. bij
> gemeenten: het college van burgemeester en wethouders; e. bij waterschappen:
> het dagelijks bestuur; f. bij gemeenschappelijke regelingen: het dagelijks
> bestuur van het openbaar lichaam, het bestuur van de bedrijfsvoerings-
> organisatie onderscheidenlijk het gemeenschappelijk orgaan.

⚠️ **Article number**: it is art. **24**, not art. 21. Lid 13 says
« indien artikel 21 niet van toepassing is », which rules out being in art. 21.
Verified by going back up to the heading: `Artikel 24 (governance)`. Art. 21 is the
`zorgplicht` (the measures), art. 24 their approval + the competence of the
directors. The published `/nl-nl` pages already cite art. 24 correctly.

### The two roles are DISTINCT: do not confuse them in the product

| | who | source | used for |
|---|---|---|---|
| **management body** (collegiate) | college van B&W / gedeputeerde staten / dagelijks bestuur / de minister / the ZBO | art. 24 lid 12 Cbw | approving the measures (art. 24 lid 1), carrying the competence + the certificate (lid 2-4) |
| **legal representative** (person) | burgemeester / commissaris / voorzitter | Gemeentewet 171, Provinciewet 176, Waterschapswet 95 | **signing** a filing, a notification, correspondence with an authority |

The approval block of a management report falls under art. 24 lid 12.
The signature at the bottom of a filing falls under the organic act. Putting the
college in a "signatory" box would be as wrong as putting the mayor in a
"management body" box.

### Classification: local authorities are ESSENTIAL by operation of law

`Artikel 8 (essentiële entiteit van rechtswege)`: « 1. De volgende entiteiten
zijn essentiële entiteiten: (…) g. de ministeries, met inbegrip van de daartoe
behorende dienstonderdelen (…) en zelfstandige bestuursorganen van de centrale
overheid (…) ; h. provincies, gemeenten en waterschappen, alsmede openbare
lichamen, gemeenschappelijke organen en bedrijfsvoeringsorganisaties als bedoeld
in artikel 8, eerste, tweede, onderscheidenlijk derde lid, van de Wet
gemeenschappelijke regelingen, voor zover deze (…) kwalificeren als
overheidsinstantie ».

Onder g **and** h are in the **same** art. 8 lid 1: municipalities, provinces and
waterschappen are **essential by operation of law**, on the same footing as the
ministries. No size threshold, no `threshold_dependent`. This is a clear difference
from the private regime, and a direct commercial argument: a Dutch municipality of
12 000 inhabitants is an essential entity.

### Competent authority per tier (art. 15 Cbw, verbatim from the table)

| tier | authority |
|---|---|
| centrale overheden | Onze Minister van Binnenlandse Zaken en Koninkrijksrelaties |
| decentrale overheden, **uitgezonderd de waterschappen** | Onze Minister van Binnenlandse Zaken en Koninkrijksrelaties |
| decentrale overheden, **alleen voor wat betreft de waterschappen** | Onze Minister van Infrastructuur en Waterstaat |

A waterschap therefore does **not** have the same supervisor as a municipality. It is
the only Dutch sub-sector split between two ministers.

### Bijlage 1: the list of forms, verbatim

> Overheid — Centrale overheden : – Ministeries met inbegrip van de daartoe
> behorende dienstonderdelen doch met uitzondering van de inlichtingen- en
> veiligheidsdiensten, bedoeld in de Wet op de inlichtingen- en veiligheids-
> diensten 2017 – Zelfstandige bestuursorganen, voor zover zij kwalificeren als
> overheidsinstantie. Decentrale overheden : – Provincies – Gemeenten –
> Waterschappen – Openbare lichamen, gemeenschappelijke organen en
> bedrijfsvoeringsorganisaties als bedoeld in artikel 8, eerste, tweede,
> onderscheidenlijk derde lid, van de Wet gemeenschappelijke regelingen, voor
> zover deze (…) kwalificeren als overheidsinstantie.

The **inter-municipal cooperation bodies (Wgr)** are therefore in scope by name.
Commercially, it is the most interesting line of the six: these are the pooled IT
services between municipalities, the public MSP profile.

Product decision: `PUBLIC_ADMIN_NL` ships **six** `entityTypes`, each backed by a
verbatim citation: gemeente, provincie, waterschap, ministerie, ZBO, Wgr
cooperation. No blocker left.

---

## 2026-07-30: Cbb art. 10, the only RECURRING supplier obligation in the corpus

<!-- meta: theme=supply-chain; type=reference; date=2026-07-30; surfaces=data,ui,i18n; guard=apps/core-api/test/supplier-risk-factor-nl-verification.test.ts -->

`supplier-risk-factors.ts` carried NL with `factors: []` and
`documentationDuty: true`. The second half was right, the first was a
hole: art. 10 of the Cbb (Stb. 2026, 189) imposes something that **no other
transposition in the corpus imposes**.

### Verified facts (verbatim, Stb. 2026, 189)

| fact | article | verbatim | status |
|---|---|---|---|
| Supply chain security policy, written down and demonstrably applied | Cbb art. 10 lid 1 | « De essentiële entiteit of belangrijke entiteit heeft vastgesteld beleid over de beveiliging van de toeleveringsketen. (…) De entiteit legt dat beleid schriftelijk vast en past dat beleid aantoonbaar toe. » | verified |
| **Verification** that the DIRECT suppliers meet the entity's security requirements, and **periodic check** | Cbb art. 10 lid 2 | « De essentiële entiteit of belangrijke entiteit toetst of haar rechtstreekse leveranciers en rechtstreekse dienstverleners, bedoeld in het eerste lid, voldoen aan de beveiligingseisen, bedoeld in artikel 7, vijfde lid. De entiteit controleert dit periodiek. » | verified |

### What it is not

It is **not** a data-exposure obligation. IT (GV.SC-07.R1(b)), PT (GR.CA-7)
and ES (op.ext.4.2) require documenting *what the supplier has access to*.
The Cbb asks for nothing of the kind. Requiring `dataShared` from a Dutch
operator would be inventing an obligation, which is why the field has its own
key (`complianceVerification`) rather than reusing `dataExposure`.

### Two sentences, hence two conditions

Art. 10 lid 2 contains two distinct obligations, and the second is the one
that counts:

1. **toetst**: verify that the direct suppliers meet the entity's art. 7 lid 5
   requirements.
2. **controleert dit periodiek**: do it again. A one-off verification when the
   relationship starts satisfies the first and fails the second.

No interval is set by the decree. Do not invent one: the product records the
cadence chosen by the entity (`suppliers.review_cadence_months`), it does not
prescribe a duration. The `periodic: true` marker on the factor is a boolean for
that precise reason, and not a number of months.

### Where it lands in the product

The supplier register already had the columns: `last_reviewed_at` (the
verification) and `review_cadence_months` (the periodicity, which the reminder
cron already reads). **No migration.** The Dutch duty is satisfied with the
"Mark as reviewed" button plus a non-zero cadence.

⚠️ Trap avoided, worth knowing. The evaluator in `suppliers.routes.ts` returned
`documented: false` for any unknown key, and an undocumented factor imposes
a risk floor of 50. Adding the factor without teaching the key to the
evaluator would have put **all** Dutch suppliers at a risk of 50
permanently, with no field able to lift it. The `switch` now has
an exhaustiveness guard (`const unhandled: never`) that turns that omission into
a compile error.

Deliberate choice: an **overdue** check remains `documented: true`. The question
asked is "is a periodic verification in place", not "is it up to date"; the
reminder cron already chases `next_review_due_at`, and flipping that boolean
would punish the same failure twice.

---

## 2026-10-29: the act in force, read again for the Dutch fiche: stages, CSIRTs, register, fines, supervisors

<!-- meta: theme=statute,incident,registration,sanctions,governance,scoping; type=reference,law-misread,status-error,surface-inconsistency,overclaim; date=2026-10-29; surfaces=data,ui,marketing; guard=apps/web/test/country-netherlands-fiche.test.tsx -->

Opened to build the Dutch fiche (`/nl/eu/netherlands`) and to check the English
page (`/en/eu/netherlands`, entry `netherlands` of `apps/web/src/lib/countries-seo.ts`)
against the act. The sections above settle the commencement, the art. 15 table
and the public bodies. They did not carry the incident articles, the CSIRT, the
fines or the supervisors, and their "Still to pin" lists asked for exactly those.

### Sources read (retrieved 2026-10-29)

| Text | Official publication | Read |
|---|---|---|
| Cyberbeveiligingswet | Stb. 2026, 187, official XML `stb-2026-187.xml`; consolidated text BWBR0052872 on wetten.overheid.nl, one version, valid from 2026-08-15 | the whole act, article by article |
| Cyberbeveiligingsbesluit | Stb. 2026, 189, official XML; consolidated text BWBR0052875, one version, valid from 2026-08-15 | arts. 1 to 36, and the explanatory notes on arts. 2, 25 and 27 |
| Cyberbeveiligingsregeling voor de zorg | Stcrt. 2026, 28763 (12 August 2026), amended by Stcrt. 2026, 35238 (22 September 2026); consolidated text BWBR0053034, version valid from 2026-10-06 | the CSIRT article and its explanatory notes |
| Cyberbeveiligingsregeling IenW | Stcrt. 2026, 24093 (3 July 2026) | arts. 3 and 29 |
| Cyberbeveiligingsregeling sector overheid | Stcrt. 2026, 27679 (3 July 2026) | its explanatory note on the CSIRT |
| Designations of supervisors under art. 68 Cbw | Stcrt. 2026, 25628 (EZK), 22079 (KGG), 24155 (IenW), 25479 (LVVN), 27674 (BZK, sector overheid) | in full |
| Samenwerkingsprotocol inzake toezicht Cbw en Wwke | Stcrt. 2026, 29343 | the definitions |
| NCSC pages `registreren`, `meldplicht`, `toezicht-op-de-cyberbeveiligingswet-nis2-hoe-zit-dat`, and the PDF « Doorverwijsboom Cyberbeveiligingswet 2026 » (dated 18-8-2026) | ncsc.nl | in full |

Has the official source moved on since 2026-07-30? The act and the decree have
not: one consolidated version each, valid from 2026-08-15. What moved is the
layer below them: the supervisors were designated, three ministerial
regulations were published, and the health sector got its own CSIRT on
2026-10-06.

### Incident reporting: the articles, the stage names, the clocks

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| Early warning, 24 h from awareness, to both recipients | art. 26 lid 1 Cbw | « een vroegtijdige waarschuwing over het significante incident aan haar CSIRT en haar bevoegde autoriteit. Dit doet zij onverwijld of, indien dat niet mogelijk is, binnen 24 uur nadat zij kennis heeft gekregen van het significante incident. » | verified |
| Notification, 72 h | art. 27 lid 1 Cbw | « binnen 72 uur nadat zij kennis heeft gekregen van het significante incident een melding in bij haar CSIRT en haar bevoegde autoriteit » | verified |
| Trust services: the notification at 24 h | art. 27 lid 2 Cbw | « die een vertrouwensdienst aanbiedt onverwijld of, indien dat niet mogelijk is, binnen 24 uur nadat zij kennis heeft gekregen van het significante incident een melding van het significante incident in bij haar CSIRT en haar bevoegde autoriteit als dat incident gevolgen heeft voor de verlening van haar vertrouwensdienst » | verified |
| Interim report, on request only | art. 28 Cbw | « op verzoek van haar CSIRT of haar bevoegde autoriteit een tussentijds verslag in over relevante updates van de situatie » | verified |
| Final report, one month after the notification | art. 29 lid 1 Cbw | « uiterlijk één maand na de melding, bedoeld in artikel 27, eerste lid, een eindverslag in bij haar CSIRT en haar bevoegde autoriteit » | verified |
| Incident still running: a progress report, then the final report | art. 29 lid 2 Cbw | « in plaats van een eindverslag een voortgangsverslag in [...] Zij dient een eindverslag in binnen één maand nadat het incident is afgehandeld. » | verified |
| One reporting point for every report | art. 25 Cbb | « De melding, bedoeld in artikel 25, eerste lid, van de wet, wordt gedaan bij een hiervoor door Onze Minister ingericht meldpunt. » | verified |
| That point is MijnNCSC, and one report reaches both recipients | NCSC, meldplicht | « Je meldt via het centrale meldpunt op MijnNCSC. Met één melding bereik je in één keer je sectorale CSIRT en de toezichthouder. » ; « Je melding gaat automatisch naar je sectorale CSIRT en naar de toezichthouder. Je hoeft ze dus niet apart te informeren. » | verified |
| The thresholds are sectoral | NCSC, meldplicht (art. 23 Cbb is the power) | « De drempelwaarden voor een melding verschillen per sector. Deze zijn per departement uitgewerkt in ministeriële regelingen. » | verified |

The stage names are the act's own: **vroegtijdige waarschuwing** (art. 26),
**melding** (art. 27), **eindverslag** (art. 29). The directive's Dutch word for
the second stage, « incidentmelding », is not the Cbw's. The section of
2026-07-27 cited "art. 25 et seq."; the exact articles are 26, 27 and 29, and
art. 25 is the duty itself.

### The CSIRT depends on the sector

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| "Onze Minister" in the act | art. 1 Cbw | « Onze Minister: Onze Minister van Justitie en Veiligheid » | verified |
| The CSIRT is designated by AMvB | art. 16 lid 1 Cbw | « Bij of krachtens algemene maatregel van bestuur wordt het CSIRT aangewezen voor elke essentiële entiteit en belangrijke entiteit. » | verified |
| The default CSIRT is the Minister of J&V | art. 2 lid 1 Cbb | « Onze Minister wordt voor essentiële entiteiten en belangrijke entiteiten aangewezen als het CSIRT, bedoeld in artikel 16, eerste lid, van de wet. » | verified |
| ...whose CSIRT tasks the NCSC performs | Nota van toelichting Cbb, on art. 2 lid 1 | « De taken die de Minister van Justitie en Veiligheid als CSIRT op grond van de Cbw moet verrichten zullen in de praktijk worden uitgevoerd door het NCSC. » | verified |
| A minister may designate another CSIRT by regulation | art. 2 lid 2 Cbb | « kan in afwijking van het eerste lid voor essentiële entiteiten en belangrijke entiteiten uit specifieke sectoren en subsectoren, voor specifieke soorten entiteiten en voor specifieke entiteiten een ander dan Onze Minister worden aangewezen als het CSIRT » | verified |
| Health and medical devices: Z-CERT, since 2026-10-06 | art. 1a.1 Cyberbeveiligingsregeling voor de zorg, inserted by Stcrt. 2026, 35238 | « Stichting Z-CERT is het CSIRT voor de sector Gezondheidszorg en de subsector Vervaardiging van medische hulpmiddelen en medische hulpmiddelen voor in-vitrodiagnostiek. » | verified |
| Waterschappen: CERT-WM, since 2026-08-15 | art. 3 Cyberbeveiligingsregeling IenW; art. 29 brings it into force with the Cbw | « In afwijking van artikel 2, eerste lid, van het besluit wordt als CSIRT voor de waterschappen aangewezen: de dienst CERT-WM die is ondergebracht bij het openbaar lichaam Het Waterschapshuis » | verified |
| Municipalities: no other CSIRT designated, the NCSC serves them until at least the end of 2026 | NCSC, Doorverwijsboom, note ** | « Het NCSC zal de CSIRT-dienstverlening voor gemeenten en gemeenschappelijke regelingen tot in elk geval eind 2026 leveren. Besluitvorming over het beleggen van de CSIRT-taken vanaf begin 2027 loopt momenteel. » | verified |
| Higher education: not settled | NCSC, Doorverwijsboom | row « Onderwijs, Hbo- en wo-instellingen »: « ntb » for the CSIRT and for the supervisor | verified (open) |

Between 2026-08-15 and 2026-10-05 the health sector's CSIRT was still the
Minister of J&V: the regulation of 12 August 2026 says « In afwachting van de
formele overlegprocedure met de Algemene Rekenkamer wordt in deze regeling
Z-CERT nog niet aangewezen als CSIRT ». The explanatory note of the Cbb
announced in July an intention to designate the IBD (VNG Realisatie) for
municipalities and SURFcert for higher education. Neither designation was
found in the Staatscourant on 2026-10-29.

### Registration

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| The register belongs to the Minister of J&V | art. 43 lid 1 Cbw | « beheert Onze Minister een nationaal register van essentiële entiteiten, belangrijke entiteiten en entiteiten die domeinnaamregistratiediensten verlenen » | verified |
| Changes within two weeks | art. 44 lid 2 Cbw | « melden Onze Minister onverwijld of in elk geval binnen twee weken na de datum van de wijziging, elke wijziging van de informatie » | verified |
| The NCSC keeps it on the Minister's behalf | Nota van toelichting Cbb | « zich dienen te registreren bij het NCSC die namens de Minister van Justitie en Veiligheid het nationale register zal beheren » | verified |
| Where and how | NCSC, registreren | « Registreer je dan in het nationaal entiteitenregister op MijnNCSC. » ; « Voor eHerkenning heb je betrouwbaarheidsniveau EH2+ nodig » ; login with eHerkenning or Single Sign On Rijk | verified |
| From when | NCSC, registreren | « Op 15 augustus 2026 is de Cyberbeveiligingswet (Cbw) in werking getreden. Vanaf deze datum moeten organisaties die onder de Cbw vallen verplicht geregistreerd zijn op mijn.ncsc.nl. » | verified |
| Public bodies give their Register van Overheidsorganisaties code | art. 27 lid 2 Cbb | « In afwijking van het eerste lid, onderdeel b, verstrekt een overheidsinstantie, indien zij geregistreerd staat in het Register van Overheidsorganisaties, de identificatiecode waarmee zij geregistreerd staat in het Register van Overheidsorganisaties. » | verified |

The act sets no deadline for the first registration: the date above is the
NCSC's reading. Art. 98 (« uiterlijk één maand na de inwerkingtreding van
artikel 43 ») binds the State to set the register up; it is not a period
granted to the entity.

### Who is essential, who is important

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| Essential by operation of law, the private part | art. 8 lid 1, onderdelen a tot en met f, Cbw | « a. gekwalificeerde verleners van vertrouwensdiensten; b. aanbieders van registers voor topleveldomeinnamen; c. DNS-dienstverleners; d. aanbieders van openbare elektronische communicatienetwerken, die in aanmerking komen als middelgrote onderneming [...]; e. aanbieders van openbare elektronische communicatiediensten, die in aanmerking komen als middelgrote onderneming [...]; f. andere entiteiten, genoemd in bijlage 1 van deze wet, die de in artikel 2, eerste lid, van de bijlage bij Aanbeveling 2003/361/EG bedoelde drempel voor middelgrote ondernemingen overschrijden » | verified |
| ...and critical entities | art. 8 lid 1, onderdeel i, Cbw | « kritieke entiteiten als bedoeld in artikel 6, eerste lid, van de Wet weerbaarheid kritieke entiteiten » | verified |
| The sectors of bijlage 1 | Cbw, bijlage 1 (table « Sector / Subsector / Soort entiteit ») | Energie; Vervoer; Bankwezen; Infrastructuur voor de financiële markt; Gezondheidszorg; Drinkwater; Afvalwater; Digitale infrastructuur; Beheer van ICT-diensten (business-to-business); Overheid; Ruimtevaart | verified |
| The sectors of bijlage 2 | Cbw, bijlage 2 | Post- en koeriersdiensten; Afvalstoffenbeheer; Vervaardiging, productie en distributie van chemische stoffen; Productie, verwerking en distributie van levensmiddelen; Vervaardiging; Digitale aanbieders; Onderzoek | verified |
| Energy, electricity: grid operators and suppliers | Cbw, bijlage 1, Energie, Elektriciteit | « Elektriciteitsbedrijven als bedoeld in artikel 2, onderdeel 57, van Richtlijn (EU) 2019/944, die de functie verrichten van «levering» [...] » ; « Distributiesysteembeheerders [...] » ; « Transmissiesysteembeheerders [...] » | verified |
| Transport over water: the entity types | Cbw, bijlage 1, Vervoer, Water | « Bedrijven voor vervoer over water (binnenvaart, kust- en zeevervoer) van passagiers en vracht [...] » ; « Beheerders van havens [...] » ; « Exploitanten van verkeersbegeleidingssystemen (VBS) [...] » | verified |
| Digital infrastructure: the entity types | Cbw, bijlage 1, Digitale infrastructuur | « Aanbieders van internetknooppunten », « DNS-dienstverleners », « Register voor topleveldomeinnamen », « Aanbieders van cloudcomputingdiensten », « Aanbieders van datacentrumdiensten », « Aanbieders van netwerken voor de levering van inhoud », « Verleners van vertrouwensdiensten », « Aanbieders van openbare elektronische communicatienetwerken », « Aanbieders van openbare elektronische communicatiediensten » | verified |
| Important by operation of law | art. 12 lid 1 Cbw | « a. entiteiten, genoemd in bijlage 1 van deze wet, niet zijnde een essentiële entiteit, die in aanmerking komen als middelgrote onderneming [...]; b. entiteiten, genoemd in bijlage 2 van deze wet, niet zijnde een essentiële entiteit, die in aanmerking komen als middelgrote onderneming [...] of de in het eerste lid van laatstgenoemd artikel vastgestelde drempels voor middelgrote ondernemingen overschrijden »; c. and d. providers of public electronic communications networks and services, and e. trust service providers, « die in aanmerking komen als kleine of micro-onderneming » | verified |
| Designation | arts. 9, 10, 11 and 13 Cbw | essential on criteria, a former operator of an essential service, a higher-education institution: each « bij regeling of besluit » of the minister concerned | verified |
| Higher education: the duty of care starts later | art. 97 Cbw | « Het bepaalde bij of krachtens de artikelen 21 en 24 is van toepassing op de op grond van artikel 11 aangewezen essentiële entiteit en de op grond van artikel 13 aangewezen belangrijke entiteit vanaf 36 maanden na de aanwijzing. » | verified |
| Bodies outside the act | art. 5 lid 1 Cbw | « Deze wet, met uitzondering van artikel 96, is niet van toepassing op: a. het Ministerie van Defensie; b. de inlichtingen- en veiligheidsdiensten [...]; c. het openbaar ministerie; d. de politie; e. de veiligheidsregio’s [...] » | verified |
| The duty of care | art. 21 lid 1 Cbw | « De essentiële entiteit of belangrijke entiteit neemt passende en evenredige technische, operationele en organisatorische maatregelen om de risico’s voor de beveiliging van de netwerk- en informatiesystemen, die zij voor haar werkzaamheden of voor het verlenen van haar diensten gebruikt, te beheersen. »; lid 3 lists the ten measures, onderdelen a to j | verified |
| The minimum the decree imposes | art. 5 Cbb | « Ter uitvoering van artikel 21 van de wet neemt de essentiële entiteit of belangrijke entiteit ten minste de maatregelen, bedoeld in de artikelen 6 tot en met 18. » | verified |
| The digital entities follow the EU implementing act instead | art. 4 Cbb | « Gelet op artikel 1 van de Uitvoeringsverordening (EU) 2024/2690 zijn de artikelen 6 tot en met 18 niet van toepassing op de volgende essentiële entiteiten en belangrijke entiteiten: » DNS-dienstverleners, registers voor topleveldomeinnamen, cloudcomputingdiensten, datacentrumdiensten, netwerken voor de levering van inhoud, beheerde diensten, beheerde beveiligingsdiensten, onlinemarktplaatsen, onlinezoekmachines, platforms voor socialenetwerkdiensten, verleners van vertrouwensdiensten | verified |

Art. 4 Cbb was not in the record. The section of 2026-07-29 read chapter 4 as
the national elaboration for every entity; for the eleven digital categories
of art. 4, the binding catalogue is the Annex of Implementing Regulation (EU)
2024/2690 instead.

### Fines

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| Essential entity | art. 80 lid 3 Cbw | « a. in geval van overtreding van het bepaalde bij of krachtens de artikelen 21, 21a en 25 tot en met 30 [...]: € 10.000.000,– of 2% van de totale wereldwijde jaaromzet in het voorgaande boekjaar van de onderneming waartoe de essentiële entiteit behoort, indien het laatstbedoelde bedrag hoger is; b. in geval van een andere overtreding: € 1.000.000,–. » | verified |
| Important entity | art. 87 lid 3 Cbw | « € 7.000.000,– of 1,4% van de totale wereldwijde jaaromzet in het voorgaande boekjaar van de onderneming waartoe de belangrijke entiteit behoort, indien het laatstbedoelde bedrag hoger is; b. in geval van een andere overtreding: € 1.000.000,–. » | verified |
| Domain-name registration services | art. 91 lid 2 Cbw | « De boete, bedoeld in het eerste lid, bedraagt ten hoogste € 1.000.000,–. » | verified |
| A member of the board, for the training duty | art. 93 Cbw | a fine on « een lid van het bestuur » for breach of art. 24 lid 2 to 6: « De boete, bedoeld in het eerste lid, bedraagt ten hoogste € 25.000,–. » | verified |
| Public bodies: arts. 76 to 78 excluded, not the fines | art. 79 Cbw | « De artikelen 76, 77 en 78 zijn niet van toepassing op overheidsinstanties. » | verified |

### Governance, and the old law

| Fact | Where | Verbatim | Status |
|---|---|---|---|
| The board approves the measures | art. 24 lid 1 Cbw | « De maatregelen, bedoeld in artikel 21, behoeven de goedkeuring van het bestuur van de essentiële entiteit of belangrijke entiteit. » | verified |
| What each board member must be able to do | art. 24 lid 2 Cbw | « beschikt over kennis en vaardigheden om: a. risico’s voor de beveiliging van netwerk- en informatiesystemen te kunnen identificeren; b. risicobeheersmaatregelen op het gebied van cyberbeveiliging te kunnen beoordelen; en c. de gevolgen van de risico’s en risicobeheersmaatregelen voor de diensten die door de entiteit worden verleend te kunnen beoordelen. » | verified |
| Two years for every board member | art. 24 lid 3 Cbw | « Ieder lid van het bestuur van een essentiële entiteit of belangrijke entiteit voldoet binnen twee jaar na de inwerkingtreding van het tweede lid aan het bepaalde in het tweede lid. Indien een lid na de inwerkingtreding van het tweede lid wordt benoemd, voldoet dit lid binnen twee jaar na diens benoeming aan het bepaalde in het tweede lid. » | verified |
| Kept up to date | art. 24 lid 4 Cbw | « Ieder lid van het bestuur van een essentiële entiteit of belangrijke entiteit houdt de kennis en vaardigheden, bedoeld in het tweede lid, aantoonbaar actueel. » | verified |
| A certificate | art. 24 lid 5 Cbw | « bezit ieder lid van het bestuur van een essentiële entiteit of belangrijke entiteit een certificaat, waaruit de deelname blijkt aan een training die de onderwerpen, bedoeld in het tweede lid, behandelt » | verified |
| The Wbni is repealed | art. 106 Cbw | « De Wet beveiliging netwerk- en informatiesystemen wordt ingetrokken. » | verified |
| A report made under the Wbni counts as an early warning | art. 95 lid 2 Cbw | the earlier report « wordt [...] aangemerkt als een vroegtijdige waarschuwing van een significant incident als bedoeld in artikel 26 » | verified |

Art. 35 Cbb brings the whole act into force on 2026-08-15, art. 24 lid 2
included, so the two years of lid 3 end on **2028-08-15**. That date is
computed from two verbatim facts; no official page read states it.

### Supervisors: the RDI and three others, designated under art. 68

Art. 68 lid 1 Cbw: supervision lies with « de bij besluit van de bevoegde
autoriteit aangewezen ambtenaren ». The designations, from the Staatscourant:

| Competent authority (art. 15 Cbw) | Supervisor designated | Source |
|---|---|---|
| Economische Zaken (the decision is signed « Economische Zaken en Klimaat ») | « de ambtenaren met de functiebenamingen inspecteur, senior inspecteur, coördinerend/specialistisch inspecteur en inspecteur/medewerker toezicht van de Rijksinspectie Digitale Infrastructuur » | Stcrt. 2026, 25628, art. 1 |
| Klimaat en Groene Groei (energy) | the same RDI officials | Stcrt. 2026, 22079, art. 1 |
| Binnenlandse Zaken en Koninkrijksrelaties, sector overheid « met uitzondering van de waterschappen » | the same RDI officials, with a mandate to enforce | Stcrt. 2026, 27674, arts. 2 and 3 |
| Infrastructuur en Waterstaat, the waterschappen included | « De ambtenaren van de Inspectie Leefomgeving en Transport »; for bottled drinking water, the NVWA | Stcrt. 2026, 24155, arts. 1 and 2 |
| Landbouw, Visserij, Voedselzekerheid en Natuur (food) | « de ambtenaren van de Nederlandse Voedsel- en Warenautoriteit » | Stcrt. 2026, 25479, art. 1 |
| Volksgezondheid (health) | « Met het toezicht op de naleving van deze regeling worden ambtenaren van de IGJ belast. » | Cyberbeveiligingsregeling voor de zorg, explanatory note, section 5 |

The protocol between the supervisors names the four together: « Cbw-toezichthouder:
ambtenaren van de IGJ, ILT, NVWA en RDI, die op grond van artikel 68 van de Cbw
door een in artikel 15 van de Cbw genoemde minister, zijn belast met het
toezicht » (Stcrt. 2026, 29343, art. 1, onder e). For banking and the financial
market infrastructure, the NCSC's referral tree names DNB and the AFM, with the
note « Voor organisaties in de sectoren bankwezen en infrastructuur financiële
markt gelden al Europese regels voor digitale operationele weerbaarheid
(verordening DORA). DNB en AFM houden hierop toezicht. »

The warning of 2026-07-30 (« Do not write "your supervisor is the RDI" without
having verified it ») is now answered. The RDI supervises for the sectors of
Economische Zaken, Klimaat en Groene Groei and BZK (the waterschappen
excepted); it does not supervise transport, water, food, health or finance.
**The minister is the competent authority, the inspectorate is the supervisor,
and the NCSC is neither**: it is the CSIRT of most sectors and the registration
and reporting point.

### What the English page said

`countries-seo.ts`, entry `netherlands`, as found on 2026-10-29:

| Said | Contradicted by | Type |
|---|---|---|
| competent authority « Nationaal Cyber Security Centrum (NCSC-NL) », in the card, three FAQ answers, a key fact and the enforcement note | art. 15 Cbw (a minister per sector); the NCSC is the CSIRT and keeps the register (art. 2 Cbb and its explanatory note) | law-misread |
| « The NCSC-NL [...] receive all incident notifications » | arts. 26, 27 and 29 Cbw: the CSIRT AND the competent authority; Z-CERT and CERT-WM are CSIRTs too | law-misread |
| key deadline « Set by koninklijk besluit », undated, next to `transpositionDate: "2026-08-15"` | art. 35 Cbb | surface-inconsistency |
| « is transposing », « Implementation has been delayed », « formal enforcement is pending », « once the Dutch law takes effect in Q3 2026 », « ahead of the Cbw entering into force » | in force since 2026-08-15 | status-error |
| « the NCSC-NL's first supervisory priority » | the NCSC supervises nothing (the art. 68 designations above) | law-misread |
| `notificationUrl` and an official source at `https://www.ncsc.nl/melding-doen` | HTTP 404 on 2026-10-29; the reporting page is `/cyberbeveiligingswet-nis2/meldplicht` | surface-inconsistency |
| « A 300-employee logistics operator at the Port of Rotterdam: Likely in scope » | bijlage 1 lists the transport entity types (over water: transport companies, port managing bodies, VTS operators); a logistics business that is none of them does not come into scope through transport | overclaim |

Corrected on 2026-10-29, with the Dutch fiche. The English template also wrote
« registration with {competent authority} » for every substrate country, which
is false for the Netherlands (the NCSC holds the registration); the entry now
names its registration body separately.

### Found while reading, not corrected here

- `packages/regulatory-data/src/countries.ts`, entry NL: `transpositionStatus: "in_progress"`,
  the NCSC as competent authority, « Entities must register with the relevant
  sector-specific supervisory authority » and « ACM for telecoms, RIVM for
  health ». Each is contradicted above.
- `TRANSPOSITION_REFERENCES_NL.competentAuthority.authorityName` and
  `INCIDENT_REPORTING_NL.primaryCsirt.authorityName`, in `fr`, `it`, `de` and
  `pt`: still say the sector authorities are not designated and cite art. 28
  Cbb, the misreading corrected on 2026-07-30. Only `en` and `nl` were corrected.
- `INCIDENT_REPORTING_NL`: the early warning's basis cites art. 27 (it is
  art. 26); its header comment says the significance threshold does not exist
  yet, while the zorg, IenW and overheid regulations now set sectoral
  thresholds; the sector CSIRTs Z-CERT and CERT-WM are not modelled.
- `apps/ai-service/src/lib/remediation-prompt.ts`: « domain-specific supervisors
  coordinated by RDI ». The designations above give the RDI no coordinating role.
- `org-identifiers.ts` takes the KvK number as the identifier of a Dutch public
  body. For registration, art. 27 lid 2 Cbb asks a body listed in the Register
  van Overheidsorganisaties for that register's code instead.
