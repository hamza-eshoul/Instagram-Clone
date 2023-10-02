## Instagram Clone Project

[![fr](https://img.shields.io/badge/lang-fr-blue)](README.fr.md)

This is the repository for the Full Stack JavaScript Final Project built for the [Odin Project](https://www.theodinproject.com/).

The goal of the project was to replicate our favorite website as close as possible using the React JS framework for the frontend and the Firebase backend as a service platform for the backend.

The website that I chose to replicate is the website of the social media platform Instagram.

- Project's Live Preview url - https://skynter-instagram-clone.onrender.com/

## Homepage

![Homepage Screenshot](/screenshots//Homepage-screenshot.png)

## Instagram Post

![Article's Page Screenshot](/screenshots//Instagram-post-screenshot.png)

## Mobile Version

![Mobile Version Screenshot](/screenshots/Mobile-Version%20screenshot.png)

## Technologies Used

- Cloud Firestore
- Firebase Storage
- Firebase Authentication
- ReactJS
- Tailwind CSS

## Key features

- Persistent Authentication using Firebase Authentication
- Creating / Deleting Posts
- Adding Post Comments
- Realtime User Search Interface
- Fully Responsive User Interface

## Installation

To run the project locally :

- Access the project's root folder and run the following command to spin up a local development server :

```
npm start
```

- Open http://localhost:3000 with your browser to access a local version of the project's client

- Most of the backend Firebase functionality is included in custom React JS hooks in the hooks folder that lives within the src folder of the project.

- The main Firebase custom hooks are the useFirestore and the useCollection hooks.

- The useFirestore custom hook includes reusable functions to add, update and delete documents in the Cloud Firestore database.

- The useCollection custom hook fetches all the documents of a given collection using realtime data.
