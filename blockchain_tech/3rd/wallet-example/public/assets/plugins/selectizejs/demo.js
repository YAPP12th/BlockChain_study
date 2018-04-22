$(document).ready(function(){
	 $('.input-tags').selectize({
                                        plugins: ['remove_button'],
                                        persist: false,
                                        create: true,
                                        render: {
                                            item: function(data, escape) {
                                                return '<div>"' + escape(data.text) + '"</div>';
                                            }
                                        },
                                        onDelete: function(values) {
                                            return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
                                        }
                                    });
var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
                  '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

$('#select-to').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    labelField: 'name',
    searchField: ['name', 'email'],
    options: [
        {email: 'brian@thirdroute.com', name: 'Brian Reavis'},
        {email: 'nikola@tesla.com', name: 'Nikola Tesla'},
        {email: 'someone@gmail.com', name: 'Jami Hudson'}
    ],
    render: {
        item: function(item, escape) {
            return '<div>' +
                (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
            '</div>';
        },
        option: function(item, escape) {
            var label = item.name || item.email;
            var caption = item.name ? item.email : null;
            return '<div>' +
                '<span class="label">   ' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
            '</div>';
        }
    },
    createFilter: function(input) {
        var match, regex;

        // email@address.com
        regex = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        match = input.match(regex);
        if (match) return !this.options.hasOwnProperty(match[0]);

        // name <email@address.com>
        regex = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        match = input.match(regex);
        if (match) return !this.options.hasOwnProperty(match[2]);

        return false;
    },
    create: function(input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return {email: input};
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            return {
                email : match[2],
                name  : $.trim(match[1])
            };
        }
        alert('Invalid email address.');
        return false;
    }
});


$('#select-repo').selectize({
    valueField: 'url',
    labelField: 'name',
    searchField: 'name',
    create: false,
    render: {
        option: function(item, escape) {
            return '<div>' +
                '<span class="title">' +
                    '<span class="name"><i class="ion-social-buffer pr-sm ' + (item.fork ? 'fork' : 'source') + '"></i>' + escape(item.name) + '</span>' +
                    '<span class="by pl-sm">' + escape(item.username) + '</span>' +
                '</span>' +
                '<span class="description">' + escape(item.description) + '</span>' +
                '<ul class="meta list-unstyled list-inline m-n">' +
                    (item.language ? '<li class="language">' + escape(item.language) + '</li>' : '') +
                    '<li class="watchers"><span>' + escape(item.watchers) + '</span> watchers</li>' +
                    '<li class="forks"><span>' + escape(item.forks) + '</span> forks</li>' +
                '</ul>' +
            '</div>';
        }
    },
    score: function(search) {
        var score = this.getScoreFunction(search);
        return function(item) {
            return score(item) * (1 + Math.min(item.watchers / 100, 1));
        };
    },
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'https://api.github.com/legacy/repos/search/' + encodeURIComponent(query),
            type: 'GET',
            error: function() {
                callback();
            },
            success: function(res) {
                callback(res.repositories.slice(0, 10));
            }
        });
    }
});


	  $('.demo-code-language').selectize({
                                        sortField: 'text',
                                        hideSelected: false,
                                        plugins: {
                                            'dropdown_header': {
                                                title: 'Language'
                                            }
                                        }
                                    });

	  $('#input-tags6').selectize({
                                        plugins: ['restore_on_backspace'],
                                        persist: false,
                                        create: true
                                    });

	   $('.input-sortable').selectize({
                                        plugins: ['drag_drop'],
                                        persist: false,
                                        create: true
                                    });


})