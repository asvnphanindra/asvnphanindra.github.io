# Website redesign plan (authentic · ethical)

**Purpose:** Design aid for updating `asvnphanindra.github.io`.  
**Reference only:** [prathosh.in](https://prathosh.in/index.html) — borrow *structure and principles*, not copy, layout, wording, verse, colors, or branding.  
**Status:** Plan only — do not implement until asked.

---

## Ethical rules (non-negotiable)

| Do | Don’t |
|----|--------|
| Reuse the *idea* of clear identity → bio → focus areas → recent → contact | Copy sentences, Sanskrit verse, section titles verbatim, or visual clone |
| Write your own facts, voice, and proof | Inflate titles, grants, or roles you don’t have |
| Keep your own fonts, colors, and Astro layout language | Mimic his page so closely it looks like a template clone |
| Credit inspiration privately in this doc only | “Inspired by Prathosh” on the public site (optional; not required) |

**One-line principle:** Same *job* as his homepage (trust + clarity); different *person*, *niche*, and *look*.

---

## What to borrow (principles)

1. **Name + role first** — who you are and where you work, above the fold  
2. **One sharp focus line** — your niche in one phrase  
3. **Short honest bio** — past + present + what you’re building now  
4. **Focus areas as buckets** — 3–5 research/product themes with 1–2 sentences each  
5. **Recent** — a few real updates (paper, tool, teaching win)  
6. **Easy contact** — email / links, no friction  

## What stays yours

- Niche: **ISAC · O-RAN · AI** (spine), teaching Python as job lane  
- Products, simulator, courses, blog  
- Existing visual system (Archivo / Space Grotesk, light tech look) — refine, don’t replace with a faculty-template clone  
- Two-lane story: research spine + teaching/products without pretending they are the same job  

---

## Target homepage story (your voice — draft)

Use as content outline; polish wording when implementing.

### Hero
- **Name:** ASVN Phanindra  
- **Role line:** Faculty / educator · [institution] · working on ISAC, O-RAN, and AI  
- **Focus line:** *ISAC, O-RAN, and AI — research that becomes tools and teaching.*  
- Optional secondary: one honest line that teaching undergrad Python is part of the day job; research is the spine  

### About (3 short paragraphs)
1. Who you are now + niche (ISAC / O-RAN / AI)  
2. Path: academia + industry (truthful, brief)  
3. What this site is: survey/research notes, simulators/tools, selected teaching products  

### Focus areas (buckets — not his topics)
Suggested labels (edit to match reality):
1. **ISAC / sensing–communication** — system-level thinking; simulator work  
2. **O-RAN + AI** — intelligent radio / open RAN direction  
3. **Survey & literature** — mapping the field (current paper track)  
4. **Teaching & tools** — Python courses, classroom software (job lane; clearly labeled)  

Under each: 2–3 sentences + links to *your* repos/products (e.g. 5G ISAC simulator, Teachers Toolkit, Python course).

### Recent
Only real items, e.g.:
- Survey paper in progress (ISAC / O-RAN / AI literature)  
- Tool or teaching aid shipped (when true)  
- Course / camp updates  

### Selected work
- Split or tag: **Research / simulators** vs **Teaching products**  
- Feature spine-aligned items first (ISAC simulator), then teaching tools  

### Contact
- Email, GitHub, LinkedIn (whatever you use)  
- One clear CTA: collaborate / read survey notes / try a tool  

---

## Information architecture

| Page | Job |
|------|-----|
| **Home** | Identity + bio + focus + recent + contact (single scroll, proof-first) |
| **Research** (new or rename) | Survey, ISAC/O-RAN notes, simulator — spine home |
| **Products** | Keep; tag research vs teaching |
| **Blog** | Short notes; prefer niche-aligned posts over time |
| **About** | Longer bio + two-lane explanation (job vs research) |

Nav suggestion: `Home · Research · Products · Blog · About`  
(Contact can live on Home footer + About.)

---

## Design direction (yours, not a clone)

- Keep current light, clean system; tighten hierarchy like a faculty+builder page  
- Hero: name dominant, one focus line, short support, one CTA group  
- Sections: one purpose each; less “product grid first,” more “who → focus → proof → products”  
- Cards only where they help click/open a tool  
- Motion: keep subtle reveals; respect `prefers-reduced-motion`  
- Mobile-first readability  

**Avoid:** copying his quote block, award wall layout, or startup-funding showcase style unless you have equivalent real items.

---

## Content you must collect before build

Fill before coding copy:

- [ ] Exact current title / institution  
- [ ] 3–4 sentence bio (academia + industry, honest)  
- [ ] Final focus-area list (3–5)  
- [ ] 3–5 “Recent” bullets (only true)  
- [ ] Preferred contact links  
- [ ] Which products are **spine** vs **teaching lane**  

---

## Implementation phases (when you say go)

### Phase 0 — Content lock
- Finalize hero line, bio, focus buckets, recent list  
- Reorder `products.ts`: spine items first; optional `lane: 'research' | 'teaching'`  

### Phase 1 — Home restructure
- Reorder sections: Hero → About blurb → Focus areas → Recent → Selected work → Contact  
- Soften products-first homepage; products remain but after identity/proof  

### Phase 2 — About + Research
- Expand About with two-lane story  
- Add Research page (survey status + ISAC simulator + reading notes)  

### Phase 3 — Polish
- Meta titles/descriptions, empty states, mobile pass  
- Ensure featured work matches niche (don’t lead with only Python course if spine is ISAC)  

### Phase 4 — Optional later
- Publications list when survey/papers exist  
- CV / PDF link  
- Teaching page separate if Home gets crowded  

---

## Success check

A stranger should answer in 10 seconds:
1. Who is this?  
2. What is the niche? → **ISAC · O-RAN · AI**  
3. What can I open next? → research note / simulator / contact  

Teaching Python should be visible as **work**, not as the **brand**.

---

## Explicit non-goals

- Pixel-perfect or CSS clone of prathosh.in  
- Fake awards, startups, or appointments  
- Dropping products/blog entirely  
- Forcing the day job to look like a wireless faculty page  

---

## Related local context

- Career spine notes live in Logseq (only when you ask to sync)  
- Niche locked: ISAC · O-RAN · AI  
- Paper track: survey in progress  
- Job lane: undergrad Python — soft bridges only (e.g. dB teaching aids)  
