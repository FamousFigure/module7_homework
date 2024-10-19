//Задание 7.7.5
const arr = [12, 7, 9, 14, 14, 6, 7, 14, 7, 11, 2, 14, 14, 1, 6];
function uniqueValuesOfArr(array) {
  return array.filter((number, index, self) => {
    return self.indexOf(number) === index;
  });
};

const uniqueNumbers = uniqueValuesOfArr(arr);
function uniqueArr(array) {
  return array.sort((a, b) => a - b);
};

const uniqueFilteredNumbers = uniqueArr(uniqueNumbers);
console.log(uniqueFilteredNumbers);