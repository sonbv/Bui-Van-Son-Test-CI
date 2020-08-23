// console.log('1.	Write a script to store and process the learning tasks to become a front-end developer and print it out');
let tasks = [
    {
        subject: 'HTML',
        complete: false,
    },
    {
        subject: 'CSS',
        complete: false,
    },
    {
        subject: 'Basic of Javascrip',
        complete: false,
    },
    {
        subject: 'Node Packeage Manager',
        complete: false,
    },
    {
        subject: 'Git',
        complete: false,
    }
];
// console.log('Hi there, these are your learning tasks to front-end developer career')
// for (let i = 0; i < tasks.length; i++) {
//     console.log(`${i +1}. ${tasks[i].subject}`);
//     console.log(`  Complete: ${tasks[i].complete}`);
// }
// console.log('---------------------------------')
console.log('6.2. Let users add new task');
let command = prompt("Enter your command (New, Delete, Update, Complete)");
if(command == 'new'){
    let newTask = prompt("Enter new task:");
    let newProcess = {
        subject: newTask,
        complete: false,
    };
    tasks.push(newProcess);
    print();
} 
// console.log('6.3 Let users update task');
else if(command == 'update'){
    let index = Number(prompt("Enter position"));
    let newTitle = prompt("Enter new Title:");
    tasks[index-1].subject = newTitle;
    print();

console.log('6.4 Let users complete task');
} else if(command == 'complete'){
    let index = Number(prompt("Enter position"));
    tasks[index-1].complete = true;
    print();

console.log('6.4 Let users delete task');
} else if(command == 'delete'){
    let index = Number(prompt("Enter position"));
    tasks.splice(index-1,1);
    print();
}
function print(){
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i +1}. ${tasks[i].subject}`);
        console.log(`  Complete: ${tasks[i].complete}`);
    }
}