const object1 = [
    { name: 'shahan',age: 24 },
    { name: 'hamid',age: 26  },
    { name: 'kaif' ,age: 35  },
];
const people = object1.filter(person=>person.age>=30);//lets remove the elemets from the object whose age is greater than or equal to 30.
console.log(people);
