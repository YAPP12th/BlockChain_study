 var select = document.getElementById('input-select');

                                    // Append the option elements
                                    for ( var i = -20; i <= 40; i++ ){

                                        var option = document.createElement("option");
                                        option.text = i;
                                        option.value = i;

                                        select.appendChild(option);
                                    }
                                    
                                    
                                    
                                      var html5Slider = document.getElementById('html5');

                                    noUiSlider.create(html5Slider, {
                                        start: [ 10, 30 ],
                                        connect: true,
                                        range: {
                                            'min': -20,
                                            'max': 40
                                        }
                                    });
                             
                             
                             var inputNumber = document.getElementById('input-number');

                                    html5Slider.noUiSlider.on('update', function( values, handle ) {

                                        var value = values[handle];

                                        if ( handle ) {
                                            inputNumber.value = value;
                                        } else {
                                            select.value = Math.round(value);
                                        }
                                    });

                                    select.addEventListener('change', function(){
                                        html5Slider.noUiSlider.set([this.value, null]);
                                    });

                                    inputNumber.addEventListener('change', function(){
                                        html5Slider.noUiSlider.set([null, this.value]);
                                    });
                                    
                                    
                                    var nonLinearSlider = document.getElementById('nonlinear');

                                    noUiSlider.create(nonLinearSlider, {
                                        connect: true,
                                        behaviour: 'tap',
                                        start: [ 500, 4000 ],
                                        range: {
                                            // Starting at 500, step the value by 500,
                                            // until 4000 is reached. From there, step by 1000.
                                            'min': [ 0 ],
                                            '10%': [ 500, 500 ],
                                            '50%': [ 4000, 1000 ],
                                            'max': [ 10000 ]
                                        }
                                    });
                                    
                                    
                                          // Write the CSS 'left' value to a span.
                                    function leftValue ( handle ) {
                                        return handle.parentElement.style.left;
                                    }

                                    var lowerValue = document.getElementById('lower-value'),
                                    lowerOffset = document.getElementById('lower-offset'),
                                    upperValue = document.getElementById('upper-value'),
                                    upperOffset = document.getElementById('upper-offset'),
                                    handles = nonLinearSlider.getElementsByClassName('noUi-handle');

                                    // Display the slider value and how far the handle moved
                                    // from the left edge of the slider.
                                    nonLinearSlider.noUiSlider.on('update', function ( values, handle ) {
                                        if ( !handle ) {
                                            lowerValue.innerHTML = values[handle] + ', ' + leftValue(handles[handle]);
                                        } else {
                                            upperValue.innerHTML = values[handle] + ', ' + leftValue(handles[handle]);
                                        }
                                    });
                                    
                                    
                                     var slider = document.getElementById('range');

                                    noUiSlider.create(slider, {
                                        start: [ 20, 80 ], // Handle start position
                                        step: 10, // Slider moves in increments of '10'
                                        margin: 20, // Handles must be more than '20' apart
                                        connect: true, // Display a colored bar between the handles
                                        direction: 'rtl', // Put '0' at the bottom of the slider
                                        orientation: 'vertical', // Orient the slider vertically
                                        behaviour: 'tap-drag', // Move handle on tap, bar is draggable
                                        range: { // Slider can select '0' to '100'
                                            'min': 0,
                                            'max': 100
                                        },
                                        pips: { // Show a scale with the slider
                                            mode: 'steps',
                                            density: 2
                                        }
                                    });
                                    
                                    
                                    var valueInput = document.getElementById('value-input'),
                                    valueSpan = document.getElementById('value-span');

                                    // When the slider value changes, update the input and span
                                    slider.noUiSlider.on('update', function( values, handle ) {
                                        if ( handle ) {
                                            valueInput.value = values[handle];
                                        } else {
                                            valueSpan.innerHTML = values[handle];
                                        }
                                    });

                                    // When the input changes, set the slider value
                                    valueInput.addEventListener('change', function(){
                                        slider.noUiSlider.set([null, this.value]);
                                    });