# Contributing

This repository is a generated mirror. The source files live in the Reglyze product repository;
every accepted correction is ported there and the mirror is regenerated, so a fix here also
reaches the product's scoping engine, country pages, deadline calculators and generated documents.

## What a correction needs

1. The official source: the gazette, the legislature's record or EUR-Lex. A URL on the official
   domain, and the date you read it.
2. The article or section, and the verbatim quote in the original language.
3. What the corpus currently says, with the file and section.
4. Optionally, your English gloss of the quote.

Open an issue with the "Legal fact correction" template, or a pull request that edits the country
file and keeps its `<!-- meta: -->` lines valid: `node tools/validate.mjs` checks them and
`node tools/build-index.mjs` regenerates `legal-sources/INDEX.md`. CI runs the validator on every
pull request.

## What we will not merge

- A fact sourced to a law firm, a vendor or a news site. Those are leads: open an issue typed
  `lead` and we will read the gazette.
- A paraphrase of a legal effect ("repeals", "amends", "in force") without the quote. "Repeals with
  transitional survival" and "repeals" are different facts.
- A new country file without at least the statute's identity (gazette citation, publication date,
  entry into force) read in the official publication.
- Any name of a company or a person who is not a public official acting as such. The corpus
  describes entities by role.

## Native readers

The corpus is written in English or French with quotes in the original language. If you are a
native reader of a language we cover and want to review a file end to end, say so in an issue: the
most valuable review is "this gloss misreads the Slovenian" or "this article does not say that".

## Conduct

Be precise, be kind, cite your sources. Disagreements about what a text means are settled by the
text.
