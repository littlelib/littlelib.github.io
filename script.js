let nd=[0, 99999];
let blood_dict={
	"Hb":[11.5,15.5],
	"Hct": [34.5,46.5],
	"RBC": [3.8,5],
	"WBC": [3.7,9.5],
	"Platelet": [150,400],
	"Segment neutrophil":[50,75],
	"Lymphocyte": [20, 44],
	"Monocyte": [2, 9],
	"Eosinophil": [0, 5],
	"Basophil": [0, 2],
	"Absolute Neutrophil count": [1600, 7000],
	//"Absolute Lymphocyte count": [0, 99999],
	"MCV": [82, 98],
	"MCH": [27, 33],
	"MCHC": [32, 36],
	"RDW": [11.5, 14.5],
	"MPV": [9, 13],
	//"PDW": [0, 99999],
	"PCT": [0.12, 0.38],

	"Sodium(serum)": [135, 145],
	"Potassium(serum)": [3.5, 5.5],
	"Chloride(serum)": [95, 110],
	"Calcium(serum)": [8.2, 10.8],
	"Phosphorous(serum)": [2.5, 4.7],

	"PT Sec": [9.5, 13],
	"I.N.R (1.2이하)": [0.8, 1.2],
	"PT Percent": [70, 140],
	"aPTT": [27, 39.5],

	"CK-MB": [0, 5],
	"Troponin I": [0, 45.43],

	"Protein(serum)": [6, 8.2],
	"Albumin(serum) ": [3.5, 5.2],
	"Glucose": [70, 100],
	"Total bilirubin(serum)": [0.1, 1.2],
	"AST(SGOT)": [10, 40],
	"ALT(SGPT)": [7, 40],
	"GAMMA-GT": [7, 45],
	"BUN(serum)": [8, 22],
	"Creatinine(serum)": [0.5, 1.2],
	"Alkaline Phosphatase": [35, 123],
	"Uric acid(serum)": [2.5, 8.3],
	"LDH(Serum)": [120, 246],
	"CPK(Serum)": [33, 211],
	"Ketone(serum)": [28, 120],
	"hsCRP": [0.05, 0.5],

	"Ammonia": [17, 66],

	"Osmolality(serum)": [289, 308],

	"Direct Bilirubin": [0, 0.5],
	"Amylase(Serum)": [30, 118],
	"Lipase": [8, 51],

	"Vitamin B6": [14.6, 72.9],
	"ESR", [0, 20],
	"Procalcitonin": [0, 0.04]


};


let ABGA_dict={
	"sO2": [95, 98],
	"PH": [7.35, 7.45],
	"PCO2": [35, 48],
	"PO2": [83, 108],
	"HCO3": [21, 28],
	"HCO3-act": nd,
	"HCO3-std": nd,
	"TCO2": nd,
	"BE(B)": nd,
	"BE(ecf)": nd,
	"SBC": nd,
	"BE-B": [-2, 3],
	"BE-ECF": nd,
	"iCa": [1.09, 1.30],
	//"iMg": 

	"Ca++": [1.15, 1.35],
	"Lactate": [0.7, 2.5],
	"Glu": [60, 95],
	"Na": [136, 147],
	"K": [3.4, 4.5],
	"Hct": [35, 51],
	"THbc": nd

};
  

let urine_dict={

};

let whole_dict={
	"Serum": blood_dict,
	"Urine": urine_dict
};

  //메뉴전환
  function changeToContent1(){
    document.getElementById("appcontent").innerHTML=document.getElementById("content1").innerHTML;
  }

  function changeToContent2(){
    document.getElementById("appcontent").innerHTML=document.getElementById("content2").innerHTML;
  }

 
  //content1
//enable tab
 /* document.addEventListener('keydown', function(e) { 
  if (e.keyCode == 9) {
    e.preventDefault(); 
    }
  }
);
*/
  
  //parse tableText
  function myParse(somestr) {
  let temp=somestr.split("\n");
  let finalOutput=[];
  for(i=0;i<temp.length;i++) {
    finalOutput.push(temp[i].split("\t"));
    }
    return finalOutput;
  }
  

//create html table and show it in finalTable

