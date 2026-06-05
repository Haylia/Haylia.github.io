#import "@preview/basic-resume:0.2.8": *

// Put your personal information here, replacing mine
#let name = "Lia Jeffries"
#let location = "Chessington, UK"
#let email = "liavjeffries@gmail.com"
#let github = "github.com/Haylia"
#let linkedin = "linkedin.com/in/liavjeffries"
#let personal-site = "haylia.github.io"

#show: resume.with(
  author: name,
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  // phone intentionally omitted from this public-facing version.
  personal-site: personal-site,
  accent-color: "#26428b",
  font: "New Computer Modern",
  paper: "a4",
  author-position: left,
  personal-info-position: left,
)

== Summary
Computer Science graduate (BSc Hons, University of Southampton) who pairs hands-on software
development with current KYC and compliance experience at a law firm. Ships real tools — Discord
bots, live-service game features, and AI-integrated apps — across Python, C\#, Java, Kotlin and Go,
and picks up new stacks quickly. In a KYC role on complex private-equity structures, handles client
due diligence to market standard, and brought coding into the work — a Python tool that automated a
manual team-reporting process. Keen to apply that developer-and-compliance blend in a software,
regtech or KYC-engineering role.

== Technical Skills
- *Proficient*: Python, C\#, Java, MySQL
- *Familiar*: Kotlin, Haskell, Go, JavaScript, HTML / CSS
- *Frameworks & Tools*: Unity, .NET, Jetpack Compose, Firebase, Git, Discord API, Google Sheets API, Claude / Claude Code
- *Areas*: Packet capture & protocol RE, cloud computing, AI integration

== Professional Experience
#work(
  title: "Senior Associate Compliance Solutions Analyst (Inbound KYC)",
  location: "London, UK",
  company: "Carta Law (formerly Avantia Law)",
  dates: dates-helper(start-date: "Jul 2025", end-date: "Present"),
)
- Review and respond to inbound KYC requests for complex private-equity structures in a fast-paced environment, often handling many clients at once.
- Assess banks' requirements against market standard, scoping each response to the genuine requirement and pushing back on off-market or excessive asks (e.g. source of funds), while keeping clients satisfied.
- Built internal tracking tools, including a Python program that replaced a manual reporting process, to support team performance monitoring and assessment.
- Trained new team members and handled high-volume clients with minimal supervision.
- Early adopter of the firm's bespoke AI-backed workflow tool, working with the internal engineering team.

#work(
  title: "Programmer & Content Creator",
  location: "Indie game project",
  company: "Wardens",
  dates: dates-helper(start-date: "Mar 2023", end-date: "Present"),
)
- Co-developed a client–server mobile MMORPG in Unity (C\#) in a team of 2–5, backed by a MySQL content database.
- Built boss and gameplay mechanics, while keeping bugs in check.
- Created bespoke content-creation tools — custom tooling (database, effects and content editors) and a content pipeline used by the team.
- Integrated in-game Discord features (account linking, in-game mail/DM) and built supporting web pages.
- Worked on the game's Go server program, which delivers game updates to players.
- Now in beta with around 1,000 registered testers (peaks of around 100 concurrent).

== Education
#edu(
  institution: "University of Southampton",
  location: "Hampshire, UK",
  dates: dates-helper(start-date: "Sep 2020", end-date: "Jul 2024"),
  degree: "BSc Computer Science",
)
- Second Class Honours (2:2)
- Dissertation: "Understanding and Using EEG Readings from the Visual Cortex to Control a Computer" — a brain–computer interface driven by visual-cortex EEG signals; marked 62% (2:1).
- Captured and processed signals from a g.tec Unicorn Hybrid Black EEG headset via its Python API to drive on-screen control.

#edu(
  institution: "Canford School",
  location: "Dorset, UK",
  dates: dates-helper(start-date: "Sep 2015", end-date: "Jul 2020"),
  degree: "A-levels & GCSEs",
)
- A-levels: A\*AA in Computer Science, Mathematics and Physics, plus AS-level Further Mathematics (A).
- 10 GCSEs (A\*–B), including grade 9 in Maths and English.

