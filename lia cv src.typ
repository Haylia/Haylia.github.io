#import "@preview/basic-resume:0.2.8": *

// Put your personal information here, replacing mine
#let name = "Lia Jeffries"
#let location = "Dorset, UK"
#let email = "liavjeffries@gmail.com"
#let github = "github.com/haylia"
#let linkedin = "linkedin.com/in/liavjeffries"
#let phone = "[redacted]"
#let personal-site = "haylia.github.io"

#show: resume.with(
  author: name,
  // All the lines below are optional.
  // For example, if you want to to hide your phone number:
  // feel free to comment those lines out and they will not show.
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  // phone: phone,
  personal-site: personal-site,
  accent-color: "#26428b",
  font: "New Computer Modern",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
)

/*
* Lines that start with == are formatted into section headings
* You can use the specific formatting functions if needed
* The following formatting functions are listed below
* #edu(dates: "", degree: "", gpa: "", institution: "", location: "", consistent: false)
* #work(company: "", dates: "", location: "", title: "")
* #project(dates: "", name: "", role: "", url: "")
* certificates(name: "", issuer: "", url: "", date: "")
* #extracurriculars(activity: "", dates: "")
* There are also the following generic functions that don't apply any formatting
* #generic-two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "")
* #generic-one-by-two(left: "", right: "")
*/
== Education
#edu(
  institution: "University of Southampton",
  location: "Hampshire, UK",
  dates: dates-helper(start-date: "Sept 2020", end-date: "July 2024"),
  degree: "Bachelor's of Science, Computer Science",

  // Uncomment the line below if you want edu formatting to be consistent with everything else
  // consistent: true
)
- Second Class Honours
- Dissertation titled: "Understanding and using EEG Readings from the Visual Cortex to Control a Computer"

== Projects and  Experience

#project(
  name: "Wardens",
  // Role is optional
  role: "Programmer and Content Creator",
  // Dates is optional
  dates: dates-helper(start-date: "Mar 2023", end-date: "Present"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- Mod development for a mobile MMO
- Live service elements and content generation
#project(
  name: "CH Timer Bot",
  // Role is optional
  // role: "Developer and Maintainer",
  // Dates is optional
  dates: dates-helper(start-date: "Mar 2024", end-date: "Present"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- Replicated widely used but stopping service
- Created in short time frame, later refined for user-friendliness and smooth on-boarding.
#project(
  name: "CH Leaderboard",
  // Role is optional
  //role: "Developer and Maintainer",
  // Dates is optional
  dates: dates-helper(start-date: "July 2023", end-date: "June 2024"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- Live packet capture to record combat events
- Raid statistics compiled and displayed on Google Sheets via service account
#project(
  name: "Marvel Rivals Bot",
  // Role is optional
  //role: "Developer and Maintainer",
  // Dates is optional
  dates: dates-helper(start-date: "Feb 2025", end-date: "Present"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- Discord based stat tracker for newly released hero shooter Marvel Rivals

#project(
  name: "Skribbl.AI",
  // Role is optional
  //role: "Developer and Maintainer",
  // Dates is optional
  dates: dates-helper(start-date: "Feb 2024", end-date: "June 2024"),
  // URL is also optional
  // url: "hyperschedule.io",
)
- University final year group project
- Use of cloud computing services to create a Jackbox-style game with integrated AI

== Volunteering

#work(
  title: "Julia's House Official Volunteer",
  location: "Dorset, UK",
  company: "Julia's House",
  dates: dates-helper(start-date: "Sept 2024", end-date: "Present"),
)
- Till assistant, donations assistant and general volunteer at Julia’s House locations in Broadstone and Creekmoor. 
- Duties include assisting customers, replenishing and organising stock, receiving and sorting donations, steaming clothes, scanning books into the computer system and general housekeeping.

#work(
  title: "Games Society Committee Member",
  location: "Southampton, UK",
  company: "University of Soutampton",
  dates: dates-helper(start-date: "May 2021", end-date: "Jan 2022"),
)
- I represented the Overwatch scene within the Southampton Video Games and Esports society.
- I created and managed Esports teams, hosted events within the scene and encouraged participation for the scene.


// #extracurriculars(
//   activity: "Science Olympiad Volunteering",
//   dates: "Sep 2023 --- Present"
// )
// - Volunteer and write tests for tournaments, including LA Regionals and SoCal State \@ Caltech

// #certificates(
//   name: "OSCP",
//   issuer: "Offensive Security",
//   // url: "",
//   date: "Oct 2024",
// )

== Programming
- * Experienced Programming Languages*: Python, C\# in Unity, C\# in .NET, Java, MySQL
- * Basic Knowledge Programming Languages*: Haskell, JavaScript, HTML/CSS

== Interests and Misc

#certificates(
  name: "Tennis, Table Tennis, Skiing",
  issuer: "Casual racket sports player, enjoyer of ski holiday",
)

#certificates(
  name: "Social board and trading card games",
  issuer: "Casual Magic: The Gathering Commander player"
)

#certificates(
  name: "Esports",
  issuer: "Team player and captain for University of Southampton Overwatch Teams",
  date: dates-helper(start-date: "Oct 2020", end-date: "May 2024")
)


- Full clean UK Driving License
- Right to work in UK
