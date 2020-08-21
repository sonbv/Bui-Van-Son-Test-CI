console.log('Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.');


let n;
while (true ) {
    n = prompt('Register an user name').length;
    if (n<15) {
        alert('Good username')
        break;
       }   else {
            alert('Your username is too long');
        }
        
    }
