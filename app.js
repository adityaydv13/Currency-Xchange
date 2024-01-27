 
let url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const button=document.querySelector("#btn")
let dropdowns=document.querySelectorAll("#selector")
let fromCurr=document.querySelector(".leftselect select")
let toCurr=document.querySelector(".rightselect select")
for(let select of dropdowns){
    for(code in countryList){
        let newoption=document.createElement("option")
         newoption.innerText=code;
         newoption.value=code;
         if(select.name==="from"&&code==="USD")
         {
            newoption.selected="selected"
         }
         else if(select.name==="to"&&code==="INR")
         {
         newoption.selected="selected"
         }
         select.append(newoption)
    }


  select.addEventListener("change",(e)=>{
    updateflag(e.target);

  })
 }
     const  updateflag=(ele)=>{
        let currcode=ele.value;
        let countrycode=countryList[code];
        let newsrc=`https:flagsapi.com/${countrycode}/flat/64.png`;
        let img =ele.parentElement.querySelector("img");
        img.src=newsrc;
    
 }  
   button.addEventListener("click",async (e)=>{
    e.preventDefault();
    let amt=document.querySelector(".head input")
    let amtval=amt.value;
    if(amtval===""||amtval<0)
    {
        amtval=1;

    }
    // console.log(fromCurr.value,toCurr.value)
    let URL=`${url}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    console.log(data);
   })
