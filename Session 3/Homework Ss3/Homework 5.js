console.log('Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users');
 
let n = prompt('Enter a sequence of numbers, seperated by comma (,):');
let so = (n.split(","));
let summary = 0
for (let x=0; x<so.length; x++) {
    summary = summary+ Number(so[x]);
}
alert('The sum of them is  ' + summary);