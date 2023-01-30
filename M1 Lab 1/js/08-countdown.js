for(var i=1;i<=100;i++) {
    // window.document.write(i);
    if(i%3 == 0 && i%5 == 0) {
        window.document.write('"Marco! Polo!"' + "<br>");
    }
    else if(i%5 == 0) {
        window.document.write('"Polo!"' + "<br>");
    }
    else if(i%3 == 0) {
        window.document.write('"Marco!"' + "<br>");
    }
}