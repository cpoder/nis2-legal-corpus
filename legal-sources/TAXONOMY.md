# Taxonomie des index légaux

Chaque section `##` d'un fichier `legal-sources/<pays>.md` porte une ligne
de métadonnées juste sous son titre :

```markdown
## Titre de la section

<!-- meta: theme=incident; type=law-misread; date=2026-07-26; surfaces=data,prompt,doc-gen; guard=packages/regulatory-data/test/incident-conditional-stages.test.ts -->
```

Invisible au rendu, lisible par machine. `legal-sources/INDEX.md` est
**généré** depuis ces lignes par `node tools/build-index.mjs`, et
`packages/regulatory-data/test/legal-sources-taxonomy.test.ts` refuse une section
sans métadonnées ou avec une valeur hors taxonomie.

## Pourquoi

Les fichiers étaient rangés **par pays uniquement**, en ajout chronologique. Ça
répond bien à « que sait-on du droit polonais ? » et pas du tout à « où
a-t-on déjà eu ce type de défaut ? ».

Le coût est concret. Le constat le plus utile du 2026-07-27 est un motif, pas un
fait : *la prose est rigoureuse, les titres et les badges ne le sont pas*. Il est
apparu sur l'Allemagne (badge « Frist: 6. März 2026 » contredisant son propre
paragraphe) et il aurait prédit le badge autrichien (« Transposed & Enforced »
sur une loi pas encore en vigueur). Mais l'un est dans `germany.md`, l'autre dans
`austria.md`, et le motif reste invisible.

**Ranger les faits par pays conserve les faits et perd les régularités.** Ce sont
les régularités qui font gagner du temps la fois suivante.

## `theme` — de quoi parle la section

| Valeur | Portée |
|---|---|
| `statute` | Identité du texte : citation officielle, publication, entrée en vigueur, abrogations |
| `scoping` | Qui est concerné : seuils, secteurs, classification essentielle/importante, champ d'application |
| `registration` | Obligation d'enregistrement, registre, guichet, délais associés |
| `incident` | Notification : destinataire, ancre, délais, actes de l'art. 23(4) |
| `supply-chain` | Sécurité de la chaîne d'approvisionnement et obligations fournisseurs |
| `governance` | Organe de direction : devoirs, formation, responsabilité personnelle |
| `sanctions` | Amendes, bandes, surveillance, non-cumul |
| `framework` | Référentiel technique national (ReCyF, CyFun, ENS, IT-Grundschutz, ZSIS, QNRCS, Misure ACN, NSC) |
| `documents` | Templates doc-gen et documents natifs |

## `type` — quelle est la nature de l'entrée

Séparé en deux familles, parce qu'elles ne se lisent pas pareil.

### Constats de référence

| Valeur | Sens |
|---|---|
| `reference` | Faits vérifiés à la source, aucun défaut produit associé |
| `delivery` | Trace d'une livraison (template, câblage) adossée à ces faits |
| `needs-check` | Identifié, **pas encore vérifié**, et **le produit s'en sert déjà**. Ne jamais promouvoir sans lecture de la source |
| `lead` | Piste de repérage : nom du texte et référence au journal officiel, sans lecture de la source. **N'alimente aucune config.** |

### `needs-check` ou `lead` ? La question est : le produit s'en sert-il ?

C'est la distinction qui décide si une entrée peut être supprimée.

- **`lead`** — cinq pays (BG, CY, DK, MT, SE) alimentent **zéro fichier de
  configuration**. Les appeler des « faits » est abusif : ce sont des notes de
  repérage. On peut les supprimer sans rien casser, au prix de re-trouver le nom
  de la loi danoise le jour où le Danemark devient un marché. Elles sont donc
  gardées, mais nommées pour ce qu'elles sont.
- **`needs-check`** — les art. 30 et 32 du D.lgs 138/2024 apparaissent **cinq
  fois** dans `acn-registration.ts`. Supprimer la note ne supprimerait pas
  l'affirmation, elle supprimerait le fait qu'on la sait non vérifiée. Le produit
  continuerait d'affirmer et plus personne ne saurait que c'est incontrôlé.