function createTable(nestedArr, classes) {
  let tbl=document.createElement("table");
  tbl.className=classes[0];
  let head=tbl.insertRow();
	let headC1=head.insertCell(0);
	let headC2=head.insertCell(1);
	let headC3=head.insertCell(2);
	let headC4=head.insertCell(3);
	let headC5=head.insertCell(4);
	for(i=0;i<5;i++){
		[headC1,headC2,headC3,headC4,headC5][i].innerText=["항목명","검사결과","비고","참고치",""][i];
		[headC1,headC2,headC3,headC4,headC5][i].className=classes[1];
	}
	for(i=0;i<nestedArr.length;i++){
    let tr=tbl.insertRow();
	  let c1=tr.insertCell(0);
	  let c2=tr.insertCell(1);
	  let c3=tr.insertCell(2);
	  let c4=tr.insertCell(3);
	  let c5=tr.insertCell(4);
	  c1.innerText=nestedArr[i][0];
	  c2.innerText=nestedArr[i][1];
	  c3.innerText=" ";
	  c4.innerText=nestedArr[i][2];
	  
	  for(j=0;j<5;j++){
		  [c1,c2,c3,c4,c5][j].className=classes[1];
	  }
	  
	  let b1=document.createElement("button");
	  let b2=document.createElement("button");
	  let b3=document.createElement("button");
	  b1.innerText="▲";
	  b2.innerText="▼";
	  b3.innerText="정상";
	  b1.onclick=function() {
		  c3.innerText="▲";
		  tr.style.color="red";
	  };
	  b2.onclick=function() {
		  c3.innerText="▼";
		  tr.style.color="blue";
	  };
	  b3.onclick=function() {
		  c3.innerText=" ";
		  tr.style.color="black";
	  };
	  c5.appendChild(b1);
	  c5.appendChild(b3);
	  c5.appendChild(b2);
	  console.log(tbl.className+c1.className);






    
  }
  return tbl;
}

function autoFormat(someTable, exam_type) {
	let criteria=whole_dict[exam_type];
	for (i=1;i<someTable.rows.length;i++) {
		row=someTable.rows[i];
		//console.log(row.cells[1].innerText);
		//console.log(criteria);
		
		if (typeof criteria[row.cells[0].innerText]=='undefined') {

			row.cells[2].innerText="undefined";
			row.style.color="green";
			continue;		
		}
		if (row.cells[1].innerText<criteria[row.cells[0].innerText][0]) {
			row.cells[2].innerText="▼";
			row.style.color="blue";
		} else if (row.cells[1].innerText>criteria[row.cells[0].innerText][1]) {
			row.cells[2].innerText="▲";
			row.style.color="red";
		} else {
			row.cells[2].innerText="";
			row.style.color="black";
		}
	}
	return someTable;
}

function create_initial_table(nestedArr, classes, exam_type) {
	let table=createTable(nestedArr, classes);
	return autoFormat(table, exam_type);
}












  function testinsert(){
    document.getElementById("htmltable").appendChild(createTable([[1,2,3],[4,5,6]],["tableStyle1", "cellStyle1"]));
  }
 let styleDict={};
  styleDict["1"]=["tableStyle1", "cellStyle1"];
  
  function showTable() {
    let originalText=document.getElementById("tableText").value;
    let nestedArr=myParse(originalText);
    //console.log(nestedArr);
    styleindex=document.getElementById("styleSelect").value;
	  let labtype=document.getElementById("labType");
    let finalTbl=create_initial_table(nestedArr, styleDict[styleindex], labtype.options[labtype.selectedIndex].value);
	  
    try{
      let tablePlace=document.getElementById("htmltable");
    tablePlace.replaceChild(finalTbl, tablePlace.children[0]);  
    }
    catch{
      let tablePlace=document.getElementById("htmltable");
    tablePlace.appendChild(finalTbl); 
    }
     console.log(document.getElementById("htmltable").children[0]);
  }

  function appendTable() {
    try{
    let inserttbl=document.getElementById("htmltable").children[0];
	    for(i=0;i<inserttbl.rows.length;i++){
		    inserttbl.rows[i].deleteCell(-1);
	    };
      document.getElementById("tableList").appendChild(inserttbl);
      document.getElementById("tableList").innerHTML+="<br>";
    }
    catch{
  alert("삽입할 테이블이 없습니다.");    
    }
    
  }
  //ppt 생성

  function createPpt(){
    let pres=new PptxGenJS();
    //let slide=pres.addSlide();
    let tableList=document.getElementById("tableList").children;
      for(i=0;i<tableList.length;i++){
        try{tableList[i].id=`table${i}`;
      pres.tableToSlides(`table${i}`);
    }
      catch{}
      }
    
    pres.writeFile({fileName: `${document.getElementById("filename").value}.pptx`});
  }
  
