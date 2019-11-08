function echo(message){
  message = message.toString();
  if(message.indexOf("\n") !== -1) message.replace("\n", "<br>"); alert("Saut de ligne détécté !");
  document.write(message);
}
