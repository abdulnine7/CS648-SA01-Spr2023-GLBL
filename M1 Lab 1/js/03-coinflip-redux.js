var coinFlip;
 for( let i=0; i<10; i++){
     coinFlip = Math.round(Math.random());
    //  window.document.write(coinFlip);
     (coinFlip ==0) ? window.document.write("Heads " + "<br>") : window.document.write("Tails" + "<br>");
 }