# Greece — legal sources (verified)

> **Status of this note, rewritten 2026-10-29.** When this file was opened on
> 2026-08-06, Greece was not a supported country in the product: no `gr.yaml`,
> no GR country-config, no Greek content in `controls.ts`, and the file was the
> legal groundwork that had to exist first. It was opened after a Greek prospect
> (consultant, evaluating Reglyze for client work) told us the Greek framework
> "diverges from the directive baseline more than a label swap would cover".
> **That reading was right**: see ΚΥΑ 1689/2025 below. Greece has been supported since
> 2026-08-07 (the native framework `epak`, still marked DRAFT, NOT RATIFIED in
> `multi-frame-registry.ts`), with `gr.yaml` since 2026-08-08. The public
> fiches `/en/eu/greece` and `/el/eu/greece` rest on this file; see "Public
> country fiches" at the bottom for which line carries which fact.

> **P0 pass completed 2026-08-06.** All ten instruments on the Authority's own
> legislation index were downloaded from cyber.gov.gr and read. Sections marked
> **P0.x** answer the open items in `docs/plans/gr-country-pack-build.md`.
> Three facts previously recorded here were **superseded** and are corrected
> in place — see "Corrections" at the bottom.

> **Refresh pass 2026-10-29.** The legislation index was read again: two
> circulars of 2026 had been added (both read in full below), plus one older
> law. Articles 3, 4, 10, 16, 26, 31 and 32 of Ν. 5160/2024 were re-read in the
> Authority's PDF for the fiches, together with the Authority's incident page
> and its two report forms. The "Still to pin" list carries the result of the
> check of each open item.

## Ν. 5160/2024 — transposition of NIS2

<!-- meta: theme=statute; type=reference; date=2026-08-06; surfaces=docs; guard=none -->

- **Official citation:** Νόμος 5160/2024, «Ενσωμάτωση της Οδηγίας (ΕΕ) 2022/2555
  … (Οδηγία NIS 2) και άλλες διατάξεις» — ΦΕΚ **Α΄ 195/27.11.2024**, 52 pages.
- **Official URL (National Cybersecurity Authority, cyber.gov.gr):**
  https://cyber.gov.gr/wp-content/uploads/2024/12/ENOTHTA_5_ΝΟΜΟΘΕΣΙΑ_fek_a_195_2024-5160-2024-1.pdf
- **Retrieved + read:** 2026-08-06. Full PDF text extracted with
  `pdftotext -enc UTF-8` (column mode — see the extraction warning at the bottom
  of this file) and read directly. Quotes below are verbatim from that text.

### Verified facts

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **In force since publication = 27.11.2024** | Άρθρο 45 §1 | "Με την επιφύλαξη της παρ. 2 η ισχύς του παρόντος νόμου αρχίζει από τη δημοσίευσή του στην Εφημερίδα της Κυβερνήσεως." | ✅ |
| One sub-point deferred by 1 year (→ 27.11.2025) — **⚠️ SUPERSEDED, now 27.11.2026, see ΚΥΑ 2267/2025** | Άρθρο 45 §2 | "Η ισχύς της υποπερ. στβ) της περ. στ) της παρ. 2 του άρθρου 3 αρχίζει ένα (1) έτος από τη δημοσίευση του παρόντος" | ⚠️ superseded |
| Entity terminology = **βασικές** / **σημαντικές** οντότητες | Άρθρο 4 (title) | "Βασικές και σημαντικές οντότητες (άρθρο 3 …)" | ✅ |
| **Management body must approve the measures within 3 months of entry into force** (→ 27.02.2025). No such deadline in the directive. | Άρθρο 14 §1 | "Τα όργανα διοίκησης των βασικών και σημαντικών οντοτήτων εγκρίνουν, **εντός τριών (3) μηνών από την έναρξη ισχύος του παρόντος**, τα μέτρα διαχείρισης κινδύνων" | ✅ |
| **Training is an obligation extended to employees, at least annually.** Directive art. 20(2) only says entities "shall encourage" it. | Άρθρο 14 §2 | "Τα μέλη των οργάνων διοίκησης … παρακολουθούν εκπαίδευση και **διασφαλίζουν ότι** οι βασικές και σημαντικές οντότητες **παρέχουν όμοια κατάρτιση στους υπαλλήλους τους τουλάχιστον σε ετήσια βάση**" | ✅ |
| Risk-management measures = the directive's ten, α) to ι) | Άρθρο 15 §2 | "περιλαμβάνουν δε τουλάχιστον τα ακόλουθα: α) … ι)" | ✅ |
| Supply-chain measure | Άρθρο 15 §2 δ) | "ασφάλεια της αλυσίδας εφοδιασμού, συμπεριλαμβανομένων των σχετικών με την ασφάλεια πτυχών που αφορούν τις σχέσεις μεταξύ κάθε οντότητας και των άμεσων προμηθευτών ή παρόχων υπηρεσιών της" | ✅ |
| **Cryptography measure adds a national body** not present in the directive | Άρθρο 15 §2 η) | "πολιτικές και διαδικασίες σχετικά με τη χρήση κρυπτογραφίας …, **σε συνεργασία με την εθνική αρχή CRYPTO, όπου απαιτείται**" | ✅ |
| Incident reporting: **24 h early warning** | Άρθρο 16 §4 α) | "εντός είκοσι τεσσάρων (24) ωρών από τη στιγμή που αντιλήφθηκαν το σημαντικό περιστατικό, προειδοποίηση" | ✅ |
| **72 h notification** | Άρθρο 16 §4 β) | "εντός εβδομήντα δύο (72) ωρών …, κοινοποίηση περιστατικού" | ✅ |
| **Final report within 1 month** of the 72 h notification | Άρθρο 16 §4 δ) | "τελική έκθεση το αργότερο εντός ενός (1) μηνός μετά από την υποβολή της κοινοποίησης περιστατικού σύμφωνα με την περ. β)" | ✅ |
| **Two-CSIRT routing** — a national specificity | Άρθρο 16 §1 | "Οι οντότητες της περ. στ) της παρ. 2 του άρθρου 3 κοινοποιούν τα περιστατικά … στην CSIRT της **Εθνικής Υπηρεσίας Πληροφοριών** με ταυτόχρονη ενημέρωση της Εθνικής Αρχής Κυβερνοασφάλειας." | ✅ |
| Art. 19 registry (digital-infrastructure subset), statutory deadline **17.01.2025** — **⚠️ extended to 30.09.2025**, see P0.1 | Άρθρο 19 §1 | "υποβάλλουν υποχρεωτικώς στην Εθνική Αρχή Κυβερνοασφάλειας, **το αργότερο έως τις 17 Ιανουαρίου 2025**" | ⚠️ superseded |
| Changes to registered information: **3 months** — but only for the art. 19 §1 subset; the general rule is **2 weeks** (art. 4 §4) | Άρθρο 19 §2 | "αμελλητί και, σε κάθε περίπτωση, εντός τριών (3) μηνών από την ημερομηνία επέλευσης της μεταβολής" | ✅ |

### ⚠️ Trap avoided — do not reuse the wrong 24 h/72 h

**Άρθρο 10 §6** also contains "εντός είκοσι τεσσάρων (24) ωρών" and "εντός
εβδομήντα δύο (72) ωρών". Those are the reporting duties of the *special
response teams* (ειδικές ομάδες απόκρισης) made up of Authority / General Staff /
Intelligence Service representatives — **not** the entity's duty. The entity
deadlines are Άρθρο 16 §4. Quoting art. 10 §6 as an entity obligation would be
the exact class of error that produced the Cbb/Cbw mix-up in the Netherlands.

### P0.2 — Άρθρο 4: who is βασική, who is σημαντική

**Greece does not restate the 50/250 numbers.** It incorporates Commission
Recommendation 2003/361/EC by reference. Any scoping logic must implement that
Recommendation — including its **linked / partner enterprise aggregation**,
which is why the registration form asks for linked and partner undertakings.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **βασικές** = Annex I entities **exceeding the medium-enterprise ceilings** of Rec. 2003/361/EC art. 2 §1 | Άρθρο 4 §1 α) | "οντότητες στους τομείς και υποτομείς που αναφέρονται στο Παράρτημα Ι, οι οποίες **υπερβαίνουν τα ανώτατα όρια για τις μεσαίες επιχειρήσεις** που προβλέπονται στην παρ. 1 του άρθρου 2 του Παραρτήματος της Σύστασης 2003/361/ΕΚ" | ✅ |
| Trust-service providers, TLD registries and DNS providers are βασικές **regardless of size** | Άρθρο 4 §1 β) | "εγκεκριμένοι πάροχοι υπηρεσιών εμπιστοσύνης και μητρώα ονομάτων τομέα ανωτάτου επιπέδου, καθώς και πάροχοι υπηρεσιών συστήματος ονομάτων τομέα (Domain Name System), **ανεξάρτητα από το μέγεθός τους**" | ✅ |
| Public electronic-communications providers are βασικές when they are **medium** enterprises | Άρθρο 4 §1 γ) | "πάροχοι δημόσιων δικτύων ηλεκτρονικών επικοινωνιών … που **χαρακτηρίζονται ως μεσαίες επιχειρήσεις**, δυνάμει της παρ. 1 του άρθρου 2 του Παραρτήματος της Σύστασης 2003/361/ΕΚ" | ✅ |
| **σημαντικές = residual category**: Annex I or II entities that are not βασικές | Άρθρο 4 §2 | "οι οντότητες των τομέων και υποτομέων που αναφέρονται στα Παραρτήματα Ι ή ΙΙ, οι οποίες **δεν θεωρούνται βασικές οντότητες σύμφωνα με την παρ. 1, θεωρούνται σημαντικές οντότητες**" | ✅ |
| Public sector in scope = central government, **1st-tier** and **2nd-tier** local authorities | Άρθρο 3 §2 στ) | "στ) η οντότητα είναι: **στα)** φορέας της κεντρικής κυβέρνησης …, **στβ)** Οργανισμός Τοπικής Αυτοδιοίκησης α' βαθμού, **στγ)** Οργανισμός Τοπικής Αυτοδιοίκησης β' βαθμού." | ✅ |
| Changes to registered data: **2 weeks** (general rule) | Άρθρο 4 §4 | "αμελλητί και σε κάθε περίπτωση **εντός δύο (2) εβδομάδων** από την ημερομηνία επέλευσης της μεταβολής, με την επιφύλαξη της παρ. 2 του άρθρου 19" | ✅ |

### P0.3 — sanctions are in Άρθρο 26, **not** Άρθρο 27

⚠️ **The build plan said "Άρθρο 27 sanctions". That is wrong.** Άρθρο 27
(«Παραβάσεις που συνεπάγονται παραβίαση δεδομένων προσωπικού χαρακτήρα»,
directive art. 35) is the GDPR-overlap / no-double-fine provision. The fines are
in **Άρθρο 26** («Γενικοί όροι για την επιβολή διοικητικών προστίμων … - Κυρώσεις»,
directive arts 34 and 36).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **βασικές**: breach of arts 15 or 16 → **max €10,000,000 or 2 % of worldwide annual turnover, whichever is higher** | Άρθρο 26 §4 | "επιβάλλεται στις βασικές οντότητες πρόστιμο ύψους κατ' ανώτατο όριο **δέκα εκατομμυρίων (10.000.000) ευρώ** ή κατ' ανώτατο όριο **δύο τοις εκατό (2%)** του κατά το προηγούμενο οικονομικό έτος συνολικού παγκόσμιου ετήσιου κύκλου εργασιών … ανάλογα με το ποιο είναι υψηλότερο." | ✅ |
| **σημαντικές**: → **max €7,000,000 or 1.4 %**, whichever is higher | Άρθρο 26 §5 | "επιβάλλεται στις σημαντικές οντότητες πρόστιμο ύψους κατ' ανώτατο όριο **επτά εκατομμυρίων (7.000.000) ευρώ** ή κατ' ανώτατο όριο **ένα κόμμα τέσσερα τοις εκατό (1,4%)** …" | ✅ |
| **Public-sector entities have a fine FLOOR** — €20,000 minimum, €500,000 maximum. No directive equivalent. | Άρθρο 26 §8 | "επιβάλλονται διοικητικά πρόστιμα στις οντότητες της περ. στ) της παρ. 2 του άρθρου 3 … Τα πρόστιμα αυτά **δεν μπορεί να είναι κατώτερα των είκοσι χιλιάδων (20.000) ευρώ και ανώτερα των πεντακοσίων χιλιάδων (500.000) ευρώ**." | ✅ |
| **A national per-obligation tariff** — this has no directive counterpart at all | Άρθρο 26 §9 | α) art. 14 §1 → "**διακοσίων χιλιάδων (200.000)**"; β) art. 14 §2 → "**εκατό χιλιάδων (100.000)**"; γ) art. 19 → "**διακοσίων χιλιάδων (200.000)**"; δ) art. 20 → "**οκτακοσίων χιλιάδων (800.000)**"; ε) art. 21 §3 → "**εκατό χιλιάδων (100.000)**"; στ) art. 24 §§2,4 → "**πεντακοσίων χιλιάδων (500.000)**"; ζ) art. 25 §2 → "**τριακοσίων πενήντα (350.000)**"; η) art. 15 §6 → "**τριακοσίων χιλιάδων (300.000)**" | ✅ |
| Fines are decided by the **Administrator** of the Authority after a hearing, and are **published on the Authority's website** | Άρθρο 26 §§2-3 | "με ειδικώς αιτιολογημένη απόφαση του Διοικητή … αφού προηγηθεί ακρόασή τους"; "αναρτώνται, αμελλητί, στον επίσημο ιστότοπο της Εθνικής Αρχής Κυβερνοασφάλειας" | ✅ |

⚠️ **Drafting quirk, quoted as-is, do not "fix" it:** Άρθρο 26 §4 governs
**βασικές** entities but its turnover clause says "…της επιχείρησης στην οποία
ανήκει η **σημαντική** οντότητα". The same wording appears in §5. This looks
like a copy-paste in the official text. Flag to a Greek lawyer before any
customer-facing fine copy is written; do not silently reword it.

⚠️ **House rule:** fines are recorded here because they are a legal fact. That
does **not** license fine-led marketing copy — see the standing "jamais
d'amendes" rule from the PL campaign.

### P0.4 — Άρθρο 30: the authoritative map of secondary legislation

Άρθρο 30 has **26 paragraphs**, each authorising an instrument. Cross-referencing
it against the Authority's published legislation index (retrieved 2026-08-06)
shows **what exists and what does not**. This is the single most
decision-relevant table in this file.

| §  | Instrument authorised | Found? |
|---|---|---|
| §1 | Postponement of art. 3 §2 στ) στβ) (1st-tier local authorities) | ✅ ΚΥΑ 2267/2025 |
| §3 | Administrator's decision **establishing the catalogue** of entities (due within 4 months of EIF) | ❌ not published |
| §4 | Registration platform, alternative registration routes, **power to extend the deadline**, submission templates | ✅ ΚΥΑ 1381/2025 (+1645, +1990) |
| §5 | National Cybersecurity Strategy under this law (due within 6 months) | ✅ decision of the Minister of Digital Governance Αρ. Πρωτ. 2563/16.12.2025 (ΑΔΑ ΨΜΑΞ46ΜΤΛΠ-Γ4Κ), found on 2026-10-29 on the Authority's strategy page, not on the index. Until then this row said "❌ not published (the index carries only the 2018 and 2020 strategies)": see "Correction made 2026-10-29" |
| §12 | Training decision — duration, trainer qualifications, certification; may make training **mandatory** for named staff | ❌ not published |
| §13 α) | **The national cybersecurity requirements framework** | ✅ ΚΥΑ 1689/2025 |
| §13 β) | Υ.Α.Σ.Π.Ε. qualifications, duties, incompatibilities | ✅ ΥΑ 1899/2025 |
| §14 | **The standardised template for the ενιαία πολιτική κυβερνοασφάλειας** | ❌ **not published** |
| §15 | Rules for preparing / evaluating / approving that policy; whether σημαντικές must file it; asset-inventory methodology | ❌ **not published** |
| §16 | **Significant-incident thresholds** and the reporting procedure | ❌ not published |
| §20 | **Supervision fee (παράβολο εποπτείας) and audit fee** amounts and procedure (due within 3 months) | ❌ **not published** |
| §21 | Certified inspectors and technical experts (SMEs) | ❌ not published |
| §22 | **Κανονισμός Ελέγχου και Εποπτείας** — the Audit & Supervision Regulation (due within 3 months) | ❌ not published |
| §23 | **Procedure for imposing the art. 26 fines** | ❌ **not published** |

