/*
 *
 * header
 *
 */
var logo = document.getElementById('logo');
logo.onclick = function() {
    location.href = "../../html/index.html";
}
var back = document.getElementById('div_title');
back.onclick = function() {
    history.back();
}

/*
 *
 * sections
 *
 */
// 새 단어 등록
function registerWords() {
  const word_list = document.getElementById('word_list');
  var data = document.getElementById("txt_newVoca").value;
  var data_removeEnter = data.split('\n');
  for(var i = 0 ; i < data_removeEnter.length ; i++) {
    if(data_removeEnter[i].includes(':')) {
      var data_split = data_removeEnter[i].split(':');
      var newWords = document.createElement('tr');
      newWords.style.cursor="pointer";
      word_list.appendChild(newWords);
      var word = document.createElement('td');
      word.innerHTML = data_split[0] + '<input type="text" name="q[]" value="' + data_split[0] + '" style="display:none"/>';
      var mean = document.createElement('td');
      mean.innerHTML = data_split[1] + '<input type="text" name="a[]" value="' + data_split[1] + '" style="display:none"/>';
      newWords.appendChild(word);
      newWords.appendChild(mean);
      newWords.onclick = function() {
        var parent = this.parentElement;
        parent.removeChild(this);
      }
    }
  }
  data = "";
}
// 새 단어 저장
function saveAsFile() {
  var filename = "output.txt";
  var values = document.querySelectorAll("td");
  var str = "";
  for(var i = 0 ; i < values.length ; i += 2) {
    str += values[i].innerHTML + ":";
    str += values[i+1].innerHTML + "\n";
  }
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
  hiddenElement.target = '_blank';
  hiddenElement.download = filename;
  hiddenElement.click();
}

/*
 *
 * footer
 *
 */
// var test = document.getElementById('test');
// test.onclick = function() {
//   var values = document.querySelectorAll("td");
//   if(values.length > 0) {
//
//     // location.href = "voca_test.html";
//   } else {
//     alert("테스트하기 위한 단어가 없습니다!", false);
//   }
// }
function isWordBlank() {
  var values = document.querySelectorAll("td");
  if(values.length === 0) {
    alert("테스트하기 위한 단어가 없습니다!");
    return false;
  }
  return true;
}
