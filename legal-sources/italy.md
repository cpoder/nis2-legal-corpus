# Italy — legal sources (verified)

## DLgs 138/2024 (decreto NIS) + Misure ACN

<!-- meta: theme=statute,framework; type=reference; date=2026-07-15; surfaces=data,docs; guard=none -->

- **Statute:** Decreto Legislativo 4 settembre 2024, n. 138 ("decreto NIS"),
  trasposizione della Direttiva (UE) 2022/2555 (NIS2). Autorità nazionale
  competente: **Agenzia per la Cybersicurezza Nazionale (ACN)**.

## Determinazione ACN n. 379907/2025 — «specifiche di base»

<!-- meta: theme=framework; type=reference; date=2026-07-15; surfaces=data; guard=none -->

The Italian native control catalog (`misure-acn.yaml` → `objectives:`) is the
**misure di sicurezza di base** that ACN adopts under art. 31 / art. 40 c. 5 of
the decreto NIS, not a NIS2 crosswalk. They are structured per the **Framework
Nazionale per la Cybersecurity e la Data Protection — edizione 2025** (the
Italian adaptation of NIST CSF 2.0: 6 funzioni GV/ID/PR/DE/RS/RC).

- **Official citation:** Determinazione del Direttore generale dell'ACN
  n. 379907 del 19 dicembre 2025 (data di protocollo; firma digitale e riunione del Tavolo NIS: 18-12-2025; pubblicata 24-12-2025, **applicabile dal
  15 gennaio 2026**), che stabilisce le specifiche di base per gli obblighi degli
  **artt. 23, 24, 25, 29 e 32** del decreto NIS. Abroga e sostituisce la
  precedente n. 164179/2025.
- **Official URLs:**
  - ACN — Modalità e specifiche di base: https://www.acn.gov.it/portale/en/nis/modalita-specifiche-base
  - Allegato 1 (soggetti **importanti**), XLSX: https://www.acn.gov.it/portale/documents/d/guest/modalita-e-specifiche-di-base-nis-soggetti-importanti
  - Allegato 2 (soggetti **essenziali**), XLSX: https://www.acn.gov.it/portale/documents/d/guest/modalita-e-specifiche-di-base-nis-soggetti-essenziali
  - Determinazione (PDF firmato): https://www.acn.gov.it/portale/documents/d/guest/detacn_obblighi_2511-v3_signed
- **Archived copies (provenance):**
  `packages/regulatory-data/src/nis2-mappings/frameworks/sources/misure-acn/{importanti,essenziali}.xlsx`
- **Retrieved:** 2026-06-05 (official ACN portal).

### Verified facts

| Fact | Source | Detail | Status |
|---|---|---|---|
| Instrument | Determinazione ACN | n. 379907 del 19-12-2025 (protocollo; firma 18-12) | ✅ |
| Applicability | ACN | applicabile dal 15-01-2026; abroga n. 164179/2025 | ✅ |
| Articoli coperti | Determinazione | artt. 23, 24, 25, 29, 32 DLgs 138/2024 | ✅ |
| **Allegato 2 (essenziali)** | XLSX | **43 misure / 116 requisiti** | ✅ |
| **Allegato 1 (importanti)** | XLSX | **37 misure / 87 requisiti** (subset of essenziali) | ✅ |
| Struttura | XLSX cols | Funzione → Categoria → Codice (misura) → Punto/Requisito | ✅ |
| Base tecnica | Determinazione «Visto» | Framework Nazionale Cybersecurity & Data Protection ed. 2025 (NIST CSF 2.0) | ✅ |

### How this maps into the product

- `objectives:` in `misure-acn.yaml` is **generated** from the two XLSX by
  `packages/regulatory-data/scripts/gen-misure-acn-objectives.py` (re-run after
  any annex update; idempotent). Requisito text is the authority's **verbatim
  Italian** — do not hand-edit the generated block.
- Tier maps to the shared `applicable_to` mechanism: **EE** = soggetto
  essenziale, **EI** = soggetto importante. The national gap assessment renders
  this as an arbitrary-depth tree and scores only the leaves (requisiti),
  filtered by the org's entity classification — same engine as ReCyF.
- The 1 requisito whose wording differs between the two annexes (PR.AA-01 punto 3)
  is emitted as two tier-specific leaves (`…-EE` / `…-EI`).

### Backup — misura PR.DS-11 (verified 2026-09-04, MSP-A review round 7)

Verified against the signed PDFs (Allegato 1 pp. 8, 12; Allegato 2 p. 10):

| Fact | Article/Measure | Verbatim | Status |
|---|---|---|---|
| Backup measure sits under **Sicurezza dei dati (PR.DS)**, funzione PROTEZIONE (PROTECT) — NOT under a «Continuità operativa» category (no such measure category exists; continuity plans are ID.IM-04 via ambito h of GV.PO-01) | All. 1 §3.3.3 / All. 2 §3.3.3 | «PR.DS-11: I backup dei dati sono creati, protetti, mantenuti e verificati.» | ✅ |
| Only technology-adjacent base requirement (both annexes): periodic backups per the ID.IM-04 plans + **offline** copies for sistemi rilevanti. **Offsite is NOT a base requirement**; neither are immutability/WORM/air-gap or any named technology | All. 1 PR.DS-11 punto 1 | «…sono effettuati periodicamente i backup dei dati e delle configurazioni e, per almeno i sistemi informativi e di rete rilevanti, sono anche conservate copie di backup offline.» | ✅ |
| The backup POLICY itself is mandated by GV.PO-01 punto 1 lettera **l) «sicurezza dei dati»** (Tabella 1 maps ambito l → PR.DS-01 punti 1-2, PR.DS-02 punto 1, PR.DS-11 punto 1) | All. 1 Appendice Tabella 1 | ambito «l) Sicurezza dei dati.» → «PR.DS-11: punto 1.» | ✅ |
| **Essenziali only** (All. 2 adds requisiti 3-5): physical protection or encryption of backups + **periodic restore tests** for sistemi rilevanti. For **importanti**, restore tests are an internal best practice, not a base requirement | All. 2 PR.DS-11 punti 3-4 | «…è verificata periodicamente l'utilizzabilità dei backup effettuati mediante test di ripristino.» | ✅ |
| Recovery execution is RC.RP-01 (part of the RS.MA-01 incident plan), the only RC measure in Allegato 1 | All. 1 §6.1.1 | «RC.RP-01: La parte del piano di risposta agli incidenti relativa al ripristino viene eseguita una volta avviata dal processo di risposta agli incidenti.» | ✅ |

Consequence for generated documents: cite backup obligations as «Determinazione
ACN 379907/2025, Allegato 1 (soggetti importanti) / Allegato 2 (soggetti
essenziali), misura PR.DS-11 — categoria Sicurezza dei dati (PR.DS)»; frame
3-2-1-1-0, offsite distance, immutability/WORM/air-gap, and (for importanti)
restore-test cadences as internal implementation choices that exceed the base
requirement — same pattern as the MFA risk-based rule.

## Allegati 3–4 — Incidenti significativi di base (IS-1…IS-4)

<!-- meta: theme=incident; type=reference; date=2026-07-15; surfaces=data,prompt; guard=none -->

- **Official URLs (retrieved 2026-07-13, ACN portal):**
  - Allegato 3 (soggetti **importanti**): https://www.acn.gov.it/portale/documents/d/guest/detacn_nis_specifiche_2025_164179_allegato3
  - Allegato 4 (soggetti **essenziali**): https://www.acn.gov.it/portale/documents/d/guest/detacn_nis_specifiche_2025_164179_allegato4
  - (Slug carries the 164179 document family; surfaced by the ACN portal as the
    current annexes of the «specifiche di base». If ACN republishes them under a
    379907 slug, re-verify — content, not URL, is the pinned fact.)

### Verified facts

| Fact | Source | Detail | Status |
|---|---|---|---|
| IS are **typologies**, not severity tiers | Allegati 3–4 | one row per evidence type, no gravity ordering | ✅ |
| **Importanti = IS-1..IS-3 only** | Allegato 3 | table has exactly three rows | ✅ |
| **Essenziali = IS-1..IS-4** | Allegato 4 | table has four rows; IS-4 exists ONLY here | ✅ |
| IS-1 | verbatim | «perdita di riservatezza, verso l'esterno, di dati digitali di sua proprietà o sui quali esercita il controllo, anche parziale» | ✅ |
| IS-2 | verbatim | «perdita di integrità, con impatto verso l'esterno, di dati di sua proprietà o sui quali esercita il controllo, anche parziale» | ✅ |
| IS-3 | verbatim | «violazione dei livelli di servizio attesi dei suoi servizi e/o delle sue attività, sulla base dei livelli di servizio atteso (SL) … ai sensi della misura DE.CM-01» | ✅ |
| IS-4 (essenziali only) | verbatim | «accesso, non autorizzato o con abuso dei privilegi concessi, a dati digitali di sua proprietà o sui quali esercita il controllo, anche parziale» (anche sulla base dei parametri quali-quantitativi ex DE.CM-01) | ✅ |

### Correction applied (2026-07-13)

