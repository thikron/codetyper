function codetyper() {
	var current_codewrite_name;
	var codetyperLevel;
	Reveal.addEventListener('slidechanged', function (event) {
		current_codewrite_name = event.currentSlide.dataset.codetypername;
		codetyperLevel = 0;
	});
	document.getElementsByTagName("body")[0].addEventListener('keypress', function (event) {
		if (event.keyCode === 13) {
			start_codewriter(current_codewrite_name);
		}
	});

	function start_codewriter(name) {
		var codetypers = document.getElementsByClassName("codetyper");
		var correct_typer;
		for (var typer = 0; typer < codetypers.length; typer++) {
			if (codetypers[typer].dataset.codetypername === undefined) {
				console.error("codetyper with name '" + name + "' is not found.");
			}
			if (codetypers[typer].dataset.codetypername === name) {
				correct_typer = codetypers[typer];
				break;
			}
		}
		if (correct_typer) {
			var code_at_index;
			var codetyper_codes = correct_typer.getElementsByClassName("codetyper-code");
			if (codetyper_codes.length === 0) {
				return;
			}
			if (codetyper_codes.length === 1) {
				code_at_index = codetyper_codes[0];
				codetyperLevel = 0;
			} else {
				for (var code_index = 0; code_index < codetyper_codes.length; code_index++) {
					if (parseInt(codetyper_codes[code_index].dataset.codetyperlevel, 10) === codetyperLevel) {
						code_at_index = codetyper_codes[code_index];
						break;
					} else if (codetyperLevel === codetyper_codes.length) {
						codetyperLevel = 0;
					}
				}
			}
			if (code_at_index === undefined) {
				console.error("No code found on slide for codetyper.");
				return;
			}
			var output = correct_typer.getElementsByClassName("codetyper-output")[0];
			var next = 0;
			if (codetyperLevel === 0) {
				output.innerHTML = "";
			} else {
				output.innerHTML += "\n";
			}
			var text_to_write = code_at_index.innerHTML.trim();
			function writeNext() {
				if (next < text_to_write.length) {
					output.innerHTML += text_to_write[next];
					next++;
					setTimeout(writeNext, 50);
				} else {
					codetyperLevel++;
				}
			}
			writeNext();
		}
	}
}
