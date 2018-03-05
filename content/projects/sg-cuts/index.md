---
date: "2016"
title: "Shotgun Editorial Cuts"
number: "04"
description: "Simplifying editorial workflows in Shotgun."
areas:
    - Product
    - UX
---

# Shotgun Editorial Cuts

## *Simplifying editorial workflows in Shotgun*

[Shotgun 7.0](https://support.shotgunsoftware.com/hc/en-us/articles/220062367-7-0-Release-Notes) included a massive update that made it easier to browse, play, and manage editorial information in Shotgun. The update introduced the ability to make use of current editorial information for a project, meaning a team could review its work in the context of the latest cut.

**Timeline**
2015 - 2016

**Role**
Lead Product Designer

**Agency**
EPIC


### Overview

Shotgun is laser focused on solving collaborative review challenges at studios and making it easier for teams of all sizes to upload, share, view, and keep track of all of their media on a single platform.

As VFX teams and projects grow in breadth and complexity, collaborative review becomes increasingly important to the production pipeline. VFX and animation teams need to review their latest work in context of the cut, but the cut is constantly changing.

***With editorial making continual changes throughout the project, keeping up manually can lead to frustrating delays and mistakes.*** Studio editorial departments need a way to make cut information transparent to the entire team.


### The Challenge

For Shotgun’s users, the ability to review work in context was groundbreaking. It had never been done before, which made it a great opportunity to stretch creatively and define new standards.

The brief included:


1. Artists can view work in context.
2. Studios can track information on the shot level.
3. Shots can be created and omitted easily.
4. Shotgun knows when shots are omitted and notifies artists so they’re always working with the latest cut details.
5. Statuses are kept in sync with editorial information.
6. Clients can review new versions of artist work in context to properly judge the cut without needing to track down editorial for updated cut data. Latest versions of shots are dynamically seen in context of the latest cut revisions, making giving and receiving feedback drastically easier.



---- 
## Editorial Views in the Global Media App

[See release notes](https://support.shotgunsoftware.com/hc/en-us/articles/222879367-Browsing-Cuts)

It took a lot of iterating to figure out where cuts live in the system hierarchically. We worked closely with product and engineering to restructure Shotgun's data model and ensure a seamless schema migration process.


<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/04ixUrUwrIE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Think of cuts as specialized playlists of shots. Like playlists, they store information about relative order and length. They also store data about when the shot cuts in and out. And, unlike playlists — they can be versioned independently of the uncut media files they contain.

In the left pane, there are a few different ways to browse and find a cut:

- Search for a specific cut via the *Find a Cut...* text search.
- Quickly access previously viewed cuts under the *Recent* section.
- Keep important cuts in the *Favorites* section by hovering over the cut in the hierarchy tree and clicking the star icon.
- Browse for a cut via the *Hierarchy Tree.*

In the end we separated cuts into their own tab in the left pane. Under this model, the entire project hierarchy is replicated in the cuts tab. This tested best with users and was moderately simple for engineering to implement.

The new data model opens the door for users to create temporary / experimental cuts without updating shot-level values. It also supports overlapping cuts—like the :30, :60 and :90 cuts of a broadcast commercial—and alternate edits.

When browsing with the *Hierarchy Tree*, if you click on a parent entity—like a Sequence or Scene—you'll see a list of Cuts associated with it in the Right Pane.

![](https://support.shotgunsoftware.com/hc/en-us/article_attachments/210027748/7_0_gma_cut_view_v01.jpg)


If you go a level deeper in the *Hierarchy Tree* and click on a Cut itself, you'll see the cut information—like Cut Order, Cut In, and Cut Out—in the Right Pane.

![](https://support.shotgunsoftware.com/hc/en-us/article_attachments/210027768/7_0_gma_cut_item_view_v01.jpg)


Roll back to a previous *revision* of a cut using the breadcrumbs. Users were already used to this interaction model from traditional shot pages in Shotgun.

![](https://support.shotgunsoftware.com/hc/en-us/article_attachments/210027788/7_0_gma_nav_chain.jpg)



---- 
## Playing Cuts in the Overlay Player

[See release notes](https://www.youtube.com/watch?v=04ixUrUwrIE)

In the overlay player, we introduced a bottom tray dedicated to cut information. It lets users quickly switch between related cuts and versions, focus on a handful of shots with mini-cuts, swap for different versions of a shot, and filter by status or pipeline step to fine-tune exactly what version of the cut appears in the tray.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3HQdTbncIVQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>