let s = "Bo em hut rat nhieu thuoc. Me em nuoc mat le nhoa";

//Thuat toan => in ra thì dễ
const countData = {
    b: 0,
    o: 0,
};

for (let i = 0; i < s.length; i++) {
    const c = s[i].toLowerCase();
    console.log(c);
    if (c == 'b') {
        countData('b') ++;
    } else if (c == 'o') {
        countData('o') ++;
    }
}
console.log(countData);

// let count = 

// Cách 1: Dùng array
/*
[
    {
        value: 'b',
        count: 1
    },
    {
        value: 'o',
        count: 4
    }
]
*/

// Cách 2: Dùng Object
/*
{
    'b': 1,
    'o': 4,
}
*/

//Cách nào tốt hơn