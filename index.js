

function rollDice(){
    const numberOfDices = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values= [];
    const images= [];
    var total=0;               
    for (let i = 0 ; i < numberOfDices; i++){
        
        
        const value = Math.floor(Math.random() * 6 ) + 1;
        total+=value;
        values.push(value);
        images.push(`<img src="Dice_Images/diceface${value}.svg" alt="Dice ${value}">`);
    }
    diceResult.textContent = `total = ${total}, dices = ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    
}
