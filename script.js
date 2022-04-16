
  
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

function createTable(nestedArr, Ids){
  let tbl=document.createElement("table");
  tbl.id=Ids[0];
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
	  c1.id=Ids[1];
	  c2.id=Ids[1];
	  c3.id=Ids[1];
	  c4.id=Ids[1];
	  c5.id=Ids[1];
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






    
  }
  return tbl;
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
    let finalTbl=createTable(nestedArr, styleDict[styleindex]);
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
  
