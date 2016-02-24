var u = require('com/u');

function controller() {
  this.filterText = m.prop("");

  modal = function(content,valor) {
  	return [
		m('.col-md-3',[
			m('h4',content),
			m('p',
				m('span',valor)
			)
		])
  	];
  };
  check_palindrome = function(content) {
  	ma = content.toLocaleLowerCase();
  	temp_string = "";
  	for (var i = content.length - 1; i >= 0; i--) {
  		temp_string += content.toLocaleLowerCase().substr(i,1);
  	}
  	if (temp_string === ma) {
	  	return "is a palindrome";
  	} else {
  		return "is not a palindrome";
  	}
  };
	this.palindrome = function() {
		word_to_check = text_tempo.value;
		this.valores = [];
		this.valores.push(modal(check_palindrome(word_to_check),word_to_check));
	}.bind(this);
}

function view(ctrl) {
  var rows = [];
  

  return INCLUDE('about/about.tpl');
}

exports.label = 'cidades';
exports.controller = controller;
exports.view = view;