`packages/regulatory-data/src/country-configs/incident-reporting.ts` previously
described IS-1..IS-4 as invented severity tiers ("moderate incident",
"low-severity incident", "significant incident, important entity"). Corrected to
the official typology definitions above + per-level applicability (IS-4
essential-only). Trigger: MSP-A/Client-A customer memo, confirmed against the
official annexes.

### Still to pin (next pass)
- Categoria nodes currently display their CSF code (e.g. `GV.OC`); the official
  Italian category titles from the Framework Nazionale ed. 2025 could enrich them
  in a later pass without changing ids.

### Classification d'entité vs annexes ACN (piège, 2026-07-15)

La qualification **essenziale / importante** découle des **Allegato I / Allegato II du D.Lgs 138/2024** (les annexes secteurs du décret). Les **Allegato 3 / Allegato 4** appartenus à la **Determinazione ACN 379907** et concernent UNIQUEMENT les typologies d'incident significatif de base (IS-1..IS-4 ; Allegato 3 = importanti, Allegato 4 = essenziali). NE JAMAIS attribuer l'Allegato 3/4 au décret ni à la classe d'entité. Bug MSP-A/Client-A : la page de garde du PCO citait « Soggetto Importante (Allegato 3, DLgs 138/2024) » — faux sur les deux plans. Gardé par la règle `pco-wrong-classification-annex` (pco-consistency.ts + doc-audit).

## Balayage de vérification — carte article→sujet du D.Lgs 138/2024 (2026-07-15)

<!-- meta: theme=statute; type=reference; date=2026-07-15; surfaces=docs; guard=none -->

Balayage `verify-legal-source` des citations IT porteuses (rendues aux clients dans les docs générés), vérifiées contre les sources officielles ACN (FAQ NIS acn.gov.it) et la structure de la Gazzetta Ufficiale (GU 2024-10-01, 24G00155). **Aucune nouvelle erreur trouvée** au-delà du fix annexe du jour (voir section précédente).

| Fait | Article | Vérification | Statut |
|---|---|---|---|
| Responsabilité organes de direction / gouvernance | art. 23 (Capo IV) | ACN FAQ « organi di amministrazione » ; formazione non delegabile | ✅ |
| Misure di sicurezza (10 domaines) | art. 24 (Capo IV) | ACN FAQ « misure di sicurezza » | ✅ |
| Notifica di incidente (24h pre-allarme / 72h notifica / 1 mese relazione) | art. 25 (Capo IV) | ACN FAQ « notifica incidenti » ; transpose NIS2 art. 23(4) | ✅ |
| Sanzioni | art. 38 (Capo V) | ACN FAQ « sanzioni » ; le code n'affirme AUCUN montant IT spécifique (pas d'erreur possible) | ✅ |
| Registrazione / aggiornamento annuale | art. 7 (Capo I) | Gazzetta : art. 7 en Capo I Disposizioni generali ; art. 7 c. 1 : « Dal 1° gennaio al 28 febbraio » (GU relue le 2026-10-23) ; la fenêtre 1 mag–30 giu est celle de l'art. 30 (aggiornamento annuale), pas de l'art. 7 ; `acn-registration.ts` applique déjà 1 janvier–28 février | ✅ |

Sources : ACN FAQ NIS (https://www.acn.gov.it/portale/faq/nis/), Gazzetta Ufficiale GU 2024-10-01 24G00155 (https://www.gazzettaufficiale.it/eli/id/2024/10/01/24G00155/SG). Montants NIS2 (essenziali 10M€/2%, importanti 7M€/1,4%) : dans directive.yaml + locale IT d'une déviation DE, correctement attribués ; le bloc IT n'assère pas de plafond IT autonome. Récupéré 2026-07-15.

Note : balayage CIBLÉ sur les citations porteuses, pas une relecture ligne-à-ligne exhaustive de chaque chaîne.

## Sanctions — D.Lgs 138/2024, art. 38 (vérifié 2026-07-26)

<!-- meta: theme=sanctions; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** Gazzetta Ufficiale, texte de l'art. 38,
  https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.codiceRedazionale=24G00155&art.idArticolo=38&art.dataPubblicazioneGazzetta=2024-10-01
  (GU Serie generale n. 230 du 01/10/2024, 24G00155)
- **Retrieved + read:** 2026-07-26

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| Soggetti essenziali : **10 M€ ou 2 % du CA annuel mondial** | art. 38 c. 9 lett. a) | "euro 10.000.000 o del 2% del totale del fatturato annuo su scala mondiale" | ✅ |
| Soggetti importanti : **7 M€ ou 1,4 %** | art. 38 c. 9 lett. b) | "euro 7.000.000 o dell'1,4% del totale del fatturato annuo su scala mondiale" | ✅ |
| ⚠️ **Défaut d'enregistrement : bande SÉPARÉE et bien plus basse** — jusqu'à **0,1 %** du CA (essenziali) et **0,07 %** (importanti) | art. 38 c. 10-11 | "fino a un massimo dello **0,1%** del totale del fatturato annuo" / "fino a un massimo dello **0,07%**" | ✅ |
| ⚠️ **AUCUNE sanction pécuniaire individuelle sur les dirigeants** | art. 38 c. 9 et 11 | les amendes des commi 9 et 11 frappent le **soggetto**, pas les personnes physiques | ✅ (absence confirmée sur l'article) |
| La sanction visant les personnes physiques est une **incapacité à exercer des fonctions dirigeantes**, à titre **accessoire** | art. 38 c. 6 | "l'Autorità nazionale competente NIS può disporre nei confronti delle **persone fisiche** di cui al comma 5 … l'applicazione della **sanzione amministrativa accessoria della incapacità a svolgere funzioni dirigenziali** all'interno del medesimo soggetto" | ✅ |

### Re-lecture 2026-10-14 — même article, trois faits de plus

<!-- meta: theme=sanctions; type=reference; date=2026-10-14; surfaces=data,docs; guard=live:lintSanctionTier -->

Relu dans la Gazzetta, même URL et même codice redazionale (24G00155), parce
qu'une présentation au conseil générée le 14/10/2026 pour un **soggetto
importante** annonçait le plafond des essenziali (« EUR 7.000.000 oppure il
**2%** »), sous un titre qui disait « per i soggetti importanti », et affirmait
deux fois que les sanctions pécuniaires peuvent frapper les personnes
physiques, membres de l'organe d'administration compris. Les deux affirmations
sont fausses. Ce qui s'ajoute au tableau ci-dessus :

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| Intitulé exact de l'article | art. 38 | « Sanzioni amministrative » | ✅ |
| **Minimum** de la fourchette : un **vingtième** du maximum pour les essenziali, un **trentième** pour les importanti | art. 38 c. 9 | fourchette, pas un plafond sec | ✅ |
| Administrations publiques de l'Allegato III (et certains soggetti de l'Allegato IV) : **25 000 à 125 000 €** si essenziali, **réduit d'un tiers** si importanti | art. 38 c. 9 | bande distincte, aucun pourcentage de CA | ✅ |
| L'incapacité de l'art. 38 c. 6 est **conditionnée** à l'inexécution de la diffida | art. 38 c. 6 | « Qualora il soggetto non adempia nei termini stabiliti dalla **diffida di cui all'articolo 37, commi 6 e 7** » | ✅ |
| ⚠️ Tension interne du décret sur le champ des personnes visées | art. 38 c. 5 vs c. 6 | le c. 5 ouvre sur « Qualsiasi persona fisica responsabile di un **soggetto essenziale** », le c. 6 nomme « dei soggetti essenziali **e dei soggetti importanti** » | ⏳ relevé, non tranché — ne pas affirmer dans un document que l'incapacité s'applique, ou ne s'applique pas, à un importante |

Gardé en production depuis le 14/10/2026 par `lintSanctionTier`
(`packages/shared/src/legal-citation-lint.ts`) : le chiffre de l'autre classe
et toute sanction pécuniaire visant une personne physique déclenchent la passe
corrective de génération, comme les règles de citation et d'allegato.

### Correction apportée à `transposition-references.ts` (IT)

Le bullet affirmait : « the Italian transposition explicitly authorises ACN to
impose **individual fines** on members of the management body, **in addition to**
entity-level fines. The directive permits this; Italy has exercised the option. »

C'est faux de la même manière qu'en France :
- ce n'est pas une **amende** mais une **incapacité à exercer des fonctions
  dirigeantes** (c. 6), et elle est qualifiée d'**accessoire** ;
- elle n'est donc pas **en sus** de l'amende de l'entité, elle est accessoire à
  une sanction principale et vise les personnes physiques du comma 5.

**C'était le même texte, mot pour mot, que le bullet français.** Rédigé par
analogie entre pays, pas par lecture des deux textes. Les deux sont maintenant
corrigés à partir de leur source respective.

### Pourquoi le balayage du 2026-07-15 ne l'avait pas vu

