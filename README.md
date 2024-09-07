# ReachInbox Front-end Assignment

Welcome to the ReachInbox Assignment repository!

This project involves the implementation of various features for the ReachInbox platform, including user authentication, onebox data management, custom text editor functionality, and API integrations. The goal is to create a seamless and efficient user experience while ensuring robust backend support.

## Table of Contents

- [Project Overview](#project-overview)
- [Live Project](#live-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Resources](#resources)


## Project Overview

The ReachInbox Assignment is designed to simulate a mini version of the ReachInbox web-application. It includes:

- **Login Page**: Users can log in with their credentials with google signup authentication.
- **Onebox Screen**: After logging in, users are redirected to the onebox screen, where they can view, reply to, and delete threads.
- **Custom Text Editor**: A specialized text editor with custom buttons and functionality tailored for the platform to reply for the threads.
- **API Integrations**: Interaction with the backend through various API endpoints for managing onebox data and replies.

## LIVE PROJECT

  - **Live link** : https://reachinbox-anil.netlify.app/

  - **Login Page** :
    
    ![Login Page](https://github.com/anil-52026/Reachinbox-Assignment/blob/main/src/assets/loginpage.png)

  - **Dark Onebox** :

    ![Onebox Screen](https://github.com/anil-52026/Reachinbox-Assignment/blob/main/src/assets/darkonebox.png)

  - **Light Onebox** :

    ![Onebox Screen](https://github.com/anil-52026/Reachinbox-Assignment/blob/main/src/assets/whiteonebox.png)

  - **All Inbox** :

    ![All Inbox](https://github.com/anil-52026/Reachinbox-Assignment/blob/main/src/assets/Allinbox.png)

  - **Custom Editor** :

    ![Reply Inbox](https://github.com/anil-52026/Reachinbox-Assignment/blob/main/src/assets/replybox.png)

  - **Delete Shortcut** :

    ![Delete Shortcut](https://github.com/anil-52026/Reachinbox-Assignment/blob/main/src/assets/DELETEKEY.png)

    
## Features

### 1. **Login Page**
   - Implemented based on the provided Figma design.
   - Secure user authentication and session management.
   
### 2. **Onebox Screen**
   - Redirects users to the onebox screen after successful login.
   - Lists all threads fetched from the backend.
   - Allows users to delete threads with the DELETE endpoint.
   - Supports replying to threads via a custom text editor.

### 3. **Custom Text Editor**
   - A tailored text editor for composing and editing replies.
   - Includes custom buttons like “SAVE” and “Variables” for enhanced functionality.
   
### 4. **Keyboard Shortcuts**
   - “D” key for deleting a thread.
   - “R” key for opening the Reply box.

### 5. **API Integrations**
   - **GET /onebox/list**: Fetches the list of threads for the onebox screen.
   - **GET /onebox/:thread_id**: Retrieves details for a specific thread.
   - **DELETE /onebox/:thread_id**: Deletes a specific thread.
   - **POST /reply/:thread_id**: Sends a reply to a specific thread.

### 6. **Dark and Light Mode**
   - The application supports both dark and light modes, enhancing usability based on user preference.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript,Typescript
- **APIs**: Postman API
- **Authentication**: JWT (JSON Web Token)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anil-52026/Reachinbox-Assignment.git
   cd Reachinbox-Assignment

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the application**:
   ```bash
   npm run dev


## Resources

 - **Figma File** : https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design
   
 - **API documentation** : https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27
