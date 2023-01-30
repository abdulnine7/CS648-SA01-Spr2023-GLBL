var number1 = parseInt(window.prompt(" Enter number 1"));
var number2 = parseInt(window.prompt(" Enter number 2"));

if (number1 > number2){
    window.document.write(" Greater Number is " +number1)
}
else if(number2 > number1){
    window.document.write(" Greater Number is " +number2)
}
else{
    window.document.write("Both numbers are equal")
}