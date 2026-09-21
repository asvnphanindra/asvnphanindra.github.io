# Website redesign pipeline (v1 — refine later)

Goal: site copy that is **correct, authentic, and trustworthy**.  
Hard rule: **confirmed facts = source of truth → content card = bridge → site = only from card.**  
Reference sites (e.g. [prathosh.in](https://prathosh.in/index.html)) inspire structure only. They never go straight into the site.

## Ownership (one place each)

| Artifact | Location |
|----------|----------|
| Design aid (what the site should become) | `docs/website-redesign-plan.md` |
| Your facts / notes | `workspace/inbox/` |
| Content card (validated copy) | `workspace/content_cards/` |
| Drafts before the site | `workspace/outbox/` (+ `ledger.csv`) |
| Live site | `src/pages/**`, `src/layouts/**`, `src/data/**`, `public/styles.css` (**only when you ask to sync**) |

Site repo: `E:\repos\asvnphanindra.github.io`  
Logseq: write there **only when you ask**.

## Per-section loop (v1 — agent drafts, you validate)

1. **Next section** — Agent names the section (hero, about, focus, recent, selected work, contact) and what facts are still missing.
2. **You supply facts** — Drop them in `inbox/` or state them in chat (title, institution, bio, links, recent wins). Only real facts.
3. **Agent draft** — Write or update the content card. Do not edit live pages in this step.
4. **You validate** — Mark each block `OK` or `FIX`.
5. **Site** — Sync into Astro **only when you ask**.

Hard rule unchanged: **your confirmed facts = truth**; the card is provisional until you validate; a reference website is not a copy source.

## Screen layout (avoid overload)

| Phase | Open | Closed |
|-------|------|--------|
| Draft one section | Content card for that section | Live site files |
| Validate | Card + the fact source (inbox note or your message) | Other sections |
| Sync | The one page you asked to update | Unrelated pages |

Do **not** redesign the whole site in one pass. One section validated, then the next.

## Section status

`missing` | `draft` | `validated` | `synced` | `hold`

## Cursor session close-out (paste when ending)

> Update the content-card status for sections touched (`missing|draft|validated|synced|hold`). List inbox/outbox files used. Do not change live site files unless I ask. Do not change the design-aid plan unless I ask.

## Authenticity

| Band | Meaning | Site? |
|------|---------|-------|
| High | You stated the fact, or it is already on the live site / a repo you own | OK to sync after you validate |
| Medium | Soft inference (role wording, focus label) | Prefer your fix or mark uncertainty |
| Low | Guess, copied from a reference site, or inflated claim | **Do not sync** — clarify first |

## What never enters the site

- Verbatim copy, quotes, or visual clone of a reference personal site
- Titles, grants, startups, or roles you do not hold
- Teaching-Python framed as the research niche (job lane stays labeled as teaching)

## Refs

- Design aid: `docs/website-redesign-plan.md`
- Card template: `workspace/content_cards/_template.md`
- Inbox/outbox rules: `workspace/README.md`
