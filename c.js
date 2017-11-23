// function Person(ten, tuoi) {
    // this.name = ten;
    // this.age = tuoi;
    // this.sayHello = function() {
    //     console.log('Xin chao, Toi ten la ' + this.name);
    // }
// }
class School {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Person {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    sayHello() {
        console.log('Xin chao, Toi ten la ' + this.name);
    }
}

const kpt = new School('KPT', '92 LTR');
const a = new Person('Teo', 10, kpt);
a.sayHello();
console.log(a);
a.name = 'Teo Nguyen';
console.log(a.school.name);
