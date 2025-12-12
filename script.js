let minShow = document.getElementById("min");
let secShow = document.getElementById("sec");

let btn = document.getElementById("btn");



let min = 0;
let sec = 0;
let sisa = null;



btn.addEventListener("click",runChrono )
          
          


function runChrono () {


          if (sisa === null){
 sisa = setInterval(()=>{


sec++;

if (sec === 60){
          sec= 0;
          min++;
}

minShow.textContent= `Minutes→ ${min}`;
secShow.textContent= `Seconds→ ${sec}`;
 
}, 1000) 

return sisa
          }
  

}




       
   

  

 

 
 