**What this means.** The *obligations* are live and dated. The **enforcement and
filing machinery is not**: no audit regulation, no fine procedure, no incident
thresholds, no supervision fee, no certified inspectors, and — critically for us
— **no published template for the annual policy filing**.

⚠️ Absence from the Authority's index is **not proof of non-existence**; some of
these may exist as internal decisions not posted there. Treat every ❌ as
**needs-check**, not as a finding of fact. This is a good question for a
Greek-speaking reviewer.

**Re-checked 2026-10-29**, against the index and against the list of files the
Authority's site has published (its WordPress media library, read through
`https://cyber.gov.gr/wp-json/wp/v2/media`: the API announced 884 entries and
returned 880). Every ❌ above is still absent from both, with one exception
that the 2026-08-06 pass missed because it read the index only: the §5
strategy, approved on 16.12.2025 and published on the Authority's strategy
page. The index added two circulars and one older law (see "Instrument
register"); none of them is an instrument of art. 30. The ΦΕΚ search (et.gr)
and Diavgeia were not searched systematically, so every remaining ❌ stays
needs-check. The detail per item is in "Still to pin".

### Άρθρο 15 §5 — the two national obligations with no directive equivalent

This is the highest-value product finding in the whole pass.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Every βασική and σημαντική entity **must appoint a Υ.Α.Σ.Π.Ε.**, an executive **of its own**, who handles **all** contact with the Authority | Άρθρο 15 §5 α) | "Ορίζουν **ένα αρμόδιο στέλεχός τους** …, ως Υπεύθυνο Ασφάλειας Συστημάτων Πληροφορικής και Επικοινωνιών (Υ.Α.Σ.Π.Ε.), ο οποίος αναλαμβάνει: αα) τη **διαχείριση πάσης φύσεως επικοινωνιών και επαφών** με την Εθνική Αρχή Κυβερνοασφάλειας" | ✅ |
| The Υ.Α.Σ.Π.Ε. role is **incompatible with the DPO** | Άρθρο 15 §5 α) | "Τα καθήκοντα του Υ.Α.Σ.Π.Ε. είναι **ασυμβίβαστα** με αυτά του Υπευθύνου Προστασίας Δεδομένων (Υ.Π.Δ.) του άρθρου 37 του Κανονισμού (ΕΕ) 2016/679" | ✅ |
| **A "ενιαία πολιτική κυβερνοασφάλειας" must be filed with the Authority for approval, AT LEAST ANNUALLY, by βασικές entities** — per a standard template that does not yet exist (art. 30 §14) | Άρθρο 15 §5 β) | "Τηρούν **ενιαία πολιτική κυβερνοασφάλειας**, σύμφωνα με το προτυποποιημένο υπόδειγμα της παρ. 14 του άρθρου 30 … Η ενιαία πολιτική κυβερνοασφάλειας **υποβάλλεται προς έγκριση** αναφορικά με την πληρότητά της **από τις βασικές οντότητες στην Εθνική Αρχή Κυβερνοασφάλειας, τουλάχιστον ετησίως**." | ✅ |
| Filing by **σημαντικές** may be made mandatory later | Άρθρο 15 §5 β) | "Η υποβολή της ενιαίας πολιτικής κυβερνοασφάλειας από τις σημαντικές οντότητες **δύναται να είναι υποχρεωτική** με απόφαση της παρ. 15 του άρθρου 30." | ✅ |
| **Paying the supervision fee is a precondition for the filing being examined** | Άρθρο 15 §5 β) | "**Προϋπόθεση εξέτασης** της ενιαίας πολιτικής αποτελεί η **καταβολή του παραβόλου εποπτείας** της παρ. 1 του άρθρου 23." | ✅ |
| Entities must keep a prioritised inventory of tangible and intangible ICT assets | Άρθρο 15 §5 γ) | "Tηρούν συνολική καταγραφή των υλικών και άυλων πληροφοριακών και επικοινωνιακών αγαθών, τα οποία **ιεραρχούνται βάσει της κρισιμότητάς τους**." | ✅ |
| Public-sector entities are **exempt** from the supervision and audit fees | Άρθρο 23 §1 | "Στις οντότητες που υπάγονται στην εποπτεία …, **εξαιρουμένων των οντοτήτων της περ. στ) της παρ. 2 του άρθρου 3**, επιβάλλονται αναλογικό παράβολο εποπτείας και αναλογικό τέλος ελέγχου" | ✅ |

## Ν. 5160/2024 re-read on 2026-10-29: the scope, the CSIRT, registration, the incident acts, the repeal

<!-- meta: theme=statute,registration,incident; type=reference; date=2026-10-29; surfaces=ui,marketing,docs; guard=apps/web/test/country-greece-fiche.test.tsx -->

The fiches needed five things the 2026-08-06 pass had not quoted in full: the
scope test, which body is the CSIRT, the registration duty itself, all the acts
of art. 16 §4, and what the law repealed. Same file as above, read again on
2026-10-29.

- **File read:** https://cyber.gov.gr/wp-content/uploads/2024/12/ENOTHTA_5_ΝΟΜΟΘΕΣΙΑ_fek_a_195_2024-5160-2024-1.pdf,
  52 pages, sha256 `76dcd319264145e0365f90f8f8dc70da00bab17f060a1fbc796baeeac161f879`.
- **Extraction:** `pdftotext -enc UTF-8` without `-layout` (two-column ΦΕΚ).
  Quotes are the column text joined across line breaks; a hyphen that only
  splits a word at a line end is dropped.

### The CSIRT

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **The Authority itself is the CSIRT** for the entities in scope | Άρθρο 10 §1, first sentence | "Η Εθνική Αρχή Κυβερνοασφάλειας ορίζεται ως αρμόδια ομάδα απόκρισης για συμβάντα που αφορούν στην ασφάλεια υπολογιστών (Computer Security Incident Response Team - CSIRT) για τις οντότητες που εντάσσονται στο πεδίο εφαρμογής του παρόντος μέρους." | The National Cybersecurity Authority is designated as the competent CSIRT for the entities within the scope of this Part. | ✅ |
| For the public-sector bodies of art. 3 §2 στ), the CSIRT is the **Εθνικό CERT of the ΕΥΠ** | Άρθρο 10 §1, second sentence | "Ειδικά για τους οργανισμούς της περ. στ) της παρ. 2 του άρθρου 3, ως αρμόδια ομάδα απόκρισης για συμβάντα που αφορούν στην ασφάλεια υπολογιστών (CSIRT) ορίζεται η Ομάδα Αντιμετώπισης Ηλεκτρονικών Επιθέσεων (Εθνικό CERT) της Διεύθυνσης Κυβερνοχώρου της Εθνικής Υπηρεσίας Πληροφοριών (Ε.Υ.Π.)." | For the bodies of art. 3(2)(f), the competent CSIRT is the Cyber Attack Response Team (National CERT) of the Cyberspace Directorate of the National Intelligence Service. | ✅ |
| **Transition:** until the Administrator declares the Authority's CSIRT adequately resourced, the cyber-defence unit of the General Staff is designated as CSIRT and supports it | Άρθρο 31 §1 | "Μέχρι την έκδοση της διαπιστωτικής πράξης του Διοικητή της Εθνικής Αρχής Κυβερνοασφάλειας για την επάρκεια των μέσων και πόρων της ομάδας απόκρισης για συμβάντα που αφορούν στην ασφάλεια υπολογιστών (CSIRT) της Εθνικής Αρχής Κυβερνοασφάλειας, η αρμόδια για θέματα κυβερνοάμυνας οργανική μονάδα του Γενικού Επιτελείου Εθνικής Άμυνας ορίζεται ως ομάδα απόκρισης για συμβάντα που αφορούν στην ασφάλεια υπολογιστών (CSIRT) και υποστηρίζει την CSIRT της Εθνικής Αρχής Κυβερνοασφάλειας στην εκτέλεση των καθηκόντων της παρ. 1 του άρθρου 10." | Until the Administrator's declaratory act on the adequacy of the means and resources of the Authority's CSIRT, the General Staff unit competent for cyber defence is designated as a CSIRT and supports the Authority's CSIRT. | ✅ (whether that act has been issued: not on the index, not found, needs-check) |

The entity's duty does not move with art. 31 §1: it notifies the Authority's
CSIRT (art. 16 §1, below). The Authority's incident page links an online form
of the "Hellenic Computer Security Incident Response Team" on
`csirt.cd.mil.gr` beside its own e-mail channel (see "The Authority's
incident page" below), which is consistent with that transition; the
product names the Authority's CSIRT and the e-mail channel only.

### The registration duty

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The duty and its statutory window | Άρθρο 4 §3, third sentence | "Για την κατάρτιση του καταλόγου, οι οντότητες που αναφέρονται σε αυτόν υποβάλλουν στην Εθνική Αρχή Κυβερνοασφάλειας, μέσω της ψηφιακής πλατφόρμας ή με κάθε άλλο τρόπο που ορίζεται με την απόφαση της παρ. 4 του άρθρου 30, εντός προθεσμίας δυο (2) μηνών από την έναρξη ισχύος του παρόντος, τις κάτωθι πληροφορίες:" | To draw up the list, the entities on it submit to the Authority, through the digital platform or any other way set by the decision of art. 30(4), within two months of entry into force, the following information: | ✅ |
| What is submitted | Άρθρο 4 §3 α) to ε) | "α) την επωνυμία της οντότητας, β) τη διεύθυνση και τα επικαιροποιημένα στοιχεία επικοινωνίας, συμπεριλαμβανομένων των διευθύνσεων ηλεκτρονικού ταχυδρομείου και των αριθμών τηλεφώνου της οντότητας, του εύρους των διαδικτυακών διευθύνσεων (IP ranges), γ) το σύνολο των ονομάτων χώρου (domain names) που χρησιμοποιεί η οντότητα, δ) κατά περίπτωση, τον σχετικό τομέα, υποτομέα και τύπο οντότητας που αναφέρεται στα Παραρτήματα Ι ή ΙΙ και ε) κατά περίπτωση, κατάλογο των άλλων κρατών μελών της Ευρωπαϊκής Ένωσης, στα οποία παρέχουν υπηρεσίες που εμπίπτουν στο πεδίο εφαρμογής του παρόντος Μέρους." | Name; address and up-to-date contact details including e-mail addresses, telephone numbers and IP ranges; all domain names used; where relevant, sector, subsector and entity type; where relevant, the other Member States where it provides in-scope services. | ✅ |

The window was extended three times, last to 30/09/2025 (ΚΥΑ 1990/2025): see
"P0.1" below. Changes: two weeks (art. 4 §4, quoted in P0.2).

### Scope: Άρθρο 3 §§1 to 4

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **The general test: medium-sized or larger**, by Recommendation 2003/361/EC, established or active in Greece | Άρθρο 3 §1, first sentence | "Το παρόν Μέρος εφαρμόζεται σε δημόσιες ή ιδιωτικές οντότητες των τύπων που αναφέρονται στα Παραρτήματα Ι ή ΙΙ του παρόντος νόμου, οι οποίες χαρακτηρίζονται ως μεσαίες επιχειρήσεις σύμφωνα με την παρ. 1 του άρθρου 2 του Παραρτήματος της Σύστασης 2003/361/ΕΚ της Επιτροπής, της 6ης Μαΐου 2003, σχετικά με τον ορισμό των πολύ μικρών, των μικρών και των μεσαίων επιχειρήσεων (L 124), ή υπερβαίνουν τα ανώτατα όρια για τις μεσαίες επιχειρήσεις που αναφέρονται στο εν λόγω άρθρο και οι οποίες είναι εγκατεστημένες ή παρέχουν τις υπηρεσίες τους ή ασκούν τις δραστηριότητές τους εντός της ελληνικής επικράτειας." | This Part applies to public or private entities of the types in Annexes I or II that qualify as medium-sized enterprises under art. 2(1) of the Annex to Recommendation 2003/361/EC, or exceed its ceilings, and are established, provide their services or carry out their activities in Greece. | ✅ |
| Art. 3(4) of the Recommendation's Annex is set aside | Άρθρο 3 §1, second sentence | "Η παρ. 4 του άρθρου 3 του Παραρτήματος της εν λόγω Σύστασης δεν εφαρμόζεται για τους σκοπούς του παρόντος." | Art. 3(4) of the Annex to that Recommendation does not apply for the purposes of this law. | ✅ |
| **Any size:** e-communications, trust services, TLD registries and DNS | Άρθρο 3 §2 α) | "α) οι υπηρεσίες παρέχονται από: αα) παρόχους δημόσιων δικτύων ηλεκτρονικών επικοινωνιών ή διαθέσιμων στο κοινό υπηρεσιών ηλεκτρονικών επικοινωνιών, αβ) παρόχους υπηρεσιών εμπιστοσύνης, αγ) μητρώα ονομάτων τομέα ανωτάτου επιπέδου και παρόχους υπηρεσιών συστήματος ονομάτων τομέα," | Regardless of size, where the services are provided by public e-communications networks or services, trust service providers, TLD registries and DNS service providers. | ✅ |
| **Any size:** critical entities | Άρθρο 3 §3 | "Το παρόν Μέρος εφαρμόζεται σε οντότητες που χαρακτηρίζονται ως κρίσιμες οντότητες σύμφωνα με την Οδηγία (ΕΕ) 2022/2557 του Ευρωπαϊκού Κοινοβουλίου και του Συμβουλίου, της 14ης Δεκεμβρίου 2022, για την ανθεκτικότητα των κρίσιμων οντοτήτων και την κατάργηση της Οδηγίας 2008/114/ΕΚ του Συμβουλίου (L 333), ανεξάρτητα από το μέγεθός τους." | Critical entities under Directive (EU) 2022/2557, regardless of size. | ✅ |
| **Any size:** domain name registration services | Άρθρο 3 §4 | "Το παρόν Μέρος εφαρμόζεται σε οντότητες που παρέχουν υπηρεσίες καταχώρισης ονομάτων τομέα, ανεξάρτητα από το μέγεθός τους." | Entities providing domain name registration services, regardless of size. | ✅ |

The public sector of art. 3 §2 στ) is quoted in P0.2 above.

### Who is βασική besides the size test

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Central-government bodies are βασικές | Άρθρο 4 §1 δ) | "δ) οντότητες που αναφέρονται στην υποπερ. στα) της περ. στ) της παρ. 2 του άρθρου 3 του παρόντος," | Entities referred to in art. 3(2)(f)(fa) (central government). | ✅ |
| Operators of essential services identified under the NIS1 law before 16.01.2023 are βασικές | Άρθρο 4 §1 ζ) | "ζ) οντότητες που αναγνωρίστηκαν, σύμφωνα με το άρθρο 4 του ν. 4577/2018 (Α’ 199) και το άρθρο 16 της υπ’ αρ. 1027/4.10.2019 απόφασης του Υπουργού Επικρατείας (Β’ 3739), πριν από τις 16 Ιανουαρίου 2023, ως φορείς εκμετάλλευσης βασικών υπηρεσιών." | Entities identified before 16 January 2023 as operators of essential services under art. 4 of Law 4577/2018 and art. 16 of Decision 1027/4.10.2019. | ✅ |

