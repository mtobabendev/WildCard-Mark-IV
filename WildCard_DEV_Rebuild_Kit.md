# WildCard DEV Rebuild Kit

## Master Rebuild Brief

WILDCARD DEV — MASTER REBUILD BRIEF  
Source-of-truth repo: mtobabendev/WildCard-Mark-IV  
Public GitHub repo: use the repo as the authoritative asset/path reference.  
Current branch/baseline: main.  
Current project includes a root index.html plus existing asset folders and supporting files already in the repo. Do not invent replacement file paths when existing assets can be reused.

### NON-NEGOTIABLE EXECUTION RULES
1. FULL FILE REPLACEMENTS ONLY.  
   - No patches.  
   - No “change these few lines.”  
   - No partial CSS/JS snippets unless explicitly requested for review only.  
   - Default output must be one complete replacement index.html.

2. PRESERVE THE ARCHITECTURE.  
   - Single-page site.  
   - Fake-page / section-based navigation must remain intact.  
   - No frameworks.  
   - No build tools.  
   - No new external dependencies.  
   - Keep the site self-contained.

3. CODE ORGANIZATION RULES.  
   - One main index.html file.  
   - CSS stays in a single <style> block in <head>.  
   - JavaScript stays inline in the HTML, placed near affected elements or clearly labeled centralized control blocks where appropriate.  
   - Keep code neatly organized and commented by section.  
   - Prefer clearly labeled sections like:
     - /* Base */
     - /* Layout */
     - /* Identity Strip */
     - /* Portfolio / Holo Panels */
     - /* Penny Presence */
     - /* Contact / Penny Office */
     - /* Watch Experience */
     - /* Responsive */

4. MOBILE-FIRST AND SMARTWATCH-FIRST ARE MANDATORY.  
   - Desktop may be flashier, but no critical function can exist only on desktop.  
   - Phone and watch experiences must remain usable, intentional, and polished.  
   - Smartwatch UX is a first-class differentiator, not an afterthought.

5. PENNY IS THE HEART OF THE BRAND.  
   - Penny must never feel cheap, broken, random, or tacked on.  
   - Penny is the premium AI/executive-assistant presence of the brand.  
   - Her tone is confident, playful, polished, and subtly seductive while staying professional.  
   - Penny’s presentation must feel elevated and deliberate.  
   - Pink is Penny’s dominant signature presence.  
   - Blue/purple is the wider system glow / base interface language.

6. DO NOT DESTROY STABLE SYSTEMS TO ADD POLISH.  
   - Stability first.  
   - Layout second.  
   - Function third.  
   - Visual polish fourth.  
   - Experimental features last.

7. NEVER REBUILD FROM SCRATCH UNLESS EXPLICITLY REQUESTED.  
   - Start from the current repo/index.html.  
   - Preserve working sections wherever possible.  
   - Reorganize cleanly only when necessary, but still deliver one full replacement file.

### PROJECT IDENTITY
WildCard DEV is meant to feel like a premium holographic interface experience:
- Tony Stark / JARVIS-inspired energy
- Premium glass-panel, glow, HUD, holo-panel visual language
- Blue/purple system energy
- Penny’s pink presence as the emotional/intelligent core
- The site should feel memorable, interactive, and cinematic without becoming cluttered or unstable

### PRIMARY PRODUCT GOALS
1. A stable flagship WildCard DEV website
2. Strong responsive behavior on desktop, phone, and watch
3. Penny integrated as a premium brand presence
4. Holographic portfolio presentation
5. Contact experience that feels high-end and intentional
6. Clean foundation for future add-ons like avatars, QR flows, watch features, and Stripe-based payment/contact flows

### CURRENT SOURCE-OF-TRUTH / ASSET RULE
Use the GitHub repo as the first reference for:
- actual folder names
- current file names
- existing media paths
- current index.html structure

Do not assume assets are missing if they may already exist in the repo.  
Do not rename paths casually.  
Do not create duplicate structures unless explicitly requested.

### IMPORTANT CONTEXT TO PRESERVE
- User strongly prefers safe full-file replacements over iterative patching.
- User has repeatedly confirmed patching is unacceptable because it has repeatedly broken the site.
- The site’s fake navigation and single-file architecture must be preserved.
- Penny’s office/contact area is one of the most important branded areas.
- The watch experience is strategically important and should remain part of the long-term plan.
- Stripe is the preferred card processor for future payment-related flows.
- The repo is linked to Vercel deployment, so repo pushes can affect the live site. Treat changes carefully.

