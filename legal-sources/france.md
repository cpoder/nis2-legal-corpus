# France — legal sources (provisional)

## PJL Résilience / ReCyF v2.5

<!-- meta: theme=statute,framework; type=reference; date=2026-07-25; surfaces=data,docs; guard=none -->

> **Status: provisional.** France has **not yet promulgated** its NIS2
> transposition. The *Projet de loi relatif à la résilience des infrastructures
> critiques et au renforcement de la cybersécurité* (PJL Résilience) is adopted
> by the Sénat but not in force; the **ReCyF v2.5 (17 March 2026)** is an ANSSI
> **working draft** published on MesServicesCyber, to be fixed by a *décret en
> Conseil d'État* after promulgation. Every ReCyF fact below is provisional and
> must be re-verified against the final decree.

- **Legal basis:** PJL Résilience, Titre II, art. 14 (al. 5-6) — mandates a
  décret en Conseil d'État fixing the security objectives + the ReCyF
  référentiel, *adapted to entities by exposure, size and incident
  likelihood/severity* (recyf.yaml `legal_basis`).
- **Authority:** ANSSI — élaboration / modification / publication du ReCyF.
- **Official sources:**
  - ReCyF v2.5 working draft — ANSSI / MesServicesCyber (retrieved 2026-03-17;
    mirrored verbatim in `nis2-mappings/frameworks/recyf.yaml`).
  - PJL Résilience — Sénat dossier législatif (Légifrance, on promulgation).
- **Retrieved:** 2026-06-03 (ANSSI working draft; bill not yet in the JO).

### Applicability model (ADR 0034)

ReCyF v2.5 differentiates objectives along **one** per-line dimension — the
**EI/EE proportionality** — which is exactly what Reglyze's entity-applicability
engine resolves (`scope.proportionality`, recyf.yaml ll. 88-93):

| Line | Applies to | Modelled as |
|---|---|---|
| Objectives 1-15 | EI **and** EE | `applicable_to: ["EI","EE"]` |
| Objectives 16-20 («Sécurité avancée EE») | EE only | `applicable_to: ["EE"]` |
| Sub-controls `X.Y-EE` within 1-15 | EE only (2nd-level proportionality) | `applicable_to: ["EE"]` |

The engine reads this via `getFrameworkLineApplicability("recyf")` →
`LineApplicability.classification`; objective-level applicability drives the
derived gap-assessment rows (`isLineApplicable`, ADR 0034 §2).

### OIV / SecNumCloud / collectivités are **not** per-objective conditionals in v2.5

ADR 0034 §3 anticipated conditional regime flags (`oiv`,
`criticalCloudOutsourcing`, `publicBody`). **ReCyF v2.5 does not map them to
specific objectives** — so the `applicability.requires` dimension stays **empty**
for ReCyF until the application decree details any conditional objective. The
authoritative scope (recyf.yaml ll. 72-93):

| Regime | ReCyF v2.5 treatment | Source |
|---|---|---|
| **OIV** (non-SIIV systems) | Follow ReCyF like EE/EI — **no** per-objective filter | art. L. 1332-2 code de la défense (`scope.applies_to`) |
| **SIIV** | **Excluded** from ReCyF — separate cumulative regime, exigences spécifiques du Premier ministre | art. 16 PJL (`scope.exclusions`) |
| **Critical cloud / datacenter / CDN / MSP…** | **Out of ReCyF scope** — sectoral regime under Règlement (UE) 2024/2690 (not a SecNumCloud per-objective filter) | art. 14 al. 8 PJL (`authority.sectoral_complement_basis`) |
| **Administrations / collectivités / EPA** | **In scope**, follow ReCyF normally — no per-objective filter | art. 8 7° + art. 14 al. 1 (`scope.applies_to`) |

> Marking any objective `requires: ["oiv" | "criticalCloudOutsourcing" |
> "publicBody"]` would be **unsourced**: ReCyF v2.5 has no such per-objective
> conditional. The flags remain captured per-org at scoping (migration 0060) and
> the engine supports `requires`, but **no ReCyF line gates on them yet**.
> Revisit when the *décret en Conseil d'État* (or a SIIV-specific annex) is
> published.

