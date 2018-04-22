$(function () {
		$('.tokenfield-email')
		.on('beforeCreateToken', function (e) {
			var token = e.token.value.split('|')
			e.token.value = token[1] || token[0]
			e.token.label = token[1] ? token[0] + ' (' + token[1] + ')' : token[0]
		})
		.on('afterCreateToken', function (e) {
				// Über-simplistic e-mail validation
				var re = /\S+@\S+\.\S+/
				var valid = re.test(e.token.value)
				if (!valid) {
					$(e.relatedTarget).addClass('invalid')
				}
			})
		.on('beforeEditToken', function (e) {
			if (e.token.label !== e.token.value) {
				var label = e.token.label.split(' (')
					e.token.value = label[0] + '|' + e.token.value
				}
			})
		.on('removeToken', function (e) {
			alert('Token removed! Token value was: ' + e.token.value)
		})
		.on('preventDuplicateToken', function (e) {
			alert('Duplicate detected! Token value is: ' + e.token.value)
		})
		.tokenfield();



	$('.show-next-formgroup').click(function() {
		$(this).closest('.form-group').next().toggle();
	});


	$('.composer').summernote({
		height: 350
	});
});