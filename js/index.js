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
 var go_trans = document.getElementById('go_trans');
 go_trans.onclick = function() {
     location.href = "trans/translation.html";
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
