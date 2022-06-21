async function getNumCand() {
	let a=await fetch("https://docs.google.com/spreadsheets/d/1WXbi1DWnh16TTR7fabfIfbBIDUewg5DBS6IS6B5ukYE/gviz/tq?tqx=out:csv&sheet=candidates")
	.then(res=>res.text());
	let temp=a.split("\"\n");
	console.log(temp.length);
	document.getElementById("numCand").innerText=temp.length-1;
}

getNumCand();

