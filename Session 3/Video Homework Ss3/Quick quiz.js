// Write a script to show user a quiz with 4 choices, for example:
// How many legs does a spider have?

// 1. None
// 2. 4 legs
// 3. 8 legs
// 4. 12 legs
// Then ask them to answer this quiz, if they enter an invalid choice, 'hahaha' for example, tell them it is invalid and ask them to enter their choice again:
// Invalide choice, the answer must be 1, 2, 3 or 4
// If the choice is valid, check the result, if the answer is not correct:
// Good luck next time
// If it is:
// Bravo, you are correct

let n;
while (true ) {
    n = Number(prompt('How many legs does a spider have? 1. None; 2. 4 legs; 3. 8 legs; 4. 12 legs'));
    if (n<5 && n>0) {
        if (n = 3) {
            alert('Bravo, you are correct')
            break;
           }   else {
                alert('Good luck next time');
            }
        break;
     } else {
            alert('Invalide choice, the answer must be 1, 2, 3 or 4')
        }
    }

// let x = [1,2,3,4]
// while (true ) {
//     if (x=3) {
//         alert('Bravo, you are correct')
//         break;
//        }   else {
//             alert('Good luck next time');
//         }
        
//     }