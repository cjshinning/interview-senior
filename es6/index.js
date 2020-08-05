// function MathHandler(x, y) {
//     this.x = x;
//     this.y = y;
// }

// MathHandler.prototype.add = function(){
//     return this.x + this.y;
// }

// var m = new MathHandler(1,2);
// console.log(m.add());

// console.log(typeof MathHandler);    //function
// console.log(MathHandler === MathHandler.prototype.constructor); //true


// 动物
function Animal(){
    this.eat = function(){
        alert('Animal eat');
    }
}

// 狗
function Dog(){
    this.bark = function(){
        alert('Dog bark');
    }
}

// 绑定原型，实现继承
Dog.prototype = new Animal();

var hashiqi = new Dog();
hashiqi.bark();
hashiqi.eat();