Ce balayage concluait, pour l'art. 38 : « le code n'affirme AUCUN montant IT
spécifique (pas d'erreur possible) ». La conclusion était **exacte sur les
montants** — le bloc IT n'asserte effectivement aucun plafond autonome. Mais le
bullet fautif ne porte **aucun chiffre** : il asserte un *mécanisme*. Un contrôle
centré sur les nombres le laisse passer par construction.

À retenir pour la méthode : vérifier aussi les affirmations qualitatives
(« qui sanctionne », « quelle nature de sanction », « cumul ou séquence »), pas
seulement les montants et les dates. Ce sont elles qui se propagent par
copier-coller entre pays.

## ⏳ À vérifier — art. 30 et art. 32 D.lgs 138/2024 (relevé 2026-07-27)

<!-- meta: theme=scoping,registration; type=needs-check; date=2026-07-27; surfaces=data,docs; guard=none -->

`packages/regulatory-data/src/country-configs/acn-registration.ts` s'appuie sur
deux articles que **cet index ne couvre pas** :

| Affirmation dans la config | Article | Statut |
|---|---|---|
| Base normative citée pour une étape d'enregistrement | art. 30 DLgs 138/2024 | ⏳ needs-check |
| « Allegato II sector + size thresholds OR Allegato I + smaller-than-essential. Subject to **ex-post supervision per art. 32** » | art. 32 DLgs 138/2024 | ⏳ needs-check |

La surveillance ex post des soggetti importanti est **plausible** : elle reflète
l'art. 33 de la directive, qui distingue la supervision ex ante des entités
essentielles de la supervision ex post des entités importantes. Mais plausible
n'est pas vérifié, et c'est précisément le raisonnement par analogie qui a produit
la plupart des erreurs corrigées le 2026-07-27.

**Tentatives de récupération, pour épargner le temps du suivant :**

- `normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-09-04;138`
  répond **200 mais renvoie un AUTRE texte** : une loi de délégation européenne
  dont l'art. 31 s'intitule « Procedure per l'esercizio delle deleghe legislative »
  et l'art. 32 « Principi e criteri direttivi generali di delega ». La variante
  `!vig=` donne le même résultat.
  ⚠️ **Ne pas lire les articles de ce document comme s'ils étaient ceux du D.lgs
  138/2024** : les numéros coïncident, le contenu n'a rien à voir. C'est le piège
  parfait pour fabriquer une citation.
- `gazzettaufficiale.it/eli/id/2024/10/01/24G00155/sg` répond 200 mais ne rend
  que 799 caractères (page de garde JS).

Piste pour la prochaine passe : la référence de publication connue est la
**Gazzetta Ufficiale, Serie generale, n. 230 du 1er octobre 2024** ; viser le PDF
de la Serie generale plutôt que la page ELI, ou vérifier la date de signature du
décret avant de reconstruire une URN.

**Rien n'est affirmé à tort en attendant** : les deux articles ne servent que de
chaînes `basis` et d'un descriptif de classification, aucun délai ni aucune
autorité n'en dépend.

> ✅ **Résolu le 2026-08-25** — voir le balayage ci-dessous : art. 30 confirmé
> (elencazione/catégorisation annuelle, la base citée était correcte) ; art. 32
> = « Previsioni settoriali specifiche », la mention « ex-post supervision per
> art. 32 » était FAUSSE (numéro copié de la directive) et a été corrigée vers
> l'art. 36 c. 2 dans `acn-registration.ts`.

## Carte vérifiée artt. 29–37 — D.Lgs 138/2024 (vérifié 2026-08-25)

<!-- meta: theme=statute,sanctions; type=reference; date=2026-08-25; surfaces=data,docs,prompt; guard=it-preamble-article-map -->

**Déclencheur :** signalement MSP-A (Reviewer-A, mail 2026-08-25) — une PSSI
générée pour Client-A citait « Art. 29, DLgs 138/2024 — Poteri di vigilanza e
supervisione dell'ACN sui soggetti importanti ». Citation HALLUCINÉE par le
modèle (le numéro n'existe nulle part dans nos données) ; le partenaire avait
raison sur l'art. 29.

- **Source read:** Gazzetta Ufficiale, texte article par article (GU Serie
  generale n. 230 du 01/10/2024, 24G00155), URLs
  `gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.versione=1&art.idGruppo=<capo>&art.flagTipoArticolo=0&art.codiceRedazionale=24G00155&art.idArticolo=<n>&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2024-10-01&art.progressivo=0`
  — ⚠️ le paramètre **`art.idGruppo` (numéro de Capo) est obligatoire** : sans
  lui la page rend le stub « Gazzetta in fase di caricamento ». Les liens exacts
  s'obtiennent depuis le sommaire `atto/vediMenuHTML?...` (script Playwright :
  scratchpad `fetch-articles-menu.mjs`).
- **Retrieved + read:** 2026-08-25

| Article | Rubrica officielle (verbatim) | Statut |
|---|---|---|
| art. 24 | « Obblighi in materia di misure di gestione dei rischi per la sicurezza informatica » — c. 1 : « misure tecniche, operative e organizzative adeguate e **proporzionate**, secondo le modalità e i termini di cui agli articoli 30, 31 e 32 » (lu le 2026-08-25 : la proportionnalité des mesures peut donc légitimement citer l'art. 24, en plus de l'art. 31) | ✅ |
| art. 29 | « Banca dei dati di registrazione dei nomi di dominio » | ✅ |
| art. 30 | « Elencazione, caratterizzazione e categorizzazione delle attività e dei servizi » (fenêtre annuelle « dal 1° maggio al 30 giugno di ogni anno », via la piattaforma de l'art. 7) | ✅ |
| art. 31 | « Proporzionalità e gradualità degli obblighi » (c. 2 = l'ACN fixe termes/modalités/temps graduels — PAS de la vigilanza) | ✅ |
| art. 32 | « Previsioni settoriali specifiche » | ✅ |
| art. 33 | « Coordinamento con la disciplina del perimetro di sicurezza nazionale cibernetica » | ✅ |
| art. 34 | « Principi generali per lo svolgimento delle attività di vigilanza ed esecuzione » (c. 1 : vise essenziali ET importanti) | ✅ |
| art. 35 | « Monitoraggio, analisi e supporto » | ✅ |
| art. 36 | « Verifiche e ispezioni » — **c. 2 verbatim : « Nei confronti dei soggetti importanti, i poteri di verifica e ispettivi si applicano unicamente qualora l'Autorità nazionale competente NIS acquisisca o riceva elementi di prova, indicazioni o informazioni che suggeriscano possibili violazioni del presente decreto. »** | ✅ |
| art. 37 | « Misure di esecuzione » | ✅ |
| art. 38 | « Sanzioni » (déjà vérifié 2026-07-26, section supra) | ✅ |

**Le fait porteur** : la distinction ex ante / ex post entre essenziali et
importanti ne vit PAS dans des articles séparés comme dans la directive
(art. 32/33 NIS2) — le décret a un Capo V unifié (artt. 34-38) et la
restriction ex post des importanti est **l'art. 36, comma 2**. Toute citation
« vigilanza ex ante art. 31 c. 2 » ou « ex post art. 32/34 » est un numéro de
la directive ou une approximation plaqués sur le décret.

**Corrections apportées (2026-08-25) :**
- `acn-registration.ts` : essenziale « ex ante art. 31 c. 2 » → art. 36 c. 1 ;
  importante « ex post art. 32 » → art. 36 c. 2 (5 locales à chaque fois).
- `tabletop-scenarios/it/scenarios.ts` : « vigilanza ex post art. 34 » →
  art. 36, comma 2.
- `packages/prompts/src/templates/it/documents.ts` (IT_PREAMBLE) : ajout de la
  carte d'articles vérifiée + règle « cite UNIQUEMENT un numéro d'article ancré
  dans le prompt ; en cas de doute, nomme la disposition SANS numéro ». C'est le
  garde-fou contre la classe d'erreur signalée par MSP-A (numéro halluciné à
  la génération, invisible dans nos données).

## Corpus « Quadro Legale » des documents générés (livré 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/it-quadro-legale.test.ts -->

« Squelette validé, chair générée » (maintainer's go 2026-08-25) : la section
« Quadro Legale e Normativo » des documents générés misure-acn n'est PLUS
écrite par le modèle. `packages/regulatory-data/src/doc-corpus/it-quadro-legale.ts`
compose un bloc verbatim à partir des faits vérifiés de CET index (rubriche
artt. 23-38, sanctions c. 9-11, fenêtre art. 30, Det. 379907/2025, entrée en
vigueur 16/10/2024) ; le prompt fait émettre un placeholder
(`{{QUADRO_LEGALE}}`) et ai-service (`lib/legal-frame.ts`) insère le bloc,
avec fallback si le modèle ignore le contrat. PCO exclu pour l'instant
(contrat 9 sections + gates dédiés). Toute évolution d'un fait légal doit
passer par cet index PUIS par le module corpus — jamais l'inverse.

## Correction — le Framework Nazionale ed. 2025 A la fonction GV (2026-08-25)

<!-- meta: theme=framework; type=reference; date=2026-08-25; surfaces=data,docs,prompt; guard=packages/regulatory-data/test/country-configs-doc-templates.test.ts -->

Le pin « pas de Govern — le Framework ed. 2025 précède NIST CSF 2.0 » répété
dans doc-templates, prompts IT, i18n et 5 fichiers de tests était une PRÉMISSE
FAUSSE : la Determinazione ACN 379907/2025 (section supra) est explicitement
adossée au Framework Nazionale ed. 2025 « adaptation italienne de NIST CSF
2.0 », et `misure-acn.yaml` — généré verbatim des XLSX officiels — s'ouvre sur
`GV — Governare` (GV.OC, GV.PO, GV.SC…, 76 occurrences). Témoin externe :
Reviewer-A (MSP-A) cite GV.PO-01 dans son signalement du 25/08.

**Corrections :** PSSI → GV/GV.PO-01 (ID.GV-01 n'existe pas en CSF 2.0),
catena approvvigionamento → GV/GV.SC-01, fornitori critici → GV/GV.SC-04
(doc-templates + bundle prompts, parité testée) ; label i18n `qnrcs.GV`
(« Governare ») ; footnote picker « 5 fonctions sans Govern » corrigée en 10
locales ; préambule runtime misure-acn « 6 funzioni » ; `ItAcnFunctionId` +
`MISURE_ACN_FUNCTION_IDS` étendus. **Reste (suivi) :** la vue crosswalk du
dashboard Misure ACN modélise toujours 5 fonctions (choix d'affichage,
l'arbre d'assessment natif score déjà GV) — son extension à GV est un chantier
séparé.

## Art. 23 verbatim + revue MSP-A « final remarks on PSSI » (2026-08-27)

<!-- meta: theme=governance,documents; type=reference; date=2026-08-27; surfaces=data,prompt,doc-gen; guard=packages/shared/src/legal-citation-lint.test.ts -->

**Déclencheur :** mail Reviewer-A (MSP-A) du 27/08 — 9 remarques sur la
PSSI Client-A. Vérification art. 23 lu en Gazzetta (script fetch-articles-menu,
retrieved 2026-08-27) + requisiti ACN dans misure-acn.yaml (verbatim XLSX).

| Fait | Où | Verbatim (officiel) | Statut |
|---|---|---|---|
| **L'art. 23 contient SEULEMENT les commi 1, 2, 3** — « comma 4 » n'existe pas | art. 23 | structure lue intégralement | ✅ |
| Approbation des modalités d'implémentation | art. 23 c. 1 lett. a) | "approvano le modalità di implementazione delle misure di gestione dei rischi" | ✅ |
| Sovrintendenza + responsabilité | art. 23 c. 1 lett. b)-c) | "sovrintendono all'implementazione" / "sono responsabili delle violazioni" | ✅ |
| Formation des organes : **« sono tenuti a seguire una formazione »** — SANS « non delegabile », SANS fréquence | art. 23 c. 2 lett. a) | "sono tenuti a seguire una formazione in materia di sicurezza informatica" | ✅ |
| Formation employés : promue, « periodica » (pas annuelle) | art. 23 c. 2 lett. b) | "promuovono l'offerta periodica di una formazione coerente" | ✅ |
| Informativa incidents aux organes | art. 23 c. 3 | "sono informati su base periodica o, se opportuno, tempestivamente" | ✅ |
| PR.AT-01 exige un plan de formation approuvé/documenté, **sans fréquence annuelle** | misure-acn.yaml PR.AT-01.R1-R2 | plan « definito, attuato, aggiornato e documentato », « approvato dagli organi » | ✅ |
| Punto di contatto NIS + sostituto + Referente CSIRT + sostituti dans l'organisation sécurité | misure-acn.yaml GV.RR-02.R3 (art. 7 c. 6 decreto) | "sono inclusi il punto di contatto e il suo sostituto, il referente CSIRT e gli eventuali suoi sostituti" | ✅ |

