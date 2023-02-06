

**Project Description** - This repo contains the code to a calculator app. With this calculator you can carry out basic math operations like addition, subtraction, multiplication and division on integers and real numbers both. There is option of an all clear button and a backspace button. In case of invalid user input, user is notified by an error notification, which acts like a pop-op and disappears after 3 seconds. A warning sign is also displayed on the screen, in case of invalid user input and division by 0. 

You can find the website by clicking on this link - https://main--classy-croissant-bc8ab8.netlify.app/

**Motivation for the project** - I wanted to do a project that was focussed on improving user experience (UX). A simple calculator is very complex when it comes to handling various types of user input. With the help of this calculator, I have tried to "verify" user input in a way the user knows the mistake they are making.   

**Technologies used** - HTML, CSS, JavaScript

**Frameworks/Libraries** - React

**3rd part API used** - None

**React packages used** - 

1. math-expression-evaluator - allows us to calculate math expressions consisting of a combination of operators. This was a much better upgrade from only being able to do binary operations. 

2. react-hot-toast - for error notifications when the user input is invalid. 
**Commit history** - 

**First major commit (01/22/2023)** - Created the UI for the calculator

**Second major commit (01/24/2023)** - Added mathematical functionalities of addition, subtraction, multiplication and division

**Third major commit (01/28/2023)** - Added functionality to clear and backspace button, used math-expression-calculator to do the calculation 

**Fourth major commit (01/29/2023)** - Added UX features to handle invalid user input and display error notifications to user. 

**Final commit (01/31/2023)** - Created the blinking cursor, added the calculator icon and deployed the application on Netlify. 


**Bugs/Issues** - 

1. How to move forward from doing binary operations only (resolved) - I realized that the calculator was only able to do binary operations, that is having two operands and one operator. This was very inefficient, because that meant user cannot have a mix of operators in their calculations. 

**First possible fix** - I used eval() in JavaScript, which was able to handle a mix of operators in the input expression. However, eval() is dangerous because it is a security concern for malware injection. 

**Final fix** - I used math-expression-evaluator package to calculate math expressions that consist of various operators. 


# Getting Started with this project

## Available Scripts

In the project directory, you can type the following in your terminal:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


