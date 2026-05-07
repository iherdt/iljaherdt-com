---
title: "Building CalRun: A Caltrain App for Daily Riders"
date: "2026-05-06"
excerpt: "How scratching my own itch turned into a full-featured iOS app with live train tracking, reminders, and more."
tags: ["iOS", "SwiftUI", "CalRun"]
---

Every day I ride Caltrain between San Jose and San Francisco. The existing apps were fine for looking up schedules, but I wanted something faster, something built around *my* commute.

So I built CalRun.

## What started simple

The first version was straightforward: pick your home and work stations, see the next trains, tap to flip direction for the ride home. No accounts, no bloat, just your schedule.

## Then it got interesting

Once the basics worked, I started asking: what if I could *see* the trains? That led to the live map, where every active Caltrain moves along the corridor in real time, with countdown timers and directional arrows. The trains follow the actual track path through the peninsula, not just straight lines between stations.

Then came pinned routes, so you can bookmark your regular trains and see them at the top of the list. And reminders, because knowing your train leaves in 12 minutes is more useful than knowing it leaves at 5:15.

## The tech

CalRun is built with SwiftUI and MapKit. It pulls schedule data from GTFS feeds via 511.org, uses StoreKit 2 for subscriptions, and schedules local notifications for departure and arrival reminders that work even when the app is closed.

The live train positions are computed by interpolating between stations based on scheduled times and a detailed track path with waypoints that follow the real Caltrain corridor.

## What I learned

Building for yourself is the best way to stay motivated. Every feature in CalRun exists because I personally wanted it during my commute. That focus keeps the app fast and simple.

[CalRun is available on the App Store.](https://apps.apple.com/app/calrun/id6759998408)
