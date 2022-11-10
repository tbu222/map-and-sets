//Quick Question #1
new Set([1,1,2,2,3,4])
//set return unique value which is {1,2,3,4}


//Quick Question #2
[...new Set("referee")].join("")
//return unique value and join together through space => ref


//Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Array(3) => true}
// key: (3) [1, 2, 3]
// value: true
// 1: {Array(3) => false}
// key: (3) [1, 2, 3]
// value: false

//hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

const vowels = ['a','i','u','e','o']
function vowelCount(str) {
    const vowelMap = new Map();
    let lowStr = str.toLowerCase();
    for (let char of lowStr){
        if (vowels.indexOf(char) !== -1)
        {
            if (vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) +1);
            }
            else
                vowelMap.set(char,1);
        } 
    }
    return vowelMap;
}
