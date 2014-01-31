(function() {

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		//XHR Object
		var xhr = new XMLHttpRequest();

		// handle the 'onreadystatechange' event
		// xhr.readyState property values
		// 0 = uninitialized
		// 1 = loading
		// 2 = loaded
		// 3 = interactive
		// 4 = complete

		xhr.onreadystatechange = function() {
			if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {		
				var body = document.getElementsByTagName("body")[0];

				var json = JSON.parse(xhr.responseText);

				var heading = json.heading;
				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);
				body.appendChild(h2);

				var list = document.createElement("ul");
				var items = json.items;

				for (var key in items) {
					var item = items[key];
					var li = document.createElement("li");
					var liText = document.createTextNode(item);

					li.appendChild(liText);
					list.appendChild(li);
				}
				body.appendChild(list);


				body.removeChild(link);
			}
		};

		// open the request
		xhr.open("GET", "files/ajax.json", true);

		// send the request
		xhr.send(null);

		return false;
	};

})();