### The incident acts, all of art. 16 §§1, 3 and 4

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **Who receives the notification** | Άρθρο 16 §1, first sentence | "Οι βασικές και σημαντικές οντότητες κοινοποιούν, αμελλητί, στην ομάδα απόκρισης για συμβάντα που αφορούν στην ασφάλεια υπολογιστών (CSIRT) της Εθνικής Αρχής Κυβερνοασφάλειας κάθε περιστατικό που έχει σημαντικό αντίκτυπο στην παροχή των υπηρεσιών τους, σύμφωνα με την παρ. 3 (σημαντικό περιστατικό)." | Essential and important entities notify the Authority's CSIRT without delay of any incident with a significant impact on the provision of their services (significant incident). | ✅ |
| **The public-sector bodies report to the ΕΥΠ's CSIRT**, informing the Authority at the same time | Άρθρο 16 §1, second sentence | "Οι οντότητες της περ. στ) της παρ. 2 του άρθρου 3 κοινοποιούν τα περιστατικά του παρόντος άρθρου στην CSIRT της Εθνικής Υπηρεσίας Πληροφοριών με ταυτόχρονη ενημέρωση της Εθνικής Αρχής Κυβερνοασφάλειας." | The entities of art. 3(2)(f) notify the incidents of this article to the CSIRT of the National Intelligence Service, informing the Authority at the same time. | ✅ |
| What makes an incident significant: the statutory test, no national threshold | Άρθρο 16 §3 | "Ένα περιστατικό θεωρείται σημαντικό αν: α) έχει προκαλέσει ή μπορεί να προκαλέσει σοβαρή λειτουργική διατάραξη των υπηρεσιών ή οικονομική ζημία για την οικεία οντότητα, β) έχει επηρεάσει ή μπορεί να επηρεάσει άλλα φυσικά ή νομικά πρόσωπα προκαλώντας σημαντική υλική ή μη υλική ζημία." | Significant if it caused or can cause severe operational disruption or financial loss to the entity, or affected or can affect other natural or legal persons by causing considerable material or non-material damage. | ✅ |
| The acts are submitted to the Authority | Άρθρο 16 §4, lead-in | "Για την κοινοποίηση της παρ. 1, οι οικείες οντότητες υποβάλλουν στην Εθνική Αρχή Κυβερνοασφάλειας:" | For the notification of para. 1, the entities submit to the Authority: | ✅ |
| **24 h, from awareness: the "προειδοποίηση"** | Άρθρο 16 §4 α) | "α) χωρίς αδικαιολόγητη καθυστέρηση και σε κάθε περίπτωση εντός είκοσι τεσσάρων (24) ωρών από τη στιγμή που αντιλήφθηκαν το σημαντικό περιστατικό, προειδοποίηση, η οποία, κατά περίπτωση, αναφέρει αν υπάρχει υποψία ότι το σημαντικό περιστατικό προκλήθηκε από παράνομες ή κακόβουλες ενέργειες ή θα μπορούσε να έχει διασυνοριακό αντίκτυπο," | Within 24 hours of becoming aware of the significant incident, a warning, stating where relevant whether unlawful or malicious acts are suspected or a cross-border impact is possible. | ✅ |
| **72 h, from awareness: the "κοινοποίηση περιστατικού"** | Άρθρο 16 §4 β) | "β) χωρίς αδικαιολόγητη καθυστέρηση και σε κάθε περίπτωση εντός εβδομήντα δύο (72) ωρών από τη στιγμή που αντιλήφθηκαν το σημαντικό περιστατικό, κοινοποίηση περιστατικού, η οποία, κατά περίπτωση, επικαιροποιεί τις πληροφορίες που αναφέρονται στην περ. α) και, επιπλέον, περιλαμβάνει μια αρχική αξιολόγηση του σημαντικού περιστατικού, μεταξύ άλλων της σοβαρότητας και των επιπτώσεών του, καθώς και, εφόσον υπάρχουν, τις ενδείξεις της παραβίασης," | Within 72 hours of becoming aware, an incident notification updating the warning and giving an initial assessment, severity, impact and indicators of compromise where available. | ✅ |
| Interim report, **only on the Authority's request** | Άρθρο 16 §4 γ) | "γ) κατόπιν αιτήματος της Εθνικής Αρχής Κυβερνοασφάλειας, ενδιάμεση έκθεση σχετικά με τις σχετικές επικαιροποιήσεις της κατάστασης," | On the Authority's request, an interim report on relevant status updates. | ✅ |
| **Final report, one month after the 72 h notification: the "τελική έκθεση"** | Άρθρο 16 §4 δ) | "δ) τελική έκθεση το αργότερο εντός ενός (1) μηνός μετά από την υποβολή της κοινοποίησης περιστατικού σύμφωνα με την περ. β), η οποία περιλαμβάνει τα ακόλουθα:" | A final report at the latest one month after the submission of the incident notification of (b). | ✅ |
| Ongoing incident: progress report, then the final report one month after handling | Άρθρο 16 §4 ε) | "ε) σε περίπτωση εν εξελίξει περιστατικού κατά τον χρόνο υποβολής της τελικής έκθεσης που αναφέρεται στην περ. δ), οι οικείες οντότητες υποβάλλουν έκθεση προόδου τη δεδομένη στιγμή και τελική έκθεση εντός ενός (1) μηνός από τον εκ μέρους τους χειρισμό του σημαντικού περιστατικού." | If the incident is still ongoing when the final report is due, a progress report at that time and a final report within one month of their handling of it. | ✅ |
| Trust service providers: 24 h instead of 72 h | Άρθρο 16 §4, last subparagraph | "Κατά παρέκκλιση της περ. β), ο πάροχος υπηρεσιών εμπιστοσύνης ενημερώνει την Εθνική Αρχή Κυβερνοασφάλειας αναφορικά με σημαντικά περιστατικά που επηρεάζουν την παροχή των υπηρεσιών εμπιστοσύνης του, χωρίς αδικαιολόγητη καθυστέρηση και σε κάθε περίπτωση εντός είκοσι τεσσάρων (24) ωρών από τη στιγμή που έλαβε γνώση του σημαντικού περιστατικού." | By derogation from (b), a trust service provider informs the Authority of significant incidents affecting its trust services within 24 hours of becoming aware of them. | ✅ |
| The statute also calls the 24 h act "έγκαιρη προειδοποίηση", once, when it refers back to it | Άρθρο 16 §5 | "από τη λήψη της έγκαιρης προειδοποίησης που αναφέρεται στην περ. α) της παρ. 4" | from receipt of the early warning referred to in para. 4(a) | ✅ |

**The stage names.** Where art. 16 §4 imposes each act it names it
"προειδοποίηση" (α), "κοινοποίηση περιστατικού" (β), "ενδιάμεση έκθεση" (γ) and
"τελική έκθεση" (δ). The directive's Greek text says "έγκαιρη προειδοποίηση"
for the first, and so does art. 16 §5 once, when it refers back. The fiches
use the words of §4, the provision that imposes the duty.

### What the law repealed

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The NIS1 law and its implementing decision are repealed, with two articles of the electronic-communications code | Άρθρο 32 | "Από την έναρξη ισχύος του παρόντος Μέρους καταργούνται: α) τα άρθρα 148, περί ασφάλειας δικτύων και υπηρεσιών, και 149, περί εφαρμογής και επιβολής, του ν. 4727/2020 (Α’ 184) και β) τα άρθρα 1 έως 16 του ν. 4577/2018 (Α’ 199), περί ενσωμάτωσης στην ελληνική νομοθεσία της Οδηγίας 2016/1148/ΕΕ του Ευρωπαϊκού Κοινοβουλίου και του Συμβουλίου σχετικά με μέτρα για υψηλό κοινό επίπεδο ασφάλειας συστημάτων δικτύου και πληροφοριών σε ολόκληρη την Ένωση και η υπ’ αρ. 1027/4.10.2019 απόφαση του Υπουργού Επικρατείας «Θέματα εφαρμογής και διαδικασιών του ν. 4577/2018 (Α’ 199)» (Β’ 3739)." | From entry into force of this Part: arts. 148 and 149 of Law 4727/2020, arts. 1 to 16 of Law 4577/2018 (the transposition of Directive 2016/1148) and Decision 1027/4.10.2019 are repealed. | ✅ |

### Art. 26 §§4 to 8, re-read for the fiches

The quotes of P0.3 were checked against the file again: §4 (βασικές, 10 M€ or
2 %), §5 (σημαντικές, 7 M€ or 1,4 %), each "ανάλογα με το ποιο είναι
υψηλότερο", and §8 (public-sector bodies, "δεν μπορεί να είναι κατώτερα των
είκοσι χιλιάδων (20.000) ευρώ και ανώτερα των πεντακοσίων χιλιάδων (500.000)
ευρώ"). The drafting quirk of P0.3 is in the file as recorded: both §4 and §5
end their turnover clause with "της επιχείρησης στην οποία ανήκει η σημαντική
οντότητα". The fiches state the two ceilings and leave the undertaking clause
out; they do not reword it, and the quirk still needs a Greek lawyer.

## P0.1 — the general registration duty and its real deadline

<!-- meta: theme=registration; type=reference; date=2026-08-06; surfaces=docs; guard=none -->

**Answer: the deadline was 30 September 2025. It has passed. There is no
open registration window — registration is now an overdue continuing duty.**

The duty itself is in **Άρθρο 4 §3, third subparagraph** of ν. 5160/2024
(catalogue) and **Άρθρο 19 §1** (the digital-infrastructure subset). The
statutory window was two months from entry into force, i.e. 27.01.2025:

> "εντός προθεσμίας δυο (2) μηνών από την έναρξη ισχύος του παρόντος" — Άρθρο 4 §3

It was then extended **three times**, each time by replacing art. 9 of ΚΥΑ 1381/2025:

| Instrument | ΦΕΚ | art. 4 §3 catalogue | art. 19 §1 subset | Verbatim |
|---|---|---|---|---|
| **ΚΥΑ 1381/2025** (art. 9) | Β΄ 463/10.02.2025 | 11/04/2025 | 28/03/2025 | "παρατείνεται μέχρι και την **11/04/2025**" / "…την **28/03/2025**" |
| **ΚΥΑ 1645/2025** (art. 1) | Β΄ 1882/15.04.2025 | 30/05/2025 | 30/05/2025 | "παρατείνεται μέχρι και την **30/05/2025**" (both paragraphs) |
| **ΚΥΑ 1990/2025** (art. 1 §1) | Β΄ 4241/04.08.2025 | **30/09/2025** | **30/09/2025** | "παρατείνεται μέχρι και την **30/09/2025**" (both paragraphs) |

**ΚΥΑ 1990/2025 is the operative text.** It was **not** in the build plan's P0.1
list — the plan listed ΚΥΑ 2267/2025 instead, which turns out to be about
something else entirely (below). Nothing later than 30/09/2025 appears on the
Authority's legislation index as at 2026-08-06.

Confirmed independently by the Authority's own circular to the public sector:

> **Εγκύκλιος Α.Π. οικ. 28211 ΕΞ 2025, 10.09.2025** — "παρακαλείστε να προβείτε
> άμεσα και σε κάθε περίπτωση **το αργότερο έως 30 Σεπτεμβρίου 2025** στις
> απαραίτητες ενέργειες για την ολοκλήρωση της εγγραφής του φορέα σας."
> https://cyber.gov.gr/wp-content/uploads/2025/09/EGKYKLIOS_PLAFORMA_EGGRAFHS.pdf

⚠️ That same circular still states 27.11.2025 for 1st-tier local authorities,
because it predates ΚΥΑ 2267/2025 by a month. **An official circular can be
stale.** Cite the gazette, not the circular.

### How registration actually works (ΚΥΑ 1381/2025 as amended)

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| Platform is reached through **gov.gr-ΕΨΠ**, authentication with the entity's **TAXISnet** credentials | ΚΥΑ 1381 art. 2 §1, art. 3 §3 | "προσβάσιμη μέσω της Ενιαίας Ψηφιακής Πύλης της Δημόσιας Διοίκησης (gov.gr-ΕΨΠ)"; "με τη χρήση των κωδικών - διαπιστευτηρίων της Γ.Γ.Π.Σ.Ψ.Δ. (taxisnet)" | ✅ |
| Identity key is the **Α.Φ.Μ.**; name/legal form/activity/address are pre-filled from the AADE tax registry | ΚΥΑ 1381 art. 4 §2, art. 5 §1 | "προσυμπληρωμένα … α) αριθμός φορολογικού μητρώου (Α.Φ.Μ.)"; "αντλούνται αυτόματα … από το πληροφοριακό σύστημα του Φορολογικού Μητρώου … (Α.Α.Δ.Ε.)" | ✅ |
| **Email fallback** while/if the platform is unavailable | ΚΥΑ 1381 art. 8 | "μέσω μηνύματος ηλεκτρονικού ταχυδρομείου, στην ηλεκτρονική διεύθυνση **register.ncsa@cyber.gov.gr**" | ✅ |
| Registration **counts as a solemn declaration** as to accuracy | ΚΥΑ 1381 art. 4 §8 | "επέχει θέση **υπεύθυνης δήλωσης** του άρθρου 8 του ν. 1599/1986 (Α' 75) ως προς την ορθότητα αυτών" | ✅ |
| **The form requires naming the Υ.Α.Σ.Π.Ε.** (added Aug 2025) | ΚΥΑ 1990, Υπόδειγμα Ι §10 | "Ονοματεπώνυμο και επικαιροποιημένα στοιχεία διεύθυνσης … και επικοινωνίας … **του Υπεύθυνου Ασφαλείας Συστημάτων Πληροφορικής και Επικοινωνιών (Υ.Α.Σ.Π.Ε.) της Οντότητας**" | ✅ |
| The form requires **SME self-classification** per Rec. 2003/361/EC | ΚΥΑ 1990, Υπόδειγμα Ι §12 | "**Υπαγωγή ή μη** της Οντότητας στην κατηγορία των πολύ μικρών, μικρών ή μεσαίων επιχειρήσεων (ΜΜΕ)" | ✅ |
| The form requires **IP ranges** and **domain names** | ΚΥΑ 1990, Υπόδειγμα Ι §§6-7 | "Εύρος διαδικτυακών διευθύνσεων (IP ranges)"; "Ονόματα χώρου (domain names)" | ✅ |
| The form requires **linked / partner enterprises** — because size is computed with aggregation | ΚΥΑ 1990, Υπόδειγμα Ι §4 | "του συνόλου των υποκαταστημάτων ή των **συνδεδεμένων ή συνεργαζόμενων επιχειρήσεων**, κατά την έννοια των παρ. 3 και 2 … του Παραρτήματος της Σύστασης 2003/361/ΕΚ" | ✅ |

- **Registration portal:** https://nis2register.cyber.gov.gr

### ΚΥΑ 2267/2025 is not a registration extension

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| It **postpones the entry into force of the scope sub-provision for 1st-tier local authorities to 27.11.2026** | ΚΥΑ 2267/2025, Άρθρο Μόνο | "Η ισχύς της υποπερ. στβ) της περ. στ) της παρ. 2 του άρθρου 3 του ν. 5160/2024 (Α' 195) **αρχίζει την 27η Νοεμβρίου 2026**." | ✅ |
| Its own recital says why | ΚΥΑ 2267/2025, recital 5 | "Την ανάγκη **μετάθεσης του χρόνου έναρξης εφαρμογής** του Μέρους Α' του ν. 5160/2024 … αναφορικά με τους **Οργανισμούς Τοπικής Αυτοδιοίκησης α' βαθμού** για **ένα (1) επιπλέον έτος**" | ✅ |

- ΦΕΚ **Β΄ 5472/14.10.2025**, signed 02.10.2025.
- **Consequence: Greek municipalities are out of scope until 27.11.2026.** Any
  Greek public-sector go-to-market must exclude δήμοι today, and 27.11.2026 is a
  real, dated pipeline event.

## ΚΥΑ 1689/2025 — Εθνικό Πλαίσιο Απαιτήσεων Κυβερνοασφάλειας

<!-- meta: theme=framework; type=reference,delivery; date=2026-08-06; surfaces=data; guard=packages/regulatory-data/test/multi-frame-registry.test.ts -->

**This is the reason Greece cannot be done as a translation of the directive.**
It is a native control framework, issued under Άρθρο 15 §2 and Άρθρο 30 §13 α)
of ν. 5160/2024 — the Greek counterpart of Croatia's Uredba (NN 135/2024),
Belgium's CyFun, or the Dutch Cbb.

- **Official citation:** ΚΥΑ Αριθμ. 1689, «Εθνικό Πλαίσιο Απαιτήσεων
  Κυβερνοασφάλειας Βασικών και Σημαντικών Οντοτήτων» — ΦΕΚ **Β΄ 2186/06.05.2025**
  (signed 30 April 2025).
- **Official URL:** https://cyber.gov.gr/wp-content/uploads/2025/05/20250202186.pdf
- **Retrieved + read:** 2026-08-06, full text extracted and read.

### Structure — 26 articles, of which 22 are requirement domains

