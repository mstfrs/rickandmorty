<p align="center">
<a href="https://www.linkedin.com/in/mustafaors/" target="_blank"><img src="photo1.png" alt="screenshot" width='500px' target=_blanked></a>
</p>
●	Rick and Morty Case Study

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Project Skeleton ](#project-skeleton)
  - [Links](#links)
  - [Built with](#built-with)
  - [Installation](#Installation)  
  - [Author](#author)

## The challenge

Hello. I used ReactJs, TypeScript, Redux Toolkit, Redux Thunk, React Router, Ant Design, axios technologies in the project.

The project consists of 3 pages. On the first page, location information retrieved from the Rick and Morty API is displayed in grid order.

When you click over the location, you are able to see all or filter the characters with status indicator(dead, alive or unknown for that selected location.)

On Characters Page, when you click on one of the character names, you are redirected to the character details page.



## Project Skeleton

```
●	Rick and Morty Case Study
|
|----readme.md       
SOLUTION
├── public
│     └── assets
├── src
│    ├── components
│    │       ├── CardAvatar
│    │       |    ├── index.tsx
│    │       ├── CharacterCard
│    │       |    ├── index.tsx
│    │       ├── CharacterDetailCard
│    │       |    ├── index.tsx
│    │       ├── CharacterList
│    │       |    ├── index.tsx
│    │       ├── Header
│    │       |    ├── index.tsx
│    │       ├── LoadingPage
│    │       |    ├── AvatarLoading
│    │       |    |  ├── index.tsx
│    │       |    ├── CardLoading
│    │       |    |  ├── index.tsx
│    │       ├── LocationCard
│    │       |    ├── index.tsx
│    │       ├── LocationCardList
│    │       |    ├── index.tsx
│    │       ├── Paginate
│    │       |    ├── index.tsx
│    ├── pages
│    │       ├── CharacterDetail
│    │       |    ├── index.tsx
│    │       ├── Characters
│    │       |    ├── index.tsx
│    │       ├── Home
│    │       |    ├── index.tsx
│    ├── Redux
│    │       ├── characterSlice.tsx
│    │       ├── locationSlice.tsx
│    │       ├── store.tsx
│    ├── Router
│    │       ├── AppRouter.tsx
│    ├── Services
│    │       ├── serviceHelpers.tsx
│    │       ├── rickandmorty.service.tsx   │    │      
│    ├── Types
│    │       ├── Type.tsx
│    ├── App.tsx
│    ├── App.css
│    ├── index.tsx
│    └── index.css
├── package.json
└── yarn.lock
```
## Screenshot
<p align="left">
<a href="https://phenomenal-gelato-565c59.netlify.app"><img src="screen.gif" alt="screenshot" target=_blanked></a>
</p>

## Links
<hr>
<b>Check The Live Website ➡️</b> <a href="https://phenomenal-gelato-565c59.netlify.app"> Live Website </a> 
<hr>

### Built with

- `@ReactJs`
- `@TypeScript`
- `@reduxjs/toolkit`
- `react-redux`
- `redux-Persist`
- `axios`
- `react-router-dom`
- `@mui/material-ui`
- `@emotion/react`


### Installation

1. Clone this project:

   ```bash
     Clone the project: `https://github.com/ozkankomu/beta_case_study`
   ```
2. Install the necessary dependencies:

   ```bash
   npm install / yarn
   ```
## Usage

1. Start the application:

   ```bash
   npm run start / yarn start
   ```
2. Open your web browser and go to [http://localhost:3000/](http://localhost:3000)

## Author

- Author - [Ozkan Komu]

<center> &#8987; Happy Coding  &#9997; </center>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
