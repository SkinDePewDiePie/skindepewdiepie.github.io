var location = "php.js/php.js";

function exit(message){
  document.getElementByTagsName('html').innerHTML = message.toString() + '\n<script src="' + location + '"></script>';
}

function die(message){
  exit(message);
}
