function rollDice()
{
    const numOfDice = document.querySelector("#numOfDice").value;
    const diceResult = document.querySelector("#diceResult")
    const diceImg = document.querySelector("#diceImages")
    const values = []
    const images = []
    
    for(i = 0; i < numOfDice; i++ ){
       const diceNum = Math.floor(Math.random() * 6) + 1
    values.push(diceNum)
    images.push(`<img src = "dice/dice${diceNum}.png" alt = "img ${diceNum}" >`)
    
    }
    diceResult.textContent = `dice: ${values.join(", ")}`
    diceImg.innerHTML = images.join(" ")
 
}
