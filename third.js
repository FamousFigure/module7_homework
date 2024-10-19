//Задание 7.7.3
const arr = [Person1 = {name: 'Владимир', age: 18}, Person2 = {age: 19}, Person3 = {age: 17}];
const arr_filtered = [];
const arr_with_name = [];

let k = 0;
let i = 0;
while(i <= 3) {
    if(arr[k].age >= 18) {
        arr_filtered.push(arr[k]);
        k += 1;
    };
    i += 1;
}
let j = 0;
let o = 0;
console.log(arr_filtered);

while(j <= 3) {
    test = typeof arr[o]["name"] === "undefined";
    if(test === false) {
        arr_with_name.push(arr[o]);
        o += 1;
    };
    j += 1;
};

console.log(arr_with_name);