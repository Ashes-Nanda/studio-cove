
# Plan — Studio Cove content + branding + Notion waitlist

## 1. Brand voice & identity
- Replace text wordmark in `Nav` and `Footer` with the uploaded teal **Cove** logo (copied to `src/assets/cove-logo.png`, imported as ES6 module). Nav uses `mix-blend-difference` today — swap to plain logo image so the teal reads correctly; show inverted/white variant over dark hero if needed.
- Tagline: **"Making Waves"** (signature line). Definition lead: *"Studio Cove (noun): making your brand grow like a tree in a concrete jungle."*
- Footer email: `studiocove.info@gmail.com`. Instagram: `https://www.instagram.com/studiocove_`. Est. 2023.
- Closing CTA across hero / waitlist / footer: **"Let's make waves."**
- Update `__root.tsx` SEO (title, description, og) to Studio Cove voice.

## 2. Services (4 pillars, replacing 8 generic tiles)
Drives `/services` page and homepage services block:
- **Branding** — brand name, logo, brand identity, packaging
- **Social Media** — strategy, management, content, design, community
- **Production** — photography, videography, studio, portfolio, outdoor
- **Campaigns** — innovative campaigns, moment & meme marketing

## 3. Project roster (replaces 4 placeholders)
Rewrite `src/data/projects.ts` with real clients from the deck.

**Featured case studies** (hero + gallery pages): Kirik Dosa Chips, Dysko, House of Kalpa, Chinita Real Mexican Food, Fika.

**Archive grid** (image + name + category + scope, no individual page): Candice's Gourmet Sandwiches, Candles Brewhouse, The Founder's Brewery, Tentworks Interactive, Toscano, Fresh Pressery, Lavender, Muru Muru, Svashudhi, Dragon Draws, Worqfit, Kari Coffee, Farm Sourced, Da'Belly, Trysquare, Raj Diamonds.

Each entry: `name`, `category` (FMCG / AI Fashion / Art Gallery / F&B / Brewery / Gaming / Wellness / Branding / Flooring / Jewelry), `scope[]`, short blurb, image refs.

## 4. Imagery
Copy ~12 frames from `parsed-documents://` into `src/assets/`:
- Kirik Dosa: street, squad tee, auto-rickshaw, "in this economy" poster
- Dysko: mirror room, immersive AI shopping still
- House of Kalpa: Kalpa Shah portraits, bird sculpture
- Chinita: chef, burrito bowl, drink
- Fika: illustrated salad post
- One hero each for Candice's, Candles Brewhouse, Muru Muru, Svashudhi
Generated hero / BTS images stay as atmospheric framing.

Fika case study renders the deck's actual brand tokens (White Linen `#EEECE3`, Oak `#CDC4B3`) as inline swatches.

## 5. Waitlist → Notion
Rebuild `/waitlist` form with fields (all required except where noted):
- **Name** (text, required)
- **Number** (tel, required) — basic phone format validation
- **Company Name** (text, required)
- **Company Instagram Handle** (text, required) — strip leading `@`
- **Service** (select, required) — options: Branding, Social Media, Production, Campaigns, Multiple / Not Sure

Validation via `zod` on client; success → confirmation state with "Let's make waves" message.

**Submission flow:**
- Frontend posts to a TanStack server function `submitWaitlist` (in `src/lib/waitlist.functions.ts`).
- Server fn re-validates with zod and POSTs a page to a Notion database via the Lovable Notion connector gateway (`POST /v1/pages` with `NOTION_API_KEY` + `LOVABLE_API_KEY` headers).
- Notion database ID is read from env `NOTION_WAITLIST_DATABASE_ID`.
- Until the user provides the Notion DB link, the server fn stores submissions in memory and returns success, with a clear console warning — so the form is usable today and goes live with Notion the moment the DB ID and connector are added. The user said they'll send the link later; I won't block on it.

When the user provides the Notion DB link, I'll:
1. Trigger the Notion connector (`mcp_knowledge--connect notion`) so `NOTION_API_KEY` is set.
2. Add `NOTION_WAITLIST_DATABASE_ID` via the secrets tool.
3. Map form fields to Notion properties (Name=title, Number/Company Name/Instagram=rich_text, Service=select).

## Files touched
- `src/assets/cove-logo.png` + ~12 deck images (new)
- `src/components/Nav.tsx`, `src/components/Footer.tsx` — logo, Instagram URL, email
- `src/data/projects.ts` — full rewrite
- `src/routes/index.tsx` — hero, manifesto, services, featured work
- `src/routes/services.tsx` — 4 pillars
- `src/routes/studio.tsx` — manifesto in Studio Cove voice
- `src/routes/work.tsx` + `work.$slug.tsx` — featured + archive layout
- `src/routes/waitlist.tsx` — new form + zod + server fn call
- `src/lib/waitlist.functions.ts` — new `submitWaitlist` server function (Notion-ready, in-memory until DB ID arrives)
- `src/routes/__root.tsx` — SEO

## Out of scope (this pass)
- No design system / typography changes.
- No team/about-people section (no data yet).
- No backend rate-limiting or captcha on the form.

---

## What I still need from you to take this end-to-end

1. **Notion waitlist database link** — share the database URL once ready; I'll wire the connector + secret and flip the server fn from in-memory to live Notion writes.
2. **Founder / team** — names, roles, short bios, headshots (no "about the people" section exists yet).
3. **Per-project depth** — for the 5 featured case studies: 2–3 sentence brief + 1–2 result metrics (follower growth, reach, engagement lift). Deck only ships visuals.
4. **High-res project imagery** — deck PDFs are compressed (~800px). For full-bleed heroes we want the originals (shoot stills, packaging photography, campaign reels).
5. **Optional video reels** — short BTS or campaign films (MP4) would massively elevate the hero and case studies.
6. **Other social handles** — LinkedIn, Behance, TikTok if you want them in the footer.
7. **Custom domain** — to point at `studio-cove-world.lovable.app` when ready.