**Corrections appliquées (2026-08-27) :** « formazione non delegabile » retiré
de 6 emplacements (IT_PREAMBLE, PSSI + formazione prompts, board deck, corpus
Quadro Legale, tabletop) — le concept (participation personnelle) est gardé
sans attribuer au décret une formule qu'il ne contient pas ; la ligne « ✅
formazione non delegabile » du balayage 2026-07-15 supra est SUPERSEDED par
cette entrée (l'ACN FAQ paraphrasait, le décret dit « sono tenuti a seguire »).
Nouvelles règles génériques TOUS pays (prompt-builder) : statut BOZZA sans date
d'approbation inventée ; distinction explicite exigence-réglementaire-citée vs
« frequenza interna adottata dall'organizzazione » (les dates calculées depuis
la date de génération = jalons internes, jamais des échéances ACN). Lint :
plafond de commas art. 23 ≤ 3 (gate live + doc-audit) ; doc-audit
`claimed-approval` (document généré qui prétend être déjà approuvé avec date).
Rôles : RSI ≠ Punto di contatto NIS ≠ Referente CSIRT (cumul seulement si
désignation formelle) — règle ajoutée au prompt misure-acn.

### Addendum revue MSP-A — 2e passe (2026-08-27, après régénération)

<!-- meta: theme=governance; type=reference; date=2026-08-27; surfaces=prompt; guard=none -->

La PSSI régénérée par MSP-A valide le pipeline : 8 points sur 9 résolus, le
point 8 (rôles) « substantial improvement » mais la fiche RSI disait encore
« mantiene i rapporti con ACN e CSIRT Italia ». Corrections (formulations
suggérées par le partenaire, adoptées) : (1) l'RSI « supporta e coordina …
il Punto di contatto NIS e il Referente CSIRT, senza sostituirsi alle funzioni
formalmente attribuite a tali ruoli » ; (2) le périmètre d'approbation CdA —
l'art. 23 c. 1 lett. a) vise les modalità di implementazione, PAS chaque
document opérationnel subordonné : la règle « OGNI politica e piano → CdA »
du 25/08 sur-corrigeait, remplacée par la distinction politiques/plans
(→ CdA) vs documents opérationnels (→ responsabilités internes). Les deux
classes sont génériques → règles ajoutées au prompt-builder pour les 9 pays
(rôles institutionnels ≠ rôle sécurité interne ; approbation du top-governance
réservée aux documents que la loi lui assigne).

### Addendum revue MSP-A — 3e passe : MFA risk-based (2026-08-27)

<!-- meta: theme=framework; type=reference; date=2026-08-27; surfaces=prompt; guard=none -->

Politica accessi logici : la matrice MFA (§8.1) était présentée comme « in
compliance with the PR function » alors que **PR.AA-03 est risk-based** —
verbatim misure-acn.yaml : PR.AA-03.R1 « le modalità di autenticazione …
sono commisurate al rischio » ; PR.AA-03.R2 MFA « per almeno i sistemi …
rilevanti, in accordo agli esiti della valutazione del rischio di cui alla
misura ID.RA-05 ». Correction : formule d'introduction suggérée par le
partenaire adoptée dans le prompt misure-acn (ancrage PR.AA-03 + ID.RA-05,
choix plus restrictifs = scelte organizzative interne) + règle GÉNÉRIQUE
9 pays dans prompt-builder : un contrôle rendu risk-based par le framework
ne se présente JAMAIS comme matrice/calendrier prescrit — c'est l'approche
d'implémentation de l'organisation dérivée de sa propre analyse de risque.

### Addendum revue MSP-A — 5e passe : Politica Asset (2026-08-30)

<!-- meta: theme=governance,documents; type=reference; date=2026-08-30; surfaces=data,prompt; guard=none -->

Le partenaire confirme que la distinction exigence/choix interne « repeatedly »
présente dans le document — la boucle produit fonctionne. 4 corrections :
(1) définition UNIQUE de l'RSI (« funzione organizzativa », interne ou
esternalisée par nomination formelle — plus jamais « ruolo interno » dans les
définitions et « esternalizzabile » dans le corps) + règle générique 9 pays
« une définition par rôle, réutilisée partout ; ne jamais inventer de chaîne de
désignation » ; (2)-(3) chaîne des rôles NIS adoptée sur indication du
partenaire : CdA = governance ; **Punto di contatto NIS istituito sur la
Piattaforma désigne le Referente CSIRT** (⏳ NEEDS-CHECK : épingler le verbatim
de la Determinazione Piattaforma NIS ex art. 7 c. 6 — Det. 127437/2026 ? — les
pages FAQ ACN ne portent pas la chaîne ; source actuelle = praticien MSP-A,
fiable mais non officielle) ; notifications d'incident = Referente CSIRT, pas
le Punto di contatto ; (4) art. 30 requalifié « riferimento normativo
correlato » dans l'ancre asset de doc-templates (la base spécifique est
l'art. 24 c. 2 lett. i + ID.AM).

### Addendum revue MSP-A — 6e passe : codes de catégories ACN (2026-09-01)

<!-- meta: theme=framework; type=reference; date=2026-09-01; surfaces=data,prompt,doc-gen; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Politica di Crittografia : le document citait une catégorie « **PR.CR
(Crittografia)** » — INEXISTANTE. Le catalogue des Specifiche ACN est FERMÉ à
18 catégories (GV.OC/GV.PO/GV.RM/GV.RR/GV.SC, ID.AM/ID.IM/ID.RA,
PR.AA/PR.AT/PR.DS/PR.IR/PR.PS, DE.CM, RS.CO/RS.MA, RC.CO/RC.RP — dérivé de
misure-acn.yaml, verbatim des XLSX officiels) ; la crittografia rientre en
**PR.DS** (PR.DS-01 dati at rest, PR.DS-02 in transito). Sources : « Guida
alla lettura Specifiche di base » (PDF 09/01/2026, fournie par le partenaire —
art. 24 c. 2 lett. h → PR.DS-01/02) + notre yaml. Corrections : gate live
(`validCategoryCodes` dans le lint, test de parité liste↔yaml), copie
doc-audit, catalogue épinglé dans le prompt misure-acn, rubrique --deep
étendue aux codes de taxonomie inventés. Classe générique notée : tout
framework à catalogue fermé (CyFun, QNRCS, ENS, ZSIS, KSC) peut recevoir le
même gate au rythme des listes vérifiées.

