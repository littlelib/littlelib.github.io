async function getNumCand() {
	let a=await fetch("https://docs.google.com/spreadsheets/d/1WXbi1DWnh16TTR7fabfIfbBIDUewg5DBS6IS6B5ukYE/gviz/tq?tqx=out:csv&sheet=candidates")
	.then(res=>res.text());
	let temp=a.split("\"\n");
	console.log(temp.length);
	document.getElementById("numCand").innerText=temp.length-1;
}

function parseLog(log) {
	let temp=log.split("\n");
	let returnArr=[];
	for(i=0;i<temp.length;i++){
		returnArr.push(temp[i].split(" "));
	}
	return returnArr;
}


async function getMinimalLog() {
	let a=await fetch("https://docs.google.com/spreadsheets/d/14N-clUHjtCUYpLOIu51C1_JwFrtXdLgl1CPffPuLrY0/gviz/tq?tqx=out:csv")
	.then(res=>res.text());
	let logs=parseLog(a);
	let total=logs.length;
	let today=0;
	let now=Date().split(" ").slice(0,4);
	for(i=0;i<logs.length;i++){
		if(now==logs[i].slice(0,4)){
			today++;
		}
	}
	document.getElementById("numVisitTotal").innerText=total;
	document.getElementById("numVisitToday").innerText=today;
}



getNumCand();
getMinimalLog();
