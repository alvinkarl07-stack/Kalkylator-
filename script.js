const resultat = math.evaluate("2 + 3 * 4"); 
console.log()


function init(){
    let buttons=Array.from(document.getElementsByClassName("buttons"));
    buttons.addEventListener('click' , handleAction);
    let summaruta=document.getElementById("summaruta");

    document.addEventListener('keydown' , function(event){
          if (event.key === '1,2,3,4,5,6,,7,8,9,0,'){ 
            handleAction()
          }
          if (event.key === 'Enter'){
            sum();
          }
          
}); }
function handleAction(){
    
}
function reset(){
    document.addEventListener('keydown' , function(event){
        if (event.key === 'r') {
            window.location.reload(); 
}

} )};
function kalk(){
    buttons
}

window.onload = init;