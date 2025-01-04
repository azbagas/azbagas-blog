---
title: 'Telegram Logbook Bot'
description: "Telegram Logbook Bot is a telegram bot that is designed to record and manage employees' daily logbooks."
role: 'Programmer'
featuredImage: '../../assets/images/projects/telegram-logbook-bot.png'
status: 'Private'
technologies:
  - php
  - laravel
  - mysql
startDate: 2024-07-06
endDate: 2024-11-22
---

## Overview

Telegram Logbook Bot is a telegram bot that is designed to record and manage employees' daily logbooks. It is a project held by the Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada (UGM). This bot was created due to the need for office administration to create logbooks as work reports easily.

This project is a development of the previous version that already exists. In the previous version, [Raihan](https://github.com/raihan-faza) and I developed this bot using native PHP. This time, the bot was rewritten using the Laravel framework to make development easier and more convenient.

## Problem Statement

A logbook is a document required in the work activities of employees at the Faculty of Mathematics and Natural Sciences, UGM. Employees must report the logbook as proof of their daily work. However, the irregularity and spread of logbook records make it difficult for employees to make reports. Therefore, the Telegram logbook bot is here to solve this problem. By centralizing logbook records in one place, employees can easily review and make reports on their logbooks. Also, Telegram was chosen because of its efficiency and ease of use.

## Key Features

- Logbook management, such as creating, updating, and deleting logs.
- Ability to save photos, documents, and locations as supporting logbook files.
- Notifications to remind employees if they have not filled in the logbook on that day.
- Download monthly logbook files as reports.
- User authentication to prevent people outside the office from using this bot.
- Special admin role to manage employee data.

## Responsibility

In this project, I was responsible for consulting with the client to gather the requirements that the bot had to fulfil, constructing the Software Requirements Specification (SRS) document, programming the bot, and making revisions requested by the client. I also made sure that the logbook queries created were efficient to avoid problems like the N+1 problem.

## Results

I completed the bot according to the client's requirements. This bot has been running well and can assist employees in recording their logbooks.
