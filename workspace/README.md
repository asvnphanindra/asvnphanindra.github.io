# Workspace (site copy I/O)

Inbox → content card → outbox. Do not put live site pages here.

**Facts → card → site loop:** see [`PIPELINE.md`](PIPELINE.md). Cards live in [`content_cards/`](content_cards/).  
Design intent: [`docs/website-redesign-plan.md`](../docs/website-redesign-plan.md).

## Folders

| Path | Who writes | Purpose |
|------|------------|---------|
| `inbox/` | You | Facts for the agent to **read** (bio, role, links, recent wins) |
| `content_cards/` | Cursor, then you validate | Section copy bridge (not the live page) |
| `outbox/` | Cursor | Processed drafts before a site sync |
| `ledger.csv` | Both (agent appends on outbox write) | Who / when / source / status |

## Filename convention

```text
YYYYMMDD_short-slug_by-human.ext
YYYYMMDD_short-slug_by-cursor.ext
```

## Flow

1. Drop facts into `inbox/` with a `_by-human` name (or state them in chat).
2. Ask the agent to draft that section’s content card.
3. You mark blocks `OK` or `FIX`.
4. Agent may write a pre-sync draft to `outbox/` and append `ledger.csv`.
5. Sync into `src/**` **only when you ask**.
