# Dev Stack

Dev Stack is a simple React project where developers can explore different technologies and build their own development stack. It includes frontend, backend, database, programming languages, styling tools, and DevOps technologies.

## Project Links

* GitHub Repository: https://github.com/jm-jahed/assignment-5
* Live Site: https://jm-jahed.github.io/assignment-5/

## Technologies Used

* React.js
* JavaScript
* Tailwind CSS
* DaisyUI
* Vite
* React-Toastify
* JSON

The technology information is stored in `public/technologies.json` and loaded into the application when the page starts.

## Main Features

### 1. Technology List

The project shows a list of technologies in a responsive card layout. Each card includes the technology name, icon, category, difficulty level, rating, description, and badge.

The layout changes based on screen size:

* Mobile: 1 column
* Tablet: 2 columns
* Desktop: 3 columns

### 2. Your Stack

Users can add technologies to their own stack.

The stack section shows:

* Number of selected technologies
* Selected technology names
* Remove button for each item
* Remove All button
* Empty state when nothing is selected

The same technology cannot be added twice. When a technology is already added, its button becomes disabled.

### 3. Responsive Design

The website is responsive and works on desktop, tablet, and mobile screens.

The navbar also changes on smaller screens and uses a hamburger menu for mobile navigation.

## Getting Started

### Requirements

You need Node.js and npm installed on your computer.

### Installation

Clone the project and open the project folder:

```bash
git clone https://github.com/jm-jahed/assignment-5.git
cd assignment-5
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available on the local development server shown in your terminal.

## React Questions & Answers

### 1. What is JSX?

JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component. When the state changes, React updates the UI.

### 3. What does useState do?

`useState` is a React Hook used to store and update data in a component.

In this project, it is used for the technology list, selected stack, loading state, and mobile menu state.

### 4. What does useEffect do?

`useEffect` is used to perform side effects in a React component.

In this project, it is used to load the technology data from `public/technologies.json` when the application starts.

### 5. Why do we use key in a map?

React uses the `key` prop to identify each item in a list. It helps React understand which items have changed, been added, or been removed.

For example, this project uses `key={tech.id}` when displaying technology items.

### 6. What is conditional rendering?

Conditional rendering means showing different content depending on a condition.

For example, when the stack is empty, the project shows an empty-state message. When technologies are added, it shows the selected items instead.

### 7. How do you pass data from a parent to a child component?

A parent component passes data to a child using props.

A child can communicate with the parent by receiving a function as a prop and calling that function.

In this project, the technology card uses a callback to tell the parent when a user wants to add a technology to the stack.

## Author

Built as a React learning project using React, Tailwind CSS, and Vite.

© 2026 Dev Stack
