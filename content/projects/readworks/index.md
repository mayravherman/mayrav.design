---
date: "2017"
title: "ReadWorks"
number: "03"
description: "Accessible online learning for diverse classrooms."
areas:
    - Product
    - UX
---

# ReadWorks

## *Accessible online learning for diverse classrooms.*

[ReadWorks](https://www.readworks.org/) is a nonprofit committed to solving America’s reading comprehension crisis and student achievement gap. Their platform provides K-12 teachers with reading passages, lesson plans, and integrated tools—online, for free, to be shared broadly. The materials are research-based, come from reputable sources, and are classroom ready.

I started working with ReadWorks at the end of 2015, helping take their digital platform from beta to launch over the next year and half.


## About ReadWorks

Historically, ReadWorks distributed reading content and curriculum as pdf documents through their website. Teachers would search the online catalog of thousands of lesson plans and articles, then print materials to hand out to students in class.

Here’s what it looked like at the time:


![The ReadWorks homepage when I joined (2015)](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1518994245391_DraggedImage.25099d2d4ac74b9893a43a1efceda0a2.png)
![Browsing reading passages (2015)](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1518994331236_DraggedImage.0a7ae26ea0c44d51b9421787b56c5833.png)



## Designing an e-learning platform

A new round of funding allowed ReadWorks to invest in something new: ***a platform for teachers and students to interact with articles and curriculum online***. For initial testing, the alpha release only supported a few basic features, allowing teachers to find and save articles, assign question sets and vocabulary to their students, and track student progress.

***With the concept validated, stakeholders gave the go-ahead to incorporate several new features into the online platform***, many of which were ReadWorks practices teachers and students were already familiar with in print.

Translating these to the digital space opened up a can of worms. Often work on one feature introduced a need for another, or revealed a bug in the style guide or design system that required more hours.


## Working with a nonprofit

ReadWorks is an incredibly small team with limited resources. They pride themselves on their unrivaled efficiency—an entire year of operation only costs them $1.65 per teacher or 8¢ per student—which gave us very little wiggle room within a tight budget.

We met them halfway with a hard cap on the number of hours we put in. ***The turnaround time for projects was typically around 1-3 days*****.** Any project that ran longer would be spread out over several weeks to accommodate for ReadWorks’ internal sprints. Sometimes a project would be cut short prematurely, leading to a few feeling rough and unfinished.

Overall, ReadWorks was extremely happy with the results I produced within a short timeline and tight budget. A few times, I was able to sneak in an Easter egg or two that led to new projects further down the road. For example, when working on updates to ReadWorks’ proprietary Article-A-Day™ exercise, I noticed some inconsistencies in the container / margin widths on the students’ assignment results page. Within a month, ReadWorks turned to us with an entire Style Guide project for the Student Workspace.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519156861247_S+-+Results+Question+Set+--+container.png)



## Fast, cheap results

When it first launched, ReadWorks Digital ran alongside the existing site. ***This allowed us to move quickly as we added, tested, and iterated on new features.*** We didn’t have to worry about breaking things and disrupting the teaching experience in the middle of the school year.

The positive response from teachers was overwhelming:


  “An effective digital reinvention of the trusted ReadWorks platform that makes it simple to distribute and track high-quality reading assignments.”


  “This platform saved my beginning High School ELL students from "puppy and kitty" level reading material. It was equally effective in my "no-tech" classroom where I printed out the lessons for the students.”
  
  “The digital version is making my planning work and grading much less time consuming.”

