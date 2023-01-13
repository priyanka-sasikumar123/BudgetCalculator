let totalAmnt=document.getElementById('total-amount');
let balancevalue=document.getElementById('balance-amount');
let expen= document.getElementById('expenditure-value');
let productTtle=document.getElementById('product-title');
let useramnt=document.getElementById('user-amount');
let amnt=document.getElementById('amount');
const errorMessage=document.getElementById('budget-error');
let checkamountbutton=document.getElementById('check-amount');
let setbudgetbutton=document.getElementById('total-amount-button');
const list=document.getElementById('list');
let tempAmount=0;

setbudgetbutton.addEventListener("click", () =>{
   let tempAmount=totalAmnt.value;
   if(tempAmount === ""|| tempAmount<0)
   {
    errorMessage.classList.remove("hide")
     
   }
  else
  {
    errorMessage.classList.add("hide");

    amnt.innerHTML=tempAmount;
     balancevalue.innerHTML=tempAmount-expen.innerHTML;
     totalAmnt.value='';
  }
});

// function Expenditure(){
//    let prdt=productTtle.value;
//    let user=parseInt(useramnt.value);
//    // let sum=parseInt(user)+parseInt(expen.innerHTML);
//    // expen.innerHTML=sum;
//    let sum=parseInt(expen.innerHTML)+user;
//    expen.innerHTML=sum;
//    if(sum<=amnt.innerHTML){
//          const total=parseInt(amnt.innerHTML)-sum;
//          document.getElementById('balance-amount').innerHTML=total;
//          } 
//    if(user!=0){    
//        if(prdt!=''){
//          expenses.innerHTML+=`
//          <table>
//          <thead>
//          <tr>
//          <th class="border border-dark border-4 p-2">Expense</th>
//          <th class="border border-dark border-4 p-2">Cost</th>
//          </tr>
//          </thead>
//          <tbody>
//          <tr>
//          <td>${prdt}</td>
//          <td>${user}</td>
//          </tr>
//          </tbody>
//          </table>`
        
//          productTtle.value='';
//          useramnt.value='';
//       }     
//    }
//    else
//    {
//       alert('add details');
//    }
  
// }
const listCreator = (expenseName,expenseValue)=>
{
  let sublistContent=document.createElement("div");
   sublistContent.classList.add("sublist-content","flex-space");
   list.appendChild(sublistContent);
   sublistContent.innerHTML=`<p class="product">${expenseName}</p>
   <p class="amount">${expenseValue}</p>`;
  list.appendChild(sublistContent);
};

checkamountbutton.addEventListener("click", ()=>{
  
   if(!useramnt.value || !productTtle.value){
      alert('add details');
      return false;
   }
   listCreator(productTtle.value,useramnt.value);
   let expenditure=parseInt(useramnt.value);
   let sum=parseInt(expen.innerHTML)+expenditure;
   expen.innerHTML=sum;
   const total=parseInt(amnt.innerHTML)-sum;
   document.getElementById('balance-amount').innerHTML=total;
   productTtle.value="";
   useramnt.value=""; 
  
         
});