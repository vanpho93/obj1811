const person = {
    name: 'Teo',
    age: 10,
    sayHello: function() {
        console.log('Xin chao, Toi ten la ' + this.name);
    }
};

// const person = { name: 'Teo', age: 10 };

console.log(person);
console.log(person.name);
person.age = 20;
console.log(person);
person.sayHello();