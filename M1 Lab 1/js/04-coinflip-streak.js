var coinFlip;
do{
    coinFlip = Math.round(Math.random());
    (coinFlip ==0) ? window.document.write("Heads " + "<br>") : window.document.write("Tails" + "<br>");

}while (coinFlip == 0)