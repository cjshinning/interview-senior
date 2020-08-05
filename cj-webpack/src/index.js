// class MathHandler {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     add(){
//         return this.x + this.y;
//     }
// }

// var m = new MathHandler(1, 2);
// console.log(m.add());

// console.log(typeof MathHandler);    //function
// console.log(MathHandler === MathHandler.prototype.constructor); //true


class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        alert(this.name + ' eat');
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
        this.name = name;
    }
    say(){
        alert(this.name + ' say');
    }
}

const dog = new Dog('哈士奇');
dog.say();
dog.eat();
