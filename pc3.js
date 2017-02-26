var greetMe=function(){

  console.log('Hi Tony!');
}

greetMe();

//
greetSame=() =>console.log('Hi Same');

greetSame();

//
greetSam=name=>console.log('Hi '+name+'!');
greetSam('OWO');

//

greetSam=name=>console.log(`Hi${name}!`);
greetSam('OWO!!');

//

var squre1=function(num){return num*num};
var squre2=num=>{return num*num};
var squre3=num=>num*num;

//
console.log(squre1(2));
console.log(squre2(2));
console.log(squre3(2));
