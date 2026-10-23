# Poland — NIS2 National Transposition Legal Sources

## Statute: Amendment to the National Cybersecurity System Act (ustawa o KSC)

<!-- meta: theme=statute; type=reference; date=2026-07-26; surfaces=data,docs; guard=none -->

| Field | Value |
|---|---|
| Official citation | Dz.U. 2026 poz. 252 (ustawa z dnia 23 stycznia 2026 r. o zmianie ustawy o krajowym systemie cyberbezpieczeństwa oraz niektórych innych ustaw) |
| Short name | KSC amendment (Dz.U. 2026 poz. 252) |
| Transposes | Directive (EU) 2022/2555 (NIS2) |
| Official URL (Sejm ELI) | https://api.sejm.gov.pl/eli/acts/DU/2026/252 |
| Retrieval date | 2026-06-07 |

### Fact table

| Fact | Source | Verbatim quote | Status |
|---|---|---|---|
| Entry into force = 2026-04-03 | Art. 49 (Sejm ELI text.pdf) | "Art. 49. Ustawa wchodzi w życie po upływie miesiąca od dnia ogłoszenia." | verified |

### Notes

- Signed by the President 2026-02-19; published in Dziennik Ustaw 2026-03-02 (Dz.U. 2026 poz. 252). Art. 49: "Ustawa wchodzi w życie po upływie miesiąca od dnia ogłoszenia" → one month after publication ⇒ **in force 2026-04-03**.
- Full statute text read from the Sejm ELI text endpoint (https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf) via pdftotext — bypasses the CAPTCHA on the dziennikustaw.gov.pl viewer.
- Tracker: stage = `in_force`; targetDate null (already in force).

## Supply chain — art. 8 and the high-risk-supplier regime (art. 67b–67c)

<!-- meta: theme=supply-chain; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** Dz.U. 2026 poz. 252 (ustawa z dnia 23 stycznia 2026 r.), full
  text via the Sejm ELI endpoint https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf
  (pdftotext — bypasses the ISAP/dziennikustaw CAPTCHA).
- **Retrieved + read:** 2026-07-25 (art. 1 pkt 16 = new art. 8; pkt 76 =
  new rozdział 12a containing art. 67b–67c).

### Fact table

| Fact | Source | Verbatim quote | Status |
|---|---|---|---|
| Supply chain is art. 8 ust. 1 pkt 2 **lit. e** | art. 1 pkt 16 (new art. 8) | "bezpieczeństwo i ciągłość łańcucha dostaw produktów ICT, usług ICT i procesów ICT, od których zależy świadczenie usługi, z uwzględnieniem związków pomiędzy bezpośrednim dostawcą sprzętu lub oprogramowania a podmiotem kluczowym lub podmiotem ważnym" | verified |
| NIS2 art. 21(3) IS transposed, in art. 8 ust. 2 | art. 1 pkt 16 | "Wdrażając środki, o których mowa w ust. 1 pkt 2 lit. e, podmiot kluczowy lub podmiot ważny uwzględnia: 1) podatności związane z dostawcą sprzętu lub oprogramowania; 2) ogólną jakość produktów ICT, usług ICT i procesów ICT pochodzących od dostawcy…; 3) wyniki skoordynowanej oceny bezpieczeństwa przeprowadzonej przez Grupę Współpracy…; 4) wyniki postępowania, o którym mowa w art. 67b." | verified |
| **PL-specific: entities must factor in the high-risk-supplier proceeding** | art. 8 ust. 2 pkt 4 | "wyniki postępowania, o którym mowa w art. 67b" | verified |
| High-risk supplier = ministerial decision | art. 67b ust. 1 | "Minister właściwy do spraw informatyzacji, w celu ochrony bezpieczeństwa państwa lub bezpieczeństwa i porządku publicznego, może wszcząć … postępowanie w sprawie uznania dostawcy sprzętu lub oprogramowania … za dostawcę wysokiego ryzyka." | verified |
| Decision is immediately enforceable, no reconsideration | art. 67b ust. 18–19 | "Decyzja … podlega natychmiastowemu wykonaniu." / "Od decyzji … nie przysługuje wniosek o ponowne rozpatrzenie sprawy." | verified |
| **Hard withdrawal deadlines after a designation** | art. 67c ust. 1–2 | "1) nie wprowadzają do użytkowania typów produktów ICT… dostarczanych przez dostawcę wysokiego ryzyka; 2) wycofują z użytkowania … nie później niż w terminie 7 lat od dnia ogłoszenia decyzji … w Dzienniku Urzędowym … »Monitor Polski«" — 4 years for telecom operators (ust. 2) | verified |
| Public-procurement ban | art. 67c ust. 4 | entities subject to Prawo zamówień publicznych "nie mogą nabywać typów produktów ICT…" covered by the decision | verified |
| **No supplier register, no data-exposure duty in art. 8** | art. 8 (whole) | art. 8 requires supply-chain security + the ust. 2 factors; it does NOT mandate a supplier inventory nor documenting what data a supplier can access | verified (absence confirmed on the full article text) |

