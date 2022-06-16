let itemDict={'daschart': 'chartButton', 'dasdict': 'dictButton', 'about': 'aboutButton'};

function dropMenu(id) {
  let item=document.getElementById(id);
  let but=document.getElementById(itemDict[id]);
  if (item.style.display=='none') {
    item.style.display='block';
    but.innerText=but.innerText.substring(0, but.innerText.length-1)+"▲";
  } else {
    item.style.display='none';
    but.innerText=but.innerText.substring(0, but.innerText.length-1)+"▼";
  }
}
