# Germany — legal sources (verified)

## NIS2UmsuCG / BSIG 2025

<!-- meta: theme=statute; type=reference; date=2026-07-26; surfaces=data,docs; guard=none -->

- **Official citation:** Gesetz zur Umsetzung der NIS-2-Richtlinie … (NIS2-
  Umsetzungs- und Cybersicherheitsstärkungsgesetz), Bundesgesetzblatt Teil I,
  2025, Nr. 301, ausgegeben zu Bonn am **5. Dezember 2025**. Article 1 re-enacts
  the BSI-Gesetz ("BSIG 2025").
- **Official URLs:**
  - BGBl. announcement: https://www.recht.bund.de/bgbl/1/2025/301/VO.html
  - Regelungstext (PDF): https://www.recht.bund.de/bgbl/1/2025/301/regelungstext.pdf
  - Consolidated BSIG 2025: https://www.gesetze-im-internet.de/bsig_2025/
  - BSI press, "ab morgen in Kraft" (05-12-2025): https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2025/251205_NIS-2-Umsetzungsgesetz_in_Kraft.html
- **Retrieved:** 2026-06-03 (official BGBl + BSI press).

### Verified facts

| Fact | Source | Detail | Status |
|---|---|---|---|
| Published | BGBl. I 2025 Nr. 301 | 5 December 2025 | ✅ |
| **Entry into force** | BSI press "ab morgen in Kraft" (05-12) + BGBl | **6 December 2025** | ✅ |
| Mechanism | BGBl text | Art. 1 re-enacts the BSIG ("BSIG 2025") + amends sectoral laws | ✅ |
| Authority | BSIG / BSI | BSI = national authority + CSIRT; ~29,500 entities in scope | ✅ |
| Categories | BSIG | "besonders wichtige" + "wichtige Einrichtungen" | ✅ |

### Corrections to internal data (official source wins)

`transposition-references.ts` (DE block) has `transposedAt`/`enforcementDate =
"2025-03-01"` → **wrong**. Official entry into force is **2025-12-06**.
`de.yaml` already has the correct date (`entry_into_force` 2025-12-06) — align
`transposition-references.ts` to it.

> Note: `de.yaml`'s `law.provisional: true` is about Reglyze's **article-mapping**
> pending German-auditor validation, NOT the law's status — the NIS2UmsuCG **is
> in force** (2025-12-06). Keep that distinction in the provisional reason.

### Still to pin (next pass)

- §32 (Aufsicht/inspections) and §38 (management-body duty) exact wording — the
  DE gap analysis flagged `transposition-references.ts` prose as mis-citing these
  vs `de.yaml`; verify against the consolidated BSIG 2025 (gesetze-im-internet)
  before rewording customer copy.

## Supply chain — BSIG 2025 § 30

<!-- meta: theme=supply-chain; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** consolidated BSIG 2025, https://www.gesetze-im-internet.de/bsig_2025/__30.html
- **Retrieved + read:** 2026-07-25 (§ 30 Abs. 1–8 read in full).

### Fact table

| Fact | Source | Verbatim (official) | Status |
|---|---|---|---|
| Supply chain = § 30 Abs. 2 **Nr. 4** | § 30 Abs. 2 Nr. 4 | "Sicherheit der Lieferkette einschließlich sicherheitsbezogener Aspekte der Beziehungen zu unmittelbaren Anbietern oder Diensteanbietern" | ✅ |
| **General documentation duty** over the whole risk-management obligation | § 30 Abs. 1 Satz 3 | "Die Einhaltung der Verpflichtung nach Satz 1 ist durch die Einrichtungen zu dokumentieren." | ✅ |
| NIS2 art. 21(3) (supplier-specific vulnerabilities, product quality, coordinated risk assessments) is **NOT** transposed in § 30 | § 30 Abs. 1–8 | Abs. 3–5 concern the precedence of Commission implementing acts; Abs. 6 concerns certification; no Absatz reproduces art. 21(3) | ✅ (absence confirmed on the full section) |
| Certification can be made mandatory for named ICT products/services/processes | § 30 Abs. 6 | "dürfen … bestimmte IKT-Produkte, IKT-Dienste und IKT-Prozesse nur verwenden, wenn diese über eine Cybersicherheitszertifizierung gemäß europäischer Schemata nach Artikel 49 der Verordnung (EU) 2019/881 verfügen" (by Rechtsverordnung under § 56 Abs. 3) | ✅ |
| **No supplier register, no data-exposure duty** | § 30 | § 30 lists the measure areas; it mandates neither a supplier inventory nor documentation of what data a supplier can access | ✅ (absence confirmed) |

