# Playwright Automation Test Suite

This repository contains an end-to-end (E2E) test automation framework built using **Playwright** and **TypeScript**. It features multiple test suites targeting various web applications to demonstrate automated UI testing, component verification, and standard QA workflows.

## 🚀 Features
* **Multi-App Testing:** Consolidated test suites for distinct web environments (e.g., OrangeHRM, SauceDemo, TodoApp).
* **Page Object Model (POM):** Optimized locators and actions separated into modular page classes for high maintainability.
* **TypeScript Native:** Full type safety, auto-completion, and modern JavaScript features.
* **Cross-Browser Testing:** Configured to run tests seamlessly across Chromium, Firefox, and WebKit.

---

## 📁 Repository Structure

The project is organized into dedicated directories based on targeted applications and functional testing goals:

| Folder / File | Description |
| :--- | :--- |
| **`QA Brain test/`** | Test suites covering localized functional scenarios for QA Brain platforms. |
| **`sauce demo test/`** | End-to-end purchasing and login flows for the SauceDemo application. |
| **`orange HRM test/`** | HR portal testing scenarios including login, dashboard validation, and form controls. |
| **`login test/`** | Dedicated validations for authentication forms, radio buttons, and checkboxes. |
| **`HerukoApp test/`** | Assorted UI interaction tests utilizing the HerokuApp internet playground. |
| **`todo test/`** | Classic state management and CRUD operation tests on a To-Do application. |
| **`Teter buds test/`** | Feature validations customized for the Teter Buds platform. |
| **`portfolio test/`** | Lightweight, optimized validation checks for portfolio web pages. |
| **`tests/`** | General/miscellaneous Playwright spec files. |

---

## 🛠️ Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v16 or higher recommended).

### 1. Clone the Repository
```bash
git clone [https://github.com/nikhilShakya7/Playwright.git](https://github.com/nikhilShakya7/Playwright.git)
cd Playwright