### DEVELOPMENT PHASE ORDER
Always work in this order unless the user explicitly changes priorities:

#### PHASE 1 — STABLE SKELETON
- Preserve or restore core page architecture
- Preserve fake-page nav
- Make section switching stable
- Ensure the site loads without layout collapse

#### PHASE 2 — RESPONSIVE FOUNDATION
- Rebuild or verify mobile-first layout
- Rebuild or verify smartwatch-safe behavior
- Ensure no critical section breaks on small screens
- Lock this before moving on

#### PHASE 3 — PENNY CORE PRESENCE
- Re-establish Penny’s office/contact presentation
- Maintain premium pink-forward branded feel
- Keep her visually distinct from the base blue/purple system

#### PHASE 4 — IDENTITY / TEAM STRIP
- Restore Matt / Space Beth / identity presentation cleanly
- Avoid layout drift
- Keep this structurally simple and reliable before adding visual flair

#### PHASE 5 — PORTFOLIO / HOLO PANELS
- Reintroduce or stabilize holo-panel system
- Panels must feel premium and intentional
- Use existing media assets where available
- Preserve Penny-specific differentiation

#### PHASE 6 — CONTACT / INTERACTION
- Ensure mailto/tel/text/social/contact interactions work
- Preserve or improve the polished interaction model
- Avoid gimmicks that risk stability

#### PHASE 7 — WATCH / FUTURE EXPERIMENTS
- Watch-specific enhancements
- QR flows
- avatar/video enhancements
- advanced effects
These are last, not first.

### RESPONSE FORMAT RULES FOR FUTURE WINDOWS
Unless the user explicitly asks otherwise:
- First inspect the current index.html and repo structure.
- Then return exactly one complete replacement index.html.
- Do not return partial patches.
- Do not suggest “just change these blocks” unless the user explicitly asks for a patch.
- Explain major decisions briefly, but prioritize usable code.

### QUALITY BAR
The site should feel:
- premium
- holographic
- controlled
- brand-consistent
- mobile/watch intentional
- not fragile
- not patchy
- not generic

### WHAT TO CUT FIRST IF SCOPE MUST BE REDUCED
Cut in this order:
1. experimental avatar generation
2. non-essential cinematic effects
3. extra decorative animations
4. advanced hover flourishes

Never cut:
- responsive behavior
- navigation
- Penny’s core presence
- contact usability
- basic portfolio clarity

### FIRST ACTION FOR ANY NEW WINDOW
1. Read this brief.
2. Inspect the current repo/index.html.
3. Identify current phase.
4. Return one full replacement index.html for that phase only.

---

## Phase 1 Rebuild Prompt — Stable Skeleton

Use the master rebuild brief above as binding instructions.

CURRENT GOAL  
Return exactly one COMPLETE replacement `index.html` that rebuilds the site’s stable skeleton only.

THIS IS PHASE 1 ONLY.  
Do not chase final polish yet.  
Do not add speculative extras.  
Do not patch.  
Do not return fragments.

PRIMARY OBJECTIVE  
Produce a clean, stable, self-contained `index.html` that restores the core WildCard DEV structure and makes the site safe to build on again.

PHASE 1 SUCCESS CRITERIA
1. Single-page architecture preserved
2. Fake-page / section-based navigation preserved
3. CSS in one `<style>` block in `<head>`
4. Inline JS only
5. Layout stable on desktop, phone, and very small screens
6. No broken grids or collapsed sections
7. Penny still exists as a clear branded presence
8. Contact-related navigation/sections still exist structurally
9. Portfolio / holo panel section can be simplified structurally for now, but must remain present and ready for later enhancement
10. Output must be one full replacement `index.html`

WHAT TO PRIORITIZE
1. Structural stability
2. Responsive foundation
3. Section organization
4. Preserving brand language
5. Code clarity and maintainability

WHAT TO INCLUDE IN THIS PHASE
- A stable overall page shell
- A working fake-navigation system
- Clearly separated sections/articles for:
  - About
  - Resume / Experience
  - Portfolio
  - Contact / Penny Office
  - Watch Experience placeholder or simplified section if currently part of architecture
- A stable sidebar / identity area if appropriate to the architecture
- Penny’s presence visually preserved, even if simplified
- Existing asset references reused where sensible from the current repo/index.html