### Why this matters to the product

Germany transposes 21(2)(d) verbatim and adds nothing prescriptive on suppliers
— but § 30 Abs. 1 Satz 3 turns **evidence itself into the statutory duty**:
compliance must be documented. For a German customer the selling point is not a
supplier register (not required) but the auditable trail that the supply-chain
measure was taken. Note also Abs. 6: an ICT product may become unusable unless
EU-certified, once the BMI issues the Rechtsverordnung — a supply-chain
constraint worth tracking, adjacent to Poland's high-risk-supplier regime.

## Enregistrement, surveillance, sanctions, gouvernance — BSIG 2025 (vérifié 2026-07-26)

<!-- meta: theme=registration,sanctions,governance; type=reference,wrong-citation; date=2026-07-26; surfaces=data; guard=none; debt=un test croisant chaque § cité dans le produit avec l'index serait possible mais lourd ; les quatre § fautifs sont corrigés et couverts par les tests de citation existants -->

- **Source read:** texte consolidé officiel, https://www.gesetze-im-internet.de/bsig_2025/
  (§§ 33, 38, 61, 65 lus intégralement ; sommaire complet relevé)
- **Retrieved + read:** 2026-07-26

### Faits vérifiés

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| **Enregistrement : 3 mois GLISSANTS** à compter du jour où l'entité relève du régime | § 33 Abs. 1 | "sind verpflichtet, **spätestens drei Monate, nachdem sie erstmals oder erneut als eine der vorgenannten Einrichtungen gelten**, dem Bundesamt … folgende Angaben zu übermitteln" | ✅ |
| Guichet **conjoint BSI + BBK** | § 33 Abs. 1 | "über eine **gemeinsam vom Bundesamt und dem Bundesamt für Bevölkerungsschutz und Katastrophenhilfe eingerichtete Registrierungsmöglichkeit**" | ✅ |
| Les exploitants d'installations critiques s'enregistrent au titre d'un **AUTRE texte** | § 33 Abs. 2 | "Die Registrierung von Betreibern kritischer Anlagen erfolgt gemäß **§ 8 des KRITIS-Dachgesetzes**." | ✅ |
| § 38 = devoir de la DIRECTION (mise en œuvre, surveillance, formation) | § 38 Abs. 1 et 3 | "Geschäftsleitungen … sind verpflichtet, die … nach § 30 zu ergreifenden Risikomanagementmaßnahmen **umzusetzen und ihre Umsetzung zu überwachen**" ; "müssen **regelmäßig an Schulungen teilnehmen**" | ✅ |
| ⚠️ **Responsabilité CIVILE personnelle du dirigeant ENVERS SA PROPRE ENTITÉ**, par renvoi au droit des sociétés | § 38 Abs. 2 | "Geschäftsleitungen, die ihre Pflichten nach Absatz 1 verletzen, **haften ihrer Einrichtung für einen schuldhaft verursachten Schaden** nach den auf die Rechtsform der Einrichtung anwendbaren Regeln des **Gesellschaftsrechts**. Nach diesem Gesetz haften sie nur, wenn die … gesellschaftsrechtlichen Bestimmungen keine Haftungsregelung nach Satz 1 enthalten." | ✅ |
| Surveillance : le BSI **ordonne des audits par des tiers indépendants**, il ne les mène pas lui-même | § 61 Abs. 1 | "Das Bundesamt kann … **anordnen, Audits, Prüfungen oder Zertifizierungen von unabhängigen Stellen** … durchführen zu lassen." | ✅ |
| ⚠️ **Moratoire de 3 ans** pour les autres entités particulièrement importantes | § 61 Abs. 3 | "Das Bundesamt kann auch gegenüber **anderen** besonders wichtigen Einrichtungen **frühestens drei Jahre nach Inkrafttreten dieses Gesetzes** die Vorlage von Nachweisen … anordnen." | ✅ |
| Amendes : **§ 65**, avec SIX bandes selon l'infraction | § 65 Abs. 5 | "bei besonders wichtigen Einrichtungen … **bis zu zehn Millionen Euro**, bei wichtigen Einrichtungen … **bis zu sieben Millionen Euro**" ; puis des bandes à **5 M**, **2 M**, **1 M**, **500 000** et **100 000 euros** selon le manquement | ✅ |
| Pourcentages : **2 %** / **1,4 %** du Gesamtumsatz, par le canal du § 30 Abs. 2 Satz 2 OWiG | § 65 | "mit einer Geldbuße bis zu **2 Prozent des Gesamtumsatzes**" / "bis zu **1,4 Prozent des Gesamtumsatzes**" | ✅ |
| ⚠️ **Non-cumul avec une amende RGPD**, sur le même comportement | § 65 Abs. 11 | "Verhängen die … Aufsichtsbehörden gemäß Artikel 58 Absatz 2 Buchstabe i der Verordnung (EU) 2016/679 eine Geldbuße, so **darf eine weitere Geldbuße für einen Verstoß nach diesem Gesetz, der sich aus demselben Verhalten ergibt** …, **nicht verhängt werden**." | ✅ |

