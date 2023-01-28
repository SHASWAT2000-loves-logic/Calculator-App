**Project In Progress**

**Project Description** - This repo contains the code to a calculator app. With this calculator you can carry out basic math operations like addition, subtraction, multiplication and division on integers and real numbers both. There is option of an all clear button and a backspace button.   

**TO-DO**
1. Add UI/UX features to check invalid input, throw errors

**Commit history** - 

**First major commit (01/22/2023)** - Created the UI for the calculator

**Second major commit (01/24/2023)** - Added mathematical functionalities of addition, subtraction, multiplication and division

**Third major commit (01/28/2023)** - Added functionality to clear and backspace button, used math-expression-calculator to do the calculation 

**Technologies used** - HTML, CSS, JavaScript

**Frameworks/Libraries** - React

**3rd part API used** - None

**React packages used** - 

1. math-expression-evaluator - allows us to calculate math expressions consisting of a combination of operators. This was a much better upgrade from only being able to do binary operations. 

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


