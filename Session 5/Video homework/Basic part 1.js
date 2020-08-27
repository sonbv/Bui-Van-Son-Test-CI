// console.log('1. Learn how to create a random number from 0 to 1');
// console.log(Math.random());

// console.log('2. Learn how to randomly pick an item from an array');
// let n = [2, 5, 6, 9, 10];
// let randomPick = n[Math.floor(Math.random()*n.length)];
// console.log(randomPick);

// console.log('3. Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice. Create it then ask your mentor to review your data before moving to the next exercise');
let quiz = [
    {
        question: "Which fictional detective lived at 221B Baker Street?\n 1. Watson\n 2. Sam Spade\n 3. Scubidu\n 4. Sherlock Holmes", 
        correct: 4
    },{
        question: 'Which country is home to the kangaroo?\n 1. Australia\n 2. Austria\n 3. New Zealand\n 4. US', 
        correct: 1
    },{
        question: 'How many legs does an octopus have?\n 1. 4 legs\n 2. no legs\n 3. 8 legs\n 4. 2 legs', 
        correct: 1
    },{
        question: 'What sweet food is made by bees by using nectar from flowers?\n 1. Bread\n 2. Honey\n 3. Sugar\n 4. Potent', 
        correct: 2
    }];
// console.log('4. Write a script to randomly select a quiz from the list above, show them to users');
// let score = 0
// let i = quiz[Math.floor(Math.random()*quiz.length)]
// for (let i = 0; i<quiz.length; i++){
//     let userInput = prompt(quiz[i].question)
// };
// console.log('5.Let users answer then let them know whether they are correct');
// let score = 0
// let i = quiz[Math.floor(Math.random()*quiz.length)]
// for (let i = 0; i<quiz.length; i++){
//     let userAnswer = prompt(quiz[i].question)
//     if (userAnswer == quiz[i].correct) {
//         score++;
//         alert('Bravo!!!');
//     } else {
//         alert('Good luck next time');
//     }
// }

// console.log('6. Let it run continuously, make sure each question only appears once, if the questions has run out, let users know (note that the result showing to users are omitted in the figure below)');
// let score = 0
// let i = quiz[Math.floor(Math.random()*quiz.length)]
// for (let i = 0; i<quiz.length; i++){
//     let userAnswer = prompt(quiz[i].question)
//     if (userAnswer == quiz[i].correct) {
//         score++;
//         alert('Bravo!!!');
//     } else {
//         alert('Good luck next time');
//     }
// }
// alert('We are out of question');

// console.log('7. Calculate the total points of users');
// let score = 0
// let x = quiz[Math.floor(Math.random()*quiz.length)]
// for (let i = 0; i<quiz.length; i++){
//     let userAnswer = prompt(quiz[i].question)
//     if (userAnswer == quiz[i].correct) {
//         score++;
//         alert('Bravo!!!');
//     } else {
//         alert('Good luck next time');
//     }
// }
// alert('We are out of question');
// alert('You answered correctly '+ score + ' out of' + quiz.length + ' questions');

