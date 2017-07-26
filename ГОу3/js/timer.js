var data = new Date();
console.log(data.getDate()+":" + data.getMonth() + ":" + data.getFullYear());
console.log(func(data.getDay()));
function func(day){
	var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
	return days[day];
}
console.log(Date.parse('1988-03-17'));
function tic(){
	window.timerId = window.setInterval(timer,500);
}
function timer(){
	var data = new Date();
	var time = document.getElementById("inp");
	time.value = addZero(data.getHours()) + ":" + addZero(data.getMinutes()) + ":" + addZero(data.getSeconds());
}
function addZero(elem){
	if (elem <= 9){	
		return "0" + elem;
	}
	else {
		return elem;
	}
}
