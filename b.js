// function class
function Person(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
}

const teo = new Person('Teo', 10);

console.log(teo);
console.log(teo.name);
teo.age = 20;
console.log(teo);