### Quatre citations fausses corrigées dans `transposition-references.ts` (DE)

Le bloc allemand portait cinq bullets. **Un seul citait le bon paragraphe.**

| Ce qu'on affichait | Réalité |
|---|---|
| « Three-month registration deadline (**§ 33** BSIG) » | ✅ **Correct.** Seul bullet juste. Enrichi (délai glissant, guichet conjoint BSI/BBK) |
| « KRITIS obligations stack on NIS 2 (**§§ 8a, 8b** BSIG) » | ❌ **Ces paragraphes n'existent plus.** Le BSIG 2025 va du § 1 au § 66 sans 8a ni 8b ; § 8 traite de la défense contre les logiciels malveillants pour la technique de communication fédérale. L'enregistrement KRITIS relève désormais du **KRITIS-Dachgesetz** (§ 33 Abs. 2) |
| « BSI on-site inspections without prior notice (**§ 32** BSIG) » | ❌ **§ 32 = Meldepflichten** (obligations de notification). Le pouvoir de contrôle est au **§ 61**, et il consiste à **ordonner des audits par des tiers**, pas à mener des visites inopinées. Aucune mention de Vor-Ort ni d'unangekündigt dans le § 61. Et le § 61 Abs. 3 pose un **moratoire de 3 ans** que nos données ignoraient |
| « Designated **IT-Sicherheitsbeauftragter** (**§ 38** BSIG) … must be designated and reported to the BSI » | ❌ **§ 38 ne crée aucun poste de RSSI.** Il porte les devoirs de la direction : mise en œuvre, surveillance, formation. Et son Abs. 2 institue une **responsabilité civile personnelle du dirigeant envers son entité**, ce que nos données ne portaient pas du tout |
| « Fine cap up to € 10 M / 2 % codified (**§ 64** BSIG) » | ❌ **§ 64 = Zuwiderhandlungen durch Institutionen der sozialen Sicherung.** Les amendes sont au **§ 65**, et elles sont **graduées en six bandes** (100 k, 500 k, 1 M, 2 M, 5 M, puis 10 M / 7 M), pas un plafond unique |

### Le fait allemand qui mérite d'être vendu

Le § 38 Abs. 2 est un **quatrième modèle** de responsabilité du dirigeant, distinct
des trois autres déjà vérifiés :

| Pays | Mécanisme | Envers qui |
|---|---|---|
| 🇵🇱 PL | Amende administrative jusqu'à **300 % de la rémunération** (art. 73a ust. 4) | L'État |
| 🇭🇷 HR | Amende administrative **1 000 à 6 000 €** (čl. 101. st. 2.) | L'État |
| 🇫🇷 FR / 🇮🇹 IT | **Interdiction / incapacité d'exercer** des fonctions dirigeantes | (sanction non pécuniaire) |
| 🇩🇪 DE | **Responsabilité civile pour le dommage causé**, par renvoi au droit des sociétés | **Sa propre entité** |

L'Allemagne ne sanctionne pas le dirigeant, elle le rend **redevable envers sa
société**. Le plafond n'est donc pas un montant légal mais le préjudice subi, ce
qui peut dépasser de très loin les amendes administratives des autres pays.

### Note de méthode

