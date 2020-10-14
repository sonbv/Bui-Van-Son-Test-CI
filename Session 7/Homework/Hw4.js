console.log('4. Use getElementsByTagName function to get ALL of the <li> tag. Print/log out the first element (which is <li>Articles</li>) and then use for loop to print ALL of the DOM you get from the function.');
let n = document.getElementsByTagName('li')
console.log(n[0]);
for (let i = 0; i < n.length; i++) {
    console.log(n[i].innerHTML);
}