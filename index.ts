#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = [];
let condition = true;
while (condition) {
  let addTask = await inquirer.prompt([
    {
      type: "input",
      name: "task",
      message: chalk.yellow("What task would you like to add to Todo?"),
    },
    {
      type: "confirm",
      name: "addAnother",
      message: chalk.yellow("Do you want to add another task?"),
    },
  ]);

  todos.push(addTask.task);
  condition = addTask.addAnother;
  console.log(chalk.green(todos));
}
