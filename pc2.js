function great(){
  console.log('hi');
}

function logGreeting(fn){
  fn();
}
logGreeting(great);

var greetMe=function(){

  console.log('Hi Tony!');
}

greetMe();

logGreeting(greetMe);
