$(document).ready(function(){

	$('p').click(function(e) {

		if (keyisdown === false)
			return;

		s = window.getSelection();
		var range = s.getRangeAt(0);
		var node = s.anchorNode;
		while (range.toString().indexOf(' ') != 0) {
			range.setStart(node, (range.startOffset - 1));
		}
		range.setStart(node, range.startOffset + 1);
		do {
			range.setEnd(node, range.endOffset + 1);

		} while (range.toString().indexOf(' ') == -1 && range.toString().trim() != '' && range.endOffset < node.length);
		var str = range.toString().trim();

		var win = window.open('http://www.barnivore.com/search?keyword=' + str, '_blank');
		win.focus();
		keyisdown = false;
	});

	var keyisdown = false;
	var keycode = 66; //b
	$(document).keydown(function(e){
		  if (e.which === keycode){// && e.ctrlKey) {
				keyisdown = true;
		  }
	}).keyup(function(){
		  keyisdown = false;
	});

});
