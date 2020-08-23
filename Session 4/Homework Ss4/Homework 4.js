console.log('4. Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table');
console.log('4.1. Write a script to simulate the lookup of the dictionary initialized in the previous example');

let dict = {
    debug:'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
// alert("Hi there, this is dev dictionary");
// let keyword = prompt('Enter a key word');
// if(keyword in dict){
//     alert(`${keyword}\n ${dict[keyword]}`);
// }else{
//     alert('We cound not find your word: ' + keyword);
// }

console.log('4.2. Update your script so that it can let users contribute the explanation to the dictionary');
while (true) {
    let keyword = prompt("Enter a key word");
    if (keyword in dict) {
        alert(`${keyword}\n ${dict[keyword]}`);
    } else {
        let newExplain = prompt(`We cound not find the word : ${keyword} : leave your explaination`);
        dict[keyword] = newExplain;
        if (newExplain == null || newExplain == undefined) {          
        } else {
            alert("Done");
        }
    }
}
