async function getNumCand() {
	let a=await fetch("https://docs.google.com/spreadsheets/d/1WXbi1DWnh16TTR7fabfIfbBIDUewg5DBS6IS6B5ukYE/gviz/tq?tqx=out:csv&sheet=EMR_dict")
	.then(res=>res.text());
	let temp=a.split("\"\n");
	document.getElementById("numCand").value=temp.length-1;
}

getNumCand();