### Why this matters to the product

The high-risk-supplier regime is a **hard, dated, PL-specific obligation** on
every podmiot kluczowy/ważny: once a designation is published in Monitor Polski,
the covered ICT products/services/processes must not be newly deployed and must
be withdrawn within 7 years (4 for telecoms on Annex-3 critical functions), with
a procurement ban on top. Reglyze models none of this — `ksc.yaml` carries
`8.2.e` as a bare title. For an MSP selling in Poland this is the single most
concrete supply-chain duty to track per client.

### Corrections to internal data

`packages/regulatory-data/src/nis2-mappings/frameworks/ksc.yaml` has `8.2.e` as
a title only, and no representation of art. 8 ust. 2 (the 21(3) factors) nor of
art. 67b–67c. → enrich before any PL commercial claim on supply chain.

## Enregistrement, surveillance, sanctions, seuils — Dz.U. 2026 poz. 252

<!-- meta: theme=registration,sanctions,scoping; type=reference; date=2026-07-26; surfaces=data; guard=none -->

- **Source read:** même texte officiel, https://api.sejm.gov.pl/eli/acts/DU/2026/252/text.pdf
  (102 pages, `pdftotext -layout`).
- **Retrieved + read:** 2026-07-25 (art. 5, 6, 7c, 53, 73, 73a lus verbatim).

### 1. Enregistrement — art. 7c

| Fait | Article | Verbatim | Statut |
|---|---|---|---|
| **Délai d'inscription = 6 mois glissants depuis que l'entité remplit les critères** | art. 7c ust. 1 | "Podmiot kluczowy lub podmiot ważny składają wniosek o wpis do wykazu, **w terminie 6 miesięcy od dnia spełnienia przesłanek** uznania za podmiot kluczowy lub podmiot ważny." | ✅ |
| Changement de données : **14 jours** | art. 7c ust. 3 | "składają wniosek o zmianę wpisu w wykazie … **w terminie 14 dni od dnia ich zmiany**" | ✅ |
| Inscription effective **dès le dépôt** dans le système | art. 7d ust. 1 | "Wpisu podmiotu do wykazu dokonuje się **z chwilą złożenia wniosku** w systemie teleinformatycznym" | ✅ |
| **Déclaration du dirigeant sous responsabilité pénale** | art. 7c ust. 5 | "Świadomy **odpowiedzialności karnej** za złożenie fałszywego oświadczenia wynikającej z art. 233 § 6 … Kodeks karny oświadczam, że dane zawarte we wniosku są zgodne z prawdą." (exclut les plages IP et noms de domaine) | ✅ |
| Défaut d'inscription dans le délai = **sanctionnable** | art. 73 ust. 1a pkt 1 | "może nałożyć karę pieniężną na podmiot, który: 1) **w terminie, o którym mowa w art. 7c ust. 1, nie złożył wniosku o wpis do wykazu**" | ✅ |

⚠️ **C'est un délai glissant, pas une fenêtre calendaire.** Une entité qui
franchit les seuils en septembre 2026 a jusqu'en mars 2027. Voir la
réconciliation plus bas.

### 2. Surveillance — art. 53

| Fait | Article | Verbatim | Statut |
|---|---|---|---|
| **Kluczowy : surveillance préventive ET a posteriori. Ważny : a posteriori seulement** | art. 53 ust. 3 | "sprawują nadzór o charakterze: 1) **prewencyjnym i następczym** nad podmiotami kluczowymi; 2) **następczym** nad podmiotami ważnymi, w szczególności w przypadku uzasadnionego podejrzenia…" | ✅ |
| Pouvoirs sur les kluczowe : contrôle sur place ou à distance, **y compris inopiné** | art. 53 ust. 2 pkt 1 | "prowadzić kontrole, **w tym doraźne**, w siedzibie podmiotu … lub zdalnie" | ✅ |
| Peut **imposer un audit par décision** | art. 53 ust. 2 pkt 2 | "w drodze decyzji nałożyć na podmiot obowiązek przeprowadzania audytu, o którym mowa w art. 15 ust. 1b" | ✅ |
| Peut **mandater un CSIRT** pour évaluer le SI de l'entité | art. 53 ust. 2 pkt 3 | "zlecić CSIRT MON, CSIRT NASK, CSIRT GOV lub CSIRT sektorowemu, dokonanie oceny bezpieczeństwa systemu informacyjnego" | ✅ |
| Peut exiger la **preuve** de mise en œuvre de l'art. 8 | art. 53 ust. 2 pkt 6 | "wystąpić z wnioskiem o przedstawienie **dowodów realizacji** wymogów, o których mowa w art. 8 ust. 1" | ✅ |

### 3. Sanctions — art. 73 et 73a

**Sur l'entité :**

