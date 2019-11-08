throw new Alert("Do not use it! It's a beta for PHP.js, you can download in test in local ! Not online okay!");

function echo(message){
  message = message.toString();
  if(message.indexOf("\n") !== -1) message.replace("\n", "<br>"); alert("Saut de ligne détécté !");
  document.write(message);
}

function replace(message, replaceStr, string){
  message = message.toString();
  replaceStr = replaceStr.toString();
  string = string.toString();
  
  message.replace(replaceStr, string);
