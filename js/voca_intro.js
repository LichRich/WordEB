/*
 *
 * header
 *
 */
var logo = document.getElementById('logo');
logo.onclick = function() {
    location.href = "../index.html";
}
/*
 *
 * section
 *
 */
var btn_voca = document.getElementById('go_voca');
btn_voca.onclick = function() {
  location.href = "voca_list.html";
}
var go_trans_intro = document.getElementById('go_trans_intro');
go_trans_intro.onclick = function() {
  location.href = "../trans/trans_intro.html";
}

/*
 *
 * nav
 *
 */
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
var go_trans = document.getElementById('go_trans');
go_trans.onclick = function() {
  location.href = "../trans/translation.html";
}