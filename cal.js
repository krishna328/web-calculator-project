let inpt=document.getElementById('in')
let c=''

let number=document.querySelectorAll('.but')
let a=Array.from(number);

a.forEach(button =>{
    button.addEventListener("click",(e) =>{
        if(e.target.textContent!='C' && e.target.textContent!='X' &&  e.target.textContent!='Result'){
        c+=e.target.textContent;
        inpt.value=c;
}
 })
})

function cl(){
   c=''
   inpt.value=c
}


function cut(){
   c=inpt.value;
   let g=c.slice(0,-1);
   inpt.value=g;
   c=g;
 }

 function result(){
    let s=inpt.value
    let solve=eval(s)
    inpt.value=solve
    c=solve
 }