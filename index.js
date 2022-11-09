
const playerList = document.getElementById('playerList');

function addPlayer( button , name){
    button.classList.add('disable')
    const li =  document.createElement('li')
    li.innerText = name ;
    playerList.appendChild( li );

    
}
const numberPlyer = playerList.children.length ;





