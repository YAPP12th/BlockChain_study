    
                function updateControls(addressComponents) {
                    $('#us5-street1').val(addressComponents.addressLine1);
                    $('#us5-city').val(addressComponents.city);
                    $('#us5-state').val(addressComponents.stateOrProvince);
                    $('#us5-zip').val(addressComponents.postalCode);
                    $('#us5-country').val(addressComponents.country);
                }
                $('#us5').locationpicker({
                    location: {latitude: 42.00, longitude: -73.82480799999996},
                    radius: 300,
                    onchanged: function (currentLocation, radius, isMarkerDropped) {
                        var addressComponents = $(this).locationpicker('map').location.addressComponents;
                        updateControls(addressComponents);
                    },
                    oninitialized: function(component) {
                        var addressComponents = $(component).locationpicker('map').location.addressComponents;
                        updateControls(addressComponents);
                    }
                });
                $('#us1').locationpicker({
            location: {latitude: 46.15242437752303, longitude: 2.7470703125},
            radius: 300
        });
                $('#us2').locationpicker({
            location: {latitude: 46.15242437752303, longitude: 2.7470703125},
            radius: 300,
            inputBinding: {
                latitudeInput: $('#us2-lat'),
                longitudeInput: $('#us2-lon'),
                radiusInput: $('#us2-radius'),
                locationNameInput: $('#us2-address')
            },
            enableAutocomplete: true
        });
                $('#us3').locationpicker({
                location: {latitude: 46.15242437752303, longitude: 2.7470703125},
                radius: 300,
                inputBinding: {
                    latitudeInput: $('#us3-lat'),
                    longitudeInput: $('#us3-lon'),
                    radiusInput: $('#us3-radius'),
                    locationNameInput: $('#us3-address')
                },
                enableAutocomplete: true,
                onchanged: function (currentLocation, radius, isMarkerDropped) {
                    alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
                }
            });
                $('#us4').locationpicker({
                    location: {latitude: 46.15242437752303, longitude: 2.7470703125},
                    radius: 300,
                    onchanged: function (currentLocation, radius, isMarkerDropped) {
                        var mapContext = $(this).locationpicker('map');
                        mapContext.map.setZoom(13);
                    }
                });