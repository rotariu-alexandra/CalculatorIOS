//initializare variabile
let display=document.getElementById("text");
let result=0;
let buffer='0';
let previous;
const btns=document.querySelectorAll(".btn");
//functie afisare
btns.forEach(btn =>{
    btn.addEventListener("click",function(event){
        let value =event.target.innerText; //verificam ce am apasat
       verificaTip(value);
       afiseaza();
    });
});

function verificaTip(value){ 
    if(isNaN(parseInt(value))){
   // console.log("am apasat operator");
    monitorOperator(value);
} else{
    //console.log("numar");
    monitorNumber(value);
    }
    afiseaza();
}
function monitorNumber(value){
    if(buffer==='0'){
        buffer=value;
    }else{ 
        buffer=buffer+value;
    }
}
function monitorOperator(value){
    switch(value){
        case "+":
            monitorMath(value);
            break;
        case "-":
            monitorMath(value);
            break;
        case "×":
            monitorMath(value);
            break;
        case "÷":
            monitorMath(value);
            break;
        case "C":
            buffer="0";
            result=0;
            previous="";
                break;
        case "=":
            if(previous==null){
                return;
            }
            doMath(parseInt(buffer));
            buffer=result;
            result=0;
            previous=null;
            break;
        case "←":
            if(buffer.length===1){
                buffer="0";
            } else buffer=buffer.substring(0,buffer.length-1);
            break;
    
    }
}
function afiseaza(){
    display.innerText=buffer;
   // console.log("Buffer curent: " + buffer);
}
function monitorMath(value){
    const intBuffer=parseInt(buffer); //am transformat in numar
    if(result===0){
        result=intBuffer;
    } else{
        doMath(intBuffer);
    }
    previous=value;
    buffer="0";
}
function doMath(intBuffer){
    if(previous==="+"){
        result=result+intBuffer;
        console.log(result);
    } else  if(previous==="-"){
        result=result-intBuffer;
        console.log(result);
    }else  if(previous==="×"){
        result=result*intBuffer;
        console.log(result);
    } if(previous==="÷"){
        result=result/intBuffer;
        console.log(result);
    }
}