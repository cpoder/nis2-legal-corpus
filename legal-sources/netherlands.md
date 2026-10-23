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

## MISE À JOUR 2026-07-27 — la loi est adoptée, publiée, et entre en vigueur le 15 août 2026

<!-- meta: theme=statute,incident,registration; type=reference,status-error; date=2026-07-27; surfaces=data,ui,marketing; guard=apps/web/test/transposition-status-truthfulness.test.ts -->

La section ci-dessus datait du 2026-06-07 et laissait trois points « à épingler ».
Deux sont maintenant réglés à la source ; le texte a beaucoup bougé depuis.

### Chronologie officielle

| Étape | Date | Source |
|---|---|---|
| Adoption Tweede Kamer | 2026-04-15 | Rijksoverheid |
| **Adoption Eerste Kamer** | **2026-07-07** | eerstekamer.nl, « aangenomen na stemming bij zitten en opstaan » (19 groupes pour, FVD contre) |
| Signature | 2026-07-08 | « Gegeven te 's-Gravenhage, 8 juli 2026 — Willem-Alexander / De Minister van Justitie en Veiligheid, D.M. van Weel » |
| **Publication au Staatsblad** | **2026-07-10** | **Stb. 2026, 187**, « Uitgegeven de tiende juli 2026 » |

⚠️ La page dossier de l'Eerste Kamer affichait encore une rubrique Staatsblad
**vide** au 2026-07-27 : elle n'est pas à jour. La publication est établie par le
Staatsblad lui-même, pas par le dossier parlementaire.

### Les trois instruments, à ne pas confondre

| Numéro | Type | Contenu |
|---|---|---|
| **Stb. 2026, 187** | Wet | **Cyberbeveiligingswet (Cbw)** — transpose la directive (UE) 2022/2555 |
| Stb. 2026, 188 | Wet | Wet weerbaarheid kritieke entiteiten — transpose la directive **2022/2557 (CER)**, texte distinct |
| **Stb. 2026, 189** | AMvB | **Cyberbeveiligingsbesluit (Cbb)** — mesures d'exécution **et fixation de la date d'entrée en vigueur** |

### Faits vérifiés (verbatim)

| Fait | Où | Verbatim (néerlandais) | Statut |
|---|---|---|---|
| ⚠️ **La loi elle-même ne fixe AUCUNE date** | art. 107 Cbw | "Deze wet treedt in werking op **een bij koninklijk besluit te bepalen tijdstip**, dat voor de verschillende artikelen of onderdelen daarvan verschillend kan worden vastgesteld." | ✅ |
| ⚠️ **Entrée en vigueur : 15 août 2026**, fixée par l'AMvB | art. 35 Cbb (Stb. 2026, 189) | "De Cyberbeveiligingswet en dit besluit **treden in werking met ingang van 15 augustus 2026**." | ✅ |
| Dérogation assumée aux « vaste verandermomenten » | exposé des motifs Cbb | "Hierbij wordt **afgeweken van de vaste verandermomenten en de minimuminvoeringstermijn**, omdat de Cbw en het Cbb strekken [tot implementatie]" | ✅ |
| Titre abrégé | art. 108 Cbw | "Deze wet wordt aangehaald als: **Cyberbeveiligingswet**." | ✅ |
| Registre national des entités | art. 43 Cbw | "Artikel 43 (**nationaal register van entiteiten**)" ; "Het nationale register, genoemd in artikel 43, komt **uiterlijk één maand na de inwerkingtreding van artikel 43** tot stand." | ✅ |
| **Ancre = prise de connaissance**, pas la détection | art. 25 s. Cbw | "binnen **24 uur nadat zij kennis heeft gekregen** van het significante incident" ; "binnen **72 uur nadat zij kennis heeft gekregen**" | ✅ |
| ⚠️ **Double destinataire** : le CSIRT ET l'autorité compétente | art. 25 s. Cbw | "een melding in bij **haar CSIRT en haar bevoegde autoriteit**" | ✅ |
| Dérogation prestataires de services de confiance : 24 h | art. 25 s. Cbw | "entiteit die een **vertrouwensdienst** aanbiedt onverwijld of, indien dat niet mogelijk is, **binnen 24 uur** … een melding" | ✅ |

