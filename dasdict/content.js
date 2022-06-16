//create department select options
        const depArr=["일반", "내과진료부", "마취통증의학과","비뇨의학과", "산부인과","성형외과", "소아청소년과", "신경과", "신경외과",  "안과", "외과", "이비인후과",  "재활의학과","정신건강의학과", "정형외과", "치과",  "피부과", "흉부외과"];

        for(i=0;i<depArr.length;i++) {
            let opt=document.createElement("option");
            opt.value=depArr[i];
            opt.innerHTML=depArr[i];
            document.getElementById("selectDep").appendChild(opt);
        }

        //create EMR dictionary

        let nestedArr=[];
        function dictParse(csvDict){
            let temp=csvDict.split("\"\n");
            let finalOutput=[];
                for (i=0;i<temp.length;i++){
                    let nestedTemp=(temp[i]+'\"').split(",");
                    finalOutput.push(nestedTemp.map(x=>x.slice(1,-1)));
                }
            	finalOutput=finalOutput.slice(1);
		return finalOutput;
        }
        //search EMR dictionary
        function searchDict(word, dep, dict) {
            let primary_index=[];
            let secondary_index=[];
            let leftover_index=[];
            for (i=0;i<dict.length;i++) {
                if (dict[i][1].toUpperCase().slice(0,word.length)!=word.toUpperCase()) {
                    continue;
                }
                if (dep==dict[i][0]) {
                    primary_index.push(i);
                } else if (dep!="일반") {
                    leftover_index.push(i);
                } else {
                    secondary_index.push(i);
                }
                
            }
            return primary_index.concat(secondary_index).concat(leftover_index);

        }

        function showOnSearch(){
            let wordList=document.getElementById("wordList");
            wordList.textContent="";
            let word=document.getElementById("searchWord").value;
				if (word==""){
							return;
						}
				let dep=document.getElementById("selectDep").value;
            console.log(nestedArr);
		let indexes=searchDict(word, dep, nestedArr);
            for (i=0;i<indexes.length;i++) {
                let wordAttr=nestedArr[indexes[i]];
                let wordBox=document.createElement("div");
                wordBox.className="cell";
                wordBox.innerHTML=wordAttr[0]+" | "+wordAttr[1]+": "+wordAttr[2];
                
                wordBox.onmousedown=(()=>showSpecificWord(wordAttr));
                document.getElementById("wordList").appendChild(wordBox);
            }

        }

        function showSpecificWord(wordAttr) {
            let result=document.getElementById("searchResult");
            result.innerHTML=`<strong>&emsp; ${wordAttr[1]}</strong><br>과: ${wordAttr[0]}<br>영어 원문: ${wordAttr[2]}<br>한글 뜻: ${wordAttr[3]}<br>예시: ${wordAttr[4]}<br>기여자: ${wordAttr[5]}`;
            console.log("done");

        }








        async function whatevs() {
            
            //fetch EMR dictionary data from google spreadsheet as csv
            let a=await fetch("https://docs.google.com/spreadsheets/d/1WXbi1DWnh16TTR7fabfIfbBIDUewg5DBS6IS6B5ukYE/gviz/tq?tqx=out:csv&sheet=EMR_dict")
            .then((res)=>res.text())
            .then((data)=>{
            return data;
            });
            //create EMR dictionary
            nestedArr=dictParse(a);
            console.log("done");
		console.log(nestedArr[3]);


        }
        whatevs();

function makeVisible(id) {
	document.getElementById(id).style.display='block';
}
function makeNone(id) {
	document.getElementById(id).style.display='none';
}