### Addendum revue MSP-A — 8e passe : Politica di Gestione delle Vulnerabilità (2026-09-07)

<!-- meta: theme=framework; type=reference; date=2026-09-07; surfaces=prompt,doc-gen,corpus; guard=packages/regulatory-data/test/it-quadro-legale.test.ts -->

Signalement Reviewer-A (mail 07/09 15:04 UTC), 6 points, tous vérifiés sur
sources officielles locales avant correction :

| Fait | Source | Verbatim / détail | Statut |
|---|---|---|---|
| Categoria vulnerabilità | misure-acn.yaml (XLSX ufficiali) | sezione «g) Gestione delle vulnerabilità» porte ID.RA-01 et ID.RA-08 | ✅ |
| Base importanti | Allegato 1 | ID.RA-01.R1 [EE, EI] : «Le informazioni di cui al punto 1 della misura ID.RA-08 sono utilizzate per identificare eventuali vulnerabilità» ; R2 (VA/PT periodici) et R3 (relazioni) = [EE] seulement | ✅ |
| ID.RA-08 punti | Allegato 1/2 | punti 1-4 [EE, EI] (canali CSIRT Italia/CERT/ISAC ; pronta risoluzione o rischio accettato ex ID.RA-06 ; piano di gestione ; approvazione organi) ; punto 5 (canali fornitori software critico) = [EE] | ✅ |
| Revue annuelle des politiques = REQUISITO | Allegato 1/2 | GV.PO-02.R1 [EE, EI] : «riesaminate e, se opportuno, aggiornate periodicamente e comunque almeno con cadenza annuale, nonché qualora si verifichino evoluzioni del contesto normativo…, incidenti significativi, variazioni organizzative o mutamenti dell'esposizione» ; R3 (registro esiti) = [EE] | ✅ |
| «Monitoraggio continuo» ≠ obbligo ACN | Allegato 1/2 | DE.CM-01 = sezione «o) Monitoraggio degli eventi di sicurezza» (rilevare incidenti) ; ID.RA-08.R1 = monitoraggio delle FONTI (canali CSIRT/CERT/ISAC). Le monitoring continu des vulnérabilités est une scelta operativa interna | ✅ |
| Art. 24 c.2 lettere | GU (docs/research/eur-lex/it-dlgs-138-2024.txt, p. 19-20) | d) «sicurezza della catena di approvvigionamento, ivi compresi gli aspetti… diretti fornitori» ; e) «sicurezza dell'acquisizione, dello sviluppo e della manutenzione…, ivi comprese la gestione e la divulgazione delle vulnerabilità» ; h) «politiche e procedure relative all'uso della crittografia e, ove opportuno, della cifratura» | ✅ |
| Det. vigente (point 1 Reviewer-A) | acn.gov.it (vérifié 04/09, re-confirmé) | n. 379907 EST la determinazione en vigueur ; le doc était correct sur le numéro. [Corrigé 08/09 : la date officielle est le 19-12-2025 (protocole, registre Atti generali ACN) ; le 18-12 = Tavolo + firma — Reviewer-A avait raison sur ce micro-point, round 9.] Réponse : citation auto-identifiante à la première occurrence (n° + date + applicabilité + abrogation 164179) dans le corpus it-quadro-legale + règle de citation | ✅ |

Erreur de classe corrigée en GÉNÉRIQUE (9 pays, prompt-builder) : la règle
« internal-choice » citait « annual risk-assessment reviews » comme exemple de
choix interne → le modèle a étiqueté « scelta organizzativa interna » une
cadence de revue que GV.PO-02 IMPOSE. Nouvelle règle : avant d'étiqueter une
cadence de revue comme choix interne, vérifier si une misura nommée dans le
prompt l'impose ; seule une cadence PLUS stricte que l'obligation est un choix
interne. Corrections IT : 3 bullets MISURE_ACN_OUTPUT_CITATION_RULE (GV.PO-02,
mappa lettere art. 24 c.2, ancrage ID.RA-01/ID.RA-08 + règle monitoraggio),
override vulnerability_management, template 15 requisiti 3/6.

### Addendum revue MSP-A — 9e passe (1/2) : date de la Det. 379907 (2026-09-08)

<!-- meta: theme=statute; type=reference; date=2026-09-08; surfaces=data,prompt; guard=packages/regulatory-data/test/it-quadro-legale.test.ts -->

Micro-point de Reviewer-A (mail 08/09) VÉRIFIÉ ET CONFIRMÉ : la citation
officielle est «Determinazione del Direttore generale dell'ACN **n. 379907
del 19 dicembre 2025**» (registre Atti generali, acn.gov.it/portale/en/
amministrazione-trasparente/atti-generali, consulté 08/09/2026). Le PDF
signé (detacn_obblighi_2511-v3_signed) porte : «SENTITO il Tavolo per
l'attuazione della disciplina NIS nella riunione del 18 dicembre 2025» ;
«Roma, data del protocollo» ; firma numérique Bruno Frattasi 18.12.2025
18:27:31 — le 18/12 est la date de firma/Tavolo, le 19/12 la date de
protocole qui fait foi. Art. 9 c.1 verbatim : «La presente determinazione
**aggiorna e sostituisce** la determinazione ACN n. 164179 del 14 aprile
2025» (pas «abroga») ; art. 9 c.3 : «si applica a decorrere dal 15 gennaio
2026». Corrigé dans it-quadro-legale.ts, la règle de citation
native-doc-prompts et les entrées supra.

### Addendum revue MSP-A — 9e passe (2/2) : cohérence inter-documenti VDR ↔ Backup (2026-09-08)

<!-- meta: theme=documents; type=reference; date=2026-09-08; surfaces=prompt,doc-gen; guard=packages/shared/src/legal-citation-lint.test.ts -->

