// function class
function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        console.log('Xin chao, Toi ten la ' + this.name);
    }
}
// instance
const teo = new Person('Teo', 10);
const ti = new Person('Ti', 15);
const tun = new Person('Tun', 11);

console.log(teo, ti, tun);
// console.log(ti.sayHello());

console.log(teo.name);
teo.age = 20;
console.log(teo);
