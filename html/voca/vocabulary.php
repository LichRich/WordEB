<?php

  $fileName = $_POST['fileName'];
  $voca = $_POST['voca'];
  $arr_voca = [];
  if(strpos($voca, "\n") !== false) {
    $arr_voca = explode("\n", $voca);
  } else {
    $arr_voca = [$voca];
  }

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../../css/common.css">
  <link rel="stylesheet" href="../../css/vocabulary.css">
  <title>Vocabulary</title>
  <style>
    body {
      background-color: #89FF82;
    }
  </style>
</head>
<body>

  <div class="container">

    <form action="../../php/voca_test.php#0" method="post" onsubmit="return isWordBlank();">

      <header>
        <div id="div_logo">
          <img src="../../logo.png" alt="noLogo" id="logo">
        </div>
        <div id="div_title">Back to Vocabularies</div>
        <div id="div_right"></div>
      </header>

      <section id="section_vocabulary" class="sections">
        <div class="left">
          <textarea id="txt_newVoca" rows="8"  style="resize:none;"></textarea>
          <div class="voca_buttons">
            <button type="button" class="btns" id="add_voca" onclick="registerWords()">새 단어 추가</button>
          </div>
        </div>
        <div class="right">
          <div class="box_wordList">
            <table id="word_list">
              <tr>
                <th>단어</th>
                <th>의미</th>
              </tr>
            </table>
          </div>
          <div class="voca_buttons">
            <button type="button" class="btns" id="save_voca" onclick="saveAsFile(<?=$fileName?>)">단어장 저장</button>
          </div>
        </div>
      </section>
      <footer>
        <button class="btns footer_go" id="test" type="submit">TEST</button>
      </footer>

    </form>


  </div>

  <script src="../../js/vocabulary.js"></script>
  <script>
    let word_list = document.getElementById('word_list');
    if(<?=count($arr_voca)?> > 0) {
      var items = <?=json_encode($arr_voca)?>;
      console.log(items);
      for(var item of items) {
        if(item.includes(':')) {
          var data_split = item.split(':');
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
  </script>
</body>
</html>
