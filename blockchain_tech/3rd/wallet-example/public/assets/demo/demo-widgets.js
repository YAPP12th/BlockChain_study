//Switchery

	//Code to call switchery on all checkboxes with js-switch class
	//var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
	//elems.forEach(function(html) {
	//  var switchery = new Switchery(html);
	//});
 
	//But, we are going to call individually to set different colors;
	Switchery(document.querySelector('.sm .js-switch-primary'), {color: Utility.getBrandColor('primary')});
	Switchery(document.querySelector('.sm .js-switch-success'), {color: Utility.getBrandColor('success')});
	Switchery(document.querySelector('.sm .js-switch-warning'), {color: Utility.getBrandColor('warning')});
	Switchery(document.querySelector('.sm .js-switch-info'), {color: Utility.getBrandColor('info')});
	Switchery(document.querySelector('.sm .js-switch-danger'), {color: Utility.getBrandColor('danger')});
	Switchery(document.querySelector('.sm .js-switch-inverse'), {color: Utility.getBrandColor('inverse')});