| # | Άρθρο | Domain | Applies to |
|---|---|---|---|
| 1–3 | 1–3 | Σκοπός · Γενικές διατάξεις · Γενικές αρχές εφαρμογής | — |
| 4 | 4 | Υποχρεώσεις και ευθύνη των ανωτάτων οργάνων | both |
| 5 | 5 | Πλαίσιο διαχείρισης κινδύνων | both (+βασικές) |
| 6 | 6 | Πολιτικές και διαδικασίες ασφάλειας | both |
| 7 | 7 | Ρόλοι, αρμοδιότητες και εξουσίες | both |
| 8 | 8 | **Ανεξάρτητος έλεγχος ασφάλειας πληροφοριών** | **βασικές only** |
| 9 | 9 | Διαδικασίες παρακολούθησης της συμμόρφωσης | both |
| 10 | 10 | Ασφάλεια ανθρώπινου δυναμικού | both (+βασικές) |
| 11 | 11 | Διαχείριση υλικού και λογισμικού | both |
| 12 | 12 | **Διαχείριση κινδύνων από τις σχέσεις με προμηθευτές και παρόχους υπηρεσιών Τ.Π.Ε.** | both (+βασικές) |
| 13 | 13 | Διαχείριση λογαριασμών και έλεγχος πρόσβασης | both |
| 14 | 14 | Ασφαλής παραμετροποίηση υλικού/λογισμικού | both |
| 15 | 15 | Αρχές ασφαλούς ανάπτυξης εφαρμογών | both |
| 16 | 16 | Διαχείριση αλλαγών | both |
| 17 | 17 | Διαχείριση και γνωστοποίηση ευπαθειών | both |
| 18 | 18 | Αξιολόγηση της αποτελεσματικότητας των μέτρων | both (+βασικές) |
| 19 | 19 | Ασφάλεια δικτύων | both |
| 20 | 20 | Προστασία από κακόβουλο λογισμικό | both |
| 21 | 21 | Εκπαίδευση και ευαισθητοποίηση | both |
| 22 | 22 | Χρήση κρυπτογραφίας | both |
| 23 | 23 | Φυσική και περιβαλλοντική ασφάλεια | both |
| 24 | 24 | Διαχείριση περιστατικών κυβερνοασφάλειας | both |
| 25 | 25 | Επιχειρησιακή συνέχεια και διαχείριση κρίσεων | both (+βασικές) |
| — | 26 | Έναρξη ισχύος | — |

**In force from publication (06.05.2025)** — Άρθρο 26: "Η ισχύς της παρούσας
απόφασης άρχεται από τη δημοσίευσής της στην Εφημερίδα της Κυβερνήσεως." No
transition period is stated anywhere in the decision.

### P0.5 — how the catalogue is actually built

**Counted from the official text** (not quoted — this is a derived measure, method
below, and a Greek native reviewer should re-count it as part of ratification):

- **22 requirement articles** (4–25)
- **108 top-level lettered requirements** — 102 binding on both tiers, **6
  additional for βασικές only**
- **56 sub-points** (αα, ββ, δβ …) beneath those
- **164 enumerated requirement items in total**

Method: for each article 4–25, count line-initial Greek-letter markers
(`α.` … `ιστ.`) as top-level and two-letter markers (`αα.` … `βια.`) as
sub-points, splitting each article at "2. Οι βασικές οντότητες, επιπλέον των
μέτρων της παρ. 1". Longest-match ordering, so `ια.` is read as the 11th
top-level item, not as `ι`+`α`.

Per-article shape (top-level / sub-points, βασικές-only extras in brackets):
4 → 2/5 · 5 → 4/5 [+0] · 6 → 3/11 · 7 → 3/0 · 8 → 4/0 (βασικές only) ·
9 → 3/0 · 10 → 3/0 [+0] · 11 → 4/0 · 12 → 5/7 [+2] · 13 → 8/0 · 14 → 4/0 ·
15 → 4/0 · 16 → 2/4 · 17 → 7/0 · 18 → 4/0 [+2] · 19 → 10/1 · 20 → 5/0 ·
21 → 3/10 · 22 → 5/2 · 23 → 6/0 · 24 → 6/2 · 25 → 7/6 [+2].

**Structural pattern.** Every requirement article opens with "Οι βασικές και
σημαντικές οντότητες εφαρμόζουν τα ακόλουθα:", then lists lettered duties;
articles with a second paragraph add "Οι βασικές οντότητες, **επιπλέον** των
μέτρων της παρ. 1, …". **There are no maturity levels and no scoring tiers in
the ΚΥΑ itself** — it is a flat two-tier obligation set. Any maturity/score model
we render must come from the ΕΑΚ tool (below), not from the decision, and must be
labelled as such. This answers the P3 "unknown until P0.5" in the build plan:
**a conformity engine cannot be derived from ΚΥΑ 1689/2025 alone.**

### Requirements that go beyond the directive

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **Annual external penetration tests, for BOTH tiers** | Άρθρο 18 §1 β) | "διενεργεί σε περιοδική βάση, **τουλάχιστον μία φορά ετησίως** ή κατόπιν σοβαρού περιστατικού κυβερνοασφάλειας, **εξωτερικούς ελέγχους παρείσδυσης (external penetration tests)**" | ✅ |
| **Annual internal penetration tests** for βασικές | Άρθρο 18 §2 α) | "τουλάχιστον μία φορά ετησίως …, **εσωτερικούς ελέγχους παρείσδυσης (internal penetration tests)**" | ✅ |
| **An annual self-assessment, using a Guide issued by the Authority, whose results MUST BE SENT to the Authority with a corrective action plan** | Άρθρο 18 §1 δ) | "διενεργεί σε **ετήσια βάση** …, **αυτοαξιολόγηση** της ασφάλειας …, **με χρήση κατάλληλου Οδηγού που εκδίδει και αναθεωρεί η Εθνική Αρχή Κυβερνοασφάλειας**. Τα αποτελέσματά της **αποστέλλονται στην Εθνική Αρχή Κυβερνοασφάλειας**, συνοδευόμενα από **πλάνο διορθωτικών ενεργειών**." | ✅ |
| **11 named thematic policies are mandatory**, on top of the general policy | Άρθρο 6 β) | "Οι **ελάχιστες θεματικές πολιτικές** που απαιτούνται είναι οι ακόλουθες: βα. Πολιτική ελέγχου πρόσβασης, ββ. … αγαθών, βγ. … ορθής χρήσης …, βδ. … αφαιρούμενων μέσων …, βε. … περιστατικών …, βστ. … εφοδιαστικής αλυσίδας, βζ. … δικτύων, βη. … ελέγχων κυβερνοασφάλειας, βθ. … αντιγράφων ασφαλείας, βι. … κρυπτογράφησης …, βια. … φυσικής και περιβαλλοντικής ασφάλειας." | ✅ |
| The Υ.Α.Σ.Π.Ε. **reports directly to the top management body** | Άρθρο 7 β) | "Ο Υ.Α.Σ.Π.Ε. **αναφέρεται απ' ευθείας στο ανώτατο όργανο διοίκησης** της οντότητας για θέματα που σχετίζονται με την κυβερνοασφάλεια." | ✅ |
| Audit evidence is defined in three explicit forms: documents, physical observation, interviews | Άρθρο 3 §3 | "α. Στοιχεία τεκμηρίωσης που η οντότητα τηρεί στην υποδομή της … β. … μέσω της **φυσικής παρατήρησης** κατάλληλου δείγματος … γ. … μέσω **συνεντεύξεων** με κατάλληλο δείγμα μελών της διοίκησης και εργαζομένων" | ✅ |
| Proportionality is explicit, with six named criteria | Άρθρο 3 §1 | "Τα μέτρα της παρούσας εφαρμόζονται με βάση την **αρχή της αναλογικότητας** … α. Το μέγεθος και η πολυπλοκότητα … στ. το κόστος υλοποίησης του μέτρου σε σχέση με τα προσδοκώμενα οφέλη." | ✅ |

### Άρθρο 12 — supplier duties (highest product relevance)

Greece has a **two-tier** supplier regime: §1 binds all entities, §2 adds
duties for **βασικές** entities only.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| **A supplier register is mandatory, with criticality tiering** | Άρθρο 12 §1 β) | "καταρτίζει και τηρεί **ενημερωμένο κατάλογο** με τους άμεσους προμηθευτές και παρόχους υπηρεσιών Τ.Π.Ε. …, ο οποίος περιλαμβάνει κατ' ελάχιστον σημεία επαφής, καθώς και τα προϊόντα και υπηρεσίες Τ.Π.Ε. που κάθε προμηθευτής παρέχει. Ο εν λόγω κατάλογος περιλαμβάνει και την **ταξινόμηση των προμηθευτών … σε επίπεδα κρισιμότητας**." | ✅ |
| **Supplier access to the entity's systems and data must be documented in the contract** | Άρθρο 12 §1 δ) δβ) | "η **περιγραφή των συστημάτων και δεδομένων της οντότητας στα οποία ο άμεσος προμηθευτής ή πάροχος υπηρεσιών Τ.Π.Ε. τυχόν αποκτά πρόσβαση** κατά τη διάρκεια της σύμβασης" | ✅ |
| Right of audit, or of demanding past audit reports | Άρθρο 12 §1 δ) δγ) | "το δικαίωμα της διενέργειας ελέγχου εκ μέρους της οντότητας ή το δικαίωμα να ζητηθούν αναφορές και αποτελέσματα παρελθόντων ελέγχων" | ✅ |
| Secure exit duties in the contract | Άρθρο 12 §1 δ) δδ) | "η διαγραφή δικαιωμάτων πρόσβασης, η ασφαλής διαγραφή δεδομένων και οι απαιτήσεις εμπιστευτικότητας" | ✅ |
| **Periodic** review of supplier policies, and after any supplier-side incident | Άρθρο 12 §1 ε) | "αξιολογεί και επικαιροποιεί σε **περιοδική βάση** … ή μετά από περιστατικό κυβερνοασφάλειας που σχετίζεται με παροχή προϊόντων και υπηρεσιών Τ.Π.Ε." | ✅ |
| **βασικές only:** enhanced requirements for *critical* suppliers, with a statutory definition of "critical" | Άρθρο 12 §2 α) | "καθορίζουν και επιβάλλουν **ενισχυμένες απαιτήσεις** κυβερνοασφάλειας για τους κρίσιμους προμηθευτές … Ως κρίσιμοι … νοούνται εκείνοι των οποίων … θεωρούνται κρίσιμα λόγω της απαραίτητης φύσης τους για την υποστήριξη της παροχής της **κύριας δραστηριότητας** της οντότητας και των δυνητικών επιπτώσεων στην **εθνική ασφάλεια, στη δημόσια ασφάλεια, στη δημόσια υγεία και στην οικονομική σταθερότητα**." | ✅ |
| **βασικές only:** duties extend to **subcontractors** of the contracted supplier | Άρθρο 12 §2 β) | "επεκτείνουν … τις διαδικασίες διαχείρισης κινδύνων στο σύνολο της εφοδιαστικής τους αλυσίδας, καθορίζοντας απαιτήσεις κυβερνοασφάλειας και σε **υπεργολάβους** των αναδόχων προμηθευτών" | ✅ |

## P0.6 — the free ΕΑΚ tool: it is downloadable, structured, and pre-crosswalked

<!-- meta: theme=framework; type=reference,delivery; date=2026-08-06; surfaces=data; guard=packages/regulatory-data/test/multi-frame-registry.test.ts -->

- **«Εργαλείο Αξιολόγησης Κυβερνοασφάλειας Οργανισμών (Gap Analysis Tool)»**
- **XLSX:** https://cyber.gov.gr/wp-content/uploads/2025/09/EAK-Gap-Analysis-Tool-FINAL.xlsx
- **Companion guide (PDF, Sept 2025):** https://cyber.gov.gr/wp-content/uploads/2025/09/10.09-ΕΑΚ-GAP-ANALYSIS_FINAL-1.pdf
- **Retrieved + parsed:** 2026-08-06.
- Built with **ENISA** support (Cybersecurity Support Action Programme, Specific
  Contract ENISA M-OCU-24-C105_GR), delivered by the contractor **ADACOM**.

**Verbatim, from the Administrator's foreword:** "Το εργαλείο περιλαμβάνει **169
σημεία ελέγχου, κατανεμημένα σε 24 θεματικές ενότητες**, και ενσωματώνει πλήρως
τις απαιτήσεις του Ν. 5160/2024 και της ΚΥΑ 1689/2025 (Β' 2186)".

**Parsed structure — confirmed against the file itself:** 24 units, 7 sub-units
(all under unit 16), **169 leaf checkpoints**, total maximum score **735**.

| Unit | Items | Max | Title |
|---|---|---|---|
| 1 | 6 | 30 | Υποχρεώσεις & Ευθύνη των Ανωτάτων Οργάνων Διοίκησης |
| 2 | 5 | 23 | Πλαίσιο Διαχείρισης Κινδύνων |
| 3 | 3 | 14 | Πολιτικές και Διαδικασίες Ασφάλειας Πληροφοριών |
| 4 | 4 | 19 | Ρόλοι, Αρμοδιότητες και Εξουσίες |
| 5 | 4 | 20 | Ανεξάρτητος Έλεγχος Ασφάλειας Πληροφοριών |
| 6 | 3 | 14 | Διαδικασίες Παρακολούθησης της Συμμόρφωσης |
| 7 | 5 | 19 | Ασφάλεια Ανθρώπινου Δυναμικού |
| 8 | 10 | 44 | Διαχείριση Υλικού και Λογισμικού |
| 9 | 9 | 42 | Διαχείριση Ασφάλειας Αλυσίδας Εφοδιασμού |
| 10 | 11 | 50 | Διαχείριση Ταυτότητας, Αυθεντικοποίηση και Έλεγχος Πρόσβασης |
| 11 | 4 | 16 | Ασφαλής Παραμετροποίηση Υλικού, Λογισμικού, Υπηρεσιών και Δικτύων |
| 12 | 5 | 23 | Αρχές Ασφαλούς Ανάπτυξης Εφαρμογών |
| 13 | 4 | 17 | Διαχείριση Αλλαγών |
| 14 | 9 | 39 | Διαχείριση και Γνωστοποίηση Ευπαθειών |
| 15 | 6 | 30 | Αξιολόγηση της Αποτελεσματικότητας των Μέτρων |
| 16 | 23 | 92 | Ασφάλεια Δικτύων, Υποδομών και Υπηρεσιών Νέφους (7 sub-units) |
| 17 | 6 | 20 | Προστασία από Κακόβουλο Λογισμικό |
| 18 | 4 | 15 | Εκπαίδευση και Ευαισθητοποίηση |
| 19 | 5 | 23 | Χρήση Κρυπτογραφίας |
| 20 | 7 | 33 | Φυσική & Περιβαλλοντική Ασφάλεια |
| 21 | 14 | 57 | Διαχείριση Περιστατικών Ασφάλειας & Υποχρεώσεις Αναφοράς |
| 22 | 4 | 12 | **Ασφάλεια Τεχνητής Νοημοσύνης (AI Security)** |
| 23 | 4 | 20 | **Ασφάλεια OT, IoT, IoMT** |
| 24 | 14 | 63 | Επιχειρησιακή Συνέχεια και Διαχείριση Κρίσεων |

### The scoring model, stated by the tool itself

- Status → implementation ratio: **Δεν εφαρμόζεται** (excluded) · **Δεν έχει
  ξεκινήσει** 0 · **Σχεδιάζεται** 0.25 · **Μερική υλοποίηση** 0.5 · **Σχεδόν
  ολοκληρωμένο** 0.75 · **Πλήρως υλοποιημένο** 1.
- Per-checkpoint weight **ΒΑΡΥΤΗΤΑ 1–5** (observed values 2–5).
- **ΕΠΙΠΕΔΟ ΣΥΜΜΟΡΦΩΣΗΣ = Ποσοστό Υλοποίησης × Βαρύτητα.**
- Risk bands: **76–100 %** Χαμηλός · **51–75 %** Μέτριος · **26–50 %** Υψηλός ·
  **0–25 %** Κρίσιμος Κίνδυνος.
- Per checkpoint the sheet also carries: current state, evidence, gap, proposed
  actions, priority, due date, owner, status, comments.

### The finding that matters most

**Every one of the 169 checkpoints carries a three-way crosswalk, filled in by
the Authority**, in columns `Q / R / S`: `N.5160/2024` · `ΚΥΑ 1689/2025` ·
`ΟΔΗΓΙΑ NIS2`. Coverage is **169/169 on all three**. Example rows: checkpoint
1.1 → "Άρθρο 14 Διακυβέρνηση" / "Άρθρο 4 παρ. α" / "Άρθρο 20 παρ. 1".
All 22 requirement articles of the ΚΥΑ are covered; the distribution runs from
3 checkpoints (art. 9) to 21 (art. 19).

**Consequence for P1.** The riskiest and most expensive part of a native pack —
authoring a national control catalogue *and* crosswalking it to NIS2 — already
exists, published by the regulator, in a machine-readable file, with weights and
a scoring formula. P1 becomes transcription + translation + ratification rather
than interpretation. This is a materially better starting position than Croatia.

### Two cautions before anyone treats the tool as law

1. **Units 22 (AI Security) and 23 (OT/IoT/IoMT) have no dedicated article in
   ΚΥΑ 1689/2025.** The tool anchors them on general articles — 22.1/22.2 → art. 6
   παρ. β (thematic policies), 22.3 → art. 12 παρ. 1γ, 22.4 and 23.4 → art. 24
   παρ. γ, 23.1 → art. 19 παρ. ε, 23.2 → art. 13 παρ. α, 23.3 → art. 11 παρ. α.
   Same for most of unit 16's cloud/email/DNS/DDoS/DLP sub-units. These are the
   Authority's **expansive reading**, not verbatim statutory duties. Rendering
   them as binding obligations would violate the native-framework supremacy
   invariant. Keep the tool's checkpoints and the ΚΥΑ's 164 enumerated items as
   **two distinct layers**.
2. **Nothing in the tool or its guide says it is the "Οδηγός" of Άρθρο 18 §1 δ).**
   The guide presents it as an aid ("αρωγός", "συνδράμει"), not as the mandated
   instrument whose results must be filed. So either the tool *is* that Guide in
   practice, or the Guide has not been issued and the annual filing duty is live
   without a published instrument. **needs-check — ask a Greek native reviewer.**

