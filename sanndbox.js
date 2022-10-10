//function declaration
greet();
greet();


function greet(){
    console.log('hello, how are you blogger');
}
greet();
greet();

// function expression
const sayHello = function(){
    console.log('hello JEFF, glad to hear from you sir')
};
sayHello();

const speak = function(name, time){
    console.log(`good morning ${name}, its ${time}`);
};
speak('Jeff', 'its morning');

function  goodMorning(){
    console.log('hello, goood morning');
};

goodMorning();


const  afterNoon = function(){
    console.log('good  Afernoon members');
};
afterNoon();

const calcArea = function(radius){
    let  area = 3.14 * radius**2;
    return area;
};

const area = calcArea(4);
console.log(area);


const calVolume = function(height){
    let vol = area * height;
    return vol;
};

const  vol = calVolume(5);
console.log(vol)
