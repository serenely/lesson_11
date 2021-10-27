let str = 'some';

let strObj = new String(str); 


const soldier = {
    health: 400,
    armor: 200
};

const john ={
    healt: 100,

};

john.__proto__=soldier; 

console.log(john);
console.log(john.armor);

Object.setPrototypeOf(john, soldier); // 16 строка равна 21

const koln = Object.create(soldier)