Le non-cumul RGPD apparaît maintenant dans **deux** transpositions vérifiées
(FR art. 37 I dernier alinéa, DE § 65 Abs. 11). Ce n'est plus une singularité
française, c'est un motif à chercher systématiquement dans les autres pays.

## ⛔ Une amende BSI de 850 000 € était affirmée en public, et elle est fabriquée (2026-07-27)

<!-- meta: theme=sanctions; type=fabrication; date=2026-07-27; surfaces=marketing,ui; guard=apps/web/test/no-unsourced-enforcement-claims.test.ts -->

Trois surfaces publiques affirmaient, comme un fait :

> « The German Federal Office for Information Security (BSI) issued the first
> significant NIS2 fine in Europe, EUR 850,000 against a mid-sized cloud service
> provider for failing to implement adequate incident detection measures and for
> late reporting of a security incident. This case sets a precedent for active
> enforcement across the EU. » (février 2026)

Emplacements : `/[locale]/nis2-fines` (carte « Recent enforcement cases » +
réponse de FAQ), et `/[locale]/tools/nis2-fine-calculator` (encadré rouge
« Recent enforcement reality » **et le JSON-LD `FAQPage`**, donc la forme lue
par les moteurs et les assistants).

**Aucune corroboration.** Ni bsi.bund.de, ni bmi.bund.de, ni heise, ni golem,
qui couvriraient à coup sûr la première amende NIS2 d'Europe. Les deux trackers
NIS2 allemands indépendants et exhaustifs, `openkritis.de` et `nisd2.eu`, ne
recensent **que des sanctions théoriquement possibles**, aucune prononcée.

**Le piège à retenir.** Une recherche web a *paru* confirmer l'affirmation :
le troisième résultat était la page de Reglyze elle-même, et le résumé
automatique nous a resservi notre propre phrase comme preuve. **Une fabrication
bien classée devient sa propre source.** Ne jamais accepter une confirmation
sans regarder de quel domaine elle vient.

Aggravant : Google classait cette page en **position 3,6 sur « first nis2
fine »**, donc elle était servie précisément aux gens qui cherchaient à savoir
si une amende avait eu lieu. 

