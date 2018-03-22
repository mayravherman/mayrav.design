---
date: "2015"
title: "Shotgun Integrations"
number: "05"
description: "Artist-friendly pipeline tools for the desktop."
areas:
    - Product
    - UX
---

# Shotgun Integrations

Some of my earliest work with Shotgun included a long-awaited update to their pipeline toolkit for artists. Integrations are a suite of highly-configurable apps and plugins that bring Shotgun into common creative apps like Maya, Nuke, and Photoshop. They extend the Shotgun experience to the desktop, giving artists the ability to quickly find, launch, and publish work files—freeing them up to focus on creating and iterating instead of the processes in between.


### The Problem

Before the update, these tools were only available after a technically-complex configuration process. **The barrier to entry was high—any studio that didn’t have a Technical Director or pipeline engineer was getting lost alarmingly early in the funnel.**

Shotgun knew that getting started with pipeline configurations could be daunting, especially for smaller studios with limited resources. They didn’t want to force their users to dive into the deep end in order to get value from these workflow-busting tools. They wanted them to feel like an integrated part of Shotgun that users could benefit from right away.


### My Role

I led design for the publish app, which allows artists to share their work with others and upload it to Shotgun for review. I also designed several features for the system tray app that never made it into production, including:


- UI for an admin-facing configuration flow to customize app launchers. This is currently handled by setting up software entities on the web to map file paths to a custom location.
- A way for artists to view, sort, and filter tasks assigned to them from the system tray.
- An admin flow for handling conflicting configs from the Desktop App.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518923401086_Toolkit+Apps.3678816594384c42961ae2e447fa2892.png)

---
# Publish App

The publish app allows artists to publish their work so that it can be used by artists downstream. In Shotgun, publishing a file means creating a record with information about the file being published, including the path, version number, artist info, related Shotgun context, etc. Once the file is tracked in Shotgun, other users can load it into their own environment via the Loader app.

Before:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518923459065_DraggedImage.0be9425765824854a60a9acdfc827130.png)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518923472187_DraggedImage.e5e5d33bf1434f8881885ba2ef6b2f66.png)


**The new publisher supports dragging in any file for publishing and has the ability to run standalone, outside of a content creation tool.** All basic functionality now works out of the box, giving artists the tools they need to start tracking and sharing files right away.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518940285430_file.jpeg)


Our most extensively iterated on feature was the ability to include more than one top-level file in one publish. We landed on a master-detail-esque treatment because it offered the most flexibility in terms of multi-editing, inline validation, and visual hierarchy affordances.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518923533201_DraggedImage.af2de32f9a664845b121a3dee122fbc0.png)


For multi-document workflows in content creation software like Photoshop or Nuke Studio, all open files are displayed in the publish item list. Only the current/active document is expanded and checked.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518923569380_multi_doc.b811dc0267b14c23a9f5d00d6fe3a34a.png)


When there are multiple top-level items to publish, a summary item is also included at the top of the list.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C6B8C222631FC7174CC1B6C223D809CF0F0B11F4F3F529CB31F0C08B2EA23754_1518923590090_summary.ff2e2e1041d14233abfa606539b414a6.png)

---