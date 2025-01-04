---
title: 'QuQuiz'
description: 'QuQuiz is a simple online quiz application that provides quiz creation features, real-time scoring and leaderboard, and quiz schedule management.'
role: 'Backend Developer for Notification Service'
featuredImage: '../../assets/images/projects/ququiz.png'
status: 'Public'
technologies:
  - nodejs
  - rabbitmq
  - docker
startDate: 2024-04-05
endDate: 2024-06-11
---

## Overview

QuQuiz is a simple online quiz application that allows users to create quizzes accessible to everyone. This application is equipped with real-time assessment and a real-time leaderboard. Users can also manage quizzes, including setting the start and end schedules for the quiz.

QuQuiz is the final project of the Scalable Software Development course. It aims to train students in building software that can adjust its capacity to the workload received.

### Team members

- Andreas Notokusumo
- Azhar Bagaskara (Me)
- Alexander Adam Mukhaer
- David Lois
- Lintang Birda Saputra

## Problem Statement

Based on the lecturer's instructions, we were assigned to create a quiz application that could be scaled to handle many users. This application requires several features: user authentication, quiz management, quiz scheduling, quiz work, real-time assessment, real-time leaderboard, and notification. 

To solve this problem, a microservice architecture using message queues and gRPC was implemented in the QuQuiz. This architecture allows each service in QuQuiz to be scaled independently without disrupting other services. The services in the QuQuiz are as follows:

1. User Service: User management and authentication.
2. Quiz Service: Quiz management.
3. Notification Service: Notification sender.
4. Quiz Query Service: Quiz read action.
5. Scoring Service: Quiz assessment.
6. Web Application: User interface.

## Key Features

1. User Authentication
2. Quiz Management
3. Quiz Scheduling
4. Quiz Taking
5. Real-time Scoring and Leaderboard
6. Notifications

## Responsibility

As one of the backend developers, I am responsible for creating the Notification Service. The Notification Service sends notification messages in the form of emails to users. Two types of notifications are sent: notifications about quiz reminders that will start and notifications about quiz results in participant leaderboards.

The notification service acts as a RabbitMQ message consumer. In other words, the notification service will email when a message enters the queue. As a result, I need to make an agreement with other services (services that act as publishers), namely the quiz service (Adam) and the scoring service (Lintang), regarding the exchange name, exchange type, routing key, queue name, and message format. This agreement is important so the notification service can consume messages correctly. The message's contents are the data needed to send emails, such as user email, username, score, etc.

### Testing

After completing the notification service, I conducted testing to ensure that this service was running properly. There are two types of testing that I did, namely unit testing and email testing:

#### 1. Unit Testing

Unit testing conducted verifies several aspects, namely, ensures that the notification service is successfully connected to RabbitMQ and successfully consumes incoming messages, ensures that the notification service will display an error log if the message format from the publisher is not appropriate, and ensures that the notification service will display a success log "All emails processed" if the message format is suitable and the email is successfully sent. Unit testing is done using the Jest testing framework.

#### 2. Email Testing

This email testing aims to ensure the SMTP server receives the email successfully. This testing uses an email delivery platform, namely [Mailtrap.io](https://mailtrap.io/). In Mailtrap, we can also see the form of the email sent. The following is an example of an email that has been sent in Mailtrap:

![QuQuiz email screenshot](../../assets/images/projects/ququiz-email-screenshot.png 'QuQuiz email screenshot')

## Results

Thus, I have successfully developed and integrated a Notification Service for QuQuiz with other services. This service can be scaled horizontally by increasing the number of consumers to withstand high demand spikes.

## Links

- QuQuiz GitHub: [github.com/ququiz](https://github.com/ququiz)
- QuQuiz Notification Service Repository: [github.com/ququiz/ququiz-notification](https://github.com/ququiz/ququiz-notification)