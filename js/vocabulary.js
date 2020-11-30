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
    location.href = "../../html/voca/voca_list.html";
}

/*
 *
 * sections
 *
 */
// 새 단어 추가
// function saveToFile(fileName, content) {
//     var blob = new Blob([content], { type: 'text/plain' });
//     objURL = window.URL.createObjectURL(blob);
//
//     // 이전에 생성된 메모리 해제
//     if (window.__Xr_objURL_forCreatingFile__) {
//         window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
//     }
//     window.__Xr_objURL_forCreatingFile__ = objURL;
//     var a = document.createElement('a');
//     a.download = fileName;
//     a.href = objURL;
//     a.click();
// }
function saveAsFile(str, filename) {
  var filename = "output.txt";
  var str = document.getElementById("txt_newVoca").value;
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
var test = document.getElementById('test');
test.onclick = function() {
    location.href = "voca_test.html";
}
