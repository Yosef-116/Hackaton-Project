import PromptSync = require('prompt-sync')

const prompt = PromptSync()

console.log('Welcome To Task Manager!!!');

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
    if(choice === 1){

    }else if(choice === 2){

    }else if(choice === 3){

    }else if(choice === 4){

    }else if(choice === 5){

    }else{
        console.log('You have entered an invalid choice');
    }
}