### Conséquence produit (corrigée le 2026-07-27)

`countries-seo.ts` portait `transpositionStatus: "in_progress"` avec
`transpositionDate: "2026-Q3"`. Les deux étaient faux au 27 juillet :

- **`in_progress`** alors que la loi a passé les deux chambres, été signée par le
  Roi et publiée au Staatsblad. L'état correct est `adopted` (adopté, en vigueur
  à une date future), le statut introduit pour l'Autriche.
- **« 2026-Q3 »** alors que la date exacte est fixée au **15 août 2026**. Un
  trimestre vague masquait une échéance à **19 jours** au moment de la correction.

Corrigé en `adopted` / `2026-08-15`. Les Pays-Bas sont le deuxième cas du statut
`adopted`, ce qui confirme qu'il ne s'agissait pas d'une exception autrichienne.

### Reste à épingler

- Les numéros d'articles exacts de la zorgplicht (équivalent art. 21) et du
  régime de notification, lus dans le corps du Cbw plutôt que déduits des
  intitulés de section.
- La liste complète des secteurs supervisés par la RDI vs les superviseurs
  sectoriels, désormais lisible dans le **Cyberbeveiligingsbesluit**.
- La conclusion « NL = substrat NIS2, pas de framework natif » de la section du
  2026-06-07 reste valable et doit être **revérifiée contre le Cbb**, qui est le
  texte susceptible d'introduire une baseline technique s'il devait en exister une.

---

## CORRECTION 2026-07-29 — « substrat NIS2, pas de cadre national » était trompeur

<!-- meta: theme=statute,framework; type=reference,law-misread; date=2026-07-29; surfaces=data,docs,marketing; guard=none -->

La section du 2026-06-07 conclut en gras : **« NL is a NIS2-SUBSTRATE country, NOT
native-framework »**, avec pour implication produit qu'il n'y aurait **« no real
native framework to author a native assessment tree from »**.

Cette conclusion a été tirée **avant** la publication du Cyberbeveiligingsbesluit
(Cbb, Stb. 2026, 189, publié le 10/07/2026). La section « Reste à épingler » du
2026-07-27 demandait explicitement de la revérifier contre ce texte. Fait le
2026-07-29, en lisant le PDF officiel du Staatsblad. **Elle est à corriger.**

### Ce que contient réellement le Cbb

| Fait | Où | Verbatim | Statut |
|---|---|---|---|
| Les mesures SONT élaborées en droit national | Cbb, **Hoofdstuk 4 « Zorgplicht », art. 5 à 19** | un article par thème : beleid beveiliging · risicomanagement · incidentenbehandeling · bedrijfscontinuïteit · **beveiliging van de toeleveringsketen** · verwerven/ontwikkelen/onderhouden · cyberhygiëne en opleiding · cryptografie · personeel · toegangsbeleid · beheer van assets · attenderingen en dreigingsinformatie · evaluatie · nadere regels | ✅ |
| Obligations concrètes et auditables, pas des principes ouverts | art. 10 Cbb | « De entiteit **legt dat beleid schriftelijk vast en past dat beleid aantoonbaar toe** [...] **toetst** of haar rechtstreekse leveranciers [...] voldoen aan de beveiligingseisen [...] **controleert dit periodiek**. » | ✅ |
| Statut juridique de ces mesures : un plancher | Nota van toelichting Cbb | « deze maatregelen **het minimumniveau vormen** en passend en evenredig toegepast moeten worden, afhankelijk van de risicoanalyse van de betreffende entiteit » ; « de open norm uit de Cbw blijft leidend » | ✅ |
| Formation des dirigeants imposée, avec certificat | Cbb, **Hoofdstuk 5 « Training », art. 20-22** | doel van de training · eisen aan de training · **eisen aan het certificaat** | ✅ |
| AUCUN renvoi normatif à une norme technique | corps du Cbb | **zéro occurrence** de « ISO/IEC 27001 », « ISO/IEC 27002 », « NEN » dans le texte | ✅ |
| La BIO reste réservée à l'administration | Nota van toelichting | « In de ministeriële regeling onder de Cbw **voor de sector overheid** zullen de specifieke bepalingen uit de BIO worden opgenomen » | ✅ |
| Rapport aux normes ISO : comparaison, pas incorporation | Nota van toelichting | « De verplichtingen ten aanzien van de zorgplicht in het Cbb **gaan in grote lijnen niet verder dan** reeds bestaande verplichtingen van genoemde ISO-standaarden en de BIO » | ✅ |

