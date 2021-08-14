//Function using for clear all the Values
function clearScreen() 
{
    document.getElementById("result").value = "";
}
   
//Display
function display(value) 
{
    document.getElementById("result").value += value;
}

//Evalute the expression and give the Result 
function calculate() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}