### Still to pin (next pass)

- Final ReCyF version (post-decree) — re-verify the objective list +
  proportionality, and whether the decree introduces any regime-conditional
  objectives (then add sourced `applicability.requires` blocks here + in
  recyf.yaml).
- PJL Résilience promulgation date + JO reference (currently a Sénat-adopted
  draft).
- `country-configs/transposition-references.ts` FR block vs `countries/fr.yaml` —
  confirm the provisional EIF / law-name alignment.

## PJL Résilience — état législatif au 2026-07-25

<!-- meta: theme=statute; type=reference; date=2026-07-25; surfaces=data; guard=none -->

- **Source read:** dossier législatif officiel de l'Assemblée nationale,
  https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N50731
- **Retrieved + read:** 2026-07-25.

### Chronologie vérifiée

| Date | Étape |
|---|---|
| 2024-10-15 | Dépôt au Sénat, procédure accélérée engagée |
| 2025-03-12 | **Adopté par le Sénat** (texte n° 78) |
| 2025-03-13 | Transmis à l'Assemblée nationale |
| 2025-09-10 | Rapport + texte de la commission spéciale adoptés |
| — | **Aucun vote en première lecture à l'Assemblée** |
| — | Aucune commission mixte paritaire |
| — | Aucune promulgation |

### Correction apportée à nos données

Nos fichiers annonçaient une promulgation « **attendue mi-2026** », affichée au
client via la chrome provisoire (`publication_signals.estimated_window` de
`recyf.yaml`, lu et rendu par `provisional-framework-chrome`). Nous sommes fin
juillet 2026 : **cette estimation est échue sans s'être réalisée**, et le texte
n'a même pas été voté en première lecture.

Elle a été **retirée, pas repoussée**. Annoncer une nouvelle date sans acte
parlementaire serait une invention. Les fichiers portent désormais l'étape
vérifiée (`legislative_stage` + `legislative_stage_verified_at`), que la veille
peut diffuser.

### Conséquence pour ReCyF

ReCyF v2.5 (17/03/2026) reste un **document de travail**. Le décret
d'application de l'art. 14 (TITRE II) ne peut intervenir qu'après promulgation —
donc pas de bascule `in_force` prévisible à ce stade.

### Cible de veille

- Dossier AN : https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N50731
- Dossier Sénat : https://www.senat.fr/dossier-legislatif/pjl24-033.html
- ReCyF (PDF versionné, le nom porte date + version) :
  https://messervices.cyber.gouv.fr/documents-ressources/20260317_NIS_V2_ReCyF_v2.5.pdf

## Obligations — texte n° 78 adopté par le Sénat (art. 14 à 16)

<!-- meta: theme=scoping,governance; type=reference; date=2026-07-25; surfaces=data; guard=none -->