### Competitive read

The tool is a **single-entity Excel workbook**. It has no multi-client console,
no evidence store, no document generation, no history across years, no
role separation, and no way for a consultant to run twenty clients. What it does
do — and does for free, matched exactly to the national framework — is the
*assessment* itself. The Greek pitch therefore cannot be "we assess you against
1689/2025".

## ΥΑ 1899/2025 — the Υ.Α.Σ.Π.Ε. (P0.7)

<!-- meta: theme=governance; type=reference; date=2026-08-06; surfaces=docs; guard=none -->

- **Official citation:** Υπουργική Απόφαση Αριθμ. 1899, «Καθορισμός προσόντων,
  καθηκόντων, ασυμβιβάστων και υποχρεώσεων των Υπεύθυνων Ασφαλείας Συστημάτων
  Πληροφορικής και Επικοινωνιών» — ΦΕΚ **Β΄ 4250/05.08.2025**.
- **Official URL:** https://cyber.gov.gr/wp-content/uploads/2025/08/ΑΠΟΦΑΣΗ_ΥΠΟΥΡΓΟΥ_1899_20250204250.pdf
- **Retrieved + read:** 2026-08-06. Issued under Άρθρο 30 §13 β) of ν. 5160/2024.
- Applies to **both** βασικές and σημαντικές (Άρθρο 2).

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The Υ.Α.Σ.Π.Ε. must be **the entity's own executive**; only exception is an executive of another entity **in the same group** | Άρθρο 3 §1 | "Οι Οντότητες επιλέγουν και ορίζουν ως Υ.Α.Σ.Π.Ε. **στέλεχός τους** … **Κατ' εξαίρεση**, δύναται να ορίζεται στέλεχος άλλης Οντότητας ως Υ.Α.Σ.Π.Ε., εφόσον πρόκειται για Οντότητες **στο πλαίσιο του ίδιου ομίλου επιχειρήσεων**." | ✅ |
| **Minimum qualifications — three alternative routes** | Άρθρο 4 §1 | "α) **Προπτυχιακό ή μεταπτυχιακό τίτλο ετήσιας τουλάχιστον διάρκειας** σε συναφές … γνωστικό αντικείμενο **ή** β) **Εμπειρογνωσία … τουλάχιστον 5 ετών ή** γ) **Πιστοποιημένη γνώση** μεθοδολογιών … **και εμπειρογνωσία … τουλάχιστον 2 ετών**." | ✅ |
| **A criminal-record extract must be obtained**, and the Authority may demand to see it at any time | Άρθρο 4 §2 | "οι Οντότητες οφείλουν να ζητούν από τον υποψήφιο Υ.Α.Σ.Π.Ε, την προσκόμιση **αντιγράφου ποινικού μητρώου**. Η Εθνική Αρχή Κυβερνοασφάλειας … **δύναται να ζητεί οποτεδήποτε** να της επιδειχθεί …" | ✅ |
| **Incompatible with the DPO** | Άρθρο 4 §3 | "Τα καθήκοντα του Υ.Α.Σ.Π.Ε. είναι **ασυμβίβαστα** με αυτά του Υπευθύνου Προστασίας Δεδομένων (Υ.Π.Δ.) του άρθρου 37 του Κανονισμού (ΕΕ) 2016/679" | ✅ |
| **Incompatible with the entity's ICT / e-government manager** — this has no directive equivalent and bites hard at SME scale | Άρθρο 4 §4 | "Τα καθήκοντα του Υ.Α.Σ.Π.Ε. είναι **ασυμβίβαστα με αυτά του Υπευθύνου για τα αντικείμενα των τεχνολογιών πληροφορικής και επικοινωνίας (Τ.Π.Ε) και της ηλεκτρονικής διακυβέρνησης** της Οντότητας." | ✅ |
| **Background checks before taking up duties** | Άρθρο 5 §1 | "υποχρεούνται να διασφαλίζουν ότι ο Υ.Α.Σ.Π.Ε. υπόκειται σε **κατάλληλους ελέγχους ιστορικού προτού αναλάβει τα καθήκοντά του**" | ✅ |
| **16 enumerated duties** (α – ιστ), including that the Υ.Α.Σ.Π.Ε. is responsible for **filing the ενιαία πολιτική** with the Authority | Άρθρο 6 §1 στ) | "η **μέριμνα για την υποβολή** της ανωτέρω πολιτικής **προς έγκριση στην Αρχή** σύμφωνα με τα οριζόμενα στο τρίτο και το τέταρτο εδάφιο της περ. β' της παρ. 5 του άρθρου 15 του ν. 5160/2024." | ✅ |
| Must report **directly to the top management level** | Άρθρο 6 §4 | "**λογοδοτώντας απευθείας στο ανώτατο διοικητικό επίπεδο** της Οντότητας" | ✅ |

**Why this matters commercially.** A Greek SME in scope must find a *second*
qualified person: the role cannot be held by the DPO, cannot be held by the IT
manager, and cannot be outsourced to an external consultant (it must be an
in-house executive, or a group-company executive). That is a real, recurring
organisational pain — and it is exactly the kind of pain a consultant like
a Greek native reviewer is engaged to solve, with tooling underneath.

## Document context of the generated documents (delivered 2026-10-29)

<!-- meta: theme=documents,incident,registration,framework,governance; type=delivery; date=2026-10-29; surfaces=prompt,data; guard=apps/ai-service/test/document-prompt-greece-context.test.ts,packages/regulatory-data/test/nis2-mappings-loader.test.ts -->

`packages/regulatory-data/src/nis2-mappings/countries/gr.yaml` carries a
`document_context` of five lines, each resting on a verbatim line of this
file: the incident clock from awareness and the public-sector routing (Ν.
5160/2024 section, Άρθρο 16 §§1 and 4), the registration duty and its passed
deadline (P0.1), ΚΥΑ 1689/2025 and its annual self-assessment (its section,
Άρθρο 18 §1 β) and δ); P0.6 for the Guide), the Υ.Α.Σ.Π.Ε. (Άρθρο 15 §5 α) and
the ΥΑ 1899/2025 section) and the ενιαία πολιτική (Άρθρο 15 §5 β); P0.4 for the
template). The quotes behind them are in `directive_to_law`, and
`nis2-mappings-loader.test.ts` fails if one is not in this file word for word;
nine older quotes, longer than this file's, now read as this file does.

A Greek organisation's documents take the native ΕΠΑΚ path, which never
printed the country block because its first line names the directive. That
path now receives these five lines alone (`formatCountryDocumentContext`), so
they name no directive, not even the registration platform, whose host name
contains "nis2". No fine amount is in them: the legal frame of Greek documents
names Άρθρο 26 only ("Legal-frame corpus of the generated documents"), and the
drafting quirk of Άρθρο 26 §§4 and 5 (P0.3) is still open.


**Circular 28427 added (2026-10-29, after the fiches PR merged the circular's
section above).** A sixth line: the circular is a «πλαίσιο οδηγιών» for βασικές
entities, its four criteria, its table's «Συνιστώμενο μέγιστο χρονοδιάγραμμα»
(three days in the most severe cases) presented as recommended maxima and never
as legal deadlines, its recommendations, and its one obligation, §3, quoted
under `directive_to_law` with `cite: false` as a circular never cited under
ν. 5160/2024. Circular 20718 stays out: its periods are given without a
starting point (section above). Guard: `nis2-mappings-loader.test.ts`.
## Ν. 5086/2024 — the Authority (P0.8)

<!-- meta: theme=statute; type=reference; date=2026-08-06; surfaces=docs; guard=none -->

- **Official citation:** Νόμος 5086/2024, «Εθνική Αρχή Κυβερνοασφάλειας και
  λοιπές διατάξεις» — ΦΕΚ **Α΄ 23/14.02.2024**. Predates the transposition.
- **Official URL:** https://cyber.gov.gr/wp-content/uploads/2024/12/ΝΟΜΟΣ-5086_ΦΕΚ.pdf
- **Retrieved + read:** 2026-08-06.

| Fact | Where | Verbatim (official) | Status |
|---|---|---|---|
| The Authority is a **legal person of public law (Ν.Π.Δ.Δ.)**, English name **National Cybersecurity Authority (NCSA)**, supervised by the Minister of Digital Governance, seated in Athens | Άρθρο 3 §1 | "Συστήνεται νομικό πρόσωπο δημοσίου δικαίου (Ν.Π.Δ.Δ.) με την επωνυμία «**Εθνική Αρχή Κυβερνοασφάλειας**» (Αρχή). Για τις σχέσεις της με την αλλοδαπή, η Αρχή χρησιμοποιεί την επωνυμία «**National Cybersecurity Authority (NCSA)**». Η Αρχή **εποπτεύεται από τον Υπουργό Ψηφιακής Διακυβέρνησης** και εδρεύει στην Αθήνα." | ✅ |
| Its purpose spans prevention through recovery | Άρθρο 4 §1 | "η οργάνωση, ο συντονισμός, η εφαρμογή και ο έλεγχος ενός ολοκληρωμένου πλαισίου στρατηγικών, μέτρων και δράσεων … σε επίπεδο πρόληψης, προστασίας, αποτροπής, εντοπισμού, αντιμετώπισης, αποκατάστασης και ανάκαμψης από κυβερνοεπιθέσεις." | ✅ |
| It is the **supervisory and audit authority** for the transposition | ν. 5160/2024 Άρθρο 23 §1 | "Η Εθνική Αρχή Κυβερνοασφάλειας ορίζεται ως **αρμόδια αρχή εποπτείας και ελέγχου** για τη συμμόρφωση με τις διατάξεις του παρόντος μέρους" | ✅ |
| Fine income and supervision fees **fund the Authority itself** | ν. 5160/2024 Άρθρο 23 §2 | "Τα έσοδα από τις χρηματικές κυρώσεις … καθώς και από το παράβολο εποπτείας και το τέλος ελέγχου … **αποτελούν πόρους της Εθνικής Αρχής Κυβερνοασφάλειας**" | ✅ |

- **Competent authority:** Εθνική Αρχή Κυβερνοασφάλειας, Χανδρή 1, 18346
  Μοσχάτο, Αττική · info@cyber.gov.gr · https://cyber.gov.gr
- **Registration:** https://nis2register.cyber.gov.gr · register.ncsa@cyber.gov.gr
- **Administrator (as at 2026-08-06):** Μιχάλης Μπλέτσας.

## Instrument register (Authority's own index, retrieved 2026-08-06, re-read 2026-10-29)

<!-- meta: theme=statute; type=lead; date=2026-10-29; surfaces=docs; guard=none -->

Source: https://cyber.gov.gr/nomothesia/elliniki-nomothesia-gia-tin-kyvernoasfaleia/

Re-read on 2026-10-29 (HTML sha256
`ab1bb31336da15616371c7889396943e413b55f956937a17a034bf929e0440b3`, 18
entries). What was new since 2026-08-06 was established two ways: the
Wayback Machine's last capture before that date (2026-04-22, sha256
`873a161f4fde3e290ae4af240928642b3f29a6fd1d76e9a3b73e3048f3e49558`, 14
entries) plus Ν. 5305/2026, which this register already held; and the upload
month in each file's URL. The archive copy is used for that comparison only,
never as a source of law.

**New on the index since 2026-08-06:**