WHAT TO AVOID IN THIS PHASE
- No risky experimental animation systems
- No heavy JS flourishes
- No avatar generation work
- No fragile micro-interactions
- No complex hover logic unless already safe
- No patch instructions
- No partial code output

RESPONSIVE REQUIREMENTS
This phase must be mobile-first and smartwatch-safe in foundation.
That means:
- no overlapping identity cards
- no unusable tiny controls
- no layout assumptions that only work on desktop
- no critical content hidden on small screens
- no broken nav on phone
- clean stacking behavior
- desktop can remain premium-looking, but small screens must remain fully usable

PENNY REQUIREMENTS FOR PHASE 1
- Penny must remain visibly present in the site
- Penny must not feel generic or removed
- Her section can be simplified, but should still feel distinct and pink-forward
- Preserve the separation between Penny pink and the base blue/purple system

PORTFOLIO / HOLO PANEL REQUIREMENTS FOR PHASE 1
- Keep the portfolio / holo-panel area in the document
- It may be structurally simplified in this phase
- Do not fully remove it
- Build it as a stable container ready for later restoration of richer holo behavior

CODE ORGANIZATION REQUIREMENTS
Organize the CSS and HTML clearly with labeled sections such as:
- Base
- Layout
- Sidebar / Identity
- Navigation
- Articles / Sections
- Penny Presence
- Portfolio / Holo Stage
- Contact
- Watch
- Responsive

DELIVERABLE FORMAT
Return:
1. A short note explaining the structural strategy in a few sentences
2. Then exactly one full replacement `index.html`

IMPORTANT
Do not ask clarifying questions unless absolutely unavoidable.
Make the best safe architectural decisions from the master brief and current repo/index.html.
The goal is to restore a dependable foundation that future phases can safely build on.

---

## Phase 2 Rebuild Prompt — Responsive Refinement

Use the master rebuild brief above as binding instructions.
Assume Phase 1 stable skeleton has already been completed.

CURRENT GOAL
Return exactly one COMPLETE replacement `index.html` that preserves the stable skeleton and upgrades the responsive behavior across desktop, phone, and smartwatch-sized screens.

THIS IS PHASE 2 ONLY.
Do not chase final visual polish yet.
Do not add speculative extras.
Do not patch.
Do not return fragments.

PRIMARY OBJECTIVE
Make the site feel intentionally designed on:
- desktop
- standard phones
- very small phone widths
- smartwatch-like tiny viewports

PHASE 2 SUCCESS CRITERIA
1. No overlapping or collapsing layout regions
2. Navigation remains usable on small screens
3. Identity / sidebar area behaves intentionally on all sizes
4. Contact / Penny section remains usable on small screens
5. Portfolio / holo area remains structurally intact on small screens
6. Tap targets remain usable
7. Typography and spacing scale sensibly
8. Desktop still feels premium without relying on desktop-only critical functionality
9. Output must be one full replacement `index.html`

WHAT TO PRIORITIZE
1. Layout integrity at all widths
2. Readability
3. Touch usability
4. Section stacking/order
5. Preserving brand structure

RESPONSIVE REQUIREMENTS
The updated `index.html` must include robust responsive behavior for:
- large desktop
- laptop
- tablet
- standard phone
- narrow phone
- smartwatch-like narrow widths

The design should:
- stack cleanly
- avoid horizontal overflow
- preserve access to all key content
- maintain clear hierarchy
- keep navigation available
- avoid tiny unreadable text
- avoid clipped videos/images/cards
- keep controls thumb-friendly

SMARTWATCH-SAFE FOUNDATION
This phase does not need to complete the full watch experience, but it must be safe for future watch enhancement.
That means:
- no broken assumptions below very small widths
- no mandatory hover-only interaction
- no inaccessible content hidden behind desktop interactions
- no oversized fixed elements that destroy small-screen usability

IDENTITY / SIDEBAR REQUIREMENTS
- Preserve Matt / Space Beth / brand identity structure
- Keep this area clean and stable
- It may transform from sidebar to top stack on smaller screens
- Avoid fragile grid tricks that break below tablet widths

NAVIGATION REQUIREMENTS
- Fake-page navigation must remain intact
- Navigation must be usable on phones
- It may simplify visually on smaller screens, but must remain branded and functional

PENNY REQUIREMENTS
- Penny must remain clearly present
- Her presence should survive responsiveness without feeling shoved aside
- Pink-forward distinction must remain intact
- Penny’s section should remain one of the strongest-looking areas even before later polish