Today, the digital experience is the *only* way to experience ReadWorks. Skim through a few of my favorite projects below or check it out for yourself at [readworks.org](http://readworks.org).


---- 
# Student Highlighting and Annotations

*Tools to engage with reading content on the web.*

![Students can highlight text and make annotations when they click on the speech bubble.](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519000309096_Screen+Shot+2018-02-18+04+29+46+PM.png)



## Close reading on paper

Close reading is a key requirement of the Common Core State Standards. It encourages a thoughtful, critical analysis of a text that focuses on significant details or patterns to develop a deep understanding of form, craft, and meanings.

Close reading is a huge tool for improving reading and writing skills. It forces students to pay attention to vocabulary, sentence structure, and style through highlighting and active note-taking in the margins.


![Close reading example](http://kylefdoherty.github.io/images/close_reading.JPG)
![Close reading example](https://i.pinimg.com/736x/55/7c/b2/557cb2b7f7f7cca368e18853b55c5e53--school-style-poe.jpg)



## Tablet/mobile tradeoffs

A few device-specific constraints came up when I designed the tablet/mobile experience.

**Tooltip positioning**
The most glaring thing to consider was whether there were any OS defaults that could conflict with the tooltip we designed for the web. We collaborated closely with ReadWorks’ engineer to ensure the experience would be smooth in a mobile environment.

We agreed on a few iterations to test with teachers, ultimately stacking the tooltips vertically based on their feedback (the center option).

![A sample of iterations on the tablet experience.](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519157514423_Desktop+HD.png)


**Modal annotations**
Because of the limited, variable space on tablet and mobile screens, we had to rethink the flow of adding a note to a highlight. Instead of opening up a field to the right of the text, I split the flow in two: text selection and highlighting on the main screen, and adding a note in a modal window.

Selecting a highlighting color felt too disconnected from the previous screen. Anticipating that young kids could quickly forget what they were commenting on in the first place (lord knows it happens to me all the time), I added the highlighted text in the modal and offered a few variations to test for color-switching.


![Before: disconnected experience, lack of clarity on what’s been selected](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519157235551_3.2.a.png)
![Option A: focus on note-creation, ability to change color of highlight is secondary](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519006403036_3.2.b.png)
![Option B: focus on highlight color, note-creation specified on the submit button](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519006429654_3.2.c.png)



---- 
# Teacher Grading and Feedback

*Saving the planet, one red marker at a time.*


## Grading Written Responses
1. Teachers can easily grade written answers on a scale 一 zero, partial (25%,50%,75%), or full credit 一 and use suggested answers for reference.
2. Students' answers are displayed next to each other which makes it easy to compare and grade their answers.
3. Next to each answer, teachers can also provide constructive feedback that students will be able to see in their respective assignment results.
![](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1518994751467_DraggedImage.186ad29db5e74716859b801bb76ec9a6.png)


Bonus: All of this information is captured in [Student Progress](http://about.readworks.org/student-progress.html).


## Student Progress Features

After a student submits an assignment, their teacher can view his or her detailed results.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1519179044860_Screen+Shot+2018-02-20+06+10+28+PM.png)

---- 
# ReadWorks Article-A-Day™

*A digital companion to ReadWorks’ proprietary in-class exercise*

Article-A-Day™ is a 10 minute daily routine that systematically builds students’ background knowledge, academic vocabulary, and reading stamina.

ReadWorks made it stupid easy for teachers to integrate AAD printouts into their daily class schedules. It wanted to augment that experience with its digital platform, and brought EPIC on for help reimagining the exercise for the digital space.

<iframe src="https://player.vimeo.com/video/254905483?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


#### **Step 1.** Set the purpose for the routine:

*Words are where humans store knowledge. So we will build our knowledge by reading these articles. We will also increase our vocabulary, improve our reading stamina, and enjoy reading every day!*

#### **Step 2.** Students read an article independently.

ReadWorks has curated weekly sets of nonfiction articles. All of the articles for the week are related by topic. Students read (or listen to) one article each day.

#### **Step 3.** The "Book of Knowledge"

Students write or type 2 or 3 things that they learned from the article and would like to remember in their Books of Knowledge.

#### **Step 4.** Share knowledge in 1-2 minutes.

Simply ask a few students to share what they learned from reading. Record this info in your "Class Book of Knowledge."

## Book of Knowledge on paper
![Written Book of Knowledge](http://about.readworks.org/uploads/7/9/6/7/79679564/unknown_orig.jpeg)
![Drawn Book of Knowledge (for the kiddos)](http://about.readworks.org/uploads/7/9/6/7/79679564/img-2489-73-orig_orig.jpg)
![Class Book of Knowledge](https://s-media-cache-ak0.pinimg.com/originals/67/b5/d7/67b5d72af34d1759359f86ae4a2cf0e3.jpg)




![](https://d2mxuefqeaa7sj.cloudfront.net/s_85F0A880817E66F86123690C27BD7FEAD910CD9A40167D25798E7486EE0B78D1_1518994772525_DraggedImage.b07c59481fed4cbda5f5252a7ac75255.png)
