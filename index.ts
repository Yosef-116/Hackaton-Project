import PromptSync = require('prompt-sync')

const prompt = PromptSync()

console.log('Welcome To Task Manager!!!');

interface Task { 
    task : string;
    isCompleted : boolean;
} 
let tasks: Task[] = [];

let check = true;

while(check){

    console.log(`
----------------------------
What would you like to do?
1. Add Task
2. View Tasks
3. Mark Task as Completed
4. Delete Task
5. Exit
----------------------------`);
const choice = Number(prompt('Enter your choice(1, 2, 3, 4, 5): '));
// Adding task  
if(choice === 1){
        const choice1 = prompt('Enter the task description: ')
        tasks.push({task: choice1, isCompleted: false});
        console.log('The task has been added!');
            }
  //viewing the tasks
    else if (choice === 2) {
        console.log('Your tasks:');
        tasks.forEach((task,index) => {
                const status = task.isCompleted ? '(done)' : '(not done)';
                console.log(`${index + 1}.` + task.task + ' ' + status);
            });
        }
    // Mark as completed
    else if(choice === 3){
        const index = Number(prompt("Enter task number to mark as completed: ")) -1;
        if(tasks[index]){
            tasks[index].isCompleted = true;
            console.log(tasks);
            console.log("Task marked as completed");
        }else{
            console.log("Invalid task number");   
        }
        // Delete task
    }else if(choice === 4){
        const index = Number(prompt("Enter task number to delete: ")) - 1;
        if(tasks[index]){
            tasks.splice(index, 1);
            console.log('The chosen task has been deleted');
        }else{
        console.log('You have entered an invalid choice');}
        // Exit
    }else if(choice === 5){
        console.log('---Task Manager is Closed---');
        check = false;
    }else{
        console.log('You have entered an invalid choice');
    }
}
