# FTP.ai Comprehensive Marketing Audit

**Date:** February 10, 2026
**Site:** https://mojoclouds.github.io/ftp-ai-website/
**Entity:** mojoclouds, LLC d/b/a FTP.ai
**Stage:** Pre-launch (product not yet live)
**Goals:** Email list building (50%) + Brand awareness (50%)

---

## EXECUTIVE SUMMARY

FTP.ai has a strong visual foundation -- the dark data-driven aesthetic, terminal animation, and overall design quality are well above average for this market segment. The core positioning around "fade the public" contrarian ML betting is genuinely differentiated. However, the site is currently functioning as a brochure rather than a conversion engine. The single biggest problem is that the email signup form does not work at all (no Mailchimp URL configured), meaning every visitor who tries to subscribe is silently lost. Beyond that critical fix, the site lacks the conversion optimization, social proof, and content depth needed to turn traffic into subscribers and subscribers into future customers.

This audit identifies 47 specific recommendations across 8 categories, prioritized by impact and effort.

---

## 1. CONVERSION OPTIMIZATION

### Critical Issue: The Email Form Does Not Work
**Priority: CRITICAL / Effort: Low**

The form in `src/js/main.js` (line 81) has `MAILCHIMP_URL = ''` -- an empty string. When a user submits their email, the code checks `if (MAILCHIMP_URL)`, which evaluates to false, so the email is never sent anywhere. The button still changes to "Noted!" giving the user the false impression they signed up. This is the single most damaging issue on the entire site. Every visitor who attempts to sign up is lost permanently.

**Fix:** Set up Mailchimp (or any ESP -- ConvertKit, Beehiiv, Buttondown), get the form action URL, and populate that variable. This should take under 30 minutes.

### 1.1 Email Signup Form Appears on Only ONE Page
**Priority: HIGH / Effort: Low**

The email signup form exists only on `pricing.html`. Every other page on the site has CTA buttons that say "Get Notified" or "Coming Soon" that link to the pricing page, adding an unnecessary click barrier. For a pre-launch site whose primary goal is email collection, the signup form should be present on every single page.

**Recommendation:**
- Add an inline email signup form to the bottom CTA section of every page (home, how-it-works, sports, track-record, about, blog posts)
- Replace the `coming-soon-block` sections on each page with a version that includes the email form directly, not just a link to pricing
- Consider adding a sticky bottom bar or exit-intent popup with the email form

**Expected Impact:** 3-5x increase in signup conversion rate by removing the extra click to pricing.html

### 1.2 Hero CTA Is Weak
**Priority: HIGH / Effort: Low**

The hero section's primary CTA reads "Coming Soon" -- this is the lowest-motivation call to action possible. It tells visitors to wait, not to act. The secondary CTA "Learn More" is equally passive.

**Recommendation:**
- Change the primary CTA to "Join the Waitlist" or "Get Early Access" with the email form embedded directly in the hero
- Change the secondary CTA to "See Our Track Record" (links to the strongest social proof page)
- Add microcopy below the hero form: "Join 1,200+ bettors waiting for launch" (once you have numbers) or "Free to join. No spam. Unsubscribe anytime."

**Expected Impact:** Converting the hero section alone could capture 30-50% of all signups since most visitors never scroll past the fold.

### 1.3 No Lead Magnet or Incentive to Subscribe
**Priority: HIGH / Effort: Medium**

Currently the only offer is "we'll email you when we launch." That is not compelling enough for most visitors to hand over their email. Sports bettors are protective of their inbox.

**Recommendation -- create one or more of these lead magnets:**
- **Free PDF:** "The Contrarian Betting Playbook: How Fading the Public Generated +142.6 Units Across 2,847 Plays" -- repurpose your track record data and blog content into a downloadable guide
- **Free daily/weekly pick:** "Get one free contrarian pick per week delivered to your inbox" -- this gives a taste of the product and creates habit
- **Early access pricing:** "Waitlist members get 50% off the first month" -- creates tangible value for signing up now
- **Discord access:** "Join our free Discord community for daily model insights" (you already have a Discord)

**Expected Impact:** Lead magnets typically increase email conversion rates by 2-5x compared to bare "notify me" forms.

### 1.4 No Urgency or Scarcity Mechanics
**Priority: MEDIUM / Effort: Low**

There is no reason for a visitor to sign up TODAY versus next month. Pre-launch pages benefit enormously from urgency.

**Recommendation:**
- Add a waitlist counter: "847 bettors on the waitlist" (even estimated, and growing live)
- Add a founder's pricing tier: "First 500 subscribers get lifetime founder pricing"
- Add a launch timeline: "Launching March 2026" gives a concrete horizon
- Consider a "beta access" tier for early signups with real skin-in-the-game incentives

