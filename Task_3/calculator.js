function Solve(val){
    var num = document.getElementById('res');
    num.value += val;
}
function Result(){
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
}
function Clear(){
    var input = document.getElementById('res');
    input.value = "";
}
function Back(){
    var emptyVal = document.getElementById('res');
    emptyVal.value = emptyVal.onselectionchange(0, -1);
}