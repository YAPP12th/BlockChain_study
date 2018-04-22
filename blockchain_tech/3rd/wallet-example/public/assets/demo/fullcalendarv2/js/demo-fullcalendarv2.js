    $(document).ready(function() {
                var currentTimezone = false;
                $.getJSON('json/timezone.json', function(timezones) {
                   // console.log(timezones);
                    $.each(timezones, function(i, timezone) {
                        if (timezone != 'UTC') { // UTC is already in the list
                            $('#timezone-selector').append(
                            $("<option/>").text(timezone).attr('value', timezone)
                        );
                        }
                    });
                });
                $('#timezone-selector').on('change', function() {
                    currentTimezone = this.value || false;
                    $('#calendar').fullCalendar('destroy');
                    renderCalendar();
                });

                function renderCalendar() {
                    $('#calendar').fullCalendar({
                        header: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'month,agendaWeek,agendaDay'
                        },
                        defaultDate: '2016-01-12',
                        timezone: currentTimezone,
                        editable: true,
                        selectable: true,
                        eventLimit: true, // allow "more" link when too many events
                        events: {
                            url: 'json/get-timezone-event.json',
                            error: function() {
                                $('#script-warning').show();
                            }
                            
                        },
                        loading: function(bool) {
                            $('#loading').toggle(bool);
                        },
                        eventRender: function(event, el) {
                            // render the timezone offset below the event title
                            if (event.start.hasZone()) {
                                el.find('.fc-title').after(
                                $('<div class="tzo"/>').text(event.start.format('Z'))
                            );
                            }
                        },
                        dayClick: function(date) {
                            console.log('dayClick', date.format());
                        },
                        select: function(startDate, endDate) {
                            console.log('select', startDate.format(), endDate.format());
                        }
                    });
                }

                renderCalendar();
                
                
                
		$('#external-events .fc-event').each(function() {

			// store data so the calendar knows to render an event upon drop
			/*$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});*/


        // Different colors for events
        $(this).css({'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color')});

        // Store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).html()), // use the element's text as the event title
            color: $(this).data('color'),
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // Make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 // original position after the drag
        });

		});
                $('#calendar2').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function() {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			}
		});
                $('#calendar3').fullCalendar({

			// THIS KEY WON'T WORK IN PRODUCTION!!!
			// To make your own Google API key, follow the directions here:
			// http://fullcalendar.io/docs/google_calendar/
			googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
		
			// US Holidays
			events: 'usa__en@holiday.calendar.google.com',
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				$('#loading3').toggle(bool);
			}
			
		});
            });