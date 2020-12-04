/*
 *
 * header
 *
 */
var logo = document.getElementById('logo');
logo.onclick = function() {
    location.href = "index.html";
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
   for(const file of selectedFiles) {
     if(validFileType(file)) {
       var str_name = (`${file.name}`).slice(0,-4);
       let keys = Object.keys(localStorage);
       if(keys.includes(str_name)) continue;

       const listItem = document.createElement('li');
       listItem.setAttribute("style", "display:flex;");
       const name = document.createElement('button');
       name.setAttribute("type", "submit");
       name.setAttribute("style", "flex:9; height:100%; background-color: #add8e6; color: white; font: bold 20px 'Ink Free', '-윤고딕320'; cursor: pointer;");
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
       remove.setAttribute("style", "flex:1; background-color:#FF4848");
       remove.textContent = "X";
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
     localStorage.setItem(name, reader.result);
   };
 }
 const fileTypes = [
 'text/plain',
 ];
 function validFileType(file) {
 return fileTypes.includes(file.type);
 }
 var go_trans = document.getElementById('go_trans');
 go_trans.onclick = function() {
     location.href = "trans/translation.html";
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
       name.setAttribute("style", "flex:9; height:100%; font: bold 20px 'Ink Free', '-윤고딕320';");
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
       remove.setAttribute("style", "flex:1; background-color:#FF4848; font: bold 20px 'Ink Free', '-윤고딕320';");
       remove.textContent = "X";
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
     }
   }
 }

 /*
  *
  * section
  *
  */

 var skip = document.getElementById('skip');
 skip.onclick = function() {
   location.href = "voca/voca_list.html";
 }

 var go_voca_intro = document.getElementById('go_voca_intro');
 go_voca_intro.onclick = function() {
   location.href = "voca/voca_intro.html";
 }

 var go_trans_intro = document.getElementById('go_trans_intro');
 go_trans_intro.onclick = function() {
   location.href = "trans/trans_intro.html";
 }