### 1.5 No Exit-Intent or Scroll-Triggered Popups
**Priority: MEDIUM / Effort: Medium**

The site has zero mechanisms to catch visitors who are about to leave. For a pre-launch site, an exit-intent popup with a compelling offer (free pick, PDF download, discount) is one of the highest-ROI tactics available.

**Recommendation:** Add a lightweight exit-intent modal (pure JS, no libraries needed) offering the lead magnet. Trigger it when the mouse moves toward the browser close button (desktop) or after 30 seconds on page (mobile).

### 1.6 Form Submission Feedback Is Misleading
**Priority: MEDIUM / Effort: Low**

Even when Mailchimp is configured, the current code fires the success state regardless of whether the API call succeeds (because of `mode: 'no-cors'` and `.catch(() => {})`). The user gets "Noted!" even if the submission fails silently.

**Recommendation:** Switch to Mailchimp's embedded form or JSONP endpoint that provides actual success/failure feedback, or use a service like Formspree or Beehiiv that provides proper response handling.

---

## 2. SEO & CONTENT STRATEGY

### 2.1 Domain and URL Issues
**Priority: HIGH / Effort: Medium**

The site is hosted at `mojoclouds.github.io/ftp-ai-website/` -- a GitHub Pages subdirectory. This domain carries zero SEO authority and looks unprofessional. The robots.txt references `mojoclouds.xyz` as the sitemap location, but the sitemap XML references the GitHub Pages URL, creating a conflict.

**Recommendation:**
- Move to a custom domain: `ftp.ai` or `ftpai.com` as soon as possible. This is foundational for SEO.
- Ensure robots.txt, sitemap.xml, canonical URLs, and OG tags all reference the same canonical domain
- Currently canonical URLs reference `mojoclouds.github.io/ftp-ai-website` -- these must match the actual live domain

### 2.2 Title Tags Need Keyword Optimization
**Priority: HIGH / Effort: Low**

Current title tags are brand-focused but lack search keywords:
- Home: "FTP.ai -- Algorithmic Sports Predictions" (decent but could be stronger)
- How It Works: "How It Works -- FTP.ai" (generic, no keywords)
- Sports: "Sports Covered -- FTP.ai" (no one searches for "sports covered")
- Track Record: "Track Record -- FTP.ai" (misses keyword opportunity)

**Recommended title tag rewrites:**
- Home: "FTP.ai | AI Sports Betting Predictions -- Contrarian ML Models"
- How It Works: "How Contrarian Sports Betting Works | Fade the Public Strategy | FTP.ai"
- Sports: "AI Predictions for NBA, NFL, NHL, MLB, NCAA & More | FTP.ai"
- Track Record: "Sports Betting Model Results & Performance | 57% Win Rate | FTP.ai"
- Pricing: "AI Sports Prediction Plans & Pricing | FTP.ai"
- About: "About FTP.ai | ML-Powered Contrarian Sports Prediction Platform"
- Blog post: "Why Fade the Public Works: Math Behind Contrarian Sports Betting | FTP.ai"

### 2.3 Meta Descriptions Need Work
**Priority: MEDIUM / Effort: Low**

The meta descriptions are adequate but lack calls-to-action and keyword density. Every description should include a CTA ("Join the waitlist," "See our results") and target 1-2 primary search terms.

### 2.4 Target Keyword Strategy
**Priority: HIGH / Effort: Ongoing**

Based on competitive analysis, FTP.ai should target the following keyword clusters:

**Primary keywords (high intent, moderate competition):**
- "AI sports betting predictions"
- "machine learning sports betting"
- "algorithmic sports picks"
- "contrarian sports betting strategy"
- "fade the public betting"
- "betting against the public"
- "sports betting model"

**Long-tail keywords (lower competition, blog content):**
- "does betting against the public work"
- "how to fade the public in sports betting"
- "XGBoost sports betting model"
- "public betting percentages today"
- "contrarian NFL picks"
- "contrarian NBA picks"
- "sports betting edge calculator"
- "backtested sports betting results"

**Competitor-adjacent keywords:**
- "BetQL alternative"
- "Action Network alternative"
- "best AI sports picks"
- "sports betting prediction app"

### 2.5 Blog Content Gaps -- High-Priority Posts to Write
**Priority: HIGH / Effort: Medium-High**

The blog has exactly one post. For a site positioning itself as a data-driven authority, this is inadequate. The existing post ("Why Fade the Public Works") is well-written but needs to be part of a larger content ecosystem.

**Recommended blog content calendar (first 12 posts):**

