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
        const choice1 = prompt('Enter the task description: ')
        tasks.push({task: choice1, completed: false});
             console.log('The task has been added!');
    }
    }else if(choice === 2){
        console.log('---Your tasks---');
        tasks.forEach((task,index) => {
         console.log(${index + 1} ${task.task});
})
console.log(tasks);

    }else if(choice === 3){

    }else if(choice === 4){

    }else if(choice === 5){

    }else{
        console.log('You have entered an invalid choice');
    }
}


