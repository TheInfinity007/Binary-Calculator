var btn0 = document.querySelector("#btn0");
var btn1 = document.querySelector("#btn1");
var btnClr = document.querySelector("#btnClr");
var btnEql = document.querySelector("#btnEql");
var btnSum = document.querySelector("#btnSum");
var btnSub = document.querySelector("#btnSub");
var btnMul = document.querySelector("#btnMul");
var btnDiv = document.querySelector("#btnDiv");
var res = document.querySelector("#res");

btn0.innerHTML = 0;
btn1.innerHTML = 1;
btnClr.innerHTML = 'C';
btnEql.innerHTML = '=';
btnSum.innerHTML = '+';
btnSub.innerHTML = '-';
btnMul.innerHTML = '*';
btnDiv.innerHTML = '/';

var resValue = "";
btn0.addEventListener("click", function(){
	resValue += '0';
	res.innerHTML = resValue;
});
btn1.addEventListener("click", function(){
	resValue += '1';
	res.innerHTML = resValue;
})
btnSum.addEventListener("click", function(){
	resValue += '+';
	res.innerHTML = resValue;
})
btnSub.addEventListener("click", function(){
	resValue += '-';
	res.innerHTML = resValue;
})
btnMul.addEventListener("click", function(){
	resValue += '*';
	res.innerHTML = resValue;
})
btnDiv.addEventListener("click", function(){
	resValue += '/';
	res.innerHTML = resValue;
})
btnClr.addEventListener("click", function(){
	resValue = '';
	res.innerHTML = resValue;
})

btnEql.addEventListener("click", function(){
	var operator = getOperator(resValue);
	var opIndex = resValue.indexOf(operator);
	var operand1 = getOperand(resValue, 0, opIndex);
	var operand2 = getOperand(resValue, opIndex+1, resValue.length);
	let val = eval(operand1 + operator + operand2);
	if(operator == '/'){
		val = Math.floor(val);
	}
	resValue = val.toString(2);
	res.innerHTML = resValue;
})

function getOperand(str, start, end, op){
	let val =  str.substring(start, end);
	if(op == '/'){
		return parseInt(val, 10);
	}
	val = parseInt(val, 2);
	return val;
}

function getOperator(str){
	for(let i = 0; i < str.length; i++){
		switch(str[i]){
			case '+': return '+';
			case '-': return '-';
			case '*': return '*';
			case '/': return '/'
		}
	}
}