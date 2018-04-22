# jQuery Font Awesome Modal Loading

Simple jQuery plugin to add modal loading using Font Awesome spin icons.

Any of the Font Awesome spin icons can be used: https://fortawesome.github.io/Font-Awesome/icons/#spinner

Very simple and ugly demo page: http://alemonteiro.com.br/demos/fa-loading

## Usage

```
	var $el = $("body"); // or any relative, absolut or fixed positioned element
	// To add default loading
	$el.faLoading();
	
	// To remove loading
	$el.faLoading(false);
	// or
	$el.faLoading('remove');
	
	// Setting the loading icon
	$("body").faLoading('fa-spinner');
	
	// To change the default icon for all loadings
	$.faLoadingDefaultIcon = 'fa-cog';
	
```

## CSS Customization

To change background and icon color you can override those css rules

```
.fa-loading-bg 
{
    background: rgba(0, 0, 0, 0.6); // modal background
}
.fa-loading-icon-wrapper .fa-loading-icon
{
    color: #000; // icon color
	font-size: 5em; // icon size 
	margin-top: -2.5em; // must be -50% of the font-size so it'll be always vertically centered
}
```

## Notes

It only works for elements that have relative, absolute, fixed or sticky positioning.


## Browser Compatibility

Tested ok on Firefox 45, Chrome 47 and Internet Explorer 11

## Changelog

V 0.2; Remove unnecessary methods and focused "all" functionality on 'faLoading' for better jQuery standarts