PORTFOLIO / HOLO REQUIREMENTS
- Keep the portfolio/holo container stable
- Ensure it does not break the page on smaller screens
- Simplify presentation if needed, but do not remove the section

WATCH SECTION REQUIREMENTS
- Preserve the watch-related area structurally if present
- It can remain simplified, but must not break layout
- Keep it ready for a later dedicated watch-focused phase

CODE ORGANIZATION REQUIREMENTS
Keep CSS clearly organized with responsive sections such as:
- Base
- Layout
- Navigation
- Identity
- Content Sections
- Penny Presence
- Portfolio / Holo
- Contact
- Watch
- Responsive 1024
- Responsive 768
- Responsive 480
- Responsive 390 or smaller if useful

DELIVERABLE FORMAT
Return:
1. A short note explaining the responsive strategy
2. Then exactly one full replacement `index.html`

IMPORTANT
Do not ask clarifying questions unless absolutely unavoidable.
Preserve Phase 1 stability while improving responsive behavior.
This phase is about resilience and usability, not final effects.

---

## Phase 3 Rebuild Prompt — Penny Core Rebuild

Use the master rebuild brief above as binding instructions.
Assume Phase 1 stable skeleton and Phase 2 responsive refinement have already been completed.

CURRENT GOAL
Return exactly one COMPLETE replacement `index.html` that preserves stability/responsiveness and rebuilds Penny as the premium branded core presence of the site.

THIS IS PHASE 3 ONLY.
Do not chase every advanced interaction yet.
Do not patch.
Do not return fragments.

PRIMARY OBJECTIVE
Make Penny feel intentional, premium, holographic, and central to the WildCard DEV identity without destabilizing the site.

PHASE 3 SUCCESS CRITERIA
1. Penny is clearly the emotional/intelligent center of the brand
2. Penny’s visual treatment is distinct from the base site system
3. Penny’s area feels premium rather than generic
4. Penny remains stable across desktop and small screens
5. Pink-forward identity is preserved
6. The Contact / Penny Office area feels meaningfully elevated
7. Output must be one full replacement `index.html`

WHAT TO PRIORITIZE
1. Penny’s branded presence
2. Stability
3. Readability and tone
4. Strong visual distinction
5. Responsive integrity

PENNY DESIGN REQUIREMENTS
Penny should feel like:
- a premium executive-assistant intelligence
- controlled, confident, playful, polished
- subtly seductive but still professional
- emotionally distinct from the neutral/base system

Use:
- pink-forward glow language
- premium glass / holographic styling
- intentional framing
- clean typography
- elegant accent motion only if safe

Avoid:
- cheap gimmicks
- cluttered effects
- unstable animations
- anything that makes Penny feel random or tacky

PENNY OFFICE / CONTACT REQUIREMENTS
This area should become one of the strongest sections of the page.
It should include:
- a clearly defined Penny-branded panel or office presentation
- branded copy/tone aligned with the project brief
- stable media handling if existing Penny video/image assets are already in repo
- contact pathways that still feel useful, not purely decorative

PENNY VS SYSTEM LANGUAGE
Maintain separation:
- Base system = blue/purple
- Penny = pink-dominant presence

Penny should feel like she is operating inside the system, but clearly special within it.

INTERACTION REQUIREMENTS
This phase may include only safe interaction improvements such as:
- subtle glow responses
- stable hover/focus states
- polished buttons/cards
- gentle shimmer or sweep if safe

Do NOT add fragile heavy scripting.
Do NOT add advanced experimental personality logic unless it is already proven safe.

RESPONSIVE REQUIREMENTS
Penny’s presence must still feel premium on:
- desktop
- phone
- very small screens

Do not allow Penny to become:
- cramped
- visually flattened
- crowded
- hard to read
- desktop-only impressive

ASSET REQUIREMENTS
Use existing repo assets where appropriate.
Do not invent unnecessary new paths.
If Penny-specific branded media exists in the repo, use it carefully and consistently.

CODE ORGANIZATION REQUIREMENTS
Clearly label Penny-related sections, for example:
- /* Penny Presence */
- /* Penny Office */
- /* Penny Controls */
- /* Penny Responsive */

DELIVERABLE FORMAT
Return:
1. A short note explaining the Penny rebuild strategy
2. Then exactly one full replacement `index.html`

IMPORTANT
Do not destabilize the site to make Penny more dramatic.
Penny must feel premium and central, but the page must remain dependable.

---

## Phase 4 Rebuild Prompt — Holo Panels Restoration

