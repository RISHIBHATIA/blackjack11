
function player1Hand() {
let  count1=Math.floor(Math.random()*10+1);
let  count2=Math.floor(Math.random()*10+1);
return total1=count1+count2 }




function player2Hand() {
var count1=Math.floor(Math.random()*10+1);
var count2=Math.floor(Math.random()*10+1);
return  total2=count1+count2
console.log("Player two has" + total2);
}

function dealerHand() {
var count1=Math.floor(Math.random()*10+1);
var count2=Math.floor(Math.random()*10+1);
return totald=count1+count2
console.log("Dealer has" + totald);
}


console.log(player1Hand() + dealerHand())
player2Hand()
dealerHand()

// if (player1Hand() < dealerHand()){
// console.log("Player One has"+'' + player1Hand() +"is Beating the dealer" + dealerHand);}
// else {console.log();
// }

function Evaluate(x,y){
    let Player1 = x
    let Dealer = y 
    if (Dealer > Player1){
        console.log('Dealer WINS! holding'+''+Dealer + 'Player 1 holds'+''+Player1)
    } else{
        console.log('Player1 WINS! holding'+' '+Player1 + 'Dealer holds '+''+Dealer)    

    }

    return x

}

Evaluate(dealerHand(),player1Hand())  
