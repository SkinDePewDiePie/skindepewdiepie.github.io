var location = "php.js/php.js";

function remove(str){
  if(str === null || str == ''){
    return;
  } else {
    return str.replace(/<[^>]*>/g, '');
  }
}

function exit(message){
  remove(document.getElementByTagsName('html').innerHTML);
  document.write(message.toString());
  document.write('<script src="' + location + '"></script>');
}

function die(message){
  exit(message);
}