| Instrument | Date | Subject (the index's own words) | Read? |
|---|---|---|---|
| **Εγκύκλιος 28427/30-07-2026** | Α.Π. 28427 ΕΞ 2026, 30/07/2026; uploaded 2026-09 | «Διαχείριση ευπαθειών πληροφοριακών συστημάτων από τις βασικές οντότητες του ν. 5160/2024» | ✅ in full, 2026-10-29, section below |
| **Εγκύκλιος 20718/08-06-2026** | Α.Π. 20718 ΕΞ 2026, 08/06/2026; uploaded 2026-09 | «Υλοποίηση μέτρων κυβερνοασφάλειας από τις υπηρεσίες του Δημόσιου Tομέα που εμπίπτουν στο πεδίο εφαρμογής του ν. 5160/2024» | ✅ in full, 2026-10-29, section below |
| **Ν. 4990/2022**, art. 8 | ΦΕΚ Α΄ 210/11.11.2022; uploaded 2026-10 | «Προστασία προσώπων που αναφέρουν παραβιάσεις ενωσιακού δικαίου – Ενσωμάτωση της Οδηγίας (ΕΕ) 2019/1937 …», art. 8 «Υποχρέωση καθιέρωσης εσωτερικών διαύλων αναφοράς στον δημόσιο τομέα» | ❌ not read. The whistle-blowing law; the Authority uploaded its own decision designating its reports officer (ΥΠΠΑ) the same day, 2026-10-08. Not an entity duty under ν. 5160/2024 |

**On the index before 2026-08-06 and already in this register:**

| Instrument | ΦΕΚ | Subject | Read? | File linked by the index on 2026-10-29 |
|---|---|---|---|---|
| **Ν. 5086/2024** | Α΄ 23/14.02.2024 | Creates the Authority | ✅ | https://cyber.gov.gr/wp-content/uploads/2024/12/ΝΟΜΟΣ-5086_ΦΕΚ.pdf |
| **Ν. 5160/2024** | Α΄ 195/27.11.2024 | NIS2 transposition | ✅ | https://cyber.gov.gr/wp-content/uploads/2024/12/ENOTHTA_5_ΝΟΜΟΘΕΣΙΑ_fek_a_195_2024-5160-2024-1.pdf |
| **ΚΥΑ 1381/2025** | Β΄ 463/10.02.2025 | Registration platform + first extension | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/03/KYA_APOFASI_10-Feb-2025_FEK-463_DEFTERO-TEFHOS.pdf |
| **ΚΥΑ 1645/2025** | Β΄ 1882/15.04.2025 | Second extension (→ 30/05/2025) | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/04/FEK_KYA_1645_2025_paratasi_ypvolis_stoixeiwn_ontotitwn.pdf |
| **ΚΥΑ 1689/2025** | Β΄ 2186/06.05.2025 | **National cybersecurity requirements framework** | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/05/20250202186.pdf |
| **ΚΥΑ 1990/2025** | Β΄ 4241/04.08.2025 | **Third extension (→ 30/09/2025)** + new form fields | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/08/Β-4241.pdf |
| **ΥΑ 1899/2025** | Β΄ 4250/05.08.2025 | Υ.Α.Σ.Π.Ε. qualifications and duties | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/08/ΑΠΟΦΑΣΗ_ΥΠΟΥΡΓΟΥ_1899_20250204250.pdf |
| **Εγκύκλιος οικ. 28211** | 10.09.2025 | Public-sector registration circular | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/09/EGKYKLIOS_PLAFORMA_EGGRAFHS.pdf |
| **ΚΥΑ 2267/2025** | Β΄ 5472/14.10.2025 | 1st-tier local authorities deferred → 27.11.2026 | ✅ | https://cyber.gov.gr/wp-content/uploads/2025/10/ΦΕΚ-ΠΑΡΑΤΑΣΗ-ΥΠΑΓΩΓΗΣ-ΟΤΑ-Α΄-ΒΑΘΜΟΥ-ΣΤΟ-Ν.-5160.pdf |
| **Ν. 5305/2026** art. 33 | Α΄ 85/29.05.2026 | National blacklist of malicious websites (adds art. 4Α to ν. 5086/2024) | ❌ **PDF has no text layer** | https://cyber.gov.gr/wp-content/uploads/2026/08/FEK_85_A_29-5-2026_NOMOS-5305_2026.pdf |

The last column is the href of each entry on the index of 2026-10-29, made
absolute; the ✅ readings are those of 2026-08-06 (2026-10-29 for Ν. 5160/2024,
see its re-read section). The ΚΥΑ 1990/2025 file is ΦΕΚ Β΄ 4241 as a whole.

⚠️ `Ν. 5305/2026` downloads as a ~10 MB PDF from which `pdftotext` extracts
**zero characters** — it is almost certainly a scanned image. It is out of P0
scope (it concerns a state website-blocking list, not entity obligations), but it
cannot be read with the method used here. It would need OCR or the et.gr copy.

**On the index on both dates, older than the transposition, never registered
here and not read** (all five are in the 2026-04-22 capture):

| Instrument | Subject (the index's own words) |
|---|---|
| Ν. 5002/2022, 9 Δεκεμβρίου 2022 | «Διαδικασία άρσης του απορρήτου των επικοινωνιών, κυβερνοασφάλεια και προστασία προσωπικών δεδομένων πολιτών.» |
| Ν. 4961/2022, 22 Ιουλίου 2022 | «Αναδυόμενες τεχνολογίες πληροφορικής και επικοινωνιών, ενίσχυση της ψηφιακής διακυβέρνησης και άλλες διατάξεις.» |
| Υπουργική Απόφαση, 7 Δεκεμβρίου 2020 | «Για την Έγκριση της Εθνικής Στρατηγικής Κυβερνοασφάλειας» |
| Ν. 4727/2020, 23 Σεπτεμβρίου 2020, art. 35 (public bodies' websites, by its file name) | «Ψηφιακή Διακυβέρνηση (Ενσωμάτωση στην Ελληνική Νομοθεσία της Οδηγίας (ΕΕ) 2016/2102 και της Οδηγίας (ΕΕ) 2019/1024) …» |
| Υπουργική Απόφαση, 7 Μαρτίου 2018 | «Για την Έγκριση της Εθνικής Στρατηγικής Κυβερνοασφάλειας (Α.Π.: 3218/2018)» |

**Not on the index, on the Authority's strategy page:** the decision approving
the National Cybersecurity Strategy 2026-2030, read 2026-10-29 (page 1, the
decision; the 115-page strategy itself was not read):
https://cyber.gov.gr/wp-content/uploads/2025/12/ΕΣΚ-2026-2030.pdf. See
"Correction made 2026-10-29".

## Εγκύκλιος 28427/30-07-2026: vulnerability management by essential entities (read 2026-10-29)

<!-- meta: theme=framework; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

- **What it is:** a circular of the National Cybersecurity Authority, signed by
  its Administrator, Α.Π. 28427 ΕΞ 2026, Athens, 30/07/2026 (digitally signed
  copy, "ΑΚΡΙΒΕΣ ΑΝΤΙΓΡΑΦΟ"). Not a ΦΕΚ act. Issued by the General Directorate
  of Staff Planning (Τμήμα Απαιτήσεων και Αρχιτεκτονικής Ασφάλειας).
- **File read:** https://cyber.gov.gr/wp-content/uploads/2026/09/Διαχείριση-ευπαθειών-από-τις-βασικές-οντότητες-του-ν.-5160-2024.pdf,
  7 pages, all with a text layer, sha256
  `9c6c8d88c67b90206903793df3fb576c70d015e3eb7ad94f2b71a14e1d604993`; uploaded
  to the site on 2026-09-16 (media library). Read in full on 2026-10-29:
  single column, `pdftotext -layout` and plain mode agree, including the
  annex table.
- **Addressees:** first of all the Υ.Α.Σ.Π.Ε. of the essential entities, then
  ministries, decentralised administrations and independent authorities; the
  ΓΕΕΘΑ and the ΕΥΠ in copy.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Subject | ΘΕΜΑ | "ΘΕΜΑ: Διαχείριση ευπαθειών πληροφοριακών συστημάτων από τις βασικές οντότητες του ν. 5160/2024." | Vulnerability management of information systems by the essential entities of Law 5160/2024. | ✅ |
| Its basis: the law and the ΚΥΑ as a whole, no article named | ΣΧΕΤ | "ΣΧΕΤ: α. Ο ν. 5160/2024 (Α’ 195) β. Η ΚΥΑ 1689/2025 (Β΄ 2186)" | Ref.: (a) Law 5160/2024; (b) ΚΥΑ 1689/2025. | ✅ |
| **Its modality: a framework of guidance, for essential entities** | §2 | "Η Εθνική Αρχή Κυβερνοασφάλειας, λαμβάνοντας υπόψη τις εξελίξεις αυτές, καθώς και τις υποχρεώσεις που απορρέουν από τα α’ και β’ σχετικά για τις βασικές οντότητες του ν. 5160/2024, παραθέτει πλαίσιο οδηγιών για την αποτελεσματική διαχείριση των τεχνικών ευπαθειών των πληροφοριακών τους συστημάτων:" | Taking these developments into account, and the obligations of the essential entities under (a) and (b), the Authority sets out a framework of guidance for the effective management of the technical vulnerabilities of their information systems: | ✅ |
| Four risk criteria to prioritise remediation | §2 Α (1) to (4) | "(1) Είναι το ευπαθές πληροφοριακό αγαθό εκτεθειμένο στο διαδίκτυο;" · "(2) Έχει επιβεβαιωθεί ότι η ευπάθεια αποτελεί αντικείμενο ενεργούς εκμετάλλευσης;" · "(3) Είναι οι επιτιθέμενοι ικανοί να αυτοματοποιήσουν όλα τα απαραίτητα βήματα για την εκμετάλλευση της ευπάθειας;" · "(4) Τεχνικός αντίκτυπος (technical impact): μετά την εκμετάλλευση της ευπάθειας, οι επιτιθέμενοι αποκτούν μερικό ή πλήρη έλεγχο του ευπαθούς πληροφοριακού αγαθού;" | Is the asset exposed to the internet? Is active exploitation confirmed? Can attackers automate every step of exploitation? Does exploitation give partial or total control? | ✅ |
| Active exploitation is read in CISA's KEV catalogue | §2 Α (2) | "Μία βασική πηγή πληροφόρησης για την εν λόγω παράμετρο αποτελεί ο κατάλογος KEV (Known Exploited Vulnerabilities Catalog) της Υπηρεσίας Κυβερνοασφάλειας και Ασφάλειας Υποδομών των ΗΠΑ (Cybersecurity and infrastructure Security Agency – CISA)" | A main source for this parameter is the KEV catalogue of the US CISA. | ✅ |
| **The timelines are recommended, in an annex** | §2 Α | "Στο συνημμένο παράρτημα παρατίθεται πίνακας με συνιστώμενα χρονοδιαγράμματα για τις ενέργειες αποκατάστασης των οργανισμών, ανάλογα με το συνδυασμό των απαντήσεων στα 4 παραπάνω κριτήρια." | The attached annex gives a table of recommended remediation timelines according to the combination of answers to the four criteria. | ✅ |
| Some cases call for remediation within three days | §2 Α | "τονίζεται ότι με βάση το συνδυασμό των απαντήσεων στον πίνακα, υπάρχουν περιπτώσεις ευπαθειών που χρήζουν άμεσης αποκατάστασης εντός τριών ημερών το αργότερο." | Depending on the answers, some vulnerabilities need immediate remediation within three days at the latest. | ✅ |
| Test patches where criticality requires it | §2 Β | "Διενεργήστε δοκιμές (testing) των ενημερώσεων ασφάλειας πριν την εγκατάστασή τους σε παραγωγικό περιβάλλον, σε όσα συστήματα αυτό απαιτείται βάσει της κρισιμότητας του συστήματος και του δυνητικού επιχειρησιακού αντικτύπου." | Test security updates before production on the systems where criticality and potential operational impact require it. | ✅ |
| Automatic updates for Windows and browsers on workstations | §2 Γ | "Διασφαλίστε τη λήψη αυτοματοποιημένων ενημερώσεων και ενημερώσεων ασφάλειας για τα λειτουργικά συστήματα Windows και για τα προγράμματα περιήγησης στο διαδίκτυο (web browsers) στους σταθμούς εργασίας χρηστών." | Ensure automated updates and security updates for Windows and web browsers on user workstations. | ✅ |
| Vulnerability scans, monthly or more often as a recommendation | §2 Δ | "Γενικά, η συχνότητα συνίσταται να είναι σε μηνιαία βάση ή και νωρίτερα, ανάλογα με τις δυνατότητες της οντότητας. Δώστε απόλυτη προτεραιότητα στους διακομιστές και στις δικτυακές συσκευές που είναι προσβάσιμες από το διαδίκτυο." | In general the recommended frequency is monthly or more often, depending on the entity's capabilities; absolute priority to internet-facing servers and network devices. | ✅ |
| A remediation plan; an exception is documented, compensated and monitored | §2 Ε | "Στις περιπτώσεις κατά τις οποίες η αποκατάσταση μιας ευπάθειας δεν είναι άμεσα εφικτή ή αποφασίζεται η μη εφαρμογή διαθέσιμης ενημέρωσης ασφάλειας, η σχετική απόφαση θα πρέπει να τεκμηριώνεται επαρκώς, να εφαρμόζονται κατάλληλα αντισταθμιστικά μέτρα ασφάλειας και να παρακολουθείται ο υπολειπόμενος κίνδυνος έως την οριστική αντιμετώπιση της ευπάθειας." | Where remediation is not immediately feasible or an available update is not applied, the decision should be adequately documented, compensating measures applied and the residual risk monitored until the vulnerability is finally dealt with. | ✅ |
| Reliable information sources | §2 Στ | "Εντοπίστε αξιόπιστες και αναγνωρισμένες πηγές πληροφόρησης σχετικές με ευπάθειες τεχνολογιών πληροφορικής και επικοινωνιών, όπως είναι κατασκευαστές και προμηθευτές λογισμικού, ομάδες απόκρισης για περιστατικά κυβερνοασφάλειας (CSIRTs) ή αρμόδιες κρατικές Αρχές." | Identify reliable, recognised sources on ICT vulnerabilities: vendors and suppliers, CSIRTs, competent state authorities. | ✅ |
| Replace systems out of vendor support | §2 Ζ | "Υλοποιήστε, κατά προτεραιότητα, πλάνο άμεσης αντικατάστασης των λειτουργικών συστημάτων και του εξοπλισμού πληροφορικής που δεν λαμβάνουν, πλέον, από τον κατασκευαστή ενημερώσεις ασφάλειας και τεχνική υποστήριξη." | Implement as a priority a plan to replace operating systems and IT equipment that no longer receive security updates and support from the manufacturer. | ✅ |
| **The one "must": update the policies and procedures** | §3 | "Με βάση τα παραπάνω, οι βασικές οντότητες του ν. 5160/2024 πρέπει να επικαιροποιούν τις πολιτικές και διαδικασίες διαχείρισης ευπαθειών, συμπεριλαμβανομένων των ρόλων και αντίστοιχων ευθυνών, ώστε να προσαρμόζονται στα νέα δεδομένα." | On that basis, the essential entities of Law 5160/2024 must update their vulnerability-management policies and procedures, including roles and responsibilities, to adapt them to the new situation. | ✅ |
| Addressed for action to the Υ.Α.Σ.Π.Ε. of essential entities | Πίνακας αποδεκτών | "ΠΡΟΣ ΕΝΕΡΓΕΙΑ: 1. Υπεύθυνοι Ασφάλειας Συστημάτων Πληροφορικής και Επικοινωνιών (Υ.Α.Σ.Π.Ε.) των βασικών οντοτήτων" | For action: the security officers (Υ.Α.Σ.Π.Ε.) of the essential entities. | ✅ |

**The annex, «Συνιστώμενο χρονοδιάγραμμα αποκατάστασης ευπαθειών»**
(recommended remediation timeline), transcribed cell for cell. Columns: "Η
ευπάθεια είναι εκτεθειμένη στο διαδίκτυο;" · "Η ευπάθεια αποτελεί αντικείμενο
ενεργούς εκμετάλλευσης;" · "Τα βήματα εκμετάλλευσης της ευπάθειας μπορούν να
αυτοματοποιηθούν από τον επιτιθέμενο;" · "Ποιος είναι ο τεχνικός αντίκτυπος της
ευπάθειας;" · "Συνιστώμενο μέγιστο χρονοδιάγραμμα για ενέργειες αποκατάστασης".

| # | Εκτεθειμένη | Ενεργή εκμετάλλευση | Αυτοματοποίηση | Τεχνικός αντίκτυπος | Συνιστώμενο μέγιστο χρονοδιάγραμμα |
|---|---|---|---|---|---|
| 1 | Ναι | Ναι | Ναι | Πλήρης έλεγχος | 3 ημέρες |
| 2 | Ναι | Ναι | Ναι | Μερικός έλεγχος | 3 ημέρες |
| 3 | Ναι | Ναι | Όχι | Πλήρης έλεγχος | 3 ημέρες |
| 4 | Ναι | Ναι | Όχι | Μερικός έλεγχος | 14 ημέρες |
| 5 | Ναι | Όχι | Ναι | Πλήρης έλεγχος | 3 ημέρες |
| 6 | Ναι | Όχι | Ναι | Μερικός έλεγχος | 14 ημέρες |
| 7 | Ναι | Όχι | Όχι | Πλήρης έλεγχος | 14 ημέρες |
| 8 | Ναι | Όχι | Όχι | Μερικός έλεγχος | 60 ημέρες |
| 9 | Όχι | Ναι | Ναι | Πλήρης έλεγχος | 3 ημέρες |
| 10 | Όχι | Ναι | Ναι | Μερικός έλεγχος | 14 ημέρες |
| 11 | Όχι | Ναι | Όχι | Πλήρης έλεγχος | 14 ημέρες |
| 12 | Όχι | Ναι | Όχι | Μερικός έλεγχος | 14 ημέρες |
| 13 | Όχι | Όχι | Ναι | Πλήρης έλεγχος | 60 ημέρες |
| 14 | Όχι | Όχι | Ναι | Μερικός έλεγχος | 60 ημέρες |
| 15 | Όχι | Όχι | Όχι | Πλήρης έλεγχος | Αποκατάσταση κατά την επόμενη αναβάθμιση του συστήματος |
| 16 | Όχι | Όχι | Όχι | Μερικός έλεγχος | Αποκατάσταση κατά την επόμενη αναβάθμιση του συστήματος |

**How the product may use it.** The circular addresses **βασικές** entities only,
and its own words grade it: the criteria and timelines are guidance
("πλαίσιο οδηγιών"), the table's maxima are "συνιστώμενα" (recommended), and the
single "πρέπει" is §3, updating the vulnerability policies and procedures. A
document may say that the Authority recommends these maxima to essential
entities; it may not present 3, 14 or 60 days as a statutory deadline, nor
apply the circular to a σημαντική entity. It names no article of the ΚΥΑ; that
the ΚΥΑ's vulnerability domain is its Άρθρο 17 is our cross-reference, not the
circular's.

## Εγκύκλιος 20718/08-06-2026: priority measures for public-sector essential entities (read 2026-10-29)

<!-- meta: theme=registration,governance,sanctions; type=reference; date=2026-10-29; surfaces=docs; guard=none -->

- **What it is:** a circular of the Authority, signed by its Administrator, Α.Π.
  20718 ΕΞ 2026, Athens, 08/06/2026 (digitally signed copy). Not a ΦΕΚ act.
- **File read:** https://cyber.gov.gr/wp-content/uploads/2026/09/Υλοποίηση-μέτρων-κυβερνοασφάλειας-από-το-δημόσιο-τομέα.pdf,
  5 pages, all with a text layer, sha256
  `deebcbeeb8cb3097d5b00d6c030aca4f8ab8e900c32193be8a15cf29f6ed1cbf`; uploaded
  to the site on 2026-09-16. Read in full on 2026-10-29. The table of §5 runs
  over a page break and repeats its header; it is transcribed once below.
- **Addressees:** ministries, decentralised administrations, independent
  authorities, the Bank of Greece and the civil aviation bodies, asked to pass
  it to every body they supervise.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| Subject | ΘΕΜΑ | "ΘΕΜΑ: Υλοποίηση μέτρων κυβερνοασφάλειας από τις υπηρεσίες του Δημόσιου Tομέα που εμπίπτουν στο πεδίο εφαρμογής του ν. 5160/2024." | Implementation of cybersecurity measures by public-sector services within the scope of Law 5160/2024. (The "T" of "Tομέα" is a Latin letter in the original.) | ✅ |
| References | ΣΧΕΤ | "ΣΧΕΤ: α. Ο Ν. 5160/2024 (Α’ 195) β. Η υπ’ αριθμ. 1689/2025 ΚΥΑ (Β΄ 2186) γ. Η υπ’ αριθμ. 1899/2025 ΚΥΑ (Β΄ 4250)" | Ref.: Law 5160/2024, ΚΥΑ 1689/2025, "ΚΥΑ" 1899/2025. **1899/2025 is a Υπουργική Απόφαση**, signed by one minister ("Ο ΥΠΟΥΡΓΟΣ ΨΗΦΙΑΚΗΣ ΔΙΑΚΥΒΕΡΝΗΣΗΣ", ΦΕΚ Β΄ 4250, re-checked 2026-10-29), not a joint decision: the circular's label is wrong, this record keeps "ΥΑ". | ✅ |
| It concerns public-administration bodies that are essential entities, under their management bodies' responsibility | §2 | "Η Εθνική Αρχή Κυβερνοασφάλειας, λαμβάνοντας υπόψη τις εξελίξεις αυτές, καθώς και τις υποχρεώσεις που απορρέουν από τα α’ και β’ σχετικά για τους φορείς της δημόσιας διοίκησης, οι οποίοι αποτελούν βασικές οντότητες του Ν. 5160/2024, επισημαίνει την ανάγκη συμμόρφωσης των φορέων αυτών, με ευθύνη των ανώτατων οργάνων διοίκησής τους (α. 14 του Ν. 5160/2024) προς τις έννομες υποχρεώσεις τους." | The Authority stresses that public-administration bodies that are essential entities must comply with their legal obligations, under the responsibility of their top management bodies (art. 14). | ✅ |
| Personal responsibility of the management body; the public-sector fine band per breach | §3 | "Οι ανωτέρω υποχρεώσεις βαρύνουν προσωπικώς τα μέλη των οργάνων διοίκησης κάθε φορέα" · "Σε περίπτωση μη συμμόρφωσης εφαρμόζονται οι διατάξεις του Κεφαλαίου Ζ΄ του Ν. 5160/2024, όπως η επιβολή διοικητικών προστίμων από είκοσι χιλιάδες (20.000) έως πεντακόσιες χιλιάδες (500.000) ευρώ ανά παράβαση." | These obligations weigh personally on the members of each body's management bodies. In case of non-compliance, Chapter Ζ of the law applies, such as administrative fines from EUR 20,000 to EUR 500,000 per breach. | ✅ (consistent with art. 26 §8) |
| The priority actions | §4, lead-in | "Οι κατά προτεραιότητα ενέργειες που πρέπει να υλοποιηθούν από τις Υπηρεσίες του Δημοσίου Τομέα που αποτελούν βασικές οντότητες του ν. 5160/2024 είναι:" | The priority actions to be carried out by public-sector services that are essential entities are: | ✅ |
| Registration, if not done; update at least yearly and on every change | §4 α. | "Η εγγραφή του φορέα στο Μητρώο Βασικών και Σημαντικών Οντοτήτων της Εθνικής Αρχής Κυβερνοασφάλειας μέσω της ψηφιακής πλατφόρμας https://nis2register.cyber.gov.gr/app/home, εφόσον δεν έχει ήδη ολοκληρωθεί, καθώς και η επικαιροποίηση των σχετικών στοιχείων. Όσον αφορά στην επικαιροποίηση, θα πρέπει να πραγματοποιείται κατ’ ελάχιστον σε ετήσια βάση και σε κάθε περίπτωση που υφίστανται αλλαγές." | Registration in the Register of Essential and Important Entities through the platform, if not already done, and updating of the data at least once a year and whenever there are changes. | ✅ |
| MFA, at least on internet-facing user accounts, all admin accounts, all supplier accounts | §4 β. | "Η άμεση εφαρμογή αυθεντικοποίησης πολλαπλών παραγόντων (multi-factor authentication, MFA) κατ’ ελάχιστον: (1) σε όλους τους λογαριασμούς χρηστών που είναι προσβάσιμοι από το διαδίκτυο, ιδίως υπηρεσίες ηλεκτρονικού ταχυδρομείου, VPN, RDP (Remote Desktop Protocol), υπηρεσίες νεφοϋπολογιστικής και web portals, (2) σε όλους τους διαχειριστικούς λογαριασμούς (administrative accounts) και (3) σε όλους τους λογαριασμούς προμηθευτών και παρόχων υπηρεσιών που αποκτούν πρόσβαση στην υποδομή του φορέα." | Immediate MFA at least on all internet-accessible user accounts (e-mail, VPN, RDP, cloud, portals), all administrative accounts, and all accounts of suppliers and service providers with access to the body's infrastructure. | ✅ |
| Move on-premises e-mail to a cloud provider where it cannot be maintained; harden it meanwhile | §4 γ. | "Η μετάπτωση των υπηρεσιών ηλεκτρονικού ταχυδρομείου που λειτουργούν σε τοπικές υποδομές (on-premises), σε πάροχο υπηρεσιών νεφοϋπολογιστικής. Το εν λόγω μέτρο κρίνεται απαραίτητο στις περιπτώσεις Δημόσιων φορέων όπου δεν είναι εφικτή η εφαρμογή των απαιτούμενων μέτρων υποστήριξης – συντήρησης." · "Έως την ολοκλήρωση της μετάπτωσης, οι φορείς θα πρέπει να εφαρμόζουν μέτρα τεχνικής θωράκισης των υφιστάμενων on-premises διακομιστών, όπως ενημερώσεις ασφάλειας εντός 48 ωρών για κρίσιμες ευπάθειες, MFA σε όλους τους λογαριασμούς, αυστηρό περιορισμό εξωτερικής πρόσβασης στο διαχειριστικό περιβάλλον και ενεργοποίηση κεντρικής καταγραφής και παρακολούθησης συμβάντων." | Migrate on-premises e-mail to a cloud provider, necessary where the body cannot support and maintain it; until then harden the servers: security updates within 48 hours for critical vulnerabilities, MFA on all accounts, strict limits on external admin access, central logging and monitoring. | ✅ |
| Where the evidence goes | §6 | "Η υποβολή των ανωτέρω στοιχείων στην ΕΑΚ γίνεται μέσω της ηλεκτρονικής διεύθυνσης assessment@cyber.gov.gr." | The information is submitted to the Authority at assessment@cyber.gov.gr. | ✅ |
| **Meeting §4 is not full compliance** | §7 | "Τονίζεται ότι η τήρηση των μέτρων της παρ. 4 του παρόντος δεν συνιστά πλήρη συμμόρφωση προς τις απαιτήσεις των (α) και (β) σχετικών." | Meeting the measures of §4 does not amount to full compliance with the law and the ΚΥΑ. | ✅ |

**§5, «Τα παραπάνω μέτρα υλοποιούνται ως εξής:»**, transcribed cell for cell:

| Ενέργεια | Χρονοδιάγραμμα Υλοποίησης | Υποβολή στοιχείων στην Ε.Α.Κ. |
|---|---|---|
| Εγγραφή στο Μητρώο Βασικών και Σημαντικών Οντοτήτων (περ. α’) | Εντός 30 ημερών | Μέσω της πλατφόρμας nis2register.cyber.gov.gr |
| Εφαρμογή MFA σε διαχειριστικούς λογαριασμούς και σε όλους τους λογαριασμούς προμηθευτών [παρ. 4.β (2) & (3)] | Εντός 90 ημερών | Επιβεβαίωση εφαρμογής |
| Εφαρμογή MFA στους λοιπούς λογαριασμούς εντός πεδίου εφαρμογής [παρ. 4.β (1)] | Εντός 180 ημερών | Επιβεβαίωση εφαρμογής |
| Σχέδιο μετάπτωσης email και άμεση τεχνική θωράκιση υφιστάμενων on-premises διακομιστών (παρ. 4.γ)* | Εντός 90 ημερών | Υποβολή σχεδίου μετάπτωσης |
| Ολοκλήρωση μετάπτωσης email σε νεφοϋπολογιστική υποδομή ή έγγραφη βεβαίωση περί της λήψης των απαιτούμενων μέτρων υποστήριξης – συντήρησης της υπάρχουσας υποδομής (παρ. 4.γ) | Εντός 10 μηνών | Δήλωση ολοκλήρωσης ή έγγραφη βεβαίωση περί της λήψης των απαιτούμενων μέτρων υποστήριξης – συντήρησης της υπάρχουσας υποδομής. |

"* όπου δεν είναι εφικτή η εφαρμογή των απαιτούμενων μέτρων υποστήριξης – συντήρησης."

⚠️ **The circular does not say from when the 30 days, 90 days, 180 days and 10
months run.** Not from its date, not from receipt, not from entry into scope.
Do not compute a calendar date from it. And it concerns public-sector bodies
that are essential entities only: no private entity, no σημαντική.

## The Authority's incident page and its two report forms (read 2026-10-29)

<!-- meta: theme=incident; type=reference; date=2026-10-29; surfaces=ui,marketing,docs; guard=apps/web/test/country-greece-fiche.test.tsx -->

| Source | URL | Retrieved | sha256 of the file read |
|---|---|---|---|
| Authority, «Αναφορά Περιστατικών» (WordPress page modified 2026-07-15) | https://cyber.gov.gr/kyvernoepitheseis/anafora-symvanton/ | 2026-10-29 | `26d86d6a411dbfdf397382cfeab5ea04c15a1266480bac02b91afede4782bf58` |
| 24-hour form, «260706_Φόρμα-Αναφοράς-24ωρών.xlsx» | https://cyber.gov.gr/wp-content/uploads/2026/07/260706_Φόρμα-Αναφοράς-24ωρών.xlsx | 2026-10-29 | `f5a903b7aec7d14138b7055b22875ca4fc5562c1cf9dde687f2de5c411f12210` |
| 72-hour and final-report form, «260706_Φόρμα-Αναφοράς-72ωρών-Τελικής-Έκθεσης.xlsx» | https://cyber.gov.gr/wp-content/uploads/2026/07/260706_Φόρμα-Αναφοράς-72ωρών-Τελικής-Έκθεσης.xlsx | 2026-10-29 | `2d0bd84941c97ce017bbbbd916b85c1473fa225d95e2836406c342bdac0a64cf` |

The forms were read through their shared strings only (`xl/sharedStrings.xml`),
no macro or formula executed. The HTML hash identifies the copy read; the page
changes.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| **The reporting channel: the form, by e-mail** | Incident page | "Για την αναφορά περιστατικών ασφαλείας παρακαλούμε αποστείλετε την αντίστοιχη φόρμα στο email: incident[@]cyber.gov.gr" | To report security incidents, please send the corresponding form to incident@cyber.gov.gr. | ✅ |
| Two forms, updated, in use since 9/12/2025 | Incident page | "Η Εθνική Αρχή Κυβερνοασφάλειας, σε πλήρη ευθυγράμμιση με τις απαιτήσεις της ευρωπαϊκής οδηγίας NIS2, διαθέτει δύο επικαιροποιημένες φόρμες αναφοράς περιστατικού (από 9/12/2025), προκειμένου οι ενδιαφερόμενοι να κάνουν χρήση σύμφωνα με τις κανονιστικές τους υποχρεώσεις." | The Authority provides two updated incident report forms (since 9/12/2025). The files linked on 2026-10-29 carry the prefix 260706, i.e. a revision of 6 July 2026; the 251209 versions are still linked beside them. | ✅ |
| The simple form is for the 24 h warning | Incident page | "Η παρούσα φόρμα δύναται να χρησιμοποιηθεί για την έγκαιρη προειδοποίηση (24 ωρών) από βασικές και σημαντικές οντότητες που έχουν κανονιστική υποχρέωση να υποβάλουν αναφορά για τα σημαντικά περιστατικά." | This form may be used for the early warning (24 hours) by essential and important entities obliged to report significant incidents. | ✅ (the HTML puts no-break spaces around its bold words; normalised here) |
| The detailed form is for the 72 h and final reports | Incident page | "Η παρούσα φόρμα δύναται να χρησιμοποιηθεί για την ενδιάμεση (72 ωρών) και την τελική αναφορά από βασικές και σημαντικές οντότητες που έχουν κανονιστική υποχρέωση να υποβάλουν αναφορά για τα σημαντικά περιστατικά." | This form may be used for the intermediate (72 hours) and the final report (spacing normalised as above). The page calls the 72-hour act "ενδιάμεση"; the statute calls it "κοινοποίηση περιστατικού" (art. 16 §4 β)) and keeps "ενδιάμεση έκθεση" for the report on request (γ)). The product follows the statute. | ✅ |
| Public-sector routing, restated | Incident page | "Ειδικότερα, οι δημόσιες οντότητες, της Κεντρικής Κυβέρνησης και των Οργανισμών Τοπικής Αυτοδιοίκησης Α΄ και Β΄ βαθμού, κοινοποιούν τα περιστατικά του παρόντος άρθρου, στην CSIRT της Εθνικής Υπηρεσίας Πληροφοριών, με ταυτόχρονη ενημέρωση της Εθνικής Αρχής Κυβερνοασφάλειας." | Public entities of central government and first- and second-tier local government notify the ΕΥΠ's CSIRT, informing the Authority at the same time (as art. 16 §1). The HTML writes "Α΄" and "Β΄" as a letter, a space and a combining acute; normalised here. | ✅ |
| Significance: the page restates the statutory test, with no threshold | Incident page | "Ένα περιστατικό, θεωρείται σημαντικό αν: Έχει προκαλέσει, ή μπορεί να προκαλέσει, σοβαρή λειτουργική διατάραξη των υπηρεσιών ή οικονομική ζημία, για την οικεία οντότητα." | The art. 16 §3 test in the page's words. | ✅ |
| The 24 h form's own title | 24 h form, shared string 29 | "Φόρμα Αναφοράς Έγκαιρης Προειδοποίησης 24ωρών για Βασικές και Σημαντικές Οντότητες κατά NIS2" | 24-hour early-warning report form for essential and important entities. | ✅ |
| Neither form sets a threshold: the entity states why the incident is significant | 24 h form, shared string 79; 72 h form, shared string 71 | "Σε περίπτωση υποχρεωτικής αναφοράς αναφερετε συνέπειες ή ενδεχόμενες συνέπειες που καθιστούν το περιστατικό σημαντικό" | For a mandatory report, state the consequences or potential consequences that make the incident significant. | ✅ |

## Corrections to the previous version of this file

<!-- meta: theme=statute; type=stale-statute,wrong-citation; date=2026-08-06; surfaces=docs; guard=none -->

1. **"One sub-point deferred by 1 year (→ 27.11.2025)"** — superseded. ΚΥΑ
   2267/2025 moved it to **27.11.2026**. First-tier local authorities are out of
   scope until then.
2. **"deadline 17.01.2025"** for the art. 19 §1 subset — that is the statutory
   date, but it was extended three times and the operative date was
   **30.09.2025**, now expired.
3. **"Changes … within 3 months"** — true only for the art. 19 §1 subset. The
   general rule for βασικές/σημαντικές is **2 weeks** (art. 4 §4).
4. The build plan's **"Άρθρο 27 sanctions"** is wrong; sanctions are **Άρθρο 26**.
5. The build plan's P0.1 list omitted **ΚΥΑ 1990/2025**, which is the operative
   extension, and mis-cast ΚΥΑ 2267/2025 as a registration extension.

## Correction made 2026-10-29: the art. 30 §5 strategy was approved on 16.12.2025

<!-- meta: theme=statute; type=status-error; date=2026-10-29; surfaces=docs; guard=none; debt=an instrument the Authority publishes outside its legislation index can only be found by reading its other pages; no test sees it -->

The P0.4 table said of art. 30 §5 "❌ not published (the index carries only the
2018 and 2020 strategies)". The index still carries only those two on
2026-10-29, but the Authority's strategy page
(https://cyber.gov.gr/eak/ethniki-stratigiki-kyvernoasfaleias-2/) links "Νέα
Εθνική Στρατηγική Κυβερνοασφάλειας 2026-2030 (Ελληνική έκδοση, 17 Δεκ. 2025)",
and the first page of that file is the approving decision. Read on 2026-10-29:
https://cyber.gov.gr/wp-content/uploads/2025/12/ΕΣΚ-2026-2030.pdf, 115 pages,
sha256 `cc249f580a24cc07d512ceae977b4031315010e19a079a169147bc884c24cdde`
(page 1 read, the decision). The Diavgeia record of its ΑΔΑ
(`https://diavgeia.gov.gr/opendata/decisions/ΨΜΑΞ46ΜΤΛΠ-Γ4Κ.json`) gives
"Υπουργική Απόφαση", issued 16.12.2025, no ΦΕΚ.

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The decision and its subject | Page 1 | "ΑΡ. ΠΡΩΤ. 2563/16.12.2025" · "ΘΕΜΑ: «Έγκριση της Εθνικής Στρατηγικής Κυβερνοασφάλειας 2026 – 2030»" · "Ο ΥΠΟΥΡΓΟΣ ΨΗΦΙΑΚΗΣ ΔΙΑΚΥΒΕΡΝΗΣΗΣ" | Prot. no. 2563/16.12.2025; approval of the National Cybersecurity Strategy 2026-2030; by the Minister of Digital Governance. | ✅ |
| Its legal basis is art. 7 and art. 30 §5 of ν. 5160/2024 | Page 1, recital 1 α) | "και ιδίως του άρθρου 7 και της παρ. 5 του άρθρου 30 αυτού," | and in particular art. 7 and art. 30(5) thereof. | ✅ |
| Operative part | Page 1 | "Την έγκριση της Εθνικής Στρατηγικής Κυβερνοασφάλειας 2026-2030, όπως αυτή αποτυπώνεται ακολούθως, σύμφωνα με τα οριζόμενα στο άρθρο 7 του ν. 5160/2024." | Approval of the strategy 2026-2030 as set out below, in accordance with art. 7. | ✅ |
| ΑΔΑ | Page 1 | "ΑΔΑ: ΨΜΑΞ46ΜΤΛΠ-Γ4Κ" | Diavgeia posting number. | ✅ |