- **Source read:** https://www.senat.fr/leg/tas24-078.pdf (75 p., pdftotext -layout)
- **Retrieved + read:** 2026-07-25 (art. 14, 15, 16 lus intégralement).

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| La France énonce **4 objectifs**, pas les 10 lettres de l'art. 21(2) | art. 14, 1° à 4° | "1° Prévoir que les organes de direction approuvent et supervisent… ; 2° Assurer la protection des réseaux et systèmes d'information, y compris en cas de recours à la sous-traitance ; 3° Mettre en place des outils et des procédures pour assurer la défense… et gérer les incidents ; 4° Garantir la résilience des activités." | ✅ |
| Gouvernance ET formation dans le même 1° | art. 14, 1° | "…leurs membres ainsi que **les personnes exposées aux risques** devant être formés à la cybersécurité" | ✅ |
| **Formation plus large que NIS 2 art. 20(2)** | art. 14, 1° | la directive vise l'organe de direction ; la France y ajoute « les personnes exposées aux risques » | ✅ |
| Le décret fixe les objectifs ET **les conditions de production du référentiel** — il ne l'adopte pas | art. 14, dernier alinéa | "Un décret en Conseil d'État fixe les objectifs… Ce décret **détermine également les conditions d'élaboration, de modification et de publication d'un référentiel** d'exigences techniques et organisationnelles…" | ✅ |
| **ReCyF = présomption de conformité, pas obligation** | art. 15 al. 1 | "Les personnes… qui mettent en œuvre les exigences du référentiel… **ou qui mettent en œuvre tout autre référentiel reconnu comme équivalent** par l'autorité… **peuvent s'en prévaloir** auprès de celle-ci lors d'un contrôle… le cas échéant au moyen d'un **label de confiance** approuvé par elle." | ✅ |
| Sinon, **charge de la preuve inversée** | art. 15 al. 2 | "Dans le cas contraire, ces personnes sont tenues de **démontrer** que les mesures qu'elles mettent en œuvre permettent de se conformer à ces objectifs." | ✅ |
| Les OIV appliquent le référentiel + des exigences spécifiques du Premier ministre | art. 16 | "Ces opérateurs mettent en œuvre sur leurs systèmes d'information d'importance vitale les exigences du référentiel mentionné à l'article 14… ainsi que les exigences spécifiques… fixées par le Premier ministre." | ✅ |

### Structure française = TROIS étages

`loi` (4 objectifs) → `décret en Conseil d'État` (objectifs détaillés + conditions
d'élaboration du référentiel) → `référentiel` (ReCyF, exigences techniques et
organisationnelles). **Ni le décret ni le référentiel final n'existent** : la loi
n'est pas promulguée.

### Ce que ça vaut commercialement

L'art. 15 est le meilleur argument produit du dossier français : implémenter
ReCyF — ou un référentiel reconnu équivalent, ISO/CEI 27001:2022 étant
explicitement accepté par l'ANSSI (ReCyF v2.5 p. 8) — permet de **s'en prévaloir
lors d'un contrôle**. Sans cela, l'entité doit démontrer sa conformité par
elle-même. C'est une inversion de la charge de la preuve, pas un confort.

### État de nos données

Le mapping `countries/fr.yaml` a été **vérifié conforme** sur ces points : les
4 catégories synthétiques, le renvoi au référentiel et le mécanisme de l'art. 15
y étaient déjà décrits correctement. Une seule nuance corrigée : le décret
n'adopte pas le référentiel, il en fixe les conditions d'élaboration.

## Sanctions — texte n° 78, art. 37

<!-- meta: theme=sanctions; type=reference; date=2026-07-25; surfaces=data; guard=none -->

- **Source read:** https://www.senat.fr/leg/tas24-078.pdf (`pdftotext -layout`)
- **Retrieved + read:** 2026-07-26 (art. 37, I à VII lus intégralement).

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| C'est la **commission des sanctions** qui prononce, pas l'ANSSI | art. 37 I | "la **commission des sanctions** peut prononcer" | ✅ |
| Entités essentielles : **10 M€ ou 2 % du CA annuel mondial HT, le plus élevé** | art. 37 I 1° | "ne peut excéder 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial, hors taxes, de l'exercice précédent **de l'entreprise à laquelle l'entité essentielle appartient**, le montant le plus élevé étant retenu" | ✅ |
| Entités importantes : **7 M€ ou 1,4 %**, le plus élevé | art. 37 I 2° | "ne peut excéder 7 millions d'euros ou 1,4 % du chiffre d'affaires annuel mondial total, hors taxes…" | ✅ |
| ⚠️ **L'assiette est le CA du GROUPE**, pas de l'entité | art. 37 I 1° | "de l'entreprise à laquelle l'entité essentielle appartient" | ✅ |
| **Les personnes publiques sont exclues de l'amende** | art. 37 I 1° et 2° | "à l'exception des administrations de l'État et de ses établissements publics administratifs, des collectivités territoriales, de leurs groupements et de leurs établissements publics administratifs" | ✅ |
| ⚠️ **Non-cumul avec une amende RGPD de la CNIL** | art. 37 I, dernier al. | "Si les manquements relevés constituent également une violation du règlement (UE) n° 2016/679 … donnant lieu à une amende administrative prononcée par la **Commission nationale de l'informatique et des libertés** …, la commission des sanctions **ne peut prononcer de sanction sous forme d'amende administrative**." | ✅ |
| ⚠️ **La sanction au dirigeant est une INTERDICTION D'EXERCER, pas une amende** | art. 37 V | "La commission des sanctions peut, **en dernier recours**, **si le manquement persiste après que l'amende administrative** prévue au I ou au II du présent article **a été prononcée**, **interdire à toute personne physique exerçant les fonctions de dirigeant** dans l'entité essentielle **d'exercer des responsabilités dirigeantes dans cette entité**, jusqu'à ce que l'entité essentielle ait remédié au manquement. Ces dispositions **ne s'appliquent pas aux administrations**." | ✅ |
| Publicité de la sanction possible, aux frais de l'entité | art. 37 VI | "elle peut exiger que l'entité concernée communique au public, par tout moyen adapté et **à ses frais**, le manquement constaté" | ✅ |

