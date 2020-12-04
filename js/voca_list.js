/*
 *
 * header
 *
 */
var logo = document.getElementById('logo');
logo.onclick = function() {
    location.href = "../../html/index.html";
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
      listItem.setAttribute("style", "display:flex;");
      const name = document.createElement('button');
      name.setAttribute("type", "submit");
      name.setAttribute("style", "flex:8; height:100%; background-color: #add8e6; color: white; font: bold 20px 'Ink Free', '-윤고딕320'; cursor: pointer;");
      name.textContent = str_name;
      name.onclick = function() {
        console.log(name.textContent + 'clicked!!');
        let fileName = document.createElement('input');
        fileName.setAttribute('name', 'fileName');
        fileName.setAttribute('type', 'hidden');
        fileName.setAttribute('value', name.textContent);
        let val = document.createElement('input');
        val.setAttribute('name','voca');
        val.setAttribute('type', 'hidden');
        val.setAttribute('value', localStorage.getItem(name.textContent));
        name.appendChild(fileName);
        name.appendChild(val);
      };
      readText(file, str_name);
      const remove = document.createElement('div');
      remove.setAttribute("style", "flex:2; background-color:#FF4848");
      remove.textContent = "remove";
      remove.onclick = function() {
        console.log('removeItem on!!!');
        let key = name.textContent;
        localStorage.removeItem(key);
        var parent = listItem.parentElement;
        parent.removeChild(listItem);
      };
      listItem.appendChild(name);
      listItem.appendChild(remove);
      list.appendChild(listItem);
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
    var result  = reader.result;
    localStorage.setItem(name, result);
    var hiddenQ = document.createElement('input');
    var hiddenA = document.createElement('input');
    hiddenQ.setAttribute('type', 'hidden');
    hiddenQ.setAttribute('name', 'q[]');
    hiddenA.setAttribute('type', 'hidden');
    hiddenA.setAttribute('name', 'a[]');
    if(result.includes('\n')) {
      var arr = result.split('\n');
      for(let item of arr) {
        if(item.includes(':')){
          var qna = item.split(':');
          hiddenQ.setAttribute('value', qna[0]);
          hiddenA.setAttribute('value', qna[1]);
        }
      }
    } else {
      if(result.includes(':')) {
        var qna = result.split(':');
        hiddenQ.setAttribute('value', qna[0]);
        hiddenA.setAttribute('value', qna[1]);
      }
    }
  };
}
const fileTypes = [
'text/plain',
];
function validFileType(file) {
return fileTypes.includes(file.type);
}
window.onload = function() {
  //localStorage에 key가 있는데 voca_list에 자식노드가 없을 때
  if(localStorage.length > 0 && !voca_list.hasChildNodes()) {
    let keys = Object.keys(localStorage);
    keys.sort();
    const list = document.createElement('ul');
    voca_list.appendChild(list);

    for(let key of keys) {
      const listItem = document.createElement('li');
      listItem.setAttribute("style", "display:flex;");
      const name = document.createElement('button');
      name.setAttribute("type", "submit");
      name.setAttribute("style", "flex:8; height:100%; font: bold 20px 'Ink Free', '-윤고딕320';");
      name.textContent = key;
      name.onclick = function(){
        console.log(name.textContent + 'clicked!!');
        let fileName = document.createElement('input');
        fileName.setAttribute('name', 'fileName');
        fileName.setAttribute('type', 'hidden');
        fileName.setAttribute('value', name.textContent);
        let val = document.createElement('input');
        val.setAttribute('name', 'voca');
        val.setAttribute('type', 'hidden');
        val.setAttribute('value', localStorage.getItem(name.textContent));
        name.appendChild(fileName);
        name.appendChild(val);
      };
      const remove = document.createElement('div');
      remove.setAttribute("style", "flex:2; background-color:#FF4848; font: bold 20px 'Ink Free', '-윤고딕320';");
      remove.textContent = "remove";
      listItem.appendChild(name);
      listItem.appendChild(remove);
      remove.onclick = function() {
        console.log('removeItem on!!!');
        let key = name.textContent;
        localStorage.removeItem(key);
        var parent = listItem.parentElement;
        parent.removeChild(listItem);
      };
      list.appendChild(listItem);

      var item = localStorage.getItem(key);
      var testAllForm = document.querySelector('.testAllForm');
      if(item.includes('\n')) {
        var arr = item.split('\n');
        for(var word of arr) {
          if(word.includes(':')) {
            var qna = word.split(':');
            var hiddenQ = document.createElement('input');
            hiddenQ.setAttribute('type', 'hidden');
            hiddenQ.setAttribute('name', 'q[]');
            hiddenQ.setAttribute('value', qna[0]);
            var hiddenA = document.createElement('input');
            hiddenA.setAttribute('type', 'hidden');
            hiddenA.setAttribute('name', 'a[]');
            hiddenA.setAttribute('value', qna[1]);

            testAllForm.appendChild(hiddenQ);
            testAllForm.appendChild(hiddenA);
          }
        }
      } else {
        if(item.includes(':')) {
          var qna = word.split(':');
          var hiddenQ = document.createElement('input');
          hiddenQ.setAttribute('type', 'hidden');
          hiddenQ.setAttribute('name', 'q[]');
          hiddenQ.setAttribute('value', qna[0]);
          var hiddenA = document.createElement('input');
          hiddenA.setAttribute('type', 'hidden');
          hiddenA.setAttribute('name', 'a[]');
          hiddenA.setAttribute('value', qna[1]);

          testAllForm.appendChild(hiddenQ);
          testAllForm.appendChild(hiddenA);
        }
      }

    }
  }
}

/*
 *
 * footer
 *
 */
var test_all = document.getElementById('test_all');
function isWordsBlank() {
  if(localStorage.length === 0) {
    alert("테스트하기 위한 단어들이 없습니다!");
    return false;
  }
  return true;
}