The strategy imposes nothing on entities and is not used by the product. Its
115 pages were not read.

## Correction made 2026-10-29: the progress report is art. 16 §4 ε)

<!-- meta: theme=incident; type=wrong-citation; date=2026-10-29; surfaces=data,ui; guard=packages/regulatory-data/test/country-configs-incident-reporting.test.ts -->

`INCIDENT_REPORTING_GR` cited the progress report of an ongoing incident as
"ν. 5160/2024 άρθρο 16 παρ. 4 δ), τελευταίο εδάφιο", in English and Greek, on
the incident page's conditional stages. Art. 16 §4 runs α) to ε), and δ) ends
with its own list δα) to δδ); the progress report is ε), quoted in full in
"Ν. 5160/2024 re-read on 2026-10-29": "ε) σε περίπτωση εν εξελίξει
περιστατικού κατά τον χρόνο υποβολής της τελικής έκθεσης που αναφέρεται στην
περ. δ), οι οικείες οντότητες υποβάλλουν έκθεση προόδου τη δεδομένη στιγμή και
τελική έκθεση εντός ενός (1) μηνός από τον εκ μέρους τους χειρισμό του
σημαντικού περιστατικού." The basis now reads "άρθρο 16 παρ. 4 ε)". The rule
itself (a progress report, then the final report one month after handling)
was right.