### Trois corrections apportées à `transposition-references.ts` (FR)

**1. « Individual administrative fines on directors » — FAUX.**

Le bullet affirmait, dans les cinq locales : « the French transposition
explicitly authorises **ANSSI** to impose **individual fines** on members of the
management body, **on top of** the company-level fine ».

Trois erreurs dans une phrase :
- ce n'est pas une **amende** mais une **interdiction d'exercer des
  responsabilités dirigeantes** (art. 37 V) ;
- ce n'est pas **en sus** de l'amende de l'entité mais **après** elle, en dernier
  recours et à la condition que le manquement **persiste** ;
- ce n'est pas **l'ANSSI** qui prononce mais la **commission des sanctions**.

⚠️ **Le même bullet, au mot près, existe pour l'Italie.** La formulation est
manifestement templatée entre pays. Le D.lgs 138/2024 a peut-être réellement
exercé l'option de l'art. 32(5) NIS 2, mais après ce qu'on vient de trouver côté
français, la version italienne doit être vérifiée sur la Gazzetta avant d'être
maintenue. Non fait à ce jour.

**2. « SecNumCloud qualification … is the recognised baseline for NIS 2
compliance » — NON SOURCÉ.**

Recherche sur le texte intégral n° 78 : **zéro occurrence de « SecNumCloud »**.
La qualification existe et l'ANSSI la promeut, mais elle n'est pas un socle de
conformité NIS 2 institué par la transposition. Le bullet la présentait comme
une exigence nationale supplémentaire. Retiré.

**3. « Scope extension to collectivités territoriales » — À MOITIÉ VRAI.**

Les collectivités sont bien visées par les obligations, mais l'art. 37 I les
**exclut explicitement du champ de l'amende administrative** (comme les
administrations de l'État et leurs EPA), et l'art. 37 V exclut les
administrations de l'interdiction d'exercer. Le bullet ne disait que la moitié
qui alourdit, pas celle qui allège. Reformulé.

### Et le point de fond

Tous ces bullets étaient rédigés **au présent de l'indicatif**, comme des
obligations en vigueur. Le texte n'est pas promulgué : il n'a même pas été voté
en première lecture à l'Assemblée. Une PME française lisant la carte « contexte
national » pouvait croire ces règles opposables aujourd'hui. Les bullets sont
désormais explicitement conditionnels et datés de l'étape parlementaire.

## 🔴 Citation légale fabriquée — « Loi n° 2024-1039 » (découverte et purgée 2026-07-26)

<!-- meta: theme=statute; type=fabrication,test-pinned; date=2026-07-26; surfaces=data,prompt,doc-gen,marketing,test; guard=apps/ai-service/test/tabletop-prompt.test.ts -->

