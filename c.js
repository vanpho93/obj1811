// function Person(ten, tuoi) {
    // this.name = ten;
    // this.age = tuoi;
    // this.sayHello = function() {
    //     console.log('Xin chao, Toi ten la ' + this.name);
    // }
// }

class Person {
    constructor(ten, tuoi) {
        this.name = ten;
        this.age = tuoi; 
    }

    sayHello() {
        console.log('Xin chao, Toi ten la ' + this.name);
    }
}

const a = new Person('Teo', 10);
a.sayHello();
console.log(a);
a.name = 'Teo Nguyen';
console.log(a);