**Règle : on ne peut pas supprimer un fait non vérifié si le produit l'affirme
déjà.** La note n'est pas le problème, elle est le signalement du problème.

### Défauts corrigés

| Valeur | Sens | Exemple vécu |
|---|---|---|
| `fabrication` | Affirmation sans aucune source | L'amende BSI de 850 000 € ; la « Loi n° 2024-1039 » |
| `stale-statute` | Texte abrogé ou remplacé, cité comme en vigueur | DL 65/2021 présenté comme la transposition portugaise |
| `wrong-citation` | Bon texte, mauvais article ou paragraphe | Quatre bullets allemands citant le mauvais § du BSIG |
| `law-misread` | Le texte a été lu de travers | CSIRT NASK au lieu du CSIRT sektorowy |
| `deadline-model` | Ancre, unité ou nombre d'actes faux | Trois actes sur cinq ; `detectedAt + 30 jours` |
| `scope-error` | Erreur sur qui est concerné | L'ENS présenté comme s'appliquant à toute PME privée |
| `status-error` | Étape législative fausse | L'Autriche « Transposed & Enforced » avant l'entrée en vigueur |
| `surface-inconsistency` | La donnée est juste, l'affichage ment | Badge et meta contredisant le paragraphe voisin |
| `i18n` | Défaut de langue ou de locale | Détail de tâche généré en anglais pour un client polonais |
| `test-pinned` | **Un test épinglait l'erreur** | `toMatch(/Decreto-Lei 65\/2021/)` |

`test-pinned` se cumule avec le défaut qu'il protégeait : `type=stale-statute,test-pinned`.
Six occurrences le 2026-07-26/27, ce qui en fait la régularité la mieux établie
du corpus et la raison d'avoir une valeur dédiée.

## `surfaces` — où le défaut vivait

`data`, `prompt`, `doc-gen`, `ui`, `marketing`, `mcp`, `i18n`, `test`, `docs`.

Un défaut présent sur plusieurs surfaces les liste toutes. C'est ce qui rend
visible le fait, établi le 2026-07-27, que **la couche `prompt` est le dernier
endroit où une correction arrive** : trois défauts distincts y ont survécu après
correction de la donnée.

## `guard` — le test qui empêche le retour

Chemin du test, ou `none` si aucun. Un garde-fou est un **test automatisé qui
échoue si le défaut revient**. Sans lui, une correction tient jusqu'au prochain
qui réécrit la phrase de bonne foi, ce qui est arrivé six fois le 2026-07-26/27.

## `debt` — l'absence assumée de garde-fou

`guard=none` seul veut dire « pas encore fait ». `guard=none; debt=<raison>` veut
dire « on a regardé, ce n'est pas mécanisable, et voici pourquoi ». L'INDEX les
sépare, parce qu'une file d'attente mélangée à des cas insolubles cesse d'être
une file d'attente.

Deux dettes assumées à ce jour : distinguer une citation verbatim d'une
reformulation crédible sans disposer du texte source (aucune machine ne le fait),
et croiser chaque § cité dans le produit avec l'index (possible mais lourd).

## Mutation-tester ses propres garde-fous

Un test vert ne prouve rien tant qu'on ne l'a pas vu échouer. Réinjecter la faute
d'origine et vérifier que le test tombe fait partie du travail.

Ce n'est pas une précaution théorique : le garde-fou portugais est **passé** à sa
première mutation. Sa ligne contenait à la fois l'affirmation fautive et un
« repeals » plus loin, et l'exclusion écrite pour le second avalait le premier.
Corrigé en jugeant une fenêtre autour de la citation plutôt que la ligne entière.

## Ajouter une entrée

1. Écrire la section normalement, avec les citations verbatim et la date de relevé.
2. Ajouter la ligne `<!-- meta: ... -->` sous le titre.
3. `node tools/build-index.mjs` pour régénérer `INDEX.md`.
4. `node tools/validate.mjs` valide la taxonomie.