Signalement Reviewer-A (nouveau fil 08/09, VDR «Metodologia e registro di
valutazione dei rischi» générée le matin même croisée avec la Politica
Backup) : (1) la VDR citait «Allegato 2» ~15 fois pour Client-A (importante →
Allegato 1) — AUCUN hardcode dans les templates, le modèle choisissait seul ;
(2) le Plan R-01 fixait «test di ripristino trimestrali» que la politique
redéfinit en matrice mensile/trimestrale/semestrale ; (3) RPO/RTO et
retention présentés comme «derivati dalla valutazione del rischio» alors que
la VDR ne les contient pas ; (4) mappatura asset→classe de backup incomplète
(configurations firewall/switch/VPN/hypervisor/auth/sistema di backup).
Correctifs : gate déterministe `lintAllegatoClassification` (shared, branché
sur la passe corrective de generate.routes avec la classification org ;
fenêtres explicatives nommant les deux classes exclues) + règle de prompt
SELEZIONE DELL'ALLEGATO ; règles CATENA DOCUMENTALE (IT + générique 9 pays) :
la VDR formule l'esigenza et RINVIA à la politique pour le paramètre, une
politique n'attribue jamais un valeur numérique à l'analyse de risque,
retention justifiées par business/audit/conservation ; matrice asset→classe
exigée dans le template backup. NB : la copie offline doc-audit ne porte pas
encore le check allegato (elle n'a pas la classification org) — à ajouter si
doc-audit reçoit un paramètre classification.

## Scope and classification: D.Lgs. 138/2024 Art. 3, Art. 4, Art. 6 and Allegati I to IV, read in full (2026-10-23)

<!-- meta: theme=scoping; type=reference; date=2026-10-23; surfaces=data,ui,marketing; guard=none -->

- **Official citation:** Decreto legislativo 4 settembre 2024, n. 138, Gazzetta
  Ufficiale della Repubblica italiana, Serie Generale n. 230 del 1° ottobre 2024,
  codice redazionale 24G00155. The GU act page states "Entrata in vigore del
  provvedimento: 16/10/2024".
- **Primary text read:** the full issue PDF of GU Serie Generale n. 230 (88 PDF
  pages), https://www.gazzettaufficiale.it/eli/gu/2024/10/01/230/sg/pdf, linked
  from the ELI page https://www.gazzettaufficiale.it/eli/id/2024/10/01/24G00155/sg.
  Fetched with `curl` and a browser User-Agent, converted with `pdftotext`:
  reading order for the articles, `-layout` for the annex tables, because
  reading order detaches the sector labels from their rows. Printed GU pages:
  Art. 3 pp. 7-8, Art. 4 p. 8, Art. 6 p. 9, Art. 40 pp. 28-30 (c. 4 to c. 6 on
  p. 29), Allegato I
  pp. 32-35 (sector 8 on pp. 34-35), Allegato II pp. 36-37, Allegato III p. 38,
  Allegato IV p. 39.
- **Consolidated text checked:** normattiva,
  https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-09-04;138
  and its article endpoint (`/atto/caricaArticolo?...&art.idGruppo=<capo>&art.idArticolo=<n>`;
  the annexes are `art.idGruppo=7&art.flagTipoArticolo=<1 to 4>&art.idArticolo=1`).
  Art. 3, Art. 4, Art. 6, Allegato I and Allegato II each show "Testo in vigore
  dal: 16-10-2024" and version 1. Every paragraph of Art. 3, Art. 4 and Art. 6
  on normattiva is found verbatim in the GU PDF (compared programmatically), and
  the Allegato I and II rows quoted below read the same in both.
  The act page carries an "aggiornamenti all'atto" entry that is hidden
  (`d-none`): normattiva records no amendment of the decree. On this date the
  URN above returned this decree; the 2026-07-27 note earlier in this file had
  it return another act. The GU act page renders its "Avviso di rettifica" and
  "Errata corrige" tab inactive (`class="ghost"`).
- **Other texts read, for the glosses:** Recommendation 2003/361/CE, Italian
  text, EUR-Lex CELEX 32003H0361; Directive (EU) 2022/2555, English text, EUR-Lex
  CELEX 32022L2555. Both rendered with Playwright, because `curl` receives an
  empty HTTP 202 from EUR-Lex.
- **Retrieved and read:** 2026-10-23.

### Why this section exists

The Italian diagnostic (`apps/web/src/components/diagnostic/it-config.ts`) told
a visitor that a "fornitore DNS, IXP, registro TLD, fornitore di servizi cloud,
data centre, CDN o prestatore di servizi fiduciari qualificati" is in scope
regardless of size and is an essential entity, citing "Allegato I DLgs 138/2024
+ art. 2(2)(a) Direttiva NIS 2". Allegato I does list cloud, data-centre, CDN
and IXP providers, but being listed only makes an entity a *type*: Art. 3 c. 2
applies the size test to every Allegato I and II type, and the size-independent
heads are Art. 3 c. 5 to c. 10. Cloud, data-centre, CDN and IXP providers appear
in none of them, nor in the essential list of Art. 6 c. 1.

### Fact table

| Fact | Article | Verbatim quote (Italian) | English gloss | Status |
|---|---|---|---|---|
| What is in scope: the types of four annexes, under Italian jurisdiction | Art. 3 c. 1 | "Nell’ambito di applicazione del presente decreto rientrano i soggetti pubblici e privati delle tipologie di cui agli allegati I, II, III e IV, che costituiscono parte integrante del presente decreto, che sono sottoposti alla giurisdizione nazionale ai sensi dell’articolo 5." | Public and private entities of the types in Annexes I to IV that fall under Italian jurisdiction under Art. 5. | verified |
| General size test: above the small-enterprise ceilings | Art. 3 c. 2 | "Il presente decreto si applica ai soggetti delle tipologie di cui all’allegato I e II, che superano i massimali per le piccole imprese ai sensi dell’articolo 2, paragrafo 2, dell’allegato alla raccomandazione 2003/361/CE." | Annex I and II types are in scope only when they exceed the small-enterprise ceilings of Recommendation 2003/361/EC. | verified |
| The ceilings referred to | Recommendation 2003/361/CE, Annex, Art. 2(1) and (2) (EUR-Lex, IT) | "La categoria delle microimprese delle piccole imprese e delle medie imprese (PMI) è costituita da imprese che occupano meno di 250 persone, il cui fatturato annuo non supera i 50 milioni di EUR oppure il cui totale di bilancio annuo non supera i 43 milioni di EUR." / "Nella categoria delle PMI si definisce piccola impresa un'impresa che occupa meno di 50 persone e realizza un fatturato annuo o un totale di bilancio annuo non superiori a 10 milioni di EUR." | SME: fewer than 250 persons, and turnover not above EUR 50 M or balance sheet not above EUR 43 M. Small: fewer than 50 persons, and turnover or balance sheet not above EUR 10 M. | verified |
| Public-body control does not stop an entity being an SME | Art. 3 c. 3; Recommendation, Annex, Art. 3(4) | "L’articolo 3, paragrafo 4, dell’allegato alla raccomandazione 2003/361/CE della Commissione, del 6 maggio 2003, non si applica ai fini del presente decreto." / Recommendation: "un'impresa non può essere considerata PMI se almeno il 25 % del suo capitale o dei suoi diritti di voto è controllato direttamente o indirettamente da uno o più organismi collettivi pubblici o enti pubblici, a titolo individuale o congiuntamente." | The rule that an enterprise 25 % or more controlled by public bodies cannot be an SME is switched off: a publicly controlled company can be small, and then fail the c. 2 test. | verified |
| Partner and linked enterprises are aggregated, with a safeguard ACN applies | Art. 3 c. 4 and c. 12; Recommendation, Annex, Art. 6(2) | "Per determinare se un soggetto è da considerarsi una media o grande impresa ai sensi dell’articolo 2 dell’allegato della raccomandazione 2003/361/CE, si applica l’articolo 6, paragrafo 2, del medesimo allegato, salvo che ciò non sia proporzionato, tenuto anche conto dell’indipendenza del soggetto dalle sue imprese collegate in termini di sistemi informativi e di rete che utilizza nella fornitura dei suoi servizi e in termini di servizi che fornisce." / "L’Autorità nazionale competente NIS applica la clausola di salvaguardia di cui al comma 4, secondo i criteri per la determinazione individuati con le modalità di cui all’articolo 40, comma 1." / Recommendation: "si aggiunge il 100 % dei dati relativi alle eventuali imprese direttamente o indirettamente collegate all'impresa in questione" | Size is computed with the Recommendation's Art. 6(2) aggregation (partner enterprises pro rata, linked enterprises at 100 %), unless that is disproportionate given the entity's independence from its linked enterprises in systems and services. ACN applies the safeguard, on criteria set by Prime Ministerial decree (Art. 40 c. 1). | verified |
| **In scope at any size: five heads** | Art. 3 c. 5 | "Il presente decreto si applica, indipendentemente dalle loro dimensioni, anche: a) ai soggetti che sono identificati come soggetti critici ai sensi del decreto legislativo, che recepisce la direttiva (UE) 2022/2557 del Parlamento europeo e del Consiglio, del 14 dicembre 2022; b) ai fornitori di reti pubbliche di comunicazione elettronica o di servizi di comunicazione elettronica accessibili al pubblico; c) ai prestatori di servizi fiduciari; d) ai gestori di registri dei nomi di dominio di primo livello e fornitori di servizi di sistema dei nomi di dominio; e) ai fornitori di servizi di registrazione dei nomi di dominio." | Regardless of size: (a) critical entities under the CER transposition; (b) providers of public e-communications networks or publicly available e-communications services; (c) trust service providers, qualified or not; (d) TLD registries and DNS service providers; (e) domain name registration service providers. **Cloud, data-centre, CDN, IXP, MSP and MSSP providers are not listed.** | verified |
| Public administrations of Allegato III, at any size | Art. 3 c. 6 | "Il presente decreto si applica, altresì, anche indipendentemente dalle loro dimensioni, alle pubbliche amministrazioni di cui all’articolo 1, comma 3, della legge 31 dicembre 2009, n. 196, ricomprese nelle categorie elencate nell’allegato III." | Public administrations within Art. 1 c. 3 of Law 196/2009 (the annual ISTAT list, per the official note to Art. 3) that fall in an Allegato III category, at any size. | verified |
| More public-administration categories can be added by decree | Art. 3 c. 7 | "con uno o più decreti del Presidente del Consiglio dei ministri adottati secondo le modalità di cui all’articolo 40, comma 2, possono essere individuate ulteriori categorie di pubbliche amministrazioni a cui si applica il presente decreto al fine di adeguare l’elenco di categorie di cui all’allegato III." | Further categories may be added by Prime Ministerial decree (DPCM). Whether any DPCM has done so was not checked (see the open items below). | verified (the power) |
| Allegato IV types at any size, but only once identified | Art. 3 c. 8 | "Il presente decreto si applica, altresì, indipendentemente dalle loro dimensioni, anche ai soggetti delle tipologie di cui all’allegato IV, individuati secondo le procedure di cui al comma 13." | Allegato IV types are in scope at any size once identified under c. 13. | verified |
| Any Annex I to IV entity at any size, once identified on qualitative grounds | Art. 3 c. 9 | "Il presente decreto si applica, altresì, anche ai soggetti dei settori o delle tipologie di cui agli allegati I, II, III e IV, indipendentemente dalle loro dimensioni, individuati secondo le procedure di cui al comma 13, qualora: a) il soggetto sia identificato prima della data di entrata in vigore del presente decreto come operatore di servizi essenziali ai sensi del decreto legislativo 18 maggio 2018, n. 65; b) il soggetto sia l’unico fornitore nazionale di un servizio che è essenziale per il mantenimento di attività sociali o economiche fondamentali; c) una perturbazione del servizio fornito dal soggetto potrebbe avere un impatto significativo sulla sicurezza pubblica, l’incolumità pubblica o la salute pubblica; d) una perturbazione del servizio fornito dal soggetto potrebbe comportare un rischio sistemico significativo, in particolare per i settori nei quali tale perturbazione potrebbe avere un impatto transfrontaliero; e) il soggetto sia critico in ragione della sua particolare importanza a livello nazionale o regionale per quel particolare settore o tipo di servizio o per altri settori indipendenti nel territorio dello Stato; f) il soggetto sia considerato critico ai sensi del presente decreto quale elemento sistemico della catena di approvvigionamento, anche digitale, di uno o più soggetti considerati essenziali o importanti." | Identified entities, at any size, where: (a) it was a NIS1 operator of essential services under D.Lgs. 65/2018; (b) it is the sole national provider of an essential service; (c) disruption could significantly affect public security, safety or health; (d) disruption could cause significant systemic risk; (e) it is critical at national or regional level (the Italian text reads "indipendenti" where Directive Art. 2(2)(e) reads "interdependent"); (f) it is a systemic element of the supply chain, digital included, of essential or important entities. (b) to (e) reproduce Directive Art. 2(2)(b) to (e); (a) and (f) are not in Directive Art. 2(2). | verified |
| Linked enterprises of an essential or important entity, at any size | Art. 3 c. 10 | "Il presente decreto si applica, infine, indipendentemente dalle sue dimensioni, all’impresa collegata ad un soggetto essenziale o importante, se soddisfa almeno uno dei seguenti criteri: a) adotta decisioni o esercita una influenza dominante sulle decisioni relative alle misure di gestione del rischio per la sicurezza informatica di un soggetto importante o essenziale; b) detiene o gestisce sistemi informativi e di rete da cui dipende la fornitura dei servizi del soggetto importante o essenziale; c) effettua operazioni di sicurezza informatica del soggetto importante o essenziale; d) fornisce servizi TIC o di sicurezza, anche gestiti, al soggetto importante o essenziale." | An enterprise linked to an essential or important entity is in scope at any size if it takes or dominates that entity's cyber risk-management decisions, holds or runs the systems its services depend on, performs its security operations, or supplies it ICT or security services, managed ones included. The test is "impresa collegata", not any supplier. Directive Art. 2 has no such paragraph. | verified |
| Who identifies the c. 8 and c. 9 entities | Art. 3 c. 13; Art. 40 c. 4 lett. b) | "I soggetti di cui ai commi 8 e 9 sono individuati dall’Autorità nazionale competente NIS, su proposta delle Autorità di settore, secondo le modalità di cui all’articolo 40, comma 4. L’Autorità nazionale competente NIS notifica a tali soggetti la loro individuazione ai fini della registrazione di cui all’articolo 7, comma 1." / "sono individuati i soggetti ai quali si applica il presente decreto ai sensi dell’articolo 3, commi 8 e 9." | ACN identifies them by determination, on the sector authorities' proposal, and notifies them so that they register. c. 13 names commi 8 and 9 only: no identification step is written for c. 10. | verified |
| Those identifications, and the list of essential and important entities, are not published | Art. 40 c. 5 lett. a); Art. 40 c. 6 lett. b) | "ai sensi degli articoli 3 e 6, è stabilito l’elenco dei soggetti essenziali e dei soggetti importanti di cui all’articolo 7, comma 2;" / "Sono esclusi dall’accesso e non sono soggetti a pubblicazione: … b) le determinazioni di cui al comma 4, lettera b), e al comma 5, lettera a);" | ACN sets the list of essential and important entities by determination; that determination and the c. 8 and c. 9 identifications are excluded from access and publication. | verified |
| **Articulation with DORA:** banking and market infrastructures keep the classification but lose Art. 17 and Chapters IV and V | Art. 3 c. 14 | "Le disposizioni di cui all’articolo 17 e ai Capi IV e V del presente decreto non si applicano ai soggetti identificati come essenziali o importanti dei settori 3 e 4 di cui all’allegato I, ai quali si applica la disciplina di cui al regolamento (UE) 2022/2554." | For essential or important entities of Allegato I sectors 3 (banking) and 4 (financial market infrastructures), Art. 17 (information-sharing arrangements), Chapter IV (risk management and incident notification) and Chapter V (monitoring, supervision, enforcement) do not apply; DORA does. | verified |
| DORA-exempted entities are out | Art. 3 c. 15 | "Il presente decreto non si applica, ai sensi dell’articolo 2, comma 10, della direttiva, ai soggetti esentati dall’ambito di applicazione del regolamento (UE) 2022/2554." | Entities exempted from DORA are outside the decree. | verified |
| **Exit:** four public bodies are outside the public-administration heads; constitutional bodies escape Chapter V | Art. 4 c. 2 | "I soggetti di cui all’articolo 3, commi 6 e 7, non ricomprendono il Parlamento italiano, l’Autorità giudiziaria, la Banca d’Italia e l’Unità di informazione finanziaria per l’Italia di cui all’articolo 6 del decreto legislativo 21 novembre 2007, n. 231. Agli Organi costituzionali e di rilievo costituzionale non si applicano le previsioni di cui al capo V." | Parliament, the judiciary, the Bank of Italy and the Financial Intelligence Unit are not among the c. 6 and c. 7 administrations. Constitutional bodies, which head the Allegato III list, stay in scope but outside Chapter V. | verified |
| **Exit:** security, defence, law enforcement, intelligence, and ACN itself | Art. 4 c. 3 | "Il presente decreto non si applica agli enti, organi e articolazioni della pubblica amministrazione che operano nei settori della pubblica sicurezza, della difesa nazionale, o dell’attività di contrasto, … nonché agli organismi di informazione per la sicurezza di cui alla legge 3 agosto 2007, n. 124, all’Agenzia per la cybersicurezza nazionale" | Public bodies working in public security, national defence or law enforcement, the intelligence agencies and ACN are outside the decree. | verified |
| **Partial exit** by decree for entities working exclusively for those bodies; trust service providers can never be excluded | Art. 4 c. 4 and c. 6 | "sono individuati i soggetti che svolgono attività o forniscono servizi in via esclusiva per gli enti, organi e articolazioni della pubblica amministrazione di cui al comma 3, nonché in materia di protezione civile. A tali soggetti, nell’espletamento di tali attività o servizi, non si applicano gli obblighi di cui al capo IV e le previsioni di cui al capo V." / "Non possono altresì essere esclusi i soggetti che agiscono in qualità di prestatore di servizi fiduciari." | Entities a DPCM identifies as working exclusively for those bodies, or in civil protection, are relieved of Chapters IV and V for those activities only. A trust service provider cannot be excluded this way. | verified |
| **Essential entities: five heads** | Art. 6 c. 1 | "Ai fini del presente decreto, sono considerati soggetti essenziali: a) i soggetti di cui all’allegato I che superano i massimali per le medie imprese di cui all’articolo 2, paragrafo 1, dell’allegato della raccomandazione 2003/361/CE; b) indipendentemente dalle loro dimensioni, i soggetti identificati come soggetti critici ai sensi del decreto legislativo che recepisce la direttiva (UE) 2022/2557; c) i fornitori di reti pubbliche di comunicazione elettronica e i fornitori di servizi di comunicazione elettronica accessibili al pubblico di cui all’articolo 3, comma 5, lettera b), che si considerano medie imprese ai sensi dell’articolo 2 dell’allegato alla raccomandazione 2003/361/CE; d) indipendentemente dalle loro dimensioni, i prestatori di servizi fiduciari qualificati e i gestori di registri dei nomi di dominio di primo livello, nonché i prestatori di servizi di sistema dei nomi di dominio di cui all’articolo 3, comma 5, lettere c) e d); e) indipendentemente dalle loro dimensioni, le pubbliche amministrazioni centrali di cui all’allegato III, comma 1, lettera a)." | (a) Allegato I types above the medium-enterprise ceilings; (b) CER critical entities, any size; (c) public e-communications providers that are medium-sized; (d) **qualified** trust service providers, TLD registries and DNS service providers, any size; (e) the central administrations of Allegato III c. 1 lett. a), any size. **Cloud, data-centre, CDN and IXP providers are essential only through (a), that is when large.** | verified |
| ACN can make any c. 6, 8, 9 or 10 entity essential, at any size | Art. 6 c. 2 | "Fermo restando quanto previsto dal comma 1, l’Autorità nazionale competente NIS individua, secondo le modalità di cui all’articolo 40, comma 5, i soggetti di cui all’articolo 3, commi 6, 8, 9 e 10, che, indipendentemente dalle loro dimensioni, sono considerati essenziali." | Designation as essential is open for public administrations (c. 6), Allegato IV entities (c. 8), qualitatively identified entities (c. 9) and linked enterprises (c. 10). Art. 6 c. 2 names commi 6, 8, 9 and 10 of Art. 3; it does not name c. 5. | verified |
| Important entities: the residual class | Art. 6 c. 3 | "Ai fini del presente decreto, sono considerati soggetti importanti i soggetti di cui all’articolo 3 che non sono considerati essenziali ai sensi dei commi 1 e 2 del presente articolo." | Every entity in scope under Art. 3 that is not essential under c. 1 or c. 2 is important. Directive Art. 3(2) limits the residual class to Annex I and II types and Art. 3(3) lists registrars apart; the Italian residual class takes every Art. 3 entity, registrars included. | verified |
| Allegato I heading, as printed | Allegato I | "Settori ad altra criticità" | Printed "altra" (other) in the GU issue and on normattiva; Art. 3 c. 1 calls these sectors "altamente critici". Quote it as printed. | verified |
| **Allegato I, sector 8: nine types** | Allegato I, row "8. Infrastrutture digitali" | "Fornitori di punti di interscambio internet" … "Fornitori di servizi di sistema dei nomi di dominio (domain name system – DNS), esclusi gli operatori dei server dei nomi radice" … "Gestori di registri dei nomi di dominio di primo livello (top level domain – TLD)" … "Fornitori di servizi di cloud computing" … "Fornitori di servizi di data center" … "Fornitori di reti di distribuzione dei contenuti (content delivery network)" … "Prestatori di servizi fiduciari" … "Fornitori di reti pubbliche di comunicazione elettronica" … "Fornitori di servizi di comunicazione elettronica accessibili al pubblico" | IXPs; DNS providers except root name server operators; TLD registries; cloud; data centres; CDNs; trust service providers; public e-communications networks; publicly available e-communications services. | verified |
| Allegato I, sector 9: managed services, separate from sector 8 | Allegato I, row "9. Gestione dei servizi TIC (business-to-business)" | "Fornitori di servizi gestiti" … "Fornitori di servizi di sicurezza gestiti" | MSPs and MSSPs. | verified |
| Allegato II, sector 6 adds registrars to the directive's three digital providers | Allegato II, row "6. Fornitori di servizi digitali"; Directive (EU) 2022/2555, Annex II, row 6 (EUR-Lex, EN) | "Fornitori di mercati online" … "Fornitori di motori di ricerca online" … "Fornitori di piattaforme di social network" … "Fornitori di servizi di registrazione dei nomi di dominio" / Directive: "Providers of online marketplaces" … "Providers of online search engines" … "Providers of social networking services platforms" | Italy makes domain name registration service providers an Allegato II type; the directive's Annex II does not list them (it reaches them through Art. 2(4)). | verified |
| Allegato III: the public-administration categories | Allegato III c. 1 | "a) amministrazioni centrali: 1) gli Organi costituzionali e di rilievo costituzionale; 2) la Presidenza del Consiglio dei ministri e i Ministeri; 3) le Agenzie fiscali; 4) le Autorità amministrative indipendenti; b) amministrazioni regionali: 1. le Regioni e le Province autonome. c) amministrazioni locali 1. le Città metropolitane; 2. i Comuni con popolazione superiore a 100.000 abitanti; 3. i Comuni capoluoghi di regione; 4. le Aziende sanitarie locali. d) altri soggetti pubblici: 1. gli Enti di regolazione dell’attività economica; 2. gli Enti produttori di servizi economici; 3. gli Enti a struttura associativa; 4. gli Enti produttori di servizi assistenziali, ricreativi e culturali; 5. gli Enti e le Istituzioni di ricerca; 6. gli Istituti zooprofilattici sperimentali." | Central (essential at any size, Art. 6 c. 1 lett. e)): constitutional bodies, Presidency of the Council and ministries, tax agencies, independent authorities. Regional: regions and autonomous provinces. Local: metropolitan cities, municipalities above 100,000 inhabitants, regional capitals, local health authorities. Other public bodies: the six classes listed. **A municipality of 100,000 inhabitants or fewer that is not a regional capital is not listed.** | verified |
| Allegato IV: four further types | Allegato IV | "1. Soggetti che forniscono servizi di trasporto pubblico locale. 2. Istituti di istruzione che svolgono attività di ricerca. 3. Soggetti che svolgono attività di interesse culturale. 4. Società in house, società partecipate e società a controllo pubblico, come definite nel decreto legislativo 19 agosto 2016, n. 175." | Local public transport; education institutions that carry out research; entities of cultural interest; in-house, participated and publicly controlled companies. In scope only once identified (c. 8, c. 13). | verified |
| For comparison: what the directive makes size-independent, and essential at any size | Directive (EU) 2022/2555, Art. 2(2)(a), Art. 2(3), Art. 2(4), Art. 3(1)(b) (EUR-Lex, EN) | "(i) providers of public electronic communications networks or of publicly available electronic communications services; (ii) trust service providers; (iii) top-level domain name registries and domain name system service providers;" / "Regardless of their size, this Directive applies to entities identified as critical entities under Directive (EU) 2022/2557." / "Regardless of their size, this Directive applies to entities providing domain name registration services." / "qualified trust service providers and top-level domain name registries as well as DNS service providers, regardless of their size;" | Art. 3 c. 5 of the decree gathers Directive Art. 2(2)(a), 2(3) and 2(4) in a single list; Art. 6 c. 1 lett. b) and d) follow Directive Art. 3(1)(f) and (b). | verified |

