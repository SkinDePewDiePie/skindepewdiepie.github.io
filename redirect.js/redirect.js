function RJS_GET(parameter){
	var redirect = {};
	window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(m, key, value){
		redirect[key] = value !== undefined ? value : '';
	});

	if(redirect){
		for(var i = 1; i == 1; i++){
			return redirect[parameter] ? redirect[parameter] : document.location.href;
		}	
	}

	return redirect;
}
