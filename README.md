

# Project Description

This repo contains the code to my calculator app. 

## Features

1. Do basic math like addition, subtraction, multiplication and division with integers and decimal numbers (real numbers).
2. An all clear button to clear all input and a backspace button to delete the last digit/operator that was entered by the user.
3. Length of a number is limited to 10 digits and the user cannot divide by 0. 
4. A warning sign and an error notification is displayed in case of invalid user input or if the length of the number is greater than 10.

## Motivation for the project

I wanted to do a project that was focussed on handling client side errors. A calculator is very simple in its functionality, but very complex when it comes to handling various types of user input.  

## Major takeways from the project

1. Learnt how to effectively use grid-template areas in CSS. 
2. How to improve user experience (UX) by catching various types of invalid user input like dividing by 0, catching something like 1++*/1, 1+-*/1, having too many digits in a number etc.   
3. How to use npm packages for creating error notifications.  

## Project link - https://main--classy-croissant-bc8ab8.netlify.app/ 

## Technologies used

HTML, CSS, JavaScript

## Frameworks/Libraries

React

## Commit history

**First major commit (01/22/2023)** - Created the UI for the calculator

**Second major commit (01/24/2023)** - Added mathematical functionalities of addition, subtraction, multiplication and division

**Third major commit (01/28/2023)** - Added functionality to clear and backspace button, used math-expression-calculator to do the calculation 

**Fourth major commit (01/29/2023)** - Added UX features to handle invalid user input and display error notifications to user. 

**Final commit (01/31/2023)** - Created the blinking cursor, added the calculator icon and deployed the application on Netlify.

**Update (02/05/2023)** - Added new features like number length limit, division by 0 error notification and fixed problem of havng 0 at the start of the number. Explanation can be found in the readme file of the new-features branch. 

## 3rd part API used

None

## React packages used 

1. math-expression-evaluator - allows us to calculate math expressions consisting of a combination of operators. This was a much better upgrade from only being able to do binary operations. 

2. react-hot-toast - for error notifications when the user input is invalid. 
 
## Media queries

None

## Bugs/Issues

1. How to move forward from doing binary operations only (resolved) - I realized that the calculator was only able to do binary operations, that is having two operands and one operator. This was very inefficient, because that meant user cannot have a mix of operators in their calculations. 

**First possible fix** - I used eval() in JavaScript, which was able to handle a mix of operators in the input expression. However, eval() is dangerous because it is a security concern for malware injection. 

**Final fix** - I used math-expression-evaluator package to calculate math expressions that consist of various operators. 

## How to further improve this website

1. Display the exact error message to the user instead of having a generic error message. 
2. Provide live validation of the user input so that the user knows that there is an error with their input before clicking the = button. 

# Getting Started with this project

## Available Scripts

In the project directory, you can type the following in your terminal:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


