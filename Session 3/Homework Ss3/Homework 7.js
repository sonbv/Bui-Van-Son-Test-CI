console.log('1.	Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so');

const arr = [3, 4, 6, -9, 10, -88, 2]
n = prompt('Enter a number');
if(arr.indexOf(Number(n)) ==-1) {
    alert(n + ' is NOt found');
} 
else {
    alert(n + ' is FOUND in my arry at index '+ arr.indexOf(Number(n)));
}
