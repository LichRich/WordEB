<?php
$questions = $_POST['q'];
$answers = $_POST['a'];

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
      <div class="question"></div>
      <div class="answer">
        <input type="text" id="txt_answer" name="txt_answer">
        <div id="div_right"></div>
        <button class="btns" type="submit" id="answer_check" name="answer_check">다음</button>
      </div>
    </section>
    <footer><div class="footer_go" id="go_voca">나가기</div></footer>
  </div>

  <script src="../../js/voca_test.js"></script>

</body>
</html>