Le template de rapport d'incident ANSSI, c'est-à-dire **le PDF qu'un client
français envoie au régulateur après un incident**, citait comme base légale :

> « Article 23(4)(a) Directive (UE) 2022/2555 — **Loi n° 2024-1039 du 21 mai 2024** »
> « conformément à **l'article 13 de la loi n° 2024-1039** du 21 mai 2024 portant
> transposition de la directive NIS2 »

**Cette loi n'a rien à voir avec la cybersécurité.** Vérification sur Légifrance :
la **LOI n° 2024-1039 du 19 novembre 2024** vise « à renforcer les outils de
régulation des **meublés de tourisme** à l'échelle locale ». La date du 21 mai
2024 est fausse également, et « l'article 13 » invoqué est inventé.

Rappel du contexte : la France **n'a promulgué aucune transposition** NIS 2
(voir la section « PJL Résilience — état législatif » plus haut). Il ne pouvait
donc exister aucune loi française de transposition à citer.

### Où elle s'était propagée

| Surface | Effet |
|---|---|
| `apps/doc-gen/src/templates/incident-anssi.ts` | Les **trois** en-têtes de rapport (alerte, notification, rapport final) — le document remis à l'ANSSI |
| `apps/ai-service/src/routes/incident-draft.routes.ts` | Prompt de rédaction des brouillons d'incident → **chaque brouillon généré** la répétait |
| `apps/ai-service/src/lib/remediation-prompt.ts` | Prompt de remédiation → idem sur les plans d'action |
| `apps/ai-service/src/lib/tabletop-prompt.ts` | Tableau de méthodologie des exercices de crise |
| 4 pages publiques `[locale]` (vs-sprinto, vs-drata, vs-dataguard, nis2-msp) | **Argument de vente** : « nos modèles citent la loi n° 2024-1039 », en 4 à 6 langues |
| `nis2-article-20-training` | Page SEO publique, 3 langues |
| 2 tests | **Verrouillaient** la fabrication : `expect(STATIC_METHODOLOGY).toMatch(/Loi n° 2024-1039/)` |

C'est la propagation la plus large trouvée dans tout l'audit : d'un template
vers les prompts LLM, puis vers le marketing public, puis figée par des tests.

### Ce qui a remplacé la citation

Le template cite désormais la **directive (UE) 2022/2555** et dit explicitement
qu'aucune transposition française n'est promulguée, avec l'étape parlementaire
vérifiée. Les prompts LLM portent une instruction négative : « Ne JAMAIS citer
une loi française de transposition NIS 2 : elle n'existe pas. »

Le rapport final porte en outre la correction d'ancrage du jour : « 1 mois à
compter de la **remise de la notification** », et non de la connaissance.

### Pourquoi c'était le pire défaut de la session

Les autres erreurs trompaient le client. Celle-ci le trompait **devant son
régulateur** : un rapport d'incident invoquant une loi sur les locations
saisonnières se discrédite à la première lecture par l'ANSSI. Et l'argument de
vente public en faisait une force.

Contrôle final : **zéro occurrence** de `2024-1039` subsistante dans
`packages/` et `apps/`, hors le commentaire qui documente le retrait.


## Corpus « legal frame » des documents générés (livré 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension du « squelette validé » (voir docs/legal-sources/italy.md, entrée du
2026-08-25) : la section « Cadre légal et normatif » des documents générés pour ce pays est
composée par `packages/regulatory-data/src/doc-corpus/legal-frames.ts` à partir
des faits vérifiés de CET index et insérée verbatim par ai-service (placeholder
`{{QUADRO_LEGALE}}`). Contenu du bloc : PROVISOIRE assumé : bandeau « loi non promulguée » en tête de bloc ; art. 14 (4 objectifs), art. 15 (présomption ReCyF / charge inversée), art. 37 (commission des sanctions, non-cumul CNIL, interdiction d'exercer). À réaligner à la promulgation. Règle : tout fait absent de
cet index est ABSENT du bloc ; enrichir = vérifier ici d'abord.
