
const playerList = document.getElementById('playerList');

function addPlayer( button , name){
    button.classList.add('disable')
    const li =  document.createElement('li')
    li.innerText = name ;
    playerList.appendChild( li );

    
}

let playerExpenses =0;


function countPlyer(){
      const budget =  document.getElementById('Budgetplayer');
        const budgetNumber = parseFloat(budget.value);
        if(!budgetNumber  ){
          return alert('please enter a number ');
      
                }
        const numberPlyer = playerList.children.length ;
        playerExpenses = budgetNumber * numberPlyer;
     
      const playerExpect = document.getElementById('playerExpenses');
      const playerExpectAmount =playerExpect.innerText= playerExpenses;
      budget.value= '';
    //   const playerexpen = playerExpect.innerText;
    //   console.log(playerexpen);

    
   


}

function calculateTotal (){


    const manager = document.getElementById('manager');
    const managerNumber = parseFloat(manager.value);
    console.log(managerNumber);

       if(!managerNumber  ){
    return alert('please enter a number ');

          }
    const coach = document.getElementById('coach');
    const coachNumber = parseFloat(coach.value);
    if(!coachNumber  ){
      return alert('please enter a number ');
  
            }
    const netAmount =  managerNumber + coachNumber + playerExpenses   ;

    const totalAmount = document.getElementById('totalAmount');
    totalAmount.innerText = netAmount  ;
    manager.value= "";
    coach.value = "";


   




   

}