Use the master rebuild brief above as binding instructions.
Assume Phase 1 stable skeleton, Phase 2 responsive refinement, and Phase 3 Penny core rebuild have already been completed.

CURRENT GOAL
Return exactly one COMPLETE replacement `index.html` that preserves stability and restores the portfolio / holo-panel experience as a premium branded system feature.

THIS IS PHASE 4 ONLY.
Do not patch.
Do not return fragments.
Do not destabilize earlier phases.

PRIMARY OBJECTIVE
Rebuild the holo panel / portfolio presentation so it feels cinematic, premium, and intentional while remaining structurally safe and responsive.

PHASE 4 SUCCESS CRITERIA
1. Portfolio / holo section feels like part of the WildCard DEV identity
2. Holo panels are visually strong and system-consistent
3. Penny-related differentiation remains intact
4. Layout remains stable on desktop and small screens
5. Existing media assets are reused where appropriate
6. The section is impressive without becoming fragile
7. Output must be one full replacement `index.html`

WHAT TO PRIORITIZE
1. Stable presentation
2. Strong holographic visual language
3. Brand consistency
4. Safe motion/interaction
5. Responsive containment

HOLO PANEL REQUIREMENTS
The holo panel system should feel:
- Tony Stark / JARVIS inspired
- glassy
- glowing
- layered
- high-tech
- premium

Use:
- blue/purple base glow language
- panel borders and glass treatment
- subtle reflections / sweeps / overlays if safe
- branded tags or micro-labels if helpful
- structured visual hierarchy

Avoid:
- clutter
- unreadable overlays
- unstable 3D tricks unless already safe
- excessive motion
- anything that breaks mobile usability

MEDIA REQUIREMENTS
Use repo assets already available where sensible, including existing holo-related media/video/image assets.
Do not invent new asset paths unless explicitly necessary.
Preserve any special Penny panel distinction using pink-forward treatment.

PENNY PANEL REQUIREMENTS
If a Penny-specific holo panel exists or is part of the concept:
- keep it visually distinct
- keep pink dominance for Penny
- do not let Penny’s panel blend into the base system panels

RESPONSIVE REQUIREMENTS
The holo section must remain contained and intentional on:
- desktop
- tablet
- phone
- very small screens

It is acceptable to simplify interaction or layout density on small screens, but not to break the section or remove it entirely.

INTERACTION REQUIREMENTS
Allowed if safe:
- gentle hover emphasis
- subtle panel shimmer
- controlled glow intensification
- stable media presentation
- safe carousel/spin logic only if already dependable

Not allowed if fragile:
- overcomplicated JS
- layout-breaking transforms
- interactions that only work on hover
- effects that wreck small-screen usability

CODE ORGANIZATION REQUIREMENTS
Clearly label sections like:
- /* Portfolio / Holo Stage */
- /* Holo Panels */
- /* Holo Panel Media */
- /* Holo Responsive */

DELIVERABLE FORMAT
Return:
1. A short note explaining the holo restoration strategy
2. Then exactly one full replacement `index.html`

IMPORTANT
Do not sacrifice reliability for spectacle.
The holo section should feel premium, not experimental in a dangerous way.

---

## Phase 5 Rebuild Prompt — Contact and Interaction Refinement

Use the master rebuild brief above as binding instructions.
Assume Phases 1 through 4 have already been completed.

CURRENT GOAL
Return exactly one COMPLETE replacement `index.html` that preserves the rebuilt foundation and refines the contact pathways and core interactions so they feel polished, clear, and brand-consistent.

THIS IS PHASE 5 ONLY.
Do not patch.
Do not return fragments.

PRIMARY OBJECTIVE
Make contact flows and core interaction states feel intentional, premium, and easy to use across devices.

PHASE 5 SUCCESS CRITERIA
1. Contact links and pathways are clear and usable
2. Mail, phone, text, and social actions are stable
3. Interaction states feel polished rather than generic
4. The site remains responsive and stable
5. Penny/contact areas feel especially intentional
6. Output must be one full replacement `index.html`

WHAT TO PRIORITIZE
1. Usability
2. Clarity
3. Polished interaction feedback
4. Maintaining brand tone
5. Small-screen friendliness

CONTACT REQUIREMENTS
Preserve and refine:
- email actions
- phone actions
- text actions
- social/profile links
- contact section clarity

The contact area should feel:
- premium
- friction-light
- brand-aware
- easy to use on phone
- not cluttered