1. "Public Betting Percentages Explained: What They Are and Why They Matter" -- foundational SEO piece targeting high-volume informational query
2. "Contrarian NFL Betting: Season-by-Season Backtest Results" -- sport-specific proof with data tables
3. "XGBoost for Sports Betting: How Our ML Pipeline Works" -- technical credibility, attracts data science audience
4. "The 5 Biggest Biases in Public Sports Betting (And How to Exploit Them)" -- listicle format, highly shareable
5. "Closing Line Value Explained: The Only Metric That Matters" -- targets a commonly searched advanced betting concept
6. "Why College Football Has the Biggest Contrarian Edges" -- sport-specific content, leverages your NCAAF 59.3% win rate
7. "AI Sports Betting in 2026: State of the Market" -- trend piece, attracts backlinks
8. "Moneyline vs. Spread vs. Totals: Where Contrarian Betting Works Best" -- educational, targets beginner queries
9. "How Sportsbooks Set Lines: The Mechanics of Line Movement" -- foundational content, lots of search volume
10. "Primetime Games and Public Bias: Why Monday Night Football Is a Contrarian Goldmine" -- timely, sport-specific
11. "Building a Sports Betting Model from Scratch: Lessons from FTP.ai" -- technical content, attracts builder audience
12. "Table Tennis Betting: The Overlooked Market With the Biggest Edges" -- unique niche content no competitor covers

**Each post should:**
- Be 1,500-2,500 words
- Include an email signup CTA at the bottom and mid-article
- Have proper H1/H2/H3 heading hierarchy
- Include internal links to relevant site pages
- Target 1-2 specific long-tail keywords

### 2.6 Missing Structured Data / Schema Markup
**Priority: MEDIUM / Effort: Low**

The site has zero JSON-LD structured data. Adding schema markup helps search engines understand the site and can enable rich snippets.

**Recommendation:** Add the following schema types to `base.njk`:
- `Organization` schema (brand name, logo, social links)
- `WebSite` schema (with SearchAction if applicable)
- `Article` schema on blog posts (author, datePublished, dateModified)
- `FAQPage` schema on How It Works page (convert content to FAQ format)

### 2.7 No H1 Tags on Blog Index Page
**Priority: LOW / Effort: Low**

There is no blog index page file found at the expected paths. The blog listing page should exist with proper SEO structure including an H1, introductory text, and proper pagination as posts grow.

### 2.8 Images Have No Alt Text (No Images at All)
**Priority: MEDIUM / Effort: Medium**

The site uses zero actual images -- only emojis for icons. While this keeps page speed high, it means there is no opportunity for image search traffic and no OG share image exists.

**Recommendation:**
- Create a proper OG share image (1200x630px) with the FTP.ai branding, tagline, and dark theme aesthetic
- Consider adding data visualization images/charts to the Track Record page (even static PNGs of backtest equity curves would be powerful)
- Sport-specific hero images or icons for the Sports page

---

## 3. BRAND & MESSAGING

### 3.1 The "FTP" Abbreviation Has a Problematic Double Meaning
**Priority: MEDIUM / Effort: N/A (Awareness)**

"FTP" is widely known in internet culture as an abbreviation for a profanity. In sports betting culture, it could also be read as "File Transfer Protocol." The site does explain what it stands for ("Fade the Public"), but first-time visitors may have a different initial reaction.

**Recommendation:** This is not necessarily something to change (edgy branding can work in the sports betting space), but be aware of it in paid advertising contexts where ad platforms may flag "FTP" in ad copy. Lean into the explanation early -- consider adding "Fade the Public" as a subtitle directly in the nav or hero badge.

### 3.2 The Hero Copy Is Strong but the Supporting Pages Are Repetitive
**Priority: MEDIUM / Effort: Medium**

The hero tagline "Fade the Public. Beat the Book." is excellent -- memorable, punchy, and immediately communicates the positioning. However, the supporting pages repeat the same concepts without deepening the narrative. The phrases "no hunches, just numbers," "backtested and validated," and "fully automated pipeline" appear in various forms across nearly every page.

**Recommendation:**
- **How It Works page:** Add a concrete example -- walk through one specific historical game where the model identified a contrarian play, showing the public betting %, the line movement, the model's prediction, and the outcome. A real example is worth 10 paragraphs of explanation.
- **About page:** Add more founder personality. The "25+ years of betting experience and 30+ years of programming" is compelling but hidden in a sidebar card. Make the founder story the centerpiece. Sports bettors buy from people, not corporations.
- **Track Record page:** Add time-series context. When were these backtests run? What date ranges? A monthly or seasonal breakdown would be far more convincing than aggregate numbers alone.

### 3.3 The "Built by bettors and engineers" Angle Is Underused
**Priority: HIGH / Effort: Low**