## Still to pin (next `verify-legal-source` pass)

<!-- meta: theme=statute; type=needs-check; date=2026-10-29; surfaces=data; guard=none -->

Re-checked on 2026-10-29 against the index, the media library, the incident
page and, for item 1, the Authority's self-assessment pages. "Absent" means
absent from those; et.gr and Diavgeia were not searched systematically.

1. **Is the ΕΑΚ Gap Analysis Tool the "Οδηγός" of Άρθρο 18 §1 δ)?** Still
   unanswered. On 2026-10-29 the Authority's site carries three
   self-assessment artefacts and none says it is that Οδηγός: the ΕΑΚ Gap
   Analysis Tool of September 2025 (24 units, P0.6); a 19-unit
   «Εργαλείο αυτοαξιολόγησης της κυβερνοασφάλειας οργανισμών» (Excel, Greek
   version re-uploaded 2026-10-05, and a web version) on the «Πλαίσιο
   Προαγωγής της Αριστείας» page; and, beside it, a «Οδηγός Αυτοαξιολόγησης»
   whose decision (Α.Π. 31877 ΕΞ 2022, 20/07/2022, ΑΔΑ ΨΞΝΗ46ΜΤΛΠ-ΕΨΡ; first
   page read 2026-10-29) issues it for the operators of essential services
   under ν. 4577/2018 and Decision 1027/2019, both repealed by art. 32 of
   ν. 5160/2024: "Εκδίδουμε Οδηγό Αυτοαξιολόγησης της ασφάλειας των
   συστημάτων δικτύου και πληροφοριών των Φορέων Εκμετάλλευσης Βασικών
   Υπηρεσιών (ΦΕΒΥ)". It is the NIS1 instrument, not the ΚΥΑ's.
2. **Has the Άρθρο 30 §14 template for the ενιαία πολιτική been issued?**
   Still absent on the index on 2026-10-29, and no file of the media library is
   a template or a decision under art. 30 §14. The annual filing by βασικές
   (art. 15 §5 β)) still has no official form, and no filing-grade artefact can
   be built.
3. **Do the Άρθρο 30 §§20 to 23 instruments exist?** Supervision fee, certified
   inspectors, Audit & Supervision Regulation, fine procedure: still absent on
   the index and in the media library on 2026-10-29. The public-sector circular
   of 08.06.2026 restates the art. 26 band for public bodies (see its section)
   but gives no procedure.
4. **Άρθρο 16 significant-incident thresholds** (art. 30 §16): still absent on
   the index and in the media library on 2026-10-29. The Authority's incident
   page restates the statutory test of art. 16 §3, and both report forms ask
   the entity to state "συνέπειες ή ενδεχόμενες συνέπειες που καθιστούν το
   περιστατικό σημαντικό"; neither sets a threshold. What counts as a
   reportable incident is still the statutory test only.
5. **Ν. 5305/2026 art. 33**: needs OCR or an et.gr text copy. Not attempted on
   2026-10-29.
6. **A registration extension later than ΚΥΑ 1990/2025:** none on the index or
   in the media library on 2026-10-29. The public-sector circular of
   08.06.2026 asks public essential entities not yet registered to register
   ("εφόσον δεν έχει ήδη ολοκληρωθεί"), with a 30-day period whose start it does
   not state; that is an instruction, not an extension of the ΚΥΑ deadline.
7. **New: the art. 31 §1 declaratory act.** Whether the Administrator has
   declared the Authority's CSIRT adequately resourced, which ends the General
   Staff unit's transitional role, is not on the index and was not found.

## Extraction notes (for whoever reads these PDFs next)

<!-- meta: theme=statute; type=reference; date=2026-08-06; surfaces=docs; guard=none -->

- The ΦΕΚ PDFs are **two-column**. `pdftotext -layout` interleaves the two
  columns onto the same output lines and silently produces sentences that do not
  exist in the statute. Use `pdftotext -enc UTF-8` **without** `-layout`, which
  reads column by column correctly. Verified on ν. 5160/2024 Άρθρο 34/35, where
  `-layout` merged two unrelated articles.
- **`curl` works directly on cyber.gov.gr** with a normal browser User-Agent —
  no need to go via `WebFetch` and the tool-results directory. Every instrument
  in the register above was fetched that way in a single pass, and the site's
  legislation index page carries the direct PDF href for each one.
- A ΦΕΚ issue frequently contains **several unrelated decisions**. ΦΕΚ Β΄ 463
  carries a disability-daycare decision alongside ΚΥΑ 1381; ΦΕΚ Β΄ 1882 carries
  an ΑΣΕΠ recruitment decision alongside ΚΥΑ 1645; ΦΕΚ Β΄ 5472 carries a health
  service decision alongside ΚΥΑ 2267. Always locate the decision by its
  **Αριθμ.** number, never by page position.
- The ΕΑΚ tool is a real `.xlsx`; `openpyxl` reads it. Unit 16 is the only unit
  with a third numbering level (`16.1.1`), which is why a naive `N.M` parse
  returns 153 items instead of 169.


## Legal-frame corpus of the generated documents (delivered 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension of the "validated skeleton" (see docs/legal-sources/italy.md, entry of
2026-08-25): the « Νομικό και Κανονιστικό Πλαίσιο » section of the documents generated for this country is
composed by `packages/regulatory-data/src/doc-corpus/legal-frames.ts` from
the verified facts of THIS index and inserted verbatim by ai-service (placeholder
`{{QUADRO_LEGALE}}`). Content of the block: ν. 5160/2024 (EIF 27-11-2024) + ΚΥΑ 1689/2025 : όργανα διοίκησης άρθρο 14 (annual staff training), μέτρα άρθρο 15 §2, κοινοποίηση άρθρο 16 §4 (24h/72h/1 month), κυρώσεις άρθρο 26 (article only, amounts not pinned). Rule: any fact absent from
this index is ABSENT from the block; enriching means verifying here first.

## Public country fiches /en/eu/greece and /el/eu/greece (delivered 2026-10-29)

<!-- meta: theme=statute,registration,incident,sanctions,framework; type=delivery; date=2026-10-29; surfaces=ui,marketing; guard=apps/web/test/country-greece-fiche.test.tsx -->

The English baseline is `COUNTRIES_SEO.greece` in
`apps/web/src/lib/countries-seo.ts`; the Greek fiche is `GREECE_EL` in
`apps/web/src/lib/countries/greece.ts`. Every fact on them rests on a line of
this file, and the guard asserts each key fact twice: on the fiche, and as its
verbatim line here.

| Field | Line of this file that carries it |
|---|---|
| Law, ΦΕΚ, in force 2024-11-27 | Official citation of Ν. 5160/2024; Άρθρο 45 §1 |
| Previous regime, repealed | Re-read 2026-10-29, "What the law repealed" (Άρθρο 32) |
| Authority, its Greek and foreign names, ΕΑΚ | Ν. 5086/2024 Άρθρο 3 §1; Ν. 5160/2024 Άρθρο 23 §1; Εγκύκλιος 20718 §6 ("στην ΕΑΚ") |
| CSIRT, and the ΕΥΠ's CERT for the public sector | Re-read 2026-10-29: Άρθρο 10 §1, Άρθρο 16 §1 |
| Scope, the two classes | Re-read 2026-10-29: Άρθρο 3 §§1 to 4, Άρθρο 4 §1 δ) and ζ); P0.2 for Άρθρο 4 §1 α) to γ) and §2 |
| Registration duty, window, platform, taxisnet, e-mail route, two weeks | Re-read 2026-10-29: Άρθρο 4 §3; P0.1 (ΚΥΑ 1381, 1645, 1990); P0.2 (Άρθρο 4 §4); Εγκύκλιος 20718 §4 α. (the platform address) |
| Incident clock, the names of the acts, the trust-service derogation | Re-read 2026-10-29: Άρθρο 16 §4 α) to ε) and last subparagraph |
| Reporting channel incident@cyber.gov.gr | "The Authority's incident page and its two report forms" |
| No national significance threshold | "Still to pin", item 4 |
| Fines | P0.3, re-checked 2026-10-29 (Άρθρο 26 §§2 to 5, 8, 9) |
| ΚΥΑ 1689/2025: title, ΦΕΚ, in force, 22 articles, pen tests, self-assessment | ΚΥΑ 1689/2025 section (official citation, Άρθρο 26, P0.5, Άρθρο 18 §1 β) and δ)); Άρθρο 1 below |
| Υ.Α.Σ.Π.Ε. and the single cybersecurity policy | Άρθρο 15 §5 α) and β); ΥΑ 1899/2025 section |
| Deferral of first-tier local authorities to 27.11.2026 | "ΚΥΑ 2267/2025 is not a registration extension" |
| The two circulars | Their sections, read 2026-10-29 |

Three facts were read for the fiches on 2026-10-29 and are recorded here:

| Fact | Where | Verbatim (official) | English gloss | Status |
|---|---|---|---|---|
| The ΚΥΑ sets out the measures of art. 15 §2 of the law | ΚΥΑ 1689/2025, Άρθρο 1 | "Σκοπός της παρούσας είναι ο καθορισμός του εθνικού πλαισίου απαιτήσεων κυβερνοασφάλειας, το οποίο περιλαμβάνει τα τεχνικά, επιχειρησιακά και οργανωτικά μέτρα διαχείρισης των κινδύνων κυβερνοασφάλειας της παρ. 2 του άρθρου 15 του ν. 5160/2024." | The decision lays down the national framework of cybersecurity requirements, comprising the technical, operational and organisational risk-management measures of art. 15(2) of Law 5160/2024. | ✅ (file https://cyber.gov.gr/wp-content/uploads/2025/05/20250202186.pdf, sha256 `dbebe444851904d0ddae812772906aaa6accb51d63c8f7f6c3150cfefbe33b71`) |
| The ΚΥΑ never abbreviates its own title | ΚΥΑ 1689/2025, whole text | No occurrence of "ΕΠΑΚ" or "Ε.Π.Α.Κ." in the extracted text. "ΕΠΑΚ" is Reglyze's label (framework key `epak`), not the Authority's, so the fiches name the framework by its title and number. | | ✅ (same file) |
| ΥΑ 1899/2025 is signed by one minister | ΥΑ 1899/2025, heading | "Αριθμ. 1899" · "Ο ΥΠΟΥΡΓΟΣ ΨΗΦΙΑΚΗΣ ΔΙΑΚΥΒΕΡΝΗΣΗΣ" | A ministerial decision, not a joint one; circular 20718 calls it "ΚΥΑ" in its references. | ✅ (file https://cyber.gov.gr/wp-content/uploads/2025/08/ΑΠΟΦΑΣΗ_ΥΠΟΥΡΓΟΥ_1899_20250204250.pdf, sha256 `d5cb4c43a52cf98bc952a610a5d13be4bd839ec25b3976a1e748742b1fd44d54`) |

The registration platform: on 2026-10-29 `https://nis2register.cyber.gov.gr/`
answered HTTP 404 (it still serves the application, titled "Εγγραφή Οντοτήτων
του ν.5160/2024"), and `https://nis2register.cyber.gov.gr/app/home`, the
address circular 20718 gives, answered HTTP 200 with the same title. The fiches
link the second.

What the fiches leave out, and why:

- **Whose turnover** the percentage of Άρθρο 26 §§4 and 5 is taken from: both
  paragraphs say "η σημαντική οντότητα" (P0.3). The fiches state the two
  ceilings, "ανάλογα με το ποιο είναι υψηλότερο", and leave the clause out; a
  Greek lawyer still has to read it.
- **Which class** a first-tier local authority falls in. Άρθρο 4 §1 δ) names
  central government only; the Annexes of the ΦΕΚ do not extract as text
  (their font carries no Unicode map), so the Annex I and II lists were not
  read and no fiche says which sectors they contain.
- **A significance threshold** and **the ενιαία πολιτική template**: absent on
  2026-10-29 ("Still to pin", items 2 and 4), and said so.
- **The circulars' periods** (30, 90, 180 days, 10 months; 3, 14, 60 days) as
  deadlines: the first set has no stated start, the second is a set of
  recommended maxima for essential entities.
