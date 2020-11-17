
window.onload = function(){
  window.focus();
  window.moveTo(0,0);
  window.resizeTo(614,640);
  document.getElementById("logo").onclick=home;
  document.getElementById("remove").onclick=remover;
  document.getElementById("copy").onclick=copy;
  document.getElementById("reset").onclick=reset;
  document.getElementById("trans").onclick=trans;
}

function home() {
  location.href="../index.html"
}

function remover() {
  var input = document.getElementById('input');
  var texts = input.value.split("\n");
  var result = "";

  for (var i = 0 ; i < texts.length ; i++){
    if (i !== texts.length - 1) result += (texts[i] + " ");
    else result += texts[i];
  }

  var output = document.getElementById('output');
  output.value = result;
}

function reset() {
  window.location.reload();
}

function copy(){

  var clip = document.createElement('input');
  var target = document.getElementById('output').value;

  if (target==="") {
    alert("입력된 내용이 없습니다.", false);
  } else {
    clip.setAttribute("value", target);
    document.body.appendChild(clip);
    clip.select();
    document.execCommand("copy");
    document.body.removeChild(clip);
    alert("복사되었습니다.");
  }

}

function trans() {
  var input = document.getElementById('input');
  if(input.value==="") {
    alert("입력된 내용이 없습니다.", false);
  } else {
    const data = $("form").serialize();
    $.ajax({
      type:"POST",
      url:"../../php/papago_trans.php",
      data:data,
      success:function(args){
        $("#res_papago").html(args);
      },
      error:function(e){
        alert(e.responseText);
      }
    });
    $.ajax({
      type:"POST",
      url:"../../php/google_trans.php",
      data:data,
      success:function(args){
        $("#res_google").html(args);
      }, error:function(e){
        alert(e.responseText);
      }
    });
  }
}