The About page mentions "built by bettors and engineers who got tired of hunches" -- this is the most relatable and compelling brand story on the site, but it is a single sentence. The sports betting audience deeply distrusts corporate-feeling products and gravitates toward authentic, founder-led brands.

**Recommendation:**
- Add a founder section with a real name (even first name only), a brief personal story, and a photo or avatar
- Use first person ("I built this because...") in at least one section of the About page
- Feature the founder voice in blog posts and social media
- Consider a "Why I Built FTP.ai" blog post as origin story content

### 3.4 The Copy Tone Is Correct for the Audience
**Priority: N/A (Positive finding)**

The writing style -- technical but not academic, confident but not hypey, with phrases like "trust me bro" and "hot takes" -- matches the sports betting audience extremely well. This is a strength to preserve and expand.

### 3.5 The Pricing Page Promises Too Much for a Pre-Launch
**Priority: MEDIUM / Effort: Low**

The "What You'll Get" section on pricing promises: daily predictions, multi-channel delivery (Discord + email + SMS + web platform), real-time alerts, model insights, all sports access. This sets very high expectations for launch.

**Recommendation:** Soften the language to "planned features" or "what we're building" to avoid promising specific features that may not be ready at launch. Alternatively, use this as a validation exercise -- let users vote on which features matter most.

---

## 4. SOCIAL PROOF & TRUST

### 4.1 No Third-Party Verification of Backtest Results
**Priority: HIGH / Effort: Medium**

The Track Record page claims 57.2% win rate, +8.3% ROI, and +142.6 net units across 2,847 plays. These are excellent numbers, but they are entirely self-reported with no external verification. In the sports betting space, unverified claims are the single biggest red flag -- every scam tipster claims 60%+ win rates.