### What a classifier must answer (reading of the provisions above)

This table is a reading of the quoted provisions, not an additional source. It
assumes an autonomous enterprise under Italian jurisdiction (Art. 5) that ACN
has not identified under c. 8 or c. 9, that is not a CER critical entity, and
that c. 10 does not catch, unless the row says otherwise. *Small* means not
above the small-enterprise ceilings (Art. 3 c. 2), *large* means above the
medium-enterprise ceilings (Art. 6 c. 1 lett. a)), *medium* is in between.

| Entity | Small or micro | Medium | Large | Basis |
|---|---|---|---|---|
| Cloud computing, data-centre, CDN or IXP provider | Out | Important | Essential | Art. 3 c. 2; Art. 6 c. 1 lett. a) and c. 3 |
| MSP or MSSP (Allegato I sector 9) | Out | Important | Essential | Art. 3 c. 2; Art. 6 c. 1 lett. a) and c. 3 |
| DNS service provider (not a root name server operator) or TLD registry | Essential | Essential | Essential | Art. 3 c. 5 lett. d); Art. 6 c. 1 lett. d) |
| Qualified trust service provider | Essential | Essential | Essential | Art. 3 c. 5 lett. c); Art. 6 c. 1 lett. d) |
| Non-qualified trust service provider | Important | Important | Essential | Art. 3 c. 5 lett. c); Art. 6 c. 1 lett. a) and c. 3 |
| Public e-communications network or publicly available service | Important | **Essential** | Essential | Art. 3 c. 5 lett. b); Art. 6 c. 1 lett. a) and c), c. 3 |
| Domain name registration service provider | Important | Important | Important | Art. 3 c. 5 lett. e); Art. 6 c. 3 (an Allegato II type, so Art. 6 c. 1 lett. a) cannot reach it) |
| CER critical entity, any sector | Essential | Essential | Essential | Art. 3 c. 5 lett. a); Art. 6 c. 1 lett. b) |
| Credit institution or market infrastructure (Allegato I sectors 3 and 4) | Out | Important | Essential | Art. 3 c. 2; Art. 6; then Art. 3 c. 14 switches off Art. 17 and Chapters IV and V in favour of DORA |
| Central administration of Allegato III c. 1 lett. a), other than the Art. 4 c. 2 bodies | Essential at any size | | | Art. 3 c. 6; Art. 6 c. 1 lett. e); Art. 4 c. 2 and c. 3 |
| Other Allegato III administration | Important at any size, unless ACN designates it essential | | | Art. 3 c. 6; Art. 6 c. 2 and c. 3 |
| Allegato IV type | Out until identified; then important at any size, unless designated essential | | | Art. 3 c. 8 and c. 13; Art. 6 c. 2 and c. 3 |
| Any Annex I to IV entity identified under c. 9 | Important at any size, unless designated essential | | | Art. 3 c. 9 and c. 13; Art. 6 c. 2 and c. 3 |
| Enterprise linked to an essential or important entity meeting a c. 10 criterion | Important at any size, unless designated essential | | | Art. 3 c. 10; Art. 6 c. 2 and c. 3 |

