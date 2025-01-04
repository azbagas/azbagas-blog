---
title: 'EcoCraft: Turn Trash into Treasure'
description: 'EcoCraft is an application that helps users repurpose recyclable waste into creative crafts by providing ideas based on uploaded photos and allowing them to share their creations.'
role: 'Backend Developer and Cloud Engineer'
featuredImage: '../../assets/images/projects/ecocraft.png'
status: 'Public'
technologies:
  - typescript
  - express
  - docker
  - swagger
  - postman
  - googlecloud
startDate: 2024-10-27
endDate: 2024-12-13
---

## Overview

EcoCraft is a mobile application designed to creatively repurpose recyclable waste into practical crafts. Users can discover a wide range of craft ideas by uploading photos of recyclable materials, which are then transformed into beautiful and functional crafts. Users can also post their own craft ideas and let other people know about and try them.

This project is part of the [Bangkit Academy](https://www.linkedin.com/company/bangkit-academy/) 2024 Batch 2 Capstone Project. Students from different learning paths come together to create a project as an application that can solve real-world problems.

### Team members

#### Machine Learning

- Nicolas Dwi Hardjoleksono
- Muhammad Haikal Syafi Alawiy
- Aizar Hafizh Soejadi

#### Cloud Computing

- Azhar Bagaskara (Me)
- Hafizh Al Muzakar

#### Mobile Development

- Afrina Layanti Pasaribu
- Muhammad Arda’ Zainurrohim

## Problem Statement

In 2023, Indonesia's Ministry of Environment and Forestry reported that over 40 million tons of waste were generated annually across 380 cities in Indonesia, with only 60.2% of them managed properly and 39.8% of them unmanaged[^1]. Besides that, Sustainable Waste Indonesia (SWI) also reported that the recycling rate of plastic waste in Indonesia has only reached around seven percent, but for PET plastic—commonly used in bottle packaging and bottled drinking water gallons—the recycling rate has reached 75 percent[^2]. Given the severity, we must solve this serious problem to save our environment.

One existing way to solve this problem is to use recycled waste to make valuable crafts. However, most people are not interested in doing this because they do not know what crafts to make. Therefore, we created a digital solution called EcoCraft. With EcoCraft, we aim to make crafting activities more enjoyable and contribute to reducing environmental waste.

## Key Features

- Waste Type Detection: Automatically identifies recyclable waste types using advanced detection algorithms.
- Craft Recommendations: Provides personalized craft suggestions based on the detected waste materials.
- Craft Ideas Library: Access a curated list of creative craft ideas to inspire upcycling projects.
- Detection History: Keeps a record of previously detected waste types and associated recommendations.
- Craft Ideas Posting: Share your creative upcycling projects with the community.
- User Authentication: Secure login and registration for personalized user experiences.
- Profile Customization: Personalize your profile to reflect your unique crafting identity.

## Responsibility

As a Cloud Computing student, I am responsible for EcoCraft's backend and deployment. During development, I collaborated with Hafizh to design a reliable system.

The first thing we did was create a system design. We designed the Google Cloud architecture and estimated expenses using the Google Cloud Pricing Calculator. The following is the EcoCraft Cloud Architecture:

![EcoCraft Cloud Architecture](../../assets/images/projects/ecocraft-cloud-architecture.png 'EcoCraft Cloud Architecture')

We used Cloud Run to host RESTful APIs and machine learning services. Cloud Run was chosen for its seamless integration with CI/CD pipelines, streamlining development and deployment using Cloud Build. We used Firestore for the database because it fits the business needs. Furthermore, Cloud Storage is used to store craft images, user photos, and other files.

Since this project is still small-scale and limited credit was given, we minimized expenses by configuring all services with minimum specifications. Therefore, the estimated cost for one month is around 25 cents.

We used Express.js as the framework on the backend and Swagger as the API documentation. Before the API creation process, we discussed with the mobile development team to create an API contract by reviewing the UI design. That way, we can create the API appropriately and according to needs. The following is a snippet from the API documentation:

![EcoCraft API Documentation](../../assets/images/projects/ecocraft-api-documentation.png 'EcoCraft API Documentation')

We implemented JSON Web Tokens (JWT) in the authentication feature to ensure secure communication between two parties. We also used Docker as a containerization tool and a deployment requirement with Cloud Run.

## Results

I successfully created the EcoCraft backend and carried out the deployment process well. The mobile development team successfully integrated the deployed API. Thus, the EcoCraft project has been completed 100% according to the deadline set by the Bangkit team.

## Links

- EcoCraft GitHub: [github.com/eco-craft](https://github.com/eco-craft)
- EcoCraft Backend Repository: [github.com/eco-craft/ecocraft-backend](https://github.com/eco-craft/ecocraft-backend)
- Google Cloud Pricing Calculator: [Cost estimation](https://cloud.google.com/products/calculator?_gl=1*60py8j*_ga*ODQ3MjI3NTEzLjE3MjcxNDQ1NDU.*_ga_WH2QY8WWF5*MTczMjMyNzU2MS4zMy4xLjE3MzIzMjc2MDEuMjAuMC4w&hl=en&authuser=1&dl=CjhDaVF5WlRFeU4yVXlaUzAwTnpBMkxUUXdZVFF0WW1GbU5TMHlZakF5WXpaaU56Y3dNVFVRQVE9PRAXGiQwNzg4MTkyQS01RjJBLTQ4OUEtOTJBNy04NDA3RjE5QTg5NUQ)

## References

[^1]: https://sipsn.menlhk.go.id/sipsn
[^2]: https://news.republika.co.id/berita/rodgy1484/tingkat-daur-ulang-sampah-plastik-di-indonesia-masih-rendah