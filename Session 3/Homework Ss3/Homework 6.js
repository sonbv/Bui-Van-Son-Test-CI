console.log('Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users');
let n = prompt('Enter a sequence of numbers, seperated by comma (,):');
let so = n.split(',');
let soMin = so[0];
for (let x = 0; x<so.length; x++)
{   if(Number(soMin)>Number(so[x])){
    soMin=so[x];
};
}
alert('The smallest number is '+ soMin)
