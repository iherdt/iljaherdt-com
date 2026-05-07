---
title: "Heart Fusion Camp: LED Art at Burning Man"
date: "2026-04-15"
excerpt: "Creating an interactive LED labyrinth and cuddle dome for the playa, from firmware to fairy lights."
tags: ["Burning Man", "LED", "Hardware", "Art"]
---

In 2025, a few friends and I started [Heart Fusion Camp](https://heartfusioncamp.com/) with a simple idea: build a glowing space where strangers become friends.

## The installation

Heart Fusion is an LED-lit Heart Glow Labyrinth. You walk through pulsating heart-shaped arches into a space of reflection and connection, then continue into the cuddle puddle dome where everyone contributes a light to the collective glow.

The labyrinth stays lit all night for chill vibes and late-night conversations.

## The tech behind the glow

The heart arches and ambient lighting run on ESP32 microcontrollers with WS2812B LED strips, powered by custom firmware forked from [WLED](https://github.com/iherdt/WLED-spectra). I added audio-reactive modes that sync the lights to music using FFT analysis, so the hearts pulse with the beat.

Power management on the playa is its own challenge. Each arch draws significant current, and everything needs to survive dust storms, temperature swings, and the occasional accidental kick. We use weatherproof enclosures, redundant power supplies, and a lot of zip ties.

## What Burning Man teaches you about software

Building for the playa is the ultimate exercise in resilience engineering. Your code *will* crash at 3 AM when it's 40 degrees and dusty. Your connectors *will* corrode. Your carefully planned network topology *will* get rearranged by someone who needed the ethernet cable for something else.

You learn to build systems that fail gracefully, restart automatically, and work without you standing over them. Those lessons carry directly back to production software.

## Come find your glow

Heart Fusion is open to new members each year. If you want to build interactive art, dance under the stars, and make something beautiful with a great crew, [apply to join](https://heartfusioncamp.com/).
