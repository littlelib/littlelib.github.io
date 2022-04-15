const BloodCriteria={};
const UrineCriteria={};

  BloodCriteria[["M", "N"]]={
    
    "Hb": [[14/365,[13.7,20.1]],[3/12,[13.0,20.0]], [1/2,[9.5,14.5]],[6,[10.5,14.0]],[12,[11, 16.0]], [999,[14,18]]],
    "Hct": [[14/365,[45,65]], [3/12,[42,66]], [1/2,[31,41]], [6,[33,42]],[12,[34,40]], [999,[42,52]]],
    //https://www.nbt.nhs.uk/sites/default/files/Childrens%20FBC%20Reference%20Ranges.pdf
    "RBC": [[14/365,[3.7,6.5]], [28/365,[3.9,5.9]], [2/12,[3.2,5.9]], [1/2,[3.1,4.3]], [1,[4.1,5.3]],[6,[3.9,5.3]],[12,[4.0,5.2]], [999,[4.5,5.3]]],
    "WBC": [[14/365,[9,30]], [3/12,[5,21]], [1/2,[6,18]], [6,[6,15]],[12,[4.5,13.5]], [999,[5,10]]],
    //https://www.nbt.nhs.uk/sites/default/files/Childrens%20FBC%20Reference%20Ranges.pdf
    "Platelet": [999,[150,400]],
    //http://a1.mayomedicallaboratories.com/webjc/attachments/110/30a2131-complete-blood-count-normal-pediatric-values.pdf
    "Segment neutrophil": [[1/365,[41,81]],[4/365,[41,81]],[7/365,[30,60]],[15/365,[25,55]],[2/12,[20,50]],[6/12,[20,50]],[1,[15,45]],[3,[15,45]],[6,[25,57]],[10,[38,68]],[15,[40,70]],[999,[42,72]]],
    "Lymphocyte": [[1/365,[26,36]],[4/365,[21,41]],[7/365,[31,51]],[15/365,[33,63]],[2/12,[41,71]],[6/12,[44,74]],[1,[47,77]],[3,[44,74]],[6,[35,65]],[10,[25,54]],[15,[28,48],[999,[25,45]]],
    //"Monocyte": [],
    //"Eosinophil": [],
    //"Basophil": [],
    //"Absolute Neutrophil count": [],
    //"Absolute Lymphocyte count": [],
    //http://a1.mayomedicallaboratories.com/webjc/attachments/110/30a2131-complete-blood-count-normal-pediatric-values.pdf
    "MCV": [[7/365,[95,125]],[14/365,[88,115]],[2/12,[80,112]],[6/12,[70,98]],[1,[70,90]],[2,[70,90]], [4,[74,94]],[8,[76,96]],[10,[78,98]],[999,[78,98]]],
    ///http://a1.mayomedicallaboratories.com/webjc/attachments/110/30a2131-complete-blood-count-normal-pediatric-values.pdf
    "MCHC": [[1/365,[30,35]],[4/365,[30,38]],[7/365,[30,38]],[14/365,[30,36]],[2/12,[30,35]],[6/12,[32,36]],[1,[32,36]],[2,[30,35]], [4,[32,36]],[999,[32,36]]],
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

//

function createSpecificCriteria(sex, pregnancy, age, originalCriteria) {
  let returnDict={};
  

}



 
  //메뉴전환
  function changeToContent1(){
    document.getElementById("appcontent").innerHTML=document.getElementById("content1").innerHTML;
  }

  function changeToContent2(){
    document.getElementById("appcontent").innerHTML=document.getElementById("content2").innerHTML;
  }

 
  //content1

  
  //parse tableText
  function myParse(somestr) {
  let temp=somestr.split("\n");
  let finalOutput=[];
  for(i=0;i<temp.length;i++) {
    finalOutput.push(temp[i].split("\t"));
    }
    return finalOutput;
  }
  
//apply criteria
  function myOperator(criteriaArr, value) {
    if(criteriaArr[0]>value) {
      return "▼";
    } else if (criteriaArr[1]<value) {
      return "▲";
    } else {
      return "";
    }
  }

  function applyCriteria(criteria, somearr) {
    let outputArr=[];
    for(i=0;i<somearr.length;i++){
        if(criteria[somearr[i][0]]==undefined){
        outputArr.push([somearr[i][0], somearr[i][1], "undefined", somearr[i][2]]);
        } else{
          outputArr.push([somearr[i][0], somearr[i][1], myOperator(criteria[somearr[i][0]], somearr[i][1]), somearr[i][2]]);
        }
    } 
    return outputArr;
  }

//create html table and show it in finalTable

function createTable(nestedArr, Ids){
  let tbl=document.createElement("table");
  tbl.id=Ids[0];
  for(i=0;i<nestedArr.length;i++){
    let tr=tbl.insertRow();
    for(j=0;j<nestedArr[i].length;j++){
      let td=tr.insertCell();
      td.id=Ids[1];
      td.appendChild(document.createTextNode(nestedArr[i][j]));
    }
    if(tr.cells[2].innerText=="▼") {
      tr.style.color="blue";
    } else if(tr.cells[2].innerText=="▲") {
      tr.style.color="red";
    }
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
    let parsedText=myParse(originalText);
    let nestedArr=applyCriteria({},parsedText);
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
  
