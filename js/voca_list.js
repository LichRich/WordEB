/*
 *
 * header
 *
 */
var logo = document.getElementById('logo');
logo.onclick = function() {
    location.href = "../../html/index.html";
}

let index = 0;
for(var i = 0 ; i < localStorage.length ; i++) {
  let key = localStorage.key(i);
  if(key.includes('names')) index++;
}

const load_voca = document.getElementById('load_voca');
const voca_list = document.querySelector('.voca_list');
load_voca.addEventListener('change', showTextFile);

function showTextFile() {
  const selectedFiles = load_voca.files;
  const list = document.createElement('ul');

  for(const file of selectedFiles) {
    if(validFileType(file)) {
      var str_name = (`${file.name}`).slice(0,-4);
      let keys = Object.keys(localStorage);
      if(keys.includes(str_name)) continue;

      const listItem = document.createElement('li');
      const itemBox = document.createElement('div');
      const name = document.createElement('div');
      name.setAttribute("style", "flex:8;");
      name.textContent = str_name;
      localStorage.setItem("names"+(index++), str_name);
      console.log(localStorage.getItem("names"+(index-1)));
      readText(file, str_name);
      const remove = document.createElement('div');
      remove.setAttribute("style", "flex:2; background-color:#FF4848");
      remove.textContent = "remove";
      itemBox.appendChild(name);
      itemBox.appendChild(remove);
      listItem.appendChild(itemBox);
      list.appendChild(listItem);
      remove.addEventListener('click', removeItem);
      voca_list.appendChild(list);
    } else {
      alert(`파일명 ${file.name}: .txt 파일을 선택하세요`);
    }
  }

}
function readText(file, name) {
  let reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = function() {
    localStorage.setItem(name, reader.result);
  };
}
const fileTypes = [
'text/plain',
];
function validFileType(file) {
return fileTypes.includes(file.type);
}
window.onload = function() {
  // let keys = Object.keys(localStorage);
  //localStorage에 key가 있는데 voca_list에 자식노드가 없을 때
  if(index > 0 && !voca_list.hasChildNodes()) {
    const list = document.createElement('ul');
    voca_list.appendChild(list);
    for(var i = 0 ; i < index ; i++){
      const listItem = document.createElement('li');
      const itemBox = document.createElement('div');
      const name = document.createElement('div');
      name.setAttribute("style", "flex:8;");
      var str_name = localStorage.getItem("names"+[i]);
      name.textContent = str_name;
      const remove = document.createElement('div');
      remove.setAttribute("style", "flex:2; background-color:#FF4848");
      remove.textContent = "remove";
      itemBox.appendChild(name);
      itemBox.appendChild(remove);
      listItem.appendChild(itemBox);
      list.appendChild(listItem);
    }
  }
}
function removeItem(item) {
  var parent = item.parentElement;
  parent.removeChild(item);
}
function goVoca(item) {
  var words = item.textContent;

}

/*
 *
 * footer
 *
 */
var test_all = document.getElementById('test_all');
test_all.onclick = function() {
    location.href = "voca_test.html";
}