ACN designations under Art. 6 c. 2 and identifications under Art. 3 c. 13 are
not published (Art. 40 c. 6), so a questionnaire can ask whether the visitor has
been notified, never look it up.

### What this means for the product

- The essential-at-any-size branch holds exactly three types, and their Italian
  citation is **Art. 3 c. 5 lett. c) and d) with Art. 6 c. 1 lett. d) D.Lgs.
  138/2024**, the trust service provider being *qualificato*.
- Size-independent heads the diagnostic did not ask about on 2026-10-23: public
  e-communications providers (c. 5 lett. b), essential from medium size),
  non-qualified trust service providers (c. 5 lett. c), important unless
  large), registrars (c. 5 lett. e), important), CER critical entities (c. 5
  lett. a)), public administrations (c. 6), identified entities (c. 8, c. 9)
  and linked enterprises (c. 10).
- Exits a classifier must offer: Art. 4 c. 2 (Parliament, judiciary, Banca
  d'Italia, UIF), Art. 4 c. 3 (security, defence, law enforcement, intelligence,
  ACN) and Art. 3 c. 15 (DORA-exempted entities). A municipality that
  Allegato III does not list is outside Art. 3 c. 6, though it can still be
  caught as an Allegato I or II type, or by a c. 7 decree. Art. 3 c. 14 is not
  an exit but changes the regime for banks and market infrastructures.

### Not read, therefore not asserted

- Any DPCM adopted under Art. 3 c. 7 or Art. 40 c. 2 (further public-administration
  categories, further identification criteria), or under Art. 40 c. 1 lett. a)
  (the safeguard-clause criteria of Art. 3 c. 4). Whether such decrees exist and
  change the lists above was not checked.
- The ACN determinations under Art. 40 c. 4 lett. b) and c. 5 lett. a). By
  Art. 40 c. 6 they are not public, so no individual identification or
  designation can be verified from a public source.
