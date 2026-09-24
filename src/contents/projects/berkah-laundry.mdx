---
title: 'Berkah Laundry'
description: 'A multi-outlet laundry management system and mobile POS featuring automated QRIS cashless payments, Bluetooth thermal receipt printing, and customer wallet management.'
role: 'Full Stack Developer'
featuredImage: '../../assets/images/projects/berkah-laundry.png'
status: 'Private'
technologies:
  - reactnative
  - expo
  - zustand
  - typescript
  - php
  - laravel
  - mysql
startDate: 2025-01-14
endDate: 2026-02-09
---

## Overview

**Berkah Laundry** is a multi-outlet laundry management system and mobile Point of Sale (POS) designed to streamline end-to-end laundry operations. The application centralizes counter checkouts, multi-stage order tracking, customer digital wallet management, and daily expense recording into a unified platform. Its highlight capabilities include automated QRIS cashless payments via Midtrans, dual-format Bluetooth thermal printing for receipts and garment bundle tags, and role-based access control between business owners and counter staff. Developed solo from the ground up, the system pairs a robust **Laravel REST API** backend powered by **MySQL** with a performant cross-platform mobile client built using **React Native (Expo)**.

## App Screenshots

![Dashboard and Outlet Management](../../assets/images/projects/berkah-laundry-ss-01.png 'Dashboard and Outlet Management')

![Order List and Order Detail](../../assets/images/projects/berkah-laundry-ss-02.png 'Order List and Order Detail')

![Create Order and QRIS Payment](../../assets/images/projects/berkah-laundry-ss-03.png 'Create Order and QRIS Payment')

![Pre-formatted WhatsApp Message and Receipt](../../assets/images/projects/berkah-laundry-ss-04.png 'Pre-formatted WhatsApp Message and Receipt')

## Problem Statement

I built this project for my aunt, who runs a growing laundry business. She previously relied on an existing commercial laundry app from the Google Play Store to manage her daily counter operations. While it served as a solid starting point, resolving occasional technical questions required waiting on external customer support rather than having immediate assistance. More importantly, her business had specific operational requirements that the off-the-shelf app could not accommodate.

The primary missing feature was customer wallet management. My aunt needed a system where customers could maintain deposit balances and, crucially, where cashiers could save transaction change (*kembalian*) directly into customer wallets to resolve daily coin and small bill shortages. Furthermore, she wanted full control over cashless transactions by integrating her own QRIS payment gateway directly, enabling automated payment settlements while minimizing third-party platform admin fees.

Combining these core requirements with the need for specialized thermal tag printing and direct customer WhatsApp messaging, we decided to develop a custom solution from scratch. To ensure the new system could be adopted immediately without disrupting ongoing counter operations, I deliberately designed the mobile interface around the familiar layout and workflows of her previous app, enabling her staff to transition smoothly with zero learning curve.

## Key Features

- **Multi-Outlet Data Isolation:** Strictly scopes orders, expenses, customers, and staff per outlet, allowing the owner to switch active branches and view isolated metrics seamlessly.
- **Automated QRIS via Midtrans:** Generates dynamic QRIS codes with automated webhook reconciliation and database locking to confirm payments instantly, while supporting manual tracking for cash, debit, and bank transfers.
- **Customer Digital Wallet & Change Storing:** Manages customer deposit balances and allows cashiers to save transaction change (*kembalian*) directly into customer wallets to eliminate coin shortages.
- **Dual-Format Bluetooth Printing (58mm):** Generates both itemized customer receipts and compact garment bundle tags, supported by background auto-reconnection and a native Android socket patch.
- **Role-Based Access Control (RBAC):** Restricts financial reports, outlet management, and record deletions to the Owner, while optimizing staff screens for counter sales and daily expense logging.
- **Flexible Pricing & Dynamic Units:** Supports kiloan (kg), satuan (pcs), and meteran (m) service units, automated retail cash rounding (down to nearest Rp 500), and historical price snapshot preservation.
- **Direct WhatsApp Messaging:** Dispatches pre-formatted digital invoices and order completion pickup notices directly to customers in one tap.
- **Business Analytics & Cashless Feed:** Provides today's income, 7-day revenue/volume trends, top customer rankings, and a centralized audit feed tracking QRIS and manual cashless transactions.

## Responsibilities

As the sole engineer on the project, I took full ownership of the technical design, architectural implementation, hardware debugging, and client deployment:

- **Backend Architecture & Database Modeling (Laravel, MySQL):**
  - Designed the relational database schema with foreign key constraints, indexes, and soft deletes (`SoftDeletes` / `withTrashed`) across users, customers, and packets to maintain comprehensive audit trails.
  - Implemented multi-outlet data scoping through request middleware and user context, ensuring strict tenant isolation.
  - Structured domain services (e.g., `PaymentService`, `OrderService`) to separate business calculations, wallet balance adjustments, and invoice generation from HTTP controllers.

- **Payment Pipeline, Concurrency & Security:**
  - Integrated Midtrans Core API for dynamic QRIS generation, status polling, and cancellation handling, alongside manual recording workflows for cash, debit, and bank transfers.
  - Implemented cryptographic signature verification (`hash('sha512', ...)`) to authenticate incoming Midtrans webhooks.
  - Applied pessimistic row-level locking (`DB::transaction` with `lockForUpdate()`) to prevent race conditions during concurrent webhook callbacks and counter payment updates.

- **Query Optimization & Aggregated Analytics:**
  - Optimized REST API endpoints with Eloquent eager loading (`with(['customer', 'packets.service', 'payment', 'outlet'])`) to eliminate N+1 query bottlenecks.
  - Authored multi-table aggregation SQL subqueries to produce date-continuous 7-day sales reports, volume metrics grouped by unit type (kiloan, satuan, meteran), and cashless payment audit feeds.

- **Fullstack Mobile Client Development (React Native, Expo, TypeScript):**
  - Developed the mobile application using Expo Router with file-based routing and role-based route guards (`OwnerGuard`).
  - Managed server synchronization and client caching using TanStack React Query, combined with Zustand for lightweight local state management (printer state, active sessions).
  - Built dynamic forms with rigorous schema validation using React Hook Form and Zod.

- **Hardware Integration & Native Android Patching:**
  - Programmed ESC/POS command builders in TypeScript to handle alignment, column wrapping, and bitmap graphics on 58mm thermal printers.
  - Diagnosed and resolved low-level Android Bluetooth RFCOMM socket failures within the third-party printer library by writing and applying a native Java patch via `patch-package`.
  - Built an auto-connect lifecycle hook (`useAutoConnectPrinter`) that detects previously paired Bluetooth MAC addresses and reconnects seamlessly on app launch.

- **Testing, Environment Configuration & Build Pipelines:**
  - Configured local development and webhook tunneling via ngrok, maintaining full API test suites in Bruno.
  - Configured Android build profiles and managed environment secrets using Expo Application Services (EAS Build).

## Results

The deployment of Berkah Laundry delivered an immediate operational upgrade with zero business downtime or staff retraining, thanks to the familiar UI layout. Integrating automated QRIS payments and the "Save Change to Wallet" feature significantly accelerated counter checkouts and eliminated daily cash-change bottlenecks. Meanwhile, dual-format Bluetooth thermal printing streamlined garment tagging in the workshop. Most importantly, transitioning to a dedicated custom system gave my aunt immediate, direct technical support and full ownership over her business operations and data.


