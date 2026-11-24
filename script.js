const math = require('mathjs');

const expression = '2 + 3 * sqrt(4) / 2';
const result = math.evaluate(expression);

console.log(`The result of the expression "${expression}" is ${result}`);


function sum(){

}
function handleAction(){
    let buttons=document.getElementsByClassName("buttons");
    document.getElementById("summaruta") === buttons
    


}
function init(){
    let buttons=document.getElementsByClassName("buttons");
    buttons.addEventListener('click' , handleAction);

    document.getElementsByClassName('keydown' , function(event){
          if (event.code === '1,2,3,4,5,6,,7,8,9,0'){ 
            handleAction()
          }
          if (event.code === Enter){
            sum();
         }
}); }
function calc(){

}


window.onload = init;