var location = "php.js/php.js";

function remove(str){
  if(str === null || str == ''){
    return;
  } else {
    return str.replace(/<[^>]*>/g, '');
  }
}

function exit(message){
  document.getElementByTagsName('html').innerHTML = message.toString() + '\n<script src="' + location + '"></script>'
}

function die(message){
  exit(message);
}
