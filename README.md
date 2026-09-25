# DevStack

DevStack is a hobby project designed for developers to showcase their technical skills, technology stacks, and projects. Developers can select and manage the technology stacks they are proficient in and create an account to share their projects with the community.

## 1. Project Description

DevStack provides a simple and dynamic platform where developers can:

1. Select the technology stacks they are proficient in.
2. Add and remove technology stacks.
3. Showcase their projects.
4. Create an account and share their work with other developers.

## 2. Technologies Used

We used several modern web technologies to build this project:

1. **React** – Used to build the user interface using reusable components.
2. **TypeScript** – Used to provide type safety and improve code maintainability.
3. **Tailwind CSS** – Used for responsive and modern UI styling.
4. **Vite** – Used as the development server and build tool for a fast development experience.

## 3. Features

1. **Add Stack** – Users can add technology stacks they are proficient in.
2. **Remove Stack Individually** – Users can remove a single technology stack at a time.
3. **Remove All Stacks** – Users can remove all selected technology stacks at once.
4. **Dynamic Data Fetching** – Technology stack information is dynamically fetched from a JSON file.

## 4. Questions and Answers

### 1. What is JSX and why is it used with React?

**Answer:** JSX stands for **JavaScript XML**. It allows us to write HTML-like syntax inside JavaScript, which makes React code easier to read and write.

### 2. What is the difference between Props and State?

**Answer:** **Props** are data passed from a parent component to a child component, while **State** is data managed inside a component.

Props are read-only, whereas state can be updated using hooks such as `useState`.

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:** The `useState` hook is used to create and manage state in a React component.

In this project, we use `useState` to manage the selected technology stacks and update the UI when stacks are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** The `useEffect` hook is used to perform side effects in React, such as fetching data or interacting with external resources.

In this project, we use `useEffect` to fetch the technology stack data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** React uses the `key` prop to uniquely identify each item in a list. This helps React efficiently determine which items have been added, removed, or updated.

Example:

```tsx
{technologies.map((technology) => (
  <div key={technology.id}>
    {technology.stackName}
  </div>
))}
```

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering means displaying different UI elements based on a condition.

In our project, we use conditional rendering in the `Stack` component to show an empty stack message when no technology has been selected. When `selectedStack.length === 0`, the empty stack message is displayed; otherwise, the selected technologies are shown.

```tsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Display selected technologies
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** In our project, the parent component (`App`) passes data and functions to child components using **props**.

For example, `App` passes `selectedStack` and the `addStack` function to the `Technologies` component:

```tsx
<Technologies
  techPromise={techPromise}
  selectedStack={selectedStack}
  onAdd={addStack}
/>
```