INTERACTION REQUIREMENTS
Add or refine only safe interactions such as:
- stronger focus states
- polished hover states
- subtle glow/fill responses
- button/card feedback
- visually consistent interactive language across sections

Avoid:
- complex scripting
- unstable drawers/modals unless already proven safe
- interactions that require hover to function
- small-screen-hostile gimmicks

PENNY CONTACT REQUIREMENTS
Penny’s portion of contact behavior should feel:
- distinct
- elevated
- pink-forward
- controlled and deliberate

It should not become cheesy or overloaded.

RESPONSIVE REQUIREMENTS
Interaction and contact controls must remain usable on:
- desktop
- phone
- very small screens

This includes:
- tap target sizing
- spacing
- readable text
- no overlap/cutoff

CODE ORGANIZATION REQUIREMENTS
Clearly label sections such as:
- /* Contact */
- /* Contact Actions */
- /* Social Links */
- /* Interaction States */
- /* Penny Contact */

DELIVERABLE FORMAT
Return:
1. A short note explaining the interaction/contact refinement strategy
2. Then exactly one full replacement `index.html`

IMPORTANT
This phase is about making the site feel professionally finished in use, not about adding risky experimental systems.

---

## Phase 6 Rebuild Prompt — Watch and Future-Facing Enhancements

Use the master rebuild brief above as binding instructions.
Assume Phases 1 through 5 have already been completed.

CURRENT GOAL
Return exactly one COMPLETE replacement `index.html` that preserves the stable flagship site and improves the watch-related and future-facing experience areas without destabilizing the rest of the build.

THIS IS PHASE 6 ONLY.
Do not patch.
Do not return fragments.

PRIMARY OBJECTIVE
Strengthen the smartwatch-aware / future-facing parts of the site so they feel intentional, differentiated, and aligned with the WildCard DEV identity.

PHASE 6 SUCCESS CRITERIA
1. Watch-related section or experience is clearer and more intentional
2. Small-screen philosophy is visibly supported by the build
3. Future-facing brand ideas are present without destabilizing the site
4. The site remains stable and responsive
5. Output must be one full replacement `index.html`

WHAT TO PRIORITIZE
1. Stability
2. Watch-small-screen intentionality
3. Brand differentiation
4. Clean presentation
5. Future extensibility

WATCH EXPERIENCE REQUIREMENTS
The watch-related section should:
- remain part of the architecture
- feel purposeful, not random
- support the project’s “watch-first differentiator” positioning
- stay usable on small screens
- be visually coherent with Penny and the wider system

Allowed in this phase:
- clearer watch shell presentation
- better framing/copy for watch UX
- safer watch-specific layout improvements
- preserving room for future QR/avatar/media features

Avoid:
- risky complex watch scripting
- overbuilt flows that are not stable yet
- anything that breaks the main site

FUTURE-FACING ENHANCEMENT REQUIREMENTS
This phase may safely prepare space for:
- QR flows
- avatar/video concepts
- advanced Penny interactions
- Stripe/payment-related future integration points

However, these should be treated as:
- placeholders
- structured hooks
- clean containers
not unstable production features unless already proven safe

RESPONSIVE REQUIREMENTS
Very small widths must still behave intentionally.
This phase should reinforce the claim that WildCard DEV designs beyond standard desktop assumptions.

CODE ORGANIZATION REQUIREMENTS
Clearly label sections such as:
- /* Watch Experience */
- /* Watch Shell */
- /* Future Hooks */
- /* Small Screen Enhancements */

DELIVERABLE FORMAT
Return:
1. A short note explaining the watch/future enhancement strategy
2. Then exactly one full replacement `index.html`

IMPORTANT
Do not let future-facing ambition destabilize the now-stable site.
This phase should expand the site’s identity, not reintroduce fragility.

---

## Use Order

Paste in this order for each new rebuild session:
1. Master Rebuild Brief
2. Current Phase Prompt
3. Current `index.html`
4. Repo link

And say:
“Follow the master brief. Use the repo and current index.html as source of truth. Return exactly one full replacement index.html for this phase.”

Recommended rebuild order:
1. Phase 1 — Stable skeleton
2. Phase 2 — Responsive refinement
3. Phase 3 — Penny core rebuild
4. Phase 4 — Holo panels restoration
5. Phase 5 — Contact and interaction refinement
6. Phase 6 — Watch and future-facing enhancements

After any version that works, immediately commit:
git add .
git commit -m "Phase X working baseline"
git push origin main
