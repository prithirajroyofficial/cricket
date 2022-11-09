
const playerList = document.getElementById('playerList');

function addPlayer( button , name){
    button.classList.add('disable')
    const li =  document.createElement('li')
    li.innerText = name ;
    playerList.appendChild( li );

    
}



function countPlyer(){
      const budget =  document.getElementById('Budgetplayer');
        const budgetNumber = parseFloat(budget.value);
        const numberPlyer = playerList.children.length ;
        const  playerExpenses = budgetNumber * numberPlyer;
     
      const playerExpect = document.getElementById('playerExpenses');
      const playerExpectAmount =playerExpect.innerText= playerExpenses;
      budget.value= '';
    //   const playerexpen = playerExpect.innerText;
    //   console.log(playerexpen);

    
   


}

function calculateTotal (){


    const manager = document.getElementById('manager');
    const managerNumber = parseFloat(manager.value)

    const coach = document.getElementById('coach');
    const coachNumber = parseFloat(coach.value)

    const netAmount =  managerNumber + coachNumber  ;

    const totalAmount = document.getElementById('totalAmount');
    totalAmount.innerText = netAmount  ;
    manager.value= "";
    coach.value = "";


   




   

}