| Fait | Article | Verbatim | Statut |
|---|---|---|---|
| Kluczowy : **10 M€ ou 2 % du CA, le montant LE PLUS ÉLEVÉ**, plancher 20 000 zł | art. 73 ust. 3 | "nie może przekroczyć 10 000 000 euro … lub 2 % przychodów … **przy czym zastosowanie ma kwota wyższa**. Kara ta nie może być jednak **niższa niż 20 000 zł**." | ✅ |
| Ważny : **7 M€ ou 1,4 % du CA**, plancher 15 000 zł | art. 73 ust. 4 | "nie może przekroczyć 7 000 000 euro … lub 1,4 % przychodów … Kara ta nie może być jednak niższa niż **15 000 zł**." | ✅ |
| Activité < 12 mois ou CA nul : assiette forfaitaire **500 000 €** (kluczowy) / **250 000 €** (ważny) | art. 73 ust. 3a et ust. 4 | "za podstawę wymiaru kary pieniężnej przyjmuje się równowartość kwoty 500 000 euro" / "…250 000 euro" | ✅ |
| **Sanction aggravée jusqu'à 100 000 000 zł** (~23 M€) en cas de cybermenace grave pour la défense, la sécurité de l'État, l'ordre public, la vie et la santé, ou de risque de dommage patrimonial grave | art. 73 ust. 5 | "– organ właściwy do spraw cyberbezpieczeństwa **nakłada** karę w wysokości **do 100 000 000 zł**" (nakłada = impose, pas « peut ») | ✅ |

**Sur le dirigeant personnellement :**

| Fait | Article | Verbatim | Statut |
|---|---|---|---|
| **Jusqu'à 300 % de sa rémunération** | art. 73a ust. 4 | "może być wymierzona w kwocie nie większej niż **300 % otrzymywanego przez ukaranego wynagrodzenia** obliczanego według zasad obowiązujących przy ustalaniu ekwiwalentu pieniężnego za urlop" | ✅ |
| Dirigeant d'entité publique : plafond **100 %** | art. 73a ust. 5 | "w kwocie nie większej niż **100 %** otrzymywanego przez ukaranego wynagrodzenia" | ✅ |
| **Cumulable avec l'amende de l'entité** | art. 73a ust. 3 | "**Niezależnie od** kary pieniężnej, o której mowa w art. 73 ust. 1, karę pieniężną można nałożyć również na kierownika" | ✅ |
| Faits générateurs incluant **le défaut d'inscription (art. 7c ust. 1 et 3)**, l'art. 8 (mesures), l'**art. 8e (formation annuelle)** et l'art. 8f (casier) | art. 73a ust. 1 pkt 1-5 | "nie wykonuje co najmniej jednego z obowiązków, o których mowa w art. 7b ust. 4, **art. 7c ust. 1, 3** … art. 8 … art. 8d … **art. 8e** … art. 8f ust. 1 lub 2" | ✅ |
| Un manquement **ponctuel** suffit | art. 73a ust. 2 | "którego zaniechanie … miało **charakter jednorazowy**" | ✅ |

### 4. Seuils — art. 5 et 6

| Fait | Article | Verbatim | Statut |
|---|---|---|---|
| Kluczowy (cas général, annexe 1) : **dépasse** les seuils de moyenne entreprise du règl. 651/2014/UE ann. I art. 2 ust. 1 | art. 5 ust. 1 pkt 1 | "która **przewyższa** wymogi dla średniego przedsiębiorstwa określone w art. 2 ust. 1 załącznika I do rozporządzenia … 651/2014" | ✅ |
| ⚠️ **Un MSSP est kluczowy dès la PETITE entreprise** | art. 5 ust. 1 pkt 3 | "**dostawca usług zarządzanych w zakresie cyberbezpieczeństwa**, który co najmniej spełnia wymogi dla **małego albo średniego** przedsiębiorcy … lub je przewyższa" | ✅ |
| Opérateur de communications électroniques : kluczowy dès la **moyenne** entreprise | art. 5 ust. 1 pkt 2 | "który co najmniej spełnia wymogi dla średniego przedsiębiorcy … lub je przewyższa" | ✅ |
| Kluczowy **quelle que soit la taille** : DNS, prestataire de confiance qualifié, podmiot krytyczny, entité publique de l'annexe 1 | art. 5 ust. 1 pkt 4 | "**niezależnie od wielkości podmiotu**: a) dostawca usług DNS, b) kwalifikowany dostawca usług zaufania …, c) podmiot krytyczny, d) podmiot publiczny …" | ✅ |
| Ważny : **atteint** les seuils de moyenne entreprise et n'est pas kluczowy | art. 6 ust. 2 pkt 1-2 | "która **spełnia** wymogi dla średniego przedsiębiorcy … **oraz która nie jest podmiotem kluczowym**" | ✅ |

### Pourquoi ça compte commercialement (MSP)

Deux faits se combinent et font de la Pologne un marché MSP particulier :

1. **Un MSSP est entité ESSENTIELLE dès la petite entreprise** (art. 5 ust. 1
   pkt 3), là où le régime général exige de dépasser les seuils de moyenne
   entreprise. Un MSP polonais de 30 personnes est kluczowy, donc soumis à la
   surveillance **préventive** de l'art. 53 ust. 3 pkt 1, contrôles inopinés
   compris.
