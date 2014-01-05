#Smoothslides
A responsive jQuery slideshow with beautiful panning effects on each image. Created by <a href="https://twitter.com/kthornbloom" target="_blank">Kevin Thornbloom</a>
##Demo
<a href="http://kthornbloom.com/smoothslides.php" target="_blank">Demo Page</a>
##Usage
###Include CSS in header
```
<link rel="stylesheet" href="css/smoothslides.theme.css">
```
###Include JS in footer (after loading jQuery)
```
<script type="text/javascript" src="js/smoothslides.min.js"></script>
	<script type="text/javascript">
		$(window).load( function() {
			$(document).smoothSlides({
			playTimer: 4000
			/* options seperated by commas */
			});
		});
	</script>
```
###Add HTML Markup for slides
```
<div class="ss-slides">
    <div class="ss-slide">
        <img src="images/1.jpg" />
    </div>
    <div class="ss-slide" title="Caption">
        <img src="images/2.jpg" />
    </div>
</div>
```
<i>Note- to add a caption, put a title on that slide's div.</i>

##Options
<table class="rwd-table">
	<tbody><tr>
		<td><b>Option</b></td>
		<td><b>Description</b></td>
		<td><b>Values</b></td>
	</tr>
	<tr>
		<td>playTimer</td>
		<td>Time (in milliseconds) each slide is visible for</td>
		<td>3000</td>
	</tr>
	<tr>
		<td>order</td>
		<td>How to order the slides</td>
		<td>'normal' , 'reverse' or 'random'</td>
	</tr>
	<tr>
		<td>animEasing</td>
		<td>CSS3 easing type for animations</td>
		<td>'ease-in-out'</td>
	</tr>
	<tr>
		<td>nextText</td>
		<td>Text for the next button</td>
		<td>'›'</td>
	</tr>
	<tr>
		<td>prevText</td>
		<td>Text for the previous button</td>
		<td>'‹'</td>
	</tr>
	<tr>
		<td>captions</td>
		<td>Show captions?</td>
		<td>'true' or 'false'</td>
	</tr>
	<tr>
		<td>navigation</td>
		<td>Show Next/Prev buttons?</td>
		<td>'true' or 'false'</td>
	</tr>
	<tr>
		<td>pagination</td>
		<td>Show dots representing slides?</td>
		<td>'true' or 'false'</td>
	</tr>
	<tr>
		<td>autoanimType</td>
		<td>Animation to be used while automatically playing</td>
		<td>'random', 'zoomIn', 'zoomOut', 'panLeft', 'panRight', 'panUp', 'panDown', 'crossFade','none'</td>
	</tr>
</tbody></table>

##Licensing
Free to use and modify personally or commercially. Not for resale. 

##Help & Feedback
Connect with me on <a href="https://twitter.com/kthornbloom" target="_blank">twitter.</a>

