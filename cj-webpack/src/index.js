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


// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         alert(this.name + ' eat');
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name);
//         this.name = name;
//     }
//     say(){
//         alert(this.name + ' say');
//     }
// }

// const dog = new Dog('哈士奇');
// dog.say();
// dog.eat();


// function loadImage(src, callback, fail){
//     var img = document.createElement('img');

//     img.onload = function(){
//         callback(img);
//     }

//     img.onerror = function(){
//         fail();
//     }

//     img.src = src;
// }

// var src = 'https://www.imooc.com/static/img/index/logo-recommended.png';

// loadImage(src, function(img){
//     console.log(img.width);
// }, function(){
//     console.log('error');
// })

// function loadImage(src){
//     const promise = new Promise(function(resolve, reject){
//         let img = document.createElement('img');

//         img.onload = function(){
//             resolve(img);
//         }

//         img.onerror = function(){
//             reject();
//         }

//         img.src = src;
//     })
//     return promise;
// }

// var src = 'https://www.imooc.com/static/img/index/logo-recommended.png';

// loadImage(src)
//     .then(function(img){
//         console.log(img.width);
//     }, function(){
//         console.log('failed');
//     })

// loadImage(src)
//     .then(function(img){
//         console.log(img.height);
//     })

// ES6常用功能

// let,const
// let i = 10;
// i = 100;
// const j = 20;
// j = 200;

// 模板语法
// var name = 'zhangshan', age = 20, html = '';
// html += '<div>';
// html += '   <p>' + name + '</p>';
// html += '   <p>' + age + '</p>';
// html += '</div>';

// const name = 'lisi', age = 22;
// const html = `
//         <div>
//             <p>${name}</p>
//             <p>${age}</p>
//         </div>
// `;

// 解构赋值
// const obj = {
//     a: 100,
//     b: 200
// }
// const {a, b} = obj;

// 块级作用域
// const arr = ['xxx', 'yyy', 'zzz'];
// const [x, y, z] = arr;

// var obj = {a: 100, b: 200};
// for(var item in obj){
//     console.log(item);
// }
// console.log(item);

// var obj = {a: 100, b: 200};
// for(let item in obj){
//     console.log(item);
// }
// console.log(item);

// 默认参数
// function fn(a, b){
//     if(b === null){
//         b = 0;
//     }
// }

// function fn(a, b=0){

// }

// 箭头函数
// var arr = [1,2,3];
// arr.map(function(item){
//     return item + 1;
// })

// const arr = [1,2,3];
// arr.map(item => item + 1);
// arr.map((item, index) => {
//     console.log(index);
//     return item + 1;
// })


function fn(){
    console.log('real', this);

    var arr = [1,2,3];
    arr.map((item) => {
        console.log(this);  //{a: 100}
    })
}
fn.call({a: 100});

// {a: 100}
// {a: 100}
// {a: 100}