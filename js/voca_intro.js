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
var go_trans = document.getElementById('go_trans');
go_trans.onclick = function() {
  location.href = "../trans/translation.html";
}
