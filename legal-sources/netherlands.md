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