2. Ses clients doivent **le déclarer nommément au registre** quand ils lui
   confient les tâches des art. 8 et 11 (art. 7 ust. 2 pkt 16, déjà vérifié),
   avec mise à jour sous 14 jours.

Le MSP est donc à la fois régulé et rendu visible au régulateur par ses propres
clients. C'est un argument de vente, pas un obstacle : il rend la conformité du
MSP opposable et vérifiable.

### Réconciliation des données internes (2026-07-25)

`transposition-references.ts` (`TRANSPOSITION_REFERENCES_PL`) affirmait dans les
six locales :

> « Self-identification opened on **7 May 2026** with a statutory window running
> to **3 October 2026** — late registration is itself sanctionable. »

- **Le caractère sanctionnable est exact** (art. 73 ust. 1a pkt 1), et il est
  même plus lourd qu'annoncé puisque le dirigeant est personnellement exposé
  (art. 73a ust. 1 pkt 1).
- **La fenêtre est fausse dans sa nature.** L'art. 7c ust. 1 fixe un délai de
  **6 mois glissants à compter du jour où l'entité remplit les critères**, pas
  une fenêtre calendaire commune. Le 3 octobre 2026 n'est que le cas particulier
  d'une entité qui remplissait déjà les critères à l'entrée en vigueur
  (2026-04-03 + 6 mois). Une entité qui franchit les seuils en septembre 2026 a
  jusqu'en mars 2027.
- **Le 7 mai 2026 n'apparaît nulle part dans la loi.** Possiblement la date
  d'ouverture du système teleinformatyczny, mais ce n'est pas la règle de droit
  et ce n'était sourcé nulle part.
- **Le délai de 14 jours pour les changements était absent**, alors que c'est
  celui qui se déclenche le plus souvent en pratique.

Conséquence si on ne corrigeait pas : on annonce à un prospect qui s'équipe en
novembre 2026 qu'il a déjà manqué un délai légal sanctionné. Corrigé.

## Notification d'incident — art. 11 ust. 1 pkt 4 à 4c (vérifié 2026-07-26)

<!-- meta: theme=incident; type=law-misread,test-pinned; date=2026-07-26; surfaces=data,i18n,doc-gen,test; guard=apps/ai-service/test/native-prompt-csirt-routing.test.ts -->

- **Source read:** même texte officiel Dz.U. 2026 poz. 252 (Sejm ELI, pdftotext).
- **Retrieved + read:** 2026-07-26.

