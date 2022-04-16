const BloodCriteria={};
  const UrineCriteria={};

  BloodCriteria[["M", "N"]]={
    "Hb": [[14/365,[12,20]],[1/2,[10,17]], [1,[9.5,14]],[6,[9.5,14]],],
    "Hct": [],
    "RBC": [],
    "WBC": [],
    "Platelet": [],
    "Segment neutrophil": [],
    "Lymphocyte": [],
    "Monocyte": [],
    "Eosinophil": [],
    "Basophil": [],
    "Absolute Neutrophil count": [],
    "Absolute Lymphocyte count": [],
    "MCV": [],
    "MCHC": [],
    "RDW": [],
    "MPV": [],
    "PDW": [],
    "PCT": [],
    "Protein(serum)": [],
    "Albumin(serum)": [],
    "Glucose": [],
    "Total bilirubin(serum)": [],
    "AST(SGOT)": [],
    "ALT(SGPT)": [],
    "GAMMA-GT": [],
    "BUN(serum)": [],
    "Creatine(serum)": [],
    "Cholesterol": [],
    "T.G": [],
    "HDL-Cholesterol": [],
    "LDL-Cholesterol": [],
    "LDL-Cholesterol": [],
    "Alkaline Phosphatase": [],
    "Uric acid(serum)": [],
    "LDH(Serum)": [],
    "CPK(Serum)": [],
    "VDRL(정량)": [],
    "hsCRP": [],
    "Rheumatoid factor 정량": []
  };
  BloodCriteria[["F", "N"]]={};
  BloodCriteria[["F", "Y"]]={};

  UrineCriteria[["M", "N"]]={};
  UrineCriteria[["F", "N"]]={};
  UrineCriteria[["F", "Y"]]={};

  let specificCriteria={};


  let content1=`<h2>Table Generator</h2>
       
    <h3>1. 테이블 생성</h3>
    <p>EMR 차트 복사& 붙여넣기 -> 검사항목을 제외한 줄은 제거 -> 버튼 누르기<br><br>
    <label>Sex<br>
      <label><input type="radio" name="Sex" value="Male">Male</label>
      <label><input type="radio" name="Sex" value="Female">Female</label><br><br>
    </label>
    <label>Pregnancy<br>
      <label><input type="radio" name="Pregnancy" value="Yes">Yes</label>
      <label><input type="radio" name="Pregnancy" value="No" checked="checked">No</label>
    <br><br>
    </label>
    <label>Age<br>
      <input type="text" id="Age"></input>
    </label>
<br><br>
    <label>Lab type<br>
<select id="labType">
<option value="Serum">Serum</option>
<option value="Urine">Urine</option>
</select></label><br><br>
    <label>Lab content<br>
      <textarea onkeydown="if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}" id="tableText" style="resize: none" cols="50" rows="10" placeholder="Input table content"></textarea>
      <button onclick="testtest()">Please</button>
    </label>
    </p>
    <h3>3. 테이블 형식 설정</h3>
<select id="styleSelect">
<option value="1">1</option>
<option value="2">그런거없다</option>
</select>
<br><br><button onclick="showTable()">insert</button><br><br>
    <div id="htmltable"></div>
    
<h3>4. 테이블 삽입</h3>
<p>테이블이 잘 생성되었는지를 확인하였으면 확정 버튼을 눌러 테이블 리스트에 추가하세요.<br>
확정된 테이블들은 나중에 다운받을 PPT 파일에 포함됩니다.
<br>실제 PPT에서의 테이블은 모양이 조금 다를 수 있습니다.
</p>
<br>
<button onclick="appendTable()">삽입</button>
    <div id="tableList"></div>
<h3>5. 파일 저장
<p>작업이 모두 끝났으면 완료 버튼을 눌러 작업을 종료하세요.</p>
    <label>파일 이름 설정<input type="text" id="filename"></input></label>
    <br>
    <button onclick="createPpt()">완료</button>
    `;
  let content2=``;

  //메뉴전환
  function changeToContent1(){
    document.getElementById("appcontent").innerHTML=content1;
  }

  function changeToContent2(){
    document.getElementById("appcontent").innerHTML=content2;
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
  