### Formulation correcte

Ni « cadre national à la CyFun », ni « rien de national ». Les deux extrêmes sont faux :

- **Il n'y a pas** de catalogue de contrôles, de niveaux d'assurance, de seuils ni de
  schéma de certification. Rien d'équivalent à CyFun (BE), ZSIS (HR), ReCyF (FR) ou
  aux misure ACN (IT). Sur ce point la section du 07/06 avait raison.
- **Il y a** une élaboration nationale des mesures en droit : quinze articles au
  chapitre 4, qualifiés de minimum par l'exposé des motifs, plus un chapitre sur la
  formation des dirigeants. Dire à une entité néerlandaise qu'elle n'a qu'une
  obligation générale de moyens est faux.

### Implication produit, révisée

L'implication « NL must stay on the NIS2 substrate (like PT) [...] It is NOT a native
tree » sous-estimait le travail. Il existe une structure nationale sur laquelle aligner
l'évaluation : les articles 5 à 19 du Cbb. Moins lourd qu'un arbre à seuils, mais ce
n'est pas une simple couche de citations sur le substrat NIS2.

### Portée de la lecture

Lus : la structure officielle complète (chapitres et intitulés d'articles) et le texte
intégral du chapitre 4, extraits du PDF Staatsblad `stb-2026-189.pdf`. **Non lus article
par article** : les chapitres 6 à 10 (meldingen, registre, autorités, données
personnelles, dispositions finales). Les faits de la section du 27/07 sur les délais
d'incident restent ceux du Cbw, pas du Cbb.

---

## Lecture des chapitres 6 à 10 du Cbb — 2026-07-29

<!-- meta: theme=incident,registration,governance; type=reference,needs-check; date=2026-07-29; surfaces=data,ui,marketing; guard=none -->

Complète la lecture partielle du même jour, qui s'arrêtait au chapitre 5. Source :
PDF officiel `stb-2026-189` du Staatsblad.

### Faits vérifiés

| Fait | Où | Verbatim | Statut |
|---|---|---|---|
| ⚠️ **Les critères de l'incident significatif NE SONT PAS dans le décret** | art. 23 Cbb | « kunnen de criteria worden vastgesteld **bij regeling van Onze Minister die het aangaat** [...] waarbij onderscheid kan worden gemaakt tussen sectoren, subsectoren, soorten entiteiten en entiteiten » ; possibilité de les fixer **par décision individuelle** pour une entité donnée | ✅ |
| Exception : infrastructure numérique | art. 23 lid 2 Cbb | renvoi aux actes d'exécution pris sur l'art. 23(11) de la directive → règlement d'exécution (UE) 2024/2690 | ✅ |
| Alerte précoce : 4 champs NL en plus du socle légal | art. 24 Cbb | a. « het **vermoedelijke tijdstip van de aanvang** » · b. nature + conséquences perceptibles (si possible) · c. « een **prognose van de hersteltijd** » (si possible) · d. mesures prises ou prévues (si possible) | ✅ |
| Dépôt via un guichet ministériel unique | art. 25 Cbb | « wordt gedaan bij een hiervoor door Onze Minister ingericht **meldpunt** » | ✅ |
| Registre : auto-classification + numéro KvK | art. 27 Cbb | a. « de vermelding of zij de registratie doet als **essentiële entiteit, belangrijke entiteit of entiteit die domeinnaamregistratiediensten verleent** » · b. « het nummer, bedoeld in **artikel 9, onderdeel a, van de Handelsregisterwet 2007** », ou équivalent étranger | ✅ |
| ⚠️ **Les autorités compétentes ne sont PAS désignées par le décret** | art. 28 Cbb | « **kunnen** de autoriteiten, bedoeld in artikel 51, tweede lid, onderdeel i, van de wet, **worden aangewezen** » par arrêté ministériel | ✅ |
| Conservation des données personnelles : 60 mois | art. 29 Cbb | « doch uiterlijk binnen **60 maanden** na de eerste verwerking verwijderd » ; registre : 60 mois après la dernière confirmation d'exactitude | ✅ |
| Entités financières : double déclaration DORA + CSIRT | art. 30 Cbb | la notification de l'art. 19 du règlement DORA se fait « **tevens** bij het [...] aangewezen CSIRT voor de sectoren bankwezen en infrastructuur voor de financiële markt » | ✅ |
| Le Drinkwaterbesluit est modifié | art. 33 Cbb | art. 15 devient « Toezicht door de eigenaar en **risicobeoordeling en risicobeheer** van het watervoorzieningssysteem » | ✅ |
| Abrogation du décret NIS1 | art. 34 Cbb | « Het **Besluit beveiliging netwerk- en informatiesystemen wordt ingetrokken**. » | ✅ |

### Les deux questions ouvertes le RESTENT après lecture du décret

La section du 2026-06-07 listait « confirmer la liste complète des secteurs supervisés par
la RDI » comme à épingler « désormais lisible dans le Cyberbeveiligingsbesluit ». **C'est
faux : le Cbb ne les désigne pas**, il habilite un arrêté ministériel à le faire (art. 28).

De même, le seuil de l'incident significatif — la donnée qui déclenche l'horloge des 24 h et
qui alimenterait directement le produit — **n'existe pas encore en droit néerlandais** pour
la plupart des secteurs. Au 15 août 2026, l'obligation de notifier entre en vigueur sans que
le seuil soit publié, sauf pour l'infrastructure numérique.

**Conséquence produit** : ne pas encoder de seuil d'incident NL ni de routage d'autorité NL
tant que les arrêtés ne sont pas parus. Les deux entrées restent `needs-check`, et c'est la
raison pour laquelle cette section porte ce type malgré des faits vérifiés à côté.

---

## CORRECTION 2026-07-30 — les autorités compétentes SONT désignées, par l'art. 15 Cbw

<!-- meta: theme=statute,governance; type=reference,law-misread; date=2026-07-30; surfaces=data,ui,marketing; guard=none -->

La section du 2026-07-29 conclut que « les autorités compétentes ne sont PAS
désignées » au motif que l'art. 28 Cbb habilite un arrêté ministériel à le faire.
**C'est faux, et l'affirmation a été publiée le même jour sur huit surfaces**, dont
des pages de production. Cause : le PDF du Staatsblad avait perdu les tableaux à
l'extraction, donc le tableau de l'art. 15 était invisible. Le **XML officiel**
(`stb-2026-187.xml`, 317 Ko contre 226 Ko pour le PDF) les contient.

L'art. 28 Cbb concerne les autorités de l'art. **51, tweede lid, onderdeel i**,
qui est un sous-ensemble étroit. Il ne dit rien du régime général.

### Fait vérifié — art. 15 Cbw, verbatim

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

- **art. 15 lid 2** : le ministre de l'Économie est l'autorité compétente pour les
  entités qui fournissent des services d'enregistrement de noms de domaine.
- **art. 15 lid 3** : le ministre de l'Enseignement, de la Culture et des Sciences
  l'est pour les établissements d'enseignement supérieur désignés au titre de
  l'art. 11.

### Conséquence : « overheid » est un secteur, et public-admin est débloqué

Le tableau nomme un secteur **overheid** avec les sous-secteurs *centrale
overheden* et *decentrale overheden*, et il scinde ces derniers : les
**waterschappen** relèvent d'Infrastructuur en Waterstaat, tout le reste de BZK.
La note d'absence de `public-admin.ts` invoquait l'art. 28 Cbb et l'absence
d'annexes ; les deux motifs tombent. Restent à trouver les **rôles signataires**
néerlandais, qui ne figurent nulle part dans la loi.

### La RDI n'apparaît PAS dans ce tableau

La section du 2026-06-07 disait, d'après une FAQ de la RDI, que celle-ci
« supervise un ensemble de secteurs ». Le tableau de l'art. 15 ne la nomme pas :
il ne désigne que des ministres. La RDI agit vraisemblablement **sous** un
ministre (Economische Zaken pour l'infrastructure numérique), mais ce lien n'est
pas lu. **Ne pas écrire « votre superviseur est la RDI » sans l'avoir vérifié.**

### Leçon de méthode, à retenir

Le PDF du Staatsblad **perd les tableaux**. Deux affirmations fausses en sont
sorties le 29/07 : « aucune liste sectorielle lisible » et « aucune autorité
désignée ». Pour tout texte néerlandais, **lire le XML** (`.xml` sur
zoek.officielebekendmakingen.nl), pas le PDF.

---

## 2026-07-30 — qui signe pour une entité publique néerlandaise (dernier bloqueur `public-admin`)

<!-- meta: theme=governance,scoping,registration; type=reference,wrong-citation; date=2026-07-30; surfaces=data,ui,doc-gen; guard=packages/regulatory-data/test/country-configs-public-admin.test.ts -->

`public-admin.ts` gardait NL absent pour **un** motif restant : `signatoryRoles`.
Le commentaire du module disait, à juste titre, qu'un rôle signataire deviné
serait pire que rien — « a wrong signatory role is a document a public body
files with the wrong person's name on it ».

Ce n'était pas une inconnue : les trois lois organiques néerlandaises nomment
explicitement, chacune dans un article dédié, la personne qui représente la
collectivité **in en buiten rechte**. Il fallait les lire.

### Source

Texte consolidé officiel, `wetten.overheid.nl` (Basis Wetten Bestand,
publication officielle du gouvernement néerlandais). Récupéré le **2026-07-30**.

Note de méthode : `WebFetch` **tronque** ces pages (elles pèsent 1,9 à 2,8 Mo) et
renvoie « artikel niet gevonden » alors que l'article est bien là. La forme
`curl -sSL "https://wetten.overheid.nl/jci1.3:c:<BWBR>&artikel=<n>"` puis
extraction locale fonctionne. Le 404 sur `/0/xml` ne veut pas dire absent :
c'est la mauvaise forme d'URL. Même famille d'erreur que le PDF/XML du
Staatsblad ci-dessus.

### Faits vérifiés (verbatim)

| fait | article | verbatim | statut |
|---|---|---|---|
| Le bourgmestre représente la commune | Gemeentewet art. 171 lid 1 (BWBR0005416) | « De burgemeester vertegenwoordigt de gemeente in en buiten rechte. » | verified |
| …et peut déléguer cette représentation | Gemeentewet art. 171 lid 2 | « De burgemeester kan de in het eerste lid bedoelde vertegenwoordiging opdragen aan een door hem aan te wijzen persoon. » | verified |
| Le commissaire du Roi représente la province | Provinciewet art. 176 lid 1 (BWBR0005645) | « De commissaris vertegenwoordigt de provincie in en buiten rechte. » | verified |
| …et peut déléguer | Provinciewet art. 176 lid 2 | « De commissaris kan de in het eerste lid bedoelde vertegenwoordiging opdragen aan een door hem aan te wijzen persoon. » | verified |
| Le président représente le waterschap ; la délégation exige l'accord du bureau exécutif | Waterschapswet art. 95 (BWBR0005108) | « De voorzitter vertegenwoordigt het waterschap in en buiten rechte. Indien de voorzitter aan een ander machtiging verleent tot vertegenwoordiging, behoeft deze machtiging de instemming van het dagelijks bestuur. » | verified |
| Le président **signe** toutes les pièces émanant des deux organes | Waterschapswet art. 94 lid 4 | « Hij ondertekent alle stukken welke van het algemeen en het dagelijks bestuur uitgaan. » | verified |
| Le titre légal est `voorzitter`, **pas** `dijkgraaf` | Waterschapswet, texte intégral | 0 occurrence de « dijkgraaf » / « watergraaf » dans BWBR0005108 | verified (négatif) |

L'art. 94 lid 4 est le plus utile des sept : c'est une clause de **signature**,
pas seulement de représentation. C'est exactement le champ que ce module remplit.

### Chambre des comptes — obligatoire aux trois étages

| fait | article | verbatim | statut |
|---|---|---|---|
| Chambre des comptes communale obligatoire | Gemeentewet art. 81a | « De raad stelt een rekenkamer in. » | verified |
| Chambre des comptes provinciale obligatoire | Provinciewet art. 79a | « Provinciale staten stellen een rekenkamer in. » | verified |
| Chambre des comptes du waterschap obligatoire | Waterschapswet art. 51aa | « Het algemeen bestuur stelt een rekenkamer in. » | verified |
| Contrôle financier préventif de la province sur la commune | Gemeentewet art. 203 lid 1 | le budget « behoeven de goedkeuring van gedeputeerde staten » lorsqu'il n'est pas structurellement en équilibre | verified |
| La Cour des comptes nationale ne contrôle **que** l'État | Grondwet art. 76 (BWBR0001840) | « De Algemene Rekenkamer is belast met het onderzoek van de ontvangsten en uitgaven van het Rijk. » | verified |

⚠️ Conséquence à ne pas rater : l'**Algemene Rekenkamer n'audite pas** les
communes, provinces et waterschappen. Son mandat constitutionnel s'arrête au
Rijk. Écrire « votre auditeur suprême est l'Algemene Rekenkamer » à une commune
néerlandaise serait faux. Pour les collectivités, l'organe est la `rekenkamer`
locale, plus le toezicht interbestuurlijk de la province (art. 203).

Note de dérive : l'article provincial était l'art. 79p dans nos notes
implicites — il est **[Vervallen per 01-01-2023]**. Le vivant est le **79a**.

### Identifiant — le KvK couvre aussi les ministères

| fait | article | verbatim | statut |
|---|---|---|---|
| Les personnes morales de droit public sont inscrites au handelsregister ; à la place de l'État, ce sont les **ministères** et leurs services désignés qui sont inscrits | Handelsregisterwet 2007 art. 6 lid 1 onder c (BWBR0021777) | « een publiekrechtelijke rechtspersoon, met dien verstande dat in plaats van de Staat de ministeries, bedoeld in artikel 2.1, eerste lid, van de Comptabiliteitswet 2016 en de dienstonderdelen van een ministerie die overeenkomstig artikel 2.20 van de Comptabiliteitswet 2016 zijn aangewezen worden ingeschreven. » | verified |

Coïncidence utile et non évidente : l'unité d'inscription au registre
(ministère + `dienstonderdeel` désigné) est **exactement** l'unité de champ
retenue par l'art. 8 lid 1 onder g Cbw (« de ministeries, met inbegrip van de
daartoe behorende dienstonderdelen »). Le KvK-nummer identifie donc sans
ambiguïté une entité publique néerlandaise dans le champ, à tous les étages.
C'est cohérent avec `org-identifiers.ts` (NL → KvK, puis BTW).

### L'ORGANE DE DIRECTION est nommé par la Cbw elle-même — art. 24 lid 12

Cette section a d'abord conclu que l'étage central (ministères, `dienstonderdelen`,
ZBO) restait invérifiable, faute d'équivalent de l'art. 171 Gemeentewet pour
l'État. **Faux, et pour une raison qui aurait dû sauter aux yeux** : ce n'est pas
dans les lois organiques qu'il faut chercher, c'est dans la Cbw. L'**art. 24
(governance)** énumère, étage par étage, ce qui compte comme « het bestuur ».

C'est le même piège que le PDF/XML : chercher la réponse dans la mauvaise source.

Verbatim, art. 24 lid 12 Cbw (Stb. 2026, 187) :

> 12. Indien de essentiële entiteit een overheidsinstantie is, wordt voor de
> toepassing van dit artikel als het bestuur aangemerkt: a. bij ministeries: de
> minister; b. bij zelfstandige bestuursorganen van de centrale overheid: het
> zelfstandige bestuursorgaan; c. bij provincies: gedeputeerde staten; d. bij
> gemeenten: het college van burgemeester en wethouders; e. bij waterschappen:
> het dagelijks bestuur; f. bij gemeenschappelijke regelingen: het dagelijks
> bestuur van het openbaar lichaam, het bestuur van de bedrijfsvoerings-
> organisatie onderscheidenlijk het gemeenschappelijk orgaan.

⚠️ **Numéro d'article** : c'est l'art. **24**, pas l'art. 21. Le lid 13 dit
« indien artikel 21 niet van toepassing is », ce qui exclut d'être dans l'art. 21.
Vérifié en remontant au titre : `Artikel 24 (governance)`. L'art. 21 est la
`zorgplicht` (les mesures), l'art. 24 leur approbation + la compétence des
administrateurs. Les pages `/nl-nl` publiées citent déjà bien l'art. 24.

### Les deux rôles sont DISTINCTS — ne pas les confondre dans le produit

| | qui | source | sert à |
|---|---|---|---|
| **organe de direction** (collégial) | college van B&W / gedeputeerde staten / dagelijks bestuur / de minister / le ZBO | art. 24 lid 12 Cbw | approuver les mesures (art. 24 lid 1), porter la compétence + le certificat (lid 2-4) |
| **représentant légal** (personne) | burgemeester / commissaris / voorzitter | Gemeentewet 171, Provinciewet 176, Waterschapswet 95 | **signer** un dépôt, une notification, une correspondance d'autorité |

Le bloc d'approbation d'un rapport de direction relève de l'art. 24 lid 12.
La signature au bas d'un dépôt relève de la loi organique. Mettre le collège
dans une case « signataire » serait aussi faux que mettre le bourgmestre dans
une case « organe de direction ».

### Classement : les collectivités sont ESSENTIELLES de plein droit

`Artikel 8 (essentiële entiteit van rechtswege)` — « 1. De volgende entiteiten
zijn essentiële entiteiten: (…) g. de ministeries, met inbegrip van de daartoe
behorende dienstonderdelen (…) en zelfstandige bestuursorganen van de centrale
overheid (…) ; h. provincies, gemeenten en waterschappen, alsmede openbare
lichamen, gemeenschappelijke organen en bedrijfsvoeringsorganisaties als bedoeld
in artikel 8, eerste, tweede, onderscheidenlijk derde lid, van de Wet
gemeenschappelijke regelingen, voor zover deze (…) kwalificeren als
overheidsinstantie ».

Les onder g **et** h sont dans le **même** art. 8 lid 1 : communes, provinces et
waterschappen sont **essentielles de plein droit**, au même titre que les
ministères. Pas de seuil de taille, pas de `threshold_dependent`. C'est une
différence nette avec le régime privé, et un argument commercial direct :
une commune néerlandaise de 12 000 habitants est une entité essentielle.

### Autorité compétente par étage (art. 15 Cbw, verbatim du tableau)

| étage | autorité |
|---|---|
| centrale overheden | Onze Minister van Binnenlandse Zaken en Koninkrijksrelaties |
| decentrale overheden, **uitgezonderd de waterschappen** | Onze Minister van Binnenlandse Zaken en Koninkrijksrelaties |
| decentrale overheden, **alleen voor wat betreft de waterschappen** | Onze Minister van Infrastructuur en Waterstaat |

Un waterschap n'a donc **pas** le même superviseur qu'une commune. C'est le seul
sous-secteur néerlandais scindé entre deux ministres.

### Bijlage 1 — la liste des formes, verbatim

> Overheid — Centrale overheden : – Ministeries met inbegrip van de daartoe
> behorende dienstonderdelen doch met uitzondering van de inlichtingen- en
> veiligheidsdiensten, bedoeld in de Wet op de inlichtingen- en veiligheids-
> diensten 2017 – Zelfstandige bestuursorganen, voor zover zij kwalificeren als
> overheidsinstantie. Decentrale overheden : – Provincies – Gemeenten –
> Waterschappen – Openbare lichamen, gemeenschappelijke organen en
> bedrijfsvoeringsorganisaties als bedoeld in artikel 8, eerste, tweede,
> onderscheidenlijk derde lid, van de Wet gemeenschappelijke regelingen, voor
> zover deze (…) kwalificeren als overheidsinstantie.

Les **organes de coopération intercommunale (Wgr)** sont donc nommément dans le
champ. Commercialement, c'est la ligne la plus intéressante des six : ce sont les
mutualisations informatiques entre communes — le profil MSP public.

Décision produit : `PUBLIC_ADMIN_NL` ship **six** `entityTypes`, chacun adossé à
une citation verbatim — gemeente, provincie, waterschap, ministerie, ZBO,
coopération Wgr. Plus aucun bloqueur.

---

## 2026-07-30 — Cbb art. 10 : la seule obligation fournisseur RÉCURRENTE du corpus

<!-- meta: theme=supply-chain; type=reference; date=2026-07-30; surfaces=data,ui,i18n; guard=apps/core-api/test/supplier-risk-factor-nl-verification.test.ts -->

`supplier-risk-factors.ts` portait NL avec `factors: []` et
`documentationDuty: true`. La deuxième moitié était juste, la première était un
trou : l'art. 10 du Cbb (Stb. 2026, 189) impose quelque chose qu'**aucune autre
transposition du corpus n'impose**.

### Faits vérifiés (verbatim, Stb. 2026, 189)

| fait | article | verbatim | statut |
|---|---|---|---|
| Politique de sécurité de la chaîne d'approvisionnement, écrite et appliquée de façon démontrable | Cbb art. 10 lid 1 | « De essentiële entiteit of belangrijke entiteit heeft vastgesteld beleid over de beveiliging van de toeleveringsketen. (…) De entiteit legt dat beleid schriftelijk vast en past dat beleid aantoonbaar toe. » | verified |
| **Vérification** que les fournisseurs DIRECTS respectent les exigences de sécurité de l'entité, et **contrôle périodique** | Cbb art. 10 lid 2 | « De essentiële entiteit of belangrijke entiteit toetst of haar rechtstreekse leveranciers en rechtstreekse dienstverleners, bedoeld in het eerste lid, voldoen aan de beveiligingseisen, bedoeld in artikel 7, vijfde lid. De entiteit controleert dit periodiek. » | verified |

### Ce que ça n'est pas

Ce n'est **pas** une obligation d'exposition des données. L'IT (GV.SC-07.R1(b)),
le PT (GR.CA-7) et l'ES (op.ext.4.2) exigent de documenter *à quoi le
fournisseur a accès*. Le Cbb ne demande rien de tel. Exiger `dataShared` d'un
opérateur néerlandais serait inventer une obligation — c'est pourquoi le champ a
sa propre clé (`complianceVerification`) plutôt que de réutiliser `dataExposure`.

### Deux phrases, donc deux conditions

L'art. 10 lid 2 contient deux obligations distinctes, et la seconde est celle
qui compte :

1. **toetst** — vérifier que les fournisseurs directs satisfont aux exigences de
   l'art. 7 lid 5 de l'entité.
2. **controleert dit periodiek** — le refaire. Une vérification unique à
   l'entrée en relation satisfait la première et échoue la seconde.

Aucun intervalle n'est fixé par le décret. Ne pas en inventer : le produit
enregistre la cadence choisie par l'entité (`suppliers.review_cadence_months`),
il ne prescrit pas de durée. Le marqueur `periodic: true` sur le facteur est un
booléen pour cette raison précise, et non un nombre de mois.

### Où ça atterrit dans le produit

Le registre fournisseurs avait déjà les colonnes : `last_reviewed_at` (la
vérification) et `review_cadence_months` (la périodicité, que le cron de rappel
lit déjà). **Aucune migration.** Le devoir néerlandais se satisfait avec le
bouton « Marquer comme revu » plus une cadence non nulle.

⚠️ Piège évité, à connaître. L'évaluateur de `suppliers.routes.ts` renvoyait
`documented: false` pour toute clé inconnue, et un facteur non documenté impose
un plancher de risque de 50. Ajouter le facteur sans enseigner la clé à
l'évaluateur aurait mis **tous** les fournisseurs néerlandais à 50 de risque de
façon permanente, sans aucun champ capable de le lever. Le `switch` a désormais
une garde d'exhaustivité (`const unhandled: never`) qui transforme cet oubli en
erreur de compilation.

Choix assumé : un contrôle **en retard** reste `documented: true`. La question
posée est « une vérification périodique est-elle en place », pas « est-elle à
jour » — le cron de rappel poursuit déjà `next_review_due_at`, et basculer ce
booléen punirait deux fois le même manquement.
