<?php

require_once ('vendor/autoload.php');
use \Statickidz\GoogleTranslate;

$source = 'en';
$target = 'ko';
if ($_POST['output'] !== ""){
  $text = $_POST['output'];
} else {
  $text = $_POST['input'];
}

$trans = new GoogleTranslate();
$result = $trans->translate($source, $target, $text);

echo $result;

?>
