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
  voca_list.appendChild(list);
  for(const file of selectedFiles) {
    const listItem = document.createElement('li');
    if(validFileType(file)) {
      const name = document.createElement('div');
      var str_name = `${file.name}`;
      name.textContent = str_name.slice(0,-4);
      if(!location.hash) {
        location.hash = name.textContent;
      } else {
        location.hash += '&'+name.textContent;
      }
      const textContents = document.createElement('div');
      listItem.appendChild(name);
    } else {
      const message = document.createElement('div');
      message.textContent = `파일명 ${file.name}: .txt 파일을 선택하세요`;
      listItem.appendChild(message);
    }
    list.appendChild(listItem);
  }
}
const fileTypes = [
'text/plain',
];
function validFileType(file) {
return fileTypes.includes(file.type);
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