**Remplacé par** la réponse honnête (aucune amende vérifiable, et pourquoi ce
n'est pas rassurant), adossée aux faits déjà vérifiés plus haut dans ce
document : § 61 Abs. 1 (le BSI *ordonne* les audits, ne les mène pas),
§ 61 Abs. 3 (moratoire de 3 ans pour les autres entités particulièrement
importantes), § 33 Abs. 1 (enregistrement, 3 mois glissants, guichet conjoint
BSI/BBK), § 38 Abs. 2 (responsabilité civile personnelle du dirigeant),
§ 65 Abs. 11 (non-cumul avec une amende RGPD).

**Gardé par** `apps/web/test/no-unsourced-enforcement-claims.test.ts`. La règle
n'est pas « ne jamais parler d'amende » mais « ne jamais en affirmer une qu'on
ne peut pas nommer ». Si une amende réelle est publiée : l'ajouter avec
l'autorité, la date et la décision officielle, puis **étendre le test pour
exiger cette citation**, pas le supprimer.

## Le délai d'enregistrement était présenté comme fixe au 6 mars 2026 (corrigé 2026-07-27)

<!-- meta: theme=registration; type=deadline-model,surface-inconsistency; date=2026-07-27; surfaces=marketing,ui; guard=apps/web/test/de-registration-deadline-rolling.test.ts -->

Le § 33 Abs. 1 BSIG, déjà vérifié plus haut, pose une horloge **glissante** :

> « sind verpflichtet, **spätestens drei Monate, nachdem sie erstmals oder erneut**
> als eine besonders wichtige oder wichtige Einrichtung gelten »

Le 6 mars 2026 n'est que trois mois après l'entrée en vigueur du NIS2UmsuCG
(6 décembre 2025). C'est la bonne date pour les entités **déjà concernées ce
jour-là**, et pour elles seulement. Une entité qui franchit un seuil, ou qui est
désignée plus tard, dispose de trois mois à compter de son propre déclencheur.

**Le motif du défaut mérite d'être retenu**, parce qu'il se répète ailleurs :
la prose allemande était **rigoureuse** (« für bereits am 6.12.2025 betroffene
Einrichtungen **war** die Frist der 6. März 2026 », au passé et qualifié), et les
éléments que l'œil accroche ne l'étaient **pas**. La nuance était écrite puis
résumée à faux dans le badge, le titre et la meta.

Corrigé sur cinq surfaces :

| Surface | Avant |
|---|---|
| Badge héros de `/de/bsi-registrierung` | « Frist: 6. März 2026 » en couleur primaire |
| `metaDescription` de cette page | « …, Frist 6. März 2026, Ablauf über… » |
| `ogDescription` | « Frist 6. März 2026, Ablauf über… » |
| Titre d'alerte du diagnostic | « Registrierung beim BSI ausstehend — Frist 6. März 2026 » |
| Trois étapes suivantes du diagnostic | « Beim BSI registrieren (§ 33) — Frist 6. März 2026. » |

Au 27 juillet, cette date était **passée depuis quatre mois et demi**. Une
entreprise entrant dans le champ en juillet lisait qu'elle avait déjà manqué
l'échéance, alors que son horloge venait de démarrer. Pour un produit de
conformité, fabriquer de la panique sur un fait vérifiable est la mauvaise erreur.

La date n'est pas bannie : elle reste juste pour la cohorte initiale, et les gens
la cherchent. Ce qui est banni, c'est de la présenter **nue, comme l'échéance**,
dans un titre, un badge ou une meta. Gardé par
`apps/web/test/de-registration-deadline-rolling.test.ts`, qui exige un
qualificatif sur la même ligne et vérifié par mutation.


## Corpus « legal frame » des documents générés (livré 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension du « squelette validé » (voir docs/legal-sources/italy.md, entrée du
2026-08-25) : la section « Rechtlicher Rahmen » des documents générés pour ce pays est
composée par `packages/regulatory-data/src/doc-corpus/legal-frames.ts` à partir
des faits vérifiés de CET index et insérée verbatim par ai-service (placeholder
`{{QUADRO_LEGALE}}`). Contenu du bloc : BSIG 2025 : identité + EIF 06-12-2025, § 30 (+ Dokumentationspflicht), § 32 (Meldepflichten, sans délais — non épinglés ici), § 33 (3 mois, BSI+BBK, renvoi KRITIS-DachG), § 38 (Geschäftsleitung), § 61 (bwE seulement ; wE : § 62 NON vérifié → paragraphe absent), § 65 (bandes). Règle : tout fait absent de
cet index est ABSENT du bloc ; enrichir = vérifier ici d'abord.

## § 32 (délais de notification) + §§ 61-62 (aufsicht par catégorie) — vérifié 2026-08-25

<!-- meta: theme=incident,sanctions; type=reference; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

- **Source read:** gesetze-im-internet.de (texte consolidé officiel du BSIG 2025),
  pages `bsig_2025/__32.html`, `__61.html`, `__62.html`. **Retrieved:** 2026-08-25.

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| § 32 = « Meldepflichten » ; **frühe Erstmeldung 24 h** | § 32 | "unverzüglich, spätestens jedoch innerhalb von 24 Stunden nach Kenntniserlangung" | ✅ |
| **Meldung 72 h** | § 32 | "unverzüglich, spätestens jedoch innerhalb von 72 Stunden nach Kenntniserlangung" | ✅ |
| **Abschlussmeldung : 1 mois après la Meldung** (pas après la connaissance) | § 32 | "spätestens einen Monat nach Übermittlung der Meldung des Sicherheitsvorfalls" | ✅ |
| § 61 = « Aufsichts- und Durchsetzungsmaßnahmen für **besonders wichtige** Einrichtungen » | § 61 (Überschrift) | verbatim | ✅ |
| § 62 = « Aufsichts- und Durchsetzungsmaßnahmen für **wichtige** Einrichtungen » — **ex post sur éléments de fait** | § 62 | "Rechtfertigen Tatsachen die Annahme, dass eine wichtige Einrichtung Verpflichtungen … nicht oder nicht richtig umsetzt, so kann das Bundesamt deren Einhaltung überprüfen und Maßnahmen nach § 61 treffen." | ✅ |

Résout les deux lacunes notées dans l'entrée corpus du 2026-08-25 (délais § 32,
§ 62) : le bloc corpus DE et les règles de lint peuvent maintenant les porter.
