# Stone V2 Repo Basis

## Status

- `Verified`: This document defines the base assumptions for the Stone V2 repo.
- `Verified`: Stone V2 is a new product track, not a continuation of Stone V1 assumptions.
- `Verified`: This document is doc-only. It does not authorize runtime edits by itself.

## Scope

- `Verified`: Goal is to define what kind of repo this is, who it is for, and what broad shape the work should take.
- `Verified`: This document covers:
  - repo purpose
  - target customer
  - strategic difference from V1
  - architecture direction
  - harness implications

## Product reset

- `Inference`: Stone V2 should not be treated as a small curated starter theme.
- `Inference`: Stone V2 should be treated as a premium theme platform for repeated developer use.
- `Inference`: The primary buyer is not the merchant. The primary buyer is the Israeli Shopify developer or agency.

## Core product definition

- `Inference`: Stone V2 is a **premium, feature-maximal, RTL-native Shopify theme platform** for Israeli developers.
- `Inference`: Its job is to serve as a reusable base across many client stores.
- `Inference`: Developers should feel they can use this platform for most normal Israeli Shopify projects without first porting a foreign theme.

## What V2 is optimizing for

- `Inference`: high section and block coverage
- `Inference`: strong theme-editor customization depth
- `Inference`: reusable industry presets
- `Inference`: Hebrew and English editor support
- `Inference`: RTL-native storefront behavior
- `Inference`: maintainable Liquid-first architecture

## What V2 is not optimizing for

- `Inference`: narrow minimalism for its own sake
- `Inference`: one-store bespoke brand execution only
- `Inference`: a tiny highly curated starter surface
- `Inference`: forcing developers into code for ordinary client changes

## Repo-level architectural posture

- `Verified`: Stone V2 should remain:
  - Liquid-first
  - native Shopify theme architecture
  - framework-free
  - understandable by normal Shopify developers
- `Inference`: Stone V2 can be broad without becoming structurally chaotic if it uses normalized families and a strong settings vocabulary.

## Harness implication

- `Verified`: This repo should be ready to operate under the governed harness shape.
- `Inference`: The repo should therefore separate:
  - `HARNESS/` for governance and checks
  - `project/` for Shopify theme runtime
  - `state/` for canonical project state
  - `workspace/` for plans, handoffs, QA, notes, and execution artifacts
- `Inference`: The harness should treat these docs as planning truth before it generates plans, checks, or build work.

## Success condition

- `Inference`: The repo is on the right track only if an Israeli Shopify developer can realistically think:
  - `I can use this for most client stores.`
  - `I can customize heavily from the theme editor.`
  - `I do not need to rescue an LTR-first premium theme again.`
  - `I can hand this off to a Hebrew-speaking client without making the editor feel foreign.`

## Final recommendation

- `Verified`: Treat Stone V2 as a new governed theme platform product.
- `Inference`: Every later plan, architecture decision, and Codex run should assume breadth, reuse, editor power, and RTL-native authorship from day one.
