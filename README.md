![Figure](https://2020.school/uploads/wd-javascript-exercise-react-1.jpg)
Figure 1: How the final project will look both on mobile and desktop

# Introduction
Welcome to the first [React.js](https://reactjs.org) exercise. The objetive is to learn the basic building blocks of React by building a website that copy the functionality of YouTube using a home page to browse videos and another page to watch it. After completing the project the student will be ready to investigate additional concepts to expand the functionality of the site, like adding a search bar.

Final project link: [React-Tube](https://react-tube-19e9e.firebaseapp.com)

## Pre requisites
Please download the videos that we will use in the project from this link: [Dropbox link](https://www.dropbox.com/sh/pmblc8pqrxpxagw/AADWuTLXRaUahbyF8hsdLXGKa?dl=0)

## Concepts to cover
1. [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
2. [React Components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
3. [React Props](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
4. Asset loading (no link on purpose)
5. [Render multiple components](https://reactjs.org/docs/lists-and-keys.html)
6. [Routing in React](https://www.youtube.com/watch?v=Law7wfdg_ls)


# Setup
Our React project is organized in the following way:
## Templates
- Home page: To browse the videos.
- Video page: To watch the selected video.

# Modules
- Card: A group of HTML elements to display a video thumbnail with information about the title, author and channel image.
- Header: The element that appear on top of each page, can be modified to change its color and logo by toggling a boolean variable.

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-2.png)
Figure 2: Example of the card module

# 1. Create React App
Create React App is the name of the official way to set up React projects. Before we can use it, we need to install Node.js first. Think of Node.js as Maven in Java to manage JavaScript libraries. To download Node.js follow this link: [https://nodejs.org/en/](https://nodejs.org/en/) and install the LTS version. (Long Term Support)

Once Node is installed, proceed to the React page with instructions on how to create the project: [https://reactjs.org/docs/create-a-new-react-app.html#create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

Open your terminal and type:
```
npx create-react-app react-exercise
cd react-exercise
npm start
```

If you are using VSCode your IDE should have a project looking like this:

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-3.png)
Figure 3: Create React App project structure

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-4.png)
Figure 4: Project running successfully


# 2. React Components
Before writing our first component, let's analyze the standard Create React App template:

- The code starts and runs from a file call `App.js` inside the src folder. It's the equivalent of `Main.java` in your previous projects.
- In `App.js` you can see a function called `App()` that acts as the main class of the project.
- The function returns a something almost identical to HTML called JSX, but in reality is JavaScript code that will be converted into real HTML after compiling.
- React uses JSX is used instead of HTML because it allows to insert variables and compose complex interfaces using components. Think of components as Lego blocks. You can mix and match to build more complex structures.
- Javascript is an interpreted language, i.e it runs on real time, instead of being compiled.
- On the contrary, React needs to be compiled because of the additional functionality of JSX.
- To compile this code Create React App installed Webpack a framework equivalent to Gradle in your previous Java projects.
- For this project you don't need to worry about Webpack the Create React App configured everything for you.

## Create component
With the basic explanation out of the way, let's focus on building the card component, to show the videos available, and in a later step create a list of this cards using information stored in a JSON file.

Create a file called Card.js using the following structure:

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-5.png)
Figure 5: Basic component structure for the Card

1. Import React so the compiler can understand how to render the file using the React framework.
2. The Card function contains our component information, it can contain visual elements (render), its own local variables, receive props, etc. All of this will be covered in this exercise.
3. The return function has the JSX code that will be rendered by the compiler.
4. Because JavaScript files can contain multiple functions, the export default command tells the compiler with function to use. For learning purposes, in this case we will write only 1 function per file.

## Import component
Let's go back to our `App.js` file on the top and import the newly created card:

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-6.png)
Figure 6: Importing components in React

1. Import your card component.
2. Add a Card instance of the component inside the App return function.
3. Optional, delete all other html tags but the image logo, to remove unused code.

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-7.png)
Figure 7: Expected result


# 3. React Props
It's time to pass information from the parent `App.js` to the child `Card.js`. We use something called [Props](https://reactjs.org/docs/components-and-props.html#props-are-read-only), that is a streamlined way to send information from a parent to child relationship (remember your UML classes)

To send a prop in react follow this steps:

## Parent (the sender)
![Figure](https://2020.school/uploads/wd-javascript-exercise-react-8.png)
Figure 8: Adding props to App.js

1. Add a property, in this case title with the string value of the video title.
2. You can add as many props as necessary, but if you need to send many of the same type, is better to pack them in an array or object (hash map in Java)

## Child (the receiver)
![Figure](https://2020.school/uploads/wd-javascript-exercise-react-9.png)
Figure 9: Adding props to Card.js

1. Write the keyword props as the function argument.
2. Props is an object, to access the values passed from the parent use props.title or prop.channelName.
3. Note, the curly braces inside points #2 and #3, if you don't use the line &quot;props.title&quot; will be rendered as a string of text instead of the props received.

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-10.png)
Figure 10: Expected result


# 4. Asset loading
Let's start automatizing the process of writing data into the card. We have a JSON file that has an array of 12 objects.

If you remember the FileReader and ObjectStream methods of Java, you will be relieved that is so much easier to import and read files in JavaScript thanks to Node.js and Webpack.

To import a JSON file and use, you only need to do this:

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-11.png)
Figure 11: Loading assets using require

1. Create a constant called videos and use the method require and pass as a value the route of the file.
2. Replace the strings to variables using curly braces. Because the json is an array, we use the square braces [] with the index 0 to access the first object, and then the keys title and channelName.

Hey that was easier than using FileReader and ObjectStream no? Welcome to JavaScript, you will love it!


# 5. Render multiple components
As stated before we have the information of 12 videos inside the JSON, we could copy the component Card inside App.js 12 times but please don't do that. Instead let's learn the correct way to render multiple components of the same type in React.

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-12.png)
Figure 12: You will fail the exercise if you do this

Because of the React architecture, the return function can only contain JSX code (the tags that look like HTML) and send/receive data via props. We aren't allowed to create a for loop inside the JSX.

To solve this, we can create a const that do the for loop beforehand and then pass it the return function to be rendered at compilation time. For the explanation of the map function, please research about the methods map, filter and reduce introduced in the ES6 version of JavaScript.

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-13.png)
Figure 13: Rendering multiple elements and inserting the result as a property

1. We create a constant called cards that uses the method map to create an array of Cards.
2. To render multiple elements using a loop, React needs a unique id for each element. We add this required id using the prop called key and pass the id's inside our JSON. If the JSON does not have id's, you can see how to generate one by reading about the map method.
2. Now on the return function we delete our old Card component as pass the cards property using curly braces.

Now before moving to the next section, add the image thumbnail for the video and channel, and use your knowledge of CSS to style the cards.

# 6. Routing in React
Routing is the ability of a web application to pass data between diferent HTML pages. In this case we will use to convert `App.js` from a single page application to a more complex website consisting of 2 individual types of pages.

To start use the terminal to install React Router Dom:
```
npm install react-router-dom
```

Before proceding please refactor the project. Move the card presentation from `App.js` to a new component called `HomePage.js`. With this we can proceed to import the Router classes. App should look like this:

![Figure](https://2020.school/uploads/wd-javascript-exercise-react-14.png)
Figure 14: The App refactored to prepare to use the Router system

1. Import all Router dependencies. Note: The color is grayed out, because we have not use the code in the project yet.
2. The previous code to load the cards and render them was moded to a component called HomePage.

We reach the end of this `README.md` file, to complete the project check you can either read the official Router documentation, or watch this excelent [YouTube video tutorial](https://www.youtube.com/watch?v=Law7wfdg_ls). It's 33 min long, but you can skip most of the non coding dialog and becomes a 20 min video.

Final project link: [React-Tube](https://react-tube-19e9e.firebaseapp.com)