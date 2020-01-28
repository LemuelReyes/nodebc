// # Exercise 34

// * Create a new index34.js file
// * Define the following variables: income, revenue and taxes
// * Assign the following values:
//   * income: 1000
//   * revenue: 600
//   * taxes: 500

// * This months objectives are:
// * Income of at least 800 or more
// * Spend less than 400 on taxes
// * We pay bonus if our revenue is 600

// * Show the following output (console.log()):
//   * Income Objective: true or false (use greater than or equal operator)
//   * Taxes Objective: true or false (use less than operator)
//   * Bonus Objective: true or false (use equality operator)


// Objectives

const income = 1000;
const taxes = 500;
const revenue = 600;

const incomeGoal = income >= 800;
const taxGoal = taxes < 400;
const bonusGoal = revenue === 600

const calculate = `
    Income Objective:  ${incomeGoal};
    Taxes Objective: ${taxGoal};
    Bonus Objective: ${bonusGoal};
`;

console.log(calculate);
