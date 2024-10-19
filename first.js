//Задание 7.7.1
function printInfo() {
    console.log("Name: " + this.name + " Age: " + this.age);
};

const person = {
    name: "Евгений",
    age: 7,
};

printInfo.call(person);