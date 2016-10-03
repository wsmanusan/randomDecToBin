var startDate;

function newValues() {
	for(var n = 1; n <= 6; n++) {
		document.getElementById("dec"+n).innerHTML = Math.floor((Math.random() * 255));
		document.getElementById("bin"+n).innerHTML = "";
		document.getElementById("sol"+n).value = "";
		document.getElementById("bin"+n).style.backgroundColor = "white";
	}
	document.getElementById("timerId").style.display = "none";
	document.getElementById("autocomplete").style.display = "none";
	startDate = new Date().getTime();
}

function showBinary() {
	for(var n = 1; n <= 6; n++) {
		document.getElementById("bin"+n).innerHTML = formatBin(parseInt(document.getElementById("dec"+n).innerHTML).toString(2));
	}
	document.getElementById("autocomplete").style.display = "inline";
}

function formatBin(bin) {
	
	while (bin.length != 8) {
		bin = "0"+bin;
	}
	var formatted = bin.substring(0,4) + " " + bin.substring(4,8)
	return formatted;
}

function check() {
	var nCorrect = 0;
	for(var n = 1; n <= 6; n++) {
		var iput = document.getElementById("sol"+n).value
		if(/^([0-1]{1,8})$/.test(iput) == false) {
			document.getElementById("bin"+n).style.backgroundColor = "#ffad99";
		} else {
			input = formatBin(iput);
			solution = formatBin(parseInt(document.getElementById("dec"+n).innerHTML).toString(2))
			if(input == solution){
				document.getElementById("bin"+n).style.backgroundColor = "#d9ffb3";
				nCorrect++;
			} else {
				document.getElementById("bin"+n).style.backgroundColor = "#ffad99";
			}
		}
	}
	if(nCorrect == 6) {
		var actualDate = new Date().getTime();
		var time = (actualDate - startDate) / 1000;
		document.getElementById("timer").innerHTML = time+" seg";
		document.getElementById("timerId").style.display = "block";
	}
}

function moveSolution() {
	for(var n = 1; n <= 6; n++) {
		document.getElementById("sol"+n).value = parseInt(document.getElementById("dec"+n).innerHTML).toString(2);
	}
}