| Fait | Article | Verbatim | Statut |
|---|---|---|---|
| Alerte précoce : **24 h depuis la DÉTECTION**, au **CSIRT SECTORIEL** | art. 11 ust. 1 pkt 4 | "zgłasza wczesne ostrzeżenie o incydencie poważnym niezwłocznie, nie później niż w ciągu **24 godzin od momentu jego wykrycia**, do **właściwego CSIRT sektorowego**" | ✅ |
| Notification : **72 h depuis la détection**, au CSIRT sectoriel | art. 11 ust. 1 pkt 4a | "zgłasza incydent poważny … nie później niż w ciągu **72 godzin od momentu jego wykrycia**, do właściwego CSIRT sektorowego" | ✅ |
| Rapport **intermédiaire sur demande** du CSIRT sectoriel | art. 11 ust. 1 pkt 4b | "przekazuje, **na wniosek** właściwego CSIRT sektorowego, sprawozdanie okresowe z obsługi incydentu poważnego" | ✅ |
| Rapport final : **1 mois depuis la notification à 72 h** | art. 11 ust. 1 pkt 4c | "przekazuje … sprawozdanie końcowe … nie później niż w ciągu **miesiąca od dnia zgłoszenia, o którym mowa w pkt 4a**" | ✅ |
| ⚠️ **Seconde horloge** : si un rapport intermédiaire a été remis, le final court depuis **la fin du traitement** | (suite de l'art. 11) | "podmiot kluczowy lub podmiot ważny przekazuje właściwemu CSIRT sektorowemu sprawozdanie końcowe nie później niż w ciągu **miesiąca od zakończenia obsługi** incydentu poważnego" | ✅ |
| ⚠️ **Prestataires de services de confiance : 24 h au lieu de 72 h** | (art. 11) | "**Dostawca usług zaufania** zgłasza incydent poważny … nie później niż w ciągu **24 godzin** od momentu jego wykrycia do właściwego CSIRT sektorowego." | ✅ |
| Retour du CSIRT sectoriel sous **24 h** | (art. 11) | "CSIRT sektorowy nie później niż w ciągu **24 godzin** przekazuje podmiotowi zgłaszającemu wytyczne…" | ✅ |

### Trois corrections apportées à `incident-reporting.ts` (PL)

L'en-tête du bloc PL portait : « 24h/72h timeline **verified 2026-06-29 against
CSIRT NASK guidance** ». C'est la provenance de l'erreur : une *guidance* est une
source secondaire, et la loi dit autre chose sur deux points.

1. **Destinataire faux.** Les six locales disaient « to **CSIRT NASK** ». La loi
   adresse les quatre actes au **właściwy CSIRT SEKTOROWY**. Les CSIRT nationaux
   (NASK, GOV, MON) apparaissent au pkt 5 pour la coopération pendant le
   traitement et dans la circulation de l'information : un autre rôle.
2. **Point de départ faux dans 5 locales sur 6.** Le locale `pl` disait
   correctement « od wykrycia ». Les locales en/fr/it/de/pt disaient
   *awareness / prise de connaissance / consapevolezza / Kenntnisnahme /
   conhecimento*. Un lecteur polonais voyait la bonne règle, **un MSP lisant en
   anglais voyait la mauvaise** — l'inverse de ce qu'il faut sur un marché où la
   vente passe par les MSP.
3. **Deux règles absentes** : la dérogation à 24 h des prestataires de services
   de confiance, et la seconde horloge du rapport final.

Corrigé aussi dans `transposition-references.ts`, dont le bullet « Three
national-level CSIRTs … notifications flow to the competent CSIRT among NASK,
GOV, MON » **avait été écrit par moi le 2026-07-25** et reprenait la même erreur
de destinataire.

### Lacune de modélisation, laissée visible

`sprawozdanie okresowe` (pkt 4b) n'a pas de `stage` dans
`IncidentReportDeadline`, exactement comme le `privremeno izvješće` croate. Le
type ne modélise que trois actes, et `nis2BaselineDeadlines` code en dur
24 / 72 / 720 h pour **les huit pays**. Toute déviation nationale sur les
chiffres ou sur l'ancre est donc invisible au moteur et ne vit que dans les
libellés. C'est le vrai défaut de conception derrière ces erreurs.

## Template natif UKSC — livré 2026-07-26

<!-- meta: theme=documents; type=delivery; date=2026-07-26; surfaces=doc-gen; guard=none -->

Un rapport d'incident polonais natif existe désormais
(`apps/doc-gen/src/templates/incident-uksc.ts`), au même rang que l'ANSSI et
l'ACN. Chaque citation qu'il porte est tirée de ce fichier, pas d'une guidance
ni d'un template voisin.

### Ce que la trame directive ne pouvait pas exprimer

| Point | Directive NIS 2 | UKSC |
|---|---|---|
| Destinataire | CSIRT national | **CSIRT sektorowy** (art. 11 ust. 1 pkt 4, 4a, 4b, 4c) |
| Point de départ | prise de connaissance | **détection** (« od momentu jego wykrycia ») |
| Nombre d'actes | 3 | **4** — le `sprawozdanie okresowe` du pkt 4b n'a aucun équivalent |
| Rapport final | 1 mois depuis la notification | 1 mois depuis la notification 72 h, **ou** 1 mois depuis la fin du traitement si un rapport intermédiaire a été remis |
| Prestataires de confiance | — | **24 h** au lieu de 72 h |

C'est précisément pourquoi un template générique aurait été le mauvais choix :
il aurait produit un document à trois actes, adressé au mauvais organisme, avec
la mauvaise ancre.

### Ce qui est laissé vide plutôt que deviné

`sectoralCsirtName` est vide par défaut. Nous ne détenons pas encore la table
secteur → CSIRT sectoriel, et la remplir au jugé reproduirait l'erreur
d'adressage que ce chantier corrige. Le template nomme alors l'obligation
(« właściwy CSIRT sektorowy ») sans désigner un organisme faux.

Restent vides aussi, faute de champs correspondants dans notre modèle
d'incident : NIP, KRS, REGON, numéro au wykaz, vecteur d'attaque, cause
racine. Ce sont des champs à saisir, pas des faits à inventer.

### Correction du hint client au passage

Le texte affiché à un client polonais disait « utilisez **le rapport générique
ci-dessus** » — alors qu'aucun bouton n'était rendu pour la Pologne. Il disait
aussi de déposer auprès du **CSIRT NASK**. Les deux étaient faux ; c'est ce que
le mainteneur a constaté en démo. Le hint renvoie désormais au CSIRT sectoriel et à
l'ancre de détection, et le bouton existe.

## La couche prompts avait la même erreur (trouvé 2026-07-27)

<!-- meta: theme=incident,scoping; type=reference; date=2026-07-27; surfaces=data; guard=packages/regulatory-data/test/pl-sector-competent-authority.test.ts -->

Corriger la donnée, le hint i18n et le template doc-gen n'a pas suffi : la
même affirmation vivait aussi dans les **prompts LLM**, qui n'avaient pas été
audités. Trois emplacements, tous dans `apps/ai-service/src/lib/` :

| Emplacement | Ce qu'il disait | Portée |
|---|---|---|
| `native-doc-prompts.ts` — préambule système KSC | « odsyłasz do właściwego CSIRT poziomu krajowego (CSIRT NASK / CSIRT GOV / CSIRT MON) » | **tout** document polonais généré |
| `native-doc-prompts.ts` — template `incident_response_plan` | même formulation | le plan de réponse à incident lui-même |
| `tabletop-prompt.ts` — `csirt: "CSIRT NASK"` | exercice de crise : « notifier via CSIRT NASK » | tout tabletop polonais |

Un fait faux dans un préambule est pire qu'un fait faux dans une page : il est
réaffirmé à chaque génération, dans la langue du client, sous la signature du
produit. C'est le même multiplicateur que la loi française fabriquée trouvée
plus tôt dans cet audit.

Les trois sont corrigés et adossés à la donnée vérifiée par
`apps/ai-service/test/native-prompt-csirt-routing.test.ts`, qui lit
`getIncidentReportingConfig("PL")` plutôt qu'une chaîne en dur : si l'ancre ou
le délai TSP change dans la donnée, le test tombe sur le prompt. Le garde-fou a
été vérifié par mutation (réinjection de la phrase d'origine : 4 tests sur 6
tombent).

Note de méthode : les CSIRT nationaux ne sont pas des mots interdits. Ils ont un
rôle réel à l'art. 11 ust. 1 **pkt 5** (coopération dans le traitement) et se
substituent au CSIRT sectoriel là où aucun n'est établi pour le secteur. Ce qui
est faux, c'est de les désigner comme **destinataire du signalement**. Le test
est donc contextuel, pas une interdiction de vocabulaire.

## `primaryCsirt` portait encore NASK — et alimentait le MCP public

<!-- meta: theme=incident; type=law-misread; date=2026-07-27; surfaces=prompt; guard=apps/ai-service/test/native-prompt-csirt-routing.test.ts -->

La correction du 2026-07-26 avait traité `reportDeadlines`, le hint i18n et le
template doc-gen. Le champ `primaryCsirt` du même fichier, lui, disait toujours :

```
name: "CSIRT NASK (Naukowa i Akademicka Sieć Komputerowa …)"
abbreviation: "CSIRT NASK"
authorityName.pl: "…właściwy dla sektora ogólnego i prywatnego na podstawie UKSC"
```

Soit exactement l'affirmation démentie par l'art. 11 ust. 1 pkt 4/4a/4b/4c, dans
six locales dont le polonais.

Ce champ n'est pas décoratif. Il alimente `apps/mcp/src/tools/incident-deadlines.ts`,
**l'outil MCP non authentifié** : une IA interrogée sur les délais NIS2 polonais
recevait « Authority: CSIRT NASK ». C'est la surface la plus publique du produit.

Le champ nomme désormais la désignation légale générique — « Właściwy CSIRT
sektorowy », avec la mention que NASK/GOV/MON se substituent là où aucun CSIRT
sectoriel n'est constitué. Nous **ne nommons toujours pas** d'organisme sectoriel
précis : cela dépend du secteur, aucune table secteur → CSIRT n'est vérifiée, et
la déduire est précisément ce qui a produit l'erreur d'origine.

Un test l'épinglait : `test("PL — primaryCsirt is CSIRT NASK …")`. Cinquième
occurrence dans cet audit d'un test qui protégeait la faute.

Reste ouvert : `portalUrl` pointe `https://incydent.cert.pl/`. La formulation
polonaise ne prétend plus que ce portail dessert « le secteur général et privé »,
seulement que NASK l'exploite et que sa pertinence dépend du CSIRT sectoriel
assigné. Trancher demande la table secteur → CSIRT.

## Secteur → organe compétent (art. 41 et 41a UKSC), vérifié 2026-07-27

<!-- meta: theme=incident; type=law-misread,test-pinned; date=2026-07-27; surfaces=data,mcp,i18n,test; guard=apps/ai-service/test/native-prompt-csirt-routing.test.ts -->

L'art. 11 adresse tout au « właściwy CSIRT sektorowy », mais **aucun CSIRT
sectoriel n'est nommé dans la loi**. La définition le dit :

> « CSIRT sektorowy […] na poziomie sektora lub podsektora, **ustanowiony przez
> organ właściwy do spraw cyberbezpieczeństwa** dla danego sektora lub podsektora »

C'est donc l'organe compétent du secteur qui l'établit, et le ministère de la
Numérisation parlait encore au futur (« powstaną nowe zespoły CSIRT »). Tant
qu'aucun CSIRT sectoriel n'est constitué, les CSIRT nationaux se substituent.
**Cela confirme la correction du 2026-07-26** : nommer NASK comme destinataire
était faux, et nommer un organisme sectoriel précis aurait été tout aussi faux.

Ce que la loi donne, en revanche, c'est la table des organes compétents.
Lue dans les deux PDF du Dziennik Ustaw : acte de base **Dz.U. 2018 poz. 1560**
(art. 41 pkt 1-11) et acte modificatif **Dz.U. 2026 poz. 252** (en vigueur le
2026-04-03) qui insère les pkt 1a et 9a-9l et ajoute l'art. 41a. Le texte de 2026
n'insère et ne modifie que : les points de base subsistent.

| Secteur | Organe compétent | Base |
|---|---|---|
| Énergie | Minister właściwy do spraw energii | art. 41 pkt 1 (1a pour le nucléaire) |
| Transport | Minister właściwy do spraw transportu | art. 41 pkt 2 — ⚠️ transport par voie d'eau exclu, pkt 3 : ministres de l'économie maritime **et** de la navigation intérieure |
| Bancaire + infrastructures de marché | **Komisja Nadzoru Finansowego** | art. 41 pkt 4 |
| Santé | Minister właściwy do spraw zdrowia | art. 41 pkt 5 — ⚠️ entités art. 26 ust. 5 → Ministre de la Défense (pkt 6) |
| Eau potable | Minister właściwy do spraw gospodarki wodnej | art. 41 pkt 7 |
| Eaux usées | Minister właściwy do spraw gospodarki wodnej | art. 41 pkt 9a |
| Infrastructure numérique | Minister właściwy do spraw informatyzacji | art. 41 pkt 8 — ⚠️ communications électroniques → **Prezes UKE** ; art. 26 ust. 5 → Défense (pkt 9) |
| Gestion de services TIC | Minister właściwy do spraw informatyzacji | art. 41 pkt 9b |
| Espace | Minister właściwy do spraw gospodarki | art. 41 pkt 9c |
| Chimie | Minister właściwy do spraw gospodarki | art. 41 pkt 9d |
| Alimentation | Minister właściwy do spraw rolnictwa | art. 41 pkt 9e |
| Fabrication | Minister właściwy do spraw gospodarki | art. 41 pkt 9f — ⚠️ dispositifs médicaux et DIV → **Santé** (pkt 9g) |
| Services postaux | **Prezes Urzędu Komunikacji Elektronicznej** | art. 41 pkt 9h |
| Gestion des déchets | Minister właściwy do spraw klimatu | art. 41 pkt 9i |
| Fournisseurs de services numériques | Minister właściwy do spraw informatyzacji | art. 41 pkt 9j |
| Recherche | Minister właściwy do spraw szkolnictwa wyższego i nauki | art. 41 pkt 9k — ⚠️ art. 26 ust. 5 pkt 1 → Défense (pkt 9l) |
| Administration publique | Minister właściwy do spraw informatyzacji | art. 41a ust. 1 — ⚠️ deux exceptions : Défense (ust. 2), Finances publiques (ust. 3) |

Portée en base : `sectorCompetentAuthorities` sur `INCIDENT_REPORTING_PL`,
délibérément **distinct** de `sectorSpecificCsirts`, qui reste vide puisque
aucun CSIRT sectoriel n'est nommé. Gardé par
`packages/regulatory-data/test/pl-sector-competent-authority.test.ts` : couverture
exacte des 18 secteurs, une seule fois chacun, base citée, aucune entrée ne
portant le mot CSIRT, et les six secteurs que la loi scinde doivent porter une
note explicitant l'exception.

**Ce que ça permet de dire à un client polonais**, et qu'aucun outil concurrent
ne dit : votre organe compétent est X ; c'est lui qui désigne votre CSIRT
sectoriel ; tant qu'il ne l'a pas fait, le signalement va au CSIRT national.

## `apps/web` n'avait jamais été réconcilié (trouvé 2026-08-14)

<!-- meta: theme=incident; type=law-misread,test-pinned; date=2026-08-14; surfaces=marketing,ui,i18n; guard=apps/web/test/pl-csirt-recipient.test.ts -->

Le fait est vérifié depuis le 2026-07-26 (art. 11 ust. 1 pkt 4 ci-dessus), et
les prompts, `incident-reporting.ts`, `transposition-references.ts` et le MCP
public ont été corrigés. **Le site, lui, ne l'a pas été.** Constaté en cherchant
pourquoi deux pages Reglyze se contredisaient : l'article transpositions publié
le 2026-08-11 disait « CSIRT sektorowy », `/pl/podmioty-kluczowe-wazne` disait
« CSIRT NASK dla sektora ogólnego i prywatnego ».

Le mauvais destinataire était encore affirmé sur :

| Surface | Portée |
|---|---|
| `components/pl/pl-shell.tsx` | pied de page de **chaque** page /pl |
| `components/landing/pl-landing.tsx` | `/pl` — page marché la plus visitée du site |
| `app/pl/zgloszenie-incydentu-csirt` | la page dédiée au signalement (corps + FAQ JSON-LD) |
| `app/pl/podmioty-kluczowe-wazne` | l'obligation n° 3 |
| `app/pl/srodki-bezpieczenstwa-ksc` | corps + FAQ JSON-LD |
| `app/pl/msp-cyberbezpieczenstwo-polska` | corps + FAQ JSON-LD |
| `lib/countries/poland.ts` | fiche pays PL (3 endroits) |
| `i18n.ts` — `app.dashboard.ksc.incident.{subtitle,body}` | **tableau de bord in-app, 10 locales** |

La dernière ligne est la plus grave : c'est l'écran qu'un client polonais payant
lit **pendant** qu'il déclare un incident, et il nommait « CSIRT poziomu
krajowego (CSIRT NASK / GOV / MON) ».

### Ce qui a été corrigé, et ce qui ne l'a pas été

Corrigé : l'**affirmation** du destinataire, partout, avec la citation
`art. 11 ust. 1 pkt 4`. Les deux clés in-app sont réécrites dans les dix locales
et nomment le CSIRT sectoriel + le départ des délais **depuis la détection**.

Non corrigé délibérément : le **titre, le slug et les mots-clés** de
`/pl/zgloszenie-incydentu-csirt`, qui ciblent « zgłoszenie incydentu CSIRT
NASK ». C'est un vrai terme de recherche polonais ; le réécrire est un arbitrage
SEO qui appartient au mainteneur, pas une correction juridique. Le corps de la page est
désormais exact, donc un lecteur arrivé par ce mot-clé lit la bonne règle.

Le garde-fou `apps/web/test/pl-csirt-recipient.test.ts` interdit l'**assertion**,
pas le terme : nommer CSIRT NASK reste correct pour le portail incydent.cert.pl
qu'il exploite, pour son rôle de coopération (pkt 5) et pour le cas de repli. Il
a lui-même trouvé deux surfaces que la revue manuelle avait manquées
(`srodki-bezpieczenstwa-ksc`, la FAQ JSON-LD du MSP).


## Corpus « legal frame » des documents générés (livré 2026-08-25)

<!-- meta: theme=documents; type=delivery; date=2026-08-25; surfaces=data,prompt; guard=packages/regulatory-data/test/legal-frames.test.ts -->

Extension du « squelette validé » (voir docs/legal-sources/italy.md, entrée du
2026-08-25) : la section « Ramy prawne i normatywne » des documents générés pour ce pays est
composée par `packages/regulatory-data/src/doc-corpus/legal-frames.ts` à partir
des faits vérifiés de CET index et insérée verbatim par ai-service (placeholder
`{{QUADRO_LEGALE}}`). Contenu du bloc : Ustawa KSC znowelizowana (Dz.U. 2026 poz. 252, EIF 2026-04-03) : wykaz art. 7c-7d + sankcja art. 73 ust. 1a pkt 1, nadzór art. 53 par classification. Mesures/notification : articles non vérifiés → absents. Règle : tout fait absent de
cet index est ABSENT du bloc ; enrichir = vérifier ici d'abord.

## Campagne doc-audit PL — round 1 (2026-09-08)

<!-- meta: theme=documents; type=reference; date=2026-09-08; surfaces=prompt,doc-gen; guard=none -->

Audit --deep (ancré sur cet index) des 3 documents PL vivants en prod.
Leçon outil : SANS l'index, l'auditeur LLM produisait 5 faux positifs
« prior directive » (wykrycia→powzięcia, doutes sur 7c ust. 5 / 7d ust. 1 /
53 ust. 2 pourtant vérifiés supra) ; ancré, il CONFIRME les vraies erreurs.

### Mapa liter art. 8 ust. 1 pkt 2 (vérifiée, texte intégral Dz.U. 2026 poz. 252, p. 14-15)

a) polityki szacowania ryzyka oraz bezpieczeństwa systemu informacyjnego, w tym
polityki tematyczne; b) bezpieczeństwo w procesie nabywania, rozwoju, utrzymania
i eksploatacji, w tym testowanie; c) bezpieczeństwo fizyczne i środowiskowe
uwzględniające kontrole dostępu; d) bezpieczeństwo zasobów ludzkich;
e) bezpieczeństwo i ciągłość łańcucha dostaw; f) plany ciągłości działania /
awaryjne / odtworzenia; g) monitorowanie w trybie ciągłym; h) polityki i
procedury oceny skuteczności; i) edukacja z zakresu cyberbezpieczeństwa dla
personelu; j) podstawowe zasady cyberhigieny; k) kryptografia, w tym
szyfrowanie; l) bezpieczne środki komunikacji elektronicznej + MFA w stosownych
przypadkach; m) zarządzanie aktywami; n) polityki kontroli dostępu.
Pkt de l'ust. 1 : 1) szacowanie ryzyka; 2) środki lit. a-n; 3) zbieranie
informacji o cyberzagrożeniach i podatnościach; 4) zarządzanie incydentami;
5) środki zapobiegające (lit. a-d).

**Erreur trouvée en prod** : la PSSI (Hydropol, TransLogis) mappait « łańcuch
dostaw » sur lit. i et « ocena skuteczności » sur lit. e. Règle de génération
ajoutée (mapa liter dans KSC_OUTPUT_CITATION_RULE) — même classe que la mappa
lettere art. 24 c.2 italienne.

### Autres findings round 1
- Troncatures + approbation fictive : documents du 27/07, ère pré-fix
  génération durable → À RÉGÉNÉRER (pas un défaut du générateur actuel).
- NSC cités comme base normative : règle ajoutée (NSC = wytyczne).
- Horloges sprawozdanie końcowe + définition unique du wykrycia : règles
  ajoutées (verbatim art. 11 supra).