#pagebreak()

== Projects
// Order: strongest first. The game name is kept generic ("an MMORPG") on purpose.

#project(
  name: "Raid Points Tracker Bot",
  dates: dates-helper(start-date: "Jul 2023", end-date: "Present"),
  url: "github.com/Haylia/Gwydion-DKP-bot",
)
- Discord-command frontend with a Google Sheets backend for transparent raid loot-point (DKP) tracking in an MMORPG.
- Python (discord.py); concurrent multi-account Sheets access via threading and tasks to keep commands responsive.

#project(
  name: "Marvel Rivals Bot",
  dates: dates-helper(start-date: "Feb 2025", end-date: "Sep 2025"),
  url: "github.com/Haylia/MarvelBot",
)
- Discord bot (Python, discord.py) that tracked player stats and leaderboards for the hero shooter Marvel Rivals.
- Scraped live match data with headless Selenium / Chrome and cached player IDs to speed up lookups.

#project(
  name: "Scrawl",
  dates: dates-helper(start-date: "Jun 2026", end-date: "Present"),
  url: "github.com/Haylia/Scrawl",
)
- Android party game (Kotlin / Jetpack Compose) where players create, store and reuse their own prompt decks, synced via a Firebase / Firestore backend.
- Default decks come from an AI-assisted content pipeline (Claude API); offline-first, unit-tested core with a cloud share-by-code layer. In development.

#project(
  name: "Preferans Scorer",
  dates: dates-helper(start-date: "Jun 2026", end-date: "Present"),
  url: "github.com/Haylia/Pref",
)
- Android app (Kotlin / Jetpack Compose, Material 3) that scores Preferans, a trick-taking card game with notoriously intricate scoring.
- Modelled the full rule set (bids, whists, variants, bullet/mountain scoring) as a unit-tested domain layer.

#project(
  name: "MMO Timer Bot",
  dates: dates-helper(start-date: "Mar 2024", end-date: "Present"),
  url: "github.com/Haylia/chtimerbot",
)
- Discord bot (Python, discord.py) providing boss and event timers for an MMORPG community across 20 servers.
- Replicated a popular service that was being discontinued, with refinements for onboarding and reliable uptime.

#project(
  name: "Live Combat Parser & Leaderboard",
  dates: dates-helper(start-date: "Jul 2023", end-date: "Jun 2024"),
  // url: "",
)
- Raw-socket sniffer that reverse-engineered an MMORPG's network protocol to parse live combat events.
- Compiled raid damage leaderboards and synced them to Google Sheets via a service account.
// NOTE: Private chscripts project (raw-socket sniffing + game-protocol RE + gspread). No public link.

#project(
  name: "Personal Website & Portfolio",
  url: "haylia.github.io",
)
- Personal portfolio site (HTML / CSS) on GitHub Pages, presenting my projects and CV.

== Volunteering

#work(
  title: "Charity Shop Volunteer",
  location: "Dorset, UK",
  company: "Julia's House",
  dates: dates-helper(start-date: "Sep 2024", end-date: "Jul 2025"),
)
- Till and donations assistant across Julia's House shops in Broadstone and Creekmoor.
- Assisted customers, replenished and organised stock, sorted incoming donations, and digitised book stock into the till system.

#work(
  title: "Committee Member — Esports",
  location: "Southampton, UK",
  company: "University of Southampton Video Games & Esports Society",
  dates: dates-helper(start-date: "May 2021", end-date: "Jan 2022"),
)
- Represented the Overwatch community on the society committee.
- Founded and managed esports teams, ran community events, and grew member participation.

== Interests
- *Esports*: player & captain, University of Southampton Overwatch teams (2020–2024).
- Casual social card game player; tennis, table tennis, skiing and running.

== Additional
- Full clean UK driving licence.
- Right to work in the UK.
