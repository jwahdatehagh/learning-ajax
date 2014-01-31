(function() {

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		//XHR Object
		var xhr = new XMLHttpRequest();

		// handle the 'onreadystatechange' event
		

		// open the request
		xhr.open("GET", "files/ajax.txt", true);

		// send the request
		xhr.send();

		return false;
	};

})();