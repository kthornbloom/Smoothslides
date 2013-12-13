#Smoothslides
A simple, lightweight, and responsive jQuery slideshow by <a href="http://kthornbloom.com" target="_blank">Kevin Thornbloom</a> that features Ken Burns type animations.

<b>New- Added user customizable settings along with pan up & pan down effects</b>

##Demo
http://kthornbloom.com/smoothslides

##Features

- Lightweight [6Kb]
- Four Animation Types: Zoom In, Zoom Out, Pan Left, Pan Right, Pan Up, Pan Down
- Easily add captions
- CSS3 transitions for smoother effects
- Responsive image sizes
- Set various defaults

##Usage
- Include smoothslides.css in the header
- Include jQuery and smoothslides.min.js in the footer
- Create a div with a class of "ss-slides". Create each slide within as a div called "ss-slide" and place your image inside. Images should be the same size. 
- Want a caption? Add a title attribute to your "ss-slide" div.
- Call your script:
`````javascript
<script type="text/javascript">
	$(window).load( function() {
	$(document).smoothSlides();
});
`````

- Or, to specify options, call your script like this: 
`````javascript
<script type="text/javascript">
$(window).load( function() {
    $(document).smoothSlides({
    	/* milliseconds */
    	playTimer: 4000,
    	/* CSS easing type */
		animEasing: 'ease-in-out',
		/* Options are: none, random, zoomIn, zoomOut, panLeft, panRight, panUp, panDown */
		autoanimType: 'random',
		nextText: 'Next',
		prevText: 'Prev',
		captions: 'true',
		navigation: 'true'
    });
});
</script>
`````


##Browser Support
- Full support: Chrome, Safari, Firefox (16+), Internet Explorer (9+)
- Supported without transitions: Internet Explorer 7-8, Firefox (-16)
- Unsupported: Internet Explorer 6

		

##Licensing
Free to use and modify personally or commercially. Not for resale. 

##Help & Feedback
Connect with me on <a href="https://twitter.com/kthornbloom" target="_blank">twitter.</a>

