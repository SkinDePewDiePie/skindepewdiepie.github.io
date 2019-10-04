function RJS_GET(parameter){
	var redirect = {};
	window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(m, key, value){
		redirect[key] = value !== undefined ? value : '';
	});

	if(redirect){
		return redirect[parameter] ? redirect[parameter] : document.location.href;	
	}

	return redirect;
}
