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
  const form = document.querySelector('form');
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
      word.textContent = data_split[0];
      var hiddenword = document.createElement('td');
      hiddenword.innerHTML = '<input type="hidden" name="q[]" value="' + data_split[0] + '">'
      var mean = document.createElement('td');
      mean.textContent = data_split[1];
      var hiddenMean = document.createElement('td');
      hiddenMean.innerHTML = '<input type="hidden" name="a[]" value="' + data_split[1] + '">';
      newWords.appendChild(word);
      newWords.appendChild(mean);
      newWords.appendChild(hiddenword);
      newWords.appendChild(hiddenMean);
      newWords.onclick = function() {
        var parent = this.parentElement;
        parent.removeChild(this);
      }
    }
  }
}
// 새 단어 저장
function saveAsFile() {
  var filename = "output.txt";
  var values = document.querySelectorAll("td");
  var str = "";
  for(var i = 0 ; i < values.length ; i += 2) {
    str += values[i].textContent + ":";
    if(i+1 === values.length-1) str += values[i+1].textContent;
    else str += values[i+1].textContent + "\n";
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
function isWordBlank() {
  var values = document.querySelectorAll("td");
  if(values.length === 0) {
    alert("테스트하기 위한 단어가 없습니다!");
    return false;
  }
  return true;
}
