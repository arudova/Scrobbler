var title_selectors = {
	'www.youtube.com': '.watch-title',
	'www.vimeo.com': '.baba',

};

function get_info_from_title() {
	var host = location.hostname;
	var title = document.querySelector(title_selectors[host]).innerText;
	var match = title.match(/([\w\s]+)-([\w\s]+)/);

	return {
		'artist': match[1],
		'title': match[2]
	}
}

function send_data() {
	var data = get_info_from_title();

	console.log(data);
}

window.addEventListener('load', send_data);