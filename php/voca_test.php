<?php
$questions = $_POST['q'];
$answers = $_POST['a'];

$q_len = count($questions);
$a_len = count($answers);

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/common.css">
  <link rel="stylesheet" href="../css/voca_test.css">
  <title>voca_test</title>
  <style media="screen">
    body {
      background-color: #89FF82;
    }
  </style>
</head>
<body>

  <div class="container">

    <header>
      <div id="div_logo">
        <img src="../logo.png" alt="noLogo" id="logo">
      </div>
      <div id="div_title">My Vocabularies</div>
      <div id="div_right"></div>
    </header>

    <section class="sections">
      <div class="question" id="question"></div>
      <div class="answer">
        <input type="text" id="txt_answer" name="txt_answer">
        <div id="div_right"></div>
        <button class="btns" type="submit" id="answer_check" name="answer_check">다음</button>
      </div>
    </section>
    <footer><div class="footer_go" id="go_voca">나가기</div></footer>
  </div>

  <script src="../js/voca_test.js"></script>
  <script>
    var questions = <?php echo json_encode($questions) ?>;
    var len = <?=$q_len?>;
    var answers = <?php echo json_encode($answers) ?>;
    var used = [];
    var point = 100;
    var num = randomNum();

    for(var i = 0 ; i < len ; i++) {
      used[i] = false;
    }

    function init(q, a) {
      questions.push(q);
      answers.push(a);
    }

    function randomNum() {
      var random = Math.floor(Math.random() * questions.length);
      return random;
    }
    function makeQ() {
      var div_q = document.getElementById('question');
      while(used[num]){
        num = randomNum();
      }
      div_q.innerHTML = questions[num];
    }
    function checkAnswer(answer) {
      used[num] = true;
      var wrong_alert = questions[num]+":"+answers[num];
      if(answer !== "" && answers[num].indexOf(answer) !== -1) {
        alert("정답입니다!");
      } else {
        point -= 100/questions.length;
        alert("틀렸습니다. " + wrong_alert);
      }
      if(used.includes(false)) {
        makeQ();
      } else {
        questionEnd();
      }
    }
    function questionEnd() {
      alert("테스트 종료. 점수: " + point + "점");
      history.back();
    }
    window.onload = makeQ();
    var btn_next = document.getElementById('answer_check');
    var answer = document.getElementById('txt_answer').value;
    btn_next.onclick = function() {
      checkAnswer(answer);
    }
  </script>

</body>
</html>
