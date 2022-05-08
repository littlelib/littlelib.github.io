
function parse_criteria(some_str) {
	if (typeof some_str == "string") {
		let start_idx=some_str.search(" ~ ");
		if (start_idx==-1) {
		    return;
		}
		let end_idx=start_idx+2;

		let first_str=some_str.slice(0, start_idx);
		let second_str_temp=some_str.slice(end_idx+1);
		let second_str=second_str_temp.slice(0, second_str_temp.search(" "));
        
		return [Number(first_str), Number(second_str)];
    } else {
	    console.log("Not a string!");
	    return;		
    }
}




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
		[headC1,headC2,headC3,headC4,headC5][i].className=classes[0];
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

function autoFormat(someTable) {
	//let criteria=whole_dict[exam_type];
	for (i=1;i<someTable.rows.length;i++) {
		row=someTable.rows[i];
		//console.log(row.cells[1].innerText);
		//console.log(criteria);
		let row_criteria=parse_criteria(row.cells[3].innerText);
		if (typeof row_criteria == 'undefined') {

			row.cells[2].innerText="";
			row.style.color="black";
			continue;		
		}
		if (row.cells[1].innerText<row_criteria[0]) {
			row.cells[2].innerText="▼";
			row.style.color="blue";
		} else if (row.cells[1].innerText>row_criteria[1]) {
			row.cells[2].innerText="▲";
			row.style.color="red";
		} else {
			row.cells[2].innerText="";
			row.style.color="black";
		}
	}
	return someTable;
}

function create_initial_table(nestedArr, classes) {
	let table=createTable(nestedArr, classes);
	if (document.getElementById("auto_on").checked==true) {
	return autoFormat(table);
	} else {
		return table;
	}
}



 let styleDict={};
 styleDict["1"]=["tableStyle1", "cellStyle1"];
 styleDict["2"]=["tableStyle2", "cellStyle2"]; 

  function showTable() {
    let originalText=document.getElementById("tableText").value;
    let nestedArr=myParse(originalText);
    //console.log(nestedArr);
    styleindex=document.getElementById("styleSelect").value;
	
    let finalTbl=create_initial_table(nestedArr, styleDict[styleindex]);
	  
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
		pres.tableToSlides(`table${i}`, {h: "200%"  , autoPage:false});
    }
      catch{}
      }
    
    pres.writeFile({fileName: `${document.getElementById("filename").value}.pptx`});
  }
  
