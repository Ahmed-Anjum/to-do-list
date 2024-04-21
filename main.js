#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: 'What do you want to add in your Todos?'
        },
        {
            name: "addMore",
            type: "confirm",
            message: "What do you want to add more in your Todos?",
            default: "false"
        }
    ]);
    todos.push(addTask.task),
        condition = addTask.addMore;
    console.log(todos);
}
