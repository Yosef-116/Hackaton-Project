
const choice = Number(prompt('Enter your choice: '));
// Adding task  
if(choice === 1){
        const choice1 = prompt('Enter the task description: ')
        tasks.push({task: choice1, completed: false});
             console.log('The task has been added!');
  //viewing the tasks
      else if (choice === 2) {
        console.log('Your tasks:');
        } else {
            tasks.forEach(task => {
                const status = task.completed ? '(done)' : '(not done)';
                console.log('- ' + task.task + ' ' + status);
            });
        }
    }
