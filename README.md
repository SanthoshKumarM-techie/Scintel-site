# Scintel — Association Management & Event Platform

> A full-stack web platform for a college association to showcase events, manage association members, publish announcements, and collect student suggestions through a dedicated admin portal.

##  Overview

Scintel is a web platform developed for a college association to provide a centralized digital presence for its activities and initiatives.

The platform allows students to explore the association, view its members, discover events, receive event announcements, and submit suggestions.

A dedicated **admin portal** is integrated with the backend, allowing authorized association members to manage the website's content without requiring any programming knowledge.

The primary goal of the project is to make the association's website **dynamic, maintainable, and easy to manage** while providing students with a clear and engaging interface.

##  Project Goals

- Create a centralized platform for the association
- Showcase events conducted by the association
- Display association members and their roles
- Publish upcoming event announcements
- Collect suggestions and feedback from students
- Provide a simple content-management experience for association members
- Allow non-technical users to update website content without modifying source code
- Separate the public-facing website from administrative operations

##  Features

###  Public Website

Students can:

- Explore the association
- View association members
- Browse completed events
- Discover upcoming events
- View event announcements
- Submit suggestions
- Access relevant association information

###  Admin Portal

Association members can manage website content through an administrative interface.

The admin portal allows authorized users to:

- Add events
- Update event information
- Manage event announcements
- Add or update association members
- Manage website content
- View student suggestions
- Update information without directly modifying the source code

The admin portal was specifically designed so that **association members with little or no coding experience can maintain the website independently.**

##  System Architecture

```text
                    Scintel Platform
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
      Public Website              Admin Portal
             │                         │
             │                         │
             └────────────┬────────────┘
                          ▼
                    Backend / API
                          │
                          ▼
                       Database

```
## Public User Flow

```text

Student
   ↓
Website
   ↓
Request Data
   ↓
Backend API
   ↓
Database
   ↓
Display Content

```

## Admin Flow

```text

Association Member
        ↓
   Admin Portal
        ↓
 Authentication
        ↓
   Backend API
        ↓
     Database
        ↓
 Updated Website Content

```

## Key Engineering Concept

ontent Management Without Coding

One of the main engineering goals of Scintel was to remove the dependency on developers for routine website updates.

Instead of requiring an association member to modify React components or source files:

```text
Traditional Website

Content Change
     ↓
Find Source Code
     ↓
  Modify Code
     ↓
   Build
     ↓
   Deploy

```

## Scintel provides:

```text
Scintel

Content Change
     ↓
Admin Portal
     ↓
Update Content
     ↓
Backend
     ↓
Database
     ↓
Website Automatically Reflects Changes

```
>This makes the website easier to maintain and allows non-technical association members to manage their own content.

## User Roles

### Students

Students interact with the public website to:

- View events
- Explore association members
- Read announcements
- Submit suggestions

### Association Members / Administrators

Administrators use the admin portal to:

- Manage events
- Manage announcements
- Manage association members
- Review student suggestions
- Maintain website content

## Data Flow

```text

                 ┌──────────────────┐
                 │   Student/User   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  Public Website  │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │    Backend API   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │     Database     │
                 └──────────────────┘
                          |
                          │
                          ▼                      
                 ┌──────────────────┐
                 │ Association Admin│
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Admin Portal   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │    Backend API   │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │     Database     │
                 └──────────────────┘

```

##Tech Stack

### Frontend

  - React

### Backend

  - Node
  - Express

### Database

  - Postgrsql

### Tools

  - Git
  - Github
  - VS Code
  - Postman

## Main Website Sections

The platform includes sections for:

  - Association information
  - Events
  - Event announcements
  - Association members
  - Student suggestions
  - Other association-related content
    
## Admin Portal

The admin portal acts as the content management layer of the platform.

Instead of hard-coding information into the frontend, administrators can manage content through the interface.

For example:

```text

Admin adds new event
        ↓
   Admin Portal
        ↓
   Backend API
        ↓
    Database
        ↓
  Public Website
        ↓
Students see the new event

```

This approach makes the platform more dynamic and maintainable.

## Key Engineering Challenges

### 1. Making the Website Dynamic

The public website needs to display information that can change frequently, such as events and announcements.

This required separating website content from the frontend implementation.

### 2. Building an Admin Experience for Non-Technical Users

The admin portal needed to be simple enough for association members without programming knowledge.

The interface therefore focuses on straightforward content management rather than exposing technical implementation details.

### 3. Connecting Frontend and Backend

The frontend communicates with the backend to retrieve and update association information dynamically.

### 4. Managing Different User Interactions

The system supports two different experiences:

```text
Students
   ↓
Read / Explore / Submit Suggestions


Administrators
   ↓
Create / Update / Manage Content

```
## What I Learned

Through this project, I gained practical experience in:

  - Full-stack web development
  - Frontend-backend integration
  - REST API communication
  - Database-driven applications
  - Admin portal development
  - CRUD operations
  - Designing interfaces for non-technical users
  - Managing dynamic website content
  - Structuring a real-world web application
  - Git and collaborative development

## Project Status

Active / Maintained

> The platform is being developed and improved based on the association's requirements and future content-management needs.

## Future Improvements

Potential improvements include:

  - Role-based admin permissions
  - Improved authentication and authorization
  - Event registration
  - Image/media management
  - Search and filtering
  - Improved accessibility
  - Performance optimization
  - Automated deployment
    
## Author

SanthoshKumar M

Software Developer focused on Java, Data Structures & Algorithms, frontend development, UI/UX design, and full-stack application development.

GitHub: [SanthoshKumarM](https://github.com/SanthoshKumarM-techie)

LinkedIn: www.linkedin.com/in/santhoshkumar-m-576951368

Portfolio: Add your portfolio