**Recommendation:**
- Publish a detailed CSV or Google Sheet of all backtested plays with timestamps, predictions, and outcomes. Link to it from the Track Record page. Transparency IS the proof.
- Consider posting picks to a third-party verification service (e.g., BetStamp, The Action Network's tracking) once live
- Add a methodology deep-dive that explains exactly how backtests were conducted, including the backtesting period, out-of-sample testing approach, and limitations
- Add the specific date range of the backtest data ("Results from October 2019 -- January 2026" is far more credible than raw numbers)

### 4.2 No Testimonials or User Validation
**Priority: HIGH / Effort: Medium**

There is zero social proof from actual people. No testimonials, no beta tester quotes, no Discord community screenshots, no Twitter mentions.

**Recommendation (in order of effort):**
- **Low effort:** Screenshot your Discord server showing member count and activity. Embed or screenshot positive reactions/messages.
- **Low effort:** If you have shared any picks with friends or early testers, get written quotes with first name and initial.
- **Medium effort:** Run a small closed beta with 20-50 users from your Discord. Give them free predictions for 2 weeks. Collect feedback and results.
- **Medium effort:** Create a "Wall of Wins" section showing specific correct predictions with game details, dates, and outcomes.

### 4.3 No Media Mentions, Press, or Backlinks
**Priority: MEDIUM / Effort: High**

The site has no external credibility signals -- no "as featured in" badges, no guest posts, no podcast appearances. This matters both for SEO (domain authority) and for visitor trust.

**Recommendation:**
- Write guest posts for sports betting blogs (Covers, Sports Handle, OddsShark all accept contributions)
- Pitch the "AI + contrarian betting" angle to sports betting media -- it is a genuinely novel story
- Create a data-driven research piece (e.g., "We Analyzed 10,000 NFL Games: Here's When Betting Against the Public Works") designed to attract backlinks
- Engage in relevant Reddit communities (r/sportsbook, r/sportsbetting) by providing value (analysis, data) without being promotional

### 4.4 Discord Community Size Is Not Displayed
**Priority: LOW / Effort: Low**

You have a Discord server but its member count is invisible to site visitors. If the community has any traction, display the member count on the site.

**Recommendation:** Add a "Join X members in our Discord" badge or counter near the Discord link in the footer and on the About page.

---

## 5. SOCIAL MEDIA & COMMUNITY

### 5.1 Instagram Link Points to Generic instagram.com
**Priority: HIGH / Effort: Low**

The footer at `src/_includes/footer.njk` line 17 links to `https://instagram.com/` -- not an actual FTP.ai account. This looks broken and unprofessional.

**Recommendation:** Either create @ftp.ai or @ftpai on Instagram and link to it, or remove the Instagram link entirely until an account exists. A dead link is worse than no link.

### 5.2 X/Twitter Strategy
**Priority: HIGH / Effort: Ongoing**

@ftp_ai on X is your most important social channel for the sports betting audience. Twitter/X is where sports betting discussion happens in real time.

**Content pillar recommendations for X:**

1. **Daily Model Output (40% of posts):** Share 1-2 contrarian plays daily with the data behind them (public betting %, model confidence, line value). Even pre-launch, posting "what the model sees today" builds credibility over time with a verifiable track record.
   - Example: "Model Alert: Public is 73% on Lakers -4.5 tonight. Our XGBoost ensemble sees +3.2% edge on Pacers. CLV analysis supports the contrarian side."

2. **Data Visualizations (20% of posts):** Charts showing backtest results, public betting trends, historical contrarian performance. Visual content gets 2-3x more engagement on X.

3. **Educational Thread Content (20% of posts):** Weekly threads explaining concepts (closing line value, public betting percentages, line movement). These get bookmarked and shared.

4. **Results & Accountability (15% of posts):** Post outcomes of predictions. Wins AND losses. Transparency builds trust faster than anything else in this space.

5. **Engagement & Community (5% of posts):** Polls ("Which sport has the biggest public bias?"), responses to followers, commentary on relevant betting news.

**Posting cadence:** Minimum 1-2 posts per day during sports seasons, 4-5 posts per day during high-volume periods (NFL Sundays, March Madness).

### 5.3 Discord Strategy
**Priority: MEDIUM / Effort: Ongoing**

Discord should serve as the inner circle community for your most engaged potential customers.

**Recommended channel structure:**
- `#announcements` -- Product updates, launch timeline, new blog posts
- `#daily-model-output` -- Automated daily predictions (even if backtested/simulated during pre-launch)
- `#results-tracker` -- Daily/weekly results with running tally
- `#general-chat` -- Community discussion
- `#ask-the-model` -- Users can ask about specific games (you or the model respond)
- `#sports-specific` channels (NBA, NFL, etc.) -- Discussion by sport
- `#feedback` -- Pre-launch feedback from the community

**Key tactic:** Post the model's contrarian picks in Discord daily, track them publicly, and let the community see real results accumulate over time. By launch day, you will have months of tracked, community-verified predictions.

### 5.4 Instagram Strategy
**Priority: LOW / Effort: Medium**

Instagram is secondary for sports betting but valuable for reach and brand building.

**Content approach:**
- Infographic-style posts (dark theme matching the site) with daily predictions or weekly recaps
- Stories with game-day predictions and outcomes
- Reels explaining concepts ("What is fade the public?" in 60 seconds)
- Carousel posts showing backtest data by sport

**Recommended handle:** @ftp.ai (if available) or @ftpai_picks

### 5.5 Consider a Substack or Beehiiv Newsletter
**Priority: MEDIUM / Effort: Medium**

A regular newsletter gives you a reason to email your list weekly and keeps the audience warm during the pre-launch period. It also creates an additional discovery channel (Substack has built-in distribution).

**Format suggestion:** Weekly "The Contrarian Report" newsletter with:
- Top 3 contrarian plays from the model that week
- One data insight or chart
- Community highlight from Discord
- Quick market analysis

---

## 6. COMPETITIVE POSITIONING

### 6.1 Current Competitive Landscape

| Feature | FTP.ai | BetQL | Action Network | Covers | OddsShark |
|---------|--------|-------|----------------|--------|-----------|
| ML/AI Models | Yes (XGBoost) | Yes (proprietary) | Limited | No (human) | No |
| Contrarian Focus | Core strategy | One of many | Peripheral | No | Data only |
| Transparency | Promised | Star ratings | Varies | Varies | N/A |
| Public Betting % | Core input | Available | Available | Available | Available |
| Price | TBD | $10-40/mo | $50/yr+ | Free/Premium | Free |
| Sports Covered | 8 | 14 | Most major | Most major | Most major |
| Community | Discord | No | Forum | Forum | No |
| Mobile App | No | Yes | Yes | Yes | Yes |
| Track Record | Backtested | Backtested | Tracked | N/A | N/A |

### 6.2 FTP.ai's Actual Differentiators
**Priority: HIGH / Effort: Low (messaging change)**

Based on the competitive analysis, FTP.ai's real differentiators are:

1. **Contrarian-first philosophy:** BetQL covers contrarian plays as one signal among many. FTP.ai is built entirely around the "fade the public" thesis. This is a genuine positioning advantage -- no major competitor owns this niche exclusively.

2. **Transparency promise:** The commitment to showing data behind every prediction, logging everything with timestamps, and publishing results is rare. Most competitors use black-box models or vague "star ratings."

3. **Technical credibility:** Explicitly naming XGBoost, showing the data pipeline, and targeting a technically-savvy bettor audience is a differentiated approach versus competitors who speak in vague "our experts" language.

**What is NOT currently a differentiator (but is positioned as one):**
- "ML-powered" -- BetQL and many others use this claim
- "Backtested" -- Common in the space
- "8 sports" -- Below BetQL's 14
- "Automated pipeline" -- Not meaningful to most bettors

**Recommendation:** Sharpen the positioning to own "contrarian/fade the public" as the category. The homepage should lead with this differentiation. Consider adding a competitive comparison section ("FTP.ai vs. Tipsters" or "Why Not Just Use BetQL?") as a blog post or dedicated page.

### 6.3 Missing Features Competitors Have
**Priority: MEDIUM / Effort: Varies**

Features competitors offer that FTP.ai should address (at launch or on the roadmap):

- **Mobile app:** Not needed pre-launch, but plan for it. Competitors live and die by mobile.
- **Live/real-time odds:** Even displaying current odds on the sports page would show the product is connected to real data
- **Free tier content:** BetQL offers limited free picks to drive conversion. FTP.ai should do the same.
- **API access:** For power users, an API could be a premium differentiator
- **Bet tracking:** Allow users to log their bets and track ROI over time

### 6.4 White Space Opportunity: Niche Sports
**Priority: MEDIUM / Effort: Low (messaging)**

FTP.ai covers Table Tennis and Tennis -- niche markets that major competitors largely ignore. The site buries this under "Beyond the Major Leagues." These niche markets often have the most inefficient lines and the biggest edges for quantitative approaches.

**Recommendation:** Elevate the niche sports coverage as a unique selling point. Blog about it. Tweet about it. "We cover markets the big platforms ignore" is a compelling message for serious bettors.

---

## 7. TECHNICAL MARKETING

### 7.1 Google Analytics Is Not Configured
**Priority: CRITICAL / Effort: Low**

The `base.njk` template loads the Google Analytics script with placeholder `G-XXXXXXXXXX`. This means you have zero data on how visitors interact with the site, where they come from, which pages they visit, or where they drop off. You are operating completely blind.

**Fix:**
1. Go to analytics.google.com
2. Create a GA4 property for the site
3. Copy the Measurement ID (starts with `G-`)
4. Replace `G-XXXXXXXXXX` in `src/_includes/base.njk` at lines 39 and 44

**Also configure:**
- Set up a conversion event for email form submissions
- Set up scroll depth tracking
- Set up outbound click tracking (Discord, X, Instagram links)

### 7.2 No Facebook/Meta Pixel
**Priority: MEDIUM / Effort: Low**

If there is any chance you will run paid ads on Meta platforms (Facebook, Instagram) in the future, install the Meta pixel now. It begins building a retargeting audience from day one, even before you spend any money on ads. By launch day, you could have a warm retargeting audience of thousands.

**Note:** Sports betting advertising on Meta has restrictions. Research your state/market compliance before running ads.

### 7.3 No Twitter Pixel
**Priority: MEDIUM / Effort: Low**

Same logic as Meta pixel. Install the Twitter (X) conversion tracking pixel to build a retargeting audience for when you eventually run promoted tweets.

### 7.4 Email Marketing Infrastructure
**Priority: CRITICAL / Effort: Medium**

Beyond just fixing the form, you need a proper email marketing stack:

**Recommended setup:**
1. **ESP (Email Service Provider):** Beehiiv (free tier, built for newsletters, has growth tools) or ConvertKit (better automation). Mailchimp works but is the most expensive option for what it offers.
2. **Welcome sequence:** 3-5 automated emails after signup:
   - Email 1 (Immediate): Welcome + "Here's what we're building" + link to Discord
   - Email 2 (Day 2): "Why Fade the Public Works" (your blog post, repurposed)
   - Email 3 (Day 5): "Our Track Record" + performance data
   - Email 4 (Day 10): "What's coming at launch" + feature preview
   - Email 5 (Day 14): "Your questions answered" FAQ + invite to reply
3. **Monthly newsletter:** Even pre-launch, send monthly updates to keep the list warm. A cold list at launch is worthless.

### 7.5 Contact Email Is Personal Gmail
**Priority: MEDIUM / Effort: Low**

`mojoclouds@gmail.com` appears throughout the site (About page, Privacy Policy, Terms). This undermines professionalism.

**Recommendation:**
- Set up a custom domain email: `hello@ftp.ai` or `team@ftp.ai` (or at minimum `contact@mojoclouds.xyz`)
- Google Workspace or Zoho Mail (free tier) both work
- Update all references across: `about.njk`, `privacy.njk`, and any other legal pages

### 7.6 Sitemap and Robots.txt Have URL Conflicts
**Priority: MEDIUM / Effort: Low**

The `robots.txt` references `https://mojoclouds.xyz/sitemap.xml` but the sitemap itself uses `mojoclouds.github.io/ftp-ai-website/` URLs. Google Search Console will flag this as inconsistent.

**Fix:** Ensure all URLs across robots.txt, sitemap.xml, canonical tags, and OG tags reference the same canonical domain. When you move to a custom domain, update all of these simultaneously.

### 7.7 OG Share Image Does Not Exist
**Priority: MEDIUM / Effort: Low**

The OG meta tags reference `/images/og-share.png` but this file does not exist. When anyone shares the site on X, Facebook, Discord, or LinkedIn, they get a broken image or a generic fallback. This significantly reduces click-through rate on shared links.

**Fix:** Create a 1200x630px OG image. It should feature:
- The FTP.ai logo
- The tagline "Fade the Public. Beat the Book."
- The dark theme color scheme
- A data/terminal aesthetic element

Use Figma, Canva, or even a screenshot of the hero section with overlay text.

### 7.8 No Link Building Strategy
**Priority: MEDIUM / Effort: Ongoing**

The site has zero inbound links (it just launched). Domain authority is 0.

**Recommendation for quick backlink opportunities:**
- Submit the site to sports betting directories and review sites
- Publish the "We Analyzed 10,000 Games" research piece and pitch it to sports media
- Guest post on sports betting blogs with a link back
- Engage on relevant Reddit threads (r/sportsbook, r/sportsbetting, r/machinelearning) with genuine value, linking to blog content when relevant
- Get listed on Product Hunt or Hacker News (the ML/data science angle plays well on HN)
- Contribute to sports betting glossary/wiki pages that reference "fade the public"

---

## 8. QUICK WINS -- Highest Impact, Lowest Effort

These are changes that can be made TODAY and will have immediate, measurable impact. Listed in priority order.

### QW-1: Fix the Email Form (30 minutes)
**File:** `src/js/main.js`, line 81
**What:** Set up Mailchimp/Beehiiv/ConvertKit, get the form action URL, populate `MAILCHIMP_URL`.
**Impact:** Goes from capturing 0% of signups to capturing actual signups. This is a total blocker.

### QW-2: Set Up Google Analytics (15 minutes)
**File:** `src/_includes/base.njk`, lines 39 and 44
**What:** Create GA4 property, replace `G-XXXXXXXXXX` with real Measurement ID.
**Impact:** You will finally have data on visitor behavior, traffic sources, and page performance. Without this, all other optimization is guesswork.

### QW-3: Add Email Form to Every Page (1-2 hours)
**Files:** `src/index.njk`, `src/how-it-works.njk`, `src/sports.njk`, `src/track-record.njk`, `src/about.njk`
**What:** Replace the "Get Notified" button-only CTA blocks with inline email signup forms (copy the form markup from `pricing.njk`).
**Impact:** 3-5x more signup opportunities per visitor session.

### QW-4: Fix the Instagram Link (5 minutes)
**File:** `src/_includes/footer.njk`, line 17
**What:** Either create an @ftpai Instagram account and link to it, or remove the dead link.
**Impact:** Removes a visible credibility issue from every page on the site.

### QW-5: Create the OG Share Image (30-60 minutes)
**File:** Create `src/images/og-share.png`
**What:** Design a 1200x630px share image with brand elements.
**Impact:** Every social share of the site will display a proper branded preview instead of a broken image, increasing click-through rates on shared links.

### QW-6: Change Hero CTA from "Coming Soon" to "Join the Waitlist" (10 minutes)
**File:** `src/index.njk`, line 30
**What:** Change button text and optionally embed the email form directly in the hero.
**Impact:** Transforms the most prominent element on the site from passive to active conversion.

### QW-7: Add Backtest Date Range to Track Record (10 minutes)
**File:** `src/track-record.njk`
**What:** Add a line like "Results from backtested data: October 2019 -- January 2026" to the aggregate performance section.
**Impact:** Significantly increases the credibility of the performance claims with minimal effort.

### QW-8: Update Contact Email (30 minutes)
**Files:** `src/about.njk`, `src/privacy.njk`, plus any other references
**What:** Set up `hello@ftp.ai` or similar and replace `mojoclouds@gmail.com`.
**Impact:** Professional email increases trust for all visitors who see the About or legal pages.

### QW-9: Add a Waitlist Counter (30 minutes)
**File:** Add to pricing.njk and other CTA sections
**What:** Display "Join X bettors on the waitlist" near the signup form. Start with your actual number and update regularly.
**Impact:** Social proof + urgency. Even "Join 47 bettors" is better than nothing -- it shows momentum.

### QW-10: Rewrite Title Tags (20 minutes)
**Files:** Frontmatter of every `.njk` page file
**What:** Update `title` values in frontmatter per the recommendations in section 2.2.
**Impact:** Immediate SEO improvement for every page, better click-through rates from search results.

---

## IMPLEMENTATION ROADMAP

### This Week (Days 1-7) -- Foundation Fixes
- [ ] QW-1: Fix email form
- [ ] QW-2: Set up GA4
- [ ] QW-3: Add email forms to all pages
- [ ] QW-4: Fix Instagram link
- [ ] QW-5: Create OG share image
- [ ] QW-6: Update hero CTA
- [ ] QW-7: Add backtest date range
- [ ] QW-8: Update contact email
- [ ] QW-10: Rewrite title tags

### Weeks 2-4 -- Conversion & Content
- [ ] Set up email ESP with welcome sequence (Section 7.4)
- [ ] Create a lead magnet PDF (Section 1.3)
- [ ] Write blog posts #2 and #3 (Section 2.5)
- [ ] Begin posting daily model output on X/Twitter (Section 5.2)
- [ ] Add exit-intent popup (Section 1.5)
- [ ] Install Meta and Twitter pixels (Sections 7.2, 7.3)
- [ ] Add Organization schema markup (Section 2.6)

### Month 2 -- Social Proof & Community
- [ ] Publish detailed backtest data for transparency (Section 4.1)
- [ ] Run closed beta with 20-50 Discord users (Section 4.2)
- [ ] Collect and publish testimonials (Section 4.2)
- [ ] Write blog posts #4-6 (Section 2.5)
- [ ] Structure Discord channels properly (Section 5.3)
- [ ] Add waitlist counter with real numbers (QW-9)
- [ ] Build founder story content (Section 3.3)

### Month 3 -- Authority & Growth
- [ ] Write and publish link-bait research piece (Section 7.8)
- [ ] Pitch guest posts to 3-5 sports betting sites (Section 4.3)
- [ ] Write blog posts #7-12 (Section 2.5)
- [ ] Launch weekly newsletter "The Contrarian Report" (Section 5.5)
- [ ] Move to custom domain (Section 2.1)
- [ ] Add competitive comparison content (Section 6.2)
- [ ] Create Instagram account and begin posting (Section 5.4)

---

## KEY METRICS TO TRACK

Once GA4 is configured, monitor these metrics weekly:

| Metric | Target (Month 1) | Target (Month 3) |
|--------|-------------------|-------------------|
| Email signups / week | 25+ | 100+ |
| Site visitors / week | 200+ | 1,000+ |
| Signup conversion rate | 5%+ | 8%+ |
| Pages per session | 2.5+ | 3.0+ |
| Blog organic traffic | 50/week | 500/week |
| Discord members | 100+ | 500+ |
| X/Twitter followers | 200+ | 1,000+ |
| Email open rate | 40%+ | 35%+ |
| Domain authority | 5+ | 15+ |

---

## COMPETITIVE MOAT ASSESSMENT

FTP.ai's long-term defensibility rests on three pillars:

1. **Data moat:** The longer the model runs and tracks real-world results, the more credible and differentiated it becomes. Start tracking verifiable predictions NOW, even pre-launch, to build an unassailable track record by launch.

2. **Community moat:** The Discord community, if cultivated correctly, becomes a network effect. Members who see results, share insights, and build relationships around the platform will not switch to a competitor easily.

3. **Niche positioning moat:** Owning "fade the public" as a category is achievable because no major competitor has claimed it exclusively. Once FTP.ai is the recognized authority for contrarian sports betting, the brand association becomes durable.

**Biggest risk:** Launching without a verified live track record. Backtested results, no matter how good, face inherent skepticism. The pre-launch period should be used aggressively to post daily predictions publicly (X, Discord) and track outcomes transparently.

---

## SUMMARY OF FINDINGS

| Category | Grade | Top Priority Fix |
|----------|-------|-----------------|
| Conversion Optimization | D | Email form is broken; only on one page |
| SEO & Content | C- | Title tags weak; only 1 blog post; no custom domain |
| Brand & Messaging | B+ | Strong positioning, needs more founder story |
| Social Proof & Trust | D | No verification, no testimonials, no live results |
| Social Media & Community | D+ | Instagram link broken; X not active; Discord underused |
| Competitive Positioning | B | Genuine differentiation exists but not communicated clearly |
| Technical Marketing | F | GA4 not configured; no email capture; no pixels |
| Design & UX | A- | Excellent visual design; good accessibility; clean code |

**Overall Pre-Launch Readiness Score: 4/10**

The site looks professional but is not functionally capturing leads or building measurable momentum. The design is an A; the marketing infrastructure is an F. Fixing the items in the "This Week" section of the roadmap will immediately move the score to 6-7/10, and the full 3-month plan will bring it to 8-9/10 by launch.
