# Greece — legal sources (verified)

> ⚠️ **Greece is NOT a supported country in the product.** There is no `gr.yaml`,
> no GR country-config, and no Greek content in `controls.ts`. This file is the
> legal groundwork that would have to exist *before* any of that is written.
> Opened 2026-08-06 after a Greek prospect (consultant, evaluating Reglyze for
> client work) told us the Greek framework "diverges from the directive baseline
> more than a label swap would cover". **He was right** — see ΚΥΑ 1689/2025 below.

> **P0 pass completed 2026-08-06.** All ten instruments on the Authority's own
> legislation index were downloaded from cyber.gov.gr and read. Sections marked
> **P0.x** answer the open items in `docs/plans/gr-country-pack-build.md`.
> Three facts previously recorded here were **superseded** and are corrected
> in place — see "Corrections" at the bottom.

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
| §5 | National Cybersecurity Strategy under this law (due within 6 months) | ❌ not published (the index carries only the 2018 and 2020 strategies) |
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
**needs-check**, not as a finding of fact. This is a good question for a Greek native reviewer.

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

## Instrument register (Authority's own index, retrieved 2026-08-06)

<!-- meta: theme=statute; type=lead; date=2026-08-06; surfaces=docs; guard=none -->

Source: https://cyber.gov.gr/nomothesia/elliniki-nomothesia-gia-tin-kyvernoasfaleia/

| Instrument | ΦΕΚ | Subject | Read? |
|---|---|---|---|
| **Ν. 5086/2024** | Α΄ 23/14.02.2024 | Creates the Authority | ✅ |
| **Ν. 5160/2024** | Α΄ 195/27.11.2024 | NIS2 transposition | ✅ |
| **ΚΥΑ 1381/2025** | Β΄ 463/10.02.2025 | Registration platform + first extension | ✅ |
| **ΚΥΑ 1645/2025** | Β΄ 1882/15.04.2025 | Second extension (→ 30/05/2025) | ✅ |
| **ΚΥΑ 1689/2025** | Β΄ 2186/06.05.2025 | **National cybersecurity requirements framework** | ✅ |
| **ΚΥΑ 1990/2025** | Β΄ 4241/04.08.2025 | **Third extension (→ 30/09/2025)** + new form fields | ✅ |
| **ΥΑ 1899/2025** | Β΄ 4250/05.08.2025 | Υ.Α.Σ.Π.Ε. qualifications and duties | ✅ |
| **Εγκύκλιος οικ. 28211** | 10.09.2025 | Public-sector registration circular | ✅ |
| **ΚΥΑ 2267/2025** | Β΄ 5472/14.10.2025 | 1st-tier local authorities deferred → 27.11.2026 | ✅ |
| **Ν. 5305/2026** art. 33 | Α΄ 85/29.05.2026 | National blacklist of malicious websites (adds art. 4Α to ν. 5086/2024) | ❌ **PDF has no text layer** |

⚠️ `Ν. 5305/2026` downloads as a ~10 MB PDF from which `pdftotext` extracts
**zero characters** — it is almost certainly a scanned image. It is out of P0
scope (it concerns a state website-blocking list, not entity obligations), but it
cannot be read with the method used here. It would need OCR or the et.gr copy.

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

## Still to pin (next `verify-legal-source` pass)

<!-- meta: theme=statute; type=needs-check; date=2026-08-06; surfaces=data; guard=none -->

1. **Is the ΕΑΚ Gap Analysis Tool the "Οδηγός" of Άρθρο 18 §1 δ)?** Neither the
   tool nor its guide says so. If it is not, the mandated annual self-assessment
   instrument has not been published.
2. **Has the Άρθρο 30 §14 template for the ενιαία πολιτική been issued?** Not on
   the Authority's index. Without it the annual filing has no official form —
   and no filing-grade artefact can be built.
3. **Do the Άρθρο 30 §§20–23 instruments exist?** Supervision fee, certified
   inspectors, Audit & Supervision Regulation, fine procedure. All absent from
   the index; all needed before enforcement is operational.
4. **Άρθρο 16 significant-incident thresholds** (art. 30 §16) — absent, so what
   counts as a reportable incident is still directive-level only.
5. **Ν. 5305/2026 art. 33** — needs OCR or an et.gr text copy.
6. Whether any registration extension later than ΚΥΑ 1990/2025 